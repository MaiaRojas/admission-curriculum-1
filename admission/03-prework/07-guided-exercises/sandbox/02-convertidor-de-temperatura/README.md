# Convertidor de temperatura

## Enunciado

Crea una página web que pida al usuario la temperatura en grados Celsius (°C),
utilizando `prompt()`, y devuelva, en la consola, la temperatura en grados
Fahrenheit (°F) utilizando `console.log()`.
La fórmula matemática para pasar de °C a °F es: `T(°F) = ( T(°C) × 1.8 ) + 32`.

[FIXME-VIDEO: Demo del resultado final]

## Análisis y lista de tareas

Para llevar a adelante este reto necesitaremos completar las siguientes tareas:

- Crear un archivo `index.html`.
- Crear la estructura de nuestra página web dentro de nuestro `index.html`.
- Crear un archivo `app.js`.
- Integrar la funcionalidad `Javascript` con la página `html`
- Preguntar la temperatura en Celsius (°C) por medio del método `window.prompt()`.
- Convertir la temperatura en grados Fahrenheit (°F).
- Mostrar el resultado en la consola por medio del método `console.log()`

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
  <body>

  </body>
</html>
```

#### 2.2 La personalizamos un poco

Cambiamos el contenido de la etiqueta `<title>` con el texto `Convertidor de temperatura`

```html
    <title>Convertidor de temperatura</title>
```

Y crearmos dentro de la etiqueta `<body>` un heading principal (etiqueta `<h1>`),
que diga _Coloca la temperatura en grados Celsius (°C)_.

```html
  <body>
    <h1>Coloca la temperatura en grados Celsius (°C)<h1/>
  </body>
```

{% next "Funcionalidad JS" %}

## 3 - Crea un archivo `app.js` dentro de la carpeta `src`

{%spoiler "¿Cómo crear un archivo?"%}
{% video https://www.youtube.com/watch?v=Na07yDL88-0 %}
{%endspoiler%}

## 4 - Crea tu _window.prompt_ y guarda el valor retornado en una variable

```js
const temperaturaCelsius = prompt('¿Cuál es la temperatura en Celsius?');
```

## 5 - Integra la funcionalidad `Javascript` con la página `html`

Si tu recargas la página, verás que nada ha cambiado
y el `window.prompt` nunca se muestra.

Esto es porque el archivo `index.html` nunca está llamando a la funcionalidad
`Javascript` especificada en el archivo `app.js`.

Para ello necesitamos importar el archivo `app.js` dentro de nuestro etiqueta `<body>`:

```html
  <script type="text/Javascript" src="app.js"></script>
```

{% spoiler %}
Recargas la página y ahora verás que el `window.prompt` se muestra.
{% endspoiler %}

## 6 - Codeamos la solución

### 6.1 - Convierte la temperatura Celsius (°C) a grados Fahrenheit (°F)

Ahora que tenemos la temperatura en grados Celsius guardada en la variable `temperaturaCelsius`,
vamos a convertirla con la fórmula matemática:
`T(°F) = ( T(°C) × 1.8 ) + 32`.

```js
const temperaturaFahrenheit = (temperaturaCelsius*1.8) + 32;
```

### 6.2 - La imprimimos en la consola

Para mostrar un contenido dentro de la consola, usaremos
el método `console.log()` en nuestro archivo `app.js`.

```js
console.log("La temperatura en Fahrenheit es " + temperaturaFahrenheit);
```

{% spoiler %}
Recargas la página y ahora verás que el `window.prompt` se muestra.
{% endspoiler %}

### 6.3 - Abre la consola y cheque averigua su valor

{% spoiler %}
Como vimos anteriormente, tenemos varios tipos de datos y tenemos
que tomar cuidado. El método `window.prompt` devuelve una `string`,
así para evitar conflictos, vamos a mejorar el código y
convertir este dato en un tipo `number` con el metodo `parseInt()`.
{% endspoiler %}

### 6.4 - Convertir el dato a number

Pon el `prompt` dentro del metodo `parseInt()` en la variable `temperaturaCelsius`:

```js
const temperaturaCelsius = parseInt(prompt('¿Cuál es la temperatura en Celsius?'));
```

{% spoiler %}
Si quieres saber más sobre el método `parseInt` revisa su
[documentación en MDN](https://developer.mozilla.org/es/docs/Web/Javascript/Reference/Global_Objects/parseInt)
{% endspoiler %}

## Cierre

Puedes continuar con tu próximo
[ejercicio guiado](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/07-guided-exercises/sandbox/03-ganancias-y-perdidas/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
{% video https://www.youtube.com/watch?v=dFqamQ-mD1g %}
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
{% video https://www.youtube.com/watch?v=BsfTBCVF5Gs %}
{%endspoiler%}
