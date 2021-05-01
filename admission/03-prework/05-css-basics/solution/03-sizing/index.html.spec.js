const fs = require('fs');
const { JSDOM } = require("jsdom");
const css = require('css');

const html = fs.readFileSync('./index.html', 'utf-8');
const page = new JSDOM(html);
const { window } = page;
const { document } = window;

const stylesPath = document.querySelector('link[rel="stylesheet"]').getAttribute('href');
const style = fs.readFileSync(stylesPath, 'utf-8');
const { rules } = css.parse(style).stylesheet;
const propertiesUsed = rules.reduce((accum, rule) => {
  if (rule.type === 'rule') {
    const declarations = rule.declarations.map((d) => d.property);
    return [...accum, ...declarations];
  }
  return accum;
}, []);


describe('CSS Basics: Sizing `index.html`', () => {
  it('Estilos importados desde archivo independiente', () => {
    expect(style.trim()).not.toBe('');
  });
  it('Definiciones para etiquetas h1, h2 y p', () => {
    expect(document.body.querySelector('p').innerHTML.trim()).not.toBe('');
  });
  it('El uso de propiedades de espaciado', () => {
    expect(
      propertiesUsed.includes('margin')
      || propertiesUsed.includes('margin-left')
      || propertiesUsed.includes('margin-top')
      || propertiesUsed.includes('margin-right')
      || propertiesUsed.includes('margin-bottom')
      || propertiesUsed.includes('padding')
      || propertiesUsed.includes('padding-left')
      || propertiesUsed.includes('padding-top')
      || propertiesUsed.includes('padding-right')
      || propertiesUsed.includes('padding-bottom')
    ).toBeTruthy();
  });
  it('El uso de propiedades de tamaño', () => {
    expect(
      propertiesUsed.includes('width')
      || propertiesUsed.includes('height')
    ).toBeTruthy();
  });
})