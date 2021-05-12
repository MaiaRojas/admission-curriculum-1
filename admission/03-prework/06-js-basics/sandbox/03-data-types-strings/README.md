# Javascript basics: Strings

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Conocer los tipos de datos _String_ (texto) y sus operaciones más comunes.
- Entender qué son los ?operadores unitarios_, cuáles son los más comunes y
  cómo se usan.

***

El texto a continuación se basa en gran medida, con ciertos ajustes, en el
capítulo 1 de [Eloquent JavaScript](http://eloquentjavascript.net/), de Marijn
Haverbeke, 2014. Traducción en [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponible gracias a [hectorip](https://github.com/hectorip).

## Strings

El siguiente _data type_ básico es el `String` (_cadena_ en español, ya que hace
referencia a _cadena de caracteres_). Es el tipo de dato que
utilzamos para representar texto. Se declaran al poner el contenido entre
comillas.

Abre tu consola y escribe lo siguiente:

```js
console.log("Hola, mi nombre es Michelle");
// retorna: "Hola, mi nombre es Michelle"

console.log('Soy desarrolladora web');
// retorna: "Soy desarrolladora web"

console.log("123");
// retorna: "123"
```

Tanto las comillas simples como las dobles pueden ser usadas para declarar
`strings`, siempre y cuando coincidan al principio y al final. Casi cualquier
cosa puede colocarse entre comillas, y JavaScript creará un _string value_ de
esa cosa.

***

**Pro tip**:

Podemos usar tanto comillas simples (`'`) como dobles (`"`) para delimitar
nuestros strings, pero por convención, normalmente en cada proyecto se elige
usar o una u otra y tratamos de ser consistentes. Esto ayuda a la _claridad_ y
_mantenibilidad_ del código a largo plazo. En nuestro caso, vamos a elegir las
comillas simples de aquí en adelante.

***

Existen un par de caracteres en los `strings` que tienen un
comportamiento especial. Por ejemplo, cuando una diagonal invertida (`\`) se
encuentra dentro de un texto entre comillas, indica que el carácter siguiente
tiene un significado especial. Esto se denomina _escapar el carácter_. Cuando el
carácter `n` sigue a una diagonal invertida (backslash - `\`), se interpreta
como una nueva línea. Similarmente, una `t` después de la diagonal invertida
significa un tab. Escribe los siguientes textos en tu consola (recuerda siempre
colocarlos entre comillas, sean simples o dobles).

```js
console.log('Esta es la primera línea \n Y esta la segunda');
// retorna: "Esta es la primera línea
//            Y esta la segunda"

console.log('Mi lenguaje favorito es \t JavaScript');
// retorna: "Mi lenguaje favorito es    JavaScript"
```

Cuando una comilla es precedida por una diagonal invertida, la comilla no
terminará la cadena sino que será parte de ella.

```js
console.log('Yo \'estudio\' en Laboratoria');
// retorna: "Yo 'estudio' en Laboratoria"
```

Existen, por supuesto, situaciones en las que querrás que una diagonal invertida
sea sólo eso en una cadena de texto, no un código especial. Si dos diagonales
invertidas están juntas, se volverán una, y sólo eso quedará como resultado en
el valor de la cadena.

```js
console.log('Un carácter de nueva línea es escrito \'\\n\'.');
// retorna: "Un carácter de nueva línea es escrito '\n'."
```

Las cadenas de texto no pueden ser divididas numéricamente, multiplicadas, o
restadas, pero el carácter + puede ser usado en ellas. No suma, sino que
concatena; pega dos `strings`. La siguiente línea produce el `string`
"concatenar":

```js
console.log('con' + 'cat' + 'e' + 'nar');
// retorna: "concatenar"
```

Ten cuidado mezclando operaciones entre _numbers_ y _strings_. Por ejemplo,
multiplicar un _number_ por un _string_ resulta en NaN.

```js
console.log('hola' * 3);
// retorna: NaN
```

Hay más maneras de manipular `strings`, que veremos más adelante.

### Operadores Unarios

No todos los operadores son símbolos. Algunos son escritos como palabras. Un
ejemplo es el operador `typeof`, que produce una cadena de caracteres (_string_)
que representa el tipo del valor que le pasaste.

```js
console.log(typeof 4.5);
// retorna: "number"

console.log(typeof 'hola');
// retorna: "string"

console.log(typeof NaN);
// retorna: "number"

console.log(typeof Infinity);
// retorna: "number"
```

Fíjate que verificamos que _NaN_ e _Infinity_ son del tipo `number` (de valor
simbólico), tal como lo mencionamos anteriormente.

Los otros operadores que hemos visto operaban sobre dos valores, pero `typeof`
sólamente toma uno. Los operadores que usan dos valores son llamados operadores
_binarios_, mientras que aquellos que sólo toman uno son llamados operadores
_unarios_.

El operador menos (`-`) puede usarse tanto como operador binario como operador
unario.

```js
console.log(- (10 - 2));
// retorna: -8
```

## Cierre

Puedes continuar a tu próxima lección sobre
[booleanos](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/06-js-basics/sandbox/04-data-types-booleans/).

> Antes de terminar recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
[FIXME-VIDEO: ejecutar `npm run submit`]
{%endspoiler%}
