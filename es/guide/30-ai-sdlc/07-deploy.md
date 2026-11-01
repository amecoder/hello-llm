# Capítulo 7. Desplegar — publicar con GitHub Pages

> **En una línea**: **GitHub Pages** es un servicio gratuito que publica como sitio de internet los archivos web de tu repositorio, tal cual. Con una cuenta gratuita, solo se puede usar con un **repositorio público**.
> Desplegar es una acción que afecta al mundo exterior, así que **no se puede deshacer con el rebobinado de Claude Code.** Una persona comprueba si se puede publicar y pulsa el botón.

Este capítulo se escribió a partir de la documentación oficial de GitHub y de Claude Code consultada el 1 de noviembre de 2026. Las pantallas de GitHub se describen según su versión en inglés.

## Qué es GitHub Pages

GitHub Pages es un servicio de alojamiento de sitios estáticos que toma los archivos HTML, CSS y JavaScript de un repositorio, si hace falta los pasa por una compilación y los **publica como sitio web**.[^pages] Un sitio estático es un sitio que muestra tal cual unos archivos fijos, sin un servidor que cambie el contenido para cada visitante. Encaja bien con una página que muestra una tabla, como el tablero de tareas.

Como viste en el capítulo 2, **con una cuenta gratuita solo puedes usar** Pages con repositorios públicos.[^free] Y el sitio de Pages **se publica en internet.** Aunque tu plan permita hacer un repositorio privado, el sitio sigue siendo público, así que los datos delicados hay que borrarlos antes de publicar.[^public-site]

<Quiz id="ch707-pages" />

## Dos formas de publicar

| Forma | Cuándo |
|---|---|
| Publicar desde una rama | Cuando no necesitas tocar el proceso de compilación (recomendada) |
| Publicar con GitHub Actions | Cuando quieres definir tú el proceso de compilación |

Fuente: documentación oficial de GitHub (solo una parte)[^two-ways]

Para una página que muestra los archivos tal cual, como el tablero de tareas, basta con **publicar desde una rama**. La documentación oficial también recomienda esta forma si no necesitas tocar el proceso de compilación.[^two-ways] Si eliges una rama y una carpeta (la parte de arriba del repositorio `/` o `/docs`), cada vez que subas algo a esa rama se publica el contenido de esa carpeta.[^branch-source]

El tutorial de introducción de GitHub usa la forma de Actions. Si en Pages, dentro de los ajustes, cambias **Source** a **GitHub Actions** y añades el archivo de configuración de despliegue, a partir de entonces el sitio se vuelve a desplegar cada vez que subes algo a `main`.[^actions-deploy] La dirección tiene la forma `https://tu-usuario.github.io/nombre-del-repositorio/`.

<Quiz id="ch707-ways" />

## Límites y prohibiciones

Es gratuito, pero hay cosas para las que no se puede usar y hay límites.

| Apartado | Contenido |
|---|---|
| Prohibido | Llevar un negocio, una tienda en línea o un servicio comercial (SaaS) |
| No lo uses para | Páginas en las que se intercambien contraseñas o números de tarjeta |
| Tamaño | Sitio publicado de 1 GB o menos |
| Tiempo | Si el despliegue pasa de 10 minutos, falla |
| Ancho de banda | 100 GB al mes (límite flexible) |

Fuente: documentación oficial de GitHub (solo una parte)[^business][^sensitive][^size][^timeout][^bandwidth]

**Se registra la dirección IP de los visitantes.** Cuando alguien entra en un sitio de Pages, se registra y se guarda la dirección IP del visitante con fines de seguridad, haya iniciado sesión o no.[^ip] Si quieres escribir en tu página «no recopilamos nada», anota también este punto.

Un **sitio de práctica que imita un servicio real** tiene condiciones. Copiarlo para aprender no está prohibido, pero tienes que escribir tú el código, no recopilar datos de usuarios y poner un **aviso visible** de que es educativo y no tiene relación con el original.[^clone-site]

<Quiz id="ch707-limits" />

## El despliegue no se puede deshacer con el rebobinado

El rebobinado (checkpoint) de Claude Code, que aprendiste en la etapa 3, es **para recuperarse rápido dentro de la sesión**. El registro permanente lo lleva Git.[^checkpoint] Y las acciones que afectan a sistemas externos, como bases de datos, servicios externos y los **despliegues**, no se pueden deshacer con un checkpoint.[^remote]

Por eso una persona lo comprueba justo antes de desplegar. La documentación oficial también dice que **la responsabilidad de revisar antes de aprobar** si los comandos propuestos son seguros es del usuario.[^responsible]

Antes de desplegar, hazte estas preguntas.

- ¿Pasó el mecanismo de comprobación del capítulo 5?
- ¿Terminaste la revisión del capítulo 6 y fusionaste el PR?
- ¿No hay nombres reales, contactos ni contraseñas en el repositorio público y en la página? (capítulo 9)

Si subiste algo delicado, no basta con deshacerlo. Porque queda en el historial de Git de un repositorio público. Sigue el orden del [capítulo 9](09-safety.md) (primero anular y cambiar).

<Quiz id="ch707-undo" />

## Practica tú mismo

1. Antes, comprueba los valores secretos y los datos personales con la [lista de comprobación previa a la publicación del capítulo 9](09-safety.md).
2. En GitHub, abre **Settings → Pages** del repositorio `cafe-todo-board`.
3. En «Build and deployment», elige **Deploy from a branch** en **Source** y, en **Branch**, elige la rama `main` y la carpeta `/` (la raíz).[^quickstart]
4. Comprueba que hay un `index.html` en la parte de arriba del repositorio. GitHub Pages busca este archivo en la parte de arriba de la carpeta de publicación.[^entry] Después abre `https://tu-usuario.github.io/cafe-todo-board/`. Después de subirlo, puede tardar hasta 10 minutos en reflejarse.[^quickstart] Si ves el tablero de tareas, ha salido bien.
5. Ábrelo también en el móvil.
6. Piensa si poner abajo de la página un aviso como «Esta página se hizo para practicar y no recopila datos de visita (GitHub Pages registra la IP del visitante con fines de seguridad)».

**Proyecto continuo**: en el capítulo 8 escribirás como incidencia una mejora como «las tareas vencidas, en rojo» y darás otra vuelta.

## Resumen

- GitHub Pages publica como sitio los archivos web del repositorio. Con una cuenta gratuita solo sirve con repositorios públicos, y el sitio siempre es público.
- Si no necesitas tocar la compilación, publica desde una rama.
- No se usa para negocios, tiendas en línea ni para introducir contraseñas. Sitio de 1 GB, despliegue de 10 minutos, ancho de banda de 100 GB al mes (límite flexible). Se registra la IP de los visitantes.
- El despliegue no se puede deshacer con el rebobinado. Una persona lo pulsa después de terminar la comprobación, la revisión y la comprobación previa a la publicación.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| GitHub Pages | GitHub Pages | Servicio que publica los archivos del repositorio como un sitio web gratuito |
| Static site | Sitio estático | Sitio que muestra tal cual unos archivos fijos |
| Hosting | Alojamiento (hosting) | Dejar un sitio puesto en internet |
| Bandwidth | Ancho de banda | La cantidad de datos enviados a los visitantes |

<ChapterDone :chapter="707" />

Siguiente capítulo: [Capítulo 8. Operar y mejorar](08-operate.md)

[^pages]: Documentación oficial de GitHub, «What is GitHub Pages?». "GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (consultado el 2026-11-01)
[^free]: Documentación oficial de GitHub, «What is GitHub Pages?». "GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (consultado el 2026-11-01)
[^public-site]: Documentación oficial de GitHub, «Configuring a publishing source for your GitHub Pages site». "GitHub Pages sites are publicly available on the internet, even if the repository for the site is private (if your plan or organization allows it)." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (consultado el 2026-11-01)
[^two-ways]: Documentación oficial de GitHub, «Configuring a publishing source for your GitHub Pages site». "You can publish your site when changes are pushed to a specific branch, or you can write a GitHub Actions workflow to publish your site." / "If you do not need any control over the build process for your site, we recommend that you publish your site when changes are pushed to a specific branch." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (consultado el 2026-11-01)
[^branch-source]: Documentación oficial de GitHub, «Configuring a publishing source for your GitHub Pages site». "Whenever changes are pushed to the source branch, the changes in the source folder will be published to your GitHub Pages site." https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site (consultado el 2026-11-01)
[^actions-deploy]: Documentación oficial de GitHub, «Deploying your website automatically». "Under "Build and deployment", from the **Source** dropdown, select **GitHub Actions**." / "From now on, every push to `main` redeploys your site with your latest changes." https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically (consultado el 2026-11-01)
[^business]: Documentación oficial de GitHub, «GitHub Pages limits». "GitHub Pages is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS)." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (consultado el 2026-11-01)
[^sensitive]: Documentación oficial de GitHub, «GitHub Pages limits». "GitHub Pages sites shouldn't be used for sensitive transactions like sending passwords or credit card numbers." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (consultado el 2026-11-01)
[^size]: Documentación oficial de GitHub, «GitHub Pages limits». "Published GitHub Pages sites may be no larger than 1 GB." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (consultado el 2026-11-01)
[^timeout]: Documentación oficial de GitHub, «GitHub Pages limits». "GitHub Pages deployments will timeout if they take longer than 10 minutes." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (consultado el 2026-11-01)
[^bandwidth]: Documentación oficial de GitHub, «GitHub Pages limits». "GitHub Pages sites have a _soft_ bandwidth limit of 100 GB per month." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (consultado el 2026-11-01)
[^ip]: Documentación oficial de GitHub, «What is GitHub Pages?». "When a GitHub Pages site is visited, the visitor's IP address is logged and stored for security purposes, regardless of whether the visitor has signed into GitHub or not." https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages (consultado el 2026-11-01)
[^clone-site]: Documentación oficial de GitHub, «GitHub Pages limits». "Using GitHub Pages to create a copy of an existing website as a learning exercise is not prohibited." / "you must write the code yourself, the site must not collect any user data, and you must include a prominent disclaimer on the site indicating that the project is not associated with the original and was only created for educational purposes." https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (consultado el 2026-11-01)
[^checkpoint]: Documentación oficial de Claude Code, «Checkpointing». "Checkpoints are designed for quick, session-level recovery. For permanent version history and collaboration, continue using version control, such as Git, for commits, branches, and long-term history." https://code.claude.com/docs/en/checkpointing (consultado el 2026-11-01)
[^remote]: Documentación oficial de Claude Code, «How Claude Code works». "Actions that affect remote systems (databases, APIs, deployments) can't be checkpointed. You control those with your permission mode and permission rules." https://code.claude.com/docs/en/how-claude-code-works (consultado el 2026-11-01)
[^responsible]: Documentación oficial de Claude Code, «Security». "You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security (consultado el 2026-11-01)
[^quickstart]: Documentación oficial de GitHub, «Quickstart for GitHub Pages». "Under "Build and deployment", under "Source", select **Deploy from a branch**." / "Note that it can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub." https://docs.github.com/en/pages/quickstart (consultado el 2026-11-01)
[^entry]: Documentación oficial de GitHub, «Creating a GitHub Pages site». "GitHub Pages will look for an `index.html`, `index.md`, or `README.md` file as the entry file for your site." https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site (consultado el 2026-11-01)
