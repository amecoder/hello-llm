# Capítulo 2. Crear un repositorio de GitHub: construir la casa del proyecto

> **En una línea**: un repositorio (Repository) es el lugar donde se guardan los archivos del proyecto y **todo el historial de cambios**. Si creas un repositorio en GitHub, tienes una copia segura fuera de tu ordenador y un espacio para colaborar.
> Que sea público o privado está relacionado con **si más adelante podrás publicarlo gratis en la web**, así que decídelo desde el momento de crearlo.

Este capítulo se ha escrito a partir de la documentación oficial de GitHub consultada el 1 de noviembre de 2026. Las pantallas de GitHub se describen en inglés. Si en la etapa 3 ya probaste a dejar un "historial de cambios" con Git, piensa que este es el paso de subir ese historial a internet.

## Git, GitHub y repositorio

**Git** es un sistema de control de versiones que sigue los cambios de los archivos.[^git] El commit con el que le pedías a Claude "regístralo" en la etapa 3 es un registro de Git.

**GitHub** es un servicio que sube ese proyecto de Git a internet y le añade herramientas de planificación y colaboración.[^git] Y un **repositorio** es el lugar de GitHub donde se guardan el código y los archivos del proyecto. Guarda los archivos, registra cada cambio con un commit y se convierte en un espacio donde trabajar juntos.[^repo]

Conviene conocer de antemano estas palabras que aparecen mucho.

| Palabra | Significado |
|---|---|
| Rama (branch) | Una línea de trabajo aparte que no afecta a la versión principal |
| Fusión (merge) | Unir a otra rama los cambios de una rama |
| Remoto (remote) | Un repositorio que está en GitHub, no en tu ordenador |
| Clonar (clone) | Descargar a tu ordenador un repositorio con todo su historial |

Fuente: documentación oficial de GitHub (solo una parte)[^terms]

<Quiz id="ch702-basics" />

## Público y privado

Lo primero que decides al crear un repositorio es su **visibilidad**.

| Visibilidad | Quién puede verlo |
|---|---|
| Público (Public) | Cualquiera en internet |
| Privado (Private) | Yo y las personas con las que lo comparta |

Fuente: documentación oficial de GitHub[^visibility]

En una cuenta gratuita, esta elección se relaciona con la publicación del capítulo 7. **Una cuenta gratuita solo puede usar GitHub Pages (publicación gratuita en la web) en repositorios públicos.**[^pages-free] Por eso, el tutorial de introducción de GitHub también te hace elegir **Public** para publicarlo más adelante como un sitio de verdad.[^tutorial-public]

Un repositorio público tiene un precio. Como todo el código es visible para todo el mundo, aumenta el riesgo de que alguien busque puntos débiles o información sensible.[^public-risk] Por eso, **en un repositorio público no se ponen datos personales, contraseñas ni notas con nombres reales.** Se trata en detalle en el capítulo 9.

Se puede cambiar más adelante, pero con consecuencias. Si en una cuenta gratuita cambias un repositorio público a privado, el sitio de Pages que tenías publicado se retira automáticamente.[^switch]

<Quiz id="ch702-visibility" />

## README, .gitignore y licencia

Al crear un repositorio nuevo puedes incluir tres archivos.[^options]

- **README**: es el manual que ven primero los visitantes.[^readme] Escribes qué hace el proyecto, para qué sirve y cómo se empieza. El tutorial te hace elegir **Add README**. Porque se convierte en el archivo inicial y en el lugar donde describir el proyecto.[^add-readme]
- **.gitignore**: es una lista de **archivos que Git debe ignorar** al hacer un commit.[^gitignore] Ahí se anota lo que no debe subirse, como un archivo de ajustes con contraseñas. Hay algo que debes tener en cuenta: **un archivo que ya has incluido en un commit no se ignora solo por añadirlo a la lista.**[^already] Por eso es mejor escribirlo desde el principio.
- **Licencia**: avisa de lo que otras personas pueden hacer con tu código. No es obligatorio elegir una, pero sin licencia se aplica la ley de derechos de autor por defecto, y nadie puede copiar, distribuir ni adaptar tu código.[^license] Si te cuesta elegir, GitHub recomienda choosealicense.com. GitHub también aclara que esta guía no es asesoramiento legal.[^not-lawyer]

Cuando importes un repositorio que ya tiene historial de Git, no elijas ninguna de estas tres. Chocan con tu carpeta (conflicto de fusión) y pueden liarlo todo.[^conflict]

<Quiz id="ch702-files" />

## Conectarlo con tu ordenador

Traer a tu ordenador un repositorio de GitHub se llama **clonar** (clone). La copia clonada se queda **conectada** con el original de GitHub, así que puedes volver a subir lo que hayas registrado.[^clone]

Hay varias formas de traerlo.

| Forma | Cuándo conviene |
|---|---|
| GitHub Desktop | Con una pantalla gráfica, como en el tutorial oficial de introducción |
| Pedírselo a Claude Code | Cuando quieres encargarlo hablando, como en la etapa 3 |

Fuente: resumen de esta guía (GitHub Desktop es el método del tutorial oficial)[^clone]

A Claude Code se lo puedes pedir así. Como dirección del repositorio usa la que ves en la barra de direcciones del navegador al abrir el repositorio en GitHub (por ejemplo, `https://github.com/tuusuario/cafe-todo-board`).

```
Clona este repositorio de GitHub en la carpeta ~/hello-ai-연습/할일보드: <dirección del repositorio>
```

**También puedes subir una carpeta que ya existe.** Una carpeta que ya tenías en tu ordenador, como la herramienta de organización de la etapa 3, también se puede subir a GitHub, y si era una carpeta que no se gestionaba con Git, primero se convierte en un repositorio Git.[^existing] Pero esta guía crea el **tablero de tareas como un repositorio nuevo**. La herramienta de organización tiene las notas originales, y es más seguro evitar subirlas tal cual a un repositorio público.

<Quiz id="ch702-clone" />

## Prueba tú

1. Regístrate o inicia sesión en [github.com](https://github.com) (basta una cuenta gratuita).
2. Arriba a la derecha, **+** → **New repository** para crear un repositorio nuevo. Llámalo `cafe-todo-board`, elige la visibilidad **Public** y marca **Add README**. Si puedes incluir también `.gitignore`, hazlo (la lista, según te indique la pantalla).
3. Comprueba que en la pantalla del repositorio se ve el README.
4. Con GitHub Desktop o Claude Code, clona el repositorio en `~/hello-ai-연습/할일보드`. Para subir más adelante los cambios a GitHub (push), esa herramienta debe tener iniciada la sesión con tu cuenta de GitHub. Si la primera vez que subes sale una ventana de inicio de sesión, sigue sus indicaciones.
5. Abre la carpeta clonada en la app de Claude Code y comprueba que dentro de la carpeta hay un README.md.

**Proyecto continuo**: en el capítulo 3, Claude te entrevistará sobre qué crear en este repositorio y lo dejará organizado en SPEC.md.

## Resumen

- Git es el mecanismo del historial de cambios, GitHub es el sitio donde ese historial se guarda en internet y se colabora, y el repositorio es la casa del proyecto.
- Una cuenta gratuita solo puede usar GitHub Pages en repositorios públicos. En un repositorio público no se ponen datos personales.
- README es el manual, .gitignore es la lista de lo que no se sube y la licencia es el permiso de uso. El .gitignore se escribe desde el principio.
- La copia clonada se queda conectada con GitHub.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Git | Git | Sistema de control de versiones que sigue los cambios de los archivos |
| GitHub | GitHub | Servicio que guarda repositorios de Git en internet y permite colaborar |
| README | README | El primer manual de un repositorio |
| .gitignore | .gitignore | Lista de archivos que Git debe ignorar |
| Clone | Clonar | Descargar a tu ordenador un repositorio con todo su historial |

<ChapterDone :chapter="702" />

Siguiente capítulo: [Capítulo 3. Planificación y especificación](03-plan-spec.md)

[^git]: Documentación oficial de GitHub, «What is GitHub?». "Git is a version control system that tracks changes to files." https://docs.github.com/en/get-started/start-your-journey/what-is-github (consultado el 2026-11-01)
[^repo]: Documentación oficial de GitHub, «Creating a repository for your project on GitHub». "It stores your files, tracks each change as a commit, and gives collaborators a shared place to work." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (consultado el 2026-11-01)
[^terms]: Documentación oficial de GitHub, «About repositories». "Branch | A parallel version of your code that is contained within the repository, but does not affect the primary or main branch." / "Merge | To take the changes from one branch and apply them to another." / "Remote | A repository stored on GitHub, not on your computer." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (consultado el 2026-11-01)
[^visibility]: Documentación oficial de GitHub, «About repositories». "Public repositories are accessible to everyone on the internet." / "Private repositories are only accessible to you, people you explicitly share access with, and, for organization repositories, certain organization members." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (consultado el 2026-11-01)
[^pages-free]: Documentación oficial de GitHub, «What is GitHub Pages?». "GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (consultado el 2026-11-01)
[^tutorial-public]: Documentación oficial de GitHub, «Creating a repository for your project on GitHub». "Use the **Choose visibility** dropdown menu to select **Public** so you can publish your software project to a live site later in this series." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (consultado el 2026-11-01)
[^public-risk]: Documentación oficial de GitHub, «About repositories». "Public repositories expose your codebase to everyone, increasing the risk that attackers might exploit vulnerabilities or access sensitive information." https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (consultado el 2026-11-01)
[^switch]: Documentación oficial de GitHub, «Setting repository visibility». "Any published GitHub Pages site will be automatically unpublished." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility (consultado el 2026-11-01)
[^options]: Documentación oficial de GitHub, «Creating a new repository». "If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict." https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository (consultado el 2026-11-01)
[^readme]: Documentación oficial de GitHub, «About the repository README file». "A README is often the first item a visitor will see when visiting your repository." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes (consultado el 2026-11-01)
[^add-readme]: Documentación oficial de GitHub, «Creating a repository for your project on GitHub». "Select **Add README**. This gives your repository a starting file and a place to describe your software project." https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github (consultado el 2026-11-01)
[^gitignore]: Documentación oficial de GitHub, «Ignoring files». "You can create a `.gitignore` file in your repository's root directory to tell Git which files and directories to ignore when you make a commit." https://docs.github.com/en/get-started/git-basics/ignoring-files (consultado el 2026-11-01)
[^already]: Documentación oficial de GitHub, «Ignoring files». "If you want to ignore a file that is already checked in, you must untrack the file before you add a rule to ignore it." https://docs.github.com/en/get-started/git-basics/ignoring-files (consultado el 2026-11-01)
[^license]: Documentación oficial de GitHub, «Licensing a repository». "A software license tells others what they can and can't do with your source code, so it's important to make an informed decision." / "However, without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository (consultado el 2026-11-01)
[^not-lawyer]: Documentación oficial de GitHub, «Licensing a repository». "We hope it helps, but please keep in mind that we’re not lawyers and that we make mistakes like everyone else." https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository (consultado el 2026-11-01)
[^conflict]: Documentación oficial de GitHub, «Creating a new repository». "If you're importing an existing repository to GitHub, don't choose any of these options, as you may introduce a merge conflict." https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository (consultado el 2026-11-01)
[^clone]: Documentación oficial de GitHub, «Connecting to your code locally». "Cloning creates a copy of your repository on your computer that stays connected to the version on GitHub." https://docs.github.com/en/get-started/start-your-journey/connecting-to-your-code-locally (consultado el 2026-11-01)
[^existing]: Documentación oficial de GitHub, «Adding locally hosted code to GitHub». "If your locally-hosted code isn't tracked by any VCS, the first step is to initialize a Git repository." https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github (consultado el 2026-11-01)
