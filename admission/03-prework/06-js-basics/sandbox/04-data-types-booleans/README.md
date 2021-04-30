# Javascript basics: Booleans

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Conocer los tipos de datos _Booleans_ (verdadero/falso).
- Combinar los valores de diferentes _booleans_ usando operadores lógicos.

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 1 de [Eloquent JavaScript](http://eloquentjavascript.net/), de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](https://github.com/hectorip).

## Booleans

A menudo, necesitarás un valor que simplemente distinga entre dos posibilidades,
como "sí" y "no" o "encendido" y "apagado". Para esto, JavaScript tiene un tipo
de dato _boolean_, que tiene solo dos valores: _true_ (verdadero) y _false_
(falso).

### Operadores comparativos

Realiza esta comparación en tu consola:

```js
3 > 2
// retorna: true

2 > 3
// retorna: false

typeof (3 > 2)
// retorna: "boolean"

typeof (2 > 3)
// retorna: "boolean"
```

Los signos `>` y `<` son los símbolos tradicionales para "mayor que" y "menor
que", respectivamente. Estos son operadores binarios (porque operan sobre dos
valores). Aplicarlos resulta en un valor de tipo _boolean_ que indica si son
ciertos.

Los `strings` pueden ser comparados de la misma manera.

```js
"Aardvark" < "Zoroaster"
// retorna: true
```

La manera en que los `strings` son ordenadas es más o menos alfabéticamente: las
letras mayúsculas son siempre "menores" que las minúsculas, así que `'Z' < 'a'`
es _true_, y los caracteres no alfabéticos (`!`, `-`, y así por el estilo) son
también incluidos en el ordenamiento. La comparación real está basada en el
estándar [Unicode](https://unicode-table.com/en/#control-character).

```js
'Zeyla' < 'ana'
// retorna: true

'Zeyla' < '!na'
// retorna: false
```

Otros operadores similares son >= (mayor o igual que), <= (menor o igual que),
=== (igual que), y !== (no es igual que).

```js
'Itchy' === 'Itchy'
// retorna: true

'Itchy' !== 'Scratchy'
// retorna: true

5 === 5
// retorna: true

10 !== 'diez'
// retorna: true
```

Sólo existe un valor en JavaScript que no es igual a sí mismo, y este es NaN,
que significa "no es un número".

```js
NaN === NaN
// retorna: false
```

La intención de NaN es representar el resultado de un cálculo sin sentido y como
tal, no es igual al resultado de cualquier otro cálculo sin sentido.

### Operadores Lógicos

Hay también algunas operaciones que pueden ser aplicadas a los valores
`Booleans`. JavaScript soporta tres operadores lógicos: _and_, _or_ y _not_.
Estos pueden ser usados para "razonar" con los `Booleans`.

El operador `&&` representa la operación lógica _and_ ("y"). Es un operador
binario, y su resultado es _true_ (verdadero) sólo si los dos valores dados son
verdaderos. El operador `||` denota la operación lógica or ("o"). Devuelve
verdadero si cualquiera de los dos valores dados es verdadero. _Not_ (Negación)
es escrito como un símbolo de admiración `!`. Es un operador binario que voltea
el valor que se le de; !true produce false y !false produce true. Veamos unos
ejemplos:

```js
true && true
// retorna: true

true && false
// retorna: false

false && false
// retorna: false

true || true
// retorna: true

true || false
// retorna: true

!true
// retorna: false

!false
// retorna: true

```

El último operador lógico del que aprenderás no es unario, ni binario, sino
ternario, opera en tres valores. Este es escrito con un símbolo de interrogación
y dos puntos, como sigue:

```js
true ? 1 : 2
// retorna: 1

false ? 1 : 2
// retorna: 2
```

Este es llamado el operador condicional (o algunas veces el operador tenario
dado que es el único operador de este tipo en el lenguaje). El valor a la
izquierda del signo de interrogación "escoge" cuál de los otros dos valores
resultará. Cuando es verdadero, el valor central es escogido, y cuando es falso,
el valor de la derecha se da como resultado.
