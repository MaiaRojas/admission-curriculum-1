# CSS basics

- Tipo: `practice`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Conocer formas de espacios y tamaños de los elementos
- Practicar y aplicar formato

{% next "Empezar" %}

## El documento HTML

Ya conoces la estructura basica para formatear el documento HTML.
Ahora vamos a practicar y testear!

Primeramente, necesitamos un documento HTML para formatear.
Vamos a hacerlo con un elemento `h1`, `h2` y un `p`.
No olvidé de añadir la etiqueta `style` para formatearlos

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

Caso tiene dudas, puede revisitar el tópico anterior

{% next "Espacios" %}

## Espacios

Hay dos propiedades muy utilizadas para agregar espacio alrededor de los elementos,
que son el `margin` y el `padding`, pero hay una cosa distinta que los hace diferentes.
El `margin` agrega espacio alrededor del exterior del elemento,
mientras que el `padding` agrega el espacio alrededor del interior del elemento.

### Practica

Para ver mejor la diferencia, vamos primero a poner un color de fondo verde y
un border de 3px, de linea sólida y de color rojo.

```css
  p {
    background-color: green;
    border: 3px solid red;
  }
```

Ahora, agrega una margen de 30px alrededor del párrafo ponendo `margin: 30px` en CSS.

```css
  p {
    background-color: green;
    border: 3px solid red;
    margin: 30px;
  }
```

Vea como se queda y en seguida, cambia la propiedad `margin` por `padding`
para entender mejor la diferencia entre esas dos propiedades:

```css
  p {
    background-color: green;
    border: 3px solid red;
    padding: 30px;
  }
```

{% spoiler %}
Así como en la propriedad `border`, también es posible poner `margin` y `padding`
en sólo un lado del elemento.

```css
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
```

{% endspoiler %}

{% next "Dimensionamiento" %}

## Dimensionamiento

A veces, es posible que desee utilizar un ancho y una altura específicos en sus elementos.
¡Eso se puede hacer fácilmente con las propiedades de `width` (ancho) y `height` (altura)!

```css
  width: 300px;
  height: 100px;
```

¡Pruébelo con diferentes tamaños! Puede quitar el `padding` para que podamos ver
la verdadera naturaleza de cómo se comportan el ancho y la altura.

{% next "Valores y unidades CSS" %}

## Valores y unidades CSS

Existen una gran variedad de valores CSS,los cuales se pueden expresar con diferentes unidades.
Por ejemplo: la altura, el ancho y el margen de un elemento pueden ser definidos en milímetros,
centímetros, pulgadas o pixeles.

El color podemos definirlo con palabras claves (como red), con valores, o con el modelo RGB.
Por ejemplo, las tres formas del color rojo es:

```css
  color: red;
  color: #ff0000;
  color: rgb(255,0,0);
```

Puede leer y buscar um poco más sobre la unidad en porcentaje también

{% spoiler %}
Si quieres saber más sobre los valores y unidades de CSS revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Values_and_units)

{% endspoiler %}

## Lecturas complementarias

- [Box Model - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [Unidades y medidas - Librosweb](https://uniwebsidad.com/libros/css/capitulo-3/unidades-de-medida?from=librosweb)
- [Colores - Librosweb](https://uniwebsidad.com/libros/css/capitulo-3/colores?from=librosweb)
