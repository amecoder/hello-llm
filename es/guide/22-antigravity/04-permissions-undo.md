# Capítulo 4. Permisos y cómo deshacer — cuatro preajustes y cuidado con descartar

> **En una línea**: los permisos de la aplicación se eligen con **cuatro preajustes** (Request Review, Default, Auto y Turbo). Al principio empieza con **Request Review** o **Default**.
> **Descartar en la ventana Review se aplica al instante, sin confirmación.** En el terminal existe `/rewind`, pero la red de seguridad más fiable sigue siendo el historial de Git.

Este capítulo se escribió a partir de la documentación oficial de Antigravity consultada el 1 de noviembre de 2026. Por qué hacen falta los permisos se explicó en el [capítulo 4 de Claude Code](../20-claude-code/04-permissions-undo.md). Vale para una cuenta personal de Google; en las cuentas de empresa y de organización la pantalla de permisos es distinta.[^business]

## Los cuatro preajustes de permisos

| Preajuste | Ejecución de comandos | Cuándo |
|---|---|---|
| Request Review | Pide permiso para todos los comandos | Al principio, en tareas delicadas |
| Default | Dentro del vallado no pregunta, y pregunta al salir fuera | Cuando ya te has acostumbrado |
| Auto (Preview) | Los comandos seguros los hace solo y pregunta solo por los peligrosos | Función en pruebas |
| Turbo | Ejecuta todo sin límites | Casi no se usa |

Fuente: documentación oficial de Antigravity (solo una parte)[^presets]

**Turbo** puede leer y escribir en todo el ordenador, sin vallado.[^turbo] Para ordenar notas no hace falta.

Hay tres sitios donde cambiarlo.[^where]

- Todos los proyectos: **Settings → General → Global Permissions → Permission Preset**
- Un solo proyecto: **Settings → Projects**
- La conversación actual: el selector de permisos del cuadro de entrada

Por defecto el proyecto sigue el ajuste global (**Inherit Global**), pero también puedes fijarlo por proyecto.[^inherit] Es decir, puedes dejar más flojo un proyecto de confianza y más estricto una carpeta en la que no confías.[^per-project] La documentación oficial no dice con qué preajuste empieza al principio una cuenta personal. Al abrir la aplicación, compruébalo primero.

<Quiz id="ch604-presets" />

## El vallado y las reglas básicas

La aplicación tiene un **vallado para el terminal** (sandbox), y la documentación oficial explica que **viene activado por defecto**.[^sandbox] Eso sí, depende del preajuste. En Default y Auto está activado, y en Request Review y Turbo está desactivado.[^by-preset] Los comandos dentro del vallado solo usan la carpeta de trabajo y la carpeta temporal, y **no pueden salir a internet.**[^no-net] También se bloquean los archivos delicados, como `~/.ssh` o `.env`.[^sensitive]

Hay además reglas básicas que valen con cualquier preajuste.

- Leer y escribir archivos **dentro** de la carpeta del proyecto no pregunta. Los archivos de **fuera** necesitan permiso.[^files]
- Para leer y manejar páginas web, lo predeterminado es «preguntar».[^web]
- Si las reglas se solapan, se decide en este orden: bloquear (Deny) > preguntar (Ask) > permitir (Allow).[^order]

Lo que permites durante una conversación puede quedar guardado, de modo que el agente va aprendiendo acciones de confianza.[^persist] Es cómodo, pero recuerda qué has permitido.

**Los valores por defecto del terminal (`agy`) son distintos.** El terminal pregunta antes de escribir archivos, ejecutar comandos o usar herramientas web[^cli-ask], y el vallado está **desactivado por defecto.**[^cli-sandbox] Se trata en el capítulo 6.

<Quiz id="ch604-sandbox" />

## Deshacer

**Ten cuidado con descartar en la ventana Review.** «Discard unstaged changes» se aplica **al instante, sin confirmación**, e incluso borra los archivos nuevos que no estaban registrados.[^discard] La vista por defecto incluye también lo que cambiaste tú ([capítulo 2](02-first-task.md)), así que antes de descartar mira bien qué contiene.

En el terminal existe `/rewind` (o `/undo`), que devuelve la conversación a un estado estable anterior.[^rewind] El nombre se parece al de rebobinar de Claude Code, pero la documentación oficial solo explica que se deshace la «conversación». No dice si también se deshacen los archivos.

Parece que la aplicación también tiene una función para deshacer. En el registro de cambios oficial se dice que la ventana de confirmación «Confirm Undo» ahora ofrece la opción de deshacer solo la conversación.[^undo] Pero **no encontré ningún documento que explique cómo se usa**, y esta guía tampoco lo ha podido comprobar en la aplicación.

Por eso, en esta etapa también se usa el mismo hábito que en el capítulo 4 de Codex.

1. Antes de encargar: registra con Git el estado actual.
2. Encárgalo.
3. Mira solo lo que ha cambiado con Agent Edits de la ventana Review.
4. Si está bien, vuelve a registrar; si no, deshaz.

<Quiz id="ch604-undo" />

## Practica tú mismo

1. En Settings → General → Global Permissions, comprueba el preajuste actual. Si es la primera vez, déjalo en Request Review o Default.
2. Registra con Git el estado actual de la carpeta de la herramienta de orden.
3. Pide en el acta del capítulo 2: «Añade arriba una línea “Fecha de redacción: la fecha de hoy”».
4. Mira la ventana Review con Agent Edits y comprueba la línea que ha cambiado.

**Proyecto continuo**: en el capítulo 5 verás el plan (`/plan`), la programación (`/schedule` y Automations), el navegador (`/browser`) y el objetivo (`/goal`).

## Resumen

- Los permisos de la aplicación son cuatro preajustes. Al principio, Request Review o Default; Turbo no se usa.
- El vallado de la aplicación se activa en los preajustes Default y Auto y bloquea internet. En el terminal está desactivado por defecto.
- Los archivos dentro de la carpeta del proyecto no preguntan; los de fuera y la web, sí.
- Descartar en la ventana Review borra al instante sin confirmar. Antes de encargar, registra el estado con Git.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Permission preset | Preajuste de permisos | Un paquete que fija los permisos de una vez |
| Sandbox | Entorno aislado (sandbox) | Un vallado que limita lo que un comando puede tocar |
| Discard | Descartar | Tirar lo que ha cambiado |
| `/rewind` | Rebobinar | Comando del terminal que devuelve la conversación a un estado anterior |

<ChapterDone :chapter="604" />

Siguiente capítulo: [Capítulo 5. Plan, programación, navegador y objetivo](05-plan-schedule.md)

[^business]: Documentación oficial de Antigravity, «Agent settings». "Business and enterprise accounts use the following settings instead of the permission presets above." https://antigravity.google/docs/agent-settings (consultado el 2026-11-01)
[^presets]: Documentación oficial de Antigravity, «Agent settings». "**Request Review** (_“Every command requires approval.”_): The sandbox is off and every terminal command requires approval." / "**Default** (_“Ask before sensitive operations.”_): Commands run without prompting inside the [Terminal sandbox](https://antigravity.google/docs/sandbox); running outside the sandbox requires approval." / "When a command needs to run outside the sandbox, Antigravity automatically evaluates it so safe, reversible commands proceed without prompting while risky or irreversible actions still pause for your approval." https://antigravity.google/docs/agent-settings (consultado el 2026-11-01)
[^turbo]: Documentación oficial de Antigravity, «Agent settings». "**Turbo** (_“Run all commands without restrictions.”_): All commands run without prompting with no isolation or restrictions, and the agent has full read and write access to your filesystem." https://antigravity.google/docs/agent-settings (consultado el 2026-11-01)
[^where]: Documentación oficial de Antigravity, «Agent settings». "**For all projects**: Open **Settings** > **General** > **Global Permissions** > **Permission Preset**." / "**From the message box** (`v2.23.0+`): Choose a preset from the permissions picker." / "**For a single project**: Override the global preset under **Settings** > **Projects**. Projects default to **Inherit Global**, which follows your global preset." https://antigravity.google/docs/agent-settings (consultado el 2026-11-01)
[^inherit]: Documentación oficial de Antigravity, «Agent settings». "Projects default to **Inherit Global**, which follows your global preset." https://antigravity.google/docs/agent-settings (consultado el 2026-11-01)
[^per-project]: Documentación oficial de Antigravity, «Antigravity features». "This means you can have a more permissive setting for a trusted project and a more restrictive security setting for an untrusted folder." https://antigravity.google/docs/features (consultado el 2026-11-01)
[^sandbox]: Documentación oficial de Antigravity, «Terminal sandbox». "Antigravity includes a **terminal sandbox**, enabled by default, that isolates shell commands executed by agents." https://antigravity.google/docs/sandbox (consultado el 2026-11-01)
[^no-net]: Documentación oficial de Antigravity, «Agent permissions». "**Default** (_“Ask before sensitive operations.”_): Terminal commands run inside the isolated **[Terminal sandbox](https://antigravity.google/docs/sandbox)** with access restricted to your workspace and temp directories and **no network access**." https://antigravity.google/docs/permissions (consultado el 2026-11-01)
[^sensitive]: Documentación oficial de Antigravity, «Terminal sandbox». "Sensitive files such as `~/.ssh` and `.env` are blocked, anything not explicitly mounted is invisible inside the sandbox, and network access is limited to domains you’ve approved." https://antigravity.google/docs/sandbox (consultado el 2026-11-01)
[^files]: Documentación oficial de Antigravity, «Agent permissions». "**Workspace files**: Reading and writing files inside your active project directory is allowed without prompting, while non-workspace files require approval." https://antigravity.google/docs/permissions (consultado el 2026-11-01)
[^web]: Documentación oficial de Antigravity, «Agent permissions». "**Web browsing defaults to Ask**: Actions for `read_url` and `execute_url` default to **Ask**." https://antigravity.google/docs/permissions (consultado el 2026-11-01)
[^order]: Documentación oficial de Antigravity, «Agent permissions». "**Precedence rule**: Conflicting rules are strictly evaluated in priority order: **Deny > Ask > Allow**." https://antigravity.google/docs/permissions (consultado el 2026-11-01)
[^persist]: Documentación oficial de Antigravity, «Antigravity features». "Permissions manually granted during a conversation can persist, allowing the agent to learn trusted actions over time." https://antigravity.google/docs/features (consultado el 2026-11-01)
[^cli-ask]: Documentación oficial de Antigravity, «Antigravity features». "The default `request-review` permission asks before the agent writes files, runs shell commands, or uses web tools, unless one of your allow rules matches." https://antigravity.google/docs/features (consultado el 2026-11-01)
[^cli-sandbox]: Documentación oficial de Antigravity, «Antigravity features». "The [terminal sandbox](https://antigravity.google/docs/sandbox) is off by default." https://antigravity.google/docs/features (consultado el 2026-11-01)
[^discard]: Documentación oficial de Antigravity, «Review changes». "**Discard unstaged changes** takes effect immediately, without asking you to confirm. It also deletes untracked files from disk." https://antigravity.google/docs/review-changes (consultado el 2026-11-01)
[^rewind]: Documentación oficial de Antigravity, «CLI best practices». "Type `/rewind` (or `/undo`) to roll back your conversation thread to a previous stable checkout." https://antigravity.google/docs/cli/best-practices (consultado el 2026-11-01)
[^undo]: Documentación oficial de Antigravity, «Changelog». "The Confirm Undo dialog now offers an option to revert only the conversation." https://antigravity.google/docs/changelog (consultado el 2026-11-01)
[^by-preset]: Documentación oficial de Antigravity, «Terminal sandbox». "| **Default** | On | Allowed in sandbox; ask outside |" / "| **Turbo** | Off | Allowed without prompting, unrestricted |" https://antigravity.google/docs/sandbox (consultado el 2026-11-01)
