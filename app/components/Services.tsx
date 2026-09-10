const services = [
  {
    title: "Instalações residenciais",
    desc: "Segurança e conforto elétrico para sua casa.",
  },
  {
    title: "Instalações comerciais",
    desc: "Soluções para o seu negócio funcionar sem interrupções.",
  },
  {
    title: "Instalações industriais",
    desc: "Projetos e manutenções para máxima performance.",
  },
  {
    title: "Manutenção preventiva",
    desc: "Evite falhas e aumente a vida útil dos equipamentos.",
  },
  {
    title: "Projetos elétricos",
    desc: "Planejamento e execução com total segurança.",
  },
  {
    title: "Adequação e normas",
    desc: "Regularização de instalações conforme normas técnicas.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container-content">
        <p className="text-volt-600 text-sm font-semibold mb-3">
          Nossos serviços
        </p>
        <h2 className="font-display text-3xl font-bold text-navy-950 max-w-md mb-4">
          Soluções completas em elétrica
        </h2>
        <p className="text-navy-950/60 max-w-lg mb-12">
          Profissionais experientes e preparados para atender desde pequenos
          reparos até grandes projetos, sempre com qualidade e segurança.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-950/10 border border-navy-950/10 rounded-xl overflow-hidden">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-7">
              <div className="w-9 h-9 rounded-md bg-volt-500/10 grid place-items-center mb-5">
                <span className="w-2 h-2 rounded-full bg-volt-500" />
              </div>
              <h3 className="font-display font-semibold text-navy-950 mb-2">
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
