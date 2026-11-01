# Capítulo 3. Recorrido por la pantalla: barra de título, cambios, archivos e información de la sesión

> **En una línea**: la pestaña Code es una pantalla en la que **abres varios paneles (ventanas) junto al panel de la conversación**. Con los botones de la barra de título de la sesión abres los paneles de **cambios, archivos, terminal y navegador**, y en el panel de información de la sesión ves con números qué ha cambiado.
> Para ver los cambios, la carpeta debe tener activado el **registro de cambios (Git)**. En este capítulo le pedirás a Claude que lo active.

Este capítulo se escribió a partir de la documentación oficial de Claude Code consultada el 2026-10-31 y de la aplicación de escritorio para macOS (pantalla en coreano, cuenta de pago). Usa tal cual la carpeta **«Herramienta de orden»** (정리도구) y el acta de reunión que creaste en el capítulo 2.

## La disposición de un vistazo

Después de encargar varias tareas, la pantalla queda así.

![Pantalla de trabajo de la pestaña Code. Los números rojos marcan: ① el panel de conversación de la izquierda, ② el panel de cambios arriba a la derecha (las líneas borradas, en rojo; las nuevas, en verde) y ③ el panel de archivos abajo a la derecha (con el acta abierta y, a su lado, la lista de carpetas)](../../../guide/20-claude-code/assets/shot-11-layout-marked.png)

| N.º | Panel | Qué se ve |
|---|---|---|
| ① | Conversación | Las peticiones que envié y las explicaciones de Claude |
| ② | Cambios («Cambios» (변경 사항)) | Qué líneas de un archivo se han borrado y cuáles se han creado |
| ③ | Archivos | Abrir y leer los archivos de la carpeta |

La pestaña Code es una pantalla en la que **colocas a tu gusto los paneles**, como conversación, cambios, navegador, terminal y archivos.[^arrange] Arrastra el encabezado de un panel para moverlo y arrastra el borde de un panel para cambiar su tamaño.[^arrange] No hace falta abrirlos todos desde el principio: ábrelos de uno en uno cuando los necesites.

<Quiz id="ch403-layout" />

## Los botones de la barra de título de la sesión

En la fila superior del panel de conversación hay un grupo de botones.

![Barra de título de la sesión. Los números rojos marcan: ① abrir y cerrar el menú lateral (lista de sesiones), ② el título de la sesión, ③ el panel de información de la sesión, ④ la terminal, ⑤ los cambios, ⑥ el navegador, ⑦ los archivos y ⑧ más (⋯)](../../../guide/20-claude-code/assets/shot-06-titlebar-marked.png)

| N.º | Qué hace |
|---|---|
| ① | Abrir y cerrar el menú lateral (lista de sesiones) |
| ② | Título de la sesión. Puedes cambiarle el nombre pulsándolo |
| ③ | Abrir y cerrar el panel de información de la sesión |
| ④ | Panel de terminal |
| ⑤ | Panel de cambios (de lo que ha cambiado) |
| ⑥ | Panel de navegador |
| ⑦ | Panel de archivos |
| ⑧ | Abrir otros paneles que no tienen botón |

Fuente: los nombres de los botones, de la comprobación en pantalla de esta guía (menú «Ver» (보기) de la barra de menús, 2026-10-31); su función, de la documentación oficial[^arrange][^sessions]

Si te confunden los botones porque solo tienen icono, **coloca el ratón encima para ver su nombre**.[^arrange] Si la ventana es estrecha, los botones que no caben pasan al menú ⑧.[^arrange]

El título de la sesión (②) lo pone la aplicación automáticamente al ver la primera petición. En esta guía le puso «Organizar las notas de la reunión» (회의 메모 정리). Si pulsas el título, puedes cambiarle el nombre.[^sessions]

En el menú lateral ① está la lista de las sesiones que has abierto hasta ahora. Cada sesión guarda por separado su conversación y sus cambios.[^sessions] Cómo usar varias sesiones en paralelo se trata en el capítulo 8.

<Quiz id="ch403-titlebar" />

## Ver lo que ha cambiado: hace falta el registro de cambios (Git)

Si con la carpeta que creaste en el capítulo 2 pulsas el botón de cambios ⑤, aparece este aviso.

![Panel de cambios. Los números rojos marcan: ① el nombre del panel, «Cambios», y ② el aviso «Para ver los cambios hace falta un repositorio de Git» (변경 사항을 보려면 Git 저장소가 필요합니다)](../../../guide/20-claude-code/assets/shot-07-changes-need-git-marked.png)

**Git** es una herramienta que deja constancia de cuándo y cómo han cambiado los archivos. El panel de cambios compara ese registro con los archivos actuales. Por eso, en una carpeta normal sin registro no hay nada que mostrar.

No hace falta que sepas comandos de Git. **Basta con pedirle a Claude que lo active.**

```
Dicen que para ver los cambios hace falta un repositorio de Git. Activa el registro de cambios (Git) en esta carpeta y deja los archivos que hay ahora como primer registro. Explícame con palabras fáciles lo que hiciste.
```

En esta guía, Claude activó Git en la carpeta y dejó las 5 notas y el acta como **primer registro**. Entonces el panel de cambios mostró «No hay cambios que mostrar» (표시할 변경 사항이 없습니다). Significa que, desde el primer registro, todavía no ha cambiado nada.

Ahora haz que corrija un poco el acta. Es una petición para añadir a cada tarea un estado basándose en las notas de la retrospectiva.

```
Añade una columna «Estado» a la tabla de tareas del acta. Mirando las 3 notas de retrospectiva de inbox, escribe «Completada (fecha)» en lo que esté terminado y «En curso» en lo que no. Lo que no aparezca en la retrospectiva, ponlo como «Por confirmar», y no toques ninguna otra parte.
```

![Panel de cambios. Los números rojos marcan: ① el número de líneas cambiadas «+7 −7»; ② las líneas borradas (en rojo); ③ las líneas nuevas (en verde, con la columna «Estado» y cosas como «Completada (10/31)»); y ④ la lista de archivos cambiados](../../../guide/20-claude-code/assets/shot-08-diff-marked.png)

**Las líneas rojas son las borradas y las verdes, las nuevas.** `+7 −7` significa que se han creado 7 líneas y se han borrado 7. Cuando se añade una columna al final de una fila de la tabla, Git cuenta esa fila como "borrada y escrita de nuevo". Por eso las 7 filas de la tabla de tareas aparecen una vez en rojo y otra en verde.

Gracias a este panel puedes **comprobar con tus propios ojos si se cumplió "no toques ninguna otra parte"**. Si aparecen en rojo o en verde líneas que no son de la tabla, no se cumplió; si no, se cumplió.

::: tip Comprueba lo que Claude decidió por su cuenta
En la práctica de esta guía, Claude explicó antes una decisión suya. En la retrospectiva no figura por separado la sesión de fotos de Junho, pero, como las publicaciones se subieron las 3 veces, la anotó como «En curso». Añadió además que, si se quiere ser estricto, se puede cambiar a «Por confirmar». Cuando veas una explicación así, revisa una vez más si esa decisión se ajusta a tu criterio. Si no, pide que la corrija en una línea.
:::

::: warning El nombre que queda en el registro de Git
Git deja en cada registro **el nombre y el correo que figuran en la configuración de Git de este ordenador**. Si es un ordenador de la empresa, puede quedar la cuenta de la empresa. Compruébalo antes de enseñar la pantalla del registro a otra persona o de subir la carpeta. Si el ordenador no tiene Git, instálalo desde el sitio oficial (git-scm.com).[^git]
:::

El panel de cambios también se abre y se cierra con el atajo **Cmd+Shift+D**.[^keys]

<Quiz id="ch403-changes" />

## Panel de información de la sesión

Si pulsas el botón ③, se abre junto a la conversación el **panel de información de la sesión**. Muestra en tarjetas dónde se ejecuta esta sesión, qué ha cambiado y cuánto contexto ha usado.[^rail]

![Panel de información de la sesión. Los números rojos marcan: ① el entorno (este ordenador · Herramienta de orden · main), ② el contexto, al 12%, ③ los resultados (el archivo del acta) y ④ los cambios (+7 −7 y el botón «Confirmar cambios» (변경 사항 커밋))](../../../guide/20-claude-code/assets/shot-09-rail-marked.png)

| N.º | Tarjeta | Qué se ve |
|---|---|---|
| ① | Entorno | Dónde (este ordenador) y en qué carpeta se trabaja |
| ② | Contexto | Cuánto se ha usado de lo que esta sesión puede recordar |
| ③ | Resultados | Los archivos que se crearon en esta sesión |
| ④ | Cambios | Número de líneas cambiadas. Si pulsas el número, se abre el panel de cambios |

Fuente: los nombres de las tarjetas, de la comprobación en pantalla de esta guía (2026-10-31); su función, de la documentación oficial[^rail][^diff]

El **contexto** (Context) es "la cantidad que la IA puede ver de una vez", que viste en la etapa 1 ([etapa 1, capítulo 1](../00-common/01-what-is-llm.md#_3-hay-un-limite-de-lo-que-puede-ver-de-una-vez-—-«ventana-de-contexto»)). Cuando se llena, Claude **resume automáticamente la conversación hasta ese momento y sigue trabajando.**[^context] Esta guía recomienda lo siguiente: en lugar de añadir una tarea nueva a una sesión cuyo número ya ha subido mucho, es más limpio empezar la tarea nueva en una sesión nueva.

El botón «Confirmar cambios» de ④ sirve para dejar en Git lo que ha cambiado como un registro nuevo. El registro y cómo deshacer se tratan en el [capítulo 4](04-permissions-undo.md).

<Quiz id="ch403-rail" />

## Panel de archivos: abrir los archivos creados

Si pulsas el botón de archivos ⑦, se abre el panel de archivos junto con la lista de carpetas. Si pulsas un archivo de la lista, ves su contenido.

![Panel de archivos. Los números rojos marcan: ① la lista de carpetas de la derecha (.claude, inbox, notes y el acta dentro de ellas) y ② el acta abierta a la izquierda](../../../guide/20-claude-code/assets/shot-10-files-marked.png)

- También se abre un archivo si **pulsas su ruta** cuando aparece en la conversación.[^files]
- Si es una sesión que se ejecuta en este ordenador, **también puedes editar directamente en el panel de archivos.** Lo que cambias se guarda automáticamente.[^files]
- En la lista puede aparecer la carpeta `.claude`. Es donde Claude Code deja la configuración de esta carpeta, y se trata en el capítulo 6.

Los archivos que crea Claude puedes **comprobarlos directamente dentro de la aplicación, sin usar el Finder ni el Explorador**. Lo que en el capítulo 2 hacías contrastando con las notas originales, ahora puedes hacerlo en una sola pantalla.

<Quiz id="ch403-files" />

## Paneles de terminal y de navegador, y atajos

De los dos paneles restantes, basta con una idea general.

- **Terminal** (④): panel donde escribes comandos para ejecutarlos. Se abre en la misma carpeta que Claude.[^terminal] En esta etapa no hace falta usarlo. La terminal se trata en el capítulo 10.
- **Navegador** (⑥): panel que abre páginas web dentro de la aplicación.[^arrange]

Estos son los atajos más usados (macOS).[^keys]

| Atajo | Qué hace |
|---|---|
| Cmd+Shift+D | Abrir y cerrar el panel de cambios |
| Ctrl+\` | Abrir y cerrar el panel de terminal |
| Cmd+Shift+B | Abrir y cerrar el panel de navegador |
| Cmd+\\ | Cerrar el panel que estás usando |
| Esc | Detener la respuesta de Claude |
| Cmd+Shift+M | Abrir el menú de modos de permisos |

Fuente: documentación oficial de Claude Code[^keys]

## Pruébalo tú

1. En la sesión del capítulo 2 (o en una sesión nueva abierta con la carpeta «Herramienta de orden»), pulsa el botón de cambios ⑤. Si aparece el aviso de que hace falta Git, pídele a Claude que lo active con la petición de arriba.
2. Envía la petición de añadir la columna «Estado» al acta y comprueba en el panel de cambios que **no han cambiado otras líneas que no sean de la tabla**.
3. Abre el panel de información de la sesión ③ y mira el número del contexto y el número de líneas cambiadas.
4. Abre el acta en el panel de archivos ⑦ y comprueba que la columna de estado coincide con las notas de la retrospectiva (la bombilla, la papelería y el costo, completados; Instagram, en curso).

**Proyecto continuo**: compara el resultado de esta guía ([3장-회의록-상태칸.txt](/practice/notes/results/3장-회의록-상태칸.txt)) con el tuyo. Aunque la forma de la tabla sea distinta, si los valores de estado coinciden con la retrospectiva, está bien hecho.

## Resumen

- La pestaña Code abre junto a la conversación los paneles de cambios, archivos, terminal y navegador. Se abren con los botones de la barra de título de la sesión.
- Para ver los cambios, la carpeta necesita Git (registro de cambios). Basta con pedirle a Claude que lo active.
- Las líneas rojas son las borradas y las verdes, las nuevas. Aquí compruebas si se cumplió "no toques ninguna otra parte".
- En el panel de información de la sesión ves el entorno, el contexto, los resultados y el número de líneas cambiadas. Cuando el contexto se llena, resume automáticamente y sigue.
- En el panel de archivos puedes abrir directamente los archivos creados, comprobarlos y editarlos.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Pane | Panel | Una ventana que se abre dentro de la pestaña Code: conversación, cambios, archivos, etc. |
| Diff | Diferencias (lo que ha cambiado) | Comparación línea a línea de antes y después de corregir |
| Git | Git | Herramienta que deja constancia de cuándo y cómo han cambiado los archivos |
| Commit | Confirmación (commit) | Dejar en Git el estado actual como un registro |
| Context | Contexto | Cantidad que Claude puede recordar de una vez en una sesión |
| Session rail | Panel de información de la sesión | Panel que muestra el entorno, el contexto, los resultados y el número de líneas cambiadas |

<ChapterDone :chapter="403" />

Siguiente capítulo: [Capítulo 4. Permisos y deshacer](04-permissions-undo.md)

[^arrange]: Documentación oficial de Claude Code, «Desktop application». "The Code tab is built around panes you can arrange in any layout: chat, diff, browser, terminal, file, plan, tasks, and subagent" / "Drag a pane by its header to reposition it, or drag a pane edge to resize it." / "To open another pane, click its icon button in the session's title bar. Hover to see each button's name, such as Terminal, Changes for the diff view, Browser, and Files." / "When the window is narrow: buttons that don't fit move into the menu" https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^sessions]: Documentación oficial de Claude Code, «Desktop application». "Each session is an independent conversation with its own context and changes." / "To rename a session, open it and click the session title in the title bar." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^rail]: Documentación oficial de Claude Code, «Desktop application». "The session details panel is a set of cards beside the chat that show where the session runs, what it changed, what it's running, and its context usage." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^diff]: Documentación oficial de Claude Code, «Desktop application». "To open the diff view, click the line counts, such as +12 -1, in the Changes card of the session details panel." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^context]: Documentación oficial de Claude Code, «Desktop application». "When context fills up, Claude automatically summarizes the conversation and continues working." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^files]: Documentación oficial de Claude Code, «Desktop application». "To open a file Claude mentions, click its path in the chat." / "Local sessions: you can edit files inside the session's working directory" / "By default, your edits in the file pane save on their own" https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^terminal]: Documentación oficial de Claude Code, «Desktop application». "The terminal opens in your session's working directory and shares the same environment as Claude" https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^keys]: Documentación oficial de Claude Code, «Desktop application», tabla de atajos. "Toggle diff pane" / "Toggle Browser pane" / "Toggle terminal pane" / "Close focused pane" / "Stop Claude's response" / "Open permission mode menu" https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^git]: Documentación oficial de Claude Code, «Desktop application», solución de problemas. "install Git": la documentación oficial indica instalar Git para las funciones que lo necesitan (worktree). Que el panel de cambios exige un repositorio de Git lo comprobó esta guía en pantalla (2026-10-31). https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
