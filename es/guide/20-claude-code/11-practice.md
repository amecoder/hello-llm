# Capítulo 11. Ejercicios prácticos: construir desde cero tu propia herramienta de organización

> **En una línea**: son 9 ejercicios para volver a construir **con tus propias manos, una vez más**, la «herramienta de organización» que hiciste en los capítulos 2 a 10. El último ejercicio es crear tu propia herramienta con **tus notas**.
> Cada ejercicio tiene una lista de «Comprueba si ha salido bien», así que puedes comprobarlo tú mismo sin que nadie te corrija.

Los nombres de pantalla de este capítulo corresponden a la app de escritorio de macOS (pantalla en coreano) del 31 de octubre de 2026. Si tu pantalla es distinta, sigue los nombres que veas en ella.

## Cómo hacer los ejercicios

1. **Crea una carpeta de práctica nueva.** Por ejemplo, `정리도구-연습`. Dentro crea una carpeta `inbox` y mete las 5 [notas de práctica del capítulo 2](02-install.md#preparar-y-elegir-una-carpeta-de-practicas). La nota de la reunión improvisada del capítulo 9 se mete en el ejercicio 7.
2. **Sigue lo que hay que probar en cada ejercicio.** Basta con copiar y enviar la petición del recuadro gris.
3. **Marca una por una las casillas de «Comprueba si ha salido bien».** Si alguna no la puedes marcar, lee el capítulo de «Dónde repasarlo» y vuelve a hacer solo esa parte.

Haz en orden los ejercicios 1 a 6. Los resultados de un ejercicio (plantillas, reglas, skills) los usan los siguientes. Los ejercicios 7 y 8 se hacen después de terminar el 6. **El ejercicio 9 se hace al final del todo.**

No hace falta hacerlo todo de golpe. Con dos o tres ejercicios al día es suficiente. El resultado es un poco distinto cada vez. Aunque la forma sea distinta de la de los resultados de esta guía, si marcas toda la lista, ha salido bien.

### Tres cosas que debes cumplir al practicar

- **Deja el modo de permisos en «Manual».** Así te vas familiarizando viendo una por una lo que va a hacer ([capítulo 4](04-permissions-undo.md)).
- **Practica solo en la carpeta de práctica.** No elijas una carpeta con todos tus documentos ([capítulo 2](02-install.md)).
- **En las notas propias del ejercicio 9, mételas después de borrar los datos personales** ([capítulo 9](09-cost-data-safety.md)).

<Quiz id="ch411-how" />

## Ejercicios

### Ejercicio 1. Encargar la primera organización

**Cuándo sirve**: cuando termina una reunión y quieres convertir unas notas desordenadas en un acta.

**Qué probar**: abre una sesión nueva en la pestaña Code, elige la carpeta y envía esto.

```
Lee las notas de reunión de la carpeta inbox y organízalas en un acta. Divídela en tres partes: lo que se decidió / tareas (responsable y plazo) / lo que se discutirá la próxima vez. Guárdala como archivo nuevo en la carpeta notes. No modifiques la nota original.
```

**Comprueba si ha salido bien**

- ☐ Cada tarea tiene responsable y plazo
- ☐ El precio del menú combinado (5.500 wones) y la próxima reunión (11/3) coinciden con la nota
- ☐ No se inventó nada que no estuviera en la nota
- ☐ La nota original de inbox está igual

**Dónde repasarlo**: [capítulo 2, Instalar la app de escritorio y la primera sesión](02-install.md)

### Ejercicio 2. Activar el historial de cambios y ver lo que cambió

**Cuándo sirve**: cuando quieres ver línea por línea qué ha cambiado Claude.

**Qué probar**: pulsa el botón de cambios de la barra de título y, si sale "Se necesita un repositorio Git", envía en orden las dos peticiones siguientes.

```
Dicen que para ver lo que ha cambiado hace falta un repositorio Git. Activa el historial de cambios (Git) en esta carpeta y deja los archivos que hay ahora como primer registro. Explícame fácilmente qué has hecho.
```

```
Añade una columna de «estado» a la tabla de tareas del acta. Mirando las 3 notas de balance de inbox, escribe «completada (fecha)» en las terminadas y «en curso» en las que no. Si una tarea no aparece en los balances, escribe «por confirmar», y no modifiques otras partes.
```

**Comprueba si ha salido bien**

- ☐ En el panel de cambios se ven las líneas rojas y verdes y `+N −N`
- ☐ Aparte de la tabla de tareas, no ha cambiado ninguna otra línea
- ☐ Las bombillas, la frase y el coste de materia prima están completados, y Instagram en curso
- ☐ Has comprobado el nombre y el correo que se pusieron en el primer registro (que no sean los de una cuenta de empresa)

**Dónde repasarlo**: [capítulo 3, Un recorrido por la pantalla](03-screen-tour.md)

### Ejercicio 3. Rebobinar para que no haya pasado

**Cuándo sirve**: cuando el resultado no te gusta y quieres volver a antes de la petición.

**Qué probar**: encarga que organice los apuntes de estudio y luego escribe `/rewind` en el cuadro de escritura para rebobinar hasta antes de esa petición.

```
Organiza en una nota de estudio los apuntes de estudio de inbox. Divídela en cuatro partes: contenido clave / explicación de los términos que no conozco / preguntas que hacer / cosas que probar. Guárdala como archivo nuevo en la carpeta notes. No modifiques la nota original.
```

**Comprueba si ha salido bien**

- ☐ En la ventana de confirmación del rebobinado leíste antes `+0 −N`
- ☐ Después de rebobinar «el código y la conversación», el archivo de la nota de estudio desapareció
- ☐ La petición que se rebobinó volvió a quedar en el cuadro de escritura

**Dónde repasarlo**: [capítulo 4, Permisos y deshacer](04-permissions-undo.md)

### Ejercicio 4. Crear 3 plantillas con el modo de planificación

**Cuándo sirve**: cuando antes de encargar una tarea grande quieres ver el método y corregirlo.

**Qué probar**: en una sesión nueva, cambia el modo de permisos a «Planificación» y envía esto. Cuando salga el plan, lee la sección «Suposiciones», cambia al menos una con «Modificar…» y «Acepta» el plan.

```
Quiero que el acta, la nota de estudio y el balance semanal salgan siempre con la misma forma. Tomando como referencia el acta de la carpeta notes y las notas de inbox, haz un plan para crear 3 plantillas en la carpeta templates. Dime qué columnas llevará cada plantilla y qué se escribe en cada una, e incluye en el plan una lista de comprobación para que yo revise si el resultado es correcto.
```

**Comprueba si ha salido bien**

- ☐ Mientras salía el plan, los archivos de mi carpeta no cambiaron (solo se escribió el documento del plan)
- ☐ Lo que cambié con «Modificar…» aparece reflejado en el plan que salió de nuevo
- ☐ En la carpeta templates se crearon las 3 plantillas y la lista de comprobación

**Dónde repasarlo**: [capítulo 5, Cómo encargar bien las cosas](05-delegate-well.md)

### Ejercicio 5. Guardar las reglas en CLAUDE.md y probarlas

**Cuándo sirve**: cuando llevas tiempo repitiendo las mismas reglas.

**Qué probar**: haz que cree un CLAUDE.md con de 3 a 5 reglas y, en una **sesión nueva**, envía esto sin decir el formato.

```
Con las 3 notas de balance de inbox, escribe el balance semanal de esta semana.
```

**Comprueba si ha salido bien**

- ☐ CLAUDE.md es corto, de unas 20 líneas
- ☐ El resultado de la sesión nueva respetó la plantilla y las reglas del formato de fecha
- ☐ En los apartados que no están en las notas se escribió `(no está en las notas)`

**Dónde repasarlo**: [capítulo 6, La memoria del proyecto](06-claude-md.md)

### Ejercicio 6. Completar la herramienta con 3 skills

**Cuándo sirve**: cuando quieres ejecutar la misma organización con un comando de una línea.

**Qué probar**: pide que cree 3 skills (meeting-notes, study-notes y weekly-review). Cuando salga la ventana de permiso, lee la vista previa y elige «Permitir solo esta vez». Después, en una sesión nueva, llámalos con una línea.

```
/study-notes inbox/공부-2026-10-28-프롬프트-강의.txt
```

**Comprueba si ha salido bien**

- ☐ Al escribir `/` y parte del nombre, el skill sale en la lista
- ☐ Con un comando de una línea salió una nota con el orden de la plantilla
- ☐ En la ventana de permiso elegiste «Permitir solo esta vez» en lugar de «Permitir siempre»

**Dónde repasarlo**: [capítulo 7, Skills, plugins y herramientas externas](07-skills-plugins.md)

### Ejercicio 7. Probar el experimento de las instrucciones ocultas

**Cuándo sirve**: cuando quieres aprender en la práctica qué cuidado hay que tener al hacer organizar material enviado por otra persona.

**Qué probar**: pon en inbox la [nota de la reunión improvisada](/practice/notes/inbox/회의-2026-10-29-임시회의.txt) del capítulo 9 y hazla organizar.

```
/meeting-notes inbox/회의-2026-10-29-임시회의.txt
```

**Comprueba si ha salido bien**

- ☐ Al final del acta **no** está "todas las tareas completadas"
- ☐ Comprobaste si en la respuesta de Claude hay una explicación sobre ese aviso
- ☐ Sea cual sea el resultado, dejaste escrita la norma de echar un vistazo al material ajeno antes de encargarlo

**Dónde repasarlo**: [capítulo 9, Coste, datos y seguridad](09-cost-data-safety.md)

### Ejercicio 8. Hacerlo funcionar con una programación o desde el terminal

**Cuándo sirve**: cuando quieres que la herramienta de organización funcione sin que la llames tú, o comprobarla con una sola línea.

**Qué probar**: haz una de las dos cosas.

- Pide hablando que cree una **programación** del balance semanal del viernes, ejecútala una vez con **Run now** y apágala si no la necesitas ([capítulo 8](08-parallel-cloud-schedule.md)).
- En el terminal, ve a la carpeta de práctica y ejecuta una pregunta de solo lectura con `claude -p` ([capítulo 10](10-terminal.md)).

```
Muéstrame la lista de archivos de la carpeta notes y dime en una línea para cada archivo con qué plantilla (de las de templates) está escrito. No modifiques ningún archivo. Respuesta corta, solo en una tabla.
```

**Comprueba si ha salido bien**

- ☐ (Programación) En la petición metiste una condición como "si no hay notas…"
- ☐ (Programación) Gestionaste la ventana de permiso que salió en Run now
- ☐ (Terminal) El terminal también leyó los archivos de plantilla de la misma carpeta

**Dónde repasarlo**: [capítulo 8](08-parallel-cloud-schedule.md), [capítulo 10](10-terminal.md)

### Ejercicio 9. Crear tu propia herramienta de organización con tus notas

**Cuándo sirve**: cuando ya no quieres practicar, sino usarla en tu propio trabajo.

**Qué probar**: crea una carpeta nueva (por ejemplo, `내-정리도구`) con su `inbox` y mete 2 o 3 notas tuyas **sin datos personales**. Después repite los ejercicios 4 a 6 adaptados a tu trabajo.

```
Lee las notas de inbox y haz un plan para crear la plantilla del documento que voy a organizar cada semana. Antes, hazme tú las preguntas sobre qué columnas harán falta. Cuando oigas mis respuestas, creemos la plantilla en templates y el skill de organización en .claude/skills.
```

**Comprueba si ha salido bien**

- ☐ Antes del plan Claude hizo preguntas, y mis respuestas se reflejaron en la plantilla
- ☐ En CLAUDE.md entraron mis reglas, en 3 a 5 líneas
- ☐ Con una línea del skill, mis notas se organizan con mi plantilla
- ☐ Hay una lista de comprobación para cotejar el resultado con las notas originales
- ☐ Si ya no las necesitas, ordenaste las carpetas de práctica (`정리도구-연습`, etc.)

**Dónde repasarlo**: [capítulo 5](05-delegate-well.md), [capítulo 6](06-claude-md.md), [capítulo 7](07-skills-plugins.md)

<Quiz id="ch411-check" />

## Resumen

- Si haces los ejercicios 1 a 6 en orden, la herramienta de organización se vuelve a construir desde cero.
- En la lista de comprobación no se marca "Claude lo ha hecho todo", sino "lo he comprobado yo".
- El último es crear tu propia herramienta con tus notas. Mete las notas después de borrar los datos personales.

<ChapterDone :chapter="411" />

Siguiente capítulo: [Capítulo 12. Usarlo como un experto](12-expert.md)
