import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cream text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-rose/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-wine text-white font-serif text-lg sm:text-xl font-bold">
              C
            </span>
            <span className="text-xl sm:text-2xl font-bold text-wine font-serif tracking-tight">CeliAPP</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
            <Link href="#features" className="hover:text-wine transition-colors">Features</Link>
            <Link href="#como-funciona" className="hover:text-wine transition-colors">Como funciona</Link>
            <Link href="#depoimentos" className="hover:text-wine transition-colors">Depoimentos</Link>
          </nav>
          <Link
            href="#prototipo"
            className="inline-flex items-center justify-center rounded-full bg-wine px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold text-white hover:bg-wine-dark transition-colors"
          >
            Abrir protótipo
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-20 sm:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-wine/20 bg-white px-4 py-1.5 text-sm font-medium text-wine">
              <CheckIcon className="h-4 w-4" />
              Para a comunidade celíaca brasileira
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Zero glúten,{" "}
              <span className="text-wine italic">zero dúvidas.</span>
            </h1>
            <p className="text-base sm:text-lg text-foreground/70 max-w-lg leading-relaxed">
              O guia completo para celíacos: mapa de restaurantes seguros, receitas testadas, produtos certificados e conhecimento confiável — tudo em um só lugar.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <Link
                href="#prototipo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-wine px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-white hover:bg-wine-dark transition-colors w-full sm:w-auto"
              >
                Ver protótipo
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full border-2 border-wine px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-wine hover:bg-wine/5 transition-colors w-full sm:w-auto"
              >
                Saiba mais
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <Avatar color="bg-yellow-400" emoji="🙋" />
                <Avatar color="bg-pink-300" emoji="🌸" />
                <Avatar color="bg-blue-300" emoji="🧑" />
                <Avatar color="bg-green-300" emoji="🌿" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-wine fill-wine" />
                  ))}
                </div>
                <span className="text-sm text-foreground/60">Amado pela comunidade celíaca</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-wine/10 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
                alt="Pão artesanal sem glúten"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-wine shadow-sm">
                  📚 Conhecimento
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1.5 w-16 rounded-full bg-wine/30" />
          </div>
        </div>

        <div className="mt-16 sm:mt-24 flex flex-col items-center gap-2 text-xs font-medium tracking-[0.2em] text-wine/60 uppercase">
          <span>Role para ver</span>
          <ChevronDownIcon className="h-5 w-5 animate-bounce" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-wine py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <Stat number="200+" label="Estabelecimentos mapeados" />
            <Stat number="9" label="Receitas sem glúten" />
            <Stat number="50+" label="Produtos catalogados" />
            <Stat number="100%" label="Focado em celíacos" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <span className="text-xs font-medium tracking-[0.25em] text-wine uppercase">O que o CeliAPP oferece</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Tudo que um celíaco <span className="text-wine italic">precisa saber</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <FeatureCard
              badge="🗺️ Mapa"
              title="Mapa de Segurança"
              description="Encontre restaurantes e estabelecimentos com opções sem glúten perto de você, com avaliações reais da comunidade celíaca."
              image="https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80"
              icon={<LocationIcon className="h-5 w-5 text-wine" />}
            />
            <FeatureCard
              badge="🔍 Explorar"
              title="Explorar Produtos & Lugares"
              description="Descubra produtos certificados sem glúten e veja onde comprá-los. Perfis completos de criadores de conteúdo celíacos."
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
              icon={<SearchIcon className="h-5 w-5 text-wine" />}
            />
            <FeatureCard
              badge="📚 Conhecimento"
              title="Conhecimento Confiável"
              description="Estudos recentes, informações sobre a doença celíaca e perfis de especialistas como o Dr. Fernando Valério."
              image="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
              icon={<BookIcon className="h-5 w-5 text-wine" />}
            />
            <FeatureCard
              badge="💡 Dicas"
              title="Receitas & Dicas"
              description="9 receitas sem glúten testadas, dicas do dia a dia e a comunidade para trocar experiências."
              image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
              icon={<LightbulbIcon className="h-5 w-5 text-wine" />}
            />
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-rose/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <span className="text-xs font-medium tracking-[0.25em] text-wine uppercase">Simples assim</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Como o CeliAPP funciona
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative">
            <Step
              number="01"
              icon="📍"
              title="Abra o app"
              description="Acesse de qualquer dispositivo. Nenhuma instalação necessária, funciona direto no navegador."
            />
            <Step
              number="02"
              icon="🔍"
              title="Explore o mapa"
              description="Veja restaurantes, lojas e produtos certificados sem glúten no mapa interativo da sua cidade."
            />
            <Step
              number="03"
              icon="💾"
              title="Salve e compartilhe"
              description="Favorite seus lugares preferidos, faça anotações pessoais e contribua com a comunidade."
            />
            <div className="hidden md:block absolute top-24 left-1/3 right-1/3">
              <div className="flex items-center justify-between px-8">
                <ArrowRightIcon className="h-5 w-5 text-wine/30" />
                <ArrowRightIcon className="h-5 w-5 text-wine/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <span className="text-xs font-medium tracking-[0.25em] text-wine uppercase">Comunidade</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              O que a comunidade <span className="text-wine italic">está dizendo</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Testimonial
              quote="Finalmente um app pensado para nós! Encontrei 3 restaurantes novos na minha cidade na primeira semana."
              author="Ana Paula M."
              role="Usuária do CeliAPP"
              avatar="🌸"
              bg="bg-pink-100"
            />
            <Testimonial
              quote="As receitas são incríveis e o mapa me salvou numa viagem a trabalho. Recomendo demais!"
              author="Roberto S."
              role="Usuário do CeliAPP"
              avatar="🧑"
              bg="bg-yellow-100"
            />
            <Testimonial
              quote="Me sinto parte de uma comunidade. Poder salvar favoritos e deixar notas faz toda a diferença."
              author="Carla F."
              role="Usuária do CeliAPP"
              avatar="💜"
              bg="bg-purple-100"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="prototipo" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto rounded-3xl bg-wine px-6 sm:px-12 py-16 sm:py-24 text-center text-white shadow-2xl shadow-wine/20">
          <span className="text-xs font-medium tracking-[0.25em] text-white/70 uppercase">Junte-se à comunidade</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
            Viva sem glúten <span className="italic">com mais segurança</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Explore o protótipo completo do CeliAPP com todas as funcionalidades.
          </p>
          <Link
            href="https://www.figma.com/proto/KVvG9SeDkHHHa9Sl1OJkAn/CeliAPP-Development"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-wine hover:bg-white/90 transition-colors"
          >
            Acessar o protótipo
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-rose/50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-wine text-white font-serif text-lg font-bold">C</span>
            <span className="text-lg font-bold text-wine font-serif">CeliAPP</span>
          </div>
          <p className="text-sm text-foreground/50 text-center">
            Projeto em construção. Sempre consulte um profissional de saúde para orientações médicas.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-foreground/70">
            <a href="#" className="hover:text-wine transition-colors">Instagram</a>
            <a href="#" className="hover:text-wine transition-colors">E-mail</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="space-y-1">
      <div className="font-serif text-3xl sm:text-4xl font-bold text-white">{number}</div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  );
}

function FeatureCard({
  badge,
  title,
  description,
  image,
  icon,
}: {
  badge: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group rounded-3xl bg-white border border-rose/50 overflow-hidden hover:shadow-xl hover:shadow-wine/5 transition-all">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-wine px-3 py-1.5 text-xs font-semibold text-white">
            {badge}
          </span>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose/60">
            {icon}
          </div>
          <h3 className="font-serif text-xl font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function Step({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative text-center px-4">
      <div className="font-serif text-6xl sm:text-7xl font-bold text-rose/80 absolute top-0 left-1/2 -translate-x-1/2 -z-10">
        {number}
      </div>
      <div className="pt-10 sm:pt-12">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-serif text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
}

function Testimonial({
  quote,
  author,
  role,
  avatar,
  bg,
}: {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  bg: string;
}) {
  return (
    <div className="rounded-3xl border border-rose/50 bg-white p-6 sm:p-8">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-wine fill-wine" />
        ))}
      </div>
      <p className="text-foreground/80 italic leading-relaxed mb-6">"{quote}"</p>
      <div className="flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-full ${bg} text-lg`}>{avatar}</span>
        <div>
          <div className="font-semibold text-foreground text-sm">{author}</div>
          <div className="text-xs text-foreground/60">{role}</div>
        </div>
      </div>
    </div>
  );
}

function Avatar({ color, emoji }: { color: string; emoji: string }) {
  return (
    <span className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream ${color} text-sm`}>
      {emoji}
    </span>
  );
}

// Ícones simples em SVG
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function LightbulbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
