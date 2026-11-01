# Capítulo 5. Memoria y personalización: sin tener que presentarte cada vez

> **En una línea**: lo que quieres que se respete siempre lo escribes en las **instrucciones**, y lo que Claude va sabiendo de ti mientras conversáis lo guarda la **memoria**.
> Aprenderás a ver, corregir y desactivar lo que se recuerda. También veremos los avisos de descanso, que te ayudan a parar cuando llevas mucho rato.

Las pantallas corresponden a la versión web de octubre de 2026. Ahora se están desplegando por turnos la nueva pantalla de Claude y la nueva pantalla de configuración, así que el nombre y la posición de los menús pueden variar según la pantalla.
Las imágenes de este capítulo son de la versión web del plan gratuito. Para los menús uso los nombres que se ven en las imágenes. Los otros nombres que aparecen en la ayuda los he reunido en las notas al pie y en los recuadros desplegables.

## Tres formas de darte a conocer

En el [capítulo 4 de la etapa 1](../00-common/04-prompt-basics.md#los-5-elementos-de-un-buen-prompt) aprendiste que un buen prompt incluye **contexto**.
Pero escribir otra vez en cada chat nuevo algo como "tengo una tienda de comida casera en mi barrio" es pesado.
Como viste en el [capítulo 6 de la etapa 1](../00-common/06-conversation.md#en-una-conversacion-nueva-por-defecto-no-sabe-nada), una conversación nueva empieza sin saber nada de ti.

Claude tiene tres funciones que te ahorran ese esfuerzo.

| Función | Quién decide | Comparación |
|---|---|---|
| **Instrucciones** (instructions) | Las escribes tú | Una nota de pedidos pegada en la pared de la tienda |
| **Memoria** (memory) | Claude la guarda mientras conversáis | El dueño que recuerda los gustos de sus clientes habituales |
| **Consultar chats anteriores** | Claude los busca si tú se lo pides | Revisar el libro de cuentas anterior |

No hace falta dejar las tres perfectas desde el principio. Las vas ajustando una a una mientras las usas.

<Quiz id="ch205-three-ways" />

## Instrucciones: reglas para todas las conversaciones

Las **instrucciones** son lo que "siempre hay que respetar", escrito por ti. Lo que escribas aquí se aplica a **todas las conversaciones** con Claude.[^personal]

Se abren así.[^personal]

1. Pulsa tu nombre, abajo a la izquierda.
2. Elige «Configuración» (설정) → «Cuenta» (계정).[^screen]
3. Escribe en la casilla ② «Instrucciones para Claude» (Claude 지침).[^screen]

![Pantalla «Cuenta» (계정) de la configuración. Con números rojos: ① «Nombre completo» (성명) y «¿Cómo quieres que te llame Claude?» (Claude가 어떻게 불러드릴까요?), ② casilla de «Instrucciones para Claude» (Claude 지침), ③ «Cerrar sesión en todos los dispositivos» (모든 기기에서 로그아웃), ④ «Eliminar cuenta» (계정 삭제)](../../../guide/10-claude/assets/shot-09-settings-account-marked.png)

Es una pantalla con el nombre y el correo cambiados por ejemplos (plan gratuito). **Los números rojos son los mismos que los de la lista de abajo.**

- ① «Nombre completo» y «¿Cómo quieres que te llame Claude?»: el nombre con el que Claude se dirigirá a ti
- ② «Instrucciones para Claude»: la casilla donde escribes las reglas que se aplican a todas las conversaciones
- ③ «Cerrar sesión en todos los dispositivos»
- ④ «Eliminar cuenta»

Encima de la casilla ② hay un aviso de que Claude tendrá en cuenta estas instrucciones en todos los chats y en Cowork.[^screen] La casilla vacía muestra en gris el texto «Ejemplo: mantén las explicaciones breves y claras».[^screen]

::: details Si en la configuración ves «Your Claude» en lugar de «Cuenta» (haz clic para desplegar)
En la ayuda, esta casilla aparece como «Instrucciones» dentro de «Configuración» → «Your Claude».[^personal] Puede que lo veas así si tu cuenta ya tiene la nueva pantalla de configuración. Sigue los nombres que veas en tu pantalla.
:::

Si no sabes qué escribir, elige de los cinco elementos del [capítulo 4 de la etapa 1](../00-common/04-prompt-basics.md#los-5-elementos-de-un-buen-prompt) solo los que son **siempre iguales** y ponlos.

```
Soy dueña de una tienda de comida casera de barrio y tengo 50 años. No conozco bien los términos de informática.
- Responde con trato de usted, y explica entre paréntesis las palabras difíciles.
- Primero dime la conclusión en una línea y después la explicación.
- Si no estás seguro de algo, no te lo inventes: dime que no lo sabes.
```

Compara un ejemplo flojo con uno mejor.

- Ejemplo flojo: "Responde con amabilidad."
- Ejemplo mejor: "Explica las palabras difíciles entre paréntesis. Dime primero la conclusión en una línea."

El ejemplo mejor es concreto en lo que hay que hacer.

Cuando hayas escrito las instrucciones, abre un chat nuevo y envía una pregunta corta. Pregúntate: "¿el tono es el correcto? ¿sale primero la conclusión?"

No hace falta rellenar las instrucciones el primer día. Al usarlas, te encontrarás **pidiendo una y otra vez las mismas correcciones**: "empieza por la conclusión", "tablas de 3 columnas como máximo". Esas frases son justo las que debes pasar a las instrucciones.[^academy-context] Una vez escritas, a partir de la siguiente conversación no tendrás que repetirlas.

Las reglas que solo valen para una tarea concreta es mejor ponerlas en las **instrucciones del proyecto** que en las de toda la cuenta. Las instrucciones del proyecto solo se aplican a los chats de ese proyecto.[^personal] Los proyectos se tratan en el [capítulo 7](07-projects-tools.md).

<Quiz id="ch205-instructions" />

## Memoria: lo que Claude recuerda mientras conversáis

La **memoria** es la función con la que Claude guarda lo que va sabiendo de ti en las conversaciones.
En los planes Free, Pro y Max está **activada desde el principio** en la web, el escritorio y la app del móvil.[^memory]
En los planes de empresa (Team y Enterprise), el administrador debe permitirla, y cada persona la tiene desactivada hasta que la activa.[^memory]

Claude no resume cuando termina la conversación. La guarda **mientras conversáis**, dividida por temas.[^memory]
Por eso, si dices "ha cambiado la fecha límite", la siguiente conversación ya lo sabe.

En el [capítulo 6 de la etapa 1](../00-common/06-conversation.md#en-una-conversacion-nueva-por-defecto-no-sabe-nada) o en otros cursos de IA se enseña que "una conversación nueva empieza desde cero".[^academy-memory] En Claude, si la memoria está activada, una conversación nueva también puede empezar sabiendo lo que le has contado.
Si quieres ver cómo es empezar de verdad en blanco, antes de enviar el primer mensaje de un chat nuevo desactiva «+» → «Memoria» (메모리). En ese chat no usará lo que recuerda.[^off] El método está más abajo, en «Desactivar la memoria solo en un chat».

### Qué recuerda

Claude recuerda el contexto cotidiano que ayuda a trabajar juntos.[^memory]

- Tu puesto y lo que estás haciendo
- Las personas y los lugares que aparecen en tu trabajo y tu vida
- Tu forma preferida de comunicarte y de trabajar
- Los detalles de lo que tienes en marcha

A veces Claude lo guarda por su cuenta. Si quieres que algo se quede seguro, basta con decirle tú "recuerda esto".[^memory]

```
Recuerda esto: tengo una tienda de comida casera en Seúl y mis clientes son sobre todo personas de 40 a 60 años.
Si te pido textos de promoción, escríbelos pensando en ese público.
```

### Qué no recuerda

Los **temas sensibles**, como la salud, la raza, la religión, la política o la identidad sexual, no se guardan por defecto.[^sensitive]
Si no quieres explicarlos cada vez, puedes activar «Incluir temas sensibles en la memoria» (민감한 주제를 메모리에 포함) en «Configuración» → «Memoria».[^screen][^sensitive][^your-claude] Al principio está desactivado.[^screen]

Los números de documentos de identidad, los antecedentes penales, los números de cuentas financieras y la situación migratoria **no se guardan aunque se lo pidas.**[^sensitive]
Eso no significa que puedas escribir esos datos en el chat. Antes de ponerlos, recuerda el apartado [capítulo 9 de la etapa 1](../00-common/09-safety.md#lo-que-no-debes-escribir).

> Dentro de un proyecto se va acumulando una memoria propia de ese proyecto. No usa la memoria de otros proyectos.[^memory] Lo veremos con más detalle en el [capítulo 7](07-projects-tools.md).

<Quiz id="ch205-memory" />

## Ver y corregir lo que se recuerda

Puedes ver directamente qué recuerda Claude sobre ti.
Los ajustes de la memoria están reunidos en una sola pantalla: «Configuración» → «Memoria».[^screen]

![Pantalla «Memoria» (메모리) de la configuración. Con números rojos: ① interruptor «Generar memoria a partir de los chats» (채팅에서 메모리 생성), ② interruptor «Incluir temas sensibles en la memoria» (민감한 주제를 메모리에 포함), ③ «Importar memoria de otros proveedores de IA» (다른 AI 제공업체에서 메모리 가져오기) y «Iniciar importación» (가져오기 시작), ④ «Exportar memoria» (메모리 내보내기) y «Exportar» (내보내기)](../../../guide/10-claude/assets/shot-09-settings-memory-marked.png)

Es una pantalla del plan gratuito. **Los números rojos son los mismos que los de la lista de abajo.**

- ① «Generar memoria a partir de los chats»: el interruptor que activa y desactiva la memoria
- ② «Incluir temas sensibles en la memoria»: el interruptor para que también recuerde temas como la salud o la religión
- ③ «Importar memoria de otros proveedores de IA»: trae a Claude lo que recuerda otra IA
- ④ «Exportar memoria»: descarga lo que recuerda en un archivo

En la parte de abajo de esta pantalla está la lista de memorias guardadas.[^screen] Pulsa un tema para leerlo, edítalo con el icono del lápiz o bórralo con «Eliminar» (삭제).[^manage][^your-claude]

<!-- Falta captura de pantalla: lista de temas y botones de edición y «Eliminar» (삭제) en una cuenta con memorias guardadas -->

Al final de la lista también hay una casilla que dice «Dile a Claude qué quieres cambiar» (Claude에게 변경할 내용을 알려 주세요).[^screen]
No hace falta ir a la pantalla de configuración. Si lo corriges hablando en el chat, se aplica desde la siguiente conversación.[^manage]

```
Olvida ya que tengo una tienda de comida casera. El mes pasado la cerré.
```

Cuando abras la lista, pregúntate: "¿hay algo equivocado? ¿hay algo que no quiero que se quede?"

### Aunque borres el chat, el recuerdo se queda

Hay un punto que se presta a confusión. **Aunque borres una conversación, la memoria creada en ella no se borra.**[^manage]
Si hay algo que quieres eliminar, borra esa memoria aparte desde la lista de «Configuración» → «Memoria».

> Esta explicación vale para la nueva memoria actual. En algunos planes de empresa queda todavía la memoria de la forma antigua.[^manage] Si es distinta de lo que ves, sigue tu pantalla.

<Quiz id="ch205-manage" />

## Desactivar la memoria: pausar y restablecer

El interruptor de la memoria es ① «Generar memoria a partir de los chats» (Memory from chats), en «Configuración» → «Memoria».[^screen][^off][^your-claude]
Al pulsar para apagarlo, tendrás que elegir una de dos opciones.[^off]

- **«Pausar memoria»** (Pause memory): deja los recuerdos como están. Pero ni los usa ni crea otros nuevos.
- **«Restablecer memoria»** (Reset memory): **borra para siempre** todo, incluida la memoria de los proyectos. No se puede deshacer.

Si solo quieres descansar un rato, elige pausar. Si restableces, aunque la vuelvas a activar empezará desde cero.[^off]

### Desactivar la memoria solo en un chat

También puedes dejar la memoria activada y apagarla **solo en este chat**.[^off]

1. Abre un chat nuevo.
2. Pulsa «+» en el cuadro de escritura.
3. Pulsa ⑥ «Memoria» (Memory), al final del menú, para apagarla. Si hay una marca de verificación a la derecha, está activada.[^screen]
4. Envía el primer mensaje.

![El menú que se abre al pulsar «+» en el cuadro de escritura. Con números rojos: ① «Subir o añadir archivos» (파일 업로드 또는 추가), ② «Skills», ③ «Añadir conectores» (커넥터 추가), ④ «Sistema de diseño» (디자인 시스템), ⑤ «Añadir plugins» (플러그인 추가), ⑥ «Memoria» (메모리) con una marca de verificación](../../../guide/10-claude/assets/shot-02-plus-menu-marked.png)

Es una pantalla del plan gratuito. En este capítulo usamos ⑥ «Memoria». Los demás se tratan en el [capítulo 4](04-files-artifacts.md) y el [capítulo 7](07-projects-tools.md).

Solo se puede apagar **antes de enviar el primer mensaje**. Una vez que empieza la conversación, no se puede cambiar.[^off]

Un chat iniciado así es distinto del **chat incógnito** del [capítulo 3](03-chats.md). Un chat con solo la memoria apagada se queda igualmente en el historial de conversaciones.[^off] Si no quieres que quede ni siquiera el historial, usa el chat incógnito.

| Lo que eliges | Memoria | Historial de conversaciones |
|---|---|---|
| Apagar «+» → «Memoria» | No la usa ni la crea | Se queda |
| Chat incógnito | No guarda | No se queda |

<Quiz id="ch205-off" />

## Consultar chats anteriores

También puedes preguntar: "oye, aquello de la otra vez".
En los planes de pago (Pro, Max, Team y Enterprise), Claude **busca en conversaciones anteriores** y continúa usando ese contenido.[^past]

Pregúntalo con naturalidad.

```
¿Te acuerdas del texto de promoción de la tienda que hicimos juntos la otra vez? Sigue puliéndolo a partir de ahí.
```

Cuando Claude busca en conversaciones anteriores, en el chat actual aparece una **marca de uso de herramienta**.[^past]
Las conversaciones que ha usado llevan un enlace a la conversación original.[^past] Pulsa el enlace para comprobar si Claude encontró la conversación correcta.

Cosas que conviene saber.

- **Las conversaciones dentro de un proyecto** solo se buscan dentro de ese proyecto.[^past]
- **Si quieres desactivarlo**, apaga «Buscar y consultar chats» (채팅 검색 및 참조) en «Configuración» → «Memoria».[^past][^past-where] Es una función de los planes de pago, así que en las pantallas del plan gratuito de este capítulo no se veía este interruptor.[^screen]
- El modo de buscar tú mismo conversaciones anteriores desde el menú lateral se explica en el [capítulo 3](03-chats.md).

<Quiz id="ch205-past-chats" />

## Traer y exportar la memoria de otra IA

Si usabas otro servicio de IA y te has pasado a Claude, puedes traer lo que se había acumulado allí.
Se puede hacer en la web y en la app de escritorio con **todos los planes**.[^import]

1. **Saca los recuerdos de la IA que usabas.** La ayuda tiene un prompt recomendado. Es un prompt en inglés que empieza por "I'm moving to another service and need to export my data.". Copia el texto completo desde el enlace de ayuda de la nota al pie.[^import]
2. **Abre la importación en Claude.** En «Configuración» → «Memoria», pulsa «Iniciar importación» (가져오기 시작), junto a ③ «Importar memoria de otros proveedores de IA».[^screen][^your-claude]
3. **Pégalo.** Pega en la casilla el texto que has sacado y pulsa «Añadir a la memoria» (메모리에 추가).[^import]
4. **Compruébalo.** Al terminar, pulsa «Ver lo que Claude ha aprendido sobre mí» (Claude가 나에 대해 학습한 내용 보기) para ver qué se ha incorporado.[^import]

Antes de importar, puedes modificar el prompt para **quitar la información sensible.**[^import] Lo más seguro es no incluir desde el principio lo que no quieres que se quede.

Hay dos cosas que debes saber.

- **Es una función experimental.** Lo importado no siempre entra bien.[^import]
- **Los datos personales sin relación con el trabajo pueden no conservarse.**[^import]

Y al revés, si quieres **exportar** lo que recuerda Claude, pulsa «Exportar» (내보내기), junto a ④ «Exportar memoria», en «Configuración» → «Memoria». Se descarga en un archivo .zip que contiene archivos Markdown (un formato de documento sencillo que solo guarda texto).[^screen]
También puedes pedirlo en el chat así.[^import]

```
Escribe todo lo que recuerdas de mí tal como está en tu memoria, sin cambiar ni una letra.
```

Si guardas el texto en un archivo de tu ordenador, tendrás una copia de seguridad.

<Quiz id="ch205-import" />

## Avisos de descanso y horas de silencio

Hablando con la IA, a veces no te das cuenta de cómo pasa el tiempo. Hay dos funciones para esos casos.
Se ofrecen como **beta** (función de prueba antes del lanzamiento oficial) en los planes Free, Pro y Max.[^wellbeing]

Se abren en «Configuración» → «Tiempo y concentración» (시간 및 집중) (Time and focus).[^screen][^wellbeing-name]

![Pantalla «Tiempo y concentración» (시간 및 집중) de la configuración. Con números rojos: ① «Aviso de descanso» (휴식 알림) y dos casillas para elegir horas y minutos, ② «Horas de silencio» (방해 금지 시간) y los botones de los días de domingo a sábado](../../../guide/10-claude/assets/shot-09-settings-time-marked.png)

Es una pantalla del plan gratuito. **Los números rojos son los mismos que los de la lista de abajo.**

- ① **Aviso de descanso**: eliges las horas y los minutos.[^screen] Cuando los usas, aparece un aviso. Puedes parar, pedir que te lo recuerde más tarde o cerrarlo y seguir.[^wellbeing]
- ② **Horas de silencio** (quiet hours)[^quiet-name] — eliges los días que quieres dejar libres para hacer otras cosas.[^screen]

Si lo fijas una vez en la web o en el escritorio, también se aplica a la app del móvil.[^wellbeing]

Ninguna de las dos es **un bloqueo forzoso.** Siempre puedes pulsar «Continuar» para seguir.[^wellbeing]
Además, son **independientes** del límite de uso de tu plan.[^wellbeing] El límite de uso se trata en el [capítulo 1](01-getting-started.md).

<Quiz id="ch205-wellbeing" />

## Prueba tú

1. Abre la lista de «Configuración» → «Memoria» y lee qué recuerda Claude sobre ti. Si hay algo equivocado, corrígelo o bórralo.
2. En «Instrucciones para Claude», dentro de «Configuración» → «Cuenta», escribe como en el ejemplo anterior una línea de contexto sobre ti y tres líneas de reglas.
3. En un chat nuevo, envía solo "recomiéndame tres cosas para hacer el fin de semana". Mira si el tono y el formato son los de las instrucciones.
4. Abre otro chat nuevo, desactiva «+» → «Memoria» antes del primer mensaje y envía la misma pregunta. Compara en qué se diferencian las dos respuestas.

**Proyecto continuo** ([Preparar un club de lectura](../00-common/practice-kit.md)): pon en «Instrucciones para Claude» una línea con la regla que siempre quieres para los avisos. Por ejemplo: "Cuando escribas un aviso, pon arriba del todo la fecha, el lugar y lo que hay que llevar." Esta línea puedes pasarla a las instrucciones del proyecto en el capítulo 7.

## Resumen

- Las instrucciones son reglas que escribes tú y se aplican a todas las conversaciones. Se escriben en «Configuración» → «Cuenta» → «Instrucciones para Claude». Las reglas solo para una tarea concreta van en las instrucciones del proyecto.
- La memoria la guarda Claude por temas mientras conversáis. En Free, Pro y Max está activada desde el principio.
- Los temas sensibles no se guardan por defecto, y cosas como números de identidad o de cuenta no se guardan aunque se lo pidas.
- Se ve y se corrige en «Configuración» → «Memoria». Aunque borres la conversación, la memoria se queda, así que bórrala aparte.
- Al desactivar la memoria, pausar conserva los recuerdos y restablecer los borra todos. Para apagarla solo en un chat, «+» → «Memoria» antes del primer mensaje.
- En los planes de pago se pueden buscar conversaciones anteriores y continuarlas.
- La memoria de otra IA se trae con «Iniciar importación». Es una función experimental. Lo que recuerda Claude de ti se descarga con «Exportar».
- Los avisos de descanso y las horas de silencio se fijan en «Configuración» → «Tiempo y concentración». Son avisos, no bloqueos.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Instructions | Instrucciones | Reglas que escribes tú para que se apliquen a todas las conversaciones |
| Memory | Memoria | Función con la que Claude recuerda lo que sabe de ti por las conversaciones |
| Pause memory | Pausar la memoria | Dejar los recuerdos como están, sin usarlos ni crear otros |
| Reset memory | Restablecer la memoria | Borrar todos los recuerdos para siempre |
| Search and reference chats | Buscar y consultar chats | Función que busca conversaciones anteriores y las usa en la respuesta actual |
| Memory import | Importar la memoria | Función para traer a Claude los recuerdos acumulados en otra IA |
| Time and focus | Tiempo y concentración | Ajuste de los avisos de descanso y las horas de silencio (nombre nuevo en la ayuda: Wellbeing) |
| Quiet hours | Horas de silencio | Función para fijar los días que dejas libres para otras cosas |

<ChapterDone :chapter="205" />

Siguiente capítulo: [Capítulo 6. Búsqueda e investigación](06-search.md)

[^screen]: Comprobado directamente en la pantalla web de Claude (plan gratuito, en coreano). «Configuración» → «Cuenta», «Instrucciones para Claude»: "Claude는 Anthropic의 가이드라인 범위 내에서 이 계정 및 연결된 모든 계정의 채팅과 Cowork 전반에 걸쳐 이 지침을 염두에 둡니다." (Claude tiene en cuenta estas instrucciones en los chats y en Cowork de esta cuenta y de todas las cuentas conectadas, dentro de las directrices de Anthropic.) / «Configuración» → «Memoria»: «Generar memoria a partir de los chats» (채팅에서 메모리 생성), «Incluir temas sensibles en la memoria» (민감한 주제를 메모리에 포함), «Importar memoria de otros proveedores de IA» (다른 AI 제공업체에서 메모리 가져오기), «Exportar memoria» (메모리 내보내기) ("메모리를 Markdown 파일이 담긴 .zip 파일로 다운로드합니다." (Descarga la memoria en un archivo .zip que contiene archivos Markdown.)) / «Memoria» (메모리) del menú «+» / «Configuración» → «Tiempo y concentración» (시간 및 집중): «Aviso de descanso» (휴식 알림), «Horas de silencio» (방해 금지 시간) (consultado el 2026-10-26)
[^personal]: Ayuda de Anthropic, «Understanding Claude's personalization features». "Any instructions you add here will be applied to all of your conversations with Claude." / "Select "Settings," then "Your Claude" (or "Account" in the older Settings layout)." / "These instructions only apply to chats within that project." https://support.claude.com/en/articles/10185728 (consultado el 2026-10-26)
[^memory]: Ayuda de Anthropic, «Use Claude’s chat search and memory to build on previous context». "Memory is on by default for Free, Pro, and Max plans on the web, Claude Desktop, and Claude Mobile" / "On Team and Enterprise plans, owners control whether memory is available, and it's off for each member until they turn it on." / "Claude saves memory as a set of individual topics as you chat, rather than summarizing conversations after they end." / "Your role, projects, and professional context" / "Claude uses the project's memory alongside your memory from chats outside of projects, but not memory from other projects." https://support.claude.com/en/articles/11817273 (consultado el 2026-10-26)
[^sensitive]: Ayuda de Anthropic, «Use Claude’s chat search and memory to build on previous context». "By default, Claude does not store topics related to personal or sensitive subject matter" / "Turn on Include sensitive topics in memory in Settings > Your Claude" / "This includes government ID numbers, criminal history, financial account numbers, and immigration status." https://support.claude.com/en/articles/11817273 (consultado el 2026-10-26)
[^manage]: Ayuda de Anthropic, «Use Claude’s chat search and memory to build on previous context». "Select any topic to read it, then use the edit icon to change it or select "Delete" to remove it." / "Tell Claude what you'd like it to remember, change, or forget, and the update applies to your next conversation." / "When a conversation is deleted, including under a retention period, memory entries generated from it aren’t removed" / "A small number of Team and Enterprise organizations still use the legacy memory from chats experience." https://support.claude.com/en/articles/11817273 (consultado el 2026-10-26)
[^off]: Ayuda de Anthropic, «Use Claude’s chat search and memory to build on previous context». "navigating to Settings > Your Claude and turning on Memory from chats" / "Reset memory: Permanently deletes all memories including project memories." / "You need to turn memory off before you send the first message." / "Unlike incognito chats, they stay in your chat history." / "Claude won't use what it remembers about you in that chat, and nothing from the chat is saved to memory." https://support.claude.com/en/articles/11817273 (consultado el 2026-10-26)
[^past]: Ayuda de Anthropic, «Use Claude’s chat search and memory to build on previous context». "Searching past chats is available to users on paid plans (Pro, Max, Team, and Enterprise plans) on the web, Claude Desktop, and Claude Mobile apps." / "When Claude searches your previous chats, you will see this reflected in your current chat as a tool call." / "When Claude references previous conversations through search, you'll see citations linking back to the original chats, along with the option to delete specific conversations." / "Individual project conversations (searches are limited to within each specific project)." / "navigate to Settings > Your Claude (or Settings > Memory in the older Settings layout) and switch the toggle next to Search and reference chats off." https://support.claude.com/en/articles/11817273 (consultado el 2026-10-26)
[^import]: Ayuda de Anthropic, «Import and export your memory from Claude». "Memory imports are available for Free, Pro, Max, Team, and Enterprise plans on the web and Claude Desktop." / "I'm moving to another service and need to export my data." / "Paste the exported text from your previous AI provider into the text box and click the "Add to memory" button to submit it." / "Click the "See what Claude learned about you" button to start a new conversation" / "You can customize this prompt to exclude any sensitive information before importing into Claude." / "Claude may not retain imported personal details unrelated to work." / "Important: Memory imports are experimental and still in active development" / "Write out your memories of me verbatim, exactly as they appear in your memory." https://support.claude.com/en/articles/12123587 (consultado el 2026-10-26)
[^wellbeing]: Ayuda de Anthropic, «Set break reminders and quiet hours». "Break reminders and quiet hours are in beta on Free, Pro, and Max plans." / "Go to Settings > Wellbeing (or Settings > Time and focus in the older Settings layout)." / "When you reach the amount you set, Claude shows a reminder. You can stop, snooze it, or dismiss it and keep going." / "Neither is a hard lock, so you can always continue past them." / "They’re separate from your plan’s usage limits." https://support.claude.com/en/articles/15672868 (consultado el 2026-10-26)
[^academy-context]: Claude Academy, curso «Introduction to Claude Cowork», lección «Standing context: Global instructions and projects». "Your global instructions don't need to be complete on day one." / "those are global-instruction candidates." https://academy.claude.com/courses/introduction-to-claude-cowork/giving-cowork-context (consultado el 2026-10-26)
[^academy-memory]: Claude Academy, curso «AI capabilities and limitations», lección «Working Memory». "Then open a brand-new conversation and ask a question that assumes it remembers what you taught it. Watch it start from zero." https://academy.claude.com/courses/ai-capabilities-and-limitations/working-memory (consultado el 2026-10-26)
[^your-claude]: En la ayuda, este menú aparece bajo el nombre de la nueva pantalla de configuración, «Configuración» → «Your Claude» (por ejemplo, la lista de memorias está en «Administrar» (관리), junto a «Your memory»). Puede que lo veas así si tu cuenta ya tiene la nueva pantalla de configuración. Sigue los nombres que veas en tu pantalla.
[^past-where]: La ayuda indica que este interruptor está en «Configuración» → «Your Claude», y en la pantalla antigua en «Configuración» → «Memoria».
[^wellbeing-name]: En la ayuda también aparece con el nombre de la nueva pantalla de configuración, «Wellbeing». Puede variar según la pantalla.
[^quiet-name]: La traducción de la ayuda es «조용한 시간» (horas tranquilas).
