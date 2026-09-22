import React from "react";
import { ArrowRight } from "lucide-react";
import { EASE, TOOLS } from "./data";
import Reveal from "./Reveal";

export default function Toolbox() {
  return (
    <section
      id="tools"
      className="px-6 sm:px-10 lg:px-16 py-[16vh] border-t border-white/10"
    >
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        <Reveal className="lg:col-span-5">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-white/45 font-medium">
            04 — Ferramentas
          </p>

          <h2
            className="mt-8 font-display font-light text-white leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)" }}
          >
            A Toolbox do OnePlace.
          </h2>

          <p
            className="mt-8 max-w-[40ch] font-body font-light text-white/55 leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
          >
            Tudo o que você precisa para aprender, praticar e evoluir — tudo
            em um só lugar.
          </p>

          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-white/35">
            + Mais ferramentas em breve
          </p>
        </Reveal>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {TOOLS.map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <ToolTile tool={t} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function ToolTile({ tool: t }) {
  const Icon = t.icon;
  const active = t.status === "active";
  const Wrapper = active ? "a" : "div";

  const wrapperProps = active
    ? {
        href: t.url || t.href,
        ...(t.url
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {}),
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex flex-col items-start bg-black p-6 sm:p-7 h-full transition-colors duration-700 ${
        active
          ? "hover:bg-[#0a0a0a] cursor-pointer"
          : "cursor-default"
      }`}
      style={{ transitionTimingFunction: EASE }}
      aria-label={active ? t.title : `${t.title} — em breve`}
    >
      <Icon
        size={22}
        strokeWidth={1.25}
        className="text-white/65"
      />

      <p className="mt-8 font-display font-semibold uppercase text-white text-sm tracking-[-0.01em]">
        {t.title}
      </p>

      <p
        className="mt-2 text-[10px] uppercase tracking-[0.18em] font-medium"
        style={{
          color: active
            ? "rgba(255,255,255,0.55)"
            : "rgba(255,255,255,0.3)",
        }}
      >
        {active ? (
          <span className="inline-flex items-center gap-1">
            Abrir

            <ArrowRight
              size={11}
              strokeWidth={2}
              className="transition-transform duration-500 group-hover:translate-x-1"
              style={{ transitionTimingFunction: EASE }}
            />
          </span>
        ) : (
          "Em breve"
        )}
      </p>
    </Wrapper>
  );
}
