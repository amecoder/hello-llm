# Capítulo 3. Planificación y especificación — que te entrevisten y escribir SPEC.md

> **En una línea**: si todavía tienes borroso qué vas a crear, no intentes ordenarlo todo tú solo: **haz que Claude te entreviste.** Cuando termine la entrevista, Claude escribe ese contenido en **SPEC.md** (la especificación).
> Una especificación no es «cómo se hará», sino **la promesa de «qué tiene que conseguirse»**. Esa promesa es el criterio para crear, comprobar y revisar en los capítulos 4 a 6.

Este capítulo se escribió con la documentación oficial de Claude Code y GitHub consultada el 1 de noviembre de 2026 y con las explicaciones de los repositorios de spec-kit y OpenSpec. El truco de decir con concreción qué encargar lo aprendiste en el [capítulo 5 de Claude Code](../20-claude-code/05-delegate-well.md). Este capítulo amplía ese truco a la «etapa previa a crear».

## Por qué empezar por la planificación

Como viste en el capítulo 1, el motivo habitual por el que la IA **crea algo distinto de lo que tienes en la cabeza** es que falta información que no se puede saber solo leyendo el repositorio.[^missing] Esa información solo está en tu cabeza: quién lo usa, qué resulta incómodo, qué no se hará.

El tutorial de introducción de GitHub también dice que **antes de escribir código, anotes lo que vas a crear y sigas el progreso.**[^before-code]

Cuanto más concretas, menos idas y venidas de corrección. La documentación oficial dice que desde el principio señales el archivo, cuentes el síntoma y digas cómo se vería «ya está»[^specific].

| Ejemplo flojo | Ejemplo mejor |
|---|---|
| Hazme una página que enseñe las tareas | Una página que reúna las tablas de tareas de las actas de reunión y las muestre por responsable y fecha límite. Cuando esté lista, tienen que verse las 5 tareas de las notas |

Fuente: ejemplo de esta guía (el truco, de la documentación oficial)[^specific]

<Quiz id="ch703-why" />

## Que te entrevisten y escribir SPEC.md

No pasa nada si todavía no tienes claro lo que quieres. La documentación oficial dice que no hace falta dejarlo todo ordenado antes de escribir el prompt: **pídele a Claude que te entreviste.**[^interview] Si traducimos el ejemplo del documento, queda así.

> Quiero crear algo así, pero todavía no lo he pensado a fondo. Entrevístame hasta que puedas escribir la especificación y, cuando esté, escríbela en SPEC.md.

Entonces Claude te pregunta lo que aún no has decidido con **preguntas de opción múltiple.**[^choices] Para un tablero de tareas, la petición sería así.

```
Quiero crear una página web que reúna y muestre las tablas de tareas de las actas de reunión creadas con la Herramienta de orden (정리도구) de la etapa 3. Todavía no lo he pensado a fondo. Entrevístame hasta que puedas escribir la especificación y, cuando esté, escríbela en SPEC.md.
```

Cuando exista SPEC.md, haz que se cree en una **sesión nueva** a partir de ese archivo. Es para empezar con un contexto limpio y con una «definición de terminado» escrita.[^fresh] Así se evita que la larga conversación de la entrevista se mezcle con la creación.

**Cuando termines de crearlo, compruébalo contrastándolo con SPEC.md.** De esto volvemos a hablar en la revisión del capítulo 6.

<Quiz id="ch703-interview" />

## Cómo es una buena especificación

En la especificación se escribe **el comportamiento visible desde fuera.** El manual de OpenSpec dice que una especificación es «una promesa de comportamiento, no un plan de implementación» y que lo que trata de la implementación sin cambiar el comportamiento visible normalmente no se incluye en la especificación.[^contract] spec-kit también dice que, en la fase de especificación, hay que centrarse en **qué y por qué**, y no en la tecnología, y que la elección de tecnología se deja para la siguiente fase, la del plan.[^what-why]

En el SPEC.md de un tablero de tareas entrarían líneas como estas.

| Líneas buenas | Líneas flojas |
|---|---|
| Las tareas de las actas se ven sin que falte ninguna | La tabla se lee con JavaScript |
| Las tareas con la fecha límite vencida se marcan de otra forma | Se ve bonito |
| En vez de nombres de personas, solo se ven los roles | Se crea con un código limpio |

Fuente: ejemplo de esta guía

Las líneas de la izquierda **se pueden comprobar con sí o no.** En el capítulo 5, esas líneas se convierten tal cual en el mecanismo de comprobación.

<Quiz id="ch703-spec" />

## Herramientas de desarrollo guiado por especificaciones

A desarrollar poniendo la especificación en el centro se le llama **desarrollo guiado por especificaciones** (Spec-Driven Development). Es un modo de trabajar en el que primero decides qué y por qué vas a crear, y luego conviertes esa especificación en plan, tareas y código.[^sdd] Hay dos herramientas que ayudan con esto.

| Herramienta | Quién la hizo | Qué hace |
|---|---|---|
| spec-kit | GitHub | Especificación → plan → lista de tareas → implementación, por fases |
| OpenSpec | Fission-AI | Crear, por cada cambio, una carpeta con propuesta, especificación, diseño y tareas |

Fuente: la explicación de cada herramienta (se trasladó solo una parte)[^speckit][^openspec]

OpenSpec hace que la IA escriba los documentos y que **la persona revise el plan antes de que se escriba el código.**[^openspec] spec-kit dice que ejecutes cada fase una a una y que pases a la siguiente **después de revisar el resultado.**[^one-at-a-time] Las dos dejan un punto en el que la persona comprueba por el camino.

Esta guía **no instala ninguna de las dos herramientas.** spec-kit necesita Python 3.11 o superior y una herramienta llamada uv[^speckit-req], y OpenSpec necesita una instalación por terminal (o Node.js 22.12 o superior).[^os-install] Con solo el flujo «entrevista → SPEC.md → sesión nueva» que aprendiste arriba ya puedes poner en práctica la misma idea. Si llegas a hacer un proyecto mayor, míralas entonces.

<Quiz id="ch703-tools" />

## Pruébalo tú

1. Abre en la aplicación de Claude Code la carpeta `할일보드` que hiciste en el capítulo 2.
2. Envía la petición de entrevista de arriba y responde a las preguntas de Claude. Si no lo sabes, puedes decirle «recomiéndame».
3. Lee el SPEC.md creado y, en cada línea, pregúntate: «¿se puede comprobar con sí o no?». Si no, pídele que lo corrija.
4. Comprueba que en SPEC.md no hayan entrado nombres reales ni contactos (porque es un repositorio público).
5. Si te gusta, déjalo registrado (commit).

**Proyecto continuo**: en el capítulo 4, en una sesión nueva, recibirás un plan a partir de SPEC.md y crearás la primera pantalla en una rama.

## Resumen

- El motivo habitual por el que la IA crea algo equivocado es que falta información que está en tu cabeza. Antes de crear, se escribe.
- Si no lo sabes, haz que Claude te entreviste y recibe el resultado como SPEC.md.
- Cuando exista SPEC.md, se crea en una sesión nueva. Cuando termines de crear, contrástalo con SPEC.md.
- En la especificación se escribe el comportamiento visible desde fuera, de modo que se pueda comprobar con sí o no.
- spec-kit y OpenSpec son herramientas que ayudan con la misma idea. Esta guía no las instala.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Spec | Especificación | La promesa escrita de qué tiene que conseguirse |
| SPEC.md | SPEC.md | El archivo en el que se escribe la especificación |
| Spec-Driven Development | Desarrollo guiado por especificaciones | Modo de crear que fija primero la especificación y crea a partir de ella |
| Definition of done | Definición de terminado | El criterio de «ya está» |

<ChapterDone :chapter="703" />

Siguiente capítulo: [Capítulo 4. Crear](04-build.md)

[^missing]: Documentación oficial de Claude Code, «Best practices for Claude Code». "Claude built something different from what you had in mind, or it has to rediscover the same fact at the start of every session. It's missing information it can't get from reading the repo." https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^before-code]: Documentación oficial de GitHub, «Planning your work». "Before you write code, capture what you want to build and track your progress." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (consultado el 2026-11-01)
[^specific]: Documentación oficial de Claude Code, «Best practices for Claude Code». "If you name the file, describe the symptom, and say what "fixed" looks like up front, you usually save yourself a round of corrections later." https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^interview]: Documentación oficial de Claude Code, «Best practices for Claude Code». "When you don't know exactly what you want yet, you don't have to work it all out before you prompt. Ask Claude to interview you instead:" https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^choices]: Documentación oficial de Claude Code, «Best practices for Claude Code». "Claude comes back with multiple-choice questions about the parts you haven't pinned down: per-user versus per-key limits, what happens to requests over the limit, what's out of scope." https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^fresh]: Documentación oficial de Claude Code, «Best practices for Claude Code». "Once `SPEC.md` exists, start a fresh session to build from it, so the build begins with a clean context and a written definition of done." https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^contract]: Documentación de OpenSpec, «Concepts». "A spec is a **behavior contract**, not an implementation plan." / "If implementation can change without changing externally visible behavior, it likely does not belong in the spec." https://github.com/Fission-AI/OpenSpec/blob/main/docs/concepts.md (consultado el 2026-11-01)
[^what-why]: Documentación de spec-kit, «Spec-Driven Development Quickstart». "Creates the feature specification from a natural-language description. Focus on the **what** and **why**, not the tech stack." https://github.com/github/spec-kit/blob/main/docs/quickstart.md (consultado el 2026-11-01)
[^sdd]: spec-kit README. "Define what to build and why, then turn the specification into a plan, tasks, and working code." https://github.com/github/spec-kit (consultado el 2026-11-01)
[^speckit]: spec-kit README. "Spec Kit is an open source toolkit that gives AI coding agents structured processes, reusable templates, and documented outcomes." https://github.com/github/spec-kit (consultado el 2026-11-01)
[^openspec]: OpenSpec README. "**Stay organized** — each change gets its own folder with proposal, specs, design, and tasks" / "Your AI writes these; you review the plan before any code is written." https://github.com/Fission-AI/OpenSpec (consultado el 2026-11-01)
[^one-at-a-time]: spec-kit README. "Create a constitution once per project and repeat the remaining steps for each feature. Run these skills in your agent's chat, not your terminal, one at a time, reviewing each result before continuing." https://github.com/github/spec-kit (consultado el 2026-11-01)
[^speckit-req]: spec-kit README. "You need Python 3.11+, [uv](https://github.github.io/spec-kit/install/uv.html), and a supported AI coding agent on Linux, macOS, or Windows." https://github.com/github/spec-kit (consultado el 2026-11-01)
[^os-install]: OpenSpec README. "Install OpenSpec. On macOS or Linux, in your terminal:" / "(needs Node.js 22.12.0 or higher)" https://github.com/Fission-AI/OpenSpec (consultado el 2026-11-01)
