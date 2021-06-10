const path = require('path');
const { e2e: { initStaticServer, stopStaticServer } } = require('@laboratoria/prework-test-utils');

const srcPath = path.normalize(__dirname + '/../src');
let server;

const testConversion = async ({ page, done, nombre, iniciales }) => {
  await page.goto('http://localhost:5000');

  await page.type('#name', `${nombre}`);

  await page.$eval('#btn', (el) => {
    el.click();
  });

  const message = await page.$eval('#resultado', (el) => el.innerHTML);
  expect(message).toBe(`Tus iniciales son ${iniciales}`);
  done();
}

describe('Guided Exercises: Iniciales', () => {
  beforeAll((done) => {
    server = initStaticServer(srcPath, {}, done);
  });

  afterEach(async () => {
    page = await browser.newPage();
  });

  it('La página tiene el title correcto', async (done) => {
    await page.goto('http://localhost:5000');
    expect(page.title()).resolves.toMatch('Iniciales').then(done);
  });

  it('nombre = ana martinez, iniciales = AM', async (done) => {
    const nombre = "ana martinez";
    const iniciales = "AM";

    await testConversion({
      page,
      done,
      nombre,
      iniciales
    })
  });

  it('nombre = Michelle Seguil, iniciales = MS', async (done) => {
    const nombre = "Michelle Seguil";
    const iniciales = "MS";

    await testConversion({
      page,
      done,
      nombre,
      iniciales
    })
  });

  it('Si el input es vacio', async (done) => {
    const nombre = "";
    const iniciales = "";
    await testConversion({
      page,
      done,
      nombre,
      iniciales
    })
  });

  it('Si el input no tiene espacio', async (done) => {
    const nombre = "Monica";
    const iniciales = "MM";
    await testConversion({
      page,
      done,
      nombre,
      iniciales
    })
  })

  it('Si el input tiene un solo espacio al final', async (done) => {
    const nombre = "Monica ";
    const iniciales = "M";
    await testConversion({
      page,
      done,
      nombre,
      iniciales
    })
  })

  afterAll((done) => {
    stopStaticServer(server, done);
  });
});
