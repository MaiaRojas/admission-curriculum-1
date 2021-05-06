const fs = require('fs');
const esprima = require('esprima');

const script = fs.readFileSync(__dirname + '/index.js', 'utf-8');
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

const extractBinaryOperatorsDiffTypes = (accum, arg) => {
  if (arg && arg.type === 'UnaryExpression') {
    extractBinaryOperatorsDiffTypes(arg.argument);
  }
  if (arg && ['BinaryExpression', 'LogicalExpression'].includes(arg.type)) {
    if (arg.left.type === 'Literal' && arg.right.type === 'Literal')
    accum.push((typeof arg.right.value) !== (typeof arg.left.value));
    extractBinaryOperatorsDiffTypes(accum, arg.left)
    extractBinaryOperatorsDiffTypes(accum, arg.right)
  }
  return accum;
}

const binaryOperatorsDiffTypes = consoleLogsArgs.reduce((accum, args) => {
  const result = [...accum];
  extractBinaryOperatorsDiffTypes(result, args[args.length -1]);
  return result;
}, []);

const extractBinaryOperators = (accum, arg) => {
  if (arg && arg.type === 'UnaryExpression') {
    extractBinaryOperators(arg.argument);
  }
  if (arg && ['BinaryExpression', 'LogicalExpression'].includes(arg.type)) {
    accum.push(arg.operator);
    extractBinaryOperators(accum, arg.left)
    extractBinaryOperators(accum, arg.right)
  }
  return accum;
}

const binaryOperatorsUsed = consoleLogsArgs.reduce((accum, args) => {
  const result = [...accum];
  extractBinaryOperators(result, args[args.length -1]);
  return result;
}, []);

describe('HTML Basics: Automatic type convertion & equality', () => {
  it('console.log con por lo menos dos operaciones con operadores de distinto tipo', () => {
    const diffTypes = binaryOperatorsDiffTypes.filter((c) => c);
    expect(diffTypes.length).toBeGreaterThan(0);
  });
  it('console.log con igualdades con == y ===', () => {
    expect(binaryOperatorsUsed).toContain('===');
    expect(binaryOperatorsUsed).toContain('==');
  });
});
