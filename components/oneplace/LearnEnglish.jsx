import React from "react";
import { ArrowRight } from "lucide-react";
import { EASE, LEARN_MODULES } from "./data";
import Reveal from "./Reveal";

export default function LearnEnglish() {
  return (
    <section
      id="learn"
      className="px-6 sm:px-10 lg:px-16 pt-[18vh] pb-[14vh]"
    >
      <div className="mx-auto max-w-[1600px]">

        <Reveal>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-white/45 font-medium">
            01 — Aprenda Inglês
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2
            className="mt-8 sm:mt-12 font-display font-light text-white leading-[1.08] tracking-[-0.02em] max-w-[22ch]"
            style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)" }}
          >
            Ferramentas, aulas e conteúdo para você realmente usar o inglês.
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p
            className="mt-8 max-w-[52ch] font-body font-light text-white/55 leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
          >
            Do básico ao avançado, aqui você encontra conteúdo, ferramentas e
            recursos para aprender inglês no seu ritmo.
          </p>
        </Reveal>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {LEARN_MODULES.map((m, i) => (
            <Reveal key={m.id} delay={i * 70}>
              <ModuleTile module={m} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function ModuleTile({ module: m }) {
  const Icon = m.icon;
  const active = m.status === "active";
  const Wrapper = active ? "a" : "div";

  const wrapperProps = active
    ? {
        href: m.url || m.href,
        ...(m.url
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {}),
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative block bg-black p-8 sm:p-10 h-full transition-colors duration-700 ${
        active
          ? "hover:bg-[#0a0a0a] cursor-pointer"
          : "cursor-default"
      }`}
      style={{ transitionTimingFunction: EASE }}
      aria-label={active ? m.title : `${m.title} — em breve`}
    >
      <div className="flex items-start justify-between">
        <Icon
          size={26}
          strokeWidth={1.25}
          className="text-white/70"
        />

        {!active && (
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/35 font-medium border border-white/15 px-2 py-1">
            Em breve
          </span>
        )}
      </div>

      <h3 className="mt-10 font-display font-semibold uppercase text-white tracking-[-0.01em] text-xl sm:text-2xl">
        {m.title}
      </h3>

      <p className="mt-3 font-body font-light text-white/50 leading-relaxed text-sm max-w-[34ch]">
        {m.desc}
      </p>

      <p
        className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-500"
        style={{
          transitionTimingFunction: EASE,
          color: active
            ? "rgba(255,255,255,0.7)"
            : "rgba(255,255,255,0.3)",
        }}
      >
        {m.cta}

        {active && (
          <ArrowRight
            size={13}
            strokeWidth={2}
            className="transition-transform duration-500 group-hover:translate-x-1"
            style={{ transitionTimingFunction: EASE }}
          />
        )}
      </p>
    </Wrapper>
  );
}
