const element = document.getElementById("btn");

const listener = function () {
  const nombre = document.getElementById("name").value;

  const primeraInicial = nombre.slice(0,1);

  const posicionSegundaInicial = nombre.indexOf(" ") + 1
  const segundaInicial = nombre.slice(posicionSegundaInicial, posicionSegundaInicial + 1);

  const elementResultado =  document.getElementById("resultado");
  elementResultado.innerHTML = "Tus iniciales son " + primeraInicial.toUpperCase() + segundaInicial.toUpperCase();
};

element.addEventListener("click", listener);
