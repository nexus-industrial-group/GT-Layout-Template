# CLAUDE.md

Memoria permanente del proyecto. Solo reglas y hechos fijos.
El *qué* de la tarea actual vive en `spec.md`, no aquí.

---

## Contexto

Prototipo de layout frontend para **Gary Tabakman**, abogado penalista en Houston, Texas
(Law Office of Gary Tabakman, PLLC).

Gary maneja defensa criminal — casos estatales y federales — y casos selectos de derecho
familiar. Ha representado clientes en casos de misdemeanor y felony en Texas, y en casos
e investigaciones federales en Colorado, Florida, Louisiana, Mississippi, Oklahoma,
New York y Texas. Ha llevado cientos de casos: DWI, aggravated assault, murder,
distribución de narcóticos a gran escala y casos de cuello blanco.

Su formación: empezó como clerk para un abogado prominente de Houston mientras estudiaba
en la University of Houston, continuó trabajando en el despacho durante South Texas
College of Law. Su premisa es que cada caso y cada cliente merecen atención cercana y
personal durante toda su duración.

**Sitios existentes (referencia de estilo, no de estructura):**
- Criminal Defense — https://gt-law-website-frontend.vercel.app/
- Personal Injury — https://pi-gt-law-frontend.vercel.app/

**Objetivo del prototipo:**
Gary tiene un canal de YouTube ("Houston Criminal Defense Attorney | Gary Tabakman")
donde explica casos legales. Cada video cierra con un CTA para agendar cita. Este proyecto
crea la **plantilla base** a la que aterrizan esos espectadores — una landing por tipo de
caso, que continúa la conversación del video y convierte al visitante en consulta.

El layout debe ser reutilizable: se construye una vez y se adapta por tipo de caso.

---

## Stack

| Paquete | Versión |
|---|---|
| Next.js | 16.3.3 |
| React | 19.2.8 |
| react-dom | 19.2.8 |
| TypeScript | 5.9.3 |
| ESLint | 9.39.5 |
| eslint-config-next | 16.3.3 |

- **App Router** (integrado).
- **Estilos:** Tailwind v4 mediante `@theme inline` en `globals.css` para los tokens de
  diseño; `styles.module.css` por componente o sección cuando el estilo no se expresa bien
  con utilidades.
  <!-- CONFIRMAR: el CLAUDE.md original decía "CSS manual", pero todo el código de
       referencia usa clases utilitarias y sintaxis @theme (Tailwind v4). Si NO usas
       Tailwind, borra esta línea y ajusta el spec. -->

---

## Design tokens

Definidos en `globals.css`. **Son la única fuente de color y tipografía del proyecto.**

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --accent: #E55100;
  --accent-dark: #B84200;
  --accent-light: #FF6B1A;
  --hero-continuation: #2A2722;
  --gold: var(--accent);
  --gold-light: var(--accent-light);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-accent: var(--accent);
  --color-gold: var(--accent);
  --font-playfair: var(--font-playfair);
  --font-garamond: var(--font-garamond);
  --font-inter: var(--font-inter);
  --color-white: #FFFFFF;
  --color-paper: #FAFAF7;
  --color-ink: #14110D;
  --color-ink-soft: #2C2820;
  --color-ink-muted: #6E685C;
  --color-line: rgba(20, 17, 13, 0.10);
  --color-line-strong: rgba(20, 17, 13, 0.18);
  --color-line-cream: rgba(255, 253, 248, 0.14);
  --color-orange: #E55100;
  --color-orange-deep: #B84200;
  --color-orange-bright: #FF6B1A;
  --color-hero-continuation: var(--hero-continuation);
  --font-display: var(--font-playfair), Georgia, 'Times New Roman', serif;
  --font-serif: var(--font-garamond), Georgia, 'Times New Roman', serif;
  --font-sans: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: var(--font-garamond), Georgia, 'Times New Roman', serif;
}
```

### Uso de tipografía

| Fuente | Uso |
|---|---|
| `font-playfair` | Encabezados |
| `font-garamond` | Texto de cuerpo general |
| `font-inter` | Texto pequeño: footer, descripciones, labels, eyebrows |

---

## Patrones

- Componentes en `components/`, uno por archivo, `PascalCase.tsx`, export default.
- Secciones de página en `components/sections/`; elementos reutilizables en `components/ui/`.
- CSS Modules junto al componente: `Header.tsx` + `Header.module.css`.
- Todo el copy visible al usuario va en **inglés** (el sitio es para clientes en Texas).
  Los comentarios de código pueden ir en español.
- Imágenes en `public/images/`, agrupadas por sección (`public/images/associations/`, etc.).
- Enlaces internos con `next/link`; `tel:` y `mailto:` con `<a>` nativo.

---

## Prohibiciones

1. **No agregar backend.** Es un prototipo de layout frontend con Next.js, HTML y CSS.
   Todo es estético; nada es funcional.
2. **No cambiar la estructura del layout definida en `spec.md`.** Para resolver dudas de
   detalle, usa los recursos de `context/`: los 2 archivos HTML de propuesta, el código de
   referencia y las imágenes.
3. **No usar información que no esté en el guion.** Nada de contenido inventado.
4. **No usar colores fuera de los design tokens de arriba.** Ni hex sueltos ni paletas nuevas.
5. **No inventar resultados de casos, cifras, estadísticas ni testimonios.** Es publicidad
   legal — datos falsos son un problema real, no cosmético. Si el guion no da el número,
   usa un placeholder explícito (`[CASE_COUNT]`, `[YEARS]`) y avisa al usuario.
6. **No eliminar ni suavizar el disclaimer legal del footer**
   ("Attorney advertising. Prior results do not guarantee a similar outcome...").
7. **No instalar dependencias nuevas** sin preguntar primero.

---

## Límites

- Solo el layout **estático**: sin lógica, sin estado, sin validación real de formularios,
  sin integración de datos, sin backend.
- Los formularios se maquetan pero **no envían**. Sin `action`, sin `onSubmit` funcional.
- Alcance: la plantilla base. No construir una landing por cada tipo de caso.

---

## Testing

Al terminar cualquier cambio, en este orden:

1. `npm run lint` — debe pasar sin errores.
2. `npx tsc --noEmit` — sin errores de tipos.
3. `npm run build` — la build debe completar.
4. Revisar el render en `npm run dev` a 1440px y a 375px (el layout es responsive).
5. Reportar al usuario qué se cambió y **preguntar si desea más modificaciones o ajustes**
   antes de continuar con otra sección.

No marcar una sección como terminada sin haber corrido los pasos 1–3.

---

## Referencias

- `spec.md` — estructura completa del layout a construir.
- `context/` — guion del video, propuestas HTML de referencia, imagen del layout objetivo.
- Proyecto de referencia de estilos: `GT-LAW-website-frontend`.
  <!-- Si necesitas que el agente lea este repo, clónalo dentro del proyecto o agrégalo
       como working directory adicional en Claude Code. Una ruta absoluta de Windows
       (D:\...) no es accesible desde la sesión por defecto. -->
