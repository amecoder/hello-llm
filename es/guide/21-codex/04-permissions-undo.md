# Capítulo 4. Permisos y deshacer: qué encargar y cómo volver atrás

> **En una línea**: en el **menú de permisos** de debajo del cuadro de entrada decides qué hace Codex por su cuenta y qué te pregunta. Al principio empieza con **Ask for approval**.
> Deshacer se hace con **Git**. No encontré en la documentación oficial una función como el retroceso de Claude Code. Por eso es aún más importante el hábito de dejar un registro (commit) antes y después de encargar un trabajo.

Este capítulo se escribió a partir de la documentación oficial de Codex consultada el 1 de noviembre de 2026 y de las prácticas de esta guía. Por qué hacen falta los permisos se explicó en el [capítulo 4 de Claude Code](../20-claude-code/04-permissions-undo.md).

## Tres opciones del menú de permisos

El menú de permisos está **debajo del cuadro de entrada**.[^menu] En la pantalla de esta guía, **Ask for approval** venía elegido desde el principio. No pude comprobar si el valor inicial es el mismo en todas las cuentas. En el menú pueden aparecer estos nombres.[^names]

| Nombre en pantalla | Qué hace | Cuándo |
|---|---|---|
| Ask for approval | Trabaja por su cuenta dentro de la carpeta y pregunta antes de salir | La mayoría de las tareas |
| Approve for me | En lugar de preguntarte, decide una revisión automática | Cuando ya tengas práctica |
| Full access | Ejecuta sin límites | Casi nunca se usa |

Fuente: documentación oficial de Codex (solo una parte)[^names]

La documentación oficial dice que **para la mayoría de las tareas se empiece con Ask for approval**.[^start] Es una forma que encarga un paso más que el modo «Manual» (수동) de Claude Code (comparación de esta guía). Los archivos **dentro** de la carpeta los modifica sin preguntar.

Aunque elijas **Approve for me**, lo que Codex puede hacer no se amplía. Lo único que cambia es "quién da el permiso".[^same-box] La revisión automática llama una vez más al modelo, así que el uso puede aumentar.[^extra]

**Full access** elimina todos los límites de archivos e internet. La documentación oficial también dice que se use solo cuando de verdad quieras dejarlo todo en sus manos.[^full] Para organizar notas no hace falta.

Que aparezca en el menú no significa que esté elegido. En cada conversación, comprueba **qué está elegido ahora**.[^check]

<Quiz id="ch504-modes" />

## La valla y el permiso

Los permisos funcionan con dos mecanismos.[^two]

- **Valla** (sandbox, Sandbox): a qué archivos y a qué internet puede acceder
- **Permiso** (Approval): cuándo se detiene a preguntar

En el estado predeterminado, Codex trabaja **sin internet**, y la valla suele llegar hasta la carpeta de trabajo.[^default] Para modificar archivos fuera de la carpeta o conectarse a internet hace falta permiso.[^auto]

Hay **lugares protegidos aunque estén dentro de la carpeta**. Las carpetas `.git`, `.agents` y `.codex` de dentro de la carpeta de trabajo son, en el estado predeterminado, solo de lectura.[^protected] `.git` es donde se guarda el registro de Git, así que, si le dices a Codex en la conversación "haz un registro", puede pedir permiso o quedarse bloqueado. La carpeta `.agents`, donde meterás las habilidades en el capítulo 5, también está en este grupo.

En esta guía se bloqueó de verdad. Cuando desde la terminal se pidió copiar las habilidades a `.agents/skills`, Codex respondió "la ruta `.agents` es de solo lectura y la copia quedó bloqueada" y me dio dos líneas de comandos para escribir yo. Como me explicó a la vez el motivo del bloqueo y la alternativa, pude juzgar yo qué permitir.

<Quiz id="ch504-sandbox" />

## Ver lo que ha cambiado

Codex muestra los cambios en el **panel de revisión** (review pane). Equivale al panel «Cambios» de Claude Code. El panel de revisión también solo se abre en un repositorio de Git.[^review-git]

En el panel de revisión **no está solo lo que modificó Codex.** Se ve todo: lo que modificaste tú directamente y otros cambios que aún no has registrado.[^includes] Por eso, si antes de encargar el trabajo dejas registrados (commit) los cambios que hay hasta ahora, en el panel de revisión solo quedan los cambios de Codex y es más fácil verlos.

Encima del panel de revisión puedes elegir el alcance de lo que ves. El predeterminado son los cambios que aún no has registrado (**Unstaged**), y si eliges **Last turn**, ves solo lo que cambió en la última respuesta de Codex.[^views] Al principio es más fácil de entender Last turn.

Si hay una línea que no te convence, puedes dejar un comentario en esa línea. Coloca el ratón sobre la línea, pulsa **+**, escribe tu opinión y envía en el cuadro de entrada algo como "corrígelo según los comentarios de las líneas".[^comments]

<Quiz id="ch504-review" />

## Deshacer con Git

Puedes deshacer directamente desde el panel de revisión.[^revert]

| Unidad | Dónde |
|---|---|
| Todo | Revert all, en la parte superior del panel de revisión |
| Un archivo | El deshacer (revert) de ese archivo |
| Un fragmento | El deshacer de ese fragmento (hunk) |

Fuente: documentación oficial de Codex (solo una parte)[^revert]

**Ten cuidado con Revert all.** El panel de revisión incluye también lo que modificaste tú, así que, si lo deshaces todo, tus cambios también pueden desaparecer.[^includes] Si solo quieres descartar una parte, deshaz por archivo o por fragmento.

Claude Code tenía una función para retroceder la conversación ([capítulo 4 de Claude Code](../20-claude-code/04-permissions-undo.md)). **No encontré la misma función en la documentación oficial de Codex.** En su lugar, la documentación oficial dice que **dejes registros de Git antes y después de la tarea**.[^checkpoint] Si registras a menudo, puedes deshacer poco a poco.[^often]

Por eso, en esta etapa conviertes en hábito este orden.

1. Antes de encargar: deja registrado el estado actual con la función de Git de la aplicación (commit).[^commit]
2. Encarga el trabajo.
3. En el panel de revisión, mira solo lo que cambió con Last turn.
4. Si está bien, vuelve a registrar; si no, deshaz.

También puedes pedir "haz un registro" en la conversación, pero, como viste arriba, `.git` es una carpeta protegida y puede pedirte permiso. Si pregunta, comprueba que es "solo dejar un registro de Git" y concédelo.

En las tareas grandes, pide primero un plan antes de que modifique. Si escribes `/plan` en el cuadro de entrada, Codex primero investiga y propone un método.[^plan] Cumple la misma función que el modo «Plan» del capítulo 5 de Claude Code.

<Quiz id="ch504-undo" />

## Pruébalo tú

1. Abre el menú de permisos de debajo del cuadro de entrada y mira qué está elegido. Si no es Ask for approval, cámbialo.
2. Deja registrado el estado actual con la función de Git de la aplicación (o pidiéndolo en la conversación y dando permiso).
3. En el acta del capítulo 2, pide "añade arriba del todo una línea «Fecha de redacción: la fecha de hoy»".
4. Mira el panel de revisión con Last turn y comprueba la línea que cambió.
5. Deshaz solo ese archivo.

**Proyecto continuo**: en el capítulo 5 trasladarás a Codex las 3 habilidades creadas en Claude Code y crearás la retrospectiva semanal con una sola línea, `$weekly-review`.

## Resumen

- El menú de permisos está debajo del cuadro de entrada. Al principio, empieza con Ask for approval.
- Approve for me solo cambia quién da el permiso. El alcance no se amplía.
- Por defecto, sin internet y con la valla en la carpeta de trabajo. `.git`, `.agents` y `.codex` están protegidos aunque estén dentro de la carpeta.
- El panel de revisión muestra también tus cambios. Registra antes de encargar y mira con Last turn.
- En lugar de retroceder, se deshace con Git. Deja registros antes y después de encargar.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Sandbox | Sandbox (valla) | Valla que limita lo que Codex puede tocar |
| Approval | Aprobación (permiso) | Permiso que recibes antes de cruzar la valla |
| Review pane | Panel de revisión | Panel que muestra lo que ha cambiado |
| Revert | Revertir | Deshacer lo que ha cambiado |
| Commit | Commit (confirmación) | Dejar registrado en Git el estado actual |

<ChapterDone :chapter="504" />

Siguiente capítulo: [Capítulo 5. Trasladar habilidades](05-skills.md)

[^menu]: Documentación oficial de Codex, «Permissions». "Use the permissions control below the composer in the ChatGPT desktop app or IDE extension." https://learn.chatgpt.com/docs/permission-modes (consultado el 2026-11-01)
[^names]: Documentación oficial de Codex, «Sandbox». "Depending on your configuration, the menu can include **Ask for approval**, **Approve for me** for eligible approval requests, **Full access**, and named or custom permissions profiles." https://learn.chatgpt.com/docs/sandboxing (consultado el 2026-11-01)
[^start]: Documentación oficial de Codex, «Permissions». "For most work, start with **Ask for approval**. It lets ChatGPT work within the current workspace and pauses before reaching beyond that boundary." https://learn.chatgpt.com/docs/permission-modes (consultado el 2026-11-01)
[^same-box]: Documentación oficial de Codex, «Permissions». "Changing who reviews a request doesn't expand the sandbox." https://learn.chatgpt.com/docs/permission-modes (consultado el 2026-11-01)
[^extra]: Documentación oficial de Codex, «Agent approvals & security». "Automatic review uses extra model calls, so it can add to Codex usage." https://learn.chatgpt.com/docs/agent-approvals-security (consultado el 2026-11-01)
[^full]: Documentación oficial de Codex, «Sandbox». "This removes the filesystem and network boundaries and should be used only when you want the agent to act with full access." https://learn.chatgpt.com/docs/sandboxing (consultado el 2026-11-01)
[^check]: Documentación oficial de Codex, «Permissions». "Check the selected mode for the current chat; having a mode available doesn't mean it's selected." https://learn.chatgpt.com/docs/permission-modes (consultado el 2026-11-01)
[^two]: Documentación oficial de Codex, «Permissions». "The **sandbox** defines which files and network resources ChatGPT can access." / "**Approvals** determine when ChatGPT pauses before an action or sends the request to automatic review." https://learn.chatgpt.com/docs/permission-modes (consultado el 2026-11-01)
[^default]: Documentación oficial de Codex, «Agent approvals & security». "By default, the agent runs with network access turned off." https://learn.chatgpt.com/docs/agent-approvals-security (consultado el 2026-11-01)
[^auto]: Documentación oficial de Codex, «Agent approvals & security». "Codex asks for approval to edit files outside the workspace or to run commands that require network access." https://learn.chatgpt.com/docs/agent-approvals-security (consultado el 2026-11-01)
[^protected]: Documentación oficial de Codex, «Agent approvals & security». "`<writable_root>/.git` is protected as read-only whether it appears as a directory or file." / "`<writable_root>/.agents` is protected as read-only when it exists as a directory." / "`<writable_root>/.codex` is protected as read-only when it exists as a directory." / "Protection is recursive, so everything under those paths is read-only." https://learn.chatgpt.com/docs/agent-approvals-security (consultado el 2026-11-01)
[^review-git]: Documentación oficial de Codex, «Code review». "The review pane requires a project inside a Git repository." https://learn.chatgpt.com/docs/code-review (consultado el 2026-11-01)
[^includes]: Documentación oficial de Codex, «Code review». "It includes changes made by Codex, changes you made yourself, and any other uncommitted changes in the repository." https://learn.chatgpt.com/docs/code-review (consultado el 2026-11-01)
[^views]: Documentación oficial de Codex, «Code review». "By default, the review pane shows **Unstaged** changes." / "**Last turn** for the most recent assistant turn" https://learn.chatgpt.com/docs/code-review (consultado el 2026-11-01)
[^comments]: Documentación oficial de Codex, «Code review». "Inline comments let you attach feedback directly to specific lines in the diff." https://learn.chatgpt.com/docs/code-review (consultado el 2026-11-01)
[^revert]: Documentación oficial de Codex, «Code review». "**Entire diff**: Use the action buttons in the review header, such as **Stage all** or **Revert all**." / "**Per file**: Stage, unstage, or revert an individual file." / "**Per hunk**: Stage, unstage, or revert a single hunk." / "Use staging when you want to accept part of the work, and revert when you want to discard it." https://learn.chatgpt.com/docs/code-review (consultado el 2026-11-01)
[^checkpoint]: Documentación oficial de Codex, «Codex CLI». "Create Git checkpoints before and after a task so you can revert changes." https://learn.chatgpt.com/docs/codex/cli (consultado el 2026-11-01)
[^often]: Documentación oficial de Codex, «Agent approvals & security». "Commit frequently so you can roll back in small increments." https://learn.chatgpt.com/docs/agent-approvals-security (consultado el 2026-11-01)
[^plan]: Documentación oficial de Codex, «Prompting». "For a multi-step task, enter `/plan` in the app composer when you want Codex to investigate and propose an approach before editing." https://learn.chatgpt.com/docs/prompting (consultado el 2026-11-01)
[^commit]: Documentación oficial de Codex, «Local environments». "You can stage or revert individual chunks, stage or revert entire files, commit changes, push a branch, and create a pull request without leaving the app." https://learn.chatgpt.com/docs/environments/local-environment (consultado el 2026-11-01)
