# Funciones

- Tipo: `practive`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Aprender qué son _variables_ y su utilidad.
- Conocer las buenas prácticas de nombramiento de variables.

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 3 de [Eloquent JavaScript](http://eloquentjavascript.net/), de Marijn
Haverbeke, 2014. Traducción en
[Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/03_functions.html)
disponible gracias a [hectorip](https://github.com/hectorip).

{% next "Introducción" %}

## Introducción

Has visto valores función, como `alert`, y cómo llamarlos. Las funciones son el
pan de cada día en la programación en JavaScript. El concepto de de envolver una
porción del programa en un valor (variable) tiene muchos usos. Es una
herramienta para estructurar programas más grandes, para reducir la repetición,
para asociar nombres con subprogramas, y para separar estos programas de los
demás.

La aplicación más obvia de las funciones es la de definir un nuevo vocabulario.
Crear nuevas palabras en la prosa regular en lenguaje humano es usualmente una
mala práctica. Pero en programación, es indispensable.

Un adulto promedio tiene unas 20,000 palabras en su vocabulario. Pocos lenguajes
de programación tienen 20,000 comandos incorporados. Y el vocabulario que está
disponible tiende a ser definido de forma más precisa, así que es menos flexible
que en un lenguaje humano. En consecuencia, usualmente tenemos que añadir algo
de nuestro propio vocabulario para evitar repetirnos demasiado.

{% next "Definiendo una función" %}

## Definiendo una función

Una definición de una función es sólo una definición regular de una variable
cuando ocurre que el valor dado a la variable es una función. Por ejemplo, el
siguiente código define la variable `cuadrado` para referirse a la función que
produce el cuadrado de un número dado:

```js
const cuadrado = function(x) {
  return x * x;
};

console.log(cuadrado(12));
// Retorna: 144
```

Una función es creada por una expresión que empieza con la palbra reservada
`function`. Las funciones tienen un conjunto de parametros (en este caso sólo
`x`) y un cuerpo, que contiene las sentencias que serán ejecutadas cuando la
función sea llamada. El cuerpo de la función tiene que estar siempre encerrado
en llaves, incluso cuando consista de una sola instrucción (como en el ejemplo
previo).

Una función puede tener varios parámetros o puede no tener ninguno. En el
siguiente ejemplo `hazRuido` no tiene parámetros, mientras que `potencia` tiene dos:

```js
const hazRuido = function() {
  console.log("Pling!");
};

hazRuido();
// Retorna: Pling!

const potencia = function(base, exponente) {
  return Math.pow(base, exponente);
};

console.log(potencia(2, 10));
// Retorna: 1024
```

Algunas funciones producen un valor, como `potencia` y `cuadrado`, y algunas no,
como `hazRuido`, la cuál produce sólo un efecto secundario. Una sentencia
`return` determina el valor que una función regresa. Cuando el control pasa a
esta sentencia, inmediatamente salta fuera de la función actual y pasa el valor
retornado a la código que llamó la función. La palabra reservada return sin una
expresión después de ella hará que la función devuelva undefined.

### Parámetros y ámbitos

Los parametros para una función se comportan como variables normales, pero su
valor inicial esta dado por quien llama a la función, no por el código mismo de
la función.

Un propiedad importante de las funciones es que las varibales creades dentro de
ellas, incluyendo sus parámetros, son locales para la función. Este significa,
por ejemplo, que la varibale resultado en el ejemplo potencia será creada de
nuevo cada vez que la función es llamada, y estas instancias separadas no
interfieren entre ellas.

Esta "localidad" de las variables aplica sólo a los parámetros y variables
declaradas con la palabra reservada const dentro del cuerpo de la función. Las
variables declaradas duera de cualquier función son llamadas globales, porque
son visibles a través de todo el programa. Es posible acceder a estas variables
desde dentro de una función, mientras no hayas declarado una variable local con
el mismo nombre.

El siguiente código demuestra eso. Define y llama dos funciones que asignan un
valor a la variable x. La primera declara la variable como local y de esta
manera cambia únicamente la variable que creó. La segunda no declara x
localmente, así que la x dentro de ella hace referencia a la x definida al
principio del ejemplo.

```js
const x = "fuera";

const f1 = function() {
  const x = "dentro de f1";
};
f1();
console.log(x);
// Retorna: fuera

const f2 = function() {
  x = "dentro de f2";
};
f2();
console.log(x);
// Retorna: dentro de f2
```

Este comportamiento ayuda a prevenir interferencia accidental entre las
funciones. Si todas las variables fueran compartidas por el programa entero,
sería muy difícil asegurarse de que algún nombre no fue usado para dos
propósitos diferentes. Y si reusaste un nombre de variable, podrías ver efectos
extraños de código no relacionado causando problemas en el valor de tu variable.
Al tratar tus variables locales a la función, el lenguaje hace posible leer y
entender las funciones como un pequeños universos, sin tener que preocuparse de
todo el código a la vez.

### Notación de Declaración

Existe una forma más corta de decir `const square = function…`. La palabra
reservada `function` puede ser usada al principio de una sentencia, como sigue:

```js
function cuadrado(x) {
  return x * x;
}
```

Esta es una declaración de función. La expresión define la variable cuadrado y
la apunta a la función dada. Hasta aquí todo bien. sin embargo, hay una pequeña
sutileza con esta forma de definición.

```js
console.log("El futuro dice: ", futuro());

function future() {
  return "Seguimos sin tener carros voladores.";
}
```

Este código funciona aunque la función está definida debajo del código que la
usa. Esto es debido a que las declaraciones de función no toman parte en el
flujo de control regular de arriba hacia abajo. Son movidas conceptualmente a la
parte superior de su ámbito y pueden ser usadas por todo el código en ese
ámbito. Esto es útil algunas veces porque nos da la libertad de organizar el
código de una manera parezca significativa sin preocuparnos por definir todas
las funciones antes de su primer uso.
