import Container from "@/components/ui/Container";
import FormIcon, { type FormIconName } from "@/components/ui/FormIcon";

// Mismo criterio que en CaseIntakeForm: campos en garamond a 16px, etiquetas
// en inter.
const fieldClass =
  "w-full rounded-[3px] border border-line-cream bg-ink-soft px-3.5 py-3 font-serif text-[16px] text-white outline-none placeholder:text-white/40 focus:border-accent";

const labelClass =
  "mb-1.5 block font-inter text-[11px] font-semibold tracking-[0.08em] text-white/50 uppercase";

// Encabezado de bloque: icono a la izquierda + título de la sección.
function BlockHeading({
  icon,
  children,
}: {
  icon: FormIconName;
  children: string;
}) {
  return (
    <p className="mb-5 flex items-center gap-2.5 font-inter text-[12px] font-semibold tracking-[0.1em] text-white uppercase">
      <span className="text-accent">
        <FormIcon name={icon} />
      </span>
      {children}
    </p>
  );
}

export default function ConsultationForm() {
  return (
    <section id="consultation" className="bg-ink py-20 lg:py-24">
      <Container>
        {/* Maqueta: sin action, sin onSubmit, sin validación. */}
        <form className="mx-auto max-w-[720px] border border-line-cream p-7 sm:p-10">
          {/* Encabezado de la sección 9, centrado dentro del formulario */}
          <div className="border-b border-line-cream pb-8 text-center">
            <p className="font-display text-[24px] leading-tight font-semibold tracking-[0.06em] text-white">
              GARY TABAKMAN, PLLC
            </p>
            <p className="mt-2 font-inter text-[11px] font-semibold tracking-[0.14em] text-accent uppercase">
              Houston Criminal Law and Family Law
            </p>
            <p className="mt-5 font-serif text-[15.5px] leading-relaxed text-white/60">
              Schedule a free consultation. For general inquiries, please submit
              the following contact form.
            </p>
          </div>

          <div className="pt-8">
            <BlockHeading icon="user">Your information</BlockHeading>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="consult-first-name">
                    First name
                  </label>
                  <input
                    id="consult-first-name"
                    type="text"
                    placeholder="First name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="consult-last-name">
                    Last name
                  </label>
                  <input
                    id="consult-last-name"
                    type="text"
                    placeholder="Last name"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="consult-email">
                  Email
                </label>
                <input
                  id="consult-email"
                  type="email"
                  placeholder="you@email.com"
                  className={fieldClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="consult-phone">
                  Phone
                </label>
                <input
                  id="consult-phone"
                  type="tel"
                  placeholder="(713) 000-0000"
                  className={fieldClass}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-line-cream pt-8">
            <BlockHeading icon="message">Message</BlockHeading>
            {/* El título del bloque ya dice "Message": la etiqueta queda solo
                para lectores de pantalla. */}
            <label className="sr-only" htmlFor="consult-message">
              Message
            </label>
            <textarea
              id="consult-message"
              rows={5}
              placeholder="Tell me what happened"
              className={`${fieldClass} resize-y`}
            />
          </div>

          <div className="mt-6 space-y-3">
            <label className="flex items-start gap-2.5 font-inter text-[12px] leading-relaxed text-white/60">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 flex-none accent-accent"
              />
              <span>I have read the website disclaimer and privacy policy</span>
            </label>
            <label className="flex items-start gap-2.5 font-inter text-[12px] leading-relaxed text-white/60">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 flex-none accent-accent"
              />
              <span>I consent to receiving communication via SMS text</span>
            </label>
          </div>

          <button
            type="button"
            className="mt-7 w-full rounded-[3px] bg-accent px-4 py-3.5 font-inter text-[14px] font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:bg-orange-deep"
          >
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
}
