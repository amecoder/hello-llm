# Capítulo 6. Programación, nube y móvil: solo en el momento fijado, aunque no estés

> **En una línea**: lo que haces igual todas las semanas lo ejecutas con una **programación** (Scheduled). Una programación que usa mi carpeta solo se ejecuta si **el ordenador está encendido y la aplicación en marcha.**
> La nube es para quien tiene un repositorio de GitHub, y el móvil se usa como un mando a distancia que maneja mi ordenador.

Este capítulo está escrito a partir de la documentación oficial de Codex consultada el 1 de noviembre de 2026. Esta guía no llegó a guardar ninguna programación. El motivo es que se vería el contenido real del trabajo y se gastaría uso (es la misma razón que en el [capítulo 8 de Claude Code](../20-claude-code/08-parallel-cloud-schedule.md)).

## Ejecutar cada semana la reflexión semanal con una programación

Una tarea programada es una función que deja fijado un trabajo que se repite y lo ejecuta en segundo plano.[^schedule] Tanto las programaciones como el historial de ejecuciones se ven en **Scheduled**, en la barra lateral de la aplicación.[^inbox]

Las programaciones se crean en la aplicación de escritorio o en la web, y la terminal (Codex CLI) no tiene pantalla para gestionarlas.[^no-cli] Las programaciones también se crean conversando.[^chat-create] Dentro de una programación puedes llamar a una skill con `$nombre-de-la-skill`.[^skill] Con la skill del capítulo 5 puedes pedirlo así.

```
Cada viernes a las 6 de la tarde, con $weekly-review crea en la carpeta notes la reflexión semanal de esa semana.
```

**Hay una condición.** Una programación que usa carpetas de mi ordenador solo se ejecuta si el ordenador está encendido y la aplicación en marcha.[^awake] El ajuste **Prevent sleep while running** de macOS y Linux hace que el ordenador no se duerma **mientras se ejecuta** una conversación, de modo que la conversación continúe aunque no estés.[^sleep] No es una función que mantenga despierto el ordenador hasta la hora de la programación, así que, si vas a usar programaciones, comprueba aparte los ajustes de suspensión de tu ordenador.

Las programaciones se ejecutan **sin nadie delante.** Por eso mantienen el alcance de mi valla básica (el sandbox), pero, si la organización no lo impide, se ejecutan **sin pedir permiso.**[^unattended] Lo que queda fuera de la valla, como no hay nadie a quien preguntar, se puede dar por fallido.

| Mi permiso básico (la valla) | Qué pasa en la programación |
|---|---|
| Solo lectura | Una programación que tenga que escribir archivos falla |
| Escribir dentro de la carpeta | Los trabajos que escriben solo dentro de la carpeta, como la herramienta de orden, se ejecutan |
| Full access | Usa archivos, comandos e internet sin preguntar. Es peligroso |

Fuente: documentación oficial de Codex (solo una parte; la fila del medio es un resumen de esta guía)[^modes]

Con el menú de permisos del capítulo 4: Ask for approval y Approve for me usan la valla de la fila del medio (escribir dentro de la carpeta), y Full access, la de la última fila.[^ask] Pero en una programación, aunque esté en Ask for approval, **no pregunta.** «Solo lectura» es un ajuste que puede no verse por separado en el menú.

Antes de crear una programación, **ejecuta primero la misma petición en una conversación normal.** Como en el capítulo 5, compara el resultado con el original y, cuando esté bien, pásalo a una programación. Comprueba también los resultados de las primeras ejecuciones. La documentación oficial recomienda el mismo orden.[^test]

<Quiz id="ch506-schedule" />

## En qué se diferencia la nube

Las tareas en la nube se ejecutan en un espacio de trabajo al otro lado de internet, así que siguen aunque mi ordenador esté dormido.[^cloud] A cambio, tienen condiciones.

- Tiene que haber un **entorno publicado** (published environment) al que yo pueda acceder.[^env]
- Para crear el entorno, eliges un **repositorio de GitHub** y lo conectas.[^github]
- Los archivos de mi ordenador, los programas en ejecución y los inicios de sesión del navegador no pasan a la nube.[^not-moved]

La carpeta de la herramienta de orden está solo en mi ordenador, así que esta guía no usa la nube. Si en el trabajo usas GitHub, recuerda solo que los trabajos largos puedes mandarlos a la nube y apagar el ordenador.

<Quiz id="ch506-cloud" />

## Seguirlo desde el móvil

Desde el móvil puedes ver cómo avanza, dar permisos y enviar instrucciones. El trabajo real se ejecuta en la nube o en **mi ordenador conectado.**[^mobile] Para conectar mi ordenador, en la aplicación pulsa **Set up** en **Settings → Connections → Control this Mac or PC.**[^connect]

La conexión se hace con un código QR. La documentación oficial dice que **conectes solo dispositivos tuyos y de confianza.**[^trust] El motivo es que un móvil conectado puede manejar el Codex de mi ordenador.

La documentación oficial lo explica tomando como base la aplicación de iOS. Las funciones se abren por turnos en cada cuenta, así que puede que en mi móvil todavía no estén.[^rollout]

<Quiz id="ch506-mobile" />

## Pruébalo tú

1. Abre **Scheduled** en la barra lateral (no hace falta crear nada).
2. Ejecuta una vez más `$weekly-review` del capítulo 5 en una conversación normal y comprueba el resultado.
3. Si vas a crear una programación, comprueba que el trabajo termina dentro de la carpeta y compara el resultado de la primera ejecución con el original.

**Proyecto continuo**: en el capítulo 7 comprobaremos esa misma herramienta de orden con una sola línea de `codex exec` en la terminal.

## Resumen

- Las programaciones se crean conversando y se ven en Scheduled. Una programación puede llamar a una `$skill`.
- Una programación que usa mi carpeta exige que el ordenador esté encendido y la aplicación en marcha.
- Las programaciones se ejecutan sin nadie delante y usan el permiso básico tal cual. Full access es peligroso.
- La nube necesita un repositorio de GitHub y un entorno publicado. Mis archivos no pasan a ella.
- El móvil maneja mi ordenador o la nube. Conecta solo dispositivos de confianza.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Scheduled | programadas | El sitio donde se ven las tareas programadas y su historial de ejecuciones |
| Published environment | entorno publicado | El espacio de trabajo preparado desde el que empiezan las tareas en la nube |
| Unattended | sin supervisión | Ejecución sin que nadie la vigile |

<ChapterDone :chapter="506" />

Siguiente capítulo: [Capítulo 7. Usarlo en la terminal](07-terminal.md)

[^schedule]: Documentación oficial de Codex, «Scheduled tasks». "Schedule recurring tasks to run in the background." https://learn.chatgpt.com/docs/automations (consultado el 2026-11-01)
[^inbox]: Documentación oficial de Codex, «Scheduled tasks». "Find all scheduled tasks and their runs on **Scheduled** in the ChatGPT desktop app sidebar." https://learn.chatgpt.com/docs/automations (consultado el 2026-11-01)
[^chat-create]: Documentación oficial de Codex, «Scheduled tasks». "You can create and update scheduled tasks from a ChatGPT or Codex chat." https://learn.chatgpt.com/docs/automations (consultado el 2026-11-01)
[^skill]: Documentación oficial de Codex, «Scheduled tasks». "In the ChatGPT desktop app, you can explicitly trigger a skill in a scheduled task prompt by using `$skill-name`." https://learn.chatgpt.com/docs/automations (consultado el 2026-11-01)
[^awake]: Documentación oficial de Codex, «Scheduled tasks». "Keep the computer on and the app running when a scheduled task needs local files." https://learn.chatgpt.com/docs/automations (consultado el 2026-11-01)
[^sleep]: Documentación oficial de Codex, «Settings». "On macOS and Linux, turn on **Prevent sleep while running** so local chats can continue while you step away." https://learn.chatgpt.com/docs/reference/settings (consultado el 2026-11-01)
[^unattended]: Documentación oficial de Codex, «Scheduled tasks». "Scheduled tasks run unattended with your default sandbox settings." / "Scheduled tasks use `approval_policy = "never"` when your organization policy allows it." https://learn.chatgpt.com/docs/automations (consultado el 2026-11-01)
[^modes]: Documentación oficial de Codex, «Scheduled tasks». "If your sandbox mode is **read-only**, tool calls fail if they require modifying files, accessing network, or working with apps on your computer." / "If your sandbox mode is **full access**, background scheduled tasks carry elevated risk, as ChatGPT may change files, run commands, and access network without asking." https://learn.chatgpt.com/docs/automations (consultado el 2026-11-01)
[^test]: Documentación oficial de Codex, «Scheduled tasks». "Before you schedule a task, test the prompt manually in a regular chat first." / "When you start scheduling runs, review the first few outputs and adjust the prompt or cadence as needed." https://learn.chatgpt.com/docs/automations (consultado el 2026-11-01)
[^cloud]: Documentación oficial de Codex, «Codex Cloud». "Each task has its own workspace and can keep working while your computer is asleep." https://learn.chatgpt.com/docs/cloud (consultado el 2026-11-01)
[^env]: Documentación oficial de Codex, «Codex environments». "A cloud task requires a published environment you can access." https://learn.chatgpt.com/docs/environments/modes (consultado el 2026-11-01)
[^github]: Documentación oficial de Codex, «Codex Cloud». "Choose your GitHub repositories and select Get started. Connect GitHub if prompted." https://learn.chatgpt.com/docs/cloud (consultado el 2026-11-01)
[^not-moved]: Documentación oficial de Codex, «Codex environments». "Your computer's local files, running processes, browser sign-ins, and VPN access aren't automatically transferred to it." https://learn.chatgpt.com/docs/environments/modes (consultado el 2026-11-01)
[^mobile]: Documentación oficial de Codex, «Codex on mobile». "Follow progress, approve actions, and send instructions from your phone. Codex runs tasks in the cloud or on a connected computer." https://learn.chatgpt.com/docs/mobile (consultado el 2026-11-01)
[^connect]: Documentación oficial de Codex, «Codex on mobile». "Go to **Settings** > **Connections** > **Control this Mac or PC** and select **Set up** or **Add**." https://learn.chatgpt.com/docs/mobile (consultado el 2026-11-01)
[^trust]: Documentación oficial de Codex, «Codex on mobile». "Only connect devices you own and trust." https://learn.chatgpt.com/docs/mobile (consultado el 2026-11-01)
[^rollout]: Documentación oficial de Codex, «Codex on mobile». "Use the ChatGPT mobile app with Cloud or a connected Mac or Windows PC. Availability depends on rollout and your workspace settings." https://learn.chatgpt.com/docs/mobile (consultado el 2026-11-01)
[^ask]: Documentación oficial de Codex, «Permissions». "For most work, start with **Ask for approval**. It lets ChatGPT work within the current workspace and pauses before reaching beyond that boundary." / "Changing who reviews a request doesn't expand the sandbox." https://learn.chatgpt.com/docs/permission-modes (consultado el 2026-11-01)
[^no-cli]: Documentación oficial de Codex, «Scheduled tasks». "Codex CLI doesn't provide the Scheduled management interface." https://learn.chatgpt.com/docs/automations (consultado el 2026-11-01)
