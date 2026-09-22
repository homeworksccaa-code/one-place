import React from "react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-6"
      aria-label="ONEPLACE"
    >
      <h1
        className="font-display font-semibold text-center leading-[0.9] tracking-[-0.04em] text-white"
        style={{ fontSize: "clamp(3.5rem, 13vw, 13rem)" }}
      >
        ONEPLACE
      </h1>

      <p
        className="mt-10 sm:mt-14 text-center font-body font-light tracking-[0.28em] uppercase text-white/55"
        style={{ fontSize: "clamp(0.6rem, 1.4vw, 0.8rem)" }}
      >
        All Your Content. One Place.
      </p>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-white/40"
          style={{ animation: "opPulse 2.8s var(--ease) infinite" }}
        >
          Role para explorar
        </span>

        <span
          className="block w-px h-10 bg-white/30"
          style={{ animation: "opPulse 2.8s var(--ease) infinite" }}
        />
      </div>

      <style>{`
        @keyframes opPulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
