# Capítulo 9. Privacidad y seguridad: qué se guarda, quién lo ve y cómo borrarlo

> **En una línea**: si «Guardar actividad» (활동 기록 보관) está activado, las conversaciones de Gemini se quedan **18 meses en tu cuenta**, y algunas **las lee una persona y también se usan para entrenar la IA.**
> Las conversaciones que no quieres que queden hazlas en un **chat temporal**, y la información confidencial no la escribas desde el principio. El historial se desactiva y se borra en «Configuración» → «Actividad».

Las pantallas son de la versión web de octubre de 2026. Este capítulo se refiere a una cuenta personal de Google. Las cuentas de empresa o de centro educativo tienen otras reglas (último apartado).

## Qué se guarda

Si usas Gemini con la sesión iniciada, Google recoge esta información.[^hub]

- **Lo que he dicho**: las preguntas que escribo o digo en voz alta y las tareas que encargo
- **Lo que he mostrado**: los archivos, fotos y vídeos que subo, la pantalla sobre la que pregunto, las conversaciones que importo y el contenido de las páginas que envío desde el navegador
- **Información de las aplicaciones conectadas**: aplicaciones conectadas como Gmail, el historial de búsquedas y de YouTube, la dirección de las páginas que veía en Chrome ([capítulo 7](07-skills-apps.md#aplicaciones-conectadas-gmail-drive-y-calendar-desde-gemini))
- **Otras cosas**: grabaciones de las conversaciones de voz (Live), comentarios, datos de ubicación, etc.

**La ubicación se recoge siempre.** Es para dar una respuesta adecuada a la pregunta. Eso sí, la **ubicación exacta** que permites desde el dispositivo no se guarda en el registro «Actividad en las aplicaciones de Gemini».[^hub]

Google afirma que **no usa el contenido de los chats para mostrarte anuncios**. Dice que, si eso cambia, lo comunicará con claridad.[^hub]

<Quiz id="ch309-saved" />

## ¿Lo lee una persona? ¿Se usa para entrenar la IA?

**Algunas conversaciones las lee una persona.** Los revisores humanos (incluido el personal de empresas externas con contrato con Google) evalúan si las respuestas de Gemini son inexactas o dañinas y proponen respuestas mejores.[^hub]
Antes de enviarse a los revisores, las conversaciones se separan de mi cuenta. Aun así, Google avisa de lo siguiente.[^hub]

> **No escribas información confidencial** que no quieras que vea un revisor o que se use para mejorar los servicios.

**También se usan para entrenar.** Si «Guardar actividad» está activado, mi actividad se usa para **mejorar los servicios, incluido el entrenamiento de modelos de IA generativa**, y en ese proceso participan revisores humanos.[^hub]
Lo que indica la ayuda para que tus conversaciones futuras no se revisen para mejorar el servicio es **desactivar «Guardar actividad»**.[^hub]

Eso sí, aunque desactives el historial o uses un chat temporal, las conversaciones se siguen usando para **dar la respuesta y proteger al usuario y a Google**. En ese caso también pueden participar revisores humanos.[^hub]

| | «Guardar actividad» activado | Desactivado o chat temporal |
|---|---|---|
| En mi lista de actividad | Queda | No queda |
| Guardado en la cuenta | 18 meses por defecto | 72 horas |
| Entrenamiento de la IA | Se usa | No se usa |
| Revisión humana con fines de protección | Sí | Sí |

Fuente: ayuda de Google[^hub][^activity]

**Las grabaciones, el vídeo y la pantalla compartida de las conversaciones de voz (Live) no se usan por defecto para mejorar el servicio.** Solo se usan si yo lo activo.[^hub]

**Si envías un comentario (me gusta o no me gusta)**, aunque tengas el historial desactivado, ese comentario y la conversación relacionada se usan para mejorar el servicio.[^hub] En las conversaciones delicadas es mejor no dejar comentarios.

<Quiz id="ch309-review" />

## Activar y desactivar «Guardar actividad»

«Guardar actividad» (Keep Activity) es el ajuste que deja tus conversaciones de Gemini guardadas en tu cuenta. **Si tienes 18 años o más, viene activado desde el principio.**[^activity]

### Cómo desactivarlo

1. Pulsa «Configuración» → «Actividad» abajo a la izquierda. En una pestaña nueva se abre «Actividad en las aplicaciones de Gemini» ([capítulo 2](02-screen-tour.md#pantalla-de-ajustes-cuenta-preferencias-y-privacidad)).[^report]
2. Arriba, pulsa «Activado» (사용) junto a «Guardar actividad».[^report]
3. Elige **«Desactivar»** (사용 중지; solo desactivar de ahora en adelante) o **«Desactivar y borrar actividad»** (사용 중지 및 활동 삭제; desactivar y borrar también el historial anterior).[^activity]

### Qué cambia al desactivarlo

Si lo desactivas, las conversaciones no quedan en la lista de actividad. A cambio, hay muchas funciones que dejas de poder usar.

| Función | Si lo desactivas | Capítulo donde se trató |
|---|---|---|
| Buscar, fijar y renombrar conversaciones anteriores | No funciona | [capítulo 3](03-chats.md#buscar-conversaciones-anteriores) |
| Memoria (recordar conversaciones anteriores) | No funciona | [capítulo 5](05-memory.md) |
| Skills y la mayoría de las aplicaciones conectadas | No funciona | [capítulo 7](07-skills-apps.md) |
| Tareas y calendario | No funciona | [capítulo 8](08-tasks.md) |

Fuente: notas al pie de ayuda de Google de cada capítulo

Por eso puedes elegir así.

- **Si te importa la comodidad**, déjalo activado y haz solo las conversaciones delicadas en un **chat temporal** ([capítulo 2](02-screen-tour.md#chat-temporal-una-conversacion-que-no-deja-registro)).
- **Si no quieres ni que se use para entrenar**, desactívalo y renuncia a las funciones de arriba.

Sea cual sea la opción, lo más seguro es **no escribir información confidencial desde el principio** ([capítulo 9 de la etapa 1](../00-common/09-safety.md#lo-que-no-debes-escribir)).

<Quiz id="ch309-activity" />

## Borrar y descargar el historial

### Borrar

Se borra en la página «Actividad en las aplicaciones de Gemini» (`myactivity.google.com/product/gemini`).[^activity]

- Encima del historial, pulsa **«Eliminar»** (삭제) y elige entre **«Desde siempre» (전체 기간), «Última hora» (지난 1시간), «Último día» (지난 1일) y «Intervalo personalizado» (사용자설정 범위)**.[^activity]
- También puedes borrar solo un día o un elemento con el botón de eliminar que hay junto a la fecha o junto al elemento.[^activity]

También puedes fijar el **borrado automático**. Por defecto se borra pasados **18 meses**. En la pantalla de esta guía también se veía «Eliminar la actividad de más de 18 meses» (18개월이 지난 활동 삭제). Se puede cambiar a 3 meses, 36 meses o «No eliminar automáticamente» (자동 삭제 안함).[^activity][^report]

Algunas cosas se quedan aunque borres.

- **Las conversaciones que ya ha revisado una persona no se borran y se conservan hasta 3 años.**[^hub]
- **Aunque borres una conversación compartida, el enlace público no se borra.** El enlace bórralo aparte ([capítulo 3](03-chats.md#eliminar-un-enlace-compartido)).[^activity]
- Aunque desconectes una aplicación conectada, el historial de actividad de Gemini no se borra.[^hub]

### Descargar

Puedes guardarte tu historial de Gemini en un archivo. En **Google Takeout** (`takeout.google.com`), inicia sesión con la cuenta que usas en Gemini, pulsa «Deseleccionar todo» (모두 선택 해제) y elige solo el apartado de Gemini.[^download]

- El enlace de descarga que recibes por correo está activo **durante 7 días**.[^download]
- **Aunque lo descargues, el historial de los servidores de Google no se borra.** Para borrarlo, hazlo aparte como se ha explicado arriba.[^download]

<Quiz id="ch309-delete" />

## Lo que no se debe hacer y en lo que no se debe confiar

### Normas de uso

Google ha fijado lo que no se puede crear con Gemini. Por ejemplo, material de abuso sexual infantil, imágenes sexuales de personas reales, spam y fraude, actividades peligrosas o ilegales, odio y acoso, y contenidos falsos que engañan a las personas.[^guidelines]
Si se incumplen, puede haber desde advertencias hasta limitación de algunas funciones, **suspensión del uso de Gemini y suspensión del uso de otros servicios de Google**.[^guidelines]

### No creer la respuesta tal cual

Gemini no es una persona. No puede pensar por sí mismo ni sentir emociones; simplemente es excelente encontrando patrones.[^genai]
Por eso **puede decir como si fuera un hecho algo que es falso** (alucinación).[^hub] **No dependas de Gemini para diagnósticos, tratamientos, consejos médicos ni ayuda profesional, como la jurídica o la financiera.** La respuesta es solo información de referencia.[^hub]
Los hábitos de comprobación están resumidos en el [capítulo 9 de la etapa 1](../00-common/09-safety.md#cuatro-habitos-para-comprobar).

### Niños y cuentas de empresa

- Los hijos **menores de 13 años** (varía según el país) solo pueden usar Gemini si los padres lo autorizan en **Family Link** (la aplicación de gestión familiar).[^child]
- **Las cuentas de empresa o de centro educativo** tienen otras reglas. Según el nivel de Google Workspace que use la empresa, hay casos en los que ninguna persona revisa las conversaciones ni los archivos subidos y tampoco se usan para entrenar la IA. «Guardar actividad» solo lo puede desactivar el administrador.[^work] Si es una cuenta de empresa, comprueba primero las normas de la empresa sobre el uso de la IA.

<Quiz id="ch309-rules" />

## Pruébalo tú mismo

1. Abre «Configuración» → «Actividad» y comprueba si «Guardar actividad» está activado y a cuántos meses está el borrado automático.
2. Elige un periodo de borrado automático que te convenga (por ejemplo, 3 meses).
3. Con «Eliminar» → «Última hora», borra la conversación de práctica que acabas de tener.
4. Como aprendiste en el [capítulo 3](03-chats.md#eliminar-un-enlace-compartido), comprueba que no quede ningún enlace en «Mis enlaces públicos» (내 공개 링크).

**Proyecto continuo** ([Preparar un club de lectura](../00-common/practice-kit.md)): un archivo con datos personales de otras personas, como la lista de miembros que usas en el ejercicio, trátalo solo en un chat temporal o súbelo después de cambiar los nombres por «miembro1», etc. Cuando termines el ejercicio, borra las conversaciones relacionadas.

## Resumen

- Si lo usas con la sesión iniciada, se guardan las preguntas, los archivos subidos, la información de las aplicaciones conectadas, la ubicación, etc. Los chats no se usan para mostrar anuncios.
- Algunas conversaciones las lee una persona. Si «Guardar actividad» está activado, también se usan para entrenar la IA. No escribas información confidencial.
- «Guardar actividad» viene activado por defecto a partir de los 18 años. Si lo desactivas, solo se guarda 72 horas y no se usa para entrenar, pero dejas de poder usar varias funciones, como la memoria, las skills y las tareas.
- En «Actividad en las aplicaciones de Gemini» eliges un periodo para borrar y cambias el borrado automático (por defecto, 18 meses). Las conversaciones revisadas por una persona se conservan hasta 3 años.
- Con Takeout puedes descargar el historial. Aunque lo descargues, el historial del servidor sigue igual.
- Las respuestas pueden ser erróneas. Los juicios médicos, jurídicos y financieros déjalos en manos de profesionales.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Keep Activity | Guardar actividad | Ajuste que deja tus conversaciones de Gemini guardadas en tu cuenta |
| Gemini Apps Activity | Actividad en las aplicaciones de Gemini | Página donde ves y borras el historial de tus conversaciones |
| Auto-delete | Borrado automático | Ajuste que borra solo el historial cuando pasa el periodo elegido |
| Human reviewer | Revisor humano | Persona que lee parte de las conversaciones para mejorar el servicio |
| Google Takeout | Google Takeout | Sitio donde descargas tus datos de los servicios de Google |
| Family Link | Family Link | Aplicación con la que los padres gestionan la cuenta de Google de sus hijos |

<ChapterDone :chapter="309" />

Siguiente capítulo: [Capítulo 10. Voz y móvil](10-voice-mobile.md)

[^report]: Comprobado en la pantalla web de Gemini (Google AI Pro, en coreano). Al pulsar «Configuración» → «Actividad», se abre en una pestaña nueva «Actividad en las aplicaciones de Gemini» en myactivity.google.com, con el nombre del ajuste «Guardar actividad» (활동 기록 보관), el indicador de estado «Activado» (사용), la explicación "이 설정이 사용 중지되어 있어도 Google은 사용자에게 대답하고 Gemini를 안전하게 유지하기 위해 72시간 동안 채팅을 저장합니다." (Aunque este ajuste esté desactivado, Google guarda los chats durante 72 horas para responderte y mantener Gemini seguro.) y el botón de borrado automático «Eliminar la actividad de más de 18 meses» (18개월이 지난 활동 삭제). (consultado el 2026-10-30, apartado «Comprobado directamente en la pantalla» de `docs/reports/2026-10-30_Gemini-공식-자료.md`. No se hizo captura porque esa página muestra el historial real de conversaciones)
[^hub]: Ayuda de Google, «Gemini Apps Privacy Hub» (versión en coreano: «Gemini 앱 개인 정보 보호 허브»). "What you say to Gemini Apps (like the prompts you submit or speak, and tasks you ask Gemini to do for you)" / "What you share with Gemini Apps (like files, videos, screens you ask about, photos, imported chats, and page content you share from your browser)" / "Information from your Connected Apps (including third-party services such as Model Context Protocol server tools) and other Google services you use with Gemini Apps (such as your Search or YouTube history, or your page context and URL from Chrome)" / "Your saved activity also includes audio, Gemini Live videos and screenshares, feedback, info from websites you visit with Gemini, product usage, and location info" / "Location data is always collected if you use Gemini Apps so that they can provide you with a response that is relevant to your query." / "Precise location that is processed with your permission from your device or browser is not stored in your Gemini Apps Activity." / "Your Gemini Apps chats are not being used to show you ads. If this changes, we will clearly communicate it to you." / "Reviewers assess if Gemini Apps’ responses were low-quality, inaccurate, or harmful. They also suggest better responses." / "Chats are disconnected from your account before being sent to service providers." / "Please don’t enter confidential information that you wouldn’t want a reviewer to see or Google to use to improve our services, including machine-learning technologies." / "Google uses your activity to provide, develop, and improve its services (including training generative AI models), as well as to protect Google, its users, and the public with the help of human reviewers." / "To stop your future chats from being reviewed to improve Google services, turn off your Keep Activity setting." / "Even if your Keep Activity setting is off or you use temporary chats, Google still uses your chats to respond to you and help protect Google, our users, and the public, including with help from human reviewers." / "You can change your auto-delete setting in Gemini Apps Activity from the default of 18 months to 3 months, 36 months, or indefinite." / "Temporary chats and chats you have when Keep Activity is off are retained with your account for 72 hours and used to:" / "Temporary chats are not used to train Google’s AI models." / "If Keep Activity is off and you choose to submit feedback, Google collects and uses the following data to help maintain and improve Gemini Apps:" / "Your Gemini Live audio, video and screenshares are not used to improve Google services by default." / "Chats reviewed by human reviewers (and related data like your language, device type, location info, or feedback) are not deleted when you delete your activity. Instead, they are retained for up to three years." / "Disconnecting an app or deleting data in a connected app doesn’t delete any data from Gemini Apps Activity." / "LLM experiences (Gemini Apps included) can hallucinate and present inaccurate information as factual." / "Don’t rely on Gemini Apps for diagnosis, treatment, medical advice, or legal, financial, or other professional help. Its output is for informational purposes only." https://support.google.com/gemini/answer/13594961 (consultado el 2026-10-31)
[^activity]: Ayuda de Google, «Manage & delete your activity in Gemini Apps» (versión en coreano: «Gemini 앱에서 활동 관리 및 삭제하기»). "If you’re 18 or over, Keep Activity is on by default." / "Even when Keep Activity is off, your conversations will be saved with your account for up to 72 hours to allow Google to provide the service and process any feedback." / "Near the top, click On  Turn off or Turn off and delete activity." / "You can also go to myactivity.google.com/product/gemini." / "All your Gemini Apps activity: Above your activity, click Delete   All time." / "The last hour or day: Above your activity, click Delete   Last hour or Last day." / "A specific time period: Above your activity, click Delete   Custom range." / "If a shared chat is deleted, it doesn’t delete the related public link." / "Choose how long your Gemini Apps activity is kept (3, 18, or 36 months) or select Don’t auto-delete activity." Nombres en la versión en coreano: «사용 중지» (Desactivar), «사용 중지 및 활동 삭제» (Desactivar y borrar actividad), «삭제» (Eliminar), «전체 기간» (Desde siempre), «지난 1시간» (Última hora), «지난 1일» (Último día), «사용자설정 범위» (Intervalo personalizado), «자동 삭제 안함» (No eliminar automáticamente). https://support.google.com/gemini/answer/13278892 (consultado el 2026-10-31)
[^download]: Ayuda de Google, «Download your Gemini Apps data» (versión en coreano: «Gemini 앱 데이터 다운로드하기»). "Important: If you download your Gemini Apps activity, it doesn’t delete it from Google’s servers." / "Make sure to sign in to the same Google Account that you use for Gemini Apps." / "Under "Select data to include," select Deselect all." / "Send download link via email: We'll email you a link to download your Google data archive. This link is active for 7 days." Nombre en la versión en coreano: «모두 선택 해제» (Deseleccionar todo). https://support.google.com/gemini/answer/16920332 (consultado el 2026-10-31)
[^guidelines]: Ayuda de Google, «Google's Gemini Apps User Guidelines: Keeping Google AI Safe and Helpful» (versión en coreano: «Google의 Gemini 앱 사용자 가이드라인: Google AI를 안전하고 유용하게 사용하기»). Títulos de los apartados prohibidos: "Child Sexual Abuse & Exploitation" / "Non-Consensual Intimate Imagery" / "Spam and Deceptive Practices" / "Dangerous or Unlawful Activities" / "Hate and Harassment" / "Misleading Content" / "Do not use Gemini Apps to generate or distribute sexual or intimate content of real people." / "Violating our policies can result in different penalties, including warnings, loss of access to certain capabilities, loss of your ability to use Gemini Apps, or loss of your ability to use other Google products and services." https://support.google.com/gemini/answer/18481641 (consultado el 2026-10-31)
[^genai]: Ayuda de Google, «Learn about generative AI» (versión en coreano: «생성형 AI에 대해 자세히 알아보기»). "Generative AI is not a human being. It can’t think for itself or feel emotions. It’s just great at finding patterns." https://support.google.com/gemini/answer/13954172 (consultado el 2026-10-31)
[^child]: Ayuda de Google, «Guide your child's Gemini Apps experience» (versión en coreano: «자녀의 Gemini 앱 사용 관리하기»). "A parent must enable access before their child under 13 (or the applicable age in your country) can use Gemini Apps with a supervised account." https://support.google.com/gemini/answer/16109150 (consultado el 2026-10-31)
[^work]: Ayuda de Google, «Use Gemini Apps with a work or school Google Account» (versión en coreano: «직장 또는 학교 Google 계정으로 Gemini 앱 사용하기»). "Your chats and uploaded files in Gemini Apps won’t be reviewed by human reviewers or otherwise used to improve generative AI models." (explicación de los niveles de Workspace que se ofrecen como servicio principal) / "Keep Activity is on by default and can only be turned off by your account’s Workspace administrator." https://support.google.com/gemini/answer/14620100 (consultado el 2026-10-31)
