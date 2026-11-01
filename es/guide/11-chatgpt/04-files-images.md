# Capítulo 4. Archivos, fotos y creación de imágenes: mostrar y pedir que dibuje

> **En una línea**: lo que cuesta explicar con palabras, **súbelo como foto o archivo** para mostrarlo, y las imágenes que necesites **pídelas**.
> Los archivos que subes se reúnen en la «Biblioteca» (라이브러리) y puedes volver a usarlos. El plan gratuito permite subir pocos archivos al día.

Las pantallas corresponden a la versión web de octubre de 2026 (plan Plus). En el plan gratuito o en la aplicación del móvil, la ubicación de los menús puede ser un poco distinta.

## Subir fotos y archivos

Pulsa el botón + de la izquierda del cuadro de entrada y elige «Añadir fotos y archivos» (사진 및 파일 추가). Luego elige el archivo en tu ordenador.[^files]
Cuando el archivo aparezca pegado encima del cuadro de entrada, escribe también una pregunta que diga qué quieres hacer con él y envíala.

![Menú + del cuadro de entrada desplegado. Fíjate en «Añadir fotos y archivos: subir desde el ordenador» (사진 및 파일 추가 — 컴퓨터에서 업로드) en lo más alto y, debajo, en «Importar desde la biblioteca» (라이브러리에서 가져오기), «Crear imagen» (이미지 생성) y «Boceto» (스케치)](../../../guide/11-chatgpt/assets/shot-02-plus-menu-marked.png)

Los títulos de las conversaciones y el nombre de la cuenta se han cambiado por ejemplos en esta pantalla. En este capítulo usamos ① el botón +, ② «Añadir fotos y archivos», ③ «Importar desde la biblioteca», ④ «Crear imagen» y ⑧ «Boceto».

Esto es lo que puedes subir.[^files]

| Tipo | Ejemplo |
|---|---|
| Fotos y dibujos | Foto de un recibo, captura de pantalla, foto de una nota escrita a mano |
| Documentos | PDF, Word (DOCX), texto (TXT) |
| Tablas | Excel (XLSX·XLS), CSV |
| Presentaciones | PowerPoint (PPTX) |
| Sonido (solo de pago) | Archivos de grabación WAV, MP3, M4A |

También puedes adjuntar vídeos. Funciona incluso con el plan gratuito. Eso sí, que funcione depende del dispositivo y del modo de subida. Además, puede que ChatGPT no entienda todo el vídeo ni el sonido.[^image-faq]

Los documentos de Google (`.gdoc`) no se pueden subir directamente. Descárgalos desde Google Docs como PDF o Word y luego súbelos.[^files]
Si subes un PDF directamente a la conversación, lee no solo el texto, sino también **las imágenes y los gráficos que contiene**.[^files]

En lugar de subir el archivo y decir solo "míralo", escribe también qué quieres. Así la respuesta será mucho mejor.

```
El PDF adjunto es la factura de gastos de comunidad de mi edificio.
Busca los tres conceptos que más han subido respecto al mes pasado, muéstralos en una tabla y escribe en una línea cada uno la razón que crees que explica la subida.
Marca como "suposición" lo que no sea seguro.
```

Con un archivo puedes hacer más que resumir. Sube como **modelo** un documento bien escrito de otra vez y pide que tu borrador se corrija con la misma estructura y el mismo tono. Y si subes el original junto con tu resumen, también puedes encontrar **hechos que no coinciden o contenido que no está en el original**.[^academy-content]
```
El primer archivo es el aviso oficial (el original) y el segundo es el resumen que escribí yo.
Encuentra en mi resumen todos los hechos y cifras que difieren del original y todo lo que no aparece en el original.
```

::: details Más o menos así será la respuesta (ejemplo; haz clic para desplegar)
Este es un ejemplo creado para esta guía. La respuesta real varía según el servicio y según el momento.

> Al compararlo con el original, hay tres diferencias.
>
> | Mi resumen | Original | Diferencia |
> |---|---|---|
> | "Plazo hasta el ○ de ○" | "Plazo hasta el △ de ○" | La fecha límite es distinta |
> | "Cuota de participación ○○ wones" | (no aparece en el original) | Contenido que no está en el original |
> | "Puede solicitarlo cualquiera" | "Solo pueden solicitarlo residentes de ○○" | El público destinatario es distinto |
>
> El resto del contenido coincide con el original.

**Comprueba si la respuesta te sirve**: ¿encontró todos los hechos y cifras que difieren del original? ¿Marcó aparte lo que no está en el original? Contrasta con el archivo original real los puntos que señala la respuesta.

:::

Si es una foto, se escribe así.

```
La foto adjunta es el interior de mi nevera. Con solo los ingredientes que se ven, recomiéndame dos cenas que pueda preparar en 30 minutos.
```

> Los archivos con datos personales, como documentos de identidad, contratos o historiales médicos, tápalos o quítalos antes de subirlos. El principio se explicó en la [etapa 1, capítulo 9](../00-common/09-safety.md).

Al subir fotos, ten en cuenta también lo siguiente.[^image-faq]

- **El coreano dentro de una foto puede leerse mal.** Las letras que no son del alfabeto latino, como el coreano o el japonés, se leen con menos precisión que el inglés. Haz la foto de modo que el texto se vea grande y contrasta los números con el original.
- **No lo uses para interpretar imágenes médicas como una TC o una radiografía.** No es un uso adecuado.
- Si quieres destacar una zona, **rodéala con un círculo** en una aplicación de edición de fotos antes de subirla. Así se le puede hacer prestar más atención a esa parte.

<Quiz id="ch104-upload" />

## Cuánto puedes subir: límites por plan

Los archivos tienen límites de tamaño y de cantidad. Estos son los valores que figuran en la ayuda oficial.[^files]

| Límite | Valor |
|---|---|
| Tamaño de un archivo (documentos y presentaciones) | Hasta 512MB |
| Cantidad de texto de un documento | Hasta 2 millones de tokens |
| Archivos de tabla (CSV, etc.) | Unos 50MB (depende del contenido) |
| Una foto | Hasta 20MB |
| Cantidad de archivos que se pueden subir | Hasta 80 cada 3 horas (puede bajar cuando hay mucha afluencia) |
| **Plan gratuito (Free)** | **Hasta 3 al día** |
| Espacio de almacenamiento de toda tu cuenta | Hasta 25GB |
| Archivos de sonido | Solo se pueden subir **con un plan de pago** |

Un **token** (token) es la unidad en la que la IA divide el texto en trozos pequeños para leerlo. 2 millones de tokens es una cantidad enorme. Los documentos de trabajo normales rara vez llegan a ese límite.

Con el plan gratuito, lo primero con lo que chocarás es el límite de **3 al día**. Si necesitas preguntar por varios archivos, empieza subiendo los imprescindibles.
Si tienes varias fotos, otra opción es unirlas en una sola imagen antes de subirlas. Así ahorras esa cantidad de archivos.
Las cifras de los límites cambian con frecuencia, así que toma los valores de arriba como válidos a la fecha de consulta.

<Quiz id="ch104-limits" />

## Biblioteca: donde se reúnen los archivos que subes

Los archivos que subes y los que crea ChatGPT se **guardan automáticamente** en la «Biblioteca» del menú lateral. La biblioteca se usa en la web.[^library]
Si quieres volver a usar un archivo que subiste la vez anterior, pulsa el botón + → «Importar desde la biblioteca». No hace falta subir el archivo de nuevo.

<!-- Falta captura de pantalla: pantalla con la «Biblioteca» del menú lateral abierta (web, mostrando solo archivos de ejemplo) -->

El espacio que cabe en la biblioteca depende del plan.[^library]

| Plan | Espacio de la biblioteca |
|---|---|
| Free | 500MB |
| Go | 4GB |
| Plus · Business | 20GB |
| Pro | 100GB |

Cosas que debes saber.

- **Aunque borres la conversación, los archivos de la biblioteca se conservan.** Si quieres eliminar un archivo, bórralo aparte desde la biblioteca.[^delete]
- A veces puedes recuperar un archivo borrado desde «Elementos eliminados recientemente» (최근 삭제된 항목). Además, queda programado para eliminarse de forma permanente en un plazo de 30 días.[^library]
- Los archivos subidos en un **chat temporal** ([capítulo 3](03-chats.md)) no se guardan en la biblioteca.[^library]
- **Los enlaces de descarga dentro de la conversación caducan enseguida.** Descarga enseguida los archivos que crea ChatGPT y, si falla con un mensaje como «Download failed», pídele que los cree de nuevo.[^errors]

> **La biblioteca está pasando a llamarse «Space».** Space sustituye a la biblioteca y los proyectos se quedan como están.[^space] En Space, además de archivos, puedes crear **páginas** (page, documentos) que varias personas editan juntas. El 2026-10-24, en la pantalla de esta guía todavía aparecía «Biblioteca». Si en tu menú lateral ves «Space», considera que es el mismo lugar que la biblioteca de esta sección.

<Quiz id="ch104-library" />

## Crear imágenes

ChatGPT no solo crea texto, también dibuja. Pulsa el botón + → «Crear imagen», o la sugerencia «Crea una imagen o un sticker» (이미지나 스티커 만들어줘) de la pantalla inicial. Luego describe la imagen que quieres. En un chat temporal «Crear imagen» está desactivado, así que hazlo en un chat normal ([capítulo 3](03-chats.md)).

![Pantalla en la que se creó con «Crear imagen» una imagen de una tienda de comida casera. Arriba a la derecha se ve la petición enviada y, debajo, una acuarela con el botón «Editar» (편집) sobre la imagen](../../../guide/11-chatgpt/assets/shot-25-image-gen.png)

*Es la pantalla del envío del siguiente prompt de ejemplo sin la última línea, «Texto». Como no le indiqué el texto, escribió por su cuenta «Tienda de comida casera del barrio» en el cartel. La conversación y la imagen se borraron después de hacer la captura.*[^screen-image]

Al pedir una imagen también valen tal cual los principios del prompt que aprendiste en la etapa 1 ([etapa 1, capítulo 4](../00-common/04-prompt-basics.md)). Incluye las cuatro cosas siguientes. Así te acercarás más a la imagen que quieres.

| Qué incluir | Ejemplo |
|---|---|
| Qué | Una abuela sonriente frente a una tienda de comida casera |
| Con qué estilo | Acuarela cálida, estilo de ilustración de cuento |
| Cómo se coloca | Formato cuadrado, la persona en el centro, fondo sencillo |
| Texto | Arriba, "Plato del día" |

```
Crea una imagen para promocionar una tienda de comida casera del barrio.
- Contenido: una abuela sonriente frente a la tienda, con un plato de comida en las manos
- Estilo: acuarela cálida, estilo de ilustración de cuento
- Formato: cuadrado, la abuela en el centro, fondo sencillo
- Texto: arriba, "Plato del día" en letras grandes
```

No pasa nada si la primera imagen no te convence. Igual que al corregir un texto, vuelve a pedirlo **señalando solo lo que quieres cambiar**. Basta con decir algo como "cambia el fondo a una noche y deja todo lo demás igual" ([etapa 1, capítulo 6](../00-common/06-conversation.md)).

### Usar una foto de referencia

Lo que cuesta describir con palabras se puede mostrar subiendo también una **foto de referencia**. Pega la foto con «Añadir fotos y archivos» y di qué quieres imitar.

```
La foto adjunta es el cartel de mi tienda. Aprovechando los colores y el estilo de letra de este cartel,
crea un póster para avisar del cierre por las vacaciones del Chuseok. Días de cierre: del 5 al 7 de octubre.
```

En «Ajustes» → «Personalización» (개인 맞춤 설정) también hay los elementos «Foto de referencia» (참고 사진) y «Foto de referencia de cuerpo entero» (전신 참고 사진). La personalización se explica en el [capítulo 5](05-memory.md).

Las imágenes creadas por ChatGPT llevan **C2PA** (una etiqueta de estándar internacional que deja constancia de cómo se creó la imagen).[^faq] Es información que no se ve a simple vista y que se guarda dentro del archivo de la imagen.

Sobre los derechos de las imágenes creadas con IA y las precauciones al subir fotos u obras de otras personas, consulta la [etapa 1, capítulo 9](../00-common/09-safety.md).

<Quiz id="ch104-image" />

## Boceto: mostrar algo dibujado por ti

El botón + → «Boceto» es una función para **dibujar tú mismo en la pantalla y adjuntar el dibujo como imagen**. La descripción en pantalla dice «Dibuja una imagen y adjúntala» (그림을 그려 이미지로 첨부하세요).

![Pantalla del «Editor de bocetos» (스케치 편집기). Arriba están las herramientas de selección, lápiz, texto, formas y borrador; abajo, la selección de color y un botón azul de confirmar. Con el lápiz se han dibujado tres cuadrados](../../../guide/11-chatgpt/assets/shot-26-sketch.png)

*Cerré sin adjuntar el dibujo. Al cerrar, pregunta una vez más «¿Descartar los cambios?» (변경 사항을 삭제할까요?).*[^screen-sketch]

No hace falta dibujar bien. Basta con dibujar de forma tosca la **disposición o la forma** que cuesta explicar con palabras.
Por ejemplo, dibuja la disposición de un folleto con cuadrados y flechas, adjúntala y pide esto.

```
El boceto adjunto es la disposición de un folleto. En el cuadrado grande de arriba irá el nombre de la tienda, en el círculo del centro la foto del plato estrella,
y en los tres cuadrados pequeños de abajo los precios. Crea una imagen del folleto con esta disposición.
```

<Quiz id="ch104-sketch" />

## Más en vídeo

Es un vídeo de presentación hecho por la propia empresa. Los nombres de las pantallas y las funciones pueden ser distintos de los de este capítulo.

> El siguiente vídeo está en **inglés**. Si en el vídeo de YouTube eliges Ajustes (la rueda dentada) → Subtítulos → **Traducción automática → español**, puedes verlo con subtítulos en español. El vídeo se reproduce directamente dentro de esta página.

**[Introducing ChatGPT Images 2.5](https://www.youtube.com/watch?v=6l7ble9P74o)** · OpenAI · Para quien quiera ver un resumen breve de la creación de imágenes, ahora más rápida y nítida (septiembre de 2026, 1 minuto)

<YouTube id="6l7ble9P74o" title="Introducing ChatGPT Images 2.5" />

## Pruébalo tú

1. Haz con el móvil una foto de un recibo o una nota que tengas en casa, pásala al ordenador, súbela con «Añadir fotos y archivos» y pide "Organiza lo que está escrito en una tabla" (tapa el nombre y el número de tarjeta).
2. Abre la «Biblioteca» del menú lateral y comprueba que la foto que acabas de subir se ha guardado.
3. Crea con «Crear imagen» la imagen de la tienda de comida casera de arriba y corrígela una vez con "cambia el fondo a un ambiente primaveral y deja todo lo demás igual".
4. Dibuja tres cuadrados con «Boceto», adjúntalos y pide "Crea una invitación de cumpleaños con esta disposición".

**Proyecto continuo** ([Preparar un club de lectura](../00-common/practice-kit.md)): sube el archivo de ejemplo minutes-last-meeting.txt con «Añadir fotos y archivos» y envía "Sepárame en una tabla lo que se decidió, las tareas y lo que aún no se ha decidido. En las tareas, escribe el responsable y el plazo, y si una tarea no tiene plazo, escribe «Sin fecha límite»". Contrasta con el acta si aparecen las tres tareas.

## Resumen

- Con el botón + → «Añadir fotos y archivos» subes fotos, documentos, tablas y presentaciones. Los archivos de sonido solo se pueden subir con un plan de pago.
- No subas solo el archivo: escribe también qué quieres.
- El plan gratuito permite subir hasta 3 al día. Las fotos, hasta 20MB y los documentos, hasta 512MB.
- El coreano y los números de dentro de una foto pueden leerse mal, así que contrástalos con el original.
- Los archivos que subes se guardan automáticamente en la «Biblioteca» (que está pasando a llamarse «Space») y se conservan aunque borres la conversación.
- Las imágenes se piden en «Crear imagen» indicando contenido, estilo, disposición y texto, y puedes mostrar lo que quieres con una foto de referencia o con un «Boceto».

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Upload | Subir (carga) | Enviar un archivo de tu dispositivo al servicio |
| Token | Token | Unidad en la que la IA divide el texto en trozos pequeños para leerlo |
| MB · GB | Megabyte · gigabyte | Unidades de tamaño de archivo. 1GB son unos 1000MB |
| Library | Biblioteca | Lugar donde se reúnen los archivos que subes o creas |
| Image Generation | Generación de imágenes | Función con la que la IA dibuja una imagen descrita con texto |
| Reference Image | Imagen de referencia (foto de referencia) | Foto modelo que se imita al crear una imagen |
| Sketch | Boceto | Dibujo hecho por ti de forma tosca |
| Space | Space | Espacio de archivos y páginas que sustituye a la biblioteca |
| C2PA | C2PA | Etiqueta de estándar internacional que deja constancia de cómo se creó una foto o una imagen |

<ChapterDone :chapter="104" />

Siguiente capítulo: [Capítulo 5. Memoria y personalización](05-memory.md)

[^files]: Ayuda de OpenAI, «Uploading files and audio to ChatGPT». "Select + in the prompt area, then Add photos & files." / "You can't upload a .gdoc file directly." / "maximum size of 512 MB per file" / "capped at 2 million tokens per file" / "size limit of approximately 50 MB" / "Images have a limit of 20 MB per image." / "Free users are limited to 3 file uploads per day." / "capped at 25 GB per user" / "Audio uploads are not available on the Free plan at this time." / "ChatGPT can analyze both text and images in PDFs". https://help.openai.com/en/articles/8555545 (consultado el 2026-10-23)
[^library]: Ayuda de OpenAI, «Using Library to manage files in ChatGPT». "Library is available on web" / "Select Add from library." / "Free users have up to 500 MB of Library storage." / "scheduled for permanent deletion from OpenAI systems within 30 days" / "files uploaded while using Temporary Chat are not saved to your account or Library". https://help.openai.com/en/articles/20001052 (consultado el 2026-10-23)
[^image-faq]: Ayuda de OpenAI, «ChatGPT Image Inputs FAQ». "The model does not perform as well handling images with text of non-Latin alphabets, such as Japanese or Korean." / "The model is not suitable for interpreting specialized medical images like CT scans" / "consider using a photo edit markup tool on your image before uploading." / "ChatGPT can accept video files as attachments through supported upload methods, including on Free plans." / "It may not analyze the entire video or accurately interpret its audio." https://help.openai.com/en/articles/8400551 (consultado el 2026-10-24)
[^errors]: Ayuda de OpenAI, «Troubleshooting ChatGPT Error Messages». "Ensure that the file is recently generated, files generated by ChatGPT expire quickly". https://help.openai.com/en/articles/7996703 (consultado el 2026-10-24)
[^space]: Ayuda de OpenAI, «ChatGPT Space: sharing, data, and controls». "It replaces Library, while your Projects stay as they are." / "Pages are editable documents that you can organize inside other pages and work on with other people." https://help.openai.com/en/articles/20001544 (consultado el 2026-10-24)
[^faq]: Ayuda de OpenAI, «What is ChatGPT: FAQ». "ChatGPT images include C2PA provenance metadata." https://help.openai.com/en/articles/12677804 (consultado el 2026-10-24)
[^delete]: Ayuda de OpenAI, «Deleting and archiving chats in ChatGPT». "Deleting a chat does not delete files saved separately in Library." https://help.openai.com/en/articles/8809935 (consultado el 2026-10-23)
[^academy-content]: OpenAI Academy, texto del curso (requiere iniciar sesión y registrarse). AI Foundations: "Use this template as a model. Rewrite my draft so it follows the same structure and tone." Applied AI Foundations: "Verify" "Check whether a draft is supported by the source" (consultado el 2026-10-26)
[^screen-sketch]: Comprobado directamente: el «Editor de bocetos» (스케치 편집기) abierto desde el menú + → «Boceto» y la ventana de confirmación al cerrar («Seguir editando» (계속 편집하기) y «Descartar cambios» (변경 사항 삭제)) (consultado el 2026-10-28, pantalla web de una cuenta Plus)
[^screen-image]: Comprobado directamente enviando el prompt de ejemplo de esta sección (sin la línea «Texto») desde el menú + → «Crear imagen». Sobre la imagen había un botón «Editar» y un botón de compartir. Aunque se borró la conversación, la imagen siguió en «Imágenes» (이미지) de la biblioteca, así que se borró aparte (consultado el 2026-10-28, pantalla web de una cuenta Plus)
