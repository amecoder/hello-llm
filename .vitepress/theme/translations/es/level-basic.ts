// es text for level-basic (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const LEVEL_BASIC: Record<string, QuestionText> = {
  "basic-s1-autocomplete": {
    prompt: "¿Qué se parece más a la forma en que un chatbot de IA construye las frases?",
    choices: [
      "El autocompletado del teclado del móvil, que te sugiere la palabra que sigue",
      "Buscar una palabra en el diccionario y copiar su significado tal cual, letra por letra",
      "Elegir y poner, según la situación, un aviso de megafonía grabado de antemano",
      "Una calculadora que introduce los números en una fórmula fija y calcula",
    ],
    explain: "El LLM mira el texto hasta ese momento y va añadiendo, una por una, las palabras que más verosímilmente vienen después. Es como el autocompletado del teclado, pero a una escala enorme.",
  },
  "basic-s1-large-meaning": {
    prompt: "¿Qué significa «grande» (Large) en LLM (modelo de lenguaje grande)?",
    choices: [
      "Que el archivo del programa es tan grande que tarda mucho en descargarse",
      "Que aprendió con más texto del que una persona leería en toda su vida",
      "Que gente de muchos países del mundo lo usa a la vez al mismo tiempo",
      "Que una ley establece que solo pueden crearlo empresas muy grandes",
    ],
    explain: "«Grande» significa que aprendió con una cantidad enorme de texto, como escritos de internet, libros y artículos de investigación.",
  },
  "basic-s1-training-knobs": {
    prompt: "¿A qué se parece más «entrenar» un modelo de IA?",
    choices: [
      "A que una persona introduzca a mano, línea por línea, todas las preguntas y respuestas que existen en el mundo",
      "A copiar los textos de internet enteros y guardarlos tal cual dentro del modelo",
      "A ir ajustando poco a poco los muchísimos números internos para acertar mejor la palabra siguiente",
      "A crear un modelo nuevo en el momento cada vez que el usuario hace una pregunta",
    ],
    explain: "Dentro del modelo hay muchísimos números llamados parámetros (perillas de ajuste), y el entrenamiento consiste en girarlos poco a poco para que acierte mejor la palabra siguiente.",
  },
  "basic-s1-unknown-varies": {
    prompt: "Seojin le preguntó tres veces a la IA por la historia de un pueblo pequeño y cada vez le dio un año distinto de fundación del pueblo. ¿Cómo conviene tomárselo?",
    choices: [
      "Tomar como respuesta correcta el valor intermedio de los tres años y usarlo tal cual",
      "Creer la última respuesta, porque es la más exacta",
      "Pensar que la IA bromea a propósito y volver a preguntar cambiando el tono",
      "Puede que la IA no lo sepa bien, así que lo compruebo en una fuente fiable",
    ],
    explain: "Cuando la IA no sabe bien algo, la probabilidad se reparte entre varios candidatos y cada vez puede salir una respuesta distinta. Si la respuesta cambia, es la señal de que hay que comprobarlo por tu cuenta.",
  },
  "basic-s1-human-feedback": {
    prompt: "Hoy los chatbots de IA suponen lo que quiere decir la pregunta y dan una respuesta ordenada. ¿De dónde viene sobre todo esta actitud?",
    choices: [
      "De que la IA investigó de antemano la personalidad de cada usuario, uno por uno",
      "De que, tras leer textos, se entrenó más con personas que elegían respuestas buenas y malas",
      "De que, antes de enviar la respuesta, un empleado de la empresa lee y corrige todas una por una",
      "De que busca en internet la respuesta de una pregunta parecida y la pega tal cual, sin cambiarla",
    ],
    explain: "Un modelo que solo ha leído textos se parece más a algo que continúa un escrito. Con entrenamiento adicional en el que personas eligen buenas respuestas (RLHF), pasa a responder como un interlocutor que ayuda.",
  },
  "basic-s1-two-facts": {
    prompt: "En una investigación que miró dentro de una IA mientras respondía a «¿cuál es la capital del estado donde está Dallas?», ¿qué se observó?",
    choices: [
      "Que sacó «Austin» de una casilla donde la tenía memorizada, sin calcular nada",
      "Que eligió primero el nombre de ciudad que más veces vio al aprender, sin importar la pregunta",
      "Que unió «Dallas está en Texas» con «la capital de Texas es Austin», uno tras otro",
      "Que buscó a escondidas en un mapa de internet para confirmar la ubicación y luego respondió",
    ],
    explain: "En un estudio de Anthropic de 2025, el modelo construyó la respuesta encadenando dos hechos en orden. Es decir, no se limita a sacar una respuesta memorizada, sino que hace también un cálculo parecido a pensar.",
  },
  "basic-s1-self-explain": {
    prompt: "Le hiciste resolver una suma a la IA y luego le preguntaste «¿cómo lo resolviste?». ¿Qué es lo más parecido a lo que se sabe por las investigaciones?",
    choices: [
      "La IA explica siempre, sin dejarse nada, exactamente su proceso de cálculo",
      "La IA no calcula nada, así que no puede decir en absoluto cómo lo resolvió",
      "Si la explicación de la IA es larga y detallada, la solución es necesariamente correcta",
      "El método de resolución que dice la IA puede ser distinto del proceso interno real",
    ],
    explain: "En el estudio del cálculo 36+59, por dentro la IA hizo a la vez una estimación aproximada y el cálculo de la última cifra, pero al explicarlo dijo que lo resolvió con el método de «llevarse una» que se aprende en la escuela.",
  },
  "basic-s1-eliza": {
    prompt: "Alguien de tu entorno dice: «Esta IA parece que me escucha las preocupaciones y de verdad me entiende». ¿Qué se puede aprender de la historia de ELIZA, un sencillo programa de conversación de 1966?",
    choices: [
      "Que es fácil sentir que quien habla con naturalidad tiene sentimientos de verdad y nos comprende",
      "Que un programa que habla bien tiene realmente una mente igual a la de una persona",
      "Que cuanto más antiguo es un programa, mejor entiende el corazón de las personas que las IA de hoy",
      "Que los programas de conversación están bloqueados y no sirven en absoluto para hablar de preocupaciones",
    ],
    explain: "Incluso con ELIZA, que tenía solo unas pocas reglas, mucha gente sintió que la entendía (efecto ELIZA). Solo con esa sensación no se concluye que la IA tenga mente.",
  },
  "basic-s1-size-not-all": {
    prompt: "Un amigo dice: «Si el número que acompaña al nombre de un modelo de IA es grande, es más listo sin duda». ¿Cuál es la respuesta adecuada?",
    choices: [
      "Es cierto. Con un número grande, cualquier tarea sale siempre más rápida y más exacta",
      "Es cierto. Ese número es la cantidad de personas que lo han usado, así que cuanto mayor, más fiable",
      "No necesariamente. También influyen el texto leído y el pulido posterior al entrenamiento",
      "Falso. Cuanto más pequeño es el número, más listo y exacto es el modelo, sin excepción",
    ],
    explain: "El número es la cantidad de parámetros, es decir, el tamaño del modelo. La capacidad depende no solo del tamaño, sino también de la cantidad de texto aprendido y de pulidos posteriores como el entrenamiento con opiniones de personas.",
  },
  "basic-s1-token": {
    prompt: "¿Qué es el «token» que aparece a menudo en las explicaciones sobre la IA?",
    choices: [
      "La contraseña que se usa para iniciar sesión en un servicio de IA",
      "La puntuación que da el usuario cuando la IA responde bien",
      "Un cupón de descuento que la empresa de IA reparte entre los usuarios",
      "Los trozos pequeños en que la IA corta un texto o una imagen",
    ],
    explain: "El LLM no lee el texto de golpe, sino que lo corta en trozos pequeños llamados tokens. Las fotos también se cortan en casillas pequeñas y se tratan de forma parecida.",
  },
  "basic-s1-image-making": {
    prompt: "Una IA a la que le das un texto y te crea una imagen, ¿de qué manera crea la imagen en general?",
    choices: [
      "Parte de una pantalla con solo ruido y va quitando el ruido poco a poco según el texto",
      "Busca en internet la imagen más parecida al texto y te la muestra tal cual",
      "Le pasa el encargo a un pintor humano y te muestra el dibujo que le trae",
      "Corta en trozos muy pequeños unos pocos dibujos hechos de antemano y los pega para unirlos en uno",
    ],
    explain: "Las IA que crean imágenes y vídeos suelen usar modelos de difusión. Aprenden a quitar el ruido paso a paso y luego dibujan una imagen nueva usando como guía el texto que les das.",
  },
  "basic-s1-reasoning-model": {
    prompt: "¿En qué se diferencia una IA llamada «modelo de razonamiento» de los demás modelos?",
    choices: [
      "Si no busca en internet, no puede responder a ninguna pregunta",
      "Antes de responder, escribe su proceso de pensamiento paso a paso",
      "Una persona escribe a máquina por detrás y envía la respuesta en su lugar",
      "A cada pregunta le da una única respuesta corta fijada de antemano",
    ],
    explain: "Un modelo de razonamiento, antes de responder, escribe un proceso de pensamiento en el que divide el problema y lo comprueba, y después responde.",
  },
  "basic-s2-what-is-prompt": {
    prompt: "¿A qué se refiere la palabra «prompt»?",
    choices: [
      "A un anuncio que sale al final de la pantalla cuando la IA termina de escribir una respuesta",
      "Al texto de petición que le envío a la IA, es decir, lo que escribo en la ventana de chat",
      "A un programa que hay que descargar antes de usar un servicio de IA",
      "A un lenguaje de programación exclusivo de la IA que solo pueden usar los expertos",
    ],
    explain: "El prompt es el texto de petición que se envía a la IA. Todo lo que escribes en la ventana de chat es un prompt.",
  },
  "basic-s2-first-answer-draft": {
    prompt: "¿Cómo conviene tratar la primera respuesta que da la IA?",
    choices: [
      "Es la mejor respuesta que ha elegido la IA, así que se usa tal cual, sin corregirla",
      "Si no me gusta a la primera, no vuelvo a usar esa IA",
      "Como un borrador que se va puliendo pidiendo correcciones a continuación",
      "Enviar la misma pregunta varias veces y elegir la respuesta más larga",
    ],
    explain: "La primera respuesta no es un producto terminado, sino un borrador. Lo normal es completarla dentro de la misma conversación, pidiendo correcciones una tras otra.",
  },
  "basic-s2-regenerate-why": {
    prompt: "Si pulsas «regenerar» ante la misma pregunta, sale una respuesta un poco distinta de la primera. ¿Cuál es la razón?",
    choices: [
      "Que la IA se dio cuenta de que la primera respuesta estaba mal y la corrigió por sí misma",
      "Que cada vez que vuelves a pulsar el botón, cambia a un modelo nuevo más inteligente",
      "Que la respuesta correcta a la pregunta cambia según la hora a la que pulsas el botón",
      "Que elige la palabra siguiente entre varios candidatos verosímiles según probabilidades",
    ],
    explain: "La IA elige la palabra que viene a continuación de forma probabilística entre varios candidatos verosímiles. Por eso, ante la misma pregunta sale cada vez una respuesta un poco distinta.",
  },
  "basic-s2-small-fix": {
    prompt: "Yuna recibió un borrador de mensaje de felicitación de cumpleaños que le gusta en general, pero la última frase suena rara. ¿Cuál es el método más adecuado?",
    choices: [
      "Pedir en la misma conversación: «Cambia solo la última frase para que suene más natural»",
      "Abrir una ventana de conversación nueva y enviar otra vez exactamente la misma pregunta del principio",
      "Pulsar varias veces el botón de regenerar para recibir un mensaje totalmente distinto",
      "Como hay una frase rara, dejar de usar la IA y escribirlo todo de nuevo yo sola desde cero",
    ],
    explain: "Cuando la dirección es la correcta y solo hay que corregir una parte, lo más rápido es señalar qué corregir y pedirlo a continuación.",
  },
  "basic-s2-turn": {
    prompt: "En una conversación con la IA, ¿qué significa «turno» (turn)?",
    choices: [
      "El tiempo que tarda la IA en terminar de escribir una respuesta",
      "El número de veces que se puede preguntar a la IA en un día",
      "Un intercambio completo: yo hablo una vez y la IA responde una vez",
      "El momento en que la IA termina de responder y pasa al siguiente usuario",
    ],
    explain: "Un turno es un intercambio en el que yo hablo una vez y la IA responde una vez. A una conversación con varios intercambios se la llama conversación multiturno.",
  },
  "basic-s2-memory-feature": {
    prompt: "Dicen que algunos servicios tienen una función de «memoria» que recuerda parte de las conversaciones anteriores. ¿Qué idea es adecuada para quien la usa por primera vez?",
    choices: [
      "Como existe la función de memoria, cualquier servicio recuerda todas las conversaciones",
      "La función de memoria funciona igual en todos los servicios y ni siquiera se puede desactivar",
      "Si existe la función de memoria, en una conversación nueva no hace falta contar mi situación",
      "Pensar que una conversación nueva empieza de cero y volver a dar la información necesaria",
    ],
    explain: "La función de memoria cambia según el servicio, tanto en cómo actúa como en sus ajustes. Lo más seguro es pensar que una conversación nueva no conoce las anteriores y volver a darle lo necesario.",
  },
  "basic-s2-repeat-mistake": {
    prompt: "En una misma conversación pediste tres veces que se corrigiera el mismo error, pero siguen saliendo fallos parecidos. ¿Cuál es lo más adecuado que hacer a continuación?",
    choices: [
      "Pedir un resumen de lo decidido hasta ahora y continuar en una conversación nueva",
      "Seguir enviando una y otra vez «corrígelo» con las mismas palabras hasta que salga bien",
      "Como el error se repite, concluir que la IA no puede hacer esta tarea y dejarlo",
      "Seguir tal cual en la misma conversación, porque cuanto más se alarga, mejor lo sabe la IA",
    ],
    explain: "Que se repita el mismo fallo es la señal de empezar una conversación nueva. Si pides una nota de resumen y la pegas en la conversación nueva, no pierdes lo que ya habíais decidido.",
  },
  "basic-s2-hard-word": {
    prompt: "En la respuesta de la IA hay una palabra difícil que ves por primera vez y no sabes qué significa. ¿Cuál es el método más adecuado?",
    choices: [
      "Saltarme la palabra que no conozco, leer solo lo que entiendo y terminar la conversación",
      "En la misma conversación, señalar esa palabra y pedir que la explique con palabras fáciles y un ejemplo",
      "Pensar que una respuesta con palabras difíciles es errónea, abrir una conversación nueva y preguntar desde cero",
      "No preguntar más a la IA y leer la palabra muchas veces hasta memorizarla",
    ],
    explain: "Para lo que no entiendes, basta con seguir preguntando en la misma conversación, por ejemplo: «explícame esta parte otra vez con palabras fáciles y un ejemplo».",
  },
  "basic-s2-long-chat-limit": {
    prompt: "Cuando la conversación se alarga mucho, la IA se va saltando las condiciones fijadas al principio. ¿Cuál es el motivo más adecuado?",
    choices: [
      "Que la IA se ha cansado del usuario y se salta las condiciones a propósito",
      "Que las condiciones fijadas al principio se borran solas al cabo de un día",
      "Que, si dices una condición una sola vez, la IA considera que no es nada importante",
      "Que la cantidad de texto que la IA puede consultar de una vez tiene un límite",
    ],
    explain: "La cantidad de texto que la IA puede consultar de una vez tiene un límite, así que, cuando la conversación se alarga mucho, puede empezar a perder lo del principio.",
  },
  "basic-s2-plain-words": {
    prompt: "Tu abuelo pregunta: «Para hablar con la IA hay que aprender inglés o comandos especiales, ¿no?». ¿Cuál es la respuesta adecuada?",
    choices: [
      "No. Basta con hablarle con las palabras de todos los días, como a una persona",
      "Sí. Primero hay que memorizar unos comandos fijos para que la IA entienda",
      "Sí. Solo si se pregunta en inglés puede la IA responder en coreano",
      "No. Con palabras no se puede; se usa solo pulsando los botones del menú de la pantalla",
    ],
    explain: "No hay fórmulas mágicas. Basta con ordenar bien lo que dirías al pedirle un favor a alguien y decirlo con las palabras de siempre.",
  },
  "basic-s2-keep-part": {
    prompt: "Al pedir una corrección, ¿por qué se añade «el primer párrafo está bien, déjalo tal cual»?",
    choices: [
      "Porque solo así la IA te manda más rápido la respuesta corregida",
      "Para evitar que, al corregir, cambie también lo que sí te gustaba",
      "Porque, si la elogias, la IA se pone contenta y responde con más empeño",
      "Porque, sin esa frase, la IA ni siquiera acepta la petición de corregir",
    ],
    explain: "Una buena petición de corrección incluye qué parte corregir y cómo, y qué dejar como está. Si indicas lo que hay que respetar, la parte buena no cambia con el resto.",
  },
  "basic-s2-buttons-differ": {
    prompt: "Un amigo te habló del botón «regenerar» y lo estás buscando, pero la pantalla del servicio que usas es distinta de la de tu amigo. ¿Cuál es la explicación adecuada?",
    choices: [
      "Esa función seguramente solo existe en el servicio que usa tu amigo",
      "Que la pantalla sea distinta significa que el principio con que la IA crea las respuestas también es totalmente distinto",
      "El nombre y la posición de los botones cambian según el servicio, así que se busca en la pantalla del propio servicio",
      "Si el botón no se ve enseguida, con ese servicio no se puede recibir otra respuesta",
    ],
    explain: "Funciones como regenerar o corregir la pregunta existen en la mayoría de los servicios, pero el nombre y la posición de los botones cambian según el servicio.",
  },
  "basic-s3-reader-level": {
    prompt: "Le preguntaste a la IA cómo conectar unos auriculares al móvil para explicárselo a tu padre y llegó una respuesta llena de términos técnicos. ¿Qué habría sido bueno poner en la primera petición?",
    choices: [
      "Repetir tres veces la palabra «exactamente» para enfatizarla mucho",
      "Escribir con precisión, en inglés, el nombre de la empresa que fabrica los auriculares",
      "Información de quién lee, como «se lo explico a mi padre, que no sabe de aparatos»",
      "Poner «respóndeme rápido» para meterle prisa a la respuesta",
    ],
    explain: "Si le dices quién va a leer, la IA explica al nivel de esa persona. El mismo contenido cambia mucho solo con cambiar a quién va dirigido.",
  },
  "basic-s3-purpose": {
    prompt: "Al pedir que se resuma un artículo largo, ¿qué mejora si añades «es para compartirlo en el chat de grupo de la familia»?",
    choices: [
      "La IA puede subir por ti el resumen al chat de grupo",
      "La IA añade por su cuenta los nombres de todos los familiares del grupo",
      "Aunque el artículo tenga datos erróneos, la IA los corrige todos sin dejar ninguno",
      "Sabe dónde se va a usar y ajusta a eso la longitud y el tono",
    ],
    explain: "Si le dices para qué lo vas a usar (el contexto), la IA ajusta la longitud y el tono de la respuesta a ese lugar.",
  },
  "basic-s3-avoid-word": {
    prompt: "Estás pidiendo nombres para un perro y casi todos los que elige la IA acaban en «Kong». ¿Cuál es la petición siguiente más adecuada?",
    choices: [
      "«Excluye los nombres que acaban en Kong y recomiéndame 10 más de dos sílabas, fáciles de decir»",
      "«Esta vez, sin ninguna condición, recomiéndame algunos nombres más, los que se te ocurran»",
      "Volver a enviar sin cambiar ni una letra la pregunta inicial «recomiéndame nombres para un perro»",
      "Enviar solo, de forma breve, «no me gusta ninguno, hazlo todo de nuevo desde cero»",
    ],
    explain: "Si dices con claridad como condiciones lo que quieres evitar y la forma que quieres, la IA las respeta y vuelve a elegir.",
  },
  "basic-s3-vague-good": {
    prompt: "Le enseñaste a la IA un correo para tu jefe de equipo y solo dijiste «púlelo para que quede bien»; no tiene el aire que querías. ¿Cuál es una petición mejor?",
    choices: [
      "«Púlelo mucho mejor, lo mejor que puedas y lo más posible»",
      "«Púlelo con cortesía y brevedad, en cinco frases o menos»",
      "«Cámbialo por el correo más estupendo que se te ocurra a ti»",
      "«Púlelo una vez más para que quede mejor que antes»",
    ],
    explain: "«Bien» es una palabra que significa cosas distintas para cada persona. Si dices con detalle el tono y la extensión que quieres, te acercas a la respuesta deseada.",
  },
  "basic-s3-table-compare": {
    prompt: "Pediste comparar tres lavadoras y la respuesta llegó en un texto largo que cuesta ver de un vistazo. ¿Cómo habría sido bueno pedirlo desde el principio?",
    choices: [
      "Cuanto más corta es la pregunta, como «compara lavadoras», mejor se ordena sola la respuesta",
      "Pedir «elige solo la mejor» para recibir únicamente la conclusión",
      "Añadir «explícalo con detalle, largo y sin dejar nada» y enviarlo",
      "Escribir «compáralas en una tabla con columnas de precio, tamaño y ruido»",
    ],
    explain: "Si dices la forma (el formato) del resultado que quieres, puedes recibirlo con esa forma. Para comparar, una tabla con los criterios en columnas es más fácil de ver.",
  },
  "basic-s3-paste-article": {
    prompt: "Minseo solo envió «resume el artículo que vi antes» y llegó una respuesta que no tenía nada que ver. ¿Cuál es el motivo principal?",
    choices: [
      "Que no pegó el artículo, así que la IA no sabe de qué artículo se trata",
      "Que la IA no entiende la palabra «resumir»",
      "Que los artículos solo se pueden resumir a determinadas horas",
      "Que, como la pregunta era corta, la IA decidió a propósito contestar sin esmero",
    ],
    explain: "La IA no conoce el artículo que yo vi. Hay que pegar tú mismo el texto que quieres resumir para que pueda responder basándose en él.",
  },
  "basic-s3-why-context": {
    prompt: "Ha cambiado la fecha de la reunión de tu club y vas a pedir un aviso. ¿Qué conviene incluir en la petición para que los socios lo acepten bien?",
    choices: [
      "El teléfono y la dirección de casa de todos los socios del club",
      "El motivo del cambio, la nueva fecha y tu relación con los socios",
      "Una petición firme de una sola línea: «escribe el mejor aviso»",
      "Varias fotos de reuniones pasadas que no tienen que ver con el aviso",
    ],
    explain: "Si le dices cuál es la situación (el contexto) y quién lo lee (el destinatario), la IA puede escribir un aviso convincente. No se incluyen datos personales de otras personas, como los contactos de los socios.",
  },
  "basic-s3-homework-steps": {
    prompt: "Vas a pedirle a la IA ayuda con los deberes de fracciones de un niño de primaria. ¿Cuál es la petición que más ayuda al estudio del niño?",
    choices: [
      "«Dime solo la respuesta de este problema, en números y rápido. No necesito ninguna explicación»",
      "«Explícame con mucho detalle qué es una fracción, a nivel de matemáticas universitarias»",
      "«Al nivel de un niño de primaria, dime paso a paso cómo se resuelve, más que la respuesta»",
      "«Resuelve por mí los diez problemas de los deberes y ordénalos muy bien»",
    ],
    explain: "Si dices a qué nivel y de qué manera quieres la explicación, puedes recibir una que el niño entienda.",
  },
  "basic-s3-best-prompt": {
    prompt: "Quieres que te recomienden el menú de una fiambrera para llevar al trabajo. ¿Cuál es la mejor petición para recibir una respuesta que ya puedas usar?",
    choices: [
      "«En mi oficina solo hay microondas. Dime 5 fiambreras que se preparen en 10 minutos»",
      "«Recomiéndame menús de fiambrera. Que estén ricos, muchos y lo más variados posible, por favor»",
      "Enviar varias veces, cortado en palabras sueltas: «almuerzo. fiambrera. recomienda. rápido.»",
      "«Dime solo uno, sin más: qué fiambrera es la que más come la gente hoy en día»",
    ],
    explain: "Si le cuentas tu situación (solo hay microondas) y la forma que quieres (10 minutos, 5 opciones), llega una respuesta que ya se puede usar.",
  },
  "basic-s3-tone-relation": {
    prompt: "Cuando te cuesta describir con palabras el tono que quieres, ¿qué método es bueno?",
    choices: [
      "Limitarse a decir «adapta el tono como veas»",
      "Describirlo con una relación, como «como un compañero mayor que habla a uno más joven»",
      "Como el tono no se puede cambiar, usar la respuesta tal como llega sin tocarla",
      "Poner muchos signos de exclamación para transmitir cómo me siento en ese momento de la conversación",
    ],
    explain: "Si lo describes diciendo quién habla a quién, como «como un buen compañero mayor que habla a uno más joven», la IA capta bien el tono que quieres.",
  },
  "basic-s3-missing-goal": {
    prompt: "Subin escribió una larga carta contando lo mal que lo pasa por el ruido del vecino de arriba y la IA solo respondió con largas palabras de empatía. ¿Qué faltaba en la petición?",
    choices: [
      "El nombre y el número exacto de piso de la persona que vive arriba",
      "Escribir con más fuerza que estaba enfadada por el ruido",
      "Qué se le pedía hacer, como «escribe una nota educada»",
      "La petición de no contarle esta conversación a nadie",
    ],
    explain: "Si solo hay situación (contexto) y no hay lo que se quiere (objetivo), la IA responde suponiendo. Hay que decir con claridad qué se le pide hacer.",
  },
  "basic-s3-not-perfect-first": {
    prompt: "Para quien escribe por primera vez una petición a la IA, ¿cuál es la actitud más adecuada?",
    choices: [
      "Hay que escribir una petición perfecta a la primera, así que solo se envía después de pensarlo mucho",
      "Cuanto más corta la petición, mejor, así que se pregunta con una sola palabra y se espera",
      "Cuantos más términos técnicos en inglés se mezclen, mejor entiende la IA",
      "Contar la situación hasta donde se sepa y, viendo la respuesta, dar más información o corregir",
    ],
    explain: "No hace falta que salga perfecto a la primera. Cuenta tu situación hasta donde la conozcas y ve corrigiendo mientras sigues la conversación.",
  },
  "basic-s4-medicine": {
    prompt: "Le preguntaste a la IA cuántas veces al día hay que tomar un medicamento para el resfriado y respondió con seguridad. ¿Cuál es la acción más adecuada?",
    choices: [
      "Como la IA lo dijo con seguridad, tomarlo tal cual",
      "Si la respuesta es larga y detallada, es correcta, así que creerla y seguirla",
      "Volver a preguntar cambiando el tono y, si sale la misma respuesta, darla por buena",
      "Comprobarlo directamente en el prospecto o con el farmacéutico",
    ],
    explain: "En asuntos donde equivocarse causa mucho daño, como los médicos, aunque la IA hable con seguridad hay que comprobarlo en la fuente original o con un experto.",
  },
  "basic-s4-allow-unknown": {
    prompt: "¿Qué ayuda aporta añadir al final de la pregunta «si hay algo que no sabes, no te lo inventes y dime que no lo sabes»?",
    choices: [
      "Le das permiso para no adivinar, y así se inventa menos",
      "A partir de ahora la IA cambia y nunca se equivoca",
      "La IA pasa a añadir por sí sola una fuente real",
      "Desde entonces todas las respuestas serán únicamente «no lo sé»",
    ],
    explain: "La IA tiende a adivinar y responder incluso cuando no sabe. Si le dices de antemano que puede decir que no lo sabe, se inventa menos. Aun así, hace falta comprobar.",
  },
  "basic-s4-sure-guess": {
    prompt: "Si pides «marca por separado lo que es seguro y lo que has supuesto», ¿qué ventaja tiene?",
    choices: [
      "Lo marcado ya no hace falta comprobarlo aparte",
      "Se ve bien qué partes hay que comprobar por mi cuenta",
      "La IA borra por sí sola de la respuesta todo lo que supuso",
      "La respuesta se alarga y el contenido resulta más fiable",
    ],
    explain: "Si recibes por separado lo seguro y lo supuesto, ves qué hay que comprobar. Pero también puede estar mal lo que dijo que era «seguro».",
  },
  "basic-s4-law-article": {
    prompt: "La IA te dio el número de un artículo de una ley y dijo que era el fundamento. ¿Cuál es la mejor manera de comprobar si ese artículo es correcto?",
    choices: [
      "Preguntarle de nuevo «¿seguro?» y, si dice «sí», creerlo",
      "Dar por terminada la comprobación solo porque trae el número del artículo",
      "Buscar yo mismo el artículo en un sitio oficial, como el centro de leyes de Corea",
      "Enseñarle a un amigo la respuesta de la IA y preguntarle si le parece verosímil o no",
    ],
    explain: "El número del artículo también puede ser inventado. La comprobación termina cuando lo buscas en un sitio oficial y ves si el contenido es correcto.",
  },
  "basic-s4-confident-tone": {
    prompt: "La IA respondió en un tono tajante: «Es seguro». ¿Cómo hay que tomarse ese tono?",
    choices: [
      "Aunque el tono sea tajante, hay que comprobar aparte si el contenido es correcto",
      "Un tono tajante es la señal de que la IA lo ha buscado y comprobado ella misma antes",
      "Una respuesta que dice «es seguro» está hecha de modo que no puede ser errónea nunca",
      "Cuanto más seguro suena el tono, más antigua es la información de esa respuesta",
    ],
    explain: "La IA va encadenando palabras según lo verosímil que suenen, más que según si son ciertas, así que puede decir con seguridad incluso algo erróneo.",
  },
  "basic-s4-tweaked-problem": {
    prompt: "Tomaste un acertijo famoso muy extendido por internet, le cambiaste solo un número y se lo preguntaste a la IA. ¿Qué hay que tener en cuenta?",
    choices: [
      "Como es un acertijo famoso, la IA acierta siempre con exactitud incluso el número cambiado",
      "Si se cambia un poco un problema conocido, es más fácil que falle; se mira con cuidado",
      "Está establecido que la IA no responde a las preguntas con un número cambiado",
      "Un problema con un número cambiado solo se puede resolver subiendo una foto",
    ],
    explain: "En las investigaciones, el rendimiento de la IA bajaba incluso con solo cambiar un número o intercalar una frase sin relación. Cuanto más se parece la pregunta a un problema conocido ligeramente cambiado, con más cuidado se comprueba.",
  },
  "basic-s4-festival-date": {
    prompt: "Le preguntaste a la IA la fecha de la fiesta del barrio de este año y la respuesta no trae ninguna indicación de búsqueda ni fuente. ¿Qué conviene hacer?",
    choices: [
      "Creerla tal cual, porque la IA conoce todas las noticias en tiempo real, sin retrasos",
      "Como la fecha de la fiesta es igual cada año, moverme con la fecha del año pasado sin más",
      "Comprobarlo en el aviso oficial, porque puede no saber lo posterior a su entrenamiento",
      "Hacer la misma pregunta diez veces y quedarme con la fecha que más salga de todas",
    ],
    explain: "La IA puede no saber lo ocurrido después de su momento de entrenamiento (corte de conocimiento). Si respondió sin buscar, la información puede ser antigua, así que se comprueba en el aviso oficial.",
  },
  "basic-s4-blurry-receipt": {
    prompt: "Subiste una foto de un recibo con letras borrosas y pediste que leyera el importe, y la IA te dio enseguida una cifra. ¿Cuál es la actitud adecuada?",
    choices: [
      "La IA no puede equivocarse con los números que lee en una foto, así que los apunto tal cual",
      "Si la foto es borrosa, la IA no puede responder en absoluto, así que esta respuesta es la correcta",
      "La IA ve las fotos con más precisión que una persona, así que no hace falta que yo las mire",
      "Puede inventarse con apariencia creíble las letras borrosas, así que lo contrasto con el original",
    ],
    explain: "También al tratar fotos, la IA puede leer inventándose con apariencia creíble unas letras borrosas. Los números importantes se contrastan directamente con el original.",
  },
  "basic-s4-generic-answer": {
    prompt: "Preguntaste por el régimen de vacaciones de tu empresa y la IA solo dio una respuesta corriente, válida para cualquier empresa. ¿Cuál es el motivo principal?",
    choices: [
      "Que la IA está hecha para ocultar a propósito la información de las empresas",
      "Que la IA no conoce el reglamento de mi empresa y, si no se lo digo, responde en promedio",
      "Que las preguntas sobre vacaciones son un tema al que la IA no debe responder en ningún caso",
      "Que no hiciste la pregunta en tono de respeto y por eso la IA contestó sin esmero",
    ],
    explain: "La IA no sabe quién soy ni en qué empresa trabajo. Si no se lo cuento, responde para un «alguien» promedio, así que el reglamento real se comprueba con los documentos de la empresa.",
  },
  "basic-s4-museum": {
    prompt: "Quieres saber si puedes fiarte del día de cierre de un museo que te dijo la IA. ¿Cuál es el método más seguro?",
    choices: [
      "Hacerle la misma pregunta a otro servicio de IA y creerlo si la respuesta coincide",
      "Insistirle a la IA con «no puedes fallar» y volver a preguntar una vez más",
      "Comprobarlo yo mismo en la web oficial del museo o en su teléfono de información",
      "Si la IA dio una respuesta larga y detallada, ir sin comprobar nada",
    ],
    explain: "Preguntar a otra IA ayuda, pero no sustituye a la comprobación. Las dos pueden equivocarse, así que se comprueba en la fuente original, como una web oficial.",
  },
  "basic-s4-quote": {
    prompt: "La IA te dio varias frases célebres de personajes famosos para tu presentación. ¿Qué hay que hacer antes de usarlas tal cual?",
    choices: [
      "Como llevan el nombre de un famoso, darlas por dichas de verdad y ponerlas enseguida",
      "Fijarse solo en cuál suena mejor y elegir la más bonita",
      "Preguntarle a la IA «¿esto es de verdad?» y, si dice «sí», ponerlo",
      "Comprobar en una fuente fiable si esa persona dijo realmente esas palabras",
    ],
    explain: "Las citas son un contenido que a la IA le resulta fácil inventarse con apariencia creíble. Se usan después de comprobar en la fuente original que de verdad se dijeron.",
  },
  "basic-s4-final-check": {
    prompt: "Vas a enviar a los socios un aviso de reunión que escribió la IA. ¿Qué es lo primero que hay que comprobar antes de enviarlo?",
    choices: [
      "Que la fecha, la hora y el lugar coincidan con lo que yo decidí",
      "Que el aviso lleve suficientes emojis",
      "Que el aviso parezca o no un texto escrito por una IA",
      "Que todas las frases tengan exactamente el mismo número de letras",
    ],
    explain: "Lo que resulta grave si se equivoca, como los números, las fechas y los nombres, se comprueba por tu cuenta después de recibirlo. La IA puede haber escrito algo distinto de lo que dije.",
  },
  "basic-s5-server": {
    prompt: "Lo que escribes en la ventana de chat de la IA, ¿a dónde va normalmente?",
    choices: [
      "Se envía a los servidores de la empresa de IA, donde puede quedar guardado",
      "Se queda solo en mi móvil o en mi ordenador y no sale nunca a ningún otro sitio",
      "Al cerrar la ventana de chat desaparece sin quedar en ninguna parte",
      "Se ve también en las pantallas de otros usuarios que usan el mismo servicio",
    ],
    explain: "Lo que escribes no se queda en tu dispositivo, sino que se envía a los servidores de la empresa de IA y, según el servicio y los ajustes, se guarda allí.",
  },
  "basic-s5-training-setting": {
    prompt: "Sobre si las conversaciones que escribes se usan para el entrenamiento que mejora la IA, ¿qué explicación es la adecuada?",
    choices: [
      "En ningún servicio se usan nunca las conversaciones para entrenar",
      "Pueden usarse según el servicio y los ajustes, así que lo compruebo yo mismo",
      "Solo se usan para entrenar las conversaciones de quienes no pagan",
      "Las conversaciones usadas en el entrenamiento se publican tal cual en internet",
    ],
    explain: "Lo que escribes puede usarse para entrenar o ser leído por revisores humanos, según el servicio y los ajustes. Los ajustes y los valores por defecto cambian según el servicio, así que se comprueban.",
  },
  "basic-s5-verification-code": {
    prompt: "No sabes qué significa el SMS con el código de verificación que mandó el banco y quieres copiar el mensaje y preguntárselo a la IA. ¿Cuál es el método más adecuado?",
    choices: [
      "Pegar el mensaje entero tal cual, para que la respuesta sea lo más exacta posible",
      "El código de verificación son solo números, así que no pasa nada por ponerlo tal cual",
      "Borrar o tapar el código de verificación y preguntar solo lo que quiero saber del SMS",
      "Poner el código de verificación y pedirle a la IA que lo introduzca por mí en el banco",
    ],
    explain: "Los datos de acceso, como los códigos de verificación y las contraseñas, no se ponen en la IA. Se deja solo lo necesario, se tapa lo demás y entonces se pregunta.",
  },
  "basic-s5-friend-secret": {
    prompt: "Quieres preguntarle a la IA cómo consolar a una persona cercana que te contó un problema suyo. ¿Cuál es el método más adecuado?",
    choices: [
      "Escribir sin omitir nada el nombre de esa persona, su contacto y el contenido de su problema",
      "Subir una captura completa de la conversación de mensajería con esa persona, con el nombre a la vista",
      "Sin preguntarle a esa persona, copiar el problema con el mayor detalle posible",
      "Quitar el nombre y lo demás para que no la reconozcan y escribir solo la situación",
    ],
    explain: "Los datos personales de otra persona y lo que te confió en una consulta también son información que no se debe poner. Se cambia o se quita para que no se sepa de quién se trata y se escribe solo la situación.",
  },
  "basic-s5-company-rule": {
    prompt: "Taeho, un empleado nuevo, quiere ordenar con IA un informe de trabajo de la empresa. ¿Qué es lo primero que debe hacer?",
    choices: [
      "Pegar el informe original entero para terminar lo antes posible",
      "Subirlo a escondidas a su cuenta personal de IA de casa para ordenarlo",
      "Comprobar si la empresa tiene una norma de uso de IA y qué se puede usar",
      "Poner también los nombres y los resultados de sus compañeros y preguntar con detalle",
    ],
    explain: "Cuando se usa en el trabajo, primero se comprueba la norma de uso de IA de la empresa. Muchas empresas solo permiten usar la IA contratada aparte para el trabajo.",
  },
  "basic-s5-health-record": {
    prompt: "Vas a subir una foto de los resultados de tu chequeo médico para pedir que te expliquen los valores con palabras fáciles. ¿Qué hay que hacer antes de subirla?",
    choices: [
      "Fotografiar en grande hasta el nombre y el número de registro de residente, para que se vea bien",
      "Como los datos de salud no son sensibles, subirla sin tapar nada",
      "Subir junto con los resultados también todos los historiales médicos de otros hospitales",
      "Tapar el nombre y el número de registro de residente y dejar a la vista solo los valores",
    ],
    explain: "Los historiales de salud son información sensible, y el número de registro de residente es un número que te identifica a ti. Antes de ponerlos se tapan y se envía solo la parte necesaria.",
  },
  "basic-s5-homework-rule": {
    prompt: "Jiwoo, universitaria, va a escribir con ayuda de la IA el informe de un trabajo. ¿Qué es lo más adecuado que debe comprobar antes?",
    choices: [
      "Las normas de la universidad o la asignatura, como declarar el uso de IA",
      "Si el texto escrito por la IA pasa el corrector ortográfico sin ningún error",
      "Los rumores sobre cuántas veces ha usado la IA cada uno de los amigos",
      "Si la IA cuenta con exactitud el número de letras del informe, sin fallar",
    ],
    explain: "Si es un trabajo de la universidad o un documento de la empresa, se comprueba la norma sobre si hay que declarar que se usó IA. El resultado de la IA no se entrega tal cual, sino que se corrige y se completa por tu cuenta.",
  },
  "basic-s5-book-chapter": {
    prompt: "Pegas entero un capítulo de tu novela favorita, dices «cambia un poco las expresiones» y piensas subir el resultado a tu blog como si fuera tuyo. ¿Cuál es la explicación adecuada?",
    choices: [
      "Como se cambiaron las expresiones, ya es una creación totalmente nueva mía",
      "El resultado se parece al original y puede ser un problema de derechos de autor",
      "Como es un texto que cambió la IA, no tiene nada que ver con el autor original de la obra",
      "Como no gano dinero con el blog, da igual qué texto suba",
    ],
    explain: "Si metes la obra de otra persona y haces que la cambien un poco, el resultado se parece a la original y puede dar problemas. Se evita usar como propio un resultado que es una copia.",
  },
  "basic-s5-summary-ok": {
    prompt: "Entre las formas de trabajar con el texto de otra persona junto con la IA, ¿cuál se parece más a estudiar?",
    choices: [
      "Hacer que cambien un poco el texto ajeno y presentarlo con mi nombre",
      "Pedir un resumen o un análisis para entender el contenido de ese texto",
      "Hacer que reescriban el texto ajeno tal cual y entregarlo como mi tarea",
      "Hacer que lo copien con el mismo estilo del texto ajeno y venderlo",
    ],
    explain: "Pedir que resuman o analicen el texto de otra persona se parece más a estudiar, y usar como propio el resultado que lo copia se parece más a un problema.",
  },
  "basic-s5-one-sided": {
    prompt: "Copiaste y pegaste la página de un producto y preguntaste por sus pros y contras, pero solo llegaron elogios, sin ni una desventaja. ¿Qué es lo más adecuado?",
    choices: [
      "Puede haber instrucciones escondidas en el texto, así que reviso yo mismo el original",
      "Si no tiene ni una desventaja, será un producto buenísimo y lo pido enseguida",
      "Cuantos más elogios, más exacto es el análisis, así que me creo la respuesta de la IA tal cual",
      "Pegar otra vez la misma página y comprar si vuelven a salir elogios",
    ],
    explain: "Si la IA se deja engañar por una frase escondida en el texto que pegaste, el resultado puede inclinarse hacia un lado (inyección de instrucciones, prompt injection). Si el resultado sale raramente sesgado, se comprueba el texto original.",
  },
  "basic-s5-ai-actions": {
    prompt: "¿Por qué hay que tener más cuidado cuando se le hace actuar directamente a la IA, como enviar un correo o pagar, que cuando solo se le pide un resumen?",
    choices: [
      "Porque si se le encarga actuar, la IA deja de decir cosas erróneas",
      "Porque la ley prohíbe todo lo que haga directamente la IA",
      "Porque al encargarle actuar las respuestas de la IA se acortan y van mucho más lentas",
      "Porque, si la engañan unas instrucciones escondidas, el daño real es mayor",
    ],
    explain: "Cuanto mayor es la tarea que se le encarga a la IA, mayor es el daño si sale mal. Aún no hay una forma de bloquear del todo las instrucciones escondidas, así que se tiene más cuidado.",
  },
  "basic-s5-address": {
    prompt: "Vas a pulir con IA un mensaje de consulta que enviarás a una empresa de mudanzas. ¿Cómo conviene poner la dirección de tu casa?",
    choices: [
      "Escribir el número exacto de edificio y de piso, e incluso el código de la puerta común",
      "Como no se puede omitir la dirección, escribir con exactitud hasta el código postal",
      "Cambiarla y poner solo lo necesario, como «un apartamento en el distrito ○○, planta 3»",
      "En vez de la dirección, poner el número de registro de residente para demostrar quién soy",
    ],
    explain: "La dirección exacta es información sensible. Escribe solo lo necesario para recibir ayuda y cambia o deja en blanco el resto, para rellenarlo cuando lo envíes a la empresa.",
  },
}
