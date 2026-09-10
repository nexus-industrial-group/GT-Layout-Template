import Container from "@/components/ui/Container";

const ACCENT = "#E55100";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#14110D] py-3 text-[11px] tracking-[0.05em] text-[#fffbf8c7]">
        <Container className="flex items-center justify-between gap-6">
          {/* Continuidad con el video del que viene el visitante */}
          <div
            className="flex items-center gap-2.5"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            <svg
              viewBox="0 0 20 15"
              className="h-[15px] w-5 flex-none"
              aria-hidden="true"
            >
              <rect width="20" height="15" rx="3" fill={ACCENT} />
              <path d="M8 4.4 13.2 7.5 8 10.6Z" className="fill-white" />
            </svg>
            <span className="text-[12px] leading-snug">
              <a
                href="https://www.youtube.com/watch?v=dYFH4IEx53g"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-accent underline-offset-4 transition-colors hover:text-white"
              >
                You came from the video on the July 31 THC rule change.
              </a>{" "}
              <strong className="font-semibold text-white">
                Now let’s find out where you stand.
              </strong>
            </span>
          </div>
          <div
            className="hidden items-center gap-6 uppercase sm:flex"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {/* Apuntaba a la sección 9 (#consultation); esa sección salió del
                render, así que ahora sube al hero, donde vive el formulario de
                intake de la sección 6. */}
            <a
              href="#top"
              className="whitespace-nowrap transition-colors hover:text-white"
            >
              Free Consultation
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
