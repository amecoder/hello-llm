# Capítulo 8. Metaprompting: que la IA te prepare el prompt

> **En una línea**: no hace falta que escribas tú todo el prompt perfecto. Dale a la IA tu petición tal como se te ocurra y
> pídele **«conviértelo en un buen prompt»**. Eso sí, lo que la IA te devuelva léelo tú antes de enviarlo.

## Qué es el metaprompting

Del [capítulo 4](04-prompt-basics.md) al [capítulo 7](07-structured-prompts.md) aprendiste los elementos de una buena petición (objetivo, contexto, destinatario, formato y condiciones), varios patrones y cómo dividir en apartados.
Memorizarlo todo y aplicarlo cada vez es difícil. Por eso existe una forma de **encargarle a la IA la propia tarea de escribir el prompt**.

A un **prompt que sirve para crear o corregir otro prompt** se le llama **metaprompting** (meta prompting).
«Meta» significa «sobre sí mismo». Es una pregunta sobre la pregunta, un prompt sobre el prompt.

Las empresas de IA también usan este método. OpenAI, la creadora de ChatGPT, tiene una pantalla de pruebas aparte para desarrolladores (Playground, un sitio para desarrolladores distinto de ChatGPT).
OpenAI ha explicado que el botón Generate (Generar) de esa pantalla funciona con un **metaprompt** (meta-prompt, un prompt que le indica a la IA que cree o mejore un buen prompt).[^openai-gen]
También hay un estudio según el cual las instrucciones escritas por una IA funcionan igual de bien que las escritas por personas, y a veces mejor.[^ape]

![Orden del metaprompting: mi petición escrita como se me ocurre → la IA la ordena en un prompt estructurado → yo la leo, la corrijo y relleno los huecos → la pego en una conversación nueva y la envío. A la IA solo le pido que la ordene, y la comprobación antes de enviar la hago yo](../../../guide/00-common/assets/ch8-meta.svg)

En este capítulo veremos cuatro métodos, según para qué los uses.

| Método | Cuándo usarlo |
|---|---|
| 1. Pedirle solo que lo ordene | Cuando sabes lo que quieres decir, pero lo tienes desordenado |
| 2. Crearlo respondiendo preguntas | Cuando ni siquiera sabes qué escribir |
| 3. Arreglar un prompt que no funcionó | Cuando lo pediste y no salió la respuesta que querías |
| 4. Convertirlo en una plantilla para reutilizar | Cuando haces con frecuencia el mismo tipo de tarea |

<Quiz id="ch8-what" />

## 1. Pedirle solo que lo ordene

Es lo más básico. Le das tu petición escrita como se te ocurra y le pides que la divida en los apartados que aprendiste en el [capítulo 7](07-structured-prompts.md).

**Paso 1: pedirle solo que lo ordene**

```
Convierte mi petición, la que está entre las líneas separadoras de abajo, en un prompt ordenado con títulos de Markdown.
Pon el contexto bajo "## Situación", lo que hay que hacer bajo "## Tarea" y la forma de la respuesta bajo "## Forma de la respuesta". Si hay material pegado, ponlo bajo "## Material", rodeado de líneas separadoras.
Si falta información, márcala como un hueco, por ejemplo [escribe aquí ○○].
Todavía no ejecutes la petición. Enséñame solo el prompt ordenado.

---
hazme un plan del viaje a Jeju de la semana que viene con mis padres, mi padre tiene mal la rodilla
tenemos coche de alquiler y son 3 días y 2 noches mete también sitios para comer y adónde ir si llueve
---
```

Hay dos frases importantes.
- **«Márcala como un hueco»**: sin esta frase, la IA inventa y rellena con algo verosímil la información que falta.
- **«Todavía no ejecutes la petición»**: sin esta frase, la IA, en cuanto ordena el prompt, te hace también el plan del viaje.

**Paso 2: rellenar los huecos y volver a enviarlo**

En el prompt que te devuelva la IA, rellena los huecos (por ejemplo, la fecha de salida o el presupuesto). Después pégalo en una **conversación nueva** y envíalo.
Como viste en el [capítulo 6](06-conversation.md), si lo envías en una conversación nueva, no se cuelan en la respuesta los restos de la conversación en la que estabas ordenando.

> Prueba a cambiar los títulos de Markdown por «ordénalo con etiquetas XML». Con el mismo método puedes obtener también el prompt con etiquetas XML del [capítulo 7](07-structured-prompts.md).
> Si el material que pegas es largo o son varios materiales, esta forma queda más clara.

<Quiz id="ch8-tidy" />

## 2. Crearlo respondiendo preguntas

Si no sabes qué escribir, haz que la IA **te pregunte** a ti.
Es usar para crear el prompt el patrón «hacer que pregunte» (Flipped Interaction) del [capítulo 5](05-prompt-patterns.md).

```
Quiero pedirle a la IA un texto de promoción para la tienda de comida casera de mi barrio.
Pero no sé qué información tengo que darle para que la respuesta sea buena.
Hazme, de una en una, las preguntas necesarias para crear un buen prompt.
Cuando termines de preguntar, reúne mis respuestas y crea un prompt ordenado con títulos de Markdown.
```

La IA te va preguntando de una en una, por ejemplo: «¿Cuál es el plato estrella de la tienda?» o «¿Dónde vas a usar el texto: en un folleto, en Instagram?».
Mientras respondes, se van completando con naturalidad **condiciones en las que no habías pensado** (el número de caracteres, el tono, el tipo de cliente).

> **Si las preguntas no se acaban nunca**: fija el número desde el principio, por ejemplo «hazme como máximo 5 preguntas».

<Quiz id="ch8-interview" />

## 3. Arreglar un prompt que no funcionó

¿Hiciste la petición y la respuesta salió disparatada? Entonces enséñale **tu prompt y la respuesta que recibiste juntos**, y pregúntale qué falló.
Si solo le enseñas la respuesta, la IA tiene que adivinar dónde está el problema.

```
Hice la petición con el "Mi prompt" de abajo y me salió la respuesta de "Respuesta recibida".
Yo quería una explicación fácil que pudiera leer un niño de primaria, pero salió demasiado difícil.

1. Explícame brevemente qué le faltaba a mi prompt para que pasara esto.
2. Enséñame el prompt corregido. Marca en negrita las partes que cambiaste.

## Mi prompt
---
explícame la fotosíntesis
---

## Respuesta recibida
---
(pega aquí la respuesta recibida)
---
```

Con este método **aprendes también el motivo, junto con el prompt corregido**.
En el ejemplo de arriba, la explicación que recibirás será «no indicaste quién lo va a leer (el destinatario)». Es uno de los 5 elementos del [capítulo 4](04-prompt-basics.md).
Si lo haces unas cuantas veces, dejarás de olvidarte de eso desde el principio.

> **Escribe siempre «lo que quieres».** Con solo «la respuesta no me gusta, corrígela», la IA no sabe qué criterio seguir para corregir.
> Es igual que la petición de corrección del [capítulo 6](06-conversation.md). Hay que decir qué quieres que cambie, por qué y cómo.

<Quiz id="ch8-fix" />

## 4. Convertirlo en una plantilla para reutilizar

¿**Repites la misma tarea**, como el informe de trabajo que haces cada semana o el resumen del acta de cada reunión? Entonces convierte en una **plantilla** (template) el prompt que ha funcionado bien.
Una plantilla es un prompt en el que solo quedan como huecos las partes que cambian.

```
Me ha gustado cómo has ordenado el acta de la reunión en esta conversación.
Para poder hacerlo igual la próxima vez, crea una plantilla de prompt en la que las partes que cambian cada vez
queden como huecos entre corchetes, como [fecha de la reunión] [texto original del acta].
```

Guarda en un bloc de notas la plantilla que te devuelva la IA. La próxima vez, solo tienes que rellenar los huecos y enviarla en una conversación nueva.
A las marcas como `[ ]`, que señalan estos huecos, se les llama **marcador de posición** (placeholder).

> Si la «nota de traspaso» del [capítulo 6](06-conversation.md) pasa el contenido de una conversación a la siguiente, la plantilla pasa la **forma de pedir** para que la uses también la próxima vez.

<Quiz id="ch8-template" />

## Qué debes tener en cuenta

**1. La IA se inventa condiciones que tú no dijiste**

Al ordenar, la IA a veces escribe valores arbitrarios, como «presupuesto de 500.000 wones» o «salida a las 9 de la mañana».
Antes de enviar, lee el prompt ordenado de principio a fin y pregúntate: «¿esto lo dije yo?». Si hay **algo que no dijiste**, bórralo o corrígelo.
Este es el hábito más importante de este capítulo.

**2. Que sea más largo no significa que sea mejor**

Con el metaprompting, el prompt se alarga enseguida varias veces. Para una petición corta, eso más bien estorba.
No hace falta ordenar un «recomiéndame un menú para comer». Juzga por si el resultado ha mejorado de verdad, no por la longitud.

**3. El prompt ordenado también hay que comprobarlo**

Que lo haya creado la IA no quiere decir que sea la respuesta correcta. Puede que, con ese prompt, la respuesta siga sin gustarte.
En ese caso, pídele que lo arregle otra vez como en la sección 3, o corrige tú una o dos líneas. No hace falta crear un prompt perfecto a la primera.

<Quiz id="ch8-caution" />

## Pruébalo tú

Piensa en una de tus peticiones recientes a la IA en la que **la respuesta te dejó con ganas de más**.
Si no se te ocurre ninguna, envía primero una petición corta, como «explícame la fotosíntesis» o «escríbeme una carta de presentación», y empieza con esa respuesta.

1. Enséñale esa petición a la IA con el método de la sección 3 y pídele qué faltaba y el prompt corregido.
2. En el prompt corregido, marca **lo que tú no dijiste**. ¿Cuántos sitios hay?
3. Corrige lo marcado como tú lo querías, envíalo en una conversación nueva y compáralo con la primera respuesta.
4. Si el resultado fue bueno, crea una plantilla con el método de la sección 4 y guárdala en un bloc de notas.

## Resumen

- El metaprompting es encargarle a la IA que cree o corrija prompts.
- Si lo tienes desordenado, pídele solo que lo ordene. Si no sabes qué escribir, créalo respondiendo preguntas.
- Un prompt que no funcionó se arregla enseñándole la respuesta recibida y lo que querías.
- Lo que haces a menudo conviértelo en una plantilla con huecos y reutilízala.
- Antes de enviar, lee siempre si se ha colado algo que tú no dijiste.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Meta Prompting | metaprompting | Pedirle a la IA que cree o pula prompts |
| Meta-prompt | metaprompt | Un prompt que le indica a la IA que cree o corrija un buen prompt |
| Flipped Interaction | interacción invertida (hacer que pregunte) | Un patrón en el que la IA te hace preguntas a ti ([capítulo 5](05-prompt-patterns.md)) |
| Prompt Template | plantilla de prompt | Un prompt que se reutiliza dejando como huecos solo lo que cambia |
| Placeholder | marcador de posición | Una marca que señala un hueco que se rellenará después. Ejemplo: `[fecha de la reunión]` |

<ChapterDone :chapter="8" />

Siguiente capítulo: [Capítulo 9. Usarla con seguridad: alucinaciones, datos personales, derechos de autor e instrucciones ocultas](09-safety.md)

---

[^openai-gen]: OpenAI, «Prompt generation». "A meta-prompt instructs the model to create a good prompt based on your task description or improve an existing one." https://developers.openai.com/api/docs/guides/prompt-generation (consultado el 2026-10-21)
[^ape]: Zhou et al., «Large Language Models Are Human-Level Prompt Engineers», 2022. Con un método en el que la IA crea candidatos de instrucciones y elige la que mejor funciona (APE), igualó o superó a las instrucciones escritas por personas en 19 de 24 tareas. https://arxiv.org/abs/2211.01910 (consultado el 2026-10-21)
