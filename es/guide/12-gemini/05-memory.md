# Capítulo 5. Memoria y personalización: memoria, instrucciones y traer datos de otras IA

> **En una línea**: Gemini adapta sus respuestas a ti con **las conversaciones anteriores (memoria)**, **las aplicaciones de Google que conectes** y **las instrucciones que hayas escrito**.
> Si un recuerdo es falso, lo corriges directamente en la conversación, y para borrarlo se eliminan las conversaciones que lo contienen. También se pueden traer los recuerdos y las conversaciones de ChatGPT y de Claude.

Las pantallas son de la versión web de octubre de 2026, y las imágenes son de la pantalla en coreano del plan de pago (Google AI Pro). Algunas funciones de este capítulo **solo funcionan en Estados Unidos**, y las he marcado aparte.

## Las tres vías por las que Gemini llega a conocerte

Gemini adapta sus respuestas a ti de tres maneras.[^personal]

| Vía | Qué usa | En esta guía |
|---|---|---|
| Memoria | Las conversaciones anteriores de Gemini | Este capítulo |
| Aplicaciones conectadas | El contenido de aplicaciones de Google como Gmail y Google Fotos[^apps] | [Capítulo 7](07-skills-apps.md) |
| Instrucciones | Las preferencias que has escrito (tono, formato, etc.) | Este capítulo |

Fuente: ayuda de Google[^personal]

Estas funciones **solo funcionan con una cuenta personal de Google.** No funcionan con cuentas de empresa o de centros educativos ni con cuentas supervisadas por un tutor.[^personal] Todavía no están abiertas a todo el mundo, así que las condiciones cambian según la función.[^personal]

Los ajustes están reunidos en un solo sitio. Pulsa «Configuración» (설정) → «Inteligencia personal» (개인 인텔리전스).[^screen][^memory]

![Pantalla «Configuración» → «Inteligencia personal». Bajo el título, "Obtén respuestas y recomendaciones más útiles a partir de lo que se sabe de ti." Con números rojos: ① tarjeta «Memoria» (메모리) ("Gemini llega a conocerte mejor a través del contenido de tus conversaciones anteriores."), ② interruptor de la memoria (activado), ③ tarjeta «Aplicaciones conectadas» (연결된 앱), ④ tarjeta «Peticiones para Gemini» (Gemini 요청 사항)](../../../guide/12-gemini/assets/shot-14-personal-marked.png)

**Los números rojos son los mismos que los de la lista de abajo.**[^screen]

- ① «Memoria»: la función que te va conociendo a partir de las conversaciones anteriores. Con «Administrar y eliminar» (관리 및 삭제) puedes ir a ordenar las conversaciones anteriores.
- ② Es el interruptor que activa y desactiva la memoria.
- ③ «Aplicaciones conectadas»: la conexión con las aplicaciones de Google ([capítulo 7](07-skills-apps.md#aplicaciones-conectadas-gmail-drive-y-calendar-desde-gemini)).
- ④ «Peticiones para Gemini»: el sitio donde dejas escritas las instrucciones. La descripción dice "Personaliza las respuestas de Gemini (por ejemplo: 'usa viñetas en los párrafos largos')". Al pulsarlo se abre una pantalla aparte (ver la sección «Instrucciones», más abajo).

<Quiz id="ch305-overview" />

## Memoria: recordar las conversaciones anteriores

Si activas la **memoria**, Gemini aprende de las conversaciones anteriores cosas sobre ti y tu entorno y las usa en sus respuestas.[^memory]
Por ejemplo, si la otra vez dijiste "estoy preparando un viaje a la isla de Jeju para el mes que viene", más adelante, cuando hables de viajes, podrá seguir usando eso. A veces incluso propone antes el siguiente paso de lo que estabas haciendo o un plan de viaje.[^memory]

Para usarla hay condiciones.[^memory]

- **Tener 18 años o más** y una cuenta personal de Google
- **Que «Conservar actividad» (활동 기록 보관) esté activado** ([capítulo 3](03-chats.md#buscar-conversaciones-anteriores))
- **En algunas funciones no se usa.** Las principales son los Gems y las conversaciones de voz (Live). En cambio, en una conversación de texto puedes pedir que consulte una conversación de voz anterior.

### Preguntar por conversaciones anteriores

En una conversación nueva, **puedes preguntar por conversaciones anteriores por tema o por época.**[^recent]

```
Busca la conversación del mes pasado en la que hablamos del lugar para el club de lectura y resúmela.
```

Si Gemini consultó conversaciones anteriores, bajo la respuesta, en «Fuentes y contenido relacionado» (소스 및 관련 콘텐츠), se muestra «Chats anteriores» (이전 채팅). Eso sí, esta marca a veces puede ser errónea.[^recent]
Si tienes dudas, pregúntaselo directamente. Basta con preguntar: "¿has usado información de conversaciones anteriores?".[^memory]

### Cuando un recuerdo es falso o quieres borrarlo

**Corrige lo falso diciéndolo directamente en la conversación.** Si la memoria está activada, Gemini lo tiene en cuenta. Aun así, puede que no siempre lo corrija bien.[^memory]

**Para borrar un recuerdo hay que eliminar todas las conversaciones que lo contienen.** Busca esas conversaciones en «Actividad en las aplicaciones de Gemini» y elimínalas.[^memory] Después de eliminarlas, puede tardar un poco en desaparecer de las respuestas.[^memory]

Aunque le des una instrucción como "olvida eso", **no siempre se cumple.** Para que deje de hacerlo con seguridad, elimina las conversaciones sobre ese tema.[^instructions]

**Si desactivas la memoria misma**, Gemini deja de aprender cosas nuevas sobre ti. Basta con apagar el interruptor ② de la imagen de arriba.[^instructions][^screen]

<Quiz id="ch305-memory" />

## Instrucciones: para no tener que repetirlo cada vez

Las **instrucciones** son reglas tuyas que quieres que Gemini siga siempre. Una vez escritas, no hace falta repetirlas ni en las conversaciones nuevas.[^instructions]
El nombre en pantalla es «Peticiones para Gemini» (④ de la imagen de arriba).[^screen] **Cualquier usuario puede añadir instrucciones.**[^instructions]

Estos son ejemplos de instrucciones.[^instructions]

```
Empieza todas las respuestas con un resumen corto.
```

```
Divide los párrafos largos con viñetas.
```

Compara una instrucción floja con una mejor.

| Instrucción floja | Instrucción mejor |
|---|---|
| "Explícalo bien" | "Si aparece un término técnico, explícalo entre paréntesis con palabras fáciles" |
| "Corto" | "Responde en un máximo de cinco líneas y en la última escribe una sola tarea pendiente" |

La instrucción mejor es tan concreta que puedes comprobar enseguida si Gemini la ha cumplido ([capítulo 4 de la etapa 1](../00-common/04-prompt-basics.md)).

Así se añade una instrucción. El paso 1 lo comprobamos en pantalla, y los pasos 2 y 3 son los nombres que aparecen en la ayuda (esta guía no abrió la pantalla interior de las instrucciones).[^instructions][^screen]

1. Pulsa «Configuración» → «Inteligencia personal» → «Peticiones para Gemini».
2. Pulsa «Añadir +» (추가 +), escribe la instrucción y envíala («Enviar» (제출)).
3. Para corregirla o borrarla, pulsa «Más» (더보기) en esa instrucción. Con el interruptor de arriba del todo también puedes activar y desactivar todas las instrucciones.

### Hacer que recuerde por conversación (solo en Estados Unidos)

También existe la función de hacer que recuerde algo diciéndolo durante la conversación, como "recuerda que soy vegetariano". Pero esta función **ahora solo funciona en Estados Unidos** y exige un plan de Google AI y tener 18 años o más.[^instructions]
En Corea, prueba a conseguir el mismo efecto con las **instrucciones** de arriba. Basta con dejar escrito algo como "Soy vegetariano. En las recomendaciones de comida, quita la carne".

También hay una pantalla de **resumen de la memoria** para reunir, ver y corregir lo que Gemini entiende de ti, pero esta también se ofrece **solo a usuarios de planes de pago de Estados Unidos y solo en inglés**.[^summary]

<Quiz id="ch305-instructions" />

## Traer datos de otra IA

Si usabas ChatGPT o Claude y te pasas a Gemini, **puedes traer tus recuerdos y tus conversaciones.**[^import] En el menú «Configuración», dentro del grupo «Datos y privacidad» (데이터 및 개인 정보 보호), pulsa «Importar memoria a Gemini» (Gemini로 메모리 가져오기) ([capítulo 2](02-screen-tour.md#pantalla-de-ajustes-cuenta-preferencias-y-privacidad)).[^screen]

![Pantalla «Importar memoria a Gemini». Con números rojos: ① el prompt que se pega en la otra IA y «Copiar» (복사), ② la casilla «Pega aquí la información...» (여기에 정보를 붙여넣으세요...) y «Añadir a la memoria» (메모리 추가), ③ «Importar chats» (채팅 가져오기): un archivo ZIP (de 5 GB o menos) y «Añadir» (추가), ④ el aviso de que los chats importados se guardan en la actividad y se usan para mejorar los servicios, incluido el entrenamiento de modelos de IA](../../../guide/12-gemini/assets/shot-15-import-marked.png)

**Traer los recuerdos** se hace así.[^import][^screen]

1. «Copia» el prompt de ① y pégalo en el cuadro de chat de ChatGPT o de Claude.
2. Copia la respuesta en la que esa IA ha resumido lo que sabe de ti.
3. Pégala en la casilla ② y pulsa «Añadir a la memoria».

**Traer las conversaciones** se hace en ③. Sube con «Añadir» el archivo ZIP que exportaste de ChatGPT o de Claude.[^import][^screen]

- En ChatGPT, se obtiene en «Configuración > Gestión de datos» (데이터 관리), con «Exportar datos» (데이터 내보내기); en Claude, en «Configuración» → «Privacidad» (개인정보보호), con «Exportar datos». Para el camino detallado, mira el [capítulo 8 de ChatGPT](../11-chatgpt/08-privacy.md#exportar-datos) y el [capítulo 9 de Claude](../10-claude/09-privacy.md#descargar-tus-datos). La ayuda de Gemini traduce este menú como «Controles de datos» (데이터 제어), pero el nombre que esta guía comprobó en la pantalla de ChatGPT es «Gestión de datos».[^import]
- Cada archivo puede ocupar hasta 5 GB y se pueden subir hasta 5 al día.[^import]
- Si vuelves a subir el mismo ZIP, se añaden las conversaciones nuevas y se sobrescriben las que ya habías importado antes.[^import]

**Hay algo que debes saber antes de importar.** Como dice ④, las conversaciones que importas y **continúas** se guardan en tu actividad y **se usan para mejorar los servicios de Google, incluido el entrenamiento de modelos de IA generativa.**[^import][^screen] La actividad se puede administrar y eliminar cuando quieras.

Importar solo se puede con una cuenta personal de Google y con 18 años o más. No está disponible en el Espacio Económico Europeo (EEE), Suiza ni el Reino Unido.[^import]

<Quiz id="ch305-import" />

## Prueba tú

1. Abre «Configuración» → «Inteligencia personal» y comprueba que «Memoria» está activada.
2. En «Peticiones para Gemini», añade "Empieza todas las respuestas con un resumen corto." y, en una conversación nueva, haz cualquier pregunta. ¿Ha empezado con un resumen?
3. En una conversación nueva, pregunta: "¿has usado información de conversaciones anteriores?".
4. Cuando termines de comprobar, borra la instrucción del paso 2 o apágala con el interruptor.

**Proyecto continuo** ([Preparar un club de lectura](../00-common/practice-kit.md)): añade a «Peticiones para Gemini»: "Los avisos del club de lectura, con trato formal y con la fecha, el lugar y lo que hay que llevar arriba del todo." Después pide otra vez el aviso en una conversación nueva y mira si se ha cumplido la instrucción.

## Resumen

- Gemini se adapta a ti con la memoria (conversaciones anteriores), las aplicaciones conectadas y las instrucciones. Los ajustes están reunidos en «Configuración» → «Inteligencia personal».
- La memoria exige tener 18 años o más, una cuenta personal y «Conservar actividad». No se usa en los Gems ni en las conversaciones de voz.
- Los recuerdos falsos se corrigen diciéndolo en la conversación, y para borrarlos se eliminan todas las conversaciones que los contienen. Una instrucción de «olvida eso» no siempre se cumple.
- Las instrucciones («Peticiones para Gemini») las puede usar cualquier usuario. Hacer que recuerde por conversación y el resumen de la memoria son solo para Estados Unidos.
- Los recuerdos de ChatGPT y de Claude se pasan copiando un prompt, y las conversaciones se traen con el ZIP exportado. Las conversaciones importadas y continuadas se usan para mejorar los servicios, incluido el entrenamiento de la IA.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Memory | Memoria | Función que aprende de las conversaciones anteriores cosas sobre ti y las usa en las respuestas |
| Personal Intelligence | Inteligencia personal | Funciones de personalización que reúnen la memoria, las aplicaciones conectadas y las instrucciones, y su pantalla de ajustes |
| Instructions for Gemini | Instrucciones («Peticiones para Gemini») | Reglas tuyas que quieres que Gemini siga siempre |
| Memory summary | Resumen de la memoria | Pantalla para ver y corregir lo que Gemini entiende de ti. Solo en Estados Unidos |
| Import | Importar | Pasar a Gemini los recuerdos y las conversaciones de otra IA |
| ZIP | ZIP | Archivo comprimido que reúne varios archivos en uno |

<ChapterDone :chapter="305" />

Siguiente capítulo: [Capítulo 6. Búsqueda y Deep Research](06-search.md)

[^screen]: Comprobado directamente en la pantalla web de Gemini (Google AI Pro, en coreano). Pantalla «Configuración» → «Inteligencia personal» (dirección /personalization-settings) "나에 대해 알고 있는 정보를 바탕으로 더 유용한 대답과 추천을 받아 보세요." (Obtén respuestas y recomendaciones más útiles a partir de lo que se sabe de ti.), tarjeta «Memoria» (메모리) ("Gemini가 이전 대화 내용을 통해 사용자에 대해 더 잘 파악하게 됩니다. 언제든지 이전 채팅을 관리 및 삭제할 수 있습니다." (Gemini llega a conocerte mejor a través del contenido de tus conversaciones anteriores. Puedes administrar y eliminar los chats anteriores cuando quieras.)) y su interruptor, «Aplicaciones conectadas» (연결된 앱), «Peticiones para Gemini» (Gemini 요청 사항). Pantalla «Configuración» → «Importar memoria a Gemini» (Gemini로 메모리 가져오기) (dirección /import): "1 다른 AI 제공업체와의 채팅에 이 프롬프트 복사하기" (Copia este prompt en un chat con otro proveedor de IA) «Copiar» (복사), "2 여기에 대답 붙여넣기" (Pega aquí la respuesta) «Pega aquí la información...» (여기에 정보를 붙여넣으세요...) «Añadir a la memoria» (메모리 추가), «Importar chats» (채팅 가져오기) "지원되는 AI 제공업체에서 데이터를 내보낸 후 ZIP 파일(5 GB 이하)로 Gemini에 직접 업로드하세요." (Tras exportar los datos de un proveedor de IA compatible, súbelos directamente a Gemini como archivo ZIP (de 5 GB o menos).) «Añadir» (추가), "Gemini로 가져와 계속 이어 간 채팅은 활동에 저장됩니다. 이 데이터는 생성형 AI 모델 학습을 비롯한 Google 서비스를 개선하고 Google, Google 사용자, 일반 대중을 보호하는 데 사용됩니다." (Los chats que importes a Gemini y continúes se guardan en la actividad. Estos datos se usan para mejorar los servicios de Google, incluido el entrenamiento de modelos de IA generativa, y para proteger a Google, a sus usuarios y al público en general.) Descripción de la tarjeta «Peticiones para Gemini»: "Gemini의 대답을 맞춤설정합니다(예: '긴 단락에 글머리 기호를 사용해 줘')" (Personaliza las respuestas de Gemini (por ejemplo: 'usa viñetas en los párrafos largos')). «Importar memoria a Gemini» está en el grupo «Datos y privacidad» (데이터 및 개인 정보 보호) del menú «Configuración». La pantalla interior de «Peticiones para Gemini» muestra instrucciones del usuario, así que no se abrió. Solo se comprobó la pantalla de Google AI Pro, y no se pudo comprobar si esta tarjeta se ve en cuentas gratuitas o de menores. (consultado el 2026-10-31)
[^personal]: Ayuda de Google, «Get personalization in Gemini Apps» (versión en coreano «Gemini 앱에서 개인화 기능 사용하기»). "You can get a personalized experience in Gemini Apps based on:" / "These features are not available to everyone at this time. You can find details about each feature in the articles linked below." / "To use these features, you must sign in to Gemini Apps with a personal Google Account. These features are not available while signed in to a work, school, or supervised account." https://support.google.com/gemini/answer/16598623 (consultado el 2026-10-31)
[^memory]: Ayuda de Google, «Get personalization with memory of your past Gemini chats» (versión en coreano «이전 Gemini 채팅의 메모리를 사용해 개인화 기능 사용하기»). "With this feature, Gemini can learn from your chats to understand more about you and your world." / "Be 18 or over." / "Not available in certain features, like Gems or Live chats. In a text chat, you can ask Gemini to reference a past Gemini Live conversation." / "At the top, tap Menu   Settings & help   Personal Intelligence." / "Tip: When Memory is turned on, Gemini may suggest topics or tools for you based on previous conversations. For instance, Gemini might:" / "Suggest next steps for a project you’re working on" / "Offer to help plan a trip you’ve mentioned" / "To correct what Gemini knows about you and uses in a response:" / "Make sure that Memory is turned on." / "If you delete a chat, there might be a short delay before Gemini stops using it to personalize your responses." / "To check if Gemini used your past chats, just ask Gemini, “Did you use any info from past chats?”" / "To delete something that Gemini remembered about you, delete all chats with this info from Gemini Apps Activity." / "While Gemini continues to improve, it might not always get it right." https://support.google.com/gemini/answer/16598469 (consultado el 2026-10-31)
[^recent]: Ayuda de Google, «Find & manage your recent chats in Gemini Apps». "In a new chat, you can ask Gemini about your past Gemini chats by topic or timeframe, or ask it to reference them before responding." / "Gemini may occasionally make mistakes and display this label incorrectly." Nombres en la pantalla en coreano: «소스 및 관련 콘텐츠», «이전 채팅». https://support.google.com/gemini/answer/13666746 (consultado el 2026-10-31)
[^instructions]: Ayuda de Google, «Manage what Gemini remembers about you and customize responses» (versión en coreano «Gemini가 나에 대해 기억하는 정보 관리 및 대답 맞춤설정»). "Gemini will remember the information or instructions you share with it, even in new chats." / "be over 18." (en la versión en coreano, "만 18세 이상이어야 합니다.") / "Have a Google AI plan." / "Only available in the US. All users can add instructions for Gemini Apps." / "Remember that I am vegetarian." / "“Start all responses with a short summary.”" / "Important: Instructions for Gemini to forget or avoid topics in chats doesn’t always work perfectly. To make sure Gemini stops mentioning a topic, delete any chats about it from your Gemini Apps Activity." / "Tap Add +." / "At the top, turn Instructions for Gemini off  or on ." / "To stop Gemini from learning about you" Nombres en la pantalla en coreano: «Gemini 요청 사항», «추가 +», «제출», «더보기», «수정», «삭제». https://support.google.com/gemini/answer/16598625 (consultado el 2026-10-31)
[^summary]: Ayuda de Google, «View & manage your Memory summary in Gemini Apps» (versión en coreano «Gemini 앱에서 내 메모리 요약 보기 및 관리하기»). "You can use memory summary to view, edit, and delete what Gemini Apps understands about you." / "Currently available to US users with an active Google AI plan." / "Available in English." https://support.google.com/gemini/answer/18617127 (consultado el 2026-10-31)
[^apps]: Ayuda de Google, «Connect your Google apps to personalize your Gemini experience» (versión en coreano «Google 앱을 연결하여 Gemini 환경 개인화하기»). "Get content from Gmail and Google Photos, like photos from your last vacation." https://support.google.com/gemini/answer/16598406 (consultado el 2026-10-31)
[^import]: Ayuda de Google, «Import from other AI platforms to Gemini Apps» (versión en coreano «다른 AI 플랫폼에서 Gemini 앱으로 가져오기»). "You can bring over your preferences, remembered facts & details, and general contextual information (sometimes called  "memory") from other AI platforms." / "Be signed in with a personal Google Account. This feature isn’t available if you sign in to a work, school, or supervised Google Account." / "Be 18 or older." / "The EEA, Switzerland, or the United Kingdom." / "Click Settings  Data controls." / "Click Settings  Privacy." / "Copy the response from the other AI platform that contains memories about you." / "Tip:  You can upload up to 5 .zip.files per day." / "A download link will be sent to the email associated with your account on the other AI platform." / "If you reupload a  .zip file with your exported chats it will add any new conversations and overwrite previously imported ones." / "Your imported and continued chats are saved in your Activity. This data is used to improve our services (including training generative AI models), and to protect Google, our users and the public." https://support.google.com/gemini/answer/16868299 (consultado el 2026-10-31)
