# Variables

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Conocer como javascript puede interagir con HTML
- Entender eventos y cómo interagir con el clique en HTML

{% next "DOM" %}

## DOM

Cuándo abrimos una página web, nuestro navegador (browser) crea un modelo de documento,
llamado de Document Object Model (DOM) y es con el DOM que vamos a interagir.

Siempre que queremos interagir el Javascript con la interface del HTML, necesitamos dicer a
cuál elemento HTML estamos procurando y podemos hacerlo usando el atributo de `id`, por ejemplo.

```html
<p id="demo">Ese es el p de id "demo"</p>
<p id="example">Ese es el p de id "example"</p>
```

Cuándo queremos localizar algo en el html, usamos la palabra `document`, a que se refiere a el DOM. Dentro de ese document, podemos utilizar el método `getElementById` para localizar el elemento HTML através del `id`.

```js
// Guarda el elemento de id="demo" en la variable "element"
var element = document.getElementById("demo");
```

Si quieres saber más revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById)

{% spoiler %}
Hay diversas formas de localizar los elementos HTML. Otra forma muy usada es con el método `querySelector`. Para referirnos al elemento de `id="demo"`, utilizamos `#demo`.

```js
var element = document.querySelector("#demo");
```

Si quieres saber más revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)

{% endspoiler %}

Por medio del DOM, podemos crear un HTML más dinámico, dónde javascript puede, por ejemplo,
cambiar, añadir o remover los elementos HTML o reagir a algún evento (como el clique de un botón).

{% next "Eventos" %}

## Eventos
