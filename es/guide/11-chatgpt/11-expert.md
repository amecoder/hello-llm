# Capítulo 11. Usar ChatGPT como un experto: ir más allá de principiante y adaptarlo a tu trabajo

> **En una línea**: un experto no es quien conoce más funciones nuevas, sino quien **encarga el trabajo hablando como se hace con una persona, elige la herramienta adecuada para cada tarea, convierte lo que se repite en una plantilla y comprueba el resultado antes de usarlo**.
> Este capítulo explica cómo **combinar** las funciones de los capítulos 1~10 y presenta las tareas programadas, el análisis de datos y el modo de estudio, que aún no hemos tratado.

Las pantallas corresponden a la versión web de 2026-10 (plan Plus). En el plan gratuito o en la aplicación del móvil, la ubicación de los menús puede ser un poco distinta.

## Qué hace diferente a un experto

En la [etapa 1, capítulo 3, «Misma herramienta, resultados distintos»](../00-common/03-why-learn.md#la-misma-herramienta-resultados-distintos) viste que incluso con la misma IA el resultado depende de cómo la uses. Algo parecido se ve en el informe en el que OpenAI investigó cómo se usa ChatGPT en las empresas. Incluso donde el efecto sería grande, **las funciones avanzadas se usan menos**, como el razonamiento, la investigación profunda, los proyectos y las instrucciones personalizadas.[^adopt]

Los métodos que sirven **con cualquier IA**, como juzgar qué encargar, probar antes de encargar y comprobar en proporción al peso del trabajo, están en la [etapa 1, capítulo 11, «Usar la IA como un experto»](../00-common/11-expert.md). Este capítulo los traslada a las funciones de ChatGPT. Mira primero de un vistazo lo que tratamos aquí.

| Elemento | Explicación en una línea | Más información |
|---|---|---|
| Hablar como si encargaras un trabajo | Indica la tarea, el destinatario, la finalidad y la forma, y corrige a partir de la primera respuesta | [Etapa 1, capítulo 4, «Los 5 elementos de un buen prompt»](../00-common/04-prompt-basics.md#los-5-elementos-de-un-buen-prompt), [etapa 1, capítulo 6, «Cómo pedir bien una corrección»](../00-common/06-conversation.md#como-pedir-bien-una-correccion) |
| Elegir la herramienta | Usa la que convenga a la tarea entre búsqueda, investigación profunda, Work y nivel de razonamiento | [Capítulo 6, «Investigación profunda: encargar un informe»](06-search.md#investigacion-profunda-—-encargar-un-informe), [capítulo 7, «Diferencia entre Chat y Work»](07-projects-plugins.md#la-diferencia-entre-chat-y-work) |
| Acumular materiales | Reúne en un solo lugar los archivos, las instrucciones y las buenas respuestas de una misma tarea | [Capítulo 7, «Proyectos: conversaciones, archivos e instrucciones en una carpeta»](07-projects-plugins.md#proyectos-conversaciones-archivos-e-instrucciones-en-una-carpeta) |
| Crear plantillas | Deja las peticiones repetidas como instrucciones, plantillas o habilidades | [Etapa 1, capítulo 8, «4. Convertirlo en una plantilla reutilizable»](../00-common/08-meta-prompting.md#_4-convertirlo-en-una-plantilla-para-reutilizar) |
| Tareas programadas | Haz que ChatGPT lo haga solo a la hora fijada | [En este capítulo, «Que se haga solo a la hora fijada»](#que-se-haga-solo-a-la-hora-fijada-tareas-programadas) |
| Análisis de datos | Calcula tablas y cifras y recíbelas como gráficos | [En este capítulo, «Encargar tablas y cifras»](#encargar-tablas-y-cifras-analisis-de-datos) |
| Modo de estudio | Haz que te ayude a entender con preguntas en lugar de respuestas | [En este capítulo, «Usarlo para aprender»](#usarlo-para-aprender-modo-de-estudio) |
| Forma de la respuesta | Ajusta el tono, las tablas y la cantidad de imágenes a tu trabajo | [Capítulo 5, «Elegir el tono»](05-memory.md#fijar-el-tono-—-estilo-y-tono-basicos-calidez-y-consultar-mi-estilo-de-escritura) |
| Comprobar | Decide dónde mirar en cada tipo de resultado y compruébalo | [Etapa 1, capítulo 9, «Cuatro hábitos para comprobar»](../00-common/09-safety.md#cuatro-habitos-para-comprobar) |

<Quiz id="ch111-difference" />

## Cinco líneas para encargar un trabajo: resultado, materiales, qué conservar, criterios de revisión y forma

Cuando encargas de golpe todo un documento o una tabla, y no una sola pregunta, añade dos cosas a los [5 elementos de un buen prompt de la etapa 1, capítulo 4](../00-common/04-prompt-basics.md#los-5-elementos-de-un-buen-prompt). Una es **lo que no se debe cambiar**, como las fórmulas, el orden o la estructura de la tabla,[^docs] y la otra son los **criterios de revisión** (review criteria), la vara para juzgar si el resultado salió bien.[^work] Si dices estas dos cosas de antemano, reduces el riesgo de que se altere un formato que estaba bien o de que pasen cifras erróneas.

Escríbelas en estas cinco líneas ([etapa 1, capítulo 7, «1. Organizar con Markdown»](../00-common/07-structured-prompts.md#_1-ordenar-con-markdown)).
- **Resultado**: qué se crea, para quién y por qué
- **Materiales**: los archivos que debe consultar
- **Qué conservar**: lo que no se puede cambiar
- **Criterios de revisión**: con qué contrastar al final
- **Forma**: formato y extensión
```
Resultado: hazme un resumen de los gastos de este mes para el jefe de equipo. Lo usaré en la reunión de presupuesto de la semana que viene.
Materiales: usa el archivo de gastos adjunto.
Qué conservar: no cambies los nombres ni el orden de los conceptos.
Criterios de revisión: al final, contrasta si el total coincide con el del archivo original y dímelo.
Forma: una tabla por concepto y un resumen de tres líneas.
```

::: details Más o menos así será la respuesta (ejemplo; haz clic para desplegar)
Este es un ejemplo creado para esta guía. La respuesta real varía según el servicio y según el momento.

> | Concepto | Importe de este mes |
> |---|---|
> | (primer concepto del archivo) | ○○ wones |
> | (segundo concepto del archivo) | ○○ wones |
> | … | … |
> | Total | ○○ wones |
>
> **Resumen en tres líneas**
> 1. El gasto total de este mes es de ○○ wones.
> 2. El concepto en el que más se gastó es (nombre del concepto), con ○○ wones.
> 3. En la reunión de presupuesto de la semana que viene convendría hablar de cómo reducir el gasto en (nombre del concepto).
>
> **Contraste del total**: el total de la tabla, ○○ wones, coincide con el total del archivo original.

**Comprueba si la respuesta te sirve**: ¿los nombres y el orden de los conceptos son los del original? ¿Llegó una tabla y un resumen de tres líneas? ¿Hay al final un contraste del total? No te fíes solo de que diga "coincide": mira tú mismo el total del original.

:::

**¿Dividir o juntar?** La ayuda de OpenAI recomienda dividir una tarea compleja en peticiones pequeñas ([etapa 1, capítulo 5, «3. Dividir en pasos»](../00-common/05-prompt-patterns.md#_3-dividir-en-pasos-—-encadenamiento-de-prompts)).[^prompt] El material de Academy explica que también se pueden reunir en una sola petición el contexto y las instrucciones relacionados entre sí. Eso sí, añade que, si hay demasiada información, la respuesta puede quedar difusa.[^aprompt]

Divide si necesitas ver resultados intermedios para decidir la siguiente dirección. Si el objetivo es uno y está claro, reúne las cinco líneas en una sola petición. En cualquier caso, adjunta solo los materiales imprescindibles.

**En las tareas que requieren varios pasos, fija dónde parar.** No pidas la versión final desde el principio: decide antes en qué punto eliges o compruebas tú. Si los pasos son pequeños, te das cuenta pronto de que ChatGPT ha entendido mal. Así no tienes que corregirlo todo desde el principio cuando ya esté terminado.[^academy-content]
```
Ayúdame a preparar la salida en familia de esta semana.
1. Organiza en una tabla tres posibles lugares según la fecha, el presupuesto y la zona de salida.
2. Compara el tiempo de desplazamiento y el coste. Para aquí y yo elijo el lugar.
3. Con el lugar que elija, crea un plan del día.
```

**Si hay varios archivos, pide primero un resumen y no el borrador.** Si le haces decir "qué ve ahora mismo", puedes comprobar antes de escribir el borrador que ha leído sin omisiones los archivos necesarios. El curso de Academy también hace seguir este orden antes de encargar documentos a Work.[^academy-content]
```
Todavía no escribas el borrador. Primero lee los archivos adjuntos y resume brevemente lo que está decidido, lo que aún no se ha decidido y lo que falta o no está claro.
```

<Quiz id="ch111-five-lines" />

## Elegir la herramienta adecuada para cada tarea

La misma pregunta da resultados distintos según la función con la que la hagas. Los datos rápidos búscalos con la búsqueda. Si necesitas profundidad y minuciosidad, usa la investigación profunda.[^deep] Para el resto de tareas, elige en la tabla de abajo.

| Lo que quieres hacer | Función que usar | Más información |
|---|---|---|
| Datos rápidos, como el tiempo de hoy o el horario de un negocio | Búsqueda web | [Capítulo 6, «Búsqueda web»](06-search.md#busqueda-web-—-hacer-que-chatgpt-mire-en-internet) |
| Un informe largo que compara varias fuentes | Investigación profunda | [Capítulo 6, «Investigación profunda»](06-search.md#investigacion-profunda-—-encargar-un-informe) |
| Archivos terminados, como documentos, tablas o presentaciones | Work (plan de pago) | [Capítulo 7, «Diferencia entre Chat y Work»](07-projects-plugins.md#la-diferencia-entre-chat-y-work) |
| Corregir un archivo de Word o PowerPoint que ya existe | Complemento de Microsoft «ChatGPT» (incluso en el plan gratuito) | [Más abajo en este capítulo](#usarlo-dentro-de-word-y-powerpoint) |
| Cálculos difíciles o planes con varias condiciones entrelazadas | Subir el nivel de razonamiento | [Capítulo 2, «Nivel de razonamiento y Pensar»](02-screen-tour.md#nivel-de-razonamiento-y-pensar-¿cuanto-debe-pensar) |
| Análisis de tablas y cifras, y gráficos | Subir un archivo y usar el análisis de datos | [Más abajo en este capítulo](#encargar-tablas-y-cifras-analisis-de-datos) |
| Aprender algo nuevo | Modo de estudio | [Más abajo en este capítulo](#usarlo-para-aprender-modo-de-estudio) |

**Si quieres saber qué función puede hacerlo, encárgalo directamente.** Es mejor que preguntar "¿tú puedes hacer esto?". ChatGPT no puede ver cómo funciona su propio sistema en este momento. Por eso, si se lo preguntas, puede responder mal.[^ask]
```
De las cinco fotos de recibos adjuntas, extrae la fecha, el nombre del comercio y el importe y organízalos en una tabla.
```

### Usarlo dentro de Word y PowerPoint

Word, Excel y PowerPoint comparten **un complemento de ChatGPT** (add-in, una pequeña función que se acopla dentro de un programa). Prueba a instalar «ChatGPT» desde el Microsoft Marketplace. Puedes corregir directamente desde el panel que aparece junto al documento.[^word][^ppt]

- El de Word se puede usar en **todos los planes, incluido el gratuito (Free)**. El de PowerPoint se puede usar de forma limitada en Free y Go. Si es una cuenta de empresa, solo lo verás si el administrador lo permite.[^word][^ppt]
- Las conversaciones dentro del complemento están separadas del historial de ChatGPT. Tampoco pasan la memoria ni las habilidades.[^word]
- **Guarda una copia antes de hacer grandes cambios.** Si el cambio es grande, pide que te muestre primero el plan. Con una copia, puedes volver al original cuando lo necesites.[^word][^ppt]

```
Quiero reducir las diapositivas 3~5 de esta presentación a una sola. No lo cambies todavía: muéstrame primero el plan de cómo las fusionarías.
Deja los números y las tablas como están y escribe el título en 15 caracteres como máximo.
```

<Quiz id="ch111-tools" />

## Acumular materiales y usarlos

En el [capítulo 7, «Proyectos»](07-projects-plugins.md#proyectos-conversaciones-archivos-e-instrucciones-en-una-carpeta) aprendiste a reunir conversaciones, archivos e instrucciones en una carpeta. Vuelve a usar los proyectos en **tareas que se repiten**, como una investigación semanal o el borrador de un texto.[^projects] Un paso más allá es acumular también las buenas respuestas como materiales para la próxima vez.
- **Guarda las buenas respuestas como materiales.** En una conversación del proyecto, abre el menú del mensaje debajo de la respuesta y elige «Guardar en el proyecto» (프로젝트에 저장) o «Añadir a las fuentes del proyecto» (프로젝트 소스에 추가). Esa respuesta pasa a las «Fuentes» (소스) del proyecto. El nombre del menú puede variar según la pantalla.[^projects]
- **También puedes conectar materiales de otros servicios.** En el área de fuentes de un proyecto personal, pulsa «Add sources» e introduce un canal de Slack o el enlace de un archivo o carpeta de Google Drive.[^projects] Los archivos que subiste antes los puedes volver a traer desde la [«Biblioteca» del capítulo 4](04-files-images.md#biblioteca-donde-se-reunen-los-archivos-que-subes).

<!-- Falta captura de pantalla: pantalla de una conversación de proyecto con el menú del mensaje de la respuesta desplegado, donde se vea «Añadir a las fuentes del proyecto» -->

Conviene escribir en las instrucciones del proyecto que "mire primero los materiales acumulados".
```
Este proyecto sirve para investigar cada semana los eventos culturales de mi barrio. Antes de hacer una investigación nueva, mira primero los resultados de investigaciones anteriores guardados en las «Fuentes»,
quita los eventos que se repitan con los de la semana pasada y organiza en una tabla solo los nuevos.
```

<Quiz id="ch111-sources" />

## Lo que se repite, en plantilla: instrucciones, plantillas y habilidades

Para elegir con qué tarea empezar a crear plantillas, consulta la [etapa 1, capítulo 11, «Elegir qué practicar primero»](../00-common/11-expert.md#elegir-la-primera-tarea-para-practicar).

Si haces a menudo lo mismo, crea una plantilla. El primer paso es [poner en las instrucciones del proyecto, como en el capítulo 7,](07-projects-plugins.md#meter-en-el-proyecto-una-plantilla-para-reutilizar) la plantilla de la [etapa 1, capítulo 8, «4. Convertirlo en una plantilla reutilizable»](../00-common/08-meta-prompting.md#_4-convertirlo-en-una-plantilla-para-reutilizar). Después vienen las plantillas de documento y las habilidades.[^docs][^skills]

| Nombre | Qué es | Dónde se puede usar |
|---|---|---|
| Archivo de referencia | Archivo de ejemplo que muestras solo esta vez | Todas las conversaciones |
| Plantilla (template) | Archivo de ejemplo + instrucciones reutilizables. La usa solo quien la creó | Work en la web (plan de pago) |
| Habilidad (skill) | Forma de trabajar que contiene instrucciones y ejemplos, se puede reutilizar y compartir | Según la ayuda, planes de empresa o centros educativos como Business, Enterprise y Edu |
| Plugin (plugin) | Paquete que une una habilidad y conexiones con aplicaciones | [Capítulo 7, «Plugins»](07-projects-plugins.md#complementos-anadir-otros-servicios-y-formas-de-trabajar) |

**Las plantillas se crean en Work en la web.** Escribe `@Template-Creator` en el cuadro de entrada. Pega un único archivo de referencia (un archivo de Word, Excel o PowerPoint, o el enlace de un documento de Google). Luego explica qué hay que conservar, qué cambiar y qué información se introduce cada vez. Cuando esté creada, pulsa «Instalar» (설치).[^docs]
```
@Template-Creator Crea una plantilla con el informe semanal adjunto.
Qué conservar: la línea del título, las tres columnas de la tabla (Terminado / En curso / Plan de la semana próxima), la fuente y el color.
Qué cambiar: el contenido de la tabla y las fechas.
Información que se introduce cada vez: las notas de trabajo de esa semana.
```

Para usar la plantilla que creaste, escribe en el cuadro de entrada una de estas opciones: `@Documents`, `@Spreadsheets` o `@Presentations`. Cuando se abra la galería de plantillas, elige «Use template». Elegirla no inicia el trabajo. Después tienes que escribir y enviar el contenido de esta vez.[^docs]

Al escribir las instrucciones del proyecto, ten en cuenta los consejos de abajo. Originalmente son consejos que OpenAI da para las instrucciones de los GPT personalizados.[^gpt-make] Que también valgan para las instrucciones de un proyecto es una interpretación de esta guía.

| Consejo | Ejemplo |
|---|---|
| En lugar de enumerar "no hagas", concreta "hazlo así" | En vez de "no escribas largo", "escríbelo en tres líneas" |
| Los archivos de referencia van como **materiales**; las reglas y el tono, en las **instrucciones** | El formulario de la empresa, como archivo; "la tabla tiene tres columnas", en las instrucciones |
| Si el resultado no te convence, antes de añadir funciones, pule las instrucciones y pon un buen ejemplo | Un par de ejemplo: "si llega una nota así → organízala así" |

Las **habilidades** se crean en «Plugins» → pestaña «Habilidades» (스킬) → «Crear» (만들기) del menú lateral. Elige, por ejemplo, «Crear por chat» (채팅으로 만들기).[^skills] Eso sí, la ayuda dice que las habilidades se pueden usar en los **planes Business, Enterprise, Healthcare y Edu**. Puede que veas la pestaña «Habilidades» también en la pantalla de un plan personal. Comprueba tú mismo en tu pantalla si puedes usarlas.

Antes de subir un archivo de habilidad creado por otra persona, comprueba que su origen es de fiar. Aunque exista una revisión automática, no sustituye a tu propia comprobación.[^skills]

**¿Cuándo conviene crear una habilidad?** Vale la pena si haces una y otra vez la misma petición con el mismo criterio. Los casos en que todavía es pronto están en la [etapa 1, capítulo 11, «Acumular lo que se repite»](../00-common/11-expert.md#guardar-lo-que-se-repite).[^academy-content]

<Quiz id="ch111-templates" />

## Que se haga solo a la hora fijada: tareas programadas

Las **tareas programadas** (scheduled tasks) son una función con la que ChatGPT hace un trabajo por sí solo a la hora que le has fijado. Se pueden ejecutar una sola vez o de forma repetida. También puedes hacer que vigile si algo cambia y te avise.[^tasks] Crearlas es sencillo: basta con pedirlo en la conversación.
```
Todos los lunes a las 8 de la mañana, organiza la previsión del tiempo de esta semana en Seúl en una línea por día de la semana y avísame.
```

Puedes ver, editar, pausar y borrar la tarea creada en «Programadas» del menú lateral.[^tasks][^scheduled-name] También se abre desde «Ajustes» → «Notificaciones» (알림) → «Gestionar tareas» (작업 관리), o desde ••• (Más opciones) → «Ver tareas programadas» (예약 작업 보기) de la conversación.[^tasks]

Elige en «Ajustes» → «Notificaciones» cómo quieres recibir los avisos, por notificación push o por correo. Para recibir las notificaciones push en el móvil, crea la tarea desde la aplicación del móvil.[^tasks]

![Pantalla «Programadas» del menú lateral. Arriba está el cuadro de entrada «Programar tarea» (작업 예약하기); debajo, una línea con una tarea creada (botones de pausar, editar y •••); y más abajo, la lista de tareas «Sugeridas» (추천)](../../../guide/11-chatgpt/assets/shot-29-scheduled.png)

*El nombre de la tarea se ha cambiado por un ejemplo en esta pantalla. A la izquierda de la línea de la tarea está el botón de pausar y a la derecha, los botones de editar y •••.*[^screen-scheduled] También puedes crear una escribiendo la petición directamente en el campo «Programar tarea» de arriba.

El número de tareas que puedes tener activas a la vez depende del plan. Son 3 en Free y Go, 5 en Plus, 10 en Business y Edu, y 15 en Pro y Enterprise, y estas cifras pueden cambiar (consultado el 2026-10-24). En Free solo se ejecutan hasta una vez al día. Además, la hora solo se puede fijar de forma amplia, como mañana, tarde o noche. Para fijar una hora exacta como en el ejemplo de arriba, o para ejecutarla cada hora, hace falta un plan de pago.[^tasks] Las **tareas por evento de una aplicación**, que reaccionan por ejemplo a la llegada de un correo nuevo, se crean en Work. No se pueden usar en Free ni en Go.[^tasks]

También hay cosas que debes tener en cuenta.[^tasks]
- **Una tarea creada dentro de un proyecto no puede leer los archivos de ese proyecto.** Si necesita el contenido de un archivo, escríbelo directamente en las instrucciones.
- En la conversación por voz, en los GPT personalizados y en las [conversaciones bloqueadas](03-chats.md#para-que-otros-no-la-abran-—-chats-bloqueados) no se pueden crear tareas programadas.
- Si compartes una tarea con un enlace, la persona que lo recibe ve las instrucciones tal cual. Por eso no incluyas información de salud o financiera ni contraseñas. Aunque la compartas, no se traspasan las conexiones ni los permisos de las aplicaciones que tú conectaste (por ejemplo, Slack).[^slack]
- Una tarea que envía correos o cambia archivos mediante una aplicación conectada puede **quedarse parada hasta que tú la apruebes**. Si no llega el resultado, mira en «Programadas» del menú lateral si está esperando tu aprobación.[^apps-trouble]

**¿Qué tareas conviene programar?** Úsalas para tareas en las que tú juzgas el resultado. Puedes pedirle que revise, vigile y te resuma de forma periódica. Ten cuidado con lo que sale al exterior o es difícil de deshacer, como enviar, publicar, borrar o aprobar.[^academy-content]

**Antes de programarla, hazla tú a mano unas cuantas veces.** Envía la misma petición manualmente, pule el prompt y los materiales y, cuando el resultado te dé confianza, prográmala. En las instrucciones escribe lo siguiente.[^academy-content]
- Qué materiales debe mirar
- Qué debe crear
- Qué hacer si falta información
- Qué vas a comprobar tú

Este es un ejemplo creado para esta guía.
```
Todos los viernes a las 5 de la tarde, busca en los avisos de la web de mi ayuntamiento los eventos y los plazos de inscripción publicados esta semana y organízalos en una tabla.
Lo que no tenga la fecha clara no lo inventes: escribe «Por confirmar» y añade el enlace de la fuente. No te inscribas ni publiques nada.
```

<Quiz id="ch111-scheduled" />

## Encargar tablas y cifras: análisis de datos

El **análisis de datos** (data analysis) no tiene un menú que haya que activar aparte. Igual que en [«Subir fotos y archivos» del capítulo 4](04-files-images.md#subir-fotos-y-archivos), sube un archivo de Excel o CSV y pregunta lo que te interese. ChatGPT crea resúmenes, tablas y gráficos y, si hace falta, calcula por su cuenta con Python (un lenguaje de programación para calcular).[^data]

Para obtener un resultado exacto, **ordena el archivo antes de subirlo.**[^data]
- En la primera fila pon nombres de columna fáciles de reconocer, como «Fecha / Artículo / Cantidad / Importe».
- En cada fila escribe un solo registro.
- No pongas varias tablas en una hoja ni dejes filas vacías en medio.

Después de subir el archivo, no preguntes enseguida por el total: haz que mire **primero si los datos tienen algún problema**. OpenAI también recomienda empezar el análisis con esta pregunta. Después, **fija tú el método de cálculo**, porque el método de cálculo o el gráfico del primer intento pueden no ser lo que querías.[^data]
```
Primero comprueba si estos datos tienen problemas habituales (valores vacíos, valores atípicos, duplicados, errores de formato de fecha o de número).
Si no hay problemas, suma la columna «Importe» por artículo, haz una tabla ordenada de mayor a menor y muéstramela en un gráfico de barras.
Escribe también, en una línea cada uno, el método y los supuestos que usaste en el cálculo.
```

- La ayuda explica que los gráficos de barras, líneas, circulares y de dispersión se pueden manipular directamente con «Cambiar a gráfico interactivo» (대화형 차트로 전환). En la pantalla del 2026-10-28 solo se veían, en lugar de ese botón, «Descargar gráfico» (차트 다운로드) y «Ampliar gráfico» (차트 펼치기).[^screen-data] Puedes desplegar la tabla de resultados, elegir solo las celdas que necesites y volver a preguntar, y la tabla se descarga como CSV (un archivo separado por comas que se abre en Excel) (consulta también la [etapa 1, capítulo 7, «3. Para pasarlo a Excel, pide una tabla»](../00-common/07-structured-prompts.md#_3-si-vas-a-llevarlo-a-excel-pide-una-tabla)).[^data]
- **Limitaciones**: el Python del análisis no puede salir a internet. Las cifras de un PDF escaneado o de una tabla dentro de una foto pueden no ser exactas, y de un archivo grande solo puede ver una parte, así que indícale la hoja o el rango.[^data]

Subí el libro de cuentas falso de cuotas (fees.csv) de la [tarea de continuación](../00-common/practice-kit.md) y le envié tal cual el prompt de arriba. ChatGPT encontró la fila con el importe vacío y una fila escrita dos veces. Y, según la condición «si no hay problemas», se detuvo antes de dibujar el gráfico y pidió confirmación.

![Tabla con el resultado de la revisión de los datos. Resume 1 valor vacío (envío de mensajes de aviso), 1 par duplicado (refrigerio, 32.500 wones), valores atípicos por confirmar, formato de fecha correcto y 1 caso de formato de número, y debajo figuran el método de cálculo y los supuestos](../../../guide/11-chatgpt/assets/shot-30-data-check.png)

Cuando le dije "El refrigerio lo apunté dos veces por error", dibujó los gastos por concepto en un gráfico de barras. Debajo organizó en una tabla los ingresos de 210.000 wones, los gastos de 114.300 wones y el dinero restante de 95.700 wones. Coincidía con lo que sumé a mano.

**Si el coreano del gráfico se rompe y sale como cuadrados (□)**, díselo y pide que lo dibuje de nuevo. En el primer gráfico que recibí, los nombres de los conceptos salían como cuadrados rotos. Al decirle "Dibújalo otra vez para que se vea bien el coreano", lo dibujó de nuevo con las letras legibles de inmediato.[^screen-data]

![Primer gráfico de barras de gastos por concepto que recibí. Se ven los números, pero el coreano, como los nombres de los conceptos y el título, sale roto en forma de cuadrados](../../../guide/11-chatgpt/assets/shot-30-data-chart-broken.png)

![Gráfico de barras de gastos por concepto dibujado de nuevo. Fabricación de pancarta, 45.000 wones; refrigerio, 32.500 wones; alquiler de la sala de seminarios, 20.000 wones; compra de libros de noviembre (mes 11), 16.800 wones; y debajo, el gasto total de 114.300 wones](../../../guide/11-chatgpt/assets/shot-30-data-chart.png)

*La conversación y el archivo subido se borraron después de hacer la captura. Aunque se borre la conversación, el archivo subido queda en la biblioteca, así que se borró aparte ([capítulo 4](04-files-images.md#biblioteca-donde-se-reunen-los-archivos-que-subes)).*

<Quiz id="ch111-data" />

## Usarlo para aprender: modo de estudio

El **modo de estudio** (study mode) es una forma de enseñar en lugar de dar la respuesta enseguida. Te hace preguntas, explica paso a paso y avanza comprobando si has entendido. Se puede usar en **todos los planes**, en la web, en iOS y en Android.[^study]

Para activarlo en la web, escribe `@study` en el cuadro de entrada y elige «Estudiar» (공부하기) en la lista de sugerencias. También puedes pulsar el botón +, buscar `study` y elegirlo. O ir directamente a `chatgpt.com/studymode`. Activa el modo de estudio en una conversación normal. No se puede activar en un [chat temporal](03-chats.md#no-dejar-registro-—-chat-temporal), en un GPT personalizado ni en un proyecto.[^study]

![Pantalla en la que, al escribir @study en el cuadro de entrada, aparece debajo la sugerencia «Estudiar: aprende conceptos nuevos» (공부하기 — 새로운 개념을 배워보세요)](../../../guide/11-chatgpt/assets/shot-31-study-mention.png)

*En la lista de sugerencias aparece como «Estudiar». Es una pantalla anterior a enviar, así que todavía no se ha iniciado nada.*[^screen-study]

Incluye lo siguiente en el primer mensaje. Así el modo de estudio podrá ayudarte mejor.[^study]
- Tu nivel
- La asignatura y el tema exacto
- Lo que quieres hacer
- Lo que ya sabes
- La fecha y el formato del examen
- Los materiales

```
Quiero repasar este tema durante 20 minutos. El tema es «circuitos eléctricos» de ciencias de 2.º de secundaria.
He oído hablar de la ley de Ohm, pero me confundo con serie y paralelo. El martes de la semana que viene tengo un examen tipo test.
Dime brevemente primero los conceptos más importantes, y ponme una pregunta cada vez para comprobar mi respuesta.
```

El modo de estudio también puede equivocarse. A veces da la respuesta directamente. En ese caso, vuelve a pedirle "Solo dame una pista" o "Hazme una pregunta cada vez". Lo importante, como deberes, exámenes, salud, asuntos legales o dinero, compruébalo siempre por otra vía.[^study]

En el modo de estudio también puedes pedirle que cree material de repaso. Pídelo en formato de cuestionario o de tarjetas (flashcards: tarjetas de memorización con la pregunta por delante y la respuesta por detrás).[^study] Las tarjetas creadas con la función de tarjetas se guardan automáticamente en la biblioteca. Contrasta el contenido de las tarjetas con tus apuntes originales.[^study]

Los prompts para pedir explicaciones sin usar el modo de estudio están en la [colección de prompts, «Estudiar y escuchar explicaciones»](../00-common/prompt-library.md#estudiar-y-recibir-explicaciones).

<Quiz id="ch111-study" />

## Adaptar la forma de la respuesta a tu trabajo

En el [capítulo 5, «Elegir el tono»](05-memory.md#fijar-el-tono-—-estilo-y-tono-basicos-calidez-y-consultar-mi-estilo-de-escritura) viste el estilo básico y la «Calidez» (따뜻함). Aquí verás cuatro maneras de pulir aún más la forma de la respuesta según tu trabajo. Cómo corregir una imagen creada está en [«Crear imágenes» del capítulo 4](04-files-images.md#crear-imagenes).

![Pantalla de personalización. Abajo del todo, fíjate en ⑤ «Estilo y tono básicos» (기본 스타일 및 톤) y en ⑥ los botones de selección de «Calidez». Las características se ajustan en este lugar](../../../guide/11-chatgpt/assets/shot-06-personalization-marked.png)

- Las **características** (characteristics) son ajustes con los que subes (+) o bajas (–) poco a poco la calidez, el entusiasmo, los encabezados y listas y los emojis. Se cambian en «Ajustes» → «Personalización». Al cambiarlas, se aplican a este chat y a los chats nuevos que hagas a partir de ahora.[^char] En la pantalla del 2026-10-23 solo comprobé «Calidez» (⑥ de la imagen de arriba). Busca los demás elementos en tu pantalla.
- **Si hay demasiadas tablas e imágenes, puedes reducirlas.** Los modelos más recientes a veces mezclan en la respuesta tablas, botones y gráficos. En la personalización de los ajustes de la web, prueba a cambiar «Layout and Visuals» a «Simple». Este nombre es la forma en inglés de la ayuda y no pude comprobar cómo se llama en la pantalla en coreano. Aun así, algunos pueden seguir apareciendo.[^ui]
- **Lo que quieres siempre, fíjalo en las instrucciones.** Basta con escribir cosas como "respuestas cortas" o "cuando compares opciones, en una tabla" en las [«Instrucciones personalizadas» del capítulo 5](05-memory.md#instrucciones-personalizadas-—-lo-que-quieres-que-se-cumpla-siempre).[^ui]
- **También puedes corregir dentro de la propia respuesta.** Los borradores, como un correo o un mensaje, a veces salen como un bloque de escritura (writing block, un cuadro de texto que se puede editar directamente dentro de la respuesta). Corrígelo ahí mismo o elige solo una parte y pide que la corrija. Lo corregido se guarda en la conversación y se usa en las siguientes preguntas.[^blocks]
```
Del borrador de correo que acabas de escribir, corrige solo el segundo párrafo para que sea más corto y más cortés. Deja el resto como está.
```

<Quiz id="ch111-shape" />

## Comprobar antes de creer

Cuánto revisar y en qué momento lo aprendes en la [etapa 1, capítulo 11, «Comprobar en proporción al peso del trabajo»](../00-common/11-expert.md#comprobar-segun-el-peso-del-trabajo). Aquí vemos qué mirar en cada resultado de ChatGPT.

Lo que hay que mirar es distinto en cada resultado.

| Resultado | Qué comprobar |
|---|---|
| Análisis de datos | El método, el código y los supuestos usados en el cálculo. Si el método es importante, pide que te lo muestre o que lo cambie[^data] |
| Informe de investigación profunda | Abre tú mismo las citas y los enlaces de las fuentes ([capítulo 6, «El hábito de comprobar las fuentes»](06-search.md#el-habito-de-comprobar-las-fuentes))[^deep] |
| Archivo creado por Work | Revisa el contenido, el diseño, las fórmulas y los gráficos antes de compartirlo[^docs] |
| Lo que Work hizo en un sitio web | Comprueba el resultado y las fuentes y, en las acciones importantes, pulsa tú mismo en la pantalla de aprobación[^work] |
| Archivos encontrados en una aplicación conectada | Haber encontrado el **nombre** de un archivo no significa que haya leído su **contenido**. En los archivos importantes, pega tú el enlace para que lo lea[^drive] |
| Correos y mensajes enviados con una aplicación conectada | Si la tarea se detiene o el resultado es dudoso, antes de volver a encargarla, comprueba tú mismo la bandeja de enviados y el destino. El mismo correo podría salir dos veces[^apps-trouble] |

**Ten cuidado también con los enlaces.** En los enlaces creados por ChatGPT, un tercero puede haber colado información falsa o malas instrucciones.[^links] El principio de las instrucciones ocultas está en la [etapa 1, capítulo 9, «4. Instrucciones ocultas»](../00-common/09-safety.md#_4-instrucciones-ocultas-—-inyeccion-de-instrucciones-prompt-injection). Cuanto menos sepas del tema, más conviene añadir esto al final.
```
Marca en la respuesta que acabas de dar las partes que debo comprobar yo por separado e indícame dónde comprobarlas (un organismo oficial o el texto original).
```

<Quiz id="ch111-verify" />

## Para aprender más: OpenAI Academy

**OpenAI Academy** son **cursos en línea gratuitos** creados por OpenAI. Cualquiera con una cuenta de ChatGPT puede seguirlos a su propio ritmo.[^academy] Si en la página del curso pulsas «Enroll now» (inscribirse), se abre el contenido. El progreso se guarda solo, así que no hace falta hacerlo todo de una vez. El contenido de los tres cursos de abajo está en **inglés** (consultado el 2026-10-26).[^academy-courses]

Hay tres cursos sobre cómo usarlo en el trabajo. Los dos últimos recomiendan hacer antes el curso anterior. La duración es la que figura en la página del curso y puede cambiar.[^academy-courses]

| Curso | Duración y nivel | Qué trata | Qué necesitas |
|---|---|---|---|
| **AI Foundations** | Unos 70 minutos, introductorio | Qué son la IA y los LLM, instrucciones claras, dar contexto, revisar resultados, usarlo con responsabilidad | Cuenta de ChatGPT y una tarea real para practicar. No hacen falta conocimientos técnicos |
| **Applied AI Foundations** | Unos 80 minutos, intermedio | Convertir una pregunta única en un **flujo de trabajo que se repite** (workflow), elegir un modelo de razonamiento (modelo que piensa más tiempo antes de responder), puntos de revisión, habilidades | Cuenta de ChatGPT y una tarea real para practicar. Se recomienda hacer antes AI Foundations |
| **Agents and Workflows** | Unos 90 minutos, intermedio | Encargar tareas a [Work](07-projects-plugins.md#la-diferencia-entre-chat-y-work), revisar los resultados y reutilizarlos con habilidades y tareas programadas | Cuenta de ChatGPT, una tarea real para practicar y una cuenta que pueda usar la función de encargar tareas (en el original, "agent capabilities"; en el curso, Work). Se recomienda hacer antes los dos cursos anteriores |

En cada curso, si completas el contenido y sacas **un 80% o más en el examen (Assessment)**, recibes una **insignia** por correo.[^academy-courses] La ayuda aclara que esto no es una certificación.[^academy] El [examen de certificación](../00-common/certificate.md) de esta guía es también una insignia de aprendizaje del mismo tipo.

### Los esquemas que se aprenden en los cursos, comparados con esta guía

En los tres cursos aparecen, con otros nombres, los mismos contenidos que en esta guía. Si conoces las correspondencias de abajo, te será más fácil adivinar qué significa un término nuevo cuando lo encuentres en un curso. Los nombres que usan los cursos se han dejado tal cual en inglés.[^academy-content]

- **Task·Context·Expectation** (AI Foundations): pides indicando la tarea, el contexto (para quién es y por qué hace falta) y la forma de la respuesta (formato, extensión y tono). Es la misma idea que los [5 elementos de un buen prompt de la etapa 1, capítulo 4](../00-common/04-prompt-basics.md#los-5-elementos-de-un-buen-prompt).
- **CLEAR** (AI Foundations): al recibir la respuesta, te preguntas tú mismo: ¿ha respondido a todo (Complete)? ¿Tiene coherencia (Logical)? ¿Hay pruebas (Evidence)? ¿Es adecuada para quien la va a leer (Audience)? ¿Se mantiene en el tema (Relevant)? Mira juntos los [«Cuatro hábitos para comprobar» de la etapa 1, capítulo 9](../00-common/09-safety.md#cuatro-habitos-para-comprobar) y [«Comprobar en proporción al peso del trabajo» de la etapa 1, capítulo 11](../00-common/11-expert.md#comprobar-segun-el-peso-del-trabajo).
- **"Use ChatGPT as the workspace, not the source of truth."** (AI Foundations): significa que uses ChatGPT como lugar de trabajo y no juzgues los hechos solo por la respuesta de ChatGPT. Si necesitas hechos, políticas, precios o fechas actuales, tráelos primero de fuentes fiables o de una búsqueda, y haz que ChatGPT solo organice ese material. Conecta con la [«Búsqueda web» del capítulo 6](06-search.md#busqueda-web-—-hacer-que-chatgpt-mire-en-internet).
- **Las cinco partes de un workflow** (Applied AI Foundations): defines el objetivo, el contexto, los pasos, los puntos de revisión y el resultado. No lo encargues todo de una vez: avanza comprobando en cada paso. Mira las [«Cinco líneas para encargar un trabajo»](#cinco-lineas-para-encargar-un-trabajo-resultado-materiales-que-conservar-criterios-de-revision-y-forma) de este capítulo y la [etapa 1, capítulo 5, «3. Dividir en pasos»](../00-common/05-prompt-patterns.md#_3-dividir-en-pasos-—-encadenamiento-de-prompts).
- **Nota de workflow** (Applied AI Foundations): en una tarea larga, ChatGPT puede perder el objetivo o las condiciones iniciales. Por eso apuntas en una nota breve el objetivo, lo que has decidido, las condiciones que hay que respetar y los puntos que se van a revisar. Si en el paso siguiente le vuelves a mostrar esta nota, puede seguir con lo que se decidió antes. Tener esta nota como archivo de un [proyecto del capítulo 7](07-projects-plugins.md#proyectos-conversaciones-archivos-e-instrucciones-en-una-carpeta) y actualizarla cada vez que la cambies es una propuesta de esta guía.
- **Encargar tareas a un agente** (Agents and Workflows): escribes de antemano qué hay que crear, qué materiales usar, qué no hay que hacer (no enviar, no inventar fechas ni responsables, etc.), la forma del resultado y lo que vas a comprobar tú. Es casi lo mismo que las [«Cinco líneas para encargar un trabajo»](#cinco-lineas-para-encargar-un-trabajo-resultado-materiales-que-conservar-criterios-de-revision-y-forma) de este capítulo.
- **Reglas para elegir la función** (Agents and Workflows): en muchos casos basta con un prompt claro. Si necesitas materiales de otro servicio, usa un plugin; si la misma tarea se repite, una habilidad; y si quieres repetir la misma comprobación a una hora fijada, una tarea programada. Mira [«Lo que se repite, en plantilla»](#lo-que-se-repite-en-plantilla-instrucciones-plantillas-y-habilidades) y [«Que se haga solo a la hora fijada»](#que-se-haga-solo-a-la-hora-fijada-tareas-programadas).

En los cursos hay muchas actividades para hacer tú mismo. Si tienes ChatGPT abierto en otra pestaña, puedes seguirlas al instante mientras escuchas. Se recomienda seguir los cursos desde un ordenador y no desde el móvil.[^academy-content]

### Materiales públicos que puedes ver gratis

Para seguir los cursos de Academy hay que iniciar sesión con una cuenta de ChatGPT, pero los materiales de abajo son **gratuitos** y sus páginas de presentación se abren sin iniciar sesión. Eso sí, en algunos sitios hay que registrarse para seguir realmente las clases (en Boostcourse hay que inscribirse en el curso). Todos se comprobaron abriendo directamente las páginas oficiales el 2026-10-25.

| Material | Creado por | Idioma y duración | Para quién |
|---|---|---|---|
| [Introduction to Prompt Engineering](https://academy.openai.com/public/videos/introduction-to-prompt-engineering-2025-02-13) (vídeo) | OpenAI Academy | Inglés | Quien quiera repasar con un vídeo hecho por OpenAI cómo escribir prompts, que se vio en la etapa 1 de esta guía. El siguiente es [Advanced Prompt Engineering](https://academy.openai.com/public/videos/advanced-prompt-engineering-2025-02-13)[^academy-public] |
| [ChatGPT fundamentals](https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-basics) (texto) | OpenAI Academy | Inglés | Quien quiera volver a ver los fundamentos de ChatGPT en un texto que OpenAI ha resumido directamente[^academy-public] |
| [ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) | DeepLearning.AI. Lo imparten juntos un empleado de OpenAI (Isa Fulford) y Andrew Ng | Inglés, 1 hora 40 minutos | Quien tenga curiosidad por un curso de prompts para desarrolladores. Hacen falta nociones básicas de **Python** (un lenguaje de programación). Pone que es gratis "durante un periodo limitado de la beta (pruebas previas al lanzamiento oficial) de la plataforma de aprendizaje", así que comprueba en la página si sigue siendo gratis antes de seguirlo[^dlai] |
| [Generative AI for Beginners](https://github.com/microsoft/generative-ai-for-beginners) (GitHub: un sitio donde se suben materiales) | Microsoft | 21 lecciones, **con traducción al coreano** ([versión en coreano](https://github.com/microsoft/generative-ai-for-beginners/tree/main/translations/ko)) | Quien se interese por crear aplicaciones de IA generativa. Empieza leyendo las lecciones «Learn», que explican los conceptos (las lecciones «Build» incluyen ejemplos de código)[^msgenai] |
| [Cómo escribir una propuesta paso a paso con ayuda de la IA (AI로 배우는 단계별 기획서 작성법)](https://www.boostcourse.org/aix210) | Boostcourse | En **coreano**, 3 clases y una tarea práctica | Quien quiera aprender en coreano a usar la IA en el trabajo. Es un curso sobre cómo escribir propuestas con IA y hay que inscribirse (registrarse)[^boost] |

Los materiales en inglés se pueden leer con la función de traducción de un navegador como Chrome (en la página, botón derecho → «Traducir al coreano» (한국어로 번역)).

Los famosos vídeos de Andrej Karpathy que explican cómo se crea ChatGPT y cómo se usa los hemos reunido en [«Más en vídeo» de la etapa 1, capítulo 1](../00-common/01-what-is-llm.md#mas-en-video) y en [«Más en vídeo» de la etapa 1, capítulo 3](../00-common/03-why-learn.md#mas-en-video).

> Los conocidos cursos de Coursera «Prompt Engineering for ChatGPT» y «Generative AI for Everyone» se han quitado de esta lista gratuita porque en la página del curso se indica que "para ver los materiales y las tareas hay que comprar el curso con certificado" (consultado el 2026-10-25).[^coursera]

<Quiz id="ch111-academy" />

## Pruébalo tú

1. Inventa en el Bloc de notas una tabla de fecha, artículo, cantidad e importe con unas 10 filas, guárdala como CSV, súbela a ChatGPT y envía "Comprueba primero si hay problemas habituales". Después pide los totales por artículo en un gráfico de barras, haz que te muestre el método de cálculo y los supuestos, y contrasta si los totales coinciden con lo que sumaste tú mismo.
2. Pide con el esquema de las «cinco líneas» que te organice las tareas de esta semana. Envíalo una vez sin la línea de criterios de revisión y otra con ella, y compara la diferencia.
3. Crea una tarea programada ("Avísame mañana por la mañana de que beba agua"). Comprueba que aparece en «Programadas» del menú lateral y, cuando la hayas visto, bórrala.
4. Activa el modo de estudio con `@study` y aprende un tema que te intrigue últimamente con el prompt de repaso de 20 minutos.

**Proyecto continuo** ([Preparar un club de lectura](../00-common/practice-kit.md)): sube el archivo de ejemplo fees.csv y envía, como en el punto 1, "Comprueba primero si hay problemas habituales". Fíjate en si encuentra el refrigerio escrito dos veces y la fila con el importe vacío. Después envía "Muéstrame en una tabla el total de ingresos y gastos y el dinero restante, y los gastos por concepto en un gráfico de barras", y contrasta los números de la tabla con lo que sumes tú. Por último, marca una por una las casillas de la [lista de comprobación de la tarea](../00-common/practice-kit.md#lo-que-te-queda-al-final).

## Resumen

- Un experto habla como si encargara un trabajo. Escribe las cinco líneas (resultado, materiales, qué conservar, criterios de revisión y forma) y comprueba cada resultado donde corresponde antes de usarlo.
- Datos rápidos: búsqueda; investigación a fondo: investigación profunda; archivos terminados: Work; pensamiento difícil: nivel de razonamiento. Para saber si una función puede hacerlo, no preguntes: encárgalo.
- Acumula las buenas respuestas con «Añadir a las fuentes del proyecto» y, para lo que se repite, crea una plantilla en este orden: instrucciones → plantilla (Work) → habilidad (según la ayuda, planes de empresa o centros educativos).
- El complemento de ChatGPT para Word y PowerPoint también se puede usar gratis. Antes de hacer grandes cambios, guarda una copia y pide primero el plan.
- Las tareas programadas se crean pidiéndolo en la conversación y se gestionan en «Programadas» del menú lateral. Las tareas dentro de un proyecto no pueden leer los archivos del proyecto, y las que hacen cambios mediante aplicaciones pueden detenerse esperando aprobación.
- En el análisis de datos, sube un archivo ordenado, comprueba primero los problemas de los datos y después indica el método. El modo de estudio se activa con `@study` y se usa en todos los planes (excepto en proyectos y chats temporales).
- Para aprender más, mira OpenAI Academy (requiere iniciar sesión, tres cursos de unos 70~90 minutos) o los materiales públicos gratuitos (vídeos públicos de OpenAI Academy, DeepLearning.AI, Microsoft, Boostcourse).

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Review criteria | Criterios de revisión | La vara para juzgar si el resultado salió bien |
| Scheduled tasks | Tareas programadas | Tareas que ChatGPT ejecuta solo a la hora que has fijado |
| Data analysis | Análisis de datos | Función que calcula las tablas y cifras de un archivo subido y las muestra como resumen o gráfico |
| Template | Plantilla | Esquema que reúne un archivo de ejemplo y unas instrucciones reutilizables |
| Study mode | Modo de estudio | Forma de enseñar con preguntas y explicaciones paso a paso en lugar de dar la respuesta |
| Characteristics | Características | Ajustes que suben o bajan el ambiente de la respuesta, como la calidez o los emojis |
| Writing block | Bloque de escritura | Cuadro de texto con un borrador que se puede editar directamente dentro de la respuesta |
| OpenAI Academy | OpenAI Academy | Cursos gratuitos de IA en línea creados por OpenAI |
| Add-in | Complemento | Pequeña función que se acopla dentro de un programa como Word o PowerPoint |

<ChapterDone :chapter="111" />

Siguiente capítulo: has terminado la etapa 2. Comprueba tu nivel con el [examen de nivel de conocimientos de IA](../00-common/level-test.md).

[^adopt]: OpenAI, «ChatGPT Usage and Adoption Patterns at Work». "Advanced features remain underused, even where they could deliver broad impact." https://openai.com/business/guides-and-resources/chatgpt-usage-and-adoption-patterns-at-work (consultado el 2026-10-24)
[^work]: Ayuda de OpenAI, «ChatGPT Work and Codex» "Describe the outcome you want. Add any files, constraints, and review criteria ChatGPT should use." https://help.openai.com/en/articles/20001275 · «Using cloud browser in ChatGPT» "Check the result and its sources before relying on it." https://help.openai.com/en/articles/20001280 (consultado el 2026-10-24)
[^docs]: Ayuda de OpenAI, «Creating and editing documents, spreadsheets, and presentations with ChatGPT Work». Plantillas y `@Template-Creator`, "Say what must stay unchanged…" https://help.openai.com/en/articles/20001278 (consultado el 2026-10-24)
[^prompt]: Ayuda de OpenAI, «How do I create a good prompt for an AI model?». https://help.openai.com/en/articles/4936848 (consultado el 2026-10-24)
[^aprompt]: OpenAI Academy, «Prompting». https://academy.openai.com/public/clubs/work-users-ynjqu/resources/prompting (consultado el 2026-10-24)
[^deep]: Ayuda de OpenAI, «Deep research in ChatGPT». "Use search for quick facts, and use deep research for depth and thoroughness." https://help.openai.com/en/articles/10500283 (consultado el 2026-10-24)
[^ask]: Ayuda de OpenAI, «How to Ask ChatGPT About Its Features». https://help.openai.com/en/articles/12548278 (consultado el 2026-10-24)
[^projects]: Ayuda de OpenAI, «Projects in ChatGPT». https://help.openai.com/en/articles/10169521 (consultado el 2026-10-24)
[^skills]: Ayuda de OpenAI, «Skills in ChatGPT». "Skills are available to eligible ChatGPT Business, Enterprise, Healthcare, and Edu users" https://help.openai.com/en/articles/20001066 (consultado el 2026-10-24)
[^tasks]: Ayuda de OpenAI, «Scheduled tasks in ChatGPT». Número de tareas por plan, restricción de acceso a archivos en las tareas dentro de un proyecto y advertencias al compartir. https://help.openai.com/en/articles/10291617 (consultado el 2026-10-24)
[^data]: Ayuda de OpenAI, «Data analysis with ChatGPT» https://help.openai.com/en/articles/8437071 · «Extracting Insights with ChatGPT Data Analysis» "Check this data for common issues." https://help.openai.com/en/articles/9213685 (consultado el 2026-10-24)
[^study]: Ayuda de OpenAI, «Using study mode in ChatGPT» https://help.openai.com/en/articles/11780217 · «Flashcards in ChatGPT» "Flashcards are automatically saved in your library." https://help.openai.com/en/articles/20001533 (consultado el 2026-10-24)
[^char]: Ayuda de OpenAI, «Characteristics in ChatGPT». https://help.openai.com/en/articles/20001038 (consultado el 2026-10-24)
[^ui]: Ayuda de OpenAI, «Intelligent UI in ChatGPT». "Select Personalization → Layout and Visuals → Simple." https://help.openai.com/en/articles/20001598 (consultado el 2026-10-24)
[^blocks]: Ayuda de OpenAI, «Working with writing blocks and code blocks in ChatGPT». https://help.openai.com/en/articles/20001246 (consultado el 2026-10-24)
[^links]: Ayuda de OpenAI, «ChatGPT generated links». https://help.openai.com/en/articles/10984597 (consultado el 2026-10-24)
[^academy-courses]: Páginas de los cursos de OpenAI Academy (tras iniciar sesión). AI Foundations "Duration: ~70 minutes", "Level: Introduction", "No technical background is required." · Applied AI Foundations "Duration: ~80 minutes", "Level: Intermediate", "We recommend completing AI Foundations first." · Agents and Workflows "Duration: ~90 minutes", "Level: Intermediate", "We recommend completing AI Foundations and Applied AI Foundations first.", "Access to agent capabilities". Común a las tres páginas: "The pathway includes two required steps: completing the course and passing the assessment with a score of at least 80%." / "Your progress is automatically saved." https://academy.openai.com/home/courses/ai-foundations-dnq5w · https://academy.openai.com/home/courses/applied-ai-foundations-szsmv · https://academy.openai.com/home/courses/agents-and-workflows-y0qoc (consultado el 2026-10-26)
[^academy-content]: Contenido de los cursos de OpenAI Academy (requiere iniciar sesión y registrarse). AI Foundations: "Reviewing outputs with the CLEAR structure (Complete, Logical, Evidence, Audience, Relevant)" / "Use ChatGPT as the workspace, not the source of truth." / "we recommend that you:" "Use a desktop computer or laptop". Applied AI Foundations: "A workflow has five parts" (Goal, Context, Steps, Checkpoints, Output) / "Do not ask ChatGPT to do the whole job at once." / "A workflow note keeps the goal, context, decisions, sources, capabilities, and review points in one place." Añadido de Applied AI Foundations: "It's the one that is useful, realistic for you, low-risk while you are learning, and easy to practice and iterate on as you go." / "Avoid workflows that are:" "Too broad" / "Too infrequent" / "Too high stakes" / "Difficult to review or verify" / "If ChatGPT misunderstands something, you can catch it early instead of fixing the whole output later." / "It should happen throughout the workflow, not only at the end." / "Do the “because” and “therefore” statements make sense? If the reasoning does not hold, ask ChatGPT to explain its logic". Añadido de AI Foundations: "Review intensity depends on the task" / "Drafting something that affects a person’s rights, job, health, finances, or access to services" → "Strong human review or approved process". Agents and Workflows: "Before you direct the agent to create the project brief document, have the agent review what's in the folder." / "Keep the update internal, do not send or publish it, do not invent owners or dates" / "If Work needs another approved source, start with a plugin. If the same workflow keeps repeating, consider a skill. If the same stable review should run later or recur, consider a scheduled task." / "Often, a clear prompt is enough." / "Use scheduled tasks for workflows that check, monitor, summarize, or report. Be cautious with anything that sends, posts, publishes, deletes, approves, changes records, or creates external commitments." / "Start manually. Run the workflow yourself a few times, refine the prompt, confirm the sources, and only then schedule it." / "A skill probably isn't the right fit yet if: The workflow changes every week. ... The output format is still being negotiated. The task requires judgment that should stay with a person" (consultado el 2026-10-26)
[^academy]: Ayuda de OpenAI, «OpenAI Academy courses». "These badges and certificates of completion are not certifications" https://help.openai.com/en/articles/20001270 (consultado el 2026-10-24)
[^word]: Ayuda de OpenAI, «ChatGPT for Word». "ChatGPT for Word is available on all ChatGPT plans, including Free." / "Word, Excel, and PowerPoint use the same ChatGPT Microsoft add-in." / "ChatGPT memory and skills do not carry over to the add-in." / "Save a copy of important work before making substantial changes." https://help.openai.com/en/articles/20001526 (consultado el 2026-10-24)
[^ppt]: Ayuda de OpenAI, «ChatGPT for PowerPoint». "Free and Go include limited usage access." / "Ask for a plan first when you are making larger edits." / "For important work, duplicate the file first so you can revert if needed." https://help.openai.com/en/articles/20001242 (consultado el 2026-10-24)
[^gpt-make]: Ayuda de OpenAI, «Creating and editing GPTs». "Prefer positive, concrete instructions (“Do X”) over long lists of prohibitions (“Don’t do Y”) when possible." / "Use knowledge for reference material, not rules or behavior." / "Before adding more tools, tighten instructions and add examples." https://help.openai.com/en/articles/8554397 (consultado el 2026-10-24)
[^slack]: Ayuda de OpenAI, «Using Slack in ChatGPT». "A shared task link does not transfer your Slack connection, credentials, channel access, or message history." https://help.openai.com/en/articles/12525822 (consultado el 2026-10-24)
[^apps-trouble]: Ayuda de OpenAI, «Troubleshooting plugins and apps in ChatGPT». "If approval is required, the task pauses until you review it." / "Before resending an email or message, check the intended account’s sent messages and the destination." https://help.openai.com/en/articles/20001497 (consultado el 2026-10-24)
[^drive]: Ayuda de OpenAI, «Google Drive app and setup in ChatGPT». "Finding a filename or file details does not confirm that ChatGPT retrieved the file’s contents." https://help.openai.com/en/articles/10929079 (consultado el 2026-10-24)
[^academy-public]: Páginas públicas de OpenAI Academy. «Introduction to Prompt Engineering» (Posted Mar 08, 2025), «Advanced Prompt Engineering», «ChatGPT fundamentals» (Last updated on May 30, 2026). Se comprobó que las tres se abren en un navegador sin sesión iniciada. https://academy.openai.com/public/videos/introduction-to-prompt-engineering-2025-02-13 · https://academy.openai.com/public/videos/advanced-prompt-engineering-2025-02-13 · https://academy.openai.com/public/clubs/work-users-ynjqu/resources/chatgpt-basics (consultado el 2026-10-25)
[^dlai]: DeepLearning.AI, «ChatGPT Prompt Engineering for Developers». Instructores: Isa Fulford "Member of Technical Staff, OpenAI" y Andrew Ng, "1h40m", "Beginner", "Only a basic understanding of Python is needed.", "Course access is free for a limited time during the DeepLearning.AI learning platform beta!" https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/ (consultado el 2026-10-25)
[^msgenai]: Microsoft, README del repositorio de GitHub «Generative AI for Beginners». "This course has 21 lessons." / "Lessons are labeled either 'Learn' lessons explaining a Generative AI concept or 'Build' lessons that explain a concept and code examples". La traducción al coreano está en la carpeta `translations/ko`. https://github.com/microsoft/generative-ai-for-beginners (consultado el 2026-10-25)
[^boost]: Boostcourse, presentación del curso «Cómo escribir una propuesta paso a paso con ayuda de la IA» (AI로 배우는 단계별 기획서 작성법). «Clase gratuita» (무료강의), nivel «Introductorio» (입문), «Siempre abierto» (상시 수강), plan de clases n.º 1~3 y «[Tarea] Practica por tu cuenta» (자율 실습 해보기), profesor Lee Seungpil (이승필). https://www.boostcourse.org/aix210 (consultado el 2026-10-25)
[^coursera]: Preguntas frecuentes de las páginas de curso de Coursera. "To access course materials, assignments, and earn a Certificate, you'll need to purchase the Certificate experience when you enroll in a course." https://www.coursera.org/learn/prompt-engineering · https://www.coursera.org/learn/generative-ai-for-everyone (consultado el 2026-10-25)
[^scheduled-name]: La ayuda llama a este menú «Programadas» (예약됨), pero el nombre real en la pantalla es «Programadas» (예약).
[^screen-scheduled]: Comprobado directamente en la pantalla «Programadas» (예약) del menú lateral. Texto de ayuda "Pide a ChatGPT que programe tareas, configure recordatorios o supervise actualizaciones" (ChatGPT에게 작업 예약, 알림 설정 또는 업데이트 모니터링을 요청하세요), cuadro de entrada «Programar tarea» (작업 예약하기), botones «Pausar» (일시 중지) y «Editar» (편집) en la fila de la tarea, y lista de «Sugeridas» (추천) (actualizaciones de noticias, vigilancia del correo, búsqueda de lecturas para el fin de semana, etc.). El panel que se abre al pulsar una tarea muestra el resultado real de la tarea, así que no se incluye (consultado el 2026-10-28, pantalla web de una cuenta Plus)
[^screen-data]: Comprobado directamente subiendo el libro de cuentas falso de cuotas fees.csv y enviando el prompt de esta sección. La primera respuesta encontró valores vacíos y duplicados y detuvo el recuento; en el gráfico de la segunda respuesta el coreano salió roto en forma de cuadrados y, al pedir que lo dibujara de nuevo, lo cambió por un gráfico dibujado dentro de la pantalla. Los botones junto al gráfico son «Descargar gráfico» (차트 다운로드) y «Ampliar gráfico» (차트 펼치기). Aunque se borró la conversación, fees.csv seguía en la biblioteca y, al borrarlo de la biblioteca, avisó de que "se mueve a la papelera y se elimina de forma permanente a los 30 días" (휴지통으로 이동되며 30일 후 영구 삭제됩니다) (consultado el 2026-10-28, pantalla web de una cuenta Plus)
[^screen-study]: Se comprobó directamente la lista de sugerencias escribiendo `@study` en el cuadro de entrada (sin enviar). Nombre de la sugerencia «Estudiar» (공부하기), descripción "Aprende conceptos nuevos" (새로운 개념을 배워보세요) (consultado el 2026-10-28, pantalla web de una cuenta Plus)
