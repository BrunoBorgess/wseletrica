export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 py-10">
      <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="grid place-items-center w-8 h-8 rounded-md bg-volt-500 text-navy-950 font-display font-bold text-sm">
            WS
          </span>
          <span className="text-white/70 text-sm">
            WS Elétrica — Instalações e Manutenção
          </span>
        </div>
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} WS Elétrica. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
