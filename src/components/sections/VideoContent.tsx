import { Fragment } from "react";
import Container from "@/components/ui/Container";

// Resumen del video, condensado siguiendo el cuerpo de la propuesta de
// referencia (context/reference-proposal/Texas THC Ban — Charged_...html).
// Solo lo más importante del guion: qué cambió, qué no, y los tres puntos
// que deciden un caso.
const controlled = [
  "Delta-8 THC",
  "Delta-10 THC",
  "THCP and related isomers",
  "Vape cartridges, wax, dabs, and concentrates containing the above",
];

const unchanged = [
  "Hemp at or below 0.3% Delta-9 THC by dry weight",
  "Compliant Delta-9 gummies, edibles, and beverages",
  "Qualifying patients under the Compassionate Use Program",
  "Two ounces or less of flower (Still a Class B misdemeanor, not a felony)",
];

const points: { heading: string; body: string[]; wide?: boolean }[] = [
  /* Comentados a pedido: el copy nuevo de esta sección solo trae el bloque de
     abajo. "You do not have to own it" además ya está dicho en el tip 03 de
     CaseTips; "Why nobody warned you" no está en ninguna otra parte de la
     página, así que descomentarlo es la única forma de recuperar ese contenido.
  {
    heading: "Why nobody warned you",
    body: [
      "This did not come from the legislature. A 2025 bill that would have banned these products passed and was vetoed, and two special sessions produced no major hemp bill. What actually happened is that definitions adopted in 2021 sat tied up in litigation for years — which is exactly why these products filled the shelves. The Texas Supreme Court cleared that in May, notices were published in July, and the definitions took effect July 31. No signing ceremony. No countdown.",
    ],
  },
  {
    heading: "You do not have to own it to be charged with it",
    body: [
      "Texas uses constructive possession. If the state can show you knew the item was there and had some control over the space it was in, that can be enough — a cartridge in the cup holder while you drive three friends home, or in a kitchen drawer your roommate uses. “It wasn’t mine” is rarely a complete defense by itself.",
    ],
  },
  */
  {
    heading: "Where these cases are actually won",
    // Se parte en dos columnas: título y body[0] a la izquierda, body[1] a la derecha.
    wide: true,
    body: [
      "The state has to prove exactly what the substance is. Not what it looked like, not what the packaging said, and not what the officer assumed at the roadside. They need a laboratory analysis that specifically distinguishes illegal Delta-8 from compliant 0.3% Delta-9 with a reliable chain of custody. There is no roadside field test that can do this.",
      "Furthermore, these cases almost never stem from deep investigations. They come from traffic stops — a lane change, a taillight, a claimed smell, or a consent to search given because someone didn’t know they could say no. The outcome of your case usually turns on why the officer stopped you in the first place and what happened in the four minutes after, not just what was in the cartridge. Let me look at the facts, the chemistry, and the lab report, and we will find out what the state can actually prove.",
    ],
  },
];

export default function VideoContent() {
  return (
    <section id="video-content" className="bg-paper py-20 lg:py-24">
      <Container>
        <div className="max-w-[62ch]">
          {/* <p className="font-inter text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
            From the video
          </p> */}
          <h2 className="font-display text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.2] font-semibold text-ink">
              Where you stand right now
          </h2>
        </div>

        {/* Las dos columnas: lo que quedó controlado y lo que no cambió */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="border border-line border-l-[3px] border-l-accent bg-orange/5 px-6 py-6">
            <h3 className="font-display text-[19px] font-semibold text-ink">
              Now Controlled (Felony Risk)
            </h3>
            <ul className="mt-4 space-y-2 pl-5 font-serif text-[16px] leading-snug text-ink-soft [&>li]:list-disc marker:text-accent">
              {controlled.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {/* <p className="mt-5 font-inter text-[13px] leading-relaxed font-semibold text-orange-deep">
              Concentrates fall in Penalty Group 2. Under one gram is a state
              jail felony — 180 days to 2 years and a fine up to $10,000.
            </p> */}
          </div>

          <div className="border border-line border-l-[3px] border-l-ink-muted bg-white px-6 py-6">
            <h3 className="font-display text-[19px] font-semibold text-ink">
                Unchanged (Legal or Misdemeanor)
            </h3>
            <ul className="mt-4 space-y-2 pl-5 font-serif text-[16px] leading-snug text-ink-soft [&>li]:list-disc marker:text-ink-muted">
              {unchanged.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {/* <p className="mt-5 font-inter text-[13px] leading-relaxed font-semibold text-ink-soft">
              Two ounces or less of flower is still a Class B misdemeanor, not a
              felony.
            </p> */}
          </div>
        </div>

        {/* El bloque `wide` se parte en dos columnas: el título y el primer
            párrafo a la izquierda, el segundo a la derecha. Las filas se fijan
            a mano (row-start) en vez de dejar que el grid las acomode solo, y
            así los dos párrafos arrancan a la misma altura aunque solo uno
            tenga título encima. En móvil es flujo normal y salen apilados.
            Los bloques normales (hoy comentados) siguen usando la rama de
            abajo, de una sola columna. */}
        <div className="mt-12 grid gap-x-14 gap-y-6 border-t border-line pt-10 md:grid-cols-2">
          {points.map(({ heading, body, wide }) =>
            wide ? (
              <div
                key={heading}
                className="md:col-span-2 md:grid md:grid-cols-2 md:gap-x-14"
              >
                {/* Misma escala y leading que el h2 de "Where you stand right
                    now"; sigue siendo h3 porque cuelga de él. */}
                <h3 className="font-display text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.2] font-semibold text-ink md:col-start-1 md:row-start-1">
                  {heading}
                </h3>
                {/* mt-10: el mismo aire que el h2 de la sección deja antes de
                    las dos tarjetas. Los dos párrafos comparten fila, así que
                    en md llevan el mismo margen o dejan de alinear arriba. */}
                <p className="mt-10 font-serif text-[16px] leading-[1.7] text-ink-soft md:col-start-1 md:row-start-2">
                  {body[0]}
                </p>
                <p className="mt-6 font-serif text-[16px] leading-[1.7] text-ink-soft md:col-start-2 md:row-start-2 md:mt-10">
                  {body[1]}
                </p>
              </div>
            ) : (
              <div key={heading}>
                <h3 className="font-display text-[19px] leading-snug font-semibold text-ink">
                  {heading}
                </h3>
                <p className="mt-3 font-serif text-[16px] leading-[1.7] text-ink-soft">
                  {body.map((line, i) => (
                    <Fragment key={line}>
                      {/* Dos <br /> entre líneas: uno corta el renglón y el otro
                          deja la línea en blanco que separa los dos bloques. */}
                      {i > 0 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                      {line}
                    </Fragment>
                  ))}
                </p>
              </div>
            ),
          )}
        </div>

        {/* <p className="mt-12 font-serif text-[14.5px] leading-relaxed text-ink-muted">
          Nothing here is legal advice, and reading it doesn’t make me your
          lawyer. But by the end you’ll know where you stand.
        </p> */}
      </Container>
    </section>
  );
}
