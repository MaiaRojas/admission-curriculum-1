const fs = require('fs');
const esprima = require('esprima');

const script = fs.readFileSync('./index.js', 'utf-8');
const ast = esprima.parseScript(script, { comment: true });

const consoleLogsArgs = ast.body.reduce((accum, i) => {
  if (
    i.type === 'ExpressionStatement'
    && i.expression
    && i.expression.type === 'CallExpression'
    && i.expression.callee
    && i.expression.callee.object
    && i.expression.callee.object.name === 'console'
    && i.expression.callee.property
    && i.expression.callee.property.name === 'log'
  ) {
    return [...accum, i.expression.arguments];
  }
  return accum;
}, []);

const extractBinaryOperators = (accum, arg) => {
  if (arg.type === 'BinaryExpression') {
    accum.push(arg.operator);
    extractBinaryOperators(accum, arg.left)
    extractBinaryOperators(accum, arg.right)
  }
  return accum;
}

const binaryOperatorsUsed = consoleLogsArgs.reduce((accum, args) => {
  const result = [...accum];
  extractBinaryOperators(result, args[args.length - 1]);
  return result;
}, []);

describe('HTML Basics: Numbers', () => {
  it('Un console.log de un numero positivo', () => {
    const positiveNumbers = consoleLogsArgs.filter((args) => typeof args[args.length - 1].value === 'number');
    expect(positiveNumbers.length).toBeGreaterThan(0);
  });
  it('Un console.log de un numero negativo', () => {
    const negativeNumbers = consoleLogsArgs.filter((args) => {
      const arg = args[args.length - 1];
      return arg.type === 'UnaryExpression'
        && arg.operator === '-'
        && typeof arg.argument.value === 'number';
    });
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
