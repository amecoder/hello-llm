# Capítulo 8. Datos personales y gestión de datos: decide para qué se usan tus conversaciones

> **En una línea**: las conversaciones que envías a ChatGPT se guardan en los ordenadores (servidores) de OpenAI y, según tus ajustes, pueden usarse para el entrenamiento que mejora la IA.
> En una sola pantalla, «Ajustes > Gestión de datos» (설정 > 데이터 관리), decides si permites el entrenamiento, los enlaces para compartir, el archivado y el borrado, y la exportación.

Las pantallas corresponden a la versión web de octubre de 2026 (plan Plus). En el plan gratuito o en la aplicación del móvil, los menús pueden estar en un sitio algo distinto.

**Qué no debes escribir** es igual para cualquier IA, y ya lo vimos en el [capítulo 9 de la etapa 1, «Lo que no debes escribir»](../00-common/09-safety.md#lo-que-no-debes-escribir). En este capítulo solo vemos **cómo gestionar en ChatGPT las conversaciones que ya has escrito**.

## Un paseo por la pantalla de gestión de datos

Pulsa tu nombre de cuenta, abajo a la izquierda, abre «Ajustes» (설정) y, en la lista de la izquierda de la pantalla de ajustes, pulsa «Gestión de datos» (데이터 관리), casi al final.[^data-name]

![La pantalla de ajustes con «Gestión de datos» abierta. En la lista de la derecha, de arriba abajo: «Enlaces compartidos» (공유 링크), el interruptor «Permitir usar mis datos para mejorar el modelo» (모델 개선을 위한 데이터 학습 허용), «Ubicación» (위치), «Acceso a la red de Work» (Work 네트워크 액세스), «Restablecer ChatGPT Work» (ChatGPT Work 재설정), «Información compartida con las aplicaciones» (앱과 공유되는 정보), «Chats archivados» (보관된 채팅), «Archivar todos los chats» (모든 채팅 보관하기), «Eliminar todos los chats» (모든 채팅 삭제), «Exportar datos» (데이터 내보내기) y «Configuración de cookies» (쿠키 설정)](../../../guide/11-chatgpt/assets/shot-07-data-controls-marked.png)

Los números rojos de la imagen son los de la tabla de abajo.

| N.º | Elemento | Para qué sirve | En este capítulo |
|---|---|---|---|
| ① | «Enlaces compartidos» (공유 링크), «Gestionar» (관리) | Ver y borrar los enlaces para compartir conversaciones que has creado | Sección 3 |
| ② | «Permitir usar mis datos para mejorar el modelo» | Interruptor que decide si tus chats se usan para entrenar | Sección 2 |
| ③ | «Ubicación», «Activar» (켜기) | Permite usar la ubicación del dispositivo en respuestas como recomendaciones de la zona o el tiempo | Explicación de abajo |
| ④ | «Acceso a la red de Work» y «Restablecer ChatGPT Work» | Ajustes de la función Work | [Capítulo 7](07-projects-plugins.md) |
| ⑤ | «Información compartida con las aplicaciones», «Gestionar» | Gestiona la información que compartes con las aplicaciones (plugins) conectadas | [Capítulo 7](07-projects-plugins.md) |
| ⑥ | «Chats archivados», «Archivar todos los chats» y «Eliminar todos los chats» | Oculta o borra de golpe las conversaciones | Sección 4 |
| ⑦ | «Exportar datos», «Exportar» (내보내기) | Descarga en un archivo todo el historial de tus conversaciones | Sección 5 |
| ⑧ | «Configuración de cookies», «Gestionar» | Ajustes de los pequeños registros (cookies) que los sitios web dejan en tu navegador | — |

**Ubicación**: compartir la ubicación del dispositivo viene desactivado al principio.[^search] Aunque no lo actives, ChatGPT conoce la zona aproximada por la dirección de acceso a internet (la dirección IP). Basta con activarlo solo cuando necesites sí o sí una respuesta a nivel de barrio, como «el tiempo en mi barrio».

<Quiz id="ch108-screen" />

## Evitar que se usen para entrenar

El **entrenamiento del modelo** (model training) es lo que hacen las empresas de IA cuando reúnen las conversaciones de la gente para enseñar a la siguiente IA y hacerla más lista. «Permitir usar mis datos para mejorar el modelo» es el interruptor que decide esto. En inglés, la ayuda lo llama Improve the model for everyone (mejorar el modelo para todos).

### Puede estar activado desde el principio

Si este interruptor está activado o desactivado al principio **puede depender del plan y de la región.** Un lugar de la ayuda de OpenAI dice que, en los planes Free, Plus y Pro de las cuentas personales, viene activado por defecto.[^controls] Otro lugar dice que depende de la región y de los ajustes.[^home]
Por eso no des por hecho que «seguro que está desactivado»: **ábrelo y compruébalo tú mismo.** La imagen de arriba muestra el interruptor desactivado (gris).

### Cómo desactivarlo

1. Abre tu nombre de cuenta → «Ajustes» → «Gestión de datos».
2. Pulsa el interruptor de la derecha de «Permitir usar mis datos para mejorar el modelo» (② de la primera imagen de este capítulo) para que quede gris. Si sale una ventana de confirmación, pulsa «Listo» (완료).

Si lo cambias con la sesión iniciada, se aplica a **todos los dispositivos en los que hayas iniciado sesión con la misma cuenta** (incluida la aplicación del móvil). Si lo cambias sin haber iniciado sesión, se guarda **solo en ese navegador.**[^controls]

### Lo que no cambia aunque lo desactives

Repasemos cuatro ideas equivocadas habituales sobre este interruptor.

- **¿Si lo desactivo, desaparece el historial de conversaciones?** No. El historial sigue en el menú lateral.
- **¿Si lo desactivo, ninguna conversación se usa para entrenar?** No. Si envías un comentario (feedback, una valoración que indica si la respuesta fue buena), como los botones de «me gusta» y «no me gusta» bajo una respuesta, toda esa conversación puede usarse para entrenar.
- **¿Si lo desactivo, tampoco se guarda?** No. Solo deja de usarse para entrenar; la conversación se guarda en el servidor. Si quieres borrarla, usa el borrado de la sección 4.
- **¿Si lo dejo activado, también se usan para entrenar los datos de mis aplicaciones de Google conectadas?** No. La ayuda aclara que los datos que se leen directamente de las aplicaciones de Google conectadas (Gmail, Drive, etc.) no se usan para entrenar aunque el interruptor esté activado. Pero hay excepciones: las conversaciones en las que enviaste comentarios («me gusta» o «no me gusta»), lo que copiaste, pegaste o subiste tú mismo, y lo que se incluyó en la respuesta de ChatGPT.[^google]

> Aparte del permiso de entrenamiento, lo que escribes en las instrucciones personalizadas ([capítulo 5](05-memory.md)) también sigue este interruptor.[^ci] Por eso, con un solo interruptor puedes bloquear las dos cosas.

<Quiz id="ch108-training" />

## Gestionar los enlaces para compartir

Un **enlace para compartir** (share link), que se crea para enseñar una conversación a otra persona, lo puede ver **cualquiera** que tenga la dirección. No se puede bloquear persona por persona y no tiene fecha de caducidad que lo haga desaparecer solo.[^share]
Cómo crear un enlace lo vimos en el [capítulo 3](03-chats.md). Aquí vemos **cómo ordenar los enlaces que creaste hace tiempo.**

1. En «Gestión de datos», pulsa «Gestionar», a la derecha de «Enlaces compartidos».
2. En la lista, borra uno a uno los enlaces que no necesites, o todos de golpe con «Eliminar todos los enlaces compartidos» (모든 공유 링크 삭제).

![La ventana con la lista de «Enlaces compartidos». Cada línea tiene el nombre, el tipo, la fecha en que se compartió y un botón de papelera, y debajo está el botón rojo «Eliminar todos los enlaces compartidos»](../../../guide/11-chatgpt/assets/shot-27-shared-links.png)

*Es una pantalla con los nombres de los enlaces cambiados por ejemplos. Se borran uno a uno con el botón de papelera del final de cada línea.*

Si subiste un enlace una vez a un grupo de chat, no puedes saber hasta dónde se ha difundido. Por eso borrar el enlace es la forma más segura de retirarlo.

<Quiz id="ch108-share" />

## Archivar y borrar todo

Hay dos formas de ordenar las conversaciones, y el resultado es completamente distinto.[^delete]

| | Archivar (Archive) | Borrar (Delete) |
|---|---|---|
| En el menú lateral | Desaparece | Desaparece |
| Contenido de la conversación | **Se conserva.** También sale en la búsqueda de chats | Se programa para borrarse definitivamente de los sistemas de OpenAI en 30 días |
| Deshacerlo | Quitas el archivado en «Chats archivados» | **Imposible.** Ni el servicio de atención al cliente puede recuperarla |

En «Gestión de datos» se puede hacer esto de golpe.

- «Chats archivados» «Gestionar»: ves la lista de conversaciones archivadas y quitas el archivado.
- «Archivar todos los chats» «Archivar todo» (모두 보관하기): vacía el menú lateral de una vez. El contenido se conserva.
- «Eliminar todos los chats» «Eliminar todo» (전체 삭제): borra todas las conversaciones. **No se puede deshacer.** Antes de pulsarlo, haz una copia de seguridad con la exportación de la sección 5.

**Aunque borres los chats, hay cosas que se quedan.**

- Los archivos que subiste a una conversación y que se guardaron aparte en la **biblioteca** ([capítulo 4](04-files-images.md)) se conservan.[^delete] Bórralos aparte desde la biblioteca.
- La **memoria guardada** ([capítulo 5](05-memory.md)) que se generó en esa conversación también se conserva.[^memory] Bórrala aparte desde «Personalización» (개인 맞춤 설정) ([capítulo 5](05-memory.md)).

Si es una conversación de la que no quieres dejar registro desde el principio, el **chat temporal** es más sencillo. Empiézala con el botón «Chat temporal» (임시 채팅) de arriba a la derecha. Así no queda en el historial de conversaciones ni se usa para entrenar el modelo. Eso sí, por seguridad puede conservarse una copia hasta 30 días.[^temp] El modo de uso detallado está en el [capítulo 3](03-chats.md).

<Quiz id="ch108-delete" />

## Exportar datos

**Exportar datos** (export) es la función que te da el historial de conversaciones y la información de la cuenta en un solo archivo comprimido (ZIP, un archivo que reúne varios archivos en uno). Se usa como copia de seguridad antes de borrar todo o de borrar la cuenta.[^export]

1. En «Gestión de datos», pulsa «Exportar», a la derecha de «Exportar datos».
2. En la ventana de confirmación, pulsa «Confirmar exportación» (내보내기 확인).
3. Recibes en el correo con el que te registraste (o por mensaje de texto) un enlace de descarga. Puede tardar **hasta 7 días.**
4. El enlace **caduca 24 horas después de recibirlo.** Cuando llegue el correo, descárgalo enseguida. Si se te pasó, vuelve a solicitarlo.

Se puede usar en cuentas personales Free, Go, Plus y Pro. No se puede usar sin haber iniciado sesión.[^export]

> El archivo descargado contiene **todas tus conversaciones.** No lo descargues en un ordenador compartido ni lo subas a una carpeta de la nube que compartas con otras personas.

**No existe una función para pasar las conversaciones a otra cuenta.** No se pueden unir dos cuentas ni trasladar entera la lista de conversaciones. Lo único que puedes hacer es subir a una conversación de la cuenta nueva el archivo `conversations.json` del archivo comprimido que descargaste y usarlo **como material de consulta.** No aparecen conversaciones antiguas en el menú lateral.[^transfer]

<Quiz id="ch108-export" />

## Borrar la cuenta

Cuando ya no vayas a usar ChatGPT, puedes borrar la cuenta.[^account]

1. Abre «Ajustes» → ① «Cuenta» (계정).
2. Pulsa «Eliminar» (삭제), junto a ② «Eliminar cuenta» (계정 삭제).
3. Cuando salga la ventana de confirmación, lee el aviso y continúa. Si hace más de 10 minutos que iniciaste sesión, tienes que empezar pulsando «Iniciar sesión de nuevo» (다시 로그인).[^screen-account]
4. Siguiendo el aviso, escribe tu dirección de correo y `DELETE`, y pulsa «Eliminar mi cuenta definitivamente» (내 계정을 영구 삭제하기).

![La pantalla «Cuenta» de los ajustes. En el recuadro «General» están el nombre, el nombre de usuario, el correo, el estado de la cuenta y el perfil de creador de GPT, y en un recuadro aparte, más abajo, están «Eliminar cuenta» y el botón rojo «Eliminar»](../../../guide/11-chatgpt/assets/shot-14-account-marked.png)

*Es una pantalla con el nombre, el nombre de usuario y el correo cambiados por ejemplos. No se pulsó «Eliminar».*

![La ventana «Eliminar cuenta: ¿quieres continuar?». Avisa de que el borrado es definitivo, de que no podrás acceder a los servicios de OpenAI, de que no podrás crear una cuenta nueva con el mismo correo y de que los datos se borran en 30 días, y tiene el botón «Iniciar sesión de nuevo» porque solo se puede borrar si iniciaste sesión en los últimos 10 minutos](../../../guide/11-chatgpt/assets/shot-28-account-delete-confirm.png)

*Si pulsas «Eliminar», no se borra enseguida: antes sale esta ventana. **Solo puedes continuar directamente si iniciaste sesión en los últimos 10 minutos.** Si has tenido la ventana abierta mucho tiempo, empieza pulsando «Iniciar sesión de nuevo». En esta pantalla se pulsó «Cancelar».*[^screen-account]

| Después de borrarla | Contenido |
|---|---|
| Datos | Se borran en 30 días (salvo los casos en que la ley obliga a conservarlos) |
| Recuperarla | Es imposible |
| Volver a registrarte | La ayuda dice que puedes volver a registrarte con el mismo correo **30 días después.** La ventana de confirmación dice que no se puede crear una cuenta nueva con el mismo correo[^screen-account] |

**Cancela la suscripción por separado.** Las suscripciones pagadas a través de la App Store del iPhone (Apple) no se cancelan aunque borres la cuenta.[^account] Aunque borres la aplicación del móvil, la suscripción continúa.[^pro] Por eso, antes de borrar la cuenta, cancela primero la suscripción en el sitio donde la pagaste.

<Quiz id="ch108-account" />

## Proteger tu cuenta

Tu cuenta contiene todas tus conversaciones. Por eso es peligroso protegerla solo con una contraseña. En Ajustes → «Seguridad e inicio de sesión» (보안 및 로그인), comprueba los elementos siguientes.[^screen-security]

- «Autenticación multifactor (MFA)» (다중 인증): además de la contraseña, se comprueba otra vez con **un código de un solo uso de una aplicación de autenticación o un código de 6 cifras de un mensaje de texto.** Se recomienda dejarla activada (es una sugerencia de esta guía).
- «Claves de acceso y llaves de seguridad» (패스키 및 보안 키): en lugar de la contraseña, inicias sesión con la huella o el reconocimiento facial del móvil. Es un método resistente al phishing (la técnica de robar contraseñas con sitios falsos).
- «Sesiones activas» (활성 세션): ves todos los dispositivos que han accedido a tu cuenta. Puedes quitar un dispositivo o cerrar la sesión en todos.
- «Conexiones de inicio de sesión» (로그인 연동) → «Iniciar sesión con ChatGPT»: ves otras aplicaciones y sitios en los que iniciaste sesión con tu cuenta de ChatGPT y les cortas el acceso.
- «Modo de bloqueo» (락다운 모드): se explica más abajo.

**Si ves conversaciones o dispositivos que no conoces**, cambia enseguida la contraseña. Al cambiarla, **se cierra la sesión en todos los dispositivos en 30 minutos.** Si has estado iniciando sesión con una cuenta de Google o de Microsoft, tienes que cambiar la contraseña de la cuenta de esa empresa.[^unrecognized] No compartas la cuenta entre varias personas. Si la compartís, es fácil que se detecte como actividad extraña.[^errors]

Cuando pulsas «Iniciar sesión con ChatGPT» en otra aplicación o sitio, ese sitio recibe **solo el nombre, el correo y la foto de perfil.**[^signin] El contenido de las conversaciones no se transmite. Aun así, revisa de vez en cuando en «Conexiones de inicio de sesión» de arriba en qué sitios has iniciado sesión.

El **modo de bloqueo** (Lockdown Mode) es un ajuste que bloquea las funciones de conexión con el exterior. Hace que la búsqueda web use solo contenido guardado de antemano, y bloquea funciones como la investigación profunda. Así reduce el riesgo de que se filtre información por instrucciones maliciosas escondidas en una página web o en un archivo (**inyección de prompt**, prompt injection).[^lockdown]

La ayuda deja claro que esta función no es para todo el mundo. Además, no bloquea las propias instrucciones ocultas. La ayuda explica que es una función para **personas y organizaciones que manejan datos sensibles.** Según el plan y la cuenta, puede que este menú no exista. La opinión de esta guía es que, si no manejas datos sensibles, normalmente no hace falta activarla. Qué son las instrucciones ocultas lo explica el [capítulo 9 de la etapa 1](../00-common/09-safety.md).

<Quiz id="ch108-security" />

## Funciones para la familia y la seguridad

En los ajustes hay los menús «Control parental» (자녀 보호) y «Contacto de confianza» (신뢰할 수 있는 연락처).[^screen-security] No pasa nada por no activar ninguno de los dos para usar ChatGPT. Pero si sabes qué hacen y **qué no hacen**, habrá menos malentendidos.

El **control parental** (parental controls) es una función que enlaza la cuenta de un tutor con la de un adolescente (menor de 18 años). El tutor puede ajustar algunas funciones, fijar el tiempo de uso y, en casos poco habituales, recibir avisos de seguridad.[^parental]

- **El tutor no puede ver las conversaciones de su hijo.** Aunque enlace las cuentas, no tiene acceso al contenido de las conversaciones, al historial ni a lo que está haciendo en ese momento.[^parental]
- Si ChatGPT considera, por señales de uso, que la persona tiene menos de 18 años, la protección para adolescentes puede activarse automáticamente. Si eres adulto y se ha juzgado mal, en los casos en que tu cuenta pueda usar la verificación de edad, puedes quitarla verificándola (varía según la cuenta). La verificación la hace una empresa externa llamada **Persona**. **OpenAI no recibe documento de identidad ni selfi**, y no hace falta que muestres números de documento como el número de registro de residente.[^age]

El **contacto de confianza** (trusted contact) es una función con la que un adulto designa de antemano a una persona. Si hay una conversación que genera una gran preocupación de seguridad por un posible suicidio, esa persona puede recibir un aviso en el que se le pide que compruebe cómo estás. Primero lo detecta un sistema automático y después lo revisa una persona formada.[^trusted]

- Solo se puede usar **en cuentas personales.** No se activa en espacios de empresa o de centros educativos, como Business, Enterprise o Edu.[^trusted]
- **En Corea, tanto tú como la persona que designes como contacto debéis tener 19 años o más** (en otros países, 18 años o más).[^trusted-ko]
- El aviso **no incluye el contenido de la conversación.** La función se activa cuando la persona designada acepta la invitación **en una semana.** También se puede designar a alguien que no tenga cuenta de ChatGPT.[^trusted][^trusted-add]
- **No es un servicio de emergencias.** No funciona en las conversaciones de voz. Si estás en peligro ahora mismo, no esperes a esta función: contacta enseguida con los servicios de emergencia o con una línea de atención en crisis.[^trusted]

Si hablas de lo mal que lo estás pasando, ChatGPT puede indicarte **organismos de atención en crisis** de tu región. Los organismos de cada región los muestra OpenAI junto con una organización especializada en conectar con la atención en crisis (ThroughLine).[^helpline]

<Quiz id="ch108-family" />

## En qué se diferencia una cuenta de empresa

Los planes **Business** (antes llamado Team) y **Enterprise**, contratados en grupo por una empresa, y el plan educativo **Edu**, por defecto no usan el contenido de las conversaciones para entrenar.[^controls]
Si usas una cuenta de empresa, **las normas de uso de IA de tu empresa** van antes que el interruptor de entrenamiento de arriba. Pregunta en el departamento de tu empresa qué puedes escribir.

Al contrario, si haces trabajo de la empresa con una **cuenta personal**, no tienes esta protección. El material de la empresa trátalo solo en las cuentas que la empresa te haya autorizado.

Hay más cosas que conviene saber de las cuentas de empresa.

- **El administrador puede gestionar tus conversaciones.** Según los ajustes, el administrador de la empresa **puede** consultar, exportar, auditar, conservar y borrar los datos de esa cuenta. También puede aceptar compartirlos con OpenAI para mejorar el modelo.[^managed] Piensa que las conversaciones de una cuenta de empresa son registros de la empresa.
- **La cuenta personal y la de empresa son independientes.** Aunque cambies de cuenta, las conversaciones, los archivos y los ajustes no se trasladan.[^managed]
- Puede salir un aviso que te pide **unir tu espacio personal al espacio de la empresa.** Si lo unes, no se puede deshacer. Si dejas la empresa, puede que ya no puedas ver ni siquiera las conversaciones que trasladaste. En el espacio de la empresa tampoco se puede exportar por tu cuenta. Por eso, antes de unirlo, exporta antes tu historial personal.[^migrate]
- Si la empresa desactiva la función de memoria, se borra la memoria guardada que tuvieras en el espacio de esa empresa.[^bizmemory]

<Quiz id="ch108-business" />

## Pruébalo tú

**1. Comprueba tu ajuste de entrenamiento**

Abre «Ajustes» → «Gestión de datos» y mira si «Permitir usar mis datos para mejorar el modelo» está activado. Cámbialo al lado que prefieras y, si tienes la aplicación del móvil, comprueba que en la aplicación también ha cambiado al mismo valor.

**2. Limpieza general de los enlaces compartidos**

Abre «Enlaces compartidos» «Gestionar» y cuenta cuántos enlaces siguen activos. Borra los que ya no necesites enseñar.

**3. Pídele a ChatGPT una lista de comprobación de tus ajustes**

```
Uso ChatGPT con una cuenta personal.
Quiero que mis conversaciones no se usen para entrenar y ordenar los enlaces compartidos antiguos.
Hazme una lista de comprobación (☐) con los elementos que tengo que revisar yo mismo en la pantalla de ajustes.
Si no estás seguro del nombre de un menú, no te lo inventes: escribe "comprobar en la pantalla".
```

Compara los nombres de menú de la lista que te dé con la tabla de este capítulo. Si son distintos, el nombre correcto es el que ves en la pantalla.

**Proyecto continuo** ([Preparar el club de lectura](../00-common/practice-kit.md)): en «Ajustes» → «Gestión de datos», comprueba «Permitir usar mis datos para mejorar el modelo» y la lista de «Enlaces compartidos». Decide cómo dejarías este ajuste si fueras a subir material real del club al proyecto «Club de lectura» (독서 모임).

## Resumen

- En una sola pantalla, «Ajustes > Gestión de datos», decides el permiso de entrenamiento, los enlaces compartidos, el archivado y el borrado, y la exportación.
- «Permitir usar mis datos para mejorar el modelo» puede estar activado al principio según el plan y la región. Ábrelo y compruébalo. Aunque lo desactives, las conversaciones en las que envíes comentarios pueden usarse para entrenar.
- Los enlaces compartidos los puede ver cualquiera y no caducan. Si no los necesitas, bórralos en «Gestionar».
- Archivar es ocultar; borrar es eliminar definitivamente en 30 días y no se puede deshacer. Los archivos de la biblioteca y la memoria guardada se borran aparte.
- El enlace de la exportación se descarga en las 24 horas siguientes a recibirlo. Antes de borrar la cuenta, cancela primero la suscripción.
- En «Seguridad e inicio de sesión», activa la autenticación multifactor y cierra la sesión de los dispositivos que no conozcas. Si cambias la contraseña, se cierra la sesión en todos los dispositivos en 30 minutos.
- Aunque enlaces el control parental, el tutor no ve las conversaciones. El contacto de confianza exige 19 años o más en Corea y no es un servicio de emergencias.
- Las cuentas de empresa (Business, Enterprise, Edu) por defecto no se usan para entrenar, pero van primero las normas de la empresa y el administrador puede gestionar las conversaciones.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Data controls | gestión de datos | Pantalla de ajustes que decide el entrenamiento, la conservación y el borrado de tus conversaciones |
| Model training | entrenamiento del modelo | Enseñar a la siguiente IA con las conversaciones reunidas |
| Share link | enlace para compartir | Dirección para enseñar una conversación a otra persona. Cualquiera que la tenga puede verla |
| Archive | archivar | Ocultar la conversación solo del menú lateral, sin borrarla |
| Export | exportar | Descargar en un archivo todo tu historial |
| ZIP | ZIP | Archivo comprimido que une varios archivos en uno y reduce su tamaño |
| Cookie | cookie | Pequeño registro que un sitio web deja en tu navegador |
| Subscription | suscripción | Plan por el que pagas cada mes |
| MFA (Multi-Factor Authentication) | autenticación multifactor | Inicio de sesión en el que, además de la contraseña, confirmas tu identidad con otro método |
| Passkey | clave de acceso | Forma de iniciar sesión con la huella o el reconocimiento facial del dispositivo en lugar de la contraseña |
| Lockdown Mode | modo de bloqueo | Ajuste que bloquea las funciones de conexión con el exterior para reducir el riesgo de que se filtre información por instrucciones ocultas |
| Prompt Injection | inyección de prompt | Ataque que hace que la IA actúe de forma disparatada con instrucciones escondidas en una página web o en un archivo |
| Parental Controls | control parental | Función que enlaza la cuenta del tutor con la del adolescente para fijar algunas funciones y el tiempo |
| Trusted Contact | contacto de confianza | Persona designada de antemano para recibir un aviso de comprobar cómo estás en una crisis |

<ChapterDone :chapter="108" />

Siguiente capítulo: [Capítulo 9. Conversar por voz](09-voice.md)

---

[^controls]: Ayuda de OpenAI, «Data controls in ChatGPT». En el espacio de trabajo personal, Free, Plus y Pro vienen activados por defecto; al iniciar sesión se aplica a todos los dispositivos; sin sesión iniciada se guarda solo en ese navegador; si envías comentarios, toda la conversación puede usarse para entrenar; Business, Enterprise y Edu por defecto no se usan para entrenar. https://help.openai.com/en/articles/7730893 (consultado el 2026-10-23)
[^home]: Ayuda de OpenAI, «The ChatGPT home page». Si se usa para entrenar o no "depends on your location and settings". https://help.openai.com/en/articles/9125172 (consultado el 2026-10-23)
[^ci]: Ayuda de OpenAI, «ChatGPT Custom Instructions». La información de uso de las instrucciones personalizadas también puede usarse para mejorar el modelo, y se puede rechazar con el ajuste de entrenamiento. https://help.openai.com/en/articles/8096356 (consultado el 2026-10-23)
[^search]: Ayuda de OpenAI, «Searching the web with ChatGPT». "Device location sharing is optional and off by default." Usa la ubicación aproximada por IP. https://help.openai.com/en/articles/9237897 (consultado el 2026-10-23)
[^share]: Ayuda de OpenAI, «Sharing conversations and scheduled tasks in ChatGPT». Cualquiera que tenga el enlace puede verlo, no hay fecha de caducidad, y en «Enlaces compartidos > Gestionar» se puede borrar uno a uno o borrar todos los enlaces compartidos. https://help.openai.com/en/articles/7925741 (consultado el 2026-10-23)
[^delete]: Ayuda de OpenAI, «Deleting and archiving chats in ChatGPT». El borrado se programa para ser definitivo en 30 días y no se puede restaurar; archivar solo lo quita de la barra lateral y sigue saliendo en la búsqueda; eliminar todos los chats no se puede deshacer; borrar chats no borra los archivos de la biblioteca. https://help.openai.com/en/articles/8809935 (consultado el 2026-10-23)
[^memory]: Ayuda de OpenAI, «Memory in ChatGPT». "Deleting the original chat does not automatically delete a separate saved memory." https://help.openai.com/en/articles/8590148 (consultado el 2026-10-23)
[^temp]: Ayuda de OpenAI, «Temporary chat in ChatGPT». No queda en el historial, no se usa para entrenar y puede conservarse hasta 30 días por motivos de seguridad. https://help.openai.com/en/articles/8914046 (consultado el 2026-10-23)
[^export]: Ayuda de OpenAI, «Exporting your ChatGPT history and data». Envío del enlace por correo o SMS, hasta 7 días, "The download link expires 24 hours after you receive it.", archivo ZIP, Free, Go, Plus y Pro, no disponible sin sesión iniciada. https://help.openai.com/en/articles/7260999 (consultado el 2026-10-23)
[^account]: Ayuda de OpenAI, «Deleting your ChatGPT account». Borrado de los datos en 30 días (con excepciones legales), no se puede reactivar, con el mismo correo se puede volver a registrar tras 30 días, "Deleting your account does not cancel an Apple subscription." https://help.openai.com/en/articles/6378407 (consultado el 2026-10-23)
[^google]: Ayuda de OpenAI, «Google app data controls FAQ». "Even if this setting is enabled, we do not train our generalized models on data accessed directly from connected Google apps." https://help.openai.com/en/articles/10408842 (consultado el 2026-10-24)
[^transfer]: Ayuda de OpenAI, «Transfer exported conversations between ChatGPT accounts». "This is not a full account migration." / "Find conversations.json." https://help.openai.com/en/articles/9106926 (consultado el 2026-10-24)
[^screen-security]: Comprobado directamente en la pantalla de ajustes web de ChatGPT (plan Plus, en coreano). En «Seguridad e inicio de sesión» (보안 및 로그인): «Autenticación multifactor (MFA)» (다중 인증(MFA)), «Claves de acceso y llaves de seguridad» (패스키 및 보안 키), «Sesiones activas» (활성 세션), «Conexiones de inicio de sesión — Iniciar sesión con ChatGPT» (로그인 연동 — ChatGPT로 로그인), «Modo de bloqueo» (락다운 모드) y la descripción de la pantalla de cada elemento ("usar un código de un solo uso de una aplicación de autenticación", "recibes un código de verificación de 6 cifras", "quitar los dispositivos de confianza o cerrar la sesión en todos los dispositivos"); en la lista de ajustes, «Control parental» (자녀 보호) y «Contacto de confianza» (신뢰할 수 있는 연락처) (consultado el 2026-10-24)
[^unrecognized]: Ayuda de OpenAI, «I'm seeing unrecognized activity on my OpenAI account.». "Once you change your password, all current sessions will be logged out within 30 minutes." / "If you have logged in with Microsoft or Google authentication, you'll need to reset your Microsoft or Google account password." https://help.openai.com/en/articles/8485685 (consultado el 2026-10-24)
[^errors]: Ayuda de OpenAI, «Troubleshooting ChatGPT Error Messages». "Ensure you are not sharing your ChatGPT account with other people". https://help.openai.com/en/articles/7996703 (consultado el 2026-10-24)
[^signin]: Ayuda de OpenAI, «Sign in with ChatGPT». "the external application receives only your name, email address, and profile picture, if you have one." https://help.openai.com/en/articles/20001410 (consultado el 2026-10-24)
[^lockdown]: Ayuda de OpenAI, «Lockdown Mode». "Web browsing is limited to cached content." / "Deep research is disabled." / "It is designed for people and organizations that handle sensitive data" / "Lockdown Mode is not intended for everyone." / "Lockdown Mode does not prevent prompt injections from appearing in the content ChatGPT processes." https://help.openai.com/en/articles/20001061 (consultado el 2026-10-24)
[^parental]: Ayuda de OpenAI, «Managing parental controls in ChatGPT». "Parental controls let a parent or guardian link their ChatGPT account to a teen’s account, manage selected settings, set schedules, and receive safety notifications in limited situations." / "Linking accounts does not give a parent or guardian access to a teen’s conversations, chat history, or real-time activity." https://help.openai.com/en/articles/12315553 (consultado el 2026-10-24)
[^age]: Ayuda de OpenAI, «Age prediction in ChatGPT». "OpenAI uses Persona, a third-party service, to verify your age." / "OpenAI does not receive your ID or selfie." / "You do not need to show ID numbers, such as a national ID number or Social Security number." https://help.openai.com/en/articles/12652064 (consultado el 2026-10-24)
[^trusted]: Ayuda de OpenAI, «Trusted contacts in ChatGPT». "if automated systems and trained reviewers detect you may be talking about suicide in a way that signals a serious safety concern, ChatGPT may notify your trusted contact" / "Your chat details or transcripts are not shared." / "Trusted contact is not an emergency service, a crisis response system, or a substitute for mental health care." / "Trusted contact is not currently available in ChatGPT Voice." / "It is available for personal ChatGPT accounts, and is not enabled in shared workspaces such as ChatGPT Business, Enterprise, or Edu." https://help.openai.com/en/articles/20001105 (consultado el 2026-10-24)
[^trusted-ko]: Ayuda de OpenAI, «Managing parental controls in ChatGPT». "Trusted Contact is a separate, optional feature for adults 18 or older, or 19 or older in Korea." En la pantalla de ajustes en coreano también aparece «tanto el usuario como la persona designada como contacto deben tener 19 años o más» (사용자 본인과 해당 연락처로 지정된 사람 모두 만 19세 이상이어야 합니다) (consultado el 2026-10-24). https://help.openai.com/en/articles/12315553 (consultado el 2026-10-24)
[^trusted-add]: Ayuda de OpenAI, «Adding and managing a trusted contact». "If the person accepts the invitation within 1 week, the feature becomes active." https://help.openai.com/en/articles/20001194 (consultado el 2026-10-24). Que no haga falta cuenta de ChatGPT consta en «Being someone’s trusted contact»: "You do not need a ChatGPT account to be someone’s trusted contact." https://help.openai.com/en/articles/20001195 (consultado el 2026-10-24)
[^helpline]: Ayuda de OpenAI, «Crisis helpline support in ChatGPT». "As part of our partnership with ThroughLine, we have introduced localized helplines in ChatGPT". https://help.openai.com/en/articles/12677603 (consultado el 2026-10-24)
[^managed]: Ayuda de OpenAI, «Data access for your managed ChatGPT account». "your administrator may be able to access, export, audit, retain, delete, and opt-in to share data tied to this account with OpenAI to improve OpenAI’s models." / "Switching accounts does not move chats, files, or settings between accounts." https://help.openai.com/en/articles/20001067 (consultado el 2026-10-24)
[^migrate]: Ayuda de OpenAI, «Migrating your personal workspace to ChatGPT Business or Enterprise». "Migration does not provide an undo option" / "If you leave, are removed, or lose access to the destination workspace, you may also lose access to that content." / "Self-service data export is not available in ChatGPT Business or Enterprise workspaces." https://help.openai.com/en/articles/8801890 (consultado el 2026-10-24)
[^bizmemory]: Ayuda de OpenAI, «Memory FAQ (Business Version)». "If a workspace owner turns off Memory for the workspace, existing saved memories for members in that workspace are deleted." https://help.openai.com/en/articles/9295112 (consultado el 2026-10-24)
[^pro]: Ayuda de OpenAI, «About ChatGPT Pro tiers». "Uninstalling the ChatGPT app does not cancel your subscription." https://help.openai.com/en/articles/9793128 (consultado el 2026-10-23)
[^data-name]: En la ayuda oficial este menú se llama «Data controls» (en coreano, «데이터 제어»). El nombre real en la pantalla es «데이터 관리» (Gestión de datos).
[^screen-account]: Comprobado directamente en la ventana de confirmación que sale al pulsar «Ajustes» → «Cuenta» → «Eliminar» (삭제). "Solo puedes eliminar la cuenta si has iniciado sesión en los últimos 10 minutos." En esta ventana pone "No se puede crear una cuenta nueva con la misma dirección de correo.", lo cual es distinto de la ayuda, que dice que se puede volver a registrar tras 30 días. Si piensas volver a registrarte, comprueba otra vez la ayuda antes de borrar (consultado el 2026-10-28, pantalla web de una cuenta Plus)
