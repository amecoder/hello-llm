# Capítulo 5. Plan, programación, navegador y objetivo: encargar tareas con comandos de barra

> **En una línea**: `/plan` pide primero un plan antes de modificar nada, `/schedule` es un temporizador que funciona **solo dentro de esta conversación**, y la programación que sigue funcionando más allá de la conversación son las **Automations**.
> `/browser` maneja Chrome para hacer tareas web, y `/goal` no se detiene hasta que todo esté hecho. Los dos pueden gastar mucho uso.

Este capítulo se ha escrito a partir de la documentación oficial de Antigravity consultada el 1 de noviembre de 2026. Esta guía no llegó a guardar ninguna programación de verdad, porque se mostraría el contenido real del trabajo y gastaría uso (por la misma razón que en el [capítulo 8 de Claude Code](../20-claude-code/08-parallel-cloud-schedule.md)).

## Recibir primero el plan: `/plan`

Una petición normal empieza enseguida a modificar archivos. Con `/plan`, primero examina la carpeta y te muestra ordenados los puntos que hay que decidir.[^plan] Si el plan está bien, pulsa **Proceed** para pasar a la ejecución.[^proceed]

```
/plan Quiero añadir una columna de 'fecha de redacción' a las plantillas de acta, nota de estudio y balance semanal. Muéstrame solo el plan de qué habría que cambiar.
```

Si los requisitos todavía son vagos, `/grill-me` te ayuda. Antes de empezar pregunta **de una en una**, con una respuesta recomendada.[^grill] Es como si la herramienta sacara por ti lo que aprendiste en el capítulo 5 de Claude Code, "cómo encargar bien las cosas".

<Quiz id="ch605-plan" />

## Programación: `/schedule` y Automations

En Antigravity hay **dos tipos** de programación.

| | `/schedule` | Automations |
|---|---|---|
| Dónde vive | Dentro de la conversación en que se creó | Fuera de la conversación (barra lateral de la app) |
| Cuánto dura | Mientras dure esa conversación | Se mantiene aunque vuelvas a abrir la app |
| Cada vez | Despierta la misma conversación | Empieza una conversación nueva |

Fuente: documentación oficial de Antigravity (solo una parte)[^compare]

`/schedule` crea un temporizador que suena una vez o un calendario repetido, y no bloquea la conversación mientras espera.[^schedule] Pero como pertenece a esa conversación, para una tarea que debe seguir funcionando, como **el balance semanal de todos los viernes**, se usan las **Automations**.[^scoped]

Las Automations envían mensajes al agente según el calendario que hayas fijado, incluso cuando no estás.[^automations] Se abren en **Automations**, en la barra lateral de la app. Ten en cuenta varias cosas.

- En cada ejecución eliges el nivel de modelo (Flash Lite, Flash o Pro). Por defecto es Flash.[^tier]
- No se ejecutan en el minuto exacto. Se reparten hasta el 10 % del intervalo, con un máximo de 15 minutos.[^jitter]
- Con **Run Now** puedes ejecutar una vez de inmediato, o con **Create with Prompt** crearla conversando con el agente.[^run-now]

Mientras el agente trabaja, impide que el ordenador se duerma.[^sleep] Pero **la documentación oficial no dice si las Automations se ejecutan cuando la app está cerrada o el ordenador está dormido.** Como con las programaciones de escritorio de Claude Code y Codex, es más seguro dejar la app abierta y el ordenador despierto (recomendación de esta guía).

Antes de crear una programación, prueba primero la misma petición en una conversación normal, ejecútala una vez con Run Now y solo entonces fija el calendario.

<Quiz id="ch605-schedule" />

## Navegador y objetivo: `/browser` y `/goal`

`/browser` encarga las tareas web a un **subagente de navegador**. Este subagente maneja Google Chrome para abrir páginas, hacer clic y tomar capturas de pantalla.[^browser] Todas las sesiones de navegador se **graban en vídeo** y quedan en los resultados.[^recorded] Ejecutar scripts en la página pide permiso por defecto.[^js]

`/goal` hace que trabaje sin detenerse a mitad hasta cumplir el objetivo.[^goal] No tiene un límite de repeticiones, así que sigue hasta que considere que ha terminado o hasta que tú lo pares.[^no-cap] Como puede gastar mucho uso, escribe con claridad **el criterio de "ya está hecho"**. Por ejemplo, así.

```
/goal Organiza las 6 notas de inbox en notes con la plantilla. Criterio de terminado: hay un archivo de resultado por cada nota, y al final de cada archivo hay un apartado «Para cotejar con el original».
```

El modo objetivo cambia **solo la forma de detenerse**. Los ajustes de permisos y de revisión se quedan igual, así que lo que normalmente pedía permiso lo sigue pidiendo.[^goal-perm]

<Quiz id="ch605-browser-goal" />

## Seguirlo desde otro dispositivo

Si activas **Settings → Application → Enable Remote Control** en la app, puedes manejar el Antigravity de tu ordenador desde el navegador web de otro dispositivo.[^remote][^any-browser] En el otro dispositivo, inicia sesión también con **la misma cuenta de Google que en el escritorio**.[^same-account]

Aunque lo uses en remoto, el trabajo se hace con los archivos, las herramientas y los datos de inicio de sesión de **tu ordenador**.[^local] Por lo cómodo que es, activa el control remoto solo en dispositivos de confianza.

<Quiz id="ch605-remote" />

## Prueba tú

1. Con `/plan`, pide solo el plan de la columna de 'fecha de redacción' de arriba y lee el plan antes de pulsar Proceed.
2. Abre Automations en la barra lateral (no hace falta crear nada).
3. Si creas una programación, pruébala antes en una conversación normal y con Run Now.
4. Si usas `/goal`, escribe también el "criterio de terminado".

**Proyecto continuo**: en el capítulo 6 comprobaremos la misma herramienta de organización con `agy` en el terminal y veremos las trampas con las que se encontró esta guía.

## Resumen

- `/plan` pide primero el plan, y `/grill-me` saca los requisitos con una pregunta cada vez.
- `/schedule` solo dentro de esa conversación; lo que debe seguir funcionando, en Automations.
- La documentación no dice si las Automations funcionan con la app cerrada. Es más seguro dejar la app abierta y el ordenador despierto.
- `/browser` maneja Chrome y lo graba. `/goal` no se detiene, así que dale un criterio de terminado.
- El control remoto se usa con la misma cuenta, y el trabajo se hace en tu ordenador.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Automations | Automatizaciones | Programación que sigue funcionando más allá de la conversación |
| Subagent | Subagente | Agente auxiliar al que el agente principal reparte trabajo |
| Remote Control | Control remoto | Manejar el Antigravity de tu ordenador desde otro dispositivo |

<ChapterDone :chapter="605" />

Siguiente capítulo: [Capítulo 6. Usarlo desde el terminal](06-terminal.md)

[^plan]: Documentación oficial de Antigravity, «Plan (/plan)». "While standard prompts immediately begin modifying files, `/plan` introduces an intentional planning phase that explores the workspace, identifies dependencies, and surfaces architectural decisions for your review." https://antigravity.google/docs/plan (consultado el 2026-11-01)
[^proceed]: Documentación oficial de Antigravity, «Plan (/plan)». "**Proceed**: Click **Proceed** to transition the agent into execution mode." https://antigravity.google/docs/plan (consultado el 2026-11-01)
[^grill]: Documentación oficial de Antigravity, «Slash commands overview». "The agent asks one question at a time and recommends an answer for each." https://antigravity.google/docs/slash-commands (consultado el 2026-11-01)
[^compare]: Documentación oficial de Antigravity, «Schedule command (/schedule)». "| **Lifetime** | Current conversation | Persists across sessions and restarts |" / "| **Context** | Wakes the existing agent with its full conversation history | Starts a fresh agent conversation on each run |" https://antigravity.google/docs/commands/schedule (consultado el 2026-11-01)
[^schedule]: Documentación oficial de Antigravity, «Schedule command (/schedule)». "Set a one-time timer or a recurring cron schedule that wakes the agent with an instruction, without blocking the conversation while it waits." https://antigravity.google/docs/commands/schedule (consultado el 2026-11-01)
[^scoped]: Documentación oficial de Antigravity, «Schedule command (/schedule)». "**Conversation-scoped**: timers and schedules belong to the conversation that created them. For standing jobs that outlive a session, use a persistent [sidecar or Automation](https://antigravity.google/docs/sidecars) instead." https://antigravity.google/docs/commands/schedule (consultado el 2026-11-01)
[^automations]: Documentación oficial de Antigravity, «Antigravity features». "Automations (previously called scheduled tasks) let you plan ahead with your projects by sending messages to your agents on a schedule, even while you’re away." https://antigravity.google/docs/features (consultado el 2026-11-01)
[^tier]: Documentación oficial de Antigravity, «Antigravity features». "**Model tier**: Each automation runs on the model tier you choose: Flash Lite, Flash (the default), or Pro." https://antigravity.google/docs/features (consultado el 2026-11-01)
[^jitter]: Documentación oficial de Antigravity, «Antigravity features». "Antigravity spreads them out by up to 10% of the interval, and by no more than 15 minutes." https://antigravity.google/docs/features (consultado el 2026-11-01)
[^run-now]: Documentación oficial de Antigravity, «Antigravity features». "**Run on demand**: Run an automation right away with **Run Now** from its menu, or select **Create with Prompt** to have the agent walk you through setting up a new one." https://antigravity.google/docs/features (consultado el 2026-11-01)
[^sleep]: Documentación oficial de Antigravity, «FAQ». "If an agent is running, Antigravity prevents your computer from sleeping." https://antigravity.google/docs/faq (consultado el 2026-11-01)
[^browser]: Documentación oficial de Antigravity, «Browser command (/browser)». "Hand a web task to the **`browser` subagent**, which drives Google Chrome to navigate pages, interact with your running app, inspect the console and network, and capture screenshots and recordings." https://antigravity.google/docs/commands/browser (consultado el 2026-11-01)
[^recorded]: Documentación oficial de Antigravity, «Browser command (/browser)». "**Recorded sessions**: every browser session is recorded and saved to the conversation’s artifacts as a WebM video." https://antigravity.google/docs/commands/browser (consultado el 2026-11-01)
[^js]: Documentación oficial de Antigravity, «Browser command (/browser)». "Running JavaScript in the page (`evaluate_script`) prompts for your approval by default." https://antigravity.google/docs/commands/browser (consultado el 2026-11-01)
[^goal]: Documentación oficial de Antigravity, «Goal command (/goal)». "The agent keeps working, verifying, and fixing until it’s confident the goal is completely fulfilled, instead of yielding back to you after each intermediate step." https://antigravity.google/docs/commands/goal (consultado el 2026-11-01)
[^no-cap]: Documentación oficial de Antigravity, «Goal command (/goal)». "**Runs until done or cancelled**: there’s no iteration cap." https://antigravity.google/docs/commands/goal (consultado el 2026-11-01)
[^goal-perm]: Documentación oficial de Antigravity, «Goal command (/goal)». "Goal mode changes only the agent’s stopping behavior. It doesn’t change your [tool permissions](https://antigravity.google/docs/permissions) or [artifact review policies](https://antigravity.google/docs/artifact-review), so any approvals you’d normally be asked for still apply." https://antigravity.google/docs/commands/goal (consultado el 2026-11-01)
[^remote]: Documentación oficial de Antigravity, «Antigravity features». "In **Settings**, open **Application** and turn on **Enable Remote Control**." https://antigravity.google/docs/features (consultado el 2026-11-01)
[^same-account]: Documentación oficial de Antigravity, «Remote Control». "Sign in with the same Google Account that you used on your desktop application." https://antigravity.google/docs/remote-control (consultado el 2026-11-01)
[^local]: Documentación oficial de Antigravity, «Antigravity features». "**Keep your local setup**: Agents keep full access to your workstation’s files, toolchains, credentials, and Git worktrees, without a separate environment." https://antigravity.google/docs/features (consultado el 2026-11-01)
[^any-browser]: Documentación oficial de Antigravity, «Remote Control». "Antigravity Remote Control allows you to securely connect to and drive your Antigravity desktop sessions and CLI instances running across your machines from any web browser." https://antigravity.google/docs/remote-control (consultado el 2026-11-01)
