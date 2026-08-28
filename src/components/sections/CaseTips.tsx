import Container from "@/components/ui/Container";

// Los tres tips salen del guion: la reclasificación de los concentrados,
// la ausencia de cláusula de anterioridad y la posesión constructiva.
const tips = [
  {
    index: "01",
    title: "A cartridge is not a ticket",
    body:
      "Concentrates fall into Penalty Group 2. Under one gram is a state jail felony — 180 days to 2 years and a fine up to $10,000. A drug conviction can also cost you your driver’s license for six months.",
  },
  {
    index: "02",
    title: "There is no grandfather clause",
    body:
      "Possession offenses look at what you have now. The receipt sitting in your email doesn’t change the classification of what you got pulled over with.",
  },
  {
    index: "03",
    title: "You don’t have to own it",
    body:
      "Texas uses constructive possession. If the state can show you knew the item was there and had some control over the space it was in, that can be enough. “It wasn’t mine” is rarely a complete defense.",
  },
];

export default function CaseTips() {
  return (
    <section className="relative z-0 bg-ink py-16 lg:py-20">
      <Container>
        <div className="grid xl:grid-cols-[minmax(0,1fr)_448px] xl:gap-28">
          <div>
            <p className="mb-8 font-inter text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
              Three things to know before you do anything
            </p>

            {/* Línea vertical al lado izquierdo de la primera columna */}
            <div className="grid gap-10 border-l-2 border-accent sm:grid-cols-3 sm:gap-8">
              {tips.map(({ index, title, body }) => (
                <div key={index} className="pl-6 sm:pl-6">
                  <p className="font-inter text-[11px] font-semibold tracking-[0.16em] text-white/40">
                    {index}
                  </p>
                  <h3 className="mt-3 font-display text-[19px] leading-snug font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 font-serif text-[15.5px] leading-relaxed text-white/70">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna reservada al formulario flotante (sección 6) */}
          <div className="hidden xl:block" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
