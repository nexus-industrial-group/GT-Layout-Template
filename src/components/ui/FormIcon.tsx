// Iconos de línea para los encabezados del formulario flotante (spec §6).
// Inline y sin dependencias: heredan el color con currentColor.
const paths = {
  user: (
    <>
      <path d="M4 20a8 8 0 0 1 16 0" />
      <circle cx="12" cy="7.5" r="4" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4 3 7.4 7 9 4-1.6 7-5 7-9V6z" />
      <path d="m9.5 12 1.8 1.8 3.4-3.6" />
    </>
  ),
  check: (
    <>
      <path d="M4 12.5 9 17.5 20 6.5" />
    </>
  ),
  message: (
    <>
      <path d="M20 15a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 12.5h5" />
    </>
  ),
} as const;

export type FormIconName = keyof typeof paths;

export default function FormIcon({ name }: { name: FormIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px] flex-none"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
