import React from "react";
import { Youtube, Instagram, Mail } from "lucide-react";
import { EASE, YOUTUBE_URL, INSTAGRAM_URL } from "./data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 sm:px-10 lg:px-16 pt-[14vh] pb-12 border-t border-white/10">
      <div className="mx-auto max-w-[1600px]">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          <div className="lg:col-span-5">
            <p
              className="font-display font-semibold tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              ONEPLACE
            </p>

            <p className="mt-4 text-[10px] sm:text-xs uppercase tracking-[0.28em] text-white/45 font-light">
              All Your Content. One Place.
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">

            <FooterCol
              title="Navegação"
              links={[
                { label: "Aprender", href: "#learn" },
                { label: "Ferramentas", href: "#tools" },
                { label: "Vídeos", href: "#videos" },
                { label: "Aulas", href: "#classes" },
              ]}
            />

            <FooterCol
              title="Mais"
              links={[
                { label: "Sobre", href: "#about" },
                { label: "Dicionário", href: "#dictionary" },
                { label: "Teste de Nível", href: "#learn" },
              ]}
            />

          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <div className="flex gap-4">

              <SocialIcon href={YOUTUBE_URL} label="YouTube">
                <Youtube size={18} strokeWidth={1.5} />
              </SocialIcon>

              <SocialIcon href={INSTAGRAM_URL} label="Instagram">
                <Instagram size={18} strokeWidth={1.5} />
              </SocialIcon>

              <SocialIcon href="" label="Email">
                <Mail size={18} strokeWidth={1.5} />
              </SocialIcon>

            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-medium">
            © {year} ONEPLACE
          </p>

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            Um lugar para bom conteúdo.
          </p>

        </div>

      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-white/35 font-medium mb-5">
        {title}
      </p>

      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-500"
              style={{ transitionTimingFunction: EASE }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, label, children }) {
  const active = Boolean(href);

  const cls = `w-10 h-10 flex items-center justify-center border border-white/15 transition-colors duration-500 ${
    active
      ? "text-white/60 hover:text-white hover:border-white/40"
      : "text-white/25"
  }`;

  if (!active) {
    return (
      <span
        className={cls}
        aria-label={`${label} — em breve`}
        title={`${label} — em breve`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cls}
      aria-label={label}
    >
      {children}
    </a>
  );
}
