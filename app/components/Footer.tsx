import Image from "next/image";

const INSTAGRAM_URL = "https://www.instagram.com/ws.eletrica_e_refrigeracao_/"; // troca pelo @ da WS Elétrica

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 py-10">
      <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/logo-ws.png"
            alt="Logo WS Elétrica"
            width={651}
            height={512}
            className="h-9 w-auto"
          />
          <span className="text-white/70 text-sm">
            WS Elétrica — Instalações e Manutenção
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da WS Elétrica"
            className="grid place-items-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-navy-950 hover:bg-volt-500 hover:border-volt-500 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[18px] h-[18px]"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
          </a>

          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} WS Elétrica. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}