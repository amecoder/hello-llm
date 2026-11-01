# Capítulo 4. Fundamentos del prompt

> **En una línea**: un buen prompt es como el mensaje con el que le pides un trabajo a un compañero competente que acaba de llegar.
> Esa persona es lista, pero no sabe nada de tu situación.

## Qué es un prompt

Un **prompt (instrucción)** es el texto de petición que le envías a la IA. Todo lo que escribes en la ventana del chat es un prompt.

En el [capítulo 1](01-what-is-llm.md) vimos que la IA "no conoce tu situación". Por eso lo esencial de un prompt es
**contarle a la IA lo que no sabe**.

Imagina que le encargas una tarea a un compañero nuevo y competente. Si solo le dices "Escríbeme un informe", te preguntará de vuelta:
no sabe de qué informe se trata, quién lo va a leer ni cuánto debe durar.
La IA, en la mayoría de los casos, no pregunta: simplemente adivina y escribe. Así que cuéntaselo todo desde el principio.

<Quiz id="ch4-what" />

## Los 5 elementos de un buen prompt

No hace falta incluir todos los elementos cada vez. Úsalos como una lista de revisión cuando la respuesta no te convenza. Basta con encontrar qué elemento falta.

| Elemento | Pregunta | Ejemplo |
|---|---|---|
| **1. Objetivo** | ¿Qué quieres? | "Escríbeme un correo de rechazo" |
| **2. Contexto** | ¿Cuál es la situación? | "Un socio comercial nos pidió retrasar 2 semanas la fecha de entrega" |
| **3. Destinatario** | ¿Quién lo va a leer? | "Es el director de un socio con quien llevamos 10 años trabajando" |
| **4. Formato** | ¿Con qué forma? | "Máximo cinco frases, en tono formal y cortés" |
| **5. Condiciones** | ¿Qué hay que respetar o evitar? | "Deja abierta la puerta a futuras operaciones. No te disculpes en exceso" |

![Los cinco elementos (objetivo: qué quieres; contexto: cuál es la situación; destinatario: quién lo lee; formato: con qué forma; condiciones: qué respetar o evitar) forman juntos un buen prompt. No hace falta incluirlos todos cada vez: úsalos como lista de revisión cuando la respuesta te deje insatisfecho](../../../guide/00-common/assets/ch4-five-elements.svg)

Si incluyes los cinco elementos, queda así.

```
Un socio comercial nos pidió retrasar 2 semanas la fecha de entrega, pero por nuestro
calendario de lanzamiento no podemos. Escribe una respuesta explicándolo.
El destinatario es el director de un socio con quien llevamos 10 años trabajando.
Escríbela en tono formal y cortés, en cinco frases como máximo, y deja abierta
la puerta a futuras operaciones.
No te disculpes en exceso.
```

<Quiz id="ch4-five" />

## Aprende comparando el antes y el después

### Ejemplo 1. Resumir

**Prompt flojo**

```
Resume este artículo.
```

**Buen prompt**

```
Voy a compartir el artículo de abajo en el chat grupal de la empresa. Resúmelo en tres
líneas clave para que mis compañeros, que van con prisa, lo lean en 30 segundos,
y añade una línea sobre lo que le puede servir a nuestro equipo (marketing en línea).

[pega aquí el artículo]
```

El buen prompt incluye cuatro cosas más: contexto (compartir en el chat grupal), destinatario (compañeros con prisa), formato (tres líneas + una línea) y objetivo (lo que le sirve a nuestro equipo).

### Ejemplo 2. Que te expliquen algo

**Prompt flojo**

```
¿Qué es el tipo de cambio?
```

**Buen prompt**

```
Soy estudiante de secundaria y es la primera vez que leo noticias de economía. Explícame
qué es el tipo de cambio con una analogía sencilla.
Dame un ejemplo con números de por qué, cuando sube el tipo de cambio, sale más caro viajar al extranjero,
y al final dime tres cosas que conviene saber cuando veo una noticia sobre el tipo de cambio.
```

El buen prompt incluye dos cosas más: destinatario (un estudiante de secundaria que lee noticias de economía por primera vez) y formato (analogía + ejemplo con números + tres puntos).

Las respuestas que recibes cambian más o menos así. La respuesta real varía según el servicio y según el momento.

| | Respuesta al prompt flojo | Respuesta al buen prompt |
|---|---|---|
| Primera frase | "El tipo de cambio es la relación de intercambio entre la moneda de un país y la de otro, que depende de la oferta y la demanda del mercado de divisas…" | "El tipo de cambio es como la 'etiqueta de precio' que se pone cuando cambias tu dinero por el de otro país." |
| Ejemplo | Casi ninguno | "Si 1 dólar pasa de 1300 wones a 1400 wones, por un hotel de 100 dólares pagas 140.000 wones en vez de 130000." |
| Después de leer | Muchos términos, pero no se entiende bien | Se conecta con tu vida y se entiende al instante |

### Ejemplo 3. Ideas

**Prompt flojo**

```
Sugiéreme nombres para una tienda.
```

**Buen prompt**

```
Voy a abrir una pequeña panadería artesanal de bagels en una zona residencial.
Los clientes serán sobre todo oficinistas que pasan por la mañana de camino al trabajo y familias los fines de semana.
Sugiéreme 10 nombres fáciles de pronunciar, en coreano o en inglés, y añade una línea con la sensación que transmite cada uno.
Que no haya más de 3 nombres que contengan la palabra "bagel".
```

El buen prompt incluye cuatro cosas más: contexto (el barrio y el tipo de negocio), destinatario (el tipo de clientes), formato (10 nombres + una línea de descripción) y condiciones (límite de una palabra).

<Quiz id="ch4-compare" />

## Tres hábitos que puedes usar ya

1. **Empieza con "Soy ○○ y quiero ○○".** Solo con esta frase ya incluyes el contexto y el objetivo.
2. **Pide la forma que quieres con números.** Di "en tres líneas" en lugar de "corto" y "10" en lugar de "muchos".
3. **Si no te convence, no empieces de cero: pídele que lo corrija a continuación.** Por ejemplo, así:
   "La segunda frase suena demasiado rígida. Cámbiala para que suene un poco más suave."

<Quiz id="ch4-habits" />

## Pruébalo tú

Elige un asunto que te preocupe ahora mismo y completa los huecos de abajo para armar un prompt.

```
Soy [quién eres] y quiero [qué quieres hacer].
[Descripción de la situación].
Para [quién lo va a leer o para quién es],
hazme [el resultado que quieres] en [el formato y la extensión que quieres].
[Lo que hay que respetar o evitar].
```

Después compáralo con el resultado de preguntar en una sola línea, sin huecos. ¿Cuál se ajusta mejor a tu situación? ¿Cuál necesita menos correcciones?

## Resumen

- Lo esencial de un prompt es contarle a la IA lo que no sabe de tu situación.
- Usa los cinco elementos (objetivo, contexto, destinatario, formato y condiciones) como lista de revisión.
- No hace falta que salga perfecto a la primera. Sigue la conversación y ve corrigiendo.

<ChapterDone :chapter="4" />

Siguiente capítulo: [Capítulo 5. Patrones de prompt](05-prompt-patterns.md)
