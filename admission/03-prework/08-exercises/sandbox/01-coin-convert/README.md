# Convertidor de monedas

## Enunciado

Crea una función que convierta una cantidad en dólares a 5 monedas diferentes:
soles, pesos mexicanos, pesos chilenos, pesos colombianos y reales.

[FIXME-VIDEO: Demo del resultado final]

## Análisis y lista de tareas

Para llevar a adelante este reto necesitas completar las siguientes tareas:

* Abrir el archivo `coinConvert.js` que tiene una _función_ llamada `coinConvert`
* Calcular los valores de las varibles:
  - `soles`
  - `pesosMexicanos`
  - `pesosChilenos`
  - `pesosColombianos`
  - `reales`
* Usar la terminal para:
  - Instalar las dependencias del proyecto
  - Ejecutar los tests

{% next "Comencemos" %}

{%spoiler "Recuerda inicializar tu proyecto con `npm install`"%}
{% video https://www.youtube.com/watch?v=QdtKomkVWXE %}
{%endspoiler%}

## Abre el archivo `coinConvert.js`

En el lado derecho de tu pantalla asegurate que estas abriendo y trabajando
en el archivo `src/coinConvert.js`.

### Estructura de la función `coinConvert`

#### Parámetro

Es la variable que se define cuando se declara la función.

La función `coinConverter` en el boilerplate(plantilla) tiene un solo
_parámetro_ (`dolares`), que es un _número_ que representa una cantidad en dólares.

#### Valor de retorno

Este es el valor que retorna nuestra función cuando termina de ejecutarse.

La función `coinConverter` en el boilerplate(plantilla) tiene
un valor de retorno que es un _arreglo_ (_array_) con cinco valores:
la cantidad en soles, pesos mexicanos, pesos chilenos, pesos colombianos y reales.

{% next "Funcionalidad JS" %}

## Calcula los valores de las variables

Utiliza las siguientes tasas de cambio:

```text
1 dólar = 3.65 soles peruanos
1 dólar = 19.96 pesos mexicanos
1 dólar = 699.50 pesos chilenos
1 dólar = 3611.50 pesos colombianos
1 dólar = 5.62 reales
```

{% next "Calculo de soles" %}

### Calculo del valor de la variable `soles`

Asigna a la variable `soles` el resultado de multiplicar `dolares` por
el tipo de cambio.

{% spoiler %}

```js
const soles = dolares * 3.65;
```

{% endspoiler %}

{% next "Calculo de pesos mexicanos" %}

### Calculo del valor de la variable `pesosMexicanos`

Asigna a la variable `pesosMexicanos` el resultado de multiplicar `dolares`
por el tipo de cambio.

{% spoiler %}

```js
const pesosMexicanos = dolares * 19.96;
```

{% endspoiler %}

{% next "Calculo de pesos chilenos" %}

### Calculo del valor de la variable `pesosChilenos`

Repite el proceso para `pesosChilenos`

{% next "Calculo de pesos colombianos" %}

### Calculo del valor de la variable `pesosColombianos`

Repite el proceso para `pesosColombianos`

{% next "Calculo de reales" %}

### Calculo del valor de la variable `reales`

Repite el proceso para `reales`

## Cierre

Si llegaste hasta aquí y tus test pasaron tu función ya está completa!

Puedes continuar con el último
[ejercicio](https://lab.cs50.io/Laboratoria/admission-curriculum/rediseno-prework-fe/admission/03-prework/08-exercises/sandbox/02-restaurant-bill/).

> Antes de terminar, si no lo has hecho todavía valida tu solución ejecutando
> `npm run test` y recuerda registrar tu avance ejecutando `npm run submit` en
> tu terminal

{%spoiler "¿Cómo ejecutar `npm run test`?"%}
{% video https://www.youtube.com/watch?v=IoVRipOlUsc&t=10m04s %}
{%endspoiler%}

{%spoiler "¿Cómo ejecutar `npm run submit`?"%}
{% video https://www.youtube.com/watch?v=IoVRipOlUsc&t=12m35s %}
{%endspoiler%}
