import Container from "@/components/ui/Container";

export default function VideoContinuity() {
  // bg-ink = #14110D, el mismo negro del top bar
  return (
    <section className="border-b border-line-cream bg-ink py-4">
      <Container className="flex items-center justify-center gap-3">
        <svg
          viewBox="0 0 20 15"
          className="h-[15px] w-5 flex-none"
          aria-hidden="true"
        >
          <rect width="20" height="15" rx="3" className="fill-accent" />
          <path d="M8 4.4 13.2 7.5 8 10.6Z" className="fill-white" />
        </svg>
        <p className="font-inter text-[13px] leading-snug text-white/70">
          You came from the video on the July 31 THC rule change.{" "}
          <strong className="font-semibold text-white">
            Everything below picks up where it left off.
          </strong>
        </p>
      </Container>
    </section>
  );
}
