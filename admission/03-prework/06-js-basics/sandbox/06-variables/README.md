# Variables

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Aprender qué son _variables_ y su utilidad.
- Conocer las buenas prácticas de nombramiento de variables.

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 2 de [Eloquent Javascript](http://eloquentJavascript.net/), de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-Javascript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](https://github.com/hectorip).

{% next "Variables" %}

## Variables

{%spoiler "Recuerda inicializar tu proyecto con `npm install`"%}
{% video https://www.youtube.com/watch?v=QdtKomkVWXE %}
{%endspoiler%}

Ya conoces los tipos de datos más comunes en Javascript. Sabes crear, combinar y
transformar `numbers`, `strings` y `booleans`. Pero, ¿qué podemos hacer con
esto? Hasta ahora, todo lo que has trabajado ha sido para uso inmediato. Es
decir, los nuevos valores que generamos deben ser inmediatamente utilizados o se
pierden. Sigue en tu terminal el siguiente ejemplo:

```js
console.log('Hola, mi nombre es ' + 'Michelle' + ' y tengo ' + 19 + ' años');
// retorna: "Hola, mi nombre es Michelle y tengo 19 años"
```

{%spoiler "¿Cómo ejecutar un archivo `.js` en la terminal?"%}
{% video https://www.youtube.com/watch?v=IoVRipOlUsc&t=7m04s %}
{%endspoiler%}

Si quisiera utilizar ese `string` de nuevo, digamos porque Michelle cumplió años
y ahora queremos que diga 20 años en lugar de 19, no lo podemos hacer. Se ha
perdido.

Para atrapar y mantener los valores, Javascript proporciona una cosa llamada
`variable`. Se utiliza así:

```js
let age = 19;
// retorna: undefined
```

La palabra clave (_keyword_) `var` indica que esta frase va a definir una
variable. Es seguida por el nombre de la variable (el nombre _age_) y, si
queremos asignarle de inmediato un valor, le sigue el operador `=` (operador de
asignación) y una expresión (el número `19`).

La declaración anterior crea una variable llamada `age` (o edad en español) y se
usa para retener el número `19`. La terminal devuelve `undefined`, pero no creas
que es un error. Es lo que Javascript hace cuando un comando no retorna valor.
Cuando escribes `12 + 5`, la terminal retorna `17`. Pero al declarar una variable
llamada `age` asignándole el valor `19`, no hay un valor de retorno. Por eso la
terminal simplemente devuelve `undefined` (en el resto de los ejemplos vamos a
omitir ese `undefined` de retorno porque no agrega mucho valor a la
explicación).

Después de que una variable se ha definido, su nombre puede ser usado como una
_expresión_. El valor de esa expresión es el valor que la variable alberga
actualmente. Sigamos con el ejemplo anterior:

```js
// declaramos `age` usando `const` ya que no vamos a reasignar esta variable.
const age = 19;
console.log('Hola, mi nombre es ' + 'Michelle' + ' y tengo ' + age + ' años');
// retorna: "Hola, mi nombre es Michelle y tengo 19 años"
```

La terminal nos ayuda a saber el valor de una variable. Si escribimos el nombre
de una variable que ha sido declarada, nos devuelve su valor.

Si esa variable no ha sido declarada, retorna un error.

Y si la variabla ha sido declarada, pero no le hemos asignado valor,
devuelve `undefined`.

```js
console.log(age);
// retorna: Uncaught ReferenceError: age is not defined
//           at <anonymous>:1:1

const age = 19;
console.log(age);
// retorna: 19

let weight;
console.log(weight);
// retorna: undefined
```

Cuando una variable apunta a un valor, eso no quiere decir que está ligada a ese
valor para siempre. De hecho, se llaman variables porque su valor puede variar.
El operador de asignación (`=`) se puede utilizar en cualquier momento en
variables existentes (declaradas con `let` o `var`) para desconectarlas de su
valor actual y apuntarlas a uno nuevo (identificadores declarados con `const` no
se pueden reasignar).

```js
let age = 19;
// retorna: undefined
age = 20;
// retorna: 20
console.log('Hola, mi nombre es ' + 'Michelle' + ' y tengo ' + age + ' años');
// retorna: "Hola, mi nombre es Michelle y tengo 20 años"
```

Ten en cuenta que para reasignarle un valor, no tienes que utilizar la _keyword_
`let` de nuevo. Solo la utilizas cuando queremos _declarar_ nuevas
variables.

Muchas veces se explica el concepto de variables con la analogía de una caja:
las variables son como "caja" en las que puedes meter algún valor que luego
pudes cambiar por otro. Sin embargo, una analogía más fiel es pensar en
variables como **tentáculos**. Las variables en realidad no es que "contengan"
los valores (como una caja); más bien los agarra (como un tentáculo). De hecho,
dos variables pueden referirse a un mismo valor. Un programa puede acceder sólo
a los valores que todavía mantiene "agarrados". Cuando necesitas recordar algo,
creas un tentáculo nuevo para "agarrarlo" o cambias unos de tus tentáculos
existentes para agarrar lo nuevo.

{% next "Nombrando Variables" %}

## Nombrando Variables

En Javascript, existen ciertas reglas para nombrar variables. Los nombres de
variables:

1. **No** pueden incluir espacios
2. **No** pueden ser palabras reservadas (o _keywords_), como la palabra `var`
3. **No** pueden comenzar con números, aunque sí pueden haber números dentro del
   nombre (solo que no al comienzo)
4. **No** pueden contener signos de puntuación, con la excepción de los signos
   `$` y `_`

No seguir alguna de las reglas anteriores resulta en un **error** por parte de
Javascript.

Además de estas reglas, existen una serie de "sugerencias" que debes tomar en
consideración a la hora de nombrar variables. Son "sugerencias" porque
Javascript no te dará un error si no las sigues. Sin embargo, son "buenas
prácticas" de escritura de código que hacen que tu trabajo sea de mejor calidad.
Las sugerencias son:

1. Convención _camel case_. Dado que no podemos incluir espacios en los nombres
   de variables, una convención que se utiliza es la de `camel case`. La
   convención dicta que el nombre de la variable empieza con una letra minúscula
   y se coloca en mayúscula la primera letra de las palabras que continúan. Por
   ejemplo: `numberOfCandies` o `studentTechScore`. Se llama _camel case_ porque
   simula una joroba de camello.
2. Utilizar nombres en inglés. La programación está basada en el inglés, así que
   es buena práctica que te acostumbres a escribir tu código en inglés.
3. Utiliza nombres descriptivos. Al igual que las otras sugerencias, algo que
   siempre tienes que tomar en cuenta es que otras personas leerán tu código y
   debes hacer el esfuerzo por utilizar nombres descriptivos que ayuden al
   lector a entender mejor lo que hace tu programa.

Veamos algunos ejemplos:

| Mal nombre | Problema | Mejor nombre
| ------------| -------- | ------------
| age of fiends | Error: contiene espacios | ageOfFriends
| null | Error: palabra clave (keyword) | empty
| 1stName | Error: empieza con número | firstName
| full.price | Error: contiene "." | fullPrice
| full_price | no usa camel case | fullPrice
| x | no es descriptivo | age
| altura | en español | height

{% next "Incrementar y Disminuir" %}

## Incrementar y Disminuir

Como programadora, muchas veces tendrás que incrementar o disminuir el valor de
una variable numérica por un cierto valor. Por ejemplo, puede que tengas la
variable `score` que registra el puntaje en un juego de fútbol. Cada vez que
alguien anote un gol, la variable `score` debe aumentar en 1. Esto lo puedes
hacer de la siguiente manera:

```js
let score = 0;
score = score + 1;
console.log(score);
// retorna: 1
```

Esto mismo se puede escribir de una manera más sencilla:

```js
let score = 0;
score++;
console.log(score);
// retorna: 1
```

Lo mismo podemos hacer para disminuir el valor de una variable. Por ejemplo, en
un video juego puede que tengas una variable llamada `lifePoints` que registra
los "puntos de vida" de un jugador. El jugador parte con 100 puntos y cada vez
que un enemigo lo golpea, pierde 25 puntos. Cada vez que toma una bebida
regenera 10 puntos.

```js
let lifePoints = 100;
lifePoints = lifePoints - 25;
console.log(lifePoints);
// retorna: 75

lifePoints = lifePoints + 10;
console.log(lifePoints);
// retorna: 85
```

Esto se puede escribir de una manera reducida, así:

```js
let lifePoints = 100;
lifePoints -= 25;
console.log(lifePoints);
// retorna: 75

lifePoints += 10;
console.log(lifePoints);
// retorna: 85
```

Existen otros operadores similares a `+=` y `-=`. Por ejemplo, existen también
`*=` y `/=`:

```js
let balloons = 100;
balloons *= 2;
console.log(balloons);
// retorna: 200

let balloons = 100;
balloons /= 4;
console.log(balloons);
// retorna: 25
```

{% next "Declaración de variables no reasignables" %}

## Declaración de variables no reasignables con "const"

Las variables de solo lectura son otra de las novedades de ECMAScript 6,
mediante la introducción de la nueva palabra reservada `const`. Cualquier
variable declarada como constante no podrá ser reasignada.

Veamos un ejemplo:

```js
const HELLO = 'hello world';
HELLO = 'hola mundo';
// Dará ERROR, ya que `HELLO` no puede ser reasignada
```

En este ejemplo vemos cómo desde el momento en que declaramos la constante
`HELLO`, su valor queda blindado y el intérprete lanzará error al tratar de
asignar un nuevo valor.

```js
const PI;
PI = 3.15;
// Dará ERROR, ya que ha de asignarse un valor en la declaración
```

## Cierre

Puedes continuar a tu próxima lección sobre
[funciones](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/06-js-basics/sandbox/07-functions/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
{% video https://www.youtube.com/watch?v=IoVRipOlUsc&t=10m04s %}
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
{% video https://www.youtube.com/watch?v=IoVRipOlUsc&t=12m35s %}
{%endspoiler%}
