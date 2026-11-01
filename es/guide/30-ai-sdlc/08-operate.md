# Capítulo 8. Operación y mejora: dar otra vuelta con las incidencias

> **En una línea**: las mejoras y los fallos que se te ocurran después de publicar los apuntas como **incidencias** (issues). Una incidencia pasa a ser la planificación de la vuelta siguiente.
> Si en el PR escribes una palabra establecida como `fixes #número`, al fusionar el PR esa incidencia **se cierra sola.** Así se enlazan la planificación y la operación.

Este capítulo se escribió a partir de la documentación oficial de GitHub consultada el 1 de noviembre de 2026. Las pantallas de GitHub se describen según la versión en inglés.

## Qué es una incidencia

Una **incidencia** (issue) es un registro para planificar, discutir y hacer el seguimiento del trabajo.[^issue] Recoge cualquier cosa que quieras anotar o de la que quieras hablar: un aviso de fallo, una función nueva, una idea. Se parece a lo que anotabas como «lo que se tratará en la próxima» en el acta de la etapa 3.

Las incidencias se enlazan con los PR. Si mencionas una incidencia en otra incidencia o en un PR, se enlazan entre sí, y si en el PR usas una palabra establecida como `fixes`, **la incidencia relacionada se cierra sola.**[^close]

```
fixes #número-de-la-incidencia
```

El número de la incidencia está junto a su título, con la forma `#2`. Si en el capítulo 6 creaste un PR, puede que la primera incidencia no sea la número 1, así que compruébalo siempre en la pantalla.

El tutorial de introducción de GitHub también crea su primera incidencia en la fase de planificación. En el título escribe la función que se va a crear, y en la descripción, en unas líneas, lo que quieres crear.[^first-issue]

<Quiz id="ch708-issue" />

## Ordenar con etiquetas y tableros

Cuando las incidencias aumentan, las separas con **etiquetas** (labels). Un repositorio nuevo ya trae etiquetas por defecto.[^labels]

| Etiqueta | Significado |
|---|---|
| bug | Un problema inesperado |
| enhancement | Petición de una función nueva |
| documentation | Mejora de la documentación |

Fuente: documentación oficial de GitHub (traducida solo en parte)[^labels]

Los **proyectos** (Projects) son tablas, tableros y hojas de ruta enlazados con las incidencias y los PR.[^projects] En el tablero del tutorial, las columnas representan las fases del trabajo. Vas moviendo de Por hacer (Todo) → En curso (In Progress) → Hecho (Done) para ver el avance.[^board]

**No hace falta usarlo todo desde el principio.** Como viste en el capítulo 1, mucha gente empieza con un repositorio y unas pocas incidencias. Las etiquetas y el tablero, si esperas a usarlos hasta que haya tantas incidencias que cueste verlas de un vistazo, no llegas tarde.

<Quiz id="ch708-labels" />

## Dar una vuelta más

Cuando termina una vuelta, creas la función siguiente como una **incidencia nueva** y, al empezar, la pasas a «en curso» para iniciar el siguiente ciclo.[^next-cycle] El flujo que aprendiste en la etapa 4, recorrido otra vez con una sola incidencia, es así.

1. **Planificar**: escribe en la incidencia qué vas a cambiar. Si hace falta, añade una línea más con el criterio de comprobación en SPEC.md (capítulo 3).
2. **Crear**: en una rama nueva, recibe el plan en modo plan y crea (capítulo 4).
3. **Comprobar**: pasa el mecanismo de comprobación y recibe pruebas. **También tienen que pasar todas las comprobaciones de antes** (capítulo 5).
4. **Revisar**: escribe `fixes #número` en el PR y recibe la revisión (capítulo 6).
5. **Desplegar**: al fusionar, se vuelve a publicar en Pages (capítulo 7).

También puedes pasarle la incidencia tal cual a Claude Code.

```
Lee el contenido de la incidencia de GitHub #<número de la incidencia>, añade una línea más con el criterio de comprobación en SPEC.md y empieza por hacer el plan. Todavía no modifiques ningún archivo.
```

Si Claude dice que no puede leer la incidencia, copia el título y el contenido de la incidencia y pégalos en la petición. Es el método más seguro.

<Quiz id="ch708-cycle" />

## Las versiones (releases), más adelante

Una **versión** (release) es una unidad de despliegue empaquetada para que más gente pueda descargarla y usarla.[^release] Es importante para los programas que se descargan e instalan, pero no es imprescindible para un tablero de tareas de una sola página web. Basta con saber que existe.

## Pruébalo tú mismo

1. En la primera pantalla del repositorio `cafe-todo-board`, ve a **Issues** → **New issue** y crea una incidencia nueva.[^new-issue] El título será «Las tareas vencidas, en rojo» y la etiqueta, `enhancement`.
2. Pásale el contenido de la incidencia a Claude Code, haz que añada una línea con el criterio de comprobación en SPEC.md y recibe primero el plan.
3. Crea en una rama nueva y, con el mecanismo de comprobación, recibe pruebas de que pasan tanto el criterio nuevo como los anteriores.
4. Mira el número que hay junto al título de la incidencia y escribe `fixes #número` en la descripción del PR. Revisa y fusiona.
5. Comprueba que la incidencia se ha cerrado sola y que en Pages sale la pantalla cambiada.

**Proyecto continuo**: en el capítulo 9 se resume cómo evitar que en un repositorio público entren valores secretos y datos personales.

## Resumen

- Una incidencia es un registro de planificación, discusión y seguimiento. Apunta las mejoras y los fallos como incidencias para empezar la vuelta siguiente.
- Si en el PR escribes `fixes #número`, al fusionar la incidencia se cierra sola. El número se comprueba en la pantalla.
- Las etiquetas (bug, enhancement, documentation) y el tablero (Todo → In Progress → Done) se usan cuando las incidencias aumentan.
- La vuelta siguiente también es planificar → crear → comprobar → revisar → desplegar. Las comprobaciones de antes tienen que seguir pasando.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Issue | Incidencia (issue) | Registro donde se anotan y se siguen tareas, fallos e ideas |
| Label | Etiqueta | Marca que separa las incidencias y los PR |
| Project | Proyecto | Tabla, tablero u hoja de ruta enlazada con las incidencias y los PR |
| Release | Versión (release) | Unidad de despliegue empaquetada para que se pueda descargar y usar |

<ChapterDone :chapter="708" />

Siguiente capítulo: [Capítulo 9. Seguridad y responsabilidad](09-safety.md)

[^issue]: Documentación oficial de GitHub, «About issues». "You can create issues in your repository to plan, discuss, and track work." https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues (consultado el 2026-11-01)
[^close]: Documentación oficial de GitHub, «About issues». "Mentioning an issue in another issue or pull request will create references between them and using keywords, like `fixes:`, in your pull requests will automatically close the associated issues." https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues (consultado el 2026-11-01)
[^first-issue]: Documentación oficial de GitHub, «Planning your work». "In the **Add a title** field, type `Display a list of starred repositories`." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (consultado el 2026-11-01)
[^labels]: Documentación oficial de GitHub, «Managing labels». "GitHub provides default labels in every new repository." / "`bug` | Indicates an unexpected problem or unintended behavior" / "`documentation` | Indicates a need for improvements or additions to documentation" / "`enhancement` | Indicates new feature requests" https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels (consultado el 2026-11-01)
[^projects]: Documentación oficial de GitHub, «About Projects». "A project is an adaptable table, board, and roadmap that integrates with your issues and pull requests on GitHub to help you plan and track your work effectively at the user or organization level." https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects (consultado el 2026-11-01)
[^board]: Documentación oficial de GitHub, «Planning your work». "The board's columns represent stages of your work. As you make progress, move each item to show its status." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (consultado el 2026-11-01)
[^next-cycle]: Documentación oficial de GitHub, «Reviewing your proposed changes». "If you have more features to build, create new issues and move them to **In Progress** when you start the next cycle." https://docs.github.com/en/get-started/start-your-journey/reviewing-your-proposed-changes (consultado el 2026-11-01)
[^release]: Documentación oficial de GitHub, «About releases». "Releases are deployable software iterations you can package and make available for a wider audience to download and use." https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases (consultado el 2026-11-01)
[^new-issue]: Documentación oficial de GitHub, «Planning your work». "On the main page of your `stargazers-log` repository, click **Issues**." / "Click **New issue**." https://docs.github.com/en/get-started/start-your-journey/planning-your-work (consultado el 2026-11-01)
