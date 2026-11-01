// es text for ai-sdlc (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const AI_SDLC: Record<string, QuestionText> = {
  "ch701-sdlc": {
    prompt: "¿Qué afirmación es correcta sobre el SDLC del que habla GitHub?",
    choices: [
      "Hay que tener desde el principio planificación, desarrollo, revisión, comprobación, despliegue y operación para poder empezar",
      "El despliegue es cosa de desarrolladores que saben manejar servidores, así que una persona sin experiencia debe quedarse en planificar y crear y saltarse el resto",
      "Puedes empezar con un repositorio y unas cuantas tareas, y ampliarlo a medida que crece el proyecto",
      "SDLC es un término de las grandes empresas y no se aplica a una página web pequeña",
    ],
    explain: "GitHub dice que no hace falta usar todas las etapas a la vez y que mucha gente empieza con un repositorio y unas pocas incidencias, y lo va ampliando.",
  },
  "ch701-ai": {
    prompt: "¿Qué razón común señala la documentación oficial para que la IA diga que ha terminado todo y en realidad esté a medias?",
    choices: [
      "Que el modelo de la IA es demasiado antiguo y no conoce las tecnologías web actuales, así que se detiene a mitad de camino sin acabar el trabajo",
      "Que la conexión a internet es lenta y el archivo de resultado se guardó tarde",
      "Que la petición era demasiado larga y la IA se olvidó del principio",
      "Que no tiene forma de comprobarlo por sí misma y se detiene donde parece terminado",
    ],
    explain: "Si Claude no tiene forma de comprobarlo por sí mismo, se detiene donde parece terminado. Por eso en el capítulo 5 le damos un mecanismo de comprobación.",
  },
  "ch701-human": {
    prompt: "Al crear algo con la IA, ¿qué trabajo señala esta guía que debe asumir siempre una persona?",
    choices: [
      "Decidir qué se crea, mirar las pruebas y decidir si se fusiona y se despliega",
      "Publicar enseguida el resultado de la IA sin comprobarlo",
      "Reescribir a mano línea por línea todo el código para cambiar lo que escribió la IA",
      "Cambiar cada vez la configuración del modelo que usa la IA",
    ],
    explain: "Decidir qué y por qué se crea, mirar las pruebas y juzgar, y decidir si se fusiona y se despliega es cosa de las personas. La responsabilidad de revisar antes de aprobar es tuya.",
  },
  "ch702-basics": {
    prompt: "¿Qué relación hay entre Git y GitHub?",
    choices: [
      "Git sigue los cambios de los archivos y GitHub guarda ese registro en internet para colaborar",
      "Git y GitHub son dos nombres del mismo programa: instalas uno y aparece el otro, con exactamente las mismas funciones",
      "GitHub es un programa que solo se usa en tu ordenador y Git es un servicio de internet",
      "Git es un programa para escribir documentos y GitHub, uno para dibujar",
    ],
    explain: "Git es un sistema de control de versiones, y GitHub es un servicio que guarda repositorios de Git en internet y añade herramientas de planificación y colaboración.",
  },
  "ch702-visibility": {
    prompt: "Si más adelante quieres publicar con GitHub Pages usando una cuenta gratuita, ¿cómo debes crear el repositorio?",
    choices: [
      "Privado (Private)",
      "Público (Public)",
      "Sin README",
      "Con una licencia obligatoriamente",
    ],
    explain: "Con una cuenta gratuita, GitHub Pages solo se puede usar con repositorios públicos. Por eso el tutorial también te hace elegir Public.",
  },
  "ch702-files": {
    prompt: "¿Qué afirmación sobre .gitignore es correcta?",
    choices: [
      "Es el primer manual que ven quienes abren por primera vez el repositorio, donde se escribe qué proyecto es y cómo empezar",
      "Es la lista de archivos que Git ignora al hacer un commit; un archivo ya confirmado no se ignora solo por añadirlo",
      "Dice a otras personas cómo pueden usar tu código",
      "Es el archivo que fija la dirección de GitHub Pages",
    ],
    explain: ".gitignore es una lista de archivos que se ignoran. Un archivo ya confirmado exige antes dejar de seguirlo, así que conviene escribirlo desde el principio.",
  },
  "ch702-clone": {
    prompt: "¿Qué pasa cuando clonas un repositorio en tu ordenador?",
    choices: [
      "El repositorio original de GitHub se borra y la copia queda solo en tu ordenador, así que ya no puedes intercambiar nada con GitHub",
      "Solo se descargan los nombres de los archivos y el contenido queda vacío",
      "Se publica enseguida en GitHub Pages",
      "Se crea en tu ordenador una copia conectada con el original de GitHub",
    ],
    explain: "La copia clonada sigue conectada al original de GitHub, así que puedes volver a subir lo que has registrado.",
  },
  "ch703-why": {
    prompt: "¿Qué motivo habitual señala la documentación oficial para que la IA cree algo distinto de lo que tienes en la cabeza?",
    choices: [
      "Que falta información que no se puede saber solo leyendo el repositorio",
      "Que usaste coreano en los nombres de archivo y por eso la IA no pudo leerlos bien",
      "Que escribiste la petición demasiado corta y la IA rechazó el trabajo",
      "Que con el modo plan la IA lo hace distinto a propósito",
    ],
    explain: "La información sobre quién lo usa o qué le resulta incómodo solo está en tu cabeza. Por eso se escribe antes de crear.",
  },
  "ch703-interview": {
    prompt: "Cuando todavía tienes borroso qué crear, ¿qué método recomienda la documentación oficial?",
    choices: [
      "Redactar tú solo un documento de requisitos perfecto y enviar la petición solo cuando estés seguro de que no falta nada",
      "No enviar ninguna petición y esperar a que Claude lo cree por su cuenta",
      "Pedirle a Claude que te entreviste y escriba el resultado en SPEC.md",
      "Pedir que copie tal cual la web de otra persona",
    ],
    explain: "Si le pides a Claude que te entreviste, pregunta con opciones lo que no has decidido y lo ordena en SPEC.md. Después lo creas en una sesión nueva.",
  },
  "ch703-spec": {
    prompt: "¿Qué línea conviene poner en el SPEC.md de un tablero de tareas?",
    choices: [
      "Lee la tabla con JavaScript",
      "Se ven todas las tareas del acta sin que falte ninguna",
      "Se ve bonito",
      "Hacer el código limpio, legible y con la tecnología más reciente, para que cualquiera que lo vea después se quede admirado",
    ],
    explain: "En la especificación se escribe el comportamiento visible desde fuera de modo que se pueda comprobar con sí o no. No se incluyen el método de implementación ni sensaciones vagas.",
  },
  "ch703-tools": {
    prompt: "¿Cómo trata esta guía spec-kit y OpenSpec?",
    choices: [
      "Solo presenta el concepto y no los instala; pone en práctica la misma idea con el flujo entrevista → SPEC.md",
      "Dice que hay que instalar las dos herramientas para empezar la etapa 4 y hace repetir los comandos de instalación en cada capítulo",
      "Dice que las dos herramientas son peligrosas y que no hay que usarlas nunca",
      "Instala solo spec-kit y no presenta OpenSpec",
    ],
    explain: "spec-kit necesita Python 3.11 o superior y uv, y OpenSpec requiere instalación por terminal, así que esta guía solo presenta el concepto.",
  },
  "ch704-plan": {
    prompt: "¿Qué afirmación sobre el modo plan es correcta?",
    choices: [
      "Mientras hace el plan, modifica ya todos los archivos necesarios y, al aprobarlo, te enseña el resultado",
      "Claude lee archivos y propone un plan, pero no modifica nada hasta que lo apruebas",
      "Sin plan, crea directamente los archivos de resultado",
      "En el modo plan ni siquiera puede leer archivos",
    ],
    explain: "En el modo plan no se modifica nada hasta la aprobación. Corregir sale más barato en la fase del plan.",
  },
  "ch704-branch": {
    prompt: "¿Para qué se usan las ramas?",
    choices: [
      "Para poner el repositorio en privado y que nadie vea mi código mientras estoy trabajando",
      "Para borrar el historial de commits",
      "Para cambiar la dirección de GitHub Pages",
      "Para trabajar aparte sin tocar la versión principal (main) hasta que esté listo",
    ],
    explain: "Una rama es un espacio de trabajo aparte. Hasta que esté listo, main no cambia, así que puedes probar con tranquilidad.",
  },
  "ch704-commit": {
    prompt: "¿Qué forma de hacer commits recomienda GitHub?",
    choices: [
      "Que cada commit lleve un único cambio completo y separado de los demás",
      "Hacer un solo commit por la tarde con todo lo del día, para que el historial no crezca demasiado y quede limpio",
      "Reunir también cambios sin relación en una rama y hacer un solo commit",
      "Hacer un único commit, justo antes del último despliegue",
    ],
    explain: "Si cada commit lleva un cambio completo, es fácil deshacer solo esa parte cuando quieres tomar otro camino.",
  },
  "ch704-read": {
    prompt: "Cuando no entiendes todo el código que ha creado la IA, ¿qué recomienda esta guía?",
    choices: [
      "Fusionarlo enseguida aunque no lo entiendas",
      "Borrar todo el código que no entiendas, buscar ejemplos parecidos en internet y volver a escribirlo desde cero",
      "Pedir que explique, para cada cambio, qué cambió, por qué y con qué línea de SPEC.md se relaciona",
      "Pedirle a la IA que escriba más largo",
    ],
    explain: "Un cambio cuya explicación no se conecta con SPEC.md puede ser algo que no pediste. Pregunta por esa parte.",
  },
  "ch705-why": {
    prompt: "¿Qué cambia si le das un mecanismo de comprobación (una prueba que responde pasa/falla)?",
    choices: [
      "Claude se salta la comprobación y termina antes, así que ahorra uso y recibes el resultado antes",
      "El uso de la IA pasa a ser gratis",
      "Solo las personas pueden ver el resultado de la prueba",
      "Claude hace solo el bucle: cambia, comprueba y, si se ha roto, corrige y vuelve a comprobar",
    ],
    explain: "Si hay algo que responde pasa o falla, Claude cierra el bucle por sí mismo. Si no lo hay, al final la persona acaba haciendo de prueba.",
  },
  "ch705-kinds": {
    prompt: "Si ya hay un mecanismo de comprobación, ¿cuál dice la documentación oficial que es la línea más útil de CLAUDE.md?",
    choices: [
      "El nombre del proyecto",
      "El nombre y el contacto de la persona que creó el proyecto, y el registro de cuándo empezó",
      "El comando que ejecuta esa comprobación",
      "Tu color favorito",
    ],
    explain: "Si pones en CLAUDE.md el comando que ejecuta la comprobación, Claude puede comprobar por sí mismo cada vez.",
  },
  "ch705-evidence": {
    prompt: "Claude dijo: «He pasado todas las pruebas». ¿Qué respuesta recomienda esta guía?",
    choices: [
      "Creerle y desplegar enseguida",
      "Borrar todas las pruebas",
      "Pedirle como prueba el comando que ejecutó y su salida",
      "Hacerle la misma pregunta a otra IA y, si las dos dicen que pasa, creerlas y desplegar enseguida",
    ],
    explain: "Con solo «ya pasa todo» casi no se sabe nada. Pide como prueba el comando y su salida, o una captura.",
  },
  "ch705-actions": {
    prompt: "¿Qué afirmación sobre GitHub Actions es correcta?",
    choices: [
      "Solo es gratis en repositorios privados",
      "Es una función con la que la IA escribe el código por ti: con solo configurarla, lee las incidencias y crea y fusiona funciones por su cuenta",
      "Ejecuta automáticamente las comprobaciones que fijes al subir un cambio, y es gratis en repositorios públicos",
      "Es una función para cambiar el diseño de una página web",
    ],
    explain: "Actions automatiza la compilación, las pruebas y el despliegue. El resultado se ve en el PR, y el ejecutor estándar es gratis en repositorios públicos.",
  },
  "ch706-pr": {
    prompt: "¿Qué afirmación sobre un PR (Pull Request) es correcta?",
    choices: [
      "Es una solicitud para cambiar la dirección de GitHub Pages",
      "Es una solicitud que se envía a la administración para obtener permiso antes de borrar el repositorio entero o cederlo a otra persona",
      "Propone fusionar los cambios de una rama en otra y es el lugar donde se discute y revisa antes de fusionar",
      "Es una solicitud para cambiar la contraseña",
    ],
    explain: "Un PR ofrece un lugar donde discutir y revisar antes de fusionar. Se hace pequeño y se escribe qué se cambió y por qué.",
  },
  "ch706-review": {
    prompt: "Al pedir una revisión frente a SPEC.md, ¿por qué dice la documentación oficial que te saltes el estilo?",
    choices: [
      "Porque el revisor siempre encuentra algo y, si lo arreglas todo, se llena de añadidos innecesarios",
      "Porque las condiciones de uso de GitHub prohíben corregir el estilo y se suspende el repositorio si se trata en la revisión",
      "Porque la IA ajusta siempre el estilo a la perfección por su cuenta",
      "Porque al corregir el estilo el repositorio pasa a ser privado",
    ],
    explain: "Un revisor siempre encuentra algo. Si solo corriges lo que afecta a la exactitud, no se acumulan añadidos innecesarios.",
  },
  "ch706-ai-review": {
    prompt: "¿Cómo debes interpretar que en una revisión de la IA no aparezca ningún problema?",
    choices: [
      "Significa que el código no tiene ningún error ni problema de seguridad, así que se puede fusionar y desplegar sin mirar más",
      "Significa que la IA ha aprobado el PR automáticamente",
      "Puede que se le haya pasado algo, así que la persona lo revisa por encima y decide si se fusiona",
      "Significa que nunca más hace falta pedir una revisión",
    ],
    explain: "Una revisión de IA puede pasar por alto errores o problemas de seguridad, y que no encuentre nada no significa que sea seguro. Decide la persona si se fusiona.",
  },
  "ch706-merge": {
    prompt: "¿Qué pasa si borras la rama después de fusionar un PR?",
    choices: [
      "Junto con la rama desaparecen la conversación del PR y el historial de commits, así que luego no se puede ver qué se cambió",
      "El PR y el historial de commits no se borran y se conservan",
      "El sitio de GitHub Pages deja de estar disponible",
      "El repositorio pasa a ser privado",
    ],
    explain: "El último paso del GitHub flow es borrar la rama. Aunque borres la rama, el PR y el historial de commits se quedan.",
  },
  "ch707-pages": {
    prompt: "¿Qué afirmación sobre GitHub Pages con una cuenta gratuita es correcta?",
    choices: [
      "Se puede usar con repositorios públicos, y el sitio es público en internet",
      "Solo se puede usar con repositorios privados y el sitio también es privado",
      "Solo pueden ver el sitio las personas que han iniciado sesión",
      "Se puede añadir al sitio el registro de usuarios y el pago, y usarlo como una tienda online gratuita para llevar un negocio",
    ],
    explain: "Con una cuenta gratuita, Pages solo se usa con repositorios públicos, y los sitios de Pages son públicos en internet. Los datos sensibles se borran antes de publicar.",
  },
  "ch707-ways": {
    prompt: "Para una página como el tablero de tareas, que no necesita retocar el proceso de construcción, ¿qué método de publicación recomienda la documentación oficial?",
    choices: [
      "Escribir a mano sí o sí un archivo de configuración de GitHub Actions y publicar",
      "Comprar un servidor propio",
      "Enviar los archivos por correo para publicar",
      "Publicar al subir a una rama concreta",
    ],
    explain: "Si no hace falta retocar el proceso de construcción, se recomienda publicar cuando subes a una rama concreta.",
  },
  "ch707-limits": {
    prompt: "¿Para qué no debes usar GitHub Pages?",
    choices: [
      "Para el tablero de tareas hecho como práctica",
      "Para una página de práctica que informe del horario y el lugar de la reunión de este mes de nuestro club",
      "Para una lista de reseñas de lecturas",
      "Para una página en la que se intercambien contraseñas o números de tarjeta",
    ],
    explain: "Pages no debe usarse para transacciones delicadas, como intercambiar contraseñas o números de tarjeta, ni para llevar un negocio o una tienda online.",
  },
  "ch707-undo": {
    prompt: "¿Por qué no se puede deshacer un despliegue con el rebobinado (los puntos de control) de Claude Code?",
    choices: [
      "Porque los puntos de control son una función solo de los planes de pago y no valen para un sitio publicado gratis",
      "Porque los puntos de control no cubren acciones que afectan a sistemas externos, como un despliegue",
      "Porque el despliegue no queda en el historial de Git",
      "Porque el rebobinado solo se puede usar una vez por semana",
    ],
    explain: "Las acciones que afectan al exterior, como un despliegue, las comprueba y las pulsa una persona.",
  },
  "ch708-issue": {
    prompt: "¿Qué pasa si escribes «fixes #1» en la descripción de un PR?",
    choices: [
      "El nombre del repositorio cambia a 1",
      "La incidencia 1 se borra en ese momento, junto con sus comentarios y su historial",
      "El commit 1 se deshace",
      "Al fusionar el PR, la incidencia 1 se cierra automáticamente",
    ],
    explain: "Si escribes en el PR una palabra fija como fixes, al fusionar el PR se cierra automáticamente la incidencia relacionada.",
  },
  "ch708-labels": {
    prompt: "¿Qué etiqueta (label) predeterminada de GitHub es adecuada para una incidencia que pide una función nueva?",
    choices: [
      "bug",
      "enhancement",
      "documentation",
      "delete",
    ],
    explain: "enhancement es para solicitar una función nueva, bug para un problema inesperado y documentation para mejorar la documentación.",
  },
  "ch708-cycle": {
    prompt: "Al dar otra vuelta con una incidencia, ¿qué tienes que comprobar sí o sí en el paso de verificación?",
    choices: [
      "Basta con que pase el criterio nuevo",
      "Si falla una prueba que ya existía, se borra, y solo quedan las pruebas de la función nueva para que pase",
      "Saltarse las pruebas y desplegar directamente",
      "Que pase el criterio nuevo y también todas las pruebas que ya existían",
    ],
    explain: "Para ver que la función nueva no ha roto las anteriores, deben pasar también todas las pruebas que ya existían.",
  },
  "ch709-secret": {
    prompt: "Subiste un secreto en un commit y en el siguiente commit borraste ese archivo. ¿Qué pasa?",
    choices: [
      "Al borrar el archivo, el secreto desaparece por completo y ya nadie tiene forma de verlo",
      "Sigue en el historial de Git, así que aún se puede ver",
      "GitHub cambia el secreto automáticamente",
      "El repositorio pasa automáticamente a ser privado",
    ],
    explain: "Un secreto que se ha confirmado pasa a formar parte del historial de Git y se queda aunque lo borres del archivo más reciente.",
  },
  "ch709-layers": {
    prompt: "Si un secreto se filtra en un repositorio público, ¿cuál es el primer paso según la documentación oficial?",
    choices: [
      "Revocarlo y sustituirlo en el sitio que lo emitió",
      "Reescribir el historial de Git para borrar el commit con el secreto y seguir usando después ese mismo secreto",
      "Cambiar el nombre del repositorio",
      "Esperar y desear que nadie lo haya visto",
    ],
    explain: "Un secreto filtrado se revoca y se sustituye primero. Reescribir el historial exige ponerse de acuerdo con quienes trabajan contigo y tiene efectos secundarios.",
  },
  "ch709-public": {
    prompt: "¿Por qué no subes tal cual a un repositorio público las notas de la «herramienta de orden» de la etapa 3?",
    choices: [
      "Porque pueden contener datos personales, como nombres reales o contactos",
      "Porque el archivo de notas es muy grande y pasa del límite de tamaño que admite GitHub",
      "Porque las notas no se abren en GitHub",
      "Porque al subir las notas Pages se apaga",
    ],
    explain: "Un repositorio público lo ve cualquiera. Las notas con datos personales no se suben, y se revisan antes de publicar.",
  },
  "ch709-license": {
    prompt: "¿Qué pasa si no fijas una licencia en el repositorio?",
    choices: [
      "Se aplica por defecto la ley de derechos de autor: otros no pueden copiar ni modificar",
      "Se considera que cualquiera puede copiar, distribuir y modificar libremente, sin pedir permiso aparte",
      "El repositorio no se puede hacer público",
      "No se puede usar GitHub Pages",
    ],
    explain: "Sin licencia se aplica la ley de derechos de autor por defecto. Si quieres que otros puedan usarlo, eliges una licencia.",
  },
  "ch709-deps": {
    prompt: "Cuando Claude propone instalar una pieza nueva (un paquete), ¿qué recomienda esta guía?",
    choices: [
      "Aprobarlo enseguida sin preguntar",
      "Prohibir para siempre instalar cualquier pieza y hacer a mano desde cero todo lo que haga falta",
      "Preguntar qué se instala y por qué, y aprobarlo",
      "Cambiar el nombre de la pieza e instalarla",
    ],
    explain: "En las piezas hechas por otros pueden colarse sin que lo sepas puntos débiles de seguridad. Pregunta qué se instala y por qué, y luego apruébalo.",
  },
  "ch710-loop": {
    prompt: "¿Cuál es el orden correcto de una vuelta del tablero de tareas?",
    choices: [
      "Desplegar → planificar → crear → revisar, es decir, publicas primero y rellenas el resto según la reacción de la gente",
      "Repositorio → SPEC.md → plan y rama → comprobar → PR y revisión → seguridad → despliegue → incidencia",
      "Crear → desplegar → repositorio → planificar",
      "Revisar → desplegar → crear → planificar",
    ],
    explain: "El orden de los capítulos 2 a 9 es una vuelta completa. La comprobación de seguridad antes de publicar se hace antes de desplegar.",
  },
  "ch710-own": {
    prompt: "Quieres usar de verdad en tu negocio una página informativa de tienda hecha con tu propio problema. ¿Qué compruebas primero?",
    choices: [
      "La ortografía del mensaje de commit",
      "Si el tipo y el color de letra de la página se ven bien en el móvil y si el logotipo de la tienda se ve nítido",
      "La longitud del nombre del repositorio",
      "Las prohibiciones de GitHub Pages (llevar un negocio, una tienda online o un servicio comercial)",
    ],
    explain: "Pages no se puede usar para llevar un negocio, una tienda online ni un servicio comercial. Practicar y vender de verdad son cosas distintas, así que comprueba primero las prohibiciones.",
  },
}
