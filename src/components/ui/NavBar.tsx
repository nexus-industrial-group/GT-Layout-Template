import Container from "@/components/ui/Container";

// Links de la navegación del despacho (tomados de las propuestas de referencia).
// Son anclas: el prototipo es una sola página, no hay rutas internas.
const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Attorney Profiles", href: "#top" },
  { label: "Criminal Defense", href: "#top" },
  { label: "Blog", href: "#top" },
  { label: "Contact", href: "#consultation" },
];

export default function NavBar() {
  return (
    // Fondo translúcido sobre la imagen del hero, no un color sólido.
    // bg-ink/30 es el único punto a mover para suavizarlo más o menos.
    // La línea blanca inferior separa el navbar del contenido del hero.
    <nav className="border-b border-white/20 bg-ink/30">
      <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 py-6">
        <a href="#top" className="leading-tight">
          <span className="block font-display text-[20px] font-semibold tracking-[0.09em] text-white">
            GARY TABAKMAN
          </span>
          <span className="mt-1 block font-inter text-[9.5px] font-semibold tracking-[0.14em] text-accent">
            ATTORNEY AT LAW
          </span>
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-inter text-[12px] tracking-[0.1em] text-white/75 uppercase transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="tel:7134291624"
            className="font-inter text-[12px] font-bold tracking-[0.1em] text-white transition-colors hover:text-accent"
          >
            713-429-1624
          </a>
        </div>
      </Container>
    </nav>
  );
}
