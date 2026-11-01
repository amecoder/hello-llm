# Capítulo 1. Qué es Claude Code y dónde se usa: en qué se diferencia del chat, dónde usarlo y planes

> **En una línea**: Claude Code es un Claude que **lee directamente las carpetas de tu ordenador, modifica archivos y ejecuta comandos.** En lugar de recibir una respuesta y copiarla y pegarla como en el chat, le encargas el trabajo y revisas el resultado.
> Para usarlo hace falta una **suscripción de pago** (Pro, Max, Ultra, Team o Enterprise). Esta etapa empieza por la **aplicación de escritorio**, que se usa sin terminal.

Este capítulo está escrito a partir de la documentación oficial de Claude Code consultada el 31 de octubre de 2026. Las funciones y los nombres de los menús cambian a menudo.

## En qué se diferencia del chat

El chat de Claude que usaste en la etapa 2 era un sitio para **preguntar y recibir respuestas.** El texto de la respuesta lo copiabas tú y lo pegabas en un archivo.

**Claude Code trabaja directamente en las carpetas de tu ordenador.** La documentación oficial presenta Claude Code como una herramienta que «lee el contenido de las carpetas, modifica archivos y ejecuta comandos».[^overview] Si le explicas con tus palabras de siempre lo que quieres, planifica el método, trabaja en varios archivos y hasta comprueba si funciona bien.[^overview]

| | Chat (etapa 2) | Claude Code (etapa 3) |
|---|---|---|
| Dónde trabaja | Dentro de la ventana de conversación | En una carpeta de mi ordenador |
| Archivos | Los subo yo y pego yo la respuesta que recibo | Claude lee y modifica directamente los archivos de la carpeta |
| Trabajo de varios pasos | Yo lo voy continuando paso a paso | Encadena por sí solo planificar → trabajar → comprobar |
| Lo que hago yo | Leer la respuesta y trasladarla | Encargar y revisar los cambios |

Fuente: resumen de esta guía (la documentación oficial no lo compara directamente con el chat)[^overview]

A esta forma de trabajar se le llama **agente** (Agent, una IA que avanza por sí sola a través de varios pasos). La documentación oficial también llama a Claude Code «herramienta de programación agéntica» (agentic coding tool).[^overview]

**Cowork**, de la guía de Claude de la etapa 2, también era una función para encargar un trabajo entero ([capítulo 8 de la etapa 2, Claude](../10-claude/08-cowork.md)). La aplicación de escritorio incluye juntos el chat (Chat), Cowork y Claude Code (la pestaña **Code**).[^linux] Esta etapa trata de la pestaña **Code.**

<Quiz id="ch401-what" />

## Qué se le puede encargar

Se llama «Code» (código), pero lo que hace es, en el fondo, **leer y modificar los archivos de una carpeta.**[^overview] Los ejemplos que pone la documentación oficial son trabajos de desarrollador.[^overview]

- Crear funciones, corregir fallos
- Cuando hay un fallo, pegar el mensaje de error o describir el síntoma con palabras
- Tareas repetitivas como escribir pruebas, corregir errores de formato en varios archivos o redactar notas de versión (el texto que explica lo que ha cambiado)

**Esta guía practica con una carpeta de archivos de notas, en lugar de con código.** Durante toda la etapa 3 iremos construyendo poco a poco una «herramienta que ordena a mi manera»: si le metes notas sin ordenar, como apuntes de reuniones, de estudio o la reflexión del día, te devuelve un acta de reunión, unos apuntes de estudio o una reflexión semanal **en el formato que tú decidas.** El primer trabajo es una petición como esta.

```
Lee los apuntes de reunión de la carpeta inbox y ordénalos como acta de reunión. Divídela en tres partes: lo decidido / tareas (responsable y plazo) / lo que se hablará la próxima vez, y guárdala como archivo nuevo en la carpeta notes. No modifiques los apuntes originales.
```

Con el chat tendrías que subir los apuntes y pegar la respuesta que recibes en un archivo nuevo para guardarla. Claude Code lee directamente la carpeta y deja creado el archivo del acta. A mí solo me toca **revisar si el archivo creado es correcto.**

También hay servicios que resumen de una manera fija. En Claude Code puedes **guardar en un archivo tu propio formato, como «las tareas siempre con responsable y plazo», y usarlo sin volver a explicarlo cada vez.** Eso lo aprenderás en los capítulos 6 y 7.

Pero **como modifica archivos directamente, también aumenta lo que hay que vigilar.** Por eso en esta etapa aprenderás sí o sí a decidir qué permitir ([capítulo 4](04-permissions-undo.md)) y a comprobar los cambios.

<Quiz id="ch401-tasks" />

## Dónde se usa

Claude Code se usa en varios sitios. Dondequiera que lo uses, funciona **el mismo motor** (el programa central), y solo cambia la pantalla según cómo lo uses.[^platforms]

| Dónde se usa | Cuándo conviene |
|---|---|
| **Aplicación de escritorio** (pestaña Code) | Revisar los cambios con los ojos, varios trabajos en paralelo, configuración sencilla |
| Terminal (CLI) | Trabajar en la ventana de comandos, automatizar |
| Un editor como VS Code | Usarlo directamente dentro del editor de código |
| Web (nube) | Trabajos largos, o que deban continuar aunque apague mi ordenador |
| Móvil | Empezar un trabajo fuera de casa y seguirlo |

Fuente: documentación oficial de Claude Code[^platforms]

**Esta guía empieza por la aplicación de escritorio.** La documentación oficial indica que, para quien no quiere usar la terminal, la aplicación de escritorio ofrece el mismo motor con una pantalla gráfica.[^platforms] La aplicación de escritorio ya incluye Claude Code, así que no hay que instalar ningún programa aparte.[^quickstart]

Puedes mezclar varios sitios para el mismo trabajo.[^platforms] La terminal se trata en el capítulo 10, y la web y el móvil, en el capítulo 8.

<Quiz id="ch401-where" />

## Qué hace falta: planes

**Claude Code solo se usa con una suscripción de pago.** Hace falta una suscripción Pro, Max, Ultra, Team o Enterprise, o una cuenta de Console (API), y **no se puede usar con el plan gratuito.**[^setup] Con las suscripciones personales (Pro, Max y Ultra) se inicia sesión con la cuenta de claude.ai.[^auth]

- Los nombres de los planes han cambiado. **Ultra es el nuevo nombre del antiguo Max 20x, y Max es el nuevo nombre del antiguo Max 5x.**[^availability] Si ves «Max 5x» en un texto antiguo, es el Max de ahora.
- Las tarifas y los límites de uso se vieron en la guía de Claude de la etapa 2 ([capítulo 1 de la etapa 2, Claude](../10-claude/01-getting-started.md#los-planes-de-un-vistazo)). El uso lo **comparten todos los sitios en los que usas Claude Code**, como el escritorio y la terminal.[^desktop] En Team y Enterprise también se comparte con el chat y Cowork.[^costs]
- Los límites de uso que se anuncian dan por supuesto **un uso normal por parte de una persona.**[^legal] Tampoco se permite que un servicio creado por otra empresa envíe peticiones en su nombre con el inicio de sesión de mi suscripción.[^legal]

Puedes decidir qué plan te conviene probándolo. Cómo ver el uso se trata en el capítulo 9.

<Quiz id="ch401-plan" />

## El orden en que se aprende en esta etapa

| Capítulo | Qué se aprende |
|---|---|
| [Capítulo 2](02-install.md) | Instalar la aplicación de escritorio y encargar el primer trabajo |
| Capítulo 3 | Un paseo por la pantalla |
| Capítulos 4 y 5 | Cómo permitir y deshacer, y cómo encargar bien |
| Capítulos 6 y 7 | Dejar escritas las reglas del proyecto y ampliar las funciones |
| Capítulos 8 y 9 | Varios trabajos a la vez, nube y programación, costes y seguridad |
| Capítulo 10 | Usarlo en la terminal |
| Capítulos 11 y 12 | Tareas prácticas y usarlo como un experto |

No hace falta saberlo todo desde el principio. Basta con encargar un trabajo pequeño en el capítulo 2.

## Pruébalo tú

1. Inicia sesión en claude.ai y comprueba qué plan tienes ahora. Si es el gratuito, las prácticas de esta etapa podrás hacerlas después de suscribirte.
2. Apunta un «trabajo de carpeta» que te gustaría encargarle a Claude en tu ordenador (por ejemplo, reunir en un solo archivo unas notas dispersas).
3. Si hubieras hecho ese trabajo con el chat, cuenta cuántas veces habrías tenido que copiar y pegar.

**Proyecto continuo**: elige algo que ordenes cada semana (actas de reunión, apuntes de clase, reflexiones, etc.) y apunta en tres líneas en qué formato te gustaría que quedara (por ejemplo: «lo decidido / tareas (responsable y plazo) / lo que se hablará la próxima vez»). En el capítulo 2 le encargarás un primer ordenado con unas notas de práctica, y en el capítulo 11 lo harás con tus propias notas.

## Resumen

- Claude Code es una herramienta agéntica que lee directamente las carpetas de mi ordenador, modifica archivos y ejecuta comandos.
- En el chat, yo traslado la respuesta que recibo; con Claude Code, encargo el trabajo y yo lo reviso.
- Se usa el mismo motor en la aplicación de escritorio, la terminal, el editor, la web y el móvil. Esta etapa empieza por la aplicación de escritorio.
- Hace falta una suscripción Pro, Max, Ultra, Team o Enterprise, y no se puede usar con el plan gratuito. Ultra es el antiguo Max 20x y Max es el antiguo Max 5x.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Claude Code | Claude Code | Un Claude que trabaja directamente en las carpetas de mi ordenador |
| Agent | agente | Una IA que trabaja encadenando por sí sola varios pasos |
| Code tab | pestaña Code | El sitio de la aplicación de escritorio donde se usa Claude Code |
| CLI | CLI (interfaz de línea de comandos) | Programa que se usa escribiendo comandos como texto (la terminal) |
| Surface | superficie (dónde se usa) | La pantalla en la que se usa Claude Code, como el escritorio, la terminal o la web |

<ChapterDone :chapter="401" />

Siguiente capítulo: [Capítulo 2. Instalar la aplicación de escritorio y la primera sesión](02-install.md)

[^overview]: Documentación oficial de Claude Code, «Overview». "Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools." / "Claude Code is an AI-powered coding assistant that helps you build features, fix bugs, and automate development tasks." / "Claude Code plans the approach, writes the code across multiple files, and verifies it works." / "For bugs, paste an error message or describe the symptom." / "Claude Code handles the tedious tasks that eat up your day: writing tests for untested code, fixing lint errors across a project, resolving merge conflicts, updating dependencies, and writing release notes." https://code.claude.com/docs/en/overview (consultado el 2026-10-31)
[^platforms]: Documentación oficial de Claude Code, «Platforms and integrations». "Claude Code runs the same underlying engine everywhere, but each surface is tuned for a different way of working." / "Visual review, parallel sessions, managed setup" / "Terminal workflows, scripting, remote servers" / "Working inside VS Code without switching to a terminal" / "Long-running tasks that don't need much steering, or work that should continue when you're offline" / "Starting and monitoring tasks while away from your computer" / "gives you the same engine with a graphical interface." / "You can mix surfaces on the same project." https://code.claude.com/docs/en/platforms (consultado el 2026-10-31)
[^linux]: Documentación oficial de Claude Code, «Claude Desktop on Linux (beta)». "The desktop app on Linux gives you the same Chat, Cowork, and Claude Code experience as on macOS and Windows: parallel sessions, visual diff review, an integrated terminal and editor, and live app preview." https://code.claude.com/docs/en/desktop-linux (consultado el 2026-10-31)
[^quickstart]: Documentación oficial de Claude Code, «Get started with the desktop app». "The desktop app includes Claude Code, so you don't need to install Node.js or the CLI to use the Code tab." https://code.claude.com/docs/en/desktop-quickstart (consultado el 2026-10-31)
[^setup]: Documentación oficial de Claude Code, «Advanced setup». "Claude Code requires a Pro, Max, Ultra, Team, Enterprise, or Console account." / "The free claude.ai plan does not include Claude Code access." La página de condiciones (legal-and-compliance) también menciona a los usuarios gratuitos, lo que parece contradictorio, pero se siguió la frase explícita de este documento para las condiciones de uso. https://code.claude.com/docs/en/setup (consultado el 2026-10-31)
[^desktop]: Documentación oficial de Claude Code, «Desktop application». "Click it to see your plan usage, which is shared across all your Claude Code surfaces." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^costs]: Documentación oficial de Claude Code, «Manage costs effectively». "The allowance is shared with Claude chat and Cowork" https://code.claude.com/docs/en/costs (consultado el 2026-10-31)
[^auth]: Documentación oficial de Claude Code, «Authentication». "Claude Pro, Max, or Ultra subscription: log in with your claude.ai account." https://code.claude.com/docs/en/authentication (consultado el 2026-10-31)
[^availability]: Documentación oficial de Claude Code, «Feature availability». "Ultra is the new name for the Max 20x plan, and Max is the new name for Max 5x." https://code.claude.com/docs/en/feature-availability (consultado el 2026-10-31)
[^legal]: Documentación oficial de Claude Code, «Legal and compliance». "Advertised usage limits for Pro, Max, and Ultra plans assume ordinary, individual usage of Claude Code and the Agent SDK." / "Anthropic does not permit third-party developers to offer Claude.ai login into their own applications, or to route requests through Free, Pro, Max, or Ultra plan credentials on behalf of their users." https://code.claude.com/docs/en/legal-and-compliance (consultado el 2026-10-31)
