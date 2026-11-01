// es text for level-expert (generated from the Korean bank; same ids and answers).
import type { QuestionText } from '../types.ts'

export const LEVEL_EXPERT: Record<string, QuestionText> = {
  "expert-s1-scaled-dot-product": {
    prompt: "En scaled dot-product attention, ¿qué motivo da el artículo original para dividir QK^T entre √d_k?",
    choices: [
      "Porque, si d_k es grande, los productos escalares crecen y el softmax se empuja a una zona donde el gradiente es muy pequeño",
      "Para convertir los productos escalares en probabilidades entre 0 y 1 y usarlos como pesos sin softmax",
      "Para que, aunque aumente el número de cabezas, la dimensión de salida de cada cabeza coincida con d_model",
      "Para bajar de antemano un nivel la precisión del cálculo y que el resultado de la multiplicación de matrices en la GPU no se desborde",
    ],
    explain: "El artículo original supone que, si d_k es grande, los productos escalares crecen y el softmax se empuja a una zona donde el gradiente es extremadamente pequeño (los autores escriben «suponemos»), y explica que se reduce con 1/√d_k para evitarlo.",
  },
  "expert-s1-multi-head": {
    prompt: "¿Qué se acerca más a la explicación del artículo original sobre por qué se usa multi-head attention en vez de single-head?",
    choices: [
      "Hacer que cada cabeza procese tokens distintos para reducir el cálculo en proporción al número de cabezas",
      "Consultar a la vez, en varias posiciones, la información de distintos subespacios (subspace)",
      "Dar redundancia para que, si una cabeza falla, otra cabeza dé la salida en su lugar",
      "Guardar la información de posición repartida por cabezas para eliminar el positional encoding",
    ],
    explain: "El artículo original explica que multi-head attention permite consultar al mismo tiempo, en distintas posiciones, la información de distintos subespacios de representación.",
  },
  "expert-s1-positional-encoding": {
    prompt: "¿Cuál es la razón de fondo por la que a un Transformer hay que sumarle un positional encoding?",
    choices: [
      "Para representar con un número de posición las palabras que no están en el vocabulario del modelo",
      "Para fijar el criterio con que se corta una frase larga en trozos de longitud constante",
      "Porque, sin estructura recurrente ni convolucional, tal cual no conoce el orden de los tokens",
      "Para normalizar el tamaño de los vectores de embedding y estabilizar el entrenamiento",
    ],
    explain: "El artículo original dice que el Transformer no tiene ni recurrence ni convolution, así que hay que inyectar aparte la información de posición relativa y absoluta de los tokens.",
  },
  "expert-s1-causal-mask": {
    prompt: "¿Para qué se enmascaran (masking) las posiciones futuras en la self-attention del decoder?",
    choices: [
      "Para impedir que los tokens de relleno (padding) reciban peso de attention",
      "Para reducir la influencia de los tokens lejanos y evitar de antemano el sobreajuste que aparece en contextos largos",
      "Para hacer dispersa la matriz de attention y ahorrar memoria",
      "Para conservar la propiedad autorregresiva de predecir el token siguiente solo con los tokens anteriores",
    ],
    explain: "El artículo original explica que en el decoder se impide el flujo de información hacia la izquierda (que los tokens posteriores influyan en los anteriores) para conservar la propiedad auto-regressive.",
  },
  "expert-s1-parallelism": {
    prompt: "¿Qué ventaja de la capa de self-attention frente a una capa RNN señaló el artículo original?",
    choices: [
      "El cálculo por capa es lineal en la longitud de la secuencia, así que siempre es más barato con entradas largas",
      "Conecta todas las posiciones con operaciones secuenciales constantes, así que se paraleliza fácil",
      "Lleva la información de orden dentro de la estructura, así que no necesita positional encoding",
      "Reutiliza el estado oculto y mantiene constante el uso de memoria durante la inferencia",
    ],
    explain: "La self-attention necesita O(1) operaciones secuenciales y por eso es fácil de paralelizar, pero su cálculo por capa es O(n²·d), proporcional al cuadrado de la longitud de la secuencia.",
  },
  "expert-s1-flashattention": {
    prompt: "En secuencias largas, la attention es lenta y gasta mucha memoria. ¿Qué enfoque adoptó FlashAttention?",
    choices: [
      "Aproxima la attention entre tokens lejanos y reduce el cálculo a lineal",
      "Reduce el número de cabezas de attention para hacer más pequeños los tensores de key y value",
      "Comprime la entrada larga en tokens de resumen y luego calcula la attention",
      "Calcula una exact attention que, con tiling, reduce las entradas y salidas entre HBM y SRAM",
    ],
    explain: "FlashAttention es un algoritmo IO-aware que calcula la attention exacta, no una aproximación, y que con tiling reduce las lecturas y escrituras entre la HBM de la GPU y la SRAM del chip.",
  },
  "expert-s1-kv-cache": {
    prompt: "En la generación autorregresiva, ¿qué guarda la KV cache y cuál es su efecto?",
    choices: [
      "Guarda los key y value de los tokens ya procesados en cada capa y evita volver a calcularlos",
      "Guarda la distribución de probabilidad de salida del paso anterior para impedir que se repita el mismo token",
      "Guarda pares de preguntas frecuentes y respuestas para contestar enseguida a la misma pregunta",
      "Sube parte de los pesos del modelo a la caché de la GPU para reducir el tiempo de carga",
    ],
    explain: "La KV cache guarda por capas los pares key-value de los tokens ya procesados en las capas de attention y los reutiliza para calcular el token siguiente, con lo que se elimina el recálculo.",
  },
  "expert-s1-kv-cache-memory": {
    prompt: "En un servidor de inferencia con KV cache, a medida que aumentan las peticiones simultáneas y la longitud del contexto, falta memoria de GPU. ¿Cuál es la causa correcta?",
    choices: [
      "La KV cache solo crece durante el entrenamiento y su tamaño es fijo durante la inferencia",
      "El tamaño de la caché no depende de la longitud del contexto y solo es proporcional al tamaño del vocabulario",
      "Con cada token nuevo se añaden key y value, y la caché crece en proporción a la longitud",
      "Porque la KV cache copia en cada paso todos los pesos del modelo",
    ],
    explain: "Los tensores de la KV cache tienen la forma batch, cabezas, longitud de secuencia y dimensión de cabeza, y como se siguen añadiendo los key y value de los tokens nuevos, la memoria crece en proporción a la longitud de la secuencia y al batch.",
  },
  "expert-s1-multi-query": {
    prompt: "¿Cuál señaló el artículo de multi-query attention como el principal cuello de botella del incremental decoding y cuál es su solución?",
    choices: [
      "Falta de cálculo (FLOPs): aumentar el número de cabezas para subir el paralelismo",
      "Tamaño grande del vocabulario: repartir en jerarquías el cálculo del softmax de salida",
      "Ancho de banda de memoria: todas las cabezas comparten un único juego de key y value",
      "Cálculo del positional encoding: preparar de antemano en una tabla los valores de la función seno",
    ],
    explain: "El cuello de botella es el ancho de banda de memoria, por la lectura repetida de los grandes tensores de key y value durante la decodificación, y si todas las cabezas comparten key y value los tensores se hacen pequeños y la decodificación va más rápido.",
  },
  "expert-s1-grouped-query": {
    prompt: "¿Qué explicación sobre grouped-query attention (GQA) es correcta?",
    choices: [
      "Usa más de una y menos cabezas de key y value que de query, equilibrando calidad y velocidad",
      "Es un método que une las cabezas de query en una sola y hace el cálculo de attention una única vez",
      "Agrupa los tokens en unos cuantos grupos y calcula la attention solo dentro de cada grupo",
      "Es una técnica de servicio que agrupa en un batch las query de varios usuarios para aumentar el rendimiento",
    ],
    explain: "GQA es un punto intermedio entre multi-head y multi-query: usa menos cabezas de key y value que de query, pero más de una, y así obtiene una calidad cercana a la de MHA y una velocidad cercana a la de MQA.",
  },
  "expert-s1-rope": {
    prompt: "¿Qué es correcto sobre RoPE (rotary position embedding)?",
    choices: [
      "Es un método que simplemente suma un vector de posición entrenable al embedding de cada token de entrada",
      "Es un método que asigna una cabeza de attention distinta a cada posición",
      "Es un método que refleja la información de posición solo en el softmax de la capa de salida del modelo",
      "Codifica la posición absoluta con una matriz de rotación y la attention refleja la posición relativa",
    ],
    explain: "RoPE codifica la posición absoluta con una matriz de rotación y hace que la dependencia de la posición relativa entre de forma natural en el cálculo de la self-attention.",
  },
  "expert-s1-mixture-of-experts": {
    prompt: "¿Por qué en un modelo MoE como Switch Transformer el cálculo por token se mantiene casi constante aunque los parámetros aumenten mucho?",
    choices: [
      "Porque promedia los pesos de los expertos y calcula con ellos fusionados en una sola capa",
      "Porque el router usa solo una parte de los expertos en cada token (en Switch, uno)",
      "Porque en la inferencia quita las capas de expertos y usa solo las capas compartidas",
      "Porque encarga a cada experto una frase distinta y así reduce el tamaño del batch",
    ],
    explain: "MoE activa solo una parte de los parámetros distinta para cada entrada, así que el cálculo es constante aunque los parámetros totales sean muchos, y Switch Transformer enruta cada token a un solo experto.",
  },
  "expert-s2-kaplan-power-law": {
    prompt: "¿Cuál es la observación central del artículo de scaling laws de Kaplan et al. (2020)?",
    choices: [
      "La pérdida sigue una ley de potencias con el tamaño, los datos y el cálculo",
      "La pérdida cambia de manera especialmente sensible con la proporción entre profundidad y anchura de las capas",
      "Cuando el modelo supera cierto tamaño, la pérdida deja de bajar",
      "Cuanto más pequeño es el modelo, con más eficiencia aprende de cada dato",
    ],
    explain: "La pérdida sigue una ley de potencias en un amplio rango respecto al tamaño del modelo, el tamaño del conjunto de datos y el cálculo de entrenamiento, y los detalles de estructura, como la anchura y la profundidad, influían poco.",
  },
  "expert-s2-kaplan-compute-optimal": {
    prompt: "¿Cuál es la estrategia de entrenamiento compute-optimal que presentaron Kaplan et al. (2020) para un presupuesto de cálculo fijo?",
    choices: [
      "Entrenar un modelo pequeño con muchísimos datos hasta que converja",
      "Entrenar un modelo enorme con relativamente pocos datos y parar antes de que converja",
      "Hacer crecer siempre en la misma proporción el tamaño del modelo y el número de tokens de entrenamiento",
      "Repartir la mitad del presupuesto de cálculo al preentrenamiento y la otra mitad al ajuste fino",
    ],
    explain: "Kaplan et al. concluyeron que, como los modelos grandes son más eficientes en muestras, es eficiente en cálculo entrenar un modelo muy grande con datos moderados y parar mucho antes de la convergencia.",
  },
  "expert-s2-chinchilla": {
    prompt: "¿Cuál es la conclusión correcta del artículo de Chinchilla (Hoffmann et al., 2022)?",
    choices: [
      "Los grandes modelos de entonces tenían menos parámetros que datos y su rendimiento estaba estancado",
      "Cuando crece el presupuesto de cálculo, es mejor dejar los datos como están y hacer crecer solo el modelo",
      "En el entrenamiento compute-optimal hay que escalar en la misma proporción el modelo y los tokens de entrenamiento",
      "El número de tokens de entrenamiento influye poco en el rendimiento, y es más importante elegir la estructura del modelo",
    ],
    explain: "El artículo de Chinchilla mostró que los grandes modelos de entonces estaban poco entrenados (undertrained) en relación con los datos y que, cada vez que se duplica el tamaño del modelo, también hay que duplicar los tokens de entrenamiento.",
  },
  "expert-s2-chinchilla-inference": {
    prompt: "Vas a crear un modelo con el mismo presupuesto de cálculo de entrenamiento y, tras ponerlo en servicio, también importa el coste de inferencia. ¿Qué juicio, a la luz de los resultados de Chinchilla, es correcto?",
    choices: [
      "Cuantos más parámetros, más rápida es también la inferencia, así que se elige el modelo mayor posible dentro del mismo presupuesto",
      "La cantidad de datos no tiene que ver con el coste de inferencia, así que solo se considera el tamaño del modelo",
      "El coste de inferencia no depende de la forma de entrenar, así que basta con comparar la calidad",
      "Entrenar un modelo más pequeño con más tokens, para conservar la calidad y abaratar la inferencia posterior",
    ],
    explain: "Chinchilla, de 70B, entrenado con un cálculo igual al de Gopher (280B) y con unas 4 veces más datos, tuvo mejor rendimiento, y como el modelo es más pequeño también eran menores los costes de ajuste fino y de inferencia.",
  },
  "expert-s2-bpe": {
    prompt: "¿Cuál es el motivo principal para usar una tokenización por subpalabras (subword) como BPE?",
    choices: [
      "Dividir la frase con exactitud en palabras completas para facilitar mucho el análisis gramatical",
      "Representar con subpalabras las palabras raras y las que no están en el vocabulario",
      "Ajustar todos los idiomas a un token por letra para fijar la longitud",
      "Separar las palabras homónimas para que cada token tenga un solo significado",
    ],
    explain: "Sennrich et al. propusieron codificar las palabras raras y las que no están en el vocabulario como una secuencia de unidades subword, porque con un vocabulario fijo es difícil resolver el problema del open-vocabulary.",
  },
  "expert-s2-instructgpt-steps": {
    prompt: "¿Cuál es el orden correcto del proceso de alineamiento de InstructGPT?",
    choices: [
      "Entrenar el modelo de recompensa → SFT con datos de demostración → recoger clasificaciones humanas → aprendizaje por refuerzo",
      "Recoger clasificaciones humanas → aprendizaje por refuerzo → SFT con datos de demostración",
      "Aprendizaje por refuerzo → entrenar el modelo de recompensa → SFT con datos de demostración",
      "SFT con datos de demostración → recoger clasificaciones de las salidas → aprendizaje por refuerzo (RLHF)",
    ],
    explain: "InstructGPT hizo un ajuste fino supervisado de GPT-3 con las demostraciones de los etiquetadores, recogió después clasificaciones de las salidas del modelo y, con la recompensa entrenada con ellas, hizo aprendizaje por refuerzo.",
  },
  "expert-s2-dpo": {
    prompt: "Al alinear con datos de preferencia, ¿cuál es el argumento correcto para elegir DPO en lugar de RLHF basado en PPO?",
    choices: [
      "Aprende directamente con pares de preferencia, sin modelo de recompensa ni etapa de RL",
      "Se puede alinear solo con frases de respuesta correcta, sin datos de preferencia humana",
      "Durante el entrenamiento se muestrean respuestas del modelo en gran cantidad para calcular la recompensa",
      "Se hace más grande el modelo de recompensa para reducir la inestabilidad de PPO",
    ],
    explain: "DPO reparametriza el modelo de recompensa y obtiene directamente la política óptima, por lo que se entrena con una sencilla pérdida de clasificación, no necesita muestreo durante el entrenamiento y es estable.",
  },
  "expert-s2-lora": {
    prompt: "¿Qué es correcto sobre LoRA?",
    choices: [
      "Es un método que actualiza todos los pesos pero mantiene baja la tasa de aprendizaje",
      "Como añade capas adapter, la latencia de inferencia aumenta necesariamente cada vez",
      "Congela los pesos preentrenados, entrena solo matrices de rango bajo y no añade latencia",
      "Es una técnica que pasa los pesos del modelo a 4 bits para reducir la memoria de entrenamiento",
    ],
    explain: "LoRA congela los pesos preentrenados y añade a cada capa matrices de rank decomposition entrenables, y, a diferencia de los adapter, no aumenta la latencia de inferencia.",
  },
  "expert-s2-qlora": {
    prompt: "Hay que ajustar finamente un modelo grande con una sola GPU. ¿Cuál es el método de QLoRA?",
    choices: [
      "Pasar todos los pesos a 4 bits y volver a entrenar todos los pesos",
      "En vez de repartir entre varias GPU, dejar solo algunas capas, borrar todas las demás y entrenar",
      "Pasar los gradientes a LoRA a través de un modelo cuantizado a 4 bits y congelado",
      "Reducir los datos de entrenamiento a la cuarta parte para bajar el uso de memoria",
    ],
    explain: "QLoRA hace retropropagación hacia los adapter de LoRA a través de un modelo cuantizado a 4 bits y congelado, lo que permitió ajustar finamente incluso un modelo de 65B en una sola GPU de 48 GB.",
  },
  "expert-s2-int8-outliers": {
    prompt: "¿Cómo evitó LLM.int8() la pérdida de calidad en la inferencia a 8 bits de modelos grandes?",
    choices: [
      "Calcula en 16 bits solo las dimensiones outlier de valores grandes, y el resto en 8 bits",
      "Pasa todas las capas a 8 bits y vuelve a entrenar solo la última capa",
      "Predice con un modelo de corrección aparte el error producido por la conversión a 8 bits del modelo",
      "Deja la capa de attention como está y pasa a 8 bits solo la capa de embedding",
    ],
    explain: "LLM.int8() calcula aparte en 16 bits las dimensiones de características outlier que aparecen en los modelos grandes, con una descomposición de precisión mixta, y procesó en 8 bits más del 99,9 % de los valores sin pérdida de rendimiento.",
  },
  "expert-s2-distillation": {
    prompt: "En la knowledge distillation de Hinton et al. (2015), ¿cuál es el objetivo de subir la softmax temperature?",
    choices: [
      "Hacer más nítidas las etiquetas correctas para acelerar el aprendizaje del estudiante",
      "Reducir el número de tokens de salida del modelo profesor para bajar el coste de inferencia",
      "Hacer que, incluso después de desplegado, el modelo estudiante siga respondiendo de forma variada con una temperature alta",
      "Suavizar la distribución de probabilidad del profesor para entrenar al estudiante con soft targets",
    ],
    explain: "Se sube la softmax temperature del modelo profesor para producir soft targets suaves, el estudiante se entrena para ajustarse a ellos con la misma temperature, y una vez terminado el entrenamiento el estudiante se usa con temperature 1.",
  },
  "expert-s2-fine-tune-evals": {
    prompt: "Vas a decidir cuántos datos reunir para el ajuste fino de seguimiento de instrucciones. ¿Qué mostró el estudio LIMA (Zhou et al., 2023)?",
    choices: [
      "Si los datos no pasan de varias decenas de miles, el ajuste fino supervisado casi no tiene efecto alguno, nunca",
      "Bastó un ajuste fino supervisado de solo 1.000 ejemplos elegidos con cuidado para tener calidad alta",
      "Para que siga instrucciones, hace falta sí o sí RLHF o modelado de preferencias humanas",
      "La mayor parte del conocimiento del modelo se aprende de nuevo en la etapa de ajuste fino",
    ],
    explain: "LIMA hizo un ajuste fino supervisado de un LLaMA de 65B solo con 1.000 prompts y respuestas elegidos con cuidado, sin aprendizaje por refuerzo ni modelado de preferencias, y mostró una calidad alta; los autores concluyeron que el conocimiento se obtiene casi todo en el preentrenamiento y que los datos de ajuste fino de instrucciones pueden ser pocos.",
  },
  "expert-s3-rag-memory": {
    prompt: "¿Cuáles son los dos tipos de memoria (memory) que combinó RAG (Lewis et al., 2020)?",
    choices: [
      "La memoria parametric de los pesos y el índice vectorial de búsqueda (non-parametric)",
      "La memoria de conversación a corto plazo y la memoria de perfil de cada usuario a largo plazo",
      "La memoria de los datos de preentrenamiento y la de los datos de ajuste fino",
      "La memoria contenida en el embedding de tokens y la contenida en el positional encoding",
    ],
    explain: "RAG combina los pesos de un modelo seq2seq preentrenado (parametric memory) y un índice vectorial denso de Wikipedia al que se accede con un recuperador neuronal (non-parametric memory).",
  },
  "expert-s3-rag-vs-finetune": {
    prompt: "La normativa interna cambia a menudo y cada respuesta debe mostrar el documento que la respalda. ¿Por qué es mejor RAG que el ajuste fino?",
    choices: [
      "Porque, al añadir la búsqueda, los pesos del modelo se actualizan solos a la nueva normativa",
      "Se actualiza el conocimiento cambiando solo los documentos del índice y se cita el documento hallado",
      "Porque con RAG la alucinación desaparece de raíz y no hace falta verificar las respuestas aparte",
      "Porque, al faltar el paso de búsqueda, la latencia de respuesta es menor que la de un modelo con ajuste fino",
    ],
    explain: "El artículo de RAG explica que actualizar el conocimiento y mostrar la procedencia (provenance) son problemas sin resolver de los modelos que dependen solo de los pesos, y que una memoria externa non-parametric ayuda con ello.",
  },
  "expert-s3-contextual-chunk": {
    prompt: "Un chunk como «las ventas subieron un 3 %» no contiene de qué empresa ni de qué trimestre habla, y la búsqueda falla. ¿Cuál es la solución de Contextual Retrieval de Anthropic?",
    choices: [
      "Agrandar el chunk hasta el documento entero e indexarlo con un único vector por documento",
      "Aumentar la dimensión del embedding para recoger con más precisión la información numérica de los chunks",
      "Añadir a cada chunk un texto corto con su contexto en el documento e indexarlo con embeddings y BM25",
      "Quitar del índice los chunks que llevan números para evitar de antemano la confusión",
    ],
    explain: "Contextual Retrieval pone delante de cada chunk un texto corto que explica en qué contexto del documento original está, y después lo convierte en embedding y crea el índice BM25.",
  },
  "expert-s3-hybrid-search": {
    prompt: "Cuando un usuario busca con un código de error como «TS-999», la búsqueda vectorial devuelve documentos que no tienen nada que ver. ¿Cuál es la medida más adecuada?",
    choices: [
      "Cambiar solo el modelo de embedding por uno más grande y dejar la búsqueda vectorial como está",
      "Indicar a los usuarios que busquen cambiando el código de error por una descripción en lenguaje natural normal",
      "Aumentar mucho el top-k esperando que los documentos relacionados queden incluidos por casualidad",
      "Usar una búsqueda híbrida (hybrid) con una búsqueda por palabras clave como BM25 para la coincidencia exacta",
    ],
    explain: "El embedding puede pasar por alto identificadores exactos como un código de error, y BM25 capta la coincidencia de cadenas, así que usando ambos se reducen los fallos de búsqueda en consultas técnicas.",
  },
  "expert-s3-rrf": {
    prompt: "Se combinan con RRF (reciprocal rank fusion) los resultados de la búsqueda por palabras clave y de la búsqueda vectorial. ¿Qué explicación es correcta?",
    choices: [
      "Hay que normalizar las puntuaciones de los dos buscadores a la misma escala y luego sumarlas",
      "Solo con la posición se suma 1/(k+posición), así que no hace falta normalizar nada",
      "Se dejan solo los documentos que salen en las dos listas y se descartan los demás",
      "Se da prioridad a la puntuación vectorial y la búsqueda por palabras clave solo cuenta en caso de empate",
    ],
    explain: "RRF usa solo la posición en cada lista de resultados y suma 1/(k+rank), así que no hace falta igualar las puntuaciones de buscadores distintos; en Elasticsearch el valor por defecto de k es 60.",
  },
  "expert-s3-cross-encoder": {
    prompt: "¿Cuál es el motivo y la forma de usar un cross-encoder en el re-ranking?",
    choices: [
      "Como calcula de antemano los embeddings de los documentos, es el más rápido para buscar en todo el corpus",
      "Puntúa la calidad mirando solo el documento, sin la pregunta, y filtra los de baja calidad",
      "Su exactitud es menor que la de un bi-encoder, pero es barato y por eso se usa en la primera búsqueda",
      "Mete juntos el par pregunta-documento, es más exacto pero lento, y reordena los candidatos iniciales",
    ],
    explain: "El cross-encoder da la puntuación metiendo juntas las dos frases, así que es más exacto que el bi-encoder, pero no sirve para gran escala; por eso se busca primero los candidatos con un bi-encoder y se usa para reordenarlos.",
  },
  "expert-s3-rerank-tradeoff": {
    prompt: "Vas a aumentar mucho el número de candidatos de la primera búsqueda que reordenará el reranker. ¿Cuál es el trade-off esperado?",
    choices: [
      "La exactitud puede subir, pero también aumentan la latencia y el coste",
      "Mejoran a la vez la exactitud y el tiempo de latencia",
      "La latencia sigue igual y solo baja la exactitud",
      "El número de candidatos no influye en absoluto en el resultado final del reranker",
    ],
    explain: "El texto de Anthropic dice que el reranking añade latencia, y que existe un trade-off inherente: reordenar más chunks favorece la exactitud y reordenar menos favorece la velocidad y el coste.",
  },
  "expert-s3-small-knowledge-base": {
    prompt: "La base de conocimiento tiene unas 300 páginas (menos de 200.000 tokens). ¿Qué enfoque recomienda el texto de Contextual Retrieval de Anthropic?",
    choices: [
      "Montar un RAG troceado por frases, porque cuanto más pequeños los chunks, mejor",
      "Tener siempre una base de datos vectorial y un reranker, sea cual sea el tamaño",
      "Meter todo en el prompt sin RAG y reducir latencia y coste con prompt caching",
      "Ajustar finamente el modelo con todos los documentos y dejar vacío el prompt",
    ],
    explain: "Si son menos de 200.000 tokens (unas 500 páginas), se puede meter toda la base de conocimiento en el prompt sin RAG, y con prompt caching se puede hacer más rápido y barato, según indica.",
  },
  "expert-s3-lost-in-the-middle": {
    prompt: "Pegas varios resultados de búsqueda seguidos en un contexto largo. A la luz del estudio «Lost in the Middle», ¿cuál es el punto a vigilar?",
    choices: [
      "El modelo aprovecha siempre por igual la información de todas las posiciones, sea cual sea la longitud del contexto, para responder",
      "El rendimiento sale peor cuando la información relevante está al final del todo",
      "Si la información relevante está en medio del contexto, el rendimiento cae frente a cuando está al principio o al final",
      "Los resultados de búsqueda deben meterse en orden aleatorio para tener el mejor rendimiento",
    ],
    explain: "El rendimiento es más alto cuando la información relevante está al principio o al final de la entrada y cae mucho cuando está en el medio, así que ni siquiera los modelos de contexto largo aprovechaban toda la entrada por igual.",
  },
  "expert-s3-beir-zero-shot": {
    prompt: "Aplicas directamente un recuperador a un dominio nuevo con el que nunca se entrenó (documentos internos). ¿Qué sugiere el benchmark BEIR?",
    choices: [
      "BM25 es una línea base robusta y los recuperadores dense pueden ser débiles fuera de su dominio",
      "Los recuperadores dense superan siempre a BM25 en cualquier dominio",
      "El re-ranking apenas cuesta cálculo, así que conviene tenerlo siempre activado en cualquier caso",
      "Para evaluar un recuperador basta con datos del dominio con el que se entrenó",
    ],
    explain: "En la evaluación zero-shot de BEIR, BM25 fue una línea base robusta, el re-ranking tuvo el mejor rendimiento pero un gran coste de cálculo, y los recuperadores dense mostraron debilidad para generalizar.",
  },
  "expert-s3-embedding-normalize": {
    prompt: "Redujiste la dimensión de un embedding de OpenAI cortándolo tú mismo, en vez de usar el parámetro dimensions. ¿Qué hay que hacer a continuación?",
    choices: [
      "Los vectores cortados no pueden usar la similitud cosine, así que se cambia a la distancia euclídea",
      "Compararlos con el dot product tal cual, sin ningún tratamiento, da el mismo resultado",
      "Rellenar con ceros las dimensiones cortadas para volver a la longitud original y luego comparar",
      "Volver a normalizar el vector a longitud 1 y solo entonces calcular la similitud, sin más",
    ],
    explain: "Los embeddings de OpenAI están normalizados a longitud 1, así que el dot product es directamente la similitud cosine, pero si los recortas tú mismo hay que volver a normalizarlos.",
  },
  "expert-s3-ragas-faithfulness": {
    prompt: "Quieres detectar los casos en que una respuesta de RAG se inventó cosas que no están en el contexto recuperado. ¿A cuál de las dimensiones de evaluación de RAGAS corresponde?",
    choices: [
      "Calidad de la recuperación (context relevance)",
      "Fidelidad respecto al contexto (faithfulness)",
      "Velocidad de búsqueda (latency)",
      "Diversidad de vocabulario (diversity)",
    ],
    explain: "RAGAS evalúa por separado la calidad de la recuperación, la fidelidad (si se usó fielmente el contexto recuperado) y la calidad de la generación, y inventarse algo que no está en el contexto es un problema de fidelidad.",
  },
  "expert-s4-prompt-caching": {
    prompt: "La latencia de respuesta es alta y en cada petición se envían el mismo prompt de sistema largo y las mismas definiciones de herramientas. ¿Cuál es la medida más eficaz?",
    choices: [
      "Aplicar prompt caching a la parte inicial fija del prompt",
      "Mover cada vez el prompt de sistema detrás del mensaje del usuario al enviarlo",
      "Bajar la temperature a 0 para acelerar la generación",
      "Subir max_tokens para que la respuesta no se corte",
    ],
    explain: "El prompt caching guarda en caché y reutiliza lo que se repite de forma estable, como las instrucciones del sistema y las definiciones de herramientas, y se recomienda poner lo que se va a cachear al principio del prompt.",
  },
  "expert-s4-cache-prefix": {
    prompt: "Al poner la hora de la petición (timestamp) al principio del todo del prompt de sistema, casi no hay aciertos de caché. ¿Cuál es la causa y la solución correctas?",
    choices: [
      "La caché solo compara el último mensaje: alargar más la vida de la caché (TTL)",
      "La caché solo usa el mismo prefijo desde el principio: mover los valores que cambian detrás de la parte fija",
      "El timestamp hizo que se superara la longitud mínima: acortar el prompt",
      "La caché solo se aplica a las definiciones de herramientas: pasar las instrucciones a la descripción de la herramienta",
    ],
    explain: "La caché solo acierta si el prefijo en el orden tools → system → messages es idéntico al 100 %, así que los valores que cambian cada vez, como un timestamp, deben ir detrás del prefijo fijo.",
  },
  "expert-s4-cache-minimum": {
    prompt: "Añadiste cache_control, pero en el usage tanto cache_creation_input_tokens como cache_read_input_tokens son 0. ¿Qué hay que sospechar primero?",
    choices: [
      "La API ocultó el error de caché, así que hay que aumentar el número de reintentos de la petición",
      "La caché solo funciona si se activa la respuesta en streaming",
      "El prompt es más corto que la longitud mínima de caché del modelo y no se cacheó",
      "La caché empieza a contabilizarse en el usage pasado cierto tiempo",
    ],
    explain: "Un prompt más corto que la longitud mínima de cada modelo no se cachea, sin error, aunque se añada cache_control, y si los dos valores de usage son 0 es que no se cacheó.",
  },
  "expert-s4-output-tokens": {
    prompt: "Hay que reducir la latencia de respuesta. Según la guía de latencia de OpenAI, ¿cuál suele ser la etapa que más pesa en la latencia?",
    choices: [
      "La etapa de leer y procesar los tokens de entrada",
      "El viaje de ida y vuelta de la red hasta el servidor de la API",
      "La autenticación de la petición y la comprobación del rate limit",
      "La etapa de generar uno a uno los tokens de salida",
    ],
    explain: "La guía explica que generar tokens es casi siempre la etapa de mayor latencia, de modo que, si se reducen a la mitad los tokens de salida, la latencia también puede reducirse aproximadamente a la mitad.",
  },
  "expert-s4-streaming-ttft": {
    prompt: "Quieres mejorar la velocidad de reacción que percibe el usuario aunque el tiempo total de respuesta siga igual. ¿Cuál es la medida adecuada y la métrica que mirar con ella?",
    choices: [
      "Reducir mucho max_tokens — el total de tokens usados en toda la respuesta",
      "Activar el streaming — time to first token (TTFT)",
      "Subir la temperature — la variedad de la salida",
      "Aumentar el tamaño del batch — el rendimiento por segundo",
    ],
    explain: "El streaming empieza a enviar la respuesta antes de que termine toda la salida y mejora la capacidad de respuesta que se percibe, y entonces la métrica clave es el tiempo hasta que sale el primer token (TTFT).",
  },
  "expert-s4-max-tokens": {
    prompt: "Solo hacen falta respuestas cortas y fijaste max_tokens bajo. ¿Cuál es la limitación de este método que señala la documentación de Anthropic?",
    choices: [
      "El modelo conoce de antemano el límite y comprime el contenido, así que la calidad incluso sube",
      "max_tokens es el límite de la longitud de la entrada, así que no influye en absoluto en la longitud de la salida",
      "Si se supera el límite, la API devuelve un error y hay que volver a pedirlo cada vez",
      "Al llegar al límite se corta incluso a mitad de frase, así que solo sirve para formatos cortos",
    ],
    explain: "La documentación dice que, al llegar a max_tokens, la respuesta se corta incluso a mitad de frase o de palabra, de modo que es un método burdo que solo sirve sobre todo para preguntas tipo test y respuestas cortas en que la respuesta va al principio.",
  },
  "expert-s4-batch-api": {
    prompt: "Hay que clasificar durante la noche cientos de miles de documentos y no hace falta una respuesta inmediata. ¿Cuál es el método adecuado?",
    choices: [
      "Enviarlos agrupados en un lote con la Batch API de tipo asíncrono",
      "Enviar a la vez tantas peticiones como se pueda con la API síncrona",
      "Recibirlos con streaming para acortar el tiempo hasta el primer token",
      "Cambiar de modelo en cada petición para evitar el rate limit",
    ],
    explain: "La documentación explica que la Batch API sirve para procesar en lotes de peticiones asíncronas tareas que no necesitan respuesta inmediata, como ejecutar evaluaciones o clasificar datos en masa (los detalles, como el plazo de finalización y el porcentaje de descuento, pueden cambiar, así que se comprueban en la documentación).",
  },
  "expert-s4-structured-outputs": {
    prompt: "Analizas la respuesta y la guardas en la base de datos, pero a veces falta un campo obligatorio. ¿Cuál es la diferencia correcta entre JSON mode y Structured Outputs?",
    choices: [
      "Los dos garantizan el cumplimiento del esquema, así que el resultado es igual con cualquiera",
      "JSON mode garantiza el cumplimiento del esquema y Structured Outputs solo ajusta el formato JSON",
      "Los dos dan un JSON válido, pero solo Structured Outputs garantiza el cumplimiento del esquema",
      "Ninguno garantiza que el JSON sea válido, así que hay que comprobarlo con una expresión regular",
    ],
    explain: "La documentación de OpenAI explica que los dos métodos producen un JSON válido, pero que solo Structured Outputs garantiza además el cumplimiento del esquema.",
  },
  "expert-s4-refusal-handling": {
    prompt: "Usas Structured Outputs y, cuando llega una respuesta de rechazo por seguridad, el análisis falla. ¿Cuál es el tratamiento adecuado?",
    choices: [
      "El rechazo también sigue siempre el esquema, así que no hace falta tratarlo aparte",
      "Subir la temperature y reintentar hasta que no salga el rechazo",
      "Comprobar el campo refusal antes de analizar y tratar el rechazo por separado",
      "Quitar los campos obligatorios del esquema para que el rechazo también pase tal cual",
    ],
    explain: "La documentación indica que una respuesta de rechazo puede no seguir el esquema, así que hay que comprobar primero el campo refusal de la respuesta y tratarlo, por ejemplo, mostrándolo en la interfaz o bifurcando el flujo.",
  },
  "expert-s4-eval-design": {
    prompt: "Estás diseñando un conjunto de evaluación. ¿Cuál es el principio correcto de los que recomienda la documentación de Anthropic?",
    choices: [
      "Reflejar la distribución real de tareas y los edge case, con muchos ítems de puntuación automática",
      "Unos pocos ítems puntuados con esmero por personas son siempre mejores que muchos puntuados automáticamente",
      "Elegir los ítems de evaluación entre los casos representativos que el modelo hace bien, para ganar fiabilidad",
      "Basta con ejecutar la evaluación una sola vez justo antes del lanzamiento",
    ],
    explain: "La documentación recomienda reflejar la distribución real de tareas y los edge case, montar los ítems de modo que se puedan puntuar automáticamente y que es mejor tener muchos ítems de puntuación automática aunque la señal sea algo más débil.",
  },
  "expert-s4-judge-position-bias": {
    prompt: "Comparas dos respuestas, A y B, con un LLM-as-a-judge, y la que se presenta primero gana a menudo. ¿Cuál es la respuesta adecuada?",
    choices: [
      "Ordenarle que elija la respuesta más larga para que el veredicto sea coherente",
      "Puntuar solo con el mismo modelo que generó las respuestas evaluadas",
      "Ampliar el rango de puntuación para que se noten las diferencias sin necesidad de ninguna revisión humana",
      "Verlo como sesgo de posición y juzgar dos veces cambiando el orden, con victoria solo si gana en ambos",
    ],
    explain: "El LLM judge tiene sesgos de posición, de verbosidad y de autopreferencia, y el artículo propone juzgar dos veces cambiando el orden de las respuestas y considerar victoria solo si gana en los dos órdenes.",
  },
  "expert-s4-grading-method": {
    prompt: "Se puntúa si la respuesta coincide con una de las etiquetas de clasificación fijadas. Según la documentación de Anthropic, ¿qué método se debe elegir primero?",
    choices: [
      "Puntuación humana: la más flexible y de mayor calidad",
      "Puntuación basada en código: la más rápida, fiable y escalable",
      "Puntuación con LLM: apta para juicios complejos, así que se usa siempre primero en cualquier tarea",
      "Omitir la puntuación: en problemas de clasificación el modelo no se equivoca",
    ],
    explain: "La documentación dice que hay que elegir el método más rápido, fiable y escalable, y para respuestas categóricas con respuesta fija es adecuada la puntuación basada en código, como el exact match.",
  },
  "expert-s5-indirect-injection": {
    prompt: "Un agente que resumía una página web obedeció una frase escondida en la página: «ignora las instrucciones anteriores». ¿Qué tipo de ataque es?",
    choices: [
      "Inyección de instrucciones indirecta: una instrucción plantada en datos externos entra al modelo",
      "Inyección de instrucciones directa: el usuario escribe a mano la frase de ataque en la ventana de entrada",
      "Data poisoning: se planta una puerta trasera en los datos de entrenamiento",
      "Extracción de modelo: se reúnen muchas salidas para clonar el modelo",
    ],
    explain: "OWASP define como inyección de instrucciones indirecta la que ocurre cuando un LLM acepta entradas de fuentes externas, como sitios web o archivos.",
  },
  "expert-s5-rag-not-mitigation": {
    prompt: "Ante la afirmación «como hemos implantado RAG y ajuste fino, la inyección de instrucciones ya está resuelta», ¿cuál es la postura de OWASP?",
    choices: [
      "Si se entrenan con ajuste fino las frases de ataque, la inyección desaparece",
      "Según las investigaciones, RAG y el ajuste fino no bloquean del todo la inyección",
      "Como RAG usa documentos externos, incluso elimina el riesgo de inyección",
      "Con solo poner frases prohibitivas en el prompt de sistema, la inyección queda resuelta",
    ],
    explain: "OWASP LLM01 señala que RAG y el ajuste fino buscan mejorar la relevancia y la exactitud de la salida, pero que, según las investigaciones, no mitigan por completo las vulnerabilidades de inyección de instrucciones.",
  },
  "expert-s5-least-privilege": {
    prompt: "Vas a crear un agente que lee correos, responde y hasta hace transferencias. ¿Qué diseño reduce el daño aunque la inyección tenga éxito?",
    choices: [
      "Dar todas las herramientas y prohibir las acciones peligrosas con el prompt de sistema",
      "Procesar todas las tareas con una sola cuenta de administrador para reducir los errores de permisos",
      "Dar solo los permisos mínimos y que una persona apruebe las acciones de alto riesgo",
      "Dejar que el propio modelo juzgue el nivel de riesgo y decida si ejecuta",
    ],
    explain: "OWASP recomienda limitar el acceso del modelo al mínimo necesario y poner aprobación humana (human-in-the-loop) en las tareas de gran poder.",
  },
  "expert-s5-system-prompt-leakage": {
    prompt: "En el prompt de sistema pusiste la cadena de conexión a la base de datos y la regla «solo el administrador puede hacer reembolsos». ¿Cuál es la valoración desde el punto de vista de OWASP LLM07?",
    choices: [
      "Como el prompt de sistema no se ve para el usuario, es seguro",
      "Escribir la regla con un tono más fuerte es un control de seguridad suficiente",
      "Como el modelo no expone por sí mismo la cadena de conexión, se puede dejar tal cual en el prompt de sistema sin problema",
      "El prompt de sistema no es un secreto: se quitan los secretos y los permisos se comprueban fuera del modelo",
    ],
    explain: "OWASP dice que no se considere el prompt de sistema un secreto ni un control de seguridad, que no se incluyan credenciales y que la comprobación de permisos se haga en un sistema determinista fuera del modelo.",
  },
  "expert-s5-improper-output": {
    prompt: "Hay una función que ejecuta tal cual en la base de datos el SQL que crea el modelo. ¿Qué tratamiento recomienda OWASP LLM05?",
    choices: [
      "La salida del modelo es fiable, así que solo se deja un registro de la ejecución",
      "Validar la salida del modelo y ejecutarla usando parameterized query",
      "Escribir en el prompt de sistema que no cree SQL malicioso",
      "Poner la temperature en 0 para que salga siempre el mismo SQL hace desaparecer el riesgo",
    ],
    explain: "OWASP LLM05 recomienda tratar al modelo como a cualquier otro usuario con un enfoque zero-trust, validar su salida y usar parameterized query en las operaciones de base de datos en que entra la salida del modelo.",
  },
  "expert-s5-unbounded-consumption": {
    prompt: "Preocupa un ataque (denial of wallet) que envía en masa entradas larguísimas a un chatbot público para disparar los costes. ¿Cuál es la respuesta adecuada?",
    choices: [
      "Cambiar a un modelo más grande para que procese rápido también las entradas largas",
      "Publicar la mayor cantidad posible de salidas detalladas, como logprobs, para aumentar la transparencia del servicio",
      "Aumentar los reintentos automáticos de las peticiones fallidas para proteger la disponibilidad",
      "Poner rate limit y cuotas por usuario, un límite del tamaño de la entrada y un timeout",
    ],
    explain: "OWASP LLM10 recomienda rate limit, cuotas de usuario, validación del tamaño de entrada, timeout y throttling, y reducir la exposición de logit_bias y logprobs.",
  },
  "expert-s5-vector-tenant-isolation": {
    prompt: "Es un servicio RAG que mete en una sola base de datos vectorial los documentos de varias empresas clientes. ¿Cuál es el control clave para evitar el incidente de que se recuperen documentos de otra empresa?",
    choices: [
      "Un almacén vectorial que reconozca permisos y la separación de datos por empresa cliente (partitioning)",
      "Aumentar la dimensión del embedding para que los documentos de cada empresa se mezclen menos",
      "Escribir con tono fuerte en el prompt de sistema que no se mencionen nunca los documentos de otras empresas",
      "Añadir un reranker para mandar abajo los documentos sin relación",
    ],
    explain: "Para evitar fugas de datos en entornos multitenant, OWASP LLM08 recomienda un almacén vectorial permission-aware con control de acceso granular y la separación lógica de los conjuntos de datos.",
  },
  "expert-s5-data-poisoning": {
    prompt: "Ajustaste finamente un modelo con datos recibidos del exterior y ahora se comporta de forma rara solo cuando entra cierta frase. ¿Cuál es ese riesgo y la respuesta?",
    choices: [
      "Alucinación: bajar la temperature",
      "Fuga del prompt de sistema: guardar el prompt de sistema cifrado en el servidor, sin más cambios",
      "Envenenamiento de datos (puerta trasera): rastrear y verificar el origen de los datos",
      "Autonomía excesiva: reducir el número de herramientas conectadas al modelo",
    ],
    explain: "Manipulando los datos de entrenamiento puede aparecer una puerta trasera que cambia el comportamiento solo con cierto disparador, y OWASP LLM04 recomienda rastrear y verificar el origen de los datos con ML-BOM u otros medios.",
  },
  "expert-s5-adversarial-suffix": {
    prompt: "¿Qué mostró el estudio de adversarial suffix generados automáticamente de Zou et al. (2023)?",
    choices: [
      "Los modelos alineados son inmunes a los ataques automáticos, y solo es peligroso el jailbreak manual",
      "El suffix de ataque solo funciona en el modelo que lo creó y no se traslada a otros modelos",
      "Un suffix optimizado con un modelo abierto se transfirió también a modelos comerciales cerrados",
      "Si se añade un suffix largo, el modelo cambia y rechaza siempre",
    ],
    explain: "Los suffix encontrados con una búsqueda greedy y de gradiente en un modelo abierto (Vicuna) se transfirieron también a interfaces públicas de caja negra como ChatGPT, Bard y Claude.",
  },
  "expert-s5-red-teaming-scale": {
    prompt: "¿Cuál es el resultado correcto del estudio de red teaming de modelos de lenguaje de Ganguli et al. (2022)?",
    choices: [
      "Los modelos RLHF eran cada vez más difíciles de atacar con red team a medida que crecían",
      "Todos los tipos de modelo eran vulnerables a los ataques en un grado parecido, fuera cual fuera la escala",
      "Los LM corrientes eran cada vez más seguros a medida que crecían",
      "No se publicaron los datos de ataque, por considerarlos peligrosos",
    ],
    explain: "De los cuatro tipos de modelo, solo los modelos RLHF se hacían más difíciles de atacar con red team al crecer, los demás casi no cambiaban con la escala, y se publicaron 38.961 ataques.",
  },
  "expert-s5-constitutional-ai": {
    prompt: "¿Cuál es el método de entrenamiento de Constitutional AI (Bai et al., 2022)?",
    choices: [
      "Una persona etiqueta una por una las salidas dañinas para crear un modelo de recompensa propio",
      "Se añade un filtro de reglas que rechaza brevemente y sin excepción las peticiones dañinas que lleguen",
      "Se alinea solo eliminando documentos dañinos de los datos de preentrenamiento",
      "Con una lista de principios, SFT con autocrítica y revisión y luego RL con preferencias de IA (RLAIF)",
    ],
    explain: "La única aportación humana es la lista de principios: se entrena de forma supervisada con respuestas de autocrítica y revisión y después se hace aprendizaje por refuerzo (RLAIF) con un modelo de preferencias creado a partir de las preferencias que asigna la IA.",
  },
  "expert-s5-eu-ai-act-limited-risk": {
    prompt: "En la clasificación basada en riesgos del EU AI Act, ¿qué se exige sobre todo a los sistemas de riesgo limitado (limited risk), como un chatbot de atención al cliente?",
    choices: [
      "Aprobación previa del gobierno antes del lanzamiento y registro previo en una base de datos pública",
      "La obligación de transparencia de que el usuario sepa que conversa con una IA",
      "La prohibición total de comercialización",
      "Quedar exento de regulación, sin ninguna obligación",
    ],
    explain: "El EU AI Act prohíbe el riesgo inaceptable, regula con dureza el riesgo alto, impone obligaciones de transparencia al riesgo limitado (que los usuarios de chatbots y deepfakes sepan que es IA) y no regula el riesgo mínimo.",
  },
}
