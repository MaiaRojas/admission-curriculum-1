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
  if (arg && ['BinaryExpression', 'LogicalExpression'].includes(arg.type)) {
    extractUnaryOperators(accum, arg.left)
    extractUnaryOperators(accum, arg.right)
  }
  return accum;
}

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

const extractTernaryOperators = (accum, arg) => {
  if (arg && arg.type === 'UnaryExpression') {
    extractTernaryOperators(arg.argument);
  }
  if (arg && ['BinaryExpression', 'LogicalExpression'].includes(arg.type)) {
    extractTernaryOperators(accum, arg.left)
    extractTernaryOperators(accum, arg.right)
  }
  if (arg && arg.type === 'ConditionalExpression') {
    accum.push(arg);
  }
  return accum;
}

const unaryOperatorsUsed = consoleLogsArgs.reduce((accum, args) => {
  const result = [...accum];
  extractUnaryOperators(result, args[args.length -1]);
  return result;
}, []);

const binaryOperatorsUsed = consoleLogsArgs.reduce((accum, args) => {
  const result = [...accum];
  extractBinaryOperators(result, args[args.length -1]);
  return result;
}, []);

const ternaryOperatorsUsed = consoleLogsArgs.reduce((accum, args) => {
  const result = [...accum];
  extractTernaryOperators(result, args[args.length -1]);
  return result;
}, []);

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
    const typeofBoolean = consoleLogsArgs.filter((args) => {
      const arg = args[args.length -1];
      return arg.type === 'UnaryExpression'
        && arg.operator === 'typeof'
        && arg.argument.type === "BinaryExpression"
        && ['>', '<'].includes(arg.argument.operator);
    });
    expect(typeofBoolean.length).toBeGreaterThan(0);
  });
  it('Un console.log de operaciones booleanas &&', () => {
    expect(binaryOperatorsUsed).toContain('&&');
  });
  it('Un console.log de operaciones booleanas ||', () => {
    expect(binaryOperatorsUsed).toContain('||');
  });
  it('Un console.log de operaciones booleanas !', () => {
    expect(unaryOperatorsUsed).toContain('!');
  });
  it('Un console.log de operador ternario ?:', () => {
    expect(ternaryOperatorsUsed.length).toBeGreaterThan(0);
  });
});
