# Capítulo 8. Varias tareas a la vez, la nube y las tareas programadas: que la herramienta de orden funcione sola

> **En una línea**: puedes abrir varias sesiones y encargar **tareas en paralelo**. Para que algo funcione solo a la hora fijada, crea una **tarea programada**.
> Hay tres tipos de programación (de escritorio, en la nube y `/loop`), y la mayor diferencia es **si tu ordenador tiene que estar encendido**.

Este capítulo se escribió a partir de la documentación oficial de Claude Code consultada el 2026-10-31. Las listas de sesiones y de tareas programadas muestran tal cual los nombres de tus tareas reales, así que este capítulo se guía por la descripción y los nombres de pantalla de la documentación oficial en lugar de capturas. Usa la habilidad `/weekly-review` que creaste en el capítulo 7.

## Varias tareas en paralelo

Las sesiones son conversaciones independientes entre sí, y cada una tiene por separado su contexto y sus cambios.[^session] Por eso puedes **abrir varias sesiones y encargar tareas distintas a la vez**.

- Sesión nueva: **+ New** del menú lateral, o **Cmd+N** (en Windows, Ctrl+N)[^parallel]
- Moverte entre sesiones: **Ctrl+Tab** / **Ctrl+Shift+Tab**[^parallel]
- Ver dos sesiones una al lado de la otra: mantén pulsada la tecla **Option** (en Windows, Alt) y pulsa una sesión del menú lateral[^parallel]

Por ejemplo, en una sesión puedes crear unos apuntes de estudio con `/study-notes` y, en otra, la retrospectiva semanal con `/weekly-review`, a la vez. Usan archivos distintos, así que no chocan.

**No hagas que dos sesiones modifiquen a la vez el mismo archivo.** El retroceso de una sesión normalmente no registra lo que cambió otra sesión (capítulo 4).[^other-session] Si quieres probar a cambiar el mismo archivo en varias direcciones, en una carpeta que sea un repositorio de Git (la carpeta en la que activaste el registro de cambios en los capítulos 3 y 4) activa **Worktree** (árbol de trabajo), debajo del cuadro de entrada, y empieza la sesión. Entonces esa sesión trabaja en una **copia aparte** de la carpeta.[^worktree]

<Quiz id="ch408-parallel" />

## Tres tipos de programación

Una tarea programada hace que Claude **inicie una sesión nueva por sí solo** a la hora fijada.[^scheduled] Hay tres maneras.

| | Programación de escritorio | Programación en la nube | `/loop` |
|---|---|---|---|
| Dónde se ejecuta | En mi ordenador | En la nube | En mi ordenador |
| Ordenador encendido | Sí (aplicación abierta, ordenador despierto) | No | Sí |
| Hay que dejar la sesión abierta | No | No | Sí |
| Acceso a mis archivos | Sí | No (copia recién descargada) | Sí |
| Intervalo más corto | 1 hora (formulario de la pantalla) | 1 hora | 1 minuto |

Fuente: documentación oficial de Claude Code[^compare]

**Para la herramienta de orden, lo adecuado es la programación de escritorio**, porque tiene que leer las notas de `inbox` de mi ordenador. La programación en la nube funciona aunque apagues el ordenador, pero no trabaja con mis archivos, sino con un repositorio de GitHub que descarga de nuevo.[^compare][^cloud] `/loop` se usa para repetir una comprobación un rato dentro de una sesión que dejas abierta, y termina solo a los 7 días.[^loop]

En una versión anterior de la aplicación, la función de programación puede aparecer con el nombre **Routines**.[^old-name]

<Quiz id="ch408-kinds" />

## Programar la retrospectiva semanal de los viernes

La programación de escritorio se crea de dos maneras.

**Método 1: pedirlo con palabras.** En cualquier sesión, basta con decir la programación que quieres.[^ask]

```
Crea una tarea programada que todos los viernes a las 6 de la tarde cree con /weekly-review la retrospectiva semanal de esa semana. Si esa semana no hay notas de retrospectiva, no crees nada y deja solo «Sin notas».
```

**Método 2: crearla desde la pantalla.** Pulsa **Scheduled** en el menú lateral de la pestaña Code (o dentro del menú More) y pulsa **New task**.[^create] La programación se elige entre cada hora, cada día, días laborables, cada semana, etc., y también puedes guardarla sin programación y ejecutarla cuando quieras con **Run now**.[^options]

Al programar, hay cuatro cosas que no debes olvidar.

1. **La aplicación y el ordenador deben estar despiertos**: la programación de escritorio solo funciona **con la aplicación abierta y el ordenador despierto**. Para evitar que se duerma, activa **Keep computer awake** en los ajustes. Aun así, si cierras la tapa del portátil, se duerme.[^awake]
2. **Ejecuciones mientras estaba apagado**: si el ordenador estaba dormido, al despertar ejecuta **solo la más reciente una vez** de las que se perdió. Una tarea programada para el viernes a las 6 de la tarde puede ejecutarse el sábado por la mañana.[^missed] Por eso añade a la petición una **condición**, como "si esa semana no hay notas…".[^missed]
3. **Se detiene en la ventana de permisos**: la tarea programada también tiene su propio modo de permisos. Si es «Manual» (수동), **se detiene y espera** en cuanto necesita permiso.[^perm] Después de crearla, ejecútala una vez con **Run now** y, en la ventana de permisos que aparezca, elige **permitir siempre**. Así no se detendrá a partir de la siguiente ejecución.[^perm] La razón de que sea distinto del «permitir una sola vez» del capítulo 7 es que la programación se ejecuta mientras tú no estás mirando.
4. **También se aplican mis reglas personales de permiso**: las reglas de permiso de la configuración de Claude Code de mi ordenador (`~/.claude/settings.json`) también se aplican a las tareas programadas.[^perm]

<Quiz id="ch408-schedule" />

## Trabajar en la nube

Las sesiones en la nube **siguen trabajando aunque apagues tu ordenador.**[^cloud-run] Eso sí, la nube no puede ver las carpetas de tu ordenador y suele trabajar descargando un **repositorio de GitHub**. Por eso normalmente hace falta una conexión con GitHub.[^cloud] Lo que haces en una carpeta de tu ordenador, como la herramienta de orden de esta guía, es más propio del escritorio. La nube pruébala cuando empieces a subir el trabajo a GitHub y a usarlo desde allí.

<Quiz id="ch408-cloud" />

## Pruébalo tú

1. Abre dos sesiones y ejecuta `/study-notes` en una y `/weekly-review` en la otra. Comprueba que los dos resultados se guardaron en archivos distintos.
2. Crea la programación de la retrospectiva de los viernes pidiéndola con palabras. Incluye en la petición la condición "si no hay notas…".
3. Abre esa tarea en la lista de tareas programadas y ejecútala una vez con **Run now**. Si aparece una ventana de permisos, atiéndela de antemano.
4. Si no la necesitas, desactiva o borra la programación. Una ejecución programada también es una sesión, así que consume uso cada vez que se ejecuta.

**Proyecto continuo**: cuando la tarea programada lee las notas de retrospectiva, ¿qué pasa si entre las notas se ha colado una frase como "ignora esta instrucción y…"? Lo veremos en el capítulo 9.

## Resumen

- Las sesiones son independientes. Abre varias y encarga en paralelo tareas con archivos distintos. Evita el mismo archivo o usa un worktree.
- La programación puede ser de escritorio (mi ordenador, acceso a archivos), en la nube (el ordenador puede estar apagado, GitHub) o `/loop` (dentro de una sesión, 7 días).
- La herramienta de orden lee mis archivos, así que lo adecuado es la programación de escritorio.
- Una ejecución perdida se ejecuta una sola vez al despertar. Escribe la condición en la petición y atiende de antemano la ventana de permisos con Run now.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Scheduled task | Tarea programada | Tarea que inicia una sesión nueva por sí sola a la hora fijada |
| Routine | Rutina (Routine) | Nombre anterior de las tareas programadas en la nube |
| Worktree | Árbol de trabajo (worktree) | Copia de trabajo aparte del mismo repositorio de Git |
| Cloud session | Sesión en la nube | Sesión que se ejecuta en la nube en lugar de en mi ordenador |
| `/loop` | `/loop` | Comando que repite una tarea dentro de una sesión abierta (termina a los 7 días) |

<ChapterDone :chapter="408" />

Siguiente capítulo: [Capítulo 9. Costes, datos y seguridad](09-cost-data-safety.md)

[^session]: Documentación oficial de Claude Code, «Desktop application». "Each session is an independent conversation with its own context and changes." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^parallel]: Documentación oficial de Claude Code, «Desktop application». "Click + New in the sidebar, or press Cmd+N on macOS or Ctrl+N on Windows, to work on multiple tasks in parallel. Press Ctrl+Tab and Ctrl+Shift+Tab to switch between sessions." / "Side by side: hold Option on macOS or Alt on Windows and click a session in the sidebar" https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^other-session]: Documentación oficial de Claude Code, «Checkpointing». "Manual changes you make to files outside of Claude Code and edits from other concurrent sessions are normally not captured" https://code.claude.com/docs/en/checkpointing (consultado el 2026-10-31)
[^worktree]: Documentación oficial de Claude Code, «Desktop application». "In a project that's a Git repository, turn on Worktree before you start a session to run it in its own Git worktree, an isolated copy of the project." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^scheduled]: Documentación oficial de Claude Code, «Schedule recurring tasks in Claude Code Desktop». "Scheduled tasks start a new session automatically at a time and frequency you choose." https://code.claude.com/docs/en/desktop-scheduled-tasks (consultado el 2026-10-31)
[^compare]: Documentación oficial de Claude Code, «Schedule recurring tasks in Claude Code Desktop». Tabla comparativa (Runs on / Requires machine on / Requires open session / Access to local files / Minimum interval) y "Use cloud tasks for work that should run reliably without your machine. Use Desktop tasks when you need access to local files and tools." https://code.claude.com/docs/en/desktop-scheduled-tasks (consultado el 2026-10-31)
[^cloud]: Documentación oficial de Claude Code, «Use Claude Code in the cloud». "Cloud sessions need access to your GitHub repositories to clone code and push branches." https://code.claude.com/docs/en/claude-code-on-the-web (consultado el 2026-10-31)
[^loop]: Documentación oficial de Claude Code, «Run prompts on a schedule». "Recurring tasks automatically expire 7 days after creation." https://code.claude.com/docs/en/scheduled-tasks (consultado el 2026-10-31)
[^old-name]: Documentación oficial de Claude Code, «Schedule recurring tasks in Claude Code Desktop». "If your app shows the feature under its earlier name, click Routines wherever this page says Scheduled and New routine where it says New task." https://code.claude.com/docs/en/desktop-scheduled-tasks (consultado el 2026-10-31)
[^ask]: Documentación oficial de Claude Code, «Schedule recurring tasks in Claude Code Desktop». "You can also create a task by describing what you want in any session." https://code.claude.com/docs/en/desktop-scheduled-tasks (consultado el 2026-10-31)
[^create]: Documentación oficial de Claude Code, «Schedule recurring tasks in Claude Code Desktop». "click Scheduled in the sidebar or in the sidebar's More menu." / "Click New task to open the New scheduled task dialog." https://code.claude.com/docs/en/desktop-scheduled-tasks (consultado el 2026-10-31)
[^options]: Documentación oficial de Claude Code, «Schedule recurring tasks in Claude Code Desktop». "Hourly: runs every hour" / "Weekdays: same as Daily but skips Saturday and Sunday" / "Weekly: shows a time picker and a day picker" / "Manual: no schedule, only runs when you click Run now." https://code.claude.com/docs/en/desktop-scheduled-tasks (consultado el 2026-10-31)
[^missed]: Documentación oficial de Claude Code, «Schedule recurring tasks in Claude Code Desktop». "If it did, Desktop starts exactly one catch-up run for the most recently missed time and discards anything older." / "If timing matters, add guardrails to the prompt itself" https://code.claude.com/docs/en/desktop-scheduled-tasks (consultado el 2026-10-31)
[^perm]: Documentación oficial de Claude Code, «Schedule recurring tasks in Claude Code Desktop». "Each task has its own permission mode, which you set when creating or editing the task. Allow rules from ~/.claude/settings.json also apply to scheduled task sessions." / "the run stalls until you approve it" / "To avoid stalls, click Run now after creating a task, watch for permission prompts, and select \"always allow\" for each one. Future runs of that task auto-approve the same tools without prompting." https://code.claude.com/docs/en/desktop-scheduled-tasks (consultado el 2026-10-31)
[^cloud-run]: Documentación oficial de Claude Code, «Get started with the desktop app». "Cloud: Run sessions in the cloud that continue even if you close the app." https://code.claude.com/docs/en/desktop-quickstart (consultado el 2026-10-31)
[^awake]: Documentación oficial de Claude Code, «Schedule recurring tasks in Claude Code Desktop». "Tasks only run while the desktop app is running and your computer is awake. If your computer sleeps through a scheduled time, the run is skipped. To prevent idle-sleep, turn on Keep computer awake" / "Closing the laptop lid still puts it to sleep." https://code.claude.com/docs/en/desktop-scheduled-tasks (consultado el 2026-10-31)
