# Capítulo 6. PR y revisión — mirar una vez más antes de fusionar

> **En una línea**: un **PR** (Pull Request) es **proponer** que los cambios de mi rama se fusionen en `main`. Te da un lugar donde discutir y revisar antes de fusionar.
> Aunque lo hayas creado tú solo, se hace revisión. Recibe también la revisión de la IA (`/code-review`), pero **que diga «sin problemas» no significa que sea seguro, y la decisión de fusionar es mía.**

Este capítulo se escribió con la documentación oficial de GitHub y Claude Code consultada el 1 de noviembre de 2026.

## Qué es un PR

Un **PR** es la propuesta de fusionar los cambios de una rama en otra. Te da un lugar donde discutir y revisar antes de que entren en el proyecto.[^pr]

La pantalla del PR tiene estas pestañas.[^tabs]

| Pestaña | Qué muestra |
|---|---|
| Conversation | Descripción, comentarios y revisiones |
| Commits | Cómo fue cambiando la rama |
| Checks | Resultados de pruebas automáticas y de la construcción (capítulo 5) |
| Files changed | Los cambios sobre los que comentan los revisores |

Fuente: documentación oficial de GitHub (se trasladó solo una parte)[^tabs]

Al crear un PR, escribes **qué cambiaste y qué problema resuelve.** Si es un PR que resuelve la incidencia (issue) del capítulo 8, enlázalo con la incidencia; si lo enlazas con una palabra establecida, la incidencia se cierra sola cuando se fusiona el PR.[^describe]

**Un PR pequeño es más fácil de revisar y más seguro de fusionar.** Antes de pedir a otra persona que lo revise, revísalo primero tú. Lee los cambios, mira si has cambiado algo sin querer y comprueba que se hayan ejecutado la construcción y las pruebas.[^small]

También puedes pedirle a Claude Code que cree el PR. La documentación oficial recomienda revisar el PR creado por Claude antes de enviarlo y **pedirle que señale los puntos de riesgo.**[^risks]

```
Crea un PR con la rama first-board. Antes de enviarlo, señálame primero los puntos que podrían ser arriesgados en este cambio.
```

<Quiz id="ch706-pr" />

## Aunque estés solo, revisa

El tutorial de GitHub dice que, **incluso trabajando solo**, el hábito de revisar con intención antes de fusionar mantiene sano el proyecto y facilita la colaboración posterior.[^alone]

Una revisión termina con una de tres decisiones.[^decisions]

| Decisión | Significado |
|---|---|
| Comment | Solo deja una opinión |
| Approve | Está listo para fusionar |
| Request changes | Hay que corregirlo antes de fusionar |

Fuente: documentación oficial de GitHub[^decisions]

El criterio de la revisión es el **SPEC.md** del capítulo 3. El prompt de ejemplo del documento oficial de buenas prácticas hace que, cuando termines de crear, **se contraste con SPEC.md** para comprobar que se han implementado todos los requisitos, que solo se informe de los huecos que afectan a la corrección y que **se salte el estilo** (el ejemplo se lo encarga a un subagente, pero esta guía lo cambia a una sesión nueva).[^against-spec] También da el motivo: si le pides que busque problemas, el revisor **siempre encuentra algo.**[^always-finds] Y si intentas corregirlo todo, acaban saliendo añadidos innecesarios.

```
En una sesión nueva, revisa los cambios de la rama actual contrastándolos con SPEC.md. Mira si se han implementado todos los requisitos y si cada criterio de comprobación tiene su prueba, y dime solo los huecos que afecten a la corrección. Salta el estilo.
```

<Quiz id="ch706-review" />

## Recibir la revisión de la IA

Claude Code tiene el comando de revisión `/code-review`. Si lo escribes en la sesión en la que estás trabajando, lee los cambios de mi rama, busca problemas de corrección y te los cuenta en la conversación.[^local] El uso se cuenta en mi plan igual que el resto de la sesión.[^usage]

En la aplicación de escritorio puedes recibir la revisión escribiendo `/code-review` en el cuadro de entrada antes de hacer el commit.[^desktop-review] Después de abrir el PR, en el panel de información de la sesión puedes ver el PR y el estado de las comprobaciones automáticas. Esta función necesita tener instalado GitHub CLI (`gh`) y haber iniciado sesión.[^monitor]

**La revisión de la IA tiene límites claros.**

- La revisión de la IA puede pasar por alto errores o problemas de seguridad. **Que no encuentre nada no significa que no haya errores ni que sea seguro.**[^miss]
- La revisión gestionada que se añade automáticamente a los PR de GitHub tampoco aprueba ni bloquea el PR. **La decisión de fusionar la toma una persona.**[^decide] Esta revisión gestionada es para los planes Team y Enterprise, y a nivel personal se usa `/code-review` en cualquier plan.[^plans]

Si en la etapa 3 aprendiste a «separar a quien escribe de quien comprueba», aunque sea el mismo Claude, es mejor que haga la revisión en una **sesión nueva**, porque así no se deja arrastrar por el contexto de la conversación en la que lo creó.

<Quiz id="ch706-ai-review" />

## Fusionar y ordenar

Cuando termina la revisión y pasa el mecanismo de comprobación, **fusionas** el PR (Merge). El último paso del GitHub flow es borrar la rama. Aunque borres la rama, **el PR y el historial de commits no se borran**, así que no hay que preocuparse.[^delete]

Más adelante, cuando haya más gente, puedes poner **reglas de protección** como «solo se puede fusionar con una aprobación». Por defecto, las reglas de protección impiden sobrescribir a la fuerza y borrar la rama.[^protect]

<Quiz id="ch706-merge" />

## Pruébalo tú

1. Comprueba que la rama `first-board` está subida a GitHub (capítulo 4). En la pantalla principal del repositorio pulsa **Pull requests** → **New pull request**, elige `first-board` como rama a comparar y pulsa **Create pull request**.[^create-pr] En el título y la descripción escribe qué cambiaste y por qué.
2. Antes de crearlo, pídele a Claude que señale los puntos de riesgo.
3. En una sesión nueva, recibe una revisión contrastada con SPEC.md. Corrige solo los problemas de corrección.
4. Pide otra vez `/code-review` y, aunque no encuentre nada, echa tú mismo un vistazo a la pestaña Files changed.
5. Cuando pase el mecanismo de comprobación, fusiona el PR y ordena la rama.

**Proyecto continuo**: en el capítulo 7, publicarás en internet con GitHub Pages el tablero de tareas ya fusionado.

## Resumen

- El PR es un lugar donde discutir y revisar antes de fusionar. Hazlo pequeño, escribe qué cambiaste y por qué, y revísalo tú primero.
- Aunque estés solo, revisa. El criterio es SPEC.md; solo se corrigen los huecos de corrección y se salta el estilo.
- `/code-review` se usa en cualquier plan. Que no encuentre nada no significa que sea seguro, y la decisión de fusionar la toma una persona.
- Después de fusionar, aunque borres la rama, el PR y el historial de commits se quedan.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Pull Request (PR) | Solicitud de extracción (PR) | La propuesta de fusionar los cambios de una rama |
| Review | Revisión | Examinar los cambios antes de fusionar |
| Merge | Fusionar | Juntar los cambios de la rama |
| `/code-review` | Revisión de código | El comando de revisión de Claude Code |

<ChapterDone :chapter="706" />

Siguiente capítulo: [Capítulo 7. Publicar](07-deploy.md)

[^pr]: Documentación oficial de GitHub, «About pull requests». "A pull request proposes merging code changes from one branch into another. As a collaborative feature, pull requests give you a place to discuss and review work before it becomes part of a project." https://docs.github.com/en/pull-requests/get-started/about-pull-requests (consultado el 2026-11-01)
[^tabs]: Documentación oficial de GitHub, «About pull requests». "**Checks** shows the results of automated tests, builds, and other validations." / "**Files changed** shows the diff that reviewers comment on." https://docs.github.com/en/pull-requests/get-started/about-pull-requests (consultado el 2026-11-01)
[^describe]: Documentación oficial de GitHub, «GitHub flow». "When you create a pull request, include a summary of the changes and what problem they solve." / "If you link with a keyword, the issue will close automatically when the pull request merges." https://docs.github.com/en/get-started/using-github/github-flow (consultado el 2026-11-01)
[^small]: Documentación oficial de GitHub, «Helping others review your changes». "Small, focused pull requests are easier to review and safer to merge." / "A self-review can include reading the diff, checking for accidental changes, and making sure relevant builds or tests have run." https://docs.github.com/en/pull-requests/concepts/helping-others-review-your-changes (consultado el 2026-11-01)
[^risks]: Documentación oficial de Claude Code, «Common workflows». "Review Claude's generated PR before submitting and ask Claude to highlight potential risks or considerations." https://code.claude.com/docs/en/common-workflows (consultado el 2026-11-01)
[^alone]: Documentación oficial de GitHub, «Reviewing your proposed changes». "Even when you work alone, a deliberate review builds a habit that keeps your software projects healthy and makes collaboration easier later." https://docs.github.com/en/get-started/start-your-journey/reviewing-your-proposed-changes (consultado el 2026-11-01)
[^decisions]: Documentación oficial de GitHub, «Quickstart for reviewing pull requests». "**Approve** signals that the changes are ready to merge." / "**Request changes** flags feedback the author must address before merging." https://docs.github.com/en/pull-requests/get-started/reviewing-pull-requests-quickstart (consultado el 2026-11-01)
[^against-spec]: Documentación oficial de Claude Code, «Best practices for Claude Code». "use a subagent to review the rate limiter diff against SPEC.md, check every requirement is implemented and the listed edge cases have tests, report gaps that affect correctness and skip style" https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^always-finds]: Documentación oficial de Claude Code, «Best practices for Claude Code». "A reviewer that's asked to find problems will always find *something*." https://code.claude.com/docs/en/best-practices (consultado el 2026-11-01)
[^local]: Documentación oficial de Claude Code, «Review locally with /code-review». "Claude reviews the changes on your branch, looks for correctness bugs, and reports what it found in your conversation." https://code.claude.com/docs/en/code-review-local (consultado el 2026-11-01)
[^usage]: Documentación oficial de Claude Code, «Review locally with /code-review». "The review runs in your own session, so it counts toward your plan's usage or API billing the same way the rest of the session does." https://code.claude.com/docs/en/code-review-local (consultado el 2026-11-01)
[^desktop-review]: Documentación oficial de Claude Code, «Desktop application». "To have Claude review your changes before you commit, enter `/code-review` in the [prompt box](#use-the-prompt-box)." https://code.claude.com/docs/en/desktop (consultado el 2026-11-01)
[^monitor]: Documentación oficial de Claude Code, «Desktop application». "After you open a pull request, it appears in the **Changes** card of the [session details panel](#see-session-details) with the status of its CI checks." / "PR monitoring requires the [GitHub CLI (`gh`)](https://cli.github.com/) to be installed and authenticated on your machine." https://code.claude.com/docs/en/desktop (consultado el 2026-11-01)
[^miss]: Documentación oficial de Claude Code, «Code Review». "Code Review uses AI to review code and may miss bugs, security vulnerabilities, or other issues. A review with no findings doesn't mean your code is error-free or secure." https://code.claude.com/docs/en/code-review (consultado el 2026-11-01)
[^decide]: Documentación oficial de Claude Code, «Code Review». "A review never approves or blocks the pull request, so the decision to merge stays with your team." https://code.claude.com/docs/en/code-review (consultado el 2026-11-01)
[^plans]: Documentación oficial de Claude Code, «Code Review». "**Plans**: [Team and Enterprise](https://code.claude.com/docs/en/feature-availability.md)" / "Run [`/code-review`](https://code.claude.com/docs/en/code-review-local) in your Claude Code session on any plan, or [compare all the options](#compare-ways-to-get-a-review)." https://code.claude.com/docs/en/code-review (consultado el 2026-11-01)
[^delete]: Documentación oficial de GitHub, «GitHub flow». "Don't worry about losing information. Your pull request and commit history will not be deleted." https://docs.github.com/en/get-started/using-github/github-flow (consultado el 2026-11-01)
[^protect]: Documentación oficial de GitHub, «About protected branches». "By default, each branch protection rule disables force pushes to the matching branches and prevents the matching branches from being deleted." https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches (consultado el 2026-11-01)
[^create-pr]: Documentación oficial de GitHub, «Quickstart for pull requests». "then click **New pull request**." / "For the **compare** branch, select the branch that contains your changes." / "Click **Create pull request**." https://docs.github.com/en/pull-requests/get-started/pull-request-quickstart (consultado el 2026-11-01)
