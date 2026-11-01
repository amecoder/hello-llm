# Capítulo 6. Usarlo en la terminal: `agy -p` y el rechazo silencioso

> **En una línea**: `agy` es el programa de terminal de Antigravity, y `agy -p "tarea"` se ejecuta una vez y termina.
> Con `-p`, lo que necesita permiso **se rechaza en silencio.** Y aun así, el **código de salida es 0 (éxito)**, así que es fácil confundir un resultado vacío con un éxito.

Este capítulo está escrito a partir de la documentación oficial de Antigravity consultada el 1 de noviembre de 2026 y del resultado de ejecutar `agy` 1.4.12 en macOS. Esta guía llamó y ejecutó `agy` desde dentro de otra herramienta de IA de práctica. Como las preguntas frecuentes oficiales dicen que ese uso no está admitido en los planes personales ([capítulo 7](07-safety-choose.md)), cuando lo sigas tú, ejecuta **`agy` directamente en la terminal.** **Si es la primera vez que usas la terminal, puedes saltarte este capítulo.** Qué es la terminal se explicó en el [capítulo 10 de Claude Code](../20-claude-code/10-terminal.md).

## Instalar y empezar

Los comandos de instalación para macOS y Linux son estos.[^install]

```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

Este comando ejecuta enseguida un instalador descargado de internet. Por eso, **comprueba que es exactamente igual que lo que pone en la documentación oficial (antigravity.google/docs) antes de ejecutarlo.** El comando para Windows también está en la documentación oficial.

Si vas a la carpeta de la herramienta de orden y escribes `agy`, se abre la pantalla de conversación.[^tui] Si ya has iniciado sesión en la aplicación, inicia sesión directamente sin navegador.[^keyring] La primera vez que lo ejecutas, comprueba **si confías en esta carpeta** (Workspace trust).[^trust]

```bash
cd ~/hello-ai-연습/정리도구
agy
```

<Quiz id="ch606-install" />

## Modos de ejecución

En el `agy` interactivo, cambias de modo de ejecución con Shift+Tab.[^cycle]

| Modo | Modificar archivos | Ejecutar comandos |
|---|---|---|
| `default` | Muestra los cambios y pide confirmación | Pregunta |
| `accept-edits` | Automático dentro de la carpeta de trabajo | Pregunta |

Fuente: documentación oficial de Antigravity (solo una parte)[^modes]

El permiso básico de la terminal es más prudente que el de la aplicación. Pregunta antes de escribir archivos, ejecutar comandos o usar herramientas web, y la valla que encierra los comandos viene desactivada por defecto ([capítulo 4](04-permissions-undo.md)).

<Quiz id="ch606-modes" />

## `agy -p`: preguntar una vez y terminar

`-p` es un método que envía una petición, recibe la respuesta y termina. Como no hay ventana que pregunte, lo que necesita permiso se trata según las reglas que hayas fijado.[^headless] La respuesta sale por la salida estándar (stdout), y el progreso y los errores salen por el canal lateral (stderr).[^stdout]

La documentación oficial explica que leer y escribir archivos dentro de la carpeta de trabajo se permite automáticamente, y que los comandos de shell tienen por defecto «preguntar», así que se **rechazan en silencio** (soft-deny).[^policy] El rechazo silencioso no detiene la ejecución: termina con **código de salida 0** y solo avisa por stderr de qué se ha bloqueado.[^soft]

<Quiz id="ch606-headless" />

## Las cuatro trampas que encontró esta guía

Es lo que se encontró de verdad al ejecutar varias veces `agy -p` en la carpeta de la herramienta de orden.

1. **Resultado vacío, pero éxito.** Cuando el agente quiso usar un comando de shell (`ls`) para ver la lista de la carpeta y se lo rechazaron, **terminó sin crear nada.** El código de salida fue 0. Esto pasó tres veces. Comprueba siempre que el archivo de resultado se haya creado de verdad.
2. **En una carpeta en la que no se confía, se rechaza incluso leer y escribir.** La documentación oficial dice que los archivos de la carpeta de trabajo se permiten automáticamente, pero en la carpeta de práctica de esta guía también se rechazaron la escritura y la lectura. Parece que la causa es que esa carpeta todavía no estaba registrada como «carpeta de confianza» (es una suposición de esta guía). Se registra abriendo una vez el `agy` interactivo y respondiendo que confías en la carpeta.[^trusted]
3. **Solución: un modo y una frase.** Al añadir `--mode accept-edits` y poner al final de la petición «no uses comandos de shell; solo lee y escribe archivos», todo salió bien. No se usó `--dangerously-skip-permissions`, que lo permite todo. La documentación oficial también recomienda reglas de permiso con un alcance reducido.[^skip]
4. **La respuesta se saltó un archivo.** Se le pidió, en solo lectura, una tabla con la lista de archivos de la carpeta notes. Los archivos ordenados eran 3 (el acta de la reunión semanal, el acta de la reunión improvisada y la reflexión semanal), pero en la tabla **faltaba el acta de la reunión improvisada** y en su lugar aparecía el archivo vacío `.gitkeep`. Cuenta tú mismo el alcance de la comprobación.

El comando que se usó de verdad es este.

```bash
cd ~/hello-ai-연습/정리도구
agy -p "Muéstrame la lista de archivos de la carpeta notes y dime en una línea cada uno con qué formulario (cuál de templates) está escrito. No modifiques ningún archivo. Responde brevemente, solo con una tabla. No uses comandos de shell; solo lee archivos." --mode accept-edits
```

Resultado: [salida de agy -p](/practice/notes/results/antigravity/6장-agy-p-출력.txt) (la ruta de mi ordenador se cambió por `~`)

| | Claude Code | Codex | Antigravity |
|---|---|---|---|
| Ejecutar una vez | `claude -p` | `codex exec` | `agy -p` |
| Escritura de archivos por defecto | Hace falta permiso | Solo lectura | Automática dentro de la carpeta de trabajo (documentación) |
| Si se bloquea | Rechaza | Se detiene | Rechaza en silencio, código de salida 0 |

Fuente: resumen de esta guía (el capítulo de terminal y las prácticas de cada herramienta)

<Quiz id="ch606-pitfalls" />

## Continuar y uso

El historial de conversaciones de la terminal se separa **por carpeta desde la que lo ejecutas.**[^per-folder] Con `agy -c` continúas enseguida la última conversación de esa carpeta, o con `/resume` eliges una y la sigues.[^resume] `/rewind` (o `/undo`) devuelve la conversación a un mensaje anterior ([capítulo 4](04-permissions-undo.md)). La documentación oficial no dice si los archivos también vuelven atrás, así que para los archivos fíate del historial de Git.

El uso se ve con `/usage`.[^usage]

<Quiz id="ch606-resume" />

## Pruébalo tú

1. Comprueba que el comando de instalación de la documentación oficial es igual que el de arriba y, después, instala (si ya lo tienes, `agy --version`).
2. En la carpeta de la herramienta de orden, abre una vez el `agy` interactivo y responde cuando pregunte si confías en la carpeta.
3. Ejecuta el `agy -p` de solo lectura de arriba y cuenta si el número de archivos de la tabla coincide con el de la carpeta notes.
4. Si el resultado sale vacío, lee el aviso de rechazo de stderr y comprueba qué se bloqueó.

**Proyecto continuo**: en el capítulo 7 ordenaremos los costes, los datos y la seguridad, y decidiremos cómo usar juntas las tres herramientas.

## Resumen

- `agy` es interactivo, y `agy -p` se ejecuta una vez y termina. El historial de conversaciones es por carpeta.
- Con `-p`, lo que necesita permiso se rechaza en silencio y el código de salida es 0. El archivo de resultado se comprueba directamente.
- En una carpeta en la que no se confía, también pueden bloquearse las operaciones con archivos. Registra que confías en la carpeta o usa `--mode accept-edits`.
- La frase «no uses comandos de shell» redujo las paradas por rechazo. El alcance de la respuesta lo cuentas tú.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Headless | modo sin interfaz | Forma de ejecutar una vez, sin pantalla de conversación |
| Soft-deny | rechazo silencioso | Rechazar en silencio solo esa acción, sin detener la ejecución |
| Workspace trust | confianza en la carpeta de trabajo | Procedimiento para registrar que confías en esta carpeta |
| Exit code | código de salida | Número de éxito o fallo que deja un programa al terminar |

<ChapterDone :chapter="606" />

Siguiente capítulo: [Capítulo 7. Costes, datos y seguridad, y cómo elegir entre las tres herramientas](07-safety-choose.md)

[^install]: Documentación oficial de Antigravity, «Get started». "curl -fsSL https://antigravity.google/cli/install.sh | bash" https://antigravity.google/docs/getting-started (consultado el 2026-11-01)
[^tui]: Documentación oficial de Antigravity, «Get started». "| `agy` | Launches the interactive TUI in the current directory. |" https://antigravity.google/docs/getting-started (consultado el 2026-11-01)
[^keyring]: Documentación oficial de Antigravity, «Authenticate». "If a valid token profile is found, the CLI authenticates your session silently without opening a browser." https://antigravity.google/docs/install (consultado el 2026-11-01)
[^trust]: Documentación oficial de Antigravity, «Get started». "**Workspace trust**: Confirm that you trust the repository directory before the agent begins file indexing." https://antigravity.google/docs/getting-started (consultado el 2026-11-01)
[^cycle]: Documentación oficial de Antigravity, «Choose an execution mode». "Press Shift + Tab inside the prompt box to cycle through the active sequence: `default` > `accept-edits` > `auto` > `plan` > `default`." https://antigravity.google/docs/cli/modes (consultado el 2026-11-01)
[^modes]: Documentación oficial de Antigravity, «Choose an execution mode». "| `default` | Pauses for interactive diff review before modifying or creating files, and asks before running terminal commands. | Standard development, reviewing sensitive code changes, and careful refactoring. |" / "| `accept-edits` | Automatically approves file creations and edits inside your workspace, but still asks before running terminal commands. | Rapid prototyping, iterating on trusted code, and reducing file-edit interruptions. |" https://antigravity.google/docs/cli/modes (consultado el 2026-11-01)
[^headless]: Documentación oficial de Antigravity, «Headless mode». "Headless mode (also called print mode) sends a single prompt to the agent, streams or returns the response, and exits." / "There is no interactive prompt in headless mode, so tools that would normally ask for confirmation are handled by policy." https://antigravity.google/docs/cli/headless (consultado el 2026-11-01)
[^stdout]: Documentación oficial de Antigravity, «Headless mode». "Diagnostics—errors, authentication prompts, progress, and permission notices—go to `stderr`." https://antigravity.google/docs/cli/headless (consultado el 2026-11-01)
[^policy]: Documentación oficial de Antigravity, «Headless mode». "Reading and writing files inside your active workspace is auto-allowed; actions such as shell commands default to **Ask** and are soft-denied in headless mode unless you grant them." https://antigravity.google/docs/cli/headless (consultado el 2026-11-01)
[^soft]: Documentación oficial de Antigravity, «Headless mode». "A tool that requires approval it can’t obtain is soft-denied: the run continues, exits `0`, and prints a notice to `stderr` naming the tool and how to allow it." https://antigravity.google/docs/cli/headless (consultado el 2026-11-01)
[^skip]: Documentación oficial de Antigravity, «Headless mode». "**Warning:** `--dangerously-skip-permissions` approves all tool calls, including file writes and command execution. Prefer scoped `permissions.allow` rules unless you fully trust the prompt and environment." https://antigravity.google/docs/cli/headless (consultado el 2026-11-01)
[^per-folder]: Documentación oficial de Antigravity, «Managing conversations». "When you launch `agy` from a specific directory, the agent only displays and resumes sessions associated with that specific local repository or subdirectory." https://antigravity.google/docs/cli/conversations (consultado el 2026-11-01)
[^resume]: Documentación oficial de Antigravity, «Managing conversations». "Antigravity CLI supports both an interactive **Session Picker** TUI overlay and direct command-line flags (`agy -c` / `agy --continue`) to resume threads instantly based on your active workspace." https://antigravity.google/docs/cli/conversations (consultado el 2026-11-01)
[^usage]: Documentación oficial de Antigravity, «Model quotas (/usage)». "Antigravity CLI provides the `/usage` command (alias `/quota`) to help you monitor your resource consumption." https://antigravity.google/docs/cli/commands/usage (consultado el 2026-11-01)
[^trusted]: Documentación oficial de Antigravity, «CLI commands». "| **`trustedWorkspaces`** | string\[\] | `[]` | Folders you chose to trust when the CLI asked. The CLI adds entries for you. |" https://antigravity.google/docs/cli/reference (consultado el 2026-11-01)
