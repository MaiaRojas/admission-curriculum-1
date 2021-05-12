# Edad en segundos

## Enunciado

Crea una página web que solicite a la usuaria su edad **en años** utilizando `window.prompt()`,
y pinte su edad **en segundos** en la pantalla utilizando `document.write()`.

[FIXME-VIDEO: Demo del resultado final]

## Análisis y lista de tareas

Para llevar a adelante este reto necesitaremos completar las siguientes tareas:

- Crear un archivo `index.html`.
- Crear la estructura de nuestra página web dentro de nuestro de `index.html`.
- Crear un archivo `app.js`.
- Preguntar la edad por medio del método `window.prompt()`.
- Convertir la edad ingresada en segundos.
- Enlazar la funcionalidad `Javascript` con la página `html`.
- Mostrar el resultado en la página web por medio del método `document.write()`

{% next "Comencemos" %}

## 1 - Crea un archivo `index.html`

## 2 - Creamos la estructura básica de cualquier documento `html` dentro de `index.html`

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

## 3 - La personalizamos un poco

Cambiamos el contenido de la etiqueta `<title>` con el texto `Edad en segundos`

```html
    <title>Edad en segundos</title>
```

Y crearemos dentro de la etiqueta `<body>` un heading principal (etiqueta `<h1>`),
que diga _Coloca tu edad en años_.

```html
  <body>
    <h1>Coloca tu edad en años<h1/>
  </body>
```

{% spoiler %}
Revisa el resultado en tu navegador, debería ser algo parecido a esto
[FIXME: screenshot]
{% endspoiler %}

{% next "Funcionalidad JS" %}

## 1 - Crea un archivo `app.js`

## 2 - Crea tu _window.prompt_ y guarda el valor retornado en una variable

{% spoiler %}
El método `window.prompt` de la web, es una función que toma un único argumento obligatorio,
la pregunta a realizar y retorna el valor ingresado por la usuaria.

Al ejecutarse esta función muestra en pantalla un diálogo
con la pregunta y una caja de texto para que la usuaria complete.

[FIXME screenshot]

Si quieres saber más sobre el método `window.prompt`
revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Window/prompt)
{% endspoiler %}

```js
const edad = prompt('¿Cuál es tu edad?');
```

## 3 - Integra la funcionalidad `Javascript` con la página `html`

Si tu recargas la página, verás que nada ha cambiado y el `window.prompt`
nunca se muestra.

Esto es porque el archivo `index.html` nunca está llamando a la funcionalidad
`Javascript` especificada en el archivo `app.js`.

Para ello necesitamos importar el archivo `app.js` dentro de nuestra
etiqueta `<body>`:

```html
  <script type="text/Javascript" src="app.js"></script>
```

{% spoiler %}
Valida que la variable `edad` tiene el valor ingresado por la usuaria, usando
`console.log`

```js
console.log(edad);
```

{% endspoiler %}

## 4 - Vamos a codear la solición

### 4.1 - Convierte la edad a segundos

Dado que dentro de un año existe **365** días, y cada día tiene **24** horas,
y que cada hora cuenta con **60** minutos y cada minuto con **60** segundos,
entonces convertimos los años en segundos siguiendo esa lógica:

```js
const edadEnSegundos = edad * 365 * 24 * 60 * 60;
```

{% spoiler %}
Valida que la variable `edadEnSegundos` tiene el valor calculado, usando
`console.log`

```js
console.log(edadEnSegundos);
```

{% endspoiler %}

### 4.2 - La imprimimos en pantalla

Para escribir directamente un contenido dentro de nuestra página web, usaremos
el método `document.write()` en nuestro archivo `app.js`.

Si quieres saber más puedes revisar su
[documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Document/write).

```js
document.write("Tu edad es " + edad + ", en segundos sería " + edadEnSegundos);
```

## Cierre

Puedes continuar con tu próximo
[ejercicio guiado](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/07-guided-exercises/sandbox/02-convertidor-de-temperatura/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
[FIXME-VIDEO: ejecutar `npm run test`]
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
[FIXME-VIDEO: ejecutar `npm run submit`]
{%endspoiler%}
