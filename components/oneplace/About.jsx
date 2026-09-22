import React from "react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 sm:px-10 lg:px-16 py-[18vh] border-t border-white/10"
    >
      <div className="mx-auto max-w-[1600px]">

        <Reveal>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-white/45 font-medium">
            08 — Sobre
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="mt-8 sm:mt-12 font-display font-light text-white leading-[1.05] tracking-[-0.02em] max-w-[20ch]"
            style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)" }}
          >
            Mais que um site.
            <br />
            <span className="text-white/55">Um ecossistema.</span>
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

            <p
              className="lg:col-span-7 max-w-[60ch] font-body font-light text-white/55 leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)" }}
            >
              O OnePlace nasceu com um objetivo simples: reunir em um só lugar
              ferramentas, conteúdo e recursos para ajudar você a aprender inglês
              de forma prática, real e no seu ritmo. O projeto reúne aulas,
              vídeos, ferramentas, exercícios e novos recursos que serão
              adicionados ao longo do tempo.
            </p>

            <ul className="lg:col-span-5 lg:justify-self-end flex flex-col gap-3 text-sm">
              {[
                { label: "Aprender", href: "#learn" },
                { label: "Ferramentas", href: "#tools" },
                { label: "Vídeos", href: "#videos" },
                { label: "Aulas", href: "#classes" },
                { label: "Comunidade", href: "#about" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/50 hover:text-white uppercase tracking-[0.2em] text-[11px] font-medium transition-colors duration-500"
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        </Reveal>

        <Reveal delay={260}>
          <p
            className="mt-20 sm:mt-28 font-display font-semibold text-white/8 tracking-[-0.04em] leading-[0.9] select-none"
            style={{ fontSize: "clamp(3rem, 14vw, 14rem)" }}
            aria-hidden="true"
          >
            ONE PLACE.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
