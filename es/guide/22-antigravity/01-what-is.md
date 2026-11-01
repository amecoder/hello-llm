# Capítulo 1. Qué es Antigravity y en qué se diferencia de las dos herramientas anteriores

> **En una línea**: Antigravity es una herramienta de IA creada por Google que **trabaja directamente en una carpeta de tu ordenador**. Tiene una aplicación de escritorio y un programa de terminal, `agy`.
> Se diferencia de las dos herramientas anteriores en dos cosas. Puedes usar **todas las funciones incluso con una cuenta de Google gratuita**, y **lee tal cual el `AGENTS.md` y el `.agents/skills`** que creaste en la etapa de Codex.

Este capítulo se escribió a partir de la documentación oficial de Antigravity (antigravity.google/docs) consultada el 2026-11-1. Las funciones y los nombres de los menús cambian con frecuencia.

## Cuatro formas

Antigravity tiene cuatro formas, según dónde se use.[^surfaces]

| Forma | Qué hace | En esta guía |
|---|---|---|
| Antigravity App | Encargar trabajo a los agentes desde el escritorio y supervisarlos | Desde el capítulo 2 |
| Antigravity CLI (`agy`) | Usarlo en la terminal | Capítulo 6 |
| Extensión de editor · Antigravity IDE | Usarlo dentro de un editor de código | No se trata |
| SDK | Crear agentes con Python | No se trata |

Fuente: documentación oficial de Antigravity (resumen de esta guía)[^surfaces][^ide][^sdk]

La aplicación y la CLI ejecutan **el mismo agente**, así que la mayoría de las funciones están en las dos.[^same] Si inicias sesión en un lugar, las demás formas de mi ordenador usan el mismo inicio de sesión.[^auth]

<Quiz id="ch601-surfaces" />

## Todas las funciones, incluso gratis

Antigravity da **todas las funciones en todos los planes**. Incluye las tareas programadas y la CLI.[^all-features] Lo que cambia según el plan es el **uso** y los **modelos que puedes elegir**.

| Plan | Uso |
|---|---|
| Gratuito (cuenta que no es Google AI Pro ni Ultra) | Se recarga cada semana |
| Google AI Pro | Se recarga cada 5 horas hasta el límite semanal |
| Google AI Ultra | El más generoso, se recarga cada 5 horas |

Fuente: documentación oficial de Antigravity (solo una parte)[^plans]

El uso baja según **la cantidad de trabajo que hizo el agente**, no según el número de preguntas. Si las tareas son fáciles, puedes preguntar más veces.[^work]

Con una cuenta personal de Google (por ejemplo, @gmail.com) puedes usarlo gratis.[^personal] Eso sí, tienes que tener **18 años o más** y estar en un país donde esté disponible (Corea del Sur figura en la lista).[^age][^country] Las cuentas gestionadas por una empresa o un centro educativo no son cuentas personales, así que el administrador tiene que permitirlo.[^workspace]

**De las tres herramientas, Antigravity es la única con la que puedes usar todas las funciones con una cuenta gratuita.** Claude Code necesita una suscripción de pago, y el capítulo de Codex se basó en Plus o superior. Si todavía no tienes un plan de pago, puedes hacer las prácticas desde esta etapa.

<Quiz id="ch601-plans" />

## Elegir el modelo

En Antigravity puedes elegir, además de Gemini, modelos de otras empresas, y también decidir el nivel de razonamiento (Low, Medium, High).[^models] Los modelos que puedes elegir dependen del plan.

| Modelo | Gratuito | Pro | Ultra |
|---|---|---|---|
| Gemini 3.8 Flash | ✅ | ✅ | ✅ |
| Gemini 4 Argon | ❌ | ✅ | ✅ |
| Claude Sonnet 5.5 | ❌ | ✅ | ✅ |

Fuente: documentación oficial de Antigravity (solo una parte; el Claude de Pro excluye la versión de prueba)[^model-table]

Indica que la serie Claude 4.6, que se podía elegir gratis, **se retirará el 2026-11-2** (según lo consultado el 2026-11-01).[^removed] Por eso, con una cuenta gratuita, piensa que practicas con Gemini 3.8 Flash.

<Quiz id="ch601-models" />

## En qué se parece y en qué se diferencia de Claude Code y Codex

| | Claude Code | Codex | Antigravity |
|---|---|---|---|
| Escritorio | Pestaña Code de la aplicación de Claude | Codex en la aplicación de ChatGPT | Aplicación independiente |
| Archivo de reglas | `CLAUDE.md` | `AGENTS.md` | `AGENTS.md` · `GEMINI.md` |
| Habilidades de esta carpeta | `.claude/skills` | `.agents/skills` | `.agents/skills` |
| Invocar una habilidad | `/nombre` | `$nombre` | `/nombre` |
| Terminal | `claude -p` | `codex exec` | `agy -p` |
| Práctica gratuita | No | Limitada | Sí |

Fuente: resumen de esta guía (las fuentes están en las notas al pie de cada capítulo)

**La mayor diferencia es que "no hace falta trasladar nada".** Antigravity lee el `AGENTS.md` y el `GEMINI.md` de la carpeta, y la carpeta `.agents/`.[^discovery] Son los mismos nombres y lugares de los archivos que creaste en la etapa de Codex. Lo comprobarás de verdad en el capítulo 3.

<Quiz id="ch601-compare" />

## Lo que harás en esta etapa

Abres en Antigravity **tal cual** la carpeta «Herramienta de orden» (정리도구) con la que terminaste el capítulo 5 de Codex. Si te saltaste Codex, puedes descargar los mismos archivos de partida en «Material de práctica» (연습 자료) del [índice de Antigravity de la etapa 3](./).

1. Capítulo 2: instala la aplicación, abre la carpeta como proyecto y encarga la primera organización.
2. Capítulo 3: comprueba si cumple las reglas y las habilidades sin trasladarlas.
3. Capítulos 4~5: compara los permisos y cómo deshacer, y la planificación y la programación, con Claude Code y Codex.
4. Capítulo 6: aprende la terminal `agy -p` y sus trampas.
5. Capítulo 7: ordena costes, datos y seguridad, y decide cómo usar juntas las tres herramientas.

## Resumen

- Antigravity tiene cuatro formas: aplicación, CLI, editor y SDK. La aplicación y la CLI son el mismo agente.
- Todos los planes tienen todas las funciones. Lo que cambia es el uso y los modelos. El gratuito se recarga cada semana.
- Con 18 años o más y una cuenta personal de Google, puedes empezar gratis.
- Lee `AGENTS.md` y `.agents/skills` con los mismos nombres y lugares que Codex.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Antigravity | Antigravity | Herramienta de agente de programación de Google |
| `agy` | `agy` | Programa de terminal de Antigravity |
| Quota | Cuota | Uso del que dispones en un periodo determinado |
| GEMINI.md | GEMINI.md | Otro nombre de archivo de reglas que lee Antigravity |

<ChapterDone :chapter="601" />

Siguiente capítulo: [Capítulo 2. Instalar la aplicación y la primera organización](02-first-task.md)

[^surfaces]: Documentación oficial de Antigravity, «Choose your Antigravity». "Evolved from the Agent Manager into a standalone desktop command center (Antigravity App) alongside native terminal, editor, and programmatic SDK interfaces, Antigravity supports both synchronous interactive pair-programming and asynchronous background agent workflows independent of a single IDE." https://antigravity.google/docs/overview (consultado el 2026-11-01)
[^ide]: Documentación oficial de Antigravity, «Get started». "Install the official Google Antigravity extension for your preferred editor, or download the standalone **Antigravity IDE**:" https://antigravity.google/docs/getting-started (consultado el 2026-11-01)
[^sdk]: Documentación oficial de Antigravity, «Google Antigravity SDK». "The Google Antigravity SDK is a Python SDK for building autonomous AI agents powered by Antigravity and Gemini." https://antigravity.google/docs/sdk/overview (consultado el 2026-11-01)
[^same]: Documentación oficial de Antigravity, «Antigravity features». "The Antigravity App and the Antigravity CLI run the same agent, so most features work on both." https://antigravity.google/docs/features (consultado el 2026-11-01)
[^auth]: Documentación oficial de Antigravity, «Authenticate». "Signing in on one local surface shares your credentials across your local environment." https://antigravity.google/docs/install (consultado el 2026-11-01)
[^all-features]: Documentación oficial de Antigravity, «Plans». "All plans receive the following baseline features:" / "Access to all product features, such as scheduled tasks and the CLI" https://antigravity.google/docs/plans (consultado el 2026-11-01)
[^plans]: Documentación oficial de Antigravity, «Plans». "The highest, most generous quota, refreshed every five hours" / "A high, generous quota, refreshed every five hours until the weekly limit is reached" / "A meaningful quota, refreshed weekly" https://antigravity.google/docs/plans (consultado el 2026-11-01)
[^work]: Documentación oficial de Antigravity, «Plans». "As a result, you receive more prompts when your tasks are straightforward and the agent can complete the work quickly, while more complex tasks consume more quota." https://antigravity.google/docs/plans (consultado el 2026-11-01)
[^personal]: Documentación oficial de Antigravity, «FAQ». "Personal Google Accounts (such as `@gmail.com` addresses) can use Google Antigravity on any plan, including the free tier." https://antigravity.google/docs/faq (consultado el 2026-11-01)
[^age]: Documentación oficial de Antigravity, «FAQ». "Currently, Antigravity is unavailable to users under 18." https://antigravity.google/docs/faq (consultado el 2026-11-01)
[^workspace]: Documentación oficial de Antigravity, «FAQ». "Work or school accounts managed by an organization, such as Google Workspace accounts, aren’t personal Google Accounts." https://antigravity.google/docs/faq (consultado el 2026-11-01)
[^models]: Documentación oficial de Antigravity, «Choose a model». "You can switch models at any time and choose a thinking level (`Low`, `Medium`, or `High`) to balance response speed for quick edits against deeper multi-step reasoning for complex architecture and debugging tasks." https://antigravity.google/docs/models (consultado el 2026-11-01)
[^model-table]: Documentación oficial de Antigravity, «Choose a model». Las filas de Gemini 3.8 Flash, Gemini 4 Argon y Claude Sonnet 5.5 de la tabla de modelos y "\*\* Available on Google AI Pro for non-trial subscriptions only." https://antigravity.google/docs/models (consultado el 2026-11-01)
[^removed]: Documentación oficial de Antigravity, «Choose a model». "\* Will be removed on November 2, 2026." https://antigravity.google/docs/models (consultado el 2026-11-01)
[^discovery]: Documentación oficial de Antigravity, «Customization discovery». "**Workspace**: the `.agents/` folder in your project, plus `AGENTS.md` and `GEMINI.md` files." https://antigravity.google/docs/customization-discovery (consultado el 2026-11-01)
[^country]: Documentación oficial de Antigravity, «FAQ». "Google Antigravity is available in the following countries and territories." / "South Korea" https://antigravity.google/docs/faq (consultado el 2026-11-01)
