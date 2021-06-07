const fs = require('fs');
const esprima = require('esprima');
const { esprima: utils } = require('@laboratoria/prework-test-utils');

const script = fs.readFileSync(__dirname + '/../src/app.js', 'utf-8');
const ast = esprima.parseScript(script);

const consoleLogsArgs = utils.getAllConsoleLogLastArgs(ast);
const consoleLogsStringArgs = consoleLogsArgs.filter((arg) => (
  arg.value
  && typeof arg.value === 'string'
));

describe('Workflow', () => {
  it('Un console.log de algún string', () => {
    expect(consoleLogsStringArgs.length).toBeGreaterThan(0);
  });
  it('Un console.log de un numero', () => {
    const positiveNumbers = consoleLogsArgs.filter(
      (arg) => typeof arg.value === 'number'
    );
    expect(positiveNumbers.length).toBeGreaterThan(0);
  });
});
