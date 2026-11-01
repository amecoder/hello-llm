# Capítulo 5. Memoria y personalización — para no tener que presentarte cada vez

> **En una línea**: ChatGPT adapta sus respuestas a ti con la **memoria**, que recuerda lo que le has contado, y con las
> **instrucciones personalizadas**, donde escribes lo que quieres que cumpla siempre. Aprenderás también a ver qué se recuerda y a borrarlo si no lo necesitas.

Las pantallas corresponden a la web en octubre de 2026 (plan Plus). En el plan gratuito o en la aplicación del móvil, la ubicación de los menús puede ser un poco distinta.

## Para qué sirven la memoria y la personalización

En el [capítulo 4 de la etapa 1](../00-common/04-prompt-basics.md) aprendiste que una buena instrucción debe llevar **contexto** (en qué situación estás).
Pero escribir de nuevo en cada chat nuevo un contexto como «soy dueño de una tienda de guisos del barrio y mis clientes tienen sobre todo entre 40 y 60 años» es una molestia.

ChatGPT tiene dos funciones que te ahorran ese esfuerzo.

| Función | Qué hace | Comparación |
|---|---|---|
| **Memoria** (memory) | Recuerda la información sobre ti que averigua en las conversaciones y la usa en las siguientes | El dueño de una tienda que recuerda los gustos de sus clientes habituales |
| **Instrucciones personalizadas** (custom instructions) | Aplica a todas las conversaciones nuevas lo que tú has escrito como «cumple siempre esto» | La nota de pedido pegada en la pared de la tienda |

En el [capítulo 6 de la etapa 1](../00-common/06-conversation.md) se dijo que «una conversación nueva empieza de cero por defecto». Si activas estas dos funciones, hasta una conversación nueva empieza conociéndote un poco.

<Quiz id="ch105-why" />

## Activar la memoria y comprobarla

Los ajustes de la memoria están en **menú de la cuenta → «Configuración» → «Personalización»**.[^memory]
Arriba del todo, en el apartado «Memoria de ChatGPT», verás dos líneas.

![Pantalla de personalización. Números rojos: ① activar memoria, ② administrar el resumen de memoria, ③ consultar mi estilo de escritura, ④ fotos de referencia, ⑤ estilo y tono básicos, ⑥ calidez. Fíjate en el interruptor «Activar memoria» del apartado «Memoria de ChatGPT» de arriba, el botón «Administrar» junto a «Resumen de memoria», debajo el interruptor «Consultar mi estilo de escritura» y, abajo del todo, los botones de selección «Estilo y tono básicos» y «Calidez»](../../../guide/11-chatgpt/assets/shot-06-personalization-marked.png)

- **① «Activar memoria»** — si lo dejas activado, ChatGPT adapta las respuestas a ti a partir de los chats, los archivos y las aplicaciones conectadas. Si lo desactivas, no usa lo recordado.
- **② «Resumen de memoria» → «Administrar»** — ves de un vistazo lo que ChatGPT ha averiguado sobre ti. En el texto de la pantalla también pone que «la información que quieras que recuerde siempre, escríbela en las instrucciones personalizadas».[^screen]

### En qué se basa para recordarme

Para dar respuestas adaptadas a ti, ChatGPT consulta los **chats anteriores, la memoria guardada, las instrucciones personalizadas, los archivos de la Biblioteca y las aplicaciones conectadas** (por ejemplo, Gmail).
Si quieres saber en qué se basó una respuesta, mira «Fuentes» debajo de la respuesta.[^memory]

### Memoria guardada y consulta del historial de chats no son lo mismo

La memoria se divide en dos.[^memory]

- **Memoria guardada** (saved memories) — es la información que se apunta aparte, como cuando dices «recuerda esto». Se guarda aparte del historial de chats. Por ejemplo: «Soy vegetariano. Recuérdalo»
- **Consulta del historial de chats** (reference chat history) — aunque no se haya apuntado nada, saca en cada momento la información necesaria de conversaciones pasadas. Por ejemplo, tiene en cuenta en la respuesta de hoy la edad de tu hijo que mencionaste en la conversación de la semana pasada.

Si desactivas que consulte la memoria guardada, también se desactiva la consulta del historial de chats.[^memory]

Para probar a hacer que lo recuerde, dile algo así.

```
Recuerda esto: tengo una tienda de guisos en Seúl y mis clientes tienen sobre todo entre 40 y 60 años.
Cuando te pida textos de promoción, escríbelos adaptados a este tipo de cliente.
```

<Quiz id="ch105-memory-kinds" />

## Cómo borrar lo recordado

Si lo recordado es incorrecto o no quieres que se siga usando, bórralo. En **«Resumen de memoria» → «Administrar»** puedes elegir entre dos cosas.[^memory]

| Botón | Qué hace |
|---|---|
| «No volver a mencionarlo» | Hace que ese contenido no se saque más en las respuestas (solo en los apartados donde aparece el botón) |
| «Eliminar y desactivar la memoria» | Borra lo recordado y desactiva también la función de memoria |

Hay dos cosas que se confunden fácilmente.[^memory]

- **Aunque borres un chat, la memoria guardada se queda.** Una memoria guardada creada en una conversación se conserva aparte aunque borres esa conversación. Por eso la memoria también hay que borrarla tú.
- **Si desactivas la consulta del historial de chats**, la información recordada de conversaciones pasadas queda programada para eliminarse de los sistemas de OpenAI en un plazo de 30 días. Los chats originales se quedan tal cual.

Con las aplicaciones conectadas ([capítulo 7](07-projects-plugins.md#fijar-los-permisos-de-las-aplicaciones-conectadas)) pasa igual. Aunque desconectes una aplicación como Gmail, **lo que ya se había traído de esa aplicación y estaba en las conversaciones o en la memoria no se borra.** Solo deja de poder leerla en adelante. Lo que quede, bórralo aparte con el método de arriba.[^apps]

<Quiz id="ch105-delete" />

## Instrucciones personalizadas — lo que quieres que se cumpla siempre

La memoria es lo que ChatGPT recuerda por su cuenta, y las **instrucciones personalizadas** son lo que escribes tú directamente.
En la web se entra por el enlace «Instrucciones personalizadas» de la pantalla «Personalización».
En la aplicación del móvil está en «Personalizar ChatGPT» de los ajustes, y solo se aplican si activas «Usar personalización».[^ci]

El número de caracteres que puedes escribir depende del plan.[^ci]

| Plan | Máximo de caracteres |
|---|---|
| Free · Go | 1500 |
| Plus · Pro · Business · Enterprise · Edu | 5000 (aumentó el 2026-07-15)[^rn] |

Por ejemplo, escribe algo así. Piensa que de los cinco elementos del [capítulo 4 de la etapa 1](../00-common/04-prompt-basics.md) eliges solo los que son iguales cada vez (contexto, destinatario y condiciones).

```
Soy un hombre de unos 50 años que lleva una tienda de guisos del barrio. No entiendo bien los términos de informática.
- Responde con un tono de respeto, y explica entre paréntesis las palabras difíciles.
- Primero di la conclusión en una línea y luego explícalo.
- Si algo no es seguro, no te lo inventes; di que no lo sabes.
```

No hace falta escribir solo el tono. También puedes escribir **la manera en que quieres recibir ayuda**. Traducidas, estas son las instrucciones que pone como ejemplo el curso de OpenAI Academy.[^academy-content]
```
- Cuando te pida consejo, dame una recomendación clara y dime también las ventajas y desventajas y lo que has supuesto.
- Si algo no es seguro, dilo claramente. No adivines, y dime qué información haría que la respuesta fuera mejor.
```

Después de cambiar las instrucciones, compruébalo **abriendo un chat nuevo**. Si se aplican enseguida también a una conversación ya en marcha, la página de ayuda lo explica de forma contradictoria. Lo más seguro es pensar que se aplican con seguridad a partir de las conversaciones nuevas.[^ci]
Además, la información que escribas en las instrucciones personalizadas también puede usarse para mejorar el modelo. Si no quieres, desactiva el ajuste de entrenamiento ([capítulo 8](08-privacy.md)).[^ci]

<Quiz id="ch105-instructions" />

## Fijar el tono — estilo y tono básicos, calidez y consultar mi estilo de escritura

Abajo en la pantalla «Personalización» hay unos apartados para fijar el tono de las respuestas.[^screen] Los números son los de la imagen de la sección «Activar la memoria y comprobarla» de este capítulo.

| Número | Nombre en pantalla | Qué hace |
|---|---|---|
| ⑤ | «Estilo y tono básicos» | Eliges el ambiente general de las respuestas (por ejemplo, «Profesional») |
| ⑥ | «Calidez» | Eliges lo cercana que suena la respuesta (al principio, «Predeterminado») |
| ③ | «Consultar mi estilo de escritura» (apartado «Escritura») | Si lo activas, ChatGPT consulta los chats, los archivos de la Biblioteca y las aplicaciones conectadas para escribir **con mi estilo** |

Por ejemplo, puedes activar «Consultar mi estilo de escritura» y pedir esto.

```
Escribe el mensaje de aviso de esta semana con los guisos para enviar a los clientes habituales. Con el tono que uso normalmente.
```

::: details La respuesta que recibes será más o menos así (ejemplo — pulsa para desplegar)
Es un ejemplo hecho por esta guía. La respuesta real varía según el servicio y el momento.

> ¡Hola! Os cuento las novedades de guisos de esta semana. El ○ sale (nombre del guiso), nuevo. ¡Gracias por venir siempre!

**Comprueba si la recibiste bien**: ¿Se parece al tono que uso normalmente? Como yo no le dije los guisos de esta semana, no pasa nada si ese espacio queda vacío. Si se inventó un nombre de guiso y lo puso, cámbialo por los de mi menú.

:::

El tono también puedes escribirlo en las instrucciones personalizadas, con algo como «escribe como si hablaras con un vecino cercano». Resulta cómodo repartirlo así: el ambiente general lo eliges en el menú y las reglas detalladas las escribes en las instrucciones.

<Quiz id="ch105-style" />

## Elegir si el chat temporal usa la memoria

A veces quieres una respuesta sin que te conozca. Por ejemplo, cuando investigas a escondidas un regalo para la familia o te interesa una respuesta general sin mezclar tus gustos.
En ese caso, pulsa el botón «Chat temporal» (임시 채팅) de arriba a la derecha. Y **antes de enviar el primer mensaje**, pulsa ① «Personalizado» (개인화됨) de arriba a la derecha y cámbialo a «No personalizado» (개인화되지 않음).[^screen][^temp]

![Pantalla de chat temporal. Al pulsar «Personalizado» arriba a la derecha salen dos opciones: «Personalizado — Este chat puede consultar la memoria, los plugins y las instrucciones personalizadas» y «No personalizado — En este chat se ignoran la memoria, los plugins y las instrucciones personalizadas»](../../../guide/11-chatgpt/assets/shot-19-temporary-personal-marked.png)

| Lo que eliges | Memoria e instrucciones guardadas | Memoria nueva |
|---|---|---|
| ② «Personalizado» (la opción inicial) | Responde consultándolas | No la crea |
| ③ «No personalizado» | Las ignora | No la crea |

En cualquiera de los dos casos, **lo que hablas en un chat temporal no se guarda como memoria nueva.** Una vez empezada la conversación, no se puede cambiar esta elección.[^temp]
Por eso, si en un chat temporal que empezaste con «No personalizado» preguntas «¿te acuerdas de mí?», lo normal es que no lo sepa. El resto de las características del chat temporal (historial, periodo de conservación) se tratan en el [capítulo 3](03-chats.md#no-dejar-registro-—-chat-temporal).

> Antes, en un chat temporal la memoria y las instrucciones estaban siempre desactivadas, pero ahora se puede elegir. Si tu pantalla es distinta, sigue la pantalla.

<Quiz id="ch105-temporary" />

## Practica tú mismo

1. Abre «Configuración» → «Personalización» → «Resumen de memoria» → «Administrar» y lee lo que ChatGPT sabe ahora de ti. Si hay algo incorrecto, bórralo.
2. En las «Instrucciones personalizadas», escribe como en el ejemplo de arriba una línea de contexto sobre ti y tres líneas de reglas.
3. En un chat nuevo, envía solo: «Recomiéndame tres cosas que hacer el fin de semana». Mira si se han cumplido el tono y el formato de las instrucciones.
4. Activa el «Chat temporal», cámbialo a «No personalizado» y envía la misma pregunta. Compara en qué se diferencian las dos respuestas.

**Proyecto continuo** ([preparar un club de lectura](../00-common/practice-kit.md)): mete en las «Instrucciones personalizadas» una línea con la regla que siempre quieres para los avisos. Por ejemplo: «Cuando escribas un aviso, pon arriba la fecha, el lugar y lo que hay que traer». Esta línea puedes trasladarla en el capítulo 7 a las instrucciones del proyecto.

## Resumen

- La memoria es la función con la que ChatGPT me recuerda a partir de las conversaciones, y las instrucciones personalizadas son las reglas que escribo yo directamente.
- La memoria se divide en «memoria guardada» y «consulta del historial de chats», y se comprueba y se borra en «Resumen de memoria» → «Administrar».
- Aunque borres un chat, la memoria guardada se queda. La memoria se borra aparte.
- Las instrucciones personalizadas admiten 1500 caracteres en Free y Go y hasta 5000 desde Plus. Después de cambiarlas, se comprueban en un chat nuevo.
- El chat temporal no crea memoria nueva. Para dejar fuera también la memoria y las instrucciones guardadas, elige «No personalizado» antes del primer mensaje.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Memory | Memoria | Función que recuerda la información sobre mí que averigua en las conversaciones |
| Saved Memories | Memoria guardada | Recuerdos apuntados aparte. Se quedan aunque borres el chat |
| Reference Chat History | Consulta del historial de chats | Sacar la información necesaria de conversaciones pasadas |
| Custom Instructions | Instrucciones personalizadas | Reglas escritas por mí que se aplican a todas las conversaciones nuevas |
| Personalization | Personalización | Pantalla de ajustes que reúne la memoria, las instrucciones y el tono |

<ChapterDone :chapter="105" />

Siguiente capítulo: [Capítulo 6. Búsqueda e investigación en profundidad](06-search.md)

[^memory]: Ayuda de OpenAI, «Memory in ChatGPT». https://help.openai.com/en/articles/8590148 (consultado el 2026-10-23)
[^ci]: Ayuda de OpenAI, «ChatGPT Custom Instructions». https://help.openai.com/en/articles/8096356 (consultado el 2026-10-23)
[^rn]: Ayuda de OpenAI, «ChatGPT release notes», entrada del 2026-07-15. https://help.openai.com/en/articles/6825453 (consultado el 2026-10-23)
[^apps]: Ayuda de OpenAI, «Connecting and managing app accounts in ChatGPT». "Disconnecting an app does not automatically delete existing or archived conversations, saved files, your Memory summary, or other saved memories." https://help.openai.com/en/articles/20001494 (consultado el 2026-10-24)
[^temp]: Ayuda de OpenAI, «Temporary chat in ChatGPT». "Unpersonalized: Does not use memory, custom instructions, or plugins." / "Neither option creates or updates memories while the chat remains temporary. You cannot change personalization after the conversation starts." https://help.openai.com/en/articles/8914046 (consultado el 2026-10-24)
[^screen]: Comprobado directamente en la pantalla web de ChatGPT (plan Plus, en coreano). Pantalla «Personalización» (consultado el 2026-10-23) y menú «Personalizado» de la pantalla «Chat temporal» (consultado el 2026-10-24)
[^academy-content]: OpenAI Academy, curso «AI Foundations», texto 4.5 (requiere iniciar sesión y registrarse). "When I ask for advice, give a clear recommendation, explain the tradeoffs, and call out any assumptions." / "If something is uncertain, say so clearly. Do not guess, and tell me what information would make the answer stronger." (consultado el 2026-10-26)
