import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/imperius-logo-official.png.asset.json";
import blackCrownHeroCover from "@/assets/black-crown-cover.png.asset.json";
import vitalisHeroCover from "@/assets/vitalis-hero.jpg.asset.json";

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
  Mail,
  Shield,
  CheckCircle2,
  Activity,
  CheckCheck,
  Clock,
  BarChart3,
  CircleDot,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const track = (name: string, params: Record<string, unknown> = {}) => trackEvent(name, params);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imperius — Software House para Operações Comerciais" },
      {
        name: "description",
        content:
          "Software house brasileira especializada em operações comerciais. Engenharia de atendimento, pipeline e agenda — com produtos próprios em evolução.",
      },
      { property: "og:title", content: "Imperius — Software House para Operações Comerciais" },
      {
        property: "og:description",
        content:
          "Software house brasileira especializada em operações comerciais. Engenharia de atendimento, pipeline e agenda — com produtos próprios em evolução.",
      },

      { name: "twitter:card", content: "summary_large_image" },

    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap",
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
// Endereço de contato comercial. Centralizado para permitir migração futura
// para domínio próprio (ex.: contato@imperiusdigital.com.br) sem alterar JSX.
const PROPOSAL_EMAIL = "imperiusuniverse@gmail.com";
const PROPOSAL_MAILTO = `mailto:${PROPOSAL_EMAIL}?subject=${encodeURIComponent("Proposta Imperius — apresentação personalizada")}&body=${encodeURIComponent("Olá, equipe Imperius.\n\nGostaria de receber uma proposta personalizada.\n\nEmpresa:\nSegmento:\nObjetivo principal:\n\nObrigado.")}`;

function Landing() {
  return (
    <div className="min-h-dvh bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Problema />
      <Ecossistema />
      <Demonstracoes />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Problema() {
  const dores = [
    { icon: MessageCircle, t: "Atendimento disperso", d: "Mensagens espalhadas entre canais, sem registro nem responsável claro." },
    { icon: TrendingUp, t: "Oportunidades perdidas", d: "Leads que entram, somem na conversa e nunca chegam ao comercial." },
    { icon: ClipboardList, t: "Processos manuais", d: "Planilhas, copia-e-cola e retrabalho consumindo o time todo dia." },
    { icon: Activity, t: "Sem visão da operação", d: "Você não sabe quantos contatos entraram, quantos fecharam, quanto sobrou." },
  ];
  return (
    <section className="relative py-20 sm:py-28 border-y border-border/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary/70" />
            O problema
          </div>
          <h2 className="font-display font-semibold text-[1.85rem] sm:text-[2.4rem] lg:text-[2.7rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            Sua operação comercial está rodando{" "}
            <span className="text-foreground/55">no improviso.</span>
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-border/40 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
          {dores.map((d) => (
            <li key={d.t} className="p-5 sm:p-6 flex flex-col gap-3 min-w-0">
              <div className="h-9 w-9 rounded-md border border-primary/25 bg-primary/10 grid place-items-center">
                <d.icon className="h-[18px] w-[18px] text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-semibold text-[14.5px] tracking-[-0.005em] text-foreground leading-snug">
                  {d.t}
                </h3>
                <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed font-sans">
                  {d.d}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
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
            <span className="text-[9.5px] uppercase tracking-[0.28em] text-muted-foreground/80 font-medium truncate">Software house</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[13px] text-muted-foreground font-medium">
          <a href="#vitrine" className="hover:text-foreground transition-colors">Vitrine</a>
          <a href="#servicos" className="hover:text-foreground transition-colors">Soluções</a>
          <a href="#processo" className="hover:text-foreground transition-colors">Processo</a>
          <Link to="/portfolio" className="hover:text-foreground transition-colors">Portfólio</Link>
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
      className="relative lg:min-h-[92vh] flex items-center pt-28 sm:pt-32 pb-20 sm:pb-24 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-25" />
      <div
        className="absolute top-[38%] right-[-8%] w-[560px] h-[560px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.5 0.22 250 / 0.18), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-sans font-medium mb-8">
              <span className="h-px w-8 bg-primary/70" />
              Imperius · Software house
            </div>
            <h1 className="font-display text-[2rem] sm:text-[2.9rem] lg:text-[3.4rem] xl:text-[3.9rem] font-semibold leading-[1.04] tracking-[-0.028em] text-foreground">
              Engenharia de software aplicada à{" "}
              <span className="text-neon">operação comercial da sua empresa</span>.
            </h1>
            <p className="mt-7 max-w-xl text-muted-foreground text-base sm:text-[17px] leading-relaxed font-sans">
              Construímos sistemas de atendimento, pipeline e agenda como engenharia —
              não como template. Produtos próprios em evolução, implantados no contexto real do seu negócio.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
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
                href={PROPOSAL_MAILTO}
                className="w-full sm:w-auto"
                onClick={() => track("hero_cta_click", { destination: "email" })}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-border/70 bg-background/30 hover:bg-background/60 hover:border-primary/50 text-foreground/90 font-medium rounded-full h-12 px-6 text-[13.5px] transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" /> Receber demonstração personalizada
                </Button>
              </a>
            </div>
            <p className="mt-8 text-[12px] text-muted-foreground/70 font-sans tracking-wide">
              Demonstração funcional em poucos dias · Sem proposta antes da entrega · Atendimento direto com a equipe
            </p>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto lg:mr-0" aria-hidden>
      {/* Main browser frame — Black Crown live project */}
      <a
        href={BLACK_CROWN_URL}
        target="_blank"
        rel="noreferrer"
        onClick={() => track("hero_visual_click", { project: "black_crown" })}
        className="relative block rounded-[14px] overflow-hidden border border-border/60 bg-[oklch(0.09_0.005_240)] shadow-[0_40px_120px_-30px_oklch(0_0_0/0.8),0_0_0_1px_oklch(1_0_0/0.04)_inset] transition-transform duration-500 hover:-translate-y-1"
      >
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/50 bg-[oklch(0.08_0.004_240)]">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 flex-1 truncate rounded-md bg-[oklch(0.12_0.005_245)] px-2.5 py-1 text-[10.5px] font-sans text-muted-foreground/80">
            blackcrown-by-imperius.lovable.app
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[9.5px] uppercase tracking-[0.22em] text-primary font-semibold font-sans">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Ao vivo
          </span>
        </div>
        <div className="relative aspect-[16/10] bg-card">
          <img
            src={blackCrownHeroCover.url}
            alt="Projeto Black Crown desenvolvido pela Imperius"
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
        </div>
      </a>

      {/* Floating mini-frame: Vitalis */}
      <div className="hidden sm:block absolute -bottom-10 -left-8 w-[58%] rounded-[12px] overflow-hidden border border-border/60 bg-[oklch(0.09_0.005_240)] shadow-[0_30px_80px_-30px_oklch(0_0_0/0.85),0_0_0_1px_oklch(1_0_0/0.04)_inset] rotate-[-3deg]">
        <div className="flex items-center gap-1 px-2 py-1.5 border-b border-border/50 bg-[oklch(0.08_0.004_240)]">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 truncate text-[8.5px] font-sans text-muted-foreground/80">
            vitalis · clínica
          </span>
        </div>
        <div className="relative aspect-[16/10] bg-card">
          <img
            src={vitalisHeroCover.url}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Floating chip: lead qualificado */}
      <div className="hidden sm:flex absolute -top-4 -right-2 sm:-right-6 items-center gap-2.5 rounded-full border border-border/60 bg-background/85 backdrop-blur-md px-3 py-2 shadow-[0_12px_30px_-12px_oklch(0_0_0/0.7)]">
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow shadow-[0_0_10px_oklch(0.72_0.22_250/0.9)]" />
        <span className="text-[11px] font-sans font-medium text-foreground/90">Lead qualificado</span>
        <span className="text-[9.5px] font-sans text-muted-foreground/70 tabular-nums">09:42</span>
      </div>

      {/* Floating chip: CRM */}
      <div className="hidden md:flex absolute bottom-6 -right-4 items-center gap-2 rounded-xl border border-border/60 bg-background/85 backdrop-blur-md px-3 py-2 shadow-[0_16px_36px_-14px_oklch(0_0_0/0.7)] rotate-[3deg]">
        <div className="h-7 w-7 rounded-md bg-primary/15 border border-primary/30 grid place-items-center">
          <Users className="h-3.5 w-3.5 text-primary" />
        </div>
        <div className="leading-tight">
          <div className="text-[10.5px] font-heading font-semibold text-foreground">Pipeline · R$ 380K</div>
          <div className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80 font-sans">Demonstração visual</div>
        </div>
      </div>
    </div>
  );
}

function TrustStrip() {
  const items = [
    { icon: LayoutTemplate, label: "Implementações de referência", value: "8 ambientes" },
    { icon: Briefcase, label: "Verticais atendidas", value: "5 segmentos" },
    { icon: CheckCircle2, label: "Stack", value: "Engenharia própria" },
    { icon: Shield, label: "Atendimento", value: "Direto com a engenharia" },
  ];
  return (
    <section
      aria-label="Confiança"
      className="relative border-y border-border/40 bg-[oklch(0.07_0.004_240)]/70 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-6 py-7 sm:py-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
          {items.map((it) => (
            <li key={it.label} className="flex items-start gap-3 min-w-0">
              <div className="mt-0.5 h-8 w-8 shrink-0 rounded-md grid place-items-center border border-primary/25 bg-primary/10">
                <it.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground/80 font-sans font-medium">
                  {it.label}
                </div>
                <div className="mt-0.5 text-[13px] sm:text-[13.5px] text-foreground/90 font-sans font-medium leading-snug">
                  {it.value}
                </div>
              </div>
            </li>
          ))}
        </ul>
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
        className={`${display ? "font-display font-semibold" : "font-heading font-semibold"} ${
          gradient ? "text-gradient" : "text-foreground"
        } text-[1.7rem] sm:text-[2.25rem] lg:text-[2.75rem] leading-[1.08] tracking-[-0.025em]`}
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


function Ecossistema() {
  const cards = [
    {
      icon: MessageCircle,
      tag: "Atendimento",
      title: "Atendimento Inteligente",
      desc: "Centralização do contato, qualificação e direcionamento inicial.",
    },
    {
      icon: Users,
      tag: "Comercial",
      title: "Gestão Comercial",
      desc: "Organização de oportunidades e acompanhamento do processo comercial.",
    },
    {
      icon: Calendar,
      tag: "Operação",
      title: "Operação Integrada",
      desc: "Agenda, confirmações e processos conectados em um único fluxo.",
    },
  ];
  return (
    <section className="relative py-20 sm:py-28 border-b border-border/30 bg-[oklch(0.075_0.004_240)]">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[220px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.22 250 / 0.2), transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-primary/90 font-semibold mb-5 font-sans inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary/70" />
            Ecossistema Imperius
          </div>
          <h2 className="font-display font-semibold text-[1.85rem] sm:text-[2.4rem] lg:text-[2.7rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            Tecnologia aplicada à{" "}
            <span className="text-neon">operação comercial.</span>
          </h2>
        </div>
        <ul className="grid gap-4 sm:gap-5 sm:grid-cols-3">
          {cards.map((c) => (
            <li
              key={c.title}
              className="group rounded-xl border border-border/50 bg-[oklch(0.1_0.005_245)]/80 backdrop-blur-md p-6 flex flex-col transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-30px_oklch(0_0_0/0.8)]"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="h-9 w-9 rounded-md border border-primary/30 bg-primary/10 grid place-items-center">
                  <c.icon className="h-[18px] w-[18px] text-primary" />
                </div>
                <span className="text-[9.5px] uppercase tracking-[0.22em] font-sans font-semibold text-muted-foreground/70">
                  {c.tag}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-[16px] tracking-[-0.01em] text-foreground leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed font-sans">
                {c.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}



function Manifesto() {
  return (
    <section className="relative py-24 sm:py-32 border-b border-border/30">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[360px] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.22 250 / 0.2), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-start">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/80 font-medium font-sans flex items-center gap-2.5 lg:flex-col lg:items-start lg:gap-3 lg:pt-3">
            <span className="h-px w-8 bg-primary/70 lg:h-12 lg:w-px" />
            Manifesto
          </div>
          <div>
            <p className="font-heading text-[1.4rem] sm:text-[1.8rem] lg:text-[2.1rem] leading-[1.25] tracking-[-0.015em] text-foreground/95">
              A operação comercial de uma empresa{" "}
              <span className="text-foreground/55">
                merece o mesmo rigor de engenharia de qualquer sistema crítico.
              </span>{" "}
              Por isso tratamos cada site, automação e fluxo como software —
              especificado, versionado e operado.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] uppercase tracking-[0.22em] text-muted-foreground/80 font-sans font-medium">
              <span>Engenharia própria</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Produtos em evolução</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Operação contínua</span>
            </div>
            {/* Identidade empresarial — institucional mínimo */}
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 border-t border-border/40 pt-8">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 font-sans font-semibold">Quem é</dt>
                <dd className="mt-2 text-[13.5px] text-foreground/90 font-sans leading-relaxed">
                  Software house brasileira especializada em operações comerciais, com produtos próprios em evolução.
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 font-sans font-semibold">O que faz</dt>
                <dd className="mt-2 text-[13.5px] text-foreground/90 font-sans leading-relaxed">
                  Projeta e implementa sistemas de atendimento, pipeline e agenda — entregues, integrados e operados.
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 font-sans font-semibold">Como trabalha</dt>
                <dd className="mt-2 text-[13.5px] text-foreground/90 font-sans leading-relaxed">
                  Equipe técnica enxuta, contato direto com a engenharia e implementação funcional antes de qualquer proposta.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capacidades() {
  const items = [
    { icon: Bot, label: "Atendimento no WhatsApp com IA", meta: "API oficial Meta · 24/7" },
    { icon: Users, label: "CRM comercial", meta: "Pipeline, oportunidades e histórico" },
    { icon: Calendar, label: "Agendamento digital", meta: "Reservas, confirmações e lembretes" },
    { icon: Zap, label: "Integrações e websites", meta: "APIs, webhooks, landing pages" },
  ];
  return (
    <section aria-labelledby="capacidades-title" className="relative py-20 sm:py-24 border-t border-border/30">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 250 / 0.45), transparent)" }}
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 sm:mb-12 grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 lg:items-end">
          <div className="max-w-2xl">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
              <span className="h-px w-8 bg-primary/70" />
              Capacidade técnica
            </div>
            <h2
              id="capacidades-title"
              className="font-display font-semibold text-[1.7rem] sm:text-[2.1rem] lg:text-[2.35rem] leading-[1.08] tracking-[-0.025em] text-foreground"
            >
              Domínios técnicos que a Imperius desenvolve internamente.
            </h2>
            <p className="mt-4 text-muted-foreground text-[14.5px] sm:text-[15.5px] leading-relaxed font-sans max-w-xl">
              Cada frente abaixo é parte da stack que entregamos e operamos —
              engenharia própria, sem revenda e sem dependência de terceiros.
            </p>
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80 font-sans font-medium inline-flex items-center gap-2 lg:justify-end">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Engenharia própria
          </div>
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-4 border-y border-border/40 divide-x divide-border/40">
          {items.map((it) => (
            <li
              key={it.label}
              className="group p-5 sm:p-6 flex flex-col gap-3 min-w-0 transition-colors hover:bg-card/40"
            >
              <div className="h-9 w-9 rounded-md border border-primary/25 bg-primary/10 grid place-items-center">
                <it.icon className="h-[18px] w-[18px] text-primary" />
              </div>
              <div className="min-w-0">
                <div className="font-heading font-semibold text-[13.5px] sm:text-[14px] tracking-[-0.005em] text-foreground leading-snug">
                  {it.label}
                </div>
                <div className="mt-1 text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground/75 font-sans font-medium truncate">
                  {it.meta}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


function Services() {
  const items = [
    { n: "01", icon: LayoutTemplate, title: "Landing Pages de engenharia", desc: "Páginas de alta densidade técnica e visual, especificadas para converter tráfego em contato qualificado." },
    { n: "02", icon: Globe, title: "Websites institucionais", desc: "Presença digital com identidade própria, arquitetura escalável e código sob versão." },
    { n: "03", icon: Zap, title: "Engenharia de atendimento", desc: "Fluxos sobre a API oficial do WhatsApp Business que respondem, qualificam e encaminham em tempo real." },
    { n: "04", icon: Bot, title: "Camada de IA aplicada", desc: "Assistentes treinados no domínio do negócio, integrados aos canais e ao CRM existentes." },
    { n: "05", icon: Briefcase, title: "Sistemas comerciais", desc: "Módulos de CRM, agenda e indicadores construídos a partir da operação real do time — não pacotes prontos." },
  ];
  return (
    <section id="servicos" className="py-24 sm:py-32 relative border-y border-border/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          display
          align="left"
          eyebrow="Soluções"
          title="Cinco frentes. Um único padrão de engenharia."
          sub="Cada frente é tratada como produto: especificada, prototipada, versionada e operada com o mesmo rigor técnico."
        />
        <ul className="mt-4 divide-y divide-border/40 border-y border-border/40">
          {items.map((it) => (
            <li
              key={it.title}
              className="group grid grid-cols-[auto_1fr] sm:grid-cols-[3rem_auto_1fr] items-start gap-x-5 sm:gap-x-8 gap-y-2 py-7 sm:py-8 transition-colors hover:bg-card/30"
            >
              <span className="hidden sm:block font-heading font-semibold text-[12px] text-muted-foreground/70 tracking-[0.22em] pt-1.5">
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
type DemoKind =
  | "Atendimento"
  | "Comercial"
  | "Operação"
  | "Demonstração de nicho"
  | "Projeto externo";
type DemoCard = {
  icon: typeof Scissors;
  title: string;
  desc: string;
  status: DemoStatus;
  kind: DemoKind;
  href?: string;
  to?: string;
  external?: boolean;
  cover?: string;
  domain?: string;
  /** Optional custom preview node (used for Imperius products to render a realistic mini-UI instead of a generic image). */
  preview?: "automation" | "crm" | "scheduling";
};

import blackCrownCover from "@/assets/black-crown-cover.png.asset.json";
import vitalisCover from "@/assets/vitalis-hero.jpg.asset.json";
import primeCover from "@/assets/prime-hero.jpg.asset.json";

const IMPERIUS_KINDS: ReadonlySet<DemoKind> = new Set(["Atendimento", "Comercial", "Operação"]);

function Demonstracoes() {
  return (
    <section id="vitrine" className="relative py-24 sm:py-32 border-t border-border/30">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" aria-hidden />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[380px] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.22 250 / 0.18), transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary/70" />
            Demonstração
          </div>
          <h2 className="font-display font-semibold text-[1.85rem] sm:text-[2.4rem] lg:text-[2.7rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            Aplicação real,{" "}
            <span className="text-neon">navegável agora.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-[14.5px] sm:text-[16px] leading-relaxed font-sans">
            Não é mockup. É um ambiente operacional ao vivo, em domínio próprio —
            o mesmo padrão de engenharia que aplicamos ao seu negócio.
          </p>
        </div>

        <a
          href={BLACK_CROWN_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => track("demo_click", { project: "black_crown" })}
          className="group block rounded-2xl border border-border/50 bg-[oklch(0.09_0.005_245)] overflow-hidden transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_40px_80px_-40px_oklch(0_0_0/0.9)]"
        >
          <div className="grid lg:grid-cols-[1.4fr_1fr] items-stretch">
            <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-black">
              <img
                src={blackCrownHeroCover.url}
                alt="Black Crown Barbershop — ambiente operacional Imperius"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/40 bg-background/70 backdrop-blur-md text-[10px] uppercase tracking-[0.18em] font-semibold font-sans text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Ao vivo
              </div>
            </div>
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.22em] font-sans font-semibold text-primary/90 inline-flex items-center gap-1.5">
                <Scissors className="h-3.5 w-3.5" />
                Projeto de referência
              </span>
              <h3 className="mt-3 font-display font-semibold text-[1.5rem] sm:text-[1.8rem] leading-[1.1] tracking-[-0.02em] text-foreground">
                Black Crown Barbershop
              </h3>
              <p className="mt-3 text-[14px] sm:text-[14.5px] text-muted-foreground leading-relaxed font-sans">
                Operação completa em produção: site, agendamento, atendimento e
                identidade — desenvolvidos e operados pela Imperius.
              </p>
              <div className="mt-5 text-[11px] uppercase tracking-[0.22em] font-sans text-muted-foreground/70 truncate">
                blackcrown-by-imperius.lovable.app
              </div>
              <div className="mt-auto pt-6 inline-flex items-center gap-2 text-[13px] font-sans font-semibold text-foreground group-hover:text-primary transition-colors">
                Abrir demonstração
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}


function StatusBadge({ status }: { status: DemoStatus }) {
  const styles: Record<DemoStatus, string> = {
    "Ativo": "border-primary/40 text-primary bg-background/70",
    "Em desenvolvimento": "border-border/70 text-muted-foreground bg-background/70",
    "Em breve": "border-border/60 text-muted-foreground/80 bg-background/70",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border backdrop-blur-md text-[10px] uppercase tracking-[0.18em] font-semibold font-sans ${styles[status]}`}>
      {status === "Ativo" && <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />}
      {status}
    </span>
  );
}

function KindTag({ kind }: { kind: DemoKind }) {
  const isProduct = IMPERIUS_KINDS.has(kind);
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] font-sans font-medium ${
        isProduct ? "text-primary/90" : "text-muted-foreground/80"
      }`}
    >
      <span className={`h-1 w-1 rounded-full ${isProduct ? "bg-primary" : "bg-muted-foreground/60"}`} />
      {kind}
    </span>
  );
}

function ProductPreview({ kind }: { kind: NonNullable<DemoCard["preview"]> }) {
  if (kind === "automation") {
    // WhatsApp + IA · conversa viva, com fila, digitando, métricas e ações IA
    const fila = [
      { n: "Mariana R.", m: "Quero ver o apto da Vila…", t: "agora", a: true, unread: 2, hot: true },
      { n: "João S.", m: "Bom dia, é possível agendar?", t: "09:42", a: false, unread: 1, hot: false },
      { n: "Ana C.", m: "Obrigada pelo retorno!", t: "09:18", a: false, unread: 0, hot: false },
      { n: "Pedro M.", m: "Vou pensar e te respondo", t: "ontem", a: false, unread: 0, hot: false },
      { n: "Letícia V.", m: "Posso pagar parcelado?", t: "ontem", a: false, unread: 0, hot: true },
      { n: "Bruno L.", m: "Qual o endereço?", t: "ontem", a: false, unread: 0, hot: false },
      { n: "Camila O.", m: "Aceita financiamento?", t: "qua", a: false, unread: 0, hot: true },
      { n: "Diego F.", m: "Tem garagem?", t: "qua", a: false, unread: 0, hot: false },
    ];

    return (
      <div className="absolute inset-0 grid grid-cols-[31%_1fr] bg-[oklch(0.09_0.005_245)]">
        {/* Fila de conversas */}
        <div className="border-r border-border/40 bg-[oklch(0.075_0.004_245)] flex flex-col">
          <div className="px-2.5 py-2 border-b border-border/40 flex items-center gap-1.5">
            <MessageCircle className="h-3 w-3 text-emerald-400/85" />
            <span className="text-[9px] font-semibold font-sans text-foreground/95">WhatsApp</span>
            <span className="ml-auto inline-flex items-center gap-1 text-[7.5px] font-semibold font-sans text-emerald-300 bg-emerald-400/10 border border-emerald-400/30 rounded-full px-1.5 py-px">
              <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse-glow" /> 12 ao vivo
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            {fila.map((c) => (
              <div key={c.n} className={`px-2.5 py-1.5 border-b border-border/20 ${c.a ? "bg-emerald-400/8 border-l-2 border-l-emerald-400/70" : ""}`}>
                <div className="flex items-center gap-1.5">
                  <div className="relative shrink-0">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-br from-emerald-400/40 to-emerald-700/40 grid place-items-center text-[6.5px] font-bold text-emerald-100 ring-1 ring-emerald-400/20">
                      {c.n.split(" ").map((x) => x[0]).join("").slice(0, 2)}
                    </div>
                    {c.a && <span className="absolute -bottom-px -right-px h-1.5 w-1.5 rounded-full bg-emerald-400 ring-1 ring-[oklch(0.075_0.004_245)]" />}
                  </div>
                  <span className="text-[9px] font-semibold font-sans text-foreground truncate flex-1">{c.n}</span>
                  <span className="text-[7px] font-sans text-muted-foreground/60 shrink-0">{c.t}</span>
                </div>
                <div className="mt-0.5 flex items-center gap-1 pl-[22px]">
                  <span className="text-[8px] font-sans text-muted-foreground/80 truncate flex-1">{c.m}</span>
                  {c.unread > 0 && (
                    <span className="shrink-0 text-[6.5px] font-bold font-sans text-[oklch(0.09_0.005_245)] bg-emerald-400 rounded-full h-3 min-w-[12px] px-1 grid place-items-center tabular-nums">
                      {c.unread}
                    </span>
                  )}
                  {c.hot && !c.unread && <span className="shrink-0 text-[6.5px] font-semibold font-sans text-amber-300 uppercase tracking-wider">Hot</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversa ativa */}
        <div className="flex flex-col bg-[oklch(0.065_0.003_245)] min-w-0">
          <div className="px-2.5 py-1.5 border-b border-border/40 flex items-center gap-2 bg-[oklch(0.085_0.004_245)]">
            <div className="relative shrink-0">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400/50 to-emerald-700/40 grid place-items-center text-[8.5px] font-bold text-emerald-50 ring-1 ring-emerald-400/30">MR</div>
              <span className="absolute -bottom-px -right-px h-2 w-2 rounded-full bg-emerald-400 ring-1 ring-[oklch(0.085_0.004_245)]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[9.5px] font-semibold font-sans text-foreground truncate">Mariana Ribeiro</span>
                <span className="text-[6.5px] font-semibold font-sans uppercase tracking-wider text-amber-300 bg-amber-300/10 border border-amber-300/30 rounded px-1 py-px">Lead quente</span>
              </div>
              <div className="text-[7.5px] font-sans text-emerald-300/80 flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse-glow" /> online · digitando
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[6.5px] font-mono uppercase tracking-wider text-muted-foreground/70 shrink-0">
              <Activity className="h-2.5 w-2.5 text-emerald-400/80" /> IA · 2.4s
            </div>
          </div>

          {/* Mensagens */}
          <div className="flex-1 px-2.5 py-2 space-y-1.5 overflow-hidden">
            <div className="text-center">
              <span className="text-[6.5px] font-sans uppercase tracking-wider text-muted-foreground/55 bg-[oklch(0.12_0.005_245)] rounded-full px-2 py-px">Hoje · 09:48</span>
            </div>
            <div className="max-w-[78%] rounded-md rounded-tl-sm bg-[#1f2c33] px-2 py-1 text-[8.5px] text-foreground/90 font-sans shadow-sm">
              Olá! Quero saber sobre o apartamento da Vila Mariana.
              <div className="text-right text-[6.5px] text-muted-foreground/60 mt-0.5">09:48</div>
            </div>
            <div className="ml-auto max-w-[80%] rounded-md rounded-tr-sm bg-[#005c4b]/90 px-2 py-1 text-[8.5px] text-white/95 font-sans shadow-sm">
              Claro, Mariana! Qual a sua faixa de orçamento?
              <div className="flex items-center justify-end gap-1 mt-0.5">
                <span className="text-[6px] font-semibold uppercase tracking-wider text-emerald-200/95 bg-emerald-400/20 border border-emerald-300/30 rounded px-1">IA</span>
                <span className="text-[6.5px] text-emerald-100/70">09:48</span>
                <CheckCheck className="h-2.5 w-2.5 text-sky-300" />
              </div>
            </div>
            <div className="max-w-[50%] rounded-md rounded-tl-sm bg-[#1f2c33] px-2 py-1 text-[8.5px] text-foreground/90 font-sans shadow-sm">
              Até R$ 850 mil.
              <div className="text-right text-[6.5px] text-muted-foreground/60 mt-0.5">09:49</div>
            </div>
            <div className="ml-auto max-w-[82%] rounded-md rounded-tr-sm bg-[#005c4b]/90 px-2 py-1 text-[8.5px] text-white/95 font-sans shadow-sm">
              Perfeito! Encaminhei para o consultor Lucas — ele responde em instantes.
              <div className="flex items-center justify-end gap-1 mt-0.5">
                <span className="text-[6px] font-semibold uppercase tracking-wider text-emerald-200/95 bg-emerald-400/20 border border-emerald-300/30 rounded px-1">IA</span>
                <span className="text-[6.5px] text-emerald-100/70">09:49</span>
                <CheckCheck className="h-2.5 w-2.5 text-sky-300" />
              </div>
            </div>
            {/* Indicador digitando */}
            <div className="max-w-[28%] rounded-md rounded-tl-sm bg-[#1f2c33] px-2 py-1.5 flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-muted-foreground/70 animate-pulse-glow" />
              <span className="h-1 w-1 rounded-full bg-muted-foreground/70 animate-pulse-glow [animation-delay:200ms]" />
              <span className="h-1 w-1 rounded-full bg-muted-foreground/70 animate-pulse-glow [animation-delay:400ms]" />
            </div>
            {/* Ação automática */}
            <div className="flex items-center gap-1.5 pt-0.5">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/12 border border-emerald-400/35 px-1.5 py-0.5 text-[7px] font-semibold font-sans text-emerald-200 uppercase tracking-wider">
                <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse-glow" />
                Encaminhado · CRM
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/12 border border-primary/30 px-1.5 py-0.5 text-[7px] font-semibold font-sans text-primary/90 uppercase tracking-wider">
                <Calendar className="h-2 w-2" /> Agenda sugerida
              </span>
            </div>
          </div>

          {/* Barra IA inferior */}
          <div className="border-t border-border/40 px-2.5 py-1 flex items-center gap-2 bg-[oklch(0.085_0.004_245)]">
            <div className="flex items-center gap-1 text-[7px] font-mono uppercase tracking-wider text-emerald-300/85">
              <Activity className="h-2.5 w-2.5" /> IA processando
            </div>
            <div className="flex-1 h-1 rounded-full bg-emerald-400/10 overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400/70 to-emerald-300/40 rounded-full" />
            </div>
            <span className="text-[7px] font-mono tabular-nums text-muted-foreground/75 shrink-0">128 hoje</span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "crm") {
    // Pipeline + receita ao vivo
    const cols = [
      { t: "Novo", n: 42, v: "92K", tone: "muted", pct: 100, cards: [
        { n: "Mariana R.", c: "Imobiliária Vila", v: "R$ 12.5K", tag: "Quente", hot: true },
        { n: "João S.", c: "Petfield", v: "R$ 8.3K", tag: "Morno", hot: false },
      ]},
      { t: "Contato", n: 28, v: "146K", tone: "primary", pct: 70, cards: [
        { n: "Ana C.", c: "Studio Belle", v: "R$ 18.9K", tag: "Quente", hot: true },
      ]},
      { t: "Proposta", n: 18, v: "92K", tone: "amber", pct: 45, cards: [
        { n: "Letícia V.", c: "Vitalis", v: "R$ 34K", tag: "Quente", hot: true },
      ]},
      { t: "Ganho", n: 12, v: "50K", tone: "emerald", pct: 28, cards: [
        { n: "Rafael T.", c: "Imperial", v: "R$ 22.8K", tag: "Won", hot: true },
      ]},
    ] as const;
    return (
      <div className="absolute inset-0 bg-[oklch(0.085_0.004_245)] flex flex-col">
        {/* Header KPI com mini-bars */}
        <div className="border-b border-border/40 px-2.5 py-1.5 flex items-center gap-1.5 bg-[oklch(0.075_0.003_245)]">
          <BarChart3 className="h-3 w-3 text-sky-300 shrink-0" />
          <span className="text-[9px] font-semibold font-sans text-foreground/95 truncate">Pipeline · Nov</span>
          <div className="ml-auto flex items-center gap-1.5 shrink-0">
            <span className="text-[9.5px] font-heading font-semibold text-sky-200 tabular-nums">R$ 380K</span>
            <span className="inline-flex items-center gap-0.5 text-[7px] font-semibold font-sans text-emerald-300 bg-emerald-400/10 border border-emerald-400/25 rounded px-1 py-px">
              <TrendingUp className="h-2 w-2" /> +18%
            </span>
          </div>
        </div>


        {/* KPI strip */}
        <div className="grid grid-cols-4 border-b border-border/40 divide-x divide-border/30">
          {[
            { l: "Oport.", v: "142", spark: [3, 5, 4, 6, 7, 5, 8] },
            { l: "Conv.", v: "28%", spark: [4, 4, 5, 5, 6, 7, 7] },
            { l: "Ticket méd.", v: "R$ 9.8K", spark: [5, 6, 5, 7, 6, 8, 9] },
            { l: "Fechados hoje", v: "+12", spark: [2, 3, 4, 5, 6, 8, 12] },
          ].map((k) => (
            <div key={k.l} className="px-2 py-1.5 flex flex-col gap-0.5">
              <div className="text-[7px] font-sans uppercase tracking-wider text-muted-foreground/65 truncate">{k.l}</div>
              <div className="flex items-end justify-between gap-1">
                <span className="text-[10.5px] font-heading font-semibold text-foreground tabular-nums">{k.v}</span>
                <div className="flex items-end gap-px h-3">
                  {k.spark.map((h, i) => (
                    <span key={i} className="w-[2px] rounded-sm bg-sky-300/55" style={{ height: `${(h / 12) * 100}%` }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kanban com indicador de progresso por coluna */}
        <div className="flex-1 grid grid-cols-4 gap-1.5 p-1.5 overflow-hidden">
          {cols.map((col) => {
            const toneCls =
              col.tone === "emerald" ? "bg-emerald-400" :
              col.tone === "amber" ? "bg-amber-300" :
              col.tone === "primary" ? "bg-sky-300" : "bg-muted-foreground/50";
            const chipCls =
              col.tone === "emerald" ? "bg-emerald-400/15 text-emerald-200 border-emerald-400/35" :
              col.tone === "amber" ? "bg-amber-300/15 text-amber-200 border-amber-300/35" :
              "bg-sky-300/12 text-sky-100 border-sky-300/30";
            return (
              <div key={col.t} className="flex flex-col min-w-0 rounded-md bg-[oklch(0.095_0.005_245)] border border-border/40 p-1">
                <div className="flex items-center justify-between mb-0.5 gap-1">
                  <span className="text-[7.5px] font-semibold font-sans uppercase tracking-wider text-foreground/90 truncate">{col.t}</span>
                  <span className="text-[7px] font-sans text-muted-foreground/75 tabular-nums shrink-0">{col.n}</span>
                </div>
                <div className="h-0.5 rounded-full bg-border/40 mb-1 overflow-hidden">
                  <div className={`h-full ${toneCls} rounded-full`} style={{ width: `${col.pct}%` }} />
                </div>
                <div className="text-[7.5px] font-mono tabular-nums text-foreground/85 mb-1">R$ {col.v}</div>
                <div className="space-y-1">
                  {col.cards.map((c, i) => (
                    <div key={i} className="rounded border border-border/50 bg-[oklch(0.115_0.005_245)] p-1 hover:bg-[oklch(0.13_0.006_245)] transition-colors">
                      <div className="flex items-center gap-1 mb-0.5">
                        <div className="h-3 w-3 rounded-full bg-sky-300/25 grid place-items-center text-[6px] font-bold text-sky-100 shrink-0">
                          {c.n.split(" ").map((x) => x[0]).join("").slice(0, 2)}
                        </div>
                        <span className="text-[7.5px] font-semibold font-sans text-foreground truncate flex-1">{c.n}</span>
                      </div>
                      <div className="text-[6.5px] font-sans text-muted-foreground/75 truncate">{c.c}</div>
                      <div className="mt-0.5 flex items-center justify-between gap-1">
                        <span className="text-[7.5px] font-semibold font-sans text-foreground/95 tabular-nums">{c.v}</span>
                        <span className={`text-[6px] font-semibold font-sans uppercase tracking-wider px-1 py-px rounded border ${chipCls}`}>{c.tag}</span>
                      </div>
                    </div>
                  ))}
                  {col.tone === "primary" && (
                    <div className="rounded border border-dashed border-sky-300/35 bg-sky-300/5 p-1 flex items-center gap-1">
                      <ArrowRight className="h-2 w-2 text-sky-300" />
                      <span className="text-[6.5px] font-sans text-sky-200/85 truncate">movendo · 3 leads</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer ticker */}
        <div className="border-t border-border/40 px-2.5 py-1 flex items-center gap-2 bg-[oklch(0.075_0.003_245)]">
          <span className="inline-flex items-center gap-1 text-[7px] font-semibold font-sans text-emerald-300">
            <CircleDot className="h-2 w-2 animate-pulse-glow" /> Rafael T. · Imperial · <span className="tabular-nums">R$ 22.8K</span> fechado
          </span>
          <span className="ml-auto text-[7px] font-mono uppercase tracking-wider text-muted-foreground/70">Meta mês · 76%</span>
        </div>
      </div>
    );
  }

  // ============ Scheduling — agenda inteligente ============
  const days = ["Seg 18", "Ter 19", "Qua 20", "Qui 21", "Sex 22"];
  const slots = [
    { d: 0, top: 6, h: 18, label: "09:00 · Mariana R.", status: "confirmed" as const, dur: "45min" },
    { d: 0, top: 56, h: 14, label: "14:30 · Ana C.", status: "pending" as const, dur: "30min" },
    { d: 1, top: 22, h: 18, label: "10:30 · João S.", status: "confirmed" as const, dur: "45min" },
    { d: 2, top: 12, h: 14, label: "09:30 · Bruno L.", status: "confirmed" as const, dur: "30min" },
    { d: 2, top: 48, h: 22, label: "14:00 · Ana C.", status: "confirmed" as const, dur: "1h" },
    { d: 3, top: 8, h: 18, label: "09:30 · Pedro M.", status: "pending" as const, dur: "45min" },
    { d: 3, top: 54, h: 16, label: "15:00 · Lucas T.", status: "confirmed" as const, dur: "45min" },
    { d: 4, top: 30, h: 22, label: "13:00 · Letícia V.", status: "confirmed" as const, dur: "1h" },
    { d: 4, top: 70, h: 14, label: "16:30 · Cliente", status: "blocked" as const, dur: "Bloqueio" },
  ];
  const blue = "oklch(0.65 0.22 250)";
  return (
    <div className="absolute inset-0 bg-[oklch(0.085_0.004_245)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/40 px-2.5 py-1.5 bg-[oklch(0.075_0.003_245)]">
        <div className="flex items-center gap-1.5 min-w-0">
          <Calendar className="h-3 w-3" style={{ color: blue }} />
          <span className="text-[9px] font-semibold font-sans text-foreground/95 truncate">Novembro · Semana 47</span>
          <span className="hidden sm:inline-flex items-center gap-1 ml-1 text-[7px] font-mono uppercase tracking-wider text-muted-foreground/70">
            <Clock className="h-2 w-2" /> próx · 14:00
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[7px] font-sans uppercase tracking-wider text-muted-foreground/65 hidden sm:inline">Visão</span>
          <span className="text-[7px] font-semibold font-sans uppercase tracking-wider rounded px-1.5 py-px border" style={{ color: blue, borderColor: `color-mix(in oklab, ${blue} 45%, transparent)`, background: `color-mix(in oklab, ${blue} 12%, transparent)` }}>
            Semana
          </span>
        </div>
      </div>

      {/* KPI strip operacional */}
      <div className="grid grid-cols-4 border-b border-border/40 divide-x divide-border/30 bg-[oklch(0.08_0.004_245)]">
        {[
          { l: "Hoje", v: "6", tone: "neutral" },
          { l: "Confirmados", v: "4", tone: "emerald" },
          { l: "Pendentes", v: "1", tone: "amber" },
          { l: "Comparec.", v: "92%", tone: "blue" },
        ].map((k) => {
          const cls =
            k.tone === "emerald" ? "text-emerald-300" :
            k.tone === "amber" ? "text-amber-300" :
            k.tone === "blue" ? "" : "text-foreground";
          const style = k.tone === "blue" ? { color: "oklch(0.82 0.14 250)" } : undefined;
          return (
            <div key={k.l} className="px-2 py-1">
              <div className="text-[7px] font-sans uppercase tracking-wider text-muted-foreground/65 truncate">{k.l}</div>
              <div className={`text-[11px] font-heading font-semibold tabular-nums ${cls}`} style={style}>{k.v}</div>
            </div>
          );
        })}
      </div>

      {/* Calendário */}
      <div className="grid grid-cols-[24px_repeat(5,1fr)] flex-1 overflow-hidden">
        <div className="flex flex-col text-[6.5px] font-mono text-muted-foreground/55 pr-0.5 pt-3 border-r border-border/30">
          {["09", "11", "13", "15", "17"].map((h) => (
            <div key={h} className="flex-1 flex items-start justify-end pr-0.5">{h}</div>
          ))}
        </div>
        {days.map((d, idx) => {
          const isToday = idx === 2;
          return (
            <div key={d} className={`relative border-r border-border/30 last:border-r-0 ${isToday ? "bg-[oklch(0.095_0.01_250/0.5)]" : ""}`}>
              <div className={`text-[7.5px] font-semibold font-sans px-1 py-1 border-b border-border/30 truncate flex items-center gap-1 ${isToday ? "text-foreground" : "text-foreground/80"}`}>
                {d}
                {isToday && <span className="h-1 w-1 rounded-full" style={{ background: blue }} />}
              </div>
              {/* Linhas de hora */}
              <div className="absolute inset-x-0 top-[18px] bottom-0 pointer-events-none">
                {[0, 25, 50, 75].map((p) => (
                  <span key={p} className="absolute inset-x-0 h-px bg-border/15" style={{ top: `${p}%` }} />
                ))}
              </div>
              <div className="absolute inset-0 top-[18px]">
                {slots.filter((s) => s.d === idx).map((s, i) => {
                  const base = "absolute left-0.5 right-0.5 rounded px-1 py-0.5 text-[6.5px] font-semibold font-sans truncate flex flex-col gap-px";
                  const cls =
                    s.status === "confirmed" ? "" :
                    s.status === "pending" ? "bg-amber-300/15 border border-amber-300/45 text-amber-100" :
                    "bg-[oklch(0.16_0.005_245)] border border-dashed border-border/60 text-muted-foreground/80";
                  const style =
                    s.status === "confirmed"
                      ? { top: `${s.top}%`, height: `${s.h}%`, background: `color-mix(in oklab, ${blue} 22%, transparent)`, borderLeft: `2px solid ${blue}`, color: "oklch(0.92 0.06 250)" }
                      : { top: `${s.top}%`, height: `${s.h}%` };
                  return (
                    <div key={i} className={`${base} ${cls}`} style={style}>
                      <span className="truncate leading-tight">{s.label}</span>
                      <span className="text-[6px] font-mono uppercase tracking-wider opacity-75 truncate leading-tight">{s.dur}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer confirmações */}
      <div className="border-t border-border/40 px-2.5 py-1 flex items-center gap-2 bg-[oklch(0.075_0.003_245)]">
        <span className="inline-flex items-center gap-1 text-[7px] font-semibold font-sans text-emerald-300">
          <CheckCheck className="h-2.5 w-2.5" /> Ana C. · 14:00 confirmou
        </span>
        <span className="hidden sm:inline-flex items-center gap-1 text-[7px] font-semibold font-sans text-amber-300">
          <Clock className="h-2 w-2" /> Pedro M. · aguardando
        </span>
        <span className="ml-auto text-[7px] font-mono uppercase tracking-wider text-muted-foreground/70 shrink-0">Equipe · 3</span>
      </div>
    </div>
  );
}


function DemoCardItem({ card, featured = false, compact = false }: { card: DemoCard; featured?: boolean; compact?: boolean }) {
  const isActive = card.status === "Ativo";
  const accentRing = featured
    ? "ring-1 ring-emerald-400/20 shadow-[0_24px_60px_-30px_oklch(0.7_0.18_155/0.35)]"
    : "";
  const previewAspect = featured
    ? "aspect-[16/10] lg:aspect-[16/9]"
    : compact
      ? "aspect-[16/8]"
      : "aspect-[16/10]";
  const inner = (
    <>
      {(card.cover || card.preview) && (
        <div className="relative overflow-hidden bg-[oklch(0.09_0.005_240)] border-b border-border/50">
          {card.preview ? (
            <div className={`relative ${previewAspect} bg-card`}>
              <ProductPreview kind={card.preview} />
              <span className="absolute bottom-2 left-2 z-10 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 backdrop-blur-md px-2 py-0.5 text-[8.5px] uppercase tracking-[0.22em] font-semibold font-sans text-muted-foreground/85">
                <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                Demonstração visual
              </span>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/50 bg-[oklch(0.08_0.004_240)]">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                <span className="ml-2 flex-1 truncate rounded-md bg-[oklch(0.12_0.005_245)] px-2 py-0.5 text-[9.5px] font-sans text-muted-foreground/80">
                  {card.domain ?? "imperiusdigital.com.br"}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[8.5px] uppercase tracking-[0.22em] text-primary/90 font-semibold font-sans shrink-0">
                  <span className="h-1 w-1 rounded-full bg-primary animate-pulse-glow" />
                  Ao vivo
                </span>
              </div>
              <div className="relative aspect-[16/10] bg-card">
                <img
                  src={card.cover}
                  alt={`Capa da demonstração ${card.title}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </>
          )}
          <div className="absolute top-2 right-2"><StatusBadge status={card.status} /></div>
          {featured && (
            <span className="absolute top-2 left-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-background/85 backdrop-blur-md px-2.5 py-1 text-[9px] uppercase tracking-[0.22em] font-semibold font-sans text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
              Produto principal
            </span>
          )}
        </div>
      )}
      <div className="px-5 sm:px-6 pt-4 pb-5 sm:pb-6">
        <KindTag kind={card.kind} />
        <h3 className="mt-2 font-heading font-semibold text-[16px] sm:text-[17px] tracking-[-0.01em] text-foreground">
          {card.title}
        </h3>
        <p className="mt-1 text-[13.5px] text-muted-foreground leading-relaxed font-sans">
          {card.desc}
        </p>
        {isActive && (
          <div className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-primary/90 font-semibold font-sans">
            {card.external ? "Abrir projeto ao vivo" : "Explorar demonstração"} {card.external ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />}
          </div>
        )}
      </div>
    </>
  );

  const baseCls = `card-editorial rounded-xl overflow-hidden h-full flex flex-col ${accentRing}`;
  const activeCls = "card-editorial-hover group cursor-pointer";
  const inactiveCls = "opacity-80 cursor-default";

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


type ProductKind = NonNullable<DemoCard["preview"]>;
type ProductTheme = {
  Icon: typeof Bot;
  BadgeIcon: typeof Sparkles;
  version: string;
  badge: string;
  tagline: string;
  slug: string;
  ringCls: string;
  glowCls: string;
  dotCls: string;
  textCls: string;
  chipCls: string;
  iconWrapCls: string;
  bloom: string;
  /** Subtle wash applied to the HUD chrome so each product has a distinct top-bar color. */
  hudTintCls: string;
  /** Wash applied to the KPI strip background so each product's metrics row reads differently. */
  kpiStripCls: string;
  /** Color for the left accent rail that runs through the KPI strip. */
  kpiAccentCls: string;
  kpis: { l: string; v: string }[];
  cta: string;
};

const PRODUCT_THEMES: Record<ProductKind, ProductTheme> = {
  automation: {
    Icon: Bot,
    BadgeIcon: Sparkles,
    version: "v2.4",
    badge: "IA Ativa",
    tagline: "Resposta IA · 2.4s",
    slug: "imperius.automation",
    ringCls: "ring-1 ring-emerald-400/25",
    glowCls: "shadow-[0_30px_80px_-32px_oklch(0.7_0.18_155/0.45)]",
    dotCls: "bg-emerald-400",
    textCls: "text-emerald-300",
    chipCls: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
    iconWrapCls: "border-emerald-400/30 bg-emerald-400/10",
    bloom: "radial-gradient(ellipse at 50% 100%, oklch(0.7 0.18 155 / 0.22), transparent 70%)",
    hudTintCls: "bg-[linear-gradient(90deg,oklch(0.1_0.018_155/0.55),oklch(0.105_0.008_245)_55%,oklch(0.1_0.018_155/0.45))]",
    kpiStripCls: "bg-[linear-gradient(180deg,oklch(0.095_0.012_155/0.7),oklch(0.085_0.004_245))]",
    kpiAccentCls: "bg-emerald-400/70",
    kpis: [
      { l: "Conversas", v: "128" },
      { l: "Leads quentes", v: "34" },
      { l: "SLA IA", v: "2.4s" },
    ],
    cta: "Explorar Automation",
  },
  crm: {
    Icon: Users,
    BadgeIcon: TrendingUp,
    version: "v1.8",
    badge: "Pipeline live",
    tagline: "R$ 380K em jogo",
    slug: "imperius.crm",
    ringCls: "ring-1 ring-sky-300/25",
    glowCls: "shadow-[0_24px_60px_-30px_oklch(0.6_0.08_240/0.5)]",
    dotCls: "bg-sky-300",
    textCls: "text-sky-200",
    chipCls: "border-sky-300/40 bg-sky-300/10 text-sky-100",
    iconWrapCls: "border-sky-300/30 bg-sky-300/10",
    bloom: "radial-gradient(ellipse at 50% 100%, oklch(0.55 0.08 240 / 0.28), transparent 70%)",
    hudTintCls: "bg-[linear-gradient(90deg,oklch(0.1_0.02_240/0.55),oklch(0.105_0.006_245)_55%,oklch(0.1_0.02_240/0.45))]",
    kpiStripCls: "bg-[linear-gradient(180deg,oklch(0.095_0.014_240/0.7),oklch(0.085_0.004_245))]",
    kpiAccentCls: "bg-sky-300/70",
    kpis: [
      { l: "Pipeline", v: "R$ 380K" },
      { l: "Oport.", v: "142" },
      { l: "Conv.", v: "28%" },
    ],
    cta: "Explorar CRM",
  },
  scheduling: {
    Icon: Calendar,
    BadgeIcon: Zap,
    version: "v1.5",
    badge: "Agenda inteligente",
    tagline: "92% comparecimento",
    slug: "imperius.scheduling",
    ringCls: "ring-1 ring-[oklch(0.65_0.22_250)]/30",
    glowCls: "shadow-[0_24px_60px_-30px_oklch(0.55_0.22_250/0.55)]",
    dotCls: "bg-[oklch(0.72_0.2_250)]",
    textCls: "text-[oklch(0.82_0.14_250)]",
    chipCls: "border-[oklch(0.65_0.22_250)]/45 bg-[oklch(0.65_0.22_250)]/12 text-[oklch(0.85_0.12_250)]",
    iconWrapCls: "border-[oklch(0.65_0.22_250)]/35 bg-[oklch(0.65_0.22_250)]/12",
    bloom: "radial-gradient(ellipse at 50% 100%, oklch(0.55 0.22 250 / 0.32), transparent 70%)",
    hudTintCls: "bg-[linear-gradient(90deg,oklch(0.11_0.05_250/0.6),oklch(0.105_0.008_245)_55%,oklch(0.11_0.05_250/0.5))]",
    kpiStripCls: "bg-[linear-gradient(180deg,oklch(0.1_0.04_250/0.7),oklch(0.085_0.004_245))]",
    kpiAccentCls: "bg-[oklch(0.72_0.2_250)]/80",
    kpis: [
      { l: "Hoje", v: "6" },
      { l: "Confirmados", v: "4" },
      { l: "Comparec.", v: "92%" },
    ],
    cta: "Explorar Scheduling",
  },
};


function ProductShowcaseCard({ card, featured = false }: { card: DemoCard; featured?: boolean }) {
  const kind = card.preview as ProductKind;
  const theme = PRODUCT_THEMES[kind];
  const { Icon, BadgeIcon } = theme;
  const isActive = card.status === "Ativo";
  const previewWrapCls = featured
    ? "relative aspect-[16/9.6] lg:aspect-auto lg:flex-1 lg:min-h-[400px]"
    : "relative aspect-[16/8]";


  const shortTitle = card.title.replace("Imperius ", "");

  const inner = (
    <>
      {/* HUD top chrome — per-product tint + featured-only window controls */}
      <div className={`relative flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 border-b border-border/50 backdrop-blur-md ${theme.hudTintCls}`}>
        {featured && (
          <div className="hidden sm:flex items-center gap-1 shrink-0 mr-1" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-white/12" />
            <span className="h-2 w-2 rounded-full bg-white/12" />
            <span className="h-2 w-2 rounded-full bg-white/12" />
          </div>
        )}
        <div className={`h-7 w-7 shrink-0 rounded-lg grid place-items-center border ${theme.iconWrapCls}`}>
          <Icon className={`h-3.5 w-3.5 ${theme.textCls}`} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[10.5px] font-semibold font-sans text-foreground/95 leading-tight truncate">
            {shortTitle}
          </div>
          <div className="text-[8.5px] font-mono text-muted-foreground/65 leading-tight tracking-wider truncate">
            {theme.slug} · {theme.version}
          </div>
        </div>
        <span className={`shrink-0 inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[8.5px] uppercase tracking-[0.2em] font-semibold font-sans ${theme.chipCls}`}>
          <span className={`h-1 w-1 rounded-full ${theme.dotCls} animate-pulse-glow`} />
          {theme.badge}
        </span>
      </div>

      {/* Preview */}
      <div className={`${previewWrapCls} bg-card overflow-hidden border-b border-border/50`}>
        <ProductPreview kind={kind} />
        <div className="absolute top-2 right-2 z-10 inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/75 backdrop-blur-md px-1.5 py-0.5 text-[7.5px] font-mono uppercase tracking-wider text-foreground/85">
          <BadgeIcon className={`h-2.5 w-2.5 ${theme.textCls}`} />
          {theme.tagline}
        </div>
        <div className="absolute bottom-2 left-2 z-10 inline-flex items-center gap-1 rounded-md border border-border/60 bg-background/75 backdrop-blur-md px-1.5 py-0.5 text-[7.5px] font-mono uppercase tracking-wider text-muted-foreground/85">
          <Activity className={`h-2.5 w-2.5 ${theme.textCls}`} />
          Live
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" style={{ background: theme.bloom }} />
      </div>

      {/* KPI strip — per-product tint + left accent rail; featured uses larger value type */}
      <div className={`relative grid grid-cols-3 divide-x divide-border/30 border-b border-border/50 ${theme.kpiStripCls}`}>
        <span aria-hidden className={`absolute left-0 top-0 bottom-0 w-[2px] ${theme.kpiAccentCls}`} />
        {theme.kpis.map((k) => (
          <div key={k.l} className={featured ? "px-3 sm:px-4 py-3" : "px-2.5 sm:px-3 py-2.5"}>
            <div className="text-[8.5px] font-sans uppercase tracking-[0.18em] text-muted-foreground/70 truncate">
              {k.l}
            </div>
            <div className={`mt-0.5 font-heading font-semibold tabular-nums ${theme.textCls} ${featured ? "text-[17px] sm:text-[19px]" : "text-[13.5px] sm:text-[14.5px]"}`}>
              {k.v}
            </div>
          </div>
        ))}
      </div>


      {/* Bottom content */}
      <div className="px-4 sm:px-5 pt-3.5 pb-4 sm:pb-5 flex flex-col gap-2">
        <h3 className="font-heading font-semibold text-[15px] sm:text-[16px] tracking-[-0.01em] text-foreground">
          {card.title}
        </h3>
        <p className="text-[12.5px] sm:text-[13px] text-muted-foreground leading-relaxed font-sans">
          {card.desc}
        </p>

        {isActive && (
          <div className={`mt-1 inline-flex items-center gap-1.5 text-[12px] font-semibold font-sans ${theme.textCls}`}>
            {theme.cta}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        )}
      </div>
    </>
  );

  const baseCls = `card-editorial rounded-2xl overflow-hidden h-full flex flex-col relative ${theme.ringCls} ${theme.glowCls}`;
  const activeCls = "card-editorial-hover group cursor-pointer";

  if (isActive && card.to) {
    return (
      <Link
        to={card.to}
        className={`${baseCls} ${activeCls} block`}
        onClick={() => track("product_card_click", { title: card.title, to: card.to })}
      >
        {inner}
      </Link>
    );
  }
  return <div className={`${baseCls} opacity-90`}>{inner}</div>;
}





function Process() {
  const steps = [
    { n: "01", i: MessageCircle, t: "Diagnóstico", d: "Conversa direta para mapear contexto, gargalos e oportunidades reais." },
    { n: "02", i: LayoutTemplate, t: "Construção", d: "Engenharia da solução sob o seu contexto — funcional antes de qualquer fechamento." },
    { n: "03", i: Rocket, t: "Implantação", d: "Deploy, integrações e operação assistida até estar rodando com o seu time." },
  ];
  return (
    <section id="processo" className="py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary/70" />
            Como funciona
          </div>
          <h2 className="font-display font-semibold text-[1.85rem] sm:text-[2.4rem] lg:text-[2.7rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            Três etapas.{" "}
            <span className="text-foreground/55">Sem propostas genéricas.</span>
          </h2>
        </div>
        <ol className="grid gap-4 sm:gap-5 sm:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.t}
              className="rounded-xl border border-border/50 bg-[oklch(0.1_0.005_245)]/70 backdrop-blur-md p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="h-9 w-9 rounded-md border border-primary/30 bg-primary/10 grid place-items-center">
                  <s.i className="h-[18px] w-[18px] text-primary" />
                </div>
                <span className="font-heading text-[11px] tracking-[0.24em] text-muted-foreground/60 font-semibold">
                  {s.n}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-[16px] tracking-[-0.01em] text-foreground leading-snug">
                {s.t}
              </h3>
              <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed font-sans">
                {s.d}
              </p>
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
      q: "Quanto custa um projeto da Imperius?",
      a: "Projetos partem de uma faixa definida em conjunto após entender escopo, integrações e canais. Não trabalhamos com mensalidade obrigatória: você escolhe entre pagamento único do projeto ou plano contínuo de evolução e suporte. O valor é apresentado por escrito antes de qualquer compromisso — você só aprova depois de ver a demonstração funcional.",
    },
    {
      q: "Quanto tempo leva para entregar?",
      a: "Demonstração funcional personalizada: 3 a 7 dias úteis. Projeto completo (site + automação + CRM + agenda): 2 a 4 semanas, conforme escopo e integrações. Definimos cronograma por etapas no kickoff, com datas de entrega registradas.",
    },
    {
      q: "A automação funciona no meu WhatsApp atual?",
      a: "Sim. Trabalhamos com a API oficial do WhatsApp Business (Meta), o que mantém o número, contatos e conversas. O atendimento humano continua funcionando normalmente — a IA atua só nos momentos definidos por você (fora do horário, fila cheia, primeira triagem, agendamento).",
    },
    {
      q: "O site, código e dados são meus?",
      a: "Sim. O projeto entregue é seu: você recebe acesso ao código-fonte, ao painel, ao domínio e ao banco de dados. Não há lock-in técnico. Se um dia decidir sair, você leva tudo — inclusive os contatos, histórico de conversas e pipeline do CRM, exportáveis em formato padrão.",
    },
    {
      q: "Tem suporte depois da entrega?",
      a: "Sim. Todo projeto inclui período de acompanhamento pós-publicação para ajustes finos. Após esse período, você pode contratar um plano contínuo (evolução + suporte + monitoramento) ou seguir avulso por demanda. Resposta a chamados em horário comercial, com SLA combinado em contrato.",
    },
    {
      q: "Com quem eu falo?",
      a: "Diretamente com a equipe que desenvolve o projeto. Sem atendimento terceirizado, sem chatbot intermediário — o mesmo time conduz da conversa inicial à publicação e ao suporte.",
    },
  ];
  return (
    <section id="faq" className="py-24 sm:py-28 border-t border-border/30">
      <script
        type="application/ld+json"
        // FAQPage schema para SEO e featured snippets
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((it) => ({
              "@type": "Question",
              name: it.q,
              acceptedAnswer: { "@type": "Answer", text: it.a },
            })),
          }),
        }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary/70" />
            FAQ
          </div>
          <h2 className="font-heading text-[1.75rem] sm:text-[2.2rem] lg:text-[2.6rem] font-bold leading-[1.1] tracking-[-0.02em] text-foreground">
            Preço, prazo, propriedade e suporte — respondidos direto.
          </h2>
          <p className="mt-4 text-muted-foreground text-[14.5px] sm:text-[15px] leading-relaxed font-sans max-w-2xl">
            As perguntas que todo cliente faz antes de decidir. Respostas objetivas, sem rodeio comercial.
          </p>
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
              <p className="mt-4 text-[14.5px] sm:text-[15px] text-muted-foreground leading-relaxed font-sans max-w-2xl whitespace-pre-line">
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[420px] rounded-full blur-3xl opacity-18 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.22 250 / 0.22), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-6 font-sans inline-flex items-center gap-2.5">
          <span className="h-px w-8 bg-primary/70" />
          Próximo passo
        </div>
        <h2 className="font-display font-semibold text-[2rem] sm:text-[2.7rem] lg:text-[3.1rem] leading-[1.05] tracking-[-0.028em] text-foreground">
          Veja como a Imperius{" "}
          <span className="text-neon">apresenta</span>{" "}
          o seu negócio.
        </h2>
        <p className="mt-6 text-muted-foreground text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed font-sans">
          Você recebe uma demonstração construída especificamente para a sua empresa —
          escopo definido em conjunto, projeto funcional antes de qualquer contrato.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
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
              Falar com a equipe no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a
            href={PROPOSAL_MAILTO}
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors font-sans inline-flex items-center gap-2"
            onClick={() => track("final_cta_click", { destination: "email" })}
          >
            <Mail className="h-4 w-4" /> Prefiro receber por e-mail
          </a>
        </div>
        <p className="mt-8 text-[12px] text-muted-foreground/80 font-sans tracking-wide max-w-xl mx-auto leading-relaxed">
          Você fala direto com a equipe técnica (sem bot, sem SDR terceirizado).
          Resposta em até 2h em horário comercial · Demonstração funcional em 3 a 7 dias úteis · Sem proposta antes da entrega.
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
                <div className="font-heading font-bold tracking-[0.2em] text-sm">IMPERIUS</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-sans font-medium">Software · Automação · IA</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Software house brasileira especializada em operações comerciais, com produtos próprios em evolução para atendimento, pipeline e agenda.
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
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4 font-sans">Contato direto</div>
            <a href="tel:+5515981023792" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 font-sans" onClick={() => track("phone_click", { location: "footer" })}>
              <Phone className="h-4 w-4 shrink-0" /> +55 15 98102-3792
            </a>


            <a href={PROPOSAL_MAILTO} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 font-sans" onClick={() => track("footer_email_click")}>
              <Mail className="h-4 w-4 shrink-0" /> {PROPOSAL_EMAIL}
            </a>
            <a href={IG} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
              <Instagram className="h-4 w-4 shrink-0" /> @imperiusdigital.br
            </a>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4 font-sans">Próximo passo</div>
            <p className="text-sm text-muted-foreground mb-4 font-sans">Demonstração funcional em 3 a 7 dias úteis. Sem proposta antes da entrega.</p>
            <a href={WA} target="_blank" rel="noreferrer" onClick={() => track("whatsapp_click", { location: "footer_cta" })}>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_oklch(0.72_0.22_250/0.7)]">
                Falar com a equipe no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="mt-3 text-[11px] text-muted-foreground/70 font-sans">Resposta humana em até 2h em horário comercial.</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground font-sans">
          © {new Date().getFullYear()} Imperius Soluções Digitais. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
