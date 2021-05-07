const fs = require('fs');
const esprima = require('esprima');
const utils = require('../06-variables/utils');

const script = fs.readFileSync(__dirname + '/index.js', 'utf-8');
const ast = esprima.parseScript(script, { comment: true });

const consoleLogsArgs = utils.getAllConsoleLogArgsLast(ast);

describe('HTML Basics: Automatic type convertion & equality', () => {
  it('console.log con por lo menos dos operaciones con operadores de distinto tipo', () => {
    const binaryOperatorsWithDiffTypes = consoleLogsArgs
      .filter((arg) => (
        ['BinaryExpression', 'LogicalExpression'].includes(arg.type)
        && arg.left.type === 'Literal' && arg.right.type === 'Literal'
      ))
      .map((arg => (typeof arg.right.value) !== (typeof arg.left.value)));
  
    expect(binaryOperatorsWithDiffTypes.length).toBeGreaterThan(0);
  });
  it('console.log con igualdades con == y ===', () => {
    const binaryOperatorsUsed = consoleLogsArgs
      .filter((arg) => (
        ['BinaryExpression', 'LogicalExpression'].includes(arg.type)
      ))
      .map((arg => arg.operator));

    expect(binaryOperatorsUsed).toContain('===');
    expect(binaryOperatorsUsed).toContain('==');
  });
});
