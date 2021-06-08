# Cuenta de restaurante

## Enunciado

Imagina que has salido a comer con tus mejores amigas. La cuenta total
del consumo es de 50 dólares, pero a eso debes agregarle el 10% de Impuesto al
Valor Agregado (IVA). Quieres dividir la cuenta equitativamente entre tu y tus amigas.
Para eso vamos a crear este programa.

[FIXME-VIDEO: Demo del resultado final]

## Análisis y lista de tareas

Para llevar a adelante este reto necesitas completar las siguientes tareas:

- Abrir el archivo `restaurantBill.js` que tiene una _función_ llamada `restaurantBill`
- Calcular el valor del impuesto
- Calcular el valor total de la cuenta
- Calcular el valor que cada una tiene que pagar
- Retornar el monto calculado que cada una tiene que pagar con el símbolo `$` delante.
- Usar la terminal para:
  * Instalar las dependencias del proyecto
  * Ejecutar los tests

{% next "Comencemos" %}

{%spoiler "Recuerda inicializar tu proyecto con `npm install`"%}
{% video https://www.youtube.com/watch?v=QdtKomkVWXE %}
{%endspoiler%}

## Abre el archivo `restaurantBill.js`

En el lado derecho de tu pantalla asegurate que estas abriendo y trabajando
en el archivo `src/restaurantBill.js`.

## Estructura de la función `restaurantBill`

### Parámetros

La función `restaurantBill` en el boilerplate(plantilla) tiene un dos _parámetros_:

- `cuenta`, que es el monto de la cuenta antes de impuestos (un _número_)
- `cantidadDeAmigas`, que es el número de amigas que pagaran la cuenta (un _número_)

### Valor de retorno

La función `restaurantBill` en el boilerplate(plantilla) tiene un valor
de retorno que es un _string_ con la cantidad que le toca pagar a cada una
ya teniendo en cuenta el 10% de impuestos (e incluyendo el símbolo de dólar).

{% next "Funcionalidad JS" %}

## Calcula el valor del `impuesto`

Asigna el resultado de multiplicar `cuenta` por `0.1` en la variable `impuesto`.
Nota: `10%` en decimal se escribe `0.1`.

{% spoiler %}

```js
const impuesto = cuenta * 0.1;
```

{% endspoiler %}

{% next "Calculo del total de la cuenta" %}

### Calcula el valor del `totalDeLaCuenta`

Crea una variable llamada `totalDeLaCuenta` y asígnale el resultado de
sumar `cuenta` más `impuesto`.

{% spoiler %}

```js
const totalDeLaCuenta = cuenta + impuesto;
```

{% endspoiler %}

{% next "Calculo del valor final a pagar" %}

### Calcula el valor final a pagar

Crea una variable llamada `valorFinal` y asígnale el resultado de
dividir `totalDeLaCuenta` entre `cantidadDeAmigas`.

{% spoiler %}

```js
const valorFinal = totalDeLaCuenta / cantidadDeAmigas;
```

{% endspoiler %}

{% next "Retornar el resultado" %}

### Retorna el resultado

Para retornar un valor utiliza la palabra `return`. Además concatena
el símbolo de dolar `$` con el `valorFinal` calculado.

{% spoiler %}

```js
return "$" + valorFinal;
```

{% endspoiler %}

## Cierre

Si llegaste hasta aquí y tus test pasaron tu función ya está completa!

Esta es la última lección. Si has conseguido completar todos los tests hasta aquí,
consideramos que ya estás preparada para resolver el reto que te propusimos.

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
{% video https://www.youtube.com/watch?v=IoVRipOlUsc&t=10m04s %}
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
{% video https://www.youtube.com/watch?v=IoVRipOlUsc&t=12m35s %}
{%endspoiler%}
