import FormIcon from "@/components/ui/FormIcon";

const counties = [
  "Harris",
  "Fort Bend",
  "Montgomery",
  "Galveston",
  "Brazoria",
  "Waller",
  "Liberty",
  "Chambers",
  "Other",
];

// Tipos de producto/cargo, del guion: las formas que cambiaron de categoría
// el 31 de julio y las que no.
const chargeTypes = [
  "Vape cart or disposable",
  "Wax, dabs, or concentrate",
  "Gummies or edibles",
  "Flower or bud",
  "Tincture or oil",
  "More than one kind",
  "Nothing yet (I just have it at home)",
];

// Preguntas específicas. Salen del guion: la parada de tráfico, el
// consentimiento para registrar y el análisis de laboratorio.
const questions = [
  {
    label: "Why did the officer stop you?",
    options: [
      "Traffic violation",
      "Smell",
      "Checkpoint",
      "Someone called police",
      "I don’t know",
    ],
  },
  {
    label: "Did you agree to a search?",
    options: [
      "Yes",
      "No (they searched anyway)",
      "They had a warrant",
      "Not sure",
    ],
  },
  {
    label: "Has a lab report come back?",
    options: ["Yes", "No", "I don’t know"],
  },
];

// Los campos van en garamond (font-serif), no en inter: es la tipografía de
// cuerpo del sitio y lo que el usuario escribe es texto de cuerpo. Garamond
// tiene la altura-x más baja que Inter, así que 14px se leía chico: se
// compensa a 16px, que además evita el zoom automático de iOS al enfocar.
// Las etiquetas se quedan en inter — son labels, y ese es su uso asignado.
const fieldClass =
  "w-full rounded-[3px] border border-line bg-white px-3 py-2.5 font-serif text-[16px] text-ink-soft outline-none placeholder:text-ink-muted focus:border-accent";

const labelClass =
  "mb-1.5 block font-inter text-[11px] font-semibold tracking-[0.08em] text-ink-muted uppercase";

// Encabezado de bloque: icono a la izquierda + título de la sección.
function BlockHeading({
  icon,
  children,
}: {
  icon: "user" | "file" | "shield" | "check";
  children: string;
}) {
  return (
    <p className="mb-4 flex items-center gap-2.5 font-inter text-[12px] font-semibold tracking-[0.1em] text-ink uppercase">
      <span className="text-accent">
        <FormIcon name={icon} />
      </span>
      {children}
    </p>
  );
}

export default function CaseIntakeForm() {
  return (
    // Maqueta: sin action, sin onSubmit, sin validación.
    <form className="rounded-[5px] border border-line bg-paper shadow-[0_18px_44px_rgba(20,17,13,0.34)]">
      <div className="border-b border-line bg-white px-6 py-5">
        {/* El nombre no se enfatiza con negritas: el contraste lo dan la escala,
            la tipografía y el color. "I'm" retrocede a serif chico y muted;
            el nombre se queda solo con la display a tamaño pleno sobre ink. */}
        <p className="font-display text-[22px] leading-tight text-ink">
          <span className="font-serif text-[15px] text-ink-muted">I’m </span>
          Gary Tabakman
        </p>
        <p className="mt-1.5 font-serif text-[15px] leading-snug text-ink-muted">
          Whatever you tell me stays with me.
        </p>
      </div>

      <div className="px-6 py-6">
        {/* 1–3. Datos de contacto */}
        <BlockHeading icon="user">How to reach out</BlockHeading>
        <div className="space-y-3.5">
          {/* Nombre: una sola etiqueta para los dos campos. Al perder su label
              propio, cada input se nombra con aria-label — el placeholder no
              cuenta como nombre accesible. */}
          <div>
            <p className={labelClass}>First name &amp; Last name</p>
            <div className="grid grid-cols-2 gap-3">
              <input
                id="intake-first-name"
                type="text"
                aria-label="First name"
                placeholder="First name"
                className={fieldClass}
              />
              <input
                id="intake-last-name"
                type="text"
                aria-label="Last name"
                placeholder="Last name"
                className={fieldClass}
              />
            </div>
          </div>

          {/* Contacto: una sola etiqueta, teléfono arriba y email debajo. */}
          <div>
            <p className={labelClass}>Phone number &amp; Email</p>
            <div className="space-y-3">
              <input
                id="intake-phone"
                type="tel"
                aria-label="Phone number"
                placeholder="(713) 000-0000"
                className={fieldClass}
              />
              <input
                id="intake-email"
                type="email"
                aria-label="Email"
                placeholder="you@email.com"
                className={fieldClass}
              />
            </div>
          </div>
        </div>

        {/* 4. Tipo de cargo, fecha y condado */}
        <div className="mt-7 border-t border-line pt-6">
          <BlockHeading icon="file">What happened?</BlockHeading>
          <div className="space-y-3.5">
            <div>
              <label className={labelClass} htmlFor="intake-charge">
                Type of charge
              </label>
              <select id="intake-charge" className={fieldClass} defaultValue="">
                <option value="" disabled>
                  What was found?
                </option>
                {chargeTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Fecha y condado bajo una sola etiqueta, igual que el nombre.
                Sin label propio, cada campo se nombra con aria-label; el
                placeholder del select pasa de "Select" a "County", que sin la
                etiqueta encima era lo único que lo identificaba. */}
            <div>
              <p className={labelClass}>Date it happened &amp; County</p>
              <div className="grid grid-cols-2 gap-3">
                <input
                  id="intake-date"
                  type="date"
                  aria-label="Date it happened"
                  className={fieldClass}
                />
                <select
                  id="intake-county"
                  aria-label="County"
                  className={fieldClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    County
                  </option>
                  {counties.map((county) => (
                    <option key={county}>{county}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Bloque de fondo tenue con línea en el borde izquierdo */}
        {/* <div className="mt-7 border-l-[3px] border-accent bg-[color-mix(in_srgb,var(--color-orange)_7%,transparent)] px-4 py-3.5">
          <p className="font-inter text-[10.5px] font-semibold tracking-[0.1em] text-orange-deep uppercase">
            Why the answer matters
          </p>
          <p className="mt-1.5 font-serif text-[14.5px] leading-relaxed text-ink-soft">
            Concentrates fall into Penalty Group 2 — under one gram is a state
            jail felony, 180 days to 2 years and a fine up to $10,000. Two ounces
            or less of flower is still a Class B misdemeanor.
          </p>
        </div> */}

        {/* Preguntas específicas con opciones clickeables */}
        <div className="mt-7 border-t border-line pt-6">
          <BlockHeading icon="shield">What happened during the stop?</BlockHeading>
          <div className="space-y-5">
            {questions.map(({ label, options }) => (
              <div key={label}>
                <p className="mb-2.5 font-serif text-[15px] font-semibold text-ink-soft">
                  {label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="rounded-[3px] border border-line-strong bg-white px-3 py-2 font-serif text-[15px] text-ink-soft transition-colors hover:border-accent hover:text-ink"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist de envío. El texto que estaba debajo del botón subió aquí,
            al mismo párrafo del consentimiento. El <label> envuelve solo la
            frase de consentimiento, no el párrafo entero: si lo envolviera,
            un clic en el teléfono marcaría también la casilla. */}
        <div className="mt-7 border-t border-line pt-6">
          <BlockHeading icon="check">Before you send</BlockHeading>
          <div className="flex items-start gap-2.5 font-inter text-[12px] leading-relaxed text-ink-muted">
            <input
              id="intake-consent"
              type="checkbox"
              className="mt-0.5 h-4 w-4 flex-none accent-accent"
            />
            <p>
              <label htmlFor="intake-consent">
                It’s okay to call, text, or email me. Sending this doesn’t create
                an attorney–client relationship.
              </label>{" "}
              I read these myself. Not a call center. Rather talk now? Call{" "}
              <a
                href="tel:7134291624"
                className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
              >
                713-429-1624
              </a>{" "}
              within 5 minutes.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-[3px] bg-accent px-4 py-3.5 font-inter text-[14px] font-semibold tracking-[0.06em] text-white uppercase transition-colors hover:bg-orange-deep"
        >
          Call me within 5 minutes
        </button>
      </div>
    </form>
  );
}
