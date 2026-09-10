import type { ReactNode } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import NavBar from "@/components/ui/NavBar";
import styles from "./Hero.module.css";

export default function Hero({ floatingForm }: { floatingForm?: ReactNode }) {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true">
        <Image
          src="/images/hero/Gary-Background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.photo}
        />
        <div className={styles.veil} />
      </div>

      <div className="relative z-10">
        <NavBar />

        <Container>
          <div className="grid items-start gap-12 xl:grid-cols-[minmax(0,1fr)_448px] xl:gap-10">
            {/* Lado izquierdo: título del video y su descripción.
                Este bloque define solo la altura del hero: la imagen termina
                justo debajo del último párrafo. */}
            <div className="pt-12 pb-10 lg:pt-14 lg:pb-10">
              <p className="font-inter text-[11px] font-semibold tracking-[0.18em] text-accent uppercase">
                Texas THC Rule Change · Effective July 31, 2026
              </p>

              <span className={`${styles.rule} mt-5`} aria-hidden="true" />

              <h1 className="mt-6 max-w-[20ch] font-display text-[clamp(2.1rem,3.6vw,3.15rem)] leading-[1.14] font-semibold tracking-[0.01em] text-white uppercase">
                A cartridge is a felony. A gummy may still be legal
              </h1>

              <p className="mt-6 max-w-[70ch] font-serif text-[18px] leading-[1.75] text-white/75">
                On <strong className="font-semibold text-white">July 31, 2026</strong>,
                Delta-8, Delta-10, and THCP became controlled substances in Texas.
                The products you legally bought at a regular store with a debit card
                are now treated as contraband. Concentrates fall into Penalty Group 2
                —{" "}
                <strong className="font-semibold text-white">
                  meaning under a single gram is a state jail felony
                </strong>
                . Meanwhile, a small amount of flower remains a misdemeanor, and
                certain Delta-9 edibles are still legal.
              </p>

              <p className="mt-7 max-w-[66ch] border-l-2 border-accent pl-5 font-serif text-[18px] leading-[1.7] text-white/90">
                Tell me what was actually found and where. I’ll tell you which side
                of that line you’re on.
              </p>
            </div>

            {/* Columna derecha: formulario flotante (sección 6).
                En desktop se posiciona en absoluto para NO estirar la fila del
                grid — si no, la imagen del hero crecería hasta la altura del
                formulario. Arranca a la altura del titular y se desborda sobre
                la sección 4. En móvil vuelve al flujo normal. */}
            <div className="relative z-20 pb-12 xl:pb-0">
              <div className="xl:absolute xl:top-[120px] xl:right-0 xl:w-[448px]">
                {floatingForm}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
