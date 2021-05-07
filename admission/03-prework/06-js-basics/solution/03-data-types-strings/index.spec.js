const fs = require('fs');
const esprima = require('esprima');
const utils = require('../06-variables/utils');

const script = fs.readFileSync(__dirname + '/index.js', 'utf-8');
const ast = esprima.parseScript(script, { comment: true });

const consoleLogsArgs = utils.getAllConsoleLogLastArgs(ast);
const consoleLogsStringArgs = consoleLogsArgs.filter((arg) => (
  arg.value
  && typeof arg.value === 'string'
));

describe('HTML Basics: Strings', () => {
  it('Un console.log de algún string con \'', () => {
    const stringsSingle = consoleLogsStringArgs.filter((arg) => (
      arg.raw.startsWith('\'') && arg.raw.endsWith('\'')
    ));
    expect(stringsSingle.length).toBeGreaterThan(0);
  });
  it('Un console.log de algún string con "', () => {
    const stringsDouble = consoleLogsStringArgs.filter((arg) => (
      arg.raw.startsWith('"') && arg.raw.endsWith('"')
    ));
    expect(stringsDouble.length).toBeGreaterThan(0);
  });
  it('Un console.log de alguna concatenación', () => {
    const binaryOperatorsUsed = utils.getNestedBinaryExpressions(consoleLogsArgs)
      .map((arg) => arg.operator);

    expect(binaryOperatorsUsed).toEqual(expect.arrayContaining(['+', '+']));
  });
  it('Un console.log con typeof', () => {
    const unaryOperatorsUsed = utils.getNestedUnaryExpressions(consoleLogsArgs)
      .map((arg => arg.operator));
  
    expect(unaryOperatorsUsed).toContain('typeof');
  });
});
