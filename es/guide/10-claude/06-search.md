# Capítulo 6. Búsqueda e investigación: recibir información actual con sus fuentes

> **En una línea**: lo que ha pasado hoy o la información que cambia a menudo se lo encargas a la **búsqueda web**, y las preguntas grandes en las que hay que reunir y comparar varios materiales, a la
> **investigación**. En cualquier caso, forma parte del paquete abrir tú mismo las fuentes que acompañan la respuesta.

Las pantallas son de la versión web de octubre de 2026. Ahora se está desplegando por turnos la pantalla nueva de Claude, así que el nombre y la posición de los menús pueden variar según la pantalla.

## Búsqueda web: que Claude mire en internet

La IA solo conoce lo que aprendió hasta cierta fecha (la «fecha de corte del conocimiento» del [capítulo 1 de la etapa 1](../00-common/01-what-is-llm.md)).
Por eso, si le preguntas sin más por algo reciente, como «el tiempo de esta semana» o «la política que se anunció ayer», es fácil que se equivoque.
La **búsqueda web** (web search) es la función con la que Claude busca información actual en internet para responder.[^search]
También se puede usar en el plan gratuito.[^pricing]

No hay nada que activar. En la pantalla nueva no hay interruptor de búsqueda web: Claude busca por su cuenta cuando le sirve de ayuda.[^search][^new] En el menú «+» de la cuenta gratuita tampoco aparecía «Búsqueda web» (웹 검색).[^screen]

::: details Si usas la pantalla antigua (pulsa para desplegar)
En la pantalla antigua, pulsa «+» abajo a la izquierda del cuadro de escritura y elige «Búsqueda web» (웹 검색). Cuando se activa, aparece una marca de verificación al lado. Si vuelves a pulsar, se desactiva.[^search]

<!-- Falta captura de pantalla: menú «+» del cuadro de escritura de la pantalla antigua con «Búsqueda web» marcado -->
:::

Si quieres que busque sí o sí, escribe en el prompt «busca en la web».[^search]

```
Busca en la web. Dime el tiempo de este fin de semana en Seúl, separando sábado y domingo,
y enséñame también los sitios que has consultado.
```

Para las preguntas que necesitan fotos, a veces muestra junto a la respuesta las **imágenes** que ha encontrado en la búsqueda. No hay ningún ajuste que activar.[^search]

> La búsqueda de la que hablamos aquí es la **búsqueda en internet**. Encontrar tus conversaciones anteriores es otra función. Mira el [capítulo 3](03-chats.md) y el [capítulo 5](05-memory.md#consultar-chats-anteriores).

<Quiz id="ch206-web-search" />

## Darle un enlace para que lo lea

Si hay una página web que quieres que lea, pega su **dirección** (URL, la dirección de internet que tiene cada página web).
Si la búsqueda web está activada, Claude va a leer directamente el contenido de esa página. A esto se le llama **obtener de la web** (web fetch).[^fetch]

```
Lee el artículo de abajo y resume en tres líneas solo lo que afecte a un restaurante pequeño como el mío.
https://www.example.com/news/12345
```

Si le pides que resuma entero un texto largo, **gasta mucho uso**.[^fetch]
En el plan gratuito el límite de uso se repone cada 5 horas, y la búsqueda y la obtención de páginas también cuentan para ese límite.[^fetch]
Por eso, piensa antes si necesitas un análisis completo o te basta con lo esencial. El límite de uso se trata en el [capítulo 1](01-getting-started.md).

<Quiz id="ch206-fetch" />

## El hábito de comprobar las fuentes

Las respuestas obtenidas con la búsqueda web llevan **citas** (citation, una marca que indica de dónde se ha sacado algo).
Todas las respuestas con búsqueda llevan citas, así que puedes comprobar tú mismo las fuentes.[^search]

![Pantalla en modo incógnito en la que se pregunta «Busca en la web. Dime el horario de visitas del Museo Nacional de Corea.» (웹에서 검색해 줘. 국립중앙박물관 관람 시간 알려 줘.). Con números rojos: ① «Búsqueda web realizada» (웹 검색함) encima de la respuesta, ② la marca de fuente «museum» al final de una frase, ③ el aviso bajo el cuadro de escritura «No se usa para el historial, la memoria ni el entrenamiento de Claude.» (기록, 메모리, Claude 학습에 사용되지 않습니다.)](../../../guide/10-claude/assets/shot-13-web-search-marked.png)

Es una pantalla hecha en modo incógnito (plan gratuito). **Los números rojos son los mismos de la lista de abajo.**

- ① **«Búsqueda web realizada»**: indica que Claude ha mirado en internet. Si lo pulsas, se despliega lo que ha buscado.
- ② **Marca de fuente**: la pequeña etiqueta al final de la frase («museum», «segye», etc.) es el sitio del que se ha sacado esa frase.
- ③ Como es modo incógnito, el aviso dice que esta conversación no se usa para el historial, la memoria ni el entrenamiento.[^screen]

Si pulsas ① y vuelves a desplegar, verás las palabras que Claude usó para buscar y la lista de sitios que salieron en los resultados.

![Pantalla con «Búsqueda web realizada» desplegado. ① Las palabras de búsqueda que usó Claude, «국립중앙박물관 관람시간» (horario de visitas del Museo Nacional de Corea), ② la lista de los 9 sitios que vio en los resultados](../../../guide/10-claude/assets/shot-13-web-search-sites-marked.png)

- ① Son las palabras de búsqueda que Claude usó de verdad. Acortó mi pregunta para buscar.
- ② Es la lista de los 9 sitios que salieron en los resultados. Hay mezcla de sitios del Gobierno (mcst.go.kr, museum.go.kr), artículos de noticias y sitios personales.[^screen]

Antes de leer la respuesta, echa un vistazo a esta lista. Así puedes hacerte una idea primero de si hay algún sitio oficial.

Si pasas el ratón por encima de la marca de ② fuente, le sale una flecha y aparece una ventanita con ① la dirección del sitio. Si pulsas la marca, la página original se abre en una pestaña nueva.[^screen]

![Pantalla con el ratón sobre la marca de fuente «museum». ① La ventanita con la dirección del sitio www.museum.go.kr, ② la marca de fuente con la flecha](../../../guide/10-claude/assets/shot-13-citation-hover-marked.png)

Pero que haya un enlace no significa que la respuesta sea correcta.
Como aprendiste en el [capítulo 9 de la etapa 1](../00-common/09-safety.md#cuatro-habitos-para-comprobar), abre el enlace y compara con el texto original los números, las fechas y los nombres.
Cuando abras el enlace, pregúntate lo siguiente.

- **¿Se abre el enlace?** Pulsa la fuente y mira si aparece la página de verdad.
- **¿Lo dice el texto original?** Busca si los números y las frases de la respuesta están tal cual en la página.
- **¿Cuándo se escribió?** Mira la fecha de redacción, por si es información antigua.
- **¿Quién lo escribió?** Mira si es la página de un organismo o una empresa oficial, o un blog personal.

Si no te convence la fuente, vuelve a pedirlo así.

```
En la respuesta de antes, quita las fuentes que sean blogs personales y vuelve a decírmelo usando solo sitios del Gobierno o de organismos públicos.
Indica de qué página has sacado cada contenido.
```

En las preguntas en las que importa el lugar, como «restaurantes cerca de aquí», puede usar la ubicación que se calcula a partir de la **dirección IP** (el número que tiene cada dispositivo conectado a internet).[^search] Si salen resultados de otra zona, escribe tú el nombre de tu barrio.

<Quiz id="ch206-citations" />

## Investigación: encargar un informe

La **investigación** (Research) es la función que profundiza en una sola pregunta.
Encadena varias búsquedas y, según lo que encuentra, decide por sí misma qué mirar después.[^research]
Se puede usar en los planes de pago (Pro, Max, Team y Enterprise), en la web, en el escritorio y en la aplicación del móvil.[^research]

### Cómo empezar

Escribe `/deep-research` en el cuadro de escritura o elige «+» → «Research» debajo del cuadro de escritura.[^new]

::: details Si usas la pantalla antigua (pulsa para desplegar)
En la pantalla antigua, pulsa «+» → «Research» abajo a la izquierda del cuadro de escritura. Si aparece una marca azul debajo del cuadro de escritura, está activado.[^research] La investigación solo funciona **con la búsqueda web activada**.[^research]

<!-- Falta captura de pantalla: marca azul que aparece bajo el cuadro de escritura después de activar «+» → «Research» -->
:::

Incluso en la pantalla en coreano, «Research» puede aparecer en inglés.

![Pantalla en la que, al escribir ① «/deep» en el cuadro de escritura, ② «deep-research» aparece en la lista y ③ a su lado sale la descripción en inglés](../../../guide/10-claude/assets/shot-12-deep-research-marked.png)

Es la pantalla del plan gratuito. Si en ① escribes solo `/deep` en el cuadro de escritura, ya aparece ② «deep-research» en la lista. ③ A su lado sale una descripción en inglés de cuándo se usa la función.[^screen]
En el menú «+» de la cuenta gratuita no estaba «Research». El nombre se veía en la lista, pero la ayuda dice que la investigación es una función de los planes de pago.[^research] Esta guía no ha enviado ninguna investigación desde una cuenta gratuita.

Cuanto más detallada sea la pregunta, mejor. Prueba a incluir los cinco elementos del [capítulo 4 de la etapa 1](../00-common/04-prompt-basics.md#los-5-elementos-de-un-buen-prompt).

```
Escríbeme un informe que compare las comisiones de las aplicaciones de reparto que puede usar una tienda de comida casera de barrio.
- Para quién: el dueño de una tienda
- Qué comparar: comisión de intermediación, comisión de pago y coste de publicidad
- Formato: primero una conclusión en una línea, después una tabla comparativa y al final la lista de fuentes
- Da prioridad a datos de 2026 y marca aparte los datos de los que no se sepa la fecha
```

::: details Más o menos así será la respuesta (ejemplo; pulsa para desplegar)
Este ejemplo lo ha preparado esta guía. La respuesta real depende del servicio y cambia cada vez.

> **Conclusión en una línea**: si eres el dueño de una sola tienda, te conviene la aplicación ○, que es la más barata al sumar los tres costes.
>
> | Aplicación | Comisión de intermediación | Comisión de pago | Publicidad | Fecha del dato |
> |---|---|---|---|---|
> | Aplicación A | ○ % | ○ % | desde ○○ wones al mes | ○ de 2026 |
> | Aplicación B | ○ % | ○ % | ○○ | fecha desconocida |
>
> **Fuentes**
> 1. (enlace de la fuente): ○ de ○ de 2026
> 2. (enlace de la fuente): fecha desconocida

**Comprueba que la has recibido bien**: ¿ha llegado en este orden: conclusión en una línea → tabla comparativa → lista de fuentes? ¿Están en la tabla la comisión de intermediación, la de pago y la publicidad? ¿Ha dado prioridad a los datos de 2026 y ha marcado aparte los que no tienen fecha? Los números importantes, como las comisiones, compruébalos tú pulsando el enlace de la fuente.

:::

La investigación puede tardar varios minutos.[^academy-research] Por eso no es una pérdida de tiempo pulir la pregunta antes de enviarla. Si no sabes qué preguntar, antes de activar la investigación pregunta esto en una conversación normal.[^academy-research]

```
Estoy pensando en abrir una tienda pequeña de comida casera en mi barrio. Quiero investigarlo con la función de investigación; ayúdame a pulir con qué pregunta conviene encargarlo. Pregúntame también las condiciones que yo tengo que fijar, como presupuesto, zona y plazo.
```

Incluye condiciones como el presupuesto, la zona y el plazo.[^academy-research] Con condiciones, a la investigación le resulta más fácil encontrar materiales que encajen con tu situación.

### Lo que conviene saber

- **El uso se puede gastar rápido.** El límite es el mismo que el de las conversaciones normales. Pero como reúne varias fuentes y crea una respuesta larga, lo gastas más deprisa.[^research]
- **Si parece que no está investigando**, dilo tú: «usa la herramienta de investigación para…».[^research]
- **También usa las aplicaciones conectadas.** Si tienes activados los conectores (otras aplicaciones conectadas a Claude, [capítulo 7](07-projects-tools.md)), durante la investigación usa esas herramientas sin preguntarte cada vez.[^research]
- **Si empiezas desde el móvil, solo busca en la web.** Aunque se salte los conectores, no te lo avisa. Si necesitas también los materiales de las aplicaciones conectadas, empieza desde la web o el escritorio.[^research]
- **El modelo está fijado.** Sea cual sea el modelo que hayas elegido, funciona el modelo fijado para la investigación.[^research]

Cuanto más largo y convincente es el informe, más fácil es saltarse la comprobación. Empieza por abrir las fuentes de los números que aparecen en la conclusión y compáralos.

<Quiz id="ch206-research" />

## Cuándo usar cada cosa

Si dudas qué función usar, antes de enviar la pregunta pregúntate: «¿Sale la respuesta con una o dos búsquedas? ¿Hay que reunir varios materiales? ¿De verdad hace falta información actual?».

El **pensamiento extendido** (extended thinking) es la función que hace que piense más tiempo antes de responder. Dónde se activa se trata en el [capítulo 2](02-screen-tour.md).

Se elige así.[^when]

| Cuando | Elige | Ejemplo |
|---|---|---|
| Con una o dos búsquedas sale la respuesta | Búsqueda web | El tiempo, las noticias, el resultado del partido de anoche |
| Hay que razonar a fondo, sin información actual | Pensamiento extendido | Un problema de matemáticas, un análisis desde varios puntos de vista |
| Hay que reunir varios materiales y hace falta un informe | Investigación | Comparar tiendas de la competencia |

La investigación encaja con búsquedas amplias en las que se usan las herramientas cinco veces o más durante 1 a 3 minutos.[^when]

Si activas **a la vez** el pensamiento extendido y la investigación, Claude planifica, reúne de forma amplia y entrega un informe más largo.[^when]

<Quiz id="ch206-when" />

## Pruébalo tú mismo

1. En un chat nuevo, pregunta «Busca en la web. Dime los eventos culturales de este mes en mi barrio». Escribe tú el nombre de tu barrio.
2. Abre tú mismo dos de las fuentes de la respuesta y comprueba que la fecha de los eventos coincide con la del texto original.
3. Pega la dirección de un artículo que hayas leído hace poco y pide un resumen en tres líneas.
4. Si tienes un plan de pago, adapta a tu trabajo el ejemplo de las comisiones de las aplicaciones de reparto de arriba y envíalo como investigación. Elige un número de la conclusión del informe y búscalo en la fuente.

**Proyecto continuo** ([Preparar un club de lectura](../00-common/practice-kit.md)): pregunta «Busca en la web. Dime cómo se alquila una sala de seminarios en la biblioteca del distrito de mi barrio». Escribe tú el nombre de tu barrio. El horario y cómo solicitarla compruébalos tú abriendo la fuente.

## Resumen

- Lo más actual se pregunta con la búsqueda web. También funciona en el plan gratuito.
- En la pantalla nueva Claude busca por su cuenta (en la antigua: «+» → «Búsqueda web»). Para que busque sí o sí, escribe «busca en la web».
- Si pegas una dirección, lee esa página. Los textos largos gastan mucho uso.
- Aunque lleve citas, puede estar equivocado. Abre el enlace y compáralo con el texto original.
- Las preguntas grandes se encargan a la investigación (de pago). Se empieza con `/deep-research` o con «+» → «Research».
- Para un dato sencillo, la búsqueda web; para algo que hay que razonar a fondo, el pensamiento extendido; para algo que exige reunir varios materiales, la investigación.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Web Search | Búsqueda web | Función con la que Claude busca información actual en internet para responder |
| Web Fetch | Obtener de la web | Función que lee el contenido de la página de la dirección que has pegado |
| Citation | Cita | Marca que indica de dónde se ha sacado el contenido de la respuesta |
| URL | URL (dirección) | La dirección de internet que tiene cada página web |
| IP Address | Dirección IP | Número que tiene cada dispositivo conectado a internet. Permite saber la ubicación aproximada |
| Research | Investigación | Función que encadena varias búsquedas y lo resume en un informe |
| Extended Thinking | Pensamiento extendido | Función que hace que piense más tiempo antes de responder |

<ChapterDone :chapter="206" />

Siguiente capítulo: [Capítulo 7. Proyectos, conectores y skills](07-projects-tools.md)

[^search]: Ayuda de Anthropic, «Enable and use web search». "You can have Claude search the internet to provide you with up-to-date information and insights when using the following models:" / "A checkmark will appear next to “Web search” when it’s enabled." / "Note: If you have the new Claude experience, there's no web search toggle. Claude searches the web when it helps." / "If you want to ensure that Claude uses web search, include "Search the web" or "Use web search" in your prompt to Claude." / "Claude selects images from web search results, powered by Bing, and displays them alongside its text response." / "Every response includes citations, so you can easily verify sources yourself." / "Claude may use your location (inferred from your IP address) when responding to a request for localized results." https://support.claude.com/en/articles/10684626 (consultado el 2026-10-26)
[^fetch]: Ayuda de Anthropic, «Enable and use web search». "When “Web search” is toggled on, Claude can also retrieve content directly from web pages when provided with specific URLs." / "This can consume a significant portion of your usage limit, especially for lengthy content." / "As a free user, you have usage limits that reset every five hours." https://support.claude.com/en/articles/10684626 (consultado el 2026-10-26)
[^pricing]: Página de precios de Anthropic, descripción del plan Free. "Search the web, create files, and run code" https://claude.com/pricing (consultado el 2026-10-26)
[^new]: Ayuda de Anthropic, «Claude Cowork and chat are one Claude». "Web search: There's no web search toggle. Claude searches the web when it helps." / "Research: Type /deep-research, or click the “+” button below the chat input, then choose “Research.”" https://support.claude.com/en/articles/16761823 (consultado el 2026-10-26)
[^screen]: Comprobado directamente en la pantalla web de Claude (plan gratuito, en coreano). El menú «+» del cuadro de escritura (sin «Búsqueda web» ni «Research»), la marca "웹 검색함" (Búsqueda web realizada) y las marcas de fuente de la respuesta preguntada en modo incógnito, www.museum.go.kr abierto en una pestaña nueva al pulsar la fuente, y "deep-research" que aparece en la lista de `/deep` del cuadro de escritura. (consultado el 2026-10-27)
[^research]: Ayuda de Anthropic, «Use research on Claude». "It runs multiple searches that build on each other and decides what to look into next based on what it finds." / "Research is available for users with paid Claude plans (Pro, Max, Team, or Enterprise) using Claude on the web, Claude Desktop, or Claude Mobile." / "Important: You must have web search turned on for research to function." / "Click the “+” button on the bottom left of your chat interface, then "Research." A blue indicator will appear on the bottom of the chat window." / "However, research sessions can use up your limits faster due to Claude retrieving multiple sources and providing comprehensive responses." / "In this case, you can steer and prompt Claude to use Research by saying “Claude, please use the research tool to…”" / "During research, Claude can use tools from your connectors automatically, without asking for approval each time." / "When you start research in Claude Mobile, Claude only searches the web and doesn’t use your connectors." / "Research runs on Claude Opus 5.5 and falls back to Claude Opus 4.8 when needed." https://support.claude.com/en/articles/11088861 (consultado el 2026-10-26)
[^when]: Ayuda de Anthropic, «When should I use web search, extended thinking, and research?». "Web search is best for straightforward, factual queries that can be answered with one or two tool calls" / "Extended thinking shines when tackling complex reasoning tasks that don't require recent info from the web" / "Research is optimal for comprehensive information gathering requiring five or more tool calls over 1-3 minutes" / "Combining extended thinking with research allows Claude to both plan its approach thoughtfully and execute comprehensive information gathering" / "The research feature can synthesize information across multiple sources with proper citations and produces a longer final report." https://support.claude.com/en/articles/11095361 (consultado el 2026-10-26)
[^academy-research]: Claude Academy, curso «Claude 101», lección «Research for deep dives». "Include relevant constraints." / "a few minutes or more, depending on the question." / "If you're not sure how to frame your research question, you can even ask Claude to help you write a better Research prompt before enabling the feature." https://academy.claude.com/courses/claude-101/research-mode-for-deep-dives (consultado el 2026-10-26)
