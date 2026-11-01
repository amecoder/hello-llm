# Capítulo 1. Qué significa crear con la IA: el SDLC de un vistazo

> **En una línea**: el software pasa por **planificar → crear → revisar → comprobar → publicar → operar** antes de llegar al mundo. A este recorrido se le llama SDLC.
> La IA pone las manos en cada etapa, pero **decidir qué crear y comprobar el resultado es cosa de las personas.** En la etapa 4 aprenderás este reparto.

Este capítulo está escrito a partir de la documentación oficial de GitHub y de la documentación oficial de Claude Code consultadas el 1 de noviembre de 2026. Es una etapa para quien ya ha trabajado con carpetas usando Claude Code, Codex y Antigravity en la etapa 3. Si todavía no has visto la etapa 3, empieza por la [etapa 3 · Claude Code](../20-claude-code/).

## Qué es el SDLC

El SDLC (ciclo de vida del desarrollo de software, Software Development Life Cycle) son las etapas por las que pasa un proyecto **desde la primera idea hasta que el software funciona de verdad.**[^sdlc] GitHub divide este proceso en seis etapas.

| Etapa | Qué se hace | En esta guía |
|---|---|---|
| Planificar (Plan) | Apuntar lo que hay que hacer y hacerle seguimiento | Capítulo 3 |
| Crear (Create) | Escribir código y registrar los cambios | Capítulo 4 |
| Revisar (Review) | Proponer cambios y recibir opiniones | Capítulo 6 |
| Comprobar (Test) | Revisar automáticamente antes de unir los cambios | Capítulo 5 |
| Publicar (Deploy) | Sacarlo para que la gente lo use | Capítulo 7 |
| Operar (Operate) | Vigilar y seguir corrigiendo | Capítulos 8 y 9 |

Fuente: documentación oficial de GitHub (resumen de esta guía)[^six]

Esta guía trata primero la comprobación (capítulo 5) y después la revisión (capítulo 6). Es para ver juntos los resultados de la comprobación cuando revisas. «Operar», en GitHub, tiene un sentido amplio que incluye la monitorización, la gestión de dependencias y la seguridad, pero esta guía solo llega hasta mejorar con incidencias (capítulo 8) y la seguridad (capítulo 9).

**No hace falta usar todas las etapas desde el principio.** GitHub también dice que mucha gente empieza con un repositorio y unas cuantas tareas y lo va ampliando según crece el proyecto.[^start-small] Esta guía también da una vuelta por las seis etapas con una sola página web pequeña.

<Quiz id="ch701-sdlc" />

## Cómo trabaja la IA

Claude Code resuelve el trabajo que se le encarga en tres fases: **reunir contexto → actuar → comprobar el resultado.**[^loop] Buscar y leer archivos, modificarlos y ejecutar pruebas para comprobar su propio trabajo entran dentro de este ciclo.

El **modo de planificación** que usaste en la etapa 3 vuelve a ser importante aquí. En el modo de planificación, Claude lee archivos y solo presenta un plan, y no modifica nada hasta que yo lo apruebo.[^plan]

El documento oficial de buenas prácticas señala estas causas típicas de que el trabajo no salga como se esperaba.[^fail]

- **Creó algo distinto de lo que yo tenía en la cabeza.** Faltaba información que no se puede saber con solo leer el repositorio. → Se trata en el capítulo 3, «Planificación y especificación».
- **Dijo que había terminado, pero faltaba.** No tenía forma de comprobarlo por sí misma. → Se trata en el capítulo 5, «Comprobación y pruebas».

En los dos casos se puede reducir el problema si la persona le entrega **información y un mecanismo de comprobación.** Por eso, en la etapa 4 aprenderás, más que a escribir código, **qué entregarle a la IA y qué pedirle a cambio para comprobarlo.**

<Quiz id="ch701-ai" />

## Lo que hacen las personas

Aunque la IA ponga las manos, hay cosas que las personas tienen que hacer sí o sí.

| Etapa | Lo que hace la persona |
|---|---|
| Planificar | Decidir qué crear y por qué |
| Crear | Leer el plan y aprobarlo |
| Comprobar | Mirar las pruebas (el comando y su resultado) y juzgar |
| Revisar | Decidir si se une |
| Publicar | Juzgar si se puede hacer público y pulsar el botón |

Fuente: resumen de esta guía (la base está en las notas al pie de cada capítulo)

La documentación oficial también dice que **la responsabilidad de revisar, antes de aprobarlos, si el código y los comandos propuestos son seguros es del usuario.**[^responsible] Y las acciones que afectan a sistemas externos, como publicar, no se pueden deshacer con el rebobinado (los puntos de control) de Claude Code.[^no-checkpoint] Por eso, cuanto más sale una acción hacia el exterior, más tiene que comprobarla y pulsarla una persona.

<Quiz id="ch701-human" />

## Lo que crearemos en esta etapa

Los «Pruébalo tú» de la etapa 4 se hacen con un único ejemplo que continúa capítulo a capítulo. Es **una página web que reúne y muestra las tareas de las actas de reunión que creó la herramienta de orden de la etapa 3**, que se llama «Tablero de tareas del Café de la Esquina».

La serie de introducción oficial de GitHub también sigue hasta el final la creación de un sitio web pequeño: **planifica, escribe código, revisa los cambios y lo publica como sitio web de verdad.**[^journey] Esta guía sigue el mismo orden, pero en el lugar de la IA usa el Claude Code que aprendiste en la etapa 3.

| Capítulo | Qué se hace en el tablero de tareas |
|---|---|
| 2 | Se crea el repositorio en GitHub |
| 3 | Te entrevistan sobre qué mostrar y escribes SPEC.md |
| 4 | Recibes un plan y creas la primera pantalla en una rama |
| 5 | Se crea un mecanismo para comprobar que el número de tareas es correcto |
| 6 | Se crea una PR y se recibe revisión |
| 7 | Se publica con GitHub Pages |
| 8 | Se apunta la siguiente mejora como incidencia y se da otra vuelta |
| 9 | Antes de publicar, se revisan los valores secretos y los datos personales |

Fuente: plan de esta guía

**No hace falta que sea perfecto desde el principio.** Si vas capítulo a capítulo, al final tendrás tu propia página con una dirección de internet.

## Resumen

- El SDLC son las etapas desde la idea hasta que el software funciona de verdad. GitHub las divide en seis: planificar, crear, revisar, comprobar, publicar y operar.
- No hace falta usarlas todas desde el principio. Se empieza pequeño y se va ampliando.
- Claude Code trabaja reuniendo contexto → actuando → comprobando el resultado. Las causas habituales de fallo son la información que falta y la ausencia de un mecanismo de comprobación.
- Decidir qué crear, juzgar mirando las pruebas y decidir si se une y se publica es cosa de las personas.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| SDLC | ciclo de vida del desarrollo de software (SDLC) | Las etapas por las que pasa el software de la idea a la operación |
| Repository | repositorio | El sitio donde se guardan los archivos del proyecto y el registro de cambios |
| Deploy | publicar (despliegue) | Sacar lo creado para que la gente lo use |
| Plan mode | modo de planificación | La forma de Claude Code de mostrar solo el plan antes de modificar |

<ChapterDone :chapter="701" />

Siguiente capítulo: [Capítulo 2. Crear un repositorio en GitHub](02-repository.md)

[^sdlc]: Documentación oficial de GitHub, «What is GitHub?». "The software development life cycle describes the stages a software project moves through, from the first idea to running code in production." https://docs.github.com/en/get-started/start-your-journey/what-is-github (consultado el 2026-11-01)
[^six]: Documentación oficial de GitHub, «What is GitHub?». "Track your work, set milestones, and organize long-term projects." / "Write and store code, develop new features safely, and create a clear timeline of your changes." / "Suggest changes to your project, discuss your updates with reviewers, and apply feedback." / "Automate checks to validate every change before it merges." / "Ship software with automated deployment workflows and release management." / "Monitor applications, manage dependencies, and find and fix security issues." https://docs.github.com/en/get-started/start-your-journey/what-is-github (consultado el 2026-11-01)
[^start-small]: Documentación oficial de GitHub, «What is GitHub?». "You do not need to use every stage at once. Many people start with a repository and a few issues, then expand their use of the platform as their project grows." https://docs.github.com/en/get-started/start-your-journey/what-is-github (consultado el 2026-11-01)
[^loop]: Documentación oficial de Claude Code, «How Claude Code works». "When you give Claude a task, it works through three phases: **gather context**, **take action**, and **verify results**." https://code.claude.com/docs/en/how-claude-code-works (consultado el 2026-11-01)
[^plan]: Documentación oficial de Claude Code, «Common workflows». "For changes you want to review before they touch disk, switch to plan mode. Claude reads files and proposes a plan but makes no edits until you approve." https://code.claude.com/docs/en/common-workflows (consultado el 2026-11-01)
[^fail]: Documentación oficial de Claude Code, «Best practices for Claude Code». "It's missing information it can't get from reading the repo." / "Claude said it was done and it wasn't quite, usually because it had no way to check its own work." https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^responsible]: Documentación oficial de Claude Code, «Security». "You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security (consultado el 2026-11-01)
[^no-checkpoint]: Documentación oficial de Claude Code, «How Claude Code works». "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed." https://code.claude.com/docs/en/how-claude-code-works (consultado el 2026-11-01)
[^journey]: Documentación oficial de GitHub, «Creating a repository for your project on GitHub». "By the end of the journey, you'll plan work, write code, review changes, and deploy your code to a live website." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (consultado el 2026-11-01)
