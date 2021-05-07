const fs = require('fs');
const esprima = require('esprima');
const utils = require('./utils');

const script = fs.readFileSync(__dirname + '/index.js', 'utf-8');
const ast = esprima.parseScript(script, { loc: true });

const consoleLogsArgs = utils.getAllConsoleLogLastArgs(ast);
const variablesDeclared = utils.getAll(ast, 'VariableDeclaration').map(
  (node) => {
    const decl = node.declarations[0];
    let initialValue;
    if (decl.init && (typeof decl.init === 'object') && decl.init.type === 'Literal') {
      initialValue = decl.init.value;
    } else {
      initialValue = decl.init;
    }
    return {
      kind: node.kind,
      name: decl.id.name,
      initialValue,
    };
  }
);

describe('JS Basics: Variables', () => {
  it('Una definicion con let', () => {
    const letVariables = variablesDeclared.filter((v) => v.kind === 'let');
    expect(letVariables.length).toBeGreaterThan(0);
  });
  it('Un console.log de una variable no inicializada', () => {
    const uninitVariableNames = variablesDeclared
      .filter((v) => !v.initialValue)
      .map((v) => v.name);

    const loggedUninitVariable = consoleLogsArgs.filter((arg) => (
      arg.type === 'Identifier' && uninitVariableNames.includes(arg.name)
    ));

    expect(loggedUninitVariable.length).toBeGreaterThan(0);
  });
  it('Una asignación', () => {
    const assignments = utils
      .getAll(ast, (node) => (
        node.type === 'ExpressionStatement'
        && node.expression.type === 'AssignmentExpression'
      ))
      .map((node => node.operator));
  
    expect(assignments.length).toBeGreaterThan(0);
  });
  it('Un console.log con una concatenación que utilice una variable', () => {
    // Todos los console.log que tengan como argumento por lo menos
    // una expression binaria
    let loggedBinaryExprs = consoleLogsArgs.filter((arg) => arg.type === 'BinaryExpression');
    loggedBinaryExprs = utils.getNestedBinaryExpressions(loggedBinaryExprs);

    // y que la expression sea concatenacion entre un string y una variable
    const concatWithVar = loggedBinaryExprs.filter((node) => (
      node.operator === '+'
      && (
        node.left.type === 'Identifier'
        || node.right.type === 'Identifier'
      )
    ));

    expect(concatWithVar.length).toBeGreaterThan(0);
  });
  it('Una operación aritmética sobre una variable y un console.log de la variable modificada', () => {
    // Todas las variables que hayan sigo modificadas
    // a traves de una operacion aritmetica
    const varsWithOperation = utils.getAll(ast.body)
      .filter((node) => {
        // tiene que ser una asignacion
        if (node.type === 'AssignmentExpression') {
          // si es una asignacion con operacion (-= += *= /=)
          if (node.operator !== '=') {
            // entonces es aritmetica
            return true;
          } else {
            // sino, necesitamos que a la derecha haya una expresion aritmetica;
            if (node.right.type === 'BinaryExpression') {
              return ['+', '-', '*', '/'].includes(node.right.operator)
            }
          }
        }
        // en cualquier otro caso
        return false;
      })
      .map((node) => ({
        name: node.left.name, // el nombre de la variable modificada (izq)
        line: node.loc.start.line,
      }));

      // Todas las variables que hayan sido console.loggeadas
      const loggedVars = utils.getNestedExpressions(consoleLogsArgs, 'Identifier')
        .map((arg) => ({
          name: arg.name,
          line: arg.loc.start.line
        }));
      
      const intersection = varsWithOperation
        // solo los nombres de las variables
        .map((v) => v.name)
        // todas las que esten en loggedVars
        .filter((v) => loggedVars.map((v2) => v2.name).includes(v))
        // quitamos repetidos
        .filter((value, index, self) =>  self.indexOf(value) === index);
   
      expect(intersection.length).toBeGreaterThan(0);
      
      // chequeamos que por lo menos una de las variables que han sido tanto
      // modificadas como loggeadas, primero hayan sido modificadas y luego
      // loggeadas
      const atLeastOneVarLoggedAfterOperation = intersection.reduce((result, v) => {
        const assignationLines = varsWithOperation
          .filter((v2) => v2.name === v)
          .map((v2) => v2.line);
        const firstAssigned = Math.min(...assignationLines);

        const logLines = loggedVars
          .filter((v2) => v2.name === v)
          .map((v2) => v2.line);
        
        const lastLogged = Math.max(...logLines);

        return result || firstAssigned < lastLogged;
      }, false);

      expect(atLeastOneVarLoggedAfterOperation).toBe(true);
      
  });
  it('Una definicion con const', () => {
    const constVariables = variablesDeclared.filter((v) => v.kind === 'const');
    expect(constVariables.length).toBeGreaterThan(0);
  });
});
