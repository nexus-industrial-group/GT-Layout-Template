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

La primera landing construida es la del video sobre la prohibición de THC en Texas
(31 de julio de 2026). El layout debe ser reutilizable: se construye una vez y se adapta
por tipo de caso.

---

## Stack

| Paquete | Versión |
|---|---|
| Next.js | 16.3.3 |
| React / react-dom | 19.2.8 |
| TypeScript | 5.9.3 |
| Tailwind CSS | 4.x (`tailwindcss` + `@tailwindcss/postcss`) |
| ESLint | 9.x |
| eslint-config-next | 16.3.3 |
| babel-plugin-react-compiler | 1.0.0 (`reactCompiler: true` en `next.config.ts`) |

- **App Router** + **Turbopack** (integrados).
- **Gestor de paquetes: pnpm** (`packageManager: pnpm@11.20.0`, `pnpm-lock.yaml`,
  `pnpm-workspace.yaml`). Usa `pnpm`, no `npm install`.
- **Estilos:** Tailwind v4 mediante `@theme inline` en `globals.css` para los tokens de
  diseño; `Componente.module.css` junto al componente cuando el estilo no se expresa bien
  con utilidades (hoy solo `Hero.module.css`).
- **Alias:** `@/*` → `./src/*`.

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

`--hero-continuation` (#2A2722) quedó **sin consumidores** cuando la franja de continuidad
se fusionó con el top bar (ver Desviaciones). Se mantiene definido por si vuelve a usarse.

### Uso de tipografía

| Fuente | Uso |
|---|---|
| `font-playfair` / `font-display` | Encabezados |
| `font-garamond` / `font-serif` | Texto de cuerpo general |
| `font-inter` | Texto pequeño: footer, descripciones, labels, eyebrows, nav |

---

## Regla crítica de CSS: todo global va en `@layer base`

Tailwind v4 emite sus utilidades dentro de `@layer utilities`. En la cascada de CSS,
**cualquier regla sin capa le gana a cualquier regla con capa, sin importar la
especificidad.** Una regla global suelta en `globals.css` anula las utilidades:

```css
/* MAL: sin capa. Este `*` mata TODAS las utilidades de spacing del proyecto
   (py-6, mt-7, px-[46px]...) aunque sean clases y él tenga especificidad 0. */
* { margin: 0; padding: 0; }
```

Todo lo global (`html`, `body`, `a`, resets) va dentro de `@layer base`. El reset de
`box-sizing`/`margin`/`padding` ya lo hace el preflight de Tailwind: no lo repitas.

Este bug llegó con el `globals.css` por defecto de create-next-app y dejó sin efecto
todo el espaciado de la página. Si el espaciado o los colores "no responden", revisa
esto antes que nada.

---

## Patrones

- Componentes en `src/components/`, uno por archivo, `PascalCase.tsx`, export default.
- Secciones de página en `src/components/sections/`; reutilizables en `src/components/ui/`.
- CSS Modules junto al componente: `Hero.tsx` + `Hero.module.css`.
- **Shell horizontal compartido:** `src/components/ui/Container.tsx`
  (`max-w-[1400px]` · `px-[46px]` · `px-[22px]` en móvil, tomado del código de `spec.md` §7).
  Toda sección lo usa para que los bordes izquierdos alineen. No inventes otro contenedor.
- **El prototipo es una sola página.** La navegación interna son anclas (`#top`,
  `#consultation`, `#video-content`) con `<a>`; `next/link` solo se usa en el footer, que
  apunta a rutas del sitio real. `tel:` y `mailto:` con `<a>` nativo.
- Todo el copy visible al usuario va en **inglés** (el sitio es para clientes en Texas).
  Los comentarios de código pueden ir en español.
- Imágenes en `public/images/`, agrupadas por sección (`public/images/hero/`,
  `public/images/associations/`).
- **Imagen del hero:** es full-bleed (`100vw`), así que el ancho manda. Con un recorte de
  ~3:1 sobre fuente 16:9 solo se recorta en vertical. **Mínimo 2560px de ancho**; 3840 es
  el techo útil (el `srcset` de Next no genera más). Por debajo de eso se pixela y hace
  falta compensar con `blur()` en `Hero.module.css`.

---

## Prohibiciones

1. **No agregar backend.** Es un prototipo de layout frontend con Next.js, HTML y CSS.
   Todo es estético; nada es funcional.
2. **No cambiar la estructura del layout por cuenta propia.** `spec.md` documenta el layout
   construido y el porqué de las decisiones que costaron varias iteraciones; léelo antes de
   tocar estructura, y cualquier cambio estructural nuevo se consulta antes. Para dudas de
   detalle, usa `context/`.
3. **No usar información que no esté en el guion.** Nada de contenido inventado. Los dos
   HTML de `context/reference-proposal/` cuentan como fuente derivada válida: su texto sale
   del mismo guion. Sus **cifras**, no (ver punto 5).
4. **No usar colores fuera de los design tokens.** Ni hex sueltos ni paletas nuevas.
   *Excepción heredada:* el código original del top bar, memberships y footer traía
   literales —`#14110D`, `#fffbf8xx`, `#0E0C08`, `#FF6B1A`, `rgba(229,81,0,0.14)`— y se
   usó tal cual por instrucción. Todos corresponden a valores de tokens existentes.
   Código nuevo: solo tokens.
5. **No inventar resultados de casos, cifras, estadísticas ni testimonios.** Es publicidad
   legal — datos falsos son un problema real, no cosmético. Si el guion no da el número,
   usa un placeholder explícito (`[CASE_COUNT]`, `[YEARS]`) y avisa al usuario.
   **Excepción autorizada y acotada:** `CaseResults.tsx` lleva hoy cifras de demo
   (31, 47, 22, 64, 29, 18, 12, 0) tomadas de `context/reference-proposal/`, que ese mismo
   archivo marca como inventadas para el mock. Se pusieron a pedido expreso para que el
   cliente vea la maqueta terminada. El archivo lleva el aviso
   `⚠ CIFRAS DE DEMO — NO PUBLICAR SIN VERIFICAR`. **No borrar ese aviso, no extender la
   excepción a otras secciones, y no publicar sin que Gary las reemplace con datos
   verificables de sus expedientes.**
6. **No eliminar ni suavizar el disclaimer legal del footer**
   ("Attorney advertising. Prior results do not guarantee a similar outcome...").
7. **No instalar dependencias nuevas** sin preguntar primero.

---

## Estructura

El orden de render vive en `src/app/page.tsx` y **no es el orden numérico** de las
secciones: la 8 va antes que la 7, la 6 flota sobre 3–5 y la 2 quedó absorbida por la 1.

`spec.md` describe cada sección, apunta a su componente y — en "Decisiones que costaron
varias iteraciones" — explica el porqué de los acuerdos que se re-litigaron varias veces
(traslape del formulario flotante, gaps del grid, tamaño mínimo de la imagen del hero,
capas de CSS). Léelo antes de tocar layout.

**El código es la fuente de verdad**; `spec.md` explica la intención.

---

## Límites

- Solo el layout **estático**: sin lógica, sin estado, sin validación real de formularios,
  sin integración de datos, sin backend.
- Los formularios se maquetan pero **no envían**. Sin `action`, sin `onSubmit` funcional;
  los botones van en `type="button"`.
- Alcance: la plantilla base. No construir una landing por cada tipo de caso.

---

## Testing

Al terminar cualquier cambio, en este orden:

1. `pnpm lint` — sin errores. (Hay 1 warning conocido y aceptado: `@next/next/no-img-element`
   en `Memberships.tsx`, porque el código de `spec.md` §7 usa `<img>`.)
2. `npx tsc --noEmit` — sin errores de tipos.
3. `pnpm build` — la build debe completar.
4. Revisar el render a 1440px y a 375px (el layout es responsive). **Lo hace el usuario**:
   el agente no tiene herramientas de navegador en este proyecto.
5. Reportar al usuario qué se cambió y **preguntar si desea más modificaciones o ajustes**
   antes de continuar con otra sección.

No marcar una sección como terminada sin haber corrido los pasos 1–3.

**No dejes servidores corriendo.** Next 16 se niega a arrancar un segundo `next dev` sobre
el mismo directorio y sale con `[ELIFECYCLE] exit code 1`. Si dejas un `next dev` huérfano,
rompes la terminal del usuario. `TaskStop` mata el wrapper de npm/pnpm pero **no** al hijo
`next dev`: hay que matar el proceso por PID.

---

## Referencias

- `spec.md` — layout construido, sección por sección, y las decisiones que costaron varias
  iteraciones.
- `context/TEXAS THC BAN_ What's a Felony Now and What's Still Legal_ (Houston Defense Attorney Explains).md`
  — **el guion**, única fuente del copy.
- `context/reference-proposal/` — las 2 propuestas HTML de referencia.
- `context/visual-reference/` — `layout-reference.jpg` (composición) y
  `navbar-reference.webp`.
- Proyecto de referencia de estilos: `GT-LAW-website-frontend`.
  <!-- No accesible desde la sesión. Si hace falta leerlo, clónalo dentro del proyecto o
       agrégalo como working directory adicional en Claude Code. -->
