# Capítulo 4. Archivos y creación: subir archivos, Canvas, imágenes, vídeo y música

> **En una línea**: con el «+» del cuadro de entrada puedes **subir archivos** para recibir resúmenes y análisis, editar juntos documentos y aplicaciones en **Canvas**
> y crear **imágenes, vídeos y música**. Los contenidos creados con Gemini llevan una marca que indica que los hizo una IA. No introduzcas contraseñas en una aplicación que te haya compartido otra persona.

Las pantallas corresponden a la versión web de 2026-10 y las imágenes son de un plan de pago (Google AI Pro) en coreano. Las funciones de este capítulo que **exigen un plan de pago**, como crear vídeos, llevan la indicación «de pago» (유료).

## Subir archivos

Si subes un archivo, como un documento, una tabla, una foto o un vídeo, puedes recibir respuestas basadas en su contenido. Puedes pedir un resumen, preguntar lo que te intrigue o encargar un análisis.[^files]
Pulsa el «+» del cuadro de entrada y elige «Subir archivo» (파일 업로드). Los archivos que están en Google Drive se traen con «Añadir archivo desde Drive» (Drive에서 파일 추가) ([capítulo 2](02-screen-tour.md#cuadro-de-entrada-y-menu)).[^files][^screen]

Hay un límite de cuánto se puede subir de una vez.[^files]

| Concepto | Límite |
|---|---|
| Número de archivos que se suben a la vez | Hasta 10 (varía según la situación; los archivos de dentro de una carpeta se cuentan uno a uno) |
| Un vídeo | Hasta 2GB |
| Cualquier otro archivo | Hasta 100MB |
| Duración total de los vídeos | 5 minutos (Pro y Ultra, 1 hora) |
| Duración total del audio | 10 minutos (Pro y Ultra, 3 horas) |

Fuente: ayuda de Google[^files]

Para traer archivos de Drive, tiene que estar activada la «Conservación de la actividad» (활동 기록 보관) y Google Workspace (el conjunto de aplicaciones de Google como Gmail y Drive) tiene que estar conectado a Gemini ([capítulo 3](03-chats.md#buscar-conversaciones-anteriores)).[^files] La conexión se trata en el [capítulo 7](07-skills-apps.md#aplicaciones-conectadas-gmail-drive-y-calendar-desde-gemini).

**Si subes un archivo de tabla, también puede crear gráficos.** En la web, sube una tabla y pídele que cree un gráfico. Puedes ampliar el gráfico creado y retocarlo a tu gusto.[^files]

```
Con el archivo de cuentas domésticas que subí, dibuja los gastos de este mes por concepto en un gráfico de barras.
Señala aparte, en una línea cada uno, los tres conceptos en los que más se gastó.
```

Hay tres cosas que debes saber.[^files]

- **Un archivo grande puede perder una parte.** Si quieres mejores resultados, divídelo y sube archivos más pequeños con menos contenido. Para la cantidad que lee de una vez, mira la tabla de planes del [capítulo 1](01-getting-started.md#en-que-se-diferencia-cada-plan).
- **El análisis de archivos tiene además un límite por horas.** Si al subir muchos llegas al límite, espera a que se restablezca pasado un tiempo.
- **Los archivos que subes usan el almacenamiento de la aplicación Gemini.** Este espacio se cuenta aparte de la capacidad de Drive. Si aparece «Elimina datos para subir el archivo» (파일을 업로드하려면 데이터를 삭제하세요), significa que el espacio está lleno. Se libera borrando la actividad anterior en «Ajustes» → «Actividad». Las conversaciones con vídeos y fotos ocupan más espacio.

Antes de subir un archivo, comprueba que no contenga datos personales de otras personas ([etapa 1, capítulo 9](../00-common/09-safety.md)).

<Quiz id="ch304-upload" />

## Canvas: editar juntos documentos y aplicaciones

**Canvas** es una función que muestra un documento o una aplicación en una ventana aparte y los editas junto con Gemini. Puedes crear documentos, aplicaciones, diapositivas y código.[^canvas]
Pulsa «+» → «Más herramientas» (도구 더보기) → «Canvas» del cuadro de entrada, escribe lo que quieres crear y envíalo ([capítulo 2](02-screen-tour.md#cuadro-de-entrada-y-menu)).[^canvas][^screen]

![Ventana de documento «Aviso del club de lectura» (독서 모임 안내문) creada con Canvas. Los números rojos marcan: ① «Cambios guardados» (변경사항이 저장됨), «Versión anterior» (이전 버전) y «Versión siguiente» (다음 버전); ② «Exportar» (내보내기); ③ «Compartir» (공유), «Pantalla completa» (전체 화면) y «Cerrar» (닫기); y ④ el cuerpo del documento](../../../guide/12-gemini/assets/shot-13-canvas-marked.png)

Es un aviso creado como práctica. En la pantalla que comprobó esta guía, la ventana del documento se abrió **dentro de la conversación**. Si pulsas «Pantalla completa» en ③, lo ves en grande.[^screen]

| N.º | Botón | Qué hace |
|---|---|---|
| ① | Iconos «Cambios guardados», «Versión anterior» y «Versión siguiente» | Ver el estado de guardado y moverse entre versiones anteriores y posteriores |
| ② | «Exportar» | Llevarlo fuera, por ejemplo a Docs |
| ③ | Iconos «Compartir», «Pantalla completa» y «Cerrar» | Crear un enlace, verlo en grande, cerrar |
| ④ | Cuerpo del documento | Editarlo tú mismo, o seleccionar una parte y pedirle a Gemini que la corrija |

Los nombres de los iconos son los que aparecen al colocar el ratón encima. Fuente: comprobado directamente en la pantalla web de Gemini[^screen]

La primera vez que lo abres, aparece el aviso: "Haz clic en cualquier lugar para escribir y editar directamente, o selecciona texto para pedirle cambios a Gemini." (아무 곳이나 클릭하여 직접 입력하고 수정하거나, 텍스트를 선택하여 Gemini에게 변경을 요청하세요.)[^screen] Puedes editar tú mismo el cuerpo del ④, o elegir la parte que quieres cambiar y dejársela a Gemini.

Si necesitas un **formato concreto**, como una presentación, escríbelo en la pregunta.[^canvas] Por ejemplo, puedes pedirlo así.

```
Crea el aviso del club de lectura del mes que viene. Incluye la fecha, el lugar, el libro que se leerá y lo que hay que traer,
y escríbelo como un documento de una sola página.
```

Esto es lo que puedes hacer en Canvas.[^canvas]

- **Los cambios se guardan solos.** Con los botones de versión anterior y versión siguiente puedes volver a ver cómo estaba lo guardado antes.
- **Puedes corregir solo una parte.** Selecciona con el ratón arrastrando la parte que quieres corregir y escribe qué cambiar.
- **En un documento puedes cambiar al instante la longitud y el tono.** Pulsa «Cambiar longitud» (길이 변경) o «Cambiar tono» (어조 변경).
- **Puedes convertirlo a otros formatos.** Con el documento creado puedes crear diapositivas, un cuestionario, una infografía (un material de una página que organiza la información con imágenes), una página web, un resumen de audio (el documento contado en voz en forma de conversación), etc. Por ahora, los menores de 18 años no pueden usar esta función.
- **Puedes llevarlo fuera.** Puedes exportarlo a Docs y, si son diapositivas, a Google Slides o a PDF.

Si creas una aplicación, desde arriba a la derecha de Canvas puedes ver y editar el código directamente, o ver los errores con «Mostrar consola» (콘솔 표시).[^canvas] Para añadir a la aplicación funciones de IA, como crear textos o imágenes, tienes que haber iniciado sesión y tener 18 años o más.[^canvas]

**Lo que creas con Canvas se borra junto con su conversación** ([capítulo 3](03-chats.md#fijar-renombrar-y-eliminar)). Exporta a Docs los documentos que vayas a usar durante mucho tiempo.

<Quiz id="ch304-canvas" />

## Al compartir y al recibir una aplicación de Canvas

También puedes crear un enlace compartido para una aplicación creada con Canvas. En ese caso, hay que tener más cuidado que al compartir una conversación.

**En una aplicación en la que varias personas comparten datos, cualquiera que tenga el enlace puede ver y modificar los datos de esa aplicación.**[^canvas][^canvas-safety]
Si creas una aplicación con función de guardado, Gemini crea también una base de datos (un lugar donde se almacenan los datos). En una aplicación en la que varias personas comparten datos, estos se guardan en una base de datos pública y cualquiera que tenga el enlace puede verlos y modificarlos.[^canvas-safety]
Por ejemplo, si creas una aplicación para recoger los contactos de los socios de un club y difundes el enlace, cualquiera que reciba el enlace puede ver esos contactos. No compartas aplicaciones que recojan datos personales.

**Desconfía de una aplicación que te envíe otra persona como harías con un correo desconocido.** La información que introduces en la aplicación la puede ver quien la creó, y también otras personas que tengan el enlace. Google lo indica así.[^canvas-safety]

- **Ten mucho cuidado con las aplicaciones que piden contraseñas o datos de pago.**
- Ten cuidado también con las **aplicaciones que piden permiso para la cámara o el micrófono**.
- **No descargues aplicaciones de orígenes poco fiables.**
- Si una aplicación te parece peligrosa, puedes denunciarla con el enlace de la parte inferior de la página.

Un enlace de Canvas que te hayan compartido solo se abre en la web (gemini.google.com), no en la aplicación del móvil.[^canvas]

<Quiz id="ch304-canvas-safety" />

## Crear imágenes

Si lo describes con palabras, Gemini te crea la imagen. El modelo que crea las imágenes es **Nano Banana**.[^image]
Pulsa «+» → «Crear imagen» (이미지 만들기) del cuadro de entrada, o elige una plantilla (un esquema preparado de antemano) en «Imágenes» del menú lateral, o escribe directamente la descripción.[^image][^screen]

![Pantalla «Crear imagen» tras pulsar ① «Imágenes» en el menú lateral. Con el texto "Prueba una plantilla o describe tu idea en el chat. Se crea con el modelo Nano Banana." (템플릿을 사용해 보거나 채팅으로 아이디어를 설명하세요. Nano Banana 모델로 만듭니다.). Los números rojos marcan: ② el cuadro de entrada «Describe la imagen» (이미지를 설명하세요) y el botón «Relación de aspecto» (가로세로 비율) de debajo, y ③ plantillas como «Hollywood» (할리우드), «Coach» (코치), «Front Row» (프론트 로우), «Bronze» (브론즈) y «Pastel» (파스텔)](../../../guide/12-gemini/assets/shot-12-images-marked.png)

Al pulsar ① «Imágenes» del menú lateral, puedes empezar ② describiendo la imagen en el cuadro de entrada o ③ eligiendo una plantilla. Con «Relación de aspecto» de debajo del cuadro de entrada eliges la forma de la imagen (la proporción entre su ancho y su alto).[^screen]

Estos son los **consejos para que dibuje bien**.[^image]

- Empieza con lo que debe hacer, como "dibuja" o "crea".
- Describe con detalle el estilo (como una foto, acuarela, cómic) y qué hace qué, y dónde.

| Petición floja | Mejor petición |
|---|---|
| "Un dibujo de un gato" | "Dibuja un gato naranja dormitando junto a la ventana, con aspecto de acuarela. Que sea una escena con la luz de la tarde." |

La mejor petición ya dice el estilo, el protagonista, el lugar y el ambiente, así que hará falta pedir menos veces que lo dibuje de nuevo.

Puedes **corregir la imagen creada hablando**. Abre la imagen en «Biblioteca» del menú lateral, pulsa «Chat» (채팅) debajo y escribe qué quieres cambiar. También puedes subir una foto tuya para modificarla, o combinar varias para crear una imagen nueva.[^image]

También hay diferencias según el plan.[^image]

- **Tamaño de descarga**: con un plan de Google AI es de resolución 2K; sin él, 1K.
- **Un modelo más preciso (de pago)**: con un plan de pago puedes volver a crear la imagen con **Nano Banana Pro**. Se usa cuando tienes el modelo en Pro. Eso sí, si agotas el límite de imágenes de Nano Banana 2 que puedes usar ese día, no podrás volver a crearlas con Pro.

Para **solo crear** imágenes hay que tener 13 años o más (la edad de referencia puede variar según el país), y para **llegar a modificarlas**, 18 años o más.[^image] Las imágenes que parezcan infringir las condiciones de uso pueden eliminarse.[^image]

<Quiz id="ch304-image" />

## Crear vídeo y música

### Crear vídeo (de pago)

Con **Gemini Omni** creas y corriges vídeos conversando. Puedes describirlo mezclando texto, imágenes y vídeo.[^video]
Con una cuenta personal, **hace falta un plan de Google AI** para usarlo.[^video] Pulsa «+» → «Crear vídeo» (동영상 만들기) del cuadro de entrada y escribe el vídeo que quieres.[^video][^screen]

- **Puedes subir material de referencia.** Puedes subir 1 vídeo y hasta 5 fotos.[^video]
- **Tarda unos minutos en crearse.** Mientras se crea, no puedes usar esa conversación, así que abre un chat nuevo, haz otra cosa y vuelve después.[^video]
- **Se corrige conversando.** Basta con pedirle que borre o cambie objetos, o que cambie el ángulo de cámara o la escena.[^video]
- **El formato horizontal es el predeterminado.** Si subes una foto o un vídeo de referencia, sigue su proporción.[^video]
- El vídeo terminado se puede publicar en YouTube o descargar.[^video]

**Usa solo fotos que tengas derecho a usar.** Si infringes las condiciones o los derechos de otras personas, tu cuenta puede cancelarse.[^video]

### Crear música

Con **Lyria**, si describes la canción, crea la música y la letra.[^music] Pulsa «+» → «Crear música» (음악 만들기) del cuadro de entrada.[^music][^screen]

- Tienes que tener **18 años o más** y la «Conservación de la actividad» activada.[^music]
- La duración se elige entre **corta (unos 1 minuto)** y **completa (unos 2~3 minutos)**, y también puedes elegir si lleva canto y el género.[^music]
- **Para crear una canción de duración completa hay que cambiar el modelo a Pro** ([capítulo 2](02-screen-tour.md#boton-de-modelo-modelo-y-nivel-de-razonamiento)).[^music]
- La canción se puede descargar como vídeo con imagen de portada (MP4) o solo como sonido (MP3).[^music]
- Hay un límite de canciones que se pueden crear. Si lo superas, te llega un aviso.[^music]

En música también conviene empezar con "escribe" o "compón" y anotar el género y los instrumentos.[^music]

```
Compón una canción tranquila para poner al empezar el club de lectura. Con guitarra acústica y piano,
sin letra y corta.
```

Crear imágenes, música y vídeo **consume mucho uso**. El vídeo es lo que más consume ([capítulo 1](01-getting-started.md#limites-de-uso-5-horas-semanal-y-cantidad-que-lee)).

<Quiz id="ch304-media" />

## Comprobar si lo ha creado una IA: la marca de agua

En las imágenes, los vídeos y la música creados o corregidos con Gemini hay una **marca que indica que los hizo una IA**.[^watermark][^music]

| Marca | ¿Se ve? | Qué hace |
|---|---|---|
| Marca de agua SynthID | No se ve | Marca oculta para saber si se creó con una IA de Google |
| Content Credentials | No se ve | Registro que deja constancia de dónde y cómo se creó |
| Marca de agua visible | Se ve | Marca superpuesta que se ve sobre la imagen o el vídeo |

Fuente: ayuda de Google[^watermark][^verify]

**En Corea, solo con AI Ultra puedes quitar la marca de agua visible.** Existe un ajuste «Marca de agua en los medios» (미디어 워터마크) para quitar y poner la marca de agua, pero en Corea **solo lo ven los suscriptores de AI Ultra**.[^watermark] Por eso, las imágenes y los vídeos creados con el plan gratuito, Plus o Pro, y la pantalla de vídeo de la música, llevan la marca de agua visible. Este ajuste solo cambia la marca de agua visible; las marcas ocultas (SynthID y Content Credentials) permanecen.[^watermark]

### Preguntar si una imagen que recibiste está hecha con IA

Si tienes curiosidad por saber si una imagen, un vídeo o un sonido que recibiste lo ha creado una IA, súbelo a Gemini y pregunta.[^verify]

```
¿Esta foto está hecha con IA?
```

Hay cosas que debes saber.[^verify]

- **Solo reconoce lo creado con una IA de Google.** Aunque diga que no hay marca oculta, puede haberse creado con la IA de otra empresa.
- **Recorta la captura de pantalla ajustándola solo a la imagen** antes de subirla. Si subes varias imágenes reunidas en una, baja la precisión.
- **Un archivo cada vez**, de menos de 100MB. Los vídeos deben durar menos de 90 segundos.
- **Hay un límite de comprobaciones.** En 24 horas, unas 10 veces para imágenes, 10 para vídeos y 10 para sonido.
- **Content Credentials no afirma que "lo hizo una IA".** Solo muestra el origen y el historial, y el juicio lo haces tú.

No te fíes solo de la herramienta: mira también tú mismo. Fíjate en si hay letras rotas, si hay algo raro en detalles pequeños como las manos o los dientes, o si las sombras encajan. Otra opción es buscar el original con la búsqueda de imágenes de Google.[^verify]

<Quiz id="ch304-verify" />

## Pruébalo tú

1. Sube un archivo de tabla que tengas en casa (por ejemplo, de cuentas domésticas) y pide "Dibuja un gráfico de barras por concepto". Usa un archivo sin datos personales.
2. Crea con «Canvas» un aviso de una página y, seleccionando arrastrando un solo párrafo, corrígelo con "más corto".
3. Crea con «Crear imagen» una imagen con aspecto de acuarela, ábrela en la «Biblioteca» y pide que le cambien los colores.
4. Sube la imagen que acabas de crear a un chat nuevo y pregunta "¿Esta imagen está hecha con IA?".

**Proyecto continuo** ([Preparar un club de lectura](../00-common/practice-kit.md)): sube el archivo de ejemplo del acta de la tarea para recibir un resumen y, a continuación, crea con «Canvas» un borrador de aviso. Deja el aviso exportado a Docs.

## Resumen

- Con «+» → «Subir archivo» del cuadro de entrada subes hasta 10 a la vez. Los vídeos, hasta 2GB y el resto de archivos, hasta 100MB.
- Un archivo grande puede perder una parte. Los archivos que subes usan el almacenamiento de la aplicación Gemini, que se cuenta aparte de Drive.
- Canvas muestra en una ventana aparte documentos, aplicaciones y diapositivas para editarlos juntos. Puedes corregir solo una parte y volver a versiones anteriores.
- En una aplicación de Canvas en la que varias personas comparten datos, cualquiera que reciba el enlace puede ver y modificar los datos. En las aplicaciones que te envíen otras personas, no introduzcas contraseñas ni datos de pago.
- Las imágenes se crean con Nano Banana y se corrigen conversando. Para crearlas hay que tener 13 años y, para llegar a modificarlas, 18 o más.
- El vídeo (Gemini Omni) exige un plan de pago. Para las canciones de duración completa de música (Lyria) hay que cambiar el modelo a Pro.
- Los contenidos creados con Gemini llevan una marca oculta (SynthID). En Corea, solo AI Ultra puede quitar la marca de agua visible.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Upload | Subir (carga) | Subir al servicio un archivo de tu dispositivo |
| Canvas | Canvas | Función que muestra en una ventana aparte un documento o una aplicación para editarlos junto con Gemini |
| Infographic | Infografía | Material de una página que organiza la información con imágenes y gráficos |
| Nano Banana | Nano Banana | Modelo de Gemini para crear imágenes |
| Gemini Omni | Gemini Omni | Modelo de Gemini para crear vídeos |
| Lyria | Lyria | Modelo de Gemini para crear música |
| Watermark | Marca de agua | Marca que indica quién lo creó y con qué |
| SynthID | SynthID | Marca que se oculta dentro de los contenidos creados con una IA de Google |

<ChapterDone :chapter="304" />

Siguiente capítulo: [Capítulo 5. Memoria y personalización](05-memory.md)

[^screen]: Comprobado directamente en la pantalla web de Gemini (Google AI Pro, en coreano) con una conversación de práctica (la conversación se borró después de la captura). La ventana de documento de Canvas se abre dentro de la conversación y los botones de arriba son «Cambios guardados» (변경사항이 저장됨), «Versión anterior» (이전 버전), «Versión siguiente» (다음 버전), «Exportar» (내보내기), «Compartir» (공유), «Pantalla completa» (전체 화면) y «Cerrar» (닫기); aviso de la primera apertura: «Edita directamente o con Gemini: haz clic en cualquier lugar para escribir y editar directamente, o selecciona texto para pedirle cambios a Gemini» (직접 또는 Gemini로 수정 — 아무 곳이나 클릭하여 직접 입력하고 수정하거나, 텍스트를 선택하여 Gemini에게 변경을 요청하세요.). El elemento Canvas es un elemento de menú que se activa y desactiva, y al activarlo aparece la marca «Canvas» en el cuadro de entrada. Pantalla «Imágenes» (이미지): "Prueba una plantilla o describe tu idea en el chat. Se crea con el modelo Nano Banana." (템플릿을 사용해 보거나 채팅으로 아이디어를 설명하세요. Nano Banana 모델로 만듭니다.), cuadro de entrada «Describe la imagen» (이미지를 설명하세요), «Relación de aspecto» (가로세로 비율) y, en la primera apertura, una ventana de aviso «Usa Nano Banana 2» (Nano Banana 2 사용). Menú del «+» («Subir y herramientas» (업로드 및 도구)): «Subir archivo» (파일 업로드), «Añadir archivo desde Drive» (Drive에서 파일 추가), «Más formas de subir» (업로드 더보기), «Crear imagen» (이미지 만들기), «Crear vídeo» (동영상 만들기), «Crear música» (음악 만들기), «Más herramientas» (도구 더보기) → «Canvas». Menú lateral «Imágenes» (이미지) y «Biblioteca» (라이브러리). En el menú «Ajustes» (설정) no se veía «Marca de agua en los medios» (미디어 워터마크) (cuenta Pro). (consultado el 2026-10-31)
[^files]: Ayuda de Google, «Upload & analyze files in Gemini Apps» (versión en coreano, «Gemini 앱에서 파일 업로드하고 분석하기»). "You can upload documents, spreadsheets, notebooks, photos, videos, and more to Gemini Apps to get answers, summaries, and insights about your content." / "To add files from your Drive, you need to have Keep Activity on and connect Google Workspace to Gemini Apps." / "Up to 10 files (subject to availability) can be uploaded in the same prompt. When uploading a folder, each file inside will count towards this limit." / "Each video can be up to 2 GB. All other supported file types can be up to 100 MB." / "Total video length can be up to 5 minutes. Upgrade to Google AI Pro or Google AI Ultra to extend total upload length to 1 hour." / "Total audio length can be up to 10 minutes. Upgrade to Google AI Pro or Google AI Ultra to extend total upload length to 3 hours." / "You can ask the Gemini web app to create a chart based on your uploaded spreadsheet(s), zoom in to explore the chart, and customize the chart for your needs." / "This limit is independent from your Google Drive or Google Workspace storage limit." / "Important: Chats or Gems with uploaded files such as videos, photos, or files from Google Drive or NotebookLM take up more storage space in Gemini Apps." / "There are rolling limits for how much you can upload and analyze files in a period of time. After some time, the limit will reset, and you will be able to upload and analyze files again." / "For better results, upload smaller files with less content, or upgrade to Google AI Pro or Google AI Ultra for a larger 1 million token context window." Nombres en pantalla en coreano: «Elimina datos para subir el archivo» (파일을 업로드하려면 데이터를 삭제하세요) y «Actividad» (활동). https://support.google.com/gemini/answer/14903178 (consultado el 2026-10-31)
[^canvas]: Ayuda de Google, «Create docs, apps & more with Canvas» (versión en coreano, «Canvas로 문서, 앱 등 만들기»). "You can collaborate with Gemini in Canvas to create or edit a doc, app, slides, or code. You can also turn your creation into an Audio Overview, quiz, or other format." / "Tip: To have Gemini use a specific format or document type, like a slide deck, include this instruction in your prompt." / "You can use the prompt text box to ask Gemini to make updates to your app or directly edit the code. Changes in Canvas are auto-saved." / "To view your saved versions, at the top, click Previous Version  or Next Version ." / "To open text in a new Google Doc: Click Export to Docs." / "To find errors and logs from the preview, at the top right of the Canvas panel, click Show console ." / "Use the cursor to select the section that you want to edit." / "Important: To add AI to your app, you must be signed in to Gemini Apps and be 18 or over." / "To adjust the tone of text: Click Change tone  and select how casual or formal you want it to be." / "To generate an infographic, click Infographic ." / "Create something based on a Canvas doc Important: For now, this feature isn’t available to users under 18." / "To open slides in Google Slides: Click Export to Slides. You can also choose to export slides as a PDF." / "Anyone with that public link can view and edit data associated with the app." / "Shared links only open in gemini.google.com. You can’t open shared Canvas content in the Gemini mobile app." Nombres en pantalla en coreano: «Versión anterior» (이전 버전), «Versión siguiente» (다음 버전), «Mostrar consola» (콘솔 표시), «Cambiar longitud» (길이 변경), «Cambiar tono» (어조 변경) y «Exportar a Docs» (Docs로 내보내기). https://support.google.com/gemini/answer/16047321 (consultado el 2026-10-31)
[^canvas-safety]: Ayuda de Google, «Canvas safety & security in Gemini Apps» (versión en coreano, «Gemini 앱의 Canvas 안전 및 보안»). "When you create an app with Canvas that requires persistent data storage, Gemini Apps creates a firestore database instance for you." / "Anyone with the public link to a multi-user app can view and edit all data associated with the app." / "Any info that you share with the app is visible to the app creator and may be visible to anyone else with the public link." / "Use caution if the app requests access to your device’s camera and microphone." / "If the app will share data between users, the data is in a public database and can be seen or edited by anyone with a public link to the app." / "Be extremely wary of any app that asks you for sensitive info like passwords or payment details." / "Do not download apps created or shared by untrustworthy sources." / "If you get a public link to a Canvas app that you feel is unsafe, you can report unsafe apps through the link at the bottom of the page." https://support.google.com/gemini/answer/16419134 (consultado el 2026-10-31)
[^image]: Ayuda de Google, «Generate & edit images with Gemini Apps» (versión en coreano, «Gemini 앱으로 이미지 생성 및 수정하기»). "For paid subscribers, Nano Banana Pro is also available to regenerate images." / "To generate and edit images, you must be 18 or over" / "To generate images, you must be 13 (or the applicable age in your country) or over." / "Download images at at 2K resolution with a Google AI plan or at 1K without an AI plan." / "Nano Banana Pro: Available with a Google AI Plan, this option is available when you have the Gemini model set to Pro and want  to redo an image when additional detail is needed." / "Choose a template or enter your prompt to generate an image with Nano Banana 2." / "On the top left, click Open Sidebar   Library ." / "Upload multiple images and ask Gemini to create a new image based on your uploaded images." / "If you reach your daily quota of Nano Banana 2 images, you can’t redo any additional images with Nano Banana Pro." / "Start your prompt with words like draw, generate, and create." / "Gemini Apps may remove images for prompts when our systems detect a possible violation of Google's Terms of Service, including the Prohibited Use Policy." Nombres en pantalla en coreano: «Imágenes» (이미지), «Biblioteca» (라이브러리) y «Chat» (채팅). https://support.google.com/gemini/answer/14286560 (consultado el 2026-10-31)
[^video]: Ayuda de Google, «Generate videos with Gemini Apps» (versión en coreano, «Gemini 앱으로 동영상 생성하기»). "Gemini Omni makes creating and editing videos as easy as having a conversation." / "Blend text, images, and video to bring your ideas to life" / "You must have rights to any images that you upload." / "To use this feature with a personal account, you must have a Google AI plan." / "For text prompts, the default is Landscape. If you upload a reference image or video, the aspect ratio will match your uploaded content." / "In the text box, enter a prompt of the video you want to generate." / "You can upload one video and up to 5 images." / "While your video is being generated, you can’t interact with the same chat. You can start a new chat and come back to view your video later." / "Changing camera angles." / "Click Share on YouTube  or  Download video ." / "The violation of the Prohibited Use Policy or the rights of others could result in the termination of your account." Nombre en pantalla en coreano: «Crear vídeo» (동영상 만들기). https://support.google.com/gemini/answer/16126339 (consultado el 2026-10-31)
[^music]: Ayuda de Google, «Generate music with Gemini Apps» (versión en coreano, «Gemini 앱으로 음악 생성하기»). "Describe the track you have in mind, Gemini Apps will create music and lyrics." / "Be 18 years of age or older." / "Have Keep Activity on." / "Choose whether your track has vocals or not." / "Select a genre for your track." / "Important: To create a full track, switch the model to “Pro”" / "At the bottom of the text box, tap Upload & tools   Create music ." / "Define the length of your track by choosing between short (about 1 minute) or full (about 2-3 minutes)." / "Each generated track will have an embedded digital watermark to help identify it as AI-generated." / "There are limits for how many tracks you can create with Lyria. You’ll get a notification when you’ve exceeded the limit." / "Start your prompt with words like write, compose, or create." Nombre en pantalla en coreano: «Crear música» (음악 만들기). https://support.google.com/gemini/answer/16901237 (consultado el 2026-10-31)
[^watermark]: Ayuda de Google, «Manage watermark settings in Gemini Apps» (versión en coreano, «Gemini 앱에서 워터마크 설정 관리하기»). "This setting controls visible watermarks across all visual media you create with Gemini, including images, videos, and music." / "If you are in India, South Korea, or Vietnam, you'll only see this setting if you have an AI Ultra subscription." / "Otherwise you'll automatically see visible watermarks applied to all visual media you create with Gemini Apps." / "Music: The watermark will appear on the video or visual player that is created with your music track." / "This setting only controls the visible watermark. It doesn’t affect SynthID watermarks or Content Credentials for media you create with Gemini Apps." / "SynthID: All AI-generated media created or edited with Gemini Apps includes an invisible SynthID watermark." Nombre en pantalla en coreano: «Marca de agua en los medios» (미디어 워터마크). https://support.google.com/gemini/answer/17405358 (consultado el 2026-10-31)
[^verify]: Ayuda de Google, «Verify AI-generated images, videos, and audio» (versión en coreano, «AI 생성 이미지, 동영상, 오디오 확인하기»). "You can only choose a single image, video, or audio file to verify at a time, and it should have a file size of 100 MB or less." / "Content Credentials: A technology that acts like a digital passport, documenting the digital content's origin and history, and is used for both AI and non-AI content." / "Videos need to be less than 90 seconds each, and audio files need to be less than 1 hour each" / "If you're taking a screenshot of an image to verify, make sure to crop tight around the image to get maximum accuracy, and don’t upload a collage of multiple distinct images." / "While other companies have started to adopt SynthID watermarks, Gemini can currently only recognize content created by Google AI tools." / "If a SynthID watermark isn’t detected, it means the image or video wasn’t created or edited by Google AI, but it could have been created by other AI systems." / "Tell you if an image, video, or audio file is definitely AI-generated, but you can use the origin and history information with the content itself to make informed decisions." / "There’s a usage quota of approximately 10 image checks, 10 video checks (up to 5 minutes total), and 10 audio checks (up to 3 hours total) within any 24-hour rolling window." / "Reverse image search: Use reverse image search tools (e.g., Google Images) to find original sources or similar images." https://support.google.com/gemini/answer/16722517 (consultado el 2026-10-31)
