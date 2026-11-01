// es text for codex (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const CODEX: Record<string, QuestionText> = {
  "ch501-modes": {
    prompt: "En la aplicación de escritorio de ChatGPT quieres modificar los archivos de una carpeta y ver tú mismo qué ha cambiado. ¿Qué modo eliges?",
    choices: [
      "Chat: una conversación en la que preguntas, recibes respuestas y pules ideas juntos",
      "Work: oculta los datos técnicos, como Git o los comandos, y solo muestra el resultado terminado",
      "Codex: muestra también los datos técnicos, como lo que ha cambiado",
      "El chat temporal del navegador web",
    ],
    explain: "Work y Codex pueden hacer cosas parecidas, pero Codex muestra datos técnicos como el diff (lo que ha cambiado). Por eso es más fácil comparar el resultado con el original.",
  },
  "ch501-compare": {
    prompt: "Dejaste CLAUDE.md, el archivo de reglas que usabas con Claude Code, en la carpeta «Herramienta de orden» y abriste Codex. ¿Qué pasa?",
    choices: [
      "Codex encuentra solo el CLAUDE.md de la carpeta, lo lee y cumple sus reglas tal cual",
      "Codex lee AGENTS.md, así que si dejas CLAUDE.md como está, no lo lee",
      "Codex borra CLAUDE.md y crea un AGENTS.md igual",
      "Codex no usa ningún archivo de reglas y solo sigue lo que se dice en la conversación",
    ],
    explain: "El archivo de reglas de Codex se llama AGENTS.md. Ignora otros nombres que no estén registrados, así que, al trasladar tu herramienta de orden, empieza por cambiar este archivo.",
  },
  "ch501-where": {
    prompt: "No ves Codex en la aplicación de ChatGPT con una cuenta gratuita (Free). ¿Cuál es la explicación más adecuada?",
    choices: [
      "Free y Go se abren de forma gradual, así que puede que todavía no esté disponible",
      "Codex es solo para Windows",
      "Codex está pensado para que no se pueda usar nunca con una cuenta gratuita, en ningún caso",
      "Si borras la aplicación y la instalas de nuevo, aparece seguro, sea cual sea la cuenta",
    ],
    explain: "La información oficial de precios indica que Codex en Free y Go está en la aplicación de escritorio, con un modelo ligero y de forma gradual. Se va abriendo cuenta por cuenta, por turnos.",
  },
  "ch502-install": {
    prompt: "¿Qué es lo primero que hay que hacer para usar Codex?",
    choices: [
      "Buscar una aplicación exclusiva de Codex en la tienda de aplicaciones, instalarla y crear una cuenta nueva",
      "Instalar la aplicación de escritorio de ChatGPT e iniciar sesión con tu cuenta de ChatGPT",
      "Abrir un terminal y memorizar primero toda la lista de comandos de Codex",
      "Crear antes una cuenta de GitHub y conectar un repositorio",
    ],
    explain: "Codex está dentro de la aplicación de escritorio de ChatGPT. Instalas la aplicación, inicias sesión con tu cuenta de ChatGPT y eliges Codex.",
  },
  "ch502-open": {
    prompt: "Quieres usar la ventana en la que Codex muestra lo que ha cambiado. ¿Qué conviene hacer antes con la carpeta «Herramienta de orden»?",
    choices: [
      "Cambiar el nombre de la carpeta al inglés",
      "Subir la carpeta entera a un almacenamiento en la nube",
      "Convertir la carpeta en un repositorio de Git",
      "Borrar todas las notas de la carpeta y dejarla vacía",
    ],
    explain: "El panel de revisión (para ver los cambios) solo se abre en un repositorio de Git. Si la carpeta no es un repositorio, la aplicación te pregunta si quieres crear uno.",
  },
  "ch502-first": {
    prompt: "En el acta que ordenó Codex, el día de la semana de una fecha no coincide con tus notas originales. ¿Qué conviene hacer?",
    choices: [
      "Fiarte sin comprobar, porque lo corrigió Codex por su cuenta y debe de estar bien",
      "Borrar el acta y no volver a encargarle el orden a Codex",
      "Compararlo con el original y, si no es lo que quieres, volver a pedírselo",
      "Pasarlo por alto, porque el día de la semana no importa",
    ],
    explain: "Incluso un resultado convincente puede tener omisiones o errores. Compara con el original, sobre todo las partes que Codex cambió por su cuenta, y si no es lo que quieres, vuelve a pedirlo.",
  },
  "ch503-why": {
    prompt: "Aunque no había AGENTS.md, Codex cumplió la regla «(no consta en las notas)». ¿Cuál fue la razón en la práctica de esta guía?",
    choices: [
      "Que Codex abrió a escondidas CLAUDE.md, sin que se viera en pantalla, y lo leyó",
      "Que la misma regla también estaba escrita en las instrucciones del formato",
      "Que Codex ya conoce de antemano todas las reglas de orden del usuario",
      "Que fue a buscar la regla a internet",
    ],
    explain: "Codex no abrió CLAUDE.md, solo leyó el formato. La cumplió porque las instrucciones del formato traían la misma regla, pero no conoce las reglas que solo están en CLAUDE.md.",
  },
  "ch503-move": {
    prompt: "Para usar la misma carpeta con Claude Code y con Codex, creaste AGENTS.md y dejaste también CLAUDE.md. ¿Qué debes tener en cuenta a partir de ahora?",
    choices: [
      "Al cambiar las reglas, se modifican los dos archivos a la vez",
      "Si solo cambio CLAUDE.md, Codex cambia también",
      "Si solo cambio AGENTS.md, Claude Code cambia también",
      "Los dos archivos deben tener contenidos distintos para que no se pisen",
    ],
    explain: "Cada herramienta lee solo su propio archivo. Si cambias solo uno, las dos trabajan con reglas distintas, así que se cambian los dos a la vez.",
  },
  "ch503-test": {
    prompt: "Quieres comprobar si de verdad se lee AGENTS.md. ¿Qué método usó esta guía?",
    choices: [
      "Preguntarle a Codex “¿has leído AGENTS.md?” y fiarse de la respuesta",
      "Guardar AGENTS.md varias veces para asegurarse de que se lea",
      "Poner en mayúsculas todo el nombre del archivo AGENTS.md para que destaque más a la vista de Codex",
      "Añadir a AGENTS.md una regla que solo esté ahí y ver si se cumple en un chat nuevo",
    ],
    explain: "Si se cumple una regla que no está en ningún otro sitio, se puede considerar que ha leído ese archivo. En esta práctica, antes de AGENTS.md se cumplió 0 veces y después, 1 (una prueba cada vez, con notas de distinto tipo).",
  },
  "ch503-order": {
    prompt: "~/.codex/AGENTS.md y el AGENTS.md de la carpeta «Herramienta de orden» dicen cosas distintas. ¿Cuál tiene prioridad?",
    choices: [
      "~/.codex/AGENTS.md, que es el ajuste personal, se aplica siempre antes y tiene prioridad",
      "Tiene prioridad el que tenga más contenido y un archivo más grande",
      "Tiene prioridad el AGENTS.md de la carpeta más cercana a la actual",
      "Tiene prioridad el que se creó primero, hasta el final",
    ],
    explain: "Codex los lee de arriba abajo, uno detrás de otro, y el archivo de la carpeta más cercana a la actual va después y tiene prioridad sobre las instrucciones anteriores.",
  },
  "ch503-import": {
    prompt: "¿Dónde recomienda la documentación oficial poner las reglas de orden que se deben cumplir sí o sí?",
    choices: [
      "Solo en la memoria (Memories)",
      "Escribirlas en AGENTS.md, no solo en la memoria",
      "Pegarlas cada vez en el primer mensaje de la conversación",
      "Guardarlas en un enlace para compartir",
    ],
    explain: "La documentación oficial considera la memoria solo una ayuda para recordar y pide no usarla como única base de una regla que debe cumplirse. Las reglas obligatorias van en AGENTS.md.",
  },
  "ch504-modes": {
    prompt: "Al usar Codex por primera vez, ¿qué permiso recomienda la documentación oficial para la mayoría de los trabajos?",
    choices: [
      "Full access: se ejecuta sin límites",
      "Ask for approval",
      "Approve for me: decide una revisión automática, sin preguntarte",
      "Ocultar el menú de permisos",
    ],
    explain: "Con Ask for approval, Codex trabaja por su cuenta dentro de la carpeta de trabajo y se detiene a preguntar antes de cruzar ese límite. La documentación oficial recomienda empezar con él para la mayoría de los trabajos.",
  },
  "ch504-sandbox": {
    prompt: "Aunque está dentro de la carpeta de trabajo, ¿qué carpeta no puede escribir Codex por defecto?",
    choices: [
      "La carpeta notes",
      "La carpeta inbox",
      "La carpeta templates",
      "La carpeta .agents",
    ],
    explain: "Dentro de la carpeta de trabajo, .git, .agents y .codex son solo de lectura por defecto. .agents, donde se guardan las skills, está entre ellas, así que al mover skills puede hacer falta permiso.",
  },
  "ch504-review": {
    prompt: "En el panel de revisión quieres ver solo lo que cambió con la última respuesta de Codex. ¿Qué eliges?",
    choices: [
      "Last turn",
      "Unstaged: todos los cambios que aún no se han registrado",
      "Staged: los cambios elegidos para registrar",
      "Branch",
    ],
    explain: "Por defecto, el panel de revisión muestra los cambios sin registrar (Unstaged). Si eliges Last turn, ves solo los cambios de la última respuesta.",
  },
  "ch504-undo": {
    prompt: "¿Por qué hay que tener cuidado antes de pulsar Revert all en el panel de revisión?",
    choices: [
      "Porque al pulsar Revert all se borran a la vez la cuenta de ChatGPT y el historial de conversaciones",
      "Porque el panel de revisión también incluye los cambios que he hecho yo",
      "Porque se corta internet",
      "Porque al pulsar Revert all se borra también el AGENTS.md de la carpeta",
    ],
    explain: "El panel de revisión incluye no solo los cambios de Codex, sino también los míos y otros cambios sin registrar. Si solo vas a descartar una parte, deshaz por archivo o por bloque.",
  },
  "ch505-where": {
    prompt: "En Codex, ¿dónde se ponen las skills exclusivas de la carpeta «Herramienta de orden» y cómo se llaman?",
    choices: [
      "Se ponen en la carpeta .claude/skills y se llaman con /nombre, como en Claude Code",
      "Se ponen en la carpeta .agents/skills y se llaman escribiendo $nombre",
      "Se ponen en la carpeta templates y se llaman con @nombre",
      "Se ponen en la carpeta notes y se llaman con #nombre",
    ],
    explain: "Codex busca las skills en .agents/skills y las llama con $nombre. El formato de SKILL.md es el mismo que en Claude Code.",
  },
  "ch505-move": {
    prompt: "Le pediste a Codex que copiara una skill a .agents/skills y respondió que “está bloqueado por ser solo de lectura”. ¿Cuál es la reacción adecuada?",
    choices: [
      "Cambiar el permiso a Full access y no volver a ponerlo como estaba",
      "Renunciar a mover la skill y escribir a mano cada vez una petición larga",
      "Comprobar qué va a escribir y permitirlo, o escribir tú el comando",
      "Borrar AGENTS.md",
    ],
    explain: ".agents es una carpeta protegida, por eso se bloqueó. Comprueba qué va a escribir y permítelo, o ejecuta tú mismo el comando que te indica Codex.",
  },
  "ch505-call": {
    prompt: "En la revisión semanal creada con $weekly-review estaban bien todas las cifras, pero faltaba el coste de 1.800 wones del vino caliente. ¿Qué siguiente paso recomienda esta guía?",
    choices: [
      "Como todas las cifras están bien, usarla sin comprobar lo que falta",
      "Borrar la skill y escribir de nuevo desde cero, cada vez, una petición larga",
      "Comprobar también lo que falta y, si se repite, añadir una línea a la skill",
      "Ordenar las notas solo a mano",
    ],
    explain: "Se comprueba no solo lo que está mal, sino también lo que falta. Si lo que no debe faltar falta una y otra vez, se arregla añadiendo una línea de regla a la skill.",
  },
  "ch505-create": {
    prompt: "Vas a instalar un plugin que no conoces. ¿Qué destaca la documentación oficial?",
    choices: [
      "Elegir el que tenga el nombre más corto",
      "Elegir solo el plugin más reciente e instalarlo sin comprobar",
      "Cuantos más plugins instales de una sola vez, más cómodo te resultará después",
      "Revisar los hooks del plugin antes de que se ejecuten y decidir si te fías",
    ],
    explain: "Un plugin puede traer hooks que se ejecutan solos. La documentación oficial pide revisarlos antes de que se ejecuten y juzgar si son de fiar.",
  },
  "ch506-schedule": {
    prompt: "Creaste una programación para que cada viernes se haga la revisión semanal en la carpeta «Herramienta de orden». ¿Qué hace falta para que se ejecute?",
    choices: [
      "Que el ordenador esté encendido y la aplicación en marcha",
      "Que el móvil esté encendido",
      "Crear un repositorio de GitHub y subir allí la carpeta",
      "Poner el permiso en Full access cada vez que se ejecute la programación",
    ],
    explain: "Una programación que usa carpetas de tu ordenador solo se ejecuta si el ordenador está encendido y la aplicación está en marcha.",
  },
  "ch506-cloud": {
    prompt: "¿Qué afirmación sobre las tareas en la nube de Codex es correcta?",
    choices: [
      "Los archivos de mi ordenador y mi sesión iniciada en el navegador pasan automáticamente",
      "Hace falta un entorno publicado, y mis archivos no pasan",
      "Si mi ordenador se apaga o se suspende, la tarea en la nube también se detiene enseguida",
      "Es exclusivo de las cuentas gratuitas",
    ],
    explain: "Una tarea en la nube empieza en un entorno publicado, y no pasan los archivos de tu ordenador, los programas en ejecución ni las sesiones iniciadas del navegador. A cambio, sigue aunque el ordenador esté suspendido.",
  },
  "ch506-mobile": {
    prompt: "Al conectar el móvil para manejar el Codex de tu ordenador, ¿qué destaca la documentación oficial?",
    choices: [
      "Conectar todos los móviles de la familia, también los que no son míos",
      "Conectar primero un ordenador compartido",
      "Conectar solo dispositivos míos y de confianza",
      "Pasar a Full access una vez conectado",
    ],
    explain: "Un móvil conectado puede manejar el Codex de tu ordenador. Por eso solo se conectan dispositivos tuyos y de confianza.",
  },
  "ch507-install": {
    prompt: "Vas a ejecutar en el terminal el comando de instalación de Codex CLI. ¿Qué debes comprobar sí o sí antes?",
    choices: [
      "Que el comando sea corto",
      "Que sea exactamente el comando de la documentación oficial",
      "Revisar uno a uno que dentro del comando no haya texto en coreano",
      "Que no pase nada si ejecutas el comando dos veces seguidas",
    ],
    explain: "El comando de instalación ejecuta de inmediato un script descargado de internet. Comprueba que sea exactamente el que figura en la documentación oficial y luego ejecútalo.",
  },
  "ch507-exec": {
    prompt: "Quieres que codex exec modifique archivos, pero no ha cambiado nada. ¿Cuál es la razón más probable?",
    choices: [
      "Por defecto es de solo lectura, así que hace falta --sandbox workspace-write",
      "codex exec está hecho de modo que no pueda modificar archivos con ninguna opción",
      "Si internet está desconectado, codex exec no puede modificar ningún archivo",
      "Que AGENTS.md es demasiado largo y Codex se detuvo antes de leer la petición",
    ],
    explain: "codex exec es de solo lectura por defecto. Para que modifique archivos, hay que añadir --sandbox workspace-write.",
  },
  "ch507-commands": {
    prompt: "En la pantalla interactiva de Codex CLI, ¿qué comando usas para ver la información de la conversación y el límite que queda?",
    choices: [
      "/import",
      "/resume",
      "/permissions",
      "/status",
    ],
    explain: "/status muestra la información de la conversación y el límite restante. /permissions sirve para los permisos, /import para importar y /resume para continuar.",
  },
  "ch508-usage": {
    prompt: "Hiciste varias veces informes grandes con ChatGPT Work y ahora puedes usar menos Codex. ¿Por qué?",
    choices: [
      "Porque Work y Codex comparten la misma cuota de uso",
      "Porque al usar Work una sola vez, Codex se apaga solo ese día",
      "Porque los informes de Work se guardan en la carpeta de Codex y ocupan espacio",
      "Porque Work es gratis",
    ],
    explain: "ChatGPT Work comparte con Codex los mismos precios, créditos y límites de uso.",
  },
  "ch508-data": {
    prompt: "Usas Codex con una cuenta personal Plus. ¿Dónde compruebas si tus conversaciones se usan para mejorar el modelo?",
    choices: [
      "Codex no se usa para entrenar con ningún plan, así que no hace falta comprobar nada",
      "Escribiendo en AGENTS.md que no se entrene",
      "En los ajustes de datos de la cuenta de ChatGPT",
      "Pulsando Revert all en el panel de revisión, la conversación sale del entrenamiento",
    ],
    explain: "Las normas de datos dependen de cómo inicias sesión. «No se entrena por defecto» solo figura para Business, Enterprise y claves de API, y la documentación de Codex no dice nada del ajuste de entrenamiento de los planes personales. Por eso lo compruebas en los ajustes de tu cuenta de ChatGPT y en la ayuda de OpenAI.",
  },
  "ch508-injection": {
    prompt: "Codex no siguió una nota con una instrucción oculta (un experimento, una sola vez). ¿Cómo conviene interpretar este resultado?",
    choices: [
      "A partir de ahora puedo encargarle sin comprobar documentos que me manden otros o páginas web",
      "Es un solo resultado y no una garantía, así que reviso el resultado con más cuidado",
      "Solo no funciona con Codex",
      "Con la búsqueda web activada desaparece del todo el riesgo de instrucciones ocultas",
    ],
    explain: "Que lo bloqueara una vez no garantiza que lo bloquee siempre. Cuando metas documentos de otras personas, compara el resultado con el original y mantén estrechos los permisos y el acceso a internet.",
  },
  "ch508-choose": {
    prompt: "Quieres usar Claude Code y Codex a la vez. ¿Qué forma de la carpeta «Herramienta de orden» recomienda esta guía?",
    choices: [
      "Crear carpetas separadas de notas, formatos y resultados para cada herramienta, para que no se mezclen",
      "Borrar CLAUDE.md",
      "Tener las skills en una sola herramienta y sustituirlas en la otra con peticiones largas",
      "Compartir las notas, tener las reglas y las skills en ambas y cambiarlas juntas",
    ],
    explain: "Como las dos herramientas hacen casi lo mismo, resulta cómodo dejar que ambas usen la misma carpeta. Eso sí, las reglas y las skills se cambian en las dos a la vez.",
  },
}
