# Capítulo 9. Seguridad y responsabilidad — valores secretos, publicación y licencias

> **En una línea**: **los valores secretos, como las contraseñas o las claves de API, no se suben nunca al repositorio.** Una vez hecho el commit, aunque borres el archivo, quedan en el historial de Git.
> Si se han filtrado, lo primero no es borrar el historial, sino **cambiar antes ese valor secreto (anularlo y sustituirlo)**.

Este capítulo se escribió a partir de la documentación oficial de GitHub y de Claude Code consultada el 1 de noviembre de 2026 y de los términos para consumidores de Anthropic. Las normas de seguridad que valen para cualquier IA están en el [capítulo 9 de la etapa 1](../00-common/09-safety.md). Este capítulo trata los riesgos nuevos que aparecen con **el repositorio público y el despliegue**. No es asesoramiento jurídico; las decisiones importantes consúltalas con un profesional.

## Los valores secretos no se suben

Un **valor secreto** es una credencial que da acceso a sistemas y datos delicados. Por ejemplo, las claves de API y los tokens de servicios externos, o la contraseña de una base de datos.[^secret] GitHub dice que **nunca** se suba al repositorio información delicada como contraseñas o claves de API.[^never]

¿Por qué lo dice con tanta fuerza? Porque un valor secreto al que se le ha hecho commit pasa a ser **parte del historial de Git**, y aunque lo borres del archivo más reciente, en el historial se queda.[^history] Además, los valores secretos de un repositorio público los atrapan los buscadores y los recopiladores especializados.[^indexed]

Estas son las vías por las que suelen filtrarse.[^paths]

- Un valor que pusiste al probar y al que, sin querer, le hiciste commit
- Archivos de configuración como `.env`
- Escribir una clave de verdad en el ejemplo de un documento o del README

<Quiz id="ch709-secret" />

## Protegerlo en tres capas

| Paso | Qué se hace | Fundamento |
|---|---|---|
| 1. No ponerlo | Apuntarlo en `.gitignore` e impedir que Claude lo lea | Capítulo 2, esta sección |
| 2. Que se bloquee | La protección de push de GitHub lo bloquea antes de subirlo | Esta sección |
| 3. Cambiarlo | Si se filtra, anularlo y sustituirlo al instante | Esta sección |

Fuente: resumen de esta guía (el fundamento, en cada nota al pie)

**1. No ponerlo.** Los archivos que contienen valores secretos se apuntan en `.gitignore` desde el principio (capítulo 2). Un archivo al que ya se le hizo commit no se ignora solo por apuntarlo en la lista, así que el orden importa. Para que las herramientas de archivos de Claude Code no puedan leer archivos como `.env`, añade una regla de denegación de `Read` (por ejemplo, `Read(./.env)`).[^deny] Pero esta regla no bloquea los comandos que leen sin nombrar el archivo ni otros programas.[^deny-limit] Por eso lo más seguro es dejar los archivos con valores secretos fuera de la carpeta del repositorio desde el principio. Dónde se ponen las reglas de permisos se explicó en el [capítulo 4 de Claude Code](../20-claude-code/04-permissions-undo.md). Si un trabajo automático necesita valores secretos, no los pongas en un archivo del repositorio, sino en los Secrets de GitHub.[^actions-secret][^gh-secrets]

**2. Que se bloquee.** La **protección de push** de GitHub bloquea un push que contiene valores secretos **antes** de que llegue al repositorio.[^push] En tu cuenta viene activada por defecto la protección que impide subir valores secretos a un repositorio público.[^push] Aun así, es solo la última red. No garantiza que atrape todos los tipos, así que cumple primero el paso 1.

**3. Cambiarlo.** Si recibes un aviso de que un valor secreto se ha filtrado, **sustituye al instante** esa credencial.[^rotate] Reescribir el historial de Git exige coordinarse con quienes trabajan contigo y tiene efectos secundarios. La documentación oficial también dice que, si lo que hay que borrar es un valor secreto, **el primer paso es anularlo y sustituirlo**.[^revoke-first]

<Quiz id="ch709-layers" />

## Lo que acompaña a publicar

Un repositorio público y un sitio de Pages los ve cualquiera (capítulos 2 y 7). Por eso, antes de publicar se comprueba esto.

- **Datos personales**: no pongas notas con nombres reales, contactos o direcciones. Es la razón por la que no se suben tal cual las notas de la herramienta de orden de la etapa 3.
- **Datos de los visitantes**: Pages registra la IP de los visitantes con fines de seguridad (capítulo 7).
- **Responsabilidad de aprobar**: la responsabilidad de revisar antes de aprobar si el código y los comandos propuestos son seguros es del usuario.[^responsible]

<Quiz id="ch709-public" />

## Licencias y resultados creados por la IA

Si no fijas una **licencia**, se aplica la ley de derechos de autor por defecto, y otras personas no pueden copiar, distribuir ni modificar mi código (capítulo 2). Si quieres que otros puedan usarlo, elige una licencia.

Sobre **los derechos del código creado por la IA**, esta guía no encontró una postura oficial. Lo que comprobé es esta cláusula de los términos para consumidores de Anthropic, que se aplican a las cuentas personales de Claude (Codex y Antigravity siguen los términos de sus respectivas empresas). Como condición de cumplir los términos, Anthropic cede al usuario los derechos que tenga sobre los resultados (Outputs) **«si los hay»**.[^outputs] Eso no es una respuesta a si «el código creado por IA tiene derechos de autor». Si lo vas a usar en algo importante, consúltalo con un profesional.

Comprueba también **si tus datos se usan para el entrenamiento**. La documentación de Claude Code dice que, en las cuentas Free, Pro, Max y Ultra, si ese ajuste está activado se entrenan nuevos modelos con datos que incluyen el uso de Claude Code.[^training] Dónde ver el ajuste se explicó en el [capítulo 9 de Claude, en la etapa 2](../10-claude/09-privacy.md).

<Quiz id="ch709-license" />

## Revisa también las piezas hechas por otros

El software suele apoyarse en piezas (paquetes) traídas de muchos sitios, y a esas piezas se les pueden colar sin que lo sepas puntos débiles de seguridad.[^deps] **Dependabot**, de GitHub, avisa si una pieza que uso tiene una vulnerabilidad conocida.

Si es una página que casi no usa piezas, como el tablero de tareas, hay poco de qué preocuparse. Pero si Claude propone instalar una pieza nueva, pregunta **qué se instala y por qué** y apruébalo (es la misma pregunta de la revisión del plan del capítulo 4).

<Quiz id="ch709-deps" />

## Practica tú mismo — lista de comprobación previa a la publicación

1. En la carpeta del tablero de tareas, mira si hay un `.gitignore` y si apunta los archivos que podrían contener valores secretos (`.env`, etc.). Si no existe, pídele a Claude que lo cree.
2. Pídele a Claude: «Busca en este repositorio si hay cadenas que parezcan contraseñas, claves de API o tokens. Si las encuentras, dime solo el archivo y la línea, y no me muestres el valor».
3. Repasa tú mismo el README, SPEC.md y los datos para ver que no haya nombres reales ni contactos.
4. Piensa si vas a fijar una licencia. Recuerda que, si no la fijas, otros no pueden usarlo.
5. Si has subido un valor secreto: primero anúlalo y sustitúyelo donde se emitió y, después, limpia el repositorio.

**Proyecto continuo**: en el capítulo 10 haréis un ejercicio práctico para hacer de una vez, de principio a fin, los capítulos 1 a 9.

## Resumen

- Los valores secretos no se suben nunca. Si haces commit, aunque lo borres queda en el historial de Git, y los repositorios públicos se recopilan.
- Tres capas: no ponerlo con `.gitignore` (la denegación de Read solo bloquea las herramientas de archivos de Claude), que lo bloquee la protección de push y, si se filtra, cambiarlo primero.
- En un repositorio público y en Pages no se ponen datos personales. La responsabilidad de revisar antes de aprobar es del usuario.
- Sin licencia, otros no pueden usarlo. Sobre los derechos de los resultados de la IA no encontré una respuesta oficial.
- Si hay que instalar una pieza nueva, pregunta qué es y por qué, y apruébala.

## Glosario

| Término | En español | En una línea |
|---|---|---|
| Secret | Secreto (valor secreto) | Credenciales como contraseñas y claves de API |
| Push protection | Protección de push | Función de GitHub que bloquea de antemano un push con valores secretos |
| Rotate | Rotar (sustituir) | Cambiar por un valor nuevo un valor secreto que se ha filtrado |
| Dependency | Dependencia | Una pieza de otros en la que se apoya mi software |

<ChapterDone :chapter="709" />

Siguiente capítulo: [Capítulo 10. Ejercicio práctico](10-practice.md)

[^secret]: Documentación oficial de GitHub, «Secret leakage risks». "Secrets are credentials that grant access to sensitive systems and data." / "API keys and tokens used to authenticate with external services" https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (consultado el 2026-11-01)
[^never]: Documentación oficial de GitHub, «Adding locally hosted code to GitHub». "Never `git add`, `commit`, or `push` sensitive information, for example passwords or API keys, to a remote repository." https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github (consultado el 2026-11-01)
[^history]: Documentación oficial de GitHub, «Secret leakage risks». "These hardcoded secrets become part of your Git history and remain accessible even after being removed from the latest commit." https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (consultado el 2026-11-01)
[^indexed]: Documentación oficial de GitHub, «Secret leakage risks». "Public repositories with exposed secrets are indexed by search engines and specialized scanning services." https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (consultado el 2026-11-01)
[^paths]: Documentación oficial de GitHub, «Secret leakage risks». "Secrets in configuration files such as `.env` files or infrastructure-as-code templates" https://docs.github.com/en/code-security/concepts/secret-security/secret-leakage-risks (consultado el 2026-11-01)
[^deny]: Documentación oficial de Claude Code, «Configure permissions». "To block Claude's file tools from reading a file or directory, add a `Read` deny rule for its path, such as `Read(./.env)` or `Read(./secrets/**)`;" https://code.claude.com/docs/en/permissions (consultado el 2026-11-01)
[^actions-secret]: Documentación oficial de Claude Code, «Claude Code GitHub Actions». "Never commit API keys or OAuth tokens directly to your repository." https://code.claude.com/docs/en/github-actions (consultado el 2026-11-01)
[^push]: Documentación oficial de GitHub, «Push protection». "Rather than alerting you to credential leaks after the fact, push protection blocks pushes that contain secrets _before_ they reach your repository." / "Stops you from pushing secrets to public repositories on GitHub" https://docs.github.com/en/code-security/concepts/secret-security/push-protection (consultado el 2026-11-01)
[^rotate]: Documentación oficial de GitHub, «Secret scanning». "When you receive an alert, rotate the affected credential immediately to prevent unauthorized access." https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning (consultado el 2026-11-01)
[^revoke-first]: Documentación oficial de GitHub, «Removing sensitive data from a repository». "It is important to note that if the sensitive data you need to remove is a secret (e.g. password/token/credential), as is often the case, then as a first step you need to revoke and/or rotate that secret." https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository (consultado el 2026-11-01)
[^responsible]: Documentación oficial de Claude Code, «Security». "You're responsible for reviewing proposed code and commands for safety before approval." https://code.claude.com/docs/en/security (consultado el 2026-11-01)
[^outputs]: Términos para consumidores de Anthropic (Consumer Terms of Service). "Subject to your compliance with our Terms, we assign to you all of our right, title, and interest—if any—in Outputs." https://www.anthropic.com/legal/consumer-terms (consultado el 2026-11-01)
[^training]: Documentación oficial de Claude Code, «Data usage». "We will train new models using data from Free, Pro, Max, and Ultra accounts when this setting is on (including when you use Claude Code from these accounts)." https://code.claude.com/docs/en/data-usage (consultado el 2026-11-01)
[^deps]: Documentación oficial de GitHub, «Dependabot alerts». "Software often relies on packages from various sources, creating dependency relationships that can unknowingly introduce security vulnerabilities." https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts (consultado el 2026-11-01)
[^gh-secrets]: Documentación oficial de GitHub, «Secrets». "GitHub Actions can only read a secret if you explicitly include the secret in a workflow." https://docs.github.com/en/actions/concepts/security/secrets (consultado el 2026-11-01)
[^deny-limit]: Documentación oficial de Claude Code, «Configure permissions». "They don't apply to a command that reads files without naming them, such as `grep -r pattern .` run from the directory that holds the file, or to arbitrary subprocesses that read or write files indirectly, like a Python or Node script that opens files itself." https://code.claude.com/docs/en/permissions (consultado el 2026-11-01)
