# Capítulo 7. Skills, plugins y herramientas externas: la herramienta de organización con una sola línea

> **En una línea**: las instrucciones, las listas de comprobación y los procedimientos de varios pasos que pegas cada vez, conviértelos en **skills** y llámalos con una línea, `/nombre`. En este capítulo queda completa la «herramienta de organización».
> También puedes añadir **plugins** hechos por otras personas y **conectores** de servicios externos, pero como ejecutan código con tus permisos, instala solo los de confianza.

Este capítulo se ha escrito a partir de la documentación oficial de Claude Code consultada el 31 de octubre de 2026 y de la app de escritorio para macOS (pantalla en coreano, cuenta de pago). Usa tal cual las plantillas del capítulo 5 y el CLAUDE.md del capítulo 6.

## Qué es un skill

Un **skill** (Skill) es una instrucción escrita en un archivo `SKILL.md`. Claude lo usa por su cuenta cuando llega una petición relacionada, y tú también puedes llamarlo directamente con `/nombre-del-skill`.[^what]

Se crea un skill en estos casos.[^when]

- Cuando **sigues pegando** la misma instrucción o lista de comprobación
- Cuando una parte de CLAUDE.md ha crecido hasta ser un **procedimiento de varios pasos**, no un "hecho"

La diferencia con CLAUDE.md es **cuándo se lee**. CLAUDE.md se lee siempre, en cada sesión, pero el cuerpo de un skill se lee **solo cuando se usa**. Por eso, aunque lo escribas largo y detallado, normalmente casi no pesa.[^when]

| | CLAUDE.md (capítulo 6) | Skill (capítulo 7) |
|---|---|---|
| Qué contiene | Reglas que se cumplen siempre | El procedimiento de una tarea |
| Cuándo se lee | En cada sesión | Solo cuando se usa |
| Cómo se llama | No hay forma | `/nombre` o una petición relacionada |

<Quiz id="ch407-what" />

## Práctica: crear 3 skills de organización

Vamos a convertir en skills las tres tareas de la herramienta de organización.

![Petición de los skills. Con el número rojo ①, en el cuadro de escritura, la petición de crear 3 skills (meeting-notes, study-notes y weekly-review)](../../../guide/20-claude-code/assets/shot-25-skill-prompt-marked.png)

```
Crea en .claude/skills de esta carpeta 3 skills que usen las plantillas de templates y las reglas de CLAUDE.md. meeting-notes (notas de reunión → acta), study-notes (apuntes de estudio → nota de estudio), weekly-review (notas de balance → balance semanal). En cada SKILL.md incluye cuándo se usa, qué archivos leer, qué plantilla usar, dónde guardar y una lista de comprobación para revisar al terminar.
```

Si pones la carpeta de un skill `.claude/skills/<nombre>/SKILL.md` dentro de esa carpeta, se convierte en un skill de proyecto que se usa **solo en las sesiones de esa carpeta**.[^where] El nombre de la carpeta es el nombre del comando (`/meeting-notes`).[^name] No pudimos confirmar en la documentación oficial si se pueden usar nombres de comando en coreano, así que esta guía usó nombres en inglés.

### Esta vez salió una ventana de permiso

Justo cuando iba a escribir el archivo del skill, apareció una **ventana de permiso**.

![Ventana de permiso. Con números rojos: ① «¿Permitir que Claude escriba SKILL.md?» (Claude가 쓰기 SKILL.md하도록 허용하시겠습니까?), ② vista previa de lo que va a escribir (líneas verdes), ③ «Rechazar» (거부), ④ «Permitir siempre» (항상 허용) y el botón ▾ (la línea de la ruta está tapada porque contiene el nombre de usuario del ordenador)](../../../guide/20-claude-code/assets/shot-26-permission-marked.png)

En los capítulos 2 a 4 no apareció la ventana de permiso por una regla personal de este ordenador. Esta vez apareció porque la carpeta `.claude` es una **ruta protegida**. Aunque estés en el modo «Aceptar ediciones automáticamente», sigue preguntando cuando se escribe en rutas protegidas.[^protected] En esa carpeta hay archivos que cambian el comportamiento de Claude, como skills y ajustes, y por eso se hace que una persona lo confirme antes de cambiarlos.

En ② **puedes leer primero lo que va a escribir.** Si pulsas ▾, aparece «Permitir solo esta vez» (한 번만 허용).

![Menú ▾. Con el número rojo ①: «Permitir solo esta vez» (⌘↩)](../../../guide/20-claude-code/assets/shot-27-allow-once-marked.png)

| Botón | Qué hace |
|---|---|
| Rechazar | Impide esta escritura |
| Permitir solo esta vez (⌘↩) | Lo permite solo esta vez |
| Permitir siempre (⇧⌘↩) | Permite que de ahora en adelante no se pregunte por lo mismo |

Fuente: comprobación en pantalla de esta guía (2026-10-31)

Al principio recomendamos **«Permitir solo esta vez»**. «Permitir siempre» es cómodo, pero deja de preguntar por lo mismo (mira la explicación de la pantalla para saber hasta cuándo). En esta práctica, al ser 3 skills, la ventana salió tres veces y las tres elegimos «Permitir solo esta vez».

Skills creados (resultado de esta guía): [meeting-notes](/practice/notes/results/7장-스킬-meeting-notes.txt) · [study-notes](/practice/notes/results/7장-스킬-study-notes.txt) · [weekly-review](/practice/notes/results/7장-스킬-weekly-review.txt)

Al principio de cada SKILL.md hay un `name` (nombre) y una `description` (cuándo se usa). Claude mira la description para decidir cuándo usar el skill.[^desc] Por ejemplo, la description de weekly-review dice que se usa para peticiones como "escribe el balance semanal" o "organiza el balance de esta semana".

<Quiz id="ch407-make" />

## Llamarlo con una línea

Si en el cuadro de escritura de una sesión nueva escribes `/`, aparece la lista de comandos y skills disponibles. Si sigues escribiendo parte del nombre, se filtra.[^slash]

![Lista de skills. Con números rojos: ① el elemento «study-notes», ② el cuadro de descripción de al lado (al final de la descripción, «(project)»)](../../../guide/20-claude-code/assets/shot-28-skill-menu-marked.png)

El **(project)** de ② indica que es un skill de proyecto de esta carpeta. Elígelo con Enter y envía añadiendo el archivo que quieres organizar.

![Ejecución del skill. Con el número rojo ①, el cuadro de escritura con «/study-notes inbox/공부-2026-10-28-프롬프트-강의.txt»](../../../guide/20-claude-code/assets/shot-29-skill-run-marked.png)

```
/study-notes inbox/공부-2026-10-28-프롬프트-강의.txt
```

Con esta sola línea se creó la nota de estudio con la plantilla (resultado: [7장-공부노트-스킬로.txt](/practice/notes/results/7장-공부노트-스킬로.txt)). Entraron, en el orden de la plantilla, el resumen en una línea, las 5 claves, 4 cosas nuevas que aprendí, lo que hay que tener en cuenta y lo que preguntar. Esa nota que en el capítulo 4 se hizo con una petición larga y se rebobinó, esta vez se ha hecho **con una línea de comando**.

**Ya está completa la herramienta de organización.**

| Nota | Comando |
|---|---|
| Notas de reunión | `/meeting-notes inbox/회의-….txt` |
| Apuntes de estudio | `/study-notes inbox/공부-….txt` |
| Varios balances diarios | `/weekly-review` |

Aunque no recuerdes el nombre, no pasa nada. Si dices algo como "organiza el balance de esta semana", Claude mira la description y elige el skill adecuado.[^what]

<Quiz id="ch407-run" />

## Plugins y conectores

Un **plugin** (Plugin) es instalar en un paquete skills, comandos y herramientas hechos por otras personas, y un **conector** (Connector) es conectar a Claude servicios externos como Gmail o el calendario. En la app de escritorio, los conectores y plugins se añaden con el botón **+** que hay junto al cuadro de escritura.[^plus] Los conectores son servidores MCP (la forma estándar en que una IA se conecta a herramientas externas) con una configuración fácil desde la pantalla.[^connectors]

Es cómodo, pero hay algo que **debes pensar sin falta antes de instalar**. Un plugin puede **ejecutar código en tu ordenador con tus permisos**.[^plugin-risk] Y a veces ese código funciona fuera del alcance que protegen los modos de permisos del capítulo 4. Las reglas de permisos se aplican a las llamadas a herramientas de Claude, no al código que el propio plugin ejecuta por su cuenta.[^plugin-scope]

- Instala solo plugins de los que conozcas a su creador y sean de confianza.
- Borra los plugins que ya no necesites.
- El contenido de los servicios que conectas con un conector (correo, calendario) también se convierte en material que Claude lee. Lee junto con esto las "instrucciones ocultas" del capítulo 9.

La herramienta de organización de esta guía se basta **con los skills que has hecho tú**. Los plugins y los conectores, ve añadiéndolos de uno en uno solo cuando de verdad hagan falta.

<Quiz id="ch407-plugins" />

## Prueba tú

1. Pide que cree los 3 skills de organización y, cuando salga la ventana de permiso, lee la vista previa de ② y elige «Permitir solo esta vez».
2. En una sesión nueva, escribe `/` y parte del nombre de un skill, y mira si aparece en la lista.
3. Organiza unos apuntes de estudio con `/study-notes` y comprueba que salen en el orden de la plantilla del capítulo 5.
4. Envía solo "organiza el balance de esta semana", sin ningún nombre, y mira si Claude elige y usa el skill weekly-review.

**Proyecto continuo**: ahora llamas tú mismo a `/weekly-review` cada viernes. En el capítulo 8 veremos cómo **programar** esta tarea y cómo ejecutar varias organizaciones a la vez.

## Resumen

- Un skill es un procedimiento escrito en SKILL.md. Solo se lee cuando se usa y se usa con `/nombre` o con una petición relacionada.
- `.claude/skills/<nombre>/SKILL.md` de una carpeta es un skill exclusivo de esa carpeta. La description decide "cuándo se usa".
- La carpeta `.claude` es una ruta protegida y pregunta antes de escribir. Al principio, «Permitir solo esta vez».
- Herramienta de organización completa: `/meeting-notes`, `/study-notes`, `/weekly-review`.
- Un plugin puede ejecutar código con tus permisos. Instala solo los de confianza y solo cuando haga falta.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Skill | Skill | Procedimiento que se deja escrito en SKILL.md y se llama con `/nombre` |
| description | Descripción | Texto que dice cuándo usar el skill. Claude lo mira para elegirlo |
| Protected path | Ruta protegida | Lugar donde siempre se pide permiso antes de escribir. La carpeta `.claude`, entre otras |
| Plugin | Plugin | Extensión que se instala reuniendo skills, comandos y herramientas |
| Connector | Conector | Conexión de servicios externos con Claude (basada en servidores MCP) |
| MCP | MCP | Forma estándar en que una IA se conecta a herramientas y datos externos |

<ChapterDone :chapter="407" />

Siguiente capítulo: [Capítulo 8. Varias tareas a la vez, la nube y la programación](08-parallel-cloud-schedule.md)

[^what]: Documentación oficial de Claude Code, «Extend Claude with skills». "Create a SKILL.md file with instructions, and Claude adds it to its toolkit. Claude uses skills when relevant, or you can invoke one directly with /skill-name." https://code.claude.com/docs/en/skills (consultado el 2026-10-31)
[^when]: Documentación oficial de Claude Code, «Extend Claude with skills». "Create a skill when you keep pasting the same instructions, checklist, or multi-step procedure into chat, or when a section of CLAUDE.md has grown into a procedure rather than a fact. Unlike CLAUDE.md content, a skill's body loads only when it's used, so long reference material costs almost nothing until you need it." https://code.claude.com/docs/en/skills (consultado el 2026-10-31)
[^where]: Documentación oficial de Claude Code, «Extend Claude with skills». Fila Project de la tabla de ubicaciones: "`.claude/skills/<skill-name>/SKILL.md`" https://code.claude.com/docs/en/skills (consultado el 2026-10-31)
[^name]: Documentación oficial de Claude Code, «Extend Claude with skills». "The directory name, or the frontmatter name when you set one, becomes the command you type, and the description helps Claude decide when to load the skill automatically." https://code.claude.com/docs/en/skills (consultado el 2026-10-31)
[^desc]: Documentación oficial de Claude Code, «Extend Claude with skills». "Only description is recommended so Claude knows when to use the skill." https://code.claude.com/docs/en/skills (consultado el 2026-10-31)
[^slash]: Documentación oficial de Claude Code, «Desktop application». "type / in the prompt box or click the + button and select Slash commands to browse what's available." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^protected]: Documentación oficial de Claude Code, «Choose a permission mode». En la sección acceptEdits, bajo "These still prompt:" aparece "Writes to protected paths" https://code.claude.com/docs/en/permission-modes (consultado el 2026-10-31)
[^plus]: Documentación oficial de Claude Code, «Desktop application». "Click the + button next to the prompt box for file attachments, skills, connectors, and plugins." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^connectors]: Documentación oficial de Claude Code, «Desktop application». "Connectors are MCP servers with a graphical setup flow." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^plugin-risk]: Documentación oficial de Claude Code, «Plugin security and trust». "A plugin can carry content that runs code on your machine with your user privileges and content that enters Claude's context as instructions, so review a plugin before you install it." https://code.claude.com/docs/en/plugins/security (consultado el 2026-10-31)
[^plugin-scope]: Documentación oficial de Claude Code, «Plugin security and trust». "Claude Code's permission rules and sandbox cover the tool calls Claude makes, not the code a plugin runs by itself" https://code.claude.com/docs/en/plugins/security (consultado el 2026-10-31)
