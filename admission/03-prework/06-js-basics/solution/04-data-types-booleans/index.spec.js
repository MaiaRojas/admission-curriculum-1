const fs = require('fs');
const esprima = require('esprima');
const utils = require('../06-variables/utils');

const script = fs.readFileSync(__dirname + '/index.js', 'utf-8');
const ast = esprima.parseScript(script, { comment: true });

const consoleLogsArgs = utils.getAllConsoleLogArgsLast(ast);

const binaryOperatorsUsed = consoleLogsArgs
  .filter((arg) => ['BinaryExpression', 'LogicalExpression'].includes(arg.type))
  .map((arg) => arg.operator);

describe('HTML Basics: Booleans', () => {
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
    const typeofBoolean = consoleLogsArgs.filter((arg) => (
      arg.type === 'UnaryExpression'
      && arg.operator === 'typeof'
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
    const ternaryOperatorsUsed = consoleLogsArgs
      .filter((arg) => arg.type === 'ConditionalExpression');

    expect(ternaryOperatorsUsed.length).toBeGreaterThan(0);
  });
});
