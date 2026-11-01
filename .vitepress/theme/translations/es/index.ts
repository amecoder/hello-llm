// es translation set (generated).
import type { Translation } from '../types.ts'
import { QUIZ1 } from './quiz1.ts'
import { EXAM } from './exam.ts'
import { CHATGPT } from './chatgpt.ts'
import { CLAUDE } from './claude.ts'
import { GEMINI } from './gemini.ts'
import { CLAUDE_CODE } from './claude-code.ts'
import { CODEX } from './codex.ts'
import { ANTIGRAVITY } from './antigravity.ts'
import { AI_SDLC } from './ai-sdlc.ts'
import { LEVEL_BASIC } from './level-basic.ts'
import { LEVEL_INTERMEDIATE } from './level-intermediate.ts'
import { LEVEL_ADVANCED } from './level-advanced.ts'
import { LEVEL_EXPERT } from './level-expert.ts'

const chapters: Record<number, string> = {
  1: "Capítulo 1. Qué es un LLM",
  2: "Capítulo 2. Por qué se habla tanto de esto",
  3: "Capítulo 3. Por qué conviene aprender",
  4: "Capítulo 4. Fundamentos del prompt",
  5: "Capítulo 5. Patrones de prompt",
  6: "Capítulo 6. Cómo afinar la respuesta siguiendo la conversación",
  7: "Capítulo 7. Prompts estructurados",
  8: "Capítulo 8. Metaprompting: que la IA te prepare el prompt",
  9: "Capítulo 9. Usarla con seguridad",
  10: "Capítulo 10. Colección de ejercicios prácticos",
  11: "Capítulo 11. Usarla como un experto",
  101: "Capítulo 1. Primeros pasos: probar, registrarte y elegir un plan",
  102: "Capítulo 2. Recorrido por la pantalla: qué hay y dónde",
  103: "Capítulo 3. Gestionar las conversaciones",
  104: "Capítulo 4. Archivos, fotos y creación de imágenes: mostrar y pedir que dibuje",
  105: "Capítulo 5. Memoria y personalización",
  106: "Capítulo 6. Búsqueda e investigación profunda",
  107: "Capítulo 7. Proyectos, complementos y Work: agrupar lo que haces a menudo",
  108: "Capítulo 8. Datos personales y gestión de datos: decide para qué se usan tus conversaciones",
  109: "Capítulo 9. Conversar por voz: dictado y conversación de voz",
  110: "Capítulo 10. Tareas de práctica: usar tú mismo las funciones de ChatGPT",
  111: "Capítulo 11. Usar ChatGPT como un experto: ir más allá de principiante y adaptarlo a tu trabajo",
  201: "Capítulo 1. Primeros pasos: dónde se usa, registro, planes y límites de uso",
  202: "Capítulo 2. Un paseo por la pantalla: qué hay y dónde",
  203: "Capítulo 3. Gestionar las conversaciones: buscar, ordenar, compartir y ocultar",
  204: "Capítulo 4. Archivos y artefactos: enseñar y recibir cosas hechas",
  205: "Capítulo 5. Memoria y personalización: sin tener que presentarte cada vez",
  206: "Capítulo 6. Búsqueda e investigación: recibir información actual con sus fuentes",
  207: "Capítulo 7. Proyectos, conectores y skills: conectar a Claude tus materiales y herramientas",
  208: "Capítulo 8. Cowork",
  209: "Capítulo 9. Datos personales y seguridad",
  210: "Capítulo 10. Voz y móvil",
  211: "Capítulo 11. Tareas prácticas",
  212: "Capítulo 12. Úsalo como un experto: juzgar, probar y acumular",
  301: "Capítulo 1. Primeros pasos: dónde se usa, cómo iniciar sesión, planes y límites de uso",
  302: "Capítulo 2. Recorrido por la pantalla: qué hay y dónde",
  303: "Capítulo 3. Gestionar las conversaciones: buscar, ordenar, compartir y exportar",
  304: "Capítulo 4. Archivos y creación: subir archivos, Canvas, imágenes, vídeo y música",
  305: "Capítulo 5. Memoria y personalización: memoria, instrucciones y traer datos de otras IA",
  306: "Capítulo 6. Búsqueda y Deep Research: comprobar las fuentes, informes largos, cuadernos y ayuda para estudiar",
  307: "Capítulo 7. Skills y aplicaciones conectadas: guardar tus peticiones habituales y seguir usando las aplicaciones de Google",
  308: "Capítulo 8. Encargarle trabajo: tareas, programación, Gemini en Chrome y normas de seguridad",
  309: "Capítulo 9. Privacidad y seguridad: qué se guarda, quién lo ve y cómo borrarlo",
  310: "Capítulo 10. Voz y móvil",
  311: "Capítulo 11. Tareas prácticas",
  312: "Capítulo 12. Usarlo como un experto",
  401: "Capítulo 1. Qué es Claude Code y dónde se usa: en qué se diferencia del chat, dónde usarlo y planes",
  402: "Capítulo 2. Instalar la aplicación de escritorio y primera sesión: instalar, iniciar sesión, pestaña Code, elegir carpeta y encargar la primera tarea",
  403: "Capítulo 3. Recorrido por la pantalla: barra de título, cambios, archivos e información de la sesión",
  404: "Capítulo 4. Permisos y deshacer",
  405: "Capítulo 5. Cómo encargar bien las tareas: con concreción, con un plan primero y con criterios de comprobación",
  406: "Capítulo 6. Memoria del proyecto: escribir tus reglas en CLAUDE.md",
  407: "Capítulo 7. Skills, plugins y herramientas externas: la herramienta de organización con una sola línea",
  408: "Capítulo 8. Varias tareas a la vez, la nube y las tareas programadas: que la herramienta de orden funcione sola",
  409: "Capítulo 9. Coste, datos y seguridad: el uso, el ajuste de entrenamiento y cuidado con las instrucciones ocultas",
  410: "Capítulo 10. Usarlo en el terminal: la misma herramienta de orden con una sola línea de comando",
  411: "Capítulo 11. Ejercicios prácticos: construir desde cero tu propia herramienta de organización",
  412: "Capítulo 12. Usarlo como un experto: elegir según la tarea y añadir de una en una cuando haga falta",
  501: "Capítulo 1. Qué es Codex y en qué se diferencia de Claude Code",
  502: "Capítulo 2. Empezar con Codex en la app de ChatGPT: abrir una carpeta y encargar la primera organización",
  503: "Capítulo 3. El archivo de reglas AGENTS.md: pasar el CLAUDE.md a Codex",
  504: "Capítulo 4. Permisos y deshacer: qué encargar y cómo volver atrás",
  505: "Capítulo 5. Trasladar los skills",
  506: "Capítulo 6. Programación, nube y móvil: solo en el momento fijado, aunque no estés",
  507: "Capítulo 7. Usarlo en el terminal",
  508: "Capítulo 8. Costes, datos y seguridad, y cómo elegir herramienta",
  601: "Capítulo 1. Qué es Antigravity y en qué se diferencia de las dos herramientas anteriores",
  602: "Capítulo 2. Instalar la aplicación y el primer orden",
  603: "Capítulo 3. Reglas y skills: no hace falta trasladar nada",
  604: "Capítulo 4. Permisos y cómo deshacer",
  605: "Capítulo 5. Plan, programación, navegador y objetivo: encargar tareas con comandos de barra",
  606: "Capítulo 6. Usarlo en la terminal: `agy -p` y el rechazo silencioso",
  607: "Capítulo 7. Coste, datos y seguridad, y cómo elegir entre las tres herramientas",
  701: "Capítulo 1. Qué significa crear con la IA: el SDLC de un vistazo",
  702: "Capítulo 2. Crear un repositorio de GitHub: construir la casa del proyecto",
  703: "Capítulo 3. Planificación y especificación",
  704: "Capítulo 4. Construir",
  705: "Capítulo 5. Comprobar y probar: dar un mecanismo de comprobación y recibir pruebas",
  706: "Capítulo 6. PR y revisión",
  707: "Capítulo 7. Desplegar",
  708: "Capítulo 8. Operación y mejora: dar otra vuelta con las incidencias",
  709: "Capítulo 9. Seguridad y responsabilidad",
  710: "Capítulo 10. Ejercicios prácticos: una vuelta completa de principio a fin",
}

export const es: Translation = {
  chapters,
  questions: { ...QUIZ1, ...EXAM, ...CHATGPT, ...CLAUDE, ...GEMINI, ...CLAUDE_CODE, ...CODEX, ...ANTIGRAVITY, ...AI_SDLC },
  level: { ...LEVEL_BASIC, ...LEVEL_INTERMEDIATE, ...LEVEL_ADVANCED, ...LEVEL_EXPERT },
}
