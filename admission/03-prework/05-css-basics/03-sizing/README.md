# CSS basics

- Tipo: `practice`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Conocer formas de espacios y tamaños de los elementos
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

Ahora, a diferencia de los casos anteriores, vamos a incluir los estilos desde
un archivo externo en lugar de usar la etiqueta `<style>`.

Para ello crea un nuevo archivo `styles.css` dentro de la carpeta `src` y agrega
dentro del `<head>` de tu archivo `index.html` la siguiente línea:

```html
    <link rel="stylesheet" href="styles.css" />
```

{%spoiler "¿Cómo crear un archivo?"%}
{% video https://www.youtube.com/watch?v=Na07yDL88-0 %}
{%endspoiler%}

Tener la estructura de nuestra página en un archivo y los estilos en otro, nos
permite mantener nuestro código más ordenado.

{% next "Espaciado" %}

## Espaciado

Hay dos propiedades muy utilizadas para agregar espacio alrededor de los elementos,
que son el `margin` y el `padding`, pero hay una cosa distinta que los hace diferentes.
El `margin` agrega espacio alrededor del exterior del elemento,
mientras que el `padding` agrega el espacio alrededor del contenido del elemento.

### Practica

Para ver mejor la diferencia, vamos primero a poner un color de fondo verde y
un border de 3px, linea sólida y color rojo.

```css
p {
  background-color: green;
  border: 3px solid red;
}
```

Ahora, agrega una margen de 30px alrededor del párrafo ponendo `margin: 30px`
en CSS.

```css
p {
  background-color: green;
  border: 3px solid red;
  margin: 30px;
}
```

Fíjate cómo queda y ahora, cambia la propiedad `margin` por `padding`
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

Para entender mejor la diferencia, puede ver el **modelo de caja de CSS**.
![Modelo de caja](https://upload.wikimedia.org/wikipedia/commons/e/ed/Box-model.svg)

{% next "Tamaño" %}

## Tamaño

A veces, es posible que quieras utilizar un ancho y una altura específicos en
sus elementos. ¡Eso se puede hacer fácilmente con las propiedades de `width`
(ancho) y `height` (altura)!

```css
  width: 300px;
  height: 100px;
```

¡Pruébalo con diferentes tamaños! Puede quitar el `padding` para que podamos ver
la verdadera naturaleza de cómo se comportan el ancho y la altura.

{% next "Valores y unidades CSS" %}

## Valores y unidades CSS

Existen una gran variedad de valores CSS, los cuales se pueden expresar con
diferentes unidades. Por ejemplo: la altura, el ancho y el margen de un elemento
pueden ser definidos en milímetros (`mm`), centímetros (`cm`), pulgadas
(`in` del inglés _inches_) o pixeles (`px`).

El color podemos definirlo con
[palabras claves](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#color_keywords)
(como `red`), o con los modelos
[RGB](https://es.wikipedia.org/wiki/RGB) o
[HSL](https://es.wikipedia.org/wiki/Modelo_de_color_HSL).
Por ejemplo, las tres formas del color rojo es:

```css
  color: red;
  color: rgb(255,0,0);
  color: #ff0000; /* este valor es el color rojo en RGB con notación hexadecimal,
                     es equivalente al valor de arriba */
```

Puede leer y buscar un poco más sobre la unidad en porcentaje también

{% spoiler %}
Si quieres saber más sobre los valores y unidades de CSS revisa su
[documentación en MDN](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Values_and_units)

{% endspoiler %}

## Lecturas complementarias

Hay muchas otras propiedades que pueden investigar.
Además pueden leer sobre el modelo de caja de CSS.

- [Box Model - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [Porcentaje - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage)
- [Unidades - MDN](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Values_and_units#longitudes)

## Cierre

Esta es la última lección relacionada a CSS.
Puedes continuar a tu próxima lección, la primera sobre
[Javascript](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/06-js-basics/01-comments/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
{% video https://www.youtube.com/watch?v=dFqamQ-mD1g %}
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
{% video https://www.youtube.com/watch?v=BsfTBCVF5Gs %}
{%endspoiler%}