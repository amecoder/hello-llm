# Capítulo 7. Skills y aplicaciones conectadas: guardar tus peticiones habituales y seguir usando las aplicaciones de Google

> **En una línea**: las peticiones que escribes largas cada vez, guárdalas como **skill** y llámalas con `/`. Los **Gems que usas ahora se convierten en skills a partir del 17 de noviembre de 2026.**
> Para preguntar por el contenido de Gmail, Drive o Calendar, activa las **aplicaciones conectadas**. Antes de conectar, entérate de qué información va a Gemini.

Las pantallas son de la versión web de octubre de 2026, y las imágenes son de la pantalla en coreano del plan de pago (Google AI Pro).

## Skills: guardar las peticiones que haces a menudo

Un **skill** (Skill) es una **instrucción guardada** que creas una vez y vuelves a usar en cualquier chat.[^skills][^transition]
Por ejemplo, si usas cada semana la petición "cuando recibas un acta, organízala en el orden decisiones, tareas, responsables", puedes guardarla como skill y llamarla solo por su nombre.

Los skills tienen estas características.[^transition]

- **Son fáciles de llamar.** Escribe `/` en el cuadro de escritura del chat y elige el nombre del skill. Parece que pronto pasará a ser `@`, así que usa el que veas en pantalla.
- **A veces se usan solos.** Si hay un skill que encaja con tu pregunta de ahora, Gemini lo reconoce y lo aplica.
- **Se pueden combinar.** En un mismo chat se pueden usar varios skills a la vez.

Para usarlos tienes que **tener 18 años o más**, haber iniciado sesión y tener activado «Conservar actividad» (활동 기록 보관).[^skills] **No hace falta un plan de pago.**[^skills] Se usan en la web, en la app del móvil y en la app de Mac.[^skills]

### Abrir la pantalla de skills

Ve a «Personalizar» (맞춤설정) en el menú lateral → pestaña «Skills» (스킬), arriba. Si no ves «Personalizar», pulsa antes «Más» (더보기).[^skills][^screen] También puedes llegar desde «Skills» en el menú de configuración ([capítulo 2](02-screen-tour.md#pantalla-de-ajustes-cuenta-preferencias-y-privacidad)).

![Pestaña «Skills» de «Personalizar». Con números rojos: ① pestaña «Skills», ② botón «Crear» (만들기), ③ menú que se abre al pulsar «Crear» («Crear con Gemini» (Gemini로 만들기), «Crear manualmente» (수동으로 만들기), «Subir» (업로드하기)), ④ lista de skills «Recomendados» (추천) («Adaptar el estilo de escritura» (글쓰기 스타일 맞추기), «Explorar distintas perspectivas» (다양한 관점 살펴보기), «Preparar una reunión» (회의 준비), etc.)](../../../guide/12-gemini/assets/shot-19-skills-marked.png)

**Los números rojos son los mismos que los de la lista de abajo.**[^screen]

- ① Es la pestaña «Skills». El texto de ayuda dice "Añade o crea skills para ampliar lo que Gemini puede hacer".
- ② Al pulsar «Crear» salen ③ tres formas de crear.
  - **«Crear con Gemini»**: le explicas con una conversación lo que quieres y Gemini lo crea contigo. Si empiezas ahora, es lo más fácil.
  - **«Crear manualmente»**: escribes tú el nombre, la descripción y las instrucciones en un formulario en blanco.
  - **«Subir»**: subes un archivo de skill (`SKILL.md`) o una carpeta que lo contenga. Se usa para traer un skill hecho en otro servicio (solo en la web y en la app de Mac).[^transition]
- ④ Son los **skills recomendados** que Google ha preparado. Puedes añadirlos con «+» y luego adaptarlos a ti.[^skills]

También se crea si en el chat dices "crea un skill con estas instrucciones". Pero **activar, desactivar y eliminar solo se puede hacer en «Personalizar» → «Skills».**[^skills]

### Administrar los skills

En la pantalla de skills, elige un skill y pulsa «Más» (더보기).[^skills]

| Lo que quieres hacer | Menú |
|---|---|
| Dejar de usarlo un tiempo | «Desactivar» (비활성화) |
| Corregirlo conversando | «Editar con Gemini» (Gemini로 수정) |
| Guardarlo en tu ordenador | «Descargar» (다운로드) (archivo .zip) |
| Eliminarlo | «Eliminar» (삭제): no se puede deshacer |

Fuente: ayuda de Google[^skills]

Si le pides que use un skill que tienes desactivado, Gemini te pregunta si quieres volver a activarlo.[^skills] Puedes crear tantos skills como quieras, pero **solo puedes tener activados a la vez hasta 100.**[^transition]

Los skills no funcionan con todas las funciones. Se usan con las aplicaciones conectadas, como Gmail o Drive, pero **todavía no se pueden usar con Canvas, Deep Research, la creación de vídeo ni de música, ni el aprendizaje guiado.**[^transition]

<Quiz id="ch307-skill" />

## Cómo escribir un buen skill

Escribe el skill como una **nota resumen corta**, no como un manual largo.[^write] Gemini primero **mira solo el nombre y la descripción del skill** y decide si encaja con tu pregunta de ahora. Solo si encaja lee las instrucciones enteras.[^write]
Por eso, si el nombre y la descripción son vagos, el skill no se usa en el momento en que hace falta.

### Qué conviene hacer skill y qué no

| Conviene hacerlo skill | No hace falta hacerlo skill |
|---|---|
| Reescribes una y otra vez la misma petición larga | Algo que vas a hacer una sola vez |
| Corriges cada vez el formato de la respuesta | Algo que Gemini ya hace bien |
| Unes a mano un trabajo que pasa por varias aplicaciones | Algo cuyas reglas cambian a menudo |

Fuente: ayuda de Google[^write]

### Escribir el nombre, la descripción y las instrucciones

- **El nombre empieza por lo que hace (un verbo).** Escríbelo de modo que se vea **qué hace** más que qué es.[^write] El nombre se escribe en minúsculas en inglés y las palabras se unen con guiones (-) (por ejemplo, `summarize-meeting-notes`).[^skills]
- **La descripción, de 1 a 2 frases, y con indicación de cuándo se usa.** No puede pasar de 1.024 caracteres.[^write]
- **Escribe las instrucciones para que valgan para un tipo de tarea, no para un caso.** Es decir, que sirvan para "organizar actas", no para "organizar el acta de esta semana".[^write]
- **Muestra con un ejemplo cómo es el resultado y deja escrito qué hacer cuando falte información.** Así Gemini se inventa o se salta menos contenido.[^write]

Compara un ejemplo flojo con uno mejor.

| | Ejemplo flojo | Ejemplo mejor |
|---|---|---|
| Nombre | `meeting-helper` | `summarize-meeting-notes` |
| Descripción | Ayuda con las reuniones | Cuando recibe un acta, la organiza en decisiones, tareas y responsables. Se usa cuando se pega un acta o unas notas de reunión |

En el ejemplo mejor, solo con ver el nombre se ve lo que hace, y la descripción incluye **cuándo se usa**.

En la casilla de instrucciones de «Crear manualmente» puedes escribir esto.

```
Cuando recibas un acta, organízala en este orden.
1. Lo que se decidió (una línea por cada cosa)
2. Tareas (tarea - responsable - fecha límite)
3. Lo que hay que volver a ver en la próxima reunión
Si el acta no dice quién es el responsable o cuál es la fecha límite, no te lo inventes: escribe "por confirmar".
```

No hace falta que sea perfecto desde el principio. Úsalo unas cuantas veces y ve puliéndolo con «Editar con Gemini».

<Quiz id="ch307-write" />

## Los Gems se convierten en skills

Los **Gems** eran un **Gemini a tu medida**, que creabas con un nombre, instrucciones y archivos de consulta. Están en «Más» → «Gems» del menú lateral.[^gems][^screen]
Estos Gems **se convierten en skills.** Este es el calendario para las cuentas personales de Google (a partir de 18 años).[^transition]

| Fecha | Qué pasa |
|---|---|
| 17 de noviembre de 2026 | Los Gems pasan a ser de **solo lectura**. Se pueden ver, pero no usar, editar ni crear nuevos |
| 17 de diciembre de 2026 | Los Gems **desaparecen** de Gemini |

Fuente: ayuda de Google[^transition]

- Las cuentas personales de menores de 18 años cambian más adelante, y dicen que avisarán del calendario aparte. Las cuentas de empresa, en marzo de 2027, y las de centros educativos, en junio de 2027.[^transition]
- **Cuando desaparezcan los Gems, se vuelven a crear automáticamente como skills.**[^transition] Aun así, pasarlos tú mismo da tranquilidad.
- **Opal, la función experimental para crear miniaplicaciones, y los Gems de Google Labs también desaparecen ese mismo noviembre.**[^transition]

### Qué se pierde en la conversión automática

En la conversión automática se pierden algunos archivos.[^transition]

- Si la suma del tamaño de los archivos supera los **100 MB**, se quitan primero los más grandes.
- Los archivos que los skills no admiten (los archivos antiguos de Office .doc, .xls y .ppt, el audio, el vídeo y los archivos comprimidos como .zip, etc.) no pasan.

Por eso, si tienes un Gem que aprecias, **descarga antes del 17 de diciembre los archivos que pusiste en «Conocimiento» (지식).**[^transition]

### Pasarlo tú mismo, paso a paso

1. Abre el Gem y abre y descarga uno por uno los archivos que hay en «Conocimiento».[^transition]
2. En «Personalizar» → «Skills» → «Crear» → «Crear manualmente», copia y pega el nombre, la descripción y las instrucciones del Gem.[^transition][^screen]
3. Para pasar también los archivos, «Descarga» el skill que acabas de crear, y mete el `SKILL.md` que sale en la misma carpeta que los archivos del Gem. **El nombre de la carpeta debe ser igual al nombre del skill.** Después, en «Más opciones» (옵션 더보기) → «Reemplazar skill» (스킬 바꾸기), junto al mismo skill, sube esa carpeta.[^transition]

A diferencia de los Gems, los skills **no tienen una página con la lista de "conversaciones hechas con este skill".** Las conversaciones en las que usaste un skill también aparecen mezcladas en la lista normal de conversaciones del menú lateral.[^transition] Las funciones de los Gems de compartir y de añadir archivos de Drive y cuadernos dicen que llegarán a los skills "en las próximas semanas".[^transition]

<Quiz id="ch307-gems" />

## Aplicaciones conectadas: Gmail, Drive y Calendar desde Gemini

Si activas las **aplicaciones conectadas** (Connected Apps), Gemini busca en tus aplicaciones, como Gmail, Drive y Calendar, y responde con ello. Si lo permites, también ayuda a corregir o administrar el contenido dentro de esas aplicaciones.[^apps]
Por ejemplo, puedes preguntar: "busca entre los correos que recibí el mes pasado el que me decía el lugar del club de lectura".

### Pantalla de aplicaciones conectadas

La ves en «Personalizar» → pestaña «Conectores» (커넥터) del menú lateral.[^apps][^screen]

![Pestaña «Conectores» de «Personalizar». Con números rojos: ① «Personalizar» en el menú lateral, ② pestañas de arriba «Explorar» (탐색), «Conectores» y «Skills», ③ lista «Instalados» (설치됨) (Google Workspace, servicio de búsqueda de Google, Contactos, YouTube Music, Gemini Notebook, Verify AI), ④ menú de tres puntos junto a una aplicación, ⑤ lista «Todos» (전체) (YouTube, AndroidDevSummit, Perfil de empresa de Google, GitHub, cada uno con un botón «+»), ⑥ botón «+ Personalizado» (+ 맞춤)](../../../guide/12-gemini/assets/shot-18-connectors-marked.png)

**Los números rojos son los mismos que los de la lista de abajo.**[^screen]

- Pulsa ① «Personalizar» en el menú lateral y elige ② la pestaña «Conectores». El título es «Aplicaciones conectadas».
- ③ **«Instalados»** son las aplicaciones ya conectadas. En la cuenta de esta guía se veían Google Workspace, el servicio de búsqueda de Google, Contactos, YouTube Music, Gemini Notebook y Verify AI.
- ④ Al pulsar los tres puntos salen «Usar ahora» (지금 사용) y «Desconectar» (연결 해제).
- ⑤ **«Todos»** son las aplicaciones que se pueden conectar además. Se conectan con «+».
- ⑥ «+ Personalizado» parece ser el menú para conectar directamente el servidor de otra empresa. La ayuda dice que esta función (aplicaciones personalizadas) solo la usan **usuarios de 18 años o más que estén en Estados Unidos.**[^custom] Si empiezas ahora, no hace falta que la uses.

Al pulsar el nombre de una aplicación se abre la pantalla de detalle. Salen lo que puede hacer y lo que no, y preguntas de ejemplo.[^apps] Si conectas solo «Google Workspace», pasas a usar **Gmail, Google Calendar, Docs, Drive, Keep y Tasks** a la vez.[^workspace][^screen]

**Las aplicaciones que se ven varían según la persona.** La lista cambia según el dispositivo, el país y el tipo de app de Gemini.[^apps]

### Dos ajustes que debes comprobar primero

- **«Conservar actividad» debe estar activado.** Si está desactivado, en la web no se pueden usar las aplicaciones conectadas.[^apps] Este ajuste se trata en detalle en el [capítulo 9](09-privacy.md).
- **En los ajustes de Gmail debe estar activado «Funciones inteligentes en otros productos de Google» (다른 Google 제품의 스마트 기능)** para que Workspace se conecte. Si no se conecta, comprueba esto primero y, después de activarlo, actualiza Gemini y vuelve a conectar.[^workspace]

### Trucos para preguntar bien

- **En cada conversación nueva, di en qué aplicación debe buscar.** Por ejemplo, "en el correo", "en Drive", "en el calendario". En la siguiente pregunta de la misma conversación no hace falta repetirlo.[^workspace]
- Si escribes `@` en el cuadro de escritura y eliges una aplicación, puedes indicar con exactitud que use esa aplicación.[^apps]
- **No pegues la dirección (URL) de un documento o de un correo.** En su lugar, escribe palabras del contenido y el nombre de la aplicación.[^workspace]

| Pregunta floja | Pregunta mejor |
|---|---|
| "Resume este documento (pegando la dirección)" | "Busca en Drive el documento 'Reglamento del club de lectura' y resume solo las normas sobre la cuota" |

La pregunta mejor incluye el nombre de la aplicación y la palabra que buscar, así que Gemini tiene menos probabilidades de elegir un archivo equivocado.

**Comprueba siempre las respuestas.** Pueden salir respuestas falsas o anticuadas, por ejemplo basadas en un correo antiguo cuando hay otro más reciente. Pulsa las fuentes que aparecen tras la respuesta para abrir el correo o el archivo original.[^workspace]

### También hay cosas que no puede hacer

Aunque conectes Workspace, no puede hacer esto.[^workspace]

- Leer los **comentarios y las imágenes** de Docs y Gmail
- Leer las **fotos y los vídeos** de Drive
- **Crear carpetas ni mover archivos** de Drive
- **Contar los elementos** de Drive o Gmail ni decirte cuánto espacio de almacenamiento tienes

### Información pública que se usa sin conectar nada

La **información pública** de la Búsqueda de Google, YouTube, Google Maps, vuelos y hoteles la usa Gemini sin que la conectes aparte. Tu información personal no la abre sin tu permiso.[^apps]

- **YouTube**: puede buscar vídeos según el tema y responder preguntas sobre su contenido. No puede guardarlos en una lista de reproducción ni comentar.[^youtube]
- **Mapas**: busca lugares y da indicaciones según el medio de transporte.[^maps]
- **Vuelos y hoteles**: busca vuelos y hoteles que cumplan tus condiciones. **No hace la reserva.**[^flights]

La información pública de la búsqueda se usa aunque «Conservar actividad» esté desactivado, pero Mapas, YouTube, vuelos y hoteles exigen que esté activado.[^apps]

En la ayuda aparecen también aplicaciones de otras empresas, como Dropbox, pero algunas son **solo para usuarios de Estados Unidos.**[^dropbox] Una aplicación que no está en la lista del dispositivo que usas ahora no se puede usar en ese dispositivo.[^apps]

<Quiz id="ch307-apps" />

## Datos personales que debes conocer antes de conectar

Conectar es cómodo, pero **parte del contenido de tu correo y de tus archivos va a Gemini.** Antes de conectar, ten en cuenta lo siguiente.[^connected]

- **Puede mezclarse contenido sensible.** Los datos de las aplicaciones conectadas pueden incluir contenido sensible, como salud o religión, o confidencial. Los datos nuevos que se creen en esa aplicación a partir de ahora también los puede ver Gemini.
- **Una persona puede ver una parte.** Una parte de los datos de las aplicaciones conectadas la ven revisores humanos (incluido personal formado de empresas externas). Por eso Google avisa directamente de que **no conectes aplicaciones con información confidencial que no querrías que viera un revisor.**
- **Sobre el entrenamiento, es así.** No se entrena directamente un modelo de IA con tu bandeja de entrada de Gmail ni con Drive. Pero sí se entrena con los **resúmenes, extractos e inferencias** que se usaron para crear la respuesta. Si el correo o el archivo es corto, ese resumen puede ser el original tal cual. Y si «Conservar actividad» está activado, la actividad que incluye datos de aplicaciones conectadas se usa para mejorar los servicios, incluido el entrenamiento de la IA.
- **Aunque desconectes, el historial de conversaciones se queda.** Aunque desconectes una aplicación o borres los datos de esa aplicación, no se borra el registro de «Actividad en las aplicaciones de Gemini». El registro hay que eliminarlo aparte ([capítulo 9](09-privacy.md)).

Lo más fácil con el correo de la empresa o con un Drive lleno de información de otras personas es **no conectarlos desde el principio.** También puedes subir solo los archivos necesarios en cada momento ([capítulo 4](04-files-create.md#subir-archivos)).

<Quiz id="ch307-privacy" />

## Prueba tú

1. En «Personalizar» → «Skills», añade un skill recomendado, como «Explorar distintas perspectivas», y pruébalo escribiendo `/` en el chat para llamarlo.
2. Con «Crear manualmente», crea el skill de organizar actas de este capítulo, pega unas notas de reunión de práctica y mira el resultado. Quita a propósito un responsable y comprueba si sale "por confirmar".
3. Si usabas Gems, descarga los archivos de «Conocimiento» y pasa a mano a skill el Gem que más aprecies.
4. En la pestaña «Conectores», mira qué aplicaciones están conectadas a tu cuenta y desconecta con los tres puntos → «Desconectar» las que no necesites.

**Proyecto continuo** ([Preparar un club de lectura](../00-common/practice-kit.md)): prueba el skill del paso 2 con el acta de ejemplo del ejercicio. Comprueba tú mismo si las tareas y los responsables organizados coinciden con el acta.

## Resumen

- Un skill es una instrucción que se guarda y se llama con `/` (pronto `@`). Exige 18 años o más, haber iniciado sesión y «Conservar actividad», y no hace falta un plan de pago.
- Se crea en «Personalizar» → «Skills» → «Crear» con «Crear con Gemini», «Crear manualmente» o «Subir». Activar, desactivar y eliminar solo se hace en esta pantalla.
- Un buen skill es corto, su nombre empieza por lo que hace y la descripción dice cuándo se usa.
- Los Gems pasan a solo lectura el 17 de noviembre de 2026 y desaparecen el 17 de diciembre, y se convierten automáticamente en skills. Descarga antes los archivos del Gem que aprecias.
- Las aplicaciones conectadas se administran en «Personalizar» → «Conectores». En cada conversación nueva di en qué aplicación debe buscar, y comprueba la respuesta con las fuentes.
- Una persona puede ver una parte de los datos de las aplicaciones conectadas. No conectes aplicaciones con información confidencial. Aunque desconectes, el historial de conversaciones hay que eliminarlo aparte.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Skill | Skill | Instrucción que se guarda y se vuelve a usar en cualquier chat |
| SKILL.md | SKILL.md | Archivo que contiene el nombre, la descripción y las instrucciones de un skill |
| Gem | Gem | Gemini a tu medida, hecho con instrucciones y archivos. En proceso de convertirse en skills |
| Connected Apps | Aplicaciones conectadas | Función para usar con Gemini aplicaciones como Gmail y Drive |
| Connector | Conector | Nombre de la pestaña donde se administran las aplicaciones conectadas |
| Google Workspace | Google Workspace | Conjunto de aplicaciones de trabajo de Google, como Gmail, Docs, Drive y Calendar |
| Human reviewer | Revisor humano | Persona que lee una parte de las conversaciones para mejorar el servicio |

<ChapterDone :chapter="307" />

Siguiente capítulo: [Capítulo 8. Encargar tareas](08-tasks.md)

[^screen]: Comprobado directamente en la pantalla web de Gemini (Google AI Pro, en coreano). Menú lateral: «Nuevo chat» (새 채팅), «Biblioteca» (라이브러리), «Imágenes» (이미지), «Programadas» (예약됨), «Personalizar» (맞춤설정), «Más» (더보기) (al desplegarlo, «Vídeos» (동영상) y «Gems»). Pestañas de arriba de «Personalizar»: «Explorar» (탐색), «Conectores» (커넥터), «Skills» (스킬). Texto de la pestaña «Skills»: "스킬을 추가하거나 생성하여 Gemini가 할 수 있는 작업 범위를 넓혀 보세요" (Añade o crea skills para ampliar lo que Gemini puede hacer); menú «Crear» (만들기): «Crear con Gemini» (Gemini로 만들기), «Crear manualmente» (수동으로 만들기), «Subir» (업로드하기); skills «Recomendados» (추천): «Adaptar el estilo de escritura» (글쓰기 스타일 맞추기), «Optimizar la eficiencia energética» (에너지 효율 최적화), «Explorar distintas perspectivas» (다양한 관점 살펴보기), «Generar ideas nuevas» (새로운 아이디어 생성), «Preparar una reunión» (회의 준비). Pestaña «Conectores»: título «Aplicaciones conectadas» (연결된 앱), texto "도구를 연결하여 더 많은 작업을 처리하세요" (Conecta herramientas para hacer más cosas), casilla «Buscar» (검색) y botón «+ Personalizado» (+ 맞춤), «Instalados» (설치됨): Google Workspace, servicio de búsqueda de Google, Contactos, YouTube Music, Gemini Notebook, Verify AI; «Todos» (전체): YouTube, AndroidDevSummit, Perfil de empresa de Google, GitHub. Menú de tres puntos de una aplicación instalada: «Usar ahora» (지금 사용), «Desconectar» (연결 해제). Aplicaciones de la pantalla de detalle de «Google Workspace»: Gmail, Google Calendar, Google Docs, Google Drive, Google Keep, Google Tasks. El nombre de la casilla de archivos de conocimiento de los Gems en la ayuda en coreano es «지식» (Conocimiento). (consultado el 2026-10-31)
[^skills]: Ayuda de Google, «Create & manage skills for Gemini Apps» (versión en coreano «Gemini 앱에서 스킬 만들기 및 관리하기»). "Be 18 or over." / "Have Keep Activity on." / "Important: For now, skills are only available in the Gemini mobile app, the Gemini app on Mac, and the Gemini web app at gemini.google.com." / "Tip: Skills are available without a Google AI subscription and can be used in your chats." / "If you don’t find “Customize,” first click More ." / "On the Skills page, you can create a skill with help from Gemini, build one from a prefilled or blank template, or upload a skill file or a folder with a SKILL.md file and optional supported reference files." / "Tip: You can’t activate, deactivate, or delete a skill from a chat or task thread." / "Naming convention: The skill name inside SKILL.md must use all lowercase with words separated by a hyphen (such as my-new-skill)." / "If a skill is off and you ask Gemini to use it, Gemini will ask you if you want to turn it back on." / "Important: If you delete a skill, it can’t be undone." / "Click More   Download . This downloads your skill in a .zip file." Nombres en la pantalla en coreano: «비활성화», «Gemini로 수정», «다운로드», «삭제». https://support.google.com/gemini/answer/17094296 (consultado el 2026-10-31)
[^transition]: Ayuda de Google, «About the transition from Gems to skills» (versión en coreano «Gems에서 스킬로의 전환에 관한 정보»). "Skills are reusable custom instructions that can help you automate tasks and save time in Gemini." / "Easy access: Use a skill by typing / (soon to be @) followed by the skill's name directly in any Gemini chat." / "Automatic use: Gemini automatically recognizes when a skill is relevant to your current prompt and applies it for you." / "Stackable: Combine multiple skills in a single chat to handle more complex tasks." / "You can create as many skills as you want, but only 100 can be active at a time." / "For now, the option to upload files to create skills is only available in the Gemini app on Mac and in the Gemini web app at gemini.google.com." / "Skills work with some but not all features. You can use them with Connected Apps like Workspace apps, but they do not yet work with features like Canvas and Deep Research." / "November 17, 2026: Gems transition to skills and become read only. You can still access your Gems, but can’t use or edit them, or create new ones." / "December 17, 2026: Gems are removed from Gemini Apps. You’ll no longer be able to access your Gems." / "If you’re under 18 and signed in to a personal Google account, your Gems will transition to skills at a later date. We’ll share more details soon." / "March 2027: Workspace business, enterprise, and non-profit accounts." / "June 2027: Workspace education accounts." / "As part of this change, Opal, our experiment for building mini apps, as well as Gems by Google Labs, will also go away at the same time in November." / "When we remove Gems, we’ll automatically recreate your Gems as skills." / "Skills have a 100 MB total size limit for files. If your Gem is larger than this when we transition it to a skill, we automatically remove the largest files first until it’s under the limit." / "Some file types are not supported in skills. When we transition your Gems to skills, these unsupported file types will not be included:" / "If the Gem has files under “Knowledge,” download your files." / "Copy and paste the name, description, and instructions from your Gem to your skill." / "On your computer, open the .zip file and move the SKILL.md file into the folder with your Gem files." / "Important: The name of the folder must match the name of the skill." / "Go back to the Skills page, and next to the same skill, click More options   Replace skill ." Nombres en la versión en coreano: «옵션 더보기», «스킬 바꾸기». / "Unlike Gems, skills don’t have a dedicated page that lists your recent chats with that skill." / "In the coming weeks, skills will have the features you loved in Gems, including the ability to share them with others and add files from Google Drive and notebooks from Gemini Notebook." https://support.google.com/gemini/answer/18560919 (consultado el 2026-10-31)
[^write]: Ayuda de Google, «Write effective skills for Gemini Apps» (versión en coreano «Gemini 앱을 위한 효과적인 스킬 작성하기»). "Keep your skills short and focused. Instead of long paragraphs of general explanation, focus on:" / "Check if a skill is relevant. Gemini only checks the skill’s name and description to determine if a skill is relevant for your task." / "Repeat prompts: You give Gemini the same instructions over and over, especially for complex tasks with long prompts." / "A one-off job: You only need to do it once and won't repeat it." / "Start with an action statement, or verb. Focus on what the skill does, not what it is." / "Keep the description focused. Make it as clear as possible and within the 1024 character limit." / "Instead of giving instructions that only apply to a specific task, give instructions that teach Gemini how to handle a type of task." / "Tell Gemini exactly what to do if a piece of information is missing. This prevents Gemini from making up or skipping important details." https://support.google.com/gemini/answer/17102773 (consultado el 2026-10-31)
[^gems]: Ayuda de Google, «Use Gems in Gemini Apps» (versión en coreano «Gemini 앱에서 Gems 사용하기»). "Enter a name and instructions for your Gem." https://support.google.com/gemini/answer/15146780 (consultado el 2026-10-31)
[^apps]: Ayuda de Google, «Use & manage Connected Apps in Gemini» (versión en coreano «Gemini에서 연결된 앱 사용 및 관리하기»). "With your permission, Gemini can also help you take actions, like editing and managing your content in other apps." / "When Keep Activity is off, Connected Apps won’t be available on gemini.google.com, iOS devices, or smart watches." / "To specify an app for Gemini to use, enter @ and select the app." / "At the top, click Connectors." / "On the app’s details page, you can find a connected app’s full description, supported and unsupported actions, and example prompts." / "The apps in Connected Apps settings vary by Gemini app, device, country, and more." / "Gemini won’t access your personal information or content in these services without your permission." / "Gemini can always use public information from Google Search, even if Keep Activity is off or you’re signed out." https://support.google.com/gemini/answer/13695044 (consultado el 2026-10-31)
[^workspace]: Ayuda de Google, «Connect the Google Workspace app to Gemini Apps» (versión en coreano «Google Workspace 앱을 Gemini 앱에 연결하기»). "For Gemini Apps to connect with Google Workspace, Smart features in other Google products must be turned on in your Gmail settings." / "Tip: Don’t paste the URL of a document or email in your prompt." / "For every new conversation, ask the Gemini app to get or add something from your personal Google Workspace explicitly." / "Gemini Apps can hallucinate responses or provide outdated information, like from an older email when there’s a more recent one." / "Access comments or images in Docs or Gmail" / "Access pictures and videos in your Drive" / "Manage content in your Drive, like create folders or move content between folders" / "Count items in your Drive or Gmail or tell you how much Drive or Gmail storage you have" https://support.google.com/gemini/answer/15229592 (consultado el 2026-10-31)
[^youtube]: Ayuda de Google, «Find & ask about YouTube content in Gemini Apps» (versión en coreano «Gemini 앱에서 YouTube 콘텐츠를 찾고 질문하기»). "Gemini uses public information from YouTube to help you:" / "Take actions that impact your YouTube experience, like saving a video to a playlist or adding a comment on a video." https://support.google.com/gemini/answer/16622858 (consultado el 2026-10-31)
[^maps]: Ayuda de Google, «Find places & get directions in Gemini Apps» (versión en coreano «Gemini 앱에서 장소 및 경로 찾기»). "Get directions based on mode of transport and help you avoid things like tolls" https://support.google.com/gemini/answer/16622866 (consultado el 2026-10-31)
[^flights]: Ayuda de Google, «Search for flights & hotels in Gemini Apps» (versión en coreano «Gemini 앱에서 항공편 및 호텔 검색하기»). "Gemini uses public information from Google Flights and Google Hotels to help you:" / "Book a flight or hotel for you" (de la lista de lo que no puede hacer) https://support.google.com/gemini/answer/16622256 (consultado el 2026-10-31)
[^dropbox]: Ayuda de Google, «Manage files & folders in your Dropbox in Gemini Apps». "Be 18 or over and in the US." https://support.google.com/gemini/answer/17211088 (consultado el 2026-10-31)
[^custom]: Ayuda de Google, «Connect & manage custom apps for Gemini Apps». "Be 18 or over and in the US." / "Google does not control, monitor, or secure third-party MCP servers. You’re responsible for supervising the MCP server." https://support.google.com/gemini/answer/17209137 (consultado el 2026-10-31)
[^connected]: Ayuda de Google, «About personalization with Connected Apps» (versión en coreano «연결된 앱을 통한 개인화에 관한 안내»). "Data shared may relate to topics you find sensitive, like race, religion, and health, or confidential info." / "Keep in mind that if new data is added to these apps in the future, Gemini will have access to that data." / "Gemini does not train generative AI models directly on your Gmail inbox, Drive, Contacts, Calendar or other Workspace apps, on your Google Wallet and payments services, or on imagery or audio from your Google Photos library." / "To make our responses relevant, helpful, and high quality, we train our generative AI models off of these summaries, excerpts, generated media, and inferences." / "Gemini Apps activity, which includes data from apps you connect, is used to improve Google services for everyone, including by training generative AI models, if your Keep Activity setting is on." / "In some cases, for example, where the email or file is brief or particularly relevant to respond to the prompt, the summary may just be the email or file." / "When connected to Gemini, a subset of Connected Apps data processed by Gemini is reviewed by human reviewers (including trained service providers) to debug our services, help keep them safe, and improve them." / "Important: Please don't connect your apps to Gemini Apps if they contain confidential information that you wouldn’t want a reviewer to see." / "Disconnecting an app or deleting data in a connected app doesn’t delete any data from Gemini Apps Activity." https://support.google.com/gemini/answer/16836988 (consultado el 2026-10-31)
