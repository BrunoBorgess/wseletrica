import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-navy-950 pt-32 pb-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <svg
          className="absolute -right-24 top-0 h-full w-[60%]"
          viewBox="0 0 600 700"
          fill="none"
        >
          <g stroke="#2f8fe0" strokeWidth="1.5" opacity="0.5">
            <path d="M40 0v140h180v120" />
            <path d="M600 60H360v100H160v160" />
            <path d="M540 700V520H300V360" />
            <path d="M0 400h120v180h260v120" />
          </g>
          <g fill="#5eb8ff">
            <circle cx="40" cy="140" r="4" />
            <circle cx="220" cy="260" r="4" />
            <circle cx="360" cy="160" r="4" />
            <circle cx="160" cy="320" r="4" />
            <circle cx="540" cy="520" r="4" />
            <circle cx="300" cy="360" r="4" />
            <circle cx="120" cy="580" r="4" />
            <circle cx="380" cy="700" r="4" />
          </g>
        </svg>
      </div>

      <div className="container-content relative grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        <div>
          <p className="text-volt-400 text-sm font-semibold tracking-wide mb-4">
            Segurança e qualidade em elétrica e climatização
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
            O que faz o seu espaço funcionar, do jeito certo
          </h1>
          <p className="text-white/60 text-lg max-w-lg mb-8">
            Somos especializados em instalações elétricas e climatização para
            ambientes residenciais, comerciais e industriais, com equipe qualificada,
            execução criteriosa e atendimento transparente do início ao fim.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#contato"
              className="inline-flex items-center rounded-md bg-volt-500 px-6 py-3 font-semibold text-navy-950 hover:bg-volt-400 transition-colors"
            >
              Solicitar orçamento
            </a>
            <a
              href="#servicos"
              className="text-white/70 hover:text-white text-sm font-medium"
            >
              Conheça nossos serviços
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-8">
            <div>
              <dt className="font-display text-2xl font-bold text-white">
                5+
              </dt>
              <dd className="text-xs text-white/50 mt-1">
                Anos de experiência
              </dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-bold text-white">
                200+
              </dt>
              <dd className="text-xs text-white/50 mt-1">
                Projetos realizados
              </dd>
            </div>
            <div>
              <dt className="font-display text-2xl font-bold text-white">
                100%
              </dt>
              <dd className="text-xs text-white/50 mt-1">
                Clientes satisfeitos
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-navy-800 border border-white/10">
          <Image
            src="/images/hero-eletricista.jpeg"
            alt="Eletricista da WS Elétrica trabalhando em instalação"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
