const fs = require('fs');
const esprima = require('esprima');
const utils = require('../06-variables/utils');

const script = fs.readFileSync(__dirname + '/index.js', 'utf-8');
const astLocs = esprima.parseScript(script, { loc: true });
const ast = esprima.parseScript(script);

const functionExpressions = utils.getAll(ast.body, 'FunctionExpression');

describe('JS Basics: Functions', () => {
  it('Una definicion con const y ejecución', () => {
    // Primero buscamos todas las variables inicializadas con una funcion
    const constDefinedFuncs = utils.getAll(astLocs.body, 'VariableDeclaration')
      .filter((decl) => {
        const d = decl.declarations
          && decl.declarations.length
          && decl.declarations[0]
        return (
          decl.kind === 'const'
          && d.init
          && d.init.type === 'FunctionExpression'
        );
      })
      .map((decl) => ({
        name: decl.declarations[0].id.name,
        line: decl.loc.start.line,
      }));

    // ahora todas las funciones ejecutadas
    const executedFuncs = utils.getAll(astLocs.body, 'CallExpression')
      .filter((call) => call.callee && call.callee.type === 'Identifier')
      .map((call) => ({
        name: call.callee.name,
        line: call.loc.start.line,
      }));

    const intersection = constDefinedFuncs
      // solo los nombres de las variables
      .map((v) => v.name)
      // todas las que esten en loggedVars
      .filter((v) => executedFuncs.map((v2) => v2.name).includes(v))
      // quitamos repetidos
      .filter((value, index, self) =>  self.indexOf(value) === index);
 
    expect(intersection.length).toBeGreaterThan(0);
      
    // chequeamos que todas las funciones hayan sido definidas antes de
    // ser ejecutadas
    const allDefinedBeforeExecution = intersection.reduce((result, func) => {
      const definitionLines = constDefinedFuncs
        .filter((f) => f.name === func)
        .map((f) => f.line);
      const firstAssigned = Math.min(...definitionLines);

      const executionLines = executedFuncs
        .filter((f) => f.name === func)
        .map((f) => f.line);
      
      const fistExecuted = Math.min(...executionLines);

      return result && firstAssigned < fistExecuted;
    }, true);

    expect(allDefinedBeforeExecution).toBe(true);
  });
  it('Una función sin valor de retorno', () => {
    const noReturn = functionExpressions.filter((fDef) => utils.getAll(fDef.body, 'ReturnStatement').length === 0);
    expect(noReturn.length).toBeGreaterThan(0);
  });
  it('Una función con valor de retorno', () => {
    const withReturn = functionExpressions.filter((fDef) => utils.getAll(fDef.body, 'ReturnStatement').length > 0);
    expect(withReturn.length).toBeGreaterThan(0);
  });
  it('Una función sin parametros', () => {
    const noParams = functionExpressions.filter((f) => f.params.length === 0);
    expect(noParams.length).toBeGreaterThan(0);
  });
  it('Una función con múltiples parametros', () => {
    const multiParams = functionExpressions.filter((f) => f.params.length > 1);
    expect(multiParams.length).toBeGreaterThan(0);
  });
  it('Una funcion declarada', () => {
    const functionDeclarations = utils.getAll(ast.body, 'FunctionDeclaration');
    expect(functionDeclarations.length).toBeGreaterThan(0);
  });
});
