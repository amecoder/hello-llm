# Capítulo 3. Gestionar las conversaciones — buscar, ordenar, compartir y ocultar

> **En una línea**: cuando se acumulan conversaciones, las encuentras con la **búsqueda**, y las que no usas las **archivas** o las **eliminas**.
> Para enseñarle una conversación a otra persona usa el **enlace para compartir**; si no quieres que quede registro, el **chat temporal**; y si una conversación te incomodaría que la viera quien está a tu lado, los **chats bloqueados**.

Las pantallas corresponden a la web en octubre de 2026 (plan Plus). En el plan gratuito o en la aplicación del móvil, la ubicación de los menús puede ser un poco distinta.

## Empezar un chat nuevo

Si pulsas «Nuevo chat» (새 채팅) arriba del todo en el menú lateral, se abre una conversación en blanco. Cuando envías la primera pregunta, esa conversación aparece en la lista «Recientes» (최근) del menú lateral.

Cuándo conviene abrir un chat nuevo lo aprendiste en la etapa 1. Es cuando cambió el tema, cuando olvida una y otra vez las primeras instrucciones o cuando la conversación se ha hecho demasiado larga ([capítulo 6 de la etapa 1](../00-common/06-conversation.md)).
También vale en ChatGPT. Para pasar una conversación larga, pide una nota de traspaso como esta y pégala en el chat nuevo.

```
Quiero seguir esta conversación en un chat nuevo. Ordena por apartados lo que hemos decidido hasta ahora, mis preferencias y lo que queda por hacer.
```

::: details La respuesta que recibes será más o menos así (ejemplo — pulsa para desplegar)
Es un ejemplo hecho por esta guía. La respuesta real varía según el servicio y el momento.

Si era una conversación en la que hablabais de un viaje en familia, tendría esta forma.

> **Lo decidido hasta ahora**
> - Semana ○ del mes ○, ○ noches y ○ días
> - Viaje con mis padres
>
> **Mis preferencias**
> - Recorridos a pie cortos
> - Alojamiento tranquilo
>
> **Lo que queda por hacer**
> - Elegir uno de los ○ alojamientos candidatos
> - Decidir el restaurante de la cena del primer día

**Comprueba si la recibiste bien**: ¿Llegó dividida en tres bloques: lo decidido, mis preferencias y lo que queda? ¿Falta algo de lo que se decidió en la conversación? ¿Hay algo que aún no se decidió escrito como si ya lo estuviera?

:::

<Quiz id="ch103-new" />

## Encontrar conversaciones anteriores — búsqueda de chats

Si pulsas la **lupa** («Buscar», 검색) arriba del todo en el menú lateral, se abre la ventana de búsqueda. Con el teclado es Ctrl+K en Windows y Cmd+K en Mac.[^search]

![Ventana de búsqueda de chats. Fíjate en el campo de entrada de arriba, «Buscar…» (검색…), y debajo la lista de conversaciones «Recientes»](../../../guide/11-chatgpt/assets/shot-10-search-marked.png)

Es una pantalla en la que los títulos de las conversaciones y el nombre de la cuenta se cambiaron por ejemplos. Escribe una palabra en el campo ① «Buscar…» y, si no escribes nada, aparece ② la lista de conversaciones «Recientes».

Si quieres encontrar «la conversación en la que pregunté la semana pasada por una función de Excel», basta con escribir `Excel` en el campo ① «Buscar…». Hay cosas que debes saber.[^search]

- **La búsqueda de chats no es una búsqueda en internet.** Solo busca dentro de tus conversaciones, proyectos y archivos. Para buscar en internet usa «Búsqueda web» (웹 검색) del menú + ([capítulo 6](06-search.md)).
- **Las conversaciones eliminadas no aparecen y las archivadas sí.** La diferencia entre archivar y eliminar la verás en la sección siguiente.

<Quiz id="ch103-search" />

## Ordenar las conversaciones — fijar, archivar y eliminar

Las conversaciones se ordenan desde el **menú de más opciones** (•••, el botón de tres puntos) que hay junto a cada conversación del menú lateral.[^delete]

![Pantalla con el menú de más opciones (•••) desplegado en una conversación del menú lateral. Tiene «Cambiar nombre», «Fijar», «Compartir», «Archivar», «Eliminar» y «Mover a proyecto»](../../../guide/11-chatgpt/assets/shot-24-chat-menu.png)

*Es una pantalla en la que los títulos de las conversaciones y los nombres se cambiaron por ejemplos.*

El menú tiene «Cambiar nombre» (이름 변경), «Fijar» (고정), «Compartir» (공유), «Archivar» (보관), «Eliminar» (삭제) y «Mover a proyecto» (프로젝트로 이동).[^screen-menu] El nombre de la conversación se cambia con «Cambiar nombre». Las conversaciones que abres a menudo, si pulsas «Fijar», se quedan pegadas arriba en el menú lateral, en «Hilos fijados» (고정된 스레드).

### Archivar y eliminar son cosas distintas

| | «Archivar» | «Eliminar» |
|---|---|---|
| En el menú lateral | Desaparece | Desaparece |
| Ventana de confirmación | No hay; se archiva al instante | — |
| En la búsqueda de chats | **Aparece** | No aparece |
| Deshacer | Se deshace con «Desarchivar» | **No se puede deshacer** (ni el servicio de atención puede recuperarla) |
| En los servidores de la empresa | Se conserva | Queda programada para eliminarse de forma permanente en un plazo de 30 días |

Fuente: ayuda de OpenAI[^delete]

Piensa que **archivar** (archive) es guardar en un cajón y **eliminar** es tirar. Si no estás seguro, archiva primero. Archivar se puede deshacer, pero eliminar no.
Las conversaciones archivadas puedes sacarlas de nuevo desde Configuración → «Chats archivados» (보관된 채팅).

Que no veas una conversación en el menú lateral no significa que se haya borrado.[^mobile] Primero comprueba que has entrado con la misma cuenta ([capítulo 1](01-getting-started.md#registrarte-e-iniciar-sesion)) y búscala con la búsqueda de chats. Las conversaciones archivadas también aparecen en la búsqueda.

Al pulsar «Eliminar» sale una ventana de confirmación que dice: «Esta acción eliminará permanentemente (título de la conversación). No se puede deshacer». Solo se borra si pulsas «Eliminar chat» (채팅 삭제).[^screen-menu]

![Ventana de confirmación «¿Eliminar el chat?». Tiene «Cancelar» y el botón rojo «Eliminar chat»](../../../guide/11-chatgpt/assets/shot-24-chat-delete-confirm.png)

Para ordenar todo de golpe, puedes usar «Archivar todos los chats» (모든 채팅 보관하기) o «Eliminar todos los chats» (모든 채팅 삭제) de Configuración → «Gestión de datos» (데이터 관리). **«Eliminar todos los chats» no se puede deshacer.**[^delete]

> **Aunque borres la conversación, los archivos se quedan.** Si los archivos que subiste en la conversación están guardados aparte en la «Biblioteca» (라이브러리), eliminar la conversación no borra los archivos. Los archivos bórralos aparte en la Biblioteca ([capítulo 4](04-files-images.md)).[^delete]

<Quiz id="ch103-archive-delete" />

## Enseñar una conversación — enlace para compartir

Si quieres que otra persona vea una conversación, pulsa «Compartir» en la pantalla de la conversación. Pulsa «Crear enlace» (링크 만들기) o «Copiar enlace» (링크 복사), que aparecen en pantalla, y pégalo en una aplicación de mensajería.
La dirección del enlace tiene la forma `https://chatgpt.com/share/…`.[^share]

<!-- Falta captura de pantalla: la ventana de crear enlace que aparece al pulsar «Compartir» en la pantalla de la conversación (web) -->

Recuerda que el enlace para compartir es **como una foto de ese momento** (instantánea, snapshot).[^share]

- **Lo que hablas después de crear el enlace no entra.** Para mostrar también lo nuevo hay que pulsar «Actualizar enlace» (링크 업데이트).
- **Cualquiera que tenga el enlace puede verlo.** No se puede limitar a una persona concreta, y el enlace puede acabar circulando por otros sitios.
- **No tiene fecha de caducidad.** No desaparece solo. Cuando ya no lo necesites, bórralo tú.
- Por defecto, tu nombre no se muestra (anónimo).

Los enlaces creados puedes borrarlos uno a uno en Configuración → «Gestión de datos» → «Enlaces compartidos — Administrar», o todos de una vez con «Eliminar todos los enlaces compartidos».[^share]
Antes de compartir, echa un vistazo a la conversación para ver si hay datos personales como nombres o teléfonos ([capítulo 9 de la etapa 1](../00-common/09-safety.md)). Porque cualquiera que tenga el enlace puede verla.

<Quiz id="ch103-share" />

## No dejar registro — chat temporal

Las conversaciones que no quieres que queden en el historial, como elegir un regalo, hazlas en un **chat temporal**. Si pulsas el botón «Chat temporal» (임시 채팅) de arriba a la derecha, la pantalla cambia a la de chat temporal.
La primera vez que lo activas puede salir antes una ventana de aviso.

![Pantalla de chat temporal. En el centro, el título «Chat temporal» y el texto «Este chat puede consultar la memoria, los plugins y las instrucciones personalizadas, pero no aparece en el historial»; arriba a la derecha, al pulsar «Personalizado» se despliega un menú para elegir entre «Personalizado» y «No personalizado»](../../../guide/11-chatgpt/assets/shot-19-temporary-personal-marked.png)

El chat temporal tiene tres características.

- **No queda en el historial** (el texto ④ de la imagen). No aparece en la lista de conversaciones del menú lateral. Eso sí, **por seguridad se puede conservar una copia hasta 30 días**.
- **No se usa para el entrenamiento.** Esta conversación no se usa en el entrenamiento que mejora la IA.
- **No crea memoria nueva.** Lo que hablas en un chat temporal no se guarda como nueva memoria ([capítulo 5](05-memory.md)).

En el botón **«Personalizado»** (개인화됨) de arriba a la derecha (① de la imagen) eliges si en esta conversación se usan la memoria, las instrucciones personalizadas y los plugins que ya están guardados.[^temp][^screen-temp]

| Lo que eliges | Significado |
|---|---|
| ② «Personalizado» (la opción inicial) | Responde teniendo en cuenta la memoria, los plugins y las instrucciones personalizadas que tienes guardados |
| ③ «No personalizado» (개인화되지 않음) | Responde sin usar la memoria, los plugins ni las instrucciones personalizadas (puede usar información limitada por seguridad) |

**Hay que elegir antes de enviar el primer mensaje.** Una vez empezada la conversación, no se puede cambiar.[^temp] Antes no existía esta opción. Si la pantalla es distinta de la de esta guía, sigue la pantalla.

> **Hay también funciones que no se pueden usar en el chat temporal.** En la pantalla web de octubre de 2026, en el menú + del chat temporal, «Crear imagen» (이미지 생성) estaba apagada en gris y no estaba la opción «Investigación en profundidad» (심층 리서치). «Añadir fotos y archivos» y «Búsqueda web» sí se podían usar.

Cosas que debes saber.

- **No significa que «no quede en ningún sitio».** Se puede conservar una copia hasta 30 días. No escribas información como contraseñas ni siquiera en un chat temporal.[^temp]
- Los archivos que subes en un chat temporal no se guardan en la «Biblioteca».[^library]
- También puedes guardarlo más tarde como conversación normal. Entonces sigue el ajuste de entrenamiento de la cuenta, como una conversación normal.[^temp]
- Si quieres recibir una respuesta limpia, sin información sobre ti, elige «No personalizado» y empieza.

<Quiz id="ch103-temporary" />

## Para que otros no la abran — chats bloqueados

Si compartes ordenador con tu familia y no quieres que se vean las conversaciones de consultas de salud, prueba los **chats bloqueados**. Es una función que se está ofreciendo por etapas a partir del 20 de octubre de 2026.[^rn-lock]

1. Pulsa el menú de más opciones (•••) de la conversación que quieras bloquear → «Bloquear chat» (대화 잠그기).
2. Los chats bloqueados se reúnen en «Proyectos» → «Chats bloqueados» (잠긴 대화).
3. Para abrirlos se introduce un **PIN de cuenta de 4 cifras** (una contraseña numérica que eliges tú). En el móvil también se puede usar la autenticación biométrica, como Face ID.

El PIN de cuenta se fija en Configuración → «Seguridad e inicio de sesión» (보안 및 로그인).[^lock] En la aplicación del móvil se vuelve a bloquear al pasar 1 minuto. Es cuando sales 1 minuto de un chat bloqueado o cuando la aplicación pasa 1 minuto en segundo plano.

<!-- Falta captura de pantalla: la pantalla en la que se pide el PIN en el menú lateral «Proyectos» → «Chats bloqueados» (web) -->

Hay límites que debes conocer.[^lock]

- **No es una caja fuerte, es un biombo.** No hay cifrado aparte (transformar el contenido para que otros no puedan leerlo). El periodo de conservación y el ajuste de entrenamiento siguen igual.
- **Si olvidas el PIN y lo restableces, todos los chats bloqueados se eliminan de forma permanente.** También se borran los archivos que contienen, y el servicio de ayuda no puede recuperarlos. Acuérdate siempre del PIN.
- Algunas conversaciones no se pueden bloquear, como los chats temporales, los archivados y los creados con un enlace para compartir.

<Quiz id="ch103-locked" />

## Practica tú mismo

1. Con «Nuevo chat», pregunta: «Recomiéndame tres destinos para el viaje en familia del mes que viene».
2. Pulsa la lupa (Ctrl+K) y busca la conversación que acabas de tener con `viaje`.
3. «Archiva» esa conversación, busca otra vez para ver si aparece y, en Configuración → «Chats archivados», pulsa «Desarchivar».
4. Activa el «Chat temporal», haz cualquier pregunta, vuelve a un chat nuevo y comprueba que esa conversación no está en «Recientes» del menú lateral.

**Proyecto continuo** ([preparar un club de lectura](../00-common/practice-kit.md)): escribe `lectura` en la lupa (Ctrl+K) y busca la conversación del club de lectura que tuviste en el capítulo anterior.

## Resumen

- La búsqueda de chats solo busca dentro de tus conversaciones. Las archivadas aparecen y las eliminadas no.
- Archivar se puede deshacer; eliminar, no. Si no estás seguro, archiva primero.
- El enlace para compartir es una instantánea del momento en que se creó, cualquiera que lo tenga puede verlo y no caduca.
- El chat temporal queda fuera del historial y del entrenamiento y no crea memoria nueva, pero puede quedar una copia de hasta 30 días. Si se usan o no la memoria y las instrucciones guardadas se elige antes de empezar con «Personalizado» / «No personalizado».
- Los chats bloqueados son una función que oculta con un PIN. Si restableces el PIN, se borran todos los chats bloqueados.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Archive | Archivar | Apartar de la lista sin borrar |
| Shared Link | Enlace compartido | La dirección para enseñar una conversación a otras personas |
| Snapshot | Instantánea | Una copia tal cual de cómo era algo en un momento |
| Temporary Chat | Chat temporal | Conversación que queda fuera del historial y del entrenamiento y no crea memoria nueva |
| Personalized | Personalizado | Estado en que responde adaptándose a ti con la memoria y las instrucciones guardadas |
| Locked Chat | Chat bloqueado | Conversación que solo se abre introduciendo un PIN |
| PIN | PIN | Contraseña numérica corta para confirmar que eres tú |
| Encryption | Cifrado | Transformar el contenido para que solo lo puedan leer las personas previstas |

<ChapterDone :chapter="103" />

Siguiente capítulo: [Capítulo 4. Archivos, fotos y crear imágenes](04-files-images.md)

[^search]: Ayuda de OpenAI, «Finding your chats, projects, and files in ChatGPT». "press Ctrl+K on Windows or Cmd+K on macOS" / "Sidebar search finds your existing content. It does not search the web." https://help.openai.com/en/articles/10056348 (consultado el 2026-10-23)
[^delete]: Ayuda de OpenAI, «Deleting and archiving chats in ChatGPT». "schedules it for permanent deletion from its systems within 30 days" / "You cannot restore a deleted chat" / "No confirmation is required." / "Archived chats remain searchable." / "The Delete all chats action cannot be undone." / "Deleting a chat does not delete files saved separately in Library." https://help.openai.com/en/articles/8809935 (consultado el 2026-10-23)
[^share]: Ayuda de OpenAI, «Sharing conversations and scheduled tasks in ChatGPT». "Messages added later are not included automatically." / "Shared links do not have configurable expiration dates." / "Personal-account links are available to anyone who has the link." / "anonymous by default" / "Shared conversation links begin with https://chatgpt.com/share/." https://help.openai.com/en/articles/7925741 (consultado el 2026-10-23)
[^temp]: Ayuda de OpenAI, «Temporary chat in ChatGPT». "OpenAI may keep a copy of a temporary chat for up to 30 days for safety purposes." / "Saving converts it into a regular chat" / "Choose Personalized or Unpersonalized before you send your first message." / "Neither option creates or updates memories while the chat remains temporary. You cannot change personalization after the conversation starts." https://help.openai.com/en/articles/8914046 (consultado el 2026-10-24)
[^screen-temp]: Comprobado directamente en la pantalla web de ChatGPT (plan Plus, en coreano). Menú «Personalizado» de la pantalla de chat temporal — "이 채팅은 메모리, 플러그인, 사용자 지정 지침을 참조할 수 있습니다" (en español: «Este chat puede consultar la memoria, los plugins y las instrucciones personalizadas») / "이 채팅에서는 메모리, 플러그인, 사용자 지정 지침을 무시합니다" (en español: «En este chat se ignoran la memoria, los plugins y las instrucciones personalizadas») (consultado el 2026-10-24)
[^library]: Ayuda de OpenAI, «Using Library to manage files in ChatGPT». "files uploaded while using Temporary Chat are not saved to your account or Library". https://help.openai.com/en/articles/20001052 (consultado el 2026-10-23)
[^mobile]: Ayuda de OpenAI, «Troubleshooting the ChatGPT mobile app». "A chat missing from the sidebar hasn't necessarily been deleted." https://help.openai.com/en/articles/7910461 (consultado el 2026-10-24)
[^rn-lock]: Ayuda de OpenAI, «ChatGPT release notes», entrada del 2026-10-20. "Open them with your 4-digit account PIN". https://help.openai.com/en/articles/6825453 (consultado el 2026-10-23)
[^lock]: Ayuda de OpenAI, «Using locked chats in ChatGPT». "You can find your locked chats under Projects > Locked chats." / "It does not: create end-to-end encryption or a separate encrypted vault" / "Resetting your account PIN permanently deletes all locked chats" / "Access ends automatically after 1 minute away" / "The Lock chat option is unavailable for some conversation types". https://help.openai.com/en/articles/20001411 (consultado el 2026-10-23)
[^screen-menu]: Comprobado directamente el menú «Acciones del chat» (•••) de una conversación del menú lateral y la ventana de confirmación de «Eliminar». La conversación usada para las capturas se borró después de hacerlas (consultado el 2026-10-28, pantalla web de una cuenta Plus)
