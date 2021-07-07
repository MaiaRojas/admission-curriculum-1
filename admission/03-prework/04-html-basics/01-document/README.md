# Documento HTML

- Tipo: `practice`
- Formato: `self-paced`
- Duración: `30min`

## Objetivos de Aprendizaje

- Entender qué es HTML
- Aprender la sintaxis básica de HTML.

## El documento HTML

HTML (HyperText Markup Language) no es un lenguaje de programación,
es un lenguaje de marcado que es utilizado para crear la estructura
de un sitio web. Para crear este sitio, se empieza creando
un documento en formato HTML. Esto es muy parecido a crear un documento
con formato word, excel o powerpoint.

{% spoiler %}

Si quieres saber más revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started)

{% endspoiler %}

{% next "Comencemos" %}

Lo **primero** que haremos en esta lección, y en todas las siguientes, es
inicializar nuestro proyecto.

En general todos los proyectos cuentan con algún archivo de _configuración_, en
nuestro caso este archivo se llama `package.json`. En este momento no es
necesario que entiendas nada de lo que dice ese archivo, solamente debes recordar
que antes de comenzar con tu proyecto debes instalar sus _dependencias_,
ejecutando `npm install` en la terminal.

{%spoiler "¿Cómo ejecutar `npm install`?"%}
{% video https://www.youtube.com/watch?v=QdtKomkVWXE %}
{%endspoiler%}

### Primeros Pasos: Sintaxis básica

En la carpeta `src` encontrarás un archivo `index.html` vacío. Vamos a llenarlo.

La primera línea que necesita en un archivo HTML es `<!DOCTYPE html>`.
Esto le permite al navegador (como Chrome, Firefox, Internet Explorer o Safari)
saber que el tipo de este documento es HTML y no es solo un archivo de texto normal.

```html
<!DOCTYPE html>
```

Los elementos de HTML son las etiquetas, caracterizados por los signos `<` y `>`.
La mayoría de los elementos requieren una etiqueta de apertura y otra de cierre.

Así, el primer elemento que vamos a necesitar es el propio elemento HTML, que es
donde va **todo el HTML** de su archivo, y puede agregarlo abriéndolo con
`<html>` y cerrándolo con `</html>`.

```html
<!DOCTYPE html>
<html>

</html>
```

**ALERTA:** `<!DOCTYPE html>` es una declaración y no una etiqueta HTML!

Entre las etiquetas de html, vamos a tener las etiquetas de apertura y cierre
de `head` y entre ellas otras dos etiquetas de `meta` y `title`

```html
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
```

> En la etiqueta de `head` es donde contiene la información sobre la página,
> llamadas de *metadatos*.
>
> El elemento `meta` no hay etiqueta de cierre y representa
> [metadatos](https://developer.mozilla.org/es/docs/Glossary/Metadata)
>
> El elemento `title` define el título del documento que se muestra
> en la barra de título del navegador o en la pestaña de una página

Por fin, después de la etiqueta de **cierre** de `head`,
vamos a poner el elemento `body` que contiene todo el _contenido_ de un
documento HTML

```html
  <body>

  </body>
```

{% spoiler "Pista" %}

El código al final debe estar parecido con eso:

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

**ATENCIÓN** con los espacios en el inicio de las líneas de `head`, `meta`,
`title` y `body`.

Eso es **_indentación de código_** y es usada para facilitar la lectura del código.

Fíjate que ese mismo código sin indentación es muy más dificil de leer y entender:

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

{% endspoiler %}

{% next "Comentarios" %}

### Comentarios

Los _comentarios_ permiten dejar notas sobre su código, su funcionalidad o indicar
los cambios necesarios para el futuro, a las personas que leen o editan tu código.

Se visualizan así:

```html
<!-- This is a comment -->
```

Cualquier valor entre `<!--` y `-->` no se mostrará en su sitio web y no
afectará el funcionamiento o la estructura de la página. Se deja como mensaje a
las personas que leen y editan el HTML.

## Cierre

Puedes continuar a tu próxima lección sobre
[elementos HTML](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/04-html-basics/02-elements/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
{% video https://www.youtube.com/watch?v=dFqamQ-mD1g %}
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
{% video https://www.youtube.com/watch?v=BsfTBCVF5Gs %}
{%endspoiler%}
