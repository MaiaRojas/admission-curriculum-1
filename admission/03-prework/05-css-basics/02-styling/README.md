# CSS basics

- Tipo: `practice`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Conocer más formas de estilos
- Practicar y aplicar formato

{% next "Empezar" %}

## El documento HTML

{%spoiler "Recuerda inicializar tu proyecto con `npm install`"%}
{% video https://www.youtube.com/watch?v=QdtKomkVWXE %}
{%endspoiler%}

Ya conoces la estructura basica para formatear el documento HTML.
Ahora vamos a practicar y testear!

Primero, necesitamos un documento HTML para formatear.
Crea un archivo `index.html` dentro de la carpeta `src`,
donde colocaremos un elemento `h1`, `h2` y un `p`.

{%spoiler "¿Cómo crear un archivo?"%}
{% video https://www.youtube.com/watch?v=Na07yDL88-0 %}
{%endspoiler%}

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>CSS</title>
  </head>
  <body>
    <h1>Divirtiéndose con CSS</h1>
    <h2>Formateando el documento HTML</h2>
    <p>Vamos a testear todo!</p>
  </body>
</html>
```

En caso tengas dudas, puede revisitar la unidad de HTML basics

{% next "Formatear" %}

## Formatear el texto

Las reglas de CSS vamos a poner en el elemento `style`,
dentro de las etiquetas `head`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>CSS</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Divirtiéndose con CSS</h1>
    <h2>Formateando el documento HTML</h2>
    <p>Vamos a testear todo!</p>
  </body>
</html>
```

### Practica

Puede testear algunos formatos, por ejemplo:

- Cambiar el color del texto heading `h1` a rojo _(red)_
- Poner amarillo _(yellow)_ como color de fondo _(background-color)_ en `h2`
- Poner el texto de `p` en azul y como color de fondo verde

{% spoiler %}

Los nombres de las propiedades y sus valores son siempre en inglés.
Recuerda que no necesitas saber inglés para continuar con tu aprendizaje.
Eso puede ayudarte, pero puedes ir aprendiendo más a medida que aprendes a programar!

```css
h1 {
  color: red;
}
h2 {
  background-color: yellow;
}
p {
  color: blue;
  background-color: green;
}
```

{% endspoiler %}

{% next "Borde" %}

## Agregando un borde

Entre muchas propiedades de estilo, podemos agregar un borde a la etiqueta,
pero el borde tiene varias propiedades como grosor (tamaño), tipo de línea y color.

Así, necesitamos añadir **todos** esos valores en la propiedad de borde _(border)_.

- Para tamaño _(width)_ por el momento vamos a usar la unidad en
  [pixel](https://en.wikipedia.org/wiki/Pixel), por ejemplo `2px`
- Los tipos de linea _(style)_ pueden ser punteado _(dotted)_,
  sólido _(solid)_ y discontinuo _(dashed)_
- Y el color

Podemos poner todas esas propiedades así:

```css
  border-width: 2px;
  border-style: solid;
  border-color: blue;
```

Otra forma de hacerlo es poniéndolos todos juntos en la propiedad `border`:

```css
  border: 2px solid blue;
```

Esas propiedades también pueden ser aplicadas en diferentes lados del borde:

```css
  border-top : 2px solid blue;
  border-right: 2px solid blue;
  border-bottom: 2px solid blue;
  border-left: 2px solid blue;
```

### Practica de borde

Puede testear algunos formatos, por ejemplo:

- Añadir un borde de 3px, punteado y verde en `h2` en todos los lados
- Poner un borde amarillo, sólido de 5px en `p` solamente en el lado de abajo

{% spoiler %}

Al final, tu código vas a ser algo parecido a eso:

```html
  <style>
    h1 {
      color: red;
    }
    h2 {
      background-color: yellow;
      border: 3px dotted green;
    }
    p {
      color: blue;
      background-color: green;
      border-bottom: 4px solid yellow;
    }
  </style>
```

Si quieres saber más sobre los tipos de línea revisa su
[documentación en MDN](https://developer.mozilla.org/es/docs/Web/CSS/border-style)

{% endspoiler %}

## Cierre

Puedes continuar a tu próxima lección sobre
[tamaños con CSS](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/05-css-basics/03-sizing/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
{% video https://www.youtube.com/watch?v=dFqamQ-mD1g %}
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
{% video https://www.youtube.com/watch?v=BsfTBCVF5Gs %}
{%endspoiler%}
