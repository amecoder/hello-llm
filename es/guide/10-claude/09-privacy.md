# Capítulo 9. Datos personales y seguridad — saber hasta dónde llegan tus conversaciones

> **En una línea**: si tus conversaciones con Claude se usan para entrenar la IA lo decide un solo interruptor, «Help improve our AI models».
> Las conversaciones que borras se eliminan también del servidor en un plazo de 30 días. En este capítulo verás además dónde están exportar, eliminar la cuenta, denunciar y el apoyo en crisis.

Las pantallas corresponden a la web en octubre de 2026. Los ajustes se están usando en dos versiones, la pantalla nueva y la antigua, así que los nombres y la ubicación de los menús pueden variar según la pantalla.

**Qué no debes escribir** es lo mismo en cualquier IA. Ya se trató en [«Lo que no debes escribir» del capítulo 9 de la etapa 1](../00-common/09-safety.md#lo-que-no-debes-escribir). En este capítulo solo verás **cómo trata Claude las conversaciones que ya has escrito**.

## Decidir si se usan para el entrenamiento — «Help improve our AI models»

El **entrenamiento del modelo** (model training) es cuando una empresa de IA reúne las conversaciones de la gente para enseñar mejor a la siguiente IA. En Claude, tus conversaciones se usan para el entrenamiento principalmente en tres casos.[^training-use]

- Cuando tú **lo has permitido** para el entrenamiento
- Cuando la conversación se ha marcado para una **revisión de seguridad**
- Cuando has enviado un comentario, como un **«me gusta» o «no me gusta»**, debajo de una respuesta[^training-personal]

El primero lo decides tú. No he podido comprobar en la documentación si este interruptor viene activado o desactivado al principio. Así que ábrelo y compruébalo tú mismo.

### Cómo encontrar el interruptor

1. Pulsa tu nombre abajo a la izquierda y abre «Configuración» (설정).
2. En el menú de la izquierda, pulsa «Privacidad» (개인정보보호).[^screen]
3. Activa o desactiva el interruptor ② «Help improve our AI models». Aunque la pantalla esté en coreano, esta línea aparece en inglés.[^screen][^improve-name]

![Pantalla «Configuración» → «Privacidad». Tienen un número rojo: ① «Metadatos de ubicación», ② el interruptor «Help improve our AI models», ③ «Exportar datos», ④ «Chats compartidos» → «Administrar»](../../../guide/10-claude/assets/shot-09-settings-privacy-marked.png)

Es la pantalla del plan gratuito. **Los números rojos señalan los mismos lugares que los números de la lista de abajo.**

- ① **«Metadatos de ubicación» (위치 메타데이터)**: decides si se puede usar tu ubicación aproximada (ciudad o región). Lo verás abajo, en «Cómo usa tu ubicación».[^screen]
- ② **«Help improve our AI models»**: decides si tus conversaciones se usan para el entrenamiento.[^screen]
- ③ **«Exportar datos» (데이터 내보내기)**: descargas tu historial en un archivo. Lo verás abajo, en «Descargar tus datos».[^screen]
- ④ **«Chats compartidos» (공유된 채팅) → «Administrar» (관리)**: ves las conversaciones que compartiste con un enlace ([capítulo 3](03-chats.md)).[^screen]

Más abajo hay también «Artefactos compartidos», «Archivos subidos», «Mis comentarios» y «Ajustes de memoria», cada uno con su botón «Administrar».[^screen]

En la aplicación del móvil el orden es el mismo. Tu nombre → «Configuración» → privacidad → el mismo interruptor. Los nombres de los menús de la aplicación pueden ser un poco distintos de los de la web.[^toggle]

### Qué cambia si lo desactivas

- Las **conversaciones nuevas** ya no se usarán para el entrenamiento.
- Las **conversaciones guardadas antes** también quedan fuera de los entrenamientos futuros.
- Pero **lo que ya se ha usado en un entrenamiento iniciado y en modelos ya creados** se queda.
- Las conversaciones detectadas por los mecanismos de seguridad pueden seguir usándose para mejoras relacionadas con la seguridad aunque desactives el interruptor.[^toggle]

### Qué se usa si lo dejas activado

Lo que puede usarse para el entrenamiento es la conversación entera. También entran los archivos que subiste a la conversación y los ajustes de la conversación. En cambio, **el contenido original** de lugares conectados con conectores ([capítulo 7](07-projects-tools.md)), como Google Drive, **no entra.** Pero si pegaste ese contenido directamente en la ventana de chat, puede entrar.[^training-use]

Antes de usarlas para el entrenamiento, se separan automáticamente la información de tu cuenta, como el correo, y la conversación.[^training-personal] Anthropic dice que no vende datos y que Claude no tiene publicidad.[^policy]

### Si no quieres que quede nada desde el principio

Usa el **chat incógnito** (Incognito). Se abre con el botón con forma de fantasma arriba a la derecha de la pantalla inicial. Cómo empezar está en el [capítulo 3](03-chats.md).

![Pantalla del modo incógnito. Tienen un número rojo: ① «Incógnito» a la izquierda de la franja negra de arriba, ② el cuadro de entrada de línea punteada, ③ el texto de aviso, ④ la ✕ (salir) de arriba a la derecha](../../../guide/10-claude/assets/shot-06-incognito-marked.png)

Es la pantalla del plan gratuito. El texto de aviso ③ dice: «Las sesiones incógnito no quedan en el historial, la memoria ni la búsqueda, y no se usan para entrenar a Claude».[^screen] Aunque tengas el interruptor activado, el chat incógnito no se usa para el entrenamiento.[^training-use] Eso sí, aunque no quede en el historial, se conserva 30 días por defecto.[^incognito] Para terminar, pulsa la ✕ ④.

**No pulses «me gusta» o «no me gusta» a la ligera.** Si envías un comentario, toda esa conversación se guarda hasta 5 años. También puede usarse para el entrenamiento.[^feedback] Si es una conversación en la que hablaste de algo delicado, es mejor elegir otra vía en lugar del comentario.

<Quiz id="ch209-training" />

## Cuánto tiempo se conserva — periodo de conservación

El tiempo que se conserva una conversación depende de la situación.[^retention]

| Situación | Tiempo que se conserva |
|---|---|
| Conversación que borré | Del historial, al instante; del servidor, se elimina en un plazo de 30 días |
| Conversación en la que permití el entrenamiento | Hasta 5 años, sin tu nombre asociado |
| Conversación en la que envié «me gusta» o «no me gusta» | Hasta 5 años |
| Conversación marcada por infringir las normas de uso | Contenido de la conversación hasta 2 años, puntuación de seguridad hasta 7 años |

Al leer la tabla, ten en cuenta tres cosas.

- Los 5 años de conservación solo valen para las conversaciones que **empezaron de nuevo o se retomaron después** de activar el interruptor.
- Una conversación borrada no se usa en entrenamientos futuros.
- En los casos que fija la ley o cuando hace falta resolver una disputa, puede conservarse más tiempo.[^retention]

Borra las conversaciones que no quieras conservar. Una conversación borrada no se usa en entrenamientos futuros. Pero la memoria generada a partir de esa conversación se queda, así que bórrala aparte en el [capítulo 5](05-memory.md).[^memory] Cómo borrar conversaciones lo viste en el [capítulo 3](03-chats.md).

<Quiz id="ch209-retention" />

## Quién ve tus conversaciones

Por defecto, **los empleados de Anthropic no pueden ver tus conversaciones.** Hay dos excepciones. Cuando has enviado la conversación como comentario y cuando hay que revisar si se cumplen las normas de uso. Incluso en una revisión, solo una parte del equipo de seguridad designado ve lo necesario. Los datos se cifran automáticamente (se transforman para que otros no puedan leerlos), tanto mientras viajan como después de guardarse.[^protect]

Una conversación en la que permitiste el entrenamiento también la puede ver solo el pequeño grupo encargado del entrenamiento. Aun así, ten cuidado al escribir información muy delicada, como el número de residente, el número de tarjeta, el historial de salud o las contraseñas.[^sensitive]

### Cómo usa tu ubicación

Cuando se buscan resultados cercanos con la búsqueda web, como «restaurantes cerca de mí», Claude puede usar una ubicación aproximada, a nivel de ciudad o región, a partir de la dirección de acceso a internet (dirección IP). En esta pantalla, el interruptor ① «Metadatos de ubicación» de «Privacidad» decide esto.[^screen] En la aplicación del móvil, el permiso de ubicación se gestiona en los ajustes del móvil. Pero no se puede desactivar que se deduzca el país o la región aproximada, por seguridad y para evitar abusos.[^location]

### Si ves un dispositivo que no conoces

En «Configuración» → «Cuenta» (계정), en «Sesiones activas» (활성 세션, según la pantalla «Dónde has iniciado sesión», 로그인된 위치), puedes ver los dispositivos que han iniciado sesión en tu cuenta. En la tabla aparecen dispositivo, ubicación, creado y actualizado.[^screen] Si ves un dispositivo que no conoces, ciérralo enseguida con «⋮» → «Terminar» (종료) que hay a su lado.[^sessions]

![Pantalla «Configuración» → «Cuenta». Tienen un número rojo: ① «Nombre completo» y «¿Cómo debería llamarte Claude?», ② «Instrucciones de Claude», ③ «Cerrar sesión en todos los dispositivos», ④ «Eliminar cuenta»](../../../guide/10-claude/assets/shot-09-settings-account-marked.png)

Es la pantalla del plan gratuito. La tabla «Sesiones activas» está en la parte de abajo y no aparece en la imagen.[^screen] Si no sabes de qué dispositivo se trata, también puedes cerrarlas todas de golpe con ③ **«Cerrar sesión en todos los dispositivos» (모든 기기에서 로그아웃)**.[^screen] El nombre ① y las instrucciones ② los verás en el [capítulo 5](05-memory.md). Como Claude no tiene contraseña propia ([capítulo 1](01-getting-started.md)), revisa la seguridad del correo o de la cuenta de Google con la que inicias sesión. El método detallado está en el [capítulo 3](03-chats.md).

<Quiz id="ch209-access" />

## Descargar tus datos

**Exportar datos** (export) es la función que te da en un archivo todo el historial de conversaciones y la información de la cuenta. Se usa como copia de seguridad antes de eliminar la cuenta. Pueden usarla todos los usuarios individuales de Free, Pro y Max.[^export]

1. En la web o en la aplicación de ordenador, abre «Configuración» → «Privacidad».[^screen]
2. Pulsa el botón ③ «Exportar datos» de la imagen de arriba.
3. Cuando esté listo, llegará un enlace de descarga al correo de tu cuenta.
4. Con la sesión iniciada, pulsa el enlace y descárgalo.

Hay cosas que debes saber.

- **No se puede exportar desde la aplicación del móvil.** Usa la web o la aplicación de ordenador.
- El enlace **caduca a las 24 horas** de recibirlo. Si se te pasó, puedes volver a solicitarlo.
- Los datos exportados **no se pueden importar a otra cuenta personal.**[^export]

> El archivo que descargas contiene todas tus conversaciones. No lo descargues en un ordenador compartido ni lo subas a una carpeta que uses con otras personas.

En los planes de empresa (Team y Enterprise), solo se pueden exportar tus propios datos si el administrador lo permite.[^export]

<Quiz id="ch209-export" />

## Eliminar la cuenta

Eliminar la cuenta es **permanente**. No podrás volver a entrar a tus conversaciones, proyectos ni materiales guardados, y tampoco se puede recuperar la cuenta. Si hay conversaciones que quieras conservar, exporta antes.[^delete]

**Si usas Pro o Max, primero hay que cancelar la suscripción.** Cancela la suscripción, espera a que termine el periodo que ya pagaste y entonces elimina la cuenta.[^delete] La cancelación de la suscripción la viste en el [capítulo 1](01-getting-started.md).

El orden para eliminarla según el dispositivo es este.[^delete]

- **Web**: tu nombre abajo a la izquierda → «Configuración» → «Cuenta» → ④ «Eliminar cuenta» (계정 삭제) de la imagen de arriba[^screen]
- **iPhone**: «Configuración» → «Perfil» en el apartado de la cuenta → «Eliminar cuenta» → «Eliminar»
- **Android**: menú de arriba a la izquierda → tus iniciales abajo a la izquierda → «Perfil» → «Eliminar cuenta» en «Acciones de la cuenta» → «Estoy de acuerdo» (I Understand)

Si tienes varias cuentas creadas con el mismo correo, al contactar con el servicio de ayuda tienes que decirles exactamente cuál quieres eliminar.[^delete] Si has usado Claude dentro de otro servicio, como Slack, tienes que pedir la eliminación a ese servicio.[^third-party]

<Quiz id="ch209-delete" />

## Cuando la IA se equivoca — respuestas erróneas y falsos «ya lo envié»

Claude también puede dar respuestas que suenan creíbles pero son erróneas. Eso se llama **alucinación** (hallucination). El hábito de comprobar lo aprendiste en el [capítulo 9 de la etapa 1](../00-common/09-safety.md#_1-mentiras-que-suenan-creibles-—-comprobar-las-alucinaciones). En Claude hay tres cosas que conviene saber en especial.[^wrong]

- Hasta las citas que parecen de autoridad pueden ser **inventadas sin fundamento**.
- **No tomes a Claude como la única fuente de verdad.** Cuanto más importante sea el consejo, más hay que comprobarlo.
- En las respuestas obtenidas con búsqueda web, **abre tú mismo las fuentes que puso Claude** ([capítulo 6](06-search.md)).

### Que diga «ya envié el correo»

Aunque Claude diga «ya envié el correo» o «ya transferí el archivo», puede que en realidad no lo haya hecho. Claude no puede usar herramientas que no hayas conectado. Aun así, a veces dice que lo ha hecho.[^fake]

Por eso pregúntate: ¿conecté yo la herramienta para hacer esto? ¿Está de verdad en mi bandeja de enviados? Si no puedes comprobarlo, es más seguro pedir desde el principio solo el borrador.

```
Escríbeme un correo para avisar a los compañeros de que la reunión de mañana se ha cambiado a las 3 de la tarde.
No lo envíes; muéstrame solo el asunto y el texto para que yo lo copie y lo envíe.
```

Así soy yo quien comprueba al final qué se va a enviar.

<Quiz id="ch209-mistakes" />

## Mecanismos de seguridad, denuncias y reclamaciones

Claude tiene mecanismos que filtran el contenido dañino. Hay un modelo que detecta contenido dañino y filtros que pueden bloquear la respuesta, y a quien infringe las normas repetidamente se le aplica durante un tiempo un filtro más fuerte. La página de ayuda reconoce por sí misma que estos mecanismos **no son perfectos**. Es decir, pueden bloquear una pregunta inocente o dejar pasar algo que debería bloquearse.[^safety]

### Si recibes una advertencia o suspenden tu cuenta

Si lo que escribes parece infringir las normas de uso, llega una advertencia. Si las infringes repetidamente o te registras en una región no admitida, la cuenta puede suspenderse.[^appeal]

Si crees que te han suspendido por error, puedes presentar una reclamación.

1. Inicia sesión en claude.ai con la cuenta suspendida tal cual. **Hay que iniciar sesión para que aparezca el formulario.**
2. En el documento de ayuda, pulsa el enlace «Enviar reclamación» (Submit an appeal), que abre el formulario, y rellénalo.

Las cuentas Free, Pro y Max suspendidas también pueden iniciar sesión para exportar datos o eliminar la cuenta. Eso sí, el alcance de lo que se puede exportar puede reducirse.[^appeal]

### Si ves contenido problemático

Si ves contenido problemático en una conversación que compartió otra persona, pulsa el botón «Denunciar» de esa pantalla. También hay un formulario de denuncia aparte. Los problemas de derechos de autor y marcas siguen un procedimiento distinto. Si presentas denuncias sin fundamento una y otra vez, se puede interrumpir el trámite de tus denuncias. Antes de eso llega una advertencia.[^report]

<Quiz id="ch209-safeguards" />

## Recibir ayuda cuando lo estás pasando mal

**Si ahora estás herido o en una situación de peligro, no llames a Claude: contacta directamente con los servicios de emergencia.** También puedes ir a la urgencia más cercana. La página de ayuda pone como ejemplos el 911 de EE. UU. y Canadá y el 112 de muchos países de Europa.[^crisis]

Si la conversación toca temas como el dolor emocional o las autolesiones, puede aparecer en pantalla un **aviso con una línea de atención telefónica y un plan de seguridad**. Este aviso lo muestra un sistema de detección aparte, no Claude.[^crisis]

- Tú decides si lo usas. Lo uses o no, **no hay ninguna consecuencia para tu cuenta.**
- Cuando el aviso aparece una vez, no vuelve a aparecer durante unas 2 horas.
- Los centros de atención siempre se pueden encontrar en **claude.findahelpline.com**. Te muestra los que corresponden a tu ubicación.
- Anthropic **no envía** tus conversaciones a los centros de atención.[^crisis]

En el aviso puede aparecer también la herramienta de **plan de seguridad** de una organización sin ánimo de lucro llamada Koko. Es una herramienta para crear juntos un plan corto que consultar cuando lo estás pasando mal. Dura unos 5 minutos, es gratuita y no hace falta decir tu nombre.[^crisis]

Si te resulta difícil llevarlo tú solo, puedes empezar simplemente contándoselo a alguien.

<Quiz id="ch209-crisis" />

## Practica tú mismo

**1. Comprobar tu ajuste de entrenamiento**

Abre «Configuración» → «Privacidad» y mira si ② «Help improve our AI models» está activado. Cámbialo a lo que prefieras y, si tienes la aplicación del móvil, comprueba que también allí tiene el mismo valor.

**2. Revisar los dispositivos con sesión iniciada**

En «Configuración» → «Cuenta», baja hasta «Sesiones activas» (o «Dónde has iniciado sesión»). ¿Son todos dispositivos que conoces? Si hay alguno que no, ciérralo enseguida.

**3. Pedirle a Claude tu lista de comprobación**

```
Uso Claude con una cuenta personal.
Quiero comprobar si mis conversaciones se usan para el entrenamiento y ordenar las conversaciones que no necesito.
Hazme una lista de comprobación (☐) con los apartados que debo revisar yo mismo en la pantalla de ajustes.
Si no estás seguro del nombre de un menú, no te lo inventes; escribe «comprobar en la pantalla».
```

Compara la lista de comprobación que recibas con este capítulo. Si los nombres de los menús son distintos, el correcto es el que ves en tu pantalla.

**Proyecto continuo** ([preparar un club de lectura](../00-common/practice-kit.md)): en «Configuración» → «Privacidad», comprueba cómo está «Help improve our AI models». Si vas a subir materiales reales del club al proyecto «Club de lectura», decide cómo dejarás este ajuste.

## Resumen

- Si se usan para el entrenamiento se decide en «Configuración» → «Privacidad» → «Help improve our AI models». El valor inicial, ábrelo y compruébalo tú mismo.
- Aunque lo desactives, queda en los modelos ya creados, y las conversaciones detectadas por los mecanismos de seguridad pueden usarse.
- El chat incógnito no se usa para el entrenamiento. Si envías «me gusta» o «no me gusta», esa conversación se conserva hasta 5 años.
- Una conversación borrada se elimina también del servidor en un plazo de 30 días. Una conversación en la que permitiste el entrenamiento puede conservarse hasta 5 años.
- Por defecto, los empleados no ven las conversaciones. Los dispositivos que no conozcas ciérralos en «Sesiones activas».
- Exportar solo funciona en la web y en la aplicación de ordenador, y el enlace caduca a las 24 horas. Eliminar la cuenta no se puede deshacer, y una suscripción de pago se cancela antes.
- Lo de «ya lo envié» compruébalo tú mismo. Una suspensión errónea se reclama iniciando sesión.
- Si es una situación de peligro, contacta primero con los servicios de emergencia. Los centros de atención se encuentran en claude.findahelpline.com.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Model training | Entrenamiento del modelo | Enseñar a la siguiente IA con las conversaciones reunidas |
| Model improvement | Mejora del modelo | El ajuste que decide si tus conversaciones se usan para el entrenamiento |
| Incognito | Chat incógnito | Conversación que no queda en el historial ni se usa para el entrenamiento |
| Feedback | Comentarios | Avisar con «me gusta» o «no me gusta» si la respuesta fue buena |
| Retention | Conservación | El tiempo que se conservan los datos sin borrarlos |
| Encryption | Cifrado | Transformar los datos para que otros no puedan leerlos |
| IP address | Dirección IP | La dirección de un dispositivo conectado a internet. Permite saber la región aproximada |
| Export | Exportar | Recibir todo tu historial en un archivo |
| Session | Sesión | El estado de tener la sesión iniciada en un dispositivo |
| Hallucination | Alucinación | Cuando la IA se inventa algo que suena creíble pero es erróneo |
| Appeal | Reclamación | Pedir que se revise una suspensión hecha por error |
| Helpline | Línea de atención | Un lugar donde hablar con personas formadas cuando lo estás pasando mal |

<ChapterDone :chapter="209" />

Siguiente capítulo: [Capítulo 10. Voz y móvil](10-voice-mobile.md)

---

[^screen]: Comprobado directamente en la pantalla web de Claude (plan gratuito, en coreano). "Help improve our AI models — Allow the use of your chats and coding sessions to train and improve Anthropic AI models." / "시크릿 세션은 기록, 메모리, 검색에 남지 않으며 Claude 학습에 사용되지 않습니다." (en español: «Las sesiones incógnito no quedan en el historial, la memoria ni la búsqueda, y no se usan para entrenar a Claude») (consultado el 2026-10-26)
[^training-use]: Centro de privacidad de Anthropic, «Is my data used for model training?». "You choose to allow us to use your chats and coding sessions to improve Claude, learn more here" / "It does not include raw content from connectors (e.g. Google Drive), including remote and local MCP servers, though data may be included if it’s directly copied into your conversation with Claude." / "Your Incognito chats are not used to improve Claude, even if you have enabled Model Improvement in your Privacy Settings." https://privacy.claude.com/en/articles/10023580 (consultado el 2026-10-26)
[^training-personal]: Centro de privacidad de Anthropic, «How Do You Use Personal Data in Model Training?». "You’ve explicitly provided materials to us (e.g.via our thumbs up/down feedback button), or" / "we will automatically de-link them from your user ID (e.g. email address) before it’s used by Anthropic." https://privacy.claude.com/en/articles/10023555 (consultado el 2026-10-26)
[^toggle]: Centro de privacidad de Anthropic, «How do I change my model improvement privacy settings?». "Under Help Improve our AI models, click the button to toggle it off/on" / "we will stop using your previously stored chats and coding sessions in future model training runs." / "Your data will still be included in model training that has already started and in models that have already been trained" / "If our safety classifiers flag your conversations, they may still be used to improve our internal trust and safety models" https://privacy.claude.com/en/articles/12109829 (consultado el 2026-10-26)
[^policy]: Centro de privacidad de Anthropic, «Updates to our Privacy Policy». "We don’t sell your data, Claude remains ad-free, and you can control whether your conversations are used to improve Anthropic’s AI models." https://privacy.claude.com/en/articles/10301952 (consultado el 2026-10-26)
[^feedback]: Centro de privacidad de Anthropic, «Is my data used for model training?». "we will store the entire related conversation, including any content, custom styles or conversation preferences, in our secured back-end for up to 5 years." https://privacy.claude.com/en/articles/10023580 (consultado el 2026-10-26)
[^incognito]: Ayuda de Anthropic, «Use incognito chats». "While incognito chats aren't saved to your chat history, they are retained for either 30 days (default), or longer in accordance with your organization's custom data retention setting (available for Enterprise plans)." https://support.claude.com/en/articles/12260368 (consultado el 2026-10-26)
[^memory]: Ayuda de Anthropic, «Use Claude’s chat search and memory to build on previous context». "When a conversation is deleted, including under a retention period, memory entries generated from it aren’t removed, but you can delete individual memories while memory is on." https://support.claude.com/en/articles/11817273 (consultado el 2026-10-26)
[^retention]: Centro de privacidad de Anthropic, «How long do you store my data?». "Deleted from our back-end storage systems within 30 days" / "we may retain your data in a de-identified format for up to 5 years in our model training pipelines." / "This retention period only applies to new or resumed chats after the model training setting has been enabled." / "Additionally, if you delete a chat from your chat history, it will not be used to train future models." / "We retain inputs and outputs for up to 2 years and trust and safety classification scores for up to 7 years" / "In all cases, we may retain chats and coding sessions as required by law, to resolve disputes, or as necessary to combat violations of our Usage Policy." https://privacy.claude.com/en/articles/10023548 (consultado el 2026-10-26)
[^protect]: Centro de privacidad de Anthropic, «How does Anthropic protect the personal data of Claude users?». "Limited Access: By default, Anthropic employees cannot access your conversations unless:" / "Encryption: Your data is automatically encrypted both while in transit, and stored (at rest)." https://privacy.claude.com/en/articles/10458704 (consultado el 2026-10-26)
[^sensitive]: Ayuda de Anthropic, «I would like to input sensitive data into my chats with Claude. Who can view my conversations?». "Access is limited to a small number of personnel involved in model training." / "we also recommend being thoughtful about sharing highly sensitive personal details such as:" https://support.claude.com/en/articles/8325621 (consultado el 2026-10-26)
[^location]: Centro de privacidad de Anthropic, «Does Claude use my location?». "Claude may use your IP address to determine coarse-grained location (city/region level)." / "Claude's access to location data for non-web surfaces (e.g. the mobile app and browser extension) are managed at the device level." / "This use is necessary to protect our users and business and cannot be toggled off." https://privacy.claude.com/en/articles/11186740 (consultado el 2026-10-26)
[^sessions]: Ayuda de Anthropic, «Managing your active sessions». "Scroll to the Active sessions section (called Where you're logged in in the updated Settings layout)." / "terminate it right away and consider changing your password." https://support.claude.com/en/articles/13124001 (consultado el 2026-10-26)
[^export]: Ayuda de Anthropic, «Export your Claude data». "Data exports are available to individual Claude users on Free, Pro, and Max plans." / "It's not possible to run an export from Claude for iOS or Android." / "You must be signed in to your account to download your data using this link." / "The download link will expire 24 hours after delivery." / "Exported data can't be imported into another personal Claude account, and we don't support migrating data between personal accounts." / "you can export your own data once an organization Owner or Primary Owner turn this on." https://support.claude.com/en/articles/9450526 (consultado el 2026-10-26)
[^delete]: Ayuda de Anthropic, «Delete your Claude account». "You'll lose access to your conversations, projects, and other saved data, and you can't recover the account afterward." / "Wait until the end of your current subscription period." / "If you have multiple accounts associated with the same email address, you'll need to specify which accounts you want to delete when you contact us." https://support.claude.com/en/articles/9028421 (consultado el 2026-10-26)
[^third-party]: Centro de privacidad de Anthropic, «Deleting Claude accounts». "you will need to request account deletion through that third party service provider." https://privacy.claude.com/en/articles/10023660 (consultado el 2026-10-26)
[^wrong]: Ayuda de Anthropic, «Claude is providing incorrect or misleading responses. What’s going on?». "Claude can display quotes that may look authoritative or sound convincing, but are not grounded in fact." / "Users should not rely on Claude as a singular source of truth and should carefully scrutinize any high-stakes advice given by Claude." / "When working with web search results, users should review Claude's cited sources." https://support.claude.com/en/articles/8525154 (consultado el 2026-10-26)
[^fake]: Ayuda de Anthropic, «Claude is producing links that don’t work and falsely claiming that it has sent emails or produced external documents. What’s going on?». "Even if it claims otherwise, Claude does not have access to other tools or software that are not explicitly integrated, including email, word processors, or file transfers." https://support.claude.com/en/articles/8241188 (consultado el 2026-10-26)
[^safety]: Ayuda de Anthropic, «Our Approach to User Safety». "We may temporarily apply enhanced safety filters to users who repeatedly violate our policies" / "These features are not failsafe, and we may make mistakes through false positives or false negatives." https://support.claude.com/en/articles/8106465 (consultado el 2026-10-26)
[^appeal]: Ayuda de Anthropic, «Safeguards warnings and appeals». "we warn users if we believe their prompts are violating our Usage Policy." / "Account creation from an unsupported location" / "If you feel your account has been wrongly suspended or terminated, please go to claude.ai, log in with your banned account, and fill out the appeal form linked below." / "Important: You must be logged in to access the appeal form." / "you can still log in at claude.ai to export your data or delete your account." https://support.claude.com/en/articles/8241253 (consultado el 2026-10-26)
[^report]: Ayuda de Anthropic, «Report, block, and remove content from Claude». "Use the “report” button on the shared content." / "If you believe content violates Anthropic’s usage policies or local laws and should be removed or restricted, you can report it through this form." / "We will provide a warning before suspension." https://support.claude.com/en/articles/10684638 (consultado el 2026-10-26)
[^crisis]: Ayuda de Anthropic, «Crisis Helpline Support in Claude». "please contact emergency services (such as 911 in the US and Canada, or 112 in much of Europe) or go to your nearest emergency room." / "This banner is surfaced by a separate detection system, not from Claude directly." / "there are no consequences for your account based on your decision to access resources." / "After you see the banner, it won’t appear again for about two hours" / "The resources shown are selected based on your location to provide relevant, local support options." / "Anthropic doesn’t send your conversations to helplines or to Koko." / "It takes about five minutes. You’re guided one step at a time, and you decide what goes in it." https://support.claude.com/en/articles/13171706 (consultado el 2026-10-26)
[^improve-name]: En la ayuda en coreano se llama «AI 모델 개선 지원».
