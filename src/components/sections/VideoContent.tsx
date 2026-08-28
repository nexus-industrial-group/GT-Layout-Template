import Container from "@/components/ui/Container";

// Resumen del video, condensado siguiendo el cuerpo de la propuesta de
// referencia (context/reference-proposal/Texas THC Ban — Charged_...html).
// Solo lo más importante del guion: qué cambió, qué no, y los tres puntos
// que deciden un caso.
const controlled = [
  "Delta-8 THC",
  "Delta-10 THC",
  "THCP and related isomers",
  "Vape cartridges, wax, dabs, and concentrates containing them",
];

const unchanged = [
  "Hemp at or below 0.3% delta-9 THC by dry weight",
  "Compliant delta-9 gummies and edibles",
  "The marijuana possession statute — same law, same weights",
  "The Compassionate Use Program for qualifying patients",
];

const points = [
  {
    heading: "Why nobody warned you",
    body:
      "This did not come from the legislature. A 2025 bill that would have banned these products passed and was vetoed, and two special sessions produced no major hemp bill. What actually happened is that definitions adopted in 2021 sat tied up in litigation for years — which is exactly why these products filled the shelves. The Texas Supreme Court cleared that in May, notices were published in July, and the definitions took effect July 31. No signing ceremony. No countdown.",
  },
  {
    heading: "The part almost nobody talks about",
    body:
      "The state has to prove what the substance actually is. Not what it looked like, not what the packaging said, not what the officer believed at the roadside. That means laboratory analysis distinguishing Delta-8 from compliant Delta-9, with instrumentation and a chain of custody that holds up. There is no roadside kit that tells an officer which isomer is in a cartridge. Harris County went through this exact problem in 2019, when the hemp law took effect and the labs could not keep up.",
  },
  {
    heading: "You do not have to own it to be charged with it",
    body:
      "Texas uses constructive possession. If the state can show you knew the item was there and had some control over the space it was in, that can be enough — a cartridge in the cup holder while you drive three friends home, or in a kitchen drawer your roommate uses. “It wasn’t mine” is rarely a complete defense by itself.",
  },
  {
    heading: "Where these cases are actually won",
    body:
      "These cases almost never come from an investigation. They come from traffic stops — a lane change, a tail light, a smell, a consent to search that somebody gave because they did not know they could say no. The case usually turns on why the officer stopped you and what happened in the four minutes after, not on what was in the cartridge.",
  },
];

export default function VideoContent() {
  return (
    <section id="video-content" className="bg-paper py-20 lg:py-24">
      <Container>
        <div className="max-w-[62ch]">
          <p className="font-inter text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
            From the video
          </p>
          <h2 className="mt-5 font-display text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.2] font-semibold text-ink">
            What changed on July 31, and what didn’t
          </h2>
          <p className="mt-5 font-serif text-[17px] leading-[1.7] text-ink-soft">
            If you bought something legally in June and are trying to work out
            whether it is contraband now, start with the two columns below.
          </p>
        </div>

        {/* Las dos columnas: lo que quedó controlado y lo que no cambió */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="border border-line border-l-[3px] border-l-accent bg-orange/5 px-6 py-6">
            <h3 className="font-display text-[19px] font-semibold text-ink">
              Now controlled
            </h3>
            <ul className="mt-4 space-y-2 pl-5 font-serif text-[16px] leading-snug text-ink-soft [&>li]:list-disc marker:text-accent">
              {controlled.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-5 font-inter text-[13px] leading-relaxed font-semibold text-orange-deep">
              Concentrates fall in Penalty Group 2. Under one gram is a state
              jail felony — 180 days to 2 years and a fine up to $10,000.
            </p>
          </div>

          <div className="border border-line border-l-[3px] border-l-ink-muted bg-white px-6 py-6">
            <h3 className="font-display text-[19px] font-semibold text-ink">
              Not changed
            </h3>
            <ul className="mt-4 space-y-2 pl-5 font-serif text-[16px] leading-snug text-ink-soft [&>li]:list-disc marker:text-ink-muted">
              {unchanged.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-5 font-inter text-[13px] leading-relaxed font-semibold text-ink-soft">
              Two ounces or less of flower is still a Class B misdemeanor, not a
              felony.
            </p>
          </div>
        </div>

        {/* Los tres puntos que deciden el caso */}
        <div className="mt-12 grid gap-x-14 gap-y-10 border-t border-line pt-10 md:grid-cols-2">
          {points.map(({ heading, body }) => (
            <div key={heading}>
              <h3 className="font-display text-[19px] leading-snug font-semibold text-ink">
                {heading}
              </h3>
              <p className="mt-3 font-serif text-[16px] leading-[1.7] text-ink-soft">
                {body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-[62ch] font-serif text-[14.5px] leading-relaxed text-ink-muted">
          Nothing here is legal advice, and reading it doesn’t make me your
          lawyer. But by the end you’ll know where you stand.
        </p>
      </Container>
    </section>
  );
}
