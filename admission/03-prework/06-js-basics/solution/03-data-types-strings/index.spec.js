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

const extractUnaryOperators = (accum, arg) => {
  if (arg && arg.type === 'UnaryExpression') {
    accum.push(arg.operator);
    extractUnaryOperators(arg.argument);
  }
  if (arg && arg.type === 'BinaryExpression') {
    extractUnaryOperators(accum, arg.left)
    extractUnaryOperators(accum, arg.right)
  }
  return accum;
}

const extractBinaryOperators = (accum, arg) => {
  if (arg && arg.type === 'UnaryExpression') {
    extractBinaryOperators(arg.argument);
  }
  if (arg && arg.type === 'BinaryExpression') {
    accum.push(arg.operator);
    extractBinaryOperators(accum, arg.left)
    extractBinaryOperators(accum, arg.right)
  }
  return accum;
}

const unaryOperatorsUsed = consoleLogsArgs.reduce((accum, args) => {
  const result = [...accum];
  extractUnaryOperators(result, args[args.length - 1]);
  return result;
}, []);

const binaryOperatorsUsed = consoleLogsArgs.reduce((accum, args) => {
  const result = [...accum];
  extractBinaryOperators(result, args[args.length - 1]);
  return result;
}, []);

describe('HTML Basics: Strings', () => {
  it('Un console.log de algún string con \'', () => {
    const stringsDouble = consoleLogsArgs.filter((args) => {
      const arg = args[args.length - 1];
      return arg.value
        && typeof arg.value === 'string'
        && arg.raw.startsWith('\'')
        && arg.raw.endsWith('\'');
    });
    expect(stringsDouble.length).toBeGreaterThan(0);
  });
  it('Un console.log de algún string con "', () => {
    const stringsSingle = consoleLogsArgs.filter((args) => {
      const arg = args[args.length - 1];
      return arg.value
        && typeof arg.value === 'string'
        && arg.raw.startsWith('"')
        && arg.raw.endsWith('"')
    });
    expect(stringsSingle.length).toBeGreaterThan(0);
  });
  it('Un console.log de alguna concatenación', () => {
    expect(binaryOperatorsUsed).toEqual(expect.arrayContaining(['+', '+']));
  });
  it('Un console.log con typeof', () => {
    expect(unaryOperatorsUsed).toContain('typeof');
  });
})

