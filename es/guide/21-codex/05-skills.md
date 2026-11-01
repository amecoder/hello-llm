# Capítulo 5. Trasladar los skills — un resumen semanal con una sola línea, `$weekly-review`

> **En una línea**: los skills de Codex tienen **el mismo formato** (`SKILL.md`) que los de Claude Code; solo cambian el lugar donde se guardan y el símbolo para llamarlos. La carpeta es `.agents/skills` y para llamarlos se usa `$nombre`.
> Trasladamos los 3 skills de Herramienta de orden (정리도구), creamos un resumen semanal con una sola línea, `$weekly-review`, y lo comparamos con el original.

Este capítulo se escribió con la documentación oficial de Codex consultada el 1 de noviembre de 2026 y con la práctica de esta guía (ejecutada en el terminal de Codex). Qué es un skill y para qué se usa se explicó en el [capítulo 7 de Claude Code](../20-claude-code/07-skills-plugins.md).

## El mismo formato, otro lugar

Los skills de Codex también son una carpeta que contiene un archivo `SKILL.md`, y en `SKILL.md` tienen que figurar sí o sí el nombre (`name`) y la descripción (`description`).[^format] Los skills siguen un estándar abierto que usan varias herramientas.[^standard] Por eso trasladamos tal cual, **sin modificarlo**, el `SKILL.md` creado en Claude Code.

Lo que cambia es dónde se guarda y cómo se llama.

| | Claude Code | Codex |
|---|---|---|
| Solo para esta carpeta | `.claude/skills/` | `.agents/skills/` |
| Para todas mis carpetas | `~/.claude/skills/` | `~/.agents/skills/` |
| Llamarlo | `/nombre` | `$nombre` |

Fuente: documentación oficial de Codex[^where][^mention]

Antes de trasladar, lo probé. Dejándolo en `.claude/skills` y llamando a `$weekly-review`, Codex no lo encontró enseguida en la lista de skills, sino que lo halló **buscando archivos** hasta dar con `SKILL.md`. Esta vez lo encontró, pero es más seguro guardarlo en el lugar establecido.

<Quiz id="ch505-where" />

## Trasladar los skills

Le pedí esto a Codex.

```
Copia los 3 skills de la carpeta .claude/skills a .agents/skills, que es el lugar donde Codex los lee. Deja la carpeta original como está.
```

**Se bloqueó.** Fue por la carpeta protegida que viste en el capítulo 4. Dentro de la carpeta de trabajo, `.agents` es por defecto de solo lectura.[^protected] Codex avisó de que la copia estaba bloqueada y, en su lugar, me dijo los comandos que debía escribir yo.

```bash
mkdir -p .agents/skills
cp -R .claude/skills/meeting-notes .claude/skills/study-notes .claude/skills/weekly-review .agents/skills/
```

Esta práctica se ejecutó desde el terminal con la forma de permisos fijada de antemano (capítulo 7), así que no pudo preguntar y se detuvo ahí. No pudimos comprobar en esta guía cómo se ve este punto en la aplicación. Si sale una pantalla que pide permiso, lee **qué se va a escribir y dónde** y decide.

Esta guía ejecutó **ella misma** el comando que indicó Codex para hacer la copia. Abre el terminal de macOS, entra en la carpeta con `cd ~/hello-ai-연습/정리도구` y escribe las dos líneas de arriba. Si es la primera vez que usas el terminal, mira antes el [capítulo 10 de Claude Code](../20-claude-code/10-terminal.md).

Después de trasladar, basta con que haya tres carpetas bajo `.agents/skills`: `meeting-notes`, `study-notes` y `weekly-review`.

<Quiz id="ch505-move" />

## Llamarlos con `$`

Si escribes `$` en el cuadro de entrada, puedes elegir un skill y llamarlo.[^dollar] Esta vez envié solo el nombre del skill.

```
$weekly-review
```

Una vez terminada la copia, abrió **directamente** `.agents/skills/weekly-review/SKILL.md` sin buscar archivos. Y reunió las 3 notas de repaso para crear el resumen semanal.

Resultado: [resumen semanal creado con el skill](/practice/notes/results/codex/5장-주간회고-스킬로.txt)

Comparé los números y los hechos con las notas originales.

| Nota original | Resumen semanal | ¿Coincide? |
|---|---|---|
| 12 «me gusta» | 12 | Coincide |
| Escribió mal el precio: 6000 wones | Error de 6000 wones | Coincide |
| 4 sets hoy | 4 | Coincide |
| Total de sets de esta semana: 11 | 11 | Coincide |
| Publicó las 3 veces en Instagram | 3 veces | Coincide |
| Coste del vino caliente especiado (뱅쇼): 1800 wones | No aparece | Falta |
| Compró una bombilla y la cambió | No aparece | Falta |
| 2 horas escribiendo el texto | No aparece | Falta |

Fuente: resultado de la práctica de esta guía (2026-11-01)

No había ningún punto erróneo, pero **faltaban tres cosas.** Parece que se dejaron fuera porque no encajaban justo en las tres casillas del formato del repaso (lo que salió bien, lo que fue una pena y lo que hacer la semana que viene). Así que comprueba **no solo lo que está mal, sino también lo que falta.** Si hay contenido que no debe faltar, basta con añadir al skill una línea como: «Los números que pueden ser tema de la próxima reunión, como el del vino caliente especiado, se ponen en lo que hay que hacer la semana que viene».

Aunque no lo llames, si la petición coincide con la descripción de un skill, Codex puede elegirlo por su cuenta.[^implicit] Por eso conviene dejar bien claro **cuándo se usa** al principio de la descripción.[^frontload]

<Quiz id="ch505-call" />

## Crear un skill nuevo y los plugins

Para crear un skill nuevo desde cero, llamas a `$skill-creator`, que viene incluido de serie, y explicas el objetivo, los pasos y el formato.[^creator] Según la documentación oficial, un buen primer skill es **un trabajo cuyos pasos y formato son siempre los mismos**, como un informe semanal o el seguimiento de una reunión.[^first] Los tres skills de Herramienta de orden son justo ese tipo de ejemplo.

Un **plugin** es un paquete que se instala y que junta skills y conexiones con herramientas externas.[^plugin] ChatGPT y Codex comparten una sola lista de plugins.[^shared] Sobre los hooks (scripts que se ejecutan automáticamente) que lleva un plugin, dice que los revises antes de que se ejecuten y juzgues si son de fiar.[^hooks] Con un plugin que veas por primera vez, comprueba antes quién lo hizo y qué permisos tiene, como aprendiste en el [capítulo 7 de Claude Code](../20-claude-code/07-skills-plugins.md).

<Quiz id="ch505-create" />

## Pruébalo tú

1. Pídele a Codex que copie los 3 skills de `.claude/skills` a `.agents/skills`. Si pide permiso, lee el contenido y decide; si se bloquea, escribe tú mismo en el terminal (también sirve «View → Open Terminal» del menú de la aplicación) los dos comandos del texto.
2. Abre una conversación nueva y escribe `$` en el cuadro de entrada para comprobar que se ven los tres skills.
3. Envía `$weekly-review` y compara el resultado con las notas originales. Cuenta por separado lo que está mal y lo que falta.
4. Si falta algo, añade una línea al skill y vuelve a ejecutarlo.

**Proyecto continuo**: en el capítulo 6 veremos una programación que ejecuta sola el resumen semanal todos los viernes, y la nube y el móvil.

## Resumen

- El formato del skill (`SKILL.md`) es el mismo que en Claude Code. Se guarda en `.agents/skills` y se llama con `$nombre`.
- `.agents` es una carpeta protegida, así que al trasladar puede bloquearse o pedir permiso (esta guía solo comprobó el bloqueo en el terminal).
- Con una sola línea, `$weekly-review`, salió el resumen semanal. Acertó 5 puntos y faltaron 3.
- Comprueba no solo lo que está mal, sino también lo que falta. Si se repite, corrige el skill.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Mención con `$` | Mención con dólar | Forma de llamar a un skill por su nombre en Codex |
| `.agents/skills` | `.agents/skills` | El lugar donde Codex busca los skills de esta carpeta |
| skill-creator | skill-creator | Skill incluido de serie que ayuda a crear skills nuevos |

<ChapterDone :chapter="505" />

Siguiente capítulo: [Capítulo 6. Programación, nube y móvil](06-schedule-cloud.md)

[^format]: Documentación oficial de Codex, «Build skills». "A skill is a directory with a `SKILL.md` file plus optional scripts and references. The `SKILL.md` file must include `name` and `description`." https://learn.chatgpt.com/docs/build-skills (consultado el 2026-11-01)
[^standard]: Documentación oficial de Codex, «Build skills». "Skills build on the [open agent skills standard](https://agentskills.io)." https://learn.chatgpt.com/docs/build-skills (consultado el 2026-11-01)
[^where]: Documentación oficial de Codex, «Build skills». "For repositories, Codex scans `.agents/skills` in every directory from your current working directory up to the repository root." / "`$HOME/.agents/skills` <br /> Any skills checked into the user's personal folder." https://learn.chatgpt.com/docs/build-skills (consultado el 2026-11-01)
[^mention]: Documentación oficial de Codex, «Skills & Plugins». "ChatGPT supports `@` mentions, while Codex supports `$` mentions for skills." https://learn.chatgpt.com/docs/skills-and-plugins (consultado el 2026-11-01)
[^protected]: Documentación oficial de Codex, «Agent approvals & security». "`<writable_root>/.agents` is protected as read-only when it exists as a directory." https://learn.chatgpt.com/docs/agent-approvals-security (consultado el 2026-11-01)
[^dollar]: Documentación oficial de Codex, «Slash commands». "You can also explicitly invoke skills by typing `$` in the chat composer." https://learn.chatgpt.com/docs/reference/slash-commands (consultado el 2026-11-01)
[^implicit]: Documentación oficial de Codex, «Build skills». "**Implicit invocation:** ChatGPT or Codex can choose a skill when your task matches the skill `description`." https://learn.chatgpt.com/docs/build-skills (consultado el 2026-11-01)
[^frontload]: Documentación oficial de Codex, «Build skills». "Front-load the key use case and trigger words so a host can still match the skill if descriptions are shortened." https://learn.chatgpt.com/docs/build-skills (consultado el 2026-11-01)
[^creator]: Documentación oficial de Codex, «Skills & Plugins». "In ChatGPT, start with `@skill-creator`; in Codex, use `$skill-creator`." https://learn.chatgpt.com/docs/skills-and-plugins (consultado el 2026-11-01)
[^first]: Documentación oficial de Codex, «Skills & Plugins». "Good first skills include a weekly update, a campaign brief, a meeting follow-up, or any task where the steps and format should stay consistent." https://learn.chatgpt.com/docs/skills-and-plugins (consultado el 2026-11-01)
[^plugin]: Documentación oficial de Codex, «Skills & Plugins». "A **plugin** is an installable bundle that can include skills and Model Context Protocol (MCP) servers." https://learn.chatgpt.com/docs/skills-and-plugins (consultado el 2026-11-01)
[^shared]: Documentación oficial de Codex, «Skills & Plugins». "ChatGPT and Codex share one universal plugin directory." https://learn.chatgpt.com/docs/skills-and-plugins (consultado el 2026-11-01)
[^hooks]: Documentación oficial de Codex, «Plugins». "Review and trust plugin hooks before they run." https://learn.chatgpt.com/docs/plugins (consultado el 2026-11-01)
