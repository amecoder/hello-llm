# Capítulo 1. Qué es un LLM

> **En una línea**: un LLM es un programa que ha leído una cantidad enorme de texto y ha practicado adivinar «la palabra que viene después».
> Por eso habla de forma muy natural, pero no siempre dice la verdad.

## El nombre «LLM»

LLM son las siglas de **Large Language Model**, en español **modelo de lenguaje de gran tamaño**.

- **Large (gran tamaño)**: significa que se entrenó con más texto del que una persona podría leer en toda su vida: páginas de internet, libros, artículos científicos, etc. Qué es «entrenar» lo verás justo debajo.
- **Language (lenguaje)**: significa que su oficio es trabajar con «texto». Aunque los modelos actuales también manejan documentos, fotos, sonidos y vídeos (más abajo, «No solo lee texto»).
- **Model (modelo)**: significa que es un programa creado mediante el entrenamiento.

ChatGPT, Claude y Gemini son **servicios** que envuelven un LLM para que sea cómodo conversar con él.
Piensa en un motor (el LLM) al que se le ha puesto la carrocería de un coche (la pantalla de chat).

Filtrar el correo basura o recomendar vídeos también es IA. Pero esas IA eligen y clasifican cosas que ya existen. Un LLM **crea** texto nuevo.
Por eso a una IA como el LLM se la llama **IA generativa** (generative AI).[^academy-genai]

<Quiz id="ch1-name" />

## ¿Qué significa «entrenar»?

En las explicaciones sobre los LLM se oye mucho que «se entrenó». Es fácil imaginar a una persona leyendo y memorizando libros, pero es algo distinto.
**El entrenamiento de un LLM consiste en resolver muchísimas veces el problema de «adivinar la palabra siguiente» y, cada vez que falla, retocar un poco los números que hay dentro del modelo.**

### Resuelve huecos en blanco una y otra vez

Cada ejercicio funciona así.

1. **Plantear el problema**: se toma una frase del texto reunido y se tapa la parte final. Por ejemplo: «Para hacer un guiso de kimchi, primero se ___ la carne de cerdo».
2. **Intentar acertar**: el modelo da candidatos para la palabra siguiente, con su probabilidad. Por ejemplo: «lava» 40 %, «saltea» 30 %.
3. **Corregir**: se compara con la palabra que había de verdad en el texto original. En el original ponía «saltea».
4. **Retocar**: se cambian muy ligeramente los números del modelo para que la próxima vez «saltea» salga con una probabilidad algo mayor.

![Una vuelta de entrenamiento: ① se tapa el final del texto → ② el modelo da candidatos para la palabra siguiente con su probabilidad → ③ se compara con la palabra siguiente real del texto original → ④ se retocan un poco los números del modelo para que suba la probabilidad de la respuesta correcta. Esta vuelta se repite billones de veces](../../../guide/00-common/assets/ch1-training-loop.svg)

Se da esta vuelta billones de veces. Como la respuesta correcta ya está dentro del texto original, nadie tiene que ponerle solución a cada ejercicio. Por eso se puede entrenar con tanto texto.
Esta etapa se llama **preentrenamiento** (pre-training).[^academy-pretrain] Los «números» que se retocan son los parámetros de los que se habla más abajo, en «El tamaño del modelo».
Se parece a resolver un cuaderno de ejercicios y comprobarlo con las soluciones. Pero no se apuntan aparte los ejercicios fallados. En su lugar, se cambia poco a poco la intuición para acertar mejor la próxima vez con problemas parecidos.

Un modelo que termina el preentrenamiento todavía no es un interlocutor: se parece más a una «máquina de continuar textos». Después hay un entrenamiento más para pulirlo como interlocutor (más abajo, «Recibió un entrenamiento aparte para ser un “conversador que ayuda”»).

### Entonces, ¿se lo ha aprendido todo de memoria?

En su mayor parte, no. Dentro del modelo los textos leídos no están guardados como archivos. Lo que queda son muchísimos números. En esos números se han fundido patrones como «tras tal palabra suele venir tal otra».
Comparar los tamaños da una idea. El modelo Llama 3.1 405B tiene 405 000 millones de parámetros, pero los fragmentos de texto que leyó al entrenarse superan los 15 billones (más abajo, «El tamaño del modelo»). Los fragmentos leídos son más de 37 veces los números.
Piensa en una persona que ha leído cien libros de cocina. No se sabe todas las recetas de memoria, pero conoce la idea de que «un guiso suele hacerse sofriendo los ingredientes y echando agua».

Pero **lo que ha visto muy a menudo sí lo puede memorizar tal cual.**

- En 2020, unos investigadores sacaron del modelo GPT-2 cientos de frases de sus datos de entrenamiento, idénticas al original. Entre ellas había nombres, teléfonos y direcciones de correo que estaban publicados en internet.[^extract]
- Un estudio posterior de 2022 informó de que el modelo devuelve más texto memorizado en tres casos: cuanto mayor es el modelo, cuantas más veces aparece el mismo texto en los datos de entrenamiento y cuanto más largo es el comienzo que se le muestra.[^memorization]

Por eso conviene saber algo. La IA no puede buscar «dónde lo leyó». No saca el texto original para comprobarlo como en una biblioteca: fabrica las palabras a partir de patrones.
Por eso, si le preguntas la fuente, puede inventarse con apariencia creíble el título de un artículo que no existe (más abajo, «Alucinación»).

### No aprende mientras conversa

Cuando termina el entrenamiento, los números quedan fijos. Lo que le cuentas durante una conversación no cambia esos números. **Solo se usa como material de consulta dentro de esa conversación.**
Por eso, si abres una conversación nueva, lo normal es que no sepa nada de la anterior.

Puede que pienses: «¿Pero se acordaba de lo que hablamos la otra vez?». Eso es la función de **memoria** (memory) del servicio. El servicio apunta aparte, fuera del historial de conversaciones, lo que debe recordar, y lo saca para que lo consulte en una conversación nueva.[^memory] No es que hayan cambiado los números del modelo.
La empresa puede usar mis conversaciones como material de entrenamiento del **próximo modelo que salga**. Tampoco en ese caso cambia en ese momento el modelo con el que conversas ahora. Puedes elegir en los ajustes si lo permites ([capítulo 9](09-safety.md)).

Abre una conversación nueva y pregunta esto.

```
¿Recuerdas lo que te dije en conversaciones anteriores?
Si lo recuerdas, explícame también de qué manera lo recuerdas.
```

Si la función de memoria está desactivada, dirá que no lo sabe. Si está activada, podrá responder mirando lo guardado. El resultado depende del servicio y de los ajustes.

<Quiz id="ch1-training" />

## ¿Cómo construye una respuesta?

Lo esencial de lo que hace un LLM es sorprendentemente sencillo. **Mira el texto hasta ahora y va añadiendo, una por una, la palabra siguiente que le parece más verosímil.**

Piensa en el autocompletado del teclado del móvil. Si escribes «hoy para comer», te sugiere «qué».
Un LLM hace lo mismo. Solo que mira un contexto mucho más largo y lo hace a una escala mucho mayor.

![Entre los candidatos para la palabra que sigue a «hoy para comer» y su probabilidad (ejemplo: «qué» 62 %, «¿vamos?» 25 %, otros candidatos), se elige uno para formar «hoy para comer qué». Se repite añadir la palabra elegida y escoger la siguiente, hasta que la respuesta está completa](../../../guide/00-common/assets/ch1-next-word.svg)

Por ejemplo, si preguntas así

```
¿Cuál es la capital de Corea del Sur?
```

el LLM añade «Seúl» como palabra siguiente a «La capital de Corea del Sur es». Porque es algo que vio infinidad de veces al entrenarse.
Después añade «.». Así va completando la respuesta.

El método es así de simple. Pero al encontrarse con una cantidad descomunal de texto, ha llegado a hacer cosas que «parecen pensamiento», como traducir, resumir, redactar o escribir código.

### Dos ingredientes deciden la probabilidad

¿En qué se fija para decidir «la palabra más verosímil»? Mira dos cosas a la vez.

1. **Los patrones aprendidos en el entrenamiento**: están en los números del modelo. De ahí sale que, tras «La capital de Corea del Sur es», venga «Seúl».
2. **Todo el texto que hay en la conversación actual**: tu pregunta, lo que se dijo antes, los archivos que subiste y hasta los avisos que el servicio puso de antemano. Esto se llama **contexto** (context).

Aunque la frase sea la misma, si cambia el contexto cambia la probabilidad de la palabra siguiente.

| Texto anterior | Palabra que suele venir después |
|---|---|
| «Me duele el estómago, así que» | «fui al hospital» |
| «Subí a un barco y» | «fui a la isla» |

Por eso importa la instrucción (prompt). Lo que tú escribes es el contexto, y el contexto cambia las probabilidades.
Cuanto más cuentes tu situación y la forma de la respuesta que quieres, más «verosímiles» se vuelven las palabras que van en esa dirección ([capítulo 4](04-prompt-basics.md)).

Compruébalo tú mismo.

```
Escribe cinco candidatos para lo que podría seguir a «Hoy para comer».
Después muéstrame cómo cambian los candidatos si delante añado «Como estoy a dieta,».
```

Los candidatos que escribe la IA son un ejemplo para explicar. No te muestra tal cual las probabilidades que calculó por dentro. Aun así, puedes notar cuánto cambian la palabra siguiente unas pocas palabras previas.

### Así se lee tu pregunta

Supón que preguntas: «Me duele el estómago, ¿debería ir al hospital?». Dentro del modelo ocurre, más o menos, esto.

1. **Se corta en fragmentos.** El texto se corta en pequeños fragmentos llamados **tokens** (token). A veces una palabra es un fragmento y a veces se divide en varios.
2. **Cada fragmento se convierte en un grupo de números.** Se ha entrenado para que las palabras de significado parecido tengan grupos de números parecidos. Es como en un mapa, donde los barrios cercanos tienen coordenadas parecidas. «Cachorro» y «perro» están cerca, y «nevera» está lejos. Esto se llama **embedding** (incrustación).[^word2vec]
3. **Los fragmentos se miran entre sí.** Cada fragmento mira a los demás de la frase y valora cuáles son importantes para fijar su propio significado. «Estómago» mira «duele» y «hospital» y se afianza en el sentido de la parte del cuerpo. Esto se llama **atención** (attention). El transformer del que se habla en el [capítulo 2](02-why-it-matters.md) usa justamente este método.[^attention]
4. **Tras repetirlo varias veces, elige la palabra siguiente.** Los pasos 2 y 3 se repiten a lo largo de muchas capas. Al final calcula una probabilidad para cada fragmento candidato, elige uno y lo añade. Luego, incluyendo el fragmento recién añadido, vuelve a calcular.

Visto así, «entender» es un cálculo en el que los fragmentos de tu pregunta se miran unos a otros y van acotando el significado. Si eso puede considerarse igual que la comprensión humana, se trata más abajo en «Pero ¿de verdad piensa?».

### No entra solo tu pregunta

En la pantalla de chat solo ves tu pregunta. Pero el texto que recibe el modelo es más largo, porque el servicio envuelve tu pregunta. Para entenderlo, dibujado más o menos tiene esta forma. La forma real varía según el servicio.

```
[Aviso del servicio] Eres un asistente amable. Hoy es 30/10/2026. …
[Conversación anterior] …
[Archivos subidos] …
[Usuario] Me duele el estómago, ¿debería ir al hospital?
[IA] ← el modelo continúa escribiendo desde aquí
```

El aviso del principio se llama **prompt del sistema** (system prompt). Por ejemplo, la web y las aplicaciones de Claude ponen en el prompt del sistema, cada vez que empieza una conversación, información reciente como la fecha de hoy y la manera de responder. Y publican ese contenido.[^system-prompts]
El modelo ve todo este texto largo como contexto y continúa escribiendo lo que viene después de «[IA]». Si la conversación se alarga, este texto también se alarga. Por eso importa la cantidad de texto que puede ver de una vez (más abajo, «Ventana de contexto»).

<Quiz id="ch1-next-word" />

## IA que busca y usa herramientas

Las IA de hoy también buscan en la web las noticias de hoy. Antes dijimos que no saben lo que pasó después del entrenamiento (más abajo, «Fecha de corte del conocimiento»). ¿Cómo es posible?
**El modelo no entra él mismo en internet.** El modelo escribe un texto de petición del tipo «busca esto». Entonces el servicio busca por él y pega el resultado en la conversación. El modelo lee ese resultado y sigue añadiendo la palabra siguiente.

### Orden en que se usa una herramienta

Supón que preguntas: «¿Qué tiempo hace hoy en Seúl?».

1. **Decidir si se usa**: el modelo recibe, junto con la pregunta, la lista de herramientas que puede usar. En la lista figura el nombre de cada herramienta y lo que hace. Si es una pregunta cuya respuesta no está en lo aprendido ni en la conversación, como el tiempo de hoy, el modelo decide usar una herramienta.[^tool-use]
2. **Escribir la petición**: en lugar de la respuesta, escribe una petición con una forma fija. Por ejemplo: `búsqueda web: tiempo de hoy en Seúl`
3. **Ejecutar**: el servicio recibe esa petición y busca de verdad. El modelo no puede ejecutar nada por sí mismo. Solo escribe el texto de la petición.[^tool-contract]
4. **Pegar el resultado**: el resultado de la búsqueda se pega en la conversación. Ahora el contexto contiene el tiempo de hoy.
5. **Responder**: el modelo mira el contexto ya ampliado y continúa con la palabra siguiente. Sale una respuesta como «Hoy en Seúl está despejado y la máxima de mediodía es de 18 grados». Si falta información, a veces repite varias veces los pasos 2 a 4.

![Pregunta «¿Qué tiempo hace hoy en Seúl?» → ① el modelo mira la lista de herramientas y decide buscar → ② escribe el texto de petición «búsqueda web: tiempo de hoy en Seúl» → ③ el servicio busca de verdad → ④ el resultado de la búsqueda se pega en la conversación → ⑤ el modelo lee el resultado y responde. El modelo solo escribe la petición y el servicio la ejecuta](../../../guide/00-common/assets/ch1-tool-calling.svg)

A este método se le llama **llamada a herramientas** (tool calling) o **llamada a funciones** (function calling). Tanto OpenAI, creadora de ChatGPT, como Anthropic, creadora de Claude, describen el mismo orden en su documentación para desarrolladores.[^tool-use][^openai-tools]
Piensa en alguien que solo trabaja en su mesa. Como no puede salir, escribe en una nota «averigua el tiempo de hoy» y se la da a un recadero. Lee la nota que trae el recadero y escribe la respuesta. El modelo es esa persona y el servicio es el recadero.

Buscar no es volver a entrenar el modelo. Es **pegar material en esta conversación**. Por eso, en una conversación nueva no se conoce ese resultado. La función de memoria que vimos antes funciona con el mismo principio. Se saca lo que estaba apuntado y se pega en la conversación.

### Además de buscar, hay otras herramientas

- **Leer páginas web**: si le das un enlace, trae esa página y la lee.
- **Calcular y ejecutar código**: los cálculos complejos no los estima «eligiendo la palabra siguiente», sino que los hace con un programa de cálculo de verdad.
- **Crear archivos**: te crea archivos como los de Excel, Word o PowerPoint.
- **Conectar aplicaciones**: si conectas tu correo, tu calendario o tu unidad de almacenamiento, busca dentro de ellos.

Qué herramientas puedes usar depende del servicio y del plan. El uso de cada servicio se trata en la etapa 2, en la [guía de ChatGPT](../11-chatgpt/README.md) y en la [guía de Claude](../10-claude/README.md).

### Que haya buscado no significa que todo sea correcto

- **El propio resultado de la búsqueda puede ser erróneo o estar anticuado.**
- **El modelo puede leer mal el resultado o añadir cosas que no están en él.** Por eso abre tú mismo las fuentes que acompañan a la respuesta para comprobarlas.[^cite-check]
- **Dentro de una página web puede haber instrucciones escondidas dirigidas a la IA.** Eso se llama inyección de instrucciones (prompt injection) y se trata en el [capítulo 9](09-safety.md).
- **El modelo decide si busca o no.** Por eso a veces responde solo con lo aprendido, sin buscar. Para asegurarte de que busque, escribe «busca en la web».[^search-ask]

En un servicio que pueda buscar en la web, pregunta así.

```
Busca en la web. Dime el horario de visita de esta semana del Museo Nacional de Corea
y escribe también la dirección de las páginas que consultaste.
```

Cuando recibas la respuesta, pregúntate: ¿hay alguna indicación de que haya buscado? Si abro el enlace de la fuente, ¿pone lo mismo?

<Quiz id="ch1-tools" />

## El tamaño del modelo — parámetros

Seguramente has visto que tras el nombre de un modelo de IA aparecen números como «8B» o «70B». Ese número indica **lo grande que es el modelo**.
La unidad con que se mide el tamaño es el **parámetro** (parameter).

### Qué es un parámetro — una perilla de ajuste dentro del modelo

Dentro de un LLM hay muchísimos números. Esos números calculan «qué palabra vendrá después». Cada uno de esos números es un parámetro.
**Entrenar** es ir retocando poco a poco esos números para que acierte mejor la palabra siguiente. Se parece a girar la rueda de frecuencia de una radio hasta sintonizar la emisora que quieres.
Cuando termina el entrenamiento, el valor de las perillas queda fijo. Lo que queda así terminado es el modelo que usamos.

![La entrada «La capital de Corea del Sur es» pasa por un modelo con muchísimas perillas de ajuste (parámetros) y se convierte en «Seúl». Entrenar es girar poco a poco las perillas para acertar mejor la palabra siguiente, y cuantas más perillas, más grande se dice que es el modelo](../../../guide/00-common/assets/ch1-parameters.svg)

### Cómo se leen los números

«B» es la inicial de la palabra inglesa billion y significa **mil millones**.

| Notación | Cómo se lee | Ejemplo |
|---|---|---|
| 8B | 8000 millones de parámetros | El modelo más pequeño de Llama 3.1, que Meta publicó en 2024[^llama] |
| 70B | 70 000 millones | El modelo mediano de Llama 3.1 y Chinchilla, un modelo de investigación de 2022[^chinchilla] |
| 175B | 175 000 millones | GPT-3 de OpenAI, de 2020[^gpt3] |
| 405B | 405 000 millones | El modelo más grande de Llama 3.1[^llama] |

En general, cuantas más perillas, más patrones complejos puede contener. Por eso los modelos grandes tienden a hacer mejor las tareas difíciles.
A cambio, hay más cálculo. Por eso son **más lentos y cuesta más ponerlos a funcionar.**

### El tamaño y «cuánto ha leído» son cosas distintas

El tamaño no es lo único que decide la calidad de un modelo. Piensa en ellos por separado.

- El **número de parámetros** es el tamaño del modelo. Se puede comparar con el tamaño de la cabeza (el recipiente). Por ejemplo, Llama 3.1 405B tiene 405 000 millones.
- La **cantidad de datos de entrenamiento** es la cantidad de texto leído al entrenarse. Se cuenta en tokens (fragmentos de texto). Se puede comparar con la cantidad de libros leídos. Por ejemplo, Llama 3.1 405B leyó más de 15 billones de tokens.[^llama]

Si el recipiente es grande pero ha leído poco, no rinde todo lo que podría. Lo mostró la investigación Chinchilla, de 2022.
Un modelo más pequeño, de 70 000 millones de parámetros, pero al que **se hizo leer unas cuatro veces más texto**, obtuvo resultados buenos de forma pareja frente a Gopher, de 280 000 millones, y GPT-3, de 175 000 millones.
Los investigadores concluyeron que **hay que aumentar juntos y en la misma proporción el tamaño del modelo y la cantidad de datos de entrenamiento**.[^chinchilla]

También importa cómo se pulió después del entrenamiento. En «Para saber más», más abajo, aparece un estudio sobre el entrenamiento con comentarios de personas. En ese estudio, las respuestas de un modelo de 1300 millones de parámetros que recibió ese entrenamiento se valoraron mejores que las de GPT-3, de 175 000 millones.[^instructgpt]

### Por eso no se elige mirando solo el número

- **Los servicios comerciales de hoy rara vez dan a conocer el tamaño.** Por ejemplo, OpenAI explicó en el informe técnico de GPT-4 de 2023 que, por la situación de competencia y por razones de seguridad, no publica la estructura, incluido el tamaño del modelo.[^gpt4] Muchos modelos de otros servicios tampoco anuncian oficialmente su tamaño. Así que los números que circulan por internet pueden ser suposiciones.
- Los **modelos cuyo tamaño se publica** suelen ser modelos abiertos que cualquiera puede descargar y usar (por ejemplo, Llama). Hacer funcionar esos modelos en tu propio ordenador se trata en la etapa 3.
- Si en un servicio puedes elegir entre un «modelo rápido» y uno «más inteligente», normalmente la diferencia es de tamaño, velocidad y coste. Encarga **las tareas sencillas al modelo rápido y las difíciles al grande**. Y compara los resultados. Es el método más exacto.

<Quiz id="ch1-parameters" />

## Pero ¿de verdad piensa?

Cuando la usas, parece que la IA entiende lo que quieres y responde después de pensar. Esa sensación no es del todo errónea.
«Elegir la palabra siguiente» es la manera de sacar la respuesta. **Dentro del cálculo para elegir esa palabra sí ocurre algo parecido a pensar.**
Eso sí, si es igual que el pensamiento humano es algo que todavía se investiga.

> **Respuesta corta**
> 1. **Sí hace** cálculos parecidos al pensamiento.
> 2. Pero **no siempre**. A veces responde sin cuidado por un atajo.
> 3. Y **no sabe explicar con exactitud** cómo ha llegado a su respuesta.

### Para acertar bien la palabra siguiente hay que conocer el contenido

Para acertar el hueco de la última frase de una novela de misterio, «y así, el culpable era ___», hay que seguir las pistas de todo el libro.
El LLM practicó este tipo de huecos con una cantidad enorme de texto y, haciéndolo, interiorizó lo necesario para acertar.
Por ejemplo, las relaciones entre hechos, la lógica de las frases o la intención de quien escribe.

En 2025, Anthropic, la empresa que creó Claude, publicó un estudio en el que miró directamente dentro del modelo.[^tracing]
Al preguntarle «¿Cuál es la capital del estado donde está Dallas?», dentro del modelo ocurrieron dos pasos seguidos.

1. Recordó «Dallas está en el estado de Texas, en EE. UU.»
2. Y le añadió «La capital de Texas (algo así como la sede del gobierno de una provincia en Corea) es Austin».

![Pregunta «¿Cuál es la capital del estado donde está Dallas?» → ① Dallas está en Texas → ② la capital de Texas es Austin → respuesta: Austin. No sacó una respuesta memorizada: unió dos hechos uno tras otro](../../../guide/00-common/assets/ch1-two-hop.svg)

No sacó una respuesta memorizada: construyó la respuesta **uniendo dos hechos**.
Al escribir poemas, a veces decidía de antemano la palabra con la que iba a acabar el verso, antes de escribirlo. Y luego escribía la frase hacia esa palabra. **Miraba hacia delante.**

### «Probabilístico» no es «al azar»

- En **los hechos que la IA conoce bien**, la probabilidad se inclina mucho hacia un lado. Tras «La capital de Corea del Sur es», «Seúl» domina tanto que casi siempre sale la misma respuesta.
- En **las preguntas con varias respuestas posibles**, la probabilidad se reparte entre varios candidatos. «Dame un nombre para mi tienda» da una respuesta distinta cada vez que lo preguntas.
- En **las preguntas que la IA no conoce bien**, la probabilidad también se reparte. Por eso cada vez que preguntas sale una respuesta distinta y, a veces, otra mentira distinta.

> **Atención**: que salga siempre la misma respuesta no significa que sea correcta. Si ha leído mucho un error muy común, la probabilidad puede inclinarse hacia la respuesta equivocada y fallar siempre de la misma manera.

### Recibió un entrenamiento aparte para ser un «conversador que ayuda»

Un modelo que solo ha leído texto está más cerca de continuar un texto que de contestar preguntas. El modelo del servicio que usas ahora recibió además otro entrenamiento.
Es un **entrenamiento en el que personas eligen la respuesta buena y la mala**. Se llama RLHF (Reinforcement Learning from Human Feedback, aprendizaje por refuerzo con comentarios humanos).
La actitud de adivinar lo que quieres y responder de forma ordenada sale de este entrenamiento.

Hoy también se usan mucho los **modelos de razonamiento** (reasoning model). Son modelos que piensan por sí mismos paso a paso antes de responder.
Antes de responder, escriben largo todo el proceso de pensamiento. Dividen el problema, lo comprueban y lo corrigen. En el [capítulo 5](05-prompt-patterns.md) se vuelve a tratar cómo usarlos.

### Las personas sienten que quien habla bien tiene intención

ELIZA, un programa de conversación de 1966, era solo unas pocas reglas que devolvían en forma de pregunta lo que decía el usuario.[^eliza]
Si le decías «últimamente estoy deprimido», contestaba «¿por qué sientes que estás deprimido?». Aun así, mucha gente sintió que el programa la entendía.
A este fenómeno se le llama **efecto ELIZA** (ELIZA effect). Los LLM de hoy hablan incomparablemente mejor. Por eso esa sensación es mucho más fuerte.

### Entonces, ¿cómo conviene tomárselo?

El estudio de Anthropic de antes tiene también este resultado. Se le hizo calcular a la IA 36+59. Dentro se ejecutaron dos cálculos a la vez.
Uno estima «más o menos 90» y el otro acierta exactamente la última cifra.
Sin embargo, al preguntarle cómo lo resolvió, respondió que lo hizo con el método que se aprende en la escuela, «empezando por las unidades y llevándose una».
Esto significa que **lo que la IA dice al explicar su pensamiento puede ser distinto de lo que ocurrió de verdad dentro**.

- Hace cálculos parecidos al pensamiento. Por eso puedes encargarle sin problema tareas complejas.
- Pero que la explicación o el proceso de pensamiento parezcan razonables no garantiza que su contenido sea correcto. Comprueba tú mismo lo importante.
- Comprueba con más cuidado los problemas que son una pequeña variación de uno conocido, los que llevan información innecesaria mezclada y los de un tipo que nunca ha visto.

::: details Para saber más — ¿cómo miraron los investigadores dentro de la IA? (pulsa para desplegar)

**Antes de leer**: buena parte de los estudios que se presentan aquí son informes de investigación que las propias empresas de IA hicieron públicos. Algunos son artículos que se publicaron antes de pasar la revisión de un congreso o de una revista científica (preprints, preprint).
Por eso léelos como **«hasta ahora se ha observado esto»** y no como «hechos confirmados». En este campo salen resultados nuevos en cuestión de meses.

**Experimento de sustitución.** Dentro de la IA, un concepto como «Texas» también se guarda como un grupo de números. Los investigadores cambiaron ese grupo de números por el grupo de números de «California». Y miraron qué pasaba con la respuesta.
La respuesta cambió de Austin a Sacramento, la capital del estado de California. Es la prueba de que ese grupo de números se usaba de verdad para construir la respuesta.
Al campo de investigación que mira así dentro de los modelos se le llama investigación de **interpretabilidad** (interpretability).

**No siempre piensa paso a paso.**
- El informe detallado del mismo estudio indica que dentro del modelo **funcionan a la vez un razonamiento real en dos pasos y atajos**.
  Los propios investigadores reconocieron que solo en **aproximadamente una cuarta parte** de las preguntas que probaron pudieron explicar de forma satisfactoria lo que ocurría por dentro.[^biology]
- En julio de 2026, Anthropic publicó un informe de seguimiento. Sustituyeron un paso intermedio que no aparece en la pregunta, como el «Texas» de la pregunta de Dallas.
  Y midieron en qué proporción cambiaba la conclusión en consecuencia. Según el modelo, fue del **54 al 70 %**.[^workspace] Son resultados publicados hace pocos meses y la verificación por otros investigadores aún está en curso.

**Efecto del entrenamiento humano.** En un estudio de OpenAI de 2022, las personas valoraron como mejores las respuestas de un modelo con entrenamiento con comentarios humanos (RLHF), frente a las de un modelo 100 veces mayor.[^instructgpt]
La revista Nature publicó en 2025 un estudio sobre modelos de razonamiento. Dice que la capacidad de un modelo de razonamiento puede surgir **solo con un entrenamiento que da recompensa cuando acierta la respuesta**, sin que una persona muestre ejemplos de resolución.[^r1]

**El «pensamiento» que se ve en pantalla no es todo.**
- Anthropic metió a escondidas pistas con la respuesta correcta en los problemas. Y miró si el modelo que había decidido su respuesta usando la pista lo reconocía en el texto de su proceso de pensamiento.
  La proporción de veces que mencionaban la pista fue, de media, del **25 %** (Claude 3.7 Sonnet) y del **39 %** (DeepSeek R1).[^faithful] En el resto, usaron la pista y no lo dijeron.
- Tampoco es buena la capacidad del modelo para darse cuenta de lo que tiene dentro. Los investigadores introdujeron a escondidas un concepto concreto dentro del modelo y le preguntaron si tenía algún pensamiento extraño.
  Incluso el modelo que mejor lo hizo se dio cuenta en **aproximadamente un 20 %** de los casos. Los investigadores concluyeron que «mirar dentro de uno mismo suele fallar».[^introspection]

**Se debilita ante problemas desconocidos.**
- Investigadores de Apple experimentaron con problemas de matemáticas escritos en texto. **Con solo cambiar los números o intercalar una frase que parece plausible pero no tiene relación**, el rendimiento bajó.
  Con una sola frase sin relación, el rendimiento bajó **hasta un 65 %**.[^gsm] Significa que en parte resuelve apoyándose en la forma conocida del problema.
- Otro estudio de Apple de junio de 2025 («La ilusión del pensamiento») informó de que, al hacer los rompecabezas cada vez más difíciles, la precisión de los modelos de razonamiento se desploma a partir de cierto punto.[^illusion]
  El rompecabezas representativo son las **Torres de Hanói**. Consiste en pasar discos de distintos tamaños a otra varilla. Hay que respetar la regla de que «no se puede poner un disco grande sobre uno pequeño». Cada vez que se añade un disco, el número de movimientos se duplica más o menos.
  Enseguida salió un artículo de réplica. Decía que la respuesta era tan larga que superaba la longitud de texto que la IA puede escribir de una vez (límite de salida), o que se habían mezclado problemas que en realidad no tienen solución.
  Otro artículo que repitió el experimento consideró que cada parte tiene algo de razón. Con unos 8 discos ya se atascaba. Pero dicen que, si se plantean solo problemas que sí se pueden resolver, resolvió incluso otros muy grandes.[^rethinking]
  Los tres artículos se publicaron antes de ser revisados, y esta discusión sigue abierta.

:::

<Quiz id="ch1-thinking" />

## No solo lee texto — documentos, fotos, sonidos y vídeos

Eso de que «el LLM se entrenó con texto» vale para cuando salieron los primeros LLM. ChatGPT, Claude y Gemini de hoy, si subes una foto, te explican qué hay en ella.
También leen el importe en la foto de un recibo. Según el servicio, leen las tablas de un informe en PDF, transcriben una grabación de voz o resumen el contenido de un vídeo.
A un **modelo que maneja a la vez varios tipos de información** se le llama modelo **multimodal** (multimodal). «Modal» se refiere al tipo de información (texto, fotos, sonidos, etc.).

### A las fotos también las corta en fragmentos para leerlas

Como vimos antes, el LLM corta el texto en pequeños fragmentos llamados tokens.
A las fotos las trata igual. Corta la foto en casillas pequeñas, como un tablero, y trata cada casilla como si fuera una palabra.
El título del artículo de 2020 que difundió esta idea por primera vez es «Una imagen vale 16×16 palabras».[^vit]

![Si se corta una foto en casillas como un tablero, cada casilla se convierte en un fragmento como una palabra, se une en una sola línea con los fragmentos del texto de la pregunta y entra en el LLM. El LLM predice lo que viene después y responde «Es un gato durmiendo en el sofá»](../../../guide/00-common/assets/ch1-image-tokens.svg)

Después se entrena con **material en el que cada foto va emparejada con una descripción**.

| Foto | Texto que la acompaña |
|---|---|
| Foto de un gato sobre un sofá | «Un gato gris echando la siesta en el sofá» |
| Foto de un recibo | El nombre del comercio y el importe que figuran en el recibo |
| Dibujo de un gráfico | Una frase de un artículo que explica el gráfico |

Al ver infinidad de estas parejas, aprende la conexión de que «casillas con esta forma salen junto con la palabra “gato”».
Si subes una foto y preguntas «¿qué es esto?», ocurre lo siguiente. El modelo recibe los fragmentos de la foto y el texto de la pregunta en una sola línea. Y responde **prediciendo lo que viene después**.
No ha cambiado el principio: han aumentado los materiales que puede recibir. Piensa en un libro ilustrado. Un niño que ha visto muchas veces libros ilustrados con la palabra «gato» junto al dibujo,
dice «gato» incluso al ver por primera vez la foto de un gato. Es algo parecido.

### Documentos, sonidos y vídeos también acaban convertidos en fragmentos

Aunque la forma sea distinta, el método es el mismo. Primero se convierten en fragmentos (tokens), se unen en una sola línea con los fragmentos de texto y se predice la palabra siguiente.

- **Documentos (PDF)**: extrae las letras de cada página para leerlas y también mira esa misma página como foto. Por eso puede leer no solo el texto, sino también tablas y gráficos.[^pdf]
  Pero según el servicio o el tipo de documento, a veces lee solo las letras. Por ejemplo, de los PDF de más de 101 páginas y de los documentos que no son PDF, como los de Word, Claude extrae solo las letras. No puede leer las imágenes que contienen.[^claude-files]
- **Sonido**: corta el sonido en unidades de tiempo muy cortas y lo convierte en fragmentos. Por ejemplo, Gemini representa 1 segundo de sonido con 32 fragmentos. Un minuto son 1920.
  Por eso no solo transcribe lo que se dice, sino que también reconoce sonidos que no son palabras, como el canto de un pájaro o una sirena.[^gemini-audio]
- **Vídeo**: del vídeo extrae una escena por segundo como foto y la convierte en fragmentos de imagen. El sonido lo convierte aparte en fragmentos de sonido (según el ajuste por defecto de Gemini).
  Por eso puede perderse una escena que pasa muy rápido.[^gemini-video]

Los documentos, los sonidos y los vídeos necesitan muchos más fragmentos que el texto. Por eso un vídeo largo o un documento grueso llenan enseguida la cantidad que puede ver de una vez (más abajo, «Ventana de contexto»).
Si el material es larguísimo, otra opción es subir solo las partes que necesitas.

### La IA que «crea» imágenes, música y vídeo funciona de otra manera

Comprender y crear suelen ser tecnologías distintas. La IA que crea imágenes y vídeos usa sobre todo un **modelo de difusión** (diffusion model).[^ddpm]

1. **Al aprender**: a una foto en buen estado le va mezclando poco a poco ruido (un dibujo como el «chisporroteo» de la pantalla de una tele) hasta estropearla del todo, y practica **cómo quitar ese ruido paso a paso**.
2. **Al crear**: empieza por una pantalla que solo tiene ruido y, tomando como guía un texto como «un perro corriendo por la playa», va quitando el ruido poco a poco. Entonces aparece la imagen que corresponde al texto.

Se parece a cuando se levanta una niebla espesa y aparece el paisaje. Pero ese paisaje no estaba ahí de antes. Se ha dibujado de nuevo según el texto que le diste.
El vídeo es mucho más difícil. Porque hay que hacer esto a lo largo de muchas escenas, y que queden bien enlazadas entre sí.
En la música también se aprende emparejando sonidos con textos que los describen. Hay además un método que corta el sonido en trozos pequeños y predice «el siguiente fragmento de sonido». Es la misma idea con la que el LLM predice la palabra siguiente.

> Aunque la pantalla de chat sea una sola, por dentro pueden funcionar varias tecnologías a la vez. Cada servicio tiene una estructura distinta y cambia a menudo, así que las funciones de cada servicio se tratan en las guías de la etapa 2.

### Con las fotos, los puntos débiles son los mismos

- **Aparecen igualmente las respuestas inventadas (más abajo, «Alucinación»).** Puede decir que hay un objeto que no está en la foto o leer inventándose con apariencia creíble unas letras borrosas.
- A menudo se equivoca al **contar objetos, leer letras muy pequeñas y medir posiciones o longitudes exactas**.
- Ayuda pedirle: «dime **por separado lo que se ve con seguridad en la foto y lo que supones**».

<Quiz id="ch1-multimodal" />

## Lo que hace bien

| Tarea que hace bien | Ejemplo |
|---|---|
| Escribir y pulir textos | Escribir el borrador de un correo de disculpas para un cliente |
| Resumir textos largos | Sacar solo las cláusulas que me perjudican de unos términos de 30 páginas |
| Explicar | «Si suben los tipos de interés, ¿por qué baja el precio de las viviendas?» al nivel de un alumno de secundaria |
| Dar ideas | 10 temas para la fiesta de cumpleaños de un niño |
| Cambiar de formato | Notas de reunión a tabla, y de tabla a frases de informe |

<Quiz id="ch1-good-at" />

## Lo que no hace bien y puntos de atención

### 1. Dice con apariencia creíble cosas falsas — «alucinación»

El LLM va añadiendo palabras según lo «verosímil» que son, no según si son «ciertas».
Por eso, a veces se inventa con seguridad contenido que no conoce. A eso se le llama **alucinación (hallucination)**.

Por ejemplo, supón que preguntas: «Dime el título del artículo que escribió el profesor ○○○ en 2019».
Puede fabricar como si fuera real el título de un artículo que no existe.
**Los números, las fechas, las citas y la información legal o médica compruébalos siempre de nuevo en la fuente original.**

### 2. No sabe lo que pasó después de su entrenamiento — «fecha de corte del conocimiento»

El LLM se entrena con textos hasta un momento determinado. A ese momento se le llama **fecha de corte del conocimiento (knowledge cutoff)**.
No conoce las noticias ni los cambios de precios posteriores. Los servicios de hoy compensan este punto débil añadiendo una función de búsqueda web (antes, «IA que busca y usa herramientas»).
Pero si respondió sin buscar, la información puede estar anticuada.

El problema no es solo el momento. También es grande **la diferencia entre los temas muy leídos y los poco leídos**.
Explica bien los conceptos muy conocidos. Pero es débil en los temas poco frecuentes, en la terminología de un sector reducido, en las normas que solo valen en una zona y en los temas sobre los que hay opiniones divididas.[^academy-knowledge]
Además, en ambos casos puede responder con el mismo tono seguro.

Por eso, en lugar de «¿esto lo sabrá la IA?», pregúntate: ¿este tema aparece mucho en los textos que leyó la IA? ¿Es un contenido que solo vale en mi zona o en mi sector?
Si te parece que apareció poco, pega tú mismo el material o haz que busque.

### 3. Hay un límite de lo que puede ver de una vez — «ventana de contexto»

A la cantidad de texto que un LLM puede recordar y consultar en una sola conversación se la llama **ventana de contexto (context window)**.
Si la conversación se hace muy larga, puede empezar a perder el contenido del principio.
Por eso conviene empezar una conversación nueva cuando cambia el tema.
La parte que se desborda **puede quedar fuera en silencio, sin avisarte.**[^academy-memory] Si metiste un material larguísimo, pregunta por el contenido del final para comprobar si lo leyó entero.

### 4. No conoce mi situación

El LLM no sabe quién soy, en qué empresa trabajo ni para qué pregunto.
Si no se lo cuentas, da una respuesta corriente para «alguien promedio».
**La técnica que cubre este punto débil son justamente las instrucciones (prompts) que aprenderás en el [capítulo 4](04-prompt-basics.md).**

### 5. Es fácil que me dé la razón — adulación

Como vimos antes, el modelo de los servicios actuales, después de leer todos los textos, recibió además un entrenamiento en el que personas eligen la buena respuesta.
A la etapa en que se pule así un modelo que ya lo ha leído todo, para convertirlo en interlocutor, se le llama **ajuste fino** (fine-tuning). RLHF es uno de sus métodos.
Este entrenamiento también deja manías.[^academy-character]

La más típica es la **manía de inclinarse a darme la razón**. Se llama **adulación** (sycophancy).
Si preguntas «este plan es perfecto, ¿verdad?», puede decirte que está bien aunque tenga problemas.

Cuando necesites una opinión sincera, di antes que puede llevarte la contraria.

```
Lo de abajo es el plan de promoción de la tienda que he preparado. Yo creo que está bien, pero
si ves que me equivoco, llévame la contraria con sinceridad. Señálame tres puntos débiles.

[Pega aquí el plan]
```

Compara con tus propios ojos si, cuando le dijiste antes que podía llevarte la contraria, señala los puntos débiles con más sinceridad que cuando no se lo dijiste.
Compara una vez la respuesta cuando le dices que puede llevarte la contraria y cuando no.

Del mismo entrenamiento salen algunas manías más.

- **Manía de hablar largo**: es fácil que una respuesta que cabría en una frase se alargue. Fija la longitud, por ejemplo: «responde en una frase».
- **Manía de ser demasiado prudente**: a veces añade advertencias incluso a preguntas que no son peligrosas.
- **Manía de que el tono y la exactitud vayan por separado**: que hable con seguridad no significa que la respuesta sea correcta ([capítulo 9](09-safety.md#_1-mentiras-que-suenan-creibles-—-comprobar-las-alucinaciones)).

Cuando recibas comentarios, pregúntate: ¿este elogio tiene fundamento? ¿No habré oído solo lo que quería oír?

<Quiz id="ch1-limits" />

## Más en vídeo

Si te resultan más cómodas las imágenes en movimiento que el texto, mira los vídeos de abajo. Muestran con dibujos cómo funciona de verdad ese «adivinar la palabra siguiente» que leíste arriba.

**Vídeos en coreano**

**[Explicación de los LLM (versión resumida)](https://www.youtube.com/watch?v=HnvitMTkXro)** · 3Blue1Brown Corea · Es lo primero que recomiendo a quien lo ve por primera vez. Explica la predicción de la palabra siguiente con la comparación de ir completando un guion que solo conserva la mitad, palabra por palabra, y muestra con dibujos el entrenamiento (ajustar diales), el entrenamiento con comentarios humanos (RLHF) y el transformer (doblaje oficial al coreano, 8 minutos)

<YouTube id="HnvitMTkXro" title="Explicación de los LLM (versión resumida)" />

**[El secreto de la conquista del lenguaje de ChatGPT (Nam Se-dong, director de Voyager X)](https://www.youtube.com/watch?v=-VmyOfPrB0c)** · TeaTimes TV · Para quien quiera oír en una conversación en coreano el principio por el que ChatGPT llegó a hablar tan bien

<YouTube id="-VmyOfPrB0c" title="El secreto de la conquista del lenguaje de ChatGPT (Nam Se-dong, director de Voyager X)" />

**[La era de la IA generativa que desencadenó ChatGPT. Resumen completo de conceptos, tecnologías y plataformas](https://www.youtube.com/watch?v=ndHo5SBojbc)** · Samsung SDS · Para quien quiera repasar de una vez, en una charla, el concepto y la tecnología de la IA generativa (charla en un evento de empresa)

<YouTube id="ndHo5SBojbc" title="La era de la IA generativa que desencadenó ChatGPT. Resumen completo de conceptos, tecnologías y plataformas" />

> Los vídeos de TeaTimes TV y de Samsung SDS se publicaron hace unos años, así que las pantallas y funciones del servicio pueden ser distintas de las de hoy. La explicación de los principios sigue valiendo.

**Vídeos en inglés**

> Todos los vídeos de abajo están en **inglés**. En los ajustes del vídeo de YouTube (la rueda dentada) → Subtítulos → **Traducción automática → español**, puedes verlos con subtítulos en español. Los vídeos se reproducen directamente dentro de esta página.

Si quieres saber más sobre el transformer, en el [capítulo 2, «Más en vídeo»](02-why-it-matters.md#mas-en-video) hay un vídeo en coreano.

**[[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g)** · Andrej Karpathy · Para quien quiera dedicar aproximadamente una hora a ver el panorama completo

<YouTube id="zjkBMFhNj_g" title="[1hr Talk] Intro to Large Language Models" />

**[Deep Dive into LLMs like ChatGPT](https://www.youtube.com/watch?v=7xTGNNLPyMI)** · Andrej Karpathy · Para quien quiera conocer a fondo hasta el proceso de entrenamiento (clase larga)

<YouTube id="7xTGNNLPyMI" title="Deep Dive into LLMs like ChatGPT" />

## Practica tú mismo

Abre cualquier servicio de LLM y escribe, una tras otra, las dos preguntas de abajo.

```
Explícame en tres frases qué es un LLM, como si se lo explicaras a un niño de primaria.
```

```
Vuelve a explicar lo que acabas de decir como si se lo explicaras a un estudiante universitario de informática.
```

Verás que, siendo el mismo contenido, **con solo cambiar a quién se lo explica** la respuesta cambia mucho.

Si tu servicio permite subir fotos, sube una foto en la que se vean varios objetos, como un escritorio o el interior de una nevera, y pregunta esto.

```
Escribe todos los objetos que se ven en esta foto y cuenta cuántos hay de cada uno.
Marca por separado lo que se ve con seguridad y lo que supones.
```

Compara los números que contó la IA con los que cuentes tú mismo. ¿Coinciden los números? ¿Ha escrito algún objeto que no está en la foto? Si sabes dónde se equivoca, verás qué debes comprobar cuando le encargues una foto.

## Resumen

- Un LLM es un programa que crea texto adivinando «la palabra que viene después».
- Entrenar es resolver infinidad de veces el problema de adivinar la palabra siguiente y retocar poco a poco los números del modelo. La mayor parte de lo leído queda como patrones y no como el texto original, pero lo que ha visto muy a menudo a veces lo memoriza tal cual. No aprende mientras conversas.
- La probabilidad de la palabra siguiente la deciden juntos los patrones aprendidos y el contexto de la conversación actual (mi pregunta, la conversación anterior, los archivos y el prompt del sistema). Por eso la instrucción cambia la respuesta.
- Herramientas como la búsqueda web se usan así: el modelo escribe un texto de petición, el servicio lo ejecuta y pega el resultado en la conversación. También con una respuesta basada en una búsqueda hay que comprobar la fuente.
- El tamaño del modelo se mide por el número de parámetros (perillas de ajuste). Pero su calidad depende no solo del tamaño, sino también de la cantidad de texto leído y del pulido posterior al entrenamiento.
- Dentro del cálculo para elegir palabras ocurren cosas parecidas a pensar, como combinar hechos y mirar hacia delante. Pero no siempre, y la explicación que da la IA de sí misma o su texto de pensamiento pueden ser distintos del proceso real.
- Se equivoca más fácilmente en problemas desconocidos en los que solo se cambian los números o se mezcla información innecesaria.
- Los modelos de hoy también convierten en fragmentos los documentos, las fotos, los sonidos y los vídeos y los manejan juntos (multimodal). La IA que crea imágenes y vídeos usa sobre todo otro método, el modelo de difusión.
- Escribe, resume y explica bien, pero puede decir cosas falsas con seguridad. Con las fotos pasa lo mismo.
- Cuanto más le cuentas de tu situación, mejor es la respuesta.
- Es fácil que me dé la razón. Si necesitas una opinión sincera, di antes que puede llevarte la contraria.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| LLM (Large Language Model) | LLM (modelo de lenguaje de gran tamaño) | Programa que aprendió a «adivinar la palabra siguiente» con una cantidad enorme de texto |
| Generative AI | IA generativa | IA que crea texto o imágenes nuevos en lugar de elegir y clasificar |
| Pre-training | Preentrenamiento | Primera etapa de entrenamiento: repetir el adivinar la palabra siguiente con una cantidad enorme de texto para ajustar los números del modelo |
| Memory | Memoria | Función por la que el servicio apunta aparte lo que debe recordar y lo saca en una conversación nueva. El modelo no aprende nada nuevo |
| Token | Token | Fragmento pequeño en que el modelo corta el texto o las fotos para manejarlos |
| Context | Contexto | Todo el texto que hay en la conversación actual: mi pregunta, la conversación anterior, los archivos y el prompt del sistema |
| Embedding | Embedding (incrustación) | Fragmento convertido en un grupo de números que lleva su significado. Si el significado es parecido, los números también |
| Attention | Atención | Cálculo en el que los fragmentos se miran entre sí para ver cuáles son importantes |
| System Prompt | Prompt del sistema | Aviso que el servicio pone de antemano delante de mi pregunta |
| Tool Calling | Llamada a herramientas | Método en el que el modelo escribe una petición y el servicio ejecuta una herramienta, como una búsqueda, y devuelve el resultado. También se llama llamada a funciones (function calling) |
| Parameter | Parámetro | Los números que determinan el cálculo dentro del modelo, es decir, las perillas de ajuste. Su cantidad es el tamaño del modelo |
| B (Billion) | B (mil millones) | Mil millones. «70B» son 70 000 millones de parámetros |
| Training Data | Datos de entrenamiento | El texto que se le hizo leer al entrenarlo. Su cantidad se cuenta en tokens |
| Interpretability | Interpretabilidad | Campo de investigación que mira y explica el cálculo interno de un modelo |
| Reasoning Model | Modelo de razonamiento | Modelo que, antes de responder, va paso a paso escribiendo su proceso de pensamiento |
| Introspection | Introspección | Capacidad del modelo de darse cuenta de su propio estado interno y expresarlo |
| RLHF | RLHF (aprendizaje por refuerzo con comentarios humanos) | Entrenamiento que pule el modelo hacia las respuestas buenas elegidas por personas |
| Fine-tuning | Ajuste fino | Etapa que pule como interlocutor a un modelo que ya lo ha leído todo. RLHF es uno de sus métodos |
| Sycophancy | Adulación | Manía de inclinarse a darme la razón |
| ELIZA Effect | Efecto ELIZA | Fenómeno de sentir que un programa que habla con naturalidad tiene intenciones |
| Multimodal | Multimodal | Manejar a la vez varios tipos de información, como texto, fotos y sonidos |
| Diffusion Model | Modelo de difusión | Método que crea imágenes y vídeos quitando ruido poco a poco |
| Hallucination | Alucinación | Inventar con apariencia creíble contenido que no es cierto |
| Knowledge Cutoff | Fecha de corte del conocimiento | El último momento de los materiales con los que se entrenó el modelo |
| Context Window | Ventana de contexto | La cantidad de texto que el modelo puede consultar en una sola conversación |

<ChapterDone :chapter="1" />

Siguiente capítulo: [Capítulo 2. Por qué es tan comentada](02-why-it-matters.md)

---

[^tracing]: Anthropic, «Tracing the thoughts of a large language model», 2025-03-27. Trata el razonamiento Dallas→Texas→Austin, la escritura de poemas fijando antes la rima, y la diferencia entre el cálculo 36+59 y la explicación que da de sí misma. https://www.anthropic.com/research/tracing-thoughts-language-model (consultado el 2026-10-21)
[^biology]: Lindsey et al. (Anthropic), «On the Biology of a Large Language Model», 2025-03-27. "the model performs genuine two-step reasoning internally, which coexists alongside 'shortcut' reasoning" / "satisfying insight for about a quarter of the prompts we've tried". https://transformer-circuits.pub/2025/attribution-graphs/biology.html (consultado el 2026-10-21)
[^workspace]: Gurnee et al. (Anthropic), «Verbalizable Representations Form a Global Workspace in Language Models», 2026-07-06. Experimento en el que se sustituyó el concepto intermedio en 50 preguntas de hechos de dos pasos: "succeeds in 54% of trials on Haiku 4.5, 70% on Sonnet 4.5, and 70% on Opus 4.5". https://transformer-circuits.pub/2026/workspace/index.html (consultado el 2026-10-21)
[^r1]: DeepSeek-AI, «DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning», Nature 645, 633–638 (2025). "the reasoning abilities of LLMs can be incentivized through pure reinforcement learning". https://arxiv.org/abs/2501.12948 (consultado el 2026-10-21)
[^faithful]: Anthropic, «Reasoning models don't always say what they think», 2025-04-03. "On average across all the different hint types, Claude 3.7 Sonnet mentioned the hint 25% of the time, and DeepSeek R1 mentioned it 39% of the time." https://www.anthropic.com/research/reasoning-models-dont-say-think (consultado el 2026-10-21)
[^introspection]: Jack Lindsey (Anthropic), «Emergent Introspective Awareness in Large Language Models», 2025-10-29. El que mejor lo hizo, Claude Opus 4.1, acertó en aproximadamente el 20 %; "failures of introspection remain the norm". https://transformer-circuits.pub/2025/introspection/index.html (consultado el 2026-10-21)
[^gsm]: Mirzadeh et al. (Apple), «GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models», 2024-10-07. "Adding a single clause that seems relevant to the question causes significant performance drops (up to 65%)". https://arxiv.org/abs/2410.05229 (consultado el 2026-10-21)
[^illusion]: Shojaee et al. (Apple), «The Illusion of Thinking», 2025-06-07. https://arxiv.org/abs/2506.06941 / Réplica: A. Lawsen, «Comment on The Illusion of Thinking», 2025-06-10. https://arxiv.org/abs/2506.09250 (consultado el 2026-10-21)
[^rethinking]: Dellibarda Varela et al., «Rethinking the Illusion of Thinking», 2025-07-01. "LRMs still stumble when complexity rises moderately (around 8 disks)" / Si se plantean solo problemas que se pueden resolver, resuelve incluso a escala de "over 100 agent pairs". https://arxiv.org/abs/2507.01231 (consultado el 2026-10-21)
[^gpt3]: Brown et al. (OpenAI), «Language Models are Few-Shot Learners», 2020. "an autoregressive language model with 175 billion parameters". https://arxiv.org/abs/2005.14165 (consultado el 2026-10-21)
[^chinchilla]: Hoffmann et al., «Training Compute-Optimal Large Language Models», publicado en arXiv el 2022-03-29. "the model size and the number of training tokens should be scaled equally" / Chinchilla de 70B "uniformly and significantly outperforms Gopher (280B), GPT-3 (175B)". https://arxiv.org/abs/2203.15556 (consultado el 2026-10-21)
[^llama]: Meta, «Introducing Llama 3.1», 2024-07-23. Modelos de 8B, 70B y 405B, "training Llama 3.1 405B on over 15 trillion tokens". https://ai.meta.com/blog/meta-llama-3-1/ (consultado el 2026-10-21)
[^gpt4]: OpenAI, «GPT-4 Technical Report», 2023. "this report contains no further details about the architecture (including model size), hardware, training compute, dataset construction, training method, or similar." https://arxiv.org/abs/2303.08774 (consultado el 2026-10-21)
[^instructgpt]: Ouyang et al., «Training language models to follow instructions with human feedback», 2022. Se prefirieron las respuestas de un modelo de 1300 millones de parámetros pulido con comentarios humanos frente a las de GPT-3, de 175 000 millones de parámetros. https://arxiv.org/abs/2203.02155 (consultado el 2026-10-21)
[^eliza]: Joseph Weizenbaum, «ELIZA — a computer program for the study of natural language communication between man and machine», Communications of the ACM 9(1), enero de 1966. https://doi.org/10.1145/365153.365168 (datos bibliográficos consultados el 2026-10-21)
[^vit]: Dosovitskiy et al., «An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale», 2020. Método que corta una foto en casillas pequeñas y la procesa como texto. https://arxiv.org/abs/2010.11929 (consultado el 2026-10-21)
[^academy-genai]: Claude Academy, curso «AI capabilities and limitations», lección «What We Mean by AI». "Most AI in the world (spam filters, recommendations, fraud detection) isn't generative." / "Generative AI produces new content rather than classifying existing content." https://academy.claude.com/courses/ai-capabilities-and-limitations/what-we-mean-by-ai (consultado el 2026-10-26)
[^academy-knowledge]: Claude Academy, curso «AI capabilities and limitations», lección «Knowledge». "Limitation zone: rare, post-cutoff, niche, local, or contested topics." / "Pay attention to whether the AI signals uncertainty differently between the two, or whether both answers come with the same confident tone." https://academy.claude.com/courses/ai-capabilities-and-limitations/knowledge (consultado el 2026-10-26)
[^academy-memory]: Claude Academy, curso «AI capabilities and limitations», lección «Working Memory». "Silent truncation is the failure mode, and you won't always be warned." https://academy.claude.com/courses/ai-capabilities-and-limitations/working-memory (consultado el 2026-10-26)
[^academy-character]: Claude Academy, curso «AI capabilities and limitations», lección «How AI Gets Its Character». "Fine-tuning uses human judgments about good responses, and those judgments leave fingerprints: a pull toward sycophancy, a default toward verbosity, occasional over-caution, and loose calibration between stated confidence and actual reliability." / "I want you to genuinely disagree with me if you think I'm wrong." https://academy.claude.com/courses/ai-capabilities-and-limitations/how-ai-gets-its-character (consultado el 2026-10-26)
[^academy-pretrain]: Claude Academy, curso «AI capabilities and limitations», lección «How AI Gets Its Character». "Pretraining produces a document completer by predicting \"what comes next\" across vast amounts of data." https://academy.claude.com/courses/ai-capabilities-and-limitations/how-ai-gets-its-character (consultado el 2026-10-30)
[^extract]: Carlini et al., «Extracting Training Data from Large Language Models», publicado en arXiv el 2020-12-14 (USENIX Security 2021). "we are able to extract hundreds of verbatim text sequences from the model's training data. These extracted examples include (public) personally identifiable information (names, phone numbers, and email addresses)". https://arxiv.org/abs/2012.07805 (consultado el 2026-10-30)
[^memorization]: Carlini et al., «Quantifying Memorization Across Neural Language Models», publicado en arXiv el 2022-02-15. "Memorization significantly grows as we increase (1) the capacity of a model, (2) the number of times an example has been duplicated, and (3) the number of tokens of context used to prompt the model." https://arxiv.org/abs/2202.07646 (consultado el 2026-10-30)
[^memory]: Ayuda de OpenAI, «Memory FAQ». "Saved memories are stored separately from chat history." https://help.openai.com/en/articles/8590148 (consultado el 2026-10-23, `docs/reports/2026-10-23_ChatGPT-공식-자료.md`). La documentación para desarrolladores de Claude también describe la herramienta de memoria como "Store and retrieve information across conversations in files you control". https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview (consultado el 2026-10-30)
[^word2vec]: Mikolov et al., «Efficient Estimation of Word Representations in Vector Space», 2013. Representa las palabras como grupos de números (vectores) y "The quality of these representations is measured in a word similarity task." https://arxiv.org/abs/1301.3781 (consultado el 2026-10-30)
[^attention]: Vaswani et al. (Google), «Attention Is All You Need», 2017. El artículo que propuso por primera vez la estructura transformer. https://arxiv.org/abs/1706.03762 (consultado el 2026-10-30)
[^system-prompts]: Anthropic, «System prompts». "Claude's web interface (claude.ai) and mobile apps use a system prompt to provide up-to-date information, such as the current date, to Claude at the start of every conversation." https://platform.claude.com/docs/en/release-notes/system-prompts/overview (consultado el 2026-10-30)
[^tool-use]: Anthropic, «Tool use with Claude». "Claude determines when to call a tool based on the user's request and the tool's description." / "It calls a tool when the request maps to that tool's described capability and the answer isn't already in context." https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview (consultado el 2026-10-30)
[^tool-contract]: Anthropic, «How tool use works». "The model never runs anything on its own. It emits a structured request, your code (or Anthropic's servers) runs the operation, and the result flows back into the conversation." https://platform.claude.com/docs/en/agents-and-tools/tool-use/how-tool-use-works (consultado el 2026-10-30)
[^openai-tools]: OpenAI, «Function calling». El modelo "may decide that it needs data or functionality provided by a tool", la aplicación "Execute code on the application side with input from the tool call" y después "Make a second request to the model with the tool output". https://developers.openai.com/api/docs/guides/function-calling (consultado el 2026-10-30)
[^cite-check]: Ayuda de Claude 8525154. "When working with web search results, users should review Claude's cited sources." https://support.claude.com/en/articles/8525154 (consultado el 2026-10-26, `docs/reports/2026-10-26_Claude-공식-자료.md` E126)
[^search-ask]: Ayuda de Claude 10684626. "If you want to ensure that Claude uses web search, include \"Search the web\" or \"Use web search\" in your prompt to Claude." https://support.claude.com/en/articles/10684626 (consultado el 2026-10-26, mismo informe D10)
[^pdf]: Anthropic, «PDF support». "The system converts each page of the document into an image." / "The text from each page is extracted and provided alongside each page's image." https://platform.claude.com/docs/en/build-with-claude/pdf-support (consultado el 2026-10-30)
[^claude-files]: Ayuda de Claude 8241126. "For PDFs from 101 to 1000 pages, Claude processes text only and doesn't analyze visual elements." / En los documentos que no son PDF, "Claude extracts text only from these files." https://support.claude.com/en/articles/8241126 (consultado el 2026-10-26, mismo informe F10 y F12)
[^gemini-audio]: Google, «Audio understanding» (Gemini API). "32 tokens per second of audio (1 minute = 1,920 tokens)" / "Gemini understands non-speech sounds (birdsong, sirens, etc.)". https://ai.google.dev/gemini-api/docs/audio (consultado el 2026-10-30)
[^gemini-video]: Google, «Video understanding» (Gemini API). "the model samples the video at a rate of 1 frame per second (FPS)" / "fast action sequences might lose detail due to the 1 FPS sampling rate." https://ai.google.dev/gemini-api/docs/video-understanding (consultado el 2026-10-30)
[^ddpm]: Ho et al., «Denoising Diffusion Probabilistic Models», 2020. El artículo representativo de los modelos de difusión, que crean imágenes quitando el ruido por etapas. https://arxiv.org/abs/2006.11239 (consultado el 2026-10-21)
