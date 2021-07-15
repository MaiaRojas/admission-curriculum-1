# Comentarios

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `15min`

## Objetivos de Aprendizaje

- Aprender qué son los _comentarios_ y su utilidad.

***

{% next "Comentarios" %}

## Comentarios

{%spoiler "Recuerda inicializar tu proyecto con `npm install`"%}
{% video https://www.youtube.com/watch?v=QdtKomkVWXE %}
{%endspoiler%}

Muchas veces, por más descriptivo que escribas tu código, es necesario brindar
más información para que otras personas puedan entender fácilmente cómo funciona
tu programa. Para añadir esa información sin afectar el flujo de tu código,
existen los _comentarios_.

Se visualizan así:

```js
// Esto es un comentario de una línea

/*
  Esto es un comentario de
  múltiples
  líneas
*/
```

La computadora ignora los comentarios por completo. Los comentarios en
Javascript empiezan con `//`. Todo lo que sigue a las barras diagonales (en la
misma línea) es ignorado por el intérprete de Javascript. Los comentarios de
múltiples líneas empiezan con `/*` y cierran con `*/`. Todo lo que está entre
eso es ignorado por el programa.

De tal manera, los comentarios no tienen efecto alguno sobre cómo un programa se
ejecuta. Solo están allí para proporcionar contexto. Es una **buena práctica**
incluir comentarios en el código para mejorar su legibilidad.

## Comentarios como sugerencias o instrucciones

Muchos de los ejercicios y quizzes en este curso van a incluir comentarios para
darte sugerencias o instrucciones.

Por ejemplo, es común ver algo como:

```js
const firstName = // tu código aquí
console.log(/* tu código aquí */);
```

La idea es que borres el comentario y utilices ese espacio para escribir tu
código. No te preocupes por borrar los comentarios. Eso sí, **no** borres otras
partes del programa. Si lo haces, es muy probable que no te funcione muy bien.

Ahora sí, continúa con los ejercicios y quizzes de esta lección. ¡Mucha suerte!

## Cierre

Puedes continuar a tu próxima lección sobre
[números en Javascript](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe//admission/03-prework/06-js-basics/02-data-types-numbers/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
{% video https://www.youtube.com/watch?v=dFqamQ-mD1g %}
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
{% video https://www.youtube.com/watch?v=BsfTBCVF5Gs %}
{%endspoiler%}