# Capítulo 12. Usarlo como un experto — elegir funciones, acumular y comprobar

> **En una línea**: para usarlo bien no basta con conocer más botones. Hace falta la capacidad de **elegir la función que encaja con la tarea, guardar lo que se repite y comprobar el resultado según el peso del trabajo**.
> Este capítulo trata de cómo **combinar** según tu trabajo las funciones de Gemini que aprendiste en los capítulos 1 a 11.

Este capítulo casi no presenta funciones nuevas. Su tema es cuándo y cómo sacar las funciones de Gemini que aprendiste en los capítulos anteriores.

Los métodos **que valen para cualquier IA**, como decidir qué encargar o probar antes de encargar con una tarea cuya respuesta ya conoces, están en el [capítulo 11 de la etapa 1, «Usarla como un experto»](../00-common/11-expert.md). Si lo lees antes, este capítulo te resultará más fácil. Este capítulo ajusta esos métodos a las funciones y menús de Gemini.

## Elegir la función que encaja con la tarea

No elijas primero el menú. Mira antes qué forma tiene la tarea que tienes delante. Entonces la función que usar se decide sola ([«Mirar primero la forma del trabajo» del capítulo 11 de la etapa 1](../00-common/11-expert.md#mirar-primero-la-forma-del-trabajo)).

| Si la tarea es así | Usa esto | Más detalles |
|---|---|---|
| Preguntar, pulir, pensar juntos | Conversación normal | [Etapa 1](../00-common/) |
| Hay que razonarlo con dificultad | Subir el nivel de razonamiento en el botón del modelo | [Capítulo 2](02-screen-tour.md#boton-de-modelo-modelo-y-nivel-de-razonamiento) |
| Una pregunta que no quieres que quede registrada | Chat temporal | [Capítulo 2](02-screen-tour.md#chat-temporal-una-conversacion-que-no-deja-registro) |
| Corregir juntos un documento o una aplicación pequeña | Canvas | [Capítulo 4](04-files-create.md#canvas-editar-juntos-documentos-y-aplicaciones) |
| Reunir mucho material y sacar un informe | Deep Research | [Capítulo 6](06-search.md#deep-research-recibir-un-informe-de-investigacion-largo) |
| Reunir durante mucho tiempo material de un tema | Cuaderno | [Capítulo 6](06-search.md#cuaderno-reunir-materiales-y-conversaciones-por-temas) |
| Pides lo mismo una y otra vez | Skills | [Capítulo 7](07-skills-apps.md#skills-guardar-las-peticiones-que-haces-a-menudo) |
| Buscar en mi correo y mis archivos | Aplicaciones conectadas | [Capítulo 7](07-skills-apps.md#aplicaciones-conectadas-gmail-drive-y-calendar-desde-gemini) |
| Recibir un resultado tras varios pasos | Tareas (de pago) | [Capítulo 8](08-tasks.md#tareas-encargar-un-trabajo-entero-en-lugar-de-chatear) |
| Repetir en momentos fijos | Programación | [Capítulo 8](08-tasks.md#que-se-haga-solo-en-los-momentos-que-fijes-programacion) |

Esta tabla reúne en un solo lugar lo de los capítulos anteriores.

En la mayoría de los casos basta con la fila de arriba, una conversación normal. Cuanto más abajo vas, más uso consumes (Deep Research y Tareas) o más información tuya entregas (aplicaciones conectadas y Tareas). **Baja una fila solo cuando sea imprescindible.**

<Quiz id="ch312-tools" />

## Guardar lo que se repite

Cuando lo usas un tiempo, acabas repitiendo lo mismo. Si lo que repites lo dejas escrito una vez, Gemini ya lo sabe cuando empiezas la próxima vez.

Hay cuatro lugares donde guardarlo. No hace falta usarlos todos desde el principio. Sigue este orden y añade uno cuando lo necesites. Cuándo todavía no toca hacer una plantilla está en [«Guardar lo que se repite» del capítulo 11 de la etapa 1](../00-common/11-expert.md#guardar-lo-que-se-repite).

1. **Le pides lo mismo en todas las conversaciones** → lo escribes como instrucciones en «Peticiones para Gemini» (Gemini 요청 사항) ([capítulo 5](05-memory.md#instrucciones-para-no-tener-que-repetirlo-cada-vez)).
2. **Consultas siempre el material de un tema** → reúnes ese material en un cuaderno ([capítulo 6](06-search.md#cuaderno-reunir-materiales-y-conversaciones-por-temas)).
3. **Explicas el mismo procedimiento cada vez** → conviertes ese procedimiento en una skill ([capítulo 7](07-skills-apps.md#como-escribir-un-buen-skill)).
4. **Haces lo mismo en momentos fijos** → programas una tarea ([capítulo 8](08-tasks.md#que-se-haga-solo-en-los-momentos-que-fijes-programacion)).

Si confundes las instrucciones y las skills, recuérdalo así. **Las instrucciones son reglas que se siguen siempre, y las skills son procedimientos que solo se sacan en la situación adecuada.** Gemini mira el nombre y la descripción de la skill para decidir si la usa ahora.[^write]

### Comparar la skill que hiciste activándola y desactivándola

La skill que hayas hecho, envía la misma petición dos veces para comparar. Una vez con la skill activada y otra desactivada con «Desactivar» (비활성화).[^skills] El truco para comparar y corregir está en [«Probar y corregir las plantillas que hagas» del capítulo 11 de la etapa 1](../00-common/11-expert.md#probar-y-corregir-las-plantillas-que-hagas).

Al comparar, pregúntate:

- ¿La respuesta con la skill activada se acerca más a la forma que yo quería?
- ¿La skill se mete también en preguntas en las que no hace falta?

Si se mete, acota más en la descripción de la skill **cuándo se usa** ([capítulo 7](07-skills-apps.md#escribir-el-nombre-la-descripcion-y-las-instrucciones)).

<Quiz id="ch312-layers" />

## Encargar tablas y números

Si subes un archivo de tabla, Gemini lo analiza y dibuja gráficos ([capítulo 4](04-files-create.md#subir-archivos)).

```
La tabla adjunta es el registro de ventas por artículo de una tienda del barrio durante los últimos tres meses. Hazme una tabla con el total por artículo, de mayor a menor, y dibuja un gráfico de barras.
Escribe también, línea por línea, el método que usaste para calcular.
```

Si, como en la última línea, **le haces escribir también el método de cálculo**, es más fácil encontrar dónde se equivocó.

Con el análisis de números, lo que más preocupa es si puedes fiarte del resultado. Primero contrasta con **datos pasados que ya tienes calculados**. Si acierta con un material cuya respuesta conoces, también podrás fiarte un poco más cuando le encargues material nuevo. El método y un ejemplo están en [«Encargar tablas y números» del capítulo 11 de la etapa 1](../00-common/11-expert.md#encargar-tablas-y-numeros).
Los cálculos importantes vuelve a comprobarlos en una hoja de cálculo o a mano. Si pasas la tabla con «Exportar a Sheets» (Sheets로 내보내기), puedes volver a calcularla enseguida ([capítulo 3](03-chats.md#exportar-a-otras-aplicaciones)).

<Quiz id="ch312-data" />

## Comprobar según el peso del trabajo

No hace falta comprobar todas las respuestas en la misma medida. Cuanto **más pierdes si se equivoca**, con más cuidado hay que mirar ([«Comprobar según el peso del trabajo» del capítulo 11 de la etapa 1](../00-common/11-expert.md#comprobar-segun-el-peso-del-trabajo)).

| Peso del trabajo | Ejemplo | Cómo comprobar |
|---|---|---|
| Ligero | Recomendar el menú de la cena | Lo lees y, si algo es raro, lo dejas |
| Medio | Aviso de una reunión | Solo contrastas fecha, lugar e importe con el original |
| Pesado | Contratos, salud, dinero | Abres las fuentes y lo confirmas con un experto |

Estas son las herramientas de comprobación que aprendiste en esta guía, otra vez juntas.

- Abre las **«Fuentes»** (출처) que hay debajo de la respuesta y contrástalas con el original ([capítulo 6](06-search.md#comprobar-en-que-se-basa-la-respuesta)).
- En las respuestas de las aplicaciones conectadas, abre **el correo o archivo original** ([capítulo 7](07-skills-apps.md#trucos-para-preguntar-bien)).
- En las tareas, lee con cuidado **las pantallas que piden permiso** y vigila cómo se ejecutan ([capítulo 8](08-tasks.md#antes-de-encargar-normas-de-seguridad)).
- Los juicios médicos, legales y financieros no se los encargues a Gemini ([capítulo 9](09-privacy.md#lo-que-no-se-debe-hacer-y-en-lo-que-no-se-debe-confiar)).

<Quiz id="ch312-check" />

## Practica tú mismo

1. Recuerda tres cosas que hiciste esta semana y elige a qué fila de la tabla de arriba, «Elegir la función que encaja con la tarea», corresponde cada una.
2. Busca una petición que le hayas hecho a Gemini más de dos veces en la última semana y decide si la metes en las instrucciones o la conviertes en una skill.
3. Con la skill que hiciste en el capítulo 7, envía la misma petición una vez con ella activada y otra desactivada, y compara los resultados.
4. Sube una tabla de gastos domésticos de la que ya conozcas el total, pide que vuelva a calcularlo y mira si coincide con el valor que tú sabes.

**Proyecto continuo** ([preparar un club de lectura](../00-common/practice-kit.md)): sube el archivo del libro de cuentas del proyecto y pide que calcule el total de las cuotas. Comprueba si coincide con el total que figura en la guía del proyecto y, si no, busca en el método de cálculo que escribió Gemini dónde se equivocó.

## Resumen

- Mira la forma del trabajo antes que el menú. En la mayoría de los casos basta con la conversación normal, y solo cuando haga falta bajas a funciones como Deep Research o Tareas.
- Lo que se repite se acumula en este orden, uno por uno cuando haga falta: instrucciones → cuaderno → skill → programación.
- Las instrucciones son reglas que se siguen siempre y las skills son procedimientos que solo se usan en la situación adecuada. La skill que hagas, compárala activándola y desactivándola.
- En tablas y números, haz que escriba el método de cálculo y contrasta primero con material cuya respuesta conoces.
- La comprobación se hace según el peso del trabajo. En lo pesado, abre las fuentes y confírmalo con un experto.

## Glosario

En este capítulo no aparecen términos nuevos. Palabras como instrucciones, cuaderno, skill, tarea y programación están en el «Glosario» de cada capítulo.

<ChapterDone :chapter="312" />

Siguiente capítulo: has terminado la guía de Gemini de la etapa 2. Elige en el [índice de la etapa 2 · Gemini](./) qué capítulos quieres repasar, o comprueba tu nivel con el [examen de nivel de conocimientos de IA](../00-common/level-test.md).

[^write]: Ayuda de Google, «Write effective skills for Gemini Apps» (en la versión coreana, «Gemini 앱을 위한 효과적인 스킬 작성하기»). "Check if a skill is relevant. Gemini only checks the skill’s name and description to determine if a skill is relevant for your task." https://support.google.com/gemini/answer/17102773 (consultado el 2026-10-31)
[^skills]: Ayuda de Google, «Create & manage skills for Gemini Apps» (en la versión coreana, «Gemini 앱에서 스킬 만들기 및 관리하기»). "At the top, click More   Deactivate ." Nombre en la pantalla en coreano: «비활성화». https://support.google.com/gemini/answer/17094296 (consultado el 2026-10-31)
