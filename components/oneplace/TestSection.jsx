import React from "react";
import { ArrowRight } from "lucide-react";
import { EASE, LEVEL_TEST_URL } from "./data";
import Reveal from "./Reveal";

export default function TestSection() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-[16vh] border-t border-white/10">
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        <Reveal className="lg:col-span-7">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-white/45 font-medium">
            02 — Teste de Nível
          </p>

          <h2
            className="mt-8 font-display font-light text-white leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
          >
            Teste seu inglês.
          </h2>

          <p
            className="mt-8 max-w-[48ch] font-body font-light text-white/55 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)" }}
          >
            Descubra seu nível de inglês e entenda quais habilidades você já
            domina.
          </p>

          <a
            href={LEVEL_TEST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-white border-b border-white/30 hover:border-white pb-2 transition-colors duration-500"
            style={{ transitionTimingFunction: EASE }}
          >
            Faça o teste

            <ArrowRight
              size={16}
              strokeWidth={2}
              className="transition-transform duration-500 group-hover:translate-x-1.5"
              style={{ transitionTimingFunction: EASE }}
            />
          </a>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-5">
          <div className="border border-white/10 p-10 sm:p-12">

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium">
              OnePlace / Teste de Nível
            </p>

            <p className="mt-6 font-display text-white text-5xl sm:text-6xl font-light tracking-[-0.02em]">
              01
            </p>

            <p className="mt-6 font-body font-light text-white/60 leading-relaxed text-sm">
              Um teste de nivelamento que avalia vocabulário, gramática e
              compreensão para posicionar você no nível correto.
            </p>

            <div className="mt-8 h-px w-full bg-white/15" />

            <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/35">
              Disponível agora
            </p>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
