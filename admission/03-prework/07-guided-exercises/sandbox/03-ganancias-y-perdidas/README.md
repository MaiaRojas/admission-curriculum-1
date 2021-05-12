# Ganancias y Perdidas

## Enunciado

Crear un programa que pide los ingresos, los costos y el % de impuestos,
y calcula la ganancia después de impuestos. Debe imprimir el resultado
en la web con el símbolo $ adelante.

[FIXME-VIDEO: Demo del resultado final]

## Análisis y lista de tareas

Para llevar a adelante este reto necesitaremos completar las siguientes tareas:

- Crear un archivo `index.html`.
- Crear la estructura de nuestra página web dentro de nuestro de `index.html`.
- Crear un archivo `app.js`.
- Preguntar ganancias, costos y porcentaje de impuestos por medio del
  método `window.prompt()`.
- Calcular el resultado de ganancia bruta, ganancia neta e impuestos.
- Enlazar la funcionalidad `Javascript` con la página `html`.
- Mostrar el resultado en la página web por medio del método `document.write()`

{% next "Comencemos" %}

## 1 - Crea un archivo `index.html`

## 2 - Crea la estructura de la página web

### 2.1 - Creamos la estructura básica de cualquier documento `html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body></body>
</html>
```

### 2.2 La personalizamos un poco

Cambiamos el contenido de la etiqueta `<title>` con
el texto `Ganancias y perdidas`

```html
<title>Ganancias y perdidas</title>
```

Y creamos dentro de la etiqueta `<body>` un heading principal (etiqueta `<h1`),
que diga _Coloca tus ganancias, costos y porcentaje de impuestos_.

```html
  <body>
    <h1>Coloca tus ganancias, costos y porcentaje de impuestos<h1/>
  </body>
```

{% next "Funcionalidad JS" %}

### Crea un archivo `app.js`

### Crea varios _prompt_ y guarda los valores que retornan en distintas variables

{% spoiler %}
El método `window.prompt` de la web, es una función que toma un único argumento
obligatorio, la pregunta a realizar y retorna el valor ingresado por la usuaria.

Al ejecutarse esta función muestra en pantalla un diálogo con la pregunta
y una caja de texto para que la usuaria complete.

Si quieres saber más sobre el método `window.prompt` revisa su
[documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Window/prompt)
{% endspoiler %}

```js
const ingreso = prompt("¿Cuál es el ingreso?");
const costo = prompt("¿Cuál es el costo?");
const porcentajeImpuesto = prompt("¿Cuál es el porcentaje(%) de impuestos?");
```

### Integrar la funcionalidad `Javascript` con la página `html`

Si tu recargas la página, verás que nada ha cambiado y el `window.prompt`
nunca se muestra.

Esto es porque el archivo `index.html` nunca está llamando a la funcionalidad
`Javascript` especificada en el archivo `app.js`.

Para ello necesitamos importar el archivo `app.js` dentro de
nuestra etiqueta `<body>`:

```html
<script type="text/Javascript" src="app.js"></script>
```

{% spoiler %}
Valida que las variables `ingreso`, `costo`, y `porcentajeImpuesto`
tiene el valor ingresado por la usuaria, usando `console.log`

```js
console.log(edad);
```

{% endspoiler %}

### Calcula el resultado de ganancia bruta, ganancia neta e impuestos

INSERTA EXPLICACION AQUI

```js
const gananciaBruta = ingreso - costos;
const impuestos = (gananciaBruta * porcentajeImpuesto) / 100;
const gananciaNeta = gananciaBruta - impuestos;
```

{% spoiler %}
Valida que las variables `gananciaBruta`, `impuestos`, y `gananciaNeta`
tienen el valor calculado, usando `console.log`

```js
console.log(gananciaBruta);
console.log(impuestos);
console.log(gananciaNeta);
```

{% endspoiler %}

### La imprimimos en pantalla

Para escribir directamente un contenido dentro de nuestra página web, usaremos
el método `document.write()` en nuestro archivo `app.js`.

Si quieres saber más puedes revisar su
[documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Document/write).

```js
document.write("Tu ganancia neta es " + gananciaNeta);
```

## Cierre

Puedes continuar con el último
[ejercicio guiado](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/07-guided-exercises/sandbox/04-iniciales/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
[FIXME-VIDEO: ejecutar `npm run test`]
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
[FIXME-VIDEO: ejecutar `npm run submit`]
{%endspoiler%}
