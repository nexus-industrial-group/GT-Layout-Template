import Container from "@/components/ui/Container";

// Los tres tips salen del guion: la reclasificación de los concentrados,
// la ausencia de cláusula de anterioridad y la posesión constructiva.
const tips = [
  {
    index: "01",
    title: "A vape pen isn’t a citation. In Texas, it’s an automatic felony",
    body:
      "You aren’t looking at a minor ticket and a fine. Concentrates fall into Penalty Group 2. Less than one gram is a state jail felony carrying 180 days to 2 years, a fine up to $10,000, and a potential six-month driver’s license suspension.",
  },
  {
    index: "02",
    title: "There is no grandfather clause",
    body:
      "Possession offenses look at what you have right now. The receipt in your email for a legally purchased Delta-8 vape in June does not change the felony classification of what you were pulled over with today.",
  },
  {
    index: "03",
    title: "You don’t have to own it",
    body:
      "Texas uses constructive possession. A cartridge in the cupholder while driving friends, or in a shared kitchen drawer, is enough for a charge if the state can show you knew it was there and had control over the space. “It wasn’t mine” is rarely a complete defense.",
  },
];

export default function CaseTips() {
  return (
    // El pb extra en xl es el carril de ink que le queda al formulario flotante
    // del hero: arranca 120px dentro del hero y mide ~1300px, así que cuelga
    // ~800px por debajo. Antes ese sobrante lo absorbían esta sección y la 5;
    // al quitarse la 5, esta tiene que dar sola el fondo oscuro, o la cola del
    // formulario cae sobre el paper claro de la sección 8. Solo aplica en xl:
    // bajo 1280px el formulario vuelve al flujo y no sobra nada.
    <section className="relative z-0 bg-ink pt-[49px] pb-[279px] lg:pt-[65px] lg:pb-[295px] xl:pb-[305px]">
      <Container>
        <div className="grid xl:grid-cols-[minmax(0,1fr)_448px] xl:gap-28">
          <div>
            <p className="mb-8 font-inter text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
              Three things to know before you do anything
            </p>

            {/* Tres filas, no tres columnas: la línea vertical accent corre por
                la izquierda de las tres.

                La medida del body alinea su borde derecho con el del párrafo
                del hero. No basta con copiar su `max-w-[70ch]`: `ch` escala con
                el font-size, y ahí el cuerpo es de 18px y aquí de 15.5px. Como
                las dos usan font-serif, la conversión es exacta:
                70ch × (18 / 15.5) = 81.3ch. A eso se le restan los 26px que
                este texto ya viene corrido a la derecha — los 2px del
                border-l accent más el pl-6 de cada fila — que el hero no
                tiene. Si cambia cualquiera de los dos font-size, rehacer la
                cuenta. */}
            <div className="grid gap-10 border-l-2 border-accent">
              {tips.map(({ index, title, body }) => (
                <div key={index} className="pl-6">
                  <p className="font-inter text-[11px] font-semibold tracking-[0.16em] text-white/40">
                    {index}
                  </p>
                  <h3 className="mt-3 font-display text-[19px] leading-snug font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-[calc(81.3ch_-_26px)] font-serif text-[15.5px] leading-relaxed text-white/70">
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
