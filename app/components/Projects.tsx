const segments = [
  { title: "Residencial", desc: "Conforto e segurança para sua família." },
  { title: "Comercial", desc: "Soluções para o seu negócio crescer." },
  { title: "Industrial", desc: "Performance para operações de alta demanda." },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container-content">
        <p className="text-volt-600 text-sm font-semibold mb-3">
          Atendimento
        </p>
        <h2 className="font-display text-3xl font-bold text-navy-950 mb-12">
          Residencial, comercial e industrial
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {segments.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-navy-950/10 p-8 hover:border-volt-500/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-navy-950 grid place-items-center mb-6">
                <span className="w-2 h-2 rounded-full bg-volt-500" />
              </div>
              <h3 className="font-display font-semibold text-lg text-navy-950 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-navy-950/55">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
