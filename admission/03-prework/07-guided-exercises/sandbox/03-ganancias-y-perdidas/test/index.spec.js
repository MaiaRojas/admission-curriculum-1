// const path = require('path');
// const { e2e: { initStaticServer, stopStaticServer, regExpEscape } } = require('@laboratoria/prework-test-utils');
// const fs = require('fs');
// const { JSDOM } = require('jsdom');

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

describe('Guided Exercises: Ganancias y perdidas', () => {
  // beforeAll((done) => {
  //   server = initStaticServer(srcPath, {}, done);
  // });

  // afterEach(async () => {
  //   page = await browser.newPage();
  // });

  it('Tiene que existir un archivo index.html con javascript importado de un archivo local externo');
  // it('Tiene que existir un archivo index.html con javascript importado de un archivo local externo', () => {
  //   const html = fs.readFileSync(__dirname + '/../src/index.html', 'utf-8');
  //   const page = new JSDOM(html);
  //   const { window } = page;
  //   const { document } = window;
  //   const jsPath = document.body.querySelector('script').getAttribute('src');
  //   const js = fs.readFileSync(__dirname + '/../src/' + jsPath, 'utf-8');
  //   expect(js.trim()).not.toBe('');
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

  it('ingreso = 18520, costos = 3850, porcentaje impuesto = 10');
  // it('ingreso = 18520, costos = 3850, porcentaje impuesto = 10', async (done) => {
  //   const ingreso = 18520;
  //   const costos = 3850;
  //   const porcentajeImpuesto = 10;
  //   const gananciaNeta = 13203;
  //   await testConversion({
  //     page,
  //     done,
  //     ingreso,
  //     costos,
  //     porcentajeImpuesto,
  //     gananciaNeta,
  //   })
  // });

  it('Si algun input esta vacio es NaN');
  // it('Si algun input esta vacio es NaN', async(done) => {
  //   const ingreso = "";
  //   const costos = "";
  //   const porcentajeImpuesto = NaN;
  //   const gananciaNeta = NaN;
  //   await testConversion({
  //     page,
  //     done,
  //     ingreso,
  //     costos,
  //     porcentajeImpuesto,
  //     gananciaNeta,
  //   })
  // });

  it('Si algun input no es numero es NaN');
  // it('Si algun input no es numero es NaN', async (done) => {
  //   const ingreso = "string";
  //   const costos = 1400;
  //   const porcentajeImpuesto = NaN;
  //   const gananciaNeta = NaN;
  //   await testConversion({
  //     page,
  //     done,
  //     ingreso,
  //     costos,
  //     porcentajeImpuesto,
  //     gananciaNeta,
  //   })
  // });

  // afterAll((done) => {
  //   stopStaticServer(server, done);
  // });
});
