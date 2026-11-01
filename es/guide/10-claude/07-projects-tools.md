# Capítulo 7. Proyectos, conectores y skills: conectar a Claude tus materiales y herramientas

> **En una línea**: los materiales y las instrucciones que usas para una misma tarea, agrúpalos en un **proyecto**. Las otras aplicaciones, como el correo o el calendario, se conectan con **conectores**,
> y lo que quieres que se haga siempre de la misma manera se añade como **skill**. Un paquete que reúne estas tres cosas por tipo de trabajo es un **plugin**.

Las pantallas corresponden a la versión web de octubre de 2026. Se está desplegando por turnos una nueva pantalla que une el chat y Cowork, así que la posición y el nombre de los menús pueden variar según la pantalla.
Las imágenes de este capítulo son de la versión web del plan gratuito. Para los menús uso los nombres que se ven en las imágenes. Los otros nombres que aparecen en la ayuda los he reunido en las notas al pie.

En este capítulo usamos dos sitios del menú lateral: «Proyectos» (프로젝트) y «Personalizar» (사용자 지정) (Customize).[^screen] En las imágenes de abajo están marcados como ③ y ④ respectivamente.

## Proyectos: materiales e instrucciones en un solo sitio

Un **proyecto** (project) es un espacio de trabajo para una sola tarea. Cada proyecto tiene su propio historial de conversaciones y su **conocimiento** (knowledge, el lugar donde guardas materiales de consulta).[^projects]
Por ejemplo, guarda el archivo de la plantilla de informe en un proyecto «Informe semanal de la empresa». Cada conversación que abras dentro empezará ya conociendo esa plantilla.

Los proyectos se pueden crear también en el plan gratuito. En el gratuito, hasta 5.[^projects-how][^projects-limit]

### Cómo crearlo y llenarlo

1. Abre ③ «Proyectos» (claude.ai/projects) en el menú lateral. Pulsa ① «Nuevo proyecto» (새 프로젝트), arriba a la derecha.[^screen][^projects-how][^new-project-name]
2. Escribe el nombre y la descripción. **Claude no puede leer** el nombre ni la descripción. Lo que haga falta para trabajar ponlo en el conocimiento o en las instrucciones.[^projects-how]
3. Sube archivos o texto con el «+» de **Conocimiento del proyecto** (프로젝트 지식), a la derecha de la pantalla del proyecto. Lo que subas aquí se usa en todas las conversaciones de ese proyecto.[^projects-how]
4. En «Configurar instrucciones del proyecto» (프로젝트 지침 설정), escribe las reglas que se seguirán en este proyecto y pulsa «Guardar instrucciones» (지침 저장).[^projects-how]
5. Una conversación que ya existe se pasa con la flecha junto al nombre de la conversación → «Añadir al proyecto» (프로젝트에 추가).[^projects-how]

Los materiales que solo vas a ver en esta conversación no los pongas en el conocimiento del proyecto: súbelos directamente a esa conversación. Así el conocimiento no se llena de cosas.[^academy-projects]

![Pantalla «Proyectos» (프로젝트). Con números rojos: ① botón «Nuevo proyecto» (새 프로젝트) arriba a la derecha, ② lista de proyectos en el centro (algunos con la marca «Proyecto de ejemplo» (예제 프로젝트)), ③ «Proyectos» en el menú lateral](../../../guide/10-claude/assets/shot-10-projects-marked.png)

Es una pantalla con los nombres de proyectos y los títulos de conversaciones cambiados por ejemplos (plan gratuito). **Los números rojos son los mismos que los de la lista de abajo.**

- ① «Nuevo proyecto»: crea un proyecto nuevo
- ② Lista de proyectos: se ven los proyectos que has creado, con su fecha
- ③ «Proyectos» del menú lateral: el sitio desde donde se abre esta pantalla

En la lista hay también elementos con la marca «Proyecto de ejemplo».[^screen] No te sorprendas si ves proyectos que no has creado tú.

<!-- Falta captura de pantalla: pantalla de un proyecto. El recuadro «Conocimiento del proyecto» (프로젝트 지식) a la derecha, el «+» y el botón «Configurar instrucciones del proyecto» (프로젝트 지침 설정) -->

Las instrucciones del [capítulo 5](05-memory.md) se aplican a todas las conversaciones. Las instrucciones del proyecto se aplican **solo a las conversaciones dentro de ese proyecto**.[^personal][^project-instr-free]

### Aunque sea el mismo proyecto, el contenido de las conversaciones no se comparte tal cual

Incluso dentro de un mismo proyecto, **el contenido de una conversación no pasa entero a la siguiente.** Lo que también debe saberse en otras conversaciones, ponlo en el conocimiento del proyecto.[^projects-how]
Por ejemplo, lo que decidiste ayer, "las tablas con 3 columnas", puede saberlo la conversación nueva de hoy si la memoria está activada. Pero si es una regla que se debe cumplir sí o sí, déjala escrita en las instrucciones o en el conocimiento. Así la conocerán todas las conversaciones.

La memoria es independiente en cada proyecto. Dentro de un proyecto se usan juntas la memoria de ese proyecto y la de las conversaciones de fuera de los proyectos. La memoria de otros proyectos no se usa.[^projects-how]
Si quieres dejar el proyecto totalmente aparte, desactiva «Usar la memoria de la cuenta» (계정 메모리 사용) en la memoria de la pantalla del proyecto.[^projects-how] La memoria en sí se trata en el [capítulo 5](05-memory.md).

### Cuando los materiales aumentan: RAG

En los planes de pago, cuando el conocimiento crece y se acerca al límite, el sistema cambia solo a **RAG** (Retrieval Augmented Generation, un método que no lee todo el material, sino que busca y lee solo las partes necesarias). Entonces la cantidad que cabe aumenta hasta 10 veces. No hay nada que activar ni desactivar.[^rag]
Cuando tengas muchos materiales, haz esto: ponles nombres fáciles de reconocer a los archivos y, al preguntar, señala el nombre del documento. Así Claude puede acotar dónde buscar.[^rag]

```
Del archivo «Informe de ventas del 3.er trimestre de 2026», extrae en una tabla solo las ventas por región.
```

### Para ordenar

- **Empieza por una sola tarea.** Es mejor empezar por un proyecto estrecho, como «Informe semanal», que por un único proyecto que lo abarque todo. Los materiales los vas añadiendo según los usas.[^academy-projects]
- **Cambia de vez en cuando los materiales viejos.** Si en el conocimiento del proyecto quedan materiales anticuados, las respuestas también pueden salir con contenido anticuado. De vez en cuando repasa la lista del conocimiento y corrígela.[^academy-projects]
- Si le pones una **estrella**, lo encuentras rápido en el menú lateral.[^projects-how]
- Los proyectos terminados se pueden **archivar**. Un proyecto archivado no se puede borrar directamente. Bórralo después de «Desarchivar» (보관 해제).[^projects-how]
- La función de compartir un proyecto con otras personas solo existe en Team y Enterprise (planes de empresa).[^projects]

> **Nueva versión de proyectos (beta)**: se está desplegando, empezando por algunos usuarios, una nueva forma en la que un proyecto funciona como una sola conversación. Si te cambias, las instrucciones, los archivos y el historial de conversaciones pasan tal cual.[^projects] Como todavía solo está abierta a algunas personas, este capítulo lo explica con los proyectos actuales.

### Poner en las instrucciones una plantilla para reutilizar

En el [capítulo 8 de la etapa 1](../00-common/08-meta-prompting.md#_4-convertirlo-en-una-plantilla-para-reutilizar) convertiste una petición que había salido bien en una **plantilla** que se reutiliza cambiando solo los huecos. Pon esa plantilla en las instrucciones del proyecto. Así no hace falta pegar la plantilla en cada conversación.

```
En las conversaciones de este proyecto, organiza en un informe semanal las notas de trabajo que te envíe.
- Hazlo en una tabla de tres columnas: "Terminado / En curso / Plan de la próxima semana"
- Escribe una línea por elemento
- Lo que no esté en las notas no te lo inventes: márcalo como [por confirmar]
```

::: details La respuesta que recibes será más o menos así (ejemplo, haz clic para desplegar)
Este es un ejemplo hecho por esta guía. La respuesta real varía según el servicio y cada momento.

Por ejemplo, si las notas de esta semana son "enviados presupuestos a dos sitios. Cambiando las fotos de la web. Reunión con proveedores la semana que viene", llega una respuesta como esta.

> | Terminado | En curso | Plan de la próxima semana |
> |---|---|---|
> | Presupuestos enviados a dos sitios | Cambio de fotos de la web | Reunión con proveedores (fecha [por confirmar]) |

**Comprueba si lo has recibido bien**: ¿llegó en una tabla de tres columnas? ¿Una línea por elemento? ¿Se coló algo que no estaba en las notas? ¿Se puso [por confirmar] en los huecos, como una fecha que no estaba en las notas?

:::

Ahora, en una conversación nueva dentro del proyecto solo tienes que pegar las notas de esta semana.

<Quiz id="ch207-projects" />

## Conectores: conectar con otras aplicaciones

Un **conector** (connector) es una conexión que une a Claude con las aplicaciones y servicios que usas. Si lo conectas, Claude puede traer los datos que hay dentro e incluso hacer tareas dentro de ese servicio.[^connectors]
Por ejemplo, si conectas Google Calendar, puedes preguntar: "dime cuándo estoy libre la semana que viene". No hace falta copiar y pegar tus citas.

Los conectores los puede usar cualquier usuario, incluido el plan gratuito, en la web, el escritorio y el móvil.[^connectors]

### Cómo conectar

1. Pulsa «+», abajo a la izquierda del cuadro de escritura, y elige ③ «Añadir conectores» (커넥터 추가).[^screen][^connector-name] También sirve la pestaña «Conectores» (커넥터) en «Personalizar» del menú lateral.[^screen]
2. Elige el servicio que vas a usar y pulsa «Conectar» (연결) o «Instalar» (설치). Inicia sesión en ese servicio y concede los permisos.[^connectors]
3. En cada conversación, en «+» → «Conectores», activa y desactiva los servicios que vas a usar en esa conversación.[^connectors]

Cuando lo hayas conectado, compruébalo con una petición sencilla.[^academy-connect]

```
¿Puedes acceder a mi Google Calendar? Muéstrame solo los eventos del próximo lunes.
```

Si ves los eventos, está bien conectado.

![El menú que se abre al pulsar «+» en el cuadro de escritura. Con números rojos: ① «Subir o añadir archivos» (파일 업로드 또는 추가), ② «Skills», ③ «Añadir conectores» (커넥터 추가), ④ «Sistema de diseño» (디자인 시스템), ⑤ «Añadir plugins» (플러그인 추가), ⑥ «Memoria» (메모리)](../../../guide/10-claude/assets/shot-02-plus-menu-marked.png)

Es una pantalla del plan gratuito. En este capítulo usamos estas tres.

- ② «Skills»: abre la lista de skills
- ③ «Añadir conectores»: conecta otras aplicaciones
- ⑤ «Añadir plugins»: añade plugins

⑥ «Memoria» se trata en el [capítulo 5](05-memory.md#desactivar-la-memoria-solo-en-un-chat).

![La pantalla al pasar el ratón por «Añadir conectores» en el menú «+» del cuadro de escritura. A un lado se abren «Explorar conectores» (커넥터 둘러보기) y «Añadir conector personalizado» (커스텀 커넥터 추가) en gris](../../../guide/10-claude/assets/shot-17-connectors-menu.png)

*Es la pantalla de una cuenta gratuita que todavía no tiene ningún conector conectado. Por eso, en lugar de los interruptores de activar y desactivar de cada servicio, solo se ve «Explorar conectores». «Añadir conector personalizado» aparecía en gris y no se podía pulsar.*[^screen-connectors]

Instalar conectores desde el móvil todavía está en beta. Si los conectas en la web o en el escritorio, la próxima vez que inicies sesión en la app del móvil podrás usarlos tal cual.[^connectors]

### Lo que debes saber antes de conectar

- **Conecta solo servicios de confianza y solo lo necesario.** Al conectar, Claude puede leer, e incluso cambiar, datos con los permisos de tu cuenta.[^connectors] Antes de conectar, pregúntate: ¿es un servicio de confianza? ¿Es imprescindible para esta tarea?
- **Lo que no podías ver antes, tampoco lo ves al conectar.** Un archivo que no puedes abrir en ese servicio tampoco se puede abrir con el conector.[^connectors]
- **Desconectar y ver los permisos** se hace en «Personalizar» → «Conectores».[^connectors]
- **No se entrena el modelo con los datos de las aplicaciones conectadas.** La aplicación conectada no puede ver tus otras conversaciones.[^suggest] Los ajustes de entrenamiento en conjunto se tratan en el [capítulo 9](09-privacy.md).

### Ejemplos típicos: Google y Microsoft 365

Los conectores de **Gmail, Google Calendar y Google Drive** los usan todos los usuarios de la web y el escritorio.[^google]
- Acciones como enviar o responder correos, o compartir, mover y enviar a la papelera archivos de Drive, por defecto **piden permiso cada vez antes de hacerse.**[^google]
- Si quieres recibirlo como documento de Google, di el nombre con claridad. Si dices solo "documento", se crea un archivo descargable.[^google]
- Claude no puede leer el contenido de los archivos adjuntos de Gmail. De los documentos de Drive lee solo el texto y no procesa las imágenes.[^google]
- Los datos traídos con un conector se guardan junto con esa conversación. Si borras la conversación, se borran también.[^google]

Compara un ejemplo flojo con uno mejor.

```
Organiza en un documento lo que se habló en la reunión.
```

```
Crea un documento de Google con estas notas. Ponle de título «Acta de la reunión de equipo de octubre».
```

Solo si dices «documento de Google», como en el segundo, se crea un documento de Google en Drive.

El conector de **Microsoft 365** funciona en todos los planes, incluido el gratuito. Pero se conectan **solo cuentas de empresa.** No sirven las cuentas personales como @outlook.com.[^m365] Además, antes hace falta el consentimiento del administrador de la empresa.[^m365]

### Conectores que muestran una pantalla dentro de la conversación

Un **conector interactivo** (interactive connector) muestra dentro de la conversación la pantalla de esa aplicación. Por ejemplo, si preguntas por el estado de un proyecto, se abre dentro de la conversación el tablero de tareas de Asana. Desde ahí mismo puedes marcar las tareas.[^interactive] En la lista de conectores, los que llevan la marca «Interactivo» (대화형) son de este tipo.[^interactive]

A las aplicaciones que has conectado, Claude a veces las usa por iniciativa propia en el momento oportuno, aunque no digas su nombre.[^suggest]
- Si hay más de una aplicación adecuada, Claude no elige una a escondidas. Eliges tú.[^suggest]
- Las recomendaciones de aplicaciones no incluyen publicidad ni exposición pagada.[^suggest]
- Antes de reservar o comprar algo en tu nombre, te pide confirmación.[^suggest]

> Un **conector personalizado** (custom connector) es una función que conecta directamente por dirección un servicio que Anthropic no ha verificado. En el plan gratuito, hasta 1. Conecta solo sitios de confianza.[^connectors] Para la mayoría de los casos bastan los conectores de la lista.

<Quiz id="ch207-connectors" />

## Permisos de herramientas: qué y cuánto dejar usar

Cada conector contiene varias **herramientas** (tool, cada una de las acciones que puede hacer el conector, como "leer correo" o "enviar correo").

### Apaga las herramientas que no vayas a usar

En el menú «Búsqueda y herramientas» (검색 및 도구) de la conversación puedes apagar solo algunas herramientas.[^interactive]
Por ejemplo, si solo vas a hacer que lea y organice el correo, deja apagada la herramienta de "enviar". Así no hay riesgo de que salga un correo por error (sugerencia de esta guía).

Si un conector personalizado pide permiso y ves «Permitir siempre» (항상 허용), ten cuidado. Púlsalo solo en herramientas de tanta confianza que puedas dejarlas trabajar sin vigilarlas.[^custom]

### Cuando hay muchos conectores: «Acceso a herramientas»

Cada conector ocupa un espacio en la conversación. Por eso, cuantos más tienes activados, menos espacio queda para trabajar de verdad.[^tools]
En «+» → «Conectores» → «Acceso a herramientas» (도구 액세스) puedes elegir cómo se cargan.[^tools]

| Opción | Cuándo conviene |
|---|---|
| «Automático (predeterminado)» (자동(기본값)) | La mayoría de los casos. Claude elige por su cuenta |
| «Siempre disponible» (항상 사용 가능) | Menos de 10 conectores de uso constante |
| «Cuando se necesite» (필요할 때) | Si tienes 10 conectores o más, o si la conversación se alarga |

«Siempre disponible» ocupa más espacio desde el principio. «Cuando se necesite» puede requerir un paso más para encontrar el conector adecuado.[^tools] Esta elección se aplica **solo a esa conversación**.[^tools]

### Cuando uses la investigación

La investigación del [capítulo 6](06-search.md) usa las herramientas de los conectores que tengas activados **sin preguntar cada vez.**[^research] Antes de empezar una investigación, deja activados solo los conectores que vayas a usar. Si reduces de antemano lo que puede leer, no se mezclan materiales que no vienen al caso (sugerencia de esta guía).

<Quiz id="ch207-tool-access" />

## Skills: dejar guardada tu forma de trabajar

Un **skill** es un paquete de instrucciones y materiales que hace que una tarea concreta se haga siempre de la misma manera.[^skills]
Por ejemplo, si dejas guardada como skill la regla "los informes de la empresa, en este orden y con esta tipografía", cada vez que hagas un informe se hará a su manera.

Los skills los usan todos los planes: Free, Pro, Max, Team y Enterprise. Eso sí, **la función de crear archivos debe estar activada.** En «Configuración» → «Funciones» (기능), activa «Ejecución de código y creación de archivos» (코드 실행 및 파일 생성).[^create-name][^skills][^skills-use]

### Skills básicos y skills propios

- Los **skills básicos** que Anthropic ya ha incluido (crear Excel, Word, PowerPoint y PDF) se usan solos, sin necesidad de llamarlos.[^skills-use] Son los que se usan cuando creas archivos en el [capítulo 4](04-files-artifacts.md).
- El sitio donde se activan y desactivan los skills es «Personalizar» → pestaña «Skills», en el menú lateral.[^screen] Claude no usa un skill que hayas desactivado.[^skills-use]
- Un skill sencillo se puede crear solo con texto, sin programar.[^skills] La carpeta del skill que hayas creado se comprime en ZIP y se sube. En la ayuda aparece como «+ Crear skill» → «Subir skill» (스킬 업로드).[^skills-use] En la pantalla de este capítulo hay un botón «+ Añadir» (+ 추가) arriba a la derecha de «Personalizar».[^screen]
- El contenido de un skill instalado desde la lista de skills no se puede editar.[^directory]

Si parece que un skill no se usa, pídelo señalando su nombre.[^skills-use]

```
Usa mi skill «Plantilla de informes de la empresa» para crear una presentación con estas notas.
```

Si un skill que has creado tú casi nunca se usa, prueba a corregir su **descripción** (description). Claude mira esta descripción para decidir cuándo usar ese skill.[^skills-make] En la descripción escribe con concreción cuándo se usa el skill.[^skills-make] También es buena idea incluir las palabras que sueles usar al pedirlo, como "organizar el acta" o "resumir la reunión" (sugerencia de esta guía). La descripción puede tener hasta 200 caracteres.[^skills-make]

### Crear tu propio skill: pedírselo hablando

Si cada vez que haces una tarea repites la misma explicación, esa explicación es tu primer skill.[^academy-layers] Por ejemplo, si cada vez dices "el acta, en el orden decisiones, tareas, responsables".

No hace falta que escribas tú solo el archivo del skill. Abre una conversación nueva y propón a Claude hacerlo juntos.[^academy-skills]

```
Quiero crear un skill para organizar actas de reuniones. Pregúntame una por una lo que haga falta.
```

Claude te hará varias preguntas: qué hace este skill, cómo es un buen resultado, cuándo se usa. Responde con la mayor concreción que puedas. Si tienes un buen ejemplo o un archivo de plantilla, súbelo también. Si ve ejemplos reales, Claude entiende con más exactitud el resultado que quieres.[^academy-skills]

Cómo se guarda el skill que has creado puede variar según la pantalla. Si no ves cómo guardarlo, pide a Claude que comprima la carpeta del skill en ZIP. Ese archivo lo subes con «Subir skill», como arriba.[^skills-use] Si quieres cambiar algo, pídeselo a Claude hablando. También puedes, en el archivo del skill que se abre junto a la conversación, seleccionar el texto que quieres cambiar y pulsar «Editar con Claude» (Edit with Claude).[^skills-make]

### En qué se diferencia de las instrucciones, los proyectos y los conectores

| Función | Cuándo se usa |
|---|---|
| Instrucciones | Siempre, en todas las conversaciones |
| Proyecto | Siempre, dentro de ese proyecto |
| Skill | Solo cuando haces una tarea relacionada |
| Conector | Cuando hay que llegar a otra aplicación |

Las instrucciones se aplican a todas las conversaciones por igual, y un skill solo se carga cuando guarda relación con lo que haces.[^skills] El proyecto es un conocimiento de fondo que siempre está puesto.[^skills] Si el conector hace que **llegues** a la herramienta, el skill te enseña **a usarla bien**.[^skills]
Como solo se cargan cuando hace falta, aunque guardes varios skills ocupan poco espacio de la conversación.[^skills]

En una línea: el proyecto guarda los **materiales que hay que saber** y el skill guarda **el orden de trabajo**.[^academy-skills] Los dos se pueden usar juntos. Por ejemplo, los datos de los clientes en el proyecto y el orden para preparar una consulta como skill.

### Ten cuidado con esto

- **Instala solo skills de sitios de confianza.** Los mayores riesgos de un skill son la **inyección de prompts**, que manipula a Claude con instrucciones ocultas, y la **fuga de datos**, que saca materiales hacia fuera.[^skills-use] La inyección de prompts la aprendiste en el [capítulo 9 de la etapa 1](../00-common/09-safety.md#_4-instrucciones-ocultas-—-inyeccion-de-instrucciones-prompt-injection).
- También existe **crear un skill grabando la pantalla.** Grabas lo que haces y Claude crea el skill con eso. Solo funciona en Cowork de la app de Mac con Pro, Max y Team, y la grabación dura unos 10 minutos.[^skills-make] Durante la grabación no muestres contraseñas ni pantallas sensibles.

<Quiz id="ch207-skills" />

## Plugins: paquetes por tipo de trabajo

Un **plugin** es un paquete que reúne skills, conectores y **subagentes** (sub-agent, un Claude auxiliar que se encarga aparte de una parte de una tarea grande).[^plugins]
Hay plugins preparados por tipo de trabajo, como ventas, finanzas, asuntos legales, marketing y recursos humanos.[^plugins] En vez de buscarlos y conectarlos uno a uno, es como añadir de una vez el conjunto que encaja con tu trabajo.

Una comparación de las tres funciones de este capítulo (comparación de esta guía): el conector es la **mano** que llega a otras aplicaciones, el skill es la **destreza** para trabajar, y el plugin es el **conjunto de trabajo** que junta las dos cosas.

Los plugins se usan **solo en los planes de pago** (Pro, Max, Team y Enterprise).[^plugins]

### Cómo añadirlos y usarlos

1. Abre ④ «Personalizar» (사용자 지정) (Customize) en el menú lateral.[^screen] Skills, conectores y plugins se encuentran en esta misma lista.[^directory]
2. En la pestaña ① «Plugins» → ② «Explorar» (탐색), elige un plugin y pulsa «Añadir» (추가).[^screen][^discover-name]
3. En una conversación o en Cowork, escribe `/` o pulsa «+» y verás los skills que contiene el plugin. Elige y úsalo.[^plugins]

Un plugin que recibes trae la forma general de hacer las cosas. Las plantillas y el orden de tu trabajo pueden ser distintos.[^academy-plugins] Si en la pantalla donde ves el plugin añadido pulsas «Adaptar» (커스터마이징) (Customize), arriba a la derecha, se abre una tarea de Cowork para modificar ese plugin. Pulsa «Empezar» (시작하기) (Let's go) y modifícalo junto con Claude.[^plugins] El nombre del menú puede variar según la pantalla. Al pedirlo, enséñale ejemplos que uses de verdad.

```
He subido tres presupuestos que envió nuestro equipo el mes pasado. Modifica el skill de presupuestos de este plugin para que siga esta plantilla y este tono.
```

Cuanto más lo adaptes a tu trabajo, más útil se vuelve el plugin.[^academy-plugins]

![Pantalla «Personalizar» (사용자 지정). Con números rojos: ① pestañas «Skills», «Conectores» y «Plugins», ② «Mis elementos» (내 항목) y «Explorar» (탐색), ③ «+ Añadir» (+ 추가) arriba a la derecha, ④ «Personalizar» en el menú lateral. En el centro se ven los elementos creados por Anthropic y los botones «Añadir» (추가) y «Probar» (체험)](../../../guide/10-claude/assets/shot-10-customize-marked.png)

Es una pantalla del plan gratuito. **Los números rojos son los mismos que los de la lista de abajo.**

- ① «Skills», «Conectores» y «Plugins»: pestañas para elegir qué ver
- ② «Mis elementos» y «Explorar»: lo que ya has añadido y lo que vas a explorar de nuevo
- ③ «+ Añadir»: botón para sumar un elemento nuevo
- ④ «Personalizar» del menú lateral: el sitio desde donde se abre esta pantalla

En «Explorar» están los skills y plugins creados por Anthropic, y también se ve el botón «Probar».[^screen]
En la pantalla del plan gratuito también se ven la pestaña «Plugins» y «Añadir plugins» en el menú «+».[^screen] Sin embargo, la ayuda presenta los plugins como una función de los planes de pago.[^plugins]

- Los plugins que añades se guardan en tu cuenta. Se pueden usar en el chat web, en el Chat de la app de escritorio y en Cowork.[^plugins]
- Algunas funciones (como los subagentes) no se ejecutan en el chat y aparecen en gris. Se ejecutan en Cowork, del [capítulo 8](08-cowork.md).[^plugins]
- **Instala solo plugins de sitios de confianza.** Según el plugin, puede contener partes que se ejecutan en tu ordenador con los mismos permisos que otros programas.[^plugins]

<Quiz id="ch207-plugins" />

## Más en vídeo

Son vídeos de presentación hechos por las propias empresas. Las pantallas y los nombres de las funciones pueden diferir de lo explicado en este capítulo.

> Todos los vídeos de abajo están en **inglés**. En YouTube, si eliges en los ajustes del vídeo (la rueda dentada) → Subtítulos → **Traducción automática → español**, puedes verlo con subtítulos en español. El vídeo se reproduce directamente dentro de esta página.

**[Projects are now a conversation with Claude](https://www.youtube.com/watch?v=5qt_aGyAsKk)** · Claude · Para quien quiera ver cómo han cambiado los proyectos (septiembre de 2026, 1 minuto)

<YouTube id="5qt_aGyAsKk" title="Projects are now a conversation with Claude" />

**[Creating custom Skills with Claude](https://www.youtube.com/watch?v=kS1MJFZWMq4)** · Anthropic · Para quien quiera ver un ejemplo en que Claude crea un skill haciendo preguntas (octubre de 2025, 1 minuto)

<YouTube id="kS1MJFZWMq4" title="Creating custom Skills with Claude" />

El primer vídeo presenta el proyecto como "una sola conversación". Si tu pantalla es distinta de la del vídeo, sigue la explicación de este capítulo.

## Prueba tú

1. Con «Nuevo proyecto», crea un proyecto «Informe semanal» y pon la plantilla de arriba en las instrucciones del proyecto. Si no hay casilla de instrucciones, escribe la plantilla como texto y súbela al conocimiento del proyecto.
2. Dentro del proyecto, abre una conversación nueva y envía cinco líneas cualesquiera con lo que has hecho esta semana. Mira si la tabla sale como dicen las instrucciones.
3. Dentro del proyecto, abre otra conversación nueva y, antes de enviar el primer mensaje, desactiva «+» → «Memoria» (Memory) ([capítulo 5](05-memory.md#desactivar-la-memoria-solo-en-un-chat)). Después pregunta: "¿qué dije en la conversación de antes?". Comprueba que una conversación con la memoria desactivada no sabe lo de la anterior.
4. Abre «Personalizar» → pestaña «Conectores» → «Explorar» y echa un vistazo a qué servicios hay. Si has conectado alguno, apaga en «Búsqueda y herramientas» las herramientas de ese conector que no vayas a usar.
5. En «Personalizar» → pestaña «Skills» → «Mis elementos», mira si los skills básicos están activados.

**Proyecto continuo** ([Preparar un club de lectura](../00-common/practice-kit.md)): antes de subir members.csv, ábrelo y mira que no tenga datos personales como nombres o contactos. Después crea un proyecto «Club de lectura», sube a «Conocimiento del proyecto» los 4 archivos de ejemplo (memo-next-month.txt, minutes-last-meeting.txt, members.csv, fees.csv) y pon en las instrucciones del proyecto la línea de instrucciones del capítulo 5. En una conversación nueva dentro del proyecto, envía solo "escribe un borrador del aviso de noviembre" y mira si entra el contenido de la nota y del acta.

## Resumen

- El proyecto es un espacio de trabajo que reúne conversaciones, conocimiento e instrucciones. En el plan gratuito se crean hasta 5 (según la ayuda).
- Claude no puede leer el nombre ni la descripción del proyecto. Aunque sea el mismo proyecto, el contenido de las conversaciones no pasa entero, así que lo que deben saber todas va al conocimiento o a las instrucciones.
- En los planes de pago, cuando los materiales aumentan se cambia solo a RAG. Ponles a los archivos nombres fáciles de reconocer.
- El conector es la conexión con otras aplicaciones. Conecta solo servicios de confianza; lo que no podías ver antes, tampoco lo ves al conectar.
- Las herramientas que no vayas a usar apágalas en «Búsqueda y herramientas»; si tienes muchos conectores, cambia «Acceso a herramientas» a «Cuando se necesite».
- El skill es un paquete que recoge una forma de trabajar. Solo se carga cuando guarda relación, y se instalan solo los de sitios de confianza.
- El plugin es un conjunto de trabajo que reúne skills, conectores y subagentes, y es exclusivo de los planes de pago.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Project | Proyecto | Espacio de trabajo con su propio historial de conversaciones y su conocimiento |
| Project knowledge | Conocimiento del proyecto | Materiales de consulta que comparten todas las conversaciones del proyecto |
| RAG | RAG | Método que no lee todo el material, sino que busca y lee solo las partes necesarias |
| Connector | Conector | Conexión que une a Claude con otras aplicaciones y servicios |
| Tool | Herramienta | Cada una de las acciones que puede hacer un conector |
| Tool access | Acceso a herramientas | Ajuste que decide cuándo se carga un conector en la conversación |
| Skill | Skill | Paquete de instrucciones que hace que una tarea se haga siempre de la misma manera |
| Plugin | Plugin | Paquete por tipo de trabajo que reúne skills, conectores y subagentes |
| Sub-agent | Subagente | Un Claude auxiliar que se encarga aparte de una parte de una tarea grande |
| Prompt injection | Inyección de prompts | Ataque que engaña a la IA con instrucciones ocultas en el material |

<ChapterDone :chapter="207" />

Siguiente capítulo: [Capítulo 8. Cowork: encargar una tarea entera](08-cowork.md)

[^screen]: Comprobado directamente en la pantalla web de Claude (plan gratuito, en coreano). «Proyectos» (프로젝트) y «Personalizar» (사용자 지정) en el menú lateral / «Nuevo proyecto» (새 프로젝트) y la marca «Proyecto de ejemplo» (예제 프로젝트) en la pantalla «Proyectos» / «Skills», «Añadir conectores» (커넥터 추가) y «Añadir plugins» (플러그인 추가) en el menú «+» / en la pantalla «Personalizar», las pestañas «Skills», «Conectores» (커넥터) y «Plugins» (플러그인), «Mis elementos» (내 항목), «Explorar» (탐색), «+ Añadir» (+ 추가) y «Probar» (체험) (consultado el 2026-10-26)
[^projects]: Ayuda de Anthropic, «What are projects?». "Projects allow you to create self-contained workspaces with their own chat histories and knowledge bases." / "For users on Team and Enterprise plans, projects can be shared with other members of your organization" / "Nothing is lost or deleted in the move." https://support.claude.com/en/articles/9517075 (consultado el 2026-10-26)
[^projects-how]: Ayuda de Anthropic, «How can I create and manage projects?». "Free users can create a maximum of five projects." / "Click "+ New Project" in the upper right corner." / "Give your project a name and description (note that Claude will not have access to these details)." / "Anything you upload to this space will be used across all of your chats within that project." / "Claude will use these instructions for all the chats within the project." / "Note: Context is not shared across chats within a project unless the information is added into the project knowledge base." / "While working in a project, Claude uses the project's memory alongside your memory from chats outside of projects, but not memory from other projects." / "There is no way to delete archived projects at this time (you must unarchive it first)." https://support.claude.com/en/articles/9519177 (consultado el 2026-10-26)
[^personal]: Ayuda de Anthropic, «Understanding Claude's personalization features». "These instructions only apply to chats within that project." https://support.claude.com/en/articles/10185728 (consultado el 2026-10-26)
[^rag]: Ayuda de Anthropic, «Retrieval augmented generation (RAG) for projects». "RAG for projects is available on paid plans (Pro, Max, Team, and Enterprise)." / "When your project knowledge approaches the context window limit, Claude will automatically enable RAG mode to expand your project's capacity by up to 10x while maintaining quality responses." / "When asking questions, you can reference specific documents by name to help Claude focus its search." https://support.claude.com/en/articles/11473015 (consultado el 2026-10-26)
[^connectors]: Ayuda de Anthropic, «Use connectors to extend Claude's capabilities». "Connectors let Claude access your apps and services, retrieve your data, and take actions within connected services." / "Web connectors are available for all users on Claude, Cowork, Claude Desktop, and Claude Mobile (iOS and Android)." / "If someone can't access a specific file, channel, or record in the source system, the connector can't reach it from Claude either." / "Only connect services you trust and need for your workflows." / "Installing connectors on mobile is currently in beta—Claude Desktop and web remain the primary path for custom connectors." / "Free users are limited to one custom connector." https://support.claude.com/en/articles/11176164 (consultado el 2026-10-26)
[^suggest]: Ayuda de Anthropic, «How Claude suggests connected apps». "Your data from that app isn’t used to train Claude’s models, and the connected app can’t see your other conversations." / "Claude doesn’t silently default to one over the other; you choose which app to use, and Claude proceeds from there." / "There are no sponsored rankings, no paid placements, and no advertising." / "Before Claude books, buys, or reserves something on your behalf, it checks with you first." https://support.claude.com/en/articles/14730684 (consultado el 2026-10-26)
[^google]: Ayuda de Anthropic, «Use Google Workspace connectors». "By default, Claude asks for your approval before each of these actions." / "Asking for a generic "doc" or "deck" without naming Google creates a local file instead." / "Attachment content is not directly accessible through Gmail (metadata only)." / "This data is retained with its associated chat, so you can delete any retrieved data by deleting the chat." https://support.claude.com/en/articles/10166901 (consultado el 2026-10-26)
[^m365]: Ayuda de Anthropic, «Connect to Microsoft 365». "The Microsoft 365 connector is available on all Claude plans: Free, Pro, Max, Team, and Enterprise." / "Personal Microsoft accounts (such as @outlook.com, @hotmail.com, or @live.com) can't be used." / "In every tenant, a Microsoft Entra Global Administrator also needs to grant a one-time consent." https://support.claude.com/en/articles/15183774 (consultado el 2026-10-26)
[^interactive]: Ayuda de Anthropic, «Use interactive connectors in Claude». "You can check off tasks, update statuses, and keep chatting with Claude—all in one place." / "Individual users: You can disable specific connector tools via the "Search and tools" menu in your conversation." https://support.claude.com/en/articles/13454812 (consultado el 2026-10-26)
[^custom]: Ayuda de Anthropic, «Get started with custom connectors using remote MCP». "only click "Allow always" when using a server and tool that you trust to run unsupervised." https://support.claude.com/en/articles/11175166 (consultado el 2026-10-26)
[^tools]: Ayuda de Anthropic, «Manage Claude’s tool access». "Each connector takes up space in a conversation." / "Best for: Fewer than 10 connectors you use constantly." / "Trade-off: Claude may take an extra step to find the right connector before using it." / "Your selection only applies to that conversation. You can change it at any time." https://support.claude.com/en/articles/13730515 (consultado el 2026-10-26)
[^research]: Ayuda de Anthropic, «Use research on Claude». "During research, Claude can use tools from your connectors automatically, without asking for approval each time." https://support.claude.com/en/articles/11088861 (consultado el 2026-10-26)
[^skills]: Ayuda de Anthropic, «What are skills?». "Skills are available for users on Free, Pro, Max, Team, and Enterprise plans. This feature requires code execution to be enabled." / "Anyone can create skills by writing instructions in Markdown—no coding required for simple skills" / "Custom instructions apply broadly to all your conversations. Skills are task-specific and only load when relevant" / "Projects provide static background knowledge that's always loaded when you start chats within them." / "MCP connections give Claude access to tools, while skills teach Claude how to use those tools effectively." / "Claude determines which skills are relevant and loads the information it needs to complete that task, helping to prevent context window overload." https://support.claude.com/en/articles/12512176 (consultado el 2026-10-26)
[^skills-use]: Ayuda de Anthropic, «Use skills in Claude». "Navigate to Settings > Capabilities and ensure that Code execution and file creation (called Create and edit files in the updated Settings layout) is enabled." / "You don't need to explicitly invoke them—Claude determines when each skill is needed based on your request." / "Toggle any skill on or off using the switch next to it. Disabled skills won't be available to Claude." / "Upload a ZIP file containing your skill folder." / "Try being more explicit in your request (e.g., "Use my brand guidelines skill to create a presentation")." / "The most significant risks are prompt injection, which allows Claude to be manipulated to execute unintended actions, and data exfiltration" https://support.claude.com/en/articles/12512180 (consultado el 2026-10-26)
[^skills-make]: Ayuda de Anthropic, «How to create custom skills». "Recording a skill is available on Pro, Max, and Team plans, in Cowork in Claude for Mac." / "A recording can run for about 10 minutes." / "This is critical—Claude uses this to determine when to invoke your skill (200 characters maximum)." / "Write clear descriptions: Claude uses descriptions to decide when to invoke your skill. Be specific about when it applies." / "Iterate on the description if Claude isn't using it when expected." / "When you're iterating on a skill with Claude in chat, you can edit the skill files directly where they open beside the conversation. Highlight the text you want changed, click "Edit with Claude," and type your request." https://support.claude.com/en/articles/12512198 (consultado el 2026-10-26)
[^directory]: Ayuda de Anthropic, «Browse skills, connectors, and plugins in one directory». "Our unified directory brings skills, connectors, and plugins together in one place" / "Skills you install from the directory are view-only." https://support.claude.com/en/articles/14328846 (consultado el 2026-10-26)
[^plugins]: Ayuda de Anthropic, «Use plugins in Claude». "Plugins are available to all paid plans (Pro, Max, Team, Enterprise)." / "Each plugin bundles skills, connectors, and sub-agents into a single package" / "Claude includes a growing library of plugins for common knowledge work—including sales, finance, legal, marketing, HR, engineering, design, operations, data analysis, and more." / "Select the plugin you want, then click "Add."" / "Type "/" or click the "+" button to see the available skills from your plugins, in chat and in Cowork." / "You can add and use plugins in chat on the web, the Chat tab in Claude Desktop, and Claude Cowork." / "Hooks and sub-agents run in Cowork and Claude Code, not in chat, so they appear grayed out in chat." / "Only install plugins from sources you trust." / "This opens a new Cowork task with a prompt asking Claude to customize the plugin you chose." / "Click “Let's go” to start working with Claude to adjust the plugin's Skills and connectors to match how you work." La ayuda en coreano lo escribe como «커스터마이징» → «시작하기». https://support.claude.com/en/articles/13837440 (consultado el 2026-10-26)
[^academy-projects]: Claude Academy, curso «Claude 101», lección «Introduction to projects». "Simply upload it during the conversation and it stays separate from your project knowledge. It's a perfect way to share context or examples without cluttering the knowledge base." / "Begin with a specific use case rather than trying to create one project for everything. You can always add more content as you go." / "Outdated documents can lead to outdated responses. Review and update your project knowledge periodically." https://academy.claude.com/courses/claude-101/introduction-to-projects (consultado el 2026-10-26)
[^academy-connect]: Claude Academy, curso «Claude 101», lección «Connecting your tools». "Return to Claude and try a simple request, like "Can you access my [tool name]?"" https://academy.claude.com/courses/claude-101/connecting-your-tools (consultado el 2026-10-26)
[^academy-layers]: Claude Academy, curso «Introduction to Claude Cowork», lección «Get better results faster». "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale (consultado el 2026-10-26)
[^academy-skills]: Claude Academy, curso «Claude 101», lección «Working with skills». "The easiest way to create a custom Skill is through conversation with Claude itself." / "Claude will interview you about your workflow, asking things like: What should this skill do? What makes good output for this type of work? Can you give examples of when you'd use this skill?" / "Templates, style guides, brand assets, or examples of work you're proud of all help Claude understand exactly what you're looking for." / "projects store knowledge, skills perform tasks" https://academy.claude.com/courses/claude-101/working-with-skills (consultado el 2026-10-26)
[^academy-plugins]: Claude Academy, curso «Introduction to Claude Cowork», lección «Plugins: Encode your team's expertise». "A plugin from the marketplace is a strong default, not a final answer." / "The more you shape it to your team's actual work, the more leverage it produces." https://academy.claude.com/courses/introduction-to-claude-cowork/plugins-cowork-as-a-specialist (consultado el 2026-10-26)
[^projects-limit]: Puede ser distinto de lo que dice la página de precios, así que compruébalo en tu pantalla.
[^new-project-name]: En la ayuda aparece como «+ New Project».
[^project-instr-free]: Los documentos no coinciden en si las instrucciones del proyecto se pueden usar en el plan gratuito.
[^connector-name]: En la ayuda aparece como «Conectores» (커넥터) → «Administrar conectores» (커넥터 관리), y dice que también se puede escribir `/`.
[^create-name]: En la nueva pantalla de configuración, el nombre es «Crear y editar archivos» (파일 생성 및 편집).
[^discover-name]: En la ayuda aparece como la pestaña «Descubrir» (발견).
[^screen-connectors]: Comprobado directamente en el submenú «+» → «Añadir conectores» del cuadro de escritura. Los elementos son «Explorar conectores» (커넥터 둘러보기) y «Añadir conector personalizado» (커스텀 커넥터 추가) (en gris) (consultado el 2026-10-28, web, plan gratuito (Free))
