# Variables

- Tipo: `practice`
- Formato: `self-paced`
- Duración: `60min`

## Objetivos de Aprendizaje

- Conocer como Javascript puede interactuar con HTML
- Entender qué son los eventos y cómo puede reaccionar una página a un click
  de la usuaria.

{% next "DOM" %}

## DOM

Cuándo abrimos una página web, nuestro navegador (browser) crea un modelo del
documento llamado _Document Object Model (DOM)_, que es una *"copia"* del HTML,
pero en un formato con el que Javascript puede interactuar.

Así, siempre que queremos desde Javascript interactuar con la estructura del
HTML, necesitamos trabajar con el DOM, e indicarle cuál/cuáles elemento/s
estamos buscando. Podemos hacerlo usando el atributo de `id`, el atributo `class`,
el nombre de la etiqueta, o cualquier combinación de ellos, por ejemplo.

```html
<p id="demo">Ese es el p de id "demo"</p>
<p id="example">Ese es el p de id "example"</p>
<div class="example2">Ese es el div con class "example2"</div>
<div>Ese es el div no tiene class</div>
```

Cuándo queremos localizar algún elemento, usamos el elemento `document`,
que hace referencia al DOM. El elemento `document`, provee varios métodos, pero
podemos utilizar el método `getElementById` para localizar el "elemento HTML",
através del `id`, o `querySelector` si queremos localizarlo utilizando su `class`,
su etiqueta o cualquiera de sus otros atributos.

```js
// Guarda el elemento con id="demo" en la variable "element"
const element = document.getElementById("demo");

// Guarda el elemento `div` con class="example2" en la variable "element2"
const element2 = document.querySelector("div.example2");
```

Ahora a ese elemento DOM, podemos modificarlo a través de sus propiedades y métodos,
como por ejemplo, cambiar su texto, sus estilos o "escuchar" sus eventos.

> **ATENCIÓN:** Cuidado con las letras mayúsculas y minúsculas en `getElementById`
> y `querySelector`. Si cambias una letra, ya no funcionará.
> Lo mismo sucede con el `id`. El `id` que uses como argumento para
> `getElementById` o `querySelector` tiene que ser igual al que usaste en html,
> recordando que `"main"` es diferente de `"Main"`, ya que difieren en una
> letra (la "M" mayúscula).

Si quieres saber más revisa la documentación oficial de
[getElementById](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById)
y de 
[querySelector](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)

Por medio del DOM, podemos crear un HTML más dinámico, dónde javascript puede,
por ejemplo, cambiar, añadir o remover los elementos HTML o reaccionar a algún
evento (como el _click_ a un botón).

{% next "Eventos" %}

## Eventos

Eventos son _"señales"_ que son enviadas cuando algo ocurre, y que pueden ser
usados para interactuar con la usuaria.

El *mouse click* es un ejemplo de evento, pero hay muchos otros tipos.
Imagine que el usuario puede hacer click en cualquier lugar de nuestra página,
pero sólo nos interesa cuando el usuario hace click en un lugar o botón
específico.

Vamos probar definiendo un `button` que cuando es _clickeado_, imprime "Hola"
en consola.
Para hacer eso, la primera cosa que necesitamos hacer es crear el html y
localizar el elemento DOM que nos interesa.

```html
<button id="btn">Click aquí</button>
```

```js
const button = document.getElementById("btn")
```

Para "escuchar" los eventos de *click* del elemento, vamos a usar el método
`addEventListener`.
Para usarlo, necesitamos proporcionar dos argumentos:
- el `tipo` de evento (en ese caso es de "click")
- qué hacer cuando ocurre el evento (una `function`), que en ese caso es
  imprimir "Hola" en la consola.

```js
const button = document.getElementById("btn");
const sayHi = function () {
  console.log("Hola");
};
button.addEventListener("click", sayHi);
```

Si quieres saber más revisa la documentación oficial de
[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## Cierre

Esta es la última lección relacionada a Javascript.
Puedes continuar a tu próxima lección donde aplicaremos todo lo que hemos visto
hasta el momento a través de algunos
[ejercicios guiados](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/07-guided-exercises/sandbox/01-edad-en-segundos/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
[FIXME-VIDEO: ejecutar `npm run test`]
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
[FIXME-VIDEO: ejecutar `npm run submit`]
{%endspoiler%}
