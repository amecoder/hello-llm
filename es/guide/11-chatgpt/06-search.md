# Capítulo 6. Búsqueda e investigación profunda — recibir información reciente con sus fuentes

> **En una línea**: lo que ha pasado hoy o la información que cambia a menudo se pregunta con la **búsqueda web**, y las preguntas grandes que obligan a comparar varios materiales,
> con la **investigación profunda**. Sea cual sea, forma parte del trabajo abrir tú mismo las fuentes que vienen adjuntas.

Las pantallas corresponden a la versión web de octubre de 2026 (plan Plus). En el plan gratuito o en la aplicación del móvil, la posición de los menús puede ser un poco distinta.

## Búsqueda web — hacer que ChatGPT mire en internet

La IA solo conoce lo que aprendió hasta cierto momento. Por eso, si preguntas sin más por algo reciente, como «el tiempo de esta semana» o «la política anunciada ayer», es fácil que se equivoque.
La **búsqueda web** (web search) es una función con la que ChatGPT busca y lee en internet los materiales más recientes antes de responder.

La búsqueda web se puede usar en todos los planes, incluido Free. También se puede usar sin iniciar sesión.
Cuando lo considera necesario, ChatGPT a veces busca **por su cuenta**.[^search]
Si quieres que busque sí o sí, elige **el botón + a la izquierda del cuadro de entrada → «Búsqueda web»** (웹 검색) y luego haz la pregunta.[^screen]

![Menú que se despliega al pulsar el botón ① + del cuadro de entrada. Mira los números rojos ⑤ «Búsqueda web» y ⑦ «Investigación profunda»](../../../guide/11-chatgpt/assets/shot-02-plus-menu-marked.png)

Es una pantalla con los títulos de las conversaciones y el nombre de la cuenta cambiados por ejemplos. En este capítulo se usan el ① botón +, ⑤ «Búsqueda web» y ⑦ «Investigación profunda» (심층 리서치).

```
Dime el tiempo de este fin de semana en Seúl. Sepáralo en sábado y domingo,
y enséñame también los sitios que consultaste.
```

### Es distinto del «Buscar» del menú lateral

La lupa «Buscar» (검색) de arriba del todo en el menú lateral busca **solo mis chats, proyectos y archivos**. No busca en internet.[^find]
Para algo como «¿dónde se me fue la conversación del currículum que escribí el mes pasado?», usa el «Buscar» del menú lateral. Para algo como «¿cuánto es el salario mínimo de este año?», pregúntalo con la búsqueda web. La búsqueda del menú lateral se trata en el [capítulo 3](03-chats.md).

<Quiz id="ch106-web-search" />

## El hábito de comprobar las fuentes

En las respuestas con búsqueda web, al final de las frases aparece una **cita** (citation, una marca de dónde se sacó) como una pequeña etiqueta. Por ejemplo, «Museo Nacional de Corea +1» (국립중앙박물관 +1) significa que consultó ese sitio y 1 fuente más. La lista de los sitios consultados se ve en «Fuentes» (출처).[^search]

![Pantalla de un chat temporal donde se preguntó con búsqueda web «Dime el horario de visita del Museo Nacional de Corea». Al final de las frases de la respuesta hay una pequeña marca de fuente como «Museo Nacional de Corea +1» (국립중앙박물관 +1), y bajo la respuesta están los botones de copiar, leer en voz alta, regenerar la respuesta y más acciones](../../../guide/11-chatgpt/assets/shot-15-web-search-marked.png)

*Es una pantalla con los títulos de las conversaciones y el nombre de la cuenta cambiados por ejemplos.* ① La pequeña etiqueta al final de la frase es la marca de fuente. ③ Bajo la respuesta están los botones de copiar, leer en voz alta, regenerar y más. En la pantalla web del 23 de octubre de 2026, al pulsar esta marca de fuente **se abría la página web original en una pestaña nueva.** ② Que se vean tal cual los símbolos de negrita, como `**viernes (23 de octubre)**` en el segundo párrafo, es un caso en que se han mostrado los símbolos de Markdown que viste en el [capítulo 7 de la etapa 1](../00-common/07-structured-prompts.md).

Sin embargo, la propia OpenAI dice que los resultados de búsqueda y las citas **pueden ser incompletos, antiguos o erróneos**.[^search]
Que haya un enlace no significa que esté comprobado. Como aprendiste en el [capítulo 9 de la etapa 1](../00-common/09-safety.md), abre el enlace tú mismo y compara los números, las fechas y los nombres con el original.
Una vez abierto el enlace, pregúntate estas cuatro cosas.

| Qué comprobar | Cómo mirarlo |
|---|---|
| ¿Se abre el enlace? | Pulsa la fuente y mira si sale la página de verdad |
| ¿Está eso en el original? | Busca si los números y las frases de la respuesta están tal cual en la página |
| ¿Cuándo se escribió? | Mira la fecha de la página y comprueba si la información es antigua |
| ¿Quién lo escribió? | Mira si es una página de un organismo oficial o una empresa, o un blog personal |

Si las fuentes no te convencen, puedes volver a pedirlo así.

```
Quita de la respuesta de antes las fuentes de blogs personales y vuelve a decírmelo consultando solo sitios del gobierno o de organismos públicos.
En cada contenido añade de qué página lo sacaste.
```

<Quiz id="ch106-citations" />

## Lo que ChatGPT llega a saber cuando busca

Si haces una pregunta en la que «cerca de mí» importa, como un restaurante o un hospital, se usa tu ubicación.
ChatGPT deduce tu **ubicación aproximada** a partir de la dirección de internet (la dirección IP, un número que se asigna a cada dispositivo conectado a internet).
La función que le dice la ubicación exacta del dispositivo hay que activarla aparte. Al principio está desactivada («Configuración» → «Gestión de datos» → «Ubicación»).[^search][^screen]

Además, ChatGPT reescribe tu pregunta como términos de búsqueda y los envía a una empresa de búsqueda externa. En ese envío no se manda tu dirección IP ni los datos de tu cuenta.[^search]
Pero si la memoria está activada, esos términos de búsqueda pueden adaptarse a ti. Así lo dice la pantalla «Personalización» (개인 맞춤 설정) ([capítulo 5](05-memory.md)).[^screen]

<Quiz id="ch106-location" />

## Al hacer compras — encarga la comparación y comprueba tú los precios

Si preguntas porque quieres comprar algo, en la respuesta pueden salir **tarjetas de producto** (product card, una lista de productos con foto, precio y tienda). Si eliges uno o más productos y pulsas «Research», empieza la **investigación de compras** (shopping research).
ChatGPT te pregunta qué marcas te gustan, el tamaño y qué te importa más. Y unos minutos después te da una **guía de compra** (buyer’s guide) con lo que conviene mirar al elegir, los productos recomendados y una tabla comparativa.[^shop-research]
La ayuda no dice si esta función aparece también en la pantalla de Corea. Tampoco pudimos comprobarlo al escribir esta guía.

```
Busco una mochila para ir y volver del trabajo. Mi presupuesto es de 100.000 wones, tiene que caber un portátil de 15 pulgadas y la usaré también los días de lluvia.
Elige solo tres y muéstramelos en una tabla comparativa, con enlaces para que yo mismo pueda comprobar el precio en cada tienda.
```

::: details La respuesta que recibes será más o menos así (ejemplo — pulsa para desplegar)
Es un ejemplo hecho para esta guía. La respuesta real varía según el servicio y el momento.

> Elegí tres que cumplen tus condiciones (hasta 100.000 wones, portátil de 15 pulgadas, días de lluvia).
>
> | Producto | Precio | Compartimento del portátil | ¿Aguanta la lluvia? | Tienda |
> |---|---|---|---|---|
> | (Producto A) | ○○ wones | Cabe de 15 pulgadas | Tela impermeable | (enlace de la tienda) |
> | (Producto B) | ○○ wones | Cabe de 15 pulgadas | Resistente a salpicaduras | (enlace de la tienda) |
> | (Producto C) | ○○ wones | Cabe de 15 pulgadas | Resistente a salpicaduras | (enlace de la tienda) |
>
> El precio puede variar según la tienda, así que compruébalo tú en el enlace.

**Comprueba si lo recibiste bien**: ¿son exactamente tres? ¿Se ven en la tabla mis tres condiciones? Al pulsar el enlace, ¿sale el mismo producto? ¿Miraste el precio directamente en el enlace?

:::

Lo que conviene saber.

- **¿Es publicidad?** No. Los resultados de productos los elige ChatGPT por separado. La publicidad se marca aparte.[^shop]
- **¿Mi conversación va a la tienda?** Las conversaciones de la investigación de compras no se comparten con las tiendas.[^shop-research]
- **El primer precio que se ve** — es el de la primera tienda que salió. Puede no ser el más barato.[^shop]
- **Marcas como «buena relación calidad-precio» y resúmenes de reseñas** — los ha hecho ChatGPT, así que no son una garantía. Tampoco OpenAI comprueba las reseñas.[^shop]
- **«Try on» (probárselo)** — es una función que te pone la ropa o los accesorios sobre tu foto. No garantiza el tamaño ni el ajuste reales. La foto que subes se guarda para la próxima vez, así que, si quieres borrarla, bórrala en la configuración.[^shop]

**Antes de pagar, comprueba tú en el sitio de la tienda el precio final, los impuestos, el coste de envío, la disponibilidad y la talla, y la política de devoluciones.**[^shop-research] Los precios y las existencias cambian a menudo y pueden ser distintos de los que mostró ChatGPT.

<Quiz id="ch106-shopping" />

## Investigación profunda — encargar un informe

La **investigación profunda** (deep research) es una función con la que ChatGPT busca y lee muchos materiales durante un buen rato y los ordena en un **informe** con citas.
Los datos rápidos, pregúntalos con la búsqueda. Si necesitas profundidad y cuidado, usa la investigación profunda.[^dr]

| Cuándo | Qué elegir | Ejemplo |
|---|---|---|
| La respuesta cabe en una o dos líneas | Búsqueda web | «Dime el tipo de cambio de hoy» |
| Hay que comparar y ordenar varios materiales | Investigación profunda | «Informe comparativo de 3 terminales de tarjeta para un negocio de una sola persona» |

### Cómo empezar

Empieza con una de estas dos formas.[^dr][^screen]

- **Botón + del cuadro de entrada → «Investigación profunda»**
- Escribe `/Deepresearch` en el cuadro de entrada

### Cómo transcurre

1. **Envías la pregunta** — cuanto más detalle des sobre qué quieres, para quién y en qué forma lo quieres recibir, mejor.
2. **Ves primero el plan de investigación** — ChatGPT te muestra el plan: «voy a investigar en este orden». Ese plan lo puedes corregir tú.
3. **Puedes intervenir mientras investiga** — mientras avanza, puedes cambiar la dirección o decir qué añadir.
4. **Recibes un informe con citas** — se puede descargar en formato Markdown, Word o PDF.[^dr]

> **En el chat temporal no se puede usar la investigación profunda.** En la pantalla web de octubre de 2026, el menú + del chat temporal no tenía «Investigación profunda». «Generar imagen» (이미지 생성) también estaba atenuada. Empieza la investigación profunda en un chat normal.

Abajo está la pantalla de cuando se envió de verdad el ejemplo de las comisiones de las aplicaciones de reparto que aparece más adelante en este apartado. **Los números rojos señalan los mismos sitios que los números de la lista que hay bajo la imagen.**

![La tarjeta del plan de investigación que salió justo después de enviar la investigación profunda. ① Los cinco pasos que se investigarán, ② el botón «Editar» (편집), ③ el botón «Cancelar» (취소) y el botón «Iniciar» (시작), con un número que va bajando](../../../guide/11-chatgpt/assets/shot-20-dr-plan-marked.png)

- ① Es el plan que muestra qué se investigará y en qué orden.
- ② Si quieres corregir el plan, pulsa «Editar».
- ③ El número junto a «Iniciar» es una cuenta atrás hasta que empieza solo. En la pantalla del 27 de octubre de 2026, al no pulsar nada, la investigación empezó cuando el número llegó a cero. Para desistir, pulsa «Cancelar».[^screen-dr]

Si el plan no te convence, pulsa «Editar» antes de que empiece. Así puedes enderezarlo antes de que la investigación vaya en una dirección equivocada.

![La tarjeta con la investigación en curso. ① El botón «Actualizar» (업데이트), ② los pasos terminados con marca de verificación, ③ el número de búsquedas hechas hasta ahora, «70 búsquedas» (검색 70건), ④ la barra de progreso y el botón de pausa](../../../guide/11-chatgpt/assets/shot-21-dr-progress-marked.png)

- ① Si durante la investigación quieres cambiar la dirección o añadir algo, pulsa «Actualizar».
- ② Los pasos terminados llevan una marca de verificación.
- ③ Es el número de búsquedas hechas hasta ahora.
- ④ Es la barra de progreso. Con el botón ■ de la derecha se puede detener.[^screen-dr]

Puedes dejar que la investigación siga y hacer otras cosas. Este ejemplo tardó unos 6 minutos en terminar.[^screen-dr]

![El informe terminado. ① «Investigación completa en 6 m · 19 citas · 295 búsquedas» (리서치 완료까지 6m · 인용 19개 · 검색 295건), ② el título del informe, ③ el botón de descargar, ④ el botón de ampliar, ⑤ los números de cita al final de las frases](../../../guide/11-chatgpt/assets/shot-22-dr-report-marked.png)

- ① Muestra el tiempo que tardó, el número de fuentes citadas y el número de búsquedas.
- ② Es el título del informe. El informe llega como una tarjeta de documento dentro de la conversación.
- ③ El botón de descargar y ④ el botón de ampliar.
- ⑤ Los números pequeños al final de las frases son las citas. Sigue el número y abre la fuente.[^screen-dr]

En el primer párrafo del informe hay un sitio donde se ven los asteriscos tal cual, como `**Baemin y Coupang Eats…**`. Son los símbolos de negrita que se han mostrado ([capítulo 7 de la etapa 1](../00-common/07-structured-prompts.md)).

Si pulsas el ① botón de descargar de la imagen de abajo (el ③ de la imagen de arriba), en el ② menú salen «Copiar contenido» (내용 복사), «Exportar como Markdown» (마크다운으로 내보내기), «Exportar como Word» (Word로 내보내기) y «Exportar como PDF» (PDF로 내보내기).[^screen-dr]

![② El menú que se abrió al pulsar el ① botón de descargar. «Copiar contenido», «Exportar como Markdown», «Exportar como Word», «Exportar como PDF»](../../../guide/11-chatgpt/assets/shot-22-dr-download-marked.png)

Como es una investigación hecha en un chat normal, esta conversación queda en la lista de chats. Si no quieres que quede, bórrala después de verla con el método del [capítulo 3](03-chats.md).

También puedes hacer que investigue, o que mire primero, solo ciertos sitios. Se decide en Sites → Manage sites del cuadro de entrada. Pero ese nombre es el que aparece en la ayuda, y todavía no pudimos comprobar cómo se llama en la pantalla en coreano.[^dr]

```
Escribe un informe que compare las comisiones de las aplicaciones de reparto que puede usar una tienda de guisos del barrio.
- Destinatario: el dueño de un solo local
- Qué comparar: comisión de intermediación, comisión de pago y coste de publicidad
- Formato: primero una conclusión en una línea, después una tabla comparativa y al final la lista de fuentes
- Da prioridad a los materiales de 2026 y marca aparte los materiales de los que no se sepa la fecha
```

Igual que los resultados de búsqueda, comprueba el informe abriendo las fuentes. Cuanto más largo y convincente es un informe, más fácil resulta saltarse la comprobación. Empieza comprobando sobre todo los números usados en la conclusión.

<Quiz id="ch106-deep-research" />

## Los límites se ven en la pantalla

El número de veces que puedes usar la investigación profunda es distinto según el plan. Comprueba cuántas te quedan en **lo que muestra la aplicación**.
El límite mensual se vuelve a llenar cada 30 días desde el primer día que la usaste.[^dr]
La ayuda no da el número concreto de veces y cambia a menudo. Por eso no lo escribimos en esta guía. Compruébalo en la pantalla antes de usarla.

<Quiz id="ch106-limits" />

## Pruébalo tú

1. En un chat normal, elige el botón + → «Búsqueda web» y pregunta: «Dime los eventos culturales de este mes en mi barrio».
2. Abre tú mismo dos de las fuentes de la respuesta y comprueba si las fechas de los eventos son iguales a las del original.
3. Cambia el ejemplo de las comisiones de las aplicaciones de reparto de arriba para adaptarlo a tu trabajo y envíalo con la investigación profunda. Cuando salga el plan de investigación, prueba a pedir que corrija una cosa.
4. Elige un número usado en la conclusión del informe recibido y búscalo en la fuente.

**Proyecto continuo** ([preparar el club de lectura](../00-common/practice-kit.md)): con la búsqueda web, busca «cómo reservar la sala de seminarios de la biblioteca de mi distrito». El nombre del barrio lo pones tú. El horario y cómo solicitarla, abre las fuentes y compruébalos tú.

## Resumen

- Las noticias recientes se preguntan con la búsqueda web. A veces ChatGPT busca por su cuenta, y también puedes activarla tú con el botón + → «Búsqueda web».
- El «Buscar» del menú lateral sirve para encontrar mis conversaciones y no es una búsqueda en internet.
- Las citas y las fuentes también pueden estar mal. Abre el enlace y compáralo con el original.
- Los resultados de compras no son publicidad, pero el primer precio puede no ser el más barato. Antes de pagar, comprueba en la tienda el precio, el envío y la política de devoluciones.
- Las preguntas grandes se encargan a la investigación profunda. Puedes ver y corregir el plan primero, y el informe se recibe en Markdown, Word o PDF.
- El número de veces de la investigación profunda es distinto según el plan, así que compruébalo en la pantalla.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Web Search | Búsqueda web | Función con la que ChatGPT busca materiales recientes en internet para responder |
| Citation | Cita | Marca que indica de dónde se sacó el contenido de la respuesta |
| Source | Fuente | La página web que la respuesta consultó |
| IP Address | Dirección IP | Número asignado a cada dispositivo conectado a internet. Permite saber la ubicación aproximada |
| Deep Research | Investigación profunda | Función que investiga muchos materiales durante un buen rato y los ordena en un informe con citas |
| Buyer’s Guide | Guía de compra | Texto que reúne lo que conviene mirar al elegir, los productos recomendados y una tabla comparativa |
| Shopping Research | Investigación de compras | Función que hace preguntas sobre los productos elegidos, los compara y los ordena en una guía de compra |

<ChapterDone :chapter="106" />

Siguiente capítulo: [Capítulo 7. Proyectos, plugins y Work](07-projects-plugins.md)

[^search]: Ayuda de OpenAI, «Searching the web with ChatGPT». https://help.openai.com/en/articles/9237897 (consultado el 2026-10-23)
[^find]: Ayuda de OpenAI, «Finding your chats, projects, and files in ChatGPT». https://help.openai.com/en/articles/10056348 (consultado el 2026-10-23)
[^dr]: Ayuda de OpenAI, «Deep research in ChatGPT». https://help.openai.com/en/articles/10500283 (consultado el 2026-10-23)
[^shop]: Ayuda de OpenAI, «Shopping with ChatGPT Search». "Product results are selected independently by ChatGPT and are not ads" / "may not be the lowest available price" / "They’re not guarantees or verified statements" / "Reviews and ratings are not verified by OpenAI." / "Your reference photos are saved for future try-ons" / "do not guarantee fit or size". https://help.openai.com/en/articles/11128490 (consultado el 2026-10-24)
[^shop-research]: Ayuda de OpenAI, «Using shopping research in ChatGPT». "Select one or more products and choose “Research”" / "After a few minutes, shopping research returns a buyer’s guide." / "Your chats are never shared with retailers." / "Confirm the final price, taxes, fees, and shipping costs on the retailer’s website." https://help.openai.com/en/articles/12911370 (consultado el 2026-10-24)
[^screen]: Comprobado directamente en la pantalla web de ChatGPT (plan Plus, en coreano). El menú + del cuadro de entrada y las pantallas «Gestión de datos» (데이터 관리) y «Personalización» (개인 맞춤 설정) (consultado el 2026-10-23)
[^screen-dr]: Comprobado directamente en la pantalla web de ChatGPT (plan Plus, en coreano). En un chat normal, al enviar con «Investigación profunda» (심층 리서치) del menú + el ejemplo de las comisiones de las aplicaciones de reparto de este capítulo: la tarjeta del plan de investigación («Editar» (편집), «Cancelar» (취소), «Iniciar» (시작)), la tarjeta de progreso («Actualizar» (업데이트), «70 búsquedas» (검색 70건), pausa), el informe terminado («Investigación completa en 6 m · 19 citas · 295 búsquedas» (리서치 완료까지 6m · 인용 19개 · 검색 295건)) y el menú de descarga. Después de verlo, se borró la conversación. (consultado el 2026-10-27)
