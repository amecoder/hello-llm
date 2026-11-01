# Capítulo 2. Empezar con Codex en la app de ChatGPT: abrir una carpeta y encargar la primera organización

> **En una línea**: instala la app de escritorio de ChatGPT, elige **Codex** arriba a la izquierda y abre la carpeta de la herramienta de organización con **Choose project**, encima del cuadro de escritura.
> Después, haz organizar una nota de reunión con la misma petición del capítulo 2 de Claude Code y coteja el resultado con el original.

Este capítulo se ha escrito a partir de la documentación oficial de Codex y de la pantalla de la app de escritorio de ChatGPT para macOS consultadas el 1 de noviembre de 2026. Las pantallas de esta guía están en **inglés**. Si tu pantalla está en español, busca los botones en el mismo sitio.

## Instalar e iniciar sesión

1. Descarga e instala la app de ChatGPT para tu ordenador desde [chatgpt.com/download](https://chatgpt.com/download/). Para Linux, sigue las instrucciones aparte de la documentación oficial.[^install]
2. Abre la app e inicia sesión con tu cuenta de ChatGPT.[^signin]

Si ya usaste ChatGPT en la etapa 2, entra con la misma cuenta. La cuenta y los planes se trataron en el [capítulo 1 de ChatGPT de la etapa 2](../11-chatgpt/01-getting-started.md).

<Quiz id="ch502-install" />

## Elegir Codex y abrir una carpeta

Si pulsas la **etiqueta de arriba a la izquierda** de la app, puedes elegir entre ChatGPT y Codex. Chat y Work se cambian, una vez elegido ChatGPT, con el interruptor que hay encima del cuadro de escritura.[^toggle] La documentación oficial también dice que, para las tareas que necesitan herramientas de desarrollo, elijas **Codex** en este menú.[^select] Cuando eliges Codex, en el centro aparece "What should we build?" (¿Qué construimos?).

Justo encima del cuadro de escritura hay dos opciones.

| Nombre en pantalla | Qué hace |
|---|---|
| Choose project | Elegir la carpeta (proyecto) en la que trabajar |
| This computer | Elegir dónde trabajar: en tu ordenador o en Cloud |

Fuente: comprobación en pantalla de esta guía (2026-11-01)

![Pantalla inicial de Codex: en el centro "What should we build in 정리도구?", encima del cuadro de escritura el proyecto «정리도구» y «This computer», y debajo del cuadro de escritura el permiso «Ask for approval» y el nombre del modelo](../../../guide/21-codex/assets/shot-01-home.png)

La pantalla de arriba muestra la carpeta de la herramienta de organización abierta como proyecto. Encima del cuadro de escritura se ven la carpeta elegida (정리도구) y el lugar de trabajo (This computer), y debajo, el permiso (Ask for approval) y el nombre del modelo. La lista de conversaciones de la izquierda y el aviso de uso se han recortado de la imagen.

Pulsa **Choose project** y elige la carpeta `정리도구` (`~/hello-ai-연습/정리도구` si seguiste la guía de Claude Code). Codex puede leer y modificar los archivos de la carpeta que elijas.[^folder] También puedes abrirla con «File → Open Folder…» de la barra de menús.

Deja el lugar de trabajo en **This computer** (tu ordenador). Cloud es para quienes han conectado un repositorio de GitHub, y los archivos de tu ordenador no pasan a la nube.[^cloud-files]

Comprueba también si la carpeta es un **repositorio Git** (un mecanismo que guarda el registro de los cambios). En Codex, el panel para ver lo que cambió solo se abre en un repositorio Git. Si no lo es, la app te pregunta si quieres crear uno.[^review-git] Si seguiste el capítulo 3 de Claude Code, ya es un repositorio Git. Si empezaste de nuevo con los materiales de práctica, basta con seguir **cuando la app te pregunte si quieres crear el repositorio**.[^review-git] También puedes pedírselo a Codex hablando, pero la carpeta `.git`, que guarda el historial de Git, es una carpeta protegida ([capítulo 4](04-permissions-undo.md)), así que puede pedir permiso o quedar bloqueada.

<Quiz id="ch502-open" />

## Encargar la primera tarea

Envía una petición parecida a la del capítulo 2 de Claude Code. Esta vez no se dijo el formato aparte. Es porque la carpeta ya tiene las plantillas (`templates/`).

```
Organiza la nota inbox/회의-2026-10-27-주간회의.txt en un acta y guárdala como archivo nuevo en la carpeta notes/.
```

Al ejecutarlo en esta guía, Codex trabajó así. Esta ejecución se hizo con el mismo Codex en el terminal ([capítulo 7](07-terminal.md)). La documentación oficial explica que la app también busca automáticamente `AGENTS.md` y los skills en la carpeta elegida.[^discovery] Eso sí, esta guía no ha comprobado directamente en la pantalla de la app que dé el mismo resultado.

1. Buscó en la carpeta el archivo de reglas (`AGENTS.md`) y las plantillas. Como todavía no había archivo de reglas, leyó **solo las plantillas**.
2. Rellenó, en el orden de las columnas de la plantilla, 2 decisiones, 5 tareas, lo que se discutirá la próxima vez y la próxima reunión.
3. Los plazos que no estaban en la nota los dejó como `(메모에 없음)`. Es una regla escrita en el texto de ayuda de la plantilla.
4. Después de guardarla, revisó él mismo el orden de las columnas y las fechas y los días de la semana.

Resultado: [acta del capítulo 2](/practice/notes/results/codex/2장-회의록-2026-10-27-주간회의.txt)

**Coteja el resultado con el original.** Comprueba una por una estas preguntas.

- ¿Se han pasado las 5 tareas? ¿Los responsables coinciden con la nota?
- ¿No se inventó ningún plazo que no estuviera en la nota?
- ¿Son correctas las fechas?

En este resultado llaman la atención las fechas. En la nota está escrito `10/27(lun.)`, pero en el acta pasó a `10/27(mar.)`. Los días de la semana de las notas de práctica están inventados para la historia, así que no coinciden con el calendario de 2026. Codex lo corrigió según el calendario y **lo dijo él mismo** en la respuesta y en una nota dentro del archivo. Si no te gusta esa decisión, vuelve a pedir: "escribe los días de la semana tal como están en la nota".

Aunque la petición sea la misma, la forma del resultado varía un poco cada vez que se ejecuta. La documentación oficial también dice que un resultado que parece correcto puede estar incompleto o equivocado, así que compruebes las partes importantes antes de usarlo.[^review]

<Quiz id="ch502-first" />

## Prueba tú

1. Instala la app de ChatGPT e inicia sesión.
2. Elige **Codex** arriba a la izquierda y abre la carpeta de la herramienta de organización con **Choose project**.
3. Haz organizar la nota de reunión con la petición de arriba.
4. Coteja con la nota original el número de tareas, los responsables, los plazos y las fechas.

**Proyecto continuo**: en el capítulo 3 pasaremos el archivo de reglas de Claude Code, `CLAUDE.md`, a `AGENTS.md`, que es el que lee Codex.

## Resumen

- Elige Codex arriba a la izquierda de la app y abre la carpeta con Choose project, encima del cuadro de escritura.
- Deja el lugar de trabajo en This computer. Tus archivos no pasan a Cloud.
- Ver lo que cambió solo funciona en un repositorio Git. Convierte antes la carpeta en un repositorio Git.
- Coteja el resultado con el original. Comprueba sobre todo lo que Codex cambió por su cuenta (esta vez, el día de la semana).

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Project | Proyecto | La carpeta en la que trabaja Codex |
| This computer | Este ordenador | Trabajar en tu ordenador |
| Cloud | Nube | Trabajar en un espacio de trabajo al otro lado de internet |
| Git | Git | Mecanismo que guarda el registro de los cambios de los archivos |

<ChapterDone :chapter="502" />

Siguiente capítulo: [Capítulo 3. El archivo de reglas AGENTS.md](03-agents-md.md)

[^install]: Documentación oficial de Codex, «ChatGPT desktop app». "**Install the ChatGPT desktop app.** [Download ChatGPT](https://chatgpt.com/download/) for macOS or Windows, or follow the [Linux installation guide](https://learn.chatgpt.com/docs/linux/linux-app)." https://learn.chatgpt.com/docs/app (consultado el 2026-11-01)
[^signin]: Documentación oficial de Codex, «Quickstart». "Open the app, then sign in with your ChatGPT account." https://learn.chatgpt.com/docs/quickstart (consultado el 2026-11-01)
[^select]: Documentación oficial de Codex, «Quickstart». "For software development with codebase context and developer tools, select **Codex** from the ChatGPT dropdown." https://learn.chatgpt.com/docs/quickstart (consultado el 2026-11-01)
[^folder]: Documentación oficial de Codex, «Quickstart». "Start a chat, create a project, or open a folder. ChatGPT can read and modify files in the folder you choose." https://learn.chatgpt.com/docs/quickstart (consultado el 2026-11-01)
[^cloud-files]: Documentación oficial de Codex, «Codex environments». "Use **Work in** to choose **This computer** or **Cloud**." / "Your computer's local files, running processes, browser sign-ins, and VPN access aren't automatically transferred to it." https://learn.chatgpt.com/docs/environments/modes (consultado el 2026-11-01)
[^review-git]: Documentación oficial de Codex, «Code review». "The review pane requires a project inside a Git repository. If your project isn't a Git repository yet, the app prompts you to create one." https://learn.chatgpt.com/docs/code-review (consultado el 2026-11-01)
[^review]: Documentación oficial de Codex, «Use ChatGPT». "A polished response can still be incomplete or wrong, so review the details that matter before you use or share it." https://learn.chatgpt.com/docs/use-chatgpt (consultado el 2026-11-01)
[^discovery]: Documentación oficial de Codex, «Projects and chats». "New chats start in the primary folder. Codex also uses that folder as the default for Git operations and automatic discovery of `AGENTS.md`, skills, and `config.toml`." https://learn.chatgpt.com/docs/projects (consultado el 2026-11-01)
[^toggle]: Documentación oficial de Codex, «ChatGPT desktop app». "Choose ChatGPT or Codex. In ChatGPT, use the toggle above the composer to select Chat or Work. In Codex, start with New chat." https://learn.chatgpt.com/docs/app (consultado el 2026-11-01)
