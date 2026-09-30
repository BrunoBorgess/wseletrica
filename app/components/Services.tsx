import Image from "next/image";

const groups = [
  {
    id: "residencial",
    title: "Residencial",
    desc: "Instalações elétricas para casas e apartamentos, com segurança e acabamento.",
    video: "/videos/residencial.mp4",
    services: [
      {
        title: "Chuveiro Elétrico",
        desc: "Instalação com fiação e disjuntor dimensionados para o modelo, evitando queda de energia.",
        image: "/images/servicos/chuveiro-eletrico.jpeg",
        alt: "Instalação de chuveiro elétrico executada pela WS Elétrica",
      },
      {
        title: "Iluminação LED e Tomadas",
        desc: "Instalação de luminárias, fitas e spots de LED, além de tomadas e interruptores, com acabamento limpo e seguro.",
        image: "/images/servicos/luz.jpg",
        alt: "Iluminação em LED instalada em residência",
      },

    ],
  },
  {
    id: "comercial-industrial",
    title: "Comercial e Industrial",
    desc: "Instalações elétricas para lojas, escritórios, restaurantes e galpões.",
    video: "/videos/comercial.mp4",
    services: [
      {
        title: "Elétrica em Barracão",
        desc: "Infraestrutura elétrica completa para galpões industriais: iluminação, força e quadros.",
        image: "/images/servicos/eletrica-barracao.jpeg",
        alt: "Instalação elétrica em barracão industrial",
      },
      {
        title: "Tomadas Industriais",
        desc: "Instalação de tomadas e plugues industriais para máquinas e equipamentos de força, com proteção e acabamento reforçado.",
        image: "/images/servicos/tomadas-industriais.jpg",
        alt: "Tomadas industriais instaladas em ambiente industrial",
      },
    ],
  },
  {
    id: "padrao-entrada",
    title: "Padrão de Entrada e Infraestrutura",
    desc: "O ponto de conexão com a rede da concessionária — atende residências e empresas.",
    services: [
      {
        title: "Quadro de Distribuição",
        desc: "Montagem com disjuntores, DPS e identificação de cada circuito.",
        image: "/images/servicos/quadro-distribuicao.jpeg",
        alt: "Quadro de distribuição elétrica organizado por circuito",
      },
      {
        title: "Padrão de Entrada",
        desc: "Instalação do padrão de entrada, incluindo postes de até 7 metros, dentro das normas.",
        image: "/images/servicos/padrao-entrada.jpeg",
        alt: "Padrão de entrada de energia instalado conforme norma da concessionária",
      },
      {
        title: "Agrupamento",
        desc: "Caixas de medição agrupadas para condomínios e edificações com múltiplas unidades.",
        image: "/images/servicos/agrupamento.jpeg",
        alt: "Caixa de agrupamento de medidores de energia",
      },
      {
        title: "Padronização",
        desc: "Adequação da instalação às normas da concessionária e da NBR.",
        image: "/images/servicos/padronizacao.jpeg",
        alt: "Quadro elétrico padronizado e identificado",
      },
    ],
  },
  {
    id: "climatizacao",
    title: "Climatização",
    desc: "Instalação elétrica dedicada para equipamentos de ar-condicionado.",
    video: "/videos/ar.mp4",
    services: [
      {
        title: "Ar-Condicionado",
        desc: "Circuito elétrico dedicado para splits, com disjuntor e fiação próprios.",
        image: "/images/servicos/ar-condicionado.png",
        alt: "Instalação elétrica dedicada para ar-condicionado",
      },
      {
        title: "Manutenção e Higienização",
        desc: "Manutenção preventiva e higienização de aparelhos de ar-condicionado para garantir eficiência e bom funcionamento.",
        image: "/images/servicos/manutencao-ar.jpg",
        alt: "Manutenção e higienização de ar-condicionado",
      },
    ],
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
        <p className="text-navy-950/60 max-w-lg mb-8">
          Do padrão de entrada ao último ponto de luz — instalação,
          manutenção e padronização elétrica para residências, comércios e
          indústrias.
        </p>

        <div className="flex flex-wrap gap-3 mb-14">
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy-950/10 px-4 py-2 text-sm font-medium text-navy-950/70 hover:border-volt-500/40 hover:text-navy-950 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-volt-500" />
              {g.title}
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {groups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-24">
              <h3 className="font-display text-xl font-semibold text-navy-950 mb-1">
                {group.title}
              </h3>
              <p className="text-sm text-navy-950/55 max-w-lg mb-6">
                {group.desc}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-950/10 border border-navy-950/10 rounded-xl overflow-hidden">
                {group.services.map((s) => (
                  <div key={s.title} className="bg-white">
                    <div className="relative aspect-[4/3] bg-navy-950/5">
                      <Image
                        src={s.image}
                        alt={s.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-7">
                      <h4 className="font-display font-semibold text-navy-950 mb-2">
                        {s.title}
                      </h4>
                      <p className="text-sm text-navy-950/55">{s.desc}</p>
                    </div>
                  </div>
                ))}
                {group.video && (
                <div className="relative bg-navy-950 min-h-[240px] sm:col-span-2 lg:col-span-1">
                  <video
                    src={group.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
