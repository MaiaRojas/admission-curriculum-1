const path = require('path');
const { e2e: { initStaticServer, stopStaticServer, regExpEscape } } = require('@laboratoria/prework-test-utils');
const fs = require('fs');
const { JSDOM } = require('jsdom');

const srcPath = path.normalize(__dirname + '/../src');
let server;

const testConversion = async ({ page, done, celsius, farenheit }) => {
  page.on('dialog', (dialog) => {
    dialog.accept(`${celsius}`);
  });

  let message;
  page.on('console', (console) => {
    message = console.text();
  });

  await page.goto('http://localhost:5000');

  const regexp = new RegExp(regExpEscape(` ${farenheit}`), 'g');
  expect(regexp.test(message)).toBe(true);
  done();
}

describe('Guided Exercises: Convertidor de temperatura', () => {
  beforeAll((done) => {
    server = initStaticServer(srcPath, {}, done);
  });

  afterEach(async () => {
    page = await browser.newPage();
  });

  it('Tiene que existir un archivo index.html con javascript importado de un archivo local externo', () => {
    const html = fs.readFileSync(__dirname + '/../src/index.html', 'utf-8');
    const page = new JSDOM(html);
    const { window } = page;
    const { document } = window;
    const jsPath = document.body.querySelector('script').getAttribute('src');
    const js = fs.readFileSync(__dirname + '/../src/' + jsPath, 'utf-8');
    expect(js.trim()).not.toBe('');
  });

  it('La página tiene el title correcto', async (done) => {
    page.on('dialog', (dialog) => {
      dialog.accept('');
    });
    await page.goto('http://localhost:5000');
    expect(page.title()).resolves.toMatch('Convertidor de temperatura').then(done);
  });

  it('El prompt muestra el mensaje correcto', async (done) => {
    let message;
    page.on('dialog', (dialog) => {
      message = dialog.message();
      dialog.accept('');
    });
    await page.goto('http://localhost:5000');
    expect(message).toBe('¿Cuál es la temperatura en Celsius?');
    done();
  });

  it('34 celsius === 93.2 farenheit', async (done) => {
    const celsius = 34;
    const farenheit = 93.2;
    await testConversion({
      page,
      done,
      celsius,
      farenheit,
    })
  });

  it('0 celsius === 32 farenheit', async (done) => {
    const celsius = 0;
    const farenheit = 32;
    await testConversion({
      page,
      done,
      celsius,
      farenheit,
    })
  });

  it('String vacio es NaN', async (done) => {
    const celsius = '';
    const farenheit = NaN;
    await testConversion({
      page,
      done,
      celsius,
      farenheit,
    })
  });

  it('Algo que no es un número es NaN', async (done) => {
    const celsius = 'string';
    const farenheit = NaN;
    await testConversion({
      page,
      done,
      celsius,
      farenheit,
    })
  });

  afterAll((done) => {
    stopStaticServer(server, done);
  });
});
