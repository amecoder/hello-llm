# Capítulo 4. Permisos y deshacer — modos de permisos, rebobinar y el historial de Git

> **En una línea**: con el **modo de permisos** decides hasta dónde puede llegar Claude sin preguntar. Si el resultado no te gusta, **rebobinar** (`/rewind`) te devuelve a antes de una petición.
> Hay cosas que rebobinar no puede deshacer. Por eso, el estado importante lo guardas además en el **historial de Git (commits)**.

Este capítulo se escribió con la documentación oficial de Claude Code consultada el 31 de octubre de 2026 y la aplicación de escritorio para macOS (pantalla en coreano, cuenta de pago). Usa tal cual la carpeta **Herramienta de orden** (정리도구) que hiciste hasta el capítulo 3 (con Git activado).

## Elegir el modo de permisos

Si pulsas el nombre del modo a la derecha de la línea de debajo del cuadro de entrada (en la pantalla de esta guía, «Manual»; 수동), se abre el menú de modos de permisos. El atajo de teclado es **Cmd+Shift+M**.[^keys]

![Menú de modos de permisos. Llevan número rojo ① Automático (자동), ② Manual (수동; con marca de verificación), ③ Aceptar ediciones automáticamente (편집 자동 수락), ④ Plan (계획), ⑤ Omitir permisos (권한 무시; atenuado, con «Activar en la configuración de Claude Code») y ⑥ el botón de modo de la línea de debajo del cuadro de entrada](../../../guide/20-claude-code/assets/shot-12-modes-marked.png)

| Número | Nombre en pantalla | Nombre en la documentación oficial | Lo que Claude hace sin preguntar |
|---|---|---|---|
| ② | Manual (수동) | Manual | Nada (pregunta cada vez antes de modificar o ejecutar) |
| ③ | Aceptar ediciones automáticamente (편집 자동 수락) | Accept edits | Crear y modificar archivos dentro de la carpeta y los comandos básicos de archivos |
| ④ | Plan (계획) | Plan | Solo leer y examinar (no modifica archivos y presenta un plan) |
| ① | Automático (자동) | Auto | Casi todo (un verificador comprueba por detrás que encaje con tu petición) |
| ⑤ | Omitir permisos (권한 무시) | Bypass permissions | Casi todo (aparece solo si se activa en la configuración) |

Fuente: los nombres en pantalla, de la comprobación de pantalla de esta guía (2026-10-31); el funcionamiento, de la documentación oficial[^modes]

Cada modo **cambia comodidad por cuánto vigilas tú.**[^tradeoff]

**Empieza en «Manual».** Es más tranquilizador ir viendo una a una qué quiere hacer Claude y acostumbrarte. Cuando lo que hace te parezca fiable, puedes pasar a «Aceptar ediciones automáticamente». Si el trabajo es grande, conviene recibir primero el método en «Plan» (capítulo 5).[^plan-tip]

- El modo que eliges en el menú **se recuerda por carpeta.** Pero «Plan» se aplica solo a la sesión actual.[^remember]
- En pantallas anteriores, los modos se llamaban Ask permissions, Auto accept edits y Plan mode.[^old-names]

<Quiz id="ch404-modes" />

## Por qué hay que tener cuidado con «Aceptar ediciones automáticamente», «Automático» y «Omitir permisos»

**Aceptar ediciones automáticamente** no solo modifica archivos: también ejecuta sin preguntar **los comandos que borran archivos** (`rm`). Eso sí, solo dentro de la carpeta de trabajo.[^accept] Por eso, en el capítulo 2, te dije que eligieras «una carpeta de práctica pequeña»: si la carpeta es pequeña, también es pequeño el alcance al que se puede extender un error. Eso sí, los comandos que borran por completo rutas peligrosas (por ejemplo, `rm -rf ~`, borrar toda la carpeta personal) no se permiten automáticamente en ningún modo.[^critical]

**Automático** reduce mucho las preguntas, pero la documentación oficial lo deja claro: el modo automático solo reduce las ventanas de permiso y **no garantiza la seguridad.**[^auto] Úsalo en trabajos cuya dirección general te parezca fiable, y no lo uses para sustituir la revisión en asuntos sensibles.[^auto]

**Omitir permisos** aparece atenuado en el menú y hay que activarlo aparte en la configuración para que aparezca.[^modes] La documentación oficial dice que este modo se use **solo en contenedores aislados o máquinas virtuales.**[^modes] Un usuario normal no tiene por qué activarlo.

::: details Si estás en «Manual» y no sale la ventana de permiso
Como viste en el capítulo 2, si en Claude Code para terminal definiste reglas de permiso, esa configuración también se aplica en la aplicación.[^same-settings] Las capturas de esta guía también se hicieron en un ordenador así, y por eso no salió la ventana de permiso. En una pantalla en la que sí sale la ventana de permiso, te muestra qué va a cambiar y puedes permitir o rechazar cada cambio.[^modes]
:::

<Quiz id="ch404-auto" />

## Rebobinar — volver a antes de una petición

Claude Code **guarda automáticamente el estado justo anterior cada vez que envías una petición.** A eso se le llama **punto de control** (Checkpoint).[^checkpoint] Como el punto de guardado de un videojuego, si no te gusta el resultado puedes volver a ese punto.

Vamos a practicar. En una sesión nueva le encargué ordenar mis apuntes de estudio.

```
Ordena los apuntes de estudio de inbox como una nota de estudio. Divídela en cuatro partes: contenido clave / explicación de palabras que no conozco / preguntas que hacer / cosas que probar, y guárdala como archivo nuevo en la carpeta notes. No modifiques las notas originales.
```

Se creó la nota de estudio (resultado: [4장-공부노트-2026-10-28.txt](/practice/notes/results/4장-공부노트-2026-10-28.txt)). Voy a deshacer esta nota como si nunca hubiera existido.

1. Escribe `/rewind` en el cuadro de entrada. Cuando salga la sugerencia «Restaurar la sesión a un mensaje anterior» (세션을 이전 메시지로 되돌리기), pulsa **Enter** y, para ejecutarla, otra vez **Enter**.
2. En la ventana **Rebobinar** (되감기) aparece en una lista las peticiones que enviaste. Pulsa aquella a la que quieres volver.

![Ventana de rebobinar. Bajo «Restaura la sesión a un mensaje anterior» (세션을 이전 메시지로 복원합니다) lleva número rojo ① la lista de peticiones que enviaste](../../../guide/20-claude-code/assets/shot-13-rewind-marked.png)

3. En la ventana de confirmación, elige **qué quieres deshacer** y pulsa **Rebobinar**.

![Ventana de confirmación de rebobinar. Llevan número rojo ① Restaurar «Código y conversación» (코드와 대화), ② «1 archivo · +0 −35» (파일 1개 · +0 −35), ③ «Los cambios aplicados con comandos de shell no se deshacen. Los commits se mantienen.» (셸 명령으로 적용된 변경 사항은 되돌려지지 않습니다. 커밋은 그대로 유지됩니다.) y ④ el botón «Rebobinar»](../../../guide/20-claude-code/assets/shot-14-rewind-confirm-marked.png)

El `+0 −35` del ② significa que, al rebobinar, **desaparecen 35 líneas.** En esta práctica son las 35 líneas de la nota de estudio recién creada. Antes de pulsar, comprueba con este número qué va a cambiar.

La lista de restauración del ① tiene tres opciones.

![Opciones de restauración. En la lista llevan número rojo ① «Código y conversación» (코드와 대화; marcada), «Solo conversación» (대화만) y «Solo código» (코드만)](../../../guide/20-claude-code/assets/shot-15-restore-options-marked.png)

| Nombre en pantalla | Qué hace |
|---|---|
| Código y conversación (코드와 대화) | Deja los archivos y la conversación como en ese momento |
| Solo conversación (대화만) | Solo la conversación a ese momento; los archivos quedan como están ahora |
| Solo código (코드만) | Solo los archivos a ese momento; la conversación queda como está ahora |

Fuente: los nombres en pantalla, de la comprobación de pantalla de esta guía (2026-10-31); el funcionamiento, de la documentación oficial[^restore]

Al rebobinar con «Código y conversación», el archivo de la nota de estudio desapareció y la conversación también quedó vacía. La petición que se rebobinó **vuelve a estar en el cuadro de entrada**, así que puedes corregirla y enviarla de nuevo.[^restore-prompt]

![La pantalla después de rebobinar. Llevan número rojo ① «Todavía no hay mensajes» (아직 메시지가 없습니다), ② la petición rebobinada vuelta a poner en el cuadro de entrada y ③ las tarjetas de resultados y de cambios desaparecidas del panel de información de la sesión](../../../guide/20-claude-code/assets/shot-16-after-rewind-marked.png)

Va bien en estos casos.

- Cuando no te gusta el formato del orden y quieres **corregir la petición y repetirlo** → «Código y conversación»
- Cuando el archivo está bien pero **la conversación se ha alargado sin sentido** → «Solo conversación»
- Cuando quieres conservar la explicación de la conversación y **devolver solo los archivos a como estaban** → «Solo código»

<Quiz id="ch404-rewind" />

## Lo que rebobinar no puede deshacer

Rebobinar no lo puede todo. La frase ③ de la ventana de confirmación indica su límite.

- **Archivos cambiados con comandos (shell)**: si Claude cambió un archivo solo ejecutando un comando, y no con la herramienta de edición de archivos, no se registra.[^limits-bash]
- **Archivos que modifiqué yo directamente y archivos que modificó otra sesión**: normalmente no se registran. Solo se registran los archivos modificados en la sesión actual.[^limits-external]
- **Commits**: el historial de Git se queda como está (frase de la ventana de confirmación).
- **Puntos de control antiguos**: se conservan como máximo los 100 más recientes por sesión y, por defecto, se limpian a los 30 días aproximadamente.[^retention]

La documentación oficial indica que, en estos casos, **vuelvas atrás con un control de versiones como Git.**[^limits-bash] Por eso el historial de Git del apartado siguiente es la segunda red de seguridad.

<Quiz id="ch404-limits" />

## Historial de Git — la segunda red de seguridad

En el capítulo 3 activaste Git en la carpeta. Cuando el resultado te guste, guarda ese estado como un **commit** (un registro). Así, incluso en los casos en que rebobinar no puede volver, puedes volver a ese registro.

En la tarjeta de cambios del panel de información de la sesión hay un botón **«Confirmar cambios» (변경 사항 커밋)** (capítulo 3). Al pulsarlo en esta guía, la aplicación envió por mí a Claude la petición de «haz un commit de lo que ha cambiado ahora» y Claude dejó el commit. También puedes pedirlo con palabras.

```
Haz un commit de lo que ha cambiado ahora. Escribe el nombre del registro en coreano, de modo que se sepa qué se cambió.
```

Más adelante, si quieres volver a ese registro, lo pides así.

```
Primero muéstrame qué archivos han cambiado desde el último commit. Cuando yo lo confirme, devuélvelo al estado de ese commit.
```

**Antes de deshacer, pide que te muestre «qué va a desaparecer».** Lo que hiciste después del commit puede desaparecer si vuelves atrás con Git. Con un paso de confirmación, hay menos riesgo de borrar algo por error.

| | Rebobinar (punto de control) | Historial de Git (commit) |
|---|---|---|
| Cuándo se guarda | Automáticamente cada vez que envías una petición | Cuando lo hago yo (o Claude) |
| Qué deshace | Los archivos que Claude editó en esta sesión y la conversación | Los archivos de los que hiciste commit |
| Cuánto se conserva | Los últimos 100, unos 30 días | Hasta que borres el registro |

Fuente: documentación oficial[^checkpoint][^retention]; la columna de Git es un resumen de esta guía

<Quiz id="ch404-git" />

## Pruébalo tú

1. Pulsa el botón de modo de la línea de debajo del cuadro de entrada para abrir el menú de modos de permisos y lee la descripción de los cinco modos. Por ahora, déjalo en «Manual».
2. Envía la petición de ordenar los apuntes de estudio y compara la nota creada con los apuntes originales (5 puntos clave, palabras que no conozco, 1 pregunta, 1 cosa que probar). En esta guía, Claude leyó incluso las notas de repaso y rellenó "cosa que probar: probado (10/30)". Comprueba aparte si es correcto lo que se basó en archivos que no pediste.
3. Rebobina con `/rewind` hasta antes de esa petición. Antes, comprueba el número `+0 −N` de la ventana de confirmación.
4. En la petición que vuelve al cuadro de entrada, cambia un formato (por ejemplo, "la explicación de palabras que no conozco, en una tabla") y envíala de nuevo.
5. Cuando salga un resultado que te guste, deja un registro con «Confirmar cambios».

**Proyecto continuo**: pon una al lado de otra el acta de reunión del capítulo 2 y la nota de estudio del capítulo 4, y escribe en tres líneas las reglas que quieres usar en los dos documentos (cómo escribir las fechas, la forma de la tabla de tareas, etc.). En el capítulo 6 guardarás estas reglas en CLAUDE.md.

## Resumen

- Los modos de permisos son Manual, Aceptar ediciones automáticamente, Plan, Automático y Omitir permisos. Se empieza en Manual.
- Aceptar ediciones automáticamente no pregunta ni siquiera por los comandos que borran archivos de la carpeta. Automático no garantiza la seguridad. Omitir permisos se usa solo en entornos aislados.
- En cada petición se guarda un punto de control. Con `/rewind` eliges rebobinar código y conversación, solo la conversación o solo el código.
- Rebobinar normalmente no deshace los archivos cambiados solo con comandos, los que modificaste tú directamente ni los commits.
- El buen estado se deja con un commit para crear la segunda red de seguridad. Antes de deshacer, comprueba primero qué va a desaparecer.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Permission mode | Modo de permisos | Hasta dónde puede llegar Claude sin preguntar |
| Accept edits | Aceptar ediciones automáticamente | Modo que no pregunta por la edición de archivos de la carpeta ni por los comandos básicos de archivos |
| Plan mode | Modo plan | Modo que examina sin modificar y solo presenta un plan |
| Checkpoint | Punto de control | Punto de guardado que se deja automáticamente cada vez que envías una petición |
| Rewind | Rebobinar | Función que vuelve a un punto de control |
| Commit | Commit | Dejar en Git el estado actual como un registro |

<ChapterDone :chapter="404" />

Siguiente capítulo: [Capítulo 5. Cómo encargar bien](05-delegate-well.md)

[^keys]: Documentación oficial de Claude Code, «Desktop application» tabla de atajos. "Open permission mode menu" https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^modes]: Documentación oficial de Claude Code, «Desktop application». "Claude asks before editing files or running commands. You see a diff and can accept or reject each change." / "Claude auto-accepts file edits and common filesystem commands like mkdir, touch, and mv, but still asks before running other terminal commands." / "Claude reads files and runs commands to explore, then proposes a plan without editing your source code." / "Claude runs without routine prompts; before actions such as shell commands and network requests run, a background classifier checks that they align with your request." / "On Pro, Max, and Ultra plans, enable "Allow bypass permissions mode" in Settings > Code or Settings > Claude Code." / "Only use this in sandboxed containers or VMs." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^tradeoff]: Documentación oficial de Claude Code, «Choose a permission mode». "Each mode makes a different tradeoff between convenience and oversight." https://code.claude.com/docs/en/permission-modes (consultado el 2026-10-31)
[^plan-tip]: Documentación oficial de Claude Code, «Desktop application». "Start complex tasks in Plan so Claude maps out an approach before making changes." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^remember]: Documentación oficial de Claude Code, «Desktop application». "A mode you pick in the selector is remembered per folder and takes precedence over defaultMode for that folder, except Plan, which applies to the current session only." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^old-names]: Documentación oficial de Claude Code, «Desktop application». "Earlier versions of the Code tab labeled these modes Ask permissions, Auto accept edits, and Plan mode." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^accept]: Documentación oficial de Claude Code, «Choose a permission mode». "acceptEdits mode auto-approves common filesystem Bash commands: mkdir, touch, rm, rmdir, mv, cp, and sed." / "Like file edits, auto-approval applies only to paths inside your working directory or additionalDirectories." https://code.claude.com/docs/en/permission-modes (consultado el 2026-10-31)
[^auto]: Documentación oficial de Claude Code, «Choose a permission mode». "Auto mode reduces permission prompts but does not guarantee safety. Use it for tasks where you trust the general direction, not as a replacement for review on sensitive operations." https://code.claude.com/docs/en/permission-modes (consultado el 2026-10-31)
[^same-settings]: Documentación oficial de Claude Code, «Desktop application». "The desktop app reads the same settings files as the CLI." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^checkpoint]: Documentación oficial de Claude Code, «Checkpointing». "Claude Code automatically tracks Claude's file edits as you work, allowing you to quickly undo changes and rewind to previous states if anything gets off track." / "Every prompt you send that starts a turn creates a new checkpoint" https://code.claude.com/docs/en/checkpointing (consultado el 2026-10-31)
[^restore]: Documentación oficial de Claude Code, «Checkpointing». "Restore code and conversation: revert both code and conversation to that point" / "Restore conversation: rewind to that message while keeping current code" / "Restore code: revert file changes while keeping the conversation" https://code.claude.com/docs/en/checkpointing (consultado el 2026-10-31)
[^restore-prompt]: Documentación oficial de Claude Code, «Checkpointing». "After restoring the conversation or choosing Summarize from here, the original prompt from the selected message is restored into the input field so you can re-send or edit it." https://code.claude.com/docs/en/checkpointing (consultado el 2026-10-31)
[^limits-bash]: Documentación oficial de Claude Code, «Checkpointing». "A file that only Bash commands changed isn't tracked and stays as it is. To revert it, use version control, such as Git." https://code.claude.com/docs/en/checkpointing (consultado el 2026-10-31)
[^limits-external]: Documentación oficial de Claude Code, «Checkpointing». "Checkpointing only tracks files that have been edited within the current session. Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured" https://code.claude.com/docs/en/checkpointing (consultado el 2026-10-31)
[^retention]: Documentación oficial de Claude Code, «Checkpointing». "Claude Code keeps file snapshots for the 100 most recent checkpoints in a session." / "by default about 30 days after the session last saved one" https://code.claude.com/docs/en/checkpointing (consultado el 2026-10-31)
[^critical]: Documentación oficial de Claude Code, «Choose a permission mode». "Claude Code doesn't auto-approve the following in any mode, including bypassPermissions" / "Recognized rm and rmdir critical-path removals, which no allow rule or PreToolUse hook "allow" approves" https://code.claude.com/docs/en/permission-modes (consultado el 2026-10-31)
