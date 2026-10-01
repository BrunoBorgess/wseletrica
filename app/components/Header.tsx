"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-950/90 backdrop-blur border-b border-white/5">
      <div className="container-content flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2">
          <Image
            src="/images/logo-ws.png"
            alt="Logo WS Elétrica"
            width={527}
            height={512}
            priority
            className="h-11 w-auto"
          />
          <span className="font-display font-semibold text-white tracking-tight">
            WS Elétrica
          </span>
        </a>


        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center rounded-md bg-volt-500 px-4 py-2 text-sm font-semibold text-navy-950 hover:bg-volt-400 transition-colors"
        >
          Solicitar orçamento
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Abrir menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-navy-950">
          <div className="container-content py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="inline-flex justify-center rounded-md bg-volt-500 px-4 py-2 text-sm font-semibold text-navy-950"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
