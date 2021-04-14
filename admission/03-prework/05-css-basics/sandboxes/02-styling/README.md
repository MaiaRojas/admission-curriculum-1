# CSS basics

- Tipo: `practice`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Conocer más formas de estilos
- Practicar y aplicar formato

{% next "Empezar" %}

## El documento HTML

Ya conoces la estructura basica para formatear el documento HTML.
Ahora vamos a practicar y testear!

Primeramente, necesitamos un documento HTML para formatear.
Vamos a hacerlo con un elemento `h1`, `h2` y un `p`.

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

Caso tiene dudas, puede revisitar la unidade HTML basics

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
    <style>
    /* CSS aquí */
    </style>
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

- Cambiar el color del texto heading `h1` para rojo _(red)_
- Poner amarillo _(yellow)_ como color de fondo _(background-color)_ en `h2`
- Poner el texto de `p` en azul y verde como color de fondo

{% spoiler %}

Los nombres de las propiedades y sus valores son siempre en inglés.
Acuerdase que no necesitas saber inglés para continuar con tus estudios.
Esto puede ayudarte, pero puede conocerlo más mientras aprende programación!

```html
    <style>
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
    </style>
```

{% endspoiler %}

{% next "Borde" %}

## Agregando un borde

Entre muchas propiedades de estilo, podemos agregar un borde a la etiqueta,
pero el borde tiene varias propiedades como grosor (tamaño), tipo de línea y color.

Así, necesitamos añadir **todos** esos valores en la propiedad de borde _(border)_.

- El tamaño _(width)_ puede ser en [pixel](https://en.wikipedia.org/wiki/Pixel), por ejemplo `2px`
- Los tipos de linea _(style)_ pueden ser punteado _(dotted)_, sólido _(solid)_ y discontinuo _(dashed)_, por ejemplo
- Y el color

Podemos poner todas esas propiedades así:

```css
  border-width: 2px;
  border-style: solid;
  border-color: blue;
```

Otra forma de hacer es poniéndolo todos juntos en la propiedad `border`:

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

### Practica del borde

Puede testear algunos formatos, por ejemplo:

- Añadir un borde de 3px, punteado y verde en `h2` en todos os lados
- Poner un borde amarillo, sólido de 5px en `p` en apenas el lado de bajo

{% spoiler %}

Al final, tu código vas a ser algo parecido con eso:

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

Si quieres saber más sobre los tipos de linea revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/CSS/border-style)

{% endspoiler %}

## Lecturas complementarias

Hay muchas otras propiedades que pueden investigar.
Además pueden leer sobre el modelo de caja de CSS.

[Box Model - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
