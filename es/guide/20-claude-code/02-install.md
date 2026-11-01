# Capítulo 2. Instalar la aplicación de escritorio y primera sesión: instalar, iniciar sesión, pestaña Code, elegir carpeta y encargar la primera tarea

> **En una línea**: instala la aplicación de escritorio de Claude y abre la pestaña **Code**. En la línea de debajo del cuadro de entrada **eliges una carpeta**, escribes lo que quieres con tus palabras de siempre, lo envías, y Claude trabaja en esa carpeta.
> En este capítulo vas a hacer que Claude convierta una nota de reunión desordenada en un **acta con el formato que tú decidas**. Es el primer paso de la «herramienta que ordena a mi manera» que irás haciendo crecer durante toda la etapa 3.

Este capítulo se escribió a partir de la documentación oficial de Claude Code y de la aplicación de escritorio para macOS (pantalla en coreano, cuenta de pago) consultadas el 31 de octubre de 2026. Los nombres de la pantalla cambian a menudo. Si lo que ves es distinto, sigue los nombres que aparecen en tu pantalla.

## Instalar e iniciar sesión

Claude Code **viene dentro de la aplicación de escritorio de Claude.** Solo tienes que instalar la aplicación; no hace falta instalar aparte otros programas (Node.js, una herramienta de ejecución para desarrollo, ni Claude Code para el terminal).[^quickstart]

1. En la página de instalación de la documentación oficial, descarga el archivo que corresponde a tu ordenador.[^quickstart]
   - **macOS**: un solo archivo se instala tanto en los Mac con Intel como en los de chip Apple.
   - **Windows**: hay un instalador para los PC normales (x64) y otro aparte para los PC ARM64.
   - **Linux**: es beta (versión de pruebas) y se instala con apt (la herramienta de instalación de programas de Linux) en Ubuntu y Debian.
2. Ejecuta el archivo descargado para instalarlo.
3. Abre la aplicación e inicia sesión con tu **cuenta de Anthropic**.[^quickstart] Si tienes una suscripción personal (Pro, Max o Ultra), inicia sesión con la cuenta que usabas en claude.ai.[^auth]

Si ya instalaste la aplicación de Claude en la etapa 2, puedes saltarte este paso. Si la aplicación es antigua, descarga la última versión. En macOS, en la barra de menús, **Claude → Buscar actualizaciones…** (Check for Updates); en Windows, **Help → Check for Updates…**.[^update]

<Quiz id="ch402-install" />

## Abrir la pestaña Code

Claude Code está en la pestaña **Code**, arriba del todo del menú lateral de la aplicación.[^quickstart] Si las pestañas se ven solo como iconos, pasa el ratón por encima para ver el nombre.[^quickstart] En macOS también puedes ir desde la barra de menús con **Ir → Code**.

Si al pulsar Code aparece un aviso, haz lo siguiente.[^quickstart]

- **Aviso para pasarte a un plan de pago**: Claude Code solo se usa con una suscripción de pago ([capítulo 1](01-what-is.md#que-hace-falta-planes)). Suscríbete y vuelve a abrirlo.
- **Aviso para iniciar sesión en línea**: termina de iniciar sesión y reinicia la aplicación.
- **Error 403** (el error que indica que se ha denegado el acceso): mira la guía de solución de problemas de autenticación de la documentación oficial.

Si abres una sesión nueva en la pestaña Code, aparece esta pantalla.

![Pantalla de sesión nueva de la pestaña Code. Con números rojos: ① las tarjetas de inicio del centro («Elegir entorno», «Importar una sesión de Claude Code CLI», «Activar el modo automático» y «Elegir la carpeta de trabajo»), ② el cuadro de entrada («Describe la tarea o haz una pregunta»), ③ el entorno «Este ordenador», ④ la carpeta «Elegir…», ⑤ el modelo «Opus 5.5» y el nivel de esfuerzo «Medio», ⑥ el modo de permisos «Manual»](../../../guide/20-claude-code/assets/shot-01-new-session-marked.png)

Lo que más vas a mirar al trabajar es **la línea de debajo del cuadro de entrada**. La documentación oficial también indica que, antes de enviar el primer mensaje, elijas en esa línea el entorno, la carpeta, el modo de permisos y el modelo.[^desktop-start]

| N.º | Nombre en pantalla | Qué hace |
|---|---|---|
| ① | Tarjetas de inicio | Solo se ven en una sesión nueva. Por ahora no hace falta usarlas |
| ② | Cuadro de entrada | Donde escribes y envías lo que quieres hacer |
| ③ | Este ordenador | Dónde se trabaja (entorno). Si vas a trabajar en tu ordenador, déjalo como está |
| ④ | Elegir… | En qué carpeta se trabaja |
| ⑤ | Opus 5.5 · Medio | Qué modelo y con cuánta profundidad piensa |
| ⑥ | Manual | Qué puede hacer Claude sin preguntar (modo de permisos) |

Fuente: los nombres de la pantalla son de la comprobación de pantalla de esta guía (2026-10-31); las funciones, de la documentación oficial[^desktop-start]

Al principio puedes dejar el entorno de ③ en **Este ordenador** (이 컴퓨터). En la documentación oficial es «Local» (en tu ordenador).[^quickstart] Cómo trabajar en la nube se trata en el capítulo 8.

El modelo (⑤) se puede cambiar más adelante.[^quickstart] Al principio puedes usar el que ya viene elegido en la pantalla.

::: details Si hay «Elegir entorno» encima del cuadro de entrada y no hay entorno en la línea de debajo
Es la disposición antigua de la pantalla. La documentación oficial explica que, si en una sesión nueva no se ve el entorno bajo el cuadro de entrada, es la disposición anterior (earlier layout).[^quickstart] En la disposición anterior, el entorno y la carpeta se eligen **encima del cuadro de entrada**, y el modo de permisos y el modelo en **la línea de debajo**.[^desktop-layout] Hacen lo mismo.
:::

<Quiz id="ch402-screen" />

## Preparar y elegir una carpeta de prácticas

Claude Code trabaja **dentro de la carpeta que tú elijas**. Por eso, al principio conviene crear una **carpeta de prácticas** aparte, que no importe si se estropea. La documentación oficial también recomienda empezar con un proyecto pequeño que conozcas bien.[^quickstart]

**Material de prácticas**: las notas de una semana de Seoyeon, empleada de la pequeña cafetería «Café de la Esquina» (todo inventado). En este capítulo solo se usa una nota de reunión; las demás se usan en capítulos posteriores.

| Archivo | Contenido |
|---|---|
| [회의-2026-10-27-주간회의.txt](/practice/notes/inbox/회의-2026-10-27-주간회의.txt) | Nota desordenada de la reunión semanal |
| [공부-2026-10-28-프롬프트-강의.txt](/practice/notes/inbox/공부-2026-10-28-프롬프트-강의.txt) | Apuntes tomados al escuchar una clase |
| [회고-2026-10-29.txt](/practice/notes/inbox/회고-2026-10-29.txt) · [10-30](/practice/notes/inbox/회고-2026-10-30.txt) · [10-31](/practice/notes/inbox/회고-2026-10-31.txt) | Balance diario de 3 días |

Las fechas y los días de la semana de las notas son inventados para la historia, así que **no coinciden con el calendario real de 2026.** Al comprobar el resultado, mira si coincide con las fechas y los días **escritos en la nota**.

1. En tu ordenador, crea una carpeta nueva llamada **Herramienta de orden** (정리도구) y dentro de ella una carpeta **inbox**.
2. Descarga los 5 archivos de arriba y ponlos en **inbox**.
3. En la pestaña Code, pulsa **Elegir…** (선택…) (④) en la línea de debajo del cuadro de entrada.

![Menú de carpetas. Con números rojos: ① la carpeta «Elegir…», ② la casilla «Buscar carpeta…» (en la imagen se ha escrito el nombre de otra carpeta de prácticas que aún no se había abierto y sale «Sin coincidencias»), ③ «Abrir carpeta…»](../../../guide/20-claude-code/assets/shot-02-folder-menu-marked.png)

4. Cuando se abra el menú, pulsa **Abrir carpeta…** (폴더 열기…) (③), abajo del todo. En la documentación oficial es «Open folder…».[^quickstart]
5. En la ventana de selección de archivos, elige la carpeta **Herramienta de orden** (정리도구) y pulsa **Abrir**.

Arriba en el menú salen las **carpetas abiertas recientemente**. Una carpeta que ya has abierto una vez, la próxima vez puedes elegirla enseguida escribiendo su nombre en la casilla de ②. Una carpeta que abres por primera vez, como en la imagen, da «Sin coincidencias», así que ábrela con **Abrir carpeta…**.

Cuando eliges la carpeta, en el sitio de ④ aparece el nombre de la carpeta.

![La línea de debajo del cuadro de entrada después de elegir la carpeta. ① En el sitio de la carpeta se ve «정리도구»](../../../guide/20-claude-code/assets/shot-03-folder-picked-marked.png)

Piensa que **carpeta de trabajo = el alcance en el que Claude puede tocar cosas**. Por eso da más tranquilidad elegir una carpeta pequeña, con solo los archivos que hacen falta para esta tarea, que una carpeta grande con todos mis documentos.

<Quiz id="ch402-folder" />

## Encargar la primera tarea

Ahora escribe y envía lo que quieres hacer. El orden de la documentación oficial es el mismo. Escribes lo que quieres y pulsas **Enter**, y Claude lee los archivos de la carpeta, los modifica y ejecuta comandos.[^desktop-start]

Veamos una petición mejorable y otra mejor, una al lado de la otra.

```
Ordéname la nota de la reunión.
```

```
Lee la nota de la reunión de la carpeta inbox y ordénala como un acta. Divídela en tres partes: lo decidido / tareas (responsable y plazo) / lo que se tratará en la próxima. Guárdala como un archivo nuevo en la carpeta notes. No modifiques la nota original.
```

La segunda petición incluye **qué leer, con qué formato ordenarlo, dónde guardarlo y qué no tocar**. Si fijas el formato, el resultado sale parecido cada vez y es más fácil comprobar si es correcto. Es aplicar a un trabajo con carpetas lo de «fijar el formato» que aprendiste en la etapa 1 ([capítulo 4 de la etapa 1](../00-common/04-prompt-basics.md)).

![Pantalla con la petición escrita. ① En el cuadro de entrada está la petición de ordenar el acta, ② el modo de permisos es «Manual»](../../../guide/20-claude-code/assets/shot-04-prompt-marked.png)

Después de enviarla, en la pantalla va saliendo línea a línea lo que hace Claude. A veces hace una lista de tareas y las va marcando una a una, como «leer la nota → escribir el acta → comprobar que el original sigue igual».

**También puedes intervenir mientras trabaja.** Si pulsas el botón de parar, se detiene al instante, y si escribes una corrección y pulsas **Enter**, se la pasa sin detener lo que estaba haciendo.[^desktop-start] Por ejemplo, si añades «haz las tareas en una tabla», lo aplica a partir del siguiente paso.

### Cuando pide permiso

Si el modo de permisos es **Manual** (en la documentación oficial, Manual), Claude **pregunta antes** de modificar un archivo o ejecutar un comando. Te muestra qué va a cambiar y, cada vez que va a cambiar algo, puedes permitirlo o rechazarlo.[^desktop-modes] Al principio da más tranquilidad dejarlo en Manual y ver una por una qué quiere hacer. Los modos de permisos se tratan con detalle en el [capítulo 4](04-permissions-undo.md).

::: details Si estaba en Manual y creó el archivo sin pedir permiso
Si has usado Claude Code en el terminal, puede que los ajustes que hiciste entonces se apliquen también en la aplicación. **La aplicación de escritorio lee los mismos archivos de configuración que Claude Code para el terminal.**[^desktop-modes] Por ejemplo, si pusiste una regla de permiso como «no preguntar al escribir archivos», aunque esté en Manual no preguntará por eso. Las capturas de esta guía también se hicieron en un ordenador con ese tipo de ajuste, y por eso no salió la ventana de permiso.
:::

<Quiz id="ch402-first" />

## Comprobar el resultado

Cuando termina, Claude te enseña ordenado lo que ha hecho.

![Pantalla cuando termina la tarea. Con números rojos: ① la tabla de tareas con responsable y plazo, ② la confirmación de que no se ha tocado la nota original](../../../guide/20-claude-code/assets/shot-05-result-marked.png)

**Aunque Claude diga «ya está», compruébalo tú.** Pon la nota original al lado y hazte estas preguntas.

- ¿Cada tarea tiene **responsable y plazo**? ¿Coinciden con la nota?
- ¿Los números (precios, fechas) coinciden con la nota?
- ¿No ha inventado **cosas que no están** en la nota?
- ¿La nota original sigue igual?

Al comparar con la nota el acta que salió de verdad en esta guía, quedó así.

| Lo que ponía en la nota | El acta |
|---|---|
| Menú de café + galleta a 5500 wones, probar 2 semanas / descuento aplazado | Lo transcribió tal cual |
| Junho hasta el viernes el coste / Seoyeon hasta el miércoles el texto / Seoyeon hoy las bombillas | Añadió las fechas: 10/31 (viernes) · 10/29 (miércoles) · 10/27 (lunes), el mismo día |
| El menú nuevo se decide viendo el coste | Dejó aparte constancia: «en la nota no figura cuándo se decidirá» |
| Próxima reunión el 11/3 lunes a las 10 de la mañana | Lo transcribió tal cual |

Fuente: resultado de la práctica de esta guía (2026-10-31). Archivo del resultado: [2장-회의록-2026-10-27-주간회의.txt](/practice/notes/results/2장-회의록-2026-10-27-주간회의.txt) (en formato Markdown tal cual)

**Aunque la petición sea la misma, el resultado cambia un poco cada vez.** No pasa nada si la forma de la tabla o el tono son distintos de los de esta guía. Si puedes responder «sí» a todas las preguntas de comprobación de arriba, ha salido bien.

El archivo creado está en la carpeta **Herramienta de orden/notes** de tu ordenador. Ábrelo con el Finder o el explorador de archivos. Cómo ver dentro de la aplicación los archivos y los cambios se trata en el [capítulo 3](03-screen-tour.md).

<Quiz id="ch402-check" />

## Pruébalo tú mismo

1. Crea la carpeta **Herramienta de orden** (정리도구) y pon los 5 materiales de prácticas en **inbox**.
2. En la pestaña Code, abre una sesión nueva y elige como carpeta **Herramienta de orden**.
3. Envía tal cual la «petición mejor» de arriba y revisa el acta que se crea con las 4 preguntas de comprobación.
4. Si hay algo que no te gusta, pide en una línea que lo corrija (por ejemplo: «añade una columna "estado" a la tabla de tareas»).

**Proyecto continuo**: si tienes una nota de reunión o unos apuntes de clase que hayas escrito de verdad, quítales los datos personales, pon uno en **inbox** y envía la misma petición. El formato (decisiones, tareas, próximo tema) puedes cambiarlo para que se ajuste a tu trabajo. A partir del [capítulo 3](03-screen-tour.md) se sigue usando esta carpeta.

## Resumen

- Claude Code está en la pestaña **Code** de la aplicación de escritorio de Claude. Basta con instalar la aplicación e iniciar sesión con la cuenta de Anthropic.
- En la línea de debajo del cuadro de entrada se eligen el entorno (este ordenador), la carpeta, el modelo y el modo de permisos.
- Al principio elige una carpeta de prácticas pequeña. La carpeta de trabajo es el alcance en el que Claude puede tocar cosas.
- En la petición, escribe qué leer, el formato, dónde guardarlo y qué no tocar.
- No te fíes de «ya está»: compruébalo con el original. El resultado cambia un poco cada vez.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Session | Sesión | Una conversación de trabajo con Claude con una carpeta abierta |
| Environment | Entorno | Dónde trabaja Claude: tu ordenador (este ordenador), la nube, etc. |
| Local | Local | Tu ordenador. En la pantalla es «Este ordenador» |
| Permission mode | Modo de permisos | El alcance de lo que Claude puede hacer sin preguntar |
| Manual | Manual | Modo en el que pregunta cada vez antes de modificar un archivo o ejecutar un comando |

<ChapterDone :chapter="402" />

Siguiente capítulo: [Capítulo 3. Un recorrido por la pantalla](03-screen-tour.md)

[^quickstart]: Documentación oficial de Claude Code, «Get started with the desktop app». "Universal build for Intel and Apple Silicon" / "apt or .deb for Ubuntu and Debian" / "For Windows ARM64, download the ARM64 installer. On Linux, install with apt" / "sign in with your Anthropic account." / "Click the Code tab at the top of the sidebar. If the tabs show only icons, hover over one to see its name." / "Prompt to upgrade: you need to subscribe to a paid plan first" / "Prompt to sign in online: complete the sign-in and restart the app" / "The desktop app includes Claude Code, so you don't need to install Node.js or the CLI to use the Code tab." / "click the first control, the environment selector, and select the top entry in the Local group. Then click the project folder control beside the environment selector, select Open folder…, and choose your project's directory." / "If a new session shows no environment under your prompt box, you have the earlier layout." / "Start with a small project you know well." / "You can change the model later from the model picker." https://code.claude.com/docs/en/desktop-quickstart (consultado el 2026-10-31)
[^desktop-start]: Documentación oficial de Claude Code, «Desktop application». "Before you send your first message, choose the environment, project folder, permission mode, and model in the row under the prompt box" / "Type what you want Claude to do and press Enter to send. Claude reads your project files, makes changes, and runs commands based on your permission mode." / "click the stop button to interrupt immediately, or type a correction and press Enter to send it without stopping the running action." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^desktop-layout]: Documentación oficial de Claude Code, «Desktop application». "In the earlier layout, choose the environment and any project folder or repository above the prompt box, and the permission mode and model in the row under it." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^desktop-modes]: Documentación oficial de Claude Code, «Desktop application». "Claude asks before editing files or running commands. You see a diff and can accept or reject each change." / "The desktop app reads the same settings files as the CLI." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^auth]: Documentación oficial de Claude Code, «Authentication». "Claude Pro, Max, or Ultra subscription: log in with your claude.ai account." https://code.claude.com/docs/en/authentication (consultado el 2026-10-31)
[^update]: Documentación oficial de Claude Code, «Desktop application». "Open Claude > Check for Updates… on macOS or Help > Check for Updates… on Windows to update." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
