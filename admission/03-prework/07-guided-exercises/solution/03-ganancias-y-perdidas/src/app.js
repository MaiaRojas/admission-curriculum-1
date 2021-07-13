const element = document.getElementById("btn");

const listener = function () {
  const ingreso = document.getElementById("ingreso").value;
  const costos = document.getElementById("costos").value;
  const porcentajeImpuesto = document.getElementById("porcentaje-impuesto").value;

  const gananciaBruta = ingreso - costos;
  const impuestos = (gananciaBruta * porcentajeImpuesto) / 100;
  const gananciaNeta = gananciaBruta - impuestos;

  const elementResultado =  document.getElementById("resultado");
  elementResultado.innerHTML = "Tu ganancia neta es " + gananciaNeta;
};

element.addEventListener("click", listener);
