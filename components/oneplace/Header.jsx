import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { EASE, NAV_ITEMS } from "./data";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-[3px] border-b border-white/10">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">

          <a
            href="#top"
            aria-label="ONEPLACE"
            className="font-display font-semibold tracking-[-0.02em] text-white text-lg sm:text-xl"
          >
            ONEPLACE
          </a>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Principal"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/65 hover:text-white transition-colors duration-500"
                style={{ transitionTimingFunction: EASE }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-white/80 hover:text-white transition-colors"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black">

          <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">

            <span className="font-display font-semibold tracking-[-0.02em] text-white text-lg">
              ONEPLACE
            </span>

            <button
              className="text-white/80 hover:text-white"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

          </div>

          <nav
            className="flex flex-col px-6 pt-10"
            aria-label="Mobile"
          >
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-6 border-b border-white/10 text-white font-display text-2xl tracking-[-0.01em]"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {item.label}
                <span className="text-white/30 text-base">→</span>
              </a>
            ))}
          </nav>

        </div>
      )}
    </header>
  );
}
