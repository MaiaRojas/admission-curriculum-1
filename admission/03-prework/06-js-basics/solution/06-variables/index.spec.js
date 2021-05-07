const fs = require('fs');
const esprima = require('esprima');
const utils = require('./utils');

const script = fs.readFileSync(__dirname + '/index.js', 'utf-8');
const ast = esprima.parseScript(script, { comment: true });

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

describe('HTML Basics: Variables', () => {
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

  });
  it('Una operación aritmética sobre una variable y un console.log de la variable modificada', () => {
  });
  it('Una definicion con const', () => {
    const constVariables = variablesDeclared.filter((v) => v.kind === 'const');
    expect(constVariables.length).toBeGreaterThan(0);
  });
});
