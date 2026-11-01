# Capítulo 8. Encargarle trabajo: tareas, programación, Gemini en Chrome y normas de seguridad

> **En una línea**: si un trabajo necesita varios pasos, encárgalo con **«Tareas»** (작업), bajo el cuadro de texto. Para que se ejecute solo en los momentos que fijes, pon una **programación.**
> Al encargar algo, **no escribas en la conversación datos de inicio de sesión ni de pago, y lee con atención las pantallas que te piden permiso.** Vigilar es la mejor medida de seguridad.

Las pantallas corresponden a la versión web de octubre de 2026, y las imágenes son de la pantalla en coreano del plan de pago (Google AI Pro).

## Tareas: encargar un trabajo entero en lugar de chatear

El chat es el sitio donde preguntas y recibes respuestas. Una **tarea** (Task) es el sitio donde **encargas entero** un trabajo de varios pasos.[^tasks]
Gemini resuelve el trabajo usando información como las aplicaciones conectadas, las skills, las conversaciones anteriores y los sitios web en los que has iniciado sesión ([capítulo 7](07-skills-apps.md)).[^tasks]

Estos son los ejemplos que da la ayuda.[^tasks]

- Resumir o archivar los boletines de la bandeja de entrada y crear una lista de tareas urgentes para después de las vacaciones
- Avisarte cuando el precio de los billetes de avión o del hotel baje hasta tu presupuesto
- Convertir los resultados de una investigación, con sus fuentes, en un archivo PDF, un documento, una tabla o una presentación

Para usarlo hay que cumplir todas estas condiciones.[^tasks]

- Tener 18 años o más y una **cuenta personal de Google** (las cuentas de empresa o de centros educativos todavía no)
- Estar suscrito a **Google AI Pro o Ultra**
- «Guardar actividad» (활동 기록 보관) activado y usar «Inteligencia personal» (개인 인텔리전스) ([capítulo 5](05-memory.md))
- Solo funciona en la web, en la aplicación del móvil y en la de Mac. No se puede usar en el Espacio Económico Europeo, Nigeria, Suiza ni el Reino Unido. En la cuenta de Corea de esta guía, «Tareas» se abrió.[^screen]

### Empezar una tarea

![Debajo del cuadro de texto, en ① el botón de cambio «Chat» y «Tareas», con «Tareas» seleccionado. Bajo el mensaje central "¡Estoy listo para empezar! ¿Qué tarea es?" (시작할 준비가 됐어요! 어떤 작업인가요?), tienen números rojos ② el texto de ayuda del cuadro "Describe la tarea" (작업을 설명하세요) y ③ «Programadas» (예약됨) del menú lateral](../../../guide/12-gemini/assets/shot-20-task-marked.png)

**Los números rojos son los mismos que los de la lista de abajo.**[^screen]

- ① Bajo el cuadro de texto, entre **«Chat» y «Tareas»**, pulsa «Tareas».
- ② El texto de ayuda cambia a "Describe la tarea". Escribe el trabajo que quieres encargar y envíalo. Para usar una skill a la vez, elígela con `@`; también puedes adjuntar archivos.[^tasks]
- ③ Las tareas con una programación se ven en **«Programadas»** del menú lateral (en la sección siguiente).

Si es tu primera vez y no sabes qué encargar, escribe **«pregúntame»** (물어봐 줘) en el cuadro de texto de las tareas. La ayuda de la versión en coreano dice que, si escribes «ajustes», «empezar» o «pregúntame», te ayuda a crear conversando tu primera skill y tu primera tarea (en la versión en inglés, set up, get started, interview me).[^tasks]

Mientras el trabajo avanza, también puedes escribir más instrucciones en el cuadro de texto para cambiar el rumbo. Lo que ya se ha hecho se mantiene.[^tasks]

```
De los correos que he recibido en la última semana, elige solo los boletines y ordena en una tabla el asunto y una línea con lo esencial de cada uno.
No borres ni archives ningún correo; enséñame solo la tabla.
```

Si **anotas lo que no debe hacer**, como en la última línea, ayuda a evitar acciones que no quieres.

Hay cosas que conviene saber.[^tasks][^threads]

- Pueden ejecutarse **hasta 15 a la vez.** Si te pasas, tienes que esperar a que termine alguna.
- Las tareas también gastan uso. Cuánto depende del plan y de lo complejo que sea el trabajo.
- Las tareas aparecen también en la lista de conversaciones del menú lateral, y un icono indica su estado. Para que salgan en la lista, «Guardar actividad» tiene que estar activado.
- Si borras la conversación de una tarea, se borra también la programación vinculada a esa tarea. Los archivos creados con la tarea se conservan.

<Quiz id="ch308-task" />

## Que se haga solo en los momentos que fijes: programación

Una **programación** (Schedule) es una función que hace que Gemini haga un trabajo por sí solo en los momentos que has fijado.[^schedule] Hay dos con nombres parecidos, así que distínguelas.

| | Programación del chat | Programación de las tareas |
|---|---|---|
| Qué hace | Recibir un resumen o novedades a una hora fija | Ejecutar una tarea en momentos fijos |
| Cuántas puedes tener activas | 10 | 50 |
| Plan necesario | No figura entre las condiciones (se está abriendo poco a poco) | Google AI Pro y Ultra |

Fuente: ayuda de Google[^chatschedule][^schedule]

### Programar desde el chat

Normalmente, basta con enviar en el chat **cuándo y con qué frecuencia** quieres recibirlo. Gemini responde con un resumen de la programación.[^chatschedule]

```
Cada mañana a las 7 resúmeme el tiempo de hoy y tres noticias que convenga saber de camino al trabajo.
```

- El contenido se prepara de antemano **en la hora anterior a la hora de entrega.** Por eso la información que cambia rápido, como las cotizaciones de bolsa, puede no ser la más reciente. Sirve para resúmenes y balances del día.[^chatschedule]
- «Guardar actividad» tiene que estar activado.[^chatschedule]

### Programar una tarea

En las tareas, el momento se fija de tres maneras.[^schedule]

- **Por hora**: una vez, cada hora, cada día, cada semana, cada mes o cada año
- **Vigilar Gmail**: cuando llegue un correo que cumpla una condición
- **Vigilar un tema**: cuando haya novedades sobre un tema como noticias, finanzas o deportes

La «vigilancia» **no es adecuada para lo muy urgente.** La ayuda pone como ejemplo cosas como «avísame en cuanto salgan las entradas». Además, la hora de ejecución no es exacta, sino aproximada.[^schedule]

### Gestionar desde «Programadas»

Las programaciones se reúnen en **«Programadas»** (예약됨), en el menú lateral. En la pantalla de esta guía había una marca «Beta» (베타), un menú para filtrar por estado y un botón «Crear tarea programada» (예약 작업 만들기).[^screen]

- Con «Crear tarea programada» solo puedes crear a mano **programaciones por hora.** La vigilancia de correos o de temas se crea de palabra en la conversación de la tarea.[^schedule]
- Una programación nueva se puede probar enseguida con «Más» (더보기) → «Ejecutar ahora» (지금 실행).[^schedule]
- Una programación que llevas mucho tiempo sin revisar puede pausarse sola. En la pantalla también salió el aviso "Algunas tareas programadas inactivas se han pausado" (비활성 상태의 일부 예약된 작업이 일시중지되었습니다). Puedes volver a activarla cuando quieras.[^chatschedule][^screen]

<Quiz id="ch308-schedule" />

## Tareas que usan el navegador, y los permisos

También puedes encargarle trabajos en los que **hay que pulsar directamente en sitios web**, como comprar, reservar un viaje o reservar mesa en un restaurante.[^tasks] En ese caso, Gemini usa uno de los dos navegadores.[^tasks]

| | El Chrome de mi ordenador | El navegador remoto en la nube |
|---|---|---|
| Sitios a los que entra | Incluso los sitios en los que yo he iniciado sesión | Desde un navegador exclusivo de Gemini |
| Dónde se usa | Solo en el ordenador | En el móvil se usa solo este |
| Si apago el dispositivo | Tiene que estar encendido. Si lo apago, puede pasar al navegador remoto | Sigue adelante |
| Si hace falta iniciar sesión | — | Se detiene y lo continúo yo |

Fuente: ayuda de Google[^tasks]

Las tareas que usan la web **piden confirmación antes, cada vez, por defecto.**[^tasks] Si lo cambias a «Permitir siempre» en los ajustes, usa la web sin preguntar.[^permission]

### La pantalla que pide permiso

Antes de usar el navegador, cambiar algo dentro de una aplicación o enviar información que pueda ser sensible, Gemini te pide permiso en la conversación de la tarea.[^permission] Las respuestas que puedes elegir son estas (con los nombres de la versión en coreano de la ayuda).[^permission]

- **«No permitir»** (허용 안함): se detiene. Lo que has rechazado no lo vuelve a intentar de otra manera.[^tasks]
- **«Permitir una vez»** (한 번 허용): autoriza solo este paso.
- **«Permitir en este chat»** (이 채팅에 허용): autoriza hasta que termine esta conversación de la tarea. Solo sale en las acciones de las aplicaciones de Google conectadas.
- **«Permitir siempre»** (항상 허용): autoriza **esa acción** en todas las conversaciones de tareas futuras. **Con una sola pulsación se cambia el ajuste** y se sigue aplicando.

Al principio usa **solo «Permitir una vez».** No es tarde para ampliarlo cuando ya te hayas acostumbrado a qué cosas te pregunta.

Aunque lo dejes en «Permitir siempre», **las acciones importantes se vuelven a confirmar**, como enviar mensajes, comprar, pagar o enviar formularios web. También se detiene y pregunta antes de enviar información sensible, como datos de salud, financieros o números de documentos de identidad.[^permission][^tasks]
Para cambiar el modo de permiso de cada aplicación, en «Personalización» (맞춤설정) → «Conectores» (커넥터) pulsa la aplicación y, junto a «Acciones de la aplicación» (앱 작업), elige «Permitir siempre» o «Confirmar siempre» (항상 확인).[^permission]

### Detener y retomar el control

Si Gemini hace algo que no te gusta, para enseguida. En el chat se pulsa **«Detener respuesta»** (대답 중지); en el navegador, **«Control directo»** (직접 제어).[^tasks] En los pasos en los que hay que escribir una contraseña o datos de pago, Gemini puede detenerse y pedirte que lo controles tú.[^tasks]

### Ajustes de las tareas

En el menú de ajustes «Ajustes de tareas» (작업 설정) ([capítulo 2](02-screen-tour.md#pantalla-de-ajustes-cuenta-preferencias-y-privacidad)) hay tres elementos.[^screen][^tasks]

| Elemento | Qué hace |
|---|---|
| «Entregar tareas con el modo de tareas» (작업 모드를 사용하여 작업 전달) → «Desactivar» (사용 중지) | Desactiva la función de tareas. Se borran el historial de uso de internet y los archivos de ejecución remota de código, y las programaciones se detienen (no se borran) |
| «Eliminar datos del navegador remoto» (원격 브라우저 데이터 삭제) → «Eliminar» (삭제) | Borra las cookies del navegador remoto y cierra la sesión en los sitios |
| «Eliminar datos de ejecución remota de código» (원격 코드 실행 데이터 삭제) → «Eliminar» | Borra los archivos y demás que quedan en el ordenador remoto |

Fuente: pantalla web de Gemini[^screen]

Aunque desactives la función de tareas, no se borran las tareas, las conversaciones ni los archivos que ya hayas creado.[^tasks]

<Quiz id="ch308-permission" />

## Antes de encargar: normas de seguridad

Las tareas son una **función en fase experimental.** La ayuda dice que **que el usuario vigile es la medida de seguridad más importante.**[^tasks] Antes de encargar algo, cumple estas cinco normas.

1. **No escribas datos de inicio de sesión, datos de pago ni información sensible en la conversación de la tarea.** Si hace falta, controla tú directamente el navegador y escríbelo en la propia página web.[^tasks]
2. **No programes los trabajos delicados.** Si una programación se ejecuta cuando estás sin conexión, puede que no puedas impedir que Gemini haga una acción equivocada.[^tasks]
3. **Lee con atención las pantallas que piden permiso y las preguntas que te hace.** Encarga solo lo que puedas dejar con tranquilidad.[^tasks]
4. **Ten cuidado con las instrucciones ocultas en sitios o correos que no conoces.** En una página web o en un correo pueden esconder frases pensadas para engañar a la IA. A esto se le llama **inyección de prompt** (Prompt injection, manejar a la IA con instrucciones ocultas). Si la IA que está trabajando lee una frase así, puede hacer cosas disparatadas, y aunque haya medidas de seguridad, no se bloquean todos los riesgos.[^tasks][^inject]
5. **Cuando conectes una carpeta en la aplicación de Mac, no pongas archivos que no puedas perder.** Un archivo que Gemini borre mientras trabaja puede no poder recuperarse. Gemini solo ve las carpetas y archivos que yo meta en «Carpetas conectadas» (연결된 폴더).[^mac]

La inyección de prompt ya la vimos en la etapa 1 ([capítulo 9 de la etapa 1](../00-common/09-safety.md#_4-instrucciones-ocultas-—-inyeccion-de-instrucciones-prompt-injection)). Google también aconseja tener cuidado con las conversaciones de Gemini o las aplicaciones de Canvas que te comparta alguien que no conoces.[^inject]

<Quiz id="ch308-safety" />

## Gemini en Chrome

También puedes llamar a Gemini desde el **navegador Chrome** del ordenador. Puedes hacer que resuma la página que estás viendo, explique un concepto difícil o busque una respuesta dentro de la página.[^chrome]

- Se usa en la **última versión de Chrome** del ordenador (Chromebook Plus, Mac o Windows).[^chrome] Si tienes **18 años o más**, Corea está en la lista de regiones admitidas y el coreano está entre los idiomas admitidos.[^chromeavail]
- Hay que iniciar sesión en Chrome y **no funciona en modo incógnito.**[^chrome]
- Pulsa **«Preguntar a Gemini»** (Gemini에게 물어보기), arriba en Chrome, y la primera vez acepta su uso siguiendo las indicaciones de la pantalla.[^chrome]
- Por defecto, a Gemini le llega **el contenido de la pestaña actual.** Si escribes `@` en el cuadro de la pregunta, puedes elegir otras pestañas, y puedes enviar juntas **hasta 10** pestañas abiertas.[^chrome]
- Todavía no está abierto a todo el mundo. Se está desplegando por fases.[^chrome]

La **exploración automática** (auto browse), con la que Chrome recorre la web por ti y llega a llenar el carrito o hacer reservas, solo la usan **los mayores de 18 años que estén en Estados Unidos.** En Corea todavía no se puede usar.[^autobrowse]

Esta guía no pudo comprobar esta sección en pantalla, así que la escribió basándose solo en la ayuda.

<Quiz id="ch308-chrome" />

## Pruébalo tú

1. Pulsa «Tareas» bajo el cuadro de texto y envía «pregúntame» (물어봐 줘) para ver qué tareas te propone Gemini (plan de pago).
2. En el chat, pon una programación como «cada lunes a las 8 de la mañana resúmeme el tiempo de esta semana», compruébala en «Programadas» del menú lateral y pruébala a detener o a borrar con «Más».
3. Abre Ajustes → «Ajustes de tareas» y lee el nombre y la descripción de los tres elementos (no hace falta pulsarlos).
4. En el Chrome del ordenador, pulsa «Preguntar a Gemini» y haz que resuma en tres líneas un artículo que estés leyendo.

**Proyecto continuo** ([Preparar el club de lectura](../00-common/practice-kit.md)): pon una programación como «la tarde anterior a la reunión, a las 8, vuelve a recordarme la lista de lo que hay que llevar». Comprueba si la lista que recibas coincide con lo que hay que llevar según el acta y, cuando termine la reunión, borra la programación.

## Resumen

- «Tareas» es el sitio donde encargas entero un trabajo de varios pasos. Hacen falta 18 años o más, una cuenta personal, Google AI Pro o Ultra, «Guardar actividad» e «Inteligencia personal». Se ejecutan hasta 15 a la vez.
- Hay dos tipos de programación. Puedes tener activas hasta 10 del chat y 50 de las tareas. Se gestionan en «Programadas», en el menú lateral.
- Las tareas que usan la web piden permiso por defecto. Al principio usa solo «Permitir una vez» y, si ves algo raro, detén con «Detener respuesta» o «Control directo».
- No escribas en la conversación datos de inicio de sesión ni de pago, y no programes trabajos delicados. Ten cuidado con las instrucciones ocultas (inyección de prompt) y vigila cómo se ejecuta.
- Gemini en Chrome funciona en la última versión de Chrome del ordenador y, si tienes 18 años o más, también en Corea. Se está abriendo por fases, así que puede que todavía no lo veas. La exploración automática es, por ahora, solo para Estados Unidos.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Task | tarea | Función para encargar entero un trabajo de varios pasos |
| Schedule | programación | Ajuste que hace que Gemini trabaje por sí solo en los momentos que fijes |
| Remote browser | navegador remoto | Navegador exclusivo de Gemini que se ejecuta en la nube |
| Take control | control directo | Retomar tú el navegador que estaba usando Gemini |
| Prompt injection | inyección de prompt | Ataque que esconde en una página web o un correo instrucciones para engañar a la IA |
| Auto browse | exploración automática | Función con la que Gemini en Chrome recorre la web por ti |

<ChapterDone :chapter="308" />

Siguiente capítulo: [Capítulo 9. Datos personales y seguridad](09-privacy.md)

[^screen]: Comprobado directamente en la pantalla web de Gemini (Google AI Pro, en coreano). El botón de cambio «Chat» (채팅) y «Tareas» (작업) bajo el cuadro de texto; al pulsar «Tareas», el título "¡Estoy listo para empezar! ¿Qué tarea es?" (시작할 준비가 됐어요! 어떤 작업인가요?) y el texto de ayuda del cuadro "Describe la tarea" (작업을 설명하세요) (la ayuda en coreano llama al botón «Tareas pendientes» (할 일)). En la pantalla «Programadas» (예약됨) del menú lateral, la marca «Beta» (베타), el menú para filtrar por estado y el botón «Crear tarea programada» (예약 작업 만들기) (la ayuda en coreano dice «Crear tarea programada» (예약된 작업 만들기)), y el aviso "Algunas tareas programadas inactivas se han pausado" (비활성 상태의 일부 예약된 작업이 일시중지되었습니다). En Ajustes → pantalla «Ajustes de tareas» (작업 설정): «Entregar tareas con el modo de tareas» (작업 모드를 사용하여 작업 전달) (descripción "Si desactivas esta función, se borran el historial de uso de internet y los archivos de ejecución remota de código y se detienen las tareas programadas" (이 기능을 사용 중지하면 인터넷 사용 기록과 원격 코드 실행 파일이 삭제되고 예약된 작업이 중지됩니다), botón «Desactivar» (사용 중지)), «Eliminar datos del navegador remoto» (원격 브라우저 데이터 삭제) (descripción "Se borran las cookies y se cierra la sesión en los sitios web" (쿠키가 삭제되고 웹사이트에서 로그아웃됩니다), botón «Eliminar» (삭제)), «Eliminar datos de ejecución remota de código» (원격 코드 실행 데이터 삭제) (botón «Eliminar»). La ayuda dice que los datos del navegador remoto se eliminan en «Ajustes > Navegador» (설정 > 브라우저), pero el menú de ajustes de esta pantalla no tenía «Navegador». (consultado el 2026-10-31)
[^tasks]: Ayuda de Google, «Manage your tasks & workflows in Gemini Apps» (en la versión en coreano, «Gemini 앱에서 작업 및 워크플로 관리하기»). "Assign Gemini tasks to automate complex workflows and manage schedules for ongoing tasks." / "Save you money: Gemini can monitor and alert you when the prices of flights and hotels drop within your budget." / "Be 18 or over." / "Have a Google AI Pro or Ultra subscription. Learn how to upgrade." / "Have Keep Activity on." / "Opt in to Personal Intelligence." / "Available wherever Gemini Apps are supported, except in the European Economic Area, Nigeria, Switzerland, and the United Kingdom." / "Only available in the Gemini mobile app, the Gemini app on Mac, and the Gemini web app at gemini.google.com." / "Just enter “set up,” “get started,” or “interview me” in a task." En la versión en coreano: «Basta con escribir en una tarea 'ajustes', 'empezar' o 'pregúntame'» (작업에 '설정', '시작' 또는 '물어봐 줘'를 입력하기만 하면 됩니다.). / "If you close or turn off your device before the task is finished, or the device isn’t available, Gemini might use a remote browser to complete the task." / "Your schedules and tasks are paused and not deleted." / En la versión en coreano: «Modo de control directo: Gemini puede detener la tarea temporalmente y pedirte que "controles directamente" el navegador para hacer tú mismo algunas acciones, como escribir ciertos tipos de información (por ejemplo, una contraseña o datos de pago)» (직접 제어 모드: Gemini는 작업을 일시적으로 중지하고 사용자에게 브라우저를 '직접 제어'해 특정 유형의 정보(예: 비밀번호 또는 결제 세부정보) 입력 등 일부 작업을 직접 수행해 달라고 요청할 수 있습니다.) / "Gemini updates its work without losing progress." / "You can have up to 15 tasks running at a given time." / "To interact with websites, Gemini can connect to the local Chrome browser on your desktop or use a separate remote browser in the cloud." / "If you use your local browser: Gemini has access to all the same sites that you do, including sites you’re signed into." / "If you use the remote browser: Gemini continues to work on your task even if you close your device, and only uses the remote browser on mobile devices. For certain steps, like signing in to a website, the task pauses until you take over and complete that step." / "After that, for every task that involves web browsing, Gemini will ask for confirmation first." / "Do not enter sign-in info, payment details, or info you may find sensitive directly into the task thread. If needed, take control of Gemini’s browser or the local browser. Then, enter relevant details directly on the webpage." / "If a schedule runs when you are offline, you may not be able to stop Gemini from completing an unintended action." / "Sending communications, modifying or deleting your data, making purchases, completing financial transactions, and filling out and submitting web forms." / "Gemini pauses and asks for your permission before it shares info you may find sensitive, such as your health information, financial details, or government ID numbers, with a website or connected app." / "If an AI agent reads these instructions while doing a task, it may be misled into doing unintended things." / "Deny or don’t allow an action: If you deny an action in a task thread, Gemini stops and doesn’t try another way to complete it." / "Gemini’s ability to handle tasks is experimental." / "Your active supervision is the most important way to protect against risk when you assign tasks to Gemini. Review confirmation requests and clarifying questions closely. Assign tasks to Gemini carefully and safely, and only give it tasks you're comfortable with." / "If Gemini is doing something you don't like, you can stop it by selecting Stop response  in the chat or Take control  over Gemini’s browser." / "Your tasks, threads, schedules, or any related files that Gemini updated or created will not be deleted." Nombres en la pantalla en coreano: «Detener respuesta» (대답 중지) y «Control directo» (직접 제어). https://support.google.com/gemini/answer/17094507 (consultado el 2026-10-31)
[^threads]: Ayuda de Google, «Find & manage your tasks in Gemini Apps» (en la versión en coreano, «Gemini 앱에서 할 일 확인 및 관리하기»). "Next to your task threads, check the icon for the progress of your tasks." / "Tasks are only listed in the side bar if you have Keep Activity on." / "If you delete a task thread, it also deletes the following:" https://support.google.com/gemini/answer/17094196 (consultado el 2026-10-31)
[^schedule]: Ayuda de Google, «Create & manage schedules for tasks in Gemini» (en la versión en coreano, «Gemini에서 작업 일정 만들기 및 관리하기»). "A schedule acts as the automated trigger for a task, telling Gemini exactly when to step in and execute your instructions." / "Time-based: schedule tasks to run once, hourly, daily, weekly, monthly, or yearly." / "While Gemini has improved at monitoring and responding to events more quickly, monitors are still not ideal for tracking fast-moving data or performing time-critical tasks like “Let me know when tickets go on sale immediately so I can buy it.”" / "The option to create a schedule manually is only available for time-based schedules." / "Tip: To test your new schedule, hover over the schedule, then click More   Run now ." / "Active schedules limit reached: The current limit for how many active schedules you can have for tasks is 50." / "Schedule run times vary: Scheduled tasks run times are approximate and may not run at the exact moment a time or event condition is met." https://support.google.com/gemini/answer/17094710 (consultado el 2026-10-31)
[^chatschedule]: Ayuda de Google, «Schedules in Gemini Apps» (en la versión en coreano, «Gemini 앱의 일정»). "You can set a delivery time that works for your schedule. Gemini will prepare your content in the background so it’s ready by the scheduled time." / "Important: We’re gradually making this feature available to all personal Google Accounts, so it might not be available to you just yet." / "Have Keep Activity on. This feature isn't available when this setting is off." / "Important: You can have up to 10 active schedules at a time." / "If you aren’t receiving responses for a schedule, it may have been automatically turned off due to inactivity. You can turn the schedule on again at any time." / "Tip: In your prompt, provide details about when and how often you want to schedule the action." / "Responses for schedules are prepared in advance to guarantee timely delivery. As a result, rapidly changing data, like stock prices, won’t be the latest when you receive them. Schedules work best for daily summaries and wrap-ups." https://support.google.com/gemini/answer/16316416 (consultado el 2026-10-31)
[^permission]: Ayuda de Google, «Manage browser & app permissions for tasks in Gemini» (en la versión en coreano, «Gemini에서 작업에 대한 브라우저 및 앱 권한 관리하기»). "Gemini is designed to ask for your permission in the task thread before it uses a browser, makes a change in an app, or performs an action or shares info that you may find sensitive." / "Allow for this chat: Approves the action automatically for the rest of the current thread without changing your Connected Apps settings." / "This option is only available for connected Google products." / "Always allow: Gemini uses the web without asking." / "Always allow: Approves the action for the current thread and all future task threads. Selecting this automatically updates your preference to “Always allow” in your settings." / "Under “App actions,” next to the action, click the dropdown and select your permission preference:" / "To help prevent unintended actions and protect your data, Gemini is designed to apply built-in safeguards that confirm some actions with you even if you set a permission to “Always allow.”" Nombres de las opciones en la versión en coreano: «No permitir» (허용 안함), «Permitir una vez» (한 번 허용), «Permitir en este chat» (이 채팅에 허용), «Permitir siempre» (항상 허용) y «Confirmar siempre» (항상 확인). https://support.google.com/gemini/answer/18766567 (consultado el 2026-10-31)
[^mac]: Ayuda de Google, «Assign tasks in the Gemini app on Mac» (en la versión en coreano, «Mac의 Gemini 앱에서 작업 할당하기»). "Gemini can only view files or directories that you specifically add to the Connected folders toolbar." / "Don’t include any files that you don’t want Gemini to work with or which are too sensitive to lose. You may not be able to recover files once Gemini completes a task for them or is instructed to delete them." https://support.google.com/gemini/answer/17208717 (consultado el 2026-10-31)
[^inject]: Ayuda de Google, «How Gemini Apps help protect users from malicious content & prompt injection» (en la versión en coreano, «Gemini 앱이 악성 콘텐츠 및 프롬프트 인젝션으로부터 사용자를 보호하는 방법»). "Prompt injection is an attempt to elicit an unintended or harmful response from generative AI tools." / "Use caution when interacting with shared content, like public Gemini Apps chats or Gemini Canvas web apps, from unknown providers" https://support.google.com/gemini/answer/16188217 (consultado el 2026-10-31)
[^chrome]: Ayuda de Google, «Use Gemini in Chrome» (en la versión en coreano, «Chrome의 Gemini 사용하기»). "With Gemini in Chrome, you can get AI assistance in your browser to easily get key takeaways, clarify concepts, find answers and more." / "Important: Gemini in Chrome is not available to all users at this time." / "On a computer, you can also share up to 10 open tabs with Gemini." / "Use a Chromebook Plus, Mac, or Windows computer." / "Use the latest version of Chrome." / "Sign in to Chrome. This feature isn’t available in Incognito mode." / "You’ll need to opt in the first time you use Gemini in Chrome. To opt in, follow the onscreen instructions." / "To add an open tab directly in your prompt, enter @ and select the tab. You can also share up to 10 of your open tabs." Nombre del botón en la versión en coreano: «Preguntar a Gemini» (Gemini에게 물어보기). https://support.google.com/gemini/answer/16283624 (consultado el 2026-10-31)
[^chromeavail]: Ayuda de Google, «Gemini in Chrome availability» (en la versión en coreano, «Chrome의 Gemini 사용 가능 여부»). "For users 18 or older, Gemini in Chrome is available in the following locales:" (la lista incluye "South Korea" y la lista de idiomas admitidos incluye "Korean") https://support.google.com/gemini/answer/17140089 (consultado el 2026-10-31)
[^autobrowse]: Ayuda de Google, «Ask Gemini in Chrome to complete tasks for you with auto browse» (en la versión en coreano, «Chrome의 Gemini에게 자동 탐색을 사용하여 작업을 완료하도록 요청하기»). "Be 18 or over and in the US." https://support.google.com/gemini/answer/16821166 (consultado el 2026-10-31)
