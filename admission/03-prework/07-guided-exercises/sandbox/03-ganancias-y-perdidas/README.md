# Ganancias y Perdidas

## Enunciado

Crear un programa que pide los ingresos, los costos y el % de impuestos,
y calcula la ganancia. Debe imprimir el resultado
en la web con el símbolo `$` adelante.

[FIXME-VIDEO: Demo del resultado final]

## Análisis y lista de tareas

Para llevar a adelante este reto necesitaremos completar las siguientes tareas:

- Crear un archivo `index.html`.
- Crear la estructura de nuestra página web dentro de nuestro de `index.html`.
- Crear un archivo `app.js`.
- Enlazar la funcionalidad `javascript` con la página `html`.
- Crear los `input` dentro html para que el usuario ingrese las ganancias, costos
y porcentaje de impuestos.
- Crear un botón que cuándo es clickeado calcula el resultado de ganancia bruta,
  ganancia neta e impuestos
- Escribir el resultado dentro de un elemento a través de su propiedad `innerHTML`.

{% next "Comencemos" %}

{%spoiler "Recuerda inicializar tu proyecto con `npm install`"%}
{% video https://www.youtube.com/watch?v=QdtKomkVWXE %}
{%endspoiler%}

## 1 - Crea un archivo `index.html` dentro de la carpeta `src`

{%spoiler "¿Cómo crear un archivo?"%}
{% video https://www.youtube.com/watch?v=Na07yDL88-0 %}
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
  <body></body>
</html>
```

### 2.2 - La personalizamos un poco

Cambiamos el contenido de la etiqueta `<title>` con
el texto `Ganancias y perdidas`

```html
<title>Ganancias y perdidas</title>
```

Y creamos dentro de la etiqueta `<body>` un heading principal (etiqueta `<h1>`),
que diga _Coloca tus ganancias, costos y porcentaje de impuestos_.

```html
  <body>
    <h1>Coloca tus ganancias, costos y porcentaje de impuestos</h1>
  </body>
```

{% next "Funcionalidad JS" %}

## 3 - Crea un archivo `app.js` dentro de la carpeta `src`

{%spoiler "¿Cómo crear un archivo?"%}
{% video https://www.youtube.com/watch?v=Na07yDL88-0 %}
{%endspoiler%}

## 4 - Integra con la página `html`

El archivo `index.html` no está enlazado a el archivo `app.js`
y no reconocerá las funcionalidades `javascript`

Para ello necesitamos importar el archivo `app.js` dentro de
nuestra etiqueta `<body>`:

```html
  <script type="text/javascript" src="app.js"></script>
```

En esta oportunidad, debes garantizarte que el tag `<script>` sea el último
elemento de tu `<body>`.

> Si tu colocas una etiqueta `script` en la cabecera de tu archivo `html`, ese
> código se ejecutará inmediatamente. Hasta ahora `window.prompt` le da el
> tiempo al navegador para terminar de cargar la página antes de ejecutar el
> resto del código.
> Ahora, como interactuaremos directamente con los elementos html desde el
> comienzo, necesitamos garantizar que el código Javascript, no se ejecute
> hasta que todos los elementos se hayan cargado.

## 5 - Crea los campos para poner los datos requeridos

El usuario necesitar proporcionar tres datos, `ingreso`,`costo` y
`porcentaje de impuestos`.

Además de los tres `input`, es necesario un `button`, para que al hacerle _click_,
el programa hace los cálculos e imprima el resultado en la pantalla.

```html
    <p>Ingreso:</p>
    <input type="text" />
    <br />
    <p>Costos:</p>
    <input type="text" />
    <br />
    <p>Porcentaje de impuestos:</p>
    <input type="text" />
    <br />
    <button>Calcular</button>
```

## 6 - Codeamos la solución

### 6.1 - Añade el listener de `click` con `addEventListener`

Para poner "escuchar" el evento _click_ en el botón, usamos el método
`addEventListener`, pero primero necesitamos 2 cosas:

- localizar al elemento `button`. Para hacer eso, le colocaremos un `id`.
- definir un `function` que se ejecute cada vez que suceda el evento.

```html
    <button id="btn">Calcular</button>
```

```js
const element = document.getElementById("btn");
const listener = function () {
  // Todo que está acá será ejecutado siempre que el #btn es clickeado.
  console.log("El botón fue clickeado");
};
element.addEventListener("click", listener);
```

### 6.2 - Calcula el resultado de ganancia bruta, ganancia neta e impuestos

Queremos obtener los valores que el usuario colocó en los `input` cuándo el
botón es _clickeado_.

Esta funcionalidad, la colocaremos **dentro** de la función de que colocaremos
como segundo argumento de `addEventListener`.

Para sacar los valores, vamos poner un `id` en las etiquetas `input`, y así
podamos extraer los valores (`value`) de los `input` y guardarlos en variables.

```html
    <p>Ingreso:</p>
    <input type="text" id="ingreso" />
    <br />
    <p>Costos:</p>
    <input type="text" id="costos" />
    <br />
    <p>Porcentaje de impuestos:</p>
    <input type="text" id="porcentaje-impuesto" />
    <br />
    <button id="btn">Calcular</button>
```

```js
const listener = function () {
  const ingreso = document.getElementById("ingreso").value;
  const costos = document.getElementById("costos").value;
  const porcentajeImpuesto = document.getElementById("porcentaje-impuesto").value;
};
```

{% spoiler %}

Valida que las variables `ingreso`, `costos`, y `porcentajeImpuesto`
tienen el valor que el usuario ha colocado, usando `console.log`

```js
const listener = function () {
  const ingreso = document.getElementById("ingreso").value;
  const costos = document.getElementById("costos").value;
  const porcentajeImpuesto = document.getElementById("porcentaje-impuesto").value;

  console.log(ingreso);
  console.log(costos);
  console.log(porcentajeImpuesto);
};
```

{% endspoiler %}

Ahora que tenemos los valores que el usuario colocó en los `input`, vamos a
hacer los cálculos.

Para tener la ganancia después de impuestos necesitamos calcular el valor de los
impuestos.

El impuesto es una porcentaje de la ganancia bruta, que es la diferencia entre
los ingresos y los costos.

Entonces, podemos calcular que la ganancia neta de la siguiente manera:

```js
const listener = function () {
  const ingreso = document.getElementById("ingreso").value;
  const costos = document.getElementById("costos").value;
  const porcentajeImpuesto = document.getElementById("porcentaje-impuesto").value;

  const gananciaBruta = ingreso - costos;
  const impuestos = gananciaBruta * (porcentajeImpuesto / 100);
  const gananciaNeta = gananciaBruta - impuestos;
};
```

{% spoiler %}

Valida que las variables `gananciaBruta`, `impuestos`, y `gananciaNeta`
tienen el valor calculado, usando `console.log`

```js
const listener = function () {
  const ingreso = document.getElementById("ingreso").value;
  const costos = document.getElementById("costos").value;
  const porcentajeImpuesto = document.getElementById("porcentaje-impuesto").value;

  const gananciaBruta = ingreso - costos;
  const impuestos = gananciaBruta * (porcentajeImpuesto / 100);
  const gananciaNeta = gananciaBruta - impuestos;

  console.log(gananciaBruta);
  console.log(impuestos);
  console.log(gananciaNeta);
};
```

{% endspoiler %}

### 6.3 - Imprimimos el resultado en pantalla

Para mostrar el resultado en nuestra página web, colocaremos un elemento `p`
con `id=resultado` debajo de nuestro `button` en el cual colocaremos el resultado,
a través de su propiedad `innerHTML`.

```html
    <p id="resultado"></p>
```

```js
const listener = function () {
  const ingreso = document.getElementById("ingreso").value;
  const costos = document.getElementById("costos").value;
  const porcentajeImpuesto = document.getElementById("porcentaje-impuesto").value;

  const gananciaBruta = ingreso - costos;
  const impuestos = gananciaBruta * (porcentajeImpuesto / 100);
  const gananciaNeta = gananciaBruta - impuestos;

  const elementResultado =  document.getElementById("resultado");
  elementResultado.innerHTML = "Tu ganancia neta es $" + gananciaNeta;
};
```

Si quieres saber más sobre `innerHTML` puedes revisar su
[documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Document/write).
