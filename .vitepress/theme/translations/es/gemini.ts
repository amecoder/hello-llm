// es text for gemini (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const GEMINI: Record<string, QuestionText> = {
  "ch301-where": {
    prompt: "Tu sobrino de secundaria quiere probar la web de Gemini. Su cuenta de Google la gestionan sus padres con Family Link. ¿Qué pasará?",
    choices: [
      "Como tiene más de 13 años, puede usarlo directamente en la web sin problema",
      "Una cuenta gestionada con Family Link no puede usar la web de Gemini",
      "Si contrata un plan de pago, podrá usarlo en la web",
      "En Corea no se puede usar la web de Gemini, sea quien sea",
    ],
    explain: "Una cuenta personal puede usarlo a partir de los 13 años, pero una cuenta gestionada con Family Link no puede entrar en la web de Gemini. Corea y el coreano son compatibles.",
  },
  "ch301-login": {
    prompt: "Hiciste unas preguntas en la web de Gemini sin iniciar sesión y al día siguiente quieres volver a ver esa conversación. ¿Qué pasa?",
    choices: [
      "Si es el mismo navegador, la conversación sigue en el menú lateral",
      "Si inicias sesión más tarde, esa conversación pasa a tu cuenta",
      "Las conversaciones sin sesión iniciada no se pueden volver a ver",
      "El historial de la conversación te llega solo por correo",
    ],
    explain: "Si no inicias sesión, no puedes volver a ver las conversaciones anteriores. Tampoco puedes subir archivos ni crear imágenes. Para conservar las conversaciones, inicia sesión con tu cuenta de Google.",
  },
  "ch301-plans": {
    prompt: "Una persona que hace muchas fotos se ha quedado sin almacenamiento de Google y duda sobre un plan de pago de Gemini. ¿Qué le conviene saber?",
    choices: [
      "Los planes de Google AI incluyen almacenamiento compartido por Drive, Gmail y Fotos",
      "Los planes de Google AI dan un almacenamiento aparte solo para las conversaciones de Gemini",
      "El almacenamiento solo viene en el plan Ultra, el más completo",
      "Los planes de Gemini y el almacenamiento no tienen ninguna relación entre sí",
    ],
    explain: "Los planes de Google AI se contratan con Google One e incluyen almacenamiento compartido por Drive, Gmail y Fotos (Plus 400 GB, Pro 5 TB). Si ya pagas por almacenamiento, tenlo en cuenta al comparar.",
  },
  "ch301-limits": {
    prompt: "En una misma ventana preguntaste por la mañana por un plan de viaje y por la tarde por un informe de trabajo, y el uso bajó rápido. ¿Cuál es el hábito más adecuado?",
    choices: [
      "El uso solo se cuenta por número de preguntas, así que haces menos preguntas",
      "Abrir un chat nuevo cuando cambia el tema",
      "Cuanto más larga es la conversación, menos uso se gasta, así que sigues en una sola",
      "Pasarte a la aplicación del móvil",
    ],
    explain: "Gemini vuelve a leer la conversación anterior cada vez que responde, así que cuanto más larga es, más gasta. Si abres un chat nuevo cuando cambia el tema, ahorras uso.",
  },
  "ch301-billing": {
    prompt: "Usas Google AI Pro y vas a cancelarlo. ¿Qué debes comprobar antes de cancelar?",
    choices: [
      "Que al cancelar se borran todas las conversaciones que has tenido",
      "Que solo se puede cancelar llamando al servicio de atención al cliente de Google",
      "Que, aunque canceles, el almacenamiento ampliado se queda igual",
      "Que al terminar el plan ya no podrás usar el almacenamiento ampliado",
    ],
    explain: "La cancelación se hace en «Configuración» → «Gestionar suscripción», que lleva a Google One. Cuando termina el plan, ya no puedes usar el almacenamiento ampliado de Drive, Gmail y Fotos, así que, si usabas mucho de ese espacio, compruébalo antes.",
  },
  "ch301-trouble": {
    prompt: "Gemini te mostró un error en lugar de la respuesta. ¿Qué conviene probar antes de avisar al servicio de atención?",
    choices: [
      "Eliminar la cuenta y crear una nueva",
      "Subir enseguida a un plan de pago",
      "Reenviar la pregunta y, si no funciona, abrir un chat nuevo sin el archivo",
      "Enviar la misma pregunta muchas veces seguidas, en un solo segundo, sin esperar",
    ],
    explain: "Lo que la ayuda recomienda probar primero en la mayoría de los errores es reenviar, abrir un chat nuevo, quitar los archivos adjuntos, esperar 5 minutos o recargar. Si envías demasiado en poco tiempo, puede salir «Too many requests».",
  },
  "ch302-home": {
    prompt: "Alguien abre Gemini por primera vez y dice que hay tantos menús que no sabe por dónde empezar. ¿Cuál es el mejor consejo?",
    choices: [
      "Pulsar todos los menús uno por uno antes de preguntar",
      "Cambiar primero todos los ajustes y luego preguntar",
      "Hace falta contratar un plan de pago para poder hacer cualquier pregunta",
      "Empezar escribiendo una pregunta en el cuadro de entrada y enviarla",
    ],
    explain: "Al principio basta con el cuadro de entrada del centro. El menú lateral, el botón de modelo, el chat temporal y los ajustes los vas aprendiendo uno a uno cuando los necesites.",
  },
  "ch302-sidebar": {
    prompt: "Quieres volver a encontrar la conversación sobre «ingredientes del kimchi» que le preguntaste a Gemini la semana pasada. ¿Dónde miras?",
    choices: [
      "En «Buscar chats» del menú lateral, buscando «kimchi»",
      "En «Configuración» → «Tema»",
      "En «Deep Research» del «+» del cuadro de entrada",
      "Las conversaciones anteriores no se pueden volver a encontrar",
    ],
    explain: "Con «Buscar chats» (la lupa) del menú lateral puedes buscar conversaciones anteriores por palabras. En la lista «Todos», la de arriba es la conversación más reciente.",
  },
  "ch302-plus": {
    prompt: "Enviaste “escribe un mensaje para mover la reunión al jueves”, pero olvidaste añadir “para un compañero de trabajo”. ¿Cómo corriges la pregunta enviada para recibir otra respuesta?",
    choices: [
      "Borras la conversación y la escribes desde el principio",
      "Con «Editar texto» en la pregunta, añades la condición y pulsas «Actualizar»",
      "Activas el «Chat temporal» y vuelves a enviar la misma pregunta desde el principio",
      "Cambias el modelo a Argon",
    ],
    explain: "Si corriges la pregunta con «Editar texto» (el lápiz) y pulsas «Actualizar», Gemini genera la respuesta de nuevo. No hace falta reescribir la pregunta desde el principio.",
  },
  "ch302-model": {
    prompt: "Alguien con plan de pago dice: “para obtener buenas respuestas hay que usar siempre el modelo más grande en «Alto»”. ¿Qué afirmación es correcta?",
    choices: [
      "Es cierto: cuanto más alto, menos uso se gasta",
      "Es cierto: el nivel de razonamiento no influye en nada en la calidad de la respuesta",
      "Se deja como está y se sube solo si la respuesta es superficial; más alto, más uso",
      "Una vez elegido, el nivel de razonamiento ya no se puede cambiar",
    ],
    explain: "Cuanto mejor es el modelo y más alto el nivel de razonamiento, más uso se gasta. Déjalo como está normalmente y súbelo solo para trabajos difíciles con varios pasos o cuando la respuesta sea superficial.",
  },
  "ch302-temp": {
    prompt: "Te gustó el itinerario de viaje que obtuviste en un chat temporal. ¿Qué debes hacer antes de salir del chat temporal?",
    choices: [
      "Copiar las respuestas que necesites, porque al salir no podrás volver a verlas",
      "Salir sin más, porque luego lo encontrarás en la lista «Todos»",
      "Está guardado en «Actividad», así que lo sacarás de ahí más tarde cuando lo necesites",
      "El chat temporal aparece solo en el menú lateral a las 72 horas",
    ],
    explain: "El chat temporal no queda en la lista de conversaciones ni en la «Actividad en las aplicaciones de Gemini», así que al salir no se puede volver a ver. Se guarda 72 horas en la cuenta, pero tú no puedes volver a abrirlo.",
  },
  "ch302-settings": {
    prompt: "La pantalla de Gemini sale en inglés y quieres cambiarla al coreano. ¿Cómo se hace en la web?",
    choices: [
      "Eligiendo el idioma en «Configuración» → «Tema»",
      "Contratando un plan de pago, que abre el coreano",
      "Preguntándole a Gemini en coreano, y los menús de la pantalla pasan al coreano",
      "Cambiando al coreano el idioma del navegador o del dispositivo",
    ],
    explain: "La web de Gemini sigue el idioma configurado en el navegador o el dispositivo. Si preguntas en coreano, responde en coreano, sea cual sea el idioma de la pantalla.",
  },
  "ch303-find": {
    prompt: "Tienes una cuenta personal, pero no puedes fijar ni borrar conversaciones. ¿Qué ajuste debes comprobar primero?",
    choices: [
      "Si el «Tema» está en pantalla oscura",
      "Si el modelo está en Argon",
      "Si «Conservar actividad» está activado",
      "Cuántas veces has usado el chat temporal",
    ],
    explain: "En una cuenta personal, buscar, fijar, renombrar y borrar conversaciones solo funciona si «Conservar actividad» está activado. Con 18 años o más, viene activado desde el principio.",
  },
  "ch303-manage": {
    prompt: "Vas a borrar una conversación para ordenar, y en ella hay un aviso hecho con Canvas. ¿Qué debes hacer antes de borrarla?",
    choices: [
      "Se borra también lo que creaste en ella, así que exportas antes lo que vayas a seguir usando",
      "Aunque borres la conversación, el resultado de Canvas se conserva aparte, así que la borras sin más",
      "Fijar la conversación hace que, aunque la borres, vuelva a aparecer, así que la fijas antes",
      "Si cambias el nombre no se borra, así que empiezas por cambiarlo",
    ],
    explain: "Al borrar la conversación, también se borra de la «Actividad en las aplicaciones de Gemini», y con ella desaparecen los resultados creados allí, como los documentos o las aplicaciones de Canvas. Exporta antes lo que vayas a seguir usando.",
  },
  "ch303-branch": {
    prompt: "En medio de una conversación larga sobre un plan de viaje quieres preguntar aparte “¿y si llueve?”, sin desordenar la conversación original. ¿Cuál es el método adecuado?",
    choices: [
      "Borrar la conversación original y volver a preguntar desde el principio",
      "En los tres puntos de la respuesta, pulsar «Crear rama en un chat nuevo»",
      "Activar el «Chat temporal», que sigue con el contenido anterior tal cual está",
      "Seguir preguntando lo mismo directamente en la conversación original",
    ],
    explain: "Si pulsas «Crear rama en un chat nuevo», se abre una conversación nueva que se separa desde ese punto, y la original queda intacta para volver a ella y seguir más tarde.",
  },
  "ch303-share": {
    prompt: "Creaste un enlace para compartir una conversación de Gemini para enviárselo solo a un amigo. ¿Qué afirmación es correcta?",
    choices: [
      "Solo el amigo al que se lo envié puede abrir el enlace",
      "Si modifico la conversación después de crear el enlace, la página compartida también cambia sola",
      "En la página compartida aparecen mi nombre y mi cuenta",
      "Cualquiera con el enlace puede leerlo, así que reviso toda la conversación antes de compartirla",
    ],
    explain: "Un enlace público lo puede leer y compartir de nuevo cualquiera que lo tenga. No lleva tu nombre y solo muestra el contenido del momento en que se creó el enlace.",
  },
  "ch303-export": {
    prompt: "Exportaste a «Crear borrador en Gmail» un correo informativo que te escribió Gemini. ¿Qué pasa después?",
    choices: [
      "El correo se envía de inmediato al destinatario, sin que tengas que comprobarlo",
      "Se guarda como borrador en Gmail, y lo compruebas y lo envías tú",
      "Se guarda como documento en Google Drive",
      "Se crea el correo aunque no tengas cuenta de Gmail",
    ],
    explain: "«Crear borrador en Gmail» crea un borrador de correo nuevo en Gmail. No se envía solo, así que compruébalo y envíalo tú. Necesitas una cuenta de Gmail para usarlo.",
  },
  "ch303-regen": {
    prompt: "La respuesta es demasiado larga y difícil, y no te gusta. ¿Qué forma facilita más acercarte a la respuesta que quieres?",
    choices: [
      "Decir qué quieres que cambie, como “en tres líneas y con palabras fáciles”",
      "Pulsar «Volver a generar» una y otra vez hasta que salga la respuesta que quieres",
      "Volver a una respuesta de hace varias y pulsar «Volver a generar»",
      "Abrir un chat nuevo y reenviar exactamente la misma pregunta",
    ],
    explain: "Cuando sabes qué no te gusta, es más fácil acercarte si dices qué cambiar, como la longitud, las palabras fáciles o el tono. «Volver a generar» solo funciona con la respuesta más reciente y no puedes elegir qué cambiará.",
  },
  "ch304-upload": {
    prompt: "Subiste entero un PDF muy grueso para que lo resumieran y parece que falta el contenido de la parte final. ¿Qué conviene probar primero?",
    choices: [
      "Subir el mismo archivo diez veces seguidas",
      "Dividir el archivo en archivos más pequeños, con menos contenido, y subirlos",
      "Subirlo en un chat temporal, donde lee más",
      "Acortar el nombre del archivo para que así lo lea entero hasta el final del todo",
    ],
    explain: "Un archivo grande puede dejarse partes sin leer. La ayuda indica que, si quieres mejores resultados, subas archivos más pequeños y con menos contenido, o pases a un plan que lea más cada vez.",
  },
  "ch304-canvas": {
    prompt: "Quieres acortar solo el segundo párrafo de un aviso hecho con Canvas y dejar lo demás igual. ¿Cuál es la forma más adecuada?",
    choices: [
      "Pedir que rehaga el aviso entero desde el principio",
      "Cerrar Canvas y pedir el mismo aviso en una conversación nueva",
      "Seleccionar el segundo párrafo arrastrando el ratón y escribir “más corto”",
      "No se puede corregir, así que solo se arregla después de exportarlo a Google Docs",
    ],
    explain: "En Canvas, seleccionas con el ratón la parte que quieres cambiar y escribes qué cambiar, y solo se corrige esa parte. Lo que cambias se guarda solo y puedes volver a versiones anteriores.",
  },
  "ch304-canvas-safety": {
    prompt: "Abres un enlace de una aplicación de Canvas que te mandó un desconocido y te dice «Introduce la contraseña para iniciar sesión». ¿Qué haces?",
    choices: [
      "No escribes la contraseña y, si parece peligrosa, la denuncias con el enlace de abajo",
      "Como es una aplicación creada dentro de Gemini, es segura y la escribes",
      "Si la abres desde la aplicación del móvil es segura, así que la abres de nuevo desde el móvil",
      "En lugar de la contraseña, pones el número de tu tarjeta",
    ],
    explain: "Google recomienda tener muchísimo cuidado con las aplicaciones que piden contraseñas o datos de pago. Una aplicación de Canvas que te parezca peligrosa se puede denunciar con el enlace de la parte inferior de la página.",
  },
  "ch304-image": {
    prompt: "Escribiste solo “dibujo de un gato” y no salió la imagen que querías. ¿Cuál es una petición mejor?",
    choices: [
      "Enviar “gato” otra vez",
      "Decir “dibuja cualquier gato”",
      "Decir solo “quiero una foto y no un dibujo”, sin explicar nada más sobre la escena ni el estilo",
      "Describir estilo y escena: “gato naranja dormitando junto a la ventana, en acuarela”",
    ],
    explain: "La ayuda recomienda empezar con “dibuja” o “crea” y describir con detalle el estilo, el tema, la acción y el fondo. Así tendrás que pedir menos veces que lo dibuje de nuevo.",
  },
  "ch304-media": {
    prompt: "Un amigo con cuenta gratuita de Gemini quiere probar «Crear vídeo». ¿Qué afirmación es correcta?",
    choices: [
      "Crear vídeos funciona igual en las cuentas gratuitas",
      "En una cuenta personal hace falta un plan de Google AI para crear vídeos",
      "El vídeo sale al momento, así que puedes seguir preguntando enseguida en la misma conversación",
      "Los vídeos casi no gastan uso",
    ],
    explain: "Crear vídeo (Gemini Omni) solo se puede usar en una cuenta personal con un plan de Google AI. Tarda unos minutos y es lo que más uso gasta entre imágenes, música y vídeo.",
  },
  "ch304-verify": {
    prompt: "Subiste a Gemini una foto que te enviaron y preguntaste “¿está hecha con IA?”. Responde que no tiene la marca oculta de Google (SynthID). ¿Cómo debes entenderlo?",
    choices: [
      "Que seguro que la hizo una persona",
      "Que Gemini está roto y no vuelves a preguntar",
      "Solo significa que no se hizo con la IA de Google; pudo hacerse con otra IA",
      "Que, al no haber marca oculta, ninguna IA de ningún tipo puede haber creado la imagen",
    ],
    explain: "Gemini solo reconoce lo que se ha hecho con la IA de Google. Si no hay marca, significa que no se creó ni se retocó con la IA de Google, y pudo crearse con otra IA.",
  },
  "ch305-overview": {
    prompt: "Alguien usa Gemini con una cuenta de Google de la empresa (cuenta de trabajo) y busca funciones de personalización como la memoria o las instrucciones. ¿Qué afirmación es correcta?",
    choices: [
      "Solo funcionan con una cuenta personal de Google, no con una de empresa",
      "Las funciones de personalización solo se abren en cuentas de empresa",
      "Con un plan de pago funcionan seguro también en cuentas de empresa",
      "Las funciones de personalización solo se activan desde la aplicación del móvil",
    ],
    explain: "Las funciones de personalización, como la memoria, las aplicaciones conectadas y las instrucciones, requieren iniciar sesión con una cuenta personal de Google. No funcionan con cuentas de trabajo o de centros educativos, ni con cuentas gestionadas por un tutor.",
  },
  "ch305-memory": {
    prompt: "Gemini sigue recordando y usando en sus respuestas tu antigua dirección, que mencionaste en una conversación anterior. ¿Cómo borras ese recuerdo?",
    choices: [
      "Basta con decir una sola vez “olvida mi dirección antigua” y se borra seguro del todo, sin más pasos",
      "Se borra si activas y desactivas una vez el chat temporal",
      "Borrando de la «Actividad en las aplicaciones de Gemini» las conversaciones con esa dirección",
      "Cambiando el modelo a Flash, el recuerdo desaparece",
    ],
    explain: "Para borrar lo que Gemini ha recordado, hay que borrar todas las conversaciones que contienen esa información. Una instrucción como “olvídalo” no siempre se cumple.",
  },
  "ch305-instructions": {
    prompt: "Alguien que usa Gemini en Corea se cansa de repetir cada vez “empieza todas las respuestas con un resumen corto”. ¿Qué puede hacer?",
    choices: [
      "En Corea no existe ningún ajuste así, así que lo repite cada vez",
      "Escribirlo en inglés en la pantalla del resumen de memoria",
      "Pulsar «Volver a generar» en cada conversación",
      "Añadir esa frase como instrucción en «Peticiones para Gemini»",
    ],
    explain: "Las instrucciones («Peticiones para Gemini») las puede añadir cualquier usuario y se aplican también en conversaciones nuevas sin tener que repetirlas. Hacer que recuerde conversando y el resumen de memoria son solo para Estados Unidos.",
  },
  "ch305-import": {
    prompt: "Vas a importar a Gemini un ZIP con conversaciones exportadas de ChatGPT. ¿Qué debes saber antes de importarlo?",
    choices: [
      "Las conversaciones importadas no se guardan en ningún sitio, desaparecen al momento y no se usan para nada más",
      "Se guardan en tu actividad y se usan para mejorar servicios de Google, como entrenar modelos de IA",
      "Puedes subir los que quieras al día, sin límite",
      "Solo se pueden importar desde cuentas de trabajo o de centros educativos",
    ],
    explain: "Las conversaciones que importas y continúas se guardan en tu actividad y se usan para mejorar los servicios, incluido el entrenamiento de modelos de IA generativa. Se admiten 5 ZIP al día, de hasta 5 GB, y solo con cuentas personales.",
  },
  "ch306-check": {
    prompt: "Gemini dijo: “el índice de lectura de los adultos coreanos ha subido mucho respecto al año pasado”. ¿Qué haces antes de usarlo en un material de reunión?",
    choices: [
      "Usarlo tal cual, porque Gemini lo dijo con seguridad",
      "Abrir «Fuentes» o usar la Búsqueda de Google para comprobar la cifra con el original",
      "Hacer la misma pregunta otra vez y usarlo si sale la misma respuesta que antes en el chat",
      "Añadir al final de la respuesta solo “texto escrito por IA”",
    ],
    explain: "Google recomienda valorar siempre las respuestas y volver a comprobar los hechos con las herramientas integradas o con la Búsqueda de Google. Comprueba tú que las cifras y las fechas coinciden con el original.",
  },
  "ch306-deep": {
    prompt: "Vas a encargar una investigación con Deep Research y quieres añadir la condición “usa solo estadísticas oficiales”. ¿Cuándo y cómo se hace?",
    choices: [
      "Solo se puede corregir cuando el informe ya está terminado",
      "En Deep Research no se pueden cambiar las condiciones",
      "Cuando sale el plan, pulsas enseguida «Editar plan» y añades la condición",
      "Si pulsas «Iniciar investigación» varias veces, se incluye la condición que quieras",
    ],
    explain: "Deep Research te muestra primero un plan antes de investigar. Cuando salga, edítalo enseguida con «Editar plan» y luego pulsa «Iniciar investigación».",
  },
  "ch306-notebook": {
    prompt: "En el cuaderno «Club de lectura» metiste como fuentes unas actas de reunión y un calendario. Si borras ese cuaderno, ¿qué pasa con las fuentes y las conversaciones que metiste?",
    choices: [
      "También se borran las fuentes y las conversaciones que había dentro",
      "Solo se borra el nombre del cuaderno, y lo que había dentro se queda igual",
      "Las fuentes se quedan y solo se borran las conversaciones",
      "El cuaderno no se puede borrar",
    ],
    explain: "Si borras un cuaderno, también se borran las fuentes y las conversaciones que metiste en él. Guarda aparte, fuera del cuaderno, el material que vayas a seguir usando.",
  },
  "ch306-study": {
    prompt: "Vas a pedirle a Gemini que haga un cuestionario para estudiar un examen. ¿Qué forma de pedirlo recomienda la ayuda?",
    choices: [
      "Pedir solo “ayúdame a estudiar”, sin tema",
      "Subir solo la foto del libro de texto sin decir nada más sobre lo que quieres obtener",
      "Decir primero “dame solo las respuestas correctas”",
      "Decir primero qué quieres crear, como “hazme un cuestionario”, y luego el tema",
    ],
    explain: "La ayuda indica que digas primero qué quieres que cree y después escribas el material o el tema que vas a estudiar. Al terminar, también te dice tus puntos fuertes y qué te falta por estudiar.",
  },
  "ch307-skill": {
    prompt: "Cada semana pides con un texto largo que ordene el acta de la reunión con el mismo formato. ¿Qué usas para guardar esa petición y llamarla desde cualquier chat?",
    choices: [
      "Un chat temporal",
      "Una skill: escribes / en el cuadro de entrada y la eliges",
      "Un enlace para compartir la conversación con otras personas de mi equipo",
      "Deep Research",
    ],
    explain: "Una skill es una instrucción guardada que se crea una vez y se reutiliza en cualquier chat. Escribes / (pronto @) en el cuadro de entrada y la eliges. Funciona sin plan de pago.",
  },
  "ch307-write": {
    prompt: "Creaste una skill, pero en el momento en que hace falta Gemini casi no la usa. ¿Qué es lo primero que debes retocar?",
    choices: [
      "El nombre y la descripción de la skill, diciendo qué hace y cuándo se usa",
      "Alargar las instrucciones hasta triplicar su extensión actual con más detalles",
      "Crear otra skill exactamente igual",
      "Cambiar de modelo",
    ],
    explain: "Gemini decide si usa una skill mirando primero solo su nombre y su descripción. El nombre debe empezar por lo que hace, y la descripción debe decir cuándo se usa. Las instrucciones, cortas y solo con lo esencial.",
  },
  "ch307-gems": {
    prompt: "Con una cuenta personal (25 años) usas un Gem que te gusta mucho. ¿Qué pasará con ese Gem pasado el 17 de diciembre de 2026?",
    choices: [
      "Se podrá seguir usando igual",
      "Si te pasas a un plan de pago, podrás seguir usándolo sin ningún problema",
      "Los Gems desaparecen y se recrean automáticamente como skills",
      "El Gem y sus archivos se borran sin dejar rastro",
    ],
    explain: "El 17 de noviembre los Gems pasan a ser de solo lectura y el 17 de diciembre desaparecen. Al desaparecer se convierten automáticamente en skills, pero algunos archivos pueden quedar fuera, así que descarga antes los archivos de «Conocimiento».",
  },
  "ch307-apps": {
    prompt: "Conectaste Google Workspace y quieres un resumen de un documento de Drive. ¿Qué pregunta funciona mejor?",
    choices: [
      "Pegar solo la dirección (URL) del documento y escribir “resúmelo”, sin añadir ninguna otra explicación",
      "“Resume cualquiera de mis archivos”",
      "Escribir solo “este documento”, sin el nombre de la aplicación",
      "“Busca en Drive el documento «Estatutos del club» y resume solo las normas de la cuota”",
    ],
    explain: "La ayuda recomienda no pegar la dirección del documento o del correo, sino escribir palabras del contenido y el nombre de la aplicación. En cada conversación nueva, di también en qué aplicación debe buscar.",
  },
  "ch307-privacy": {
    prompt: "Conectaste Gmail a Gemini y luego lo desconectaste. ¿Qué pasa con el historial de las conversaciones que tuviste mientras tanto?",
    choices: [
      "El historial de la «Actividad en las aplicaciones de Gemini» sigue ahí y hay que borrarlo aparte",
      "Al desconectar, todas las conversaciones relacionadas se borran solas",
      "También se borran los correos de Gmail",
      "Las conversaciones se quedan, pero se bloquean para que no las puedan ver los revisores humanos de Google",
    ],
    explain: "Aunque desconectes la aplicación o borres sus datos, el historial de la «Actividad en las aplicaciones de Gemini» no se borra. Hay que borrarlo aparte. Con aplicaciones que contienen información confidencial, es más seguro no conectarlas desde el principio.",
  },
  "ch308-task": {
    prompt: "Una persona con cuenta gratuita quiere encargar a «Tareas», bajo el cuadro de entrada, que ordene su bandeja de entrada. ¿Qué pasa?",
    choices: [
      "Las cuentas gratuitas también pueden usarlo, hasta 3 veces al día como máximo",
      "Cualquiera puede usarlo con solo iniciar sesión",
      "Las tareas solo se pueden usar con una suscripción a Google AI Pro o Ultra",
      "En la aplicación del móvil se puede usar gratis",
    ],
    explain: "Las tareas necesitan tener 18 años o más, una cuenta personal, una suscripción a Google AI Pro o Ultra, «Conservar actividad» y «Inteligencia personal».",
  },
  "ch308-schedule": {
    prompt: "Quieres programar “avísame en cuanto salgan a la venta entradas para el concierto” como una programación (vigilancia). ¿Qué afirmación es correcta según la ayuda?",
    choices: [
      "Una programación se ejecuta con precisión de segundos, así que es lo más adecuado",
      "No es adecuada para algo muy urgente, porque la hora de ejecución es aproximada",
      "Las programaciones de chat son ilimitadas, así que puedes crear varias",
      "Las programaciones solo se pueden crear desde Gmail",
    ],
    explain: "Las programaciones de vigilancia no son adecuadas para información que cambia rápido o para algo muy urgente, y la hora de ejecución es aproximada. Puedes tener activas hasta 10 programaciones de chat y 50 de tareas.",
  },
  "ch308-permission": {
    prompt: "Durante una tarea, Gemini te pregunta “¿puedo acceder a este sitio web?”. Es la primera vez que le encargas algo y quieres ir con cuidado. ¿Qué respuesta es la más adecuada?",
    choices: [
      "«Permitir una vez»: autorizas solo este paso",
      "«Permitir siempre»: para que no vuelva a preguntar nunca más",
      "Pasar la pantalla de permiso sin leerla",
      "Escribir tus datos de inicio de sesión en la conversación y permitir",
    ],
    explain: "«Permitir una vez» autoriza solo este paso. «Permitir siempre» autoriza esa acción en todas las conversaciones de tareas futuras y además cambia los ajustes. No escribas datos de inicio de sesión en la conversación: introdúcelos tú en la propia página web.",
  },
  "ch308-safety": {
    prompt: "Se dice que una tarea, al leer un correo, puede caer en el engaño de una frase oculta en él y hacer algo que no debe. ¿Cómo se llama este tipo de ataque?",
    choices: [
      "Alucinación",
      "Enlace de phishing",
      "Eliminación automática",
      "Inyección de prompts",
    ],
    explain: "Esconder en una página web o en un correo instrucciones para engañar a la IA se llama inyección de prompts. Aunque haya medidas de seguridad, no evitan todos los riesgos, así que vigila cómo se ejecuta la tarea.",
  },
  "ch308-chrome": {
    prompt: "Un adulto que vive en Corea quiere usar Gemini en Chrome en el ordenador. ¿Qué afirmación es correcta?",
    choices: [
      "Gemini en Chrome solo se puede usar en Estados Unidos, y en ningún otro país del mundo por el momento",
      "Solo se puede usar en modo incógnito",
      "Con 18 años o más también en Corea (por fases); la navegación automática, solo en Estados Unidos",
      "Solo se puede enviar una pestaña cada vez",
    ],
    explain: "Corea figura entre las regiones compatibles de Gemini en Chrome para mayores de 18 años. Hay que iniciar sesión en la última versión de Chrome del ordenador, y no funciona en modo incógnito. Todavía no se ha abierto a todo el mundo, así que puede que no lo veas.",
  },
  "ch309-saved": {
    prompt: "Te preguntas si el contenido de tus chats con Gemini se usa para publicidad. ¿Qué explica Google?",
    choices: [
      "Con el contenido de los chats te muestra anuncios personalizados",
      "Solo los planes de pago quedan fuera de la publicidad",
      "Hay que desactivar aparte el ajuste de anuncios para que no se use el contenido",
      "No usa los chats para mostrar anuncios; avisará con claridad si cambia",
    ],
    explain: "Google dice que no usa los chats de Gemini para mostrar anuncios y que avisará con claridad si eso cambia. Pero sí recoge siempre los datos de ubicación para dar las respuestas.",
  },
  "ch309-review": {
    prompt: "Quieres que tus conversaciones futuras no se usen para mejorar servicios, como el entrenamiento de IA. ¿Qué haces?",
    choices: [
      "Desactivar «Conservar actividad»",
      "Pulsar a menudo «Me gusta» y «No me gusta»",
      "Escribir en cada conversación “no lo uses para entrenar”",
      "Pasarte a un plan de pago",
    ],
    explain: "Si desactivas «Conservar actividad», tus conversaciones futuras no se revisan para mejorar los servicios. Aun así, se usan para darte la respuesta y proteger al usuario, y si envías comentarios, esa conversación se usa para mejorar.",
  },
  "ch309-activity": {
    prompt: "Desactivaste «Conservar actividad». ¿Cuánto tiempo se guardan en la cuenta las conversaciones que tengas después?",
    choices: [
      "No se guardan en absoluto",
      "72 horas",
      "18 meses",
      "3 años",
    ],
    explain: "Aunque esté desactivado, las conversaciones se guardan 72 horas en la cuenta para prestar el servicio y protegerte. Si está activado, por defecto se borran solas a los 18 meses.",
  },
  "ch309-delete": {
    prompt: "Borraste de la «Actividad en las aplicaciones de Gemini» una conversación que habías compartido con un enlace público. ¿Qué pasa con ese enlace?",
    choices: [
      "Al borrar la conversación, el enlace también se borra",
      "El enlace se borra solo a los 30 días",
      "El enlace público se queda aunque borres la conversación; hay que borrarlo aparte",
      "A quien abra el enlace le llega un aviso de que la conversación se ha eliminado del todo",
    ],
    explain: "Aunque borres la conversación compartida, el enlace público no se borra. Bórralo aparte en «Configuración» → «Mis enlaces públicos». Las conversaciones que una persona ya revisó tampoco se borran y se conservan hasta 3 años.",
  },
  "ch309-rules": {
    prompt: "Vas a subir los resultados de un chequeo médico y preguntar “con estos valores, ¿puedo dejar la medicación?”. ¿Qué actitud es acorde con la ayuda de Google?",
    choices: [
      "Dejar la medicación según el juicio de Gemini",
      "Usarlo como referencia, pero lo del diagnóstico y el tratamiento se lo consultas al médico",
      "Con un modelo de pago puedes confiar en él en lugar de ir al médico, porque es mucho más fiable",
      "Preguntar varias veces y fiarte si sale la misma respuesta",
    ],
    explain: "Google pide no depender de Gemini para el diagnóstico, el tratamiento o los consejos médicos, ni para ayuda profesional como la jurídica o la financiera. Las respuestas son solo información de referencia, y pueden afirmar como hechos cosas erróneas.",
  },
  "ch310-voice": {
    prompt: "Pulsas el micrófono en la aplicación de Gemini del móvil y estás pensando la pregunta. ¿Cuánto tiempo puede estar abierto el micrófono como máximo?",
    choices: [
      "10 segundos",
      "30 segundos",
      "5 minutos como máximo",
      "Todo el rato, hasta que lo apagues",
    ],
    explain: "El micrófono de la aplicación del móvil está abierto un máximo de 5 minutos para escuchar tu pregunta.",
  },
  "ch310-live": {
    prompt: "Practicabas una presentación con Gemini Live y pulsaste «Finalizar». ¿Qué pasa con esa conversación?",
    choices: [
      "La misma conversación sigue como chat de texto, sin crear un chat nuevo",
      "La conversación se borra de inmediato",
      "Solo queda el archivo de grabación y no hay ningún registro escrito de lo que se habló",
      "Para volver a usar Live hay que crear un chat nuevo",
    ],
    explain: "Al pulsar «Finalizar», la misma conversación continúa como chat de texto, y si pulsas «Live» otra vez, vuelve a la voz. Para pausar un momento se usa «En espera».",
  },
  "ch310-mobile": {
    prompt: "Vas a compartir la pantalla del móvil durante Live. ¿Qué debes comprobar antes de compartir?",
    choices: [
      "El brillo de la pantalla",
      "Que la batería esté por encima del 50 % para no quedarte sin carga mientras compartes",
      "Que la pantalla esté en horizontal",
      "Que no se vean contraseñas, datos de pago ni mensajes de otras personas",
    ],
    explain: "Al compartir pantalla, Gemini ve toda la pantalla del móvil. Antes de compartir, comprueba que no haya nada que no deba verse. Si vas a grabar a otras personas, pídeles permiso primero.",
  },
  "ch310-desktop": {
    prompt: "Instalaste la aplicación de Gemini en un ordenador con Windows. ¿Con qué atajo de teclado la puedes llamar al momento?",
    choices: [
      "Alt + Espacio",
      "Ctrl + C",
      "Option + Espacio",
      "Tecla Windows + L",
    ],
    explain: "La aplicación de Windows se llama con Alt + Espacio. En la aplicación de Mac es Option + Espacio.",
  },
  "ch311-how": {
    prompt: "Estás haciendo conversaciones de práctica para las tareas. ¿Por qué se dice que no pulses «Me gusta» ni «No me gusta»?",
    choices: [
      "Porque al pulsar se reduce tu límite de uso",
      "Porque, con comentarios, la conversación se usa para mejorar aunque no guardes actividad",
      "Porque al pulsar la conversación se hace pública y la puede ver cualquiera que tenga el enlace",
      "Porque al pulsar cambia la respuesta",
    ],
    explain: "Si envías comentarios, esos comentarios y la conversación relacionada se usan para mejorar el servicio aunque hayas desactivado el historial. Las conversaciones de práctica se hacen con la idea de borrarlas, así que no dejes ninguna vía para que se conserven.",
  },
  "ch311-check": {
    prompt: "Al terminar la práctica, desconectaste Gmail. ¿Qué más debes hacer para dejar limpio?",
    choices: [
      "Nada más: al desconectar se borra todo, incluido el historial de las conversaciones",
      "Crear una cuenta de Google nueva",
      "Borrar también las conversaciones de práctica, porque el historial se queda",
      "Reinstalar el navegador",
    ],
    explain: "Aunque desconectes las aplicaciones conectadas, el historial de conversaciones de la «Actividad en las aplicaciones de Gemini» se queda. Limpia también las conversaciones de práctica, los enlaces públicos y las instrucciones, skills y programaciones de práctica.",
  },
  "ch312-tools": {
    prompt: "Quieres encargar algo como “pule el aviso del club de lectura de la semana que viene”. ¿Qué función conviene usar primero?",
    choices: [
      "Deep Research",
      "Tareas + programación diaria",
      "Conectar Gmail y Drive",
      "La conversación normal",
    ],
    explain: "Para la mayoría de los trabajos basta con la conversación normal. Deep Research y las tareas gastan mucho uso, y las aplicaciones conectadas y las tareas ceden más datos tuyos, así que úsalos solo cuando haga falta de verdad.",
  },
  "ch312-layers": {
    prompt: "En todas las conversaciones pides siempre “pon al principio de la respuesta un resumen de una línea”. ¿Dónde conviene escribirlo?",
    choices: [
      "En las instrucciones de «Peticiones para Gemini», donde van las reglas fijas",
      "En el material del cuaderno",
      "En la programación de las tareas, que se ejecutan en horas fijas cada día de la semana",
      "En un enlace público",
    ],
    explain: "Si le haces la misma petición en todas las conversaciones, escríbela en las instrucciones. Los pasos que solo usas en una situación concreta se acumulan en una skill, y lo que haces en momentos fijos, en una programación.",
  },
  "ch312-data": {
    prompt: "Subiste la tabla de ventas de tu tienda y le pediste que calculara los totales por producto. ¿Cuál es una buena forma de comprobar si te puedes fiar del resultado?",
    choices: [
      "Fiarte si la respuesta es larga y detallada",
      "Probarlo antes con datos antiguos de los que ya sabes el total, y pedirle el método",
      "Fiarte si, al repetir la pregunta, sale la misma respuesta aunque no sepas cómo la calculó",
      "Fiarte si el gráfico es bonito",
    ],
    explain: "Si primero lo contrastas con datos cuya respuesta conoces, podrás fiarte más cuando le encargues datos nuevos. Si le pides que escriba el método de cálculo, es más fácil encontrar dónde se equivocó, y los cálculos importantes se comprueban de nuevo en una hoja de cálculo.",
  },
  "ch312-check": {
    prompt: "¿Qué criterio recomienda esta guía para decidir cuánto comprobar?",
    choices: [
      "Comprobar todas las respuestas con el mismo cuidado, sean del tema que sean",
      "No comprobar las respuestas de los modelos de pago",
      "Comprobar con más cuidado cuanto más se pierde si hay un error",
      "No comprobar las respuestas que traen fuentes",
    ],
    explain: "Se comprueba según lo que pese el asunto. Lo ligero, como el menú de la cena, se mira por encima, y lo pesado, como un contrato, la salud o el dinero, se comprueba abriendo las fuentes y consultando a un profesional.",
  },
}
