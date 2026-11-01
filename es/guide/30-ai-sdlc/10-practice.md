# Capítulo 10. Ejercicios prácticos: una vuelta completa de principio a fin

> **En una línea**: vas a recorrer de una vez, encadenado, el flujo de los capítulos 1 a 9: **planificar → crear → comprobar → revisar → desplegar → operar → revisión de seguridad**.
> El último ejercicio es crear desde cero con **tu propio problema**. Compruébalo tú mismo con la lista de comprobación.

Este capítulo es el de ejercicios, que reúne el contenido de los capítulos anteriores. Las bases están en las notas al pie de cada capítulo. **No hace falta que salga perfecto desde el principio.** Si te atascas, vuelve a ese capítulo y léelo otra vez.

## Ejercicio 1: una vuelta con el tablero de tareas

Si has seguido el «Pruébalo tú mismo» de los capítulos anteriores, este ejercicio ya lo has hecho. Si te lo saltaste, haz los pasos por orden.

| Orden | Qué hacer | Capítulo |
|---|---|---|
| 1 | Crear en GitHub el repositorio público `cafe-todo-board` y clonarlo en mi ordenador | 2 |
| 2 | Que Claude me entreviste y escribir SPEC.md | 3 |
| 3 | Recibir el plan en una sesión nueva en modo plan y crear la primera pantalla en una rama | 4 |
| 4 | Crear un mecanismo que compruebe los criterios de SPEC.md y recibir pruebas | 5 |
| 5 | Crear el PR y fusionarlo después de una revisión contrastada con SPEC.md | 6 |
| 6 | Comprobar con la lista de antes de publicar los valores secretos y los datos personales | 9 |
| 7 | Publicar con GitHub Pages y abrirlo en el móvil | 7 |
| 8 | Anotar una mejora como incidencia y dar otra vuelta con `fixes #número` | 8 |

Fuente: resumen de esta guía

<Quiz id="ch710-loop" />

## Ejercicio 2: desde cero con mi propio problema

Elige **una pequeña molestia** de tu vida o de tu trabajo y crea una página web siguiendo el mismo flujo. Por ejemplo, estas.

- Ver el calendario de este mes de mi club
- Una lista de los libros que he leído, con una opinión de una línea
- Una página con el menú y el horario de mi tienda

La primera petición empieza, como en el capítulo 3, con una entrevista.

```
Quiero crear una página web pequeña que resuelva <mi molestia>. Todavía no lo he pensado a fondo. Entrevístame hasta que se pueda escribir la especificación y, cuando esté todo, escríbela en SPEC.md. La voy a subir a un repositorio público, así que no pondré datos personales.
```

**Atención**: si es algo como el aviso de una tienda, para usarlo en un negocio de verdad, comprueba antes las prohibiciones de GitHub Pages que viste en el capítulo 7 (gestionar un negocio, una tienda en línea o un servicio comercial). Crearlo como práctica y usarlo para un negocio real son cosas distintas.

<Quiz id="ch710-own" />

## Lista de comprobación

Cuando termines los ejercicios, comprueba lo siguiente una por una. Si todo es «sí», has dado bien la vuelta.

**Planificar**
- ☐ Cada línea de SPEC.md se puede comprobar con un sí o un no.
- ☐ SPEC.md tiene al menos una línea de «lo que no se hará».

**Crear**
- ☐ Lo creé después de leer y aprobar el plan en modo plan.
- ☐ Lo creé en una rama, no en `main`, y cada commit es un solo cambio.

**Comprobar**
- ☐ Hay un mecanismo de comprobación y recibí pruebas: el comando ejecutado y su salida.
- ☐ Vi que la comprobación falla cuando se hace mal a propósito.

**Revisar**
- ☐ En la descripción del PR escribí qué cambié y por qué.
- ☐ Recibí, en una sesión nueva, una revisión contrastada con SPEC.md. Aunque no encontrara nada, lo repasé yo mismo.

**Despliegue y operación**
- ☐ La dirección pública se abre también en el móvil.
- ☐ La siguiente mejora está anotada como incidencia.

**Seguridad**
- ☐ En el repositorio y en la página no hay valores secretos, nombres reales ni datos de contacto.
- ☐ Hay un `.gitignore` y en él están los archivos que podrían contener valores secretos.

Fuente: resumen de esta guía

## Probarlo con otras herramientas

También en Codex y Antigravity, que usaste en la etapa 3, hay funciones equivalentes y se puede seguir el mismo flujo.

| Qué se hace | Codex | Antigravity |
|---|---|---|
| Primero el plan | `/plan` | Planning mode |
| Ver lo que ha cambiado | Ventana de revisión | Ventana Review |
| Archivo de reglas | `AGENTS.md` | `AGENTS.md`, `GEMINI.md` |

Fuente: [capítulo 4 de Codex](../21-codex/04-permissions-undo.md) y [capítulos 2 y 3 de Antigravity](../22-antigravity/02-first-task.md)

También es un buen ejercicio darles el mismo SPEC.md a las dos herramientas y comparar los resultados. Como viste en la etapa 3, aunque las instrucciones sean las mismas, lo que se les pasa por alto es distinto en cada herramienta.

## Resumen

- El ejercicio 1 da una vuelta con el tablero de tareas, desde el plan hasta la revisión de seguridad.
- El ejercicio 2 crea desde cero con mi pequeña molestia. Antes de usarlo para un negocio real, comprueba las prohibiciones de Pages.
- Si todas las casillas de la lista de comprobación son «sí», has dado bien la vuelta.

<ChapterDone :chapter="710" />

Siguiente capítulo: con esto termina la guía de AI-SDLC de la etapa 4. Con esto has terminado las etapas 1 a 4 de hello-ai. En el [índice de la etapa 4 · AI-SDLC](./) puedes elegir el capítulo que quieras repasar, o comprobar lo aprendido hasta ahora con el [examen de nivel de conocimientos de IA](../00-common/level-test.md).
