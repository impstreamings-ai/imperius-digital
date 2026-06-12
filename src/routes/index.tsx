import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/imperius-logo-official.png.asset.json";
import blackCrownPreview from "@/assets/blackcrown-preview-v2.png.asset.json";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  MessageCircle,
  Check,
  ShieldCheck,
  Sparkles,
  Zap,
  Instagram,
  Phone,
  ExternalLink,
  Globe,
  ClipboardList,
  Rocket,
  Award,
  LayoutTemplate,
  TrendingUp,
  Smartphone,
  Eye,
  Handshake,
  MonitorPlay,
  Target,
  Wrench,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const track = (name: string, params: Record<string, unknown> = {}) => trackEvent(name, params);

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
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: logoAsset.url },
    ],
  }),
  component: Landing,
});

const WA_MESSAGE = "Olá! Quero uma demonstração personalizada da Imperius para minha empresa.";
const WA = `https://wa.me/5515981023792?text=${encodeURIComponent(WA_MESSAGE)}`;
const IG = "https://instagram.com/imperiusdigital.br";
const DEMO = "https://blackcrown-by-imperius.lovable.app/";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Process />
      <Problem />
      <Solution />
      <Services />
      <Demo />
      
      <Benefits />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
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
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-medium">
          <a href="#processo" className="hover:text-foreground transition-colors">Como Funciona</a>
          <a href="#servicos" className="hover:text-foreground transition-colors">Soluções</a>
          <a href="#demonstracao" className="hover:text-foreground transition-colors">Demonstração</a>
          <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
        </nav>
        <a href={WA} target="_blank" rel="noreferrer" className="shrink-0" onClick={() => track("whatsapp_click", { location: "nav" })}>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_oklch(0.72_0.22_250/0.7)]">
            <span className="sm:hidden">Demonstração</span>
            <span className="hidden sm:inline">Quero uma demonstração</span>
          </Button>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative lg:min-h-screen flex items-center pt-28 pb-10 sm:pb-14 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-glow" style={{ background: "radial-gradient(circle, oklch(0.5 0.25 250 / 0.35), transparent 70%)" }} />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-7 font-sans font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Soluções Digitais Premium
          </div>
          <h1 className="font-display text-[1.875rem] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-tight">
            <span className="block text-gradient">Mais autoridade.</span>
            <span className="block text-gradient">Mais contatos.</span>
            <span className="block text-neon">Mais oportunidades.</span>
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
            Landing pages, automações e soluções digitais criadas para empresas que desejam transmitir profissionalismo e gerar mais oportunidades de negócio.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center flex-wrap gap-3 sm:gap-5">
            <a href={WA} target="_blank" rel="noreferrer" className="w-full sm:w-auto" onClick={() => track("hero_cta_click", { destination: "whatsapp" })}>
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide glow-ring h-13 px-8 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_oklch(0.72_0.22_250/0.8)]">
                QUERO UMA DEMONSTRAÇÃO GRATUITA <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href={DEMO}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-primary transition-colors font-sans inline-flex items-center gap-1.5"
            >
              ou veja um exemplo real <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="mt-4 text-xs sm:text-[13px] text-muted-foreground/90 font-sans max-w-md leading-relaxed">
            Receba uma prévia personalizada da sua presença digital, sem compromisso.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-[13px] text-muted-foreground/80 max-w-md leading-relaxed font-sans">
            <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Demonstração personalizada</li>
            <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Sem compromisso</li>
            <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Atendimento próximo</li>
          </ul>
        </div>

        <BrandCommandCenter />
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub, display = false }: { eyebrow?: string; title: string; sub?: string; display?: boolean }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
      {eyebrow && (
        <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">{eyebrow}</div>
      )}
      <h2 className={`${display ? "font-display" : "font-heading"} text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight`}>{title}</h2>
      {sub && <p className="mt-5 text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">{sub}</p>}
    </div>
  );
}

function BrandCommandCenter() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto px-4 py-6 sm:py-8 text-center">
      {/* Soft ambient blue glow */}
      <div
        className="absolute inset-0 blur-3xl opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, oklch(0.6 0.25 250 / 0.28), transparent 70%)" }}
      />

      <div className="relative flex flex-col items-center gap-4">
        <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-primary font-semibold font-sans">
          Imperius Soluções Digitais
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 blur-2xl opacity-70 pointer-events-none"
            style={{ background: "radial-gradient(circle, oklch(0.6 0.25 250 / 0.55), transparent 65%)" }}
          />
          <img
            src={logoAsset.url}
            alt="Imperius — Soluções Digitais"
            className="relative h-20 sm:h-24 w-auto object-contain drop-shadow-[0_0_30px_oklch(0.6_0.25_250/0.5)]"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground font-sans">
          Landing Pages <span className="text-primary/70">•</span> Automação <span className="text-primary/70">•</span> Inteligência Artificial
        </div>

        <div
          className="h-px w-32 sm:w-40"
          style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 250 / 0.5), transparent)" }}
        />

        <p className="max-w-sm text-sm text-muted-foreground/90 font-sans leading-relaxed">
          Criamos estruturas digitais que ajudam empresas a transmitir mais profissionalismo, facilitar o contato e gerar mais oportunidades de negócio.
        </p>
      </div>
    </div>
  );
}


function Process() {
  const steps = [
    { n: "01", i: MessageCircle, t: "Conversamos sobre sua empresa", d: "Entendemos seu negócio, seus clientes e seus objetivos." },
    { n: "02", i: LayoutTemplate, t: "Criamos uma demonstração personalizada", d: "Montamos uma versão sob medida para você visualizar antes de qualquer decisão." },
    { n: "03", i: ClipboardList, t: "Você aprova", d: "Ajustamos cada detalhe até o resultado refletir a sua marca." },
    { n: "04", i: Rocket, t: "Publicamos", d: "Seu projeto entra no ar pronto para gerar oportunidades." },
    { n: "05", i: TrendingUp, t: "Mais autoridade e oportunidades", d: "Sua empresa transmite mais autoridade e gera mais oportunidades de negócio." },
  ];
  return (
    <section id="processo" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          display
          eyebrow="Como funciona"
          title="Processo simples. Resultado profissional."
          sub="Cinco etapas claras para transformar sua presença digital."
        />
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 250 / 0.5), transparent)" }} />
          {steps.map((s) => (
            <div key={s.t} className="relative card-premium hover-lift rounded-2xl p-6 transition-all duration-300">
              <div className="absolute -top-3 -right-3 h-9 w-9 rounded-full ring-1 ring-primary/40 bg-background flex items-center justify-center font-display font-bold text-[11px] text-primary">{s.n}</div>
              <div className="h-12 w-12 rounded-xl flex items-center justify-center ring-1 ring-primary/40 mb-5" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.7), oklch(0.12 0.02 245 / 0.7))" }}>
                <s.i className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2 tracking-tight">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-24 sm:py-28 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: "radial-gradient(ellipse, oklch(0.55 0.25 250 / 0.35), transparent 70%)" }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold mb-5 font-sans">O problema</div>
        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-[1.1] tracking-tight">
          A decisão acontece antes do primeiro contato.
        </h2>
        <p className="mt-8 text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-2xl mx-auto font-sans font-medium">
          Muitos clientes pesquisam uma empresa antes de entrar em contato.
        </p>
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-sans">
          Quando encontram uma presença digital fraca, a confiança desaparece antes mesmo da conversa começar.
        </p>
      </div>
    </section>
  );
}

function Solution() {
  const items = [
    { t: "Mais contatos qualificados", d: "Visitantes que chegam preparados para fechar negócio." },
    { t: "Mais pedidos de orçamento", d: "Estrutura que conduz o visitante até a ação." },
    { t: "Mais valor percebido", d: "Sua marca comparada às referências do setor." },
  ];

  return (
    <section className="py-24 sm:py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          display
          eyebrow="A solução"
          title="O que muda quando sua empresa vira referência."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {items.map((t) => (
            <div key={t.t} className="card-premium hover-lift rounded-2xl p-6 sm:p-7 flex items-start gap-4 h-full border border-primary/15 hover:border-primary/50 transition-all duration-300">
              <div className="h-11 w-11 shrink-0 rounded-xl flex items-center justify-center ring-1 ring-primary/40" style={{ background: "linear-gradient(135deg, oklch(0.35 0.18 250 / 0.5), oklch(0.18 0.05 245 / 0.4))" }}>
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base sm:text-lg leading-tight tracking-tight">{t.t}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed font-sans">{t.d}</p>
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
    { icon: LayoutTemplate, title: "Landing Pages Profissionais", desc: "Transforme visitantes em contatos." },
    { icon: Zap, title: "Automação de Atendimento", desc: "Responda mais rápido e perca menos oportunidades." },
    { icon: MessageCircle, title: "WhatsApp Integrado", desc: "Facilite o contato e aumente conversões." },
    { icon: Bot, title: "Inteligência Artificial", desc: "Ganhe tempo e produtividade no dia a dia do negócio." },
    { icon: Globe, title: "Presença Digital", desc: "Seja encontrado pelos clientes certos, no momento certo." },
    { icon: Smartphone, title: "Experiência Mobile Premium", desc: "Conquiste o cliente desde a primeira tela." },
  ];
  return (
    <section id="servicos" className="py-24 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          display
          eyebrow="Soluções"
          title="Soluções pensadas para gerar resultado."
          sub="Tecnologia a serviço do que realmente importa: oportunidades reais para a sua empresa."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((it) => (
            <div key={it.title} className="card-premium hover-lift rounded-2xl p-7 group transition-all duration-300 hover:border-primary/50">
              <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5 ring-1 ring-primary/30 group-hover:ring-primary/60 transition" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.6), oklch(0.18 0.05 245 / 0.3))" }}>
                <it.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-2 tracking-tight">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Demo() {
  const before = [
    "Presença digital limitada",
    "Pouca diferenciação",
    "Comunicação simples",
  ];
  const after = [
    "Website premium",
    "WhatsApp integrado",
    "Experiência mobile",
    "Posicionamento profissional",
  ];
  return (
    <section id="demonstracao" className="py-24 sm:py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold mb-4 font-sans">Projeto Demonstrativo</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            Veja uma transformação completa.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
            Um exemplo real do padrão Imperius — landing page premium criada para gerar autoridade e converter visitantes em clientes.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -inset-6 sm:-inset-12 rounded-3xl blur-3xl opacity-60 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, oklch(0.55 0.25 250 / 0.45), transparent 70%)" }} />

          <a
            href={DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block card-premium rounded-2xl sm:rounded-3xl overflow-hidden glow-ring mb-12 border border-primary/30 hover:border-primary/60 transition-all duration-500"
          >
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/40 bg-background/70">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground truncate font-mono">blackcrown-by-imperius.lovable.app</span>
            </div>
            <div className="relative w-full overflow-hidden bg-background h-[260px] sm:h-[560px] lg:h-[640px]">
              <img
                src={blackCrownPreview.url}
                alt="Preview — Black Crown Barbershop"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-contain sm:object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary/90 font-semibold font-sans">Case</div>
                  <div className="font-display font-bold text-lg sm:text-xl text-foreground">Black Crown Barbershop</div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground bg-background/60 backdrop-blur px-3 py-1.5 rounded-full border border-border/60 font-sans">
                  <Eye className="h-3.5 w-3.5 text-primary" /> Clique para ver ao vivo
                </div>
              </div>
            </div>
          </a>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-10">
            <div className="card-premium rounded-2xl p-7 border border-destructive/20">
              <div className="text-[11px] uppercase tracking-[0.25em] text-destructive/80 font-semibold mb-4 font-sans">Antes</div>
              <ul className="space-y-3">
                {before.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground font-sans">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive/60 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-premium rounded-2xl p-7 border border-primary/30 glow-ring">
              <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">Depois</div>
              <ul className="space-y-3">
                {after.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm sm:text-base text-foreground/95 font-sans">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <a href={DEMO} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide glow-ring h-13 px-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_oklch(0.72_0.22_250/0.8)]">
                Ver Demonstração <ExternalLink className="ml-2 h-4 w-4" />
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
    { t: "Mais autoridade percebida", i: Award },
    { t: "Mais facilidade de contato", i: MessageCircle },
    { t: "Mais profissionalismo", i: ShieldCheck },
    { t: "Melhor experiência mobile", i: Smartphone },
  ];
  return (
    <section className="py-24 sm:py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          display
          eyebrow="Resultados e percepção"
          title="O que sua empresa passa a transmitir."
          sub="Mais do que números — uma nova percepção de marca para o seu cliente."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {items.map((it) => (
            <div key={it.t} className="card-premium hover-lift rounded-2xl p-6 sm:p-7 text-center transition-all duration-300">
              <div className="mx-auto h-12 w-12 rounded-xl flex items-center justify-center mb-4 ring-1 ring-primary/40" style={{ background: "linear-gradient(135deg, oklch(0.35 0.18 250 / 0.5), oklch(0.15 0.03 245 / 0.4))" }}>
                <it.i className="h-5 w-5 text-primary" />
              </div>
              <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-primary font-semibold mb-2 font-sans">
                <Check className="h-3 w-3" /> Confirmado
              </div>
              <div className="font-heading text-sm sm:text-base font-semibold text-foreground/95 leading-snug tracking-tight">{it.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { i: Award, t: "Autoridade", d: "Sua marca posicionada como referência logo no primeiro contato." },
    { i: ShieldCheck, t: "Credibilidade", d: "Uma presença digital sólida que transmite confiança imediata." },
    { i: MessageCircle, t: "Facilidade de contato", d: "Canais diretos para o cliente decidir agora, sem fricção." },
    { i: Sparkles, t: "Profissionalismo", d: "Design, conteúdo e tecnologia no padrão das grandes marcas." },
    { i: Zap, t: "Conversão", d: "Estrutura pensada para transformar visitas em oportunidades reais." },
  ];
  return (
    <section id="beneficios" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          display
          eyebrow="Por que a Imperius"
          title="O que faz uma empresa parecer premium desde o primeiro clique."
          sub="Cinco pilares que separam uma marca esquecível de uma referência."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {items.map((b) => (
            <div key={b.t} className="card-premium hover-lift rounded-2xl p-7 sm:p-8 flex items-start gap-5 h-full transition-all duration-300 hover:border-primary/50">
              <div className="h-12 w-12 shrink-0 rounded-xl flex items-center justify-center ring-1 ring-primary/30" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.6), oklch(0.15 0.03 245 / 0.4))" }}>
                <b.i className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg sm:text-xl tracking-tight">{b.t}</h3>
                <p className="text-sm sm:text-[15px] text-muted-foreground mt-2 leading-relaxed font-sans">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const reasons = [
    {
      i: Handshake,
      t: "Atendimento próximo",
      d: "Cada projeto é tratado de forma personalizada, considerando a realidade e os objetivos de cada empresa.",
    },
    {
      i: MonitorPlay,
      t: "Demonstração personalizada",
      d: "Antes de qualquer decisão, mostramos na prática como sua empresa pode evoluir digitalmente.",
    },
    {
      i: Target,
      t: "Foco em resultado",
      d: "Cada elemento é pensado para melhorar a percepção da marca e facilitar o contato com novos clientes.",
    },
    {
      i: Wrench,
      t: "Soluções sob medida",
      d: "Não utilizamos fórmulas prontas. Cada projeto é adaptado às necessidades do negócio.",
    },
  ];
  return (
    <section id="sobre" className="py-24 sm:py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[420px] rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, oklch(0.55 0.25 250 / 0.35), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          display
          eyebrow="Por que escolher a Imperius"
          title="Por que empresas escolhem a Imperius."
          sub="Mais do que criar páginas bonitas, desenvolvemos soluções digitais pensadas para facilitar o contato, transmitir profissionalismo e gerar oportunidades reais para o seu negócio."
        />
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {reasons.map((r) => (
            <div key={r.t} className="card-premium hover-lift rounded-2xl p-6 sm:p-7 flex items-start gap-5 h-full transition-all duration-300 hover:border-primary/50">
              <div className="h-12 w-12 shrink-0 rounded-xl flex items-center justify-center ring-1 ring-primary/30" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.6), oklch(0.15 0.03 245 / 0.4))" }}>
                <r.i className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-base sm:text-lg tracking-tight">{r.t}</h3>
                <p className="text-sm sm:text-[15px] text-muted-foreground mt-2 leading-relaxed font-sans">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10 sm:mb-12">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">Dúvidas frequentes</div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient leading-tight tracking-tight">
            Antes de pedir sua demonstração.
          </h2>
        </div>
        <div className="card-premium rounded-2xl p-6 sm:p-7 border border-primary/15">
          <h3 className="font-heading font-semibold text-base sm:text-lg tracking-tight">
            Preciso já ter um site?
          </h3>
          <p className="mt-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed font-sans">
            Não. Podemos criar sua demonstração mesmo que sua empresa ainda não tenha site ou presença digital estruturada.
          </p>
        </div>
      </div>
    </section>
  );
}


function FinalCTA() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden card-premium rounded-3xl p-8 sm:p-12 lg:p-16 text-center glow-ring">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, oklch(0.55 0.25 250 / 0.45), transparent 70%)" }} />
          <div className="relative">
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-[1.1] tracking-tight">
              Sua empresa transmite a imagem que merece?
            </h2>
            <p className="mt-6 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              Criamos soluções digitais para negócios que desejam transmitir mais autoridade, facilitar o contato e gerar mais oportunidades.
            </p>
            <div className="mt-9 flex justify-center">
              <a href={WA} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide h-13 px-8 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_oklch(0.72_0.22_250/0.8)]">
                  QUERO MINHA DEMONSTRAÇÃO <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs sm:text-[13px] text-muted-foreground/80 font-sans">
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

function Footer() {
  return (
    <footer className="relative border-t border-border/40 mt-10 overflow-hidden">
      <div className="absolute inset-x-0 -top-px h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 250 / 0.6), transparent)" }} />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: "radial-gradient(ellipse, oklch(0.55 0.25 250 / 0.35), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoAsset.url} alt="Imperius Soluções Digitais" className="h-[44px] w-auto object-contain" loading="lazy" decoding="async" />
              <div>
                <div className="font-display font-bold tracking-[0.2em] text-sm">IMPERIUS™</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-sans font-medium">Design • Automação • IA</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Soluções digitais premium para empresas que querem transmitir autoridade e gerar mais oportunidades.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4 font-sans">Soluções</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground font-sans">
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Landing Pages</a></li>
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Automação</a></li>
              <li><a href="#servicos" className="hover:text-foreground transition-colors">Inteligência Artificial</a></li>
              <li><a href="#servicos" className="hover:text-foreground transition-colors">WhatsApp Integrado</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4 font-sans">Contato</div>
            <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 font-sans">
              <Phone className="h-4 w-4 shrink-0" /> +55 15 98102-3792
            </a>
            <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 font-sans">
              <MessageCircle className="h-4 w-4 shrink-0" /> Atendimento via WhatsApp
            </a>
            <a href={IG} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
              <Instagram className="h-4 w-4 shrink-0" /> @imperiusdigital.br
            </a>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4 font-sans">Comece agora</div>
            <p className="text-sm text-muted-foreground mb-4 font-sans">Solicite uma apresentação personalizada.</p>
            <a href={WA} target="_blank" rel="noreferrer">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full sm:w-auto transition-all duration-300 hover:-translate-y-0.5">
                Falar com a Imperius <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-sans">
          <span>© {new Date().getFullYear()} Imperius™ — Todos os direitos reservados.</span>
          <span className="tracking-[0.2em] uppercase">Design • Automação • Inteligência Artificial</span>
        </div>
      </div>
    </footer>
  );
}
