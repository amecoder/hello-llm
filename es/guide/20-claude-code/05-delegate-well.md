# Capítulo 5. Cómo encargar bien las tareas: con concreción, con un plan primero y con criterios de comprobación

> **En una línea**: en la petición escribe **qué mirar, con qué forma, dónde dejarlo y qué significa que está terminado**. Si el trabajo es grande, pide primero **el método en modo «Plan» (계획)**, corrígelo y luego encárgalo.
> No te fíes solo de que diga que ha terminado: pide también **el criterio de comprobación y las pruebas**.

Este capítulo se escribió a partir de la documentación oficial de Claude Code y de la aplicación de escritorio para macOS (pantalla en coreano, cuenta de pago) consultadas el 31 de octubre de 2026. En este capítulo vas a crear los **3 tipos de plantilla** (acta de reunión, apunte de estudio y balance semanal) que son el esqueleto de la «herramienta de orden».

## Hablar con concreción

La documentación oficial señala esta como la razón más habitual por la que una petición no sale como esperabas: **falta información que Claude no puede saber leyendo la carpeta.**[^cant-see] Por ejemplo, lo que se decidió en la reunión, el formato que me gusta o qué significa «está terminado».

Por eso, en la petición se escriben estas cuatro cosas.

| Qué escribir | Ejemplo |
|---|---|
| Qué mirar | La nota de reunión de inbox |
| Con qué forma | Lo decidido / tareas (responsable y plazo) / lo que se tratará en la próxima |
| Dónde dejarlo | En un archivo nuevo de la carpeta notes |
| Qué significa que está terminado | Que cada tarea tenga responsable y plazo |

La documentación oficial también dice que, si desde el principio dices «qué miras, cuál es el síntoma y qué significa que está arreglado», te ahorras una ronda de correcciones.[^specific]

```
Ordéname la nota de la reunión.
```

```
Lee la nota de la reunión de inbox y ordénala como un acta. Divídela en tres partes: lo decidido / tareas (responsable y plazo) / lo que se tratará en la próxima. Guárdala como un archivo nuevo en la carpeta notes. No modifiques la nota original.
```

La segunda petición es la que usaste en el capítulo 2. Es más larga que la primera, pero hay que corregir el resultado dos o tres veces menos.

**Si quieres algo generoso, dilo.** Claude lee la petición con cautela y tiende a crear **el resultado más pequeño** que la cumple.[^ambitious] Amplía tú mismo el alcance, con cosas como «incluso qué hacer cuando un campo esté vacío» o «y también un ejemplo de cada uno».

<Quiz id="ch405-specific" />

## Pedir que te pregunte cuando no lo sabes

Si todavía no has decidido qué quieres, no pasa nada. Basta con **pedirle a Claude que te haga preguntas**.[^interview]

```
Quiero hacer una plantilla de balance semanal para usar cada viernes, pero todavía no he decidido nada. Hazme las preguntas de una en una para que yo pueda responder y, cuando esté todo decidido, ordénalo en el archivo 회고-양식-초안.md.
```

Claude pregunta, con opciones para elegir, por las partes que todavía no has decidido. Sigue preguntando hasta que las respuestas se convierten en una especificación (spec, un documento que describe qué se va a crear).[^interview] El archivo de borrador ordenado servirá de referencia la próxima vez que lo crees de verdad.

<Quiz id="ch405-interview" />

## Primero el plan: modo «Plan»

Si el trabajo es grande, no lo encargues directamente: **pide antes el método.** En el modo «Plan» (계획), Claude lee y examina los archivos y escribe un plan, pero **no modifica ningún archivo.**[^plan] La documentación oficial también recomienda empezar con «Plan» las tareas complejas.[^plan-tip]

Vamos a practicar. En una sesión nueva, cambia el modo de la línea de debajo del cuadro de entrada a **«Plan»** (el menú de modos de permisos del capítulo 4) y envía esto.

![Petición del plan. Con números rojos: ① en el cuadro de entrada la petición de un plan de 3 plantillas, ② el modo de permisos «Plan» (계획)](../../../guide/20-claude-code/assets/shot-17-plan-prompt-marked.png)

```
Quiero crear siempre con la misma forma el acta de reunión, el apunte de estudio y el balance semanal. Tomando como referencia el acta de la carpeta notes y las notas de inbox, haz un plan para crear 3 plantillas en la carpeta templates. Incluye qué campos lleva cada plantilla y qué se escribe en cada campo, y también una lista de comprobación para que yo verifique si el resultado es correcto.
```

Al poco rato sale el plan.

![Pantalla de la propuesta de plan. Con números rojos: ① la tarjeta «Claude ha propuesto un plan» (Claude가 계획을 제안했습니다) (Rechazar, Modificar…, Aceptar, Aceptar y usar el modo automático), ② el panel «Plan» de la derecha, ③ el apartado «Suposiciones (valores por defecto decididos sin preguntar)» (가정(묻지 않고 정한 기본값)) dentro del plan](../../../guide/20-claude-code/assets/shot-18-plan-marked.png)

En **la tarjeta ①** eliges qué hacer con el plan.

| Nombre en pantalla | Qué hace |
|---|---|
| Rechazar (거부) | No acepta este plan |
| Modificar… (수정…) | Escribes lo que hay que cambiar y hace que se replanifique |
| Aceptar (수락) | Lo aprueba y las ediciones se confirman una a una |
| Aceptar y usar el modo automático (수락 및 자동 모드 사용) | Lo aprueba y sigue en modo automático |

Fuente: los nombres de la pantalla son de la comprobación de pantalla de esta guía (2026-10-31); el funcionamiento, de la documentación oficial[^approve]

En **el panel del plan ②** lees el plan completo. Encima del panel hay un aviso que dice «Selecciona texto para dejarle un comentario a Claude» (텍스트를 선택하여 Claude에게 댓글을 남기세요), así que puedes poner tu opinión directamente en la frase que te preocupa.

Lee sin falta el apartado **③ Suposiciones**. En esta práctica, Claude reunió aparte, como «valores por defecto decididos sin preguntar; si quieres cambiarlos, dilo antes de aprobar», cosas como el nombre de los archivos, dónde guardarlos y cómo marcar los campos vacíos. **Antes de aprobar es cuando más barato sale corregir.**

### Corregir el plan

Yo quería escribir el balance semanal en tres campos: lo que fue bien, lo que fue mal y lo que haré la próxima vez. Si pulsas «Modificar…», se abre la casilla «¿Qué hay que cambiar? (opcional)» (무엇을 변경해야 하나요? (선택사항)).

![Casilla de modificar el plan. Con números rojos: ① la casilla con el texto «Haz el balance semanal en tres campos (KPT): lo que fue bien / lo que fue mal / lo que haré la próxima semana.» (주간 회고는 잘한 것 / 아쉬운 것 / 다음 주에 할 것 세 칸(KPT)으로 해 줘.), ② el botón «Modificar» (수정)](../../../guide/20-claude-code/assets/shot-19-plan-edit-marked.png)

**KPT** es un método de balance que divide en lo que fue bien (Keep), lo que fue mal (Problem) y lo que probaré la próxima vez (Try). Si pulsas «Modificar», Claude corrige el plan y vuelve a pedir la aprobación.

![El plan corregido. Con números rojos: ① «No aprobado» (승인되지 않음) en el plan anterior, ② el archivo del plan «editado» con «+12 −16», ③ la tarjeta del plan que vuelve a salir, ④ el botón «Aceptar» (수락)](../../../guide/20-claude-code/assets/shot-20-plan-revised-marked.png)

Esta vez pulsé **«Aceptar»**. Al aprobar, Claude sale del modo plan, cambia al modo de permisos que corresponde a la opción elegida y empieza a modificar archivos.[^approve] El modo de la línea de debajo de la pantalla también pasó de «Plan» a «Manual» (수동).

![Pantalla ejecutando el plan. Con números rojos: ① la lista de tareas en ejecución, ② los resultados del panel de información de la sesión (README, balance semanal, apunte de estudio, acta), ③ los cambios «+155 −1», ④ el modo de permisos «Manual»](../../../guide/20-claude-code/assets/shot-21-plan-run-marked.png)

Los pasos «crear una rama» y «escribir HANDOFF.md» que se ven en la lista de tareas de ① surgieron de una instrucción personal del ordenador donde se hizo la captura (el recuadro desplegable del capítulo 6). Puede que en tu pantalla no salgan.

Las plantillas creadas son estas (resultado de la práctica de esta guía).

- [5장-양식-회의록.txt](/practice/notes/results/5장-양식-회의록.txt) · [5장-양식-공부노트.txt](/practice/notes/results/5장-양식-공부노트.txt) · [5장-양식-주간회고.txt](/practice/notes/results/5장-양식-주간회고.txt)
- [5장-양식-README.txt](/practice/notes/results/5장-양식-README.txt): cómo usar las plantillas y la lista de comprobación

La plantilla del balance semanal quedó, como se pidió en la modificación, con tres campos: «Lo que fue bien (Keep) / Lo que fue mal (Problem) / Lo que haré la próxima semana (Try)». Cada campo lleva una guía y un ejemplo de qué escribir.

<Quiz id="ch405-plan" />

## Dar un criterio de comprobación: pruebas en vez de «ya está»

Claude se detiene cuando el trabajo **parece terminado**. Si no tiene forma de comprobar por sí mismo si es correcto, «parece terminado» es todo lo que hay. Entonces acabo siendo yo quien tiene que revisar cada cosa.[^check]

Por eso le das a la vez **un criterio del que salga una respuesta de correcto o incorrecto**.[^check] Si es código, serían pruebas (tests); si es ordenar un documento, esa función la cumple una lista de comprobación.

```
Con la plantilla, escribe el balance de esta semana. Cuando termines, comprueba una por una la lista de abajo y enséñame, para cada punto, «pasa/falla» y la línea de la nota que lo respalda.
- ¿Hay entre 1 y 3 elementos en cada campo?
- ¿Los números (unidades vendidas, número de «me gusta») coinciden con la nota?
- ¿No ha inventado cosas que no están en la nota?
```

La documentación oficial dice que, uses el método que uses, **pidas pruebas**. Es más rápido y más preciso leer lo que se ha comprobado de verdad que una sola línea que diga «todo pasa».[^evidence] En el README de plantillas de esta práctica, Claude también dejó una lista de comprobación.

<Quiz id="ch405-check" />

## Cambiar de rumbo a mitad de camino

Vigila el primer minuto. Si va hacia donde no debe, páralo enseguida y corrígelo.[^steer]

- **Parar**: el botón de parar o **Esc**. Lo que ha hecho hasta ese momento se queda.[^steer]
- **Rebobinar**: `/rewind` del capítulo 4. Puedes probar primero el método más atrevido y, si no sale bien, deshacerlo, así que probar no da miedo.[^steer]
- **Volver a empezar**: **si lo has corregido dos veces y sigue mal**, no lo corrijas una tercera: empieza de nuevo. Los dos intentos fallidos se quedan en la conversación y Claude los sigue releyendo. Una petición nueva que incluya lo que has aprendido casi siempre es mejor.[^steer] En la aplicación de escritorio, abre una sesión nueva.

<Quiz id="ch405-steer" />

## Pruébalo tú mismo

1. En una sesión nueva, cambia el modo a «Plan» y envía la petición de arriba para el plan de 3 plantillas.
2. Lee el apartado «Suposiciones» del plan y cambia al menos una con «Modificar…» (por ejemplo, el balance semanal en tres campos KPT).
3. Aprueba con «Aceptar» y mira si en los resultados del panel de información de la sesión han aparecido los archivos de plantilla.
4. Pide que con la plantilla escriba el balance de esta semana, y pide a la vez la lista de comprobación y las pruebas.

**Proyecto continuo**: vuelve a mirar las tres líneas de «reglas que quiero usar en común en los dos documentos» que anotaste en el capítulo 4. En el capítulo 6 guardarás esas reglas en CLAUDE.md para que se cumplan sin tener que decirlas cada vez.

## Resumen

- En la petición escribe qué mirar, con qué forma, dónde dejarlo y qué significa que está terminado.
- Si no lo has decidido, pídele a Claude que te haga preguntas.
- Si el trabajo es grande, pide primero el método en modo «Plan». Lee el apartado «Suposiciones», corrígelo con «Modificar…» y luego «Aceptar».
- Dale un criterio del que salga una respuesta de correcto o incorrecto (una lista de comprobación) y pide que junto con el resultado te dé las pruebas.
- Vigila el primer minuto y, si lo has corregido dos veces y sigue mal, empieza de nuevo.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Plan mode | Modo Plan | Modo que examina sin modificar archivos y solo entrega un plan |
| Spec | Especificación | Documento donde se describe qué se va a crear |
| Template | Plantilla | Molde que se rellena siempre con la misma forma |
| KPT | KPT | Método de balance que divide en lo que fue bien (Keep), lo que fue mal (Problem) y lo que probaré (Try) |
| Evidence | Pruebas | Lo que se ha comprobado de verdad. Lo que se recibe en vez de «ya está» |

<ChapterDone :chapter="405" />

Siguiente capítulo: [Capítulo 6. La memoria del proyecto](06-claude-md.md)

[^cant-see]: Documentación oficial de Claude Code, «Best practices for Claude Code». "Claude built something different from what you had in mind, or it has to rediscover the same fact at the start of every session. It's missing information it can't get from reading the repo." https://code.claude.com/docs/en/best-practices (consultado el 2026-10-31)
[^specific]: Documentación oficial de Claude Code, «Best practices for Claude Code». "If you name the file, describe the symptom, and say what "fixed" looks like up front, you usually save yourself a round of corrections later." https://code.claude.com/docs/en/best-practices (consultado el 2026-10-31)
[^ambitious]: Documentación oficial de Claude Code, «Best practices for Claude Code». "Claude tends to read a request conservatively and build the smallest thing that satisfies it, since it can't see how much you were hoping for." https://code.claude.com/docs/en/best-practices (consultado el 2026-10-31)
[^interview]: Documentación oficial de Claude Code, «Best practices for Claude Code». "When you don't know exactly what you want yet, you don't have to work it all out before you prompt. Ask Claude to interview you instead" / "Claude comes back with multiple-choice questions about the parts you haven't pinned down" / "It keeps asking until the answers add up to a spec." https://code.claude.com/docs/en/best-practices (consultado el 2026-10-31)
[^plan]: Documentación oficial de Claude Code, «Choose a permission mode». "Plan mode tells Claude to research and propose changes without making them. Claude reads files, runs shell commands to explore, and writes a plan, but does not edit your source." https://code.claude.com/docs/en/permission-modes (consultado el 2026-10-31)
[^plan-tip]: Documentación oficial de Claude Code, «Desktop application». "Start complex tasks in Plan so Claude maps out an approach before making changes." https://code.claude.com/docs/en/desktop (consultado el 2026-10-31)
[^approve]: Documentación oficial de Claude Code, «Choose a permission mode». "When the plan is ready, Claude presents it and asks how to proceed." / "Approving a plan exits plan mode and switches the session to the permission mode each approve option describes, so Claude starts editing." https://code.claude.com/docs/en/permission-modes (consultado el 2026-10-31)
[^check]: Documentación oficial de Claude Code, «Best practices for Claude Code». "Claude stops when the work looks done." / "Give Claude something it can run that comes back pass or fail." https://code.claude.com/docs/en/best-practices (consultado el 2026-10-31)
[^evidence]: Documentación oficial de Claude Code, «Best practices for Claude Code». "\"All tests pass\" on its own tells you very little" / "reading the output is faster than rerunning the check yourself" https://code.claude.com/docs/en/best-practices (consultado el 2026-10-31)
[^steer]: Documentación oficial de Claude Code, «Best practices for Claude Code». "Watch the first minute, press Esc the moment Claude drifts, and after two failed corrections run /clear and write a better prompt instead of a third." / "Esc stops Claude mid-action and keeps everything up to that point" / "That makes it low-risk to try the bolder approach first and rewind if it doesn't work out." / "a third correction mostly adds to a conversation that already contains two failed attempts for Claude to keep re-reading. /clear plus one new prompt that folds in what you learned works better almost every time." https://code.claude.com/docs/en/best-practices (consultado el 2026-10-31)
