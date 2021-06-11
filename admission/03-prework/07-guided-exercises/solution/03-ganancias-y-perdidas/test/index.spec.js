// const path = require('path');
// const { e2e: { initStaticServer, stopStaticServer, regExpEscape } } = require('@laboratoria/prework-test-utils');

// const srcPath = path.normalize(__dirname + '/../src');
// let server;

// const testConversion = async ({
//   page, done, ingreso, costos, porcentajeImpuesto, gananciaNeta,
// }) => {
//   await page.goto('http://localhost:5000');

//   await page.type('#ingreso', `${ingreso}`);
//   await page.type('#costos', `${costos}`);
//   await page.type('#porcentaje-impuesto', `${porcentajeImpuesto}`);

//   await page.$eval('#btn', (el) => {
//     el.click();
//   });
  
//   const message = await page.$eval('#resultado', (el) => el.innerHTML);
//   const regexp = new RegExp(regExpEscape(` ${gananciaNeta}`), 'g');
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

  it('La página tiene el title "Ganancias y perdidas"');
  // it('La página tiene el title "Ganancias y perdidas"', async (done) => {
  //   await page.goto('http://localhost:5000');
  //   expect(page.title()).resolves.toMatch('Ganancias y perdidas').then(done);
  // });

  it('ingreso = 34555, costos = 3455, porcentaje impuesto = 8');
  // it('ingreso = 34555, costos = 3455, porcentaje impuesto = 8', async (done) => {
  //   const ingreso = 34555;
  //   const costos = 3455;
  //   const porcentajeImpuesto = 8;
  //   const gananciaNeta = 28612;
  //   await testConversion({
  //     page,
  //     done,
  //     ingreso,
  //     costos,
  //     porcentajeImpuesto,
  //     gananciaNeta,
  //   })
  // });

  it.todo('Otros valores');
  it.todo('Si algun input esta vacio');
  it.todo('Si algun input no es numero');

  // afterAll((done) => {
  //   stopStaticServer(server, done);
  // });
});
