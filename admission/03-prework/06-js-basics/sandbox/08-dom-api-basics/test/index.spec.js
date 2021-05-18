const fs = require('fs');
const esprima = require('esprima');
const { esprima: utils } = require('@laboratoria/prework-test-utils');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(__dirname + '/../src/index.html', 'utf-8');
const page = new JSDOM(html);
const { window } = page;
const { document } = window;

const script = fs.readFileSync(__dirname + '/../src/app.js', 'utf-8');
const astLocs = esprima.parseScript(script, { loc: true });
const ast = esprima.parseScript(script);

const expressions = utils.getAll(astLocs.body, 'CallExpression')
const constDefinedFuncs = utils.getAll(astLocs.body, 'VariableDeclaration')
  .filter((decl) => {
    const d = decl.declarations
      && decl.declarations.length
      && decl.declarations[0]
    return (
      decl.kind === 'const'
      && d.init
      && d.init.type === 'FunctionExpression'
    );
  })

const variablesDeclared = utils.getAll(ast, 'VariableDeclaration').map(
  (node) => {
    const decl = node.declarations[0];
    let initialValue;
    if (decl.init && (typeof decl.init === 'object') && decl.init.type === 'Literal') {
      initialValue = decl.init.value;
    } else {
      initialValue = decl.init;
    }
    return {
      kind: node.kind,
      name: decl.id.name,
      initialValue,
    };
  }
);

describe('JS Basics: DOM', () => {
  it('Al menos un elemento con id', () => {
    expect(document.body.querySelector('[id]')).not.toBe(null);
  });
  it('Al menos un elemento con class', () => {
    expect(document.body.querySelector('[class]')).not.toBe(null);
  });
  it('Al menos un elemento sin id ni class y con la misma etiqueta q el class de arriba', () => {
    const tag = document.body.querySelector('[class]').localName
    expect(document.body.querySelector(`${tag}:not([id]):not([class])`)).not.toBe(null);
  });
  it('Un getElementById con un id q exista', () => {
    // filtra los elementos con la propiedad getElementById
    const resultById = expressions.filter((call) => call.callee.property.name === 'getElementById')
      // verifica se los elementos existen en html
      .map((call) => document.body.querySelector(`[id="${call.arguments[0].value}"]`))
      // quita si no existe 
      .filter(el => el !== null)
    expect(resultById.length).toBeGreaterThan(0);
  });
  it('Un querySelector con un selector que exista', () => {
    // filtra los elementos con la propiedad querySelector
    const resultByQuerySelector = expressions.filter((call) => call.callee.property.name === 'querySelector')
      // verifica se los elementos existen en html
      .map((call) => document.body.querySelector(call.arguments[0].value))
      // quita si no existe 
      .filter(el => el !== null)
    expect(resultByQuerySelector.length).toBeGreaterThan(0);
  });
  it('Una definición de una function', () => {
    expect(constDefinedFuncs.length).toBeGreaterThan(0);
  });
  it('Un addEventListener sobre un elemento existente, un evento valido y un callback existente', () => {
    // filtra los elementos con addEventListener
    const result = expressions.filter((call) => call.callee.property.name === 'addEventListener')
      .map(call => ({
        element: call.callee.object.name,
        event: call.arguments[0].value,
        callback: call.arguments[1].name,
      }))
      // verificar si el element existe      
      .filter(item => variablesDeclared.find(variable => variable.name === item.element))
      // verificar si el event es valido
      .filter(item => item.event === "click")
      // verificar si el callback existe
      .filter(item => constDefinedFuncs.find(func => func.declarations[0].id.name === item.callback))
    expect(result.length).toBeGreaterThan(0);
  });
});
