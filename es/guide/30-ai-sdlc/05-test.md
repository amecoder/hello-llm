# Capítulo 5. Comprobar y probar: dar un mecanismo de comprobación y recibir pruebas

> **En una línea**: la IA se detiene cuando **el trabajo parece terminado**. Si le das un **mecanismo de comprobación** que le diga si de verdad ha terminado, la IA entra en un ciclo en el que se corrige y vuelve a comprobar por sí misma.
> Y en vez de «ya está todo aprobado», recibe **pruebas** (el comando que se ha ejecutado y su salida, o una captura de pantalla).

Este capítulo se escribió a partir de la documentación oficial de Claude Code y de GitHub consultada el 1 de noviembre de 2026. El hábito de contrastar el resultado con las notas originales que viste en la etapa 3 se automatiza en la etapa 4 con el nombre de «mecanismo de comprobación».

## Por qué hace falta un mecanismo de comprobación

El documento oficial de buenas prácticas lo dice así. Claude se detiene cuando el trabajo **parece terminado**. Si no tiene nada que le diga si de verdad está terminado, «parece terminado» es todo lo que tiene para juzgar.[^looks-done] Entonces acabo siendo **yo la prueba**, y los errores se quedan ahí hasta que yo los descubra por casualidad.[^you-test]

En cambio, si le das **algo que responda aprobado/suspendido**, Claude cierra el ciclo por sí mismo. Hace el cambio, pasa la comprobación y, si se ha roto, lee la salida, lo corrige y vuelve a pasarla.[^loop]

| Sin mecanismo de comprobación | Con mecanismo de comprobación |
|---|---|
| «Ya está» → yo lo abro y busco lo que está mal | La comprobación falla → Claude lo corrige → vuelve a comprobar → aprueba |

Fuente: resumen de esta guía (la base está en la documentación oficial)[^loop]

<Quiz id="ch705-why" />

## Tipos de mecanismos de comprobación

Un mecanismo de comprobación puede ser **cualquier cosa de la que Claude pueda leer el resultado**. La documentación oficial pone como ejemplos un archivo de pruebas, si la compilación ha tenido éxito, un verificador de sintaxis, un script que compara salidas y la pantalla del navegador comparada junto a un boceto.[^kinds] Si tienes alguno de ellos, llega a decir que **la línea más útil del CLAUDE.md es el comando que lo ejecuta**.[^claude-md]

El método más fácil es **escribirlo en la petición**. Sirve hoy mismo, sin ajustes.[^in-prompt]

```
Después de corregir el tablero de tareas, comprueba una por una las condiciones de comprobación de SPEC.md y sigue hasta que pasen todas.
```

En la aplicación de escritorio, Claude puede arrancar un servidor de desarrollo y abrirlo en la **ventana del navegador** de la aplicación para comprobar sus propios cambios. Por defecto lo comprueba automáticamente cada vez que edita.[^browser] Es un mecanismo que encaja bien con el tablero de tareas, que es una página web.

Cuando pidas pruebas, di **con concreción qué comportamiento hay que comprobar**.[^specific-test]

| Petición mejorable | Petición mejor |
|---|---|
| Hazme pruebas | Hazme una prueba que compruebe que las 5 tareas del acta se ven todas en la pantalla y que el plazo tiene formato de fecha |

Fuente: ejemplo de esta guía (el consejo es de la documentación oficial)[^specific-test]

<Quiz id="ch705-kinds" />

## Recibir pruebas

Uses el mecanismo que uses, pide **pruebas**: el comando que se ha ejecutado y su salida, o una captura de pantalla.[^evidence] Con solo la frase «ya han pasado todas» se sabe casi nada, y leer la salida es más rápido que volver a ejecutarlo tú mismo.[^evidence]

```
Enséñame tal cual el comando de comprobación que acabas de ejecutar y su salida. Y también cuántas han pasado y cuántas han fallado.
```

**Comprueba también que la comprobación comprueba de verdad.** Una comprobación que no falla cuando se hace mal a propósito no es un mecanismo, es un adorno. Por ejemplo, ejecútala después de borrar una tarea y mira si la comprobación falla.

<Quiz id="ch705-evidence" />

## Automáticamente cada vez que subes: GitHub Actions

Puedes hacer que no tengas que pedir la comprobación a mano cada vez. **GitHub Actions** es la función de GitHub que ejecuta automáticamente compilaciones, pruebas y despliegues. Puedes hacer que se pasen las pruebas cada vez que subes un cambio.[^actions]

- Lo que hay que hacer se define con un archivo YAML (archivo de configuración) que pones en la carpeta `.github/workflows` del repositorio.[^yaml]
- El hábito de hacer commits a menudo y comprobar a menudo se llama **integración continua** (CI). Te permite encontrar los errores pronto.[^ci]
- GitHub muestra el resultado de la comprobación en la pantalla del PR del capítulo 6. Puedes ver enseguida si los cambios de tu rama han provocado un error.[^ci]
- En los **repositorios públicos** puedes usar gratis los ejecutores estándar que ofrece GitHub.[^free]

El archivo de configuración puedes pedírselo a Claude. Aunque al principio basta con lo de «escribirlo en la petición» y con la comprobación en el navegador. **No hace falta tener toda la automatización desde el primer día.**

<Quiz id="ch705-actions" />

## Pruébalo tú mismo

1. En la rama `first-board` del capítulo 4, pide que cree un mecanismo que compruebe las condiciones de comprobación de SPEC.md.
2. Pasa la comprobación y pide que te enseñe tal cual el comando ejecutado y su salida.
3. Borra una tarea a propósito, vuelve a pasarla y mira si la comprobación falla. Cuando lo hayas comprobado, deshazlo.
4. Abre el tablero de tareas en la ventana del navegador de la aplicación y cuenta tú mismo el número de tareas.
5. Anota en una línea del CLAUDE.md el comando de comprobación.

**Proyecto continuo**: en el capítulo 6 subirás a un PR los cambios hechos hasta ahora y recibirás una revisión.

## Resumen

- La IA se detiene cuando parece terminado. Si le das un mecanismo de comprobación que responda aprobado/suspendido, se corrige y vuelve a comprobar por sí misma.
- Un mecanismo de comprobación puede ser una prueba, una compilación, un script de comparación, una pantalla del navegador… cualquier cosa de la que Claude pueda leer el resultado.
- En vez de «han pasado todas», recibe pruebas: el comando y la salida. Comprueba también que la comprobación falla si se hace mal a propósito.
- GitHub Actions comprueba automáticamente cada vez que subes. En los repositorios públicos los ejecutores estándar son gratuitos.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Test | Prueba (test) | Comprobación que verifica automáticamente si el resultado es el esperado |
| CI | CI | Hábito de integrar a menudo y comprobar automáticamente a menudo (integración continua) |
| GitHub Actions | GitHub Actions | Función que ejecuta automáticamente tareas fijadas cada vez que subes algo |
| YAML | YAML | Formato de texto que se usa en la configuración de tareas automáticas |

<ChapterDone :chapter="705" />

Siguiente capítulo: [Capítulo 6. PR y revisión](06-review.md)

[^looks-done]: Documentación oficial de Claude Code, «Best practices for Claude Code». "Claude stops when the work looks done. If it has nothing to run that tells it whether the work actually *is* done, "looks done" is all it has to go on." https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^you-test]: Documentación oficial de Claude Code, «Best practices for Claude Code». "In practice that makes you the test suite, and every mistake sits there until you happen to notice it." https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^loop]: Documentación oficial de Claude Code, «Best practices for Claude Code». "If you give it something that comes back pass or fail, Claude can close that loop itself." https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^kinds]: Documentación oficial de Claude Code, «Best practices for Claude Code». "The check can be almost anything, as long as Claude can read the result:" / "A test file" / "A build's exit code" / "A linter" / "A script that diffs output against a fixture" https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^claude-md]: Documentación oficial de Claude Code, «Best practices for Claude Code». "If your repo already has one of these, the single most useful line in your `CLAUDE.md` is the command that runs it." https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^in-prompt]: Documentación oficial de Claude Code, «Best practices for Claude Code». "In the prompt: `run the auth tests after, and keep going until they pass`. Claude decides for itself when it's satisfied." https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^browser]: Documentación oficial de Claude Code, «Desktop application». "Claude can start a dev server and open it in the Browser pane to verify its changes." / "By default, Claude [auto-verifies](#auto-verify-changes) changes after every edit." https://code.claude.com/docs/en/desktop (consultado el 2026-11-01)
[^specific-test]: Documentación oficial de Claude Code, «Common workflows». "When asking for tests, be specific about what behavior you want to verify." https://code.claude.com/docs/en/common-workflows (consultado el 2026-11-01)
[^evidence]: Documentación oficial de Claude Code, «Best practices for Claude Code». "Whichever option you use, ask Claude for *evidence*: the command it ran and its output, or the screenshot." / "reading the output is faster than rerunning the check yourself." https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^actions]: Documentación oficial de GitHub, «Quickstart for GitHub Actions». "GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline." / "You can create workflows that run tests whenever you push a change to your repository, or that deploy merged pull requests to production." https://docs.github.com/en/actions/get-started/quickstart (consultado el 2026-11-01)
[^yaml]: Documentación oficial de GitHub, «Understanding GitHub Actions». "Workflows are defined in the `.github/workflows` directory in a repository." https://docs.github.com/en/actions/get-started/understand-github-actions (consultado el 2026-11-01)
[^ci]: Documentación oficial de GitHub, «Continuous integration». "Committing code more often detects errors sooner and reduces the amount of code a developer needs to debug when finding the source of an error." / "GitHub runs your CI tests and provides the results of each test in the pull request, so you can see whether the change in your branch introduces an error." https://docs.github.com/en/actions/get-started/continuous-integration (consultado el 2026-11-01)
[^free]: Documentación oficial de GitHub, «Billing and usage». "GitHub Actions usage is free for standard GitHub-hosted runners in public repositories, and for self-hosted runners." https://docs.github.com/en/actions/concepts/billing-and-usage (consultado el 2026-11-01)
