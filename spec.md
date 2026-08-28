# spec.md — Layout base para landings por tipo de caso

El *qué* de esta tarea. Las reglas fijas del proyecto están en `CLAUDE.md`.

**Recursos obligatorios** (no describir de memoria, leerlos):
- `context/guion-presentacion.md` — única fuente del copy
- `context/propuestas-referencia/` — 2 propuestas HTML existentes
- `context/layout-referencia.png` — imagen del layout objetivo

---

## Orden de secciones

1. Top bar (header sticky)
2. Continuidad desde YouTube
3. Navbar + Hero image
4. Tres tips del caso
5. Resultados de casos de Gary
6. Formulario flotante (superpuesto sobre 3–5)
7. Memberships & Recognition
8. Contenido del video
9. Formulario de consulta gratis
10. Footer

---

## 1. Top bar

Sticky. Lado izquierdo: disponibilidad de Gary y ubicación. Lado derecho: botón que
hace scroll hasta el formulario de consulta rápida (sección 9).

```tsx
<header className="sticky top-0 z-50">
  <div className="bg-[#14110D] px-6 py-2.5 text-[11px] tracking-[0.05em] text-[#fffbf8c7]">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
      <div
        className="flex items-center gap-5"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <span className="inline-flex items-center gap-2 uppercase">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: ACCENT }}
          />
          Available for Federal Cases Nationwide
        </span>
        <span className="hidden uppercase sm:inline">Houston, Texas</span>
      </div>
      <div
        className="hidden items-center gap-6 uppercase sm:flex"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <Link href="/contact" className="transition-colors hover:text-white">
          Free Consultation
        </Link>
      </div>
    </div>
  </div>
```

---

## 2. Continuidad desde YouTube

Debajo del top bar. Una sola línea, con icono a la izquierda. CTA de continuidad con
el video del que viene el visitante:

> You came from the video on the July 31 THC rule change. **Everything below picks up
> where it left off.**

---

## 3. Navbar + Hero image

Sección combinada:

- Navbar con el mismo estilo, pero **sin fondo detrás**.
- División horizontal blanca debajo del navbar.
- Hero image de fondo, con opacidad balanceada para que las opciones del navbar, el
  headline y su descripción se lean con claridad.
- **Lado izquierdo del hero:** título referente al video de YouTube de donde vino el CTA,
  más una descripción.

---

## 4. Tres tips del caso

Empieza debajo del hero, con **color sólido** (usar la colorimetría de `globals.css`).

- Tres tips importantes relacionados con el caso específico.
- Organizados en grid de tres columnas horizontales.
- Línea vertical al lado izquierdo de la primera columna del grid.

---

## 5. Resultados de casos de Gary

Estructura, en orden:

1. Línea divisoria superior de color.
2. Título.
3. Grid de tres columnas horizontales con los números de las evidencias.
4. Lista de dos columnas sobre subcasos particulares relacionados: primera columna el
   número, segunda columna la descripción de ese conteo de casos. Cada fila separada por
   una línea blanca horizontal inferior.
5. Toda la sección lleva un borde tenue blanco, igual a los bordes inferiores de los
   elementos listados.

> Los números salen del guion. Si no están ahí, usar placeholders explícitos y avisar
> (ver Prohibición 5 en `CLAUDE.md`).

---

## 6. Formulario flotante

Posición: lado derecho, desde la altura del título dentro del hero image hasta terminar
la sección de resultados. Cubre por su lado derecho la altura del hero y de la sección
de color sólido debajo de este.

Color claro (colorimetría de `globals.css`). Cada elemento lleva icono a la izquierda,
seguido del título de la sección, y debajo los campos con default text de relleno.

**Campos:**

1. Nombre — First and Last name
2. Número de teléfono
3. Correo electrónico
4. Tipo de cargo
   - Día en que ocurrió el crimen o cargo — selección por calendario flotante
   - Condado en el que ocurrió el crimen o cargo — lista:
     Harris · Fort Bend · Montgomery · Galveston · Brazoria · Waller · Liberty ·
     Chambers · Other

**A partir de aquí el contenido cambia según el crimen o cargo seleccionado.**
Estructura habitual:

1. Sección de fondo tenue con línea en el borde izquierdo y texto relacionado dentro.
2. Sección con preguntas más específicas, con opciones clickeables ordenadas.
3. Checklist donde se acepta enviar esta información.
4. Botón de envío con el texto: **Call me within 5 minutes**
5. Texto debajo del botón:
   `I read these myself. Not a call center. Rather talk now? 713-429-1624` (enlace `tel:`)

---

## 7. Memberships & Recognition

Grid de 5 columnas. Cada espacio: imagen arriba, nombre debajo.

```tsx
<section className="relative overflow-hidden bg-ink border-b border-line-cream px-[46px] max-sm:px-[22px] py-[36px]">
  <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_0%,rgba(229,81,0,0.14),transparent_60%)]" />
  <div className="relative z-[2] mx-auto max-w-[1400px]">
    <span className="mb-7 inline-flex font-serif text-[12px] font-semibold tracking-[0.2em] uppercase text-white/90 whitespace-nowrap border-r border-line-cream pr-[30px]">
      Memberships &amp; Recognition
    </span>
    <div className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-8 sm:grid-cols-5 sm:gap-x-8 sm:gap-y-0">
      {associations.map(({ abbr, name, logo }) => (
        <div key={abbr} className="flex w-full max-w-[220px] flex-col items-center justify-start gap-[10px] text-center">
          <img src={"/images/associations/" + logo} alt={name} className="h-[74px] w-[74px] object-contain sm:h-[86px] sm:w-[86px]" />
          <span
            key={abbr}
            className="mt-1 block w-full text-white/92 text-center font-serif text-base font-semibold tracking-[0.01em]"
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## 8. Contenido del video

Fondo de color claro. Presenta la información relacionada al video, tomada del guion,
dividida en subtítulos con el texto debajo.

---

## 9. Formulario de consulta gratis

**Encabezado:**

```
GARY TABAKMAN, PLLC
Houston Criminal Law and Family Law

Contact

Phone
713-429-1624

Address
Law Office of Gary Tabakman, PLLC
4801 Woodway Drive, Suite 300 West
Houston, Texas 77056
```

**Campos:** First and last name · email · phone · message

**Checkboxes de confirmación:**
- I have read the website disclaimer and privacy policy
- I consent to receiving communication via SMS text

**Botón:** Submit

---

## 10. Footer

```tsx
import Link from "next/link";

const ACCENT = "#E55100";
const ACCENT_LIGHT = "#FF6B1A";

const criminalDefenseLinks = [
  { label: "Federal Crimes", href: "/federal" },
  { label: "State Crimes", href: "/state-crimes" },
  { label: "Appeals & Post-Conviction", href: "/appeals" },
  { label: "Parole", href: "/parole" },
];

const firmLinks = [
  { label: "Gary Tabakman", href: "/attorneys/gary-tabakman" },
  { label: "Dennis Hester", href: "/attorneys/dennis-hester" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0E0C08] px-6 pb-8 pt-16 text-[#fffbf8b8]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-[#fffbf824] pb-10 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p
              className="text-sm leading-relaxed text-[#fffbf8b3]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Law Office of Gary Tabakman, PLLC. Serving Texas state courts and
              federal court nationwide.
            </p>
            <p
              className="mt-3 text-base italic text-[#fffbf8de]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              You are not just another case.
            </p>
            <a
              href="tel:7134291624"
              className="mt-5 inline-block text-sm font-semibold tracking-[0.12em] uppercase"
              style={{ color: ACCENT_LIGHT, fontFamily: "var(--font-inter), sans-serif" }}
            >
              713-429-1624
            </a>
          </div>

          <div>
            <h4
              className="mb-4 text-[11px] uppercase tracking-[0.14em] text-[#fffbf880]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Criminal Defense
            </h4>
            <div className="space-y-2.5">
              {criminalDefenseLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[#fffbf8b8] transition-colors hover:text-[#FF6B1A]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="mb-4 text-[11px] uppercase tracking-[0.14em] text-[#fffbf880]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Firm
            </h4>
            <div className="space-y-2.5">
              {firmLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[#fffbf8b8] transition-colors hover:text-[#FF6B1A]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="mb-4 text-[11px] uppercase tracking-[0.14em] text-[#fffbf880]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Contact
            </h4>
            <div
              className="space-y-2.5 text-sm text-[#fffbf8b8]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <a href="tel:7134291624" className="block transition-colors hover:text-[#FF6B1A]">
                713-429-1624
              </a>
              <p>Fax 713-808-9444</p>
              <a
                href="mailto:Gary@GTlawfirm.com"
                className="block transition-colors hover:text-[#FF6B1A]"
              >
                Gary@GTlawfirm.com
              </a>
              <p>
                4801 Woodway Drive
                <br />
                Suite 300 West
                <br />
                Houston, TX 77056
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-3 py-6 text-[12px] tracking-[0.06em] text-[#fffbf873] md:flex-row md:items-center md:justify-between"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          <p>
            © {year} Gary Tabakman · All rights reserved ·
            <span style={{ color: ACCENT_LIGHT }}> Content by Gary Tabakman</span>
          </p>
          <div className="flex items-center gap-3">
            <Link href="/disclaimer-privacy" className="transition-colors hover:text-white">
              Disclaimer & Privacy
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/sitemap.xml" className="transition-colors hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>

        <p
          className="text-[11px] leading-relaxed text-[#fffbf85f]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Attorney advertising. Prior results do not guarantee a similar outcome.
          The information on this website is for general informational purposes
          only and does not constitute legal advice or create an attorney-client
          relationship.
        </p>
      </div>
    </footer>
  );
}
```

---

## Criterios de aceptación

- Las 10 secciones existen y están en el orden de arriba.
- Cero colores fuera de los design tokens.
- Cero copy fuera del guion; los datos faltantes quedan como placeholder explícito.
- `npm run lint`, `npx tsc --noEmit` y `npm run build` pasan.
- Render correcto a 1440px y 375px.
- Ningún formulario envía ni valida.
