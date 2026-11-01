# Capítulo 12. Usarlo como un experto: elegir según la tarea y añadir de una en una cuando haga falta

> **En una línea**: un experto no es quien usa muchas funciones, sino quien **elige la función que encaja con el tamaño de la tarea**. No lo configures todo desde el principio: añade las cosas de una en una **cuando se repita la misma molestia**.
> Este capítulo cierra la etapa 3 con una rutina para hacer funcionar cada semana la «herramienta de organización» que has creado.

Este capítulo se ha escrito a partir de la documentación oficial de Claude Code consultada el 31 de octubre de 2026. El principio de "usarlo como un experto" que vale para cualquier IA está en el [capítulo 11 de la etapa 1](../00-common/11-expert.md). Aquí solo se trata cómo elegir y acumular las funciones de Claude Code.

## Elegir según el tamaño de la tarea

| Si la tarea es así | Usa esto | Dónde se vio |
|---|---|---|
| Una pregunta, un texto | Chat (Chat de la app de Claude) | [Etapa 2](../10-claude/) |
| Leer y modificar archivos de mi carpeta | Sesión de la pestaña Code | [Capítulo 2](02-install.md) |
| Grande y con varias formas de hacerlo | Modo «Planificación»: primero el método | [Capítulo 5](05-delegate-well.md) |
| Reglas que repito cada vez | CLAUDE.md | [Capítulo 6](06-claude-md.md) |
| Algo con un procedimiento que haces a menudo | Skill (`/nombre`) | [Capítulo 7](07-skills-plugins.md) |
| Algo que debe hacerse solo en un momento fijado | Tarea programada | [Capítulo 8](08-parallel-cloud-schedule.md) |
| Comprobar o automatizar con una línea | `claude -p` en el terminal | [Capítulo 10](10-terminal.md) |
| Algo que, si sale mal, hay que deshacer | Rebobinar + historial de Git | [Capítulo 4](04-permissions-undo.md) |

La documentación oficial también divide las funciones en "lo que se ve siempre en cada sesión (CLAUDE.md)", "lo que se llama cuando hace falta (skills)" y "lo que funciona solo en un momento fijado".[^match] Cuantas más funciones grandes usas, más cosas puedes hacer, pero también más cosas hay que comprobar.

<Quiz id="ch412-choose" />

## No lo crees todo de golpe: ve acumulando

**No hace falta configurarlo todo desde el principio.** La documentación oficial dice que cada función tiene una señal de "añádela cuando pase esto".[^build]

| Si pasa esto | Añade esto |
|---|---|
| Te equivocas dos veces con la misma regla o el mismo comando | Escribirlo en CLAUDE.md |
| Sigues empezando una tarea con la misma petición | Guardarlo como skill |
| Estás pegando por tercera vez el mismo procedimiento | Guardarlo como skill |
| Sigues copiando datos del navegador | Conectar ese servicio con un conector (MCP) |
| Hay algo que debe ocurrir siempre sin que lo pidas | Un hook (un comando que se ejecuta solo en un momento fijado) |

Fuente: documentación oficial de Claude Code (solo una parte)[^build]

La herramienta de organización de esta guía también creció en este orden. La petición larga del capítulo 2 → las plantillas del capítulo 5 → el CLAUDE.md del capítulo 6 → los skills del capítulo 7. **Primero se sufrió la molestia y después se creó la herramienta.**

La misma señal se usa también **para corregir lo que ya has creado**. Si vuelve a salir el mismo error, no lo arregles una vez en el chat y ya: corrige el CLAUDE.md. Si hay un procedimiento que sigues retocando a mano, corrige el skill.[^update]

<Quiz id="ch412-build" />

## Hábitos que ya no hacen falta

Algunos trucos que eran necesarios con los modelos antiguos ahora estorban. Solo recojo los que señala la documentación oficial y que afectan a los lectores de esta guía.[^stop]

| Truco de antes | Ahora |
|---|---|
| Poner "¡importante!" o mayúsculas en las instrucciones importantes | También sigue una línea escrita con normalidad. Si acumulas énfasis, aplica la regla en exceso |
| Meter prisa con "no pares, hazlo hasta el final" | En lo acordado, normalmente lo hace hasta el final. En su lugar, dale un criterio de comprobación (capítulo 5) |
| Escribir largo la estructura de carpetas en CLAUDE.md | Claude lee la carpeta por sí mismo. Escribe solo lo que no está en la carpeta |

Fuente: documentación oficial de Claude Code[^stop]

Si es una **regla que debe cumplirse sí o sí**, en vez de énfasis se usa otro mecanismo. La documentación oficial dice que las reglas que no pueden doblarse se conviertan en un hook o en una regla de denegación.[^stop] Para los lectores de esta guía, de momento basta con protegerse con los modos de permisos y el historial de Git del capítulo 4.

<Quiz id="ch412-stop" />

## Rutina semanal de organización

Haz funcionar la herramienta que creaste en la etapa 3 cada semana así.

1. **Reunir**: mete las notas de reuniones, de estudio y de balance diario en `inbox` según vayan surgiendo. Borra los datos personales.
2. **Organizar**: `/meeting-notes`, `/study-notes` y, los viernes, `/weekly-review` (o programado).
3. **Comprobar**: lee los **resultados de la comprobación y los «puntos que hay que confirmar»** que te muestra Claude, y cotéjalo todo con el original: cifras, responsables y plazos.
4. **Registrar**: si te gusta, déjalo guardado con un commit (capítulo 4).
5. **Corregir**: si has hecho dos veces la misma observación, corrige el CLAUDE.md o el skill.

**No hace falta que sea perfecto desde el principio.** Si lo haces funcionar una vez por semana y corriges solo una molestia, en unas semanas tendrás una herramienta que te encaja del todo.

<Quiz id="ch412-routine" />

## Resumen

- Elige según el tamaño de la tarea: una pregunta, en el chat; las tareas con archivos, en Code; las grandes, primero el plan; lo que se repite, en CLAUDE.md y skills; lo de un momento fijado, programado.
- No lo configures todo desde el principio. Cuando se repita la misma molestia, añade las cosas de una en una, y lo que ya has creado se corrige con la misma señal.
- En lugar de énfasis o prisas, da una línea normal y un criterio de comprobación. Las reglas que deben cumplirse sí o sí, protégelas con mecanismos como los permisos y Git.
- Haz funcionar cada semana: reunir → organizar → comprobar → registrar → corregir.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Hook | Hook | Comando que se ejecuta solo en un momento fijado |
| Routine | Rutina | Hábito de trabajo que se hace cada semana en el mismo orden (no es lo mismo que el nombre de la programación en la nube del capítulo 8) |

<ChapterDone :chapter="412" />

Siguiente capítulo: has terminado la guía de Claude Code de la etapa 3. Si quieres pasar la misma herramienta de organización a Codex de OpenAI, sigue con la [etapa 3 · Guía de Codex](../21-codex/). Puedes elegir de nuevo un capítulo que quieras repasar en el [índice de la etapa 3 · Claude Code](./), o comprobar lo que has aprendido hasta ahora con el [test de nivel de conocimiento de IA](../00-common/level-test.md).

[^match]: Documentación oficial de Claude Code, «Extend Claude Code». "Features range from always-on context that Claude sees every session, to on-demand capabilities you or Claude can invoke, to background automation that runs on specific events." https://code.claude.com/docs/en/features-overview (consultado el 2026-10-31)
[^build]: Documentación oficial de Claude Code, «Extend Claude Code». "You don't need to configure everything up front. Each feature has a recognizable trigger, and most teams add them in roughly this order" / "Claude gets a convention or command wrong twice" / "You keep typing the same prompt to start a task" / "You paste the same playbook or multi-step procedure into chat for the third time" / "You keep copying data from a browser tab Claude can't see" / "You want something to happen every time without asking" https://code.claude.com/docs/en/features-overview (consultado el 2026-10-31)
[^update]: Documentación oficial de Claude Code, «Extend Claude Code». "A repeated mistake or a recurring review comment is a CLAUDE.md edit, not a one-off correction in chat. A workflow you keep tweaking by hand is a skill that needs another revision." https://code.claude.com/docs/en/features-overview (consultado el 2026-10-31)
[^stop]: Documentación oficial de Claude Code, «Best practices for Claude Code». "Current ones follow a plainly worded line, and piling on emphasis mostly makes Claude over-apply the rule. If it's a rule that can't bend, turn it into a hook or a deny rule." / "Current models usually carry on through an agreed task without being told" / "Giving Claude a check to pass is different, and still worth doing." / "Claude reads the repo itself. Only write down what isn't in there." https://code.claude.com/docs/en/best-practices (consultado el 2026-10-31)
