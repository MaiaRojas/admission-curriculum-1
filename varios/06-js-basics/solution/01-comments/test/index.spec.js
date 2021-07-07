const fs = require('fs');
const esprima = require('esprima');

const script = fs.readFileSync(__dirname + '/../src/index.js', 'utf-8');
const ast = esprima.parseScript(script, { comment: true });

describe('JS Basics: Comments', () => {
  it('Por lo menos un comentario de linea', () => {
    const lineComments = ast.comments.filter((c) => c.type === 'Line');
    expect(lineComments.length).toBeGreaterThan(0);
  });
  it('Por lo menos un comentario de bloque', () => {
    const blockComments = ast.comments.filter((c) => c.type === 'Block');
    expect(blockComments.length).toBeGreaterThan(0);
  });
});
