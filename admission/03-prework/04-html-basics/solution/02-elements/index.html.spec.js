const fs = require('fs');
const { JSDOM } = require('jsdom');
const validator = require('html-validator');

const html = fs.readFileSync('./index.html', 'utf-8');
const page = new JSDOM(html);
const { window } = page;
const { document } = window;

async function isValidHTML(html) {
  const options = {
    validator: 'WHATWG',
    format: 'text',
    data: html,
    ignore: '<html> is missing required "lang" attribute',
  };
  
  try {
    await validator(options)
    return true;
  } catch (error) {
    return false;
  }
}

describe('HTML Basics: Elements', () => {
  it('Hay al menos un <h />', () => {
    expect(document.body.querySelector('h1, h2, h3, h4, h5, h6').innerHTML.trim()).not.toBe('')
  });
  it('Hay al menos un <p />', () => {
    expect(document.body.querySelector('p').innerHTML.trim()).not.toBe('');
  });
  it('Hay al menos un <strong /> o un <em/>', () => {
    expect(document.body.querySelector('strong, em').innerHTML.trim()).not.toBe('')
  });
  it('Hay al menos un <a /> con un atributo href a un documento html local "bien formado"', () => {
    const href = document.body.querySelector('a').getAttribute('href');
    const html = fs.readFileSync(href, 'utf-8');
    expect(isValidHTML(html)).resolves.toBe(true);
  });
})