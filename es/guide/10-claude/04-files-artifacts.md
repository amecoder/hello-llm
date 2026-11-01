# Capítulo 4. Archivos y artefactos: enseñar y recibir cosas hechas

> **En una línea**: los materiales difíciles de explicar con palabras los **subes como archivo** para enseñarlos, y los documentos, tablas y presentaciones que necesites los puedes pedir **como archivo**.
> Los resultados que merece la pena enseñar a otras personas se abren junto a la conversación como **artefactos**, y se pueden corregir y compartir. Eso sí, Claude no crea fotos ni ilustraciones.

Las pantallas son de la versión web de octubre de 2026. Se están desplegando por turnos la nueva pantalla de Claude y la nueva pantalla de configuración, así que puede variar según la pantalla. En la aplicación del móvil funcionan algunas funciones distintas.

## Subir archivos

Pulsa el botón «+» abajo a la izquierda del cuadro de escritura y elige ① «Subir o añadir archivos» (파일 업로드 또는 추가). Con el teclado es Ctrl+U.[^screen] También puedes arrastrar el archivo al cuadro de escritura. Las fotos se pueden copiar y pegar directamente.[^upload]

![Pantalla con el menú «+» del cuadro de escritura desplegado. Con números rojos: ① «Subir o añadir archivos» (파일 업로드 또는 추가), ② «Skills», ③ «Añadir conectores» (커넥터 추가), ④ «Sistema de diseño» (디자인 시스템), ⑤ «Añadir plugins» (플러그인 추가), ⑥ «Memoria» (메모리)](../../../guide/10-claude/assets/shot-02-plus-menu-marked.png)

Es la pantalla del plan gratuito. **Para subir archivos solo necesitas ①.**[^screen][^upload-name] ⑥ «Memoria» lo verás en el [capítulo 3](03-chats.md) y en el [capítulo 5](05-memory.md).

Esto es lo que se puede subir.[^upload]

| Tipo | Formato |
|---|---|
| Fotos | JPEG, PNG, GIF, WebP |
| Documentos | PDF, Word (DOCX), texto (TXT), RTF, ODT, EPUB, HTML |
| Tablas | Excel (XLSX), CSV |
| Otros | JSON |

Los archivos de Excel (XLSX) solo se pueden subir si en la configuración está activado «Ejecución de código y creación de archivos» (코드 실행 및 파일 생성). Esa opción la verás en el apartado siguiente.[^upload]

En vez de subir solo el archivo y decir «mírame esto», escribe también qué quieres. Así la respuesta será mucho más útil ([capítulo 4 de la etapa 1](../00-common/04-prompt-basics.md#los-5-elementos-de-un-buen-prompt)).

```
El PDF adjunto es la factura de gastos de comunidad de mi edificio.
Busca los tres conceptos que más han subido respecto al mes pasado, muéstralos en una tabla y escribe en una línea por qué pueden haber subido.
Marca como «suposición» lo que no sea seguro.
```

::: details Más o menos así será la respuesta (ejemplo; pulsa para desplegar)
Este ejemplo lo ha preparado esta guía. La respuesta real depende del servicio y cambia cada vez.

> Estos son los tres conceptos que más han subido respecto al mes pasado.
>
> | Concepto | Mes pasado | Este mes | Por qué ha subido |
> |---|---|---|---|
> | Calefacción | ○○ wones | ○○ wones | Con el frío puede que se haya usado más la calefacción (suposición) |
> | Electricidad | ○○ wones | ○○ wones | Puede que haya aumentado el consumo eléctrico de las zonas comunes (suposición) |
> | Mantenimiento y reparaciones | ○○ wones | ○○ wones | (el motivo que figura en el aviso de la factura) |

**Comprueba que la has recibido bien**: ¿han llegado en una tabla los tres conceptos que más han subido? ¿Los importes de la tabla coinciden con mi factura? ¿Hay una línea con el motivo de cada uno y, donde la factura no lo justifica, se ha añadido «suposición»?

:::

Esto conviene saber.[^upload]

- **En una conversación se pueden subir hasta 20 archivos.**
- **Los PDF pueden tener hasta 1000 páginas.** Si tienen 100 páginas o menos, se leen también las imágenes y los gráficos. A partir de la página 101 solo se lee el texto. Si las imágenes del PDF son importantes, recorta y sube solo las páginas que necesitas.
- **Los documentos que no son PDF se leen solo como texto.** No se pueden leer las imágenes metidas dentro de un archivo de Word. Si las imágenes son importantes, conviértelo a PDF y súbelo.
- **Las fotos conviene que midan 1000 píxeles o más de ancho y de alto.**
- **Indica las páginas del PDF con el número de página de la pantalla.** No el número impreso en el documento, sino el que muestra el programa con el que ves el PDF.

Si un archivo grande no se sube, súbelo dividido en partes.

::: details ¿Hasta qué tamaño puede tener un archivo? (pulsa para desplegar)
El límite de tamaño por archivo está escrito de forma distinta en cada documento. La ayuda de subir archivos dice 500 MB por archivo.[^upload] La ayuda de la función de crear archivos dice 30 MB por archivo, tanto para subir como para descargar.[^create]
:::

> Los archivos con datos personales, como un documento de identidad, un contrato o un historial médico, tápalos o quítalos antes de subirlos. El principio se vio en el [capítulo 9 de la etapa 1](../00-common/09-safety.md#_2-datos-personales-y-secretos-—-pensarlo-antes-de-escribir).

<Quiz id="ch204-upload" />

## Recibir archivos hechos: Excel, Word, PowerPoint y PDF

Claude no solo responde con texto: también puede **crear archivos**. Puedes descargarlos o guardarlos directamente en Google Drive.[^create]

| Archivo que crea | Ejemplo |
|---|---|
| Excel (.xlsx) | Libro de gastos, calendario |
| Word (.docx) | Aviso, informe |
| PowerPoint (.pptx) | Presentación |
| PDF | Documento para imprimir |
| Imagen PNG | Gráfico dibujado con números |

Funciona en todos los planes, incluido el gratuito. Funciona en la web, en el escritorio y en la aplicación del móvil.[^create] También puede crear hojas de cálculo con fórmulas que funcionan y presentaciones que se abren con PowerPoint.[^new]

**Antes, comprueba que la opción está activada.** En los planes personales (Free, Pro y Max) viene activada desde el principio.[^create] Si está desactivada, actívala en «Configuración > Funciones» (Capabilities), en ④ «Ejecución de código y creación de archivos».[^create][^create-name]

![Pantalla «Configuración > Funciones» (기능). Con números rojos los interruptores: ① «Cambiar de modelo si se marca un mensaje» (메시지가 플래그 지정되면 모델 전환), ② «Artefactos» (아티팩트), ③ «Visualizaciones en el chat» (채팅 내 시각화), ④ «Ejecución de código y creación de archivos» (코드 실행 및 파일 생성)](../../../guide/10-claude/assets/shot-09-settings-capabilities-marked.png)

Es la pantalla del plan gratuito. **Los números rojos son los mismos de la tabla de abajo.**[^screen]

| N.º | Nombre | Qué hace |
|---|---|---|
| ① | «Cambiar de modelo si se marca un mensaje» | Si salta un mecanismo de seguridad, continúa con otro modelo |
| ② | «Artefactos» | Crea el resultado en un panel junto a la conversación |
| ③ | «Visualizaciones en el chat» | Dibuja gráficos y diagramas dentro de la conversación |
| ④ | «Ejecución de código y creación de archivos» | Crea documentos, tablas, presentaciones y PDF |

Debajo de ② «Artefactos» pone "코드 실행 및 파일 생성에 필요" (necesario para la ejecución de código y la creación de archivos). Debajo de ④ pone "Skills 사용에 필요합니다" (es necesario para usar Skills).[^screen] Para recibir archivos creados, solo tienes que comprobar que ④ está activado.

Al pedirlo, escribe con detalle la estructura, el contenido y el formato que quieres.[^create]

```
Hazme una tabla de Excel para anotar los gastos mensuales de la casa.
Los conceptos serán comida, transporte, telefonía y otros, y abajo del todo quiero que se calculen automáticamente el total de cada concepto y el total del mes.
```

También puedes subir un archivo que ya tengas y pedir que lo corrija.

```
El archivo de Word adjunto es el aviso de mi club de lectura del barrio.
Cambia la fecha al sábado 14 de noviembre a las 2 de la tarde, añade al final una lista de lo que hay que traer y vuelve a crearme el archivo de Word.
```

Esto conviene saber.

- **Crear archivos suele gastar más uso que una conversación normal.**[^create] El límite de uso lo viste en el [capítulo 1](01-getting-started.md). Las preguntas cortas recíbelas como texto y pide un archivo solo cuando de verdad lo necesites.
- **Comprueba los números que recibas.** Claude calcula, pero los cálculos complejos o importantes vuélvelos a comprobar con otro programa de cálculo o a mano.[^math] Suma tú mismo aunque sea unos pocos totales.
- **Puede haber instrucciones ocultas en los archivos que subes o en las páginas web.** Mientras uses esta función, vigila a Claude y párale si usa materiales que no vienen a cuento.[^create] Las instrucciones ocultas se trataron en el [capítulo 9 de la etapa 1](../00-common/09-safety.md#_4-instrucciones-ocultas-—-inyeccion-de-instrucciones-prompt-injection).

<Quiz id="ch204-create" />

## Artefactos: resultados que se abren junto a la conversación

Un **artefacto** (artifact, un resultado que se ha creado) es un resultado que merece la pena enseñar a otras personas: un documento, una presentación, un diseño, una herramienta pequeña, etc. Se abre en un panel junto a la conversación, y puedes corregirlo, volver a abrirlo más tarde o compartirlo con otras personas.[^artifacts]
Funciona en todos los planes, incluido el gratuito. Tiene que estar activado «Ejecución de código y creación de archivos» del apartado anterior.[^artifacts]

Es fácil confundirlo con la creación de archivos del apartado anterior. La diferencia es cómo lo recibes.[^academy-artifacts]

| | Artefacto | Crear archivos |
|---|---|---|
| Dónde se abre | Dentro de Claude, en el panel junto a la conversación | Lo descargas y lo abres en otro programa |
| Cómo se comparte | Con un enlace | Enviando el archivo |

Si el resultado lo vas a seguir corrigiendo dentro de Claude o lo vas a compartir con un enlace, recíbelo como artefacto. Si necesitas el archivo de Word o de Excel tal cual, usa la creación de archivos. Un artefacto también se puede exportar después a un archivo de Word o PDF (ver más abajo «Exportar como archivo»).[^artifacts]

![Pantalla tras enviar el mensaje del aviso de abajo. En la conversación del centro aparece la tarjeta «Aviso del club de lectura · Claude Design · Solo yo» (독서 모임 안내문 · Claude Design · 나만), y en el panel de la derecha se abre un aviso en A4 con la fecha, la hora y el lugar en letra grande](../../../guide/10-claude/assets/shot-16-design-panel.png)

*Es la pantalla creada con el mensaje del aviso de abajo. Arriba en el panel de la derecha hay un botón de descarga y los botones «Fill» y «Fit» (tamaño de vista). «Solo yo» (나만) en la tarjeta significa que por ahora solo lo puedo ver yo. La conversación y el artefacto se borraron después de hacer la captura.*[^screen-design]

Hay tres maneras de crearlo.[^artifacts]

- Se lo pides simplemente en la conversación.
- Pulsas «Salida» (출력; Output) en el cuadro de escritura y eliges una plantilla (un modelo para documentos, presentaciones, etc.).
- En la pestaña «Artefactos» del menú lateral, eliges una plantilla.

![Pantalla al pulsar «Artefactos» en el menú lateral. Con números rojos: ① las pestañas de arriba «Todos» (전체), «Mis elementos» (내 항목) y «Compartidos conmigo» (공유받음), ② las tarjetas «Documento» (문서), «Diapositivas» (슬라이드) y «Diseño» (디자인) bajo «Crear algo nuevo» (새로운 무언가 만들기)](../../../guide/10-claude/assets/shot-10-artifacts-marked.png)

Es la pantalla del plan gratuito. También en una cuenta gratuita aparecen «Documento», «Diapositivas» y «Diseño» en ② «Crear algo nuevo». Las tres llevan la marca «Nuevo» (신규).[^screen] Estas tarjetas son las plantillas de la tercera manera. Con las pestañas de ① separas lo que has creado tú de lo que otros han compartido contigo.[^screen]

```
Hazme un aviso de una página para los miembros de mi club de lectura del barrio.
La reunión es el sábado 14 de noviembre a las 2 de la tarde, en la sala de seminarios de la segunda planta de la biblioteca del distrito, y el libro de este mes es «El Principito».
Muchos de los lectores tienen más de 60 años, así que usa letra grande y frases cortas.
```

Si quieres recibirlo como artefacto, pide **el resultado, no el contenido**.[^academy-artifacts]

- Ejemplo mejorable: «Ordéname los resultados del tercer trimestre».
- Ejemplo mejor: «Hazme con los resultados del tercer trimestre un documento de una página para que lo vean los jefes de equipo».

La diferencia es una sola. El ejemplo mejor dice el nombre de lo que hay que crear. Si de verdad quieres un artefacto, añade «hazlo como artefacto».[^academy-artifacts]

**Di también quién lo va a usar.** En el ejemplo del aviso de arriba, es lo que se hace al escribir «muchos de los lectores tienen más de 60 años». «Un diagrama de flujo para los empleados nuevos» y «un diagrama de flujo para el equipo técnico» salen distintos.[^academy-artifacts]

**Conviene crearlo después de conversar lo suficiente.** El resultado sale mejor cuando Claude ya ha entendido el problema.[^academy-artifacts] Prueba a pedir la presentación cuando hayáis terminado juntos el análisis.

Todos los artefactos que creas se guardan en la pestaña «Artefactos» del menú lateral. Puedes volver a encontrarlos desde cualquier conversación.[^artifacts]

**Corregir solo lo que señalas.** En un artefacto de documento, selecciona con el ratón el texto que quieres cambiar y pulsa «Editar con Claude» (Claude로 편집; Edit with Claude). Luego escribe lo que quieres.[^artifacts] No hace falta explicar con palabras de qué parte se trata.

**Probar en otra dirección.** Si corriges un mensaje anterior y lo vuelves a enviar, se crea otra rama de la conversación. Esa rama tiene sus propios artefactos, así que no pierdes lo que habías hecho antes.[^artifacts]

**Exportar como archivo.** Con «Exportar» (내보내기; Export) lo recibes como un archivo que se puede abrir en otros programas.[^artifacts]

| Lo que has creado | Formatos a los que se puede exportar |
|---|---|
| Documento | Word, PDF, Markdown, Documentos de Google |
| Presentación | PowerPoint, PDF, Presentaciones de Google |
| Animación (beta solo para Team y Enterprise) | Vídeo MP4 |

Esto conviene saber.[^artifacts]

- **Si sale un error, pulsa «Intentar corregir con Claude» (Claude로 수정 시도).** Eso sí, no hay garantía de que se arregle.
- **En la aplicación del móvil puedes pedir, ver y corregir.** Los ajustes de compartir se cambian en la web o en la aplicación de escritorio.
- **Lo que creaste antes del 16 de septiembre de 2026 son «artefactos heredados» (레거시 아티팩트).** Se pueden seguir usando, pero no se pueden crear otros nuevos de esa forma.

<Quiz id="ch204-artifacts" />

## Compartir un artefacto

Un artefacto es **al principio solo para ti**. No lo ve nadie hasta que tú lo compartes.[^share]

1. Abre el artefacto y pulsa «Compartir» (공유).
2. Elige quién podrá verlo. En los planes Pro y Max eliges entre «Solo tú» (본인만) y «Cualquiera con el enlace» (링크가 있는 누구나).
3. Copia el enlace y envíalo.

<!-- Falta captura de pantalla: ventana «Compartir» de un artefacto, con «Solo tú», «Cualquiera con el enlace» y la elección de permisos (web) -->

Los permisos son de tres niveles. Según el tipo de artefacto, solo se pueden elegir algunos.[^share]

| Permiso | Qué se puede hacer |
|---|---|
| «Puede ver» (볼 수 있음) | Abrirlo y leer los comentarios |
| «Puede comentar» (댓글 작성자) | Además de lo anterior, escribir comentarios y descargar archivos |
| «Puede editar» (편집 가능) | Además de lo anterior, modificarlo |

Esto conviene saber.[^share]

- **Quien lo abre también necesita una cuenta de Claude.** Sin cuenta, no puede abrirlo aunque tenga el enlace. Es una diferencia con el enlace público de las conversaciones (capítulo 3).
- **Para dejar de enseñarlo**, cambia en «Compartir» a «Solo tú» (Pro y Max).
- **Trata un artefacto que te envía otra persona como un archivo de un desconocido.**

::: details Si tienes el plan gratuito (pulsa para desplegar)
Los documentos no coinciden en si en el plan gratuito se puede compartir con «Cualquiera con el enlace». Sigue las opciones que veas en la ventana «Compartir» de tu pantalla.
:::

<Quiz id="ch204-share" />

## Respuestas para ver: tarjetas, preguntas con opciones y diagramas

Según la pregunta, Claude a veces te da la respuesta en forma **visual** en vez de texto. No hay nada que activar. Lo decide Claude, así que pregunta como siempre.[^visual]

**Tarjetas del tiempo y de recetas.** Si preguntas por el tiempo o por una receta, puede responder con una tarjeta. Tiene que estar activada la búsqueda web.[^visual] En la pantalla nueva no hay interruptor de búsqueda web: Claude busca por su cuenta cuando hace falta.[^new][^old-search] En la tarjeta de recetas puedes cambiar el número de raciones y las unidades.[^visual] La tarjeta del tiempo solo se ve en la web y en el escritorio; en el móvil sale como texto.[^visual]

**Responder eligiendo.** Cuando Claude te hace una pregunta, puede mostrarte opciones como una pregunta tipo test, elegir varias o ordenar por preferencia. Puedes responder pulsando o simplemente escribiendo.[^visual]

**Diagramas y gráficos.** Si quieres ver una explicación en forma de imagen, pídelo así. Dibuja dentro de la conversación diagramas de flujo, gráficos e imágenes con las que puedes interactuar. A esta función se le llama **visualizaciones personalizadas** (Custom visuals). Está en beta (versión de prueba antes del lanzamiento oficial) y funciona en la web y en la aplicación de escritorio.[^custom] En «Configuración > Funciones» también está el interruptor ③ «Visualizaciones en el chat». Su descripción es "Claude가 대화 중에 바로 인터랙티브 시각화, 차트, 다이어그램을 생성할 수 있도록 허용합니다" (permite que Claude cree directamente en la conversación visualizaciones interactivas, gráficos y diagramas).[^screen]

```
Dibújame en un diagrama de flujo, paso a paso, el orden para preparar el kimchi de invierno (gimjang), desde salar el repollo hasta meterlo en el recipiente.
```

![Diagrama de flujo del gimjang dibujado dentro de la conversación. La línea «salar el repollo → lavar el repollo» y la línea «preparar los ingredientes del condimento → mezclar el condimento» se encuentran en «poner el relleno entre las hojas del repollo», en el centro, y al final está «meterlo en el recipiente de kimchi»](../../../guide/10-claude/assets/shot-16-custom-visual.png)

*Es la pantalla al enviar el mensaje de arriba en un chat incógnito. Aunque pasé el ratón por encima de la imagen, no aparecieron los menús «Copiar como imagen» ni «Guardar como artefacto».*[^screen-design]

Una visualización personalizada es **un dibujo temporal que no se guarda aparte**, como un dibujo en una pizarra. La ayuda indica los tres menús siguientes para conservarlo. En la pantalla de arriba no se veían estos menús, así que comprueba primero si están en la tuya.[^custom][^screen-design]

- «Copiar como imagen» (이미지로 복사): lo copia como imagen para pegarlo en notas o en una presentación.
- «Descargar» (다운로드): lo descarga como archivo .svg o .html.
- «Guardar como artefacto» (아티팩트로 저장): lo convierte en artefacto para seguir corrigiéndolo.

Las visualizaciones personalizadas no se ven en la aplicación del móvil (iPhone y Android).[^custom]

<Quiz id="ch204-visuals" />

## No crea fotos ni ilustraciones

Claude **no crea fotos ni ilustraciones** como lo hacen las IA que dibujan (herramientas de generación de imágenes).[^images] Aunque le pidas «un dibujo de un perrito sonriendo en la playa», no esperes un dibujo como el que haría una IA de dibujo.

En cambio, hay cosas que sí puede hacer.

- **Crea diagramas y gráficos.** Son las visualizaciones personalizadas del apartado anterior.[^images] Los gráficos de números también se pueden recibir como archivo de imagen PNG.[^create]
- **Sí puede mirar y describir las fotos que subes.** Por ejemplo, ordenar en una tabla la foto de un recibo.[^images]

Compara un ejemplo mejorable con otro mejor.

- **Ejemplo mejorable**: «Dibújame un gatito mono para promocionar mi tienda».
- **Ejemplo mejor**: «Dibújame en un gráfico de barras las ventas de mi tienda de los últimos 6 meses».

La diferencia es una sola. El primero es una ilustración, que le toca a una IA que dibuja, y el segundo es un gráfico, que sí puede crear Claude. Si de verdad necesitas una foto o una ilustración, usa otro servicio que cree imágenes. Por ejemplo, ChatGPT crea imágenes ([capítulo 4 de ChatGPT](../11-chatgpt/04-files-images.md)).

<Quiz id="ch204-images" />

## Claude Docs: documentos para escribir juntos

**Claude Docs** son documentos que corriges junto con Claude y con otras personas. Claude escribe el borrador delante de ti. Antes de escribir te hace las preguntas que tenga y deja comentarios explicando por qué lo ha escrito así.[^docs]
Funciona en todos los planes, incluido el gratuito, y viene activado desde el principio.[^docs] Los documentos que creas se guardan en la pestaña «Artefactos».

Así se empieza.[^docs]

- Le pides en la conversación que cree un documento.
- Escribes `/docs` al principio del mensaje.
- Eliges «Salida» → «Documento» en el cuadro de escritura.

Una buena petición incluye **para qué es el documento, quién lo va a leer y qué tratará**.[^docs]

- **Ejemplo mejorable**: «Escríbeme un documento con el plan del viaje familiar».
- **Ejemplo mejor**: incluye la finalidad, los lectores y el contenido, como aquí.

```
/docs Hazme un documento con el plan del viaje familiar a Jeju en diciembre.
Finalidad: lo voy a subir al grupo de la familia para recoger opiniones.
Lectores: mis padres y las familias de mis hermanos, 8 personas en total.
Contenido: itinerario de 2 noches y 3 días, dos alojamientos candidatos, gasto estimado y lo que tiene que preparar cada uno.
```

Hay tres diferencias. El ejemplo mejor incluye para qué sirve, quién lo leerá y qué se va a incluir. Son las tres cosas que lleva una buena petición.[^docs]

Esto conviene saber.[^docs]

- **Para pedir una corrección, menciona a `@Claude` en un comentario.** Después de corregir te explica el motivo.
- **Con «Exportar» lo puedes recibir en Word, PDF, Markdown o Documentos de Google.**
- **Los gráficos del documento no se actualizan solos.** Si cambian los números, pídele que los vuelva a hacer.
- **Si lo eliminas, no se puede recuperar.** No hay papelera. Antes de borrar, descárgalo con «Exportar».

<Quiz id="ch204-docs" />

## Usarlo dentro de Documentos, Hojas de cálculo y Presentaciones de Google

Si ya trabajas con Documentos o Hojas de cálculo de Google, también puedes llamar a Claude dentro de ese archivo. Es una extensión llamada **Claude for Google Workspace**. En Documentos, Hojas de cálculo y Presentaciones de Google aparece un panel de Claude (barra lateral). Está en beta y funciona en los planes de pago, desde Pro.[^gws]

1. Instala Claude desde Google Workspace Marketplace (la tienda de aplicaciones de Google). Con instalarlo una vez, lo usas en documentos, hojas de cálculo y presentaciones.
2. Abre el archivo y pulsa «Extensiones > Claude > Abrir Claude».

<!-- Falta captura de pantalla: pantalla con la barra lateral de Claude abierta a la derecha de una hoja de cálculo de Google (hoja de ejemplo) -->

```
Suma todos los importes de la columna B de esta hoja y pon el total en la última celda. No toques las demás celdas.
```

Esto conviene saber.[^gws]

- **Solo lee el archivo que tienes abierto en ese momento.**
- **Al principio te pregunta antes de modificar.** El modo por defecto es «Preguntar antes de editar». Puedes cambiarlo a «Aceptar todas las ediciones», pero al principio confírmalas una por una.
- **Lo que corrige queda en el historial de versiones con tu nombre.** Si no te gusta, vuelve a una versión anterior en «Archivo > Historial de versiones».
- **No puede compartir archivos ni cambiar permisos.** Aunque se lo pidas, no lo hace.
- **No funciona en archivos de Word, Excel ni PowerPoint.** Antes conviértelos a un formato de Google.
- **No cierres el panel de Claude mientras trabaja.** Si lo cierras, se detiene lo que estaba haciendo. Una tarea dura hasta 6 minutos, así que divide los trabajos grandes.
- **Funciona en Chrome, Edge y Safari.** En Firefox no funciona.

<Quiz id="ch204-google" />

## Ver más en vídeo

Es un vídeo de presentación hecho por la propia empresa. La pantalla y los nombres de las funciones pueden ser distintos de los de este capítulo.

> El siguiente vídeo está en **inglés**. En los ajustes del vídeo de YouTube (la rueda dentada) → Subtítulos → **Traducción automática → español**, puedes verlo con subtítulos en español. El vídeo se reproduce directamente dentro de esta página.

**[Meet Claude Slides, Claude Design and Claude Docs](https://www.youtube.com/watch?v=To5nrYqvR44)** · Claude · Para quien quiera ver cómo se crean dentro de una conversación presentaciones, imágenes promocionales y documentos de una página (septiembre de 2026, 2 minutos)

<YouTube id="To5nrYqvR44" title="Meet Claude Slides, Claude Design and Claude Docs" />

## Pruébalo tú mismo

1. Haz una foto de un recibo que tengas en casa, súbelo con «+» → «Subir o añadir archivos» y pide «ordena en una tabla lo que pone» (tapa el nombre y el número de tarjeta).
2. Pídele la tabla de Excel de gastos de arriba y descárgala. Pon unos cuantos números en la tabla y comprueba que el total cambia bien.
3. Crea el aviso del club de lectura como artefacto y pídele que cambie la fecha. Si se abrió como artefacto de documento, selecciona la parte de la fecha y pulsa «Editar con Claude».
4. Envía «dibújame en un diagrama de flujo el orden del gimjang» y mira si el diagrama se dibuja dentro de la conversación. Si en la imagen ves el menú «Guardar como artefacto», púlsalo.

**Proyecto continuo** ([Preparar un club de lectura](../00-common/practice-kit.md)): sube el archivo de ejemplo minutes-last-meeting.txt y envía «sepárame en una tabla lo que se decidió, las tareas y lo que aún no se ha decidido. En las tareas pon el responsable y el plazo, y a las que no tengan plazo ponles "plazo por decidir"». El aviso del paso 3 hazlo con el contenido de memo-next-month.txt.

## Resumen

- Con «+» → «Subir o añadir archivos» subes fotos, documentos y tablas. Son 20 por conversación y los PDF hasta 1000 páginas.
- En un PDF se leen también las imágenes hasta la página 100, y después solo el texto. En los documentos que no son PDF solo se lee el texto.
- Puedes recibir archivos de Excel, Word, PowerPoint y PDF. Tiene que estar activado «Ejecución de código y creación de archivos», y gasta más uso.
- Un artefacto es un resultado que se abre junto a la conversación. Se reúne en la pestaña «Artefactos», se corrige con «Editar con Claude» y se recibe como archivo con «Exportar».
- Un artefacto al principio solo lo ves tú. Quien lo recibe también necesita una cuenta de Claude para abrirlo.
- Las visualizaciones personalizadas son dibujos temporales que no se guardan. Para conservarlas, cópialas, descárgalas o guárdalas como artefacto.
- Claude no crea fotos ni ilustraciones. Los diagramas y los gráficos sí.
- A Claude Docs se le pide incluyendo la finalidad, los lectores y el contenido. Si lo eliminas, no se puede recuperar.
- También se puede usar dentro de Documentos de Google (beta, desde Pro). Lo que corrige se deshace con el historial de versiones.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Upload | Subir | Pasar un archivo de tu dispositivo al servicio |
| Artifact | Artefacto | Resultado que se abre junto a la conversación y que merece la pena enseñar a otras personas |
| Template | Plantilla | Modelo para empezar un documento o una presentación |
| Export | Exportar | Recibirlo como un archivo que se puede abrir en otros programas |
| Custom visuals | Visualizaciones personalizadas | Diagramas y gráficos que se dibujan dentro de la conversación |
| Beta | Beta | Función que se está probando antes del lanzamiento oficial |
| Claude Docs | Claude Docs | Documento que corriges junto con Claude y con otras personas |
| Extension | Extensión | Programa pequeño que añade funciones a otro programa |
| Version history | Historial de versiones | Registro guardado de cómo ha ido cambiando un archivo |

<ChapterDone :chapter="204" />

Siguiente capítulo: [Capítulo 5. Memoria y personalización](05-memory.md)

[^screen]: Comprobado directamente en la pantalla web de Claude (plan gratuito, en coreano). "파일 업로드 또는 추가" (Subir o añadir archivos) / "코드 실행 및 파일 생성" (Ejecución de código y creación de archivos) / "코드 실행 및 파일 생성에 필요" (necesario para la ejecución de código y la creación de archivos) / "Skills 사용에 필요합니다" (es necesario para usar Skills) / "채팅 내 시각화" (Visualizaciones en el chat) / "새로운 무언가 만들기" (Crear algo nuevo) (consultado el 2026-10-26)
[^upload]: Ayuda de Anthropic, «Upload files to Claude». "Claude can work with the following document types:" / "Note: You must enable code execution and file creation in your account to upload XLSX files." / "Claude supports the following image formats:" / "Click the "+" button in the lower left corner of the chat box" / "You can also copy images and paste them from your clipboard into Claude." / "File size: 500MB per file" / "Number of files: Up to 20 files per chat" / "You can't upload PDFs over 1000 pages." / "For PDFs from 101 to 1000 pages, Claude processes text only and doesn't analyze visual elements." / "Claude extracts text only from these files. If they contain embedded images, Claude won't be able to read or interpret them." / "For images: Use images that are 1000x1000 pixels or larger." / "use the PDF page numbers as shown in your PDF viewer, not the page numbers printed on the document itself." https://support.claude.com/en/articles/8241126 (consultado el 2026-10-26)
[^create]: Ayuda de Anthropic, «Create and edit files with Claude». "Code execution and file creation is available to all Claude users (Free, Pro, Max, Team, and Enterprise) on the web, Claude Desktop, and Claude Mobile." / "Code execution and file creation is enabled by default" / "Be specific in your requests—describe the structure, content, and formatting you want." / "Enable file creation from Settings > Capabilities by toggling Code execution and file creation (called Create and edit files in the updated Settings layout) on." / "You can download the files Claude creates or save them directly to Google Drive." / "Claude can create data visualizations in image files like PNG." / "The maximum file size is 30MB per file for both uploads and downloads." / "Note that creating files will use more of your limit compared to normal chats with Claude." / "we recommend you monitor Claude while using the feature and stop it if you see it using or accessing data unexpectedly." https://support.claude.com/en/articles/12111783 (consultado el 2026-10-26)
[^new]: Ayuda de Anthropic, «Claude Cowork and chat are one Claude». "Claude can create documents, spreadsheets with working formulas, and presentations you can open in PowerPoint." / "Web search: There's no web search toggle. Claude searches the web when it helps." https://support.claude.com/en/articles/16761823 (consultado el 2026-10-26)
[^math]: Ayuda de Anthropic, «How does Claude handle mathematical equations and calculations?». "complex or mission-critical calculations should be verified using specialized mathematical software or manual methods." https://support.claude.com/en/articles/10366421 (consultado el 2026-10-26)
[^artifacts]: Ayuda de Anthropic, «What are artifacts and how do I use them?». "It opens beside your conversation, and you can edit it, come back to it, and share it with others." / "Artifacts are available on Free, Pro, Max, Team, and Enterprise plans" / "Important: Artifacts require Cloud code execution and file creation (called Create and edit files in the updated Settings layout) to be turned on in Settings > Capabilities (Free, Pro, Max)" / "Ask for one in any chat, select "Output" in the message box and choose a template, or pick one in the Artifacts tab." / "Everything you make is saved to the Artifacts tab in your Claude sidebar, so you can find it again from any conversation." / "highlight the text you want changed, click "Edit with Claude," and type your request." / "Edit an earlier message to create a different version of the chat, with its own artifacts" / "Docs export to Word, PDF, Markdown, and Google Docs." / "Export the result as an MP4 video. Available on Team and Enterprise plans." / "Claude will attempt to fix the error, but success isn't guaranteed." / "To change sharing settings, use Claude on the web or Claude Desktop." / "Note: Legacy artifacts are artifacts made in a chat before September 16, 2026." https://support.claude.com/en/articles/17153992 (consultado el 2026-10-26)
[^share]: Ayuda de Anthropic, «Share artifacts». "Artifacts start private to you. Nothing is shared until you share it." / "Open the artifact and click "Share."" / "Pro and Max plans: "Only you" or "Anyone with the link."" / "Everything in Commenter, plus make changes." / "Everyone needs a Claude account. People without one can't open a shared artifact, even with the link." / "choose "Only you" (Pro and Max) or "Only people invited" (Team and Enterprise)." / "Treat someone else's artifact the way you'd treat a file from an unknown sender." https://support.claude.com/en/articles/9547008 (consultado el 2026-10-26)
[^visual]: Ayuda de Anthropic, «Visual and interactive content». "Data display widgets (weather and recipes) require web search to be enabled." / "On mobile (iOS and Android), Claude provides weather information as text in the conversation." / "change the number of servings or the units of measurement, or click “Get cooking” to launch a step-by-step interface" / "Claude may present interactive options you can click or tap — like multiple choice questions, multi-select options, or a ranking interface." / "Claude decides when a visual response is appropriate based on your question. Just ask naturally." https://support.claude.com/en/articles/13641943 (consultado el 2026-10-26)
[^custom]: Ayuda de Anthropic, «Custom visuals in chat and Cowork». "Note: Custom visuals are currently in beta and available to all Claude users on web and desktop, in both chat and Cowork." / "Custom visuals are ephemeral by default." / "Download — save the visual as an .svg or .html file." / "They don’t render on Claude for iOS or Claude for Android." https://support.claude.com/en/articles/13979539 (consultado el 2026-10-26)
[^images]: Ayuda de Anthropic, «Can Claude produce images?». "Claude doesn’t generate photos or illustrations the way image-generation tools do." / "These are generated using HTML and SVG—so you can interact with them, ask follow-up questions, and have Claude adjust them as you go." / "Claude can also view and analyze images you upload." https://support.claude.com/en/articles/9002504 (consultado el 2026-10-26)
[^docs]: Ayuda de Anthropic, «Get started with Claude Docs». "Claude drafts it in front of you, asks clarifying questions up front, and leaves comments explaining its choices." / "Claude Docs is available on Free, Pro, Max, Team, and Enterprise plans, and it's on by default." / "You can also start your request with /docs, or by selecting “Output” then “Docs” from the message box." / "A good request says what the doc is for, who will read it, and what it should cover." / "To ask Claude for an edit, mention @Claude in a comment." / "To export a doc, click "Export" and choose a format:" / "Charts and diagrams don't update on their own" / "Deleting a doc is permanent. There's no trash" https://support.claude.com/en/articles/16923645 (consultado el 2026-10-26)
[^gws]: Ayuda de Anthropic, «Use Claude in Google Docs, Sheets, and Slides». "Claude for Google Workspace is available in beta for Pro, Max, Team, and Enterprise plans." / "One install covers Docs, Sheets, and Slides." / "Open a Google Docs, Sheets, or Slides file and go to Extensions > Claude > “Open Claude"" / "Claude reads the file you have open, and only that file" / "Ask before edits (default)" / "Google records them under your name, so they appear in File, Version history like any edit you make yourself." / "Claude cannot share the file, give anyone access, or change who owns it." / "Google doesn’t support extensions in Word, Excel, or PowerPoint files" / "Keep the sidebar open while Claude is working. Closing it stops the current task." / "A single long operation can run for up to six minutes before Google stops it." / "Use Chrome, Edge, or Safari. Firefox is not supported in this beta" https://support.claude.com/en/articles/16951679 (consultado el 2026-10-26)
[^academy-artifacts]: Claude Academy, curso «Claude 101», lección «Creating with artifacts». "The practical difference: an artifact opens and updates right in Claude and is shared by link, while file creation hands you a file to download and open in other apps." / "If you want to ensure Claude creates an artifact, just say so: "Create this as an artifact."" / "Ask for the deliverable, not just the content." / "Describe the end user." / "The best artifacts come at the end of a conversation, when Claude already understands the problem." https://academy.claude.com/courses/claude-101/creating-with-artifacts (consultado el 2026-10-26)
[^upload-name]: En la ayuda, el nombre del menú ① aparece escrito como «파일 또는 사진 추가» (Add files or photos). Puede variar según la pantalla.
[^create-name]: La ayuda dice que en la pantalla de configuración nueva el nombre es «파일 생성 및 편집» (Create and edit files). Puede variar según la pantalla.
[^old-search]: Si tienes la pantalla antigua, deja activado el interruptor de búsqueda web ([capítulo 6](06-search.md)).
[^screen-design]: Comprobado directamente enviando el mensaje del aviso y el del diagrama de flujo del gimjang de este apartado. En un chat incógnito, Claude escribió el aviso como texto en la conversación diciendo "Claude Docs는 시크릿 모드 대화에서는 만들 수 없어서(문서가 계정에 남기 때문입니다)" (Claude Docs no se puede crear en una conversación en modo incógnito, porque el documento queda en la cuenta), y en una conversación normal se abrió en el panel de la derecha el artefacto «Claude Design · 나만» (Claude Design · Solo yo). Claude señaló que el «sábado 15 de noviembre» del primer mensaje era en realidad domingo, así que en los ejemplos de esta guía se corrigió la fecha al sábado 14 de noviembre. El diagrama de flujo también se dibujó en el chat incógnito (consultado el 2026-10-28, web, plan gratuito (Free))
