# Etapa 3 · Guía de uso de Codex

Codex es una herramienta de IA creada por OpenAI que **trabaja directamente en una carpeta de tu ordenador**. Hoy se usa eligiendo «Codex» dentro de la aplicación de escritorio de ChatGPT.
Esta guía traslada a Codex la «herramienta que ordena tus apuntes a tu manera» que creaste en la [guía de Claude Code](../20-claude-code/), y te enseña **solo lo que cambia respecto a Claude Code**.

> **Esta guía se escribió a partir de la documentación oficial de Codex (learn.chatgpt.com) consultada el 1 de noviembre de 2026 y de resultados de ejecución reales.** Las funciones y los nombres de los menús cambian a menudo.
> Las prácticas están pensadas para un plan **Plus o superior**. Free y Go se activan de forma gradual, así que es posible que todavía no veas Codex.

| Capítulo | Título | Qué aprenderás |
|---|---|---|
| 1 | [Qué es Codex y en qué se diferencia de Claude Code](01-what-is.md) | Chat, Work y Codex dentro de la aplicación de ChatGPT, equivalencias con Claude Code, planes |
| 2 | [Empezar con Codex en la aplicación de ChatGPT](02-first-task.md) | Instalación, elegir Codex, abrir una carpeta, encargar la primera tarea de orden |
| 3 | [El archivo de reglas AGENTS.md](03-agents-md.md) | Trasladar CLAUDE.md, probar las reglas sin mencionarlas, importar y memoria |
| 4 | [Permisos y cómo deshacer](04-permissions-undo.md) | Los tres modos del menú de permisos, carpetas protegidas, ventana de revisión, deshacer con Git |
| 5 | [Trasladar las skills](05-skills.md) | .agents/skills, una línea con $weekly-review, lo que está mal y lo que falta |
| 6 | [Programación, nube y móvil](06-schedule-cloud.md) | Condiciones y permisos de las tareas programadas, diferencias con la nube, conectar el móvil |
| 7 | [Usarlo desde el terminal](07-terminal.md) | Instalación, codex exec (solo lectura por defecto), comandos interactivos |
| 8 | [Coste, datos, seguridad y cómo elegir herramienta](08-safety-choose.md) | Uso, ajustes de datos, experimento de la instrucción oculta, usar las dos herramientas juntas, ejercicio final |

## Materiales de práctica

El punto de partida es la **carpeta de la herramienta de orden con la que terminaste el capítulo 7 de Claude Code**. Si te saltaste la guía de Claude Code, descarga los archivos de abajo y deja la carpeta con la misma forma. Todas las notas son **inventadas**, y las fechas y los días de la semana también están inventados para la historia, así que no coinciden con el calendario real de 2026.

| Ubicación en la carpeta | Archivos que debes descargar |
|---|---|
| `inbox/` | [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) · [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) · [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [회고-2026-10-30.txt](/practice/notes/inbox/회고-2026-10-30.txt) · [회고-2026-10-31.txt](/practice/notes/inbox/회고-2026-10-31.txt) · [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) |
| `templates/` | [회의록.md](/practice/notes/results/5장-양식-회의록.txt) · [공부노트.md](/practice/notes/results/5장-양식-공부노트.txt) · [주간회고.md](/practice/notes/results/5장-양식-주간회고.txt) · [README.md](/practice/notes/results/5장-양식-README.txt) |
| En la raíz | [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) |
| `.claude/skills/nombre/SKILL.md` | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) |

Guarda los archivos descargados cambiando la extensión por la que indica la tabla (por ejemplo, `5장-양식-회의록.txt` → `templates/회의록.md`). Deja vacía la carpeta `notes/`.

También publicamos los **resultados** que esta guía obtuvo con Codex. Aunque hagas la misma petición, el resultado se verá un poco distinto.

| Capítulo | Resultado |
|---|---|
| 2 | [Acta de reunión](/practice/notes/results/codex/2장-회의록-2026-10-27-주간회의.txt) |
| 3 | [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt) · [Apunte de estudio escrito solo con las reglas](/practice/notes/results/codex/3장-공부노트-규칙확인.txt) |
| 5 | [Resumen semanal hecho con la skill](/practice/notes/results/codex/5장-주간회고-스킬로.txt) |
| 7 | [Salida de codex exec](/practice/notes/results/codex/7장-codex-exec-출력.txt) |
| 8 | [Acta hecha con la nota de instrucción oculta](/practice/notes/results/codex/8장-회의록-숨은지시-메모.txt) |

Si todavía no has leído Claude Code, empieza por la [Etapa 3 · Guía de Claude Code](../20-claude-code/). Allí se explica qué son las carpetas, los permisos, los archivos de reglas y las skills, y esta guía te remite a ellas con enlaces.
