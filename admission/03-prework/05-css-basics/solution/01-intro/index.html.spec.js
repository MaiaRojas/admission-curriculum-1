const fs = require('fs');
const { JSDOM } = require("jsdom");
const css = require('css');
const { CssSelectorParser } = require('css-selector-parser');

const html = fs.readFileSync('./index.html', 'utf-8');
const page = new JSDOM(html);
const { window } = page;
const { document } = window;

const cssSelParser = new CssSelectorParser();

/**
 * 
 * @param {String} attr
 *  El nombre del atributo a contar, por ejemplo `classNames`, `id` o `tagName`
 * 
 * @returns {Object}
 *  Los keys son los valores encontrados para `attr`,
 *  Los values son la cantidad de elementos que tienen ese valor de `attr`
 */
const elementAttributeCount = (attr) => {
  const nodeIterator = document.createNodeIterator(
    document.documentElement,
    window.NodeFilter.SHOW_ELEMENT,
  );

  const attrCounts = {};
  let currentNode;

  while (currentNode = nodeIterator.nextNode()){
    if (currentNode[attr]) {
      // Si es la primera vez q aparece, inicializamos su count en 0
      if (!attrCounts.hasOwnProperty(currentNode[attr])) {
        attrCounts[currentNode[attr]] = 0;
      }
      attrCounts[currentNode[attr]] += 1;
    }
  }

  return attrCounts;
}

describe('CSS Basics: Intro', () => {
  it('Dos etiquetas distintas con misma clase', () => {
    const classNames = elementAttributeCount('className');

    // todos los counts mayores que 1
    let classNamesCountGreaterThan1 = Object.values(classNames).filter((n) => n > 1);
    expect(classNamesCountGreaterThan1.length).toBeGreaterThan(0)
  });
  it('Dos etiquetas iguales con distinta clase', () => {
    const tagNames = elementAttributeCount('tagName');

    // todos los counts mayores que 1
    let tagNamesCountGreaterThan1 = Object.values(tagNames).filter((n) => n > 1);
    expect(tagNamesCountGreaterThan1.length).toBeGreaterThan(0)
  });
  it('Una etiqueta HTML con id unico', () => {
    const ids = elementAttributeCount('id');

    // todos los counts de ids iguales a 1
    let idsCountEqualTo1 = Object.values(ids).filter((n) => n === 1);
    expect(idsCountEqualTo1.length).toBeGreaterThan(0)
  });
  it('Ninguna etiqueta HTML con id repetido', () => {
    const ids = elementAttributeCount('id');

    // todos los counts de ids mayores que 1
    let idsCountGreaterThan1 = Object.values(ids).filter((n) => n > 1);
    expect(idsCountGreaterThan1.length).toBe(0)
  });
  it('Ids definidos en HTML deben tener estilos en CSS', () => {
    const idsInHtml = Object.keys(elementAttributeCount('id'));

    const style = document.querySelector('style').innerHTML;
    const { rules } = css.parse(style).stylesheet;
    const idsInCss = rules.reduce((accum, r) => {
      if (r.type === 'rule') {
        let idsInSelectors = [];
        r.selectors.forEach((selector) => {
          // Analizamos el selector en busca de `id`
          const { id } = cssSelParser.parse(selector).rule;
          if (id) {
            idsInSelectors = [...idsInSelectors, id];
          }
        });
        return [...accum, ...idsInSelectors];
      }
      return accum;
    }, []);

    expect(idsInCss).toEqual(expect.arrayContaining(idsInHtml));
  });
  it('Clases definidas en HTML deben tener estilos en CSS', () => {
    const classNamesInHtml = Object.keys(elementAttributeCount('className'));

    const style = document.querySelector('style').innerHTML;
    const { rules } = css.parse(style).stylesheet;
    const classNamesInCss = rules.reduce((accum, r) => {
      if (r.type === 'rule') {
        let classNamesInSelectors = [];
        r.selectors.forEach((selector) => {
          // Analizamos el selector en busca de `class`
          const { classNames } = cssSelParser.parse(selector).rule;
          if (classNames && classNames.length > 0) {
            classNamesInSelectors = [...classNamesInSelectors, ...classNames];
          }
        });
        return [...accum, ...classNamesInSelectors];
      }
      return accum;
    }, []);

    expect(classNamesInCss).toEqual(expect.arrayContaining(classNamesInHtml));
  });
  it('Alguna regla con selector combinado', () => {
    const style = document.querySelector('style').innerHTML;
    const { rules } = css.parse(style).stylesheet;

    const combinedSelectors = rules.reduce((accum, rule) => {
      const ruleCombinedSelectors = !rule.selectors
        ? []
        : rule.selectors.reduce((rules, sel) => {
          // Analizamos el selector
          const { rule } = cssSelParser.parse(sel);
          // todas tienen la prop `type`, pero ademas pueden tener tagName, className e id
          // el -1 es para quitar el type, porque si tiene 2 o mas props, es combinado
          if (Object.keys(rule).length - 1 > 1) {
            return [...rules, rule];
          }
          return rules;
        }, []);
      return [...accum, ...ruleCombinedSelectors];
    }, []);

    expect(combinedSelectors.length).toBeGreaterThan(0);
  });
  it('Un comentario', () => {
    const style = document.querySelector('style').innerHTML;
    const { rules } = css.parse(style).stylesheet;
    const comments = rules.filter((r) => r.type === 'comment');
    expect(comments.length).toBeGreaterThan(0);
  });
})