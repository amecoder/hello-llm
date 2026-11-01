# Capítulo 10. Usarlo en el terminal: la misma herramienta de orden con una sola línea de comando

> **En una línea**: Claude Code para el terminal es **el mismo motor** que la aplicación de escritorio. Si lo abres en la misma carpeta, usa **tal cual el CLAUDE.md, las skills y los ajustes**.
> Con una sola línea, `claude -p "tarea"`, preguntas, recibes la respuesta y termina enseguida. Es muy útil para automatizar trabajos repetitivos.

Este capítulo se escribió a partir de la documentación oficial de Claude Code consultada el 31 de octubre de 2026 y del resultado de ejecutar de verdad Claude Code 2.1.316 en el terminal de macOS. **Si es tu primera vez con el terminal, puedes saltarte este capítulo.** Con la aplicación de escritorio solo ya puedes usar toda la herramienta de orden.

## Qué es el terminal

El **terminal** (Terminal) es una ventana donde manejas el ordenador **escribiendo comandos con letras** en vez de usar el ratón. En macOS se usa «Aplicaciones → Utilidades → Terminal», y en Windows, PowerShell. La documentación oficial tiene también una guía aparte para quien abre el terminal por primera vez.[^install]

Si ya tienes la aplicación de escritorio, hay dos razones para usar el terminal.

- **Cosas que se acaban en una línea**: puedes lanzar una pregunta, recibir solo la respuesta y terminar.
- **Automatización**: puedes llamar a Claude Code desde otros programas o scripts. La aplicación de escritorio no tiene esta función de ejecutar scripts.[^no-script]

<Quiz id="ch410-why" />

## Instalar y empezar

Abre el terminal y pega el comando que corresponde a tu ordenador.[^install]

```bash
# macOS, Linux, WSL
curl -fsSL https://claude.ai/install.sh | bash
```

```powershell
# Windows PowerShell
irm https://claude.ai/install.ps1 | iex
```

**No pegues tal cual el comando de instalación de un sitio que no conoces.** Los comandos de arriba ejecutan directamente un script descargado de internet. Antes de ejecutarlo, comprueba siempre **que es exactamente lo que está escrito en la documentación oficial (code.claude.com)**.

Cuando termine la instalación, ve a la carpeta donde vas a trabajar y escribe `claude`.[^start]

```bash
cd ~/hello-ai-연습/정리도구
claude
```

La primera vez te pide iniciar sesión. Si tienes una cuenta con suscripción, basta con terminar de iniciar sesión en el navegador.[^start] `cd` significa «ir a esta carpeta». Es lo mismo que elegir la carpeta en la aplicación de escritorio.

<Quiz id="ch410-install" />

## Comandos básicos

| Comando | Qué hace |
|---|---|
| `claude` | Empieza en modo interactivo (igual que una sesión de la aplicación) |
| `claude "tarea"` | Empieza en modo interactivo con una primera petición |
| `claude -p "tarea"` | Pregunta una vez, recibe la respuesta y termina |
| `claude -c` | Continúa la conversación más reciente de esta carpeta |
| `claude -r` | Elige y continúa una conversación anterior |

Fuente: documentación oficial de Claude Code[^commands]

Una vez empezado en modo interactivo, usas los comandos con `/` como en la aplicación. `/help` muestra los comandos que puedes usar y `/resume` muestra las conversaciones anteriores.[^start]

<Quiz id="ch410-commands" />

## Práctica: comprobar la herramienta de orden con una sola línea

En la carpeta Herramienta de orden (정리도구) lo ejecuté así.

```bash
cd ~/hello-ai-연습/정리도구
claude -p "Muéstrame la lista de archivos de la carpeta notes y dime, en una línea por archivo, con qué plantilla (de las de templates) está escrito cada uno. No modifiques ningún archivo. Respóndeme corto y solo con una tabla."
```

Unos segundos después salió la respuesta y terminó enseguida (salida completa: [10장-claude-p-출력.txt](/practice/notes/results/10장-claude-p-출력.txt)).

| Archivo de notes | Plantilla con la que está escrito |
|---|---|
| 공부-2026-10-28-프롬프트-강의.md | templates/공부노트.md |
| 주간회고-2026-10-27.md | templates/주간회고.md |
| 회의록-2026-10-27-주간회의.md | templates/회의록.md |
| 회의록-2026-10-29-임시회의.md | templates/회의록.md |

Fuente: resultado de la práctica de esta guía (2026-10-31). Al final de la respuesta se añadió también «alcance comprobado: 4/4».

El terminal **leyó tal cual los archivos de plantilla que se crearon en la aplicación.** Eso sí, el «alcance comprobado: 4/4» es un valor con la salvedad de que **solo se compararon las primeras 15 líneas** de cada archivo. Leer incluso estas salvedades es el hábito de «comprobar las pruebas» del capítulo 5.

La documentación oficial explica que el terminal y la aplicación **comparten** el CLAUDE.md y las skills.[^same] Para comprobarlo tú mismo, abre `claude` en modo interactivo, escribe `/` y mira si aparece el nombre de la skill del capítulo 7.

Eso sí, una ejecución que termina de una vez con `-p` **no puede pedir permiso a mitad de camino.** Lo que necesita permiso se rechaza si no lo has permitido antes con una regla de permiso.[^p-deny] Por ejemplo, una skill que escribe archivos, como `claude -p "/weekly-review"`, puede ver rechazada la escritura por no tener permiso. Por eso, al principio practica con **preguntas que solo leen**, como la de la práctica de arriba.

<Quiz id="ch410-practice" />

## Pasar de la aplicación al terminal y al revés

- Puedes usar los dos sitios **a la vez y en la misma carpeta**. La lista de sesiones es aparte, pero los ajustes y el CLAUDE.md se comparten.[^same]
- Para pasar a la aplicación una conversación que tenías en el terminal, escribe `/desktop` en el terminal (macOS y Windows x64, con inicio de sesión de suscripción).[^to-desktop]
- Al revés, con **«Importar una sesión de Claude Code CLI»** (Claude Code CLI 세션 가져오기) de la primera pantalla de la aplicación, puedes traer a la aplicación una sesión que hiciste en el terminal (la tarjeta de aviso de la primera pantalla del capítulo 2).

<Quiz id="ch410-switch" />

## Pruébalo tú mismo

1. Comprueba tú mismo que el comando de instalación de la documentación oficial es igual que el de arriba y luego instálalo (si ya lo tienes, `claude --version`).
2. Ve a la carpeta Herramienta de orden (정리도구) y ejecuta la pregunta de solo lectura con `claude -p` de arriba.
3. Abre el modo interactivo con `claude` y escribe `/help`. Escribe `/` y comprueba si se ven los nombres de las skills del capítulo 7.
4. Termina la conversación y continúa la de hace un momento con `claude -c`.

**Proyecto continuo**: en el capítulo 11, reunirás las funciones que has visto hasta ahora y harás un ejercicio para crear la herramienta de orden desde cero con **tus propias notas**.

## Resumen

- Claude Code para el terminal es el mismo motor que la aplicación. En la misma carpeta comparten el CLAUDE.md, las skills y los ajustes.
- Antes de ejecutar el comando de instalación, comprueba que es exactamente el que está escrito en la documentación oficial.
- `claude` es el modo interactivo, `claude -p` pregunta una vez y termina, y `claude -c` continúa.
- Una ejecución con `-p` no puede pedir permiso a mitad de camino. Al principio practica con preguntas que solo leen.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Terminal | Terminal | Ventana donde manejas el ordenador escribiendo comandos con letras |
| CLI | CLI | Programa que se usa en el terminal (Command Line Interface) |
| `cd` | `cd` | Comando para ir a otra carpeta |
| `-p` | `-p` (print) | Forma de ejecución que pregunta una vez, muestra la respuesta y termina |

<ChapterDone :chapter="410" />

Siguiente capítulo: [Capítulo 11. Ejercicios prácticos](11-practice.md)

[^install]: Documentación oficial de Claude Code, «Quickstart». "To install Claude Code, open a terminal and run the command for your system. If you haven't used a terminal before, the terminal guide shows how to open one and paste the command." / "curl -fsSL https://claude.ai/install.sh | bash" / "irm https://claude.ai/install.ps1 | iex" https://code.claude.com/docs/en/quickstart (consultado el 2026-10-31)
[^start]: Documentación oficial de Claude Code, «Quickstart». "Open your terminal in any project directory and start Claude Code" / "Claude Code prompts you to log in on first use. For Claude subscription or Console accounts, follow the prompts to complete authentication in your browser." / "Type /help for available commands or /resume to continue a previous conversation." https://code.claude.com/docs/en/quickstart (consultado el 2026-10-31)
[^commands]: Documentación oficial de Claude Code, «Quickstart». Tabla de comandos: "Start interactive mode" / "Start interactive mode with an initial prompt" / "Run one-off query, then exit" / "Continue most recent conversation in current directory" / "Resume a previous conversation" https://code.claude.com/docs/en/quickstart (consultado el 2026-10-31)
[^no-script]: Documentación oficial de Claude Code, «Desktop application». En la tabla de comparación de funciones, fila «Scripting and automation», columna Desktop: "Not available" https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^same]: Documentación oficial de Claude Code, «Desktop application». "If you already use the Claude Code CLI, Desktop runs the same underlying engine with a graphical interface. You can run both simultaneously on the same machine, even on the same project. Each keeps its own session list, and you can bring a CLI session into Desktop. They share configuration and project memory via CLAUDE.md files." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^to-desktop]: Documentación oficial de Claude Code, «Desktop application». "To move a CLI session into Desktop, run /desktop in the terminal." / "This command is available on macOS and x64 Windows when you are signed in with a Claude subscription." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^p-deny]: Documentación oficial de Claude Code, «Choose a permission mode». "Calls needing approval are denied unless you approve them with an allow rule, hook, canUseTool callback, or --permission-prompt-tool." https://code.claude.com/docs/en/permission-modes (consultado el 2026-10-31)
