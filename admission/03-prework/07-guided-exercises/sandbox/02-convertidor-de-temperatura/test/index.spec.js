// const path = require('path');
// const { e2e: { initStaticServer, stopStaticServer, regExpEscape } } = require('@laboratoria/prework-test-utils');

// const srcPath = path.normalize(__dirname + '/../src');
// let server;

// const testConversion = async ({ page, done, celsius, farenheit }) => {
//   page.on('dialog', (dialog) => {
//     dialog.accept(`${celsius}`);
//   });

//   let message;
//   page.on('console', (console) => {
//     message = console.text();
//   });

//   await page.goto('http://localhost:5000');

//   const regexp = new RegExp(regExpEscape(` ${farenheit}`), 'g');
//   expect(regexp.test(message)).toBe(true);
//   done();
// }

describe('Guided Exercises: Convertidor de temperatura', () => {
  // beforeAll((done) => {
  //   server = initStaticServer(srcPath, {}, done);
  // });

  // afterEach(async () => {
  //   page = await browser.newPage();
  // });

  it.todo('La página tiene el title "Convertidor de temperatura"');
  // it('La página tiene el title "Convertidor de temperatura"', async (done) => {
  //   page.on('dialog', (dialog) => {
  //     dialog.accept('');
  //   });
  //   await page.goto('http://localhost:5000');
  //   expect(page.title()).resolves.toMatch('Convertidor de temperatura').then(done);
  // });

  it.todo('El prompt muestra el mensaje "¿Cuál es la temperatura en Celsius?"');
  // it('El prompt muestra el mensaje "¿Cuál es la temperatura en Celsius?"', async (done) => {
  //   let message;
  //   page.on('dialog', (dialog) => {
  //     message = dialog.message();
  //     dialog.accept('');
  //   });
  //   await page.goto('http://localhost:5000');
  //   expect(message).toBe('¿Cuál es la temperatura en Celsius?');
  //   done();
  // });

  it.todo('34 celsius === 93.2 farenheit');
  // it('34 celsius === 93.2 farenheit', async (done) => {
  //   const celsius = 34;
  //   const farenheit = 93.2;
  //   await testConversion({
  //     page,
  //     done,
  //     celsius,
  //     farenheit,
  //   })
  // });

  it.todo('0 celsius === 32 farenheit');
  // it('0 celsius === 32 farenheit', async (done) => {
  //   const celsius = 0;
  //   const farenheit = 32;
  //   await testConversion({
  //     page,
  //     done,
  //     celsius,
  //     farenheit,
  //   })
  // });

  it.todo('String vacio es NaN');
  // it('String vacio es NaN', async (done) => {
  //   const celsius = '';
  //   const farenheit = NaN;
  //   await testConversion({
  //     page,
  //     done,
  //     celsius,
  //     farenheit,
  //   })
  // });

  it.todo('Algo que no es un número es NaN');
  // it('Algo que no es un número es NaN', async (done) => {
  //   const celsius = 'string';
  //   const farenheit = NaN;
  //   await testConversion({
  //     page,
  //     done,
  //     celsius,
  //     farenheit,
  //   })
  // });

  // afterAll((done) => {
  //   stopStaticServer(server, done);
  // });
});
