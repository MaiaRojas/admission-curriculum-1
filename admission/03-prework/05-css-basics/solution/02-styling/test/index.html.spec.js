const fs = require('fs');
const { JSDOM } = require("jsdom");
const css = require('css');

const html = fs.readFileSync(__dirname + '/../src/index.html', 'utf-8');
const page = new JSDOM(html);
const { window } = page;
const { document } = window;

const stylesPath = document.querySelector('link[rel="stylesheet"]').getAttribute('href');
const style = fs.readFileSync(__dirname + '/../src/' + stylesPath, 'utf-8');
const { rules } = css.parse(style).stylesheet;
const propertiesUsed = rules.reduce((accum, rule) => {
  if (rule.type === 'rule') {
    const declarations = rule.declarations.map((d) => d.property);
    return [...accum, ...declarations];
  }
  return accum;
}, []);


describe('CSS Basics: Styling', () => {
  it('Estilos importados desde archivo independiente', () => {
    expect(style.trim()).not.toBe('');
  });
  it('Definiciones para etiquetas h1, h2 y p', () => {
    expect(document.body.querySelector('h1').innerHTML.trim()).not.toBe('');
    expect(document.body.querySelector('h2').innerHTML.trim()).not.toBe('');
    expect(document.body.querySelector('p').innerHTML.trim()).not.toBe('');
  });
  it('El uso de propiedades de borde styles', () => {
    expect(
      propertiesUsed.includes('border-width')
      || propertiesUsed.includes('border-style')
      || propertiesUsed.includes('border-color')
    ).toBeTruthy();
  });
  it('El uso de propiedades de borde position', () => {
    expect(
      propertiesUsed.includes('border-left')
      || propertiesUsed.includes('border-top')
      || propertiesUsed.includes('border-right')
      || propertiesUsed.includes('border-bottom')
    ).toBeTruthy();
  });
})