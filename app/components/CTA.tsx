export default function CTA() {
  return (
    <section id="contato" className="py-20 bg-navy-900">
      <div className="container-content">
        <div className="rounded-2xl bg-navy-950 border border-white/10 p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Pronto para tirar seu projeto do papel?
            </h2>
            <p className="text-white/60 max-w-md">
              Fale com a gente agora pelo WhatsApp e receba seu orçamento sem
              compromisso.
            </p>
          </div>
          <a
            href="https://wa.me/5500000000000"
            className="shrink-0 inline-flex items-center rounded-md bg-volt-500 px-6 py-3 font-semibold text-navy-950 hover:bg-volt-400 transition-colors"
          >
            Solicitar orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
