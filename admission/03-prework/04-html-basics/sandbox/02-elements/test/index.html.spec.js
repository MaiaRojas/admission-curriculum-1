const fs = require('fs');
const { JSDOM } = require('jsdom');
require('html-validate/jest');

const html = fs.readFileSync(__dirname + '/../src/index.html', 'utf-8');
const page = new JSDOM(html);
const { window } = page;
const { document } = window;

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
    const html = fs.readFileSync(__dirname + '/../src/' + href, 'utf-8');
    expect(html).toHTMLValidate({
      rules: {
        "element-required-attributes": "off",
      },
    });
  });
  it('Hay al menos un <input /> ', () => {
    expect(document.body.querySelector('input')).not.toBe(null)
  });
  it('Hay al menos un <button /> ', () => {
    expect(document.body.querySelector('button').innerHTML.trim()).not.toBe('')
  });
})