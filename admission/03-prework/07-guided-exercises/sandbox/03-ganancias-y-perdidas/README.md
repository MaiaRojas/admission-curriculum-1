# Ganancias y Perdidas

## Enunciado

Crear un programa que pide los ingresos, los costos y el % de impuestos,
y calcula la ganancia después de impuestos. Debe imprimir el resultado
en la web con el símbolo $ adelante.

## Análisis y lista de tareas

Para llevar a adelante este reto necesitaremos completar las siguientes tareas:

- Crear un archivo `index.html`.
- Crear la estructura de nuestra página web dentro de nuestro de `index.html`.
- Crear un archivo `app.js`.
- Enlazar la funcionalidad `javascript` con la página `html`.
- Crear los campos html para que el usuario insira las ganancias, costos
y porcentaje de impuestos por medio del `input`
- Crear un botón que cuándo clicado calcula el resultado de ganancia bruta, ganancia neta e impuestos
- Mostrar el resultado en la página web por medio del método `document.write()`

{% next "Comencemos" %}

## Crea un archivo `index.html`

[FIXME: video o screenshots o gif de como crear un archivo en el navegador de archivos]

## Crea la estructura de la página web

### Creamos la estructura básica de cualquier documento `html`

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

#### ... y la personalizamos un poco

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

{% spoiler %}
Revisa el resultado en tu navegador, debería ser algo parecido a esto
[FIXME: screenshot]
{% endspoiler %}

{% next "Funcionalidad JS" %}

### Crea un archivo `app.js`

[FIXME: video o screenshots o gif de como crear un archivo en el navegador de archivos]

### Integra con la página `html`

El archivo `index.html` no está enlazado a el archivo `app.js`
y no reconocerá las funcionalidades `javascript`

Para ello necesitamos importar el archivo `app.js` dentro de
nuestra etiqueta `<body>`:

```html
  <script type="text/javascript" src="app.js"></script>
```

## Crea los campos para poner los dados que el usuario necesita

El usuario necesitar fornecer tres datos, `ingreso`,`costo` y `porcentaje de impuestos`.
Además de los tres `input`, es necesario una etiqueta de `button`, para que al clique de
este botón, el programa hace los cálculos y imprima el resultado en la pantalla.

```html
    <p>Ingreso:</p>
    <input type="text">
    <p>Costos:</p>
    <input type="text">
    <p>Porcentaje de impuestos:</p>
    <input type="text">
    <button>Calcular</button>
```

## Añade el listener de `click` con `addEventListener`

Para poner un listener de evento usamos el método `addEventListener`, pero primero tenemos que localizar el elemento que
vamos escuchar. El elemento que buscamos es el botón y para hacer eso, la etiqueta necessita un `id`.

```html
    <button id="btn">Calcular</button>
```

```js
const element = document.getElementById("btn")
element.addEventListener("click", function () {
  // Todo que está acá será ejecutado siempre que el element es clicado.
  console.log("El botón fue clicado")
})
```

Si quieres saber más sobre el método `addEventListener` revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)

## Calcula el resultado de ganancia bruta, ganancia neta e impuestos

Queremos obtener los valores que el usuario puse en los `input` cuándo el botón es clicado.
Así, vamos a hacer eso **dentro** de la función del método `addEventListener`.
Para sacar los valores, vamos poner un `id` en las etiquetas de input, para que posamos
usar la propiedad `value` (valor) y salvarlas en variables`

```html
    <p>Ingreso:</p>
    <input type="text" id="ingreso">
    <p>Costos:</p>
    <input type="text" id="costos">
    <p>Porcentaje de impuestos:</p>
    <input type="text" id="porcentaje-impuesto">
    <button>Calcular</button>
```

```js
  const ingreso = document.getElementById("ingreso").value
  const costos = document.getElementById("costos").value
  const porcentajeImpuesto = document.getElementById("porcentaje-impuesto").value
```

{% spoiler %}
Valida que las variables `ingreso`, `costos`, y `porcentajeImpuesto`
tienen el valor que el usuario pone, usando `console.log`

```js
console.log(ingreso);
console.log(costos);
console.log(porcentajeImpuesto);
```

{% endspoiler %}

Ahora que tenemos los valores que el usuario puse en los `input`, vamos a hacer los cálculos.
Para tener la ganancia después de impuestos necesitamos calcular el valor de impuestos.
El impuesto es una porcentaje de la ganancia bruta, que es la diferencia entre los ingresos y los costos.
Así, podemos calcular que la ganancia neta es:

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
