# Capítulo 3. Gestionar las conversaciones: buscar, ordenar, compartir y ocultar

> **En una línea**: las conversaciones que ya no necesitas puedes **renombrarlas o borrarlas**, y las anteriores las encuentras en la lista o **pidiéndole a Claude que las busque**.
> Para enseñárselas a otras personas usa la **invitación a personas concretas** o el **enlace público**, y si no quieres que quede registro, usa el **chat incógnito**.

Las pantallas son de la versión web de octubre de 2026. Se está desplegando por turnos la nueva pantalla de Claude, que junta el chat y Cowork, así que puede variar según la pantalla. En la aplicación del móvil la posición de los menús es un poco distinta.

En la etapa 1 aprendiste cuándo conviene abrir una conversación nueva: cuando cambia el tema, cuando se olvida una y otra vez de las primeras indicaciones o cuando la conversación se ha hecho demasiado larga ([capítulo 6 de la etapa 1](../00-common/06-conversation.md#cuando-empezar-una-conversacion-nueva)). En Claude vale igual. En este capítulo veremos cómo manejar las conversaciones que se van acumulando.

## Renombrar y borrar conversaciones

Cambia el nombre de las conversaciones con tus propias palabras para encontrarlas más fácilmente después.
En la web se hace así.

1. Busca la conversación en la lista «Fijados» (고정됨) o «Recientes» (최근 항목) del menú lateral.[^screen]
2. Pasa el ratón por encima de la conversación y pulsa el botón «⋯» (tres puntos) de la derecha.[^screen]
3. Elige «Cambiar nombre» (이름 변경) o «Eliminar» (삭제).[^screen] Para borrar, tienes que pulsar otra vez en la ventana de confirmación.[^delete]

![Pantalla con el menú «⋯» de una conversación desplegado en el menú lateral. Con números rojos: ① el botón «⋯», ② «Cambiar nombre» (이름 변경), ③ «Añadir al proyecto» (프로젝트에 추가), ④ «Archivar» (보관), ⑤ «Eliminar» (삭제)](../../../guide/10-claude/assets/shot-11-chat-menu-marked.png)

El título de la conversación está cambiado a un ejemplo (plan gratuito). **Los números rojos son los mismos de la lista de abajo.**[^screen]

- ① «⋯»: el botón que aparece al pasar el ratón por encima de la conversación.
- ② «Cambiar nombre»: cambia el título de la conversación por uno tuyo.
- ③ «Añadir al proyecto»: mete la conversación en un proyecto. Los proyectos los verás en el [capítulo 7](07-projects-tools.md).
- ④ «Archivar»: aparta la conversación de la lista. Es un menú distinto de borrar.
- ⑤ «Eliminar»: borra la conversación.

En el mismo menú también están «Quitar de fijados» (고정 해제) (o «Fijar») y «Mover hacia abajo» (아래로 이동).[^screen] Las conversaciones fijadas se reúnen en la lista «Fijados» del menú lateral.

::: details Si quieres borrar varias conversaciones de golpe (pulsa para desplegar)
La ayuda también explica cómo borrar varias conversaciones a la vez. En la lista completa de conversaciones («Chats y tareas», Chats and tasks), pulsa «⋮» → «Seleccionar» (선택), marca las conversaciones que quieres borrar o pulsa «Seleccionar todo» (모두 선택) arriba del todo.[^delete] El nombre de los menús puede variar según la pantalla.
:::

En el móvil se hace un poco distinto.[^delete]

- **iPhone**: mantén pulsada la conversación en la lista de chats.
- **Android**: pulsa «⋮» arriba a la derecha de la conversación abierta. Para varias, pulsa el icono de lista de verificación arriba a la derecha de la lista y bórralas con el icono de la papelera.

Esto conviene saber antes de borrar.

- **Una conversación borrada desaparece de la lista al instante.** También se borra de los servidores de la empresa en un plazo de 30 días.[^delete] La ayuda no explica ninguna forma de recuperarla. Piensa una vez más si puedes borrarla antes de pulsar.
- **Aunque borres la conversación, la memoria que salió de ella se queda.** La memoria (lo que Claude guarda sobre ti) se borra aparte.[^memory-delete] Cómo se borra lo verás en el [capítulo 5](05-memory.md).

<Quiz id="ch203-delete" />

## Buscar conversaciones anteriores

Hay dos caminos para encontrar una conversación anterior.

**Primero, buscarla en la lista.** Echa un vistazo a la lista «Recientes» del menú lateral. Arriba del menú lateral también hay un botón «Buscar» (검색).[^screen] Las preguntas cortas y las tareas largas se reúnen en una sola lista, «Recientes» (Recents).[^new] Si has cambiado los títulos por otros tuyos, así las encuentras mucho más rápido.

**Segundo, pedirle a Claude que la busque.** Si tienes un plan de pago (Pro, Max, Team o Enterprise), basta con preguntárselo en una conversación nueva. Funciona en la web, en el escritorio y en la aplicación del móvil.[^search]

```
Busca la conversación de la semana pasada en la que te pregunté por una función de Excel. Vuelve a ordenarme la función que me dijiste entonces.
```

Cuando Claude rebusca en las conversaciones anteriores, durante la conversación se muestra como una **llamada a una herramienta** (cuando Claude saca una función y la usa). Las conversaciones anteriores que usa en la respuesta aparecen como un enlace (cita) a la conversación original.[^search] Pulsa el enlace y abre la conversación original. Así puedes comprobar enseguida si Claude ha traído una conversación que no era.

Conviene saber también hasta dónde busca.[^search]

- Si preguntas fuera de un proyecto, busca en **todas las conversaciones de fuera de los proyectos**.
- Si preguntas dentro de un proyecto, busca **solo en las conversaciones de ese proyecto**. Los proyectos se tratan en el [capítulo 7](07-projects-tools.md).
- Esta búsqueda no encuentra las tareas antiguas de Cowork. Esas búsquelas por nombre en «Recientes».[^new]

Si no quieres que Claude rebusque en las conversaciones anteriores, desactiva «Buscar y consultar chats» (채팅 검색 및 참조; Search and reference chats) en «Configuración > Memoria» (o «Configuración > Your Claude»).[^search]

::: details Si no ves el interruptor (pulsa para desplegar)
La ayuda dice que este interruptor está en «Configuración > Your Claude» o en «Configuración > Memoria» (Memory).[^search] En la cuenta gratuita con la que se hicieron las imágenes de este capítulo no se veía este interruptor, porque la búsqueda de conversaciones anteriores es una función de los planes de pago.[^screen] Puede variar según la pantalla.
:::

<Quiz id="ch203-search" />

## Enseñar una conversación a personas concretas

Hay dos maneras de enseñar una conversación a otras personas: la **invitación a personas concretas**, para que solo la vean las que tú elijas, y el **enlace público**, para que la vea cualquiera que tenga el enlace. El modo por defecto es la invitación a personas concretas.[^share-people] Veamos primero esta.

1. Pulsa el menú ▾ al lado del título de la conversación, arriba, y elige «Compartir sesión» (세션 공유). Si el panel de artefactos de la derecha no está abierto, también se abre con el botón «Compartir» (공유) de arriba a la derecha.
2. En la casilla «Añadir personas por correo» (이메일로 사람 추가), escribe el correo de quien lo va a recibir.
3. Pulsa «Invitar» (초대하기).[^screen-share]

![Ventana «Compartir sesión». Tiene el aviso «Solo se comparten los mensajes hasta ahora» (지금까지의 메시지만 공유됩니다), la casilla «Añadir personas por correo» y «Invitar», debajo de «Usuarios con acceso» (액세스 권한이 있는 사용자) aparecen «Solo las personas invitadas» (초대받은 사람만) y mi nombre (administrador), y abajo el botón «Copiar enlace» (링크 복사)](../../../guide/10-claude/assets/shot-15-session-share.png)

*El nombre y el correo son de ejemplo en esta pantalla. Se cerró sin invitar a nadie. En la pantalla nueva, a la conversación se le llama «sesión».*

La persona que lo recibe recibe un correo con mi nombre, el título de la conversación y un enlace para abrirla. Funciona en todos los planes, incluido el gratuito.[^share-people]

Este método tiene estas características.[^share-people]

- **Solo se abre con el correo invitado.** Aunque quien lo recibe reenvíe el correo, otra persona no puede abrirlo.
- **Solo se puede ver.** Quien lo recibe no puede continuar la conversación, copiarla en su cuenta ni descargar archivos.
- **También puedes invitar a quien no tiene cuenta de Claude.** Puede verla si crea una cuenta gratuita. Las invitaciones que no se abren desaparecen a los 30 días.
- **Hay un límite de personas que puedes invitar al día.** La ayuda no dice la cifra exacta.
- **Desde la aplicación del móvil todavía no se puede enviar.** Envíala desde la web. La conversación recibida se abre en cualquier dispositivo.

Compartir es **como hacer una foto de ese momento** (una instantánea, snapshot).[^share-old] Lo que se conversa después de compartir no lo ve quien la recibió. Para enseñarle también lo nuevo, pulsa «Actualizar chat compartido» (Update shared chat) en la ventana de compartir.[^share-people]

Los archivos adjuntos tampoco entran en lo que se comparte. Los archivos los sigues viendo solo tú.[^share-old]

Si quieres dejar de enseñarla, pulsa «Desactivar» (끄기; Turn off) en la ventana de compartir. El enlace se bloquea para todos de inmediato. Si borras la conversación, el enlace también se bloquea.[^share-people]
Todas las conversaciones que has compartido hasta ahora las ves en un solo sitio y puedes desactivarlas una a una.[^share-people] Pulsa «Administrar» (관리), junto a «Chats compartidos» (공유된 채팅), en «Configuración > Privacidad» (개인정보보호).[^screen]

<Quiz id="ch203-share" />

## Enlace público: para que lo vea cualquiera

Un enlace público lo puede abrir **cualquiera** que tenga el enlace. No hace falta tener cuenta de Claude. Igual que en la invitación, solo se puede ver.[^public]
Solo funciona en los planes personales (Free, Pro y Max). En los planes de empresa (Team y Enterprise) solo se puede compartir dentro de la organización.[^public]

El enlace público también se crea con «Compartir» en la pantalla de la conversación. Sigue lo que veas en la ventana de compartir.

::: details Cada ayuda describe un orden distinto para crearlo (pulsa para desplegar)
El orden para crear un enlace público está escrito de forma distinta en cada documento. La ayuda antigua explica que, en la ventana que sale al pulsar «Compartir», se pulsa «Compartir» otra vez y se crea el enlace.[^share-old] Puede variar según la pantalla.
:::

Antes de usar un enlace público, recuerda un principio. Con las palabras de la propia ayuda: **"trata un enlace público como público"**.[^public] Si es algo que no subirías a internet, tampoco hagas un enlace público.

- **Aunque se lo mandes a una sola persona, es público.** Quien lo recibe puede reenviarlo o subirlo a algún sitio. No hay forma de impedir que lo vea otra persona.
- **Se pide que no aparezca en los buscadores.** Pero eso no impide que el enlace se difunda ni que alguien haga una copia.
- **Si lo desactivas, el enlace se bloquea de inmediato.** Pero no puedes borrar las copias ni las capturas de pantalla que otra persona ya haya hecho.

Las conversaciones que contienen archivos creados por Claude (capítulo 4) no se pueden compartir públicamente en los planes personales.[^file-share]

Compara un ejemplo mejorable con otro mejor.

- **Ejemplo mejorable**: haces un enlace público de una conversación sobre la salud de tu familia y se lo mandas a tu hermano.
- **Ejemplo mejor**: invitas a tu hermano a esa misma conversación con su correo.

La diferencia es una sola. El enlace público lo puede abrir cualquiera si tu hermano lo reenvía, pero la invitación solo se abre con el correo de tu hermano. Antes de compartir, echa un vistazo para comprobar que la conversación no tiene datos personales, como nombres o números de teléfono ([capítulo 9 de la etapa 1](../00-common/09-safety.md#_2-datos-personales-y-secretos-—-pensarlo-antes-de-escribir)).

<Quiz id="ch203-public-link" />

## No dejar registro: chat incógnito

Las conversaciones que no quieres que queden en el historial, como elegir un regalo, hazlas en un **«chat incógnito»** (시크릿 채팅; Incognito chat). Funciona en todos los planes, incluido el gratuito.[^incognito]

1. Abre una conversación nueva fuera de un proyecto.[^incognito]
2. Pulsa el **icono del fantasma** («Usar el modo incógnito», 시크릿 모드 사용) arriba a la derecha de la pantalla.[^screen]
3. Cuando los bordes de la pantalla se ponen negros y arriba a la izquierda aparece la marca «Incógnito» (시크릿), ya ha empezado.[^screen][^incognito-name]

![Pantalla con el modo incógnito activado. Con números rojos: ① la marca «Incógnito» arriba a la izquierda, ② la casilla de escritura rodeada por una línea de puntos y encima el título «Estás en modo incógnito» (시크릿 모드입니다), ③ el aviso bajo la casilla de escritura, ④ el botón ✕ arriba a la derecha](../../../guide/10-claude/assets/shot-06-incognito-marked.png)

Es la pantalla del plan gratuito. **Los números rojos son los mismos de la tabla de abajo.**[^screen]

| N.º | Posición | Nombre | Qué hace |
|---|---|---|---|
| ① | Arriba a la izquierda | «Incógnito» | Indica que estás en una conversación incógnito |
| ② | Centro | Casilla de escritura | Va rodeada de puntos, así que se distingue de una conversación normal |
| ③ | Bajo la casilla de escritura | Aviso | Explica que no queda en el historial |
| ④ | Arriba a la derecha | ✕ | Sale de la conversación incógnito |

El aviso ③ dice así: "시크릿 세션은 기록, 메모리, 검색에 남지 않으며 Claude 학습에 사용되지 않습니다." (Las sesiones incógnito no quedan en el historial, la memoria ni las búsquedas, y no se usan para entrenar a Claude.)[^screen]

Características del chat incógnito.[^incognito]

- **No se guarda en el historial de conversaciones ni en la memoria.** No queda en la lista de conversaciones del menú lateral.
- **No se usa para entrenar.** Esta conversación no se usa para entrenar y mejorar la IA.
- **Tampoco usa la memoria que ya existe.** Eso sí, usa la información del perfil, como los ajustes personales que hayas configurado.
- **No se puede convertir en una conversación normal.** Una vez cerrada, tampoco se puede volver a abrir. Copia antes de cerrar las respuestas que quieras conservar.

No significa que "no quede en ningún sitio". **No queda en el historial, pero se conserva 30 días por defecto.**[^incognito] No escribas datos como contraseñas ni siquiera en un chat incógnito.

En la pantalla nueva, **Claude no puede crear archivos ni ejecutar código** en los chats incógnito.[^incognito] La creación de archivos se trata en el capítulo 4.

::: details ¿Por qué en el chat incógnito no se pueden crear archivos? (pulsa para desplegar)
Porque, aunque uses la pantalla nueva de Claude, el chat incógnito se abre con el modo de la pantalla antigua.[^incognito] De la pantalla antigua se habla en el [capítulo 2](02-screen-tour.md#la-pantalla-nueva-y-la-pantalla-antigua).
:::

### Conservar la conversación y desactivar solo la memoria

A veces quieres que la conversación quede en el historial, pero que Claude no use lo que recuerda de ti. En ese caso, en una conversación nueva, desactiva «Memoria» (메모리; Memory) en el menú «+» **antes de enviar el primer mensaje**. Una vez empezada la conversación, ya no se puede cambiar.[^memory-off]
Dentro de un proyecto no se puede usar el chat incógnito. Tampoco se ve el icono del fantasma. Dentro de un proyecto usa este método.[^incognito]

| | «Chat incógnito» | Conversación solo con la memoria desactivada |
|---|---|---|
| En la lista de conversaciones | No queda | Queda |
| ¿Usa o añade memoria? | No | No |
| En una búsqueda posterior de conversaciones anteriores | No aparece | Aparece |
| Dentro de un proyecto | No se puede usar | Se puede usar |
| Dónde se activa | Icono del fantasma arriba a la derecha | «+» → desactivar «Memoria» |

Fuente: ayuda de Anthropic[^incognito][^memory-off]

Si quieres probar una respuesta limpia, sin lo que Claude recuerda de ti, pregunta esto en un chat incógnito.

```
Piensa que no sabes nada de mí y recomiéndame tres ejercicios buenos para que alguien de más de 50 años empiece a hacer deporte, con sus ventajas e inconvenientes.
```

::: details Más o menos así será la respuesta (ejemplo; pulsa para desplegar)
Este ejemplo lo ha preparado esta guía. La respuesta real depende del servicio y cambia cada vez.

> Estos son tres ejercicios buenos para empezar a partir de los 50 años.
>
> | Ejercicio | Ventajas | Inconvenientes |
> |---|---|---|
> | Caminar | Casi no cuesta dinero y se puede empezar ya | Tarda en notarse el efecto |
> | Natación | Poca carga para las articulaciones | Hay que ir a la piscina y cuesta la entrada |
> | Estiramientos y yoga | Da flexibilidad y mejora el equilibrio | Al principio cuesta aprender los movimientos |
>
> Si tienes alguna enfermedad crónica, consúltalo con tu médico antes de empezar.

**Comprueba que la has recibido bien**: ¿son justo tres? ¿Tiene ventajas e inconvenientes? Como es un chat incógnito, ¿se ha colado algo sobre ti, como tu trabajo o dónde vives?

:::

<Quiz id="ch203-incognito" />

## Gestionar los dispositivos con sesión iniciada

¿Has iniciado alguna vez sesión en Claude desde un ordenador de un cibercafé o desde el móvil de otra persona? Si es así, comprueba dónde tienes la sesión iniciada.

Si inicias sesión en la web, la sesión se mantiene 28 días. Si usas Claude durante ese tiempo, a partir de ese momento vuelve a ampliarse a 28 días.[^logout] Quiere decir que un ordenador en el que olvidaste cerrar sesión puede quedarse abierto bastante tiempo.

**Ver dónde tienes la sesión iniciada**[^sessions]

1. Pulsa tu nombre abajo a la izquierda y elige «Configuración» (설정).[^screen]
2. Ve a «Cuenta» (계정; Account).
3. Baja hasta «Sesiones activas» (활성 세션; Active sessions). En la pantalla de configuración nueva aparece como «Dónde has iniciado sesión» (로그인된 위치; Where you're logged in).

Verás el dispositivo, el navegador, la ubicación aproximada y la última vez que se usó. Si hay un dispositivo que no conoces, pulsa «⋮» → «Terminar» (종료; Terminate) a su lado. Se cierra la sesión en ese dispositivo al instante. Si ves una ubicación o un dispositivo extraño, córtalo enseguida y revisa la seguridad de tu cuenta.[^sessions]

![Pantalla «Cuenta» (계정) de la ventana «Configuración». De arriba abajo: «Cerrar sesión en todos los dispositivos» (모든 기기에서 로그아웃), «Eliminar cuenta» (계정 삭제), el ID de la organización, «Dispositivos de confianza» (신뢰할 수 있는 기기), «Claves de acceso» (패스키) y, abajo del todo, la tabla «Sesiones activas» (dispositivo, ubicación, creada, actualizada)](../../../guide/10-claude/assets/shot-15-active-sessions.png)

*La ubicación y el ID de la organización están cambiados a ejemplos en esta pantalla. El dispositivo que estás usando ahora lleva la marca «Actual» (현재). En esta pantalla solo había un dispositivo, así que no se veía el menú «⋮» → «Terminar».*

**Cerrar sesión en todos los dispositivos a la vez**[^logout]

En la misma pantalla «Configuración > Cuenta», pulsa «Cerrar sesión en todos los dispositivos» y confirma.[^screen][^logout-name] Se cierra la sesión al instante en todos los sitios donde habías iniciado sesión: web, móvil, aplicación de escritorio, etc.[^logout]
Esta función solo está en la web. En la aplicación del móvil todavía no existe.

<Quiz id="ch203-sessions" />

## Pruébalo tú mismo

1. Pregunta «Recomiéndame tres destinos para un viaje familiar el mes que viene» y cambia el nombre de esa conversación a «Candidatos de viaje familiar» (가족 여행 후보).
2. Si tienes un plan de pago, en una conversación nueva pregunta «Busca la conversación en la que hablamos del viaje familiar». Comprueba que el enlace de la respuesta abre la conversación original. Si tienes el plan gratuito, búscala con «Buscar» del menú lateral o en la lista «Recientes».
3. Activa el «chat incógnito» con el icono del fantasma, haz cualquier pregunta y ciérralo. Comprueba que esa conversación no está en la lista del menú lateral.
4. En «Configuración > Cuenta» abre la lista de dispositivos con sesión iniciada y mira que no haya ninguno que no conozcas.

**Proyecto continuo** ([Preparar un club de lectura](../00-common/practice-kit.md)): cambia el nombre de la conversación sobre el club de lectura que tuviste en el capítulo 1 a «Preparar el club de lectura» (독서 모임 준비).

## Resumen

- Renombrar y borrar conversaciones se hace con «⋯» al lado de la conversación. Una conversación borrada desaparece al instante y se borra también del servidor en un plazo de 30 días.
- Aunque borres la conversación, la memoria que salió de ella se queda. La memoria se borra aparte.
- Las conversaciones anteriores se buscan en la lista «Recientes» o en «Buscar», o, con un plan de pago, pidiéndole a Claude que las busque.
- La invitación a personas concretas solo se abre con ese correo. El enlace público lo puede abrir cualquiera, así que trátalo como público.
- Compartir es una instantánea de ese momento. Para enseñar lo nuevo, pulsa «Actualizar chat compartido».
- El chat incógnito no queda en el historial, la memoria ni el entrenamiento, pero se conserva 30 días. Para conservar la conversación y quitar solo la memoria, desactiva «+» → «Memoria» antes del primer mensaje.
- En «Configuración > Cuenta» mira los dispositivos con sesión iniciada y «Termina» los que no conozcas.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Snapshot | Instantánea | Copia fiel de cómo estaba algo en un momento concreto |
| Public link | Enlace público | Dirección para compartir que abre cualquiera que tenga el enlace |
| Incognito chat | Chat incógnito | Conversación temporal que no se guarda en el historial ni en la memoria |
| Memory | Memoria | Lo que Claude guarda sobre ti |
| Tool call | Llamada a una herramienta | Cuando Claude saca una función, como una búsqueda, y la usa |
| Session | Sesión | Estado de tener la sesión iniciada en un dispositivo |
| Recents | Recientes | Lista de la pantalla nueva donde se reúnen las conversaciones y las tareas |

<ChapterDone :chapter="203" />

Siguiente capítulo: [Capítulo 4. Archivos y artefactos](04-files-artifacts.md)

[^screen]: Comprobado directamente en la pantalla web de Claude (plan gratuito, en coreano). "이름 변경" (Cambiar nombre) / "프로젝트에 추가" (Añadir al proyecto) / "보관" (Archivar) / "삭제" (Eliminar) / "시크릿 모드입니다" (Estás en modo incógnito) / "시크릿 세션은 기록, 메모리, 검색에 남지 않으며 Claude 학습에 사용되지 않습니다." (Las sesiones incógnito no quedan en el historial, la memoria ni las búsquedas, y no se usan para entrenar a Claude.) / "모든 기기에서 로그아웃" (Cerrar sesión en todos los dispositivos) (consultado el 2026-10-26)
[^delete]: Ayuda de Anthropic, «Delete or rename a conversation». "Find the conversation in the left sidebar, or click "Chats and tasks" to see your full chat history." / "Click the checkbox on the left side of additional conversations you want to delete, or click "Select all" at the top." / "Touch and hold the conversation." / "Open your chat list and tap the checklist icon in the top right corner." / "When you delete a conversation, it's removed from your conversation history immediately and deleted from our back-end systems within 30 days." https://support.claude.com/en/articles/8230524 (consultado el 2026-10-26)
[^memory-delete]: Ayuda de Anthropic, «Use Claude’s chat search and memory to build on previous context». "When a conversation is deleted, including under a retention period, memory entries generated from it aren’t removed, but you can delete individual memories while memory is on." https://support.claude.com/en/articles/11817273 (consultado el 2026-10-26)
[^new]: Ayuda de Anthropic, «Claude Cowork and chat are one Claude». "One conversation list: Your quick questions and longer tasks live together in Recents." / "Search doesn't include older Cowork tasks." https://support.claude.com/en/articles/16761823 (consultado el 2026-10-26)
[^search]: Ayuda de Anthropic, «Use Claude’s chat search and memory to build on previous context». "Searching past chats is available to users on paid plans (Pro, Max, Team, and Enterprise plans) on the web, Claude Desktop, and Claude Mobile apps." / "When Claude searches your previous chats, you will see this reflected in your current chat as a tool call." / "Individual project conversations (searches are limited to within each specific project)." / "When Claude references previous conversations through search, you'll see citations linking back to the original chats, along with the option to delete specific conversations." / "Yes, navigate to Settings > Your Claude (or Settings > Memory in the older Settings layout) and switch the toggle next to Search and reference chats off." https://support.claude.com/en/articles/11817273 (consultado el 2026-10-26)
[^share-people]: Ayuda de Anthropic, «Share a chat with specific people». "This is the default way to share a chat and keeps it private to the people you choose." / "Sharing with specific people is available on all plans (Free, Pro, Max, Team, and Enterprise) on claude.ai." / "If someone forwards the email, the link won't open for anyone else." / "Recipients can't continue the chat, copy it to their account, or download files from it." / "Pending invites expire after 30 days if they aren't opened." / "There's a limit on how many people you can invite in a day." / "open the share dialog and click "Update shared chat."" / "To stop sharing the chat entirely, click "Turn off" in the share dialog." / "You can also review everything you've shared from Settings > Privacy under Shared chats." / "Sharing with specific people is available on claude.ai on the web." https://support.claude.com/en/articles/16762496 (consultado el 2026-10-26)
[^share-old]: Ayuda de Anthropic, «Share and unshare chats». "While chats are always private by default, you can easily create snapshots of your conversations to share via direct link." / "Click the "Share" button in the pop out to create a shareable link." / "If you share a chat that contains an attached file, the file itself is not included in the shared snapshot and remains private." https://support.claude.com/en/articles/10593882 (consultado el 2026-10-26)
[^public]: Ayuda de Anthropic, «Public links for shared chats». "Public links are available on Free, Pro, and Max plans." / "Anyone with the link can open it. No Claude account is required." / "The simple rule: treat a public link as public." / "there's no way to limit a public link to specific people." / "It can't remove copies, screenshots, or archives someone else already made." https://support.claude.com/en/articles/16762437 (consultado el 2026-10-26)
[^file-share]: Ayuda de Anthropic, «Create and edit files with Claude». "Disabled public sharing of conversations that include any file artifacts from the code execution and file creation feature for free, Pro, and Max users." https://support.claude.com/en/articles/12111783 (consultado el 2026-10-26)
[^incognito]: Ayuda de Anthropic, «Use incognito chats». "Incognito chats are temporary conversations that aren't saved to your chat history or to Claude’s memory." / "Incognito chats are not used for training." / "While incognito chats aren't saved to your chat history, they are retained for either 30 days (default), or longer in accordance with your organization's custom data retention setting (available for Enterprise plans)." / "The interface will indicate you're in an incognito chat with a black border and “Incognito chat” label in the upper left corner." / "Yes, Claude can access this information within an incognito chat." / "Once closed, incognito chats cannot be reopened." / "Incognito mode is currently only available for chats outside of projects, so you won't see the ghost icon when starting a chat within a project." / "If you have the new Claude experience, incognito chats open in the previous chat experience, so Claude can't create files or run code in them." https://support.claude.com/en/articles/12260368 (consultado el 2026-10-26)
[^memory-off]: Ayuda de Anthropic, «Use Claude’s chat search and memory to build on previous context». "Unlike an incognito chat, the chat stays in your chat history and Claude can still find it when searching past chats from your other conversations." / "You need to turn memory off before you send the first message." https://support.claude.com/en/articles/11817273 (consultado el 2026-10-26)
[^sessions]: Ayuda de Anthropic, «Managing your active sessions». "Scroll to the Active sessions section (called Where you're logged in in the updated Settings layout)." / "Click the three-dot menu (⋮) next to that session." / "terminate it right away and consider changing your password." https://support.claude.com/en/articles/13124001 (consultado el 2026-10-26)
[^logout]: Ayuda de Anthropic, «How do I log out of all active sessions?». "When you log in via claude.ai, this creates a session with a duration of 28 days." / "This option is not currently available in the Claude mobile apps for iOS or Android." / "This action will immediately sign you out of your account across all devices where you were previously logged in, including:" https://support.claude.com/en/articles/10310342 (consultado el 2026-10-26)
[^incognito-name]: La ayuda habla de un borde negro y de la marca «Incognito chat». El nombre de la marca puede variar según la pantalla.
[^logout-name]: En la ayuda aparece escrito como el botón «Log Out» (cerrar sesión).
[^screen-share]: Comprobado directamente en la ventana que se abre con ▾ junto al título de la conversación → «Compartir sesión» (세션 공유). "지금까지의 메시지만 공유됩니다" (Solo se comparten los mensajes hasta ahora), «Añadir personas por correo» (이메일로 사람 추가), «Invitar» (초대하기), «Usuarios con acceso» (액세스 권한이 있는 사용자), «Solo las personas invitadas» (초대받은 사람만), «Copiar enlace» (링크 복사). La ayuda llama a ese mismo sitio «People with access» y «Send». La conversación usada para la captura se borró después de hacerla (consultado el 2026-10-28, web, plan gratuito (Free))
