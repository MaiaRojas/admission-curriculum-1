const element = document.getElementById("demo");
const element2 = document.querySelector("div.example2");

const button = document.getElementById("btn");

const sayHi = function () {
  console.log("Hola");
};

button.addEventListener("click", sayHi);
