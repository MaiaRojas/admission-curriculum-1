const fs = require('fs');
const esprima = require('esprima');
const { esprima: utils } = require('@laboratoria/prework-test-utils');

const script = fs.readFileSync(__dirname + '/../src/index.js', 'utf-8');
const ast = esprima.parseScript(script);

const consoleLogsArgs = utils.getAllConsoleLogLastArgs(ast);

describe('JS Basics: Automatic type convertion & equality', () => {
  it('console.log con por lo menos dos operaciones con operadores de distinto tipo', () => {
    const binaryOperatorsWithDiffTypes = utils.getNestedBinaryExpressions(consoleLogsArgs)
      .filter((arg) => (arg.left.type === 'Literal' && arg.right.type === 'Literal'))
      .map((arg) => (typeof arg.right.value) !== (typeof arg.left.value));
  
    expect(binaryOperatorsWithDiffTypes.length).toBeGreaterThan(0);
  });
  it('console.log con igualdades con == y ===', () => {
    const binaryOperatorsUsed = utils.getNestedBinaryExpressions(consoleLogsArgs)
      .map((arg => arg.operator));

    expect(binaryOperatorsUsed).toContain('===');
    expect(binaryOperatorsUsed).toContain('==');
  });
});
