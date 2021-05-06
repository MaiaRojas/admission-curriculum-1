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

const extractVariableDeclarations = (accum, stmtExpr) => {
  if (stmtExpr && stmtExpr.type === 'VariableDeclaration') {
    const decl = stmtExpr.declarations[0];
    let initialValue;
    if (decl.init && (typeof decl.init === 'object') && decl.init.type === 'Literal') {
      initialValue = decl.init.value;
    } else {
      initialValue = decl.init;
    }
    accum.push({
      kind: stmtExpr.kind,
      name: decl.id.name,
      initialValue,
    })
  } else if (stmtExpr && ['BinaryExpression', 'LogicalExpression'].includes(stmtExpr.type)) {
    extractVariableDeclarations(accum, stmtExpr.left)
    extractVariableDeclarations(accum, stmtExpr.right)
  } else {
    if (stmtExpr) {
      extractVariableDeclarations(stmtExpr.argument);
    }
  }
  return accum;
};

const variablesDeclared = ast.body.reduce((accum, stmtExpr) => {
  const result = [...accum];
  extractVariableDeclarations(result, stmtExpr);
  return result;
}, []);

const extractConsoleLogsVars = (accum, arg) => {
  if (arg && arg.type === 'VariableDeclaration') {
    const decl = arg.declarations[0];
    let initialValue;
    if (decl.init && (typeof decl.init === 'object') && decl.init.type === 'Literal') {
      initialValue = decl.init.value;
    } else {
      initialValue = decl.init;
    }
    accum.push({
      kind: arg.kind,
      name: decl.id.name,
      initialValue,
    })
  } else if (arg && ['BinaryExpression', 'LogicalExpression'].includes(arg.type)) {
    extractConsoleLogsVars(accum, arg.left)
    extractConsoleLogsVars(accum, arg.right)
  } else {
    if (arg) {
      extractConsoleLogsVars(arg.argument);
    }
  }
  return accum;
};

const assignments = ast.body.reduce((accum, stmtExpr) => {
  const result = [...accum];
  if (
    stmtExpr
    && stmtExpr.type === 'ExpressionStatement'
    && stmtExpr.expression.type === 'AssignmentExpression'
  ) {
    result.push(stmtExpr);
  }
  return result;
}, []);

describe('HTML Basics: Variables', () => {
  it('Una definicion con let', () => {
    const letVariables = variablesDeclared.filter((v) => v.kind === 'let');
    expect(letVariables.length).toBeGreaterThan(0);
  });
  it('Un console.log de una variable no inicializada', () => {
    const uninitVariableNames = variablesDeclared.filter((v) => !v.initialValue).map((v) => v.name);
    const loggedUninitVariable = consoleLogsArgs.map((arg) => arg[arg.length - 1]).filter((arg) => (
      arg.type === 'Identifier' && uninitVariableNames.includes(arg.name)
    ));
    expect(loggedUninitVariable.length).toBeGreaterThan(0);
  });
  it('Una asignación', () => {
    expect(assignments.length).toBeGreaterThan(0);
  });
  it('Un console.log con una concatenación que utilice una variable', () => {

  });
  it('Una operación aritmética sobre una variable y un console.log de la variable modificada', () => {
    // console.log(JSON.stringify(ast.body, null, 4))
  });
  it('Una definicion con const', () => {
    const constVariables = variablesDeclared.filter((v) => v.kind === 'const');
    expect(constVariables.length).toBeGreaterThan(0);
  });
});
