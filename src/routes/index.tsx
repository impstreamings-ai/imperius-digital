import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/imperius-logo-official.png.asset.json";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  MessageCircle,
  Check,
  Zap,
  Instagram,
  Phone,
  ExternalLink,
  Globe,
  ClipboardList,
  Rocket,
  LayoutTemplate,
  TrendingUp,
  Scissors,
  Users,
  Calendar,
  Stethoscope,
  Sparkles,
  Briefcase,
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
const BLACK_CROWN_URL = "https://blackcrown-by-imperius.lovable.app/";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <ProblemaSolucao />
      <Services />
      <Demonstracoes />
      <Process />
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
          <a href="#servicos" className="hover:text-foreground transition-colors">Soluções</a>
          <a href="#demonstracoes" className="hover:text-foreground transition-colors">Demonstrações</a>
          <a href="#processo" className="hover:text-foreground transition-colors">Como Funciona</a>
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

      <div className="relative mx-auto max-w-4xl px-6 text-center w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-7 font-sans font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          Soluções Digitais Premium
        </div>
        <h1 className="font-display text-[1.875rem] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-tight">
          <span className="block text-gradient">Mais autoridade.</span>
          <span className="block text-gradient">Mais contatos.</span>
          <span className="block text-neon">Mais oportunidades.</span>
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
          Landing pages, automações e soluções digitais criadas para empresas que desejam transmitir profissionalismo e gerar mais oportunidades de negócio.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-center flex-wrap gap-3 sm:gap-5">
          <a href={WA} target="_blank" rel="noreferrer" className="w-full sm:w-auto" onClick={() => track("hero_cta_click", { destination: "whatsapp" })}>
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide glow-ring h-13 px-8 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_oklch(0.72_0.22_250/0.8)]">
              QUERO UMA DEMONSTRAÇÃO GRATUITA <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a
            href="#demonstracoes"
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-primary transition-colors font-sans inline-flex items-center gap-1.5"
            onClick={() => track("demo_click", { location: "hero" })}
          >
            ou veja demonstrações reais <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <p className="mt-4 text-xs sm:text-[13px] text-muted-foreground/90 font-sans max-w-md mx-auto leading-relaxed">
          Receba uma prévia personalizada da sua presença digital, sem compromisso.
        </p>
        <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs sm:text-[13px] text-muted-foreground/80 max-w-md mx-auto leading-relaxed font-sans">
          <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Demonstração personalizada</li>
          <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Sem compromisso</li>
          <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Atendimento próximo</li>
        </ul>
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


function ProblemaSolucao() {
  return (
    <section className="py-20 sm:py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: "radial-gradient(ellipse, oklch(0.55 0.25 250 / 0.35), transparent 70%)" }} />
      <div className="relative mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-5 sm:gap-6">
        <div className="card-premium rounded-2xl p-7 sm:p-8 border border-destructive/20">
          <div className="text-[11px] uppercase tracking-[0.28em] text-destructive/80 font-semibold mb-4 font-sans">O problema</div>
          <p className="font-heading text-lg sm:text-xl leading-snug tracking-tight text-foreground/95">
            Muitos negócios perdem oportunidades antes mesmo do primeiro contato.
          </p>
        </div>
        <div className="card-premium rounded-2xl p-7 sm:p-8 border border-primary/30 glow-ring">
          <div className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold mb-4 font-sans">A solução</div>
          <p className="font-heading text-lg sm:text-xl leading-snug tracking-tight text-foreground/95">
            Websites, automação e inteligência artificial que ajudam empresas a transmitir mais profissionalismo e gerar mais oportunidades.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: LayoutTemplate, title: "Landing Pages", desc: "Páginas premium pensadas para conversão." },
    { icon: Globe, title: "Websites", desc: "Presença digital sólida e profissional." },
    { icon: Zap, title: "Automação", desc: "Atendimento e processos automatizados." },
    { icon: Bot, title: "Inteligência Artificial", desc: "IA aplicada ao dia a dia do negócio." },
    { icon: Briefcase, title: "Sistemas Comerciais", desc: "CRM e ferramentas para gestão de leads." },
  ];
  return (
    <section id="servicos" className="py-24 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          display
          eyebrow="Soluções"
          title="O que a Imperius entrega."
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

type DemoStatus = "Ativo" | "Em desenvolvimento" | "Em breve";
type DemoCard = {
  icon: typeof Scissors;
  title: string;
  desc: string;
  status: DemoStatus;
  href?: string;
  to?: string;
  external?: boolean;
  cover?: string;
};

import blackCrownCover from "@/assets/black-crown-cover.png.asset.json";
import automationCover from "@/assets/imperius-automation-cover.png.asset.json";
import crmCover from "@/assets/imperius-crm-cover.png.asset.json";
import schedulingCover from "@/assets/imperius-scheduling-cover.png.asset.json";
import vitalisCover from "@/assets/vitalis-cover.png.asset.json";

function Demonstracoes() {
  const cards: DemoCard[] = [
    { icon: Scissors, title: "Black Crown Barbershop", desc: "Website para Barbearia", status: "Ativo", href: BLACK_CROWN_URL, external: true, cover: blackCrownCover.url },
    { icon: Bot, title: "Imperius Automation", desc: "IA + WhatsApp Automatizado", status: "Ativo", to: "/automation", cover: automationCover.url },
    { icon: Users, title: "Imperius CRM", desc: "CRM Comercial Inteligente", status: "Ativo", to: "/crm", cover: crmCover.url },
    { icon: Calendar, title: "Imperius Scheduling", desc: "Sistema de Agendamento Inteligente", status: "Ativo", to: "/scheduling", cover: schedulingCover.url },
    { icon: Stethoscope, title: "Clínica Vitalis", desc: "Website + agendamento para Clínica", status: "Ativo", to: "/vitalis", cover: vitalisCover.url },
    { icon: Sparkles, title: "Studio Bella Estética", desc: "Website para Estética", status: "Em breve" },
  ];


  return (
    <section id="demonstracoes" className="py-24 sm:py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[420px] rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, oklch(0.55 0.25 250 / 0.35), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          display
          eyebrow="Vitrine de soluções reais"
          title="Demonstrações Imperius."
          sub="Soluções reais que a Imperius já desenvolve para diferentes segmentos."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((c) => (
            <DemoCardItem key={c.title} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: DemoStatus }) {
  const styles: Record<DemoStatus, string> = {
    "Ativo": "border-primary/50 text-primary bg-primary/10 shadow-[0_0_18px_-6px_oklch(0.72_0.22_250/0.8)]",
    "Em desenvolvimento": "border-border/70 text-muted-foreground bg-card/60",
    "Em breve": "border-border/60 text-muted-foreground/80 bg-card/40",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] uppercase tracking-[0.18em] font-semibold font-sans ${styles[status]}`}>
      {status === "Ativo" && <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />}
      {status}
    </span>
  );
}

function DemoCardItem({ card }: { card: DemoCard }) {
  const isActive = card.status === "Ativo";
  const hasCover = !!card.cover;
  const inner = (
    <>
      {hasCover && (
        <div className="relative -mx-6 sm:-mx-7 -mt-6 sm:-mt-7 mb-5 overflow-hidden rounded-t-2xl aspect-[16/10] border-b border-primary/20 bg-card">
          <img
            src={card.cover}
            alt={`Capa da demonstração ${card.title}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none" />
          <div className="absolute top-3 right-3"><StatusBadge status={card.status} /></div>
        </div>
      )}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="h-12 w-12 rounded-xl flex items-center justify-center ring-1 ring-primary/30 group-hover:ring-primary/60 transition" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.6), oklch(0.18 0.05 245 / 0.3))" }}>
          <card.icon className="h-6 w-6 text-primary" />
        </div>
        {!hasCover && <StatusBadge status={card.status} />}
      </div>
      <h3 className="font-heading font-semibold text-base sm:text-lg tracking-tight">{card.title}</h3>
      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed font-sans">{card.desc}</p>
      {isActive && (
        <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-primary/90 font-semibold font-sans">
          Ver demonstração {card.external ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
        </div>
      )}
    </>
  );

  const baseCls = "card-premium rounded-2xl p-6 sm:p-7 h-full transition-all duration-300 border overflow-hidden";
  const activeCls = "hover-lift group cursor-pointer border-primary/30 hover:border-primary/60 hover:shadow-[0_0_40px_-12px_oklch(0.72_0.22_250/0.7)]";
  const inactiveCls = "border-border/40 opacity-80 cursor-default";

  if (isActive && card.to) {
    return (
      <Link
        to={card.to}
        className={`${baseCls} ${activeCls} block`}
        onClick={() => track("demo_card_click", { title: card.title, to: card.to })}
      >
        {inner}
      </Link>
    );
  }
  if (isActive && card.href) {
    return (
      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseCls} ${activeCls} block`}
        onClick={() => track("demo_card_click", { title: card.title, href: card.href })}
      >
        {inner}
      </a>
    );
  }
  return <div className={`${baseCls} ${inactiveCls}`}>{inner}</div>;
}


function Process() {
  const steps = [
    { n: "01", i: MessageCircle, t: "Conversamos sobre sua empresa", d: "Entendemos seu negócio e seus objetivos." },
    { n: "02", i: LayoutTemplate, t: "Criamos uma demonstração personalizada", d: "Uma versão sob medida para você visualizar antes de decidir." },
    { n: "03", i: ClipboardList, t: "Você aprova", d: "Ajustamos cada detalhe até refletir a sua marca." },
    { n: "04", i: Rocket, t: "Publicamos", d: "Seu projeto entra no ar pronto para gerar oportunidades." },
    { n: "05", i: TrendingUp, t: "Mais oportunidades", d: "Sua empresa passa a transmitir mais autoridade." },
  ];
  return (
    <section id="processo" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          display
          eyebrow="Como funciona"
          title="Processo simples. Resultado profissional."
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

function FAQ() {
  const items = [
    {
      q: "Preciso já ter um site?",
      a: "Não. Podemos criar sua demonstração mesmo que sua empresa ainda não tenha presença digital estruturada.",
    },
    {
      q: "Quanto tempo leva para entregar?",
      a: "A demonstração personalizada é entregue em poucos dias. O projeto completo depende do escopo combinado.",
    },
    {
      q: "A demonstração tem custo?",
      a: "Não. A demonstração inicial é gratuita e sem compromisso.",
    },
  ];
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10 sm:mb-12">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">Dúvidas frequentes</div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient leading-tight tracking-tight">
            Antes de pedir sua demonstração.
          </h2>
        </div>
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.q} className="card-premium rounded-2xl p-6 sm:p-7 border border-primary/15">
              <h3 className="font-heading font-semibold text-base sm:text-lg tracking-tight">
                {it.q}
              </h3>
              <p className="mt-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed font-sans">
                {it.a}
              </p>
            </div>
          ))}
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
              <a href={WA} target="_blank" rel="noreferrer" className="w-full sm:w-auto" onClick={() => { track("final_cta_click", { destination: "whatsapp" }); track("whatsapp_click", { location: "final_cta" }); }}>
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
              <li><a href="#demonstracoes" className="hover:text-foreground transition-colors">Demonstrações</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4 font-sans">Contato</div>
            <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 font-sans" onClick={() => track("whatsapp_click", { location: "footer" })}>
              <Phone className="h-4 w-4 shrink-0" /> +55 15 98102-3792
            </a>
            <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 font-sans" onClick={() => track("whatsapp_click", { location: "footer" })}>
              <MessageCircle className="h-4 w-4 shrink-0" /> Atendimento via WhatsApp
            </a>
            <a href={IG} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
              <Instagram className="h-4 w-4 shrink-0" /> @imperiusdigital.br
            </a>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4 font-sans">Comece agora</div>
            <p className="text-sm text-muted-foreground mb-4 font-sans">Solicite uma apresentação personalizada.</p>
            <a href={WA} target="_blank" rel="noreferrer" onClick={() => track("whatsapp_click", { location: "footer_cta" })}>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_oklch(0.72_0.22_250/0.7)]">
                Falar com a Imperius <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground font-sans">
          © {new Date().getFullYear()} Imperius Soluções Digitais. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
