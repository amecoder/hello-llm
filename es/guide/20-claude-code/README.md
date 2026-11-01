# Etapa 3 · Guía de uso de Claude Code

En la etapa 2 **preguntabas y recibías respuestas** por chat. En la etapa 3 aprenderás Claude Code, con el que Claude **lee y modifica directamente los archivos de una carpeta de tu ordenador**.
No pasa nada si no sabes programar. Esta guía practica con una carpeta de notas y archivos de tablas, y empieza por la **pestaña Code de la app de escritorio de Claude**, que se usa sin terminal.

> **Esta guía se ha escrito a partir de la documentación oficial de Claude Code (code.claude.com/docs) y de las pantallas reales consultadas el 31 de octubre de 2026.** Las funciones y los nombres de los menús cambian a menudo.
> Para usar Claude Code hace falta una **suscripción de pago** (Pro, Max, Ultra, Team o Enterprise). Si tu pantalla es distinta, sigue los nombres que veas en ella.

| Capítulo | Título | Qué vas a aprender |
|---|---|---|
| 1 | [Qué es Claude Code y dónde se usa](01-what-is.md) | En qué se diferencia del chat, dónde se usa, planes |
| 2 | [Instalar la app de escritorio y la primera sesión](02-install.md) | Instalación e inicio de sesión, pestaña Code, elegir una carpeta, encargar la primera tarea |
| 3 | [Un recorrido por la pantalla](03-screen-tour.md) | Botones de la barra de título, ver lo que cambió (Git), información de la sesión, panel de archivos |
| 4 | [Permisos y deshacer](04-permissions-undo.md) | Modos de permisos, rebobinar, límites de deshacer, historial de Git |
| 5 | [Cómo encargar bien las cosas](05-delegate-well.md) | Hablar con concreción, diseñar 3 plantillas con el modo de planificación, criterios de comprobación y fuentes |
| 6 | [La memoria del proyecto](06-claude-md.md) | Dejar tus reglas escritas en CLAUDE.md y probarlas en una sesión nueva |
| 7 | [Skills, plugins y herramientas externas](07-skills-plugins.md) | Completar la herramienta con 3 skills de organización, ventana de permiso en rutas protegidas, seguridad de los plugins |
| 8 | [Varias tareas a la vez, la nube y la programación](08-parallel-cloud-schedule.md) | Sesiones en paralelo, tres formas de programar, programar el repaso semanal del viernes, la nube |
| 9 | [Coste, datos y seguridad](09-cost-data-safety.md) | Uso, ajuste de entrenamiento y periodo de conservación, experimento de instrucciones ocultas y normas de seguridad |
| 10 | [Usarlo desde el terminal](10-terminal.md) | Instalación y comandos básicos, comprobar la herramienta de organización con claude -p, ir y venir entre la app y el terminal |
| 11 | [Ejercicios prácticos](11-practice.md) | 9 ejercicios y una lista de comprobación; el último es tu propia herramienta de organización con tus notas |
| 12 | [Usarlo como un experto](12-expert.md) | Elegir según la tarea, ir añadiendo de una en una según haga falta, rutina semanal de organización |

## Materiales de práctica

Las prácticas de la etapa 3 se hacen con las 6 notas de abajo. **Todo su contenido es inventado** (una semana de Seoyeon, empleada de una cafetería pequeña, el «Café de la Esquina»). Crea en tu ordenador la carpeta `정리도구/inbox`, descarga los archivos y ponlos dentro. Las fechas y los días de la semana de las notas están inventados para la historia, así que no coinciden con el calendario real de 2026.

| Archivo | Contenido | Primer capítulo donde se usa |
|---|---|---|
| [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) | Notas desordenadas de la reunión semanal | 2 |
| [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) | Apuntes de una clase | 4 |
| [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [10-30](/practice/notes/inbox/회고-2026-10-30.txt) · [10-31](/practice/notes/inbox/회고-2026-10-31.txt) | Balance diario de 3 días | 3 |
| [회의-2026-10-29-임시회의.txt](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) | Nota con una instrucción oculta (para el experimento de seguridad) | 9 |

También publicamos los **resultados** que esta guía obtuvo con la app real de Claude Code. Compáralos con los tuyos. Aunque la petición sea la misma, la forma varía un poco.

| Capítulo | Resultado |
|---|---|
| 2 | [Acta de reunión](/practice/notes/results/2장-회의록-2026-10-27-주간회의.txt) |
| 3 | [Acta con una columna de estado](/practice/notes/results/3장-회의록-상태칸.txt) |
| 4 | [Nota de estudio (antes de rebobinar)](/practice/notes/results/4장-공부노트-2026-10-28.txt) |
| 5 | [Plantilla de acta](/practice/notes/results/5장-양식-회의록.txt) · [Plantilla de nota de estudio](/practice/notes/results/5장-양식-공부노트.txt) · [Plantilla de balance semanal](/practice/notes/results/5장-양식-주간회고.txt) · [Guía de las plantillas](/practice/notes/results/5장-양식-README.txt) |
| 6 | [CLAUDE.md](/practice/notes/results/6장-CLAUDE.md.txt) · [Balance semanal escrito solo con las reglas](/practice/notes/results/6장-주간회고-2026-10-27.txt) |
| 7 | Skills [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt) · [Nota de estudio hecha con el skill](/practice/notes/results/7장-공부노트-스킬로.txt) |
| 9 | [Acta hecha con la nota de la instrucción oculta](/practice/notes/results/9장-회의록-숨은지시-메모.txt) |
| 10 | [Salida de claude -p](/practice/notes/results/10장-claude-p-출력.txt) |

Si todavía no has leído la etapa 2, empieza por la [etapa 2 · Guía de Claude](../10-claude/). Allí se explican la cuenta, los planes y las funciones del chat, y en la etapa 3 se enlazan.
