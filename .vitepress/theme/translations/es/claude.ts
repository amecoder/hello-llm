// es text for claude (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const CLAUDE: Record<string, QuestionText> = {
  "ch201-where": {
    prompt: "Tu sobrina de bachillerato quiere usar Claude para los deberes y te pide ayuda para registrarse. ¿Qué es lo primero que debes comprobar?",
    choices: [
      "Que tenga 18 años o más, la edad mínima para usarlo",
      "Que instale la aplicación de ordenador",
      "Que descargue la aplicación del móvil, porque solo se registra desde ahí",
      "Que no hay condición de región y se puede registrar desde cualquier sitio",
    ],
    explain: "Para usar Claude hay que tener 18 años o más y estar en una región compatible (Corea incluida). Si se cumplen las condiciones, lo más fácil es empezar en la web, donde no hay nada que instalar.",
  },
  "ch201-login": {
    prompt: "Quieres iniciar sesión en Claude con tu correo, pero no hay ningún campo para la contraseña. ¿Qué haces?",
    choices: [
      "Llamar a atención al cliente para que te den una contraseña nueva para entrar",
      "Pulsar el enlace de inicio de sesión que Claude te manda por correo",
      "Crear primero una contraseña propia para Claude",
      "Probar a crear otra cuenta con un correo distinto",
    ],
    explain: "Claude no tiene contraseña propia de la cuenta. Si entras con el correo, te llega un mensaje con un enlace de inicio de sesión y solo tienes que pulsarlo. Si no lo ves, mira en la carpeta de spam.",
  },
  "ch201-phone": {
    prompt: "Al registrarte aparece la verificación por SMS. Piensas pedir prestado un momento el móvil de un familiar para verificar. ¿Qué conviene hacer?",
    choices: [
      "Verificar con el número prestado y cambiarlo luego por el mío cuando termine",
      "Saltarme la verificación y terminar primero el registro",
      "Verificar con el número de mi propio móvil, que voy a usar mucho tiempo",
      "Crear un número de telefonía por internet y verificar con él",
    ],
    explain: "Un número que ya has verificado no se puede cambiar después. Este paso no se puede omitir, y tampoco sirven los números de telefonía por internet ni los fijos. Verifica con tu número, el que vas a usar mucho tiempo.",
  },
  "ch201-plans": {
    prompt: "Estás probando Claude gratis y dudas si pasarte a un plan de pago. ¿Qué conviene hacer primero?",
    choices: [
      "Comprar ya el plan Max, el más caro, con pago anual",
      "Esperar a una oferta, porque siempre hay descuentos",
      "Como el precio ya lleva impuestos, preparar solo el importe de la página de precios",
      "Mirar primero qué incluye el plan gratuito y ver si te falta algo",
    ],
    explain: "Lo que incluye el plan gratuito se ve en Configuración → «Facturación». Piensa en un plan de pago cuando necesites una función que no está en esa lista. Max solo se paga mensualmente, y los precios de la página de precios no incluyen impuestos.",
  },
  "ch201-limits": {
    prompt: "Usas Claude todos los días para el trabajo de tu tienda y a menudo llegas al límite de uso. ¿Qué conviene probar primero?",
    choices: [
      "Agrupar las preguntas relacionadas en un solo mensaje",
      "Pasarte a la aplicación del móvil para tener un límite nuevo",
      "Seguir con una sola conversación aunque cambie el tema",
      "Trocear la misma pregunta y enviarla varias veces",
    ],
    explain: "Gastas menos si preguntas todo de una vez que si lo haces en tres mensajes. El uso de la web y de las aplicaciones se cuenta junto, y las conversaciones largas gastan más, así que abre una nueva cuando cambie el tema.",
  },
  "ch201-billing": {
    prompt: "Te suscribiste a Pro desde la aplicación del móvil y quieres dejar de usarlo. ¿Cuál es el método correcto?",
    choices: [
      "Basta con borrar la aplicación del móvil para que la suscripción termine",
      "Cancelar antes del cobro desde «Facturación» → «Gestionar suscripción»",
      "Llamar a atención al cliente el día siguiente a la fecha de cobro",
      "Registrarte de nuevo con otro correo, y la suscripción anterior se detiene sola",
    ],
    explain: "La cancelación se hace en el sitio donde te suscribiste, hasta 24 horas antes de la fecha de cobro. Aunque borres la aplicación, la suscripción sigue, y no hay atención telefónica.",
  },
  "ch201-trouble": {
    prompt: "Te sale el mensaje «Debido a una restricción inesperada de capacidad…». ¿Qué haces?",
    choices: [
      "La cuenta está bloqueada, así que pruebas a registrarte de nuevo con otro correo",
      "Has agotado el límite del plan, así que pagas enseguida",
      "El servicio está roto, así que llamas al centro de atención",
      "Hay mucha gente conectada, así que lo intentas de nuevo en unos minutos",
    ],
    explain: "Este mensaje no indica una avería, sino que hay mucha gente conectada. Inténtalo otra vez en unos minutos. Las averías reales se consultan en status.claude.com.",
  },
  "ch202-new-screen": {
    prompt: "En el cuadro de entrada ves que puedes elegir entre «Chat» y «Cowork». ¿Qué significa?",
    choices: [
      "Que todavía no te ha llegado la pantalla nueva y tienes la antigua",
      "Que ya tienes la pantalla nueva",
      "Que estás usando el plan gratuito",
      "Que desactivaste la pantalla nueva a propósito en la configuración de la cuenta",
    ],
    explain: "En la pantalla nueva, el chat y Cowork están unidos y no se elige un modo. Si ves esa opción, todavía tienes la pantalla antigua y cambiará sola cuando te toque.",
  },
  "ch202-sidebar": {
    prompt: "La pantalla es estrecha y te molesta el menú lateral izquierdo (la barra lateral), pero a veces tienes que buscar conversaciones anteriores. ¿Qué haces?",
    choices: [
      "Entrar en Configuración y desactivar el menú lateral del todo",
      "Dejarlo cerrado normalmente y abrirlo cuando busques una conversación anterior",
      "Buscar las conversaciones anteriores solo desde la aplicación del móvil, no desde la web",
      "Renunciar a las conversaciones anteriores y abrir siempre una nueva",
    ],
    explain: "El menú lateral no se puede apagar del todo; solo se abre y se cierra. Si la pantalla es estrecha, déjalo cerrado y ábrelo cuando busques una conversación anterior.",
  },
  "ch202-plus": {
    prompt: "Quieres ver más funciones del cuadro de entrada, como subir archivos. ¿Qué haces?",
    choices: [
      "Mantener pulsado el botón de enviar para abrir un menú oculto",
      "Entrar en la pantalla «General» de Configuración",
      "Pulsar «+» en el cuadro de entrada o escribir «/»",
      "Elegir «Máximo» en el esfuerzo del menú de modelos",
    ],
    explain: "Si pulsas «+», abajo a la izquierda del cuadro de entrada, o escribes «/», aparecen funciones como subir archivos o investigar, y también comandos.",
  },
  "ch202-model-menu": {
    prompt: "Vas a pedirle que analice con detalle un contrato largo. ¿Cómo te conviene manejar el esfuerzo (Effort), que decide cuánto trabajo pone en cada respuesta?",
    choices: [
      "Bajar el esfuerzo, porque así la respuesta sale más minuciosa",
      "Cambiar el esfuerzo y abrir una conversación nueva para que se aplique",
      "Subir el esfuerzo, sabiendo que irá más lento y gastará más límite",
      "Dejarlo siempre en «Máximo», incluso para preguntas del día a día",
    ],
    explain: "Para trabajos difíciles, como analizar un documento largo, sube el esfuerzo. La respuesta será más minuciosa, pero más lenta y llegarás antes al límite. El cambio se aplica desde la siguiente respuesta de la misma conversación, y para lo cotidiano basta con el valor por defecto.",
  },
  "ch202-fallback": {
    prompt: "Hiciste una pregunta normal, pero la comprobación de seguridad la detectó y apareció el aviso «el modelo ha cambiado». Si crees que fue un error, ¿qué haces?",
    choices: [
      "Crear una cuenta nueva, porque la tuya se va a suspender enseguida",
      "Abrir la pantalla de pago, porque te han bajado de plan",
      "Esperar a que se arregle, porque es una avería del servicio",
      "Avisar con «Enviar comentarios» de que se detectó por error",
    ],
    explain: "Algunos modelos revisan las preguntas automáticamente por seguridad y, si tocan un ámbito de riesgo concreto, las pasan a otro modelo. Si crees que fue un error, avisa con «Enviar comentarios». Si no quieres el cambio automático, puedes desactivarlo en Configuración → «Funciones».",
  },
  "ch202-settings": {
    prompt: "La pantalla de Claude de tus padres está en inglés, pero ellos quieren preguntar en coreano. ¿Qué les indicas?",
    choices: [
      "Que, aunque la pantalla esté en inglés, pueden preguntar en coreano",
      "Que hasta que cambien la pantalla solo pueden preguntar en inglés",
      "Que añadan a cada pregunta una traducción al inglés",
      "Que las respuestas en coreano solo funcionan en la aplicación del móvil",
    ],
    explain: "Claude responde en el idioma en que escribes, sea cual sea el idioma de la pantalla. Si también quieres cambiar el de la pantalla, pulsa tu nombre abajo a la izquierda y elígelo en «Idioma».",
  },
  "ch203-delete": {
    prompt: "La lista de conversaciones del menú lateral se ha hecho muy larga. Quieres quitar de la lista la conversación de un evento ya terminado, pero quizá la necesites el año que viene. ¿Qué haces?",
    choices: [
      "«Eliminarla» ahora y recuperarla el año que viene si hace falta",
      "Pulsar «⋯» junto a la conversación y elegir «Archivar» para apartarla",
      "Eliminarla igualmente, porque se queda 30 días en la lista",
      "Eliminarla, porque sigue en el servidor y podrás sacarla de allí más tarde",
    ],
    explain: "«Archivar» aparta la conversación de la lista, y no es lo mismo que borrarla. Una conversación eliminada desaparece de la lista al instante y se borra también del servidor en un máximo de 30 días; no se explica cómo recuperarla.",
  },
  "ch203-search": {
    prompt: "Con un plan de pago, abres una conversación nueva y escribes “busca la conversación de la semana pasada en la que pregunté por una función de Excel”. ¿Qué pasa?",
    choices: [
      "Claude busca entre las conversaciones anteriores y añade el enlace a la original",
      "Claude busca en internet una explicación de la función de Excel y te la muestra",
      "Dice que no puede ver las conversaciones anteriores y que la busques tú en la lista",
      "Muestra por fecha todas las conversaciones, incluidas las del chat incógnito",
    ],
    explain: "Con un plan de pago puedes pedirle a Claude que busque conversaciones anteriores. Mientras busca se muestra como llamada a una herramienta, y las conversaciones anteriores que usa en la respuesta aparecen con un enlace a la conversación original.",
  },
  "ch203-share": {
    prompt: "Compartiste una conversación invitando al correo de un amigo. Si tu amigo reenvía ese correo a otra persona, ¿qué pasa?",
    choices: [
      "La persona que lo recibe también puede abrir la conversación y seguir escribiendo",
      "La persona que lo recibe también puede abrir y ver la conversación, aunque no escribir",
      "La persona que lo recibe copia la conversación a su propia cuenta",
      "La persona que lo recibe no puede abrir la conversación con ese enlace",
    ],
    explain: "La invitación a una persona concreta solo se abre con el correo invitado. Aunque se reenvíe, nadie más puede abrirla. Y quien recibe la invitación solo puede ver la conversación.",
  },
  "ch203-public-link": {
    prompt: "Quieres enseñar una conversación sobre la salud de tu familia solo a un hermano o hermana. ¿Cuál es la mejor forma de compartirla?",
    choices: [
      "Enviar un enlace público solo a mi hermano",
      "Enviar un enlace público y desactivarlo en cuanto lo vea",
      "Invitar a mi hermano usando su correo electrónico",
      "Enviar un enlace público que no aparezca en las búsquedas",
    ],
    explain: "Un enlace público lo puede abrir cualquiera si quien lo recibe lo reenvía, y aunque lo desactives no puedes borrar las copias ya hechas. Para enseñárselo a una sola persona, invítala por su correo.",
  },
  "ch203-incognito": {
    prompt: "Preparaste una lista de regalos familiares en un chat incógnito y quieres verla más adelante. ¿Qué haces?",
    choices: [
      "Buscarla en la lista de conversaciones después de cerrarla",
      "Convertirla más tarde en una conversación normal para poder archivarla",
      "Moverla a un proyecto, así se queda para siempre",
      "Copiar las respuestas que necesites antes de cerrar la conversación",
    ],
    explain: "El chat incógnito no queda en la lista de conversaciones, no se puede convertir en una conversación normal y, una vez cerrado, no se puede volver a abrir. Copia las respuestas que quieras conservar antes de cerrarlo. Aunque no quede en el historial, se conserva 30 días por defecto, así que no metas contraseñas ni datos parecidos.",
  },
  "ch203-sessions": {
    prompt: "En la lista de dispositivos con la sesión iniciada ves uno que no conoces. ¿Qué conviene hacer?",
    choices: [
      "Dejarlo, porque se desconecta solo a los 28 días",
      "Pulsar «Cerrar sesión en todos los dispositivos» en la aplicación del móvil",
      "Esperar a ver si en ese dispositivo se crean conversaciones nuevas",
      "Pulsar «⋮» junto a ese dispositivo y elegir «Finalizar»",
    ],
    explain: "Un dispositivo desconocido se puede desconectar al momento con «⋮» → «Finalizar» a su lado. Cerrar la sesión en todos los dispositivos de una vez solo se puede en la web, no en la aplicación del móvil.",
  },
  "ch204-upload": {
    prompt: "Quieres subir un informe en PDF de 300 páginas para que te expliquen los gráficos que contiene. ¿Qué conviene hacer?",
    choices: [
      "Recortar y subir solo las páginas que tienen los gráficos",
      "Subir las 300 páginas, porque lee todo",
      "Pasarlo a Word y subirlo, porque así lee también las imágenes",
      "No se pueden subir PDF, así que haces una foto de cada página",
    ],
    explain: "Si el PDF tiene 100 páginas o menos, lee también imágenes y gráficos, pero a partir de la página 101 solo lee el texto. Si las imágenes importan, recorta y sube solo las páginas necesarias. Los documentos que no son PDF se leen solo como texto.",
  },
  "ch204-create": {
    prompt: "El archivo de Excel de cuentas del hogar que te ha creado Claude incluye los totales mensuales. ¿Qué debes hacer antes de usarlo?",
    choices: [
      "Usarlo tal cual, porque Claude ya ha calculado",
      "Sumar tú mismo unos cuantos totales para ver si son correctos",
      "Pasarte al plan de pago y descargarlo de nuevo, porque el gratuito no lo hace bien",
      "Pedirle que cree el mismo archivo varias veces y compararlos",
    ],
    explain: "Claude hace los cálculos, pero la ayuda recomienda volver a comprobar los cálculos complejos o importantes. Suma tú mismo al menos algunos totales. Crear archivos se puede en todos los planes, aunque suele gastar más uso que una conversación normal.",
  },
  "ch204-artifacts": {
    prompt: "Quieres corregir una sola frase de un aviso que creaste como artefacto. ¿Cuál es la forma más sencilla?",
    choices: [
      "Seleccionar ese texto y pulsar «Editar con Claude»",
      "Pedirle que rehaga el aviso desde cero",
      "Abrir una conversación nueva, pegar el aviso y corregirlo allí",
      "Solo se puede corregir después de exportarlo a Word",
    ],
    explain: "Seleccionas el texto que quieres cambiar, pulsas «Editar con Claude» y escribes lo que quieres; solo se corrige ese punto. No hace falta explicar con palabras de qué parte se trata.",
  },
  "ch204-share": {
    prompt: "Quieres enviarle a un amigo por enlace la página del evento que hiciste como artefacto. No sabes si tu amigo usa Claude. ¿Qué haces primero?",
    choices: [
      "Enviar solo el enlace, porque se abre sin cuenta",
      "Como se publica nada más crearla, solo le das la dirección",
      "Preguntarle antes a tu amigo si tiene cuenta de Claude",
      "Enviarlo tal cual, porque es igual que el enlace público de una conversación",
    ],
    explain: "Para abrir un artefacto compartido, quien lo abre también necesita una cuenta de Claude. Es distinto del enlace público de una conversación, que se abre sin cuenta. Un artefacto al principio solo lo ves tú, y no lo ve nadie hasta que eliges con quién en «Compartir».",
  },
  "ch204-visuals": {
    prompt: "Claude te dibujó un diagrama de flujo dentro de la conversación. ¿Qué haces para poder usarlo más adelante?",
    choices: [
      "Nada, porque se guarda solo",
      "Lo copias, lo descargas o lo guardas como artefacto",
      "Lo abres en la aplicación del móvil y se guarda",
      "Creas un enlace público de la conversación y se guarda",
    ],
    explain: "Los diagramas dibujados dentro de la conversación (visualizaciones personalizadas) son dibujos temporales que no se guardan. Para conservarlos, elige «Copiar como imagen», «Descargar» o «Guardar como artefacto».",
  },
  "ch204-images": {
    prompt: "¿Qué cosa no puedes recibir cuando se la pides a Claude?",
    choices: [
      "Una ilustración de un perro contento que sonríe en la playa",
      "Un gráfico de barras de las ventas de los últimos 6 meses",
      "Un diagrama de flujo con los pasos para hacer kimchi",
      "Una tabla ordenada a partir de la foto de un recibo que subes",
    ],
    explain: "Claude no crea fotos ni ilustraciones como las IA que dibujan. En cambio, sí crea diagramas y gráficos, y puede describir una foto que subas.",
  },
  "ch204-docs": {
    prompt: "Vas a eliminar un documento de plan de viaje que hiciste con Claude Docs, pero quizá lo necesites más adelante. ¿Qué haces?",
    choices: [
      "Lo eliminas y lo recuperas de la papelera",
      "Lo eliminas, porque queda una copia en la pestaña «Artefactos»",
      "Lo eliminas, porque sigue en poder de quien lo editaba contigo",
      "Antes de eliminarlo, descargas un archivo con «Exportar»",
    ],
    explain: "Un documento de Claude Docs eliminado no se puede recuperar y no hay papelera. Antes de borrarlo, expórtalo con «Exportar» a Word, PDF u otros formatos.",
  },
  "ch204-google": {
    prompt: "Le pediste a Claude que rellenara las casillas de totales dentro de una hoja de Google, pero cambió también otras casillas. ¿Qué haces?",
    choices: [
      "Volver a una versión anterior desde «Archivo > Historial de versiones»",
      "Rehacer la hoja desde cero, porque lo que se corrigió no queda registrado",
      "Pasar la hoja a un archivo de Excel y volver a abrir las casillas de Claude",
      "Pedirle a Claude que comparta la hoja con otra persona",
    ],
    explain: "Lo que Claude corrige queda en el historial de versiones a tu nombre. Vuelve a una versión anterior desde «Archivo > Historial de versiones». Al principio es más seguro usar el modo por defecto, «Preguntar antes de editar», y revisar los cambios uno a uno.",
  },
  "ch205-three-ways": {
    prompt: "Tienes una tienda de comida preparada y, en cada conversación nueva, escribes “responde de usted y empieza por la conclusión”. ¿Qué función te conviene?",
    choices: [
      "La memoria, que Claude guarda por su cuenta",
      "Las instrucciones, donde escribo yo mismo las reglas",
      "La consulta de chats anteriores, que se busca cuando preguntas",
      "El chat incógnito, que no deja registro",
    ],
    explain: "Las reglas que quieres que se cumplan siempre ponlas tú mismo en las instrucciones. La memoria la guarda Claude mientras conversáis, y la consulta de chats anteriores busca conversaciones pasadas cuando preguntas.",
  },
  "ch205-instructions": {
    prompt: "Quieres que en todas las conversaciones explique entre paréntesis las palabras difíciles. Además, tienes reglas que solo valen para redactar presupuestos. ¿Cómo las separas?",
    choices: [
      "Escribir las dos juntas en un solo sitio, en las instrucciones de la cuenta",
      "Escribir las dos a mano al principio de cada conversación nueva",
      "Las reglas comunes en las de la cuenta y las de presupuestos en las del proyecto",
      "Escribir solo las de presupuestos en las de la cuenta y no poner las comunes en ningún sitio",
    ],
    explain: "Las instrucciones de la cuenta se aplican a todas las conversaciones, y las del proyecto solo a los chats de ese proyecto. Las reglas que valen para un trabajo concreto es mejor ponerlas en las instrucciones del proyecto.",
  },
  "ch205-memory": {
    prompt: "Vas a decirle a Claude: “recuerda que mi número de cuenta bancaria es …”. ¿Qué te conviene hacer?",
    choices: [
      "Si dices «recuerda», lo usará solo a partir de entonces",
      "Con el interruptor de temas sensibles activado se puede hacer que lo guarde",
      "Se guarda un resumen al final de la conversación, así que lo escribes al final",
      "El número de cuenta no se guarda, así que no lo escribes",
    ],
    explain: "Cosas como el número de cuenta o de documento de identidad no se guardan aunque lo pidas. Eso no quiere decir que se pueda escribir en el chat: no lo metas desde el principio. La memoria se guarda por temas mientras conversas.",
  },
  "ch205-manage": {
    prompt: "Claude cree que todavía tienes una tienda de comida preparada, pero la cerraste el mes pasado. ¿Qué haces?",
    choices: [
      "Escribir en el chat: “ya no tengo el negocio, olvídalo”",
      "Borrar la conversación en la que se creó ese recuerdo, y el recuerdo desaparece",
      "Eliminar la cuenta y crear otra, que es la única forma de corregirlo",
      "Dejarlo así: los recuerdos no se pueden corregir",
    ],
    explain: "Si lo corriges en el chat, se refleja desde la siguiente conversación. También puedes editarlo o borrarlo tú desde la lista de «Configuración» → «Memoria». Aunque borres la conversación, la memoria creada en ella se queda.",
  },
  "ch205-off": {
    prompt: "Durante un tiempo no quieres que Claude use lo que sabe de ti, pero luego querrás reactivarlo y seguir. ¿Qué eliges?",
    choices: [
      "«Restablecer la memoria»",
      "Elegir «Pausar la memoria»",
      "Dejar vacío el campo «Instrucciones para Claude»",
      "Borrar todas las conversaciones anteriores",
    ],
    explain: "Pausar deja los recuerdos como están, sin usarlos ni crear otros nuevos. Restablecer borra para siempre todos los recuerdos, incluida la memoria de los proyectos, y no se puede deshacer.",
  },
  "ch205-past-chats": {
    prompt: "Con un plan de pago, tienes reunidas conversaciones en el proyecto «Menú nuevo». Quieres que Claude encuentre y continúe un texto promocional que hiciste allí. ¿Dónde preguntas?",
    choices: [
      "En cualquier conversación nueva fuera del proyecto",
      "En otro proyecto, porque lo encuentra solo",
      "En una conversación dentro del proyecto «Menú nuevo»",
      "Después de desactivar «Buscar y consultar chats» en la configuración",
    ],
    explain: "Las conversaciones de un proyecto solo se buscan dentro de ese proyecto. Si desactivas «Buscar y consultar chats», no busca conversaciones anteriores. Las conversaciones que consulta llevan un enlace a la original, así que púlsalo para comprobar que es la correcta.",
  },
  "ch205-import": {
    prompt: "Quieres pasar a Claude los recuerdos acumulados en otra IA, pero no quieres que pasen los que hablan de tu salud. ¿Qué haces?",
    choices: [
      "Importarlo todo y que Claude filtre",
      "Importarlo desde la aplicación del móvil, y así se quedan fuera los datos sensibles",
      "Meterlo todo, porque es una función experimental y no hay forma de excluir nada",
      "Quitar ese contenido antes de pegarlo para importar",
    ],
    explain: "Antes de importar puedes editar el prompt y quitar la información sensible. Lo que no quieras conservar es más seguro no meterlo desde el principio. Es una función experimental, así que al terminar comprueba qué se ha incluido.",
  },
  "ch205-wellbeing": {
    prompt: "Muchos días hablas con Claude hasta tarde por la noche y quieres vigilar tú mismo el tiempo que le dedicas. ¿Qué método es adecuado?",
    choices: [
      "Fijar avisos de descanso en «Tiempo y concentración»",
      "Seguir usándolo a propósito hasta llegar al límite de uso",
      "Activar los avisos de descanso y, después, se bloquea, así que me quedo tranquilo",
      "Bajar de plan para poder usarlo menos",
    ],
    explain: "Si fijas avisos de descanso en «Configuración» → «Tiempo y concentración», te sale un aviso cuando llevas ese tiempo. Es un aviso y no un bloqueo, así que puedes cerrarlo y seguir; además es independiente del límite de uso.",
  },
  "ch206-web-search": {
    prompt: "No ves en la pantalla el interruptor para activar la búsqueda web. ¿Qué haces para que busque sí o sí en internet el tiempo de este fin de semana?",
    choices: [
      "Cambiar el idioma de la pantalla a inglés en la configuración y preguntar",
      "Añadir a la pregunta “búscalo en la web” para forzarlo",
      "Pagar antes, porque solo busca con un plan de pago",
      "Cerrar sesión y volver a enviar la misma pregunta",
    ],
    explain: "Si quieres que busque sin falta, escribe “búscalo en la web” en el prompt. En la pantalla nueva no hay interruptor, y Claude busca por su cuenta cuando le resulta útil. La búsqueda web también funciona en el plan gratuito.",
  },
  "ch206-fetch": {
    prompt: "Pegas la dirección de un artículo largo y le pides que lo resuma entero. ¿Qué debes tener en cuenta?",
    choices: [
      "Al pegar la dirección, el artículo se borra del sitio original",
      "Al autor del artículo se le avisa de tu nombre automáticamente",
      "Lo resume, pero solo en inglés",
      "Lee la página entera y por eso gasta mucho uso",
    ],
    explain: "Si le das una dirección, Claude lee esa página (obtener de la web). Los textos largos gastan mucho uso, así que piensa antes si de verdad necesitas un análisis completo.",
  },
  "ch206-citations": {
    prompt: "Cuando la respuesta de una búsqueda web trae enlaces a las fuentes, ¿cuál es el mejor hábito?",
    choices: [
      "Abrir el enlace y comprobar que las cifras y las fechas están en el original",
      "Dar por buena la información porque hay enlace y copiarla tal cual en tu texto",
      "Contar los enlaces, porque cuantos más, más exacta es",
      "No pulsarlos y cerrarlos enseguida, porque son anuncios",
    ],
    explain: "Aunque haya citas, puede haber errores. Abre el enlace y comprueba que las cifras, las fechas y los nombres están tal cual en el original, y también cuándo y quién escribió el texto.",
  },
  "ch206-research": {
    prompt: "Vas a encargar con Research un informe que compare las comisiones de las aplicaciones de reparto. ¿Qué conviene hacer antes de enviarlo?",
    choices: [
      "Enviar solo algo corto, como “dime las aplicaciones de reparto”",
      "Dejar la búsqueda web desactivada y enviar solo con Research activado",
      "Incluir en la pregunta condiciones como presupuesto, zona y periodo",
      "Empezar desde el móvil y usar también las aplicaciones conectadas",
    ],
    explain: "Research tarda varios minutos, así que afina la pregunta antes de enviarla. Si añades condiciones como presupuesto, zona y periodo, es más fácil que encuentre material adaptado a tu caso. En la pantalla antigua la búsqueda web tiene que estar activada, y si empiezas desde el móvil solo busca en la web.",
  },
  "ch206-when": {
    prompt: "¿Qué función es la más adecuada para una pregunta como “¿quién ganó anoche el partido de béisbol?”?",
    choices: [
      "Research: reúne muchas fuentes y crea un informe largo",
      "Búsqueda web: con una o dos búsquedas sale la respuesta",
      "Pensamiento extendido: piensa mucho tiempo sin información reciente",
      "Memoria: recuerda lo que dije antes",
    ],
    explain: "Para una pregunta sencilla de un dato que sale con una o dos búsquedas, lo adecuado es la búsqueda web. Si hay que reunir muchas fuentes, usa Research, y si hay que razonar a fondo, el pensamiento extendido.",
  },
  "ch207-projects": {
    prompt: "Quieres que todas las conversaciones de un proyecto cumplan la regla “las tablas, con tres columnas”. ¿Dónde la escribes?",
    choices: [
      "En el nombre del proyecto",
      "En el campo de descripción del proyecto",
      "En las instrucciones del proyecto o en el conocimiento del proyecto",
      "Creando un proyecto nuevo para cada conversación que tengas con Claude",
    ],
    explain: "Las instrucciones y el conocimiento del proyecto se usan en todas las conversaciones de ese proyecto. Claude no lee el nombre ni la descripción del proyecto. Y aunque estén en el mismo proyecto, el contenido de una conversación no pasa entero a la siguiente.",
  },
  "ch207-connectors": {
    prompt: "Vas a probar por primera vez los conectores, que unen Claude con otras aplicaciones. ¿Qué forma de conectar es la más segura?",
    choices: [
      "Conectarlo todo, porque así verá hasta archivos de la empresa que antes no podía abrir",
      "Pasarte antes a un plan de pago, porque el gratuito no puede",
      "Meter solo agendas falsas, porque lo que conectes se usará para entrenar",
      "Conectar solo los servicios de confianza que necesites ahora para el trabajo",
    ],
    explain: "Al conectar, Claude puede leer e incluso cambiar datos dentro de los permisos de tu cuenta, así que conecta solo servicios de confianza y solo los necesarios. Lo que antes no podías ver sigue sin verse, no se entrena con los datos de las aplicaciones conectadas, y los conectores también están en el plan gratuito.",
  },
  "ch207-tool-access": {
    prompt: "Conectaste más de diez aplicaciones y la conversación llega enseguida al límite de longitud. ¿Qué te conviene hacer?",
    choices: [
      "Desconectar las aplicaciones que no usas es la única solución",
      "Cambiar «Acceso a herramientas» a «Siempre disponible»",
      "Crear un proyecto nuevo, y el límite se libera solo",
      "Cambiar «Acceso a herramientas» a «Cuando haga falta»",
    ],
    explain: "Cada aplicación conectada ocupa espacio en la conversación. Si tienes diez o más, cámbialo a «Cuando haga falta» para que cargue solo las necesarias. «Siempre disponible» ocupa más espacio desde el principio. Este ajuste solo vale para esa conversación.",
  },
  "ch207-skills": {
    prompt: "Te descargaste de internet una skill de “redacción automática de informes” (un archivo que guarda una forma de trabajar). ¿Qué debes pensar antes de instalarla?",
    choices: [
      "Si es una skill creada en un sitio en el que puedes confiar",
      "Que las skills son solo texto, así que son seguras",
      "Que las skills están siempre cargadas, así que solo puedes poner una",
      "Que hace falta saber programar, así que primero tienes que estudiar",
    ],
    explain: "El mayor riesgo de las skills es la inyección de prompts, que manipula a Claude con instrucciones ocultas, y la fuga de datos. Instala solo skills de sitios de confianza. Como la skill solo se carga cuando se hace un trabajo relacionado, ocupa menos espacio de conversación aunque pongas varias.",
  },
  "ch207-plugins": {
    prompt: "Instalaste un plugin de ventas, pero los presupuestos que genera no se parecen al modelo de tu equipo. ¿Qué haces?",
    choices: [
      "Como el plugin no se puede modificar, lo borras y buscas otro",
      "Subes tu presupuesto y le pides que lo ajuste a ese formato",
      "Cambias de conversación, y se adapta solo a tu formato",
      "Pasas al plan gratuito para usar solo el formato por defecto",
    ],
    explain: "Un plugin descargado contiene una forma general de trabajar y puede no coincidir con la tuya. Enséñale ejemplos reales de lo que usas y pídele que lo ajuste. Los plugins son solo para planes de pago, e instala solo los de sitios de confianza.",
  },
  "ch208-what": {
    prompt: "Quieres comparar las tablas de la carpeta «Ventas del 3.er trimestre» y recibir un resumen de una página. ¿Cómo se lo encargas a Cowork, que se encarga del trabajo entero?",
    choices: [
      "Preguntar primero solo las cifras de ventas y luego pedir lo siguiente paso a paso",
      "Abrir la pantalla de comandos y escribir las órdenes en orden",
      "Escribir de una vez el resultado que quieres y dónde guardarlo",
      "Enviar el enlace de la tarea a un compañero para que la continúe él",
    ],
    explain: "Para un encargo, en vez de una pregunta, escribe el resultado que quieres. Si dices el resultado, Claude recorre los pasos. No hace falta terminal, y la tarea en sí no se puede compartir con otras personas.",
  },
  "ch208-start": {
    prompt: "Quieres encargar a Cowork solo esta tarea sin la memoria de Claude. ¿Cuándo y qué debes hacer?",
    choices: [
      "Cuando acabe la tarea, borrarla, y la memoria se apaga también con ella",
      "Apagar la memoria a mitad de la tarea, en cualquier momento",
      "Borrar en la configuración la memoria de toda la cuenta",
      "Antes de enviar el primer mensaje, desactivar la memoria en «+»",
    ],
    explain: "Cowork usa la memoria junto con el chat. Si quieres una tarea sin memoria, desactiva «Memory» en «+» antes del primer mensaje. Una vez empezada la tarea, ya no se puede cambiar.",
  },
  "ch208-modes": {
    prompt: "Vas a encargarle que envíe mensajes en tu nombre desde un sitio que usas por primera vez. ¿Qué modo de confirmación es el adecuado?",
    choices: [
      "«Manual»: pregunta antes de usar una herramienta o un sitio nuevos",
      "«Automático»: avanza solo y pregunta únicamente si hay riesgo, sin parar antes",
      "Dejar el valor inicial y ausentarte",
      "Da igual el modo, así que eliges cualquiera",
    ],
    explain: "Cuando sea una herramienta o un sitio que usas por primera vez, un mensaje que sale en tu nombre o algo difícil de deshacer, déjalo en «Manual» y vigila de cerca. «Automático» solo se detiene y pregunta cuando ve riesgo.",
  },
  "ch208-devices": {
    prompt: "Con el plan Pro, en la aplicación de escritorio, le encargaste a Cowork ordenar una carpeta de tu ordenador. ¿Qué debes hacer para que la tarea llegue a tus archivos?",
    choices: [
      "Elegir «Solo en mi ordenador» en la configuración",
      "Subir la carpeta entera al servidor",
      "Cerrar la aplicación de escritorio para pasar la tarea al servidor",
      "Dejar abierta la aplicación de escritorio de ese ordenador",
    ],
    explain: "Desde el 6 de octubre de 2026, las tareas nuevas de Cowork en Pro y Max se ejecutan en la nube y la opción «Solo en mi ordenador» ya no existe. La carpeta sigue en tu ordenador y solo se alcanza con la aplicación de escritorio abierta. Si la cierras, la tarea sigue, pero no llega a tus archivos.",
  },
  "ch208-scheduled": {
    prompt: "¿Qué trabajo es el más adecuado para encargar por primera vez como tarea programada, que se ejecuta sola con la periodicidad que fijas?",
    choices: [
      "Enviar cada semana un correo informativo a un cliente en mi nombre sin revisarlo",
      "Buscar cada semana noticias de un tema que me interesa y resumirlas",
      "Pedir cada mes, un día fijo, artículos para el hogar",
      "Buscar cada día los archivos antiguos y borrarlos para siempre",
    ],
    explain: "Una tarea programada se ejecuta sin que puedas vigilarla, así que empieza por trabajos de poco riesgo, como un resumen. No programes enviar mensajes, hacer compras ni nada difícil de deshacer.",
  },
  "ch208-browser": {
    prompt: "Antes de activar el «uso del ordenador», con el que Claude mira tu pantalla y hace clic y escribe por sí mismo, ¿qué es lo adecuado?",
    choices: [
      "Dejar abierta la aplicación del banco para que la use enseguida",
      "Dejar todas las ventanas abiertas para que se vea bien la pantalla",
      "Escribir la contraseña en la conversación para ayudarle a iniciar sesión más rápido",
      "Cerrar de antemano los archivos y las aplicaciones con información sensible",
    ],
    explain: "El uso del ordenador mira la pantalla mediante capturas, así que ve todo lo que está a la vista. Antes de empezar, cierra los archivos y las aplicaciones sensibles, y no des permiso a aplicaciones de bancos, de salud o de la administración.",
  },
  "ch208-safety": {
    prompt: "Claude, que estaba ordenando tus correos con Cowork, de pronto te pide datos de tu cuenta bancaria sin que hayas preguntado. ¿Qué haces?",
    choices: [
      "Detener la tarea de inmediato y avisar con el botón de comentarios",
      "Darle los datos, porque hay una comprobación de seguridad",
      "Cambiar el modo de permisos a «Automático» para que termine pronto la tarea",
      "Esperar a que acabe la tarea y revisar solo el resultado",
    ],
    explain: "Puede ser una instrucción oculta (inyección de prompts) dentro de un correo o una página que ha leído. Si habla de cosas raras o te pide datos sensibles sin que hayas preguntado, detén la tarea y avisa. Aunque haya medidas de seguridad, la posibilidad de un ataque no es cero, y la responsabilidad es tuya.",
  },
  "ch209-training": {
    prompt: "Hablas a menudo con Claude de la salud de tu familia y, a partir de ahora, no quieres que tus conversaciones se usen para entrenar la IA. ¿Qué haces?",
    choices: [
      "Desactivar el interruptor del entrenamiento, en «Privacidad»",
      "Pulsar «no me gusta» en cada respuesta para avisar de que no se use",
      "Dar por hecho que está desactivado y no tocar nada",
      "Desactivar el interruptor «Buscar y consultar chats anteriores»",
    ],
    explain: "«Help improve our AI models» (en la ayuda en coreano, con otro nombre), en «Configuración» → «Privacidad», decide si se usa para entrenar. Abre y comprueba tú el valor inicial. Si envías «me gusta» o «no me gusta», esa conversación se guarda hasta 5 años.",
  },
  "ch209-retention": {
    prompt: "Hay una conversación que no quieres conservar y quieres que tampoco se use para entrenar en el futuro. ¿Qué haces?",
    choices: [
      "Marcarla con «no me gusta»",
      "Eliminarla de la lista de conversaciones",
      "Dejarla como está y esperar a que pasen 30 días",
      "Cambiarle el título para que sea difícil de reconocer",
    ],
    explain: "Una conversación eliminada se borra del servidor en un máximo de 30 días y no se usa para entrenar en el futuro. Las conversaciones en las que enviaste «me gusta» o «no me gusta» se conservan, al contrario, hasta 5 años. La memoria creada en esa conversación se queda, así que bórrala aparte.",
  },
  "ch209-access": {
    prompt: "Vas a pegar en la conversación un historial médico y tu número de documento de identidad para que te los ordenen. ¿Qué conviene hacer?",
    choices: [
      "Pegarlo todo, incluido el número de identidad, porque se cifra",
      "Pegarlo todo, porque el personal no puede verlo en ningún caso",
      "Quitar los números sensibles y poner solo lo estrictamente necesario",
      "Enviar comentarios para que el personal lo revise directamente con mis datos",
    ],
    explain: "Por defecto, el personal no puede ver las conversaciones y los datos están cifrados. Pero algunos empleados pueden ver las conversaciones enviadas con comentarios, las que requieren revisar las normas de uso y las que permitiste usar para entrenar. Con datos muy sensibles, como el número de identidad o el historial de salud, ten cuidado al incluirlos.",
  },
  "ch209-export": {
    prompt: "Antes de eliminar tu cuenta quieres hacer una copia de seguridad de tus conversaciones. Si normalmente solo usas la aplicación del móvil, ¿qué haces?",
    choices: [
      "Pulsar «Exportar» directamente en la configuración de la aplicación del móvil",
      "Pasar el archivo exportado a una cuenta personal nueva",
      "Abrir con calma, unos días después, el enlace que llega por correo",
      "Hacer «Exportar datos» desde la web o la aplicación de ordenador",
    ],
    explain: "Exportar no se puede desde la aplicación del móvil, sino desde la web o la aplicación de ordenador, en «Configuración» → «Privacidad». El enlace que llega por correo caduca a las 24 horas, y no se puede importar a otra cuenta personal.",
  },
  "ch209-delete": {
    prompt: "Alguien con el plan de pago (Pro) quiere eliminar su cuenta. ¿Qué debe hacer primero?",
    choices: [
      "Borrar primero la aplicación del móvil y volver a instalarla desde cero",
      "Cancelar la suscripción y esperar a que termine el periodo ya pagado",
      "Cambiar antes la contraseña",
      "Pasar una por una todas las conversaciones a chats incógnito",
    ],
    explain: "Con Pro y Max, primero se cancela la suscripción y la cuenta se elimina cuando termina el periodo ya pagado. Eliminar la cuenta no se puede deshacer, así que exporta antes las conversaciones que necesites.",
  },
  "ch209-mistakes": {
    prompt: "La IA dijo: “ya envié el correo a los compañeros del equipo”. ¿Qué es lo más adecuado?",
    choices: [
      "Comprobar si has conectado la herramienta y mirar la carpeta de enviados",
      "Creerla, porque lo ha dicho la IA, y seguir adelante con el trabajo sin más",
      "Hacer la misma petición otra vez y enviarlo dos veces",
      "Pulsar «me gusta» para darle las gracias",
    ],
    explain: "A veces dice que ha hecho algo con una herramienta que no está conectada y que, por tanto, no puede usar. Es más seguro comprobarlo tú o pedirle solo un borrador desde el principio.",
  },
  "ch209-safeguards": {
    prompt: "Crees que tu cuenta se ha suspendido por error. ¿Cómo la reclamas?",
    choices: [
      "Creando otra cuenta con un correo nuevo",
      "Borrando la aplicación y volviéndola a instalar",
      "Pulsando «Denunciar» en la pantalla de una conversación compartida con otras personas",
      "Iniciando sesión con la cuenta suspendida y rellenando el formulario",
    ],
    explain: "El formulario de reclamación solo se ve si inicias sesión en claude.ai con la cuenta suspendida.",
  },
  "ch209-crisis": {
    prompt: "Una persona cercana hablaba con Claude de algo difícil y vio un aviso con un teléfono de ayuda. Teme que pulsarlo le traiga consecuencias. ¿Qué le dices?",
    choices: [
      "Que lo decida esa persona, y que no tiene consecuencias aunque lo use",
      "Que si pulsa el aviso se suspende la cuenta, así que lo cierre",
      "Que la conversación pasa a un servicio de ayuda, así que tenga cuidado",
      "Que si lo cierra no volverá a encontrarlo, así que lo pulse ya",
    ],
    explain: "Usar el aviso o no lo decide esa persona, y no tiene consecuencias para la cuenta. La conversación no se envía a ningún servicio de ayuda, y se pueden encontrar líneas de ayuda en claude.findahelpline.com cuando se quiera. Si la situación es de peligro ahora mismo, hay que llamar directamente a emergencias.",
  },
  "ch210-difference": {
    prompt: "Quieres preguntar con la voz y también escuchar la respuesta en voz alta. ¿Qué función usas?",
    choices: [
      "Dictado (el micrófono del cuadro de entrada)",
      "Subir archivos (+)",
      "Modo de voz (símbolo de ondas)",
      "Chat incógnito",
    ],
    explain: "El modo de voz te deja preguntar hablando y escuchar la respuesta. El dictado convierte lo que dices en texto para enviarlo, y la respuesta llega escrita.",
  },
  "ch210-dictation": {
    prompt: "Por dictado del móvil dijiste y enviaste una pregunta que incluía el nombre de una persona. ¿Qué te conviene hacer después?",
    choices: [
      "Repetirla en inglés, porque con el coreano no funciona",
      "Comprobar el nombre en tu pregunta tal como aparece en el chat",
      "Seguir sin comprobar, porque los nombres siempre salen bien",
      "Escribir solo a mano desde ahora, porque el dictado es una función de pago",
    ],
    explain: "Los nombres de personas y de lugares pueden transcribirse mal. Después de enviar, lee tu pregunta tal como queda en el chat. El dictado admite 12 idiomas, entre ellos el coreano, y antes de enviar puedes cancelarlo con la «X».",
  },
  "ch210-voice": {
    prompt: "Usas el modo de voz en una cafetería ruidosa y Claude entiende mal lo que dices una y otra vez. ¿Qué te conviene hacer?",
    choices: [
      "Hablar más alto y más rápido",
      "Cambiar el idioma del dictado a inglés y volver a hablar con más cuidado",
      "Volver a iniciar sesión con una cuenta nueva",
      "Cambiar a «pulsar para hablar», que se habla manteniendo el botón",
    ],
    explain: "«Pulsar para hablar» solo escucha mientras mantienes pulsado el botón, así que es más exacto cuando hay ruido o alguien habla al lado.",
  },
  "ch210-settings": {
    prompt: "Cambiaste la pantalla de la aplicación al coreano, pero el modo de voz sigue hablando en otro idioma. ¿Por qué?",
    choices: [
      "Porque el modo de voz solo admite inglés",
      "Porque el idioma de la voz se elige aparte",
      "Porque el plan gratuito tiene el idioma fijo",
      "Porque en la aplicación del móvil no se puede cambiar el idioma",
    ],
    explain: "Aunque cambies el idioma de la pantalla de la aplicación, el idioma de la voz no cambia. Elígelo aparte en «Configuración» → «General» → «Voz» → «Idioma».",
  },
  "ch210-privacy": {
    prompt: "Vas a hablar de una cita en el hospital con el modo de voz en el metro. ¿Qué te conviene hacer?",
    choices: [
      "Hablar tranquilamente, porque la conversación de voz no deja registro",
      "Decir hasta tu número de identidad, porque la grabación se borra",
      "Usar auriculares y no decir información sensible",
      "Hablar fuerte y claro para que te entienda bien",
    ],
    explain: "La conversación de voz se convierte en un registro escrito que queda en el historial, y lo que tú dices y lo que responde Claude lo puede oír quien está a tu lado. Usa auriculares o escribe en silencio por dictado, y no digas en voz alta información que no deberías meter.",
  },
  "ch210-shortcuts": {
    prompt: "Te sale el aviso de que has agotado el límite de uso. ¿Puedes seguir preguntando con el widget del iPhone o con «Preguntar a Claude»?",
    choices: [
      "Sí, si no abres la aplicación, puedes seguir sin que importe el límite",
      "Los atajos usan un modelo pequeño aparte y aún tienes límite",
      "Si lo abres desde «Open Claude» de la pantalla de bloqueo, tienes un límite aparte",
      "No, eso cuenta en el mismo límite, así que espera a que se recupere",
    ],
    explain: "Los widgets, los atajos y las funciones de la pantalla de bloqueo, que llaman a Claude sin abrir la aplicación, también cuentan para el límite de uso. «Preguntar a Claude» y los atajos usan el modelo predeterminado que ves al abrir la aplicación.",
  },
  "ch210-apps": {
    prompt: "En la aplicación del móvil le pediste un correo para avisar a tu jefe de que llegas tarde, y se abrió la aplicación de correo. ¿Qué haces ahora?",
    choices: [
      "Leer el destinatario y el contenido, y pulsar tú «Enviar»",
      "Cerrar la aplicación de correo, porque Claude ya lo ha enviado",
      "Pedirle a Claude que busque la dirección en los contactos",
      "Dejarlo así, porque se envía solo en un día",
    ],
    explain: "Claude solo pasa a la aplicación de correo un borrador ya rellenado. Eres tú quien lo lee, lo corrige y pulsa «Enviar». Claude tampoco entra directamente en tus contactos.",
  },
  "ch211-how": {
    prompt: "En las tareas de práctica tienes que subir archivos y cambiar ajustes. ¿Cómo conviene practicar?",
    choices: [
      "En un chat incógnito, con material real de la empresa",
      "En un chat normal, pero con material inventado y falso",
      "Con material real, pulsando «me gusta» en cada respuesta",
      "En un chat normal, poniendo mis datos de contacto reales",
    ],
    explain: "Las tareas que tocan el historial, los archivos o los ajustes se hacen en un chat normal, pero con material inventado en vez de real. En la pantalla nueva no se pueden crear archivos en un chat incógnito. Si envías «me gusta» o «no me gusta», esa conversación se guarda hasta 5 años, así que no los pulses al practicar.",
  },
  "ch211-check": {
    prompt: "Terminaste la práctica con material falso y borraste todas las conversaciones de práctica. ¿Qué más debes hacer para dejar limpio?",
    choices: [
      "Nada más: al borrar las conversaciones, desaparecen también los recuerdos y lo compartido",
      "Cerrar también la sesión de mi móvil, que inicié en la práctica, como si fuera un dispositivo desconocido",
      "Revisar en los ajustes las memorias que quedan, lo compartido y los dispositivos",
      "Eliminar la cuenta y registrarme de nuevo para no dejar rastro",
    ],
    explain: "Aunque borres la conversación, la memoria creada en ella se queda, así que bórrala aparte en «Configuración» → «Memoria». Desactiva lo que no necesites en «Chats compartidos» y comprueba en «Sesiones activas» que no hay dispositivos desconocidos. El móvil con el que iniciaste sesión en la práctica es tuyo.",
  },
  "ch212-tools": {
    prompt: "Quieres pulir con Claude el texto de un cartel para un evento del barrio. ¿Qué función te conviene usar primero?",
    choices: [
      "Research, que reúne material y escribe un informe",
      "Una tarea programada, que se ejecuta en momentos fijos",
      "Cowork, que se encarga de varios pasos enteros",
      "La conversación normal, donde se va y viene puliendo",
    ],
    explain: "Fíjate primero en la forma del trabajo, no en el menú. Si es preguntar, pulir y pensar juntos, lo adecuado es la conversación normal. En la mayoría de los casos basta con una conversación normal.",
  },
  "ch212-layers": {
    prompt: "Cada vez que haces un informe le explicas a Claude los mismos pasos en el mismo orden. ¿Qué te conviene crear?",
    choices: [
      "Una cuenta nueva",
      "Una skill que contenga ese orden",
      "Un chat incógnito",
      "Varios plugins en lugar de una skill",
    ],
    explain: "Si explicas una y otra vez los mismos pasos, ya toca hacer una skill. Si pides lo mismo en todas las conversaciones, lo adecuado son las instrucciones; si sigues con un mismo trabajo, un proyecto. Prueba la skill que crees activándola y desactivándola, y comparando dos veces lo que pides.",
  },
  "ch212-data": {
    prompt: "Subiste a Claude un archivo CSV con registros de ventas para que lo analizara. ¿Cómo puedes recibir un gráfico?",
    choices: [
      "No puede crear gráficos, así que solo recibes una explicación escrita",
      "Se puede recibir como archivo de imagen, por ejemplo PNG",
      "Solo salen gráficos si subes un archivo de Excel",
      "Para recibir un gráfico tienes que activar Cowork sí o sí",
    ],
    explain: "La ayuda indica que, si subes un archivo de tabla como CSV o TSV, Claude lo analiza y dibuja gráficos, y también puede crearlos como archivos de imagen, por ejemplo PNG. Antes de fiarte del resultado, compruébalo con datos antiguos.",
  },
  "ch212-academy": {
    prompt: "Una persona que no domina el inglés quiere hacer el curso en línea de Anthropic (Claude Academy, «AI Fluency»). ¿Qué le conviene?",
    choices: [
      "Leerlo traducido al español con la función de traducción del navegador",
      "Buscar primero el curso en español, que existe aparte",
      "Contratar primero un plan de pago y luego abrir el curso",
      "Tener como objetivo sacarse un certificado oficial con los cuestionarios",
    ],
    explain: "Todo el texto del curso está en inglés, pero se puede leer con la traducción del navegador (clic derecho → «Traducir al español»). «AI Fluency» no necesita un plan de pago, y lo que se recibe con los cuestionarios es una insignia de aprendizaje, no un certificado.",
  },
}
