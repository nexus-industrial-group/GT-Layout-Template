import type { ReactNode } from "react";

// Shell horizontal compartido por todas las secciones, con el ancho y los
// paddings que define spec.md (§7): max-w-[1400px] · 46px · 22px en móvil.
// Todas las secciones alinean su borde izquierdo contra este contenedor.
export default function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1400px] px-[46px] max-sm:px-[22px] ${className}`.trimEnd()}
    >
      {children}
    </div>
  );
}
