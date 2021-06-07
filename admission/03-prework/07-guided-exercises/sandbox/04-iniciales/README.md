# Iniciales

## Enunciado

Crea un programa que pida el nombre y apellido a la usuaria,
y devuelva las iniciales **en mayúsculas**.

La usuaria debe ingresar dos palabras separadas por un espacio, por ejemplo:
"Ana Martinez".

Veamos unos ejemplos:

- "ana martinez" y "Ana Martinez" devuelven las iniciales "AM"
- "Michelle Seguil" y "michelle seguil" devuelven "MS"

[FIXME-VIDEO: Demo del resultado final]

## Análisis y lista de tareas

Para llevar a adelante este reto necesitaremos completar las siguientes tareas:

- Crear un archivo `index.html`.
- Crear la estructura de nuestra página web dentro de nuestro de `index.html`.
- Crear un archivo `app.js`.
- Integrar el archivo `app.js` con la página `html`.
- Preguntar el nombre y apellido por medio del `input` en html.
- Crear un botón que al ser clicado vá a:
  * Obtener el valor (nombre y apellido) insertado en el `input`
  * Obtener las iniciales.
  * Convertir las iniciales a mayúsculas.
- Escribir el resultado dentro de un elemento a través de su propiedad `innerHTML`.

{% next "Comencemos" %}

{%spoiler "Recuerda inicializar tu proyecto con `npm install`?"%}
{% https://www.youtube.com/watch?v=IoVRipOlUsc&t=3m27s %}
{%endspoiler%}

## 1 - Crea un archivo `index.html` dentro de la carpeta `src`

{%spoiler "¿Cómo crear un archivo?"%}
{% video https://www.youtube.com/watch?v=IDqkROijSJY&t=5m17s %}
{%endspoiler%}

## 2 - Crea la estructura de la página web

### 2.1 - Creamos la estructura básica de cualquier documento `html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>

  </body>
</html>
```

### 2.2 - La personalizamos un poco

Cambiamos el contenido de la etiqueta `<title>` con el texto `Iniciales`

```html
    <title>Iniciales</title>
```

Y crearmos dentro de la etiqueta `<body>` un heading principal (etiqueta `<h1>`),
que diga _Coloca las iniciales_.

```html
  <body>
    <h1>Coloca las iniciales</h1>
  </body>
```

{% next "Funcionalidad JS" %}

## 3 - Crea un archivo `app.js` dentro de la carpeta `src`

{%spoiler "¿Cómo crear un archivo?"%}
{% video https://www.youtube.com/watch?v=IDqkROijSJY&t=5m17s %}
{%endspoiler%}

## 4 - Integra con la página `html`

El archivo `index.html` no está enlazado a el archivo `app.js`
y no reconocerá las funcionalidades `Javascript`

Para ello necesitamos importar el archivo `app.js` dentro de
nuestra etiqueta `<body>`:

```html
  <script type="text/Javascript" src="app.js"></script>
```

## 5 - Añade las etiquetas necesarias

Vamos a necesitar de una etiqueta `input` para que el usuario ingrese su nombre
y apellido, y también un botón `button` para que el usuario pueda hacer click,
cuando quiera ver las iniciales.

Crea una etiqueta de `input` en el archivo `index.html`
Crea una etiqueta de `button` en el archivo `index.html`

{% spoiler %}

El código debe ser algo parecido con eso:

```html
    <input type="text">
    <br />
    <button>Iniciales</button>
```

{% endspoiler %}

## 6 - Codeamos la solución

### 6.1 - Añade el listener de `click` con `addEventListener`

Para poner "escuchar" el evento _click_ en el botón, usamos el método
`addEventListener`, pero primero necesitamos 2 cosas:

- localizar al elemento `button`. Para hacer eso, le colocaremos un `id`.
- definir un `function` que se ejecute cada vez que suceda el evento.

```html
    <button id="btn">Iniciales</button>
```

```js
const element = document.getElementById("btn")
const listener = function () {
  // Todo que está acá será ejecutado siempre que el element es clicado.
  console.log("El botón fue clickeado")
};
element.addEventListener("click", listener);
```

Si quieres saber más sobre el método `addEventListener` revisa su
[documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)

En la consola, escribe la variable `nombre` y presiona `enter`.
Debe aparecer el valor ingresado en el _prompt_.

### 6.2 - Obtenemos el nombre y apellido del `input`

Queremos obtener el nombre y apellido que el usuario colocó en el `input` cuándo
el botón es _clickeado_.

Esta funcionalidad, la colocaremos **dentro** de la función de que colocaremos
como segundo argumento de `addEventListener`.

Para obtener el nombre y apellido que ingresó la usuaria, vamos poner un `id`
en la etiquetas `input`, y así podamos extraer el valor (`value`) del `input` y
guardarlo en una variable llamada `nombre`.

```html
    <input type="text" id="name">
```

```js
const listener = function () {
  const nombre = document.getElementById("name").value;
};
```

### 6.3 - Obtenemos la inicial del nombre

Para obtener la primera inicial, vamos a usar el método `String.slice()`.

{% spoiler "Pista" %}
El método `slice()` de un `String` toma dos argumentos y sirve para cortar una
"porción" del `string`.

El primer argumento indica en qué posición del `string` vas a comenzar a cortar
y el segundo dónde vas a terminar.

> **ATENCIÓN:** La *primera* letra del _string_ está en la posición 0,
> la *segunda* letra en la posición 1, y así sucesivamente

Pruébalo en tu consola y cambia las posiciones como quiera para entender:

```js
console.log("Ana Martinez!".slice(1,5));
```

Así, para obtener la primera inicial, vamos a usar:

```js
const listener = function () {
  const nombre = document.getElementById("name").value;
  const primeraInicial = nombre.slice(0,1);
};
```

Si quieres saber más sobre el método `slice()` para _strings_ revisa su
[documentación en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
{% endspoiler %}

### 6.4 - Obtenemos la inicial del apellido

Sólo con `slice()` no es posible obtener la segunda inicial,
porque su posición no es fija, depende de la longitud del nombre.

Por ejemplo, para el nombre "Ana Martinez", la segunda inicial está en la
posición 4, pero para "Michelle Seguil" está en la posición 9.

¿Cómo podemos hacer entonces?

Veamos:

#### Buscamos la posición de la segunda inicial

Una condición común es que la primera letra del apellido está inmediatamente
después del espacio.
Entonces, primero vamos a encontrar la posición del espacio, ya que sabemos que
la posición de la segunda inicial es la siguiente.

##### Posición del espacio

Vamos utilizar el método `String.indexOf()` que toma un argumento y sirve para
encontrar la posición del argumento dentro del _string_. Esa posición es llamada
`index`.

Pruébalo en tu consola el método:

```js
//"Ana Martinez!" es el `string` dónde vamos a buscar la posición del argumento
// el argumento es el carácter " " (espacio)

console.log("Ana Martinez!".indexOf(" "))ñ
```

> **ATENCIÓN:** La *primera* letra del _string_ está en la posición 0,
> la *segunda* letra en la posición 1, y así sucesivamente

Si quieres saber más sobre el método `indexOf()` para _strings_ revisa su
[documentación en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

##### Posición de la segunda inicial

La posición de la segunda inicial es la que le sigue al espacio, por tanto:

```js
const listener = function () {
  const nombre = document.getElementById("name").value;

  const primeraInicial = nombre.slice(0,1);

  const posicionSegundaInicial = "Ana Martinez".indexOf(" ") + 1;
};
```

Como queremos hacer esto con el nombre obtenido a través del `input#nombre`,
vamos a cambiar el ejemplo por la variable

```js
const listener = function () {
  const nombre = document.getElementById("name").value;

  const primeraInicial = nombre.slice(0,1);

  const posicionSegundaInicial = nombre.indexOf(" ") + 1;
};
```

### 6.5 - Obtenemos la inicial del apellido

Ahora que ya tenemos la posición (index) de la segunda inicial,
vamos a usar `slice` nuevamente.

Vamos a cortar la _string_ comenzando en la posición de la segunda inicial y
terminando un carácter después:

```js
const listener = function () {
  const nombre = document.getElementById("name").value;

  const primeraInicial = nombre.slice(0,1);

  const posicionSegundaInicial = nombre.indexOf(" ") + 1
  const segundaInicial = nombre.slice(posicionSegundaInicial, posicionSegundaInicial + 1);
};
```

### 6.6 - Imprimimos el resultado en pantalla

Para mostrar el resultado en nuestra página web, colocaremos un elemento `p`
con `id=resultado` debajo de nuestro `button` en el cual colocaremos el resultado,
a través de su propiedad `innerHTML`.

```html
    <p id="resultado"></p>
```

```js
const listener = function () {
  const nombre = document.getElementById("name").value;

  const primeraInicial = nombre.slice(0,1);

  const posicionSegundaInicial = nombre.indexOf(" ") + 1
  const segundaInicial = nombre.slice(posicionSegundaInicial, posicionSegundaInicial + 1);

  const elementResultado =  document.getElementById("resultado");
  elementResulta.innerHTML = "Tus iniciales son " + primeraInicial + segundaInicial;
};
```

Las iniciales ya aparecen en la pantalla, pero puedes ver que cuando
escribimos un nombre como "ana martinez" (todo en minúsculas), las iniciales
deberiam ser "AM" y no "am".
Entonces, vamos a convertir las iniciales a mayúsculas.

### 6.7 - Convertimos las iniciales a mayúsculas

Para convertir cualquer _string_ en mayúsculas, vamos a usar el método `toUpperCase()`
en cada una de las iniciales.

{% spoiler %}
El método `toUpperCase()` es una función que no toma un argumento,
y retorna todo el _string_ en mayúsculas.

Si quieres saber más sobre el método `toUpperCase()` revisa su
[documentación en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
{% endspoiler %}

```js
const listener = function () {
  const nombre = document.getElementById("name").value;

  const primeraInicial = nombre.slice(0,1);

  const posicionSegundaInicial = nombre.indexOf(" ") + 1
  const segundaInicial = nombre.slice(posicionSegundaInicial, posicionSegundaInicial + 1);

  const elementResultado =  document.getElementById("resultado");
  elementResulta.innerHTML = "Tus iniciales son " + primeraInicial.toUpperCase() + segundaInicial.toUpperCase();
};
```

## Cierre

Este es el último de los ejercicios guiados. A continuación encontrarás otros 2
ejercicios, que te sugerimos intentes resolverlos por tu cuenta.
[Continuar](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/08-exercises/sandbox/01-coin-convert/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
{% video https://www.youtube.com/watch?v=IoVRipOlUsc&t=10m04s %}
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
{% video https://www.youtube.com/watch?v=IoVRipOlUsc&t=12m35s %}
{%endspoiler%}
