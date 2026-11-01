# Etapa 3 · Guía de uso de Antigravity

Antigravity es una herramienta de IA creada por Google que **trabaja directamente en una carpeta de tu ordenador**. Tiene una aplicación de escritorio y un programa de terminal, `agy`.
En esta guía abres **sin trasladarla, tal cual**, la carpeta «Herramienta que organiza a mi manera» (내 방식대로 정리해 주는 도구) que creaste hasta la [guía de Codex](../21-codex/), compruebas que también funciona con la tercera herramienta y aprendes solo lo que es distinto.

> **Esta guía se escribió a partir de la documentación oficial de Antigravity (antigravity.google/docs) consultada el 2026-11-1 y de los resultados ejecutados con la terminal `agy`. Todavía no pudo practicarse con la pantalla de la aplicación.** Las funciones y los nombres de los menús cambian con frecuencia.
> Es la única de las tres herramientas con la que puedes usar todas las funciones incluso con una **cuenta de Google gratuita** (de 18 años o más). Según el plan, solo cambian el uso y los modelos.

| Cap. | Título | Qué aprenderás |
|---|---|---|
| 1 | [Qué es Antigravity y en qué se diferencia de las dos herramientas anteriores](01-what-is.md) | Cuatro formas, todas las funciones incluso gratis, modelos, equivalencias entre las tres herramientas |
| 2 | [Instalar la aplicación y la primera organización](02-first-task.md) | Instalación e inicio de sesión, abrir como proyecto, Planning mode y Proceed, panel Review |
| 3 | [Reglas y habilidades: no hace falta trasladarlas](03-rules-skills.md) | AGENTS.md y .agents/skills tal cual, de 0 a 1 con las mismas notas, /nombre-de-la-habilidad |
| 4 | [Permisos y deshacer](04-permissions-undo.md) | Cuatro preajustes, valores predeterminados de la valla (aplicación y terminal), cuidado al descartar, /rewind |
| 5 | [Planificación, programación, navegador y objetivos](05-plan-schedule.md) | /plan, /schedule y Automations, /browser, /goal, control remoto |
| 6 | [Usarlo en la terminal](06-terminal.md) | agy -p, rechazo silencioso y código de salida 0, confianza en la carpeta, cuatro trampas |
| 7 | [Costes, datos y seguridad, y elegir entre las tres herramientas](07-safety-choose.md) | Uso y créditos, Enable Telemetry, experimento de instrucciones ocultas, usar juntas las tres herramientas, tareas de práctica |

## Material de práctica

El punto de partida es **la carpeta «Herramienta de orden» con la que terminaste el capítulo 5 de Codex**. Si te saltaste las etapas anteriores, descarga los archivos de abajo y deja todo con la misma forma. Todas las notas son **contenido inventado**, y las fechas y los días de la semana están inventados para la historia, así que no coinciden con el calendario real de 2026.

| Ubicación en la carpeta | Archivos que descargar |
|---|---|
| `inbox/` | [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) · [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) · [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [회고-2026-10-30.txt](/practice/notes/inbox/회고-2026-10-30.txt) · [회고-2026-10-31.txt](/practice/notes/inbox/회고-2026-10-31.txt) · [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) |
| `templates/` | [회의록.md](/practice/notes/results/5장-양식-회의록.txt) · [공부노트.md](/practice/notes/results/5장-양식-공부노트.txt) · [주간회고.md](/practice/notes/results/5장-양식-주간회고.txt) · [README.md](/practice/notes/results/5장-양식-README.txt) |
| Arriba del todo | [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt) · [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) |
| `.agents/skills/nombre/SKILL.md` (si quieres usar también Claude Code, el mismo archivo en `.claude/skills/`) | [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) |

Los archivos descargados se guardan cambiando la extensión al nombre de la tabla (por ejemplo, `3장-AGENTS.md.txt` → `AGENTS.md`). La carpeta `notes/` se deja vacía.

Esta guía también publica los **resultados** creados con Antigravity. Aunque la petición sea la misma, la forma varía un poco.

| Cap. | Resultados |
|---|---|
| 3 | [Acta (sin AGENTS.md)](/practice/notes/results/antigravity/3장-회의록-AGENTS없이.txt) · [Acta (con AGENTS.md)](/practice/notes/results/antigravity/3장-회의록-AGENTS있을때.txt) · [Retrospectiva semanal creada con una habilidad](/practice/notes/results/antigravity/3장-주간회고-스킬로.txt) |
| 6 | [Salida de agy -p](/practice/notes/results/antigravity/6장-agy-p-출력.txt) |
| 7 | [Acta creada con una nota de instrucciones ocultas](/practice/notes/results/antigravity/7장-회의록-숨은지시-메모.txt) |

Si todavía no has leído Codex, empieza por la [etapa 3 · Guía de Codex](../21-codex/). Si solo tienes una cuenta gratuita, también puedes hacer las prácticas empezando por esta guía.
