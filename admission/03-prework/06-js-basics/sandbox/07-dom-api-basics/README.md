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
llamado de Document Object Model (DOM), que es una *"copia"* del HTML en otro formato en que javascript puede interagir.

Así, siempre que queremos interagir el Javascript con la interface del HTML necesitamos trabajar con DOM
y dicer cuál elemento estamos procurando. Podemos hacerlo usando el atributo de `id`, por ejemplo.

```html
<p id="demo">Ese es el p de id "demo"</p>
<p id="example">Ese es el p de id "example"</p>
```

Cuándo queremos localizar algún elemento, usamos la palabra `document`, a que se refiere a el DOM. Dentro de ese document, podemos utilizar el método `getElementById` para localizar el "elemento HTML" através del `id`.

```js
// Guarda el elemento DOM de id="demo" en la variable "element"
const element = document.getElementById("demo");
```

Con ese elemento DOM, podemos hacer muchas cosas con sus propiedades y métodos,
como por ejemplo, cambiar su texto o valor y añadir un evento.

**ATENCIÓN:** Cuidado con las letras mayúsculas y minúsculas de `getElementById`. Si cambia una letra, no funcionará.
Da mesma forma con el `id`. El `id` que puse en `getElementById` tiene que ser igual al que tiene en html,
recordando que `"main"` es diferente de `"Main"` por causa de la letra mayúscula.

Si quieres saber más revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById)

{% spoiler %}
Hay diversas formas de localizar los elementos HTML. Otra forma muy usada es con el método `querySelector`. Para referirnos al elemento de `id="demo"`, utilizamos `#demo`.

```js
const element = document.querySelector("#demo");
```

Si quieres saber más revisa su [documentación en MDN](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)

{% endspoiler %}

Por medio del DOM, podemos crear un HTML más dinámico, dónde javascript puede, por ejemplo,
cambiar, añadir o remover los elementos HTML o reagir a algún evento (como el clique de un botón).

{% next "Eventos" %}

## Eventos

Eventos son signos que son enviados cuando algo ocurre, y que pueden ser usados para interagir con el usuario.
El *mouse clique* es un ejemplo de evento, pero hay muchos otros tipos. Imagine que el usuario puede clicar en todo website,
pero solo nos interessa, cuando el usuario clica en un lugar o botón que queremos que hace algo.
Así, es importante que nos quedamos "escuchando" ese elemento de interés.

Vamos testear haciendo un `button` que cuando es clicado, imprime "Hola" en consola.
Para hacer eso, la primera cosa que necesitamos hacer es crear el html y localizar el elemento DOM.

```html
<button id="btn">Clique aquí</button>
```

```js
const button = document.getElementById("btn")
```

Para "escuchar" los eventos de *clique* del elemento, vamos a usar el método `addEventListener`.
Para usarlo, necesitamos informar dos parámetros: el `tipo` de evento (en ese caso es de "click") y
o que hacer cuando ocurre el evento (una `function`), que en ese caso es imprimir "Hola" en la consola.

```js
const button = document.getElementById("btn")
button.addEventListener("click", function () {
  console.log("Hola")
  })
```

Si quieres saber más revisa su [documentación en MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)