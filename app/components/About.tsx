const steps = [
  { title: "Solicitação", desc: "Você nos conta sua necessidade." },
  { title: "Orçamento", desc: "Apresentamos a melhor solução e valor." },
  { title: "Execução", desc: "Serviço realizado com qualidade e eficiência." },
  { title: "Entrega", desc: "Finalização com testes e garantia." },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-navy-950">
      <div className="container-content grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-volt-400 text-sm font-semibold mb-3">
            Sobre a WS Elétrica
          </p>
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Compromisso, qualidade e segurança em cada projeto
          </h2>
          <p className="text-white/60 mb-10 max-w-md">
            Somos uma empresa especializada em soluções elétricas, com foco
            em atender residências, comércios e indústrias com equipamentos
            de qualidade e normas de segurança.
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-md">
            <div>
              <p className="font-display text-2xl font-bold text-white">5+</p>
              <p className="text-xs text-white/50 mt-1">Anos de atuação</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">
                200+
              </p>
              <p className="text-xs text-white/50 mt-1">Projetos</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">
                100%
              </p>
              <p className="text-xs text-white/50 mt-1">Satisfação</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-volt-400 text-sm font-semibold mb-6">
            Como trabalhamos
          </p>
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full border border-volt-500/40 text-volt-400 text-sm font-semibold grid place-items-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-white font-medium">{s.title}</h3>
                  <p className="text-sm text-white/50">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
