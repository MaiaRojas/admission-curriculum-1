function restaurantBill(cuenta, cantidadDeAmigas) {
  const impuesto = cuenta * 0.1;
  const totalDeLaCuenta = cuenta + impuesto;
  const valorFinal = totalDeLaCuenta / cantidadDeAmigas;

  return '$' + valorFinal;
};

module.exports = restaurantBill;