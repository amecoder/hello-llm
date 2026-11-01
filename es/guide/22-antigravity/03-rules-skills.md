# Capítulo 3. Reglas y skills: no hace falta trasladar nada

> **En una línea**: Antigravity lee el **`AGENTS.md`** de la carpeta como una regla siempre activa y elige por sí mismo los skills de **`.agents/skills`**. Los archivos que creaste en la etapa de Codex **valen tal cual**.
> Con la misma nota, harás que ordene una vez con `AGENTS.md` apartado y otra vez después de volver a ponerlo, para comprobarlo.

Este capítulo se escribió a partir de la documentación oficial de Antigravity consultada el 1 de noviembre de 2026 y del resultado de ejecutar esta guía con Antigravity CLI `agy` 1.4.12. Esta guía llamó y ejecutó `agy` dentro de otra herramienta de IA de prácticas. Las preguntas frecuentes oficiales dicen que ese uso no se admite en el plan personal ([capítulo 7](07-safety-choose.md)), así que, si lo repites, ejecútalo directamente desde la aplicación o el terminal. La aplicación y la CLI usan el mismo agente ([capítulo 1](01-what-is.md)). Qué son un archivo de reglas y un skill se explicó en los [capítulos 6 y 7 de Claude Code](../20-claude-code/06-claude-md.md).

## Dónde busca Antigravity

Antigravity busca las reglas y los skills en carpetas fijas.[^where]

| Qué | Esta carpeta (proyecto) | Todas mis carpetas |
|---|---|---|
| Reglas | `AGENTS.md`, `GEMINI.md`, `.agents/rules/` | `~/.gemini/AGENTS.md`, etc. |
| Skills | `.agents/skills/nombre/SKILL.md` | `~/.gemini/config/skills/` |

Fuente: documentación oficial de Antigravity (traducida solo en parte)[^where][^global][^global-skill]

**Tienen el mismo nombre y la misma ubicación que los archivos que creaste en la etapa de Codex.** El archivo de reglas `AGENTS.md` y la carpeta de skills `.agents/skills`. Por eso basta con abrir la carpeta Herramienta de orden (정리도구) tal cual, **sin trasladar nada**.

`CLAUDE.md` no está en la lista de archivos de reglas.[^names] Si tienes reglas que solo usabas en Claude Code, escríbelas también en `AGENTS.md` (por la misma razón que en el capítulo 3 de Codex).

`AGENTS.md` se usa sin ajustes al principio y **todo su contenido está siempre activo.**[^always] Las reglas y los skills que corriges se aplican desde el mensaje siguiente.[^reread]

<Quiz id="ch603-where" />

## Probar con la misma nota

En `AGENTS.md` está la regla que añadiste en el capítulo 3 de Codex: «Al final del archivo ordenado se pone un apartado "Contrastar con el original"». Como esa regla está solo en `AGENTS.md`, si el resultado tiene ese apartado, sabes que se leyó `AGENTS.md`.

En la revisión de la etapa de Codex hubo una crítica: «si se usan notas distintas antes y después, no es una comparación rigurosa». Por eso esta vez se ejecutó dos veces con **la misma nota y la misma petición**.

```
Ordena la nota inbox/회의-2026-10-27-주간회의.txt como un acta de reunión y guárdala como un archivo nuevo en la carpeta notes/.
```

| Ejecución | Apartado «Contrastar con el original» |
|---|---|
| Con `AGENTS.md` apartado fuera de la carpeta | No hay |
| Después de volver a poner `AGENTS.md` | Hay |

Fuente: resultado de la práctica de esta guía (2026-11-01, una vez cada uno)

Resultado: [sin AGENTS.md](/practice/notes/results/antigravity/3장-회의록-AGENTS없이.txt) · [con AGENTS.md](/practice/notes/results/antigravity/3장-회의록-AGENTS있을때.txt)

Si miras el registro de ejecución, la diferencia se ve todavía más clara.

- **Cuando no estaba `AGENTS.md`**: el agente buscó y abrió por su cuenta `AGENTS.md`, `CLAUDE.md` y `GEMINI.md`.
- **Cuando estaba `AGENTS.md`**: aunque no abrió ese archivo aparte, cumplió la regla nueva. Parece que es porque ya estaba incluido desde el principio como regla siempre activa.

`CLAUDE.md` lo **abrió y lo leyó por su cuenta** las dos veces. No entró automáticamente como archivo de reglas, pero parece que, si está en la carpeta, puede leerlo como material de consulta. En este ordenador también hay un archivo de reglas personales (`~/.gemini/GEMINI.md`), que entró en la ejecución, así que no se puede distinguir si este comportamiento es por su influencia. Es el resultado de una sola vez cada uno.

Con la misma nota hubo además otra diferencia en el resultado. Codex corrigió el día de la semana de la nota según el calendario de 2026, pero Antigravity usó tal cual el día de la semana escrito en la nota (`10/27(월)`, lunes). Los días de la semana de las notas de prácticas están inventados para la historia, así que no coinciden con el calendario real. Cada herramienta juzga esto de forma distinta, así que compara siempre las fechas con el original.

También hubo una fecha equivocada. En el acta creada con `AGENTS.md`, el plazo para investigar el coste del vino caliente (뱅쇼) aparecía como `10/30(금)` en vez de `10/31(금)` (la nota dice «hasta el viernes»). **Aunque cumpla el apartado de la regla, la fecha puede estar mal.** No te quedes tranquilo porque exista el apartado «Contrastar con el original»: contrástalo tú.

<Quiz id="ch603-test" />

## Los skills los elige por su cuenta

El agente, en cada turno, mira la lista con los nombres y las descripciones (`description`) de los skills y, si hay un skill adecuado para el trabajo, lee sus instrucciones completas.[^progressive] Por eso no hace falta decirle uno por uno que use un skill, y si quieres que lo use sí o sí, basta con decir su nombre.[^mention]

En las dos ejecuciones de arriba, aunque no se habló de skills, **lo primero que hizo fue leer `.agents/skills/meeting-notes/SKILL.md`**. Reconoció tal cual el skill que trasladaste en el capítulo 5 de Codex.

Para llamarlo directamente, escribe `/nombredelskill` en el cuadro de entrada de la aplicación.[^slash] Es distinto del `$nombre` de Codex e igual que el `/nombre` de Claude Code.

```
/weekly-review
```

Esta guía lo ejecutó en el terminal diciendo el nombre: «ordena el balance de esta semana con el skill weekly-review». El agente leyó `.agents/skills/weekly-review/SKILL.md` y creó el balance semanal con 3 notas de balance.

Resultado: [balance semanal creado con el skill](/practice/notes/results/antigravity/3장-주간회고-스킬로.txt)

Tenía **todos** los 8 datos para contrastar con las notas originales: 12 «me gusta», el error de 6000 wones, 4 menús combinados, un total de 11, 3 veces en Instagram, el vino caliente a 1800 wones, las bombillas y 2 horas para escribir el texto. En el balance que creó Codex con el mismo skill faltaban 3 ([capítulo 5 de Codex](../21-codex/05-skills.md)). Es un ejemplo de que, aunque las instrucciones sean las mismas, el resultado puede ser distinto según la herramienta.

En el resultado hay varios sitios con la marca `(no está en la nota)`. No quiere decir que el dato esté mal, sino que lo que pide la plantilla, como «por qué salió bien» o «cuándo se hará», no está en la nota. Junto con lo que está mal o falta, mira también si esas marcas están bien puestas.

<Quiz id="ch603-skills" />

## Reglas condicionales y dejar lo aprendido

Cuando hay muchas reglas, se pueden dividir en archivos de la carpeta `.agents/rules/`. En esos archivos hay que escribir al principio, sin falta, cuándo se activan (`trigger`). Si no lo escribes o lo escribes mal, **se descartan sin avisar.**[^trigger] Cuando las reglas son pocas líneas, como en la herramienta de orden, basta con un único `AGENTS.md`.

Las reglas se usan para «lo que siempre hay que cumplir» y los skills, para «trabajos de varios pasos».[^rule-skill] Por ejemplo, «las fechas se escriben como 10/27(lun)» es una regla, y «reunir 3 notas de balance y crear el balance semanal» es un skill.

Si quieres dejar como regla o como skill algo que has corregido en la conversación, usa `/learn`. El agente propone los cambios y **solo escribe los archivos después de que yo los apruebe**.[^learn]

<Quiz id="ch603-rules" />

## Pruébalo tú mismo

1. Abre la carpeta Herramienta de orden (정리도구) como proyecto de Antigravity (capítulo 2). No traslades nada.
2. Encárgale ordenar una nota de reunión y mira si al final del resultado está el apartado «Contrastar con el original».
3. Si quieres asegurarte más, pon `AGENTS.md` un momento en otro sitio, haz la misma petición otra vez y compara. Cuando termines, vuelve a ponerlo.
4. Crea el balance semanal con `/weekly-review` y cuenta lo que está mal y lo que falta comparando con las notas originales.

**Proyecto continuo**: en el capítulo 4 compararás los preajustes de permisos de Antigravity y cómo deshacer con los de Claude Code y Codex.

## Resumen

- Antigravity lee `AGENTS.md`, `GEMINI.md` y `.agents/skills`. Los archivos que creaste en Codex valen tal cual.
- Probado con la misma nota: sin `AGENTS.md`, 0 → con él, 1 (apartado «Contrastar con el original»).
- Los skills los eligió por su cuenta sin que se lo dijera. Para llamarlos directamente, `/nombredelskill`.
- A los archivos de `.agents/rules/` hay que escribirles sin falta el `trigger`. Lo aprendido en la conversación se deja con `/learn` después de aprobarlo.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| always_on | Siempre activa | Regla que está siempre activada |
| trigger | Disparador (trigger) | Valor que fija cuándo se activa una regla |
| `/learn` | `/learn` | Comando que propone dejar como regla o skill lo aprendido en la conversación |

<ChapterDone :chapter="603" />

Siguiente capítulo: [Capítulo 4. Permisos y deshacer](04-permissions-undo.md)

[^where]: Documentación oficial de Antigravity, «Customization discovery». "**Workspace**: the `.agents/` folder in your project, plus `AGENTS.md` and `GEMINI.md` files." / "| [Rules](https://antigravity.google/docs/rules) | `rules/*.md`, `AGENTS.md`, `GEMINI.md` |" / "| [Skills](https://antigravity.google/docs/skills) | `skills/<name>/SKILL.md` |" https://antigravity.google/docs/customization-discovery (consultado el 2026-11-01)
[^global]: Documentación oficial de Antigravity, «Rules». "**Standalone global files** (no frontmatter needed, always active): `~/.gemini/AGENTS.md`, `~/.gemini/GEMINI.md`, `~/.gemini/config/AGENTS.md`, or `~/.gemini/config/GEMINI.md`" https://antigravity.google/docs/rules (consultado el 2026-11-01)
[^global-skill]: Documentación oficial de Antigravity, «Customization discovery». "To use a personal skill in both the Antigravity App and the Antigravity CLI, put it in `~/.gemini/config/skills/`." https://antigravity.google/docs/customization-discovery (consultado el 2026-11-01)
[^names]: Documentación oficial de Antigravity, «Rules». "You can place an `AGENTS.md` or `GEMINI.md` file—or a `.agents/rules/` directory—in your workspace folder and in any parent folder up to the repository root." https://antigravity.google/docs/rules (consultado el 2026-11-01)
[^always]: Documentación oficial de Antigravity, «Rules». "**`AGENTS.md` and `GEMINI.md` do not use frontmatter.** Antigravity treats its entire content as plain Markdown and keeps it continuously active (`always_on`)." https://antigravity.google/docs/rules (consultado el 2026-11-01)
[^reread]: Documentación oficial de Antigravity, «Customization discovery». "Antigravity rereads your rules and skills before each turn, so a new or edited file applies to your next message without a restart." https://antigravity.google/docs/customization-discovery (consultado el 2026-11-01)
[^progressive]: Documentación oficial de Antigravity, «Agent skills». "On every turn, the agent sees a list of available skills with their names and descriptions. If a skill looks relevant to your task, the agent reads the full instructions and follows them." https://antigravity.google/docs/skills (consultado el 2026-11-01)
[^mention]: Documentación oficial de Antigravity, «Agent skills». "You don’t need to explicitly tell the agent to use a skill—it decides based on context. However, you can mention a skill by name if you want to ensure it’s used." https://antigravity.google/docs/skills (consultado el 2026-11-01)
[^slash]: Documentación oficial de Antigravity, «Agent skills». "**Manual slash command**: Type `/<skill-name>` in the message box to explicitly invoke a skill." https://antigravity.google/docs/skills (consultado el 2026-11-01)
[^trigger]: Documentación oficial de Antigravity, «Rules». "**Every `.md` file inside `rules/` must start with YAML frontmatter** declaring a valid `trigger`." / "If a file in `.agents/rules/*.md` omits frontmatter or specifies an unrecognized `trigger` value (such as camelCase `alwaysOn` or `modelDecision`), Antigravity silently discards the rule." https://antigravity.google/docs/rules (consultado el 2026-11-01)
[^rule-skill]: Documentación oficial de Antigravity, «Rules». "**Rule vs. Skill**: Write a **rule** for _constraints and invariants_ (for example, “Always use `zod` for validation” or “Never import `internal/` across packages”). Write a **[skill](https://antigravity.google/docs/skills)** for _multi-step workflows_ (for example, “How to run database migrations”)." https://antigravity.google/docs/rules (consultado el 2026-11-01)
[^learn]: Documentación oficial de Antigravity, «Slash commands overview». "The agent proposes changes in a `learning_proposal.md` artifact and writes files only after you approve." https://antigravity.google/docs/slash-commands (consultado el 2026-11-01)
