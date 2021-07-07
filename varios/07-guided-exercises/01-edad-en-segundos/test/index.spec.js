// const path = require('path');
// const { e2e: { initStaticServer, stopStaticServer, regExpEscape } } = require('@laboratoria/prework-test-utils');
const fs = require('fs');
const { JSDOM } = require('jsdom');

// const srcPath = path.normalize(__dirname + '/../src');
// let server;

// const testConversion = async ({ page, done, anios, segundos }) => {
//   page.on('dialog', (dialog) => {
//     dialog.accept(`${anios}`);
//   });
//   await page.goto('http://localhost:5000');

//   // Buscamos los nodos q sean texto
//   const message = await page.$eval('body', (el) => Array.prototype.filter
//     .call(el.childNodes, (child, index) => index === 0 && child.nodeType === Node.TEXT_NODE)
//     .map((child) => child.textContent)
//   );
//   expect(message.length).toBeGreaterThan(0);

//   const aniosEscaped = regExpEscape(` ${anios}`);
//   const segundosEscaped = regExpEscape(` ${segundos}`);
//   const regexp = new RegExp(`${aniosEscaped}.*${segundosEscaped}`, 'g');
//   expect(regexp.test(message)).toBe(true);
//   done();
// }

describe('Guided Exercises: Edad en segundos', () => {
  // beforeAll((done) => {
  //   server = initStaticServer(srcPath, {}, done);
  // });

  // afterEach(async () => {
  //   page = await browser.newPage();
  // });

  it('Tiene que existir un archivo index.html con javascript importado de un archivo local externo', () => {
    const html = fs.readFileSync(__dirname + '/../src/index.html', 'utf-8');
    const page = new JSDOM(html);
    const { window } = page;
    const { document } = window;
    const jsPath = document.head.querySelector('script').getAttribute('src');
    const js = fs.readFileSync(__dirname + '/../src/' + jsPath, 'utf-8');
    expect(js.trim()).not.toBe('');
  });

  it.todo('La página tiene el title "Edad en segundos"');
  // it.todo('La página tiene el title "Edad en segundos"', async (done) => {
  //   page.on('dialog', (dialog) => {
  //     dialog.accept('');
  //   });
  //   await page.goto('http://localhost:5000');
  //   expect(page.title()).resolves.toMatch('Edad en segundos').then(done);
  // });

  it.todo('El prompt muestra el mensaje "¿Cuál es tu edad?"');
  // it.todo('El prompt muestra el mensaje "¿Cuál es tu edad?"', async (done) => {
  //   let message;
  //   page.on('dialog', (dialog) => {
  //     message = dialog.message();
  //     dialog.accept('');
  //   });
  //   await page.goto('http://localhost:5000');
  //   expect(message).toBe('¿Cuál es tu edad?');
  //   done();
  // });

  it.todo('20 Años === 630720000 segundos');
  // it.todo('20 Años === 630720000 segundos', async (done) => {
  //   const anios = 20;
  //   const segundos = 630720000;
  //   await testConversion({
  //     page,
  //     done,
  //     anios,
  //     segundos,
  //   })
  // });

  it.todo('0 Años === 0 segundos');
  // it.todo('0 Años === 0 segundos', async (done) => {
  //   const anios = 0;
  //   const segundos = 0;
  //   await testConversion({
  //     page,
  //     done,
  //     anios,
  //     segundos,
  //   })
  // });

  it.todo('Año como string vacio es 0 segundos');
  // it.todo('String vacio es 0', async (done) => {
  //   const anios = '';
  //   const segundos = 0;
  //   await testConversion({
  //     page,
  //     done,
  //     anios,
  //     segundos,
  //   })
  // });

  it.todo('Año es algo que no es un número es NaN segundos');
  // it.todo('Algo que no es un número es NaN', async (done) => {
  //   const anios = 'string';
  //   const segundos = NaN;
  //   await testConversion({
  //     page,
  //     done,
  //     anios,
  //     segundos,
  //   })
  // });

  // afterAll((done) => {
  //   stopStaticServer(server, done);
  // });
});
