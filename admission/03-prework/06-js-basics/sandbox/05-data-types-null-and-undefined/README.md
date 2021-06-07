# Javascript basics: `null` y `undefined`

- Tipo: `practice`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Entender los tipos especiales `null` y `undefined`, así como cuál es la
  diferencia entre ellos.
- Entender qué es y cuándo se da la conversión automática de tipos de datos.
- Familiarizarse con las diferentes formas de _"igualdad"_.

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 1 de [Eloquent Javascript](http://eloquentJavascript.net/), de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-Javascript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](https://github.com/hectorip).

## `null` y `undefined`

Existen dos valores especiales, escritos `null` y `undefined`, que son usados
para denotar la ausencia de un valor significativo. Son valores en sí mismos,
pero no poseen ninguna información. Muchas operaciones en el lenguaje que no
producen un valor con significado (lo verás después) producen `undefined`
simplemente porque tienen que producir algún valor.

La diferencia en el significado entre `undefined` y `null` es un accidente del
diseño de Javascript, y no importa la mayoría del tiempo.

Entender la diferencia entre `undefined` y `null` (sí hay una diferencia
semántica) es importante, y más sencillo de lo que parece. Ambos valores denotan
la ausencia de un valor, pero en un caso podríamos decir que es _intencional_
(`null`) y en el otro no (`undefined`).

El valor `undefined` significa que no se ha _asignado_ un valor, a diferencia de
`null`, que significa que hemos _asignado_ el valor `null`. Esto puede ser muy
útil para diferenciar estados en operaciones asíncronas, ... es común que
`undefined` signifique que la operación no ha completado aún, mientras que
`null` significa que completó pero retornó un valor nulo.

### Conversión automática de tipo

{%spoiler "Recuerda inicializar tu proyecto con `npm install`?"%}
{% video https://www.youtube.com/watch?v=IoVRipOlUsc&t=3m27s %}
{%endspoiler%}

Cuando un operador es aplicado al tipo "incorrecto" de valor, Javascript
convertirá silenciosamente el valor en el tipo de dato que espera, usando un
conjunto de reglas que a menudo no son lo que tú quieres o esperas. Esto es
llamado _coerción de tipo_. Mira estos ejemplos:

```js
console.log('8 * null =', 8 * null);
// retorna: 8 * null = 0

console.log("'5' - 1 =", '5' - 1);
// retorna: '5' - 1 = 4

console.log("'5' + 1 =", '5' + 1);
// retorna: '5' + 1 = 51

console.log("'cinco' * 2 =", 'cinco' * 2);
// retorna: 'cinco' * 2 = NaN

console.log('false == 0 =', false == 0);
// retorna: false == 0 = true
```

{%spoiler "¿Cómo ejecutar un archivo `.js` en la terminal?"%}
{% video https://www.youtube.com/watch?v=IoVRipOlUsc&t=7m04s %}
{%endspoiler%}

El null en la primera expresión se vuelve 0, y el "5" en la segunda expresión se
convierte en 5 (de string a number). Aún así, en la tercera expresión, + intenta
hacer concatenación de strings antes de una suma numérica, así que el 1 es
convertido en "1" (de number a string). Cuando algo que no se corresponde con un
número de manera obvia (como "cinco" o undefined) es convertido a un número, el
valor resultante es NaN. Las siguientes operaciones aritméticas sobre NaN
seguirán produciendo NaN. Por eso, en la cuarta expresión, "cinco" * 2 retorna
NaN.

En el caso de la quinta expresión, cuando comparamos valores que tienen tipos de
dato diferentes, Javascript usa un complicado y confuso conjunto de reglas para
determinar qué hacer. En la mayoría de los casos, sólo trata de convertir uno de
los valores al tipo de dato del otro valor. Sin embargo, cuando null o undefined
están en cualquier lado de la operación, resulta verdadero sólo en el caso de
que los dos lados sean null o undefined.

Siguiendo con la quinta expresión, las reglas para convertir cadenas y números a
Booleanos dicen que 0, NaN y la cadena vacía ("") cuentan como _false_, mientras
que todos los demás valores cuentan como _true_. Debido a esto, las siguientes
expresiones retornan _true_:

```js
console.log(false == 0);
// retorna: true

console.log('' == 0);
// retorna: true
```

Para casos en el que no quieres que ocurra ninguna conversión automática de
tipos, existen dos operadores extra: === y !==. El primero prueba si un valor es
precisamente igual a otro, y el segundo si no es precisamente igual. Por lo
tanto, al cambiar de == a === las mismas expresiones anteriores, tenemos el
resutado contrario: _false_:

```js
console.log(false === 0);
// retorna: false

console.log('' === 0);
// retorna: false
```

***

## Notas sobre comparaciones de igualdad/desigualdad

A continuación veremos algunas peculiaridades sobre los operadoradores de
igualdad (`==`, `!=`, `===`, `!==`). Al final de la lectura te dejamos como
referencia el link a la documentación oficial de operadores y expresiones en MDN
que recomendamos _leer_ (o por lo menos ojear).

### Diferencia entre `==` y `===`

#### Algoritmo de `==`

Cuando se evalúan dos valores con este operador, se sigue la secuencia a
continuación para determinar el resultado:

- Si son del mismo tipo, entonces, se prueban con ===.
- Si son de diferente tipo.
  * Si uno es null y otro undefined, retorna true.
  * Si uno es string y otro number, se convierte el string, y se evalúan como
    números.
  * Si uno es booleano, se transforma, true en 1 y false en 0, y se evalúan.
  * Si uno es un object y otro un number o string, convierte el objeto a
    primitivo.
  * En otros casos, devuelve false.

```js
console.log(null == undefined); // true
console.log(10 == '10');        // true
console.log(true == 1);         // true
console.log([10] == 10);        // true
console.log([] == []);          // false
```

#### Algoritmo de `===`

Esta igualdad es más estricta con sus resultados, utilizando la siguiente
secuencia para determinar el resultado:

- Si tienen diferentes tipos, devuelve false.
- Si ambos son null, devuelve true.
- Si ambos son undefined, devuelve true.
- Si uno o ambos son NaN, devuelve false.
- Si ambos son true o false, devuelve true.
- Si ambos son number y tienen el mismo valor, devuelve true.
- Si ambos son string y tienen el mismo valor, devuelve true.
- En otros casos, devuelve false.

```js
console.log(21 === "21");         // false
console.log(undefined === null);  // false
console.log(NaN === NaN);         // false
console.log([10] === 10);         // false
console.log(true === 1);          // false
console.log([] === []);           // false
console.log('10' === '10');       // true
```

Podrías tener lo siguiente en cuenta para saber cuál operador utilizar:

- Si cualquiera de los valores es boolean, utiliza `===`.
- Si no tienes claro si los valores son convertidos por coerción, usa `===`.
- En otros casos podrías usar con seguridad `==`.

> Nota: Por convención y una buena práctica la comunidad promueve el uso de
`===`.

### Desigualdades

Siempre el resultado de evaluar una desigualdad es un booleano. Los siguientes
operadores son utilizados para comparar desigualdades:

```js
<  → Menor
>  → Mayor
<= → Menor Igual
>= → Mayor Igual
```

Casos de uso:

- Si alguno es un `object`, se convierte a primitivo y se evalúa.
- Si ambos son `string`, se evalúa el orden de los caracteres alfabéticamente.
- Si ambos son `number`, se evalúa.
- En otros casos es false.

```js
console.log([10] < 9);    // false, caso 1
console.log("a" < "b");   // true, caso 2
console.log(10 >= 10);    // true, caso 3
```

## Lecturas complementarias

[Expresiones y Operadores - MDN](https://developer.mozilla.org/es/docs/Web/Javascript/Guide/Expressions_and_Operators)

## Cierre

Puedes continuar a tu próxima lección sobre
[variables](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/06-js-basics/sandbox/06-variables/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
{% video https://www.youtube.com/watch?v=IoVRipOlUsc&t=10m04s %}
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
{% video https://www.youtube.com/watch?v=IoVRipOlUsc&t=12m35s %}
{%endspoiler%}
