// Los cinco logos son los que existen en public/images/associations/.
// Los nombres visibles salen de la lista de badges de las propuestas de
// referencia ("Best of the Best", "Super Lawyers", "NACDL",
// "State Bar of Texas", "Nat'l Trial Lawyers").
const associations = [
  { abbr: "BOTB", name: "Best of the Best", logo: "BOTB_2021.png" },
  { abbr: "SL", name: "Super Lawyers", logo: "superlawyers-logo.svg" },
  { abbr: "NACDL", name: "NACDL", logo: "nacdl-logo.svg" },
  { abbr: "TXBAR", name: "State Bar of Texas", logo: "TX-State-Logo.jpg" },
  {
    abbr: "NTL",
    name: "National Trial Lawyers Top 100",
    logo: "NTL-Top-100.webp",
  },
];

export default function Memberships() {
  return (
    <section className="relative overflow-hidden bg-ink border-b border-line-cream px-[46px] max-sm:px-[22px] py-[36px]">
      <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_0%,rgba(229,81,0,0.14),transparent_60%)]" />
      <div className="relative z-[2] mx-auto max-w-[1400px]">
        {/* 24px: mismo tamaño que el título "GARY TABAKMAN, PLLC" de la
            sección de consulta. Sin whitespace-nowrap, para que a 375px pueda
            partirse en dos líneas en vez de desbordarse. */}
        {/* Misma tipografía que "GARY TABAKMAN, PLLC" de la sección de
            consulta: font-display, 24px, semibold, tracking 0.06em. */}
        <span className="mb-20 block text-center font-display text-[24px] font-semibold tracking-[0.06em] uppercase text-white/90">
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
  );
}
