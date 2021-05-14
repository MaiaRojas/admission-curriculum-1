const fs = require('fs');
const { JSDOM } = require("jsdom");

const html = fs.readFileSync(__dirname + '/../src/index.html', 'utf-8');
const page = new JSDOM(html);
const { window } = page;
const { document } = window;

describe('HTML Basics: Document', () => {
  it('Tiene <DOCTYPE>', () => {
    const doctypeDef = '<!DOCTYPE html>\n';
    expect(html.slice(0, doctypeDef.length)).toBe(doctypeDef);
  });
  it('Tiene <head /> con <meta/> y <title />', () => {
    expect(document.head.querySelector('meta').getAttribute('charset')).toBe('utf-8');
    expect(document.head.querySelector('title').innerHTML.trim()).not.toBe('');
  });
  it('Tiene <body />', () => {
    expect(document.body.innerHTML.trim()).not.toBe('');
  });
  xit('Esta bien indentado', () => {

  });
  it('Tiene algún comentario', () => {
    const nodeIterator = document.createNodeIterator(
      document.body,
      window.NodeFilter.SHOW_COMMENT,
      () => window.NodeFilter.FILTER_ACCEPT
    );

    const comments = [];
    let currentNode;

    while (currentNode = nodeIterator.nextNode()){
      comments.push(currentNode);
    }

    expect(comments.length).toBeGreaterThan(0);
  });
})