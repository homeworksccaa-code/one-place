import React from "react";
import { Youtube, ArrowRight } from "lucide-react";
import { EASE, YOUTUBE_URL } from "./data";
import Reveal from "./Reveal";

export default function Videos() {
  const active = Boolean(YOUTUBE_URL);

  return (
    <section
      id="videos"
      className="px-6 sm:px-10 lg:px-16 py-[16vh] border-t border-white/10"
    >
      <div className="mx-auto max-w-[1600px]">

        <Reveal>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-white/45 font-medium">
            05 — Vídeos
          </p>
        </Reveal>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">

          <Reveal className="lg:col-span-8">
            <h2
              className="font-display font-light text-white leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
            >
              Inglês que acontece
              <br />
              <span className="text-white/55">na vida real.</span>
            </h2>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-4">
            <div className="lg:flex lg:justify-end">
              {active ? (
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-white border-b border-white/30 hover:border-white pb-2 transition-colors duration-500"
                  style={{ transitionTimingFunction: EASE }}
                >
                  <Youtube size={18} strokeWidth={1.5} />
                  Assistir no YouTube
                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    className="transition-transform duration-500 group-hover:translate-x-1.5"
                    style={{ transitionTimingFunction: EASE }}
                  />
                </a>
              ) : (
                <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/40 border border-white/15 px-4 py-3">
                  <Youtube size={16} strokeWidth={1.5} />
                  YouTube em breve
                </span>
              )}
            </div>
          </Reveal>

        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">

          {[1, 2, 3].map((item, i) => (
            <Reveal key={item} delay={i * 80}>
              <div className="aspect-video bg-[#070707] flex flex-col items-center justify-center p-6">
                <Youtube
                  size={28}
                  strokeWidth={1.25}
                  className="text-white/25"
                />

                <span className="mt-5 text-[10px] uppercase tracking-[0.22em] text-white/30">
                  Em breve
                </span>
              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
