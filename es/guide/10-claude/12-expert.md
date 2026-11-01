# Capítulo 12. Úsalo como un experto: juzgar, probar y acumular

> **En una línea**: para usarlo bien no basta con conocer más botones. Hace falta la capacidad de **juzgar qué encargar, probarlo antes de encargarlo y dejar guardado lo que se repite**.
> Este capítulo trata de **cómo combinar** las funciones que aprendiste en los capítulos 1 a 11 para tu propio trabajo. Al final te presento Claude Academy, la colección de cursos que ha creado Anthropic.

Este capítulo casi no trata funciones nuevas. El tema es cuándo y cómo sacar las funciones de Claude que aprendiste en los capítulos anteriores.

Los **métodos que valen para cualquier IA**, como cómo juzgar qué encargar (las 4D), cómo probarlo con un trabajo cuya respuesta ya conoces antes de encargarlo y cómo hacer que te pregunte cuando estás aprendiendo, están en el [capítulo 11 de la etapa 1, «Úsalo como un experto»](../00-common/11-expert.md). Si lo lees antes, este capítulo te resultará más fácil. Aquí adaptamos esos métodos a las funciones y los menús de Claude.

## Elegir la herramienta que encaja con el trabajo

No elijas primero el menú. Mira primero qué forma tiene el trabajo que tienes delante. Entonces la función que usar se decide sola.[^academy-tabs]

| Si el trabajo es así | Usa esto | Más detalles |
|---|---|---|
| Preguntar, pulir, pensar juntos | Conversación normal | [Etapa 1](../00-common/) |
| Un dato sencillo, algo que pasó hoy | Búsqueda web | [Capítulo 6](06-search.md#cuando-usar-cada-cosa) |
| Razonar a fondo sin información reciente | Razonamiento extendido | [Capítulo 6](06-search.md#cuando-usar-cada-cosa) |
| Reunir mucho material y hacer un informe | Investigación (de pago) | [Capítulo 6](06-search.md#cuando-usar-cada-cosa) |
| Continuar con un mismo trabajo | Proyecto | [Capítulo 7](07-projects-tools.md#proyectos-materiales-e-instrucciones-en-un-solo-sitio) |
| Necesitas un documento, una tabla o un archivo de presentación | Crear archivos | [Capítulo 4](04-files-artifacts.md#recibir-archivos-hechos-excel-word-powerpoint-y-pdf) |
| Recibir un resultado tras varios pasos | Cowork (de pago) | [Capítulo 8](08-cowork.md#que-es-cowork-—-no-le-hablas-le-encargas-un-trabajo) |
| Repetirlo en momentos fijos | Tarea programada (de pago) | [Capítulo 8](08-cowork.md#por-si-solo-en-momentos-fijos-—-tareas-programadas) |

El criterio para separar la búsqueda web, el razonamiento extendido y la investigación viene de la ayuda.[^when] Las demás filas reúnen en una sola tabla el contenido de los capítulos anteriores.

En la mayoría de los casos basta con la primera fila, la conversación normal.

<Quiz id="ch212-tools" />

## Dejar guardado lo que repites

Al usarlo, acabas repitiendo las mismas frases. Si apuntas una vez lo que repites, a partir de entonces Claude empieza sabiéndolo.

Hay cuatro sitios donde guardarlo. No hace falta usarlos todos desde el principio. Añade uno a uno, en este orden, cuando lo necesites.[^academy-layers] Cuándo conviene no convertirlo en una plantilla está en el [capítulo 11 de la etapa 1, «Dejar guardado lo que repites»](../00-common/11-expert.md#guardar-lo-que-se-repite).

1. **Le haces la misma petición en todas las conversaciones** → escríbela en las [instrucciones](05-memory.md#instrucciones-reglas-para-todas-las-conversaciones).
2. **Continúas con un mismo trabajo** → reúne ese trabajo en un [proyecto](07-projects-tools.md#proyectos-materiales-e-instrucciones-en-un-solo-sitio).
3. **Explicas cada vez el mismo orden de pasos** → convierte ese orden en una [skill](07-projects-tools.md#skills-dejar-guardada-tu-forma-de-trabajar).
4. **Quieres compartir en un conjunto unas skills muy bien pulidas** → reúne varias skills en un [plugin](07-projects-tools.md#plugins-paquetes-por-tipo-de-trabajo). Los plugins son una función de los planes de pago.[^plugins]

Si sigues este orden, cada vez tendrás que explicar algo nuevo un poco menos.

Si confundes los proyectos con las skills, recuerda esto: **el proyecto guarda material, y la skill guarda el orden de trabajo.**[^academy-skills-vs] La diferencia, con más detalle, está en el [capítulo 7, «En qué se diferencia de las instrucciones, los proyectos y los conectores»](07-projects-tools.md#en-que-se-diferencia-de-las-instrucciones-los-proyectos-y-los-conectores).

### Comparar las skills que creas activándolas y desactivándolas

Con las skills que crees, envía la misma petición dos veces y compara: una con la skill activada y otra con la skill desactivada. El método para comparar y corregir está en el [capítulo 11 de la etapa 1, «Probar y corregir las plantillas que has creado»](../00-common/11-expert.md#probar-y-corregir-las-plantillas-que-hagas).

Las skills se activan y se desactivan en «Personalizar» (사용자 지정) → «Skills» ([capítulo 7, «Skills básicas y mis skills»](07-projects-tools.md#skills-basicos-y-skills-propios)).[^skills-use] Claude no usa una skill que hayas desactivado.

<Quiz id="ch212-layers" />

## Encargarle tablas y números

Como en el [capítulo 4, «Subir archivos»](04-files-artifacts.md#subir-archivos), si subes un archivo de tabla, como un CSV o un TSV, Claude analiza los datos y dibuja gráficos. El gráfico también te lo puede dar como archivo de imagen, por ejemplo PNG.[^create]

```
El CSV adjunto es el registro de ventas por producto de una tienda del barrio durante los últimos tres meses. Haz una tabla con el total por producto, de mayor a menor, y crea un gráfico de barras como imagen PNG.
Escribe también, en una línea cada uno, los métodos que usaste para calcular.
```

En el análisis de números, lo que más preocupa es si el resultado es fiable. Primero compruébalo con **material anterior que ya analizaste**. El método y un ejemplo están en el [capítulo 11 de la etapa 1, «Encargar tablas y números»](../00-common/11-expert.md#encargar-tablas-y-numeros). Los cálculos importantes vuelve a comprobarlos con otro programa de cálculo o a mano ([capítulo 4](04-files-artifacts.md#recibir-archivos-hechos-excel-word-powerpoint-y-pdf)).

<Quiz id="ch212-data" />

## Para aprender más: Claude Academy

**Claude Academy** es una colección de cursos en línea creada por Anthropic. El texto de las lecciones de los cursos de abajo se puede abrir sin iniciar sesión (comprobado el 2026-10-26). Todo el texto está en **inglés**, y la primera página del curso no indica cuánto tiempo lleva.[^academy-courses]

| Curso | N.º de lecciones | Para quién | Qué necesitas |
|---|---|---|---|
| [AI Fluency: Framework and foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) | 14 lecciones + cuestionario | Cualquiera, sea cual sea su experiencia con la IA | Una cuenta de cualquier servicio de IA. No hace falta plan de pago |
| [AI capabilities and limitations](https://academy.claude.com/courses/ai-capabilities-and-limitations) | 13 lecciones + cuestionario | Quien quiera saber por qué la IA responde como responde | No hace falta ningún conocimiento previo |
| [Claude 101](https://academy.claude.com/courses/claude-101) | 13 lecciones + cuestionario | Quien use Claude por primera vez en el trabajo | Una cuenta de Claude (también la gratuita). Las lecciones de Cowork e Investigación requieren plan de pago |
| [Introduction to Claude Cowork](https://academy.claude.com/courses/introduction-to-claude-cowork) | 14 lecciones + cuestionario | Quien trabaja pasando entre archivos y aplicaciones | Plan de pago; la aplicación de ordenador para las lecciones que usan carpetas. No hace falta saber programar |
| [Introduction to agent skills](https://academy.claude.com/courses/introduction-to-agent-skills) | 6 lecciones | Quien quiera crear él mismo archivos de skills | Claude Code (la herramienta para desarrolladores de la etapa 3) |

- Los dos primeros cursos se pueden seguir también con otra IA que no sea Claude. Están pensados para poder hacerlos en cualquier orden.[^academy-courses]
- En el curso «AI Fluency», si aciertas el 80 % o más en el último cuestionario, puedes añadir a tu cuenta una **insignia de finalización** (completion badge). No es un certificado.[^academy-courses] El [examen de comprobación](../00-common/certificate.md) de esta guía es una insignia de aprendizaje del mismo tipo.
- «Introduction to agent skills» míralo cuando termines la etapa 3 de esta guía (herramientas de agentes de programación). Todo el contenido es para Claude Code.

Las páginas en inglés puedes leerlas con la función de traducción de un navegador como Chrome (botón derecho en la página → «Traducir al español»; en coreano, «한국어로 번역»).

### El esquema que enseñan los cursos, comparado con esta guía

Los cursos presentan con otros nombres el mismo contenido que esta guía. Si conoces las equivalencias de abajo, te resultará más fácil adivinar el significado cuando encuentres un término nuevo en un curso. Los nombres que usan los cursos están escritos tal cual en inglés.

- **Setting the stage · Defining the task · Specifying rules** (Claude 101): al pedir algo, fijas tu papel y tu objetivo, la tarea, y el tono, el formato y los ejemplos.[^academy-stage] Es la misma idea que los [«5 elementos de un buen prompt» del capítulo 4 de la etapa 1](../00-common/04-prompt-basics.md#los-5-elementos-de-un-buen-prompt).
- **4D — Delegation · Description · Discernment · Diligence** (Claude 101, AI Fluency): mira el [capítulo 11 de la etapa 1, «En qué se diferencia un experto»](../00-common/11-expert.md#que-hace-distinto-a-un-experto).
- **Evals** (Claude 101, Cowork): probar con un trabajo cuya respuesta ya conoces. Mira el [capítulo 11 de la etapa 1, «Probar antes de encargar»](../00-common/11-expert.md#probar-antes-de-encargar) y, en este capítulo, [«Comparar las skills que creas activándolas y desactivándolas»](#comparar-las-skills-que-creas-activandolas-y-desactivandolas).
- **Chat · Cowork · Code** (Claude 101): el trabajo que se hace yendo y viniendo es la conversación, el que se encarga es Cowork, y crear programas es Claude Code.[^academy-tabs] Mira el [capítulo 8, «Qué es Cowork»](08-cowork.md#que-es-cowork-—-no-le-hablas-le-encargas-un-trabajo) y, en este capítulo, [«Elegir la herramienta que encaja con el trabajo»](#elegir-la-herramienta-que-encaja-con-el-trabajo).
- **Resultado, material y tu situación particular** (Cowork): al encargar algo, escribes estas tres cosas.[^academy-review] Es lo mismo que en el [capítulo 8, «Cómo encargar»](08-cowork.md#como-encargar).
- **Las tres preguntas para revisar el resultado** (Cowork): ¿es el resultado que quería? ¿Los hechos son correctos? ¿Hay algo inventado?[^academy-review] Mira también los [«cuatro hábitos para comprobar» del capítulo 9 de la etapa 1](../00-common/09-safety.md#cuatro-habitos-para-comprobar).
- **"projects store knowledge, skills perform tasks"** (Claude 101): el proyecto es el material, y la skill es el orden de trabajo.[^academy-skills-vs] Mira, en este capítulo, [«Dejar guardado lo que repites»](#dejar-guardado-lo-que-repites).

<Quiz id="ch212-academy" />

## Pruébalo tú

Como en el [capítulo 11, «Tres cosas que cumplir al practicar»](11-practice.md#tres-cosas-que-debes-respetar-al-practicar), hazlo con material inventado y no con material real de tu empresa.

1. Haz en Claude los puntos 2 y 3 (probar con un correo cuya respuesta conoces) de «Pruébalo tú» del [capítulo 11 de la etapa 1](../00-common/11-expert.md#practica-tu-mismo). La línea con la que sale bien déjala en las [instrucciones del capítulo 5](05-memory.md#instrucciones-reglas-para-todas-las-conversaciones) o en las instrucciones de un proyecto.
2. Inventa una tabla de unas 10 líneas con fecha, producto e importe y guárdala como CSV. Primero calcula tú a mano el total por producto; después, con el prompt del CSV de este capítulo, pide la tabla y el gráfico PNG y compara los dos totales.
3. Si has creado una skill, envía la misma petición una vez con la skill activada y otra con la skill desactivada, y compara las dos respuestas.

**Proyecto continuo** ([Preparar el club de lectura](../00-common/practice-kit.md)): sube el archivo de ejemplo fees.csv y envía «Si hay duplicados o valores vacíos, avísame primero. Después haz una tabla con los totales de ingresos y gastos y el dinero que queda, y un gráfico de barras PNG con los gastos por concepto». Mira si encuentra los aperitivos que aparecen dos veces y la línea con el importe vacío. Por último, marca una a una las casillas de la [lista de control de la tarea](../00-common/practice-kit.md#lo-que-te-queda-al-final).

## Resumen

- Los métodos de juicio, prueba y comprobación que valen para cualquier IA están en el capítulo 11 de la etapa 1. Este capítulo los adapta a las funciones de Claude.
- Mira primero la forma del trabajo y después el menú. En la mayoría de los casos basta con una conversación normal.
- Lo que repites se va acumulando, cuando lo necesitas y de uno en uno, en este orden: instrucciones → proyecto → skill → plugin (de pago).
- Las skills que creas se activan y se desactivan en «Personalizar» (사용자 지정) → «Skills» y se comparan pidiendo lo mismo dos veces.
- Si subes un archivo de tabla, recibes el análisis y los gráficos (también como imagen PNG). Antes de fiarte, compruébalo con material anterior.
- Para aprender más, mira los cursos de Claude Academy (en inglés; el texto de las lecciones se abre sin iniciar sesión).

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Claude Academy | Claude Academy | Colección de cursos en línea creada por Anthropic |

Los términos de los cursos, como 4D o Evals, están en el [«Glosario» del capítulo 11 de la etapa 1](../00-common/11-expert.md#glosario).

<ChapterDone :chapter="212" />

Siguiente capítulo: has terminado la guía de Claude de la etapa 2. Elige un capítulo que quieras repasar en el [índice de la etapa 2 · Claude](./), o comprueba tu nivel con el [examen de nivel de conocimientos de IA](../00-common/level-test.md).

[^academy-tabs]: Claude Academy, «Claude 101», lección «How you'll work with Claude on your desktop». "You won't pick a tab first — you'll notice what kind of work is in front of you, and the tab follows." / "Turn-by-turn work happens in Chat. Work you hand off runs in Cowork. Building software happens in the Code tab." https://academy.claude.com/courses/claude-101/claude-desktop-app-chat-cowork-code (consultado el 2026-10-26)
[^academy-layers]: Claude Academy, «Introduction to Claude Cowork», lección «Get better results faster». "You're not going to start with all four of these on Day 1." / "you'll realize what global instructions make sense to apply to every conversation." / "You'll start to see your recurring workstreams and what makes sense to have as a project." / "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." / "plugins will come in as you have something worth sharing." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale (consultado el 2026-10-26)
[^academy-skills-vs]: Claude Academy, «Claude 101», lección «Working with skills». "projects store knowledge, skills perform tasks" https://academy.claude.com/courses/claude-101/working-with-skills (consultado el 2026-10-26)
[^academy-stage]: Claude Academy, «Claude 101», lección «Your first conversation with Claude». "One, setting the stage. What is your role and what are your objectives?" / "Two, defining the task. What action do you want Claude to take?" / "Three, specifying rules. Is there a style or tone you want Claude to use? Are there examples that you can attach to show Claude?" https://academy.claude.com/courses/claude-101/your-first-conversation-with-claude (consultado el 2026-10-26)
[^academy-review]: Claude Academy, «Introduction to Claude Cowork», lección «Hand Claude Cowork your first task». "name the deliverable, the inputs, and any nuance" / "Does it meet the actual objective?" / "Are the facts accurate?" / "Does anything sound made up?" https://academy.claude.com/courses/introduction-to-claude-cowork/the-task-loop (consultado el 2026-10-26)
[^academy-courses]: Primera página de los cursos de Claude Academy. AI Fluency: Framework and foundations "14 lessons · 1 quiz", "Our goal is to make AI Fluency accessible and useful to everyone, no matter what stage of AI expertise you find yourself at." De la lección «Introduction to AI Fluency» del mismo curso: "you're welcome to work with any language model you prefer." / "No paid subscriptions required to complete course activities"; cuestionario: "A score of 80% or higher passes." https://academy.claude.com/courses/ai-fluency-framework-foundations · AI capabilities and limitations "13 lessons · 1 quiz", "None. This course assumes no technical background and no prior experience with AI tools.", "Anyone who uses, or is about to start using, generative AI in their work or studies and wants to understand why it behaves the way it does.", "The two are designed to be taken in either order" https://academy.claude.com/courses/ai-capabilities-and-limitations · Claude 101 "13 lessons · 1 quiz", "A Claude account on any plan (Free, Pro, Max, Team, or Enterprise)", "A few features covered here require a paid plan to try hands-on: Cowork and Research (Pro, Max, Team, and Enterprise plans)", "Anyone getting started with Claude at work." https://academy.claude.com/courses/claude-101 · Introduction to Claude Cowork "14 lessons · 1 quiz", "Knowledge workers whose day is spent moving information between files, apps, and tools", "A paid Claude plan (Pro, Max, Team, or Enterprise); the Claude desktop app for the lessons that work on folders on your computer", "no coding or command-line experience needed" https://academy.claude.com/courses/introduction-to-claude-cowork · Introduction to agent skills "6 lessons", "Explain what skills are, where they live, and how Claude Code matches them to requests" https://academy.claude.com/courses/introduction-to-agent-skills · Se comprobó que el texto de las lecciones se abre en un navegador sin haber iniciado sesión (consultado el 2026-10-26)
[^when]: Ayuda de Anthropic, «When should I use web search, extended thinking, and research?». "Web search is best for straightforward, factual queries that can be answered with one or two tool calls" / "Extended thinking shines when tackling complex reasoning tasks that don't require recent info from the web" / "Research is optimal for comprehensive information gathering requiring five or more tool calls over 1-3 minutes" https://support.claude.com/en/articles/11095361 (consultado el 2026-10-26)
[^plugins]: Ayuda de Anthropic, «Use plugins in Claude». "Plugins are available to all paid plans (Pro, Max, Team, Enterprise)." / "Each plugin bundles skills, connectors, and sub-agents into a single package" https://support.claude.com/en/articles/13837440 (consultado el 2026-10-26)
[^skills-use]: Ayuda de Anthropic, «Use skills in Claude». "Toggle any skill on or off using the switch next to it. Disabled skills won't be available to Claude." https://support.claude.com/en/articles/12512180 (consultado el 2026-10-26)
[^create]: Ayuda de Anthropic, «Create and edit files with Claude». "You can also upload CSV, TSV, and other files for data analysis and visualization." / "Claude can create data visualizations in image files like PNG." https://support.claude.com/en/articles/12111783 (consultado el 2026-10-26)
