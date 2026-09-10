import Link from "next/link";
import Container from "@/components/ui/Container";

const ACCENT_LIGHT = "#FF6B1A";

const criminalDefenseLinks = [
  { label: "Federal Crimes", href: "/federal" },
  { label: "State Crimes", href: "/state-crimes" },
  { label: "Appeals & Post-Conviction", href: "/appeals" },
  { label: "Parole", href: "/parole" },
];

const firmLinks = [
  { label: "Gary Tabakman", href: "/attorneys/gary-tabakman" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0E0C08] pb-8 pt-16 text-[#fffbf8b8]">
      {/* Container en lugar del `px-6 max-w-7xl` original: alinea el borde
          izquierdo del footer con el del resto de la página. */}
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-[#fffbf824] pb-10 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p
              className="text-sm leading-relaxed text-[#fffbf8b3]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Law Office of Gary Tabakman, PLLC. Serving Texas state courts and
              federal court nationwide.
            </p>
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
      </Container>
    </footer>
  );
}
