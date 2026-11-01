# Capítulo 3. El archivo de reglas AGENTS.md: pasar el CLAUDE.md a Codex

> **En una línea**: antes de empezar a trabajar, Codex lee **`AGENTS.md`**. El `CLAUDE.md` de Claude Code, si lo dejas tal cual, Codex no lo lee.
> Vas a pasar las reglas de la carpeta Herramienta de orden (정리도구) a `AGENTS.md` y a comprobar si, en una conversación nueva, las cumple **sin que se las digas**.

Este capítulo se escribió a partir de la documentación oficial de Codex consultada el 1 de noviembre de 2026 y de lo que esta guía probó directamente con la carpeta Herramienta de orden. Para qué hace falta un archivo de reglas se explicó en el [capítulo 6 de Claude Code](../20-claude-code/06-claude-md.md). Aquí solo se trata lo que cambia en Codex.

## Codex no lee CLAUDE.md

El archivo de reglas de Codex se llama `AGENTS.md`.[^agents] Para usar como reglas un archivo con otro nombre hay que registrarlo aparte en los ajustes, y los nombres no registrados se ignoran.[^ignored] Por eso, si dejas `CLAUDE.md` tal cual, no se lee como reglas.

Ya se pudo ver en el registro de ejecución del capítulo 2. Codex buscó `AGENTS.md` en la carpeta y, como no estaba, solo leyó las plantillas (`templates/`). No abrió `CLAUDE.md`.

Aun así, el acta del capítulo 2 cumplió la regla `(no está en la nota)`. Es porque la misma regla estaba escrita también en **la guía de las plantillas** (`templates/README.md`). Dicho al revés, una regla escrita **solo** en `CLAUDE.md` Codex no la conoce.

<Quiz id="ch503-why" />

## Pasar CLAUDE.md a AGENTS.md

Este traslado también se lo encargas a Codex. La ejecución de este capítulo se hizo, igual que la del capítulo 2, con el mismo Codex en el terminal. Esta vez se añadió **una regla nueva**. Si luego se cumple esa regla, se puede deducir con bastante fiabilidad que leyó `AGENTS.md`.

```
CLAUDE.md es el archivo de reglas que lee Claude Code. Pasa las mismas reglas a AGENTS.md para que Codex también las lea. No cambies el contenido de las reglas y añade solo una regla: «Al final del archivo ordenado se pone un apartado "Contrastar con el original" donde se anotan, como máximo 3, los números, nombres o fechas que hay que volver a comprobar.» Deja CLAUDE.md como está.
```

Codex pasó tal cual las cinco reglas de `CLAUDE.md` y añadió la nueva como número 6. Y avisó de que «aparte de la regla añadida, ha verificado que el contenido coincide totalmente con el original».

Resultado: [AGENTS.md](/practice/notes/results/codex/3장-AGENTS.md.txt)

Hay una razón para no borrar `CLAUDE.md`: que se pueda seguir usando la misma carpeta también con Claude Code. A cambio, **hay que corregir los dos archivos a la vez**. Si corriges solo uno, las dos herramientas trabajan con reglas distintas.

<Quiz id="ch503-move" />

## Probar sin decir las reglas

Abre una conversación nueva y pide solo que ordene unos apuntes de estudio, sin hablar de las reglas.

```
Ordena inbox/공부-2026-10-28-프롬프트-강의.txt como un apunte de estudio y guárdalo en notes/.
```

Al final del resultado apareció el apartado de la regla nueva.

```
## Contrastar con el original

- Fecha de la clase: 10/28 (miércoles). En el original figura 10/28, y el año se tomó del 2026 del nombre del archivo.
- Duración de la clase: 1 hora.
- Métodos para escribir instrucciones que presentó el profesor: 5.
```

Resultado: [apunte de estudio escrito solo con las reglas](/practice/notes/results/codex/3장-공부노트-규칙확인.txt)

| Cuándo se creó el archivo | Apartado «Contrastar con el original» |
|---|---|
| Antes de AGENTS.md (acta del capítulo 2) | No hay |
| Después de AGENTS.md (este apunte de estudio) | Hay |

Fuente: resultado de la práctica de esta guía (2026-11-01, una vez cada uno)

Como la regla nueva estaba solo en `AGENTS.md`, se puede considerar que Codex leyó ese archivo y lo siguió. Eso sí, es el **resultado de una sola vez cada uno**, y además el tipo de nota de antes y de después (acta y apunte de estudio) es distinto. La lista de comprobación de las plantillas también tiene un punto parecido: «contrastar una vez con la nota original». Para estar más seguro, ejecuta **la misma nota** una vez sin `AGENTS.md` y otra con él, y compara. No es una garantía de que lo cumpla siempre, así que compruébalo cada vez que veas el resultado.

<Quiz id="ch503-test" />

## En qué orden lee AGENTS.md

`AGENTS.md` se puede poner en dos sitios.[^chain]

| Ubicación | Alcance | Ejemplo |
|---|---|---|
| `~/.codex/AGENTS.md` | Todas mis carpetas | «Responde en coreano» |
| `AGENTS.md` de la carpeta del proyecto | Solo esa carpeta | Reglas de la herramienta de orden |

Fuente: documentación oficial de Codex (traducida solo en parte)[^chain]

Si están los dos, los lee **uno a continuación del otro**, y el archivo más cercano a la carpeta actual va después y tiene prioridad sobre las indicaciones anteriores.[^override] Cuando el tamaño total llega a 32 KiB por defecto, no añade lo que sigue.[^limit] En coreano son unos 10.000 caracteres. Mantén las reglas cortas.

Si has corregido las reglas y parece que no se aplican, **empieza una conversación nueva** o reinicia Codex. Codex vuelve a leer las reglas cada vez que empieza una ejecución.[^restart]

Si tienes una carpeta que todavía no tiene `AGENTS.md`, también puedes crear el esqueleto escribiendo `/init` en el cuadro de entrada de la aplicación.[^init]

<Quiz id="ch503-order" />

## Importar y memoria

**Importar** es la función que traslada de una vez los ajustes de otro agente. En la aplicación se puede importar desde Claude Code, Claude Cowork y Cursor.[^import-from] Se empieza desde el menú **Import** de los ajustes de la aplicación. Si no hay ese menú, busca **Import other agent setup** en **General**.[^import-menu]

![Pantalla Settings → Import de la aplicación de ChatGPT: bajo «Import from another AI app» están Claude Code, Claude Cowork y Cursor, cada uno con su botón Import](../../../guide/21-codex/assets/shot-02-import.png)

En la pantalla de esta guía (2026-11-01), en la lista de la izquierda de los ajustes estaba **Import**, y se veían, cada uno con su botón **Import**, Claude Code, Claude Cowork y Cursor, que se encontraron en este ordenador. Esta guía no pulsó el botón.

| En Claude Code | Al pasar a Codex |
|---|---|
| Archivo de reglas (`CLAUDE.md`, etc.) | `AGENTS.md` |
| Skills | Skills |
| Comandos con barra (`/nombre`) | Skills (`$nombre`) |
| `settings.json` | `config.toml` |

Fuente: documentación oficial de Codex (traducida solo en parte)[^import-map]

Aunque lo importes, los ajustes originales no se cambian ni se borran.[^import-keep] Eso sí, dice que después de importar revises sin falta **las restricciones de permisos de las skills, los hooks y los comandos que usan argumentos**.[^import-review]

Esta guía **no ejecutó la importación.** La importación no mira una sola carpeta, sino también los ajustes personales de mi ordenador.[^import-scope] Si quieres ver tú mismo qué se traslada, es mejor pasarlo a mano como en este capítulo.

La **memoria** (Memories) es la función que lleva el contexto de trabajos anteriores al siguiente trabajo.[^memory] La memoria de Codex de mi ordenador está desactivada por defecto.[^memory-off] La documentación oficial ve la memoria solo como una «ayuda para recordar» y dice que no dejes en la memoria las reglas que hay que cumplir sí o sí.[^memory-rules] Dice que **las reglas que hay que cumplir sí o sí se escriben en `AGENTS.md`**.[^memory-agents]

<Quiz id="ch503-import" />

## Pruébalo tú mismo

1. Con la petición de arriba, haz que pase `CLAUDE.md` a `AGENTS.md`. Añade a la vez una regla nueva.
2. Abre `AGENTS.md` y mira si las reglas originales están igual y si se ha añadido la regla nueva.
3. Abre una **conversación nueva** y pide que ordene unos apuntes de estudio sin hablar de las reglas.
4. Comprueba si en el resultado se cumplió la regla nueva.

**Proyecto continuo**: en el capítulo 4 aprenderás el menú de permisos, que fija qué hace Codex por sí mismo y qué pregunta, y cómo deshacer lo que ha cambiado.

## Resumen

- Codex lee `AGENTS.md`, y `CLAUDE.md`, si lo dejas tal cual, no lo lee.
- Si usas las dos herramientas, corrige los dos archivos a la vez.
- Si metes una regla nueva y pruebas sin decirla, sabrás si se lee el archivo de reglas (en esta práctica: antes 0 → después 1).
- Las reglas personales van en `~/.codex/AGENTS.md` y las de la carpeta, en el `AGENTS.md` de la carpeta. Tiene prioridad el más cercano.
- Importar traslada los ajustes de una vez, pero deja ver también los ajustes personales. Las reglas que hay que cumplir sí o sí, en `AGENTS.md` y no en la memoria.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Import | Importar | Función que traslada a Codex los ajustes de otro agente |
| Memories | Memoria | Función que recuerda el contexto de trabajos anteriores |
| `/init` | `/init` | Comando que crea el esqueleto de `AGENTS.md` |

<ChapterDone :chapter="503" />

Siguiente capítulo: [Capítulo 4. Permisos y deshacer](04-permissions-undo.md)

[^agents]: Documentación oficial de Codex, «Custom instructions with AGENTS.md». "Codex reads `AGENTS.md` files before doing any work." https://learn.chatgpt.com/docs/agent-configuration/agents-md (consultado el 2026-11-01)
[^ignored]: Documentación oficial de Codex, «Custom instructions with AGENTS.md». "Filenames not on this list are ignored for instruction discovery." https://learn.chatgpt.com/docs/agent-configuration/agents-md (consultado el 2026-11-01)
[^chain]: Documentación oficial de Codex, «Custom instructions with AGENTS.md». "In your Codex home directory (defaults to `~/.codex`, unless you set `CODEX_HOME`), Codex reads `AGENTS.override.md` if it exists." / "Starting at the project root (typically the Git root), Codex walks down to your current working directory." https://learn.chatgpt.com/docs/agent-configuration/agents-md (consultado el 2026-11-01)
[^override]: Documentación oficial de Codex, «Custom instructions with AGENTS.md». "Files closer to your current directory override earlier guidance because they appear later in the combined prompt." https://learn.chatgpt.com/docs/agent-configuration/agents-md (consultado el 2026-11-01)
[^limit]: Documentación oficial de Codex, «Custom instructions with AGENTS.md». "Codex skips empty files and stops adding files once the combined size reaches the limit defined by `project_doc_max_bytes` (32 KiB by default)." https://learn.chatgpt.com/docs/agent-configuration/agents-md (consultado el 2026-11-01)
[^restart]: Documentación oficial de Codex, «Custom instructions with AGENTS.md». "If instructions look stale, restart Codex in the target directory." https://learn.chatgpt.com/docs/agent-configuration/agents-md (consultado el 2026-11-01)
[^init]: Documentación oficial de Codex, «Slash commands». "Generate an `AGENTS.md` scaffold for the current project." https://learn.chatgpt.com/docs/reference/slash-commands (consultado el 2026-11-01)
[^import-from]: Documentación oficial de Codex, «Import from another agent». "The desktop app can import from **Claude Code**, **Claude Cowork**, or **Cursor**." https://learn.chatgpt.com/docs/import (consultado el 2026-11-01)
[^import-menu]: Documentación oficial de Codex, «Import from another agent». "If **Import** isn't available as a settings section yet, open **General** and find **Import other agent setup**." https://learn.chatgpt.com/docs/import (consultado el 2026-11-01)
[^import-map]: Documentación oficial de Codex, «Import from another agent». Las filas Instruction files, `settings.json`, Skills y Slash commands de la tabla «What ChatGPT can import». https://learn.chatgpt.com/docs/import (consultado el 2026-11-01)
[^import-scope]: Documentación oficial de Codex, «Import from another agent». "The import flow checks both your user-level setup and your existing projects." https://learn.chatgpt.com/docs/import (consultado el 2026-11-01)
[^import-keep]: Documentación oficial de Codex, «Import from another agent». "Importing doesn't change or delete your existing agent setup." https://learn.chatgpt.com/docs/import (consultado el 2026-11-01)
[^import-review]: Documentación oficial de Codex, «Import from another agent». "Tool restrictions or permissions in imported skills and agents." / "Hooks whose behavior may differ after import." / "Prompt templates or command-style prompts that depend on arguments, shell interpolation, or file-path placeholders." https://learn.chatgpt.com/docs/import (consultado el 2026-11-01)
[^memory]: Documentación oficial de Codex, «Memories». "Memories let ChatGPT and Codex carry useful context from earlier work into future work." https://learn.chatgpt.com/docs/customization/memories (consultado el 2026-11-01)
[^memory-off]: Documentación oficial de Codex, «Memories». "Local Codex memories are off by default." https://learn.chatgpt.com/docs/customization/memories (consultado el 2026-11-01)
[^memory-rules]: Documentación oficial de Codex, «Memories». "Treat memories as a helpful recall layer, not as the only source for rules that must always apply." https://learn.chatgpt.com/docs/customization/memories (consultado el 2026-11-01)
[^memory-agents]: Documentación oficial de Codex, «Memories». "Keep required team guidance in `AGENTS.md` or checked-in documentation." https://learn.chatgpt.com/docs/customization/memories (consultado el 2026-11-01)
