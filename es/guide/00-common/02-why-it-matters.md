# Capítulo 2. Por qué se habla tanto de esto

> **En una línea**: porque la IA, que antes solo manejaban los expertos, ahora la puede dirigir cualquiera con las palabras de todos los días.

## Parece que apareció de golpe

La investigación en IA lleva décadas. El punto de inflexión que lleva a los LLM de hoy es un solo artículo científico.
Es «Attention Is All You Need», que publicó en 2017 un equipo de investigación de Google.[^1]
Ese artículo presentó una estructura llamada **transformer (Transformer)**. Gracias a ella se pudo entrenar a la IA con muchísimos textos de forma eficiente.
El método anterior tenía que leer la frase palabra por palabra, desde el principio. El transformer mira **a la vez** cómo se relacionan entre sí las palabras de la frase. Por eso se puede repartir el entrenamiento entre muchos ordenadores y hacerlo mucho más rápido.
La mayoría de los LLM que se usan hoy se basan en esta estructura. En el vídeo con dibujos de «Más en vídeo», más abajo, puedes ver cómo funciona un transformer por dentro.

Pero la gente corriente empezó a notar la IA en primera persona cinco años después.

<Quiz id="ch2-origin" />

## Noviembre de 2022: ChatGPT

OpenAI abrió ChatGPT de forma gratuita el 30 de noviembre de 2022.[^2]
No hacía falta instalar nada ni recibir formación. Bastaba con entrar en el sitio web y hablarle como en una aplicación de mensajería.

La reacción fue enorme. Según un análisis del banco de inversión UBS, se estima que ChatGPT alcanzó unos 100.000.000 de usuarios mensuales
en enero de 2023, unos dos meses después de abrirse al público. Se consideró la aplicación para consumidores
que más rápido había crecido en la historia hasta entonces.[^3]

Después, varias empresas, como Claude de Anthropic y Gemini de Google, lanzaron servicios parecidos y empezó la competencia.

![2017, artículo del transformer → noviembre de 2022, ChatGPT abre gratis → enero de 2023, unos 100.000.000 de usuarios al mes (estimado) → después, empieza la competencia con Claude, Gemini y otros. Pasaron 5 años desde el punto de inflexión técnico hasta que lo usó todo el mundo](../../../guide/00-common/assets/ch2-timeline.svg)

<Quiz id="ch2-chatgpt" />

## Qué ha cambiado tanto

### 1. Puedes encargarle trabajo al ordenador con tus palabras de siempre

Antes, para que un ordenador hiciera algo había que aprender un lenguaje de programación o memorizar menús y botones fijos.
Con un LLM basta con decirlo así:

```
De esta acta de reunión, haz una tabla con quién se comprometió a hacer qué y para cuándo.
```

### 2. No hace una sola cosa, sino casi cualquier tarea con textos

Un traductor solo traducía y un corrector solo corregía la ortografía.
Un solo LLM puede traducir, resumir, redactar, responder preguntas, hacer lluvia de ideas y escribir código.

### 3. Coste y acceso

La mayoría de los servicios se pueden empezar a usar gratis. También se usan desde una aplicación del móvil.
Ahora cualquiera puede probar algo parecido a tener un asistente o un profesor particular.

<Quiz id="ch2-change" />

## Las polémicas que han surgido

Si se habla tanto de esto, no es solo por las esperanzas. También hay preocupaciones. Conocer las dos te ayuda a verlo con equilibrio.

| Polémica | Contenido |
|---|---|
| Empleo | Temor a que trabajos como escribir, traducir o atender consultas los reemplace la IA o cambien mucho |
| Exactitud | El problema de que, por las alucinaciones que vimos en el [capítulo 1](01-what-is-llm.md), se difundan datos falsos |
| Derechos de autor | Los derechos sobre los textos e imágenes con los que aprendió la IA, y sobre lo que ella crea |
| Datos personales | La preocupación por cómo se guarda y se usa lo que escribes en la conversación |
| Educación | Que los estudiantes le dejen los deberes a la IA |

Esta guía no hace como si estas preocupaciones no existieran. En el [capítulo 9, «Usarla con seguridad»](09-safety.md), vemos cómo tener cuidado en la práctica.

<Quiz id="ch2-issues" />

## Más en vídeo

Todos los vídeos están en coreano. Si los ves desde el primero, irás de lo fácil a lo difícil.

**[[챗GPT] 이보다 쉬운 설명은 없다 '챗GPT'](https://www.youtube.com/watch?v=i1VqqX4iAZ0)** · 공부왕찐천재 홍진경 · El divulgador científico 안될과학·궤도 explica con palabras sencillas qué es ChatGPT y por qué se habla tanto de él. También incluye una comparación: para llegar a 1.000.000 de usuarios, Netflix tardó 3,5 años, Instagram 2,5 meses y ChatGPT 5 días (9 minutos, vídeo de 2023)

<YouTube id="i1VqqX4iAZ0" title="[챗GPT] 이보다 쉬운 설명은 없다 '챗GPT'" />

**[트랜스포머, ChatGPT가 트랜스포머로 만들어졌죠. - DL5](https://www.youtube.com/watch?v=g38aoGttLhI)** · 3Blue1Brown 한국어 · Es el doblaje oficial al coreano, que muestra con dibujos cómo fluye el texto dentro de un transformer. **Con ver los primeros 7 minutos basta.** Explica cómo se predice la palabra siguiente, cómo se corta el texto en trozos y cómo las palabras de significado parecido pasan a ser números cercanos. Después aparecen matrices y fórmulas (27 minutos)

<YouTube id="g38aoGttLhI" title="트랜스포머, ChatGPT가 트랜스포머로 만들어졌죠. - DL5" />

**[그 이름도 유명한 어텐션, 이 영상만 보면 이해 완료! - DL6](https://www.youtube.com/watch?v=_Z3rXeJahMs)** · 3Blue1Brown 한국어 · Es el siguiente capítulo del vídeo anterior y trata de la «atención», con la que las palabras se fijan unas en otras. Es algo más difícil. **Los primeros 5 minutos** tienen el ejemplo clave: si delante de «torre» aparece «Eiffel», el significado se desplaza hacia la torre Eiffel (26 minutos)

<YouTube id="_Z3rXeJahMs" title="그 이름도 유명한 어텐션, 이 영상만 보면 이해 완료! - DL6" />

## Pruébalo tú

Pregúntale al LLM sobre esta misma tecnología. No te creas la respuesta sin más. Comprueba si las fechas y los números son correctos.

```
Dime la fecha en que se publicó ChatGPT por primera vez y tres empresas que lanzaron servicios parecidos después.
Dime también la fuente de cada dato.
```

Compara la fecha que te dé el LLM con las notas al pie de este capítulo. Puede que acierte o puede que no.
Hazte estas preguntas: ¿la fecha coincide con la nota al pie? ¿La fuente que me da existe de verdad?
**El «hábito de comprobar» es el hábito más importante de toda esta guía.**

## Resumen

- El artículo del transformer de 2017 fue el punto de inflexión técnico, y la apertura de ChatGPT en 2022 fue el punto de inflexión de su popularización.
- El cambio clave es que «con tus palabras de siempre puedes encargarle al ordenador casi cualquier tarea con textos».
- Conviene conocer también las polémicas: empleo, exactitud, derechos de autor y datos personales.

<ChapterDone :chapter="2" />

Siguiente capítulo: [Capítulo 3. Por qué conviene aprender](03-why-learn.md)

---

[^1]: Vaswani et al., «Attention Is All You Need», publicado en arXiv (un sitio público donde se suben los artículos antes de que los revisen) en junio de 2017. https://arxiv.org/abs/1706.03762 (consultado el 2026-10-20)
[^2]: OpenAI, «Introducing ChatGPT», 2022-11-30. https://openai.com/index/chatgpt/ (consultado el 2026-10-20)
[^3]: Reuters, «ChatGPT sets record for fastest-growing user base - analyst note», 2023-02-01. https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-note-2023-02-01/ (consultado el 2026-10-20)
