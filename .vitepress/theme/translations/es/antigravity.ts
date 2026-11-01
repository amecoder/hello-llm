// es text for antigravity (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const ANTIGRAVITY: Record<string, QuestionText> = {
  "ch601-surfaces": {
    prompt: "¿Qué relación hay entre la aplicación Antigravity y el programa de terminal agy?",
    choices: [
      "La aplicación usa solo Gemini y agy usa solo modelos de Claude",
      "Los dos ejecutan el mismo agente, así que casi todas las funciones son iguales",
      "agy es una herramienta que copia tal cual la pantalla de la aplicación",
      "La aplicación y agy son productos distintos hechos por empresas diferentes y sin relación",
    ],
    explain: "La documentación oficial explica que la aplicación y la CLI ejecutan el mismo agente, y que casi todas las funciones están en las dos.",
  },
  "ch601-plans": {
    prompt: "¿Qué cambia si usas Antigravity con una cuenta gratuita de Google?",
    choices: [
      "Puedes usar todas las funciones, pero el uso se repone cada semana",
      "Las funciones como las tareas programadas y la CLI solo se abren en los planes de pago, y la cuenta gratuita solo tiene chat",
      "Solo puedes hacer exactamente diez preguntas al día",
      "No puedes guardar los archivos de resultado y solo los ves en pantalla",
    ],
    explain: "Todos los planes reciben todas las funciones. Con una cuenta gratuita, el uso se repone cada semana.",
  },
  "ch601-models": {
    prompt: "Con una cuenta gratuita, ¿qué modelo indica esta guía para las prácticas a partir del 2 de noviembre de 2026?",
    choices: [
      "Gemini 3.8 Flash",
      "Gemini 4 Argon",
      "Claude Opus 4.6",
      "Claude Sonnet 5.5",
    ],
    explain: "La serie Claude 4.6, que se podía elegir gratis, sale el 2 de noviembre, y Gemini 4 Argon y Claude Sonnet 5.5 son de Pro en adelante.",
  },
  "ch601-compare": {
    prompt: "Vas a abrir con Antigravity la carpeta «Herramienta de orden» que hiciste en la etapa de Codex. ¿Qué tienes que mover?",
    choices: [
      "Cambiar el nombre de AGENTS.md a GEMINI.md",
      "Mover las skills a la carpeta .gemini/skills",
      "Borrar CLAUDE.md para que Antigravity pueda abrirla",
      "No hace falta mover nada: se abre tal cual está",
    ],
    explain: "Antigravity lee AGENTS.md y la carpeta .agents/. Son los mismos nombres y lugares que los archivos que se crearon en Codex.",
  },
  "ch602-install": {
    prompt: "¿Cuál es la forma correcta de iniciar sesión en la aplicación Antigravity?",
    choices: [
      "Se usa directamente, sin iniciar sesión",
      "Hay que crear dentro de la aplicación un usuario y una contraseña nuevos y verificar el correo",
      "Se inicia sesión con la cuenta de ChatGPT",
      "Pulsar Sign in e iniciar sesión en el navegador con una cuenta personal de Google",
    ],
    explain: "Al pulsar Sign in se abre el navegador y se inicia sesión con una cuenta personal de Google (Free, Pro o Ultra).",
  },
  "ch602-project": {
    prompt: "¿Cómo se abre en la aplicación Antigravity la carpeta «Herramienta de orden»?",
    choices: [
      "Comprimir la carpeta y subirla",
      "Convertir antes la carpeta en un repositorio de Git; solo así se puede añadir a New Project",
      "Basta con escribir el nombre de la carpeta en la ventana de conversación",
      "Elegir la carpeta con Add Folder dentro de New Project",
    ],
    explain: "El agente trabaja dentro de un proyecto. Se elige la carpeta con New Project → Add Folder, y vale también una carpeta normal.",
  },
  "ch602-plan": {
    prompt: "Para un primer encargo, ¿qué forma recomienda esta guía?",
    choices: [
      "Con Planning mode, recibir primero el plan, leerlo y luego pulsar Proceed",
      "Cambiar a Always proceed y dejar que se ejecute hasta el final sin plan y sin detenerse",
      "Con Fast mode, que se ejecute enseguida sin plan",
      "Cambiar el permiso a Turbo para permitir todos los comandos",
    ],
    explain: "Planning mode hace primero un plan: lees el plan y pulsas Proceed para seguir. Al principio se recomienda también Request review.",
  },
  "ch602-first": {
    prompt: "¿Qué pasa si señalas un archivo con @ en la ventana de conversación?",
    choices: [
      "Se pasa la ruta del archivo, y el agente lo lee cuando le hace falta",
      "El archivo se borra solo",
      "El archivo se mueve a otra carpeta",
      "Todo el contenido del archivo se pega tal cual en la conversación y se ve largo",
    ],
    explain: "Al mencionar un archivo no se pega su contenido: solo se envía la ruta, y el agente lee ese archivo cuando lo necesita.",
  },
  "ch602-review": {
    prompt: "En la ventana Review, ¿qué eliges para ver solo los archivos que el agente modificó en esta conversación?",
    choices: [
      "Staged Changes",
      "Uncommitted",
      "Agent Edits",
      "Discard",
    ],
    explain: "La vista por defecto, Uncommitted, incluye también lo que has cambiado tú. Agent Edits muestra solo los archivos que el agente modificó en esta conversación.",
  },
  "ch603-where": {
    prompt: "¿Qué nombres lee Antigravity como archivo de reglas de esta carpeta?",
    choices: [
      "Solo lee CLAUDE.md",
      "No lee ningún archivo de reglas y solo sigue las instrucciones que le des en cada momento en la conversación",
      "Solo lee README.md",
      "Lee AGENTS.md y GEMINI.md",
    ],
    explain: "Antigravity lee AGENTS.md, GEMINI.md y .agents/rules/. CLAUDE.md no está en la lista de archivos de reglas.",
  },
  "ch603-test": {
    prompt: "¿Qué método usó esta guía para comprobar si se lee AGENTS.md?",
    choices: [
      "Le preguntó al agente si había leído AGENTS.md",
      "Guardó AGENTS.md varias veces y luego ejecutó",
      "Con las mismas notas, ejecutó una vez sin AGENTS.md y otra con él, y comparó",
      "Hizo ordenar por separado unas notas de reunión y otras de estudio, y comparó los dos resultados",
    ],
    explain: "Siguiendo la observación de la revisión de la etapa de Codex, se ejecutó dos veces con las mismas notas y la misma petición: el apartado que solo existe en AGENTS.md salió 0 veces cuando no estaba y 1 vez cuando estaba.",
  },
  "ch603-skills": {
    prompt: "¿Cómo llamas directamente a la skill weekly-review en la aplicación Antigravity?",
    choices: [
      "$weekly-review",
      "/weekly-review",
      "@weekly-review",
      "#weekly-review",
    ],
    explain: "En el cuadro de entrada de la aplicación escribes /nombre-de-la-skill. Es distinto del $nombre de Codex y igual que el /nombre de Claude Code.",
  },
  "ch603-rules": {
    prompt: "¿Qué hay que cumplir sí o sí al crear un archivo de reglas en la carpeta .agents/rules/?",
    choices: [
      "Escribir todo el nombre del archivo en mayúsculas",
      "Poner un valor trigger al principio del archivo",
      "Escribir una sola línea de regla por archivo",
      "Meter los archivos de reglas a mucha profundidad, en subcarpetas de la carpeta rules, ordenados por tipos",
    ],
    explain: "Los archivos de rules/ tienen que llevar un trigger al principio. Si falta o está mal, se descartan sin avisar.",
  },
  "ch604-presets": {
    prompt: "Entre los preajustes de permisos de la aplicación Antigravity, ¿cuál ejecuta todos los comandos sin límites?",
    choices: [
      "Request Review",
      "Inherit Global",
      "Default",
      "Turbo",
    ],
    explain: "Turbo ejecuta todos los comandos sin valla y sin preguntar, y lee y escribe en todo el ordenador. No hace falta para ordenar notas.",
  },
  "ch604-sandbox": {
    prompt: "Con el preajuste Default de la aplicación y en el terminal (agy), ¿cómo está por defecto la valla de comandos (el sandbox)?",
    choices: [
      "Los dos la tienen desactivada por defecto",
      "La aplicación y el terminal la tienen activada por defecto, y los dos sin acceso a internet",
      "En Default de la aplicación está activada; en el terminal, desactivada por defecto",
      "En Default de la aplicación está desactivada, y en el terminal está activada",
    ],
    explain: "En los preajustes Default y Auto de la aplicación, la valla está activada y internet bloqueado (en Request Review y Turbo está desactivada). En el terminal (agy) está desactivada por defecto.",
  },
  "ch604-undo": {
    prompt: "¿Por qué hay que tener cuidado al pulsar Discard unstaged changes en la ventana Review?",
    choices: [
      "Porque AGENTS.md pasa a ser GEMINI.md",
      "Porque en cuanto lo pulsas se cierra la sesión de tu cuenta de Google y tienes que volver a iniciarla",
      "Porque se aplica al instante, sin confirmación, y puede borrar también archivos nuevos",
      "Porque se corta la conexión a internet",
    ],
    explain: "Descartar se aplica sin confirmación y borra del disco incluso los archivos nuevos que no se han registrado. Antes de encargar el trabajo, déjalo registrado con Git.",
  },
  "ch605-plan": {
    prompt: "¿Qué diferencia hay entre usar /plan y hacer una petición normal?",
    choices: [
      "Busca en internet ejemplos de planes parecidos y modifica los archivos siguiéndolos tal cual",
      "Modifica los archivos más rápido",
      "Borra la conversación y empieza de nuevo",
      "Antes de modificar archivos, examina la carpeta y te muestra primero los puntos por decidir",
    ],
    explain: "Una petición normal empieza enseguida a modificar archivos, pero /plan examina primero, te muestra los puntos por decidir y solo se ejecuta cuando pulsas Proceed.",
  },
  "ch605-schedule": {
    prompt: "Quieres que la revisión semanal del viernes siga ejecutándose más allá de la conversación. ¿Qué usas?",
    choices: [
      "/schedule: un temporizador que solo funciona dentro de la conversación donde se creó",
      "Automations: una programación que se mantiene aunque vuelvas a abrir la aplicación",
      "/goal: un modo de objetivo que trabaja sin parar hasta terminar y que se reinicia solo cada semana",
      "/browser: un subagente que maneja Chrome",
    ],
    explain: "/schedule pertenece a la conversación en la que se creó. Lo que debe seguir funcionando más allá de la conversación se hace con Automations, en la barra lateral de la aplicación.",
  },
  "ch605-browser-goal": {
    prompt: "Al usar /goal, ¿qué recomienda esta guía?",
    choices: [
      "Cambiar el permiso a Turbo para que no pida permiso mientras logra el objetivo",
      "Escribir con claridad el «criterio de terminado»",
      "Cambiar a Fast mode",
      "Cerrar la ventana Review",
    ],
    explain: "/goal no tiene límite de repeticiones y puede gastar mucho uso. Escribe con claridad el criterio de terminado. Los ajustes de permisos y de revisión se mantienen igual.",
  },
  "ch605-remote": {
    prompt: "Cuando manejas Antigravity desde otro dispositivo con Remote Control, ¿dónde se hace en realidad el trabajo?",
    choices: [
      "Dentro del otro dispositivo, por separado",
      "En un espacio de trabajo vacío de Google Cloud, sin tus archivos",
      "Solo dentro de un navegador web",
      "Con los archivos y las herramientas de mi ordenador",
    ],
    explain: "Aunque lo uses a distancia, el agente trabaja con los archivos, las herramientas y las sesiones iniciadas de tu ordenador. En el otro dispositivo, inicias sesión con la misma cuenta de Google.",
  },
  "ch606-install": {
    prompt: "Al ejecutar agy por primera vez te pide confirmar «Workspace trust». ¿Qué es?",
    choices: [
      "El procedimiento para registrar que confías en esta carpeta",
      "El procedimiento para cambiar la contraseña de tu cuenta de Google",
      "El procedimiento para pasar a un plan de pago",
      "El procedimiento para subir la carpeta a la nube",
    ],
    explain: "En la primera ejecución, antes de que el agente examine los archivos, se confirma si confías en esta carpeta.",
  },
  "ch606-modes": {
    prompt: "¿Qué afirmación sobre el modo accept-edits de agy es correcta?",
    choices: [
      "Ejecuta todos los comandos y modificaciones de archivos sin preguntar, y desactiva también la valla",
      "Solo autoriza automáticamente el acceso a internet",
      "Solo lee los archivos y nunca los modifica",
      "Modifica solos los archivos de la carpeta de trabajo, pero sigue preguntando por los comandos",
    ],
    explain: "accept-edits autoriza automáticamente crear y modificar archivos dentro de la carpeta de trabajo, pero sigue preguntando antes de los comandos de terminal.",
  },
  "ch606-headless": {
    prompt: "¿Qué pasa con agy -p cuando se encuentra con una acción que necesita permiso?",
    choices: [
      "Abre una ventana en pantalla para pedir permiso",
      "Se rechaza en silencio, la ejecución sigue y termina con código de salida 0",
      "Reinicia el ordenador",
      "Se detiene al instante con código de error 1 y no da ninguna indicación de qué se bloqueó",
    ],
    explain: "Como no hay ventana para preguntar, se resuelve por política. La acción sin permiso se rechaza en silencio, el código de salida es 0 y el aviso sale por stderr.",
  },
  "ch606-pitfalls": {
    prompt: "agy -p terminó con éxito (código de salida 0), pero no hay archivo de resultado. Según la experiencia de esta guía, ¿qué haces primero?",
    choices: [
      "Leer el aviso de rechazo en stderr y ver qué se bloqueó",
      "Crear de nuevo la cuenta de Google",
      "Añadir enseguida --dangerously-skip-permissions",
      "Esperar a que el archivo aparezca, porque terminó con éxito",
    ],
    explain: "A veces, cuando se rechazaba un comando de shell, terminaba con 0 sin crear nada. Lee el aviso de rechazo y arréglalo acotando el alcance con el modo o con la redacción de la petición.",
  },
  "ch606-resume": {
    prompt: "En agy, ¿cómo continúas al momento la última conversación de esta carpeta?",
    choices: [
      "agy -c",
      "agy -p",
      "agy --version",
      "agy --sandbox",
    ],
    explain: "Con agy -c retomas la última conversación de esa carpeta, y con /resume puedes elegir cuál continuar. El historial de conversaciones se separa por la carpeta desde la que ejecutaste.",
  },
  "ch607-cost": {
    prompt: "Con el plan Pro, ¿qué eliges para que no se gasten créditos de IA sin que lo notes?",
    choices: [
      "Poner el uso automático de créditos en Never",
      "Poner el uso automático de créditos en Always",
      "Poner el permiso en Turbo",
      "Poner Automations cada hora",
    ],
    explain: "Never evita que se usen créditos automáticamente cuando se agota el uso básico, y esperas a que se vuelva a rellenar.",
  },
  "ch607-data": {
    prompt: "¿Dónde está el ajuste que decide si tus conversaciones se usan para mejorar el modelo?",
    choices: [
      "Escribir «prohibido entrenar» al principio de AGENTS.md y se aplica tal cual",
      "El botón Discard de la ventana Review",
      "Una opción del comando /goal",
      "Enable Telemetry, en el apartado Account de Settings",
    ],
    explain: "Si dejas activado Enable Telemetry, las conversaciones se usan para mejorar Antigravity y el modelo. La recogida de datos se puede desactivar en Settings cuando quieras.",
  },
  "ch607-injection": {
    prompt: "Antigravity no siguió la nota con una instrucción oculta (un experimento, una sola vez). ¿Cómo conviene interpretar este resultado?",
    choices: [
      "Desde ahora puedo encargarle cualquier documento sin comprobar",
      "Con el permiso en Turbo se bloquean las instrucciones ocultas",
      "Es un solo resultado y no una garantía, así que reviso con más cuidado los documentos ajenos",
      "Antigravity está hecho para no caer nunca en instrucciones ocultas, así que no hay que comprobar nada",
    ],
    explain: "Las tres herramientas la bloquearon una vez, pero no es una garantía. Cuando metas documentos de otras personas, compara el resultado con el original.",
  },
  "ch607-choose": {
    prompt: "Si las tres herramientas comparten la carpeta «Herramienta de orden», ¿cómo cambias las reglas?",
    choices: [
      "Crear un GEMINI.md nuevo y borrar los demás",
      "Cambiar a la vez CLAUDE.md y AGENTS.md, los dos archivos",
      "Si solo cambio CLAUDE.md, Codex y Antigravity también leen ese archivo y lo siguen igual",
      "Explicar las reglas de palabra en la conversación cada vez",
    ],
    explain: "Claude Code lee CLAUDE.md como reglas, y Codex y Antigravity leen AGENTS.md. Por eso se cambian los dos archivos a la vez.",
  },
}
