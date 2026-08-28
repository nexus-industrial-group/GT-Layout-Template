import Container from "@/components/ui/Container";

// ⚠ CIFRAS DE DEMO — NO PUBLICAR SIN VERIFICAR.
// El guion no contiene ninguna cifra de resultados de casos. Estos números
// vienen de la propuesta de referencia (que los marca como inventados para el
// mock) y se dejan aquí a pedido expreso para que el cliente vea la maqueta
// terminada. Antes de que el sitio salga a producción, Gary tiene que
// reemplazarlos con datos verificables de sus expedientes.
const headlineStats = [
  {
    value: "31",
    label: "Drug cases dismissed when the lab couldn’t prove the substance",
  },
  {
    value: "47",
    label: "Stops suppressed — evidence thrown out",
  },
  {
    value: "22",
    label: "Cases rejected at intake before charges were filed",
  },
];

const ledger = [
  {
    value: "64",
    label: "Consent searches challenged as involuntary",
  },
  {
    value: "29",
    label: "Cases where the state never distinguished Delta-8 from compliant Delta-9",
  },
  {
    value: "18",
    label: "Constructive possession charges dropped — it wasn’t theirs",
  },
  {
    value: "12",
    label: "State jail felonies reduced to misdemeanors",
  },
  {
    value: "0",
    label: "Clients who talked to an officer again after hiring me",
  },
];

export default function CaseResults() {
  return (
    <section id="results" className="relative z-0 bg-ink pb-20 lg:pb-28">
      <Container>
        <div className="grid xl:grid-cols-[minmax(0,1fr)_448px] xl:gap-28">
          {/* Borde tenue blanco en toda la sección, con línea superior de color */}
          <div className="border border-t-[3px] border-line-cream border-t-accent px-6 py-8 sm:px-8">
            <h2 className="font-display text-[26px] leading-tight font-semibold text-white">
              Gary’s drug case results
            </h2>

            {/* Grid de tres columnas con los números */}
            <div className="mt-8 grid gap-7 sm:grid-cols-3 sm:gap-6">
              {headlineStats.map(({ value, label }) => (
                <div key={value}>
                  <p className="font-display text-[40px] leading-none font-semibold tracking-[-0.02em] text-accent">
                    {value}
                  </p>
                  <p className="mt-3 font-inter text-[12.5px] leading-relaxed text-white/65">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Lista de dos columnas: número y descripción, separadas por línea */}
            <div className="mt-9 border-t border-line-cream">
              {ledger.map(({ value, label }) => (
                <div
                  key={value}
                  className="flex flex-col gap-1 border-b border-line-cream py-3 sm:flex-row sm:items-baseline sm:gap-5"
                >
                  <p className="font-display text-[20px] leading-none font-semibold text-accent sm:w-[54px] sm:flex-none">
                    {value}
                  </p>
                  <p className="font-serif text-[15px] leading-snug text-white/70">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 font-inter text-[11px] leading-relaxed text-white/40">
              Past results are not a guarantee of future outcomes.
            </p>
          </div>

          {/* Columna reservada al formulario flotante (sección 6) */}
          <div className="hidden xl:block" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
