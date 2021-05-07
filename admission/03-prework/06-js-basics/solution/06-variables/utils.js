const utils = require('esprima-ast-utils');

const handlers = {
  'ConsoleLogExpressionStatement': (root) => (
    utils.filter(root, (node) => (
      node.type === 'ExpressionStatement'
      && node.expression
      && node.expression.type === 'CallExpression'
      && node.expression.callee
      && node.expression.callee.object
      && node.expression.callee.object.name === 'console'
      && node.expression.callee.property
      && node.expression.callee.property.name === 'log'
    ))
  ),
}

const defaultHandler = (root, nodeType) => (
  utils.filter(root, (node) => node.type === nodeType)
);

function getAll(root, nodeType) {
  if (!nodeType) {
    return utils.traverse(root, (node) => node);
  }
  if (typeof nodeType === 'function') {
    return utils.filter(root, nodeType);
  }
  let handler = handlers[nodeType];
  if (!handler) {
    handler = defaultHandler;
  }
  return handler(root, nodeType);
}

function getAllConsoleLogLastArgs(root) {
  return getAll(root, 'ConsoleLogExpressionStatement').map(
    (cl) => {
      const { arguments: args } = cl.expression;
      return args[args.length - 1];
    }
  );
}

module.exports = {
  getAll,
  getAllConsoleLogLastArgs,
};
