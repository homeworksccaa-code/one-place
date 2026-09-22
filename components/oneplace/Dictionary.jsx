import React, { useState } from "react";
import { Search, Volume2 } from "lucide-react";
import { EASE } from "./data";
import Reveal from "./Reveal";

export default function Dictionary() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setSubmitted(true);
  };

  return (
    <section
      id="dictionary"
      className="px-6 sm:px-10 lg:px-16 py-[16vh] border-t border-white/10"
    >
      <div className="mx-auto max-w-[1600px]">

        <Reveal>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-white/45 font-medium">
            03 — Dicionário
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="mt-8 font-display font-light text-white leading-[1.05] tracking-[-0.02em] max-w-[18ch]"
            style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)" }}
          >
            Pesquise uma palavra ou expressão.
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <form
            onSubmit={onSubmit}
            className="mt-12 flex items-center gap-3 border-b border-white/20 focus-within:border-white/60 transition-colors duration-500"
            style={{ transitionTimingFunction: EASE }}
          >
            <Search
              size={20}
              strokeWidth={1.5}
              className="text-white/50 shrink-0"
            />

            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSubmitted(false);
              }}
              placeholder="awkward"
              aria-label="Pesquisar palavra"
              className="flex-1 bg-transparent text-white font-display text-2xl sm:text-3xl py-4 outline-none placeholder:text-white/25"
            />

            <button
              type="submit"
              className="text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-500 py-4 px-2"
              style={{ transitionTimingFunction: EASE }}
            >
              Pesquisar
            </button>
          </form>
        </Reveal>

        <div className="mt-10 min-h-[180px]">

          {submitted && query.trim() ? (
            <Reveal>
              <div className="border border-white/10 p-8 sm:p-10">

                <div className="flex items-center gap-4">
                  <span className="font-display text-white text-3xl sm:text-4xl tracking-[-0.02em]">
                    {query.trim()}
                  </span>

                  <Volume2
                    size={18}
                    strokeWidth={1.5}
                    className="text-white/40"
                  />
                </div>

                <p className="mt-6 text-sm text-white/50 font-light leading-relaxed max-w-[55ch]">
                  O dicionário do OnePlace está em desenvolvimento. Em breve
                  você poderá pesquisar palavras, ver significados, exemplos,
                  pronúncia e sinônimos sem sair daqui.
                </p>

                <span className="mt-6 inline-block text-[10px] uppercase tracking-[0.2em] text-white/35 border border-white/15 px-2 py-1">
                  Em breve
                </span>

              </div>
            </Reveal>
          ) : (
            <p className="text-sm text-white/35 font-light">
              Digite uma palavra para começar.
            </p>
          )}

        </div>

      </div>
    </section>
  );
}
