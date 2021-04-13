# CSS basics

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

## Objetivos de Aprendizaje

- Entender qué es CSS y como aplicar
- Conocer la estructura básica del CSS

{% next "Intro" %}

## La hoja de estilo

CSS _(Cascading Style Sheets)_ u hojas de estilo en cascada permiten aplicar
formato a los documentos HTML cambiando los colores, espacios, posiciones o tamaños.
No es un lenguaje de programación y sí un lenguaje de hojas de estilo.

Vamos a formatear el documento HTML con el elemento `style`, por lo eso es importante
que ya hayas hecho la unidad `HTML basics`.

{% spoiler %}

Si quieres saber más revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/CSS)

{% endspoiler %}

## Sintaxis básica

Básicamente necessitamos de três informaciones para crear las reglas de CSS :

- El selector - a quién se aplica esa regla
- La propiedad que queremos formatear
- El valor que queremos aplicar en la propiedad

Con esas informaciones, podemos escribir el CSS con esa estructura:

```css
selector {
  propiedad: valor;
}
```

{% spoiler "Importante" %}
**Atención con los siglos!**
Las `llaves ({})` de apertura y cierre, los `dos puntos (:)` y `punto y coma (;)`
son importantes para que el CSS funcione correctamente!
{% endspoiler %}

### Ejemplo

Vea el ejemplo. Puedes imaginar que eso hace?

```css
h2 {
  color: red;
}
```

{% spoiler %}

- El selector es todas las etiquetas `h2`
- La propiedad es el `color` del texto
- `red` en inglés es rojo y es el valor que queremos aplicar

Así, todos los textos de las etiquetas `h2` del archivo HTML van a ser de color rojo!
{% endspoiler %}

### Comentarios

Así como es buena práctica comentar tu código html y tu código js, es buena
práctica comentar tu CSS. Los comentarios en CSS se hacen de la siguiente manera:

- El comienzo se indica mediante los caracteres `/*` * El final del comentario
  se indica mediante `*/`

Veamos un ejemplo:

```css
/* Comentario en CSS */
```

## Lecturas complementarias

[Selectores](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
