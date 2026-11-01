// es text for exam (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const EXAM: Record<string, QuestionText> = {
  "ex1-made-up-titles": {
    prompt: "A veces la IA habla de títulos de libros que no existen como si fueran reales. ¿Por qué?",
    choices: [
      "Porque cambia los títulos a propósito, por una cuestión de derechos de autor",
      "Porque solo está hecha para dar a conocer libros que han salido hace poco",
      "Porque elige palabras verosímiles antes que ciertas y las encadena",
      "Porque su lista de libros guardada está desactualizada",
    ],
    explain: "Como la IA va encadenando las palabras más verosímiles que vienen a continuación, puede inventarse con seguridad incluso lo que no sabe. Los títulos, los números y las citas se comprueban en su fuente original. (capítulo 1)",
  },
  "ex1-same-answer": {
    prompt: "Ante la misma pregunta, la IA dio cinco veces exactamente la misma respuesta. ¿Es una respuesta correcta?",
    choices: [
      "No necesariamente. Puede equivocarse igual todas las veces",
      "Sí. Si sale igual todas las veces, la comprobación ha terminado",
      "No. Significa que la IA está estropeada",
      "Sí. Significa que cada vez encontró el mismo texto en internet",
    ],
    explain: "Un hecho que conoce bien se concentra en una sola respuesta y sale igual todas las veces, pero si aprendió un error muy común, puede concentrarse en el lado equivocado y fallar igual todas las veces. (capítulo 1)",
  },
  "ex1-photo-count": {
    prompt: "Subiste una foto de la nevera y le pediste a la IA que contara lo que hay; respondió: «12 huevos». ¿Qué conviene hacer?",
    choices: [
      "Creerlo tal cual, porque una IA que ve fotos no se equivoca",
      "Subir otra vez la misma foto y creerlo si la respuesta es igual",
      "No preguntar cuántos hay y preguntar solo cómo se llaman",
      "Contarlos yo mismo y compararlos con la respuesta de la IA",
    ],
    explain: "Incluso cuando mira fotos, la IA se equivoca a menudo al contar objetos o leer letras pequeñas, y a veces dice que hay cosas que no están. Pídele que separe lo que se ve con claridad de lo que supone, y comprueba tú mismo. (capítulo 1)",
  },
  "ex1-fast-or-big": {
    prompt: "Puedes elegir entre un modelo rápido y un modelo más inteligente. ¿A cuál encargarías la revisión ortográfica y a cuál la comparación de contratos?",
    choices: [
      "Las dos tareas al modelo inteligente",
      "La ortografía al modelo rápido y el contrato al modelo inteligente",
      "Buscar en internet el modelo más grande y encargarle las dos tareas",
      "Las dos al modelo rápido, porque es más exacto",
    ],
    explain: "Los modelos grandes tienden a hacer mejor las tareas difíciles, pero son más lentos y cuestan más. Lo más exacto es encargar las tareas sencillas al modelo rápido y las difíciles al grande, y comparar los resultados. (capítulo 1)",
  },
  "ex2-transformer-why": {
    prompt: "Con la llegada del transformer (nueva estructura de IA) en 2017, la IA aprendió texto más rápido. ¿Qué cambió?",
    choices: [
      "Pasó a leer cada palabra con más detalle, una por una",
      "Pasó a examinar a la vez todas las palabras de una frase",
      "Las personas introdujeron a mano el significado de cada palabra",
      "Pasó a memorizar por completo los textos de internet",
    ],
    explain: "El método anterior tenía que leer las palabras una por una en orden, pero el transformer examina a la vez las relaciones entre las palabras. Por eso se pudo entrenar rápido, repartiendo el trabajo entre muchos ordenadores. (capítulo 2)",
  },
  "ex2-copyright-issue": {
    prompt: "La preocupación por los «derechos de autor» en torno a la IA, ¿a qué se refiere?",
    choices: [
      "Al problema de impedir que otros usen el nombre y el logotipo de una empresa",
      "Al problema de que los estudiantes le encarguen los deberes a la IA",
      "Al problema de que se guarde la información que yo introduzco",
      "A los derechos de los textos e imágenes de su aprendizaje y de lo que crea",
    ],
    explain: "La polémica de los derechos de autor gira en torno a los derechos de los textos e imágenes usados para el aprendizaje y a los del resultado. El problema de los deberes es de educación y el de lo que se guarda es una polémica de datos personales. (capítulo 2)",
  },
  "ex2-check-date": {
    prompt: "Le preguntaste a ChatGPT la fecha de su primer lanzamiento y respondió con una fuente. ¿Qué haces ahora?",
    choices: [
      "Comprobar yo mismo la fecha en un material de confianza",
      "Usarla enseguida sin comprobarla, porque trae fuente",
      "Preguntar una vez más y creerla si la respuesta es la misma",
      "Usarla tal cual, porque una fecha no puede estar mal",
    ],
    explain: "Una fecha o un número que da la IA puede ser correcto o no. El capítulo 2 señala este «hábito de comprobar» como el más importante de toda la guía. (capítulo 2)",
  },
  "ex2-not-sudden": {
    prompt: "Tu abuela pregunta: «¿ChatGPT es una tecnología que apareció de golpe en 2022?». ¿Cuál es la respuesta correcta?",
    choices: [
      "«Sí, se hizo en unos pocos meses en 2022».",
      "«No, desde 2017 todo el mundo la ha usado ya en una aplicación del móvil».",
      "«No, se investiga desde hace mucho y se abrió al público en 2022».",
      "«Sí, antes no existía ninguna investigación sobre IA».",
    ],
    explain: "La investigación en IA se ha prolongado durante décadas. El artículo del transformer de 2017 fue el punto de partida de la tecnología y la apertura gratuita de ChatGPT en noviembre de 2022 fue lo que hizo que cualquiera pudiera usarla. (capítulo 2)",
  },
  "ex3-save-time": {
    prompt: "Dicen que, si usas bien la IA, ahorras tiempo. ¿Qué tiempo se reduce?",
    choices: [
      "El tiempo de volver a comprobar el resultado desaparece del todo",
      "Si memorizas los comandos, la IA responde con más rapidez",
      "Desaparece por completo el tiempo que yo dedico a trabajar",
      "El primer paso, como escribir un borrador, baja a unos minutos",
    ],
    explain: "Se puede reducir a unos minutos el primer paso de tareas que llevaban mucho tiempo, como escribir un borrador u ordenar. Aun así, la IA también puede equivocarse, así que lo importante se sigue comprobando. (capítulo 3)",
  },
  "ex3-starting-point": {
    prompt: "Para crear algo con la IA, ¿por qué hay que empezar aprendiendo «a preguntar bien»?",
    choices: [
      "Porque, si preguntas bien, la IA nunca se equivoca",
      "Porque primero hay que memorizar comandos especiales",
      "Porque crear también empieza por transmitir lo que quieres",
      "Porque, si preguntas bien, la IA termina todo lo demás ella sola",
    ],
    explain: "Cuando se crea algo con la IA, el punto de partida es saber pedir y transmitir bien lo que se quiere. No hacen falta comandos especiales. (capítulo 3)",
  },
  "ex3-busan-trip": {
    prompt: "Le pediste un itinerario de viaje a Busan con tus padres y llegó uno apretado, caminando todo el día. ¿Qué envías a continuación?",
    choices: [
      "«No me gusta. Hazlo otra vez con un itinerario mucho mejor que este».",
      "«Voy con mis padres, 3 días y 2 noches. Que se camine menos».",
      "«Hazlo para otra ciudad distinta de Busan, no para esta».",
      "«Olvida el itinerario, solo dime los restaurantes más famosos de allí».",
    ],
    explain: "Si no sabe quién viaja ni qué es importante, la IA da una respuesta corriente. Si le dices con quién vas y la condición que no se puede incumplir, llega un itinerario que ya se puede usar. (capítulo 3)",
  },
  "ex3-gave-up": {
    prompt: "No te gustó el aviso que escribió la IA, dijiste «no sirve» y cerraste la ventana. ¿Qué habría sido mejor?",
    choices: [
      "Decir en la misma conversación qué corregir y pedirlo otra vez",
      "Buscar y memorizar comandos difíciles y empezar de nuevo desde cero",
      "Enviar exactamente la misma petición a otra IA distinta",
      "Seguir enviando la misma frase una y otra vez hasta que me guste",
    ],
    explain: "Más que esperar una respuesta perfecta a la primera, lo normal es seguir conversando y pedir que corrija. (capítulo 3)",
  },
  "ex4-why-upfront": {
    prompt: "Un compañero pregunta cuando no sabe algo. ¿Por qué a la IA hay que contarle la situación con detalle desde el principio?",
    choices: [
      "Porque la IA muchas veces no pregunta, sino que escribe suponiendo",
      "Porque la IA no sabe leer bien los textos cortos",
      "Porque la IA solo lee el primer mensaje y descarta lo que envías después",
      "Porque cuanto más larga es la respuesta, siempre es más exacta",
    ],
    explain: "Donde un compañero preguntaría de vuelta, la IA casi siempre escribe suponiendo. Por eso se le dice desde el principio de qué se trata, quién lo va a leer y cuánto debe durar. (capítulo 4)",
  },
  "ex4-checklist": {
    prompt: "Los cinco elementos de una buena petición (lo que quieres, la situación, quién lo lee, la forma de la respuesta y lo que hay que respetar), ¿cuándo conviene usarlos?",
    choices: [
      "Incluir los cinco cada vez, incluso en preguntas cortas",
      "Para revisar qué falta cuando la respuesta no convence",
      "Elegir solo uno de los cinco y ponerlo",
      "Escribirlos y enviarlos siempre en un orden fijo",
    ],
    explain: "No hace falta incluir los cinco cada vez. Se usan como lista de comprobación para encontrar lo que falta cuando la respuesta no convence. (capítulo 4)",
  },
  "ex4-flower-shop": {
    prompt: "Le pediste un texto promocional para una floristería y llegó un texto corriente que valdría para cualquier tienda. ¿Qué envías a continuación?",
    choices: [
      "«Vuelve a escribirlo con un aire más bonito, más elegante y mucho más sofisticado».",
      "«Escribe cinco textos promocionales más y elige tú el mejor de todos».",
      "«Mis clientes son oficinistas al salir del trabajo. Dos líneas para la pizarra».",
      "«Es muy corriente. Cámbialo del todo y dale un aire mucho más actual».",
    ],
    explain: "La respuesta corriente sale porque la IA no conoce la situación de la tienda, a los clientes ni dónde se usará. Si le dices la situación, quién lo lee y la forma de la respuesta, llega un texto hecho solo para esa tienda. (capítulo 4)",
  },
  "ex4-first-sentence": {
    prompt: "Un universitario va a pedirle a la IA ayuda con una presentación. ¿Cuál es la mejor primera frase?",
    choices: [
      "«Ayúdame con una presentación. Gracias de antemano».",
      "«Cuéntame todo sobre cómo hacer buenas presentaciones».",
      "«Eres el mejor experto en presentaciones del mundo. Dime todos tus mejores trucos y secretos».",
      "«Soy universitario y la semana que viene hago una presentación de 10 minutos en clase».",
    ],
    explain: "Si empiezas con «soy tal y quiero hacer tal cosa», esa sola frase ya incluye tu situación y lo que quieres. (capítulo 4)",
  },
  "ex5-role-switch": {
    prompt: "Pediste que mirara tu carta de presentación desde el punto de vista de un responsable de recursos humanos y desde el de una persona que la ve por primera vez. ¿Cómo serán las dos respuestas?",
    choices: [
      "Idénticas, sin una sola letra de diferencia entre las dos",
      "La IA ignora la segunda petición y no responde a ella",
      "Cada punto de vista ve cosas distintas, y las observaciones también",
      "La IA reescribe la carta de presentación desde cero, sin que se lo pidas",
    ],
    explain: "Si le dices desde el punto de vista de quién mirar, señala primero lo que importa desde esa perspectiva. Si cambias el punto de vista, salen observaciones distintas. (capítulo 5)",
  },
  "ex5-outline-first": {
    prompt: "Al pedir un texto largo de bienvenida, recibir primero el índice acaba ahorrando tiempo. ¿Por qué?",
    choices: [
      "Porque mientras escribe el índice no se cobra nada",
      "Porque sin índice la IA no sabe escribir textos largos",
      "Porque el texto principal acabaría escribiéndolo yo mismo",
      "Porque así se ve pronto si el rumbo del texto es erróneo",
    ],
    explain: "Si lo pides todo de una vez, solo te das cuenta de que el rumbo era equivocado cuando ya ha salido el texto largo. Si primero compruebas y corriges el esqueleto y después recibes el texto principal, hay menos que rehacer. (capítulo 5)",
  },
  "ex5-copied-example": {
    prompt: "Diste como ejemplo un texto sobre pan de molde de calabaza y pediste un texto promocional de pan de sal, pero salió mezclado con la calabaza. ¿Qué envías a continuación?",
    choices: [
      "«Olvida el ejemplo y escribe como quieras».",
      "«Imita solo el tono y escribe el contenido sobre el pan de sal».",
      "«Te daré más ejemplos de calabaza, así que escríbelo exactamente igual».",
      "«Preséntalo como un pan de sal que lleva calabaza».",
    ],
    explain: "Si le muestras un ejemplo, la IA puede imitar no solo el tono, sino también el contenido del ejemplo. Basta con escribir qué imitar y qué cambiar. (capítulo 5)",
  },
  "ex5-phone-plans": {
    prompt: "Quieres preguntarle a la IA cuál de las dos opciones, autobús o metro, permite salir más tarde y aun así llegar a las 9. ¿Qué añades?",
    choices: [
      "«Suma los tiempos paso a paso, muéstramelos y responde».",
      "«Sin hacer cálculos, responde con una sola palabra y nada más».",
      "«Dime cuál usa más gente que va ahora al trabajo por la mañana».",
      "«No lo pienses tanto, elige por intuición y ya está».",
    ],
    explain: "En preguntas que necesitan pasos intermedios, como sumar tiempos y compararlos, a menudo se acierta más si se le hace responder escribiendo paso a paso. Además, yo mismo puedo comprobar en qué paso se equivocó. (capítulo 5)",
  },
  "ex6-long-chat": {
    prompt: "En una misma conversación hiciste durante un buen rato frases promocionales y luego pediste un currículum, pero se mezcló un tono de anuncio. ¿Por qué?",
    choices: [
      "Porque la IA no sabe cómo se escribe un currículum",
      "Porque lo hablado antes influye en las respuestas posteriores",
      "Porque la IA confundió las frases promocionales con un currículum",
      "Porque cada ventana de conversación solo puede usar un único tono",
    ],
    explain: "Si una conversación se alarga mucho, lo hablado antes sigue influyendo. Cuando cambia el tema, conviene empezar una conversación nueva. (capítulo 6)",
  },
  "ex6-same-chat": {
    prompt: "En la misma conversación, si dices «acorta solo el segundo párrafo del texto que acabas de escribir», la IA lo entiende. ¿Por qué?",
    choices: [
      "Porque relee toda esa conversación cada vez que responde",
      "Porque abre a escondidas los archivos guardados en mi ordenador",
      "Porque recuerda para siempre un texto que ya ha visto una vez",
      "Porque va a buscar ese texto a internet",
    ],
    explain: "Más que guardar recuerdos, la IA vuelve a leer toda la conversación cada vez, dentro de la cantidad que puede leer de una vez, y responde. En una conversación nueva, por defecto, no sabe nada de lo anterior. (capítulo 6)",
  },
  "ex6-be-specific": {
    prompt: "A una carta que escribió la IA solo le dijiste «no me gusta, escríbela otra vez» y llegó otra carta parecida. ¿Qué dices ahora?",
    choices: [
      "«Sigue sin gustarme. Escríbela una vez más».",
      "«Escribe diez cartas más con un ambiente totalmente distinto».",
      "«Esta vez cámbiala al inglés y escríbela».",
      "«Deja el primer párrafo y acorta el último a dos frases».",
    ],
    explain: "Si no sabe qué es lo que no te gusta, la IA vuelve a darte un texto parecido. Dile qué parte cambiar, cómo cambiarla y qué dejar como está. (capítulo 6)",
  },
  "ex6-edit-question": {
    prompt: "Enviaste «recomiéndame un restaurante para una reunión familiar» y después te diste cuenta de que olvidaste el número de personas y el presupuesto. ¿Qué haces?",
    choices: [
      "Dejar la pregunta como está y pulsar solo el botón de regenerar la respuesta",
      "Esperar un momento y volver a ver la misma respuesta",
      "Corregir mi pregunta y añadir el número de personas y el presupuesto",
      "Enviar la misma pregunta una y otra vez hasta que salga bien",
    ],
    explain: "Si a la primera pregunta le faltaba información, corrige tu pregunta y vuelve a enviarla. Regenerar se usa cuando la pregunta está bien pero la respuesta salió mala por casualidad. (capítulo 6)",
  },
  "ex7-question-last": {
    prompt: "Al pegar un material muy largo y hacer una pregunta, ¿dónde conviene poner la pregunta?",
    choices: [
      "La pregunta arriba del todo y el material debajo",
      "En medio del material, justo al lado del contenido relacionado",
      "No escribir la pregunta y enviar solo el material",
      "El material arriba del todo y la pregunta al final",
    ],
    explain: "Según la documentación de la empresa que creó Claude, al poner el material arriba y la pregunta al final, la calidad de la respuesta mejoró hasta un 30 %. El efecto fue especialmente grande cuando había varios materiales. (capítulo 7)",
  },
  "ex7-wrap-material": {
    prompt: "Estás dividiendo tu petición con títulos como «## Tarea». ¿Cómo marcas el material largo que pegas?",
    choices: [
      "Basta con ponerle solo un título «## Material»",
      "Envolverlo con líneas separadoras (---) por arriba y por abajo",
      "Poner # delante de todas las líneas del material",
      "Para no confundir, quitar del todo el material y enviar solo la tarea",
    ],
    explain: "Un título con # solo marca «desde aquí» y no marca dónde termina. Por eso el material que pegas se envuelve con líneas separadoras por arriba y por abajo para dejar claro el límite. (capítulo 7)",
  },
  "ex7-two-quotes": {
    prompt: "Vas a pegar dos presupuestos, el de la empresa A y el de la B, y pedir que los compare. ¿Cómo los pegas?",
    choices: [
      "Ponerle a cada presupuesto una etiqueta con el nombre de su empresa",
      "Uniendo los dos seguidos, sin ninguna separación entre ellos",
      "Pegando solo uno y explicando el otro como lo recuerde después",
      "Mezclando el contenido de los dos presupuestos al pegarlos juntos en el chat",
    ],
    explain: "Si hay varios materiales, hay que envolver cada uno con un nombre para que la IA no se confunda sobre de qué empresa es cada cosa. El material largo va arriba y la tarea, como los criterios de comparación, abajo. (capítulo 7)",
  },
  "ex7-cards-table": {
    prompt: "Quieres pasar a Excel el contenido de diez tarjetas de visita. ¿Qué le pides a la IA?",
    choices: [
      "«Desarróllalo en frases, explicando persona por persona lo que pone cada tarjeta».",
      "«Marca en negrita solo lo importante de cada una de las tarjetas».",
      "«Ordénalo en una tabla con columnas de nombre, empresa, teléfono y correo».",
      "«Escribe un párrafo presentando a la persona de cada tarjeta, una por una».",
    ],
    explain: "Para pasar la respuesta a Excel, pídela en forma de tabla. Si arrastras para copiar la tabla dibujada en la ventana de chat y la pegas, por lo general las celdas entran ya separadas. (capítulo 7)",
  },
  "ex8-dont-run-yet": {
    prompt: "Al pedirle a la IA que pula tu petición, ¿por qué se añade «solo púlela, no hagas esa tarea»?",
    choices: [
      "Porque, si no, puede hacer también esa tarea enseguida",
      "Porque, si no, la IA se niega a pulir un texto que es de otro",
      "Porque así el texto pulido sale más largo",
      "Porque, si no, la IA traduce el texto al inglés",
    ],
    explain: "Si solo quieres que la pula, hay que decirle claramente que aún no haga esa tarea. Así puedes leer y corregir la petición pulida antes de enviarla. (capítulo 8)",
  },
  "ex8-learn-why": {
    prompt: "Le mostraste una petición que no funcionó y le dijiste: «Explica qué faltaba y corrígela». ¿Qué ventaja tiene?",
    choices: [
      "Desde ahora la IA me corrige sola todas mis peticiones",
      "La petición corregida siempre es más corta",
      "Me entero de lo que faltaba y la próxima vez lo tengo en cuenta",
      "Como la corrigió la IA, ya no hace falta comprobar la respuesta recibida",
    ],
    explain: "Por ejemplo, si te explica que «no indicaste quién lo lee», a partir de entonces no se te olvidará. Y si la respuesta a la petición corregida tampoco convence, se puede corregir otra vez. (capítulo 8)",
  },
  "ex8-send-new-chat": {
    prompt: "Puliste con la IA una petición de viaje y rellenaste también todos los huecos. ¿Dónde conviene enviar este texto?",
    choices: [
      "Seguir enviándolo en la misma conversación donde lo pulía",
      "Añadir «bien hecho» y enviarlo en la misma conversación",
      "No enviarlo y guardarlo solo en el bloc de notas",
      "Abrir una conversación nueva, pegarlo allí y enviarlo",
    ],
    explain: "Se pega en una conversación nueva para que los restos de la conversación donde lo pulías no se mezclen en la respuesta. (capítulo 8)",
  },
  "ex8-limit-questions": {
    prompt: "Dijiste «hazme las preguntas una por una» y las preguntas de la IA no acababan nunca. ¿Qué habría sido bueno añadir al principio?",
    choices: [
      "«No me hagas preguntas, decide tú todo».",
      "«Hazme solo hasta 5 preguntas».",
      "«Hazme más preguntas».",
      "«Junta las preguntas en una sola frase».",
    ],
    explain: "Cuando se construye la petición respondiendo preguntas, si fijas el número de preguntas desde el principio, no se alargan sin fin. (capítulo 8)",
  },
  "ex9-why-guess": {
    prompt: "A veces la IA no dice «no lo sé» ante algo que desconoce y se lo inventa. ¿Cuál es el motivo que han encontrado los investigadores?",
    choices: [
      "Que la empresa la hizo así para engañar a los usuarios",
      "Que nunca aprendió a decir «no lo sé»",
      "Que se la entrena de modo que le conviene más adivinar que decir que no sabe",
      "Que, cuando la búsqueda está desactivada, está hecha para inventarse todo sin remedio",
    ],
    explain: "Es la explicación de un artículo de 2025. Se parece a un estudiante que ante un examen difícil escribe cualquier respuesta en vez de dejarlo en blanco. Si le das permiso de antemano con «si no lo sabes, dilo», se inventa menos. (capítulo 9)",
  },
  "ex9-ok-to-show": {
    prompt: "Antes de escribir algo en la ventana de chat de la IA, ¿cuál es la mejor pregunta que puedes hacerte?",
    choices: [
      "«¿No será demasiado largo y no podrá leerlo todo?»",
      "«¿Es un contenido que no me importa que vean otras personas?»",
      "«¿No sería más seguro cambiarlo al inglés antes de enviarlo a la IA?»",
      "«¿No estará bien si lo envío en varias partes, una tras otra?»",
    ],
    explain: "Lo que escribes va a los servidores de la empresa de IA, donde se guarda, y según los ajustes puede usarse para entrenar o ser revisado por personas. Si no te parece bien que se vea, no lo escribas o tápalo. (capítulo 9)",
  },
  "ex9-click-link": {
    prompt: "Pediste un resumen de un correo que llegó de un remitente desconocido y al final decía: «Pulsa el enlace e introduce los datos de tu cuenta». ¿Qué haces?",
    choices: [
      "Detenerme y comprobar yo mismo el correo original",
      "Creerlo e introducirlos, porque lo recomendó la IA",
      "Pedir otro resumen y, si dice lo mismo, hacerle caso",
      "Introducir todo menos la contraseña",
    ],
    explain: "Si, sin que yo lo haya pedido, te dice que pulses un enlace, que introduzcas datos o que envíes dinero, detente. En el material externo, como un correo, puede haber frases escondidas para engañar a la IA. (capítulo 9)",
  },
  "ex9-sell-art": {
    prompt: "Quieres vender como merchandising un dibujo de un gato hecho con IA. ¿Qué debes hacer primero?",
    choices: [
      "Venderlo sin más, porque es un servicio de pago",
      "Volver a hacerlo con un aire idéntico al dibujo de un artista famoso y venderlo",
      "Cambiar el nombre del archivo por el mío y venderlo",
      "Mirar en las condiciones si se puede vender y añadirle algo de trabajo propio",
    ],
    explain: "Si piensas vender, comprueba las condiciones de uso comercial en los términos del servicio y, en vez de usarlo tal cual, corrígelo y añádele cosas tú mismo. Si hay dinero de por medio, consúltalo también con un experto. (capítulo 9)",
  },
}
