# Capítulo 4. Construir — primero el plan, luego la rama y el commit

> **En una línea**: en una sesión nueva, dale SPEC.md y recibe primero el plan en **modo plan**. Una vez aprobado, constrúyelo en un espacio aparte llamado **rama** y registra cada cambio pequeño con un **commit**.
> Es el GitHub flow. Es un flujo de trabajo ligero que sirve no solo a los desarrolladores, sino a cualquiera.

Este capítulo se escribió a partir de la documentación oficial de Claude Code y GitHub consultada el 1 de noviembre de 2026. El modo plan y el commit ya los usaste en los [capítulos 4 y 5 de Claude Code](../20-claude-code/05-delegate-well.md). Este capítulo los junta con las ramas y los ordena como un «flujo para construir con seguridad».

## Recibir primero el plan

Cuando ya tengas SPEC.md, abre una sesión nueva y cambia al **modo plan**. En la aplicación de escritorio, como en el [capítulo 5 de Claude Code](../20-claude-code/05-delegate-well.md), cambia el modo que hay debajo del cuadro de entrada a «Plan». En modo plan, Claude lee los archivos y solo presenta un plan, y no cambia nada hasta que yo lo apruebe.[^plan]

```
Lee SPEC.md y haz un plan para construir un tablero de tareas que cumpla esta especificación. Todavía no crees ningún archivo.
```

Cuando recibas el plan, pregúntate esto.

- Cada línea de SPEC.md, ¿con qué paso del plan se cubre?
- ¿Cada paso tiene un tamaño que se puede comprobar de una vez?
- ¿Se ha colado alguna herramienta nueva o instalación que yo no conozca?

Si no te convence, pide que lo corrijan antes de aprobar. Corregir en la etapa del plan es lo más barato.

<Quiz id="ch704-plan" />

## Construir en una rama

Una **rama** te permite construir la función en un espacio aparte. La versión principal (`main`) no cambia hasta que esté lista.[^branch] Aunque lo estropees, `main` queda intacta, así que puedes probar con tranquilidad.

El tutorial de introducción de GitHub resume así el proceso de construir. **Preparar un espacio de trabajo → hacer cambios y guardarlos → proponerlos para que los revisen**, y las herramientas para eso son las ramas, los commits y el PR (capítulo 6).[^core]

El nombre de la rama se pone **corto y descriptivo**.[^name] Para la primera pantalla del tablero de tareas basta con algo como `first-board`.

```
Crea la rama first-board y construye la primera pantalla según el plan aprobado. Que no necesite compilación y que se abra con un solo index.html en la carpeta raíz.
```

La razón de hacerlo con un solo `index.html` es que GitHub Pages, del capítulo 7, busca `index.html` en la parte de arriba de la carpeta que va a publicar.

<Quiz id="ch704-branch" />

## Hacer commits pequeños

Un **commit** guarda el cambio como una foto de ese momento, y el **push** envía esa foto al repositorio de GitHub.[^commit]

Conviene que cada commit contenga **un cambio aislado y completo**. Así es más fácil deshacer solo esa parte cuando quieras elegir otro camino.[^atomic] Los cambios que no tienen relación entre sí van también en ramas aparte.[^atomic]

| Commit flojo | Commit mejor |
|---|---|
| Todo el trabajo del día de una vez, con el mensaje «trabajo» | «Añadir lectura de la tabla de tareas», «Marcar con color las tareas vencidas» |

Fuente: ejemplo de esta guía (el principio es de la documentación oficial de GitHub)[^atomic]

Como aprendiste en la etapa 3, el hábito de dejar un registro antes y después de encargar algo vale igual aquí.

<Quiz id="ch704-commit" />

## Leer lo que hizo la IA

El resultado de la IA se acepta **después de leerlo**. El tutorial de GitHub también dice que se revise lo que genera la IA y luego se ajuste a los ejemplos.[^review-ai]

En la aplicación de escritorio de Claude Code puedes revisar los cambios archivo por archivo en la vista de cambios (diff). Si dejas un comentario con el **+** que hay junto a la línea, Claude lo lee y lo corrige.[^diff]

No pasa nada si no entiendes todo el código. Pregunta así.

```
Para cada archivo que acabas de cambiar, explícame en una línea qué has cambiado y por qué. Dime también con qué línea de SPEC.md se relaciona.
```

Si hay un cambio cuya explicación no se relaciona con SPEC.md, puede que haya hecho algo que no pediste. Pregunta por esa parte.

<Quiz id="ch704-read" />

## Practica tú mismo

1. En la carpeta del tablero de tareas, abre una **sesión nueva** y cámbiala a modo plan.
2. Envía la petición de plan de arriba, revisa el plan con las tres preguntas y apruébalo.
3. Haz que construya la primera pantalla en la rama `first-board`. Para los datos de las tareas, usa la tabla de tareas del acta de la etapa 3.
4. Mira los archivos en la vista de cambios y pide la explicación de los cambios.
5. Haz que haga commits en unidades pequeñas.
6. Pídele a Claude: «Sube la rama `first-board` a GitHub (push)». Basta con que veas la rama en la pantalla del repositorio de GitHub.

**Proyecto continuo**: en el capítulo 5 harás un mecanismo para que Claude compruebe por sí mismo «¿se ven todas las tareas, sin que falte ninguna?».

## Resumen

- En una sesión nueva, dale SPEC.md y recibe primero el plan en modo plan. Corregir es más barato en la etapa del plan.
- La rama es un espacio de trabajo que no toca `main`. El nombre, corto y descriptivo.
- Un commit, un cambio completo. Los cambios sin relación van en ramas distintas.
- Lo que hace la IA se acepta después de leerlo. En cada cambio, pregunta con qué línea de SPEC.md se relaciona.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Branch | Rama | Una línea de trabajo aparte que no toca la versión principal |
| Commit | Commit | Registrar el cambio como una foto de ese momento |
| Push | Push (subir) | Enviar mi registro al repositorio de GitHub |
| GitHub flow | GitHub flow | Flujo de trabajo: rama → cambio → PR → revisión → fusión |

<ChapterDone :chapter="704" />

Siguiente capítulo: [Capítulo 5. Comprobar y probar](05-test.md)

[^plan]: Documentación oficial de Claude Code, «Common workflows». "For changes you want to review before they touch disk, switch to plan mode. Claude reads files and proposes a plan but makes no edits until you approve." https://code.claude.com/docs/en/common-workflows (consultado el 2026-11-01)
[^branch]: Documentación oficial de GitHub, «Writing and storing your code». "A branch lets you work on your feature in its own space, without changing the `main` copy of your code until you're ready." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (consultado el 2026-11-01)
[^core]: Documentación oficial de GitHub, «Writing and storing your code». "Along the way, you'll follow the core developer workflow—setting up a space for your work, making and saving your changes, and proposing them for review—using branches, commits, and a pull request." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (consultado el 2026-11-01)
[^name]: Documentación oficial de GitHub, «GitHub flow». "A short, descriptive branch name enables your collaborators to see ongoing work at a glance." https://docs.github.com/en/get-started/using-github/github-flow (consultado el 2026-11-01)
[^commit]: Documentación oficial de GitHub, «Writing and storing your code». "Committing saves a snapshot of your changes, and pushing sends them to GitHub where they will be stored in your repository." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (consultado el 2026-11-01)
[^atomic]: Documentación oficial de GitHub, «GitHub flow». "Ideally, each commit contains an isolated, complete change. This makes it easy to revert your changes if you decide to take a different approach." / "Make a separate branch for each set of unrelated changes." https://docs.github.com/en/get-started/using-github/github-flow (consultado el 2026-11-01)
[^review-ai]: Documentación oficial de GitHub, «Writing and storing your code». "Review what Copilot generates, then adjust the files to match the examples below." https://docs.github.com/en/get-started/start-your-journey/writing-and-storing-your-code (consultado el 2026-11-01)
[^diff]: Documentación oficial de Claude Code, «Desktop application». "After Claude makes changes to your code, the diff view lets you review modifications file by file before creating a pull request." / "Claude reads your comments and makes the requested changes, which appear as a new diff you can review." https://code.claude.com/docs/en/desktop (consultado el 2026-11-01)
