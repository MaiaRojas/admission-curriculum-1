const fs = require('fs');
const { JSDOM } = require('jsdom');

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
    new JSDOM(html, {
      contentType: "application/xhtml+xml",
    });
    expect(true).toBe(true);
  });
  it('Hay al menos un <input /> ', () => {
    expect(document.body.querySelector('input')).not.toBe(null)
  });
  it('Hay al menos un <button /> ', () => {
    expect(document.body.querySelector('button').innerHTML.trim()).not.toBe('')
  });
})