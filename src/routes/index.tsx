import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/imperius-logo-official.png.asset.json";
import blackCrownPreview from "@/assets/blackcrown-preview-v2.png.asset.json";


import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Cpu,
  LayoutTemplate,
  MessageCircle,
  Check,
  ShieldCheck,
  Sparkles,
  Zap,
  Instagram,
  Phone,
  ExternalLink,
  Scissors,
  Stethoscope,
  Flower2,
  UtensilsCrossed,
  Store,
  Globe,
  Search,
  ClipboardList,
  Code2,
  Rocket,
  X,
  Clock,
  Quote,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imperius Soluções Digitais | Landing Pages, Automação e IA" },
      {
        name: "description",
        content:
          "Criamos landing pages, automação e soluções digitais para empresas que desejam transmitir mais credibilidade e gerar novos contatos.",
      },
      { property: "og:title", content: "Imperius Soluções Digitais | Landing Pages, Automação e IA" },
      {
        property: "og:description",
        content:
          "Criamos landing pages, automação e soluções digitais para empresas que desejam transmitir mais credibilidade e gerar novos contatos.",
      },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", href: logoAsset.url },
    ],
  }),
  component: Landing,
});

const WA = "https://wa.me/5515981023792";
const IG = "https://instagram.com/imperiusdigital.br";
const DEMO = "https://blackcrown-by-imperius.lovable.app/";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Demo />
      <Results />
      <SocialProof />
      <WhyImperius />
      <Services />
      <Process />
      <Audience />
      <Included />
      <Scarcity />
      <Guarantee />
      <About />
      <DemoOffer />
      <FinalCTA />
      <NextUp />
      <Footer />
    </div>
  );
}

function Problem() {
  const items = [
    { t: "Aparência amadora" },
    { t: "Pouca credibilidade" },
    { t: "Dificuldade de contato" },
    { t: "Menos oportunidades" },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="O problema"
          title="Sua empresa pode estar perdendo clientes antes mesmo do primeiro contato."
          sub="Hoje muitos clientes pesquisam uma empresa antes de entrar em contato. Quando encontram um perfil incompleto, uma apresentação amadora ou falta de informações claras, a confiança diminui — e muitas oportunidades se perdem antes mesmo da conversa começar."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {items.map((it) => (
            <div key={it.t} className="card-premium rounded-2xl p-5 sm:p-6 flex items-start gap-3">
              <div className="h-9 w-9 shrink-0 rounded-lg flex items-center justify-center ring-1 ring-destructive/40 bg-destructive/10">
                <X className="h-4 w-4 text-destructive" />
              </div>
              <span className="text-sm sm:text-base font-medium leading-tight">{it.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const items = [
    "Mais contatos",
    "Mais pedidos de orçamento",
    "Mais facilidade de atendimento",
    "Mais valor percebido",
    "Mais autoridade digital",
    "Mais oportunidades de negócio",
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="A solução"
          title="O que muda quando sua empresa se apresenta de forma profissional."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {items.map((t) => (
            <div key={t} className="card-premium hover-lift rounded-2xl p-5 sm:p-6 flex items-center gap-4">
              <div className="h-10 w-10 shrink-0 rounded-xl flex items-center justify-center ring-1 ring-primary/40 bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm sm:text-base font-medium">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const items = [
    { t: "Mais credibilidade", i: ShieldCheck },
    { t: "Mais autoridade", i: Award },
    { t: "Melhor experiência mobile", i: Sparkles },
    { t: "Contato facilitado", i: MessageCircle },
    { t: "Marca mais profissional", i: LayoutTemplate },
    { t: "Maior percepção de valor", i: Zap },
  ];
  return (
    <section id="beneficios" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Presença digital"
          title="O que uma presença digital profissional transmite"
          sub="Empresas bem apresentadas costumam gerar mais confiança, transmitir mais autoridade e facilitar o contato com novos clientes."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {items.map((it) => (
            <div key={it.t} className="card-premium hover-lift rounded-2xl p-6 sm:p-7 flex items-start gap-4">
              <div className="h-11 w-11 shrink-0 rounded-xl flex items-center justify-center ring-1 ring-primary/40 bg-primary/10">
                <it.i className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.18em] text-primary/80 font-semibold mb-1">✓</div>
                <p className="text-base font-heading font-semibold text-foreground/95 leading-snug">{it.t}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scarcity() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="card-premium rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[360px] h-[360px] rounded-full blur-3xl opacity-50 pointer-events-none" style={{ background: "radial-gradient(circle, oklch(0.55 0.25 250 / 0.35), transparent 70%)" }} />
          <div className="relative">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl ring-1 ring-primary/40 mb-5" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.7), oklch(0.12 0.02 245 / 0.7))" }}>
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-gradient leading-tight">Atendimento limitado.</h2>
            <p className="mt-5 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Trabalhamos com poucos projetos simultaneamente para garantir qualidade, acompanhamento próximo e atenção aos detalhes em cada entrega.
            </p>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Por isso mantemos uma quantidade limitada de novos projetos em andamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="card-premium rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[360px] h-[360px] rounded-full blur-3xl opacity-50 pointer-events-none" style={{ background: "radial-gradient(circle, oklch(0.55 0.25 250 / 0.35), transparent 70%)" }} />
          <div className="relative">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl ring-1 ring-primary/40 mb-5" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.7), oklch(0.12 0.02 245 / 0.7))" }}>
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-gradient leading-tight">Demonstração sem compromisso.</h2>
            <p className="mt-5 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Antes de qualquer contratação você pode conhecer uma demonstração personalizada para entender o potencial do projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const items = [
    { i: ShieldCheck, t: "Mais credibilidade", d: "Sua marca passa a transmitir mais profissionalismo desde o primeiro contato." },
    { i: MessageCircle, t: "Mais facilidade de contato", d: "Clientes a um toque do WhatsApp, sem barreiras." },
    { i: Sparkles, t: "Apresentação profissional", d: "Uma vitrine digital à altura do que você entrega." },
    { i: LayoutTemplate, t: "Melhor experiência para clientes", d: "Navegação clara, rápida e agradável em qualquer tela." },
    { i: Globe, t: "Presença digital organizada", d: "Tudo no lugar certo: serviços, contato e identidade." },
    { i: Zap, t: "Mais oportunidades de negócio", d: "Mais visibilidade gera mais conversas — e mais clientes." },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Resultados" title="O que muda após a implementação." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((b) => (
            <div key={b.t} className="card-premium hover-lift rounded-2xl p-6 sm:p-7 flex items-start gap-5 h-full">
              <div className="h-12 w-12 shrink-0 rounded-xl flex items-center justify-center ring-1 ring-primary/30" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.6), oklch(0.15 0.03 245 / 0.4))" }}>
                <b.i className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base sm:text-lg">{b.t}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 min-w-0">
          <img src={logoAsset.url} alt="Imperius Soluções Digitais" className="h-[40px] w-auto object-contain shrink-0" loading="eager" decoding="async" />
          <span className="font-display font-bold tracking-[0.2em] text-sm truncate">IMPERIUS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#beneficios" className="hover:text-foreground transition">Benefícios</a>
          <a href="#demonstracao" className="hover:text-foreground transition">Demonstração</a>
          <a href="#processo" className="hover:text-foreground transition">Processo</a>
          <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
        </nav>
        <a href={WA} target="_blank" rel="noreferrer" className="shrink-0">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            Quero uma demonstração
          </Button>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-glow" style={{ background: "radial-gradient(circle, oklch(0.5 0.25 250 / 0.35), transparent 70%)" }} />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Soluções Digitais Premium
          </div>
          <h1 className="font-display text-[2rem] sm:text-[2.75rem] lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight">
            <span className="text-gradient">Sua empresa merece gerar </span>
            <span className="text-neon">mais oportunidades</span>
            <span className="text-gradient"> todos os dias.</span>
          </h1>
          <p className="mt-7 max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
            Criamos landing pages, automação e soluções com inteligência artificial para empresas que desejam transmitir mais autoridade, facilitar o contato e gerar mais oportunidades de negócio.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a href={WA} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide glow-ring h-12 px-7 text-[13px] sm:text-sm">
                QUERO UMA DEMONSTRAÇÃO GRATUITA <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href={DEMO} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-7 border-border bg-card/40 backdrop-blur hover:bg-card/80 font-semibold tracking-wide">
                VER PROJETO DEMONSTRATIVO
              </Button>
            </a>
          </div>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-[13px] text-muted-foreground/80 max-w-md leading-relaxed">
            <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Demonstração personalizada</li>
            <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Sem compromisso</li>
            <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Atendimento próximo</li>
          </ul>

        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-10 rounded-full blur-3xl opacity-60" style={{ background: "radial-gradient(circle, oklch(0.55 0.25 250 / 0.5), transparent 70%)" }} />
          <div className="relative card-premium rounded-2xl p-10 flex items-center justify-center aspect-square">
            <img src={logoAsset.url} alt="Imperius Soluções Digitais" className="w-full h-full object-contain" loading="eager" decoding="async" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/30 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
      {eyebrow && (
        <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4">{eyebrow}</div>
      )}
      <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight">{title}</h2>
      {sub && <p className="mt-5 text-muted-foreground text-base sm:text-lg">{sub}</p>}
    </div>
  );
}

function Benefits() {
  const items = [
    { i: ShieldCheck, t: "Mais credibilidade", d: "Transmita seriedade desde o primeiro clique." },
    { i: Sparkles, t: "Imagem mais profissional", d: "Uma marca alinhada ao padrão do seu trabalho." },
    { i: MessageCircle, t: "Contato facilitado", d: "Clientes a um toque do seu WhatsApp." },
    { i: LayoutTemplate, t: "Apresentação à altura", d: "Sua marca exposta com clareza e elegância." },
    { i: Zap, t: "Mais oportunidades", d: "Mais visibilidade, mais conversas, mais negócios." },
    { i: Cpu, t: "Confiança do cliente", d: "Tecnologia que reforça sua autoridade no mercado." },
  ];
  return (
    <section id="beneficios" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="O que você ganha" title="Resultados antes de tecnologia." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((b) => (
            <div key={b.t} className="card-premium hover-lift rounded-2xl p-6 sm:p-7 flex items-start gap-5">
              <div className="h-12 w-12 shrink-0 rounded-xl flex items-center justify-center ring-1 ring-primary/30" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.6), oklch(0.15 0.03 245 / 0.4))" }}>
                <b.i className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base sm:text-lg">{b.t}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Demo() {
  const features = [
    "WhatsApp integrado",
    "Estrutura focada em conversão",
    "Design premium",
    "Totalmente responsiva",
  ];
  return (
    <section id="demonstracao" className="py-20 sm:py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">Case Demonstrativo</div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            BLACK CROWN BARBERSHOP
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Landing page demonstrativa desenvolvida pela Imperius.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -inset-6 sm:-inset-12 rounded-3xl blur-3xl opacity-60 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, oklch(0.55 0.25 250 / 0.45), transparent 70%)" }} />

          <a
            href={DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block card-premium rounded-2xl sm:rounded-3xl overflow-hidden glow-ring mb-8 sm:mb-10 border border-primary/30 hover:border-primary/60 transition"
          >
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/40 bg-background/70">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground truncate">blackcrown-by-imperius.lovable.app</span>
            </div>
            <div className="relative w-full overflow-hidden bg-background h-[420px] sm:h-[560px] lg:h-[650px]">
              <img
                src={blackCrownPreview.url}
                alt="Preview — Black Crown Barbershop"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </a>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-4xl mx-auto">
            {features.map((f) => (
              <div key={f} className="card-premium hover-lift rounded-xl p-4 flex items-center gap-3">
                <div className="h-8 w-8 shrink-0 rounded-lg flex items-center justify-center ring-1 ring-primary/40 bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium leading-tight">{f}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href={DEMO} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide glow-ring h-12 px-8">
                Ver demonstração completa <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const items = [
    { n: "+85%", t: "Mais autoridade percebida", icon: Award },
    { n: "+70%", t: "Mais facilidade de contato", icon: MessageCircle },
    { n: "+90%", t: "Mais profissionalismo", icon: ShieldCheck },
    { n: "+95%", t: "Melhor experiência mobile", icon: Sparkles },
  ];
  return (
    <section className="py-20 sm:py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Resultados e percepção"
          title="RESULTADOS E PERCEPÇÃO"
          sub="Empresas com presença digital profissional costumam gerar mais confiança, transmitir mais autoridade e abrir mais oportunidades comerciais. Os números abaixo são ilustrativos e refletem o tipo de impacto observado após uma modernização digital bem executada."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {items.map((it) => (
            <div key={it.t} className="card-premium hover-lift rounded-2xl p-6 sm:p-7 text-center">
              <div className="mx-auto h-11 w-11 rounded-xl flex items-center justify-center mb-4 ring-1 ring-primary/40 bg-primary/10">
                <it.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-bold text-gradient mb-2">{it.n}</div>
              <div className="text-xs sm:text-sm text-foreground/90 leading-relaxed">{it.t}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
          *Indicadores ilustrativos baseados em percepção de mercado, não representam métricas auditadas.
        </p>
      </div>
    </section>
  );
}



function WhyImperius() {
  const items = [
    { t: "Projetos personalizados", d: "Cada projeto é desenhado sob medida para o seu negócio." },
    { t: "Estrutura focada em conversão", d: "Cada seção construída para gerar oportunidades reais." },
    { t: "WhatsApp integrado", d: "Seus clientes a um toque do contato direto." },
    { t: "Visual profissional", d: "Estética que reforça a autoridade da sua marca." },
    { t: "Atendimento próximo", d: "Acompanhamento direto, sem intermediários." },
    { t: "Experiência mobile impecável", d: "Performance e clareza em qualquer dispositivo." },
    { t: "Demonstração antes da contratação", d: "Você pode visualizar uma demonstração personalizada antes de tomar qualquer decisão." },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Diferenciais" title="Por que escolher a Imperius?" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {items.map((it) => (
            <div key={it.t} className="card-premium hover-lift rounded-2xl p-6 flex items-start gap-4">
              <div className="h-9 w-9 shrink-0 rounded-lg flex items-center justify-center ring-1 ring-primary/40 bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="text-sm font-heading font-semibold">{it.t}</div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: LayoutTemplate, title: "Landing Pages Profissionais", desc: "Mais credibilidade e uma apresentação à altura do seu trabalho." },
    { icon: Zap, title: "Automação de Atendimento", desc: "Menos tempo gasto em tarefas repetitivas, mais foco em clientes." },
    { icon: MessageCircle, title: "WhatsApp Integrado", desc: "Facilite o contato e converse com clientes em um toque." },
    { icon: Bot, title: "Inteligência Artificial", desc: "Mais produtividade e respostas rápidas no dia a dia do negócio." },
    { icon: Globe, title: "Presença Digital", desc: "Sua marca encontrada e percebida com mais profissionalismo." },
    { icon: Cpu, title: "Estrutura Responsiva", desc: "Experiência impecável em qualquer tela, sem perder clientes." },
  ];
  return (
    <section id="servicos" className="py-20 sm:py-24 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Soluções" title="Soluções para fortalecer sua presença digital." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((it) => (
            <div key={it.title} className="card-premium hover-lift rounded-2xl p-6 sm:p-7">
              <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5 ring-1 ring-primary/30" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.6), oklch(0.18 0.05 245 / 0.3))" }}>
                <it.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "1", i: MessageCircle, t: "Conversamos", d: "Entendemos seu negócio e objetivos." },
    { n: "2", i: LayoutTemplate, t: "Criamos a demonstração", d: "Montamos uma versão personalizada para você visualizar." },
    { n: "3", i: ClipboardList, t: "Ajustamos juntos", d: "Refinamos detalhes até ficar perfeito." },
    { n: "4", i: Rocket, t: "Publicamos", d: "Seu projeto entra no ar pronto para gerar resultado." },
  ];
  return (
    <section id="processo" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Como funciona" title="Processo simples e direto." />
        <div className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 250 / 0.5), transparent)" }} />
          {steps.map((s) => (
            <div key={s.t} className="relative card-premium hover-lift rounded-2xl p-6 sm:p-7">
              <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full ring-1 ring-primary/40 bg-background flex items-center justify-center font-heading font-bold text-xs text-primary">{s.n}</div>
              <div className="h-14 w-14 rounded-2xl flex items-center justify-center ring-1 ring-primary/40 mb-5" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.7), oklch(0.12 0.02 245 / 0.7))" }}>
                <s.i className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const items = [
    { i: Scissors, t: "Barbearias" },
    { i: Stethoscope, t: "Clínicas" },
    { i: Flower2, t: "Estéticas" },
    { i: UtensilsCrossed, t: "Restaurantes" },
    { i: Store, t: "Prestadores de serviço" },
    { i: Globe, t: "Empresas locais" },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Para quem"
          title="Negócios que dependem de credibilidade e contato rápido"
          sub="Empresas locais que precisam transmitir profissionalismo e responder com agilidade aos seus clientes."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {items.map((it) => (
            <div key={it.t} className="card-premium hover-lift rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center gap-3 h-full min-h-[140px]">

              <div className="h-12 w-12 rounded-xl flex items-center justify-center ring-1 ring-primary/30" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.6), oklch(0.15 0.03 245 / 0.4))" }}>
                <it.i className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium leading-tight">{it.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Included() {
  const items = [
    "Página profissional",
    "WhatsApp integrado",
    "Google Maps",
    "Design responsivo",
    "Personalização completa",
    "Otimização mobile",
    "Estrutura moderna",
    "Suporte inicial",
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="O que está incluso" title="Tudo o que sua marca precisa." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {items.map((it) => (
            <div key={it} className="card-premium rounded-xl p-5 flex items-center gap-3">
              <div className="h-8 w-8 shrink-0 rounded-lg flex items-center justify-center ring-1 ring-primary/40 bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium">{it}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-20 sm:py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">Sobre a Imperius</div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight">
            Autoridade digital ao alcance de qualquer negócio.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 sm:-inset-10 rounded-3xl blur-3xl opacity-60 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, oklch(0.55 0.25 250 / 0.45), transparent 70%)" }} />
          <div className="relative card-premium rounded-3xl p-8 sm:p-12 lg:p-14 glow-ring overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="relative grid md:grid-cols-[auto_1fr] gap-8 sm:gap-10 items-center">
              {/* Avatar / imagem institucional */}
              <div className="mx-auto md:mx-0">
                <div className="relative h-36 w-44 sm:h-44 sm:w-56 rounded-2xl overflow-hidden ring-1 ring-primary/40 bg-background/60 flex items-center justify-center p-5" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.7), oklch(0.15 0.03 245 / 0.5))" }}>
                  <img src={logoAsset.url} alt="Imperius Soluções Digitais" className="h-[140px] w-auto max-w-[220px] object-contain" />
                  <div className="absolute -inset-1 rounded-2xl pointer-events-none" style={{ boxShadow: "inset 0 0 40px oklch(0.55 0.25 250 / 0.35)" }} />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Imperius</div>
                  <div className="text-[11px] text-muted-foreground">Soluções Digitais</div>
                </div>
              </div>

              <div className="space-y-5 text-foreground/90">
                <p className="text-base sm:text-lg leading-relaxed">
                  A Imperius nasceu para ajudar pequenos negócios a transmitirem a mesma autoridade digital das grandes marcas.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Acreditamos que uma boa apresentação, tecnologia acessível e comunicação clara podem transformar a percepção de qualquer empresa.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-[11px] uppercase tracking-[0.15em] text-primary"><Sparkles className="h-3 w-3" /> Design estratégico</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-[11px] uppercase tracking-[0.15em] text-primary"><ShieldCheck className="h-3 w-3" /> Tecnologia acessível</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-[11px] uppercase tracking-[0.15em] text-primary"><MessageCircle className="h-3 w-3" /> Comunicação clara</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoOffer() {
  const items = [
    { t: "Análise inicial do negócio", i: ClipboardList },
    { t: "Sugestões de melhoria digital", i: Sparkles },
    { t: "Estrutura personalizada", i: LayoutTemplate },
    { t: "Apresentação sem compromisso", i: ShieldCheck },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Demonstração gratuita"
          title="O que você recebe na demonstração gratuita."
          sub="Uma forma simples de visualizar o potencial do seu projeto antes de qualquer contratação."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {items.map((b) => (
            <div key={b.t} className="card-premium rounded-2xl p-6 sm:p-7 flex flex-col items-start gap-4 hover:border-primary/40 transition h-full">
              <div className="h-12 w-12 shrink-0 rounded-xl flex items-center justify-center ring-1 ring-primary/30" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.6), oklch(0.15 0.03 245 / 0.4))" }}>
                <b.i className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg leading-tight">{b.t}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden card-premium rounded-3xl p-8 sm:p-12 lg:p-16 text-center glow-ring">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.55 0.25 250 / 0.4), transparent 70%)" }} />
          <div className="relative">
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
              Sua empresa merece transmitir o valor real do seu trabalho.
            </h2>
            <p className="mt-5 sm:mt-6 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Solicite uma demonstração personalizada e descubra como uma presença digital profissional pode gerar mais contatos, fortalecer sua marca e facilitar novas oportunidades.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a href={WA} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide h-12 px-8 text-[13px] sm:text-sm">
                  SOLICITAR DEMONSTRAÇÃO GRATUITA <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href={WA} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 border-border bg-card/40 backdrop-blur hover:bg-card/80 font-semibold tracking-wide">
                  <MessageCircle className="mr-2 h-4 w-4" /> FALAR NO WHATSAPP
                </Button>
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs sm:text-[13px] text-muted-foreground/80">
              <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Sem compromisso</li>
              <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Atendimento personalizado</li>
              <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Demonstração exclusiva</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function NextUp() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden card-premium rounded-3xl p-10 sm:p-14 lg:p-16 text-center glow-ring">
          <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.55 0.25 250 / 0.4), transparent 70%)" }} />
          <div className="relative">
            <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4">Próximo case</div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-gradient leading-[1.05] tracking-tight">
              Sua empresa pode ser a próxima.
            </h2>
            <p className="mt-6 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Receba uma demonstração personalizada criada para o seu negócio.
            </p>
            <div className="mt-9 flex justify-center">
              <a href={WA} target="_blank" rel="noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide glow-ring h-12 px-8">
                  Quero minha demonstração <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border/40 mt-10 overflow-hidden">
      <div className="absolute inset-x-0 -top-px h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 250 / 0.6), transparent)" }} />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: "radial-gradient(ellipse, oklch(0.55 0.25 250 / 0.35), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoAsset.url} alt="Imperius Soluções Digitais" className="h-[48px] w-auto object-contain" loading="lazy" decoding="async" />
              <div>
                <div className="font-display font-bold tracking-[0.2em] text-sm">IMPERIUS</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Soluções Digitais</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tecnologia, presença digital e credibilidade para empresas que querem crescer.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4">Soluções</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-foreground transition">Landing Pages</a></li>
              <li><a href="#servicos" className="hover:text-foreground transition">Automação</a></li>
              <li><a href="#servicos" className="hover:text-foreground transition">Inteligência Artificial</a></li>
              <li><a href="#servicos" className="hover:text-foreground transition">WhatsApp Integrado</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4">Contato</div>
            <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition mb-3">
              <Phone className="h-4 w-4 shrink-0" /> +55 15 98102-3792
            </a>
            <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition mb-3">
              <MessageCircle className="h-4 w-4 shrink-0" /> Atendimento via WhatsApp
            </a>
            <a href={IG} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition">
              <Instagram className="h-4 w-4 shrink-0" /> @imperiusdigital.br
            </a>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4">Comece agora</div>
            <p className="text-sm text-muted-foreground mb-4">Solicite uma apresentação personalizada.</p>
            <a href={WA} target="_blank" rel="noreferrer">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full sm:w-auto">
                Falar com a Imperius <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Imperius Soluções Digitais. Todos os direitos reservados.</span>
          <span className="tracking-[0.2em] uppercase">Tecnologia · Automação · IA</span>
        </div>
      </div>
    </footer>
  );
}
