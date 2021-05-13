# Javascript basics: Booleans

- Tipo: `practice`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Conocer los tipos de datos _Booleans_ (verdadero/falso).
- Combinar los valores de diferentes _booleans_ usando operadores lógicos.

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 1 de [Eloquent Javascript](http://eloquentJavascript.net/), de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-Javascript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](https://github.com/hectorip).

## Booleans

A menudo, necesitarás un valor que simplemente distinga entre dos posibilidades,
como "sí" y "no" o "encendido" y "apagado". Para esto, Javascript tiene un tipo
de dato _boolean_, que tiene solo dos valores: _true_ (verdadero) y _false_
(falso).

### Operadores comparativos

Realiza esta comparación en tu consola:

```js
console.log(3 > 2);
// retorna: true

console.log(2 > 3);
// retorna: false

console.log(typeof (3 > 2));
// retorna: boolean

console.log(typeof (2 > 3));
// retorna: boolean
```

Los signos `>` y `<` son los símbolos tradicionales para "mayor que" y "menor
que", respectivamente. Estos son operadores binarios (porque operan sobre dos
valores). Aplicarlos resulta en un valor de tipo _boolean_ que indica si son
ciertos.

Los `strings` pueden ser comparados de la misma manera.

```js
console.log("Aardvark" < "Zoroaster");
// retorna: true
```

La manera en que los `strings` son ordenadas es más o menos alfabéticamente: las
letras mayúsculas son siempre "menores" que las minúsculas, así que `'Z' < 'a'`
es _true_, y los caracteres no alfabéticos (`!`, `-`, y así por el estilo) son
también incluidos en el ordenamiento. La comparación real está basada en el
estándar [Unicode](https://unicode-table.com/en/#control-character).

```js
console.log('Zeyla' < 'ana');
// retorna: true

console.log('Zeyla' < '!na');
// retorna: false
```

{% spoiler %}

Si ejecutas todos las líneas de arriba, vas ver en tu terminal algo parecido a
esto:

```js
true
false
boolean
boolean
true
false
true
```

Lo que no es realmente útil, porque ya no sabemos qué expresión se correlaciona
con qué línea de salida.

`console.log` nos permite pasar múltiples argumentos separados por comas, de
manera que podamos darle más claridad a los mensajes impresos en la terminal.

Mira por ejemplo este ejemplo:

```js
console.log('3 > 2', 3 > 2);

console.log('2 > 3', 2 > 3);

console.log('typeof (3 > 2)', typeof (3 > 2));

console.log('typeof (2 > 3)', typeof (2 > 3));

console.log('"Aardvark" < "Zoroaster"', "Aardvark" < "Zoroaster");

console.log("'Zeyla' < 'ana'", 'Zeyla' < 'ana');

console.log("'Zeyla' < '!na'", 'Zeyla' < '!na');
```

Lo impreso ahora en la terminal, nos da mucha más información:

```js
3 > 2 true
2 > 3 false
typeof (3 > 2) boolean
typeof (2 > 3) boolean
"Aardvark" < "Zoroaster" true
'Zeyla' < 'ana' true
'Zeyla' < '!na' false
```

> Ten en cuenta que por practicidad, los tests de todas las lecciones de
> Javascript, sólo tendrán en cuenta al último argumento que le coloques
> a `console.log`, para realizar las validaciones.

{% endspoiler %}

Otros operadores similares son >= (mayor o igual que), <= (menor o igual que),
=== (igual que), y !== (no es igual que).

```js
console.log("'Itchy' === 'Itchy'", 'Itchy' === 'Itchy');
// retorna: 'Itchy' === 'Itchy' true

console.log("'Itchy' !== 'Scratchy'", 'Itchy' !== 'Scratchy');
// retorna: 'Itchy' !== 'Scratchy' true

console.log("5 === 5", 5 === 5);
// retorna: 5 === 5 true

console.log("10 !== 'diez'", 10 !== 'diez');
// retorna: 10 !== 'diez' true
```

Sólo existe un valor en Javascript que no es igual a sí mismo, y este es NaN,
que significa "no es un número".

```js
console.log('NaN === NaN', NaN === NaN);
// retorna: NaN === NaN false
```

La intención de NaN es representar el resultado de un cálculo sin sentido y como
tal, no es igual al resultado de cualquier otro cálculo sin sentido.

### Operadores Lógicos

Hay también algunas operaciones que pueden ser aplicadas a los valores
`Booleans`. Javascript soporta tres operadores lógicos: _and_, _or_ y _not_.
Estos pueden ser usados para "razonar" con los `Booleans`.

El operador `&&` representa la operación lógica _and_ ("y"). Es un operador
binario, y su resultado es _true_ (verdadero) sólo si los dos valores dados son
verdaderos. El operador `||` denota la operación lógica or ("o"). Devuelve
verdadero si cualquiera de los dos valores dados es verdadero. _Not_ (Negación)
es escrito como un símbolo de admiración `!`. Es un operador binario que voltea
el valor que se le de; !true produce false y !false produce true. Veamos unos
ejemplos:

```js
console.log('true && true =', true && true);
// retorna: true && true = true

console.log('true && false =', true && false);
// retorna: true && false = false

console.log('false && false =', false && false);
// retorna: false && false = false

console.log('true || true =', true || true);
// retorna: true || true = true

console.log('false || true  =', false || true);
// retorna: false || true = true

console.log('false || false =', false || false);
// retorna: false || false = false

console.log('!true =', !true);
// retorna: !true = false

console.log('!false =', !false);
// retorna: !false = true

```

El último operador lógico del que aprenderás no es unario, ni binario, sino
ternario, opera en tres valores. Este es escrito con un símbolo de interrogación
y dos puntos, como sigue:

```js
console.log('(true ? 1 : 2) = ', true ? 1 : 2);
// retorna: (true ? 1 : 2) = 1

console.log("(false ? 1 : 2) =", false ? 1 : 2);
// retorna: (false ? 1 : 2) = 2
```

Este es llamado el operador condicional (o algunas veces el operador tenario
dado que es el único operador de este tipo en el lenguaje). El valor a la
izquierda del signo de interrogación "escoge" cuál de los otros dos valores
resultará. Cuando es verdadero, el valor central es escogido, y cuando es falso,
el valor de la derecha se da como resultado.

## Cierre

Puedes continuar a tu próxima lección sobre
[tipos especiales](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/06-js-basics/sandbox/05-data-types-null-and-undefined/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
[FIXME-VIDEO: ejecutar `npm run test`]
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
[FIXME-VIDEO: ejecutar `npm run submit`]
{%endspoiler%}
