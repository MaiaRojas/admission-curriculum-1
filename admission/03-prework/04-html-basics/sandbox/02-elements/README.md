# Elementos HTML

- Tipo: `practice`
- Formato: `self-paced`
- Duración: `30min`

## Objetivos de Aprendizaje

- Conocer la estructura de los elementos HTML y las etiquetas mas populares.

## Elementos populares

Un elemento muy comun es el elemento de _heading_ `h1` (encabezado).
Hay 6 niveles `h1` hasta `h6`, siendo `h1` el nivel de sección más alto o más
importante.

```html
<h1>Este es heading 1</h1>
<h2>Este es heading 2</h2>
<h3>Este es heading 3</h3>
<h4>Este es heading 4</h4>
```

{% spoiler %}
Recuerde, todo lo que desea que se muestre en su página web
debe ir entre las etiquetas de apertura `<body>` y de cierre `</body>`.
{% endspoiler %}

Otro elemento es de _párrafo_ `p`, que comienza con la etiqueta de inicio `<p>`
y termina con la etiqueta de finalización `</p>`. El texto que se encuentra
entre las etiquetas de apertura y de cierre es el contenido del elemento.

```html
<p>Esto es un párrafo</p>
```

![El elemento `p`](https://user-images.githubusercontent.com/25912510/35747217-7bb85acc-0817-11e8-9248-5b00951cf963.png)

{% spoiler %}
Testea añadir párrafos y encabezados de varios niveles en su código,
pero recuerda que todo lo que quieres que se muestre en su página web
debe ir entre las etiquetas de apertura `<body>` y de cierre `</body>`.

Existen muchos más elementos y etiquetas HTML, que aprenderás en su momento.
{% endspoiler %}

### Formato de texto

Si escribe un párrafo, es posible que desee darle formato una palabra o una
frase, por ejemplo:

> "HTML **no es** un lenguaje de programación,
> es un **_lenguaje de marcado_** que es utilizado para crear la estructura
> de un _sitio web_. Para crear este sitio, se empieza creando
> un documento en formato HTML."

Una forma de poner cualquier texto en negrita o cursiva es utilizando
las etiquetas `strong` y `em`.

```html
<p> HTML <strong>no es</strong> es un lenguaje de programación,
es un <strong><em>lenguaje de marcado</em></strong> que es utilizado para crear
la estructura de un <em>sitio web</em>. Para crear este sitio, se empieza
creando un documento en formato HTML.
</p>
```

{% spoiler %}
Testea formatear palabras y párrafos.
Pero recuerda que todo lo que deseas que se muestre en su página web
debe ir entre las etiquetas de apertura `<body>` y de cierre `</body>`.
{% endspoiler %}

{% next "Atributos" %}

## Atributos HTML

Los atributos contienen información extra sobre el elemento y son escritos
en _las etiquetas de inicio._ El valor del atributo sigue después del signo `=`
y está envuelto en comillas, seguiendo esta estructura:

```html
<etiqueta atributo="valor del atributo "></etiqueta>
```

Los hipervínculos (enlaces) son textos o imágenes en las que puede hacer click
y lo llevan a otra página. Cada vez que utiliza un sitio web, utiliza enlaces
para pasar de una página a la siguiente. Puede agregar un enlace usando la
etiqueta de anclaje (a). Además de la etiqueta `a`, debe agregar el atributo
`href` _(hypertext reference)_ que es donde vas el sitio web o el archivo.
En conjunto, su enlace debería verse así:

```html
  <a href="segundoArchivo.html">Mi Otra Pagina</a>
```

Añade esa etiqueta en lo `body` del HTML, y crea un otro archivo
`segundoArchivo.html` con un body distinto para testear

{% spoiler %}

Su primer archivo `index.html` puede ser algo parecido de eso:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <h1>Eso es el primer archivo!!</h1>
    <a href="segundoArchivo.html">Mi Otra Pagina</a>
  </body>
</html>
```

Su segundo archivo `segundoArchivo.html` puede ser algo parecido de eso:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <h1>Eso es el segundo archivo!!</h1>
  </body>
</html>
```

Puede leer más sobre atributos en ese
[link aqui](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started#atributos)

{% endspoiler %}

### Atributos `class` e `id`

Los atributos `id` y `class` identifican a un elemento en un documento HTML.
Esto es útil para aplicar estilos con CSS y manipular un elemento con JavaScript.

A diferencia de otros atributos, los atributos `id` y `class` pueden utilizarse
en **todas las etiquetas HTML**.

Veremos la utilidad de estos atributos en profundidad en las próximas lecciones.

#### Atributo `id`

El atributo `id` identifica un elemento **único** en el documento HTML. Una vez
que un valor de `id` se utiliza en un elemento, no puede volver a utilizarse
en ningún otro elemento.

##### Sintaxis

```html
<etiqueta id="valor_de_id">contenido</etiqueta>
```

#### Atributo `class`

El atributo `class` puede identificar a uno o múltiples elementos en el
documento HTML. Esto nos permite aplicar estilos o manipular a múltiples
elementos que comparten alguna característica en común, de manera homogénea.

##### Sintaxis

```html
<etiqueta class="valor_de_class">contenido</etiqueta>
```

## Cierre

Esta es la última lección relacionada a HTML.
Puedes continuar a tu próxima lección, la primera sobre
[CSS](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/05-css-basics/sandbox/01-intro/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
[FIXME-VIDEO: ejecutar `npm run test`]
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
[FIXME-VIDEO: ejecutar `npm run submit`]
{%endspoiler%}
