# Capítulo 6. Memoria del proyecto: escribir tus reglas en CLAUDE.md

> **En una línea**: las reglas que repites cada vez, escríbelas en el archivo **CLAUDE.md** de la carpeta. Claude lee este archivo cada vez que empieza una sesión.
> Eso sí, **no es un mecanismo obligatorio, sino un contexto de referencia**. Cuanto más corto y concreto lo escribas, mejor lo cumple.

Este capítulo se escribió a partir de la documentación oficial de Claude Code consultada el 2026-10-31 y de la aplicación de escritorio para macOS (pantalla en coreano, cuenta de pago). Es el capítulo en el que reúnes como "reglas básicas" la plantilla que creaste en el capítulo 5.

## Cada sesión empieza de cero

Las sesiones de Claude Code **empiezan vacías** cada vez. Aunque en la sesión anterior dijeras "escribe las fechas así", una sesión nueva no lo sabe.[^fresh] Hay dos mecanismos que mantienen la memoria entre sesiones.[^two]

| | CLAUDE.md | Memoria automática |
|---|---|---|
| Quién lo escribe | Yo | Claude |
| Qué contiene | Instrucciones y reglas | Lo que he corregido y mis preferencias |
| Cuándo se lee | Al empezar todas las sesiones | Al empezar todas las sesiones (solo el principio) |

Fuente: documentación oficial de Claude Code[^two]

Este capítulo trata de **CLAUDE.md**, que escribes tú mismo. La memoria automática son notas que Claude apunta por su cuenta al ver mis correcciones.[^two]

<Quiz id="ch406-fresh" />

## Qué se escribe

CLAUDE.md es el lugar para escribir **"lo que, si no lo escribes, tendrás que volver a explicar cada vez"**.[^when] Escribe en estos casos.

- Cuando Claude comete **el mismo error por segunda vez**
- Cuando estás **repitiendo la misma corrección** que hiciste en la sesión anterior
- Cuando es algo que habría que **explicarle igual a una persona nueva**

Fuente: documentación oficial de Claude Code[^when]

Y escríbelo **con la concreción suficiente para poder comprobarlo**.[^concrete]

| Regla floja | Mejor regla |
|---|---|
| Escribe las fechas con elegancia | Las fechas se escriben como 10/27 (lun.) |
| Organiza bien | Las tareas se escriben en una tabla y siempre se incluyen el responsable y el plazo |
| Ten cuidado con los originales | Las notas originales de inbox no se modifican nunca |

Con la mejor regla, al ver el resultado puedes preguntar de inmediato: "¿la cumplió?".

**Escríbelo corto.** La documentación oficial indica mantener cada archivo **por debajo de 200 líneas**. Cuanto más largo, más contexto ocupa y peor se cumple.[^short] Es mejor pasar a una habilidad del capítulo 7 los procedimientos de varios pasos.[^when]

<Quiz id="ch406-what" />

## Práctica: crear un CLAUDE.md con tus reglas

Haz que convierta en un CLAUDE.md las "reglas comunes" que anotaste en el capítulo 4.

![Petición de CLAUDE.md. El número rojo marca: ① la petición con 5 reglas escrita en el cuadro de entrada](../../../guide/20-claude-code/assets/shot-22-claudemd-prompt-marked.png)

```
Crea un CLAUDE.md para esta carpeta. Reglas que debe incluir: 1) las notas originales de inbox no se modifican nunca 2) al organizar se usa la plantilla de la carpeta templates 3) las fechas se escriben como 10/27 (lun.) 4) lo que no esté en las notas no se inventa: se escribe (no está en la nota) 5) las tareas se escriben en una tabla y siempre se incluyen el responsable y el plazo. Que sea corto, de menos de 20 líneas.
```

Claude creó `CLAUDE.md` en lo más alto de la carpeta (resultado: [6장-CLAUDE.md.txt](/practice/notes/results/6장-CLAUDE.md.txt)). Las 5 reglas entraron en negrita, una por línea, y se añadió un ejemplo de tabla de tareas.

El `CLAUDE.md` de lo más alto de la carpeta (o `.claude/CLAUDE.md`) se llama **instrucciones del proyecto**. Se aplican a todas las sesiones que trabajan en esa carpeta.[^where]

<Quiz id="ch406-make" />

## Comprobar si lo cumple: en una sesión nueva

CLAUDE.md se lee **al empezar la sesión**.[^fresh] Por eso la prueba se hace en una **sesión nueva**. Esta vez no digas nada del formato y haz solo una petición corta.

![Petición corta en la sesión nueva. El número rojo marca: ① «Escríbeme la retrospectiva semanal de esta semana con las 3 notas de retrospectiva de inbox.»](../../../guide/20-claude-code/assets/shot-23-claudemd-test-marked.png)

```
Escríbeme la retrospectiva semanal de esta semana con las 3 notas de retrospectiva de inbox.
```

Contrasté el resultado ([6장-주간회고-2026-10-27.txt](/practice/notes/results/6장-주간회고-2026-10-27.txt)) con las reglas y salió esto.

| Regla | Resultado |
|---|---|
| Se usa la plantilla de templates | Exactamente la plantilla KPT del capítulo 5 (lo que fue bien, lo que fue flojo, lo que haremos la semana que viene) |
| Fechas como 10/27 (lun.) | Formato `10/30 (jue.)`, `11/3 (lun.)` |
| Si no está en las notas, (no está en la nota) | `(no está en la nota)` en dos casillas donde faltaba el "porqué" |
| No se modifican los originales | Las notas de inbox, tal cual |

Fuente: resultado de la práctica de esta guía (2026-10-31)

Las cifras (3 publicaciones de Instagram, 12 «me gusta», el precio mal escrito de 6000 wones, 4 sets y 11 en la semana, el costo del vino caliente de 1800 wones) también coincidían todas con las notas.

![Pantalla del resultado. Los números rojos marcan: ① el «Resultado de la revisión» (점검 결과) con el que Claude se comprobó a sí mismo usando la lista de verificación de la plantilla, ② «3 cosas que hay que confirmar» (확인이 필요한 것 3가지) y ③ los resultados (el archivo de la retrospectiva semanal) del panel de información de la sesión](../../../guide/20-claude-code/assets/shot-24-claudemd-result-marked.png)

En ① se ve que Claude **se comprobó a sí mismo con la lista de verificación** de la guía de la plantilla del capítulo 5, e incluso indicó el alcance de la comprobación (notas de retrospectiva 3/3). En ② avisó primero de que el día de la semana de la nota no coincide con el calendario real (la "fecha inventada" que se indicó en el capítulo 2), de las casillas cuyo motivo no está en las notas y de una modificación no registrada de una nota original (una línea que esta guía había corregido antes de la captura, no algo que hiciera Claude). **Si dejas escritas las reglas y la lista de verificación, el resultado vuelve acompañado de sus justificaciones.**

<Quiz id="ch406-test" />

## No es una regla obligatoria

La documentación oficial dice claramente que CLAUDE.md es **un contexto de referencia, no una configuración obligatoria**.[^context] Por eso, escríbelo así.

- Cuanto más imprescindible sea algo, escríbelo de forma **concreta y corta**. Cuanto más concreto, con más coherencia lo cumple.[^context]
- Si hay **reglas que chocan entre sí**, Claude puede elegir una cualquiera. Léelo de vez en cuando y borra las reglas obsoletas.[^conflict]
- Lo que hay que impedir pase lo que pase (por ejemplo, borrar la carpeta de originales) no lo fíes solo a CLAUDE.md: protégelo además con el modo de permisos del capítulo 4 y con el registro de Git.

::: details También hay un CLAUDE.md que se aplica a todo tu ordenador
Las instrucciones que escribas en `~/.claude/CLAUDE.md` (tu carpeta de usuario) se aplican a **las sesiones de todas las carpetas**.[^where] El ordenador con el que se hicieron las capturas de esta guía también tiene este tipo de instrucciones personales, y por eso la pantalla es un poco distinta, por ejemplo con una línea «Estado:» al final de las respuestas. Las reglas que sirvan para una sola carpeta, escríbelas en el CLAUDE.md de esa carpeta.
:::

<Quiz id="ch406-not-enforced" />

## Pruébalo tú

1. Pule en 3~5 líneas las reglas comunes que escribiste en el capítulo 4. Escríbelas con tanta concreción que se pueda preguntar "¿la cumplió?".
2. Pide que cree un CLAUDE.md como en la petición de arriba y comprueba el contenido en el panel de archivos.
3. Abre una **sesión nueva** y envía una petición corta sin decir nada del formato.
4. Contrasta el resultado con la tabla de reglas una por una. Si hay alguna regla que no cumplió, reescríbela con más concreción.

**Proyecto continuo**: ahora le pides de palabra, cada vez, "organiza el acta" o "crea unos apuntes de estudio". En el capítulo 7 convertirás estas peticiones en **habilidades** como `/organizar-acta` y las llamarás con una sola línea.

## Resumen

- Cada sesión empieza de cero. Lo que tengas que volver a explicar, escríbelo en CLAUDE.md.
- Cuando el mismo error o la misma corrección aparece por segunda vez, es hora de escribirlo. De forma concreta y por debajo de 200 líneas.
- El CLAUDE.md de lo más alto de la carpeta se aplica a todas las sesiones de esa carpeta, y `~/.claude/CLAUDE.md`, a todas las carpetas.
- Para comprobar si lo cumple, haz una petición corta en una sesión nueva.
- No es un mecanismo obligatorio. Lo que haya que impedir sí o sí, protégelo además con el modo de permisos y el registro de Git.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| CLAUDE.md | CLAUDE.md | Archivo de instrucciones que escribes tú y que se lee en cada sesión |
| Auto memory | Memoria automática | Notas que Claude apunta por su cuenta con mis correcciones y preferencias |
| Project instructions | Instrucciones del proyecto | El CLAUDE.md que se aplica a todas las sesiones de esa carpeta |
| Context | Contexto | Información que se da como referencia. No es lo mismo que una regla obligatoria |

<ChapterDone :chapter="406" />

Siguiente capítulo: [Capítulo 7. Habilidades, plugins y herramientas externas](07-skills-plugins.md)

[^fresh]: Documentación oficial de Claude Code, «How Claude remembers your project». "Each Claude Code session begins with a fresh context window." / "Claude reads them at the start of every session." https://code.claude.com/docs/en/memory (consultado el 2026-10-31)
[^two]: Documentación oficial de Claude Code, «How Claude remembers your project». "Two mechanisms carry knowledge across sessions" / "Auto memory: notes Claude writes itself based on your corrections and preferences" / "Both are loaded at the start of every conversation." https://code.claude.com/docs/en/memory (consultado el 2026-10-31)
[^when]: Documentación oficial de Claude Code, «How Claude remembers your project». "Treat CLAUDE.md as the place you write down what you'd otherwise re-explain." / "Claude makes the same mistake a second time" / "You type the same correction or clarification into chat that you typed last session" / "A new teammate would need the same context to be productive" / "If an entry is a multi-step procedure or only matters for one part of the codebase, move it to a skill" https://code.claude.com/docs/en/memory (consultado el 2026-10-31)
[^concrete]: Documentación oficial de Claude Code, «How Claude remembers your project». "Write instructions that are concrete enough to verify" https://code.claude.com/docs/en/memory (consultado el 2026-10-31)
[^short]: Documentación oficial de Claude Code, «How Claude remembers your project». "target under 200 lines per CLAUDE.md file. Longer files consume more context and reduce adherence." https://code.claude.com/docs/en/memory (consultado el 2026-10-31)
[^where]: Documentación oficial de Claude Code, «How Claude remembers your project». "Personal preferences for all projects" / "Team-shared instructions for the project" / "A project CLAUDE.md can be stored in either ./CLAUDE.md or ./.claude/CLAUDE.md." https://code.claude.com/docs/en/memory (consultado el 2026-10-31)
[^context]: Documentación oficial de Claude Code, «How Claude remembers your project». "Claude treats them as context, not enforced configuration." / "The more specific and concise your instructions, the more consistently Claude follows them." https://code.claude.com/docs/en/memory (consultado el 2026-10-31)
[^conflict]: Documentación oficial de Claude Code, «How Claude remembers your project». "if two instructions contradict each other, Claude may pick one arbitrarily." https://code.claude.com/docs/en/memory (consultado el 2026-10-31)
