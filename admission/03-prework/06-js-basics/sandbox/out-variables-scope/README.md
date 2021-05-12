# Variables

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Entender los diferentes _ámbitos_ (scopes) donde puede vivir una variable.
- Conocer las buenas prácticas de nombramiento de variables.

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 2 de [Eloquent Javascript](http://eloquentJavascript.net/), de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-Javascript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](https://github.com/hectorip).

{% next "El scope de una variable" %}

## El scope de una variable

El _scope_ de una variable son las ubicaciones desde donde puede ser accedida.
Por ejemplo:

```js
const foo = () => {
  let x;
}
```

Aquí, el _direct scope_ (ámbito directo) de `x` es la función `foo`. Esta
variable podrá ser accedida desde dentro del cuerpo de la función `foo`, pero no
fuera de ella.

Tradicionalmente, en Javascript solo podíamos crear un nuevo scope o ámbito
creando una nueva función. Desde ES6 (ES2015) tenemos `let` y `const`, que
introducen el concepto de _block sope_ en Javascript.

### Lexical scoping

Las variables en Javascript son _lexically scoped_ (de ámbito léxico), lo que
significa que la estructura estática de un programa determina el ámbito de la
variable (no es influenciada por dónde se invoca la función). En palabras más
simples, significa que las variables declaradas dentro de un _ámbito_ (una
función, o un bloque indicado por los caracteres `{}` en el caso de `let` y
`const`), no son visibles fuera de ese _ámbito_.

### Nested Scopes (ámbitos anidados)

Si el ámbito está anidado dentro del ámbito directo de una variable, la variable
será accesible en todos los ámbitos:

```js
function foo(arg) {
  function bar() {
    console.log(`arg: ${arg}`);
  }
  bar();
}

console.log(foo('hello')); // arg: hello
```

El ámbito directo de `arg` es `foo`, pero es también accesible del ámbito
anidado `bar`. Con respecto a la anidación, `foo` es el _outer scope_ (alcance o
ámbito externo) y `bar` es el _inner scope_ (alcance o ámbito interno).

### Shadowing (sombra)

Si un scope declara una variable que tiene el mismo nombre que otra en un scope
interno de una función, el acceso a la variable externa es bloqueado en el scope
interno y todos los scopes anidados dentro de ella. Cambios a la variable
interna no afecta a la variable externa, la cual es accesible nuevamente cuando
el scope interno es dejado. Ejemplo:

```js
let x = 'global';
function f() {
  let x = 'local';
  console.log(x); // local
}
f();
console.log(x); // global
```

Dentro de la función `f`, la variable `x` es sombreada por la variable local
`x`.

***

{% next "Diferencia entre contexto y alcance" %}

## Diferencia entre contexto y alcance

Cada invocación de función tiene tanto un alcance como un contexto asociados a
ella. Fundamentalmente, el alcance es un concepto asociado a funciones mientras
que el contexto está asociado a objetos. En otras palabras, el alcance se
refiere a la accesibilidad de variables de una función cuando es invocada y es
único a cada invocación. En cambio, el contexto es siempre el valor de `this`
cuya referencia es siempre el objeto que está ejecutando el código.

### Alcance de variables

Las variables pueden ser declaradas con **alcance local** o **alcance global**,
lo cual establece su accesibilidad desde diferentes alcances en tiempo de
ejecución. Cualquier variable definida como global será accesible en tiempo de
ejecución por cualquier alcance, ya que se habrá declarado fuera del cuerpo de
una función.

En cambio, las variables locales existen solamente dentro del cuerpo de una
función o bloque. El alcance local de una variable solo se define a partir del
cuerpo de la función o bloque que la contiene.

{% next "Declaración de variables de ámbito local" %}

## Declaración de variables de ámbito local con "let"

La sentencia `let` declara una variable de alcance local, la cual,
opcionalmente, puede ser inicializada con algún valor y permite ser reasignada
(a diferencia de `const`).

El alcance de `let` es local al bloque, declaración o expresión donde se está
usando. Lo anterior diferencia la expresión `let` de la palabra reservada `var`,
la cual define una variable global o local en una función sin importar el ámbito
del bloque.

Veamos algunos ejemplos:

```js
if (x > y) {
  let gamma = 12.7 + y;
  i = gamma * x;
}
```

En el ejemplo anterior, `gamma` solo existe dentro del bloque del `if`.

```js
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
```

Podemos utilizar `let` para que la variable sea local al alcance del bucle
`for`. Si en su lugar usáramos `var`, la variable sería visible en toda la
función que contiene dicho bucle.

```js
(function () {
  if (true) {
    let x = 'hola mundo';
  }
  console.log(x);
  // Da error, porque "x" ha sido definida dentro del "if"
})();
```

En el ejemplo, `console.log(x)` no tiene acceso a `let x = "hola mundo"` y da
error porque `x` ha sido definida dentro del bloque `if`.

En el siguiente ejemplo la consola imprime `Hola Ale`, ya que la variable `x` en
el bloque del `if` se mantiene dentro de su ámbito.

```js
(function () {
  let x = 'Hola Ale';

  if (true) {
    let x = 'Hola Joan';
  }
  console.log(x);
  // Imprime en consola Hola Ale
})();
```

{% next "Declaración de variables no reasignables" %}

## Declaración de variables no reasignables con "const"

Las variables de solo lectura son otra de las novedades de ECMAScript 6,
mediante la introducción de la nueva palabra reservada `const`. Cualquier
variable declarada como constante no podrá ser reasignada.

Veamos un ejemplo:

```js
(function () {
  const HELLO = 'hello world';
  HELLO = 'hola mundo';
  // Dará ERROR, ya que `HELLO` no puede ser reasignada
})();
```

En este ejemplo vemos cómo desde el momento en que declaramos la constante
`HELLO`, su valor queda blindado y el intérprete lanzará error al tratar de
asignar un nuevo valor.

```js
(function () {
  const PI;
  PI = 3.15;
  // Dará ERROR, ya que ha de asignarse un valor en la declaración
})();
```
