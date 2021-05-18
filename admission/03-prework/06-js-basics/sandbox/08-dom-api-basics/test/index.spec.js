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

// const functionExpressions = utils.getAll(ast.body, 'FunctionExpression');


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
    // todas las CallExpression
    const elementos = utils.getAll(astLocs.body, 'CallExpression')
      // filtra los elementos con la propiedad getElementById
      .filter((call) => call.callee.property.name === 'getElementById')
      // verifica se los elementos existen en html
      .map((call) => document.body.querySelector(`[id="${call.arguments[0].value}"]`))
      // quita si no existe 
      .filter(el => el !== null)
    expect(elementos.length).toBeGreaterThan(0);
  });
  it('Un querySelector con un selector que exista', () => {
    // todas las CallExpression
    const elementos = utils.getAll(astLocs.body, 'CallExpression')
      // filtra los elementos con la propiedad querySelector
      .filter((call) => call.callee.property.name === 'querySelector')
      // verifica se los elementos existen en html
      .map((call) => document.body.querySelector(call.arguments[0].value))
      // quita si no existe 
      .filter(el => el !== null)
    expect(elementos.length).toBeGreaterThan(0);
  });
  it('Una definición de una function', () => {
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
    expect(constDefinedFuncs.length).toBeGreaterThan(0);
  });
  // it('Un addEventListener sobre un elemento existente, un evento valido y un callback existente', () => {
  // });
});
