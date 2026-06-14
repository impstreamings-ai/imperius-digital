import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/imperius-logo-official.png.asset.json";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  MessageCircle,
  
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
  Building2,
  UtensilsCrossed,
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
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap",
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
      <Manifesto />
      <Demonstracoes />
      <Services />
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <img src={logoAsset.url} alt="Imperius Soluções Digitais" className="h-[36px] w-auto object-contain shrink-0" loading="eager" decoding="async" />
          <span className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-heading font-semibold tracking-[0.2em] text-[12px] truncate">IMPERIUS</span>
            <span className="text-[9.5px] uppercase tracking-[0.28em] text-muted-foreground/80 font-medium truncate">Estúdio digital</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[13px] text-muted-foreground font-medium">
          <a href="#vitrine" className="hover:text-foreground transition-colors">Vitrine</a>
          <a href="#servicos" className="hover:text-foreground transition-colors">Soluções</a>
          <a href="#processo" className="hover:text-foreground transition-colors">Processo</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <a href={WA} target="_blank" rel="noreferrer" className="shrink-0" onClick={() => track("whatsapp_click", { location: "nav" })}>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_oklch(0.72_0.22_250/0.7)]">
            <span className="sm:hidden">Falar agora</span>
            <span className="hidden sm:inline">Solicitar demonstração</span>
          </Button>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative lg:min-h-[86vh] flex items-center pt-32 pb-20 sm:pb-24 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full blur-3xl opacity-70"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.25 250 / 0.22), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-5xl px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-sans font-medium mb-8">
            <span className="h-px w-8 bg-primary/70" />
            Imperius · Estúdio digital · Sorocaba/SP
          </div>
          <h1 className="font-display text-[2.4rem] sm:text-[3.6rem] lg:text-[4.6rem] xl:text-[5.2rem] font-normal leading-[1.02] tracking-[-0.01em] text-foreground">
            Presença digital, automação e sistemas comerciais para empresas que precisam{" "}
            <span className="italic text-neon">parecer maiores</span>{" "}
            e vender melhor.
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground text-base sm:text-[17px] leading-relaxed font-sans">
            Construímos sites, fluxos com IA e operações comerciais sob medida —
            pensados para gerar oportunidades reais, não apenas impressões bonitas.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
              onClick={() => track("hero_cta_click", { destination: "whatsapp" })}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full h-12 px-7 text-[14px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_-8px_oklch(0.72_0.22_250/0.7)]"
              >
                Solicitar demonstração <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href="#vitrine"
              className="text-[13.5px] text-muted-foreground hover:text-foreground transition-colors font-sans inline-flex items-center gap-2 group"
              onClick={() => track("demo_click", { location: "hero" })}
            >
              <span className="h-px w-6 bg-border group-hover:bg-primary transition-colors" />
              Explorar a vitrine de projetos
            </a>
          </div>
          <p className="mt-10 text-[12px] text-muted-foreground/70 font-sans tracking-wide">
            Demonstração personalizada · Sem compromisso · Resposta no mesmo dia útil
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  sub,
  display = false,
  align = "center",
  gradient = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  display?: boolean;
  align?: "center" | "left";
  gradient?: boolean;
}) {
  const isCenter = align === "center";
  return (
    <div className={`${isCenter ? "max-w-3xl mx-auto text-center" : "max-w-3xl"} mb-12 sm:mb-16`}>
      {eyebrow && (
        <div
          className={`text-[10.5px] uppercase tracking-[0.3em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5 ${
            isCenter ? "" : ""
          }`}
        >
          <span className="h-px w-7 bg-primary/70" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`${display ? "font-display" : "font-heading"} ${
          gradient ? "text-gradient" : "text-foreground"
        } text-[1.75rem] sm:text-[2.4rem] lg:text-[3rem] font-bold leading-[1.08] tracking-[-0.02em]`}
      >
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-muted-foreground text-[15px] sm:text-[17px] font-sans leading-relaxed max-w-2xl">
          {sub}
        </p>
      )}
    </div>
  );
}


function Manifesto() {
  return (
    <section className="relative py-24 sm:py-32 border-b border-border/30">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[360px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.25 250 / 0.35), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-start">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/80 font-medium font-sans flex items-center gap-2.5 lg:flex-col lg:items-start lg:gap-3 lg:pt-3">
            <span className="h-px w-8 bg-primary/70 lg:h-12 lg:w-px" />
            Manifesto
          </div>
          <div>
            <p className="font-heading text-[1.4rem] sm:text-[1.8rem] lg:text-[2.1rem] leading-[1.25] tracking-[-0.015em] text-foreground/95">
              Acreditamos que a primeira impressão digital de uma empresa{" "}
              <span className="text-foreground/55">
                deveria refletir a mesma sofisticação que ela exige no mundo real.
              </span>{" "}
              Por isso construímos cada site, automação e sistema como um produto —
              não como um template.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] uppercase tracking-[0.22em] text-muted-foreground/80 font-sans font-medium">
              <span>Design sob medida</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Engenharia própria</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Operação contínua</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { n: "01", icon: LayoutTemplate, title: "Landing Pages", desc: "Páginas de alta densidade visual, pensadas para converter contatos qualificados." },
    { n: "02", icon: Globe, title: "Websites institucionais", desc: "Presença digital com identidade própria e arquitetura escalável." },
    { n: "03", icon: Zap, title: "Automação de atendimento", desc: "Fluxos via WhatsApp que respondem, qualificam e encaminham em tempo real." },
    { n: "04", icon: Bot, title: "Inteligência Artificial aplicada", desc: "Assistentes treinados no contexto do seu negócio, integrados aos canais existentes." },
    { n: "05", icon: Briefcase, title: "Sistemas comerciais", desc: "CRM, agendamento e dashboards desenhados para a operação real do time." },
  ];
  return (
    <section id="servicos" className="py-24 sm:py-32 relative border-y border-border/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          display
          align="left"
          eyebrow="Soluções"
          title="Cinco frentes. Um único padrão de execução."
          sub="Cada serviço é tratado como produto: especificado, prototipado e operado com a mesma exigência técnica."
        />
        <ul className="mt-4 divide-y divide-border/40 border-y border-border/40">
          {items.map((it) => (
            <li
              key={it.title}
              className="group grid grid-cols-[auto_1fr] sm:grid-cols-[3rem_auto_1fr] items-start gap-x-5 sm:gap-x-8 gap-y-2 py-7 sm:py-8 transition-colors hover:bg-card/30"
            >
              <span className="hidden sm:block font-display text-[12px] text-muted-foreground/70 tracking-[0.2em] pt-1.5">
                {it.n}
              </span>
              <div className="h-11 w-11 rounded-lg flex items-center justify-center ring-1 ring-primary/25 group-hover:ring-primary/60 transition" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.5), oklch(0.18 0.05 245 / 0.25))" }}>
                <it.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="col-start-2 sm:col-start-3 min-w-0">
                <h3 className="font-heading font-semibold text-[17px] sm:text-[19px] tracking-[-0.01em] text-foreground">
                  {it.title}
                </h3>
                <p className="mt-1.5 text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed font-sans max-w-2xl">
                  {it.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
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
import automationCover from "@/assets/automation-thumb.jpg.asset.json";
import crmCover from "@/assets/crm-thumb.jpg.asset.json";
import schedulingCover from "@/assets/scheduling-thumb.jpg.asset.json";
import vitalisCover from "@/assets/vitalis-hero.jpg.asset.json";
import bellaCover from "@/assets/studio-bella-hero.jpg.asset.json";
import primeCover from "@/assets/prime-hero.jpg.asset.json";
import imperialCover from "@/assets/imperial-hero.jpg.asset.json";

function Demonstracoes() {
  const cards: DemoCard[] = [
    { icon: Scissors, title: "Black Crown Barbershop", desc: "Website para Barbearia", status: "Ativo", href: BLACK_CROWN_URL, external: true, cover: blackCrownCover.url },
    { icon: Bot, title: "Imperius Automation", desc: "IA + WhatsApp Automatizado", status: "Ativo", to: "/automation", cover: automationCover.url },
    { icon: Users, title: "Imperius CRM", desc: "CRM Comercial Inteligente", status: "Ativo", to: "/crm", cover: crmCover.url },
    { icon: Calendar, title: "Imperius Scheduling", desc: "Sistema de Agendamento Inteligente", status: "Ativo", to: "/scheduling", cover: schedulingCover.url },
    { icon: Stethoscope, title: "Clínica Vitalis", desc: "Website + agendamento para Clínica", status: "Ativo", to: "/vitalis", cover: vitalisCover.url },
    { icon: Sparkles, title: "Studio Bella Estética", desc: "Centro de estética premium em São Paulo", status: "Ativo", to: "/studio-bella", cover: bellaCover.url },
    { icon: Building2, title: "Prime Imóveis", desc: "Portal premium para imobiliária de alto padrão", status: "Ativo", to: "/prime-imoveis", cover: primeCover.url },
    { icon: UtensilsCrossed, title: "Restaurante Imperial", desc: "Reservas e cardápio para gastronomia premium", status: "Ativo", to: "/restaurante-imperial", cover: imperialCover.url },
  ];


  return (
    <section id="vitrine" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[460px] rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, oklch(0.55 0.25 250 / 0.32), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 sm:mb-16 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 lg:items-end">
          <div className="max-w-2xl">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
              <span className="h-px w-8 bg-primary/70" />
              Vitrine · {cards.length.toString().padStart(2, "0")} projetos
            </div>
            <h2 className="font-display text-[2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-foreground">
              Projetos navegáveis,
              <span className="block text-neon">não mockups.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed font-sans max-w-xl">
              Cada card abaixo abre uma demonstração funcional — desenvolvida pela Imperius
              para um nicho real. Clique, explore o fluxo e veja o nível de acabamento
              entregue antes mesmo do briefing.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11.5px] uppercase tracking-[0.22em] text-muted-foreground/80 font-sans font-medium lg:justify-end">
            <span>Produtos Imperius · 03</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Nichos verticais · 05</span>
          </div>
        </div>
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
    { n: "01", i: MessageCircle, t: "Diagnóstico", d: "Conversa direta para entender contexto, posicionamento e gargalos atuais." },
    { n: "02", i: LayoutTemplate, t: "Demonstração sob medida", d: "Construímos uma prévia funcional do seu projeto antes de qualquer fechamento." },
    { n: "03", i: ClipboardList, t: "Refinamento", d: "Iterações até cada detalhe refletir a sua marca e seu padrão de operação." },
    { n: "04", i: Rocket, t: "Publicação", d: "Deploy, configuração de domínio, integrações e monitoramento ativo." },
    { n: "05", i: TrendingUp, t: "Operação contínua", d: "Acompanhamento de performance e evoluções planejadas com o seu time." },
  ];
  return (
    <section id="processo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          display
          align="left"
          eyebrow="Processo"
          title="Do briefing à operação, em cinco passos."
          sub="Sem propostas genéricas. Você acompanha a construção em cada etapa."
        />
        <ol className="mt-4 divide-y divide-border/40 border-y border-border/40">
          {steps.map((s) => (
            <li
              key={s.t}
              className="grid grid-cols-[3rem_auto_1fr] sm:grid-cols-[4rem_auto_1fr] items-start gap-x-5 sm:gap-x-8 py-7 sm:py-8"
            >
              <span className="font-display text-[13px] sm:text-[14px] text-primary tracking-[0.2em] pt-2 font-semibold">
                {s.n}
              </span>
              <div className="h-10 w-10 rounded-lg flex items-center justify-center ring-1 ring-primary/30 shrink-0" style={{ background: "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.55), oklch(0.18 0.05 245 / 0.25))" }}>
                <s.i className="h-[18px] w-[18px] text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-semibold text-[17px] sm:text-[19px] tracking-[-0.01em] text-foreground">
                  {s.t}
                </h3>
                <p className="mt-1.5 text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed font-sans max-w-2xl">
                  {s.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
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
    <section id="faq" className="py-24 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary/70" />
            FAQ
          </div>
          <h2 className="font-heading text-[1.75rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold leading-[1.1] tracking-[-0.02em] text-foreground">
            Antes de pedir sua demonstração.
          </h2>
        </div>
        <div className="divide-y divide-border/40 border-y border-border/40">
          {items.map((it) => (
            <details key={it.q} className="group py-6 sm:py-7">
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <h3 className="font-heading font-semibold text-[16px] sm:text-[18px] tracking-[-0.01em] text-foreground">
                  {it.q}
                </h3>
                <span className="mt-1 shrink-0 h-7 w-7 rounded-full border border-border/60 grid place-items-center text-muted-foreground group-open:bg-primary/10 group-open:text-primary group-open:border-primary/50 transition-colors">
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-open:rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-[14.5px] sm:text-[15px] text-muted-foreground leading-relaxed font-sans max-w-2xl">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 border-t border-border/30 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[420px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.25 250 / 0.4), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-6 font-sans inline-flex items-center gap-2.5">
          <span className="h-px w-8 bg-primary/70" />
          Próximo passo
        </div>
        <h2 className="font-display text-[2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-foreground">
          Pronto para ver sua empresa
          <span className="block text-neon">na medida que ela merece?</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed font-sans">
          Receba uma demonstração construída especificamente para o seu negócio — sem
          briefing engessado, sem orçamento antes da entrega.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
            onClick={() => {
              track("final_cta_click", { destination: "whatsapp" });
              track("whatsapp_click", { location: "final_cta" });
            }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full h-12 px-8 text-[14px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_oklch(0.72_0.22_250/0.8)]"
            >
              Solicitar demonstração <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        <p className="mt-8 text-[12px] text-muted-foreground/70 font-sans tracking-wide">
          Sem compromisso · Resposta no mesmo dia útil · Atendimento direto com a equipe
        </p>
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
              <li><a href="#vitrine" className="hover:text-foreground transition-colors">Vitrine de projetos</a></li>
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
