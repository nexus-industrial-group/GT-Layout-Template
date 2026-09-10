import CaseIntakeForm from "@/components/sections/CaseIntakeForm";
import CaseTips from "@/components/sections/CaseTips";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Memberships from "@/components/sections/Memberships";
import TopBar from "@/components/sections/TopBar";
import VideoContent from "@/components/sections/VideoContent";

export default function Home() {
  return (
    <>
      {/* 1. Top bar (header sticky) */}
      <TopBar />

      <main className="flex-1">
        {/* 2. Continuidad desde YouTube — su contenido se movió al top bar
            (sección 1). El componente VideoContinuity sigue en el repo por si
            hay que devolverlo a su banda propia. */}

        {/* 3. Navbar + Hero image — recibe el formulario de la sección 6 en su
            columna derecha, desde donde se desborda sobre la sección 4 */}
        <Hero floatingForm={<CaseIntakeForm />} />

        {/* 4. Tres tips del caso */}
        <CaseTips />

        {/* 5. Resultados de casos de Gary — quitada a pedido del usuario.
            El componente CaseResults sigue en el repo sin usar, por si hay que
            devolverla. Llevaba cifras de demo sin verificar. */}

        {/* 8. Contenido del video */}
        <VideoContent />

        {/* 7. Memberships & Recognition — va después del contenido del video
            y antes del formulario, no en el orden numérico de spec.md */}
        <Memberships />

        {/* 9. Formulario de consulta gratis — quitada del render a pedido del
            usuario. El componente ConsultationForm sigue en el repo sin usar,
            por si hay que devolverla. Con la sección fuera, el ancla
            #consultation deja de existir: el CTA del top bar y el link
            "Contact" del navbar apuntan a #top (hero), donde vive el
            formulario de intake de la sección 6. */}
      </main>

      {/* 10. Footer */}
      <Footer />
    </>
  );
}
