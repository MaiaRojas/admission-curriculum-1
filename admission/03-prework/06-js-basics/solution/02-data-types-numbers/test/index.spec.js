const fs = require('fs');
const esprima = require('esprima');
const { esprima: utils } = require('@laboratoria/prework-test-utils');

const script = fs.readFileSync(__dirname + '/../src/index.js', 'utf-8');
const ast = esprima.parseScript(script);

const consoleLogsArgs = utils.getAllConsoleLogLastArgs(ast);

const binaryOperatorsUsed = utils.getNestedBinaryExpressions(consoleLogsArgs)
  .map((arg) => arg.operator);

describe('JS Basics: Numbers', () => {
  it('Un console.log de un numero positivo', () => {
    const positiveNumbers = consoleLogsArgs.filter(
      (arg) => typeof arg.value === 'number'
    );
    expect(positiveNumbers.length).toBeGreaterThan(0);
  });
  it('Un console.log de un numero negativo', () => {
    const negativeNumbers = utils.getNestedUnaryExpressions(consoleLogsArgs)
      .filter((arg) => (
        arg.operator === '-'
        && typeof arg.argument.value === 'number'
      ));
    expect(negativeNumbers.length).toBeGreaterThan(0);
  });
  it('Un console.log de una operación aritmética `+`', () => {
    expect(binaryOperatorsUsed).toContain('+');
  });
  it('Un console.log de una operación aritmética `-`', () => {
    expect(binaryOperatorsUsed).toContain('-');
  });
  it('Un console.log de una operación aritmética `*`', () => {
    expect(binaryOperatorsUsed).toContain('*');
  });
  it('Un console.log de una operación aritmética `/`', () => {
    expect(binaryOperatorsUsed).toContain('/');
  });
});
