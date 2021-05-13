const fs = require('fs');
const esprima = require('esprima');
const { esprima: utils } = require('@laboratoria/prework-test-utils');

const script = fs.readFileSync(__dirname + '/index.js', 'utf-8');
const ast = esprima.parseScript(script);

const consoleLogsArgs = utils.getAllConsoleLogLastArgs(ast);

const binaryOperatorsUsed = utils.getNestedBinaryExpressions(consoleLogsArgs)
  .map((arg) => arg.operator);

describe('JS Basics: Booleans', () => {
  it('Un console.log de comparación <', () => {
    expect(binaryOperatorsUsed).toContain('<');
  });
  it('Un console.log de comparación <', () => {
    expect(binaryOperatorsUsed).toContain('>');
  });
  it('Un console.log de comparación ===', () => {
    expect(binaryOperatorsUsed).toContain('===');
  });
  it('Un console.log de comparación !==', () => {
    expect(binaryOperatorsUsed).toContain('!==');
  });
  it('Un typeof combinado con comparación', () => {
    const typeofBoolean = utils.getNestedUnaryExpressions(consoleLogsArgs)
      .filter((arg) => (
        arg.operator === 'typeof'
        && arg.argument.type === "BinaryExpression"
        && ['>', '<'].includes(arg.argument.operator)
      ));

    expect(typeofBoolean.length).toBeGreaterThan(0);
  });
  it('Un console.log de operaciones booleanas &&', () => {
    expect(binaryOperatorsUsed).toContain('&&');
  });
  it('Un console.log de operaciones booleanas ||', () => {
    expect(binaryOperatorsUsed).toContain('||');
  });
  it('Un console.log de operaciones booleanas !', () => {
    const unaryOperatorsUsed = consoleLogsArgs
      .filter((arg) => arg.type === 'UnaryExpression')
      .map((arg => arg.operator));

    expect(unaryOperatorsUsed).toContain('!');
  });
  it('Un console.log de operador ternario ?:', () => {
    const ternaryOperatorsUsed = utils
      .getNestedExpressions(consoleLogsArgs, 'ConditionalExpression');

    expect(ternaryOperatorsUsed.length).toBeGreaterThan(0);
  });
});
