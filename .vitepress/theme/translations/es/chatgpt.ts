// es text for chatgpt (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const CHATGPT: Record<string, QuestionText> = {
  "ch101-logged-out": {
    prompt: "¿Qué afirmación es correcta cuando usas ChatGPT sin iniciar sesión?",
    choices: [
      "En Corea no puedes hacer ninguna pregunta si no inicias sesión en tu cuenta",
      "Solo puedes tener una conversación a la vez y no se guarda el historial",
      "El historial se guarda, pero no puedes verlo desde otros dispositivos",
      "El historial de conversaciones se guarda durante 30 días",
    ],
    explain: "Antes de iniciar sesión solo puedes mantener una conversación a la vez, y al cerrar la ventana no queda ningún historial.",
  },
  "ch101-login": {
    prompt: "Te registraste con Apple y elegiste una dirección falsa con «Ocultar mi correo». ¿Qué debes tener en cuenta más adelante?",
    choices: [
      "Si inicias sesión con tu correo real, se puede abrir otra cuenta nueva",
      "Ya no podrás volver a iniciar sesión con tu cuenta de Apple en ningún dispositivo",
      "Pasados 30 días, la cuenta se borra sola",
      "Se unirá automáticamente con tu cuenta de Google",
    ],
    explain: "Si te registraste con la dirección oculta, solo puedes entrar en la cuenta original con ese mismo Apple ID. Si inicias sesión con tu correo real, se abre una cuenta distinta.",
  },
  "ch101-plans": {
    prompt: "¿Qué dice la información oficial sobre los anuncios en ChatGPT?",
    choices: [
      "En todos los planes aparecen anuncios encima de las respuestas",
      "Los anunciantes pueden leer mis conversaciones",
      "Los anuncios no influyen en el contenido de la respuesta",
      "En el chat temporal aparecen aún más anuncios",
    ],
    explain: "Los anuncios solo pueden aparecer en Free y Go, no influyen en la respuesta y los anunciantes no ven tus conversaciones. En el chat temporal no hay anuncios.",
  },
  "ch101-subscribe": {
    prompt: "Quieres dejar de usar el plan Plus y borras la aplicación de ChatGPT del móvil. ¿Qué pasa?",
    choices: [
      "En cuanto borras la aplicación, la suscripción se cancela sola",
      "El mes siguiente pasas solo al plan gratuito",
      "La cuenta también se elimina",
      "La suscripción sigue activa, así que tienes que cancelarla tú",
    ],
    explain: "Aunque borres la aplicación, la suscripción continúa. Para dejar de pagar tienes que cancelarla tú.",
  },
  "ch101-apps": {
    prompt: "¿Qué afirmación es correcta sobre las aplicaciones de móvil y de ordenador?",
    choices: [
      "Tienes que crear una cuenta nueva en cada aplicación",
      "En las aplicaciones inicias sesión con la misma cuenta que usas en la web",
      "En la aplicación de móvil no hay forma de elegir Work",
      "Cualquier aplicación que tenga ChatGPT en el nombre es una aplicación oficial de OpenAI",
    ],
    explain: "No hace falta crear una cuenta nueva en cada aplicación: inicias sesión con la misma. En el móvil eliges Chat o Work en el menú desplegable de arriba. Al descargar una aplicación, comprueba el nombre del desarrollador (en App Store «OpenAI OpCo, LLC» y en Google Play «OpenAI»).",
  },
  "ch101-trouble": {
    prompt: "La respuesta de ChatGPT se detuvo y cada vez aparece el puzle de «comprueba que eres una persona». ¿Qué es lo primero que conviene probar?",
    choices: [
      "Borrar y reinstalar la aplicación para reiniciar el límite de uso",
      "Crear otra cuenta y pasarte a ella",
      "Mirar el estado del servicio y desactivar la VPN un momento",
      "Volver a enviar la misma pregunta cada segundo",
    ],
    explain: "Primero mira en status.openai.com si hay una incidencia. Si el puzle aparece siempre, sospecha de la VPN o de las extensiones. Reinstalar la aplicación no reinicia el límite de uso.",
  },
  "ch102-layout": {
    prompt: "Después de iniciar sesión, ¿dónde está el botón para cambiar entre «Chat» y «Work» en la pantalla inicial?",
    choices: [
      "En la parte de arriba, justo en el centro",
      "Abajo a la izquierda, junto al nombre de la cuenta",
      "Dentro del menú + del cuadro de entrada",
      "En el menú «General» de los ajustes",
    ],
    explain: "«Chat» y «Work» están en la parte superior central de la pantalla. Abajo a la izquierda está el menú de la cuenta, y a la izquierda del cuadro de entrada, el botón +.",
  },
  "ch102-sidebar": {
    prompt: "En el menú lateral, ¿qué son los «Hilos fijados»?",
    choices: [
      "Una sala de chat de grupo para usar junto con otras personas de tu equipo",
      "Una papelera donde se guardan un tiempo antes de borrar",
      "Una lista de las conversaciones que abres a menudo, fijadas arriba",
      "Una colección de las últimas noticias de internet",
    ],
    explain: "Un hilo es una conversación. Los «Hilos fijados» son la lista de las conversaciones que has fijado.",
  },
  "ch102-chat-work": {
    prompt: "¿Qué frase describe bien la diferencia entre Chat y Work?",
    choices: [
      "Chat es solo de pago y Work lo puede usar cualquiera, incluso sin iniciar sesión",
      "Work es un modo al que encargas un trabajo largo y recibes algo terminado",
      "Chat conversa solo en inglés y Work solo en coreano",
      "Solo cambia el nombre; hacen lo mismo",
    ],
    explain: "Chat es para preguntar y responder. Work es un modo en el que encargas una tarea larga y recibes un resultado, como un documento o una tabla. En la web y el móvil, Work está disponible en los planes de pago (excepto Free y Go).",
  },
  "ch102-plus": {
    prompt: "¿Qué pasa si pegas en el cuadro de entrada un texto de más de 10.000 caracteres?",
    choices: [
      "Lo que pasa de 10.000 caracteres se corta y desaparece",
      "No se puede pulsar el botón de enviar",
      "Se divide solo en varias conversaciones",
      "Se convierte automáticamente en un archivo adjunto",
    ],
    explain: "Un texto pegado de más de 10.000 caracteres se convierte solo en un archivo adjunto. Con «Show in text field» puedes devolverlo al cuadro de texto.",
  },
  "ch102-reasoning": {
    prompt: "Con el plan Plus, tienes el «Nivel de razonamiento» en Inmediato y escribes “piensa más a fondo”. ¿Qué pasa?",
    choices: [
      "El nivel sigue igual, así que mueves el control deslizante tú",
      "Entiende lo que pides y sube solo al nivel más alto sin que tengas que tocar nada",
      "A partir de la siguiente conversación pasa a Medium",
      "Se activa en su lugar «Pensar» del plan gratuito",
    ],
    explain: "Aunque lo pidas con palabras, el nivel no cambia solo. Si necesitas una respuesta más profunda, mueve tú el control deslizante de «Nivel de razonamiento».",
  },
  "ch102-settings": {
    prompt: "Los ajustes como permitir el entrenamiento, los enlaces compartidos o exportar datos están reunidos en un menú. ¿Cómo se llama realmente en la pantalla?",
    choices: [
      "«General»",
      "«Seguridad e inicio de sesión»",
      "«Gestión de datos»",
      "«Almacenamiento»",
    ],
    explain: "En la ayuda aparece en algún sitio «Controles de datos», pero el nombre real en la pantalla es «Gestión de datos».",
  },
  "ch103-new": {
    prompt: "Una conversación se ha hecho demasiado larga y quieres pasarla a un chat nuevo. ¿Cuál es la mejor forma?",
    choices: [
      "Abrir un chat nuevo y volver a explicarlo todo desde cero",
      "Pedir una nota de traspaso y pegarla en el chat nuevo",
      "Borrar la conversación anterior para que el chat nuevo herede su contenido",
      "Escribir “empieza de nuevo” en la misma conversación",
    ],
    explain: "Si pides una nota de traspaso con lo decidido, tus preferencias y lo que queda por hacer, y la pegas en un chat nuevo, puedes seguir trabajando donde lo dejaste.",
  },
  "ch103-search": {
    prompt: "¿Qué puedes hacer con la lupa («Buscar») del menú lateral?",
    choices: [
      "Buscar las últimas noticias en internet",
      "Encontrar y recuperar conversaciones borradas",
      "Buscar conversaciones compartidas por otras personas en toda la plataforma",
      "Buscar dentro de mis conversaciones, proyectos y archivos",
    ],
    explain: "La búsqueda de chats solo busca entre tus cosas, no en internet. Las conversaciones borradas no aparecen; las archivadas, sí.",
  },
  "ch103-archive-delete": {
    prompt: "¿Cuál es la diferencia entre «archivar» y «eliminar» una conversación?",
    choices: [
      "Archivar se puede deshacer, pero eliminar ya no se puede",
      "Ambas se pueden recuperar durante 30 días",
      "Las conversaciones eliminadas se quedan 30 días en «Chats archivados»",
      "Al archivar, también se borran los archivos de la biblioteca de esa conversación",
    ],
    explain: "Archivar solo la aparta del menú lateral: sigue saliendo en la búsqueda y la devuelves con «Desarchivar». Eliminar no se puede deshacer y programa el borrado definitivo en un plazo de 30 días.",
  },
  "ch103-share": {
    prompt: "Creaste un enlace para compartir y después seguiste con la conversación. ¿Qué ve la persona que recibe el enlace?",
    choices: [
      "Toda la conversación hasta ahora, automáticamente",
      "El enlace caduca y no ve nada",
      "Solo lo que había hasta el momento en que creaste el enlace",
      "Solo las personas que yo autorice ven el contenido nuevo que añado después",
    ],
    explain: "Un enlace compartido es una instantánea del momento en que lo creaste. Para mostrar lo nuevo hay que pulsar «Actualizar enlace». El enlace no tiene fecha de caducidad.",
  },
  "ch103-temporary": {
    prompt: "¿Qué afirmación sobre el chat temporal es correcta?",
    choices: [
      "No queda en ningún sitio, así que es seguro escribir contraseñas",
      "No aparece en la lista, pero puede conservarse una copia hasta 30 días",
      "Guarda muchos más recuerdos nuevos en la memoria que de costumbre",
      "Los archivos subidos en un chat temporal se reúnen aparte en la biblioteca",
    ],
    explain: "El chat temporal queda fuera del historial y del entrenamiento y no crea memoria nueva, pero por motivos de seguridad se puede guardar una copia hasta 30 días. Los archivos que subes tampoco se guardan en la biblioteca.",
  },
  "ch103-locked": {
    prompt: "Olvidaste el PIN de la cuenta con el que abres las conversaciones bloqueadas y lo restableces. ¿Qué pasa?",
    choices: [
      "Las conversaciones bloqueadas se desbloquean y vuelven a la lista",
      "Si lo pides al servicio de atención al cliente, te recuperan las conversaciones bloqueadas",
      "Con el PIN nuevo puedes abrir las conversaciones bloqueadas anteriores",
      "Las conversaciones bloqueadas y sus archivos se eliminan para siempre",
    ],
    explain: "Al restablecer el PIN, las conversaciones bloqueadas y los archivos que contienen se eliminan definitivamente, y ni el servicio de atención puede recuperarlos.",
  },
  "ch104-upload": {
    prompt: "¿Cómo le muestras a ChatGPT un documento de Google (.gdoc)?",
    choices: [
      "Lo descargas como PDF o Word y lo subes",
      "Subes el archivo .gdoc tal cual",
      "Escribes solo la dirección del documento en el cuadro y lo lee",
      "Solo se pueden subir .gdoc con un plan de pago",
    ],
    explain: "Un archivo .gdoc no se puede subir directamente. Descárgalo como PDF o Word y luego súbelo.",
  },
  "ch104-limits": {
    prompt: "¿Qué límite de subida de archivos para el plan gratuito (Free) figura en la ayuda oficial?",
    choices: [
      "Hasta 10 al mes",
      "Hasta 1 cada 3 horas",
      "Hasta 3 al día",
      "Sin límite",
    ],
    explain: "El plan gratuito permite subir hasta 3 archivos al día. Los archivos de audio solo se pueden subir con un plan de pago.",
  },
  "ch104-library": {
    prompt: "Eliminaste una conversación en la que habías subido un archivo. ¿Qué pasa con ese archivo guardado en la biblioteca?",
    choices: [
      "Se borra de inmediato junto con la conversación",
      "Sigue guardado en la biblioteca",
      "A los 30 días se borra solo junto con la conversación",
      "Pasa a «Chats archivados»",
    ],
    explain: "Aunque borres la conversación, el archivo guardado en la biblioteca se queda. Los archivos se borran aparte, desde la biblioteca.",
  },
  "ch104-image": {
    prompt: "Quieres cambiar solo el fondo de una imagen que ya creaste. ¿Cuál es la mejor petición?",
    choices: [
      "“Dibújalo otra vez”",
      "“No me gusta, hazlo más bonito”",
      "Borrar la petición inicial y pedir otro tema en un chat nuevo",
      "“Cambia el fondo a noche y deja lo demás igual”",
    ],
    explain: "Con las imágenes pasa como con los textos: si indicas qué cambiar y qué dejar igual, te acercas más al resultado que quieres.",
  },
  "ch104-sketch": {
    prompt: "¿Cuándo conviene usar «Boceto» del menú +?",
    choices: [
      "Cuando quieres mostrar con un dibujo una distribución difícil de explicar",
      "Cuando quieres elegir y subir una foto que ya tienes guardada en el ordenador",
      "Cuando quieres sacar de la biblioteca un archivo que subiste antes",
      "Cuando quieres buscar una imagen parecida en internet y pegarla",
    ],
    explain: "«Boceto» es la función para adjuntar como imagen un dibujo hecho por ti. No hace falta dibujar bien: sirve para mostrar una distribución o una forma.",
  },
  "ch105-why": {
    prompt: "Si dejas activadas la memoria y las instrucciones personalizadas, ¿qué es lo que más cambia?",
    choices: [
      "Tienes que explicar tu situación de nuevo menos veces en cada conversación nueva",
      "ChatGPT busca por ti información mucho más reciente en internet de forma automática",
      "Se evita por completo que se cuelen datos erróneos en las respuestas",
      "Tu historial se comparte automáticamente con la cuenta de tu familia",
    ],
    explain: "Las dos funciones sirven para darle de antemano el contexto sobre ti. No tienen que ver con buscar información reciente ni con garantizar que la respuesta sea exacta.",
  },
  "ch105-memory-kinds": {
    prompt: "¿Qué diferencia hay entre la «Memoria guardada» y la «Consulta del historial de chats» que explica la ayuda?",
    choices: [
      "Solo cambia el nombre; en realidad funcionan igual",
      "La consulta del historial usa únicamente lo que te pedí con “recuérdalo”",
      "La memoria se guarda aparte; la consulta saca datos de chats anteriores",
      "La memoria guardada solo se crea mientras tienes activado el chat temporal",
    ],
    explain: "La memoria guardada es información que se almacena aparte del historial de chats. La consulta del historial de chats saca datos de conversaciones pasadas en cada momento.",
  },
  "ch105-delete": {
    prompt: "En una conversación dijiste “soy vegetariano, recuérdalo” y se creó una memoria guardada. ¿Qué pasa si eliminas esa conversación?",
    choices: [
      "La memoria guardada creada en esa conversación también se borra al instante",
      "La memoria guardada se queda aparte, así que tienes que borrarla tú",
      "La memoria guardada pasa automáticamente al chat temporal",
      "Pasados 30 días, la conversación borrada se recupera sola",
    ],
    explain: "Aunque borres la conversación original, la memoria guardada que creaste en ella se queda. Se borra aparte desde «Resumen de memoria» → «Gestionar».",
  },
  "ch105-instructions": {
    prompt: "Con el plan Plus, modificas las instrucciones personalizadas. ¿Cuál es la forma más segura de comprobar si se cumplen las nuevas?",
    choices: [
      "Volver a enviar la misma pregunta en la conversación que estabas teniendo",
      "Activar un chat temporal en «No personalizado» y preguntar",
      "Guardar las instrucciones y preguntar un día después",
      "Abrir un chat nuevo y hacer de nuevo la misma pregunta",
    ],
    explain: "La ayuda no deja claro si el cambio se aplica enseguida a una conversación en curso. En las conversaciones nuevas sí se aplica seguro. Un chat temporal en «No personalizado» ignora las instrucciones, así que no sirve para comprobarlo.",
  },
  "ch105-style": {
    prompt: "¿Qué pasa si activas «Consultar mi estilo de escritura» en «Personalización»?",
    choices: [
      "Escribe los textos con tu estilo, basándose en tus chats, archivos y otros datos",
      "Corrige solo la ortografía y la puntuación de todo lo que escribes en tus chats nuevos",
      "El tono de las respuestas queda fijo en «Profesional»",
      "Lo que escribes se muestra como ejemplo a otros usuarios",
    ],
    explain: "Según la descripción de la pantalla, «Consultar mi estilo de escritura» hace que escriba con tu forma de hablar, basándose en tus chats, los archivos de la biblioteca y las aplicaciones conectadas.",
  },
  "ch105-temporary": {
    prompt: "Empiezas un chat temporal en «No personalizado» y preguntas “¿qué negocio dije que tenía?”, pero responde que no lo sabe. ¿Por qué?",
    choices: [
      "Porque el espacio de memoria está lleno y ya no recuerda más",
      "Porque el chat temporal solo usa la memoria en el plan gratuito",
      "Porque esa opción responde ignorando la memoria y las instrucciones",
      "Porque el chat temporal solo responde con resultados de la búsqueda web",
    ],
    explain: "En el chat temporal eliges antes de empezar entre «Personalizado» y «No personalizado». «No personalizado» ignora la memoria, los complementos y las instrucciones personalizadas. En cualquiera de los dos casos, el chat temporal no crea memoria nueva.",
  },
  "ch106-web-search": {
    prompt: "Quieres preguntar “¿cuál es el salario mínimo de este año?”. ¿Cuál es la forma adecuada?",
    choices: [
      "Escribirlo en la lupa «Buscar», arriba del todo del menú lateral",
      "Pulsar + → elegir «Búsqueda web» y hacer la pregunta",
      "Solo se puede buscar con un chat temporal activado",
      "Sin un plan de pago no se puede preguntar por información reciente",
    ],
    explain: "«Buscar» del menú lateral solo busca en tus chats, proyectos y archivos. Para información de internet se usa la búsqueda web, que está disponible en todos los planes, incluido Free.",
  },
  "ch106-citations": {
    prompt: "La respuesta de una búsqueda web trae enlaces a las fuentes. ¿Cuál es la actitud más adecuada?",
    choices: [
      "Si hay enlace, la información está comprobada y la uso tal cual",
      "Cuantas más fuentes, más exacto, así que solo cuento cuántas fuentes hay",
      "La lista de fuentes es solo publicidad y no le hago caso",
      "Abro el enlace y compruebo si las cifras están en el texto original",
    ],
    explain: "OpenAI reconoce que los resultados de búsqueda y las citas pueden ser incompletos, antiguos o erróneos. Solo comprobarás algo si abres el enlace y lo contrastas con el original.",
  },
  "ch106-location": {
    prompt: "Preguntas “dime una farmacia cerca”. ¿Qué es correcto sobre compartir la ubicación exacta del dispositivo?",
    choices: [
      "Está activada desde el principio y no se puede desactivar",
      "Al principio está desactivada y se activa en el ajuste «Ubicación»",
      "Se envía a la empresa de búsqueda junto con los datos de mi cuenta de usuario",
      "La ubicación solo se usa en la investigación profunda",
    ],
    explain: "ChatGPT calcula tu ubicación aproximada a partir de la dirección IP, y compartir la ubicación del dispositivo está desactivado al principio. A la empresa de búsqueda no se le envía ni la dirección IP ni los datos de tu cuenta.",
  },
  "ch106-shopping": {
    prompt: "Vas a comprar enseguida un producto cuyo precio te mostró ChatGPT. ¿Qué recomienda la ayuda?",
    choices: [
      "Comprobar en la web del vendedor el precio final, el envío y las devoluciones",
      "Comprarlo ya, porque el primer precio que muestra ChatGPT es siempre el más bajo",
      "Ignorar los resultados de productos, porque son anuncios",
      "Fiarme del resumen de reseñas, porque OpenAI lo ha verificado",
    ],
    explain: "El primer precio que aparece es el del primer vendedor y puede no ser el más bajo, y el resumen de reseñas no está verificado. Los resultados de productos no son anuncios, pero antes de pagar conviene comprobarlo directamente con el vendedor.",
  },
  "ch106-deep-research": {
    prompt: "Cuando empiezas una investigación profunda, ¿qué ocurre antes de que salga el informe?",
    choices: [
      "Primero te muestra un plan de investigación y tú puedes modificarlo",
      "Aparece una ventana de pago y pagas por cada informe",
      "No puedes añadir nada hasta que salga el informe",
      "Lee automáticamente una sola página, la primera que elegiste, y no consulta más",
    ],
    explain: "La investigación profunda propone primero un plan y tú puedes modificarlo. También puedes intervenir mientras trabaja, y el resultado llega como un informe con citas.",
  },
  "ch106-limits": {
    prompt: "Quieres saber cuántas veces más puedes usar la investigación profunda. ¿Qué haces?",
    choices: [
      "Todos los planes tienen lo mismo: 10 veces al mes",
      "Se rellena el día 1 de cada mes, así que solo tengo que mirar la fecha del mes",
      "Miro yo mismo las veces que quedan, que se muestran en la aplicación",
      "No hay límite de veces, así que no me preocupo",
    ],
    explain: "El límite cambia según el plan y se consulta en la propia aplicación. El límite mensual se rellena cada 30 días a partir del primer día que lo usas.",
  },
  "ch107-projects": {
    prompt: "En las instrucciones personalizadas escribiste “respóndeme de usted” y en las de tu proyecto «Estudiar inglés» escribiste “responde solo en inglés”. ¿Qué pasa en las conversaciones de ese proyecto?",
    choices: [
      "Gana siempre la instrucción personalizada, así que responde de usted",
      "Las dos instrucciones chocan y no responde nada",
      "Las instrucciones del proyecto solo se aplican en los proyectos compartidos con otros",
      "Las instrucciones del proyecto tienen prioridad, así que responde en inglés",
    ],
    explain: "Las instrucciones del proyecto solo se aplican dentro de ese proyecto y tienen prioridad sobre las instrucciones personalizadas.",
  },
  "ch107-template": {
    prompt: "Te cansa pegar cada vez la plantilla del informe semanal. ¿Qué método recomienda este capítulo?",
    choices: [
      "Pegar la plantilla en un chat temporal para guardarla",
      "Poner la plantilla en las instrucciones del proyecto y conversar dentro de él",
      "Buscar cada semana en la web una plantilla parecida",
      "Borrar la plantilla y volver a escribir todo el informe desde cero cada semana, a mano",
    ],
    explain: "Si dejas en las instrucciones del proyecto la plantilla que vas a reutilizar, en cada conversación nueva de ese proyecto solo tienes que pegar las notas de esta semana.",
  },
  "ch107-plugins": {
    prompt: "¿Qué afirmación sobre los complementos es correcta?",
    choices: [
      "Solo con un plan de pago se puede ver el directorio de complementos",
      "Un complemento instalado solo se puede usar llamándolo por su nombre con `@`",
      "Se buscan e instalan en el directorio de «Complementos» del menú lateral",
      "Con el cambio de directorio se cortaron todas las aplicaciones conectadas antes",
    ],
    explain: "Los complementos se buscan e instalan en el directorio de «Complementos» del menú lateral, que se puede ver en todos los planes. Puedes usarlos preguntando sin más o llamándolos con `@`, con el botón + o desde «Plugins». Las aplicaciones que conectaste antes siguen igual.",
  },
  "ch107-permissions": {
    prompt: "Conectaste Gmail y luego lo desconectaste. ¿Qué afirmación es correcta?",
    choices: [
      "Todo el contenido de correo que ya se había traído se borra de las conversaciones y de la memoria",
      "Solo deja de poder leerlo a partir de ahora; lo que ya entró tienes que borrarlo aparte",
      "Al desconectar, también se apaga el interruptor que permite el entrenamiento",
      "Basta con cambiar el permiso a «Preguntar siempre» para que se desconecte",
    ],
    explain: "Al desconectar, solo se deja de leer a partir de ese momento; lo que ya entró en las conversaciones, los archivos o la memoria se queda. Los permisos de las aplicaciones funcionan aparte del ajuste de entrenamiento, y cambiar el permiso no desconecta la aplicación.",
  },
  "ch107-work": {
    prompt: "Para un trabajo de varios pasos que acaba en algo terminado, como “con el archivo de ventas de este trimestre, hazme una presentación de 10 diapositivas”, ¿qué es lo adecuado?",
    choices: [
      "Cambiar la parte de arriba de la pantalla a «Work» y encargárselo",
      "Buscarlo con la lupa «Buscar» del menú lateral",
      "Activar el modo agente en los ajustes y encargárselo",
      "Escribir el trabajo en las instrucciones personalizadas de los ajustes",
    ],
    explain: "Work es la función para tareas largas de varios pasos y para resultados terminados como documentos, tablas o presentaciones. El modo agente ya no se puede usar.",
  },
  "ch107-retired": {
    prompt: "Usas un GPT personalizado que creaste tú. ¿Qué es correcto según la guía de este capítulo?",
    choices: [
      "Los GPT personalizados se pueden seguir usando, así que no hace falta preparar nada de antemano",
      "Cuando termine, también desaparecerá el historial de conversaciones con el GPT",
      "Los GPT personalizados pasan automáticamente al modo agente",
      "Está previsto que terminen, así que guarda antes las instrucciones y los archivos",
    ],
    explain: "Los GPT personalizados terminarán el 2026-12-11 y pasarán a ser complementos. El historial de conversaciones se conserva, pero es más seguro guardar antes las instrucciones y los archivos.",
  },
  "ch108-screen": {
    prompt: "Quieres decidir en una sola pantalla si tus conversaciones se usan para entrenar y qué haces con los enlaces compartidos y la exportación. ¿Adónde vas?",
    choices: [
      "A «Biblioteca», en el menú lateral",
      "A «Gestión de datos», dentro de «Ajustes»",
      "Al menú «+» del cuadro de entrada",
      "A «Personalización», que está dentro de «Ajustes»",
    ],
    explain: "El interruptor del entrenamiento, la gestión de enlaces compartidos, archivar y eliminar y la exportación de datos están juntos en la pantalla «Ajustes > Gestión de datos». En la ayuda pone «Controles de datos», pero el nombre real en la pantalla es «Gestión de datos».",
  },
  "ch108-training": {
    prompt: "Desactivaste «Mejorar el modelo para todos». ¿En qué caso se pueden seguir usando tus conversaciones para entrenar?",
    choices: [
      "Cuando cambias el título de una conversación en el menú lateral",
      "Cuando inicias sesión en la aplicación del móvil con la misma cuenta que usas en la web",
      "Cuando envías comentarios, como «Me gusta» o «No me gusta», sobre una respuesta",
      "Cuando archivas la conversación y la ocultas del menú lateral",
    ],
    explain: "Aunque desactives el entrenamiento, si envías comentarios, esa conversación entera puede usarse para entrenar. El ajuste que desactivas con la sesión iniciada se aplica a todos tus dispositivos, incluida la aplicación del móvil.",
  },
  "ch108-share": {
    prompt: "Hace unos meses publicaste un enlace compartido de ChatGPT en un chat de grupo. ¿Cómo haces para que ya nadie pueda verlo?",
    choices: [
      "Eliminar ese enlace desde «Gestionar», en «Enlaces compartidos»",
      "Esperar, porque con el tiempo el enlace caduca solo",
      "Archivar la conversación original para ocultarla del menú lateral",
      "Desactivar «Mejorar el modelo para todos»",
    ],
    explain: "Cualquiera que tenga el enlace compartido puede verlo, y el enlace no tiene fecha de caducidad. La forma segura es eliminarlo tú desde «Gestionar», en «Enlaces compartidos».",
  },
  "ch108-delete": {
    prompt: "Vas a pulsar «Eliminar todos los chats» en «Gestión de datos». ¿Qué recomienda este capítulo hacer antes?",
    choices: [
      "Pedir al servicio de atención que lo restaure",
      "Activar un chat temporal, porque así las conversaciones borradas vuelven a los 30 días",
      "Desactivar primero el entrenamiento, porque si no el botón de eliminar no se puede pulsar",
      "Descargar antes una copia de seguridad con «Exportar datos»",
    ],
    explain: "Eliminar todo no se puede deshacer, y ni el servicio de atención puede recuperarlo. Si quieres conservar alguna conversación, haz antes una copia de seguridad con «Exportar datos».",
  },
  "ch108-export": {
    prompt: "Pediste «Exportar datos» y te llegó por correo un enlace de descarga. ¿Qué debes tener en cuenta?",
    choices: [
      "El enlace vale 7 días, así que lo descargo con calma el fin de semana",
      "El enlace caduca 24 horas después de recibirlo, así que lo descargo enseguida",
      "El archivo solo tiene datos de la cuenta, sin conversaciones, así que lo puedo dejar en cualquier sitio",
      "Al recibir el enlace la cuenta se elimina sola, así que antes cancelo la suscripción",
    ],
    explain: "El enlace puede tardar hasta 7 días en llegar, pero una vez recibido caduca a las 24 horas. El archivo contiene todas tus conversaciones, así que no lo descargues en un ordenador compartido.",
  },
  "ch108-account": {
    prompt: "Alguien pagó la suscripción de ChatGPT en la App Store del iPhone y quiere eliminar su cuenta. ¿Qué debe hacer primero?",
    choices: [
      "Borrar la aplicación de ChatGPT del móvil",
      "Vaciar antes las conversaciones con «Eliminar todos los chats»",
      "Cancelar la suscripción directamente en Apple",
      "Crear otra cuenta con el mismo correo",
    ],
    explain: "Aunque elimines la cuenta, la suscripción pagada con Apple no se cancela, y tampoco se cancela por borrar la aplicación. Primero hay que cancelar la suscripción en el sitio donde se pagó.",
  },
  "ch108-security": {
    prompt: "En el menú lateral ves conversaciones que tú no has tenido. ¿Qué es lo primero que debes hacer?",
    choices: [
      "Activar el modo de bloqueo y seguir usándolo igual",
      "Conversar a partir de ahora solo en chat temporal",
      "Borrar solo las conversaciones desconocidas y seguir usándolo igual",
      "Cambiar la contraseña y activar la verificación en dos pasos",
    ],
    explain: "Si cambias la contraseña, se cierra la sesión en todos los dispositivos en un máximo de 30 minutos. Activa la verificación en dos pasos en «Seguridad e inicio de sesión» y revisa también las sesiones activas. El modo de bloqueo reduce las fugas de datos por instrucciones ocultas; no sirve para cerrar sesiones.",
  },
  "ch108-family": {
    prompt: "Conectaste la cuenta de tu hijo adolescente con el control parental. ¿Qué puede hacer el padre, la madre o el tutor?",
    choices: [
      "Leer todo el contenido de las conversaciones de su hijo",
      "Ver en tiempo real el historial de conversaciones de su hijo",
      "Ajustar algunas funciones y fijar las horas de uso",
      "Cambiar por él la contraseña de su cuenta",
    ],
    explain: "El control parental sirve para ajustar algunas funciones, fijar horarios y, en raras ocasiones, recibir avisos de seguridad. Aunque conectes las cuentas, quien supervisa no puede ver el contenido de las conversaciones, el historial ni la actividad en tiempo real.",
  },
  "ch108-business": {
    prompt: "¿Qué afirmación es correcta para un empleado que trabaja con una cuenta de ChatGPT Business contratada por su empresa?",
    choices: [
      "Tiene que apagar el interruptor de entrenamiento con más frecuencia que en una cuenta personal",
      "Con una cuenta personal tendría la misma protección",
      "En Business las conversaciones no se guardan, así que se puede meter cualquier cosa",
      "Por defecto no se usa para entrenar, pero se siguen las normas de la empresa",
    ],
    explain: "Por defecto, el contenido de los planes Business, Enterprise y Edu no se usa para entrenar. Aun así, lo que se puede meter lo deciden primero las normas de la empresa, y con una cuenta personal no tienes esta protección.",
  },
  "ch109-buttons": {
    prompt: "Quieres dictar una pregunta larga, pero leer y corregir el texto transcrito antes de enviarlo. ¿Qué botón es el adecuado?",
    choices: [
      "El botón del micrófono del cuadro de entrada (dictado)",
      "El botón de ondas azules del cuadro de entrada (conversación de voz)",
      "«+» del cuadro de entrada → «Búsqueda web»",
      "El botón «Chat temporal» de arriba a la derecha",
    ],
    explain: "El dictado convierte tu voz en texto y lo pone en el cuadro de entrada, así que puedes leerlo y corregirlo antes de enviar. La conversación de voz es un intercambio hablado directo, sin tiempo para corregir.",
  },
  "ch109-start": {
    prompt: "¿Qué afirmación sobre la conversación de voz es correcta?",
    choices: [
      "En la conversación de voz no puedes pedir correcciones",
      "Solo puedes tener una conversación de voz abierta a la vez",
      "La conversación de voz solo funciona en la aplicación del móvil, no en la web",
      "Si activas varias conversaciones de voz a la vez, las respuestas llegan más rápido",
    ],
    explain: "Solo se puede tener una conversación de voz a la vez. En la web se inicia con el botón de voz del cuadro de entrada, y de palabra puedes pedir cambios, como “dilo más corto”.",
  },
  "ch109-modes": {
    prompt: "Quieres enfocar con la cámara un electrodoméstico averiado y preguntar por voz. ¿Qué modo debes usar?",
    choices: [
      "El dictado del cuadro de entrada de la web (botón del micrófono)",
      "El modo Live de la aplicación del móvil",
      "El modo Advanced de la aplicación del móvil",
      "El modo Standard de la aplicación del móvil",
    ],
    explain: "El vídeo y compartir pantalla solo funcionan en el modo Advanced de la aplicación del móvil. El modo Live escucha y habla a la vez, pero no admite vídeo ni compartir pantalla.",
  },
  "ch109-limits": {
    prompt: "¿Qué afirmación sobre el límite de uso de la conversación de voz (modo Live) es correcta?",
    choices: [
      "Todos los planes tienen lo mismo: ilimitado al día, sin ningún tipo de tope",
      "Se reinicia una vez al mes, en una fecha fija",
      "El límite se fija una vez y no cambia",
      "Se cuenta sobre las últimas 24 horas y varía según el plan",
    ],
    explain: "El límite del modo Live se cuenta sobre las últimas 24 horas y es distinto en Free, Go, Plus y Pro. Estas cifras cambian a menudo, así que consulta el valor actual en la ayuda.",
  },
  "ch109-privacy": {
    prompt: "En el metro quieres pedirle a ChatGPT que te pula un mensaje de confirmación de una cita médica. ¿Cuál es la forma más adecuada?",
    choices: [
      "Dictar o escribir el texto, y pedirlo sin incluir el nombre ni los datos del hospital",
      "Usar la conversación de voz y decir con claridad tu nombre y el motivo de la consulta",
      "Con el modo Standard la grabación se borra, así que puedo decir datos personales en voz alta",
      "Cambiando al modo Live no te oye la gente de alrededor",
    ],
    explain: "La conversación de voz la puede oír quien esté a tu lado, y las grabaciones de los modos Live y Advanced se guardan 30 días junto con el historial de conversaciones. En lugares públicos escribe en silencio y no digas datos personales ni siquiera en voz alta.",
  },
  "ch110-how": {
    prompt: "¿Qué método para hacer las tareas de práctica se recomienda?",
    choices: [
      "Subir material real de la empresa, porque así se aprende más",
      "Hacer todas las tareas en chat temporal, sin usar nunca el chat normal",
      "Hacerlas en chat temporal si se puede, y con datos falsos en el chat normal",
      "Las conversaciones de práctica se borran solas, así que no hace falta ordenar nada",
    ],
    explain: "El chat temporal no queda en el historial, no se usa para entrenar y no crea memoria nueva. Por eso, las tareas que tocan el historial o los ajustes se hacen en el chat normal con datos falsos y se ordenan al terminar.",
  },
  "ch110-check": {
    prompt: "En la tarea 5 recibiste el tiempo de esta semana con la búsqueda web. ¿Qué acción corresponde a «comprobar que salió bien»?",
    choices: [
      "Si hay fuente, el contenido es correcto, así que me salto la comprobación",
      "Abrir el enlace de la fuente y ver si esa cifra está de verdad allí",
      "Repetir la misma pregunta y dar por bueno el resultado si coincide",
      "Si la respuesta es larga y detallada, la doy por fiable y la marco",
    ],
    explain: "Los resultados de búsqueda y las citas también pueden ser erróneos o antiguos. La comprobación termina cuando abres tú el enlace de la fuente y ves que ese contenido está de verdad.",
  },
  "ch111-difference": {
    prompt: "En el informe de OpenAI sobre cómo se usa ChatGPT en las empresas, ¿qué se usa menos incluso donde más efecto tendría?",
    choices: [
      "La ventana de conversación básica donde se escribe la pregunta y se lee la respuesta",
      "El botón para copiar la respuesta",
      "Las funciones avanzadas, como el razonamiento y la investigación profunda",
      "El botón para abrir un chat nuevo",
    ],
    explain: "El informe considera que las funciones avanzadas, como el razonamiento, la investigación profunda, los proyectos y las instrucciones personalizadas, se usan menos incluso donde más efecto tendrían. Este capítulo trata de cómo combinarlas según tu trabajo.",
  },
  "ch111-five-lines": {
    prompt: "En las «cinco líneas para encargar un trabajo», ¿a qué línea corresponde “al final, comprueba que el total coincide con el original”?",
    choices: [
      "Resultado: qué se crea, para quién y con qué objetivo principal",
      "Qué conservar: la parte que no se debe cambiar",
      "Criterios de revisión: la vara para juzgar si salió bien",
      "Forma: el formato y la extensión de la respuesta",
    ],
    explain: "Es la vara para juzgar si el resultado salió bien, así que son los criterios de revisión. OpenAI recomienda dar los criterios de revisión junto con el encargo cuando le encomiendas un trabajo a Work.",
  },
  "ch111-tools": {
    prompt: "Cuando quieres saber si ChatGPT puede hacer algo, ¿qué método recomienda este capítulo?",
    choices: [
      "Preguntarle antes: “¿puedes hacer esto?”",
      "Pedirle directamente lo que quieres hacer y comprobarlo",
      "Subir el nivel de razonamiento al máximo y luego preguntar",
      "Activar el chat temporal y repetir la misma pregunta",
    ],
    explain: "ChatGPT no puede ver cómo funciona su propio sistema, así que si le preguntas puede responder mal. Es mejor pedirle el trabajo directamente.",
  },
  "ch111-sources": {
    prompt: "¿Cómo guardas como material para más adelante una buena respuesta de una conversación de un proyecto?",
    choices: [
      "Copiar la respuesta y pegarla en un chat nuevo",
      "Archivar esa conversación para ocultarla del menú lateral de la izquierda",
      "Crear un enlace compartido de la respuesta y enviármelo",
      "Elegir «Añadir a las fuentes del proyecto» en el menú del mensaje",
    ],
    explain: "Si en el menú del mensaje eliges «Guardar en el proyecto» o «Añadir a las fuentes del proyecto», esa respuesta pasa a las «Fuentes» del proyecto (el nombre puede variar según la pantalla).",
  },
  "ch111-templates": {
    prompt: "¿Qué afirmación sobre las plantillas y las skills es correcta?",
    choices: [
      "Las plantillas se crean directamente en el Chat normal de todos los planes",
      "Las skills son una función solo del plan gratuito",
      "Las plantillas se crean en Work con `@Template-Creator`",
      "Una plantilla, al crearla, se muestra automáticamente a todo el equipo",
    ],
    explain: "Las plantillas se crean en Work, en la web, con un plan de pago, mediante `@Template-Creator`, y solo las usa quien las creó. Según la ayuda, las skills están disponibles en los planes de empresa y de centros educativos.",
  },
  "ch111-scheduled": {
    prompt: "¿Cuál es la advertencia correcta sobre las tareas programadas?",
    choices: [
      "Una tarea dentro de un proyecto no puede leer los archivos de ese proyecto",
      "Las tareas programadas solo se pueden crear dentro de una conversación de voz",
      "Si las compartes con un enlace, las instrucciones se ven ocultas para quien lo recibe",
      "El plan gratuito también puede ejecutarlas cada hora en punto exacto",
    ],
    explain: "Una tarea programada dentro de un proyecto no puede leer los archivos del proyecto, así que escribe en las instrucciones lo que necesite. En un enlace compartido las instrucciones se ven tal cual, y la hora exacta y la ejecución cada hora solo están en los planes de pago.",
  },
  "ch111-data": {
    prompt: "¿Cómo conviene ordenar un archivo antes de encargar un análisis de datos?",
    choices: [
      "Reunir varias tablas relacionadas en una sola hoja",
      "Separarlas con líneas en blanco para que se vea mejor y esté más ordenado",
      "Hacer una foto de la tabla con las cifras y subirla",
      "En la primera fila los nombres de las columnas y en cada fila un caso",
    ],
    explain: "Lo mejor es una primera fila con nombres de columna fáciles de entender y un caso por fila. Evita varias tablas en una hoja o líneas en blanco, y recuerda que las cifras de una tabla en foto pueden no ser exactas.",
  },
  "ch111-study": {
    prompt: "¿Dónde no se puede activar el modo de estudio?",
    choices: [
      "En una conversación normal de la aplicación del móvil",
      "En una conversación dentro de un proyecto",
      "En una conversación normal del plan gratuito",
      "En un chat nuevo abierto en la web",
    ],
    explain: "El modo de estudio se puede usar en la web, iOS y Android con todos los planes, pero no se puede activar en el chat temporal, en los GPT personalizados ni en los proyectos.",
  },
  "ch111-shape": {
    prompt: "La respuesta trae demasiadas tablas, botones y gráficos y te resulta incómodo. ¿Qué puedes probar?",
    choices: [
      "Activar el chat temporal y volver a preguntar",
      "Bajar el nivel de razonamiento al mínimo y volver a preguntar",
      "Cambiar el diseño a «Simple» en los ajustes de la web",
      "Desactivar la memoria y borrar todas las memorias guardadas",
    ],
    explain: "Si en los ajustes de la web, en Personalización, cambias Layout and Visuals a Simple, hay menos elementos como tablas e imágenes. Aun así, puede que algunos sigan apareciendo.",
  },
  "ch111-verify": {
    prompt: "¿Qué conviene comprobar antes de fiarte del resultado de un análisis de datos?",
    choices: [
      "El método de cálculo, el código y los supuestos",
      "El tipo de letra y los colores usados en la respuesta",
      "El tiempo total que tardó en responder",
      "El número de caracteres que se muestra debajo de la respuesta",
    ],
    explain: "OpenAI recomienda revisar el código, los resultados y los supuestos antes de usar un análisis. Si el método importa, pide que te lo muestre o que lo cambie.",
  },
  "ch111-academy": {
    prompt: "¿Qué afirmación sobre los cursos de OpenAI Academy es correcta?",
    choices: [
      "Solo los pueden hacer quienes tienen un plan de pago",
      "Con una insignia se reconoce un certificado oficial",
      "Es un curso al que solo se puede apuntar quien tiene una cuenta de empresa",
      "Basta con una cuenta de ChatGPT para hacerlos gratis",
    ],
    explain: "Los cursos de Academy son gratuitos y cualquiera con una cuenta de ChatGPT puede hacerlos a su ritmo. Con un 80 % o más en el examen recibes una insignia, pero no es un certificado.",
  },
}
