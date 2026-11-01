# Capítulo 11. Usarla como un experto — decidir, probar y acumular

> **En una línea**: para usarla bien no basta con conocer más botones. Hace falta la capacidad de **decidir qué encargar, probarlo antes de encargarlo y guardar lo que se repite**.
> Este capítulo reúne formas de trabajar que valen en cualquier servicio de IA. La ubicación de los menús y las funciones de cada servicio se tratan en la etapa 2, en el [capítulo 11 de ChatGPT](../11-chatgpt/11-expert.md) y el [capítulo 12 de Claude](../10-claude/12-expert.md).

El tema de este capítulo es cuándo y cómo sacar lo que aprendiste en los capítulos 1 a 10. De las funciones que verás en la etapa 2 (proyectos, skills, etc.) aquí solo aparece el nombre; el uso detallado está en el capítulo de cada servicio. Puedes leerlo antes de la etapa 2 o volver a él cuando termines la etapa 2.

## Qué hace distinto a un experto

En [«La misma herramienta, resultados distintos» del capítulo 3](03-why-learn.md#la-misma-herramienta-resultados-distintos) aprendiste que hasta la misma IA da resultados distintos según cómo se use. El curso de Anthropic describe así la capacidad de manejar bien la IA: no se queda en saber qué botón pulsar, sino que desarrolla también la **capacidad de decidir** cómo usar la IA en cada situación.[^academy-4d]

El curso divide esa decisión en cuatro capacidades. Por las iniciales en inglés se llama «4D».[^academy-4d]

- **Delegar — Delegation**: repartes qué trabajo haces tú y cuál le encargas a la IA.
- **Describir — Description**: dices con claridad el resultado y el método que quieres.
- **Discernir — Discernment**: examinas si el resultado recibido es correcto y utilizable.
- **Responsabilidad — Diligence**: la usas con responsabilidad, no escondes que usaste IA y te haces cargo del resultado.

Varias de ellas ya las has practicado. Los [«5 elementos de una buena instrucción» del capítulo 4](04-prompt-basics.md#los-5-elementos-de-un-buen-prompt) son «describir». Los [«Cuatro hábitos para comprobar» del capítulo 9](09-safety.md#cuatro-habitos-para-comprobar) corresponden a «discernir» y «responsabilidad».

También en el artículo en que OpenAI analiza cómo usa la gente ChatGPT en el trabajo se ve algo parecido. Cuando encargaban **tareas fuera de su especialidad**, las personas daban más ejemplos y contexto y pedían con más frecuencia que se comprobara el resultado.[^ways] Cuanto menos conoces una tarea, más conviene dar material junto con la petición y pedir que se compruebe.

Este capítulo trata sobre todo la que queda: **la capacidad de decidir qué encargar**.

<Quiz id="ch11-difference" />

## Elegir la primera tarea para practicar

No hace falta empezar por la tarea más grande e importante. Al principio elige tareas así. Es lo contrario de lo que el curso de OpenAI dice que hay que evitar (tareas demasiado amplias, que haces pocas veces, de alto riesgo o difíciles de comprobar), escrito de forma positiva por esta guía.[^academy-openai]

- La haces a menudo
- El resultado está claro
- Te resulta fácil comprobarla
- Si sale mal, el daño es pequeño

Deja para más adelante las tareas demasiado amplias, las que haces pocas veces, aquellas en las que un error sería grave y aquellas cuyo acierto es difícil de comprobar.[^academy-openai]

| Tareas aún demasiado pronto | Tareas buenas para empezar |
|---|---|
| Subir las ventas de la tienda | Cada lunes, hacer una tabla resumen con el registro de ventas de la semana pasada |
| Llevar bien un club | Al terminar cada reunión, escribir un mensaje de aviso con lo decidido y las tareas |

La tarea de la izquierda es tan amplia que ya te atascas al pensar qué pedir. La de la derecha vuelve cada semana y puedes ver enseguida si el resultado es correcto.

<Quiz id="ch11-pick" />

## Probar antes de encargar

Para decidir «¿puedo encargarle esto a la IA?», no te guíes por la intuición: pruébalo. El método es sencillo. Consiste en pedirle una tarea **cuya respuesta tú ya conoces**. El curso de Anthropic lo llama evaluación (Evals).[^academy-eval] El curso usa Claude como ejemplo, pero el mismo método se puede usar con otras IA (criterio de esta guía).

1. Elige una tarea que haces a menudo. Por ejemplo, un correo de aviso que escribiste el mes pasado o una tabla resumen que hiciste el trimestre pasado.
2. Reúne de 5 a 10 resultados que hiciste tú.
3. Dale el material que tenías entonces y encárgale la misma tarea a la IA.
4. Pon su resultado junto al tuyo y compáralos.

Por ejemplo, puedes enviar algo así. Todavía no le enseñes el correo que escribiste antes (sugerencia de esta guía). Así verás el resultado que la IA hace por su cuenta, sin imitarlo.

```
Con las notas de abajo, escribe el correo de aviso del mes que viene para los miembros del club de lectura del barrio.
Los destinatarios son 20 miembros de entre 40 y 60 años; usa un tono cortés pero no rígido.
[Pega aquí las notas]
```

Al comparar, pregúntate: ¿recoge todo lo importante? ¿Encajan el tono y la forma? ¿Qué falta?[^academy-eval]

Si ves que falta algo, añade una explicación y vuelve a pedirlo. Si al añadir la explicación sale bien, a partir de ahora basta con incluir siempre esa explicación. Si después de afinarlo varias veces no llega a tu resultado, habrás aprendido que es mejor no encargar esa tarea.[^academy-eval]

Aunque pase la prueba, sigue comprobando. La prueba solo aumenta la confianza; no elimina la responsabilidad.[^academy-eval]

<Quiz id="ch11-eval" />

## Mirar primero la forma del trabajo

No elijas primero el menú. Mira antes qué forma tiene la tarea que tienes delante. Entonces la función que usar se decide sola.[^academy-tabs]

Cada servicio llama distinto a sus funciones, pero la función que encaja con cada forma de trabajo es parecida.

| Si la tarea es así | ChatGPT | Claude |
|---|---|---|
| Preguntar, pulir, pensar juntos | Conversación normal | Conversación normal |
| Un dato sencillo, algo que pasó hoy | [Búsqueda web](../11-chatgpt/06-search.md#busqueda-web-—-hacer-que-chatgpt-mire-en-internet) | [Búsqueda web](../10-claude/06-search.md#cuando-usar-cada-cosa) |
| Reunir mucho material y sacar un informe | [Investigación en profundidad](../11-chatgpt/06-search.md#investigacion-profunda-—-encargar-un-informe) | [Investigación](../10-claude/06-search.md#cuando-usar-cada-cosa) (de pago) |
| Seguir con una misma tarea de forma continuada | [Proyectos](../11-chatgpt/07-projects-plugins.md#proyectos-conversaciones-archivos-e-instrucciones-en-una-carpeta) | [Proyectos](../10-claude/07-projects-tools.md#proyectos-materiales-e-instrucciones-en-un-solo-sitio) |
| Recibir un archivo terminado tras varios pasos | [Work](../11-chatgpt/07-projects-plugins.md#la-diferencia-entre-chat-y-work) (de pago) | [Cowork](../10-claude/08-cowork.md#que-es-cowork-—-no-le-hablas-le-encargas-un-trabajo) (de pago) |
| Repetir en momentos fijos | [Tareas programadas](../11-chatgpt/11-expert.md#que-se-haga-solo-a-la-hora-fijada-tareas-programadas) | [Tareas programadas](../10-claude/08-cowork.md#por-si-solo-en-momentos-fijos-—-tareas-programadas) (de pago) |

Los nombres de funciones y los planes de la tabla son los que se comprobaron en el capítulo de cada servicio. Pueden cambiar, así que mira ese capítulo antes de usarlos.

En la mayoría de los casos basta con la fila de arriba: una sola instrucción clara.[^academy-openai] Las funciones de las filas de abajo sácalas cuando la conversación normal se quede corta.

<Quiz id="ch11-tools" />

## Guardar lo que se repite

Cuando la usas un tiempo, acabas repitiendo lo mismo. Si lo que repites lo dejas escrito una vez, la IA ya lo sabe cuando empiezas la próxima vez.

Hay cuatro lugares donde guardarlo. No hace falta usarlos todos desde el principio. Sigue este orden y añade uno cuando lo necesites.[^academy-layers]

1. **Le pides lo mismo en todas las conversaciones** → lo escribes en las instrucciones. En ChatGPT son las [«Instrucciones personalizadas»](../11-chatgpt/05-memory.md#instrucciones-personalizadas-—-lo-que-quieres-que-se-cumpla-siempre) y en Claude, las [«Instrucciones»](../10-claude/05-memory.md#instrucciones-reglas-para-todas-las-conversaciones).
2. **Sigues con una misma tarea de forma continuada** → agrupas esa tarea en un proyecto.
3. **Explicas el mismo procedimiento cada vez** → lo dejas como una plantilla reutilizable. Empieza metiendo la plantilla del [capítulo 8, «4. Convertirlo en una plantilla reutilizable»](08-meta-prompting.md#_4-convertirlo-en-una-plantilla-para-reutilizar) en las instrucciones del proyecto. Si tu servicio y tu plan lo permiten, también puedes convertirla en una skill.
4. **Quieres compartir con otros una plantilla bien pulida** → compartes la plantilla como documento o la empaquetas con la función de compartir que ofrezca el servicio (plugins, etc.). Estas funciones pueden no existir según el servicio y el plan.

Si sigues el orden, cada vez tendrás un poco menos que explicar desde cero.

**También hay tareas para las que todavía no toca hacer una plantilla.** Es pronto si la tarea cambia cada semana, si la forma del resultado aún no está decidida o si requiere un juicio humano. En ese caso, sigue haciéndola unas veces más en la conversación y ve puliéndola.[^academy-openai] Con lo que se ejecuta solo en momentos fijos pasa igual. Primero hazlo a mano unas cuantas veces y programa la tarea cuando el resultado sea fiable.[^academy-openai]

### Probar y corregir las plantillas que hagas

Una plantilla hecha por ti funciona bien cuando la usas tú, porque sabes qué hay que poner. Pero si pides algo un poco distinto o das un material un poco diferente, puede tambalearse.[^academy-skilltest]

Por eso haz la misma petición dos veces. Una vez con la plantilla y otra sin ella. Pon las dos respuestas una al lado de la otra y pregúntate: ¿de verdad es mejor la que usó la plantilla? Si no, ¿qué faltó?[^academy-skilltest]

Di con concreción qué hay que corregir.[^academy-skilltest]

- Ejemplo flojo: «Está raro».
- Ejemplo mejor: «El tono es demasiado rígido». «Falta el resumen del principio».

El ejemplo mejor señala qué corregir, así que la IA puede ponerse manos a la obra enseguida. Y corrige **solo una cosa cada vez**. Así sabrás qué fue lo que funcionó.[^academy-skilltest]

No hace falta que sea perfecta desde el principio. El curso dice que la mayoría de las skills quedan listas con una o dos rondas de ajuste.[^academy-skilltest]

<Quiz id="ch11-layers" />

## Encargar tablas y números

Con el análisis de números, lo que más preocupa es si puedes fiarte del resultado. En ese caso, aplica a los números el método de la [sección anterior, «Probar antes de encargar»](#probar-antes-de-encargar).

Este es el ejemplo del curso de Anthropic.[^academy-data] Rio, responsable de una organización que ayuda a veteranos de guerra, analiza cada trimestre la asistencia y los resultados de empleo.

1. Rio volvió a encargar a la IA los **datos del trimestre pasado, cuyo análisis ya había terminado**.
2. Cada vez que llegaba una respuesta, la contrastaba con su propio resultado y anotaba lo que faltaba.
3. La IA encontró bien la relación entre asistencia y empleo. Pero pasó por alto un punto importante que se veía en el programa que combina ayuda para la vivienda y colocación laboral.
4. Cuando Rio añadió «mira también por separado el tipo de programa», la IA también lo detectó.
5. Rio decidió incluir esa línea sin falta a partir del trimestre siguiente.

Pruébalo así.

```
La tabla adjunta son los datos originales de ventas del trimestre pasado. Ya tengo un análisis hecho y quiero ver si llegas a la misma conclusión.
Calcula la variación mensual y las diferencias entre sucursales, y muéstrame cómo calculaste cada paso.
```

No pasa nada si los números no te resultan familiares. Pide fórmulas de Excel o que ordene una tabla desordenada. Si aparece un paso que no conoces, sigue pidiendo que te lo expliquen. Solo si puedes seguir el proceso podrás comprobar el resultado.[^academy-data]

Aunque pase la prueba de contraste, la responsabilidad sigue siendo tuya. Comprueba que el resultado tiene sentido. Y no ocultes que recibiste ayuda de la IA.[^academy-data] Los cálculos importantes vuelve a comprobarlos con una calculadora o con Excel.

Cómo subir el archivo y cómo recibir los gráficos varía según el servicio. Mira «Encargar tablas y números» en el [capítulo 11 de ChatGPT](../11-chatgpt/11-expert.md#encargar-tablas-y-cifras-analisis-de-datos) y en el [capítulo 12 de Claude](../10-claude/12-expert.md#encargarle-tablas-y-numeros).

<Quiz id="ch11-data" />

## Usarla para aprender

Cuando aprendas algo, en lugar de recibir la respuesta enseguida, pide que te guíe para que pienses tú. Si buscas la respuesta por tu cuenta, aprendes a la vez el camino para resolverlo.

```
Quiero aprender BUSCARV (VLOOKUP) de Excel. No me des la respuesta directamente; hazme preguntas de una en una para que lo piense yo.
```

::: details La respuesta que recibes será más o menos así (ejemplo — pulsa para desplegar)
Es un ejemplo hecho por esta guía. La respuesta real varía según el servicio y el momento.

> Muy bien, pensemos juntos. Primera pregunta: en una tabla tienes el número y el precio de cada producto, y en otra solo el número de producto. Si fueras a rellenar los precios a mano, ¿cómo lo harías?

Si respondo «miraría el número y lo buscaría en la primera tabla para anotarlo», sigue así.

> Exacto. BUSCARV hace justo ese trabajo por ti. Entonces, siguiente pregunta: para que Excel lo busque por ti, ¿qué tienes que decirle?

**Comprueba si la recibiste bien**: ¿No te dio entera la fórmula desde el principio? ¿Hay una sola pregunta cada vez? ¿Cada pregunta siguiente se adapta a mi respuesta?

:::

Hacer que la IA te haga preguntas sigue el mismo principio que el [capítulo 5, «4. Hacer que repregunte»](05-prompt-patterns.md#_4-hacer-que-te-pregunte-—-flipped-interaction). La instrucción para recibir una explicación a tu nivel está en la [colección de instrucciones, «Estudiar y recibir explicaciones»](prompt-library.md#estudiar-y-recibir-explicaciones). ChatGPT también tiene un modo de estudio que se activa aparte para enseñar de esta manera ([capítulo 11 de ChatGPT](../11-chatgpt/11-expert.md#usarlo-para-aprender-modo-de-estudio)).

<Quiz id="ch11-learn" />

## Comprobar según el peso del trabajo

El hábito de comprobar antes de usar el resultado lo aprendiste en los [«Cuatro hábitos para comprobar» del capítulo 9](09-safety.md#cuatro-habitos-para-comprobar). Aquí veremos cuánto detalle poner y en qué etapa mirar.

**No hace falta revisar todas las respuestas con el mismo detalle.** Comprueba según el peso del trabajo.[^academy-openai] La última fila de la tabla es el criterio del curso, y las tres primeras son ejemplos cotidianos que ha elegido esta guía.

| Si el trabajo es así | Se comprueba así |
|---|---|
| Sacar ideas para una reunión | Lees por encima y eliges |
| Borrador de un anuncio o aviso | Miras los hechos, el tono y que no falte nada |
| Resumen de un artículo o un material | Lo contrastas con el original |
| Algo que afecta a la salud, el dinero, el empleo o los derechos legales | Lo revisa a fondo un experto o pasa por un procedimiento establecido |

**No mires solo una vez al final, mira en cada etapa.** Si el trabajo avanza en varias etapas, para un momento antes de pasar a la siguiente.[^academy-openai] Y hazte estas tres preguntas. De la estructura de revisión CLEAR del curso, esta guía eligió tres.[^academy-openai]

- **Hechos**: ¿son correctos los números, los nombres, las fechas y las fuentes?
- **Lógica**: ¿tiene sentido la conexión «como…, por tanto…»?
- **Tono**: ¿es adecuado para quien lo va a leer?

Si miras en cada etapa, te das cuenta pronto cuando la IA ha entendido mal. No tienes que corregirlo todo desde el principio una vez terminado.[^academy-openai]

Si la lógica se ve rara, señala esa parte y pide que te la explique.

```
No entiendo por qué sale la conclusión del segundo párrafo. Explícame con qué argumentos y supuestos se llega a ella y, si hay algún punto débil, corrígelo.
```

Lo que hay que mirar aparte en cada tipo de resultado (el método de cálculo en un análisis de datos, las fuentes en un informe de investigación, etc.) está reunido en una tabla en [«Comprobar antes de creer», en el capítulo 11 de ChatGPT](../11-chatgpt/11-expert.md#comprobar-antes-de-creer).

<Quiz id="ch11-verify" />

## Practica tú mismo

Como en el [capítulo 10](10-practice.md), hazlo con material inventado y no con documentos reales de la empresa.

1. Entre las tareas que haces ahora, apunta una que cumpla las cuatro condiciones de «Elegir la primera tarea para practicar» (la haces a menudo, el resultado está claro, es fácil de comprobar y el daño por un error es pequeño).
2. Inventa y anota un correo de aviso corto como si lo hubieras escrito el mes pasado, con sus notas de entonces. También puedes usar los archivos de ejemplo memo-last-month.txt y last-notice.txt del [proyecto continuo](practice-kit.md). Dale a la IA solo las notas y haz que escriba el mismo correo; luego compáralo con el tuyo y anota: «¿Recoge todo? ¿Encaja el tono? ¿Qué falta?».
3. Añade a la explicación un punto que faltaba en el paso 2 y vuelve a pedirlo. Si sale bien, guarda esa línea en las instrucciones o en las instrucciones del proyecto.
4. Inventa una tabla de unas 10 filas con fecha, artículo e importe y calcula tú primero a mano el total por artículo. Luego dale la misma tabla a la IA, pide que muestre los pasos del cálculo y contrasta los dos resultados.
5. Con la instrucción de BUSCARV (VLOOKUP) de este capítulo, aprende algo que quieras aprender ahora respondiendo preguntas.

**Proyecto continuo** ([preparar un club de lectura](practice-kit.md)): si hiciste el paso 2 con los archivos de ejemplo, el proyecto empieza aquí. Al final de cada capítulo de la etapa 2 está el paso siguiente. Si sigues este proyecto, al terminar la etapa 2 tendrás el paquete de avisos de la reunión de noviembre.

## Resumen

- Para usarla bien hace falta capacidad de decisión. El curso de Anthropic divide esa decisión en delegar, describir, discernir y responsabilidad (4D).
- Al principio practica con tareas que haces a menudo, de resultado claro, fáciles de comprobar y con poco daño si fallan.
- Para decidir si encargar algo o no, no uses la intuición: pruébalo con una tarea cuya respuesta ya conoces. Aunque pase la prueba, la comprobación y la responsabilidad siguen siendo tuyas.
- Mira la forma del trabajo antes que el menú. En la mayoría de los casos basta con una instrucción clara.
- Lo que se repite se acumula en este orden, uno por uno cuando haga falta: instrucciones → proyecto → plantilla (skill) → paquete. Con una plantilla hecha, pide dos veces (con ella y sin ella), compara y corrige solo una cosa cada vez.
- El análisis de números se contrasta primero con datos pasados y se pide que muestre el proceso de cálculo.
- Se comprueba según el peso del trabajo y en cada etapa, no una sola vez al final.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| AI Fluency | Dominio de la IA | La capacidad de trabajar bien junto con la IA |
| Delegation | Delegar | Repartir qué hago yo y qué le encargo a la IA |
| Description | Describir | Decir con claridad el resultado y el método que quieres |
| Discernment | Discernir | Examinar si el resultado recibido es correcto y utilizable |
| Diligence | Responsabilidad | Usarla con responsabilidad, indicar que usaste IA y responder del resultado |
| Evals | Evaluaciones | Método para probar la IA con una tarea cuya respuesta ya conoces |

<ChapterDone :chapter="11" />

Siguiente capítulo: has terminado la etapa 1. Comprueba tu nivel de comprensión de la IA con el [examen de comprobación de comprensión](certificate.md), o pasa a las guías de la etapa 2, [ChatGPT](../11-chatgpt/01-getting-started.md) y [Claude](../10-claude/01-getting-started.md).

[^academy-4d]: Claude Academy, curso «Claude 101», lección «Getting better results». "AI Fluency is the ability to collaborate effectively with AI tools—not just knowing which buttons to click, but developing the judgment to use AI well across different situations." / "Deciding on what work should be done by humans, what work should be done by AI, and how to distribute tasks between them." / "Effectively communicating with AI systems." / "Thoughtfully and critically evaluating AI outputs, processes, behaviors and interactions." / "Using AI responsibly and ethically." / "maintaining transparency, and taking accountability for AI-assisted work." https://academy.claude.com/courses/claude-101/getting-better-results (consultado el 2026-10-26)
[^ways]: OpenAI, «How workers are unlocking new ways of working». Análisis según el cual, en tareas ajenas a su profesión, se añaden más ejemplos y contexto y se pide más que se compruebe. https://openai.com/index/unlocking-new-ways-of-working (consultado el 2026-10-24)
[^academy-eval]: Claude Academy, curso «Claude 101», lección «Getting better results». "Evals (short for evaluations) are a way to develop intuition for assessing Claude's outputs on the tasks that matter to you." / "Collect 5-10 examples of a task you do regularly—emails you've written, reports you've created, analyses you've done." / "Include the context you'd naturally have when doing this work." / "Does Claude capture the key information?" / "Is the tone and style appropriate?" / "What's missing or could be improved?" / "But if you can't get there after several refinements, you've learned that this isn't a task you should delegate." / "Just remember, validation builds confidence, but it doesn't eliminate responsibility." https://academy.claude.com/courses/claude-101/getting-better-results (consultado el 2026-10-26)
[^academy-tabs]: Claude Academy, curso «Claude 101», lección «How you'll work with Claude on your desktop». "You won't pick a tab first — you'll notice what kind of work is in front of you, and the tab follows." https://academy.claude.com/courses/claude-101/claude-desktop-app-chat-cowork-code (consultado el 2026-10-26)
[^academy-layers]: Claude Academy, curso «Introduction to Claude Cowork», lección «Get better results faster». "You're not going to start with all four of these on Day 1." / "you'll realize what global instructions make sense to apply to every conversation." / "You'll start to see your recurring workstreams and what makes sense to have as a project." / "If you find you're explaining the same workflows to Claude multiple times, those will be the right opportunities for your first skills." / "plugins will come in as you have something worth sharing." https://academy.claude.com/courses/introduction-to-claude-cowork/research-analysis-at-scale (consultado el 2026-10-26)
[^academy-skilltest]: Claude Academy, curso «Introduction to Claude Cowork», lección «Validating skills for plugins». "When you use a skill you built, you know how to work around any issues or failures." / "They might phrase the request a little differently, hand it slightly different inputs, or hit an edge case" / "Is the skill version the one I'd use?" / ""The tone is too formal" or "it skipped the executive summary" gives Claude something to act on; "this isn't quite right" doesn't." / "Change one thing at a time." / "Most skills are ready after one or two rounds." La lección explica cómo comparar la respuesta con la skill y sin ella. Este capítulo amplía el mismo método a plantillas como las instrucciones del proyecto (interpretación de esta guía). https://academy.claude.com/courses/introduction-to-claude-cowork/validating-skills-for-plugins (consultado el 2026-10-26)
[^academy-data]: Claude Academy, curso «Claude 101», lección «Getting better results», vídeo (la lección indica que originalmente es un vídeo del curso «AI Fluency for nonprofits»). "Meet Rio, the program director at Valley Veterans Services." / "AI correctly identified the correlation between program attendance and job placement, but it missed a critical insight around the combined housing assistance and job placement program." / "This time AI catches its mistake." / "they can help with things like writing Excel formulas, reformatting messy data, and more." / "just keep asking for clarifications and explanations so that you can follow the process and understand the final output." / "You're still accountable for checking that these results make sense and being transparent about AI's role in your analysis process." https://academy.claude.com/courses/claude-101/getting-better-results (consultado el 2026-10-26)
[^academy-openai]: Texto de los cursos de OpenAI Academy (requiere iniciar sesión y registrarse). Applied AI Foundations: "It's the one that is useful, realistic for you, low-risk while you are learning, and easy to practice and iterate on as you go." / "Avoid workflows that are:" "Too broad" / "Too infrequent" / "Too high stakes" / "Difficult to review or verify" / "If ChatGPT misunderstands something, you can catch it early instead of fixing the whole output later." / "It should happen throughout the workflow, not only at the end." / "Do the “because” and “therefore” statements make sense? If the reasoning does not hold, ask ChatGPT to explain its logic". AI Foundations: "Reviewing outputs with the CLEAR structure (Complete, Logical, Evidence, Audience, Relevant)" / "Review intensity depends on the task" / "Drafting something that affects a person’s rights, job, health, finances, or access to services" → "Strong human review or approved process". Agents and Workflows: "Often, a clear prompt is enough." / "Start manually. Run the workflow yourself a few times, refine the prompt, confirm the sources, and only then schedule it." / "A skill probably isn't the right fit yet if: The workflow changes every week. ... The output format is still being negotiated. The task requires judgment that should stay with a person" (consultado el 2026-10-26)
