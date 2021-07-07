const fs = require('fs');

const html = fs.readFileSync(__dirname + '/../src/index.html', 'utf-8');

describe('Sandbox', () => {
  it('Tiene <DOCTYPE>', () => {
    const doctypeDef = '<!DOCTYPE html>\n';
    expect(html.slice(0, doctypeDef.length)).toBe(doctypeDef);
  });
});
