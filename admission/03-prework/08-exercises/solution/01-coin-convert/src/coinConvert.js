function coinConvert(dolares) {
  // Asigna el monto equivalente en soles
  const soles = dolares * 3.65;

  // Asigna el monto equivalente en pesos mexicanos
  const pesosMexicanos = dolares * 19.96;

  // Asigna el monto equivalente en pesos chilenos
  const pesosChilenos = dolares * 699.50;

  // Asigna el monto equivalente en pesos colombianos
  const pesosColombianos = dolares * 3611.50;

  // Asigna el monto equivalente en reales
  const reales = dolares * 5.62;

  return [soles, pesosMexicanos, pesosChilenos, pesosColombianos, reales];
};

module.exports = coinConvert;
