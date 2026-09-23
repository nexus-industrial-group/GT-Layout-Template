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

**2. Grid de dos columnas — hero y tips**

```
xl:grid-cols-[minmax(0,1fr)_448px]
```

La pista de 448px queda **reservada y vacía** en la sección 4: es el carril por el que baja
el formulario flotante. Las dos secciones deben declarar el mismo `grid-template`, o el
borde izquierdo del contenido deja de alinear entre ellas.

**3. Breakpoint del traslape — `xl` (1280px)**

Por debajo de 1280px todo se apila y el formulario cae al flujo normal, debajo del texto
del hero. No es `lg`: a 1024px la columna izquierda quedaba en ~420px y el grid de tres
tips salía en columnas de 118px.

Los *gaps* son distintos a propósito: `xl:gap-10` en el hero (texto pegado al formulario)
y `xl:gap-28` en tips (aire contra el formulario).

---

## Orden de secciones

```
1  Top bar (sticky, incluye la continuidad del video)
3  Navbar + Hero image
4  Tres tips del caso
8  Contenido del video
7  Memberships & Recognition
10 Footer
```

**6** (formulario de intake) flota sobre 3–4. **2** quedó absorbida por **1**.
**5** y **9** se quitaron — con la 9 fuera, el único formulario de la página es el
flotante de la sección 6.

La numeración se conserva para poder rastrear cada sección contra su versión original.
El orden de render vive en `src/app/page.tsx`.

---

## 1. Top bar → `sections/TopBar.tsx`

Sticky, `z-50`, sobre `#14110D`.

- **Izquierda:** icono de play en `accent` + la línea de continuidad con el video.
  La frase "You came from the video on the July 31 THC rule change." es un **enlace** a
  `https://www.youtube.com/watch?v=dYFH4IEx53g` (`target="_blank"`, `rel="noopener noreferrer"`),
  seguida de "Now let's find out where you stand." en blanco semibold.
- **Derecha:** "Free Consultation", ancla a `#top` (hero). Oculto bajo `sm`. Apuntaba a
  `#consultation` (sección 9) hasta que esa sección salió del render.

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

Color sólido `bg-ink`. El padding vertical (`pt-[49px] pb-[279px] lg:pt-[65px]
lg:pb-[295px] xl:pb-[305px]`) se afinó a ojo contra el render; el `pb` de cada breakpoint
lleva 230px sumados a pedido del cliente sobre los valores originales (49 / 65 / 75), en
cuatro pasadas de 30px, 80px, 100px y 20px. El `pb` ya no es solo el carril del formulario: el
cliente pidió además una franja de ink vacía bajo los tips, así que no lo recortes
"optimizándolo" contra la altura del formulario: el `xl:pb` es el carril de
ink para la cola del formulario flotante, ver "Decisiones". Los tres tips van en **tres filas, no en tres
columnas**, con **una línea vertical `accent` a la izquierda de las tres**. El cuerpo lleva
`max-w-[70ch]` — a lo ancho de la columna izquierda, una línea sin medida se pasa de los
85 caracteres. Los tres tips salen del guion: reclasificación de concentrados
a Penalty Group 2, ausencia de cláusula de anterioridad, y posesión constructiva.

---

## 5. Resultados de casos de Gary

**Removida del render** a pedido del usuario. `sections/CaseResults.tsx` sigue en el repo
sin usar, por si hay que devolverla; conserva su aviso `⚠ CIFRAS DE DEMO — NO PUBLICAR SIN
VERIFICAR`, porque sus números nunca se verificaron contra los expedientes de Gary. Si
vuelve al render, siguen aplicando la prohibición 5 de `CLAUDE.md` y la advertencia del
propio archivo.

---

## 6. Formulario flotante → `sections/CaseIntakeForm.tsx`

Vive en la columna derecha del hero y se desborda hacia abajo sobre la sección 4.
Color claro sobre `bg-paper`. Cada bloque lleva icono a la izquierda (`ui/FormIcon.tsx`).

**Campos**, agrupados bajo **una sola etiqueta por grupo** — los inputs sin label propio
se nombran con `aria-label`, porque el placeholder no cuenta como nombre accesible:

- *Full Name* — los dos campos (nombre y apellido) en un grid de dos columnas bajo esa
  etiqueta única.
- *Phone number & Email* — teléfono arriba, email debajo.
- *Type of charge* — select, con `What was found?` de placeholder.
- *Date it happened & County* — fecha (calendario nativo) y condado en un grid de dos
  columnas (Harris · Fort Bend · Montgomery · Galveston · Brazoria · Waller · Liberty ·
  Chambers · Other).

**Luego:** preguntas específicas con opciones clickeables · checklist de envío — que
cierra con
`I read these myself. Not a call center. Rather talk now? Call 713-429-1624 within 5
minutes.` (enlace `tel:`) en el mismo párrafo del consentimiento · y el botón
**"Call me within 5 minutes"** al final.

> El `<label>` de ese párrafo envuelve **solo** la frase de consentimiento, no el párrafo
> entero: si lo envolviera, un clic en el teléfono marcaría también la casilla.

**Opciones de las preguntas:** grid de **dos columnas** (`gap-2.5`), no pills que se
ajustan al texto. Cada celda es un `<button type="button">` de ancho igual, `min-h-[56px]`,
`px-4 py-3`, texto `font-serif text-[15px]` alineado a la izquierda y centrado en vertical,
borde `border-line` y fondo blanco. Las celdas de una misma fila comparten altura, así que
una opción de dos líneas estira a su pareja — eso es lo que da el aire formal y regular.
Una opción impar al final ocupa **una sola columna**, no la fila completa.

El bloque de fondo tenue con el texto de penalidades (*"Why the answer matters"*) está
**comentado**, no borrado — ver la tabla de la sección 8.

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

Fondo claro (`bg-paper`). Es un **resumen** del guion, no su desarrollo completo. Lo que
se renderiza hoy:

1. Encabezado **"Where you stand right now"** (`h2`, `font-display`,
   `text-[clamp(1.75rem,2.6vw,2.25rem)]`).
2. Dos tarjetas comparativas — *Now Controlled (Felony Risk)* (borde `accent`, fondo
   `orange/5`) y *Unchanged (Legal or Misdemeanor)* (borde `ink-muted`, fondo blanco). El
   mock las distingue en rojo y verde, que no existen en los tokens.
3. Un solo bloque, **"Where these cases are actually won"**, partido en dos columnas:
   título y primer párrafo a la izquierda, el párrafo de *Furthermore* a la derecha. El
   título usa la misma escala que el `h2` de la sección.

### Contenido oculto, no borrado

A pedido del cliente, estos bloques quedaron **comentados en su sitio** en vez de
eliminarse, para poder revertirlos en una edición. **No los borres ni los "limpies".**

| Qué | Dónde |
|---|---|
| Eyebrow *"From the video"* | `VideoContent.tsx` |
| *"Why nobody warned you"* | `VideoContent.tsx`, array `points` |
| *"You do not have to own it to be charged with it"* | `VideoContent.tsx`, array `points` |
| Última fila de cada tarjeta (penalidades de PG2 / dos onzas de flower) | `VideoContent.tsx` |
| Descargo *"Nothing here is legal advice…"* | `VideoContent.tsx` |
| Bloque *"Why the answer matters"* | `CaseIntakeForm.tsx` |

> Dos apuntes al descomentar: el `h2` perdió su `mt-5` cuando se ocultó el eyebrow, así
> que hay que devolvérselo si el eyebrow vuelve; y *"You do not have to own it"* repite el
> tip 03 de la sección 4, mientras que *"Why nobody warned you"* no está en ninguna otra
> parte de la página — descomentarlo es la única forma de recuperar ese contenido.

### Dos ramas de render

`points.map` tiene dos ramas: la de `wide` (dos columnas, un `<p>` por entrada de `body`)
y la normal, de una columna, que separa las entradas de `body` con dos `<br />`. La rama
normal hoy no la usa nadie — existe para que descomentar cualquiera de los dos bloques
cortos lo devuelva exactamente como estaba.

Las filas del bloque `wide` se fijan a mano (`md:row-start-*`) en vez de dejar que el grid
las acomode: así los dos párrafos arrancan a la misma altura aunque solo el de la
izquierda tenga título encima.

---

## 9. Formulario de consulta gratis → `sections/ConsultationForm.tsx`

**Removida del render** a pedido del usuario. `sections/ConsultationForm.tsx` sigue en el
repo sin usar, por si hay que devolverla. Con la sección fuera, el ancla `#consultation`
deja de existir en la página: el CTA **Free Consultation** del top bar y el link
**Contact** del navbar apuntan ahora a `#top`, es decir al hero, donde vive el formulario
de intake de la sección 6 — el único que queda. Si la sección vuelve al render, hay que
devolver esas dos anclas a `#consultation`.

Lo que describe el resto de esta sección es el componente tal como quedó:

Formulario centrado (`max-w-[720px]`) sobre `bg-ink`.

**Cabecera, dentro del formulario y centrada:** "GARY TABAKMAN, PLLC" +
"Houston Criminal Law and Family Law" + la línea de "Schedule a free consultation".

**Dos bloques con icono a la izquierda:**
- *Your information* — mismas agrupaciones que el intake: nombre y apellido en un grid de
  dos columnas y *Phone number & Email* apilados, teléfono arriba. Su etiqueta de nombre
  sigue siendo *First name & Last name*: la sección está fuera del render y no se tocó
  cuando el intake pasó a *Full Name*
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
El hero va en `z-10` y la sección 4 en `z-0`, o el formulario desbordado queda tapado por
ella. Además el `overflow: hidden` vive en `.backdrop`, no en `.hero`: en
`.hero` recortaba el formulario.

**El hueco entre el texto del hero y el formulario.**
Con medidas de `46ch`/`44ch` el texto ocupaba ~370px de una columna de ~800px y dejaba casi
500px muertos. Se resolvió con dos palancas juntas: ensanchar las medidas
(titular `20ch`, párrafos `70ch`/`66ch`, cuerpo a 18px) **y** cerrar el gap del hero a
`xl:gap-10`. En sentido inverso, tips quedó en `xl:gap-28`.

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

**Quitada la sección 5, la 4 sostiene sola el formulario flotante.**
El formulario arranca 120px dentro del hero y mide ~1300px, así que cuelga ~800px por
debajo del hero, cuya altura la fija solo la columna izquierda (~630px a 1440px). Ese
sobrante lo absorbían las secciones 4 y 5 juntas; con la 5 fuera, la 4 sola daba ~570px de
ink y la cola del formulario caía sobre el `bg-paper` de la sección 8 — que además no
reserva la pista de 448px, así que se encimaba con su texto. Se compensa con
`xl:pb-[305px]` en `CaseTips`. Solo en `xl`: por debajo de 1280px el formulario vuelve al
flujo y no sobra nada. **El valor es un ajuste visual, no un cálculo exacto** — si la
altura del formulario, del titular del hero o de los tips cambia, hay que re-tunearlo
mirando el render a 1440px.
>
> Quitar la sección **9** no toca este cálculo — está muy por debajo del traslape —, pero
> sí cambia el cierre de la página, que ahora va `Memberships` → `Footer`.

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
- Cero copy fuera del guion y de las propuestas derivadas de él. Con la sección 5 fuera
  del render, la página ya no muestra ninguna cifra de demo.
- El disclaimer legal del footer, intacto.
- `pnpm lint` (0 errores), `npx tsc --noEmit` y `pnpm build` pasan.
- Render correcto a 1440px y 375px — lo verifica el usuario.
- Ningún formulario envía ni valida (hoy solo queda el de la sección 6).
- Ningún ancla de la página apunta a un `id` que no exista en el render.
