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



  // afterAll((done) => {
  //   stopStaticServer(server, done);
  // });
});
