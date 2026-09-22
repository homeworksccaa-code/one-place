import React from "react";
import { ArrowRight } from "lucide-react";
import { EASE, CLASSES_URL } from "./data";
import Reveal from "./Reveal";

export default function Classes() {
  const active = Boolean(CLASSES_URL);

  return (
    <section
      id="classes"
      className="px-6 sm:px-10 lg:px-16 py-[16vh] border-t border-white/10"
    >
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        <Reveal className="lg:col-span-7">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-white/45 font-medium">
            07 — Aulas
          </p>

          <h2
            className="mt-8 font-display font-light text-white leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
          >
            Aulas personalizadas.
            <br />
            <span className="text-white/55">Progresso real.</span>
          </h2>

          <p
            className="mt-8 max-w-[50ch] font-body font-light text-white/55 leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
          >
            Aulas particulares e em grupo, online, com foco no que você realmente
            precisa: viagens, trabalho, estudos e muito mais.
          </p>

          {active ? (
            <a
              href={CLASSES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-white border-b border-white/30 hover:border-white pb-2 transition-colors duration-500"
              style={{ transitionTimingFunction: EASE }}
            >
              Ver nossas aulas
              <ArrowRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-500 group-hover:translate-x-1.5"
                style={{ transitionTimingFunction: EASE }}
              />
            </a>
          ) : (
            <span className="mt-12 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/40 border border-white/15 px-4 py-3">
              Aulas em breve
            </span>
          )}
        </Reveal>

        <Reveal delay={150} className="lg:col-span-5">
          <div className="aspect-[4/5] border border-white/10 bg-[#070707] flex items-center justify-center">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              OnePlace / Classes
            </span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
