# Capítulo 7. Usarlo en el terminal — comprobar Herramienta de orden con una sola línea, `codex exec`

> **En una línea**: Codex CLI es Codex para usar en el terminal. Lee el `AGENTS.md` y los skills de la carpeta donde lo ejecutas.
> `codex exec "tarea"` se ejecuta una vez y termina, y **por defecto es de solo lectura**. Se parece al `claude -p` de Claude Code, pero en esto es distinto.

Este capítulo se escribió con la documentación oficial de Codex consultada el 1 de noviembre de 2026 y con el resultado de ejecutar Codex CLI 0.166.0 en el terminal de macOS. **Si es la primera vez que usas el terminal, puedes saltarte este capítulo.** Qué es el terminal se explicó en el [capítulo 10 de Claude Code](../20-claude-code/10-terminal.md).

## Instalar y empezar

El comando de instalación de la documentación oficial es este.[^install]

```bash
# macOS, Linux
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

```powershell
# Windows PowerShell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

**Antes de ejecutar el comando de instalación, comprueba que es exactamente el que aparece en la documentación oficial (learn.chatgpt.com).** Es porque es un comando que ejecuta directamente un script descargado de internet.

Cuando termine la instalación, ve a la carpeta Herramienta de orden (정리도구) y escribe `codex`. La primera vez, elige **Sign in with ChatGPT**.[^signin]

```bash
cd ~/hello-ai-연습/정리도구
codex
```

El Codex del terminal considera **la carpeta donde lo ejecutaste** como el proyecto de esa conversación.[^cwd] Lo que en la aplicación hacías eligiendo la carpeta con Choose project, aquí lo hace `cd`.

<Quiz id="ch507-install" />

## `codex exec` — preguntar una vez y terminar

`codex exec` es una forma de ejecutar una vez y terminar sin abrir la pantalla de conversación.[^exec] Hice la misma pregunta que en el capítulo 10 de Claude Code.

```bash
cd ~/hello-ai-연습/정리도구
codex exec "Muéstrame la lista de archivos de la carpeta notes y dime en una línea por archivo con qué plantilla (de las de templates) está escrito cada uno. No modifiques los archivos. Responde brevemente y solo con una tabla."
```

Salió solo la respuesta, limpia (salida completa: [7장-codex-exec-출력.txt](/practice/notes/results/codex/7장-codex-exec-출력.txt)).

| Archivo de notes | Plantilla usada |
|---|---|
| 공부-2026-10-28-프롬프트-강의.md | templates/공부노트.md |
| 주간회고-2026-10-26.md | templates/주간회고.md |
| 회의록-2026-10-27-주간회의.md | templates/회의록.md |

Fuente: resultado de la práctica de esta guía (2026-11-01). El registro de progreso se descartó aparte y se dejó solo la respuesta final.

`codex exec` saca el progreso y la respuesta final **por caminos distintos.** El progreso va por el camino lateral de la pantalla (stderr) y solo la respuesta final es la salida normal (stdout).[^stdout] Por eso, si lo usas como `codex exec "…" > resultado.md`, en el archivo solo se guarda la respuesta final.

**`codex exec` es de solo lectura por defecto.** Para que pueda modificar archivos, añade `--sandbox workspace-write`.[^readonly] Las prácticas de los capítulos 2, 3 y 5 de esta guía también se ejecutaron con esta opción.

```bash
codex exec --sandbox workspace-write '$weekly-review'
```

`codex exec` se ejecuta con la forma de permisos **fijada de antemano.**[^preset] En la práctica del capítulo 5 de esta guía, cuando se bloqueó la escritura en la carpeta `.agents`, Codex no pudo preguntar y se detuvo ahí. Lo que necesita permiso es más cómodo hacerlo en la aplicación o en el `codex` interactivo.

La opción `--full-auto` que aparece en textos antiguos ya no se admite.[^fullauto] Existen opciones como `--dangerously-bypass-approvals-and-sandbox`, que desactiva tanto el sandbox como los permisos[^yolo], pero para ordenar notas no hacen falta.

<Quiz id="ch507-exec" />

## Comandos dentro de `codex` interactivo

Si abres el modo interactivo con `codex`, usas comandos que empiezan por `/`.

| Comando | Qué hace |
|---|---|
| `/permissions` | Cambiar los permisos (el menú de permisos de la aplicación) |
| `/import` | Traer la configuración de Claude Code o Cursor |
| `/resume` | Continuar una conversación guardada |
| `/status` | Ver la información de la conversación y el límite que queda |

Fuente: documentación oficial de Codex[^permissions][^import][^resume][^status]

Para continuar desde fuera después de terminar el modo interactivo, escribe `codex resume`.[^resume]

`/permissions` y `/import` son **comandos del lado del terminal.** En la aplicación se usan el menú de permisos de debajo del cuadro de entrada (capítulo 4) y el menú Import de la configuración (capítulo 3).

<Quiz id="ch507-commands" />

## Pruébalo tú

1. Comprueba que el comando de instalación de la documentación oficial es igual que el de arriba y, entonces, instala (si ya lo tienes, `codex --version`).
2. Ve a la carpeta Herramienta de orden y ejecuta la pregunta `codex exec` de solo lectura de arriba.
3. Abre el modo interactivo con `codex` y escribe `/status`.
4. Escribe `$` o ejecuta `/skills` para comprobar que se ven los nombres de los skills del capítulo 5.[^skills]

**Proyecto continuo**: en el capítulo 8 ordenaremos los costes, los datos y la seguridad, y comprobaremos cómo trata Codex una nota con una instrucción oculta.

## Resumen

- El Codex del terminal considera proyecto la carpeta donde lo ejecutas y lee el `AGENTS.md` y los skills de esa carpeta.
- Comprueba que el comando de instalación es igual que el de la documentación oficial antes de ejecutarlo.
- `codex exec` se ejecuta una vez y termina, y es de solo lectura por defecto. Para modificar, `--sandbox workspace-write`.
- `codex exec` se ejecuta con los permisos fijados de antemano. Lo que necesita permiso, en la aplicación o en el modo interactivo.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Codex CLI | Codex CLI | Codex para usar en el terminal |
| `codex exec` | `codex exec` | Forma de ejecutar una vez y terminar |
| stdout / stderr | stdout / stderr | La salida normal / el camino lateral por el que salen el progreso y los errores |

<ChapterDone :chapter="507" />

Siguiente capítulo: [Capítulo 8. Costes, datos y seguridad, y cómo elegir la herramienta](08-safety-choose.md)

[^install]: Documentación oficial de Codex, «Codex CLI». "curl -fsSL https://chatgpt.com/codex/install.sh | sh" / "powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"" https://learn.chatgpt.com/docs/codex/cli (consultado el 2026-11-01)
[^signin]: Documentación oficial de Codex, «Codex CLI». "Open a project directory and run `codex`. The first time you run Codex, choose **Sign in with ChatGPT** or another available sign-in method." https://learn.chatgpt.com/docs/codex/cli (consultado el 2026-11-01)
[^cwd]: Documentación oficial de Codex, «Projects and chats». "Codex CLI treats the directory where you start it as the project for the chat." https://learn.chatgpt.com/docs/projects (consultado el 2026-11-01)
[^exec]: Documentación oficial de Codex, «Non-interactive mode». "Non-interactive mode lets you run Codex from scripts (for example, continuous integration (CI) jobs) without opening the interactive TUI." https://learn.chatgpt.com/docs/non-interactive-mode (consultado el 2026-11-01)
[^stdout]: Documentación oficial de Codex, «Non-interactive mode». "While `codex exec` runs, Codex streams progress to `stderr` and prints only the final agent message to `stdout`." https://learn.chatgpt.com/docs/non-interactive-mode (consultado el 2026-11-01)
[^readonly]: Documentación oficial de Codex, «Non-interactive mode». "By default, `codex exec` runs in a read-only sandbox." / "Allow edits: `codex exec --sandbox workspace-write "<task>"`" https://learn.chatgpt.com/docs/non-interactive-mode (consultado el 2026-11-01)
[^fullauto]: Documentación oficial de Codex, «Non-interactive mode». "`--full-auto` is no longer supported." https://learn.chatgpt.com/docs/non-interactive-mode (consultado el 2026-11-01)
[^yolo]: Documentación oficial de Codex, «Agent approvals & security». "`--dangerously-bypass-approvals-and-sandbox` (alias: `--yolo`)" https://learn.chatgpt.com/docs/agent-approvals-security (consultado el 2026-11-01)
[^permissions]: Documentación oficial de Codex, «Permissions». "In the CLI, enter `/permissions`." https://learn.chatgpt.com/docs/permission-modes (consultado el 2026-11-01)
[^import]: Documentación oficial de Codex, «Import from another agent». "Start a local Codex CLI session and type `/import`." https://learn.chatgpt.com/docs/import (consultado el 2026-11-01)
[^resume]: Documentación oficial de Codex, «Projects and chats». "Use `/resume` while Codex is open, or run `codex resume`, to continue a saved chat." https://learn.chatgpt.com/docs/projects (consultado el 2026-11-01)
[^status]: Documentación oficial de Codex, «Pricing». "If you want to see your remaining limits during an active Codex CLI session, you can use `/status`." https://learn.chatgpt.com/docs/pricing (consultado el 2026-11-01)
[^skills]: Documentación oficial de Codex, «Build skills». "In Codex CLI or the IDE extension, run `/skills` or type `$` to mention a skill." https://learn.chatgpt.com/docs/build-skills (consultado el 2026-11-01)
[^preset]: Documentación oficial de Codex, «Non-interactive mode». "Run with explicit, pre-set sandbox and approval settings." https://learn.chatgpt.com/docs/non-interactive-mode (consultado el 2026-11-01)
