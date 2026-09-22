import React from "react";
import { Instagram, ArrowRight } from "lucide-react";
import { EASE, INSTAGRAM_URL } from "./data";
import Reveal from "./Reveal";

export default function InstagramSection() {
  const active = Boolean(INSTAGRAM_URL);

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-[16vh] border-t border-white/10">
      <div className="mx-auto max-w-[1600px]">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">

          <Reveal className="lg:col-span-7">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-white/45 font-medium">
              06 — Siga o Daily English
            </p>

            <h2
              className="mt-8 font-display font-light text-white leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
            >
              Vídeos curtos.
              <br />
              <span className="text-white/55">Expressões reais.</span>
              <br />
              Inglês prático.
            </h2>

            <p
              className="mt-8 max-w-[48ch] font-body font-light text-white/55 leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
            >
              Siga o OnePlace no Instagram para receber dicas, expressões,
              curiosidades e conteúdo rápido de inglês.
            </p>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <div className="flex lg:justify-end">

              {active ? (
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-white border-b border-white/30 hover:border-white pb-2 transition-colors duration-500"
                  style={{ transitionTimingFunction: EASE }}
                >
                  <Instagram size={18} strokeWidth={1.5} />
                  Seguir @oneplace
                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    className="transition-transform duration-500 group-hover:translate-x-1"
                    style={{ transitionTimingFunction: EASE }}
                  />
                </a>
              ) : (
                <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/40 border border-white/15 px-4 py-3">
                  <Instagram size={16} strokeWidth={1.5} />
                  Instagram em breve
                </span>
              )}

            </div>
          </Reveal>

        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">

          {[0, 1, 2, 3].map((i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="relative aspect-[9/16] border border-white/10 bg-[#070707] flex items-end p-4">

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Em breve
                </span>

                <span className="absolute top-4 right-4">
                  <Instagram
                    size={15}
                    strokeWidth={1.5}
                    className="text-white/25"
                  />
                </span>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
