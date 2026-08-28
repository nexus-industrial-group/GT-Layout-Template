# spec.md — Layout base para landings por tipo de caso

El *qué* del proyecto. Las reglas fijas viven en `CLAUDE.md`.

Este documento describía el layout **a construir**; ahora describe el layout **construido**.
Los bloques de código que traía (§1, §7, §10) se reemplazaron por punteros al componente
real: mantener el código duplicado aquí garantizaba que se desincronizara, y ya pasó.
**El código es la fuente de verdad; este archivo explica la intención y el porqué.**

**Recursos** (no describir de memoria, leerlos):

- `context/TEXAS THC BAN_ What's a Felony Now and What's Still Legal_ (Houston Defense Attorney Explains).md`
  — el guion, única fuente del copy
- `context/reference-proposal/` — las 2 propuestas HTML
- `context/visual-reference/layout-reference.jpg` — composición objetivo
- `context/visual-reference/navbar-reference.webp` — referencia de navbar

---

## Sistema de layout

Tres piezas compartidas. Cambiar cualquiera afecta a varias secciones a la vez.

**1. Shell horizontal — `src/components/ui/Container.tsx`**

`max-w-[1400px]` · `px-[46px]` · `px-[22px]` bajo `sm`. Toda sección lo usa, incluido el
footer. Es lo que hace que los bordes izquierdos alineen de arriba a abajo.

**2. Grid de dos columnas — hero, tips y resultados**

```
xl:grid-cols-[minmax(0,1fr)_448px]
```

La pista de 448px queda **reservada y vacía** en las secciones 4 y 5: es el carril por el
que baja el formulario flotante. Las tres secciones deben declarar el mismo
`grid-template`, o el borde izquierdo del contenido deja de alinear entre ellas.

**3. Breakpoint del traslape — `xl` (1280px)**

Por debajo de 1280px todo se apila y el formulario cae al flujo normal, debajo del texto
del hero. No es `lg`: a 1024px la columna izquierda quedaba en ~420px y el grid de tres
tips salía en columnas de 118px.

Los *gaps* son distintos a propósito: `xl:gap-10` en el hero (texto pegado al formulario)
y `xl:gap-28` en tips y resultados (aire contra el formulario).

---

## Orden de secciones

```
1  Top bar (sticky, incluye la continuidad del video)
3  Navbar + Hero image
4  Tres tips del caso
5  Resultados de casos de Gary
8  Contenido del video
7  Memberships & Recognition
9  Formulario de consulta gratis
10 Footer
```

**6** (formulario de intake) flota sobre 3–5. **2** quedó absorbida por **1**.

La numeración se conserva para poder rastrear cada sección contra su versión original.
El orden de render vive en `src/app/page.tsx`.

---

## 1. Top bar → `sections/TopBar.tsx`

Sticky, `z-50`, sobre `#14110D`.

- **Izquierda:** icono de play en `accent` + la línea de continuidad con el video.
  La frase "You came from the video on the July 31 THC rule change." es un **enlace** a
  `https://www.youtube.com/watch?v=dYFH4IEx53g` (`target="_blank"`, `rel="noopener noreferrer"`),
  seguida de "Now let's find out where you stand." en blanco semibold.
- **Derecha:** "Free Consultation", ancla a `#consultation` (sección 9). Oculto bajo `sm`.

> Originalmente la izquierda decía "Available for Federal Cases Nationwide · Houston, Texas"
> y la continuidad era la sección 2, en su propia banda. Se fusionaron: mantener las dos
> repetía la misma frase dos veces seguidas y en el mismo negro.

---

## 2. Continuidad desde YouTube

**Absorbida por la sección 1.** `sections/VideoContinuity.tsx` sigue en el repo sin usar,
por si hay que devolverla a una banda propia.

---

## 3. Navbar + Hero image → `sections/Hero.tsx` + `Hero.module.css` + `ui/NavBar.tsx`

**Navbar:** logo "GARY TABAKMAN / ATTORNEY AT LAW", links y teléfono. El teléfono usa la
misma tipografía que los links (`font-inter`, 12px, `tracking-[0.1em]`), en negritas y
blanco pleno para que siga leyéndose como CTA. Fondo translúcido `bg-ink/30` — **no** sin
fondo, como decía la versión original — y línea blanca inferior a todo lo ancho.

**Hero:** imagen de fondo full-bleed vía `next/image` (`fill` + `priority` + `sizes="100vw"`),
bajo un velo diagonal que va de 82% ink a la izquierda a 18% a la derecha, más un degradado
vertical y un glow naranja superior. Todo con `color-mix()` sobre tokens.

**Izquierda:** eyebrow, regla naranja de 56×3, titular en mayúsculas (`font-display`),
párrafo de contexto y el cierre de Gary en un bloque con borde izquierdo `accent`.

**Derecha:** el formulario de la sección 6.

---

## 4. Tres tips del caso → `sections/CaseTips.tsx`

Color sólido `bg-ink`. Grid de tres columnas con **una línea vertical `accent` a la
izquierda de la primera**. Los tres tips salen del guion: reclasificación de concentrados
a Penalty Group 2, ausencia de cláusula de anterioridad, y posesión constructiva.

---

## 5. Resultados de casos de Gary → `sections/CaseResults.tsx`

Caja con borde tenue blanco (`line-cream`) y línea superior de 3px en `accent`. Dentro:
título, grid de tres cifras, y lista de dos columnas (número · descripción) con línea
blanca inferior por fila. Cierra con "Past results are not a guarantee of future outcomes."

> ⚠ **Las cifras son de demo.** El guion no contiene ninguna cifra de resultados. Los
> números actuales salen de `context/reference-proposal/`, que los marca como inventados
> para el mock, y se pusieron a pedido expreso para la presentación al cliente. El archivo
> lleva el aviso `⚠ CIFRAS DE DEMO — NO PUBLICAR SIN VERIFICAR`. Ver prohibición 5 de
> `CLAUDE.md`.

---

## 6. Formulario flotante → `sections/CaseIntakeForm.tsx`

Vive en la columna derecha del hero y se desborda hacia abajo sobre las secciones 4 y 5.
Color claro sobre `bg-paper`. Cada bloque lleva icono a la izquierda (`ui/FormIcon.tsx`).

**Campos:** First name / Last name (dos campos en un grid) · teléfono · email · tipo de
cargo · fecha (calendario nativo) · condado (Harris · Fort Bend · Montgomery · Galveston ·
Brazoria · Waller · Liberty · Chambers · Other).

**Luego:** bloque de fondo tenue con borde izquierdo y el texto de penalidades · preguntas
específicas con opciones clickeables · checklist de envío · botón
**"Call me within 5 minutes"** · y debajo
`I read these myself. Not a call center. Rather talk now? 713-429-1624` (enlace `tel:`).

Ver "Decisiones" para el mecanismo del traslape.

---

## 7. Memberships & Recognition → `sections/Memberships.tsx`

Grid de 5 columnas (2 en móvil): logo arriba, nombre debajo. Sobre `bg-ink` con capa de
`radial-gradient`. Los cinco logos están en `public/images/associations/`; los nombres
salen de la lista de badges de las propuestas de referencia.

**Título:** centrado, `font-display text-[24px] tracking-[0.06em]`, `mb-20`. Sin el
`border-r` que traía el diseño original.

> Ubicada entre las secciones 8 y 9, no antes del contenido del video.
>
> `superlawyers-logo.svg` es un wordmark horizontal (576×127) metido en una caja cuadrada
> de 74/86px con `object-contain`: se ve bastante más chico que sus cuatro vecinos
> circulares. Es consecuencia del código original, no un bug.

---

## 8. Contenido del video → `sections/VideoContent.tsx`

Fondo claro (`bg-paper`). Es un **resumen** del guion, no su desarrollo completo:

1. Encabezado "What changed on July 31, and what didn't".
2. Dos tarjetas comparativas — *Now controlled* (borde `accent`, fondo `orange/5`) y
   *Not changed* (borde `ink-muted`, fondo blanco). El mock las distingue en rojo y verde,
   que no existen en los tokens.
3. Cuatro bloques cortos: *Why nobody warned you*, *The part almost nobody talks about*,
   *You do not have to own it to be charged with it*, *Where these cases are actually won*.
4. El descargo de Gary ("Nothing here is legal advice…"), que está en el guion.

---

## 9. Formulario de consulta gratis → `sections/ConsultationForm.tsx`

Formulario centrado (`max-w-[720px]`) sobre `bg-ink`.

**Cabecera, dentro del formulario y centrada:** "GARY TABAKMAN, PLLC" +
"Houston Criminal Law and Family Law" + la línea de "Schedule a free consultation".

**Dos bloques con icono a la izquierda:**
- *Your information* — first name / last name (mismo grid) · email · phone
- *Message* — textarea

**Checkboxes:** "I have read the website disclaimer and privacy policy" ·
"I consent to receiving communication via SMS text". **Botón:** Submit.

> El bloque "Contact / Phone / Address" que traía el diseño original se eliminó. **El
> teléfono y la dirección hoy solo existen en el footer.**

---

## 10. Footer → `sections/Footer.tsx`

Cuatro columnas sobre `#0E0C08`: descripción del despacho, Criminal Defense, Firm y
Contact; fila de copyright con el año dinámico; y el disclaimer legal completo.

Diferencias con el diseño original: sin Dennis Hester, sin la constante `ACCENT` (no se
usaba) y con `Container` en vez de `px-6 max-w-7xl`, para alinear con el resto de la página.

---

## Decisiones que costaron varias iteraciones

Lo que sigue se resolvió a base de intentos. No re-litigar sin leer el porqué.

**El formulario flotante no puede ser una celda del grid.**
Puesto como celda normal, el grid iguala la altura de la fila a la del elemento más alto —
y el formulario mide ~1250px. Resultado: la imagen del hero se estiraba hasta abajo del
formulario. Va en `xl:absolute xl:top-[120px] xl:right-0 xl:w-[448px]` dentro de su celda,
que queda `relative`. Al salir del flujo, **la altura del hero la define solo la columna
izquierda**. Los 120px son la altura exacta del titular (`pt-14` + eyebrow + regla + margen).

**El traslape necesita orden de pintado explícito.**
El hero va en `z-10` y las secciones 4 y 5 en `z-0`, o el formulario desbordado queda
tapado por ellas. Además el `overflow: hidden` vive en `.backdrop`, no en `.hero`: en
`.hero` recortaba el formulario.

**El hueco entre el texto del hero y el formulario.**
Con medidas de `46ch`/`44ch` el texto ocupaba ~370px de una columna de ~800px y dejaba casi
500px muertos. Se resolvió con dos palancas juntas: ensanchar las medidas
(titular `20ch`, párrafos `70ch`/`66ch`, cuerpo a 18px) **y** cerrar el gap del hero a
`xl:gap-10`. En sentido inverso, tips y resultados quedaron en `xl:gap-28`.

**La imagen del hero: manda el ancho.**
Es full-bleed (`100vw`), no los 1400px del contenedor. Con `object-fit: cover` sobre una
banda de ~3:1 desde una fuente 16:9, la escala la decide el ancho y **solo se recorta en
vertical** — la posición horizontal no tiene ningún efecto. **Mínimo 2560px de ancho**;
3840 es el techo (el `srcset` de Next no genera más). Con menos hay que compensar con
`blur()`, que es una muleta, no una solución.

> **Estado actual:** el asset es `Gary-Background.webp`, de **1916×821**, por debajo de ese
> mínimo, y se mantiene
> así por decisión tomada. `Hero.module.css` lo compensa **bajando la opacidad de la foto
> a `0.72`** en vez de con `blur()`: fundida contra el ink del fondo, los artefactos del
> reescalado dejan de leerse y la imagen queda como textura. Si algún día entra una imagen
> de 2560px o más, se sube la opacidad.

**Estilos globales fuera de `@layer base` rompen la página entera.**
Ver la sección correspondiente en `CLAUDE.md`. El `* { margin: 0; padding: 0 }` de
create-next-app anulaba **todas** las utilidades de espaciado de Tailwind.

**No dejar `next dev` corriendo.**
Next 16 se niega a arrancar un segundo dev server sobre el mismo directorio y sale con
`[ELIFECYCLE] exit code 1`, rompiendo la terminal del usuario.

---

## Criterios de aceptación

- Las secciones existen y respetan el orden de render de arriba (que **no** es el orden
  numérico).
- Cero colores fuera de los design tokens, salvo los literales heredados del código
  original documentados en la prohibición 4 de `CLAUDE.md`.
- Cero copy fuera del guion y de las propuestas derivadas de él. Única excepción de datos:
  las cifras de demo de la sección 5, marcadas en el propio archivo.
- El disclaimer legal del footer, intacto.
- `pnpm lint` (0 errores), `npx tsc --noEmit` y `pnpm build` pasan.
- Render correcto a 1440px y 375px — lo verifica el usuario.
- Ningún formulario envía ni valida.
