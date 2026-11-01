# Capítulo 2. Instalar la aplicación y el primer orden — abrir una carpeta como proyecto

> **En una línea**: instala la aplicación Antigravity, inicia sesión con tu cuenta de Google y abre la carpeta de la herramienta de orden como **proyecto**.
> Al principio encárgalo con **Planning mode** (primero el plan), y después de leer el plan avanza con **Proceed**.

Este capítulo se escribió a partir de la documentación oficial de Antigravity consultada el 1 de noviembre de 2026. **Esta guía todavía no ha podido practicar con la pantalla de la aplicación.** Los nombres de las pantallas se han puesto tal como están en inglés en la documentación oficial, y si tu pantalla es distinta, sigue tu pantalla. El resultado de una ejecución real está en el capítulo 3 (ejecutar desde el terminal).

## Instalar e iniciar sesión

1. En [antigravity.google/download](https://antigravity.google/download) descarga el archivo de instalación para tu ordenador. En macOS, abre `Antigravity.dmg` y arrastra la aplicación a la carpeta **Applications**.[^dmg]
2. Abre la aplicación y pulsa **Sign in**. Cuando se abra el navegador, inicia sesión con tu cuenta personal de Google.[^signin]

El plan de la cuenta con la que inicias sesión (gratuito, Pro o Ultra) determina el uso y los modelos ([capítulo 1](01-what-is.md)).

<Quiz id="ch602-install" />

## Abrir una carpeta como proyecto

El agente de la aplicación Antigravity trabaja dentro de un **proyecto** (Projects). El proyecto fija el ámbito de carpetas que el agente puede tocar y sus permisos.[^projects]

1. Pulsa el icono **New Project** (una carpeta con un signo más) de la barra lateral izquierda.[^new-project]
2. Con **Add Folder**, elige la carpeta de la herramienta de orden. También sirve una carpeta normal que no sea un repositorio de Git.[^new-project]

Al enviar la primera orden eliges la forma de trabajar.[^modes]

| Nombre | Qué hace |
|---|---|
| Local mode | Trabajar directamente en la carpeta actual |
| New worktree mode | Trabajar en un espacio de trabajo de Git separado |

Fuente: documentación oficial de Antigravity[^modes]

Para la herramienta de orden basta con **Local mode**. New worktree mode es una forma que solo se usa en repositorios de Git.[^worktree]

Un proyecto nuevo empieza con el permiso **Inherit Global** y puede leer y escribir en todas las carpetas del proyecto.[^inherit] Los permisos se tratan en el capítulo 4.

<Quiz id="ch602-project" />

## Recibir primero el plan y después avanzar

Al empezar una conversación nueva eliges uno de dos modos.[^planning]

| Nombre | Qué hace | Cuándo |
|---|---|---|
| Planning mode | Primero hace un plan y luego ejecuta | La primera vez que encargas algo |
| Fast mode | Ejecuta directamente sin plan | Tareas pequeñas, como cambiar un nombre |

Fuente: documentación oficial de Antigravity (solo una parte)[^planning]

Al principio recomiendo **Planning mode**. Cuando salga el plan de trabajo (Implementation plan), léelo y, si te parece bien, pulsa **Proceed**, en la conversación o en la parte de arriba del plan, para avanzar.[^proceed] Cumple la misma función que el modo «plan» del capítulo 5 de Claude Code y el `/plan` del capítulo 4 de Codex.

En la pestaña **Agent** de los ajustes puedes elegir el modo de revisión. **Request review** se detiene cuando ha hecho el plan o los cambios y espera mi aprobación.[^review-mode] En cambio, Always proceed no se detiene y ejecuta enseguida.[^always] Al principio, Request review es lo más seguro.

Cuando termina el trabajo, el agente hace un **informe de lo ordenado** (Walkthrough) que resume lo que ha cambiado.[^walkthrough]

<Quiz id="ch602-plan" />

## Encargar el primer orden

Envía la misma petición que a las dos herramientas anteriores.

```
Ordena las notas de inbox/회의-2026-10-27-주간회의.txt como acta de reunión y guárdala como archivo nuevo en la carpeta notes/.
```

Si quieres señalar un archivo, también puedes escribir `@` y elegirlo. Aunque señales el archivo, su contenido no se pega: al agente le llega la ruta del archivo y lo lee cuando lo necesita.[^mention]

El resultado de esta misma petición, ejecutada por esta guía desde el terminal (`agy`), está en el [capítulo 3](03-rules-skills.md). La aplicación y el terminal usan el mismo agente ([capítulo 1](01-what-is.md)).

**Contrasta el resultado con el original.** ¿Se han pasado las 5 tareas pendientes? ¿Coinciden con las de la nota el responsable y el plazo? ¿No se ha inventado contenido que no está en la nota?

<Quiz id="ch602-first" />

## Ver lo que ha cambiado

La ventana **Review** de la aplicación muestra los cambios del repositorio de Git del proyecto.[^review] La vista por defecto son todos los cambios que aún no se han registrado (**Uncommitted**), así que también aparece lo que cambiaste tú. Si eliges **Agent Edits**, solo ves los archivos que el agente modificó en esta conversación.[^views]

Como la ventana Review muestra los cambios del repositorio de Git, es cómodo convertir también la carpeta de la herramienta de orden en un repositorio de Git. Si seguiste el capítulo 3 de Claude Code o el capítulo 2 de Codex, ya es un repositorio de Git. En la documentación oficial no se dice cómo se ve la ventana Review en una carpeta que no es de Git.

<Quiz id="ch602-review" />

## Practica tú mismo

1. Instala la aplicación e inicia sesión.
2. Con New Project → Add Folder, abre la carpeta de la herramienta de orden.
3. Envía la petición de arriba con Planning mode, lee el plan y pulsa Proceed.
4. Contrasta el acta resultante con la nota original y comprueba en la ventana Review qué archivos han cambiado.

**Proyecto continuo**: en el capítulo 3 se prueba si cumple las reglas (`AGENTS.md`) y las skills sin necesidad de trasladarlas.

## Resumen

- En la aplicación: Sign in → inicia sesión con una cuenta personal de Google.
- Con New Project → Add Folder abres una carpeta como proyecto. También sirve una carpeta normal.
- Al principio, con Planning mode y Request review, lee el plan y pulsa Proceed.
- La ventana Review muestra los cambios de Git. Con Agent Edits ves solo los cambios del agente.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Project | Proyecto | El conjunto de la carpeta en la que trabaja el agente y sus permisos |
| Planning mode | Modo de planificación | Forma de trabajar que hace primero el plan y luego ejecuta |
| Implementation plan | Plan de implementación | El plan de trabajo que prepara el agente |
| Walkthrough | Informe de recorrido | El informe resumen tras terminar el trabajo |

<ChapterDone :chapter="602" />

Siguiente capítulo: [Capítulo 3. Reglas y skills — no hace falta trasladarlas](03-rules-skills.md)

[^dmg]: Documentación oficial de Antigravity, «Get started». "Open the downloaded `Antigravity.dmg` disk image and drag **Antigravity** into your **Applications** folder." https://antigravity.google/docs/getting-started (consultado el 2026-11-01)
[^signin]: Documentación oficial de Antigravity, «Authenticate». "Click **Sign in** to open the browser authentication flow." / "Complete the browser-based OAuth flow using your personal Google Account (Free, Pro, or Ultra plan)." https://antigravity.google/docs/install (consultado el 2026-11-01)
[^projects]: Documentación oficial de Antigravity, «Get started». "Agents operate within **Projects**, which define the repository boundaries, file scopes, and security permissions for your workspaces." https://antigravity.google/docs/getting-started (consultado el 2026-11-01)
[^new-project]: Documentación oficial de Antigravity, «Get started». "Click the **New Project** icon (folder with a plus sign) in the left sidebar." / "Click **Add Folder** to select one or more local Git repositories or working directories." https://antigravity.google/docs/getting-started (consultado el 2026-11-01)
[^modes]: Documentación oficial de Antigravity, «Get started». "**Local mode**: The agent operates directly in your active folders." / "**New worktree mode**: The agent operates in an isolated Git worktree." https://antigravity.google/docs/getting-started (consultado el 2026-11-01)
[^worktree]: Documentación oficial de Antigravity, «Projects». "**New worktree mode**: Creates a new Git worktree for the conversation. Best for complex tasks, keeping your active working folder untouched and preventing parallel subagents from conflicting." https://antigravity.google/docs/projects (consultado el 2026-11-01)
[^inherit]: Documentación oficial de Antigravity, «Projects». "**Settings**: When a project is created, it starts with the **Inherit Global** permission preset, following your global permission settings, with read and write access to all of your project’s folders." https://antigravity.google/docs/projects (consultado el 2026-11-01)
[^planning]: Documentación oficial de Antigravity, «Artifact review». "**Planning mode**: The agent plans thoroughly before executing tasks." / "**Fast mode**: The agent executes tasks directly without a dedicated planning phase." https://antigravity.google/docs/artifact-review (consultado el 2026-11-01)
[^proceed]: Documentación oficial de Antigravity, «Implementation plan». "You can click **Proceed** either in the conversation or in the artifact header to immediately continue with the agent’s plan." https://antigravity.google/docs/implementation-plan (consultado el 2026-11-01)
[^review-mode]: Documentación oficial de Antigravity, «Artifact review». "You can customize the review workflow in the **Agent** tab of the **Settings** pane." / "The agent always halts and requests your explicit approval before proceeding with proposed changes:" https://antigravity.google/docs/artifact-review (consultado el 2026-11-01)
[^always]: Documentación oficial de Antigravity, «Artifact review». "The agent never halts for manual review and immediately proceeds with executing its plans:" https://antigravity.google/docs/artifact-review (consultado el 2026-11-01)
[^walkthrough]: Documentación oficial de Antigravity, «Walkthrough». "The agent creates walkthrough artifacts when it completes task implementation. This type of artifact includes a concise summary of the changes made to remind you of what happened in the active conversation." https://antigravity.google/docs/walkthrough (consultado el 2026-11-01)
[^mention]: Documentación oficial de Antigravity, «Mentions and quoting». "Mentioning a file or folder doesn’t paste its contents into your prompt." / "| A file or folder | Its full path. The agent reads it when it needs to. |" https://antigravity.google/docs/at-mentions (consultado el 2026-11-01)
[^review]: Documentación oficial de Antigravity, «Review changes». "In the Antigravity App, the **Review** pane shows the changes in your project’s Git repository, including the agent’s edits." https://antigravity.google/docs/review-changes (consultado el 2026-11-01)
[^views]: Documentación oficial de Antigravity, «Review changes». "| **Agent Edits** | The files the agent modified in this conversation, whether or not they’re committed. |" / "| **Uncommitted** | Staged and unstaged changes in your working tree, grouped under **Staged Changes** and **Changes**. This is the default. |" https://antigravity.google/docs/review-changes (consultado el 2026-11-01)
