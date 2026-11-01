# Capítulo 7. Proyectos, complementos y Work: agrupar lo que haces a menudo

> **En una línea**: las conversaciones, los archivos y las instrucciones que usas para un mismo trabajo se agrupan en un **proyecto**, y para conectar otros servicios o añadir una forma de trabajar ya definida se usan los
> **complementos** (plugins). Si quieres encargar un trabajo largo y recibir un resultado terminado, cambia arriba a **Work**.

Las pantallas son de la versión web de octubre de 2026 (plan Plus). En el plan gratuito o en la aplicación del móvil, la posición de los menús puede ser un poco distinta.

![Primera pantalla tras iniciar sesión. Mira en el menú lateral «Complementos» (플러그인) y la sección «Proyectos» (프로젝트) («Informe semanal de la empresa», «Estudiar inglés»), y el botón para cambiar entre «Chat» y «Work» arriba, en el centro de la pantalla](../../../guide/11-chatgpt/assets/shot-01-home-projects.png)

Los títulos de las conversaciones y el nombre de la cuenta están cambiados a ejemplos. Lo que se trata en este capítulo es ① «Complementos» del menú lateral, ② la sección «Proyectos» y ③ el cambio «Chat»/«Work» de arriba.

## Proyectos: conversaciones, archivos e instrucciones en una carpeta

Un **proyecto** (project) es una carpeta donde se reúnen las conversaciones, los archivos de consulta y las instrucciones de un mismo trabajo.
Por ejemplo, en un proyecto «Informe semanal de la empresa» puedes meter el archivo con el formato del informe y una instrucción como «las tablas, con tres columnas». Entonces, cada conversación que abras dentro empieza ya conociendo ese archivo y esa instrucción. No tienes que repetir la misma explicación en cada conversación.

### Cómo crearlo y llenarlo

1. En el menú lateral, pasa el ratón por el título de la sección «Proyectos», pulsa el **botón + («Añadir proyecto nuevo», 새 프로젝트 추가)** y ponle nombre en la ventana «Crear proyecto» (프로젝트 만들기).[^projects]
2. En la pantalla del proyecto, ve a ••• («Acciones del proyecto», 프로젝트 액션) arriba a la derecha → «Configuración del proyecto» (프로젝트 설정) y escribe las **instrucciones** que solo se aplican a este proyecto. Los archivos de consulta se suben en «Archivos» (파일).
3. Las conversaciones que ya tienes se meten con «Mover al proyecto» (프로젝트로 이동) y se sacan con «Quitar del proyecto» (프로젝트에서 제거).[^projects]

![Ventana «Crear proyecto». La casilla «Nombre del proyecto» (con el texto de ejemplo «Viaje a Copenhague»), la explicación de que un proyecto reúne en un solo sitio chats, archivos e instrucciones personalizadas, «Memoria predeterminada» (기본 메모리) abajo a la izquierda y el botón «Crear proyecto» abajo a la derecha](../../../guide/11-chatgpt/assets/shot-16-new-project-marked.png)

Ventana «Crear proyecto»: ① escribe el nombre del proyecto, ② si hace falta, cambia la «Memoria predeterminada» y ③ pulsa «Crear proyecto».

Cuando lo creas, se abre la pantalla del proyecto. Debajo del ② cuadro de escritura («Nuevo chat de Proyecto de ejemplo», 예시 프로젝트의 새 채팅) hay ③ los botones «Archivos» y «Complementos», y debajo, en ④ las pestañas «Chats» (채팅) y «Fuentes» (소스), se reúnen las conversaciones y los materiales de este proyecto. Las instrucciones se abren en ① ••• arriba a la derecha.

![Pantalla del «Proyecto de ejemplo» recién creado. A la derecha del título están «Compartir» y el botón •••, debajo del cuadro de escritura «Archivos» y «Complementos», y debajo las pestañas «Chats» y «Fuentes» con el aviso «Todavía no hay chats» (아직 채팅이 없습니다)](../../../guide/11-chatgpt/assets/shot-17-project-home-marked.png)

En la ventana ••• → «Configuración del proyecto» se fijan ① las instrucciones, ② la memoria y ③ el acceso a la biblioteca, y con ④ «Eliminar proyecto» (프로젝트 삭제) se borra el proyecto.

![Ventana ••• → «Configuración del proyecto». «Nombre del proyecto», la casilla «Instrucciones» (지침), «Memoria — Predeterminada (este proyecto y los chats externos pueden acceder a la memoria del otro)», «Acceso a la biblioteca — Activado» y el botón rojo «Eliminar proyecto»](../../../guide/11-chatgpt/assets/shot-18-project-settings-marked.png)

*Los títulos de las conversaciones y el nombre de la cuenta están cambiados a ejemplos, y el sitio donde sale el nombre del modelo está borrado. El «Proyecto de ejemplo» se eliminó después de hacer la captura.*

> **Si eliminas el proyecto**, la ventana de confirmación dice «Este proyecto y todos los chats que contiene se eliminarán de forma permanente de Chat y Work». Los archivos guardados en la biblioteca no se borran. Las conversaciones que quieras conservar, muévelas a otro sitio antes de eliminar (comprobado en la pantalla web el 2026-10-23).

### Las instrucciones del proyecto van primero

Las instrucciones personalizadas del [capítulo 5](05-memory.md) se aplican a todas las conversaciones. **Las instrucciones del proyecto se aplican solo dentro de ese proyecto** y tienen **prioridad** sobre las instrucciones personalizadas.[^projects]
Por ejemplo, puedes dejar que normalmente te responda con un trato formal y fijar solo en el proyecto «Estudiar inglés»: «responde solo en inglés».

### Límites según el plan

Puedes crear proyectos sin límite de número. La cantidad de archivos que se pueden meter depende del plan, y se pueden subir hasta 10 archivos a la vez.[^projects]

| Plan | Archivos por proyecto | Personas con las que se puede compartir |
|---|---|---|
| Free | 5 | 5 personas |
| Go · Plus | 25 | 10 personas |
| Pro | 40 | 100 personas |

Business, Enterprise y Edu también tienen 40 archivos por proyecto.[^projects]
Cuando **compartes** un proyecto con otras personas, la memoria cambia automáticamente a «memoria exclusiva del proyecto». Una vez cambiada, no se puede volver a la «memoria predeterminada».[^projects]
Además, los PDF que metes en un proyecto pueden leerse sin las imágenes ni los gráficos. Si las imágenes del PDF son importantes, adjúntalo directamente al chat ([capítulo 4](04-files-images.md)).[^files]

<Quiz id="ch107-projects" />

## Meter en el proyecto una plantilla para reutilizar

En el [capítulo 8 de la etapa 1](../00-common/08-meta-prompting.md) aprendiste a convertir una petición que ha salido bien en una **plantilla** que reutilizas cambiando solo los huecos.
El proyecto es un buen sitio para guardar esa plantilla. Prueba a meter la plantilla en las instrucciones del proyecto. No tendrás que pegarla en cada conversación.

```
En las conversaciones de este proyecto, ordena las notas de trabajo que te envíe como informe semanal.
- Hazlo en una tabla de tres columnas: «Terminado / En curso / Plan de la próxima semana»
- Escribe cada punto en una línea
- No inventes lo que no esté en las notas; márcalo como [por confirmar]
```

Si lo dejas así, en una conversación nueva del proyecto solo tendrás que pegar las notas de esta semana.

<Quiz id="ch107-template" />

## Complementos: añadir otros servicios y formas de trabajar

Un **complemento** (plugin) es un paquete que añade funciones a ChatGPT. Está formado por **skills** (skill, instrucciones que describen una forma de trabajar definida), aplicaciones conectadas, plantillas de aplicaciones y extensiones.[^plugins]
El 2026-07-09 el antiguo «Directorio de aplicaciones» pasó a ser el **directorio de complementos**. Las aplicaciones que ya habías conectado se mantienen.[^rn]

- Abre el directorio de complementos desde «Complementos» en el menú lateral y échale un vistazo. El directorio se ve en todos los planes.[^plugins]
- Si hay un complemento que te gusta, pulsa «Instalar complemento» (플러그인 설치). Si hace falta una cuenta de otro servicio, pulsa «Conectar» (연결).[^plugins]

![Pantalla con «Complementos» abierto en el menú lateral. Arriba están las pestañas «Complementos» y «Skills» y a la derecha el botón «Añadir» (추가); en el centro, la casilla «Buscar complementos», la división «Públicos»/«Personales» y las listas «Populares» y «Complementos nuevos y destacados»; cada elemento se conecta con un botón +](../../../guide/11-chatgpt/assets/shot-11-plugins-marked.png)

*Los títulos de las conversaciones y el nombre de la cuenta están cambiados a ejemplos.* Si pulsas ① «Complementos» en el menú lateral, aparecen ② las pestañas «Complementos» y «Skills», ③ el botón «Añadir», ④ la casilla «Buscar complementos», ⑤ la división «Públicos»/«Personales» y ⑥ la lista de populares. La conexión se hace con ⑦ el botón + a la derecha de cada elemento.

Hay cuatro maneras de usarlos.[^plugins]

| Manera | Ejemplo |
|---|---|
| Preguntar sin más | Si tiene relación, ChatGPT usa el complemento por su cuenta |
| Escribir el nombre después de `@` | `@PDF Extrae solo las fechas de este contrato` |
| Escribir el nombre en el botón + | Eliges en la lista de complementos de la parte de abajo del menú + |
| Pulsar «Plugins» en el cuadro de escritura | Eliges entre los complementos instalados |

Si conectas otro servicio (correo, almacenamiento, etc.), ChatGPT podrá leer lo que hay dentro. Antes de conectar, comprueba qué información se intercambia ([capítulo 8](08-privacy.md)).

En los planes Free y Go también se ven el directorio (la pantalla con la lista de complementos) y las recomendaciones. Pero no se pueden usar las **extensiones** del complemento (extension, funciones de ejecución adicionales que vienen en el complemento).[^troubleshoot]

<Quiz id="ch107-plugins" />

## Fijar los permisos de las aplicaciones conectadas

Si conectas una aplicación como Gmail o Google Drive, ChatGPT puede **solo leer** lo que hay dentro. Pero también puede llegar a hacer **cambios**, como enviar un correo o modificar un archivo. Hasta dónde puede hacerlo sin preguntar se decide en «Configuración» → «Complementos» → «Permisos predeterminados» (기본 권한).[^permissions][^screen-plugin]

Estas son las opciones de la pantalla.

- «Preguntar siempre» (항상 묻기): pregunta antes, tanto para leer como para cambiar.
- «Permitir herramientas de solo lectura» (읽기 전용 도구 허용): lee sin preguntar y pregunta antes de cambiar.
- «Permitir herramientas de bajo riesgo» (위험도가 낮은 도구 허용): hace por su cuenta lo de poco riesgo, y lo delicado puede rechazarse. Si en una cuenta personal no has cambiado el ajuste, normalmente es el valor predeterminado. Si hay una política de la empresa, esa va primero.[^health]

En la ayuda también aparece «Permitir todo» (Allow all actions), que lo hace todo sin preguntar. La propia ayuda dice de esa opción que **"el riesgo aumenta"**.[^permissions] El 24 de octubre de 2026 en la pantalla de esta guía solo se veían las tres de arriba. Te recomiendo dejarlo al principio en «Preguntar siempre» o en «Permitir herramientas de solo lectura» y ampliarlo cuando te hayas acostumbrado (es una sugerencia de esta guía).

- **Lee la tarjeta de aprobación y luego pulsa.** La tarjeta de aprobación (approval, un cuadro que pide permiso antes de cambiar algo) es lo que sale ante tareas que cambian cosas, como enviar un correo o borrar un archivo: ChatGPT pregunta «¿Puedo hacerlo?». Antes de pulsar, pregúntate: ¿de qué aplicación se trata? ¿de qué cuenta? ¿qué va a hacer?[^permissions]
- **Conéctala con la cuenta que tiene los materiales.** Si conectas tu cuenta personal de Google, no verá los archivos que solo están en la cuenta de la empresa. Aunque la conectes, no puede ver más de lo que esa cuenta ya podría abrir.[^accounts]
- **Si está conectada pero no se usa**, en un chat nuevo ordénaselo de forma concreta con `@nombredelaaplicación`. Porque, aunque se vea como «Conectada», a veces no se puede usar en la conversación o en el dispositivo actuales.[^troubleshoot]
- **Aunque cortes la conexión, algo se queda.** Si en «Configuración» → «Complementos» eliges la aplicación y cortas la conexión, lo único que pasa es que en adelante no podrá leer esa aplicación. Lo que ya ha entrado en las conversaciones, los archivos y la memoria no se borra ([capítulo 5](05-memory.md#como-borrar-lo-recordado)). El interruptor de permitir el entrenamiento también se queda igual.[^accounts]
- Los permisos de las aplicaciones funcionan **aparte** de los ajustes de datos, como permitir el entrenamiento. Por eso, aunque restrinjas los permisos, el ajuste de entrenamiento sigue igual ([capítulo 8](08-privacy.md#evitar-que-se-usen-para-entrenar)).[^permissions]

<Quiz id="ch107-permissions" />

## La diferencia entre Chat y Work

El 2026-07-09 salió **ChatGPT Work** y la parte de arriba de la pantalla se dividió en «Chat» y «Work».[^rn][^work]

| | Chat | Work |
|---|---|---|
| Qué hace | Conversa preguntando y respondiendo | Se encarga de un trabajo largo con varios pasos y lo lleva hasta el final |
| Resultado | Un texto de respuesta | Un producto terminado: documento, tabla, presentación, informe, Sites (sitio web sencillo) |
| Ejemplo | «Resume el acta de la reunión en tres líneas» | «Hazme una presentación de 10 diapositivas con el archivo de ventas de este trimestre» |

- Work en la web y en el móvil se usa en los **planes de pago, excepto Free y Go**. Free y Go solo lo pueden usar de forma limitada en la aplicación de escritorio.[^rn][^pricing]
- En Work puedes **programar** tareas. Puedes hacer que se ejecuten una sola vez, con un calendario repetido o cuando se cumpla una condición. Las programaciones se gestionan en «Programaciones» (예약) del menú lateral.[^work][^screen]
- Para usar Work dentro de un proyecto, elige el botón + → «Iniciar Work en el proyecto» (프로젝트에서 Work 시작).[^screen]
- **Piensa con Chat y crea con Work.** Dentro de un mismo proyecto, Chat y Work usan los mismos materiales. Por eso puedes ir puliendo la estructura preguntando en Chat y, cuando estés listo para crear, pasar a Work sin tener que volver a explicar desde el principio.[^academy-content]
- Sites salió en beta pública el 2026-07-09 y no se puede usar en Free ni Go.[^rn]
- La aplicación de ordenador (macOS y Windows) tiene un **navegador integrado**. En las conversaciones de Work y Codex, ChatGPT puede abrir sitios web directamente con este navegador para trabajar. Si hace falta iniciar sesión, **escribe la contraseña solo en la pantalla de ese navegador y nunca en la ventana de la conversación.** Trata lo que está escrito en los sitios web como contenido en el que no se puede confiar.[^browser] Aunque una instrucción oculta en un sitio web le diga a ChatGPT que entregue mis datos, eso no es un permiso mío.[^sitetools]

![Pantalla con la parte de arriba cambiada a «Work». Debajo de «¿Qué trabajo hacemos?» (어떤 작업을 할까요?) hay un cuadro de escritura «Iniciar Work con ChatGPT» y los botones «Elegir proyecto», «Archivos», «Complementos» y «Abrir la aplicación de escritorio»](../../../guide/11-chatgpt/assets/shot-12-work-marked.png)

① Si cambias la parte de arriba a «Work», aparecen ② el cuadro de escritura «Iniciar Work con ChatGPT», ③ «Elegir proyecto», «Archivos» y «Complementos», y ④ el botón «Abrir la aplicación de escritorio».

*Los títulos de las conversaciones y el nombre de la cuenta están cambiados a ejemplos, y el sitio donde sale el nombre del modelo está borrado. En la pantalla real, debajo salen tarjetas recomendadas «Descubre lo que Work puede hacer» (Work가 할 수 있는 일을 살펴보세요), pero el contenido es distinto en cada cuenta, así que las he recortado.*

<Quiz id="ch107-work" />

## Funciones que terminan: los GPT personalizados y el modo agente

De lo que se veía en guías o vídeos antiguos, dos funciones han terminado o van a terminar.

Los **GPT personalizados** (custom GPTs, tu propio ChatGPT creado con instrucciones y archivos) **está previsto que terminen el 2026-12-11**. Después se pasan a los complementos. Los Enterprise aprobados tienen una prórroga hasta el 2027-02-11. Aunque terminen, se conserva el historial de las conversaciones con los GPT.[^gpts]
En los planes personales (Free, Go, Plus y Pro) **ya no se pueden crear ni publicar GPT nuevos.** Si no ves el botón de crear, no es un error.
Además, los GPT no usan mi memoria, mis instrucciones personalizadas ni mis conversaciones anteriores. Si un GPT está conectado a un servicio externo, parte de lo que escribo puede pasar a esa empresa. OpenAI no vigila cómo trata esa empresa los datos. Por eso, usa solo GPT creados por quien sea de fiar.[^gpt-help]

Si tienes un GPT que hiciste tú, prepárate así antes de que termine.

1. **Copia el texto de las instrucciones** que escribiste al crear el GPT y guárdalo en el bloc de notas, y guarda aparte en tu ordenador también los **archivos de consulta** que habías metido.
2. Comprueba el método oficial para trasladarlo en la ayuda «Custom GPT retirement and migration FAQ»[^gpts].
3. Si el GPT lo usabas solo tú, también puedes crear un **proyecto** con las instrucciones y los archivos guardados y usarlo de forma parecida (es una sugerencia de esta guía).

<!-- Falta captura de pantalla: parte de la pantalla de edición de un GPT personalizado en la que se ven las instrucciones y los archivos -->

El **modo agente** (agent mode, la antigua función con la que ChatGPT resolvía por sí mismo tareas de varios pasos) **ya no se puede usar.** Su lugar lo ocupa Work.[^agent]
Aunque en la parte de abajo de la ayuda quede el modo de uso antiguo, no lo sigas.

Aparte de estas, hay otros dos servicios de OpenAI que se ven en vídeos y materiales y que ya han terminado.

- **Sora** (la aplicación que crea vídeos): la web y la aplicación terminaron el 2026-04-26.[^sora]
- **ChatGPT Atlas** (un navegador web con ChatGPT integrado): se ha retirado y ya no recibe actualizaciones. Aunque borres la aplicación, **la suscripción a ChatGPT no se cancela.**[^atlas]

<Quiz id="ch107-retired" />

## Ver más en vídeo

Es un vídeo de presentación hecho por la propia empresa. La pantalla y los nombres de las funciones pueden ser distintos de los de este capítulo.

> El siguiente vídeo está en **inglés**. En los ajustes del vídeo de YouTube (la rueda dentada) → Subtítulos → **Traducción automática → español**, puedes verlo con subtítulos en español. El vídeo se reproduce directamente dentro de esta página.

**[Get started with ChatGPT Work](https://www.youtube.com/watch?v=GphgJjaKKhw)** · OpenAI · Para quien quiera ver los primeros pasos para encargarle trabajo a Work (julio de 2026, 6 minutos)

<YouTube id="GphgJjaKKhw" title="Get started with ChatGPT Work" />

## Pruébalo tú mismo

1. Con «Proyecto nuevo» crea un proyecto «Informe semanal» y mete la plantilla de arriba en las instrucciones del proyecto.
2. Abre una conversación nueva dentro del proyecto y envía cinco líneas cualesquiera sobre lo que has hecho esta semana. Mira si la tabla sale como dicen las instrucciones.
3. Abre «Complementos» en el menú lateral, echa un vistazo a los complementos que hay y llama a uno escribiendo su nombre después de `@`.
4. Si tienes un plan de pago, cambia arriba a «Work» y pide que el informe del paso 2 se convierta en un documento de una página.

**Proyecto continuo** ([Preparar un club de lectura](../00-common/practice-kit.md)): antes de subir members.csv, ábrelo y mira que no tenga datos personales como nombres o contactos. Después crea un proyecto «Club de lectura», sube los cuatro archivos de ejemplo (memo-next-month.txt, minutes-last-meeting.txt, members.csv, fees.csv) y mete en las instrucciones del proyecto una línea de las instrucciones del capítulo 5. En una conversación nueva del proyecto, envía solo «Escríbeme un borrador del aviso de noviembre» y mira si entra el contenido de la nota y del acta.

## Resumen

- El proyecto es una carpeta que agrupa conversaciones, archivos e instrucciones. Las instrucciones del proyecto tienen prioridad sobre las instrucciones personalizadas dentro del proyecto.
- Archivos por proyecto: Free 5, Go y Plus 25, Pro 40. Si compartes, la memoria queda fijada como «memoria exclusiva del proyecto».
- Es cómodo meter en las instrucciones del proyecto la plantilla que vas a reutilizar.
- Los complementos se buscan en «Complementos» del menú lateral y se usan preguntando, con `@`, con el botón + o con «Plugins».
- Chat es para conversar; Work, para trabajos largos y resultados terminados. Work en la web y en el móvil se usa en los planes de pago, excepto Free y Go.
- Los permisos predeterminados de las aplicaciones conectadas se eligen en «Configuración» → «Complementos». De la tarjeta de aprobación lee la aplicación, la cuenta y lo que va a hacer antes de pulsar, y aunque cortes la conexión, lo que ya ha entrado se queda.
- Los GPT personalizados está previsto que terminen el 2026-12-11, así que guarda antes las instrucciones y los archivos. Los planes personales ya no pueden crear GPT nuevos. El modo agente, Sora y Atlas ya han terminado.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Project | Proyecto | Carpeta donde se reúnen las conversaciones, los archivos y las instrucciones de un trabajo |
| Plugin | Complemento | Paquete que añade funciones a ChatGPT o conexiones con otros servicios |
| Skill | Skill (habilidad) | Instrucciones que describen una forma de trabajar definida. Una parte del complemento |
| Plugin Directory | Directorio de complementos | Pantalla con la lista donde se buscan e instalan los complementos |
| ChatGPT Work | ChatGPT Work | Función que se encarga de trabajos largos de varios pasos y crea un resultado terminado |
| Custom GPTs | GPT personalizados | Tu propio ChatGPT creado con instrucciones y archivos. Previsto que termine el 2026-12-11 |
| Agent Mode | Modo agente | Antigua función que resolvía por sí misma tareas de varios pasos. Ahora la sustituye Work |
| Approval | Tarjeta de aprobación | Cuadro con el que ChatGPT pide permiso antes de cambiar algo con una aplicación |
| Permission | Permiso | El margen de lo que ChatGPT puede hacer sin preguntar en una aplicación conectada |

<ChapterDone :chapter="107" />

Siguiente capítulo: [Capítulo 8. Privacidad y gestión de datos](08-privacy.md)

[^projects]: Ayuda de OpenAI, «Projects in ChatGPT». https://help.openai.com/en/articles/10169521 (consultado el 2026-10-23)
[^files]: Ayuda de OpenAI, «Uploading files and audio to ChatGPT». https://help.openai.com/en/articles/8555545 (consultado el 2026-10-23)
[^plugins]: Ayuda de OpenAI, «Plugins in ChatGPT». https://help.openai.com/en/articles/20001256 (consultado el 2026-10-23)
[^work]: Ayuda de OpenAI, «ChatGPT Work and Codex». https://help.openai.com/en/articles/20001275 (consultado el 2026-10-23)
[^rn]: Ayuda de OpenAI, «ChatGPT release notes», entrada del 2026-07-09. https://help.openai.com/en/articles/6825453 (consultado el 2026-10-23)
[^pricing]: OpenAI, «Planes y precios». https://openai.com/chatgpt/pricing (consultado el 2026-10-23)
[^gpts]: Ayuda de OpenAI, «Custom GPT retirement and migration FAQ». https://help.openai.com/en/articles/20001519 (consultado el 2026-10-23)
[^agent]: Ayuda de OpenAI, «ChatGPT agent». "ChatGPT agent is no longer available. Use ChatGPT Work" https://help.openai.com/en/articles/11752874 (consultado el 2026-10-23)
[^screen]: Comprobado directamente en la pantalla web de ChatGPT (plan Plus, en coreano). El menú lateral y el menú + del cuadro de escritura (consultado el 2026-10-23)
[^screen-plugin]: Comprobado directamente en la lista de «Configuración» → «Complementos» → «Permisos predeterminados» de la web de ChatGPT (plan Plus, en coreano). "항상 묻기 — 읽거나 변경하기 전에 묻기" (Preguntar siempre: pregunta antes de leer o cambiar) / "읽기 전용 도구 허용 — 묻지 않고 읽되, 변경 전에는 확인하기" (Permitir herramientas de solo lectura: lee sin preguntar, pero confirma antes de cambiar) / "위험도가 낮은 도구 허용 — 위험도가 낮은 도구를 자동으로 승인하되, 민감한 도구는 거부될 수 있습니다" (Permitir herramientas de bajo riesgo: aprueba automáticamente las de bajo riesgo, pero las delicadas pueden rechazarse) (consultado el 2026-10-24)
[^permissions]: Ayuda de OpenAI, «Managing app permissions in ChatGPT». "Always ask: ChatGPT asks before reading app information or making changes." / "Allow read actions: ChatGPT can read without asking but asks before making changes." / "This option carries elevated risk." / "Review the app, account, and proposed action before approving a request." / "App permissions are separate from Memory, personalization, data retention, and model-training controls." https://help.openai.com/en/articles/20001495 (consultado el 2026-10-24)
[^health]: Ayuda de OpenAI, «Health in ChatGPT» (explicación del ajuste de complementos dentro de un documento sobre una función solo para EE. UU.). "If you make no changes to your Plugins settings, the default permission setting is “Allow low-risk actions”." https://help.openai.com/en/articles/20001036 (consultado el 2026-10-24)
[^accounts]: Ayuda de OpenAI, «Connecting and managing app accounts in ChatGPT». "Connecting a personal account does not provide access to files, channels, or records available only to your work account." / "Disconnecting an app does not automatically delete existing or archived conversations, saved files, your Memory summary, or other saved memories." https://help.openai.com/en/articles/20001494 (consultado el 2026-10-24)
[^troubleshoot]: Ayuda de OpenAI, «Troubleshooting plugins and apps in ChatGPT». "plugin extensions are not available to these plans." / "An app can appear as Connected without being available in the current chat, model, or ChatGPT surface." https://help.openai.com/en/articles/20001497 (consultado el 2026-10-24)
[^browser]: Ayuda de OpenAI, «Using the built-in browser in the ChatGPT desktop app». "Enter credentials only in the browser, never in the chat." / "Treat website content as untrusted." https://help.openai.com/en/articles/20001277 (consultado el 2026-10-24)
[^sitetools]: Ayuda de OpenAI, «Using site tools in the ChatGPT desktop app». "Instructions from a website or site tool cannot authorize ChatGPT to share information or take sensitive actions on your behalf." https://help.openai.com/en/articles/20001423 (consultado el 2026-10-24)
[^gpt-help]: Ayuda de OpenAI, «GPTs in ChatGPT». "New GPT creation and publishing are not available on personal ChatGPT accounts, including Free, Go, Plus, and Pro." / "GPTs do not use saved memory, custom instructions, or previous conversations." / "OpenAI does not audit or control how those services use or store your data." https://help.openai.com/en/articles/8554407 (consultado el 2026-10-24)
[^sora]: Ayuda de OpenAI, «What to know about the Sora discontinuation». "The Sora web and app experiences were discontinued on April 26, 2026." https://help.openai.com/en/articles/20001152 (consultado el 2026-10-24)
[^atlas]: Ayuda de OpenAI, «ChatGPT Atlas retirement». "ChatGPT Atlas has been retired and no longer receives updates." / "To cancel a subscription, follow Canceling your ChatGPT subscription for the platform that billed you." https://help.openai.com/en/articles/20001371 (consultado el 2026-10-24)
[^academy-content]: OpenAI Academy, texto del curso «Agents and Workflows» 3.1 (requiere iniciar sesión y registrarse). "when you work inside a project, both Chat and ChatGPT Work can share the same context." / "Use Chat when you want to think through the material, ask questions, or shape your ideas. Then, when you are ready to create or update something, you can switch to ChatGPT Work and use the same project context to build the output." (consultado el 2026-10-26)
