# Capítulo 1. Qué es Codex y en qué se diferencia de Claude Code

> **En una línea**: Codex es una herramienta de IA creada por OpenAI que **trabaja directamente en una carpeta de tu ordenador**. Ahora se usa **eligiendo «Codex» dentro de la aplicación de escritorio de ChatGPT**.
> Hace casi lo mismo que Claude Code. En esta etapa llevarás a Codex la «Herramienta de orden» (정리 도구) que creaste en los capítulos de Claude Code y aprenderás **solo lo que es distinto**.

Este capítulo se escribió a partir de la documentación oficial de Codex (learn.chatgpt.com) consultada el 2026-11-1. Las funciones y los nombres de los menús cambian con frecuencia.

## Tres modos dentro de la aplicación de ChatGPT

En el escritorio no se instala Codex por separado. **En una sola aplicación de escritorio de ChatGPT** conviven tres modos.[^modes]

| Modo | Cuándo | Ejemplo |
|---|---|---|
| Chat | Preguntar y responder | Preguntas, generar ideas, pulir textos |
| Work | Encargar hasta el resultado final | Informes, presentaciones, análisis de archivos |
| **Codex** | Trabajar directamente en una carpeta, ver información técnica | Corregir archivos, comprobar los cambios |

Fuente: documentación oficial de Codex (solo una parte)[^modes]

Work y Codex se solapan en lo que pueden hacer. La diferencia es **cómo lo muestran**. Work oculta la información técnica, como Git o los comandos, y muestra el resultado terminado. Codex muestra incluso qué ha cambiado (diff).[^compare]

Puedes usar Codex aunque no programes. La propia documentación oficial dice que, si Codex te resulta cómodo, puedes seguir usándolo para investigación, documentos, presentaciones y trabajos parecidos.[^prefer] Esta guía eligió Codex porque **permite comprobar directamente los cambios**. Si en los capítulos de Claude Code adquiriste el hábito de revisar si el resultado de organizar notas coincide con el original, puedes seguir con él en Codex.

<Quiz id="ch501-modes" />

## En qué se parece y en qué se diferencia de Claude Code

Los conceptos que aprendiste en Claude Code existen casi todos en Codex. **Solo cambian el nombre y el lugar**.

| Claude Code | Codex | Dónde se aprende |
|---|---|---|
| Pestaña Code de la aplicación de Claude | Elegir «Codex» en la aplicación de ChatGPT | Capítulo 2 |
| `CLAUDE.md` | `AGENTS.md` | Capítulo 3 |
| Modo de permisos (manual, etc.) | Menú de permisos (Ask for approval, etc.) | Capítulo 4 |
| Retroceso (puntos de control) | Deshacer con Git | Capítulo 4 |
| `.claude/skills` · `/nombre` | `.agents/skills` · `$nombre` | Capítulo 5 |
| Tareas programadas | Scheduled | Capítulo 6 |
| `claude -p` | `codex exec` | Capítulo 7 |

Fuente: resumen de esta guía (la documentación oficial no compara directamente las dos herramientas)

**La mayor diferencia es el nombre del archivo de reglas.** Codex lee `AGENTS.md` antes de empezar a trabajar.[^agents] Codex no lee el `CLAUDE.md` de Claude Code si lo dejas tal cual. Por eso, al trasladar la herramienta de orden, lo primero que se cambia es este archivo (capítulo 3).

También hay una función que hace el traslado por ti. La opción **Importar** (Import) de la aplicación de ChatGPT traslada a Codex los archivos de reglas, las habilidades y los ajustes de Claude Code.[^import] Esta guía los traslada **uno por uno a mano** para que veas directamente qué cambia y cómo. La importación se presenta al final del capítulo 3.

<Quiz id="ch501-compare" />

## Dónde se usa y planes

Codex se usa en varios lugares.

- **Aplicación de escritorio de ChatGPT**: hay versiones para macOS, Windows y Linux.[^desktop] Esta guía empieza por aquí.
- **Terminal (Codex CLI)**: se usa en una ventana de comandos.[^cli] Se trata en el capítulo 7.
- **Nube**: cada tarea tiene su propio espacio de trabajo y sigue trabajando mientras tu ordenador está dormido.[^cloud] Se presenta en el capítulo 6.

El alcance de lo que puedes usar depende del plan.

| Plan | Precio al mes | Qué se puede usar en Codex |
|---|---|---|
| Free | $0 | Un modelo ligero en la aplicación de escritorio, despliegue gradual |
| Go | $8 | Igual que Free |
| Plus | $20 | También en la web, la terminal, el editor e iOS, y un modelo más potente |
| Pro | Desde $100 | Todo lo de Plus y más uso |

Fuente: información de precios de la documentación oficial de Codex (solo una parte)[^pricing]

**Free y Go tienen «despliegue gradual»** (rollout: forma de ir abriendo una función cuenta por cuenta, por turnos). Si no ves Codex en tu pantalla, puede que todavía no se haya abierto. Las prácticas de esta guía se basan en **Plus o superior**.

El uso **se comparte con ChatGPT Work.** Si encargas muchas tareas grandes a Work, baja también la parte que te queda para Codex.[^shared] El uso se trata más a fondo en el capítulo 8.

<Quiz id="ch501-where" />

## Lo que harás en esta etapa

Vas a traer tal cual la carpeta «Herramienta de orden» de los capítulos de Claude Code y a hacer que funcione en Codex. Si te saltaste los capítulos de Claude Code, puedes descargar los mismos archivos de partida en «Material de práctica» (연습 자료) del [índice de Codex de la etapa 3](./).

1. Capítulo 2: abre Codex en la aplicación y organiza una nota de reunión.
2. Capítulo 3: pasa `CLAUDE.md` a `AGENTS.md` y comprueba si cumple las reglas sin que se las repitas.
3. Capítulo 4: aprende el menú de permisos, ver los cambios y deshacer.
4. Capítulo 5: traslada 3 habilidades y crea la retrospectiva semanal con una sola línea, `$weekly-review`.
5. Capítulos 6~8: ordena las programaciones, la terminal y la seguridad comparándolas con Claude Code.

**No hace falta que te lo aprendas todo desde el principio.** Si repites en Codex una vez lo que ya hiciste en Claude Code, las diferencias se ven solas.

## Resumen

- Codex se usa eligiendo «Codex» dentro de la aplicación de escritorio de ChatGPT. Chat, Work y Codex están en una sola aplicación.
- Codex muestra información técnica, como los cambios. Se puede usar sin programar.
- Los conceptos son casi los mismos que en Claude Code. Cambian los nombres: el archivo de reglas es `AGENTS.md` y las habilidades se invocan con `$nombre`.
- Free y Go tienen despliegue gradual. Las prácticas se basan en Plus o superior, y el uso se comparte con Work.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Codex | Codex | Agente de programación de OpenAI. Se elige dentro de la aplicación de ChatGPT |
| ChatGPT Work | ChatGPT Work | Modo de ChatGPT en el que encargas hasta el resultado final. Oculta la información técnica |
| AGENTS.md | AGENTS.md | Archivo de reglas que Codex lee antes de trabajar |
| Rollout | Despliegue gradual | Forma de abrir una función cuenta por cuenta, por turnos |

<ChapterDone :chapter="501" />

Siguiente capítulo: [Capítulo 2. Empezar con Codex en la aplicación de ChatGPT](02-first-task.md)

[^modes]: Documentación oficial de Codex, «Use ChatGPT». "Use Chat for a question or back-and-forth. Turn on Work in the switcher when you want ChatGPT to carry a larger task through to a reviewable result." / "Select Codex when you want developer views or more technical detail, especially for software development." https://learn.chatgpt.com/docs/use-chatgpt (consultado el 2026-11-01)
[^compare]: Documentación oficial de Codex, «Use ChatGPT». "ChatGPT Work and Codex have overlapping capabilities." / "Hide technical details like Git or shell commands" / "See developer details, including diff and review views" https://learn.chatgpt.com/docs/use-chatgpt (consultado el 2026-11-01)
[^prefer]: Documentación oficial de Codex, «Use ChatGPT». "If you prefer Codex, you can keep using it for research, documents, presentations, and other knowledge work." https://learn.chatgpt.com/docs/use-chatgpt (consultado el 2026-11-01)
[^agents]: Documentación oficial de Codex, «Custom instructions with AGENTS.md». "Codex reads `AGENTS.md` files before doing any work." https://learn.chatgpt.com/docs/agent-configuration/agents-md (consultado el 2026-11-01)
[^import]: Documentación oficial de Codex, «Import from another agent». "The desktop app can import from **Claude Code**, **Claude Cowork**, or **Cursor**." https://learn.chatgpt.com/docs/import (consultado el 2026-11-01)
[^desktop]: Documentación oficial de Codex, «Quickstart». "The ChatGPT desktop app is available for macOS, Windows, and Linux." https://learn.chatgpt.com/docs/quickstart (consultado el 2026-11-01)
[^cli]: Documentación oficial de Codex, «Codex CLI». "Inspect code, make changes, run commands, and automate repeatable work without leaving your terminal." https://learn.chatgpt.com/docs/codex/cli (consultado el 2026-11-01)
[^cloud]: Documentación oficial de Codex, «Codex Cloud». "Each task has its own workspace and can keep working while your computer is asleep." https://learn.chatgpt.com/docs/cloud (consultado el 2026-11-01)
[^pricing]: Documentación oficial de Codex, «Pricing». "GPT-6 Luna at Standard speed in the desktop app, subject to rollout" / "Codex on the web, in the CLI, in the IDE extension, and on iOS" / "Plans at $100, $200, or $500 USD per month" https://learn.chatgpt.com/docs/pricing (consultado el 2026-11-01)
[^shared]: Documentación oficial de Codex, «Pricing». "ChatGPT Work usage inside ChatGPT uses the same pricing, credits, and usage limits as Codex." https://learn.chatgpt.com/docs/pricing (consultado el 2026-11-01)
