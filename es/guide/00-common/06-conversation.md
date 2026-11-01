# Capítulo 6. Cómo afinar la respuesta siguiendo la conversación

> **En una línea**: la primera respuesta de la IA no es el producto final, sino un borrador. Mejóralo dentro de la misma conversación,
> y si la conversación se enreda, pide un resumen y llévalo a una conversación nueva.

## Hasta dónde recuerda la IA una conversación

### Dentro de la misma conversación, sí recuerda

La IA lee junto todo lo que se dijo en una misma ventana de chat y responde con eso. Por eso, si dices «Acorta solo el segundo párrafo del texto que acabas de escribir»,
entiende de qué texto hablas.

Hablando con precisión, la IA no «guarda» recuerdos. Lo que hace se parece más a **volver a leer toda la conversación desde el principio cada vez que responde**.
Piensa en la **ventana de contexto** (la cantidad de texto que la IA puede leer de una vez) que viste en el [capítulo 1](01-what-is-llm.md). Solo puede tener en cuenta lo anterior mientras la conversación quepa ahí dentro.

A una conversación en la que se intercambian muchos mensajes se la llama conversación **multiturno** (multi-turn). Un **turno** (turn) es una ronda: tú hablas una vez y la IA responde una vez.

### En una conversación nueva, por defecto no sabe nada

Cuando abres una ventana de chat nueva, la IA empieza sin conocer las conversaciones anteriores. Tendrás que volver a contarle tu situación, aunque se la hayas explicado largo y tendido ayer.

Algunos servicios tienen una función de **memoria** (memory) que guarda una parte de las conversaciones anteriores.
Cómo funciona y cómo se configura cambia según el servicio, así que lo vemos en la etapa 2 (guías por servicio).
En este capítulo, piensa que «una conversación nueva empieza de cero».

<Quiz id="ch6-memory" />

## Cómo pedir bien una corrección

Cuando la respuesta no te gusta, el error más común es decir algo así:

```
No me gusta. Escríbelo de nuevo.
```

La IA no sabe qué es lo que no te gusta. Por eso te da otro texto de un nivel parecido al primero. Al pedir una corrección, incluye tres cosas.

| Elemento | Pregunta | Ejemplo |
|---|---|---|
| **Qué parte** | ¿Qué parte tiene el problema? | «la tercera frase», «la conclusión», «el tono en general» |
| **Cómo** | ¿Cómo quieres cambiarla? | «más corto», «con cifras», «menos rígido» |
| **Qué se queda igual** | ¿Qué hay que respetar? | «el primer párrafo está bien, déjalo tal cual» |

Con las tres cosas, queda así. A diferencia de «no me gusta», aquí está claro qué se toca y qué se respeta.

```
La estructura general está bien. El tercer párrafo es demasiado largo, redúcelo a dos frases.
Deja tal cual el «gracias» de la última frase y mantén el resto con el mismo tono que ahora.
```

### Frases de corrección listas para usar

| En este caso | Prueba a decir esto |
|---|---|
| Es demasiado largo | «Deja solo lo esencial y redúcelo a la mitad» |
| Es demasiado rígido | «Cámbialo como si un compañero veterano le hablara a uno más joven» |
| Es demasiado obvio | «Quita lo que cualquiera diría y cámbialo por contenido que solo valga para esta situación» |
| No lo entiendo | «Explica esta parte otra vez con un ejemplo, de modo que lo entienda un estudiante de secundaria» |
| Quiero saber en qué se basa | «Dime tres razones por las que piensas eso» |
| Olvidó la instrucción inicial | «Vuelve a respetar las condiciones que te di al principio (máximo cinco frases, trato formal)» |

### Cuando cumple la instrucción pero no sirve — di el objetivo

Pediste «hazlo más corto» y, efectivamente, quedó más corto. Pero también se perdió contenido importante.
La IA respetó las letras de lo que dijiste, pero se le escapó el sentido.

En estos casos, repetir lo mismo con más fuerza no suele arreglarlo. En cambio, añade **para qué lo quieres**.[^academy-goal]

**Ejemplo flojo**

```
Hazlo más corto. Cortísimo de verdad.
```

**Ejemplo mejor**

```
Hazlo más corto. El objetivo es que un jefe de equipo muy ocupado lo lea hasta el final
y recuerde el resultado de la investigación del segundo párrafo.
```

La diferencia está en la última línea. Si conoce el objetivo, la IA puede elegir qué dejar y qué quitar.

«En 3 líneas» y «en una tabla» son formas; «que el equipo confíe en este calendario» es un objetivo ([capítulo 4, «Los 5 elementos de un buen prompt»](04-prompt-basics.md#los-5-elementos-de-un-buen-prompt)).
Antes de enviar la petición, pregúntate: ¿dije solo la forma o también el objetivo?

<Quiz id="ch6-fix" />

## Regenerar, editar la pregunta o pedir a continuación — cuándo usar cada uno

En la mayoría de los servicios hay tres maneras de volver a recibir una respuesta. Los nombres y la posición de los botones cambian según el servicio; en la etapa 2 te los muestro con capturas de pantalla.

| Método | Qué hace | Cuándo |
|---|---|---|
| **Pedir a continuación** | Dices que corrija a partir de la respuesta actual | Cuando la dirección es correcta y solo hay que arreglar una parte |
| **Regenerar** | Recibes otra respuesta más con la misma pregunta | Cuando la pregunta está bien, pero la respuesta salió floja por casualidad |
| **Editar mi pregunta** | Modificas la pregunta que enviaste y la envías de nuevo | Cuando a la primera pregunta le faltaba información |

¿Por qué sale una respuesta distinta si pulsas regenerar con la misma pregunta? Como viste en el [capítulo 1](01-what-is-llm.md), cuando la IA elige «lo que viene después»,
lo elige **al azar según probabilidades** entre los candidatos más verosímiles. Por eso, incluso con la misma pregunta, cada vez sale una respuesta un poco distinta.

### Antes de volver a pulsar — señala cuál fue el problema

Cuando la respuesta es rara, es fácil pulsar regenerar enseguida. Antes, fíjate primero en qué tipo de fallo es. Si conoces el tipo de fallo, puedes ir directo al método de corrección adecuado.[^academy-diagnose]

- **Los nombres, las cifras o las fuentes parecen creíbles pero te hacen dudar** → compruébalos en el material original ([capítulo 9](09-safety.md#cuatro-habitos-para-comprobar)).
- **En una conversación larga olvidó las condiciones iniciales** → vuelve a darle las condiciones, o llévate una nota de traspaso a una conversación nueva (mira más abajo [«Cuándo empezar una conversación nueva»](#cuando-empezar-una-conversacion-nueva)).
- **El cálculo está mal** → si el servicio puede hacer cálculos con código, pídele que lo haga así.
- **Está de acuerdo con todo lo que pienso** → dile que puede llevarte la contraria ([capítulo 1](01-what-is-llm.md#_5-es-facil-que-me-de-la-razon-—-adulacion)).

Como en la tabla de arriba, regenerar es el método para cuando la pregunta está bien y la respuesta salió floja por casualidad. Si la causa es otra, arregla primero esa causa en lugar de volver a pulsar.

<Quiz id="ch6-regenerate" />

## Cuándo empezar una conversación nueva

A veces, si alargas mucho una conversación, las respuestas empeoran. Esto pasa porque lo que se habló antes sigue influyendo.
Por ejemplo, si en la misma conversación estuviste mucho tiempo creando frases publicitarias para una tienda y luego pides un currículum, en el currículum pueden colarse giros de publicidad.

![Cuando no te gusta la respuesta: si la dirección es correcta, señala solo la parte a corregir y pide la modificación. Si la dirección es errónea y la conversación es larga o cambió de tema, pide un resumen y empieza una conversación nueva; si no, reescribe la petición e inténtalo en la misma conversación](../../../guide/00-common/assets/ch6-decide.svg)

Empieza una conversación nueva si ves estas señales.

- **Cambió el tema** — cuando pasas de planear un viaje a un informe de trabajo
- **Empieza a olvidar las instrucciones iniciales** — cuando se salta una y otra vez el tono o la extensión que fijaste al principio
- **Repite el mismo error** — cuando, aunque le pidas corregirlo, siguen saliendo errores parecidos
- **La conversación se hizo larguísima** — cuando tienes que subir mucho para ver el principio

<Quiz id="ch6-new-chat" />

## Cómo pasar a una conversación nueva — traspaso con resumen

Empezar una conversación nueva no significa tirar lo que ya has decidido. **Pide un resumen en la conversación anterior y pégalo en la nueva.**
Es lo mismo que la nota de traspaso que se deja en una empresa cuando cambia la persona responsable.

**En la conversación anterior**

```
Quiero seguir esta conversación en una conversación nueva. Escribe una nota de traspaso con estos apartados.
- Objetivo: qué estoy creando
- Decidido: lo que hemos fijado hasta ahora y las condiciones
- Mis gustos: lo que dije que me gusta y lo que no
- Pendiente: lo que hay que hacer a continuación
```

**En la conversación nueva**

```
Lo de abajo es la nota de traspaso que preparé en la conversación anterior. Con base en ella, sigue desde el primer punto de «Pendiente».

---
[pega aquí la nota de traspaso]
---
```

Rodea la nota con el **delimitador** (`---`) del [capítulo 5](05-prompt-patterns.md). Así la IA no confunde el contenido de la nota con mi petición.

<Quiz id="ch6-handoff" />

## Guarda los prompts que funcionaron

Si una petición dio buen resultado después de corregirla varias veces, no la tires: guárdala en un bloc de notas. La próxima vez que tengas algo parecido, solo cambias los huecos y la usas otra vez.

```
[Para ordenar el informe semanal]
Lo de abajo son mis notas de trabajo de esta semana. Ordénalas como informe semanal para mi jefe de equipo.
Hazlo en una tabla de tres columnas: «Terminado / En curso / Plan de la próxima semana», y escribe una línea por cada punto.

---
[notas de esta semana]
---
```

A una petición que dejas con huecos para reutilizarla así se le llama **plantilla de prompt** (prompt template).
Según el servicio, también hay funciones que guardan este tipo de indicaciones y las aplican automáticamente cada vez. Eso también lo vemos en la etapa 2.

<Quiz id="ch6-template" />

## Pruébalo tú

1. En una conversación nueva, pide solo «Recomiéndame un sitio para la cena de equipo del próximo viernes».
2. Pide que corrija la respuesta dos veces usando los **tres elementos de la corrección** (qué parte, cómo, qué se queda igual).
3. Pide una nota de traspaso, pégala en una **conversación nueva** y continúa con «Con estas condiciones, escribe un mensaje de texto para consultar la reserva».

Mira la respuesta de la conversación nueva y pregúntate: ¿se respetaron las condiciones fijadas antes, como el número de personas, el presupuesto y la zona?

## Resumen

- Dentro de la misma conversación se lee lo anterior junto, pero una conversación nueva empieza de cero.
- Al pedir una corrección, di «qué parte, cómo, qué se queda igual».
- Si cambia el tema o empieza a olvidar las instrucciones iniciales, pide una nota de traspaso y pasa a una conversación nueva.
- Guarda como plantilla las peticiones que funcionaron y vuelve a usarlas.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Multi-turn | Multiturno | Conversación en la que se intercambian muchos mensajes |
| Turn | Turno | Una ronda: una pregunta y una respuesta |
| Context Window | Ventana de contexto | La cantidad de texto que la IA puede leer de una vez ([capítulo 1](01-what-is-llm.md)) |
| Memory | Memoria | Función del servicio que recuerda una parte de las conversaciones anteriores |
| Regenerate | Regenerar | Recibir otra respuesta con la misma pregunta |
| Prompt Template | Plantilla de prompt | Formato de petición que se reutiliza cambiando solo los huecos |

<ChapterDone :chapter="6" />

Siguiente capítulo: [Capítulo 7. Prompts estructurados — Markdown y etiquetas XML](07-structured-prompts.md)

---

[^academy-goal]: Claude Academy, curso «AI capabilities and limitations», lección «Steerability». "When an instruction is followed literally but uselessly, restate the goal." / "Repeating the instruction with more force won't close the gap." / "Make this shorter. My goal is to keep the executive's attention through the key finding on page two." https://academy.claude.com/courses/ai-capabilities-and-limitations/steerability (consultado el 2026-10-26)
[^academy-diagnose]: Claude Academy, curso «AI capabilities and limitations», lección «When Properties Collide». "Naming the properties at play points you straight to the fix: verify specifics, re-supply context, offload to code execution, or invite pushback." https://academy.claude.com/courses/ai-capabilities-and-limitations/when-properties-collide (consultado el 2026-10-26)
