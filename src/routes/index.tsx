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
  UtensilsCrossed,
  Mail,
  Shield,
  CheckCircle2,
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
const PROPOSAL_EMAIL = "contato@imperiusdigital.com.br";
const PROPOSAL_MAILTO = `mailto:${PROPOSAL_EMAIL}?subject=${encodeURIComponent("Proposta Imperius — apresentação personalizada")}&body=${encodeURIComponent("Olá, equipe Imperius.\n\nGostaria de receber uma proposta personalizada.\n\nEmpresa:\nSegmento:\nObjetivo principal:\n\nObrigado.")}`;

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <TrustStrip />
      <Ecossistema />
      <Manifesto />
      <Demonstracoes />
      <Capacidades />
      <SobreImperius />
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
              Imperius · Plataforma proprietária
            </div>
            <h1 className="font-display text-[2rem] sm:text-[2.9rem] lg:text-[3.4rem] xl:text-[3.9rem] font-semibold leading-[1.04] tracking-[-0.028em] text-foreground">
              Sites, automação e sistemas comerciais que transformam{" "}
              <span className="text-neon">presença digital em oportunidade real</span>.
            </h1>
            <p className="mt-7 max-w-xl text-muted-foreground text-base sm:text-[17px] leading-relaxed font-sans">
              Projetamos sites, fluxos com IA e sistemas comerciais sob medida —
              para gerar contatos qualificados e estruturar o ciclo comercial do primeiro toque ao fechamento.
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
          <div className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80 font-sans">+12 hoje</div>
        </div>
      </div>
    </div>
  );
}

function TrustStrip() {
  const items = [
    { icon: LayoutTemplate, label: "Projetos demonstrativos", value: "8 ativos" },
    { icon: Briefcase, label: "Verticais atendidas", value: "5 segmentos" },
    { icon: CheckCircle2, label: "Tecnologia", value: "Desenvolvimento próprio" },
    { icon: Shield, label: "Atendimento", value: "Direto com a equipe" },
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
  const flow = [
    {
      n: "01",
      tag: "Site",
      title: "Cliente entra",
      desc: "Landing page Imperius capta a intenção e abre a conversa.",
      icon: Globe,
      preview: (
        <div className="space-y-2">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            <span className="ml-1.5 text-[9px] font-sans text-muted-foreground/70 truncate">imperius.com</span>
          </div>
          <div className="h-1.5 w-3/4 rounded-full bg-foreground/15" />
          <div className="h-1.5 w-1/2 rounded-full bg-foreground/10" />
          <div className="mt-3 inline-flex h-5 items-center rounded-full bg-primary/90 px-2 text-[8.5px] font-semibold tracking-wide text-primary-foreground">
            Falar agora
          </div>
        </div>
      ),
    },
    {
      n: "02",
      tag: "WhatsApp · IA",
      title: "IA responde",
      desc: "Automação Imperius qualifica em segundos e coleta o que importa.",
      icon: MessageCircle,
      preview: (
        <div className="space-y-1.5">
          <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-sm bg-[#005c4b]/80 px-2 py-1 text-[9px] text-white/95 font-sans">
            Quero um orçamento
          </div>
          <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-[oklch(0.18_0.008_245)] px-2 py-1 text-[9px] text-foreground/85 font-sans">
            Claro! Em qual segmento?
          </div>
          <div className="ml-auto max-w-[60%] rounded-lg rounded-tr-sm bg-[#005c4b]/80 px-2 py-1 text-[9px] text-white/95 font-sans">
            Clínica
          </div>
        </div>
      ),
    },
    {
      n: "03",
      tag: "CRM",
      title: "Lead entra no pipeline",
      desc: "Contato é registrado, classificado e enviado ao responsável certo.",
      icon: Users,
      preview: (
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 rounded-md border border-border/60 bg-[oklch(0.12_0.008_245)] px-2 py-1.5">
            <div className="h-5 w-5 rounded-full bg-primary/30 grid place-items-center text-[8px] font-semibold text-primary">
              MR
            </div>
            <div className="min-w-0 flex-1">
              <div className="h-1.5 w-3/4 rounded-full bg-foreground/20" />
              <div className="mt-1 h-1 w-1/2 rounded-full bg-foreground/10" />
            </div>
            <span className="text-[8px] font-semibold uppercase tracking-wider text-primary">Quente</span>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-border/40 bg-[oklch(0.11_0.005_245)] px-2 py-1.5 opacity-70">
            <div className="h-5 w-5 rounded-full bg-foreground/10" />
            <div className="min-w-0 flex-1">
              <div className="h-1.5 w-2/3 rounded-full bg-foreground/15" />
              <div className="mt-1 h-1 w-1/3 rounded-full bg-foreground/10" />
            </div>
          </div>
        </div>
      ),
    },
    {
      n: "04",
      tag: "Agenda",
      title: "Agendamento criado",
      desc: "Horário confirmado no Scheduling, sincronizado com o time.",
      icon: Calendar,
      preview: (
        <div className="space-y-1.5">
          <div className="grid grid-cols-5 gap-1">
            {["S","T","Q","Q","S"].map((d, i) => (
              <div key={i} className={`rounded-sm text-[8px] font-semibold font-sans text-center py-1 ${i === 2 ? "bg-primary/80 text-primary-foreground" : "bg-[oklch(0.13_0.005_245)] text-muted-foreground/70"}`}>
                {d}
              </div>
            ))}
          </div>
          <div className="rounded-md border border-primary/40 bg-primary/10 px-2 py-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold font-sans text-foreground">14:30 · Demo</span>
              <span className="text-[8px] font-sans text-primary">Confirmado</span>
            </div>
            <div className="mt-0.5 text-[8.5px] font-sans text-muted-foreground/80">Mariana R.</div>
          </div>
        </div>
      ),
    },
    {
      n: "05",
      tag: "Resultado",
      title: "Oportunidade real",
      desc: "Empresa recebe o lead pronto — com contexto, histórico e próximo passo.",
      icon: TrendingUp,
      preview: (
        <div className="space-y-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-2xl font-semibold text-foreground leading-none">+38%</span>
            <span className="text-[9px] font-sans text-emerald-400/90 font-semibold">conversão</span>
          </div>
          <div className="flex items-end gap-1 h-8">
            {[30, 45, 38, 60, 52, 78, 90].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-primary/60" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="text-[9px] font-sans uppercase tracking-wider text-muted-foreground/70">Últimos 7 dias</div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 border-y border-border/30 bg-[oklch(0.075_0.004_240)]">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[760px] h-[260px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.22 250 / 0.2), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 sm:mb-20 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 lg:items-end">
          <div className="max-w-2xl">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
              <span className="h-px w-8 bg-primary/60" />
              Ecossistema Imperius
            </div>
            <h2 className="font-display font-semibold text-[1.9rem] sm:text-[2.5rem] lg:text-[2.9rem] leading-[1.05] tracking-[-0.028em] text-foreground">
              Do primeiro clique{" "}
              <span className="text-neon">à oportunidade fechada</span>
              {" "}— sem ruído entre etapas.
            </h2>
            <p className="mt-5 text-muted-foreground text-[15px] sm:text-[16.5px] leading-relaxed font-sans max-w-xl">
              Site, IA, WhatsApp, CRM e agenda funcionando como uma única operação.
              O cliente percorre o fluxo sem perceber a costura — sua empresa recebe
              cada lead já no ponto certo.
            </p>
          </div>
          <div className="text-[11.5px] uppercase tracking-[0.22em] text-muted-foreground/80 font-sans font-medium inline-flex items-center gap-3 lg:justify-end">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Plataforma integrada
          </div>
        </div>

        {/* Flow */}
        <div className="relative">
          {/* Desktop connector line */}
          <div
            className="hidden lg:block absolute top-[64px] left-[5%] right-[5%] h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 250 / 0.4), oklch(0.72 0.22 250 / 0.5), oklch(0.72 0.22 250 / 0.4), transparent)" }}
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4">
            {flow.map((step, i) => (
              <li key={step.n} className="relative flex flex-col">
                {/* Node marker (desktop) */}
                <div className="hidden lg:flex items-center justify-center mb-6">
                  <div className="relative h-8 w-8 rounded-full border border-primary/50 bg-[oklch(0.075_0.004_240)] grid place-items-center shadow-[0_0_24px_-6px_oklch(0.72_0.22_250/0.6)]">
                    <step.icon className="h-3.5 w-3.5 text-primary" />
                  </div>
                </div>

                <div className="relative rounded-xl border border-border/50 bg-[oklch(0.1_0.005_245)]/80 backdrop-blur-md p-4 sm:p-5 h-full flex flex-col transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-30px_oklch(0_0_0/0.8)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9.5px] uppercase tracking-[0.22em] font-sans font-semibold text-muted-foreground/80 inline-flex items-center gap-1.5">
                      <step.icon className="h-3 w-3 text-primary lg:hidden" />
                      {step.tag}
                    </span>
                    <span className="font-heading text-[10px] tracking-[0.24em] text-muted-foreground/50 font-semibold">{step.n}</span>
                  </div>

                  {/* Mini interface */}
                  <div className="rounded-lg border border-border/40 bg-[oklch(0.08_0.004_245)] p-2.5 mb-4 min-h-[88px]">
                    {step.preview}
                  </div>

                  <h3 className="font-heading font-semibold text-[14.5px] sm:text-[15px] tracking-[-0.01em] text-foreground leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] text-muted-foreground leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile/tablet connector arrow */}
                {i < flow.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2 text-muted-foreground/40">
                    <ArrowRight className="h-3.5 w-3.5 rotate-90 sm:rotate-0" />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Subline (lightweight, non-duplicative) */}
        <div className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70 font-sans font-medium">
          <span>Mesmo contato</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>Mesmo histórico</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>Mesmos indicadores</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="text-foreground/80">Veja cada produto na vitrine abaixo</span>
        </div>
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
              A primeira impressão digital de uma empresa{" "}
              <span className="text-foreground/55">
                deve refletir a mesma sofisticação que ela exige no mundo real.
              </span>{" "}
              Por isso desenvolvemos cada site, automação e sistema como produto —
              não como template.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] uppercase tracking-[0.22em] text-muted-foreground/80 font-sans font-medium">
              <span>Design sob medida</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Engenharia própria</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Operação contínua</span>
            </div>
            {/* Identidade empresarial — institucional mínimo */}
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 border-t border-border/40 pt-8">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 font-sans font-semibold">Quem é</dt>
                <dd className="mt-2 text-[13.5px] text-foreground/90 font-sans leading-relaxed">
                  Estúdio digital brasileiro especializado em sites, automação e sistemas comerciais.
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 font-sans font-semibold">O que faz</dt>
                <dd className="mt-2 text-[13.5px] text-foreground/90 font-sans leading-relaxed">
                  Projeta presença digital e desenvolve software comercial sob medida — entregue, publicado e operado.
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 font-sans font-semibold">Como trabalha</dt>
                <dd className="mt-2 text-[13.5px] text-foreground/90 font-sans leading-relaxed">
                  Equipe enxuta, atendimento direto e demonstração funcional antes de qualquer proposta.
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
    { icon: Globe, label: "Websites profissionais", meta: "Landing pages e institucionais" },
    { icon: Bot, label: "Automação inteligente", meta: "WhatsApp · Formulários · IA" },
    { icon: Users, label: "CRM comercial", meta: "Pipeline e oportunidades" },
    { icon: Calendar, label: "Agendamento digital", meta: "Reservas e confirmações" },
    { icon: Zap, label: "Integrações", meta: "APIs, webhooks e canais" },
    { icon: Sparkles, label: "IA aplicada", meta: "Assistentes treinados no negócio" },
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
              Domínios que a Imperius desenvolve internamente.
            </h2>
            <p className="mt-4 text-muted-foreground text-[14.5px] sm:text-[15.5px] leading-relaxed font-sans max-w-xl">
              Cada frente abaixo é parte do que entregamos em projeto e demonstração —
              construído pela própria equipe, sem revenda e sem dependência de terceiros.
            </p>
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80 font-sans font-medium inline-flex items-center gap-2 lg:justify-end">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Engenharia própria
          </div>
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-6 border-y border-border/40 divide-x divide-border/40">
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

function SobreImperius() {
  const pillars = [
    {
      icon: LayoutTemplate,
      title: "Soluções sob medida",
      desc: "Cada site, sistema ou fluxo é desenhado para o contexto real do negócio — sem template, sem revenda.",
    },
    {
      icon: Bot,
      title: "Automação inteligente",
      desc: "IA aplicada a WhatsApp, formulários e CRM para qualificar contatos e responder em segundos.",
    },
    {
      icon: ClipboardList,
      title: "Processos organizados",
      desc: "Pipeline, agenda e indicadores consolidados em uma única operação comercial.",
    },
    {
      icon: Rocket,
      title: "Implementação rápida",
      desc: "Demonstração funcional em poucos dias, publicação em domínio próprio e operação acompanhada.",
    },
  ];
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative py-24 sm:py-28 border-y border-border/30 bg-[oklch(0.07_0.004_240)]/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-10 lg:gap-16">
          <div>
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
              <span className="h-px w-8 bg-primary/70" />
              Sobre a Imperius
            </div>
            <h2
              id="sobre-title"
              className="font-display font-semibold text-[1.7rem] sm:text-[2.1rem] lg:text-[2.35rem] leading-[1.08] tracking-[-0.025em] text-foreground"
            >
              Websites, automação, CRM e IA para negócios que precisam operar com método.
            </h2>
            <p className="mt-5 text-muted-foreground text-[14.5px] sm:text-[15.5px] leading-relaxed font-sans">
              Estúdio digital especializado em sistemas comerciais para empresas que dependem do digital para vender.
              Estruturamos rotinas manuais em operações comerciais mensuráveis, organizadas e prontas para escalar.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-y-8 gap-x-10 sm:border-l sm:border-border/40 sm:pl-10">
            {pillars.map((p, i) => (
              <li key={p.title} className="min-w-0">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="h-9 w-9 rounded-md border border-primary/25 bg-primary/10 grid place-items-center shrink-0">
                    <p.icon className="h-[18px] w-[18px] text-primary" />
                  </div>
                  <span className="font-heading text-[10.5px] uppercase tracking-[0.24em] text-muted-foreground/70 font-semibold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-[15.5px] sm:text-[16px] tracking-[-0.01em] text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] text-muted-foreground leading-relaxed font-sans">
                  {p.desc}
                </p>
              </li>
            ))}
          </ul>
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
import bellaCover from "@/assets/studio-bella-hero.jpg.asset.json";
import primeCover from "@/assets/prime-hero.jpg.asset.json";
import imperialCover from "@/assets/imperial-hero.jpg.asset.json";

const IMPERIUS_KINDS: ReadonlySet<DemoKind> = new Set(["Atendimento", "Comercial", "Operação"]);

function Demonstracoes() {
  const cards: DemoCard[] = [
    { icon: Bot, title: "Imperius Automation", desc: "WhatsApp Business com IA que qualifica e encaminha leads em tempo real.", status: "Ativo", kind: "Atendimento", to: "/automation", preview: "automation" },
    { icon: Users, title: "Imperius CRM", desc: "Pipeline comercial com etapas, oportunidades e indicadores do time.", status: "Ativo", kind: "Comercial", to: "/crm", preview: "crm" },
    { icon: Calendar, title: "Imperius Scheduling", desc: "Agenda, confirmações e reservas integradas ao atendimento.", status: "Ativo", kind: "Operação", to: "/scheduling", preview: "scheduling" },
    { icon: Scissors, title: "Black Crown Barbershop", desc: "Barbearia premium com agendamento e identidade visual cinematográfica. Abra e navegue como um cliente real.", status: "Ativo", kind: "Projeto externo", href: BLACK_CROWN_URL, external: true, cover: blackCrownCover.url, domain: "blackcrown-by-imperius.lovable.app" },
    { icon: Stethoscope, title: "Clínica Vitalis", desc: "Site clínico com agendamento, especialidades e tom de confiança — pronto para captar pacientes.", status: "Ativo", kind: "Demonstração de nicho", to: "/vitalis", cover: vitalisCover.url, domain: "vitalis.imperiusdigital.com.br" },
    { icon: Sparkles, title: "Studio Bella Estética", desc: "Estética de alto padrão com vitrine de procedimentos e reserva direta. Veja o fluxo completo.", status: "Ativo", kind: "Demonstração de nicho", to: "/studio-bella", cover: bellaCover.url, domain: "studiobella.imperiusdigital.com.br" },
    { icon: Building2, title: "Prime Imóveis", desc: "Portal imobiliário com busca, ficha de imóvel e captação de leads qualificados em segundos.", status: "Ativo", kind: "Demonstração de nicho", to: "/prime-imoveis", cover: primeCover.url, domain: "primeimoveis.imperiusdigital.com.br" },
    { icon: UtensilsCrossed, title: "Restaurante Imperial", desc: "Reservas, cardápio e identidade gastronômica premium — explore como um cliente reservaria hoje.", status: "Ativo", kind: "Demonstração de nicho", to: "/restaurante-imperial", cover: imperialCover.url, domain: "imperial.imperiusdigital.com.br" },
  ];


  const productCards = cards.filter((c) => IMPERIUS_KINDS.has(c.kind));
  const demoCards = cards.filter((c) => !IMPERIUS_KINDS.has(c.kind));

  return (
    <section id="vitrine" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[460px] rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, oklch(0.55 0.22 250 / 0.18), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 space-y-20 sm:space-y-24">
        {/* Group 1 — Produtos Imperius */}
        <div>
          <div className="mb-10 sm:mb-12 grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 lg:items-end">
            <div className="max-w-2xl">
              <div className="text-[10.5px] uppercase tracking-[0.32em] text-primary/90 font-semibold mb-5 font-sans inline-flex items-center gap-2.5">
                <span className="h-px w-8 bg-primary/70" />
                Produtos Imperius · {productCards.length.toString().padStart(2, "0")}
              </div>
              <h2 className="font-display font-semibold text-[1.85rem] sm:text-[2.4rem] lg:text-[2.75rem] leading-[1.06] tracking-[-0.028em] text-foreground">
                Software proprietário que opera o seu comercial.
              </h2>
              <p className="mt-4 text-muted-foreground text-[14.5px] sm:text-[16px] leading-relaxed font-sans max-w-xl">
                Automation, CRM e Scheduling — três produtos integrados que respondem,
                organizam e agendam, do primeiro contato ao fechamento.
              </p>
            </div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80 font-sans font-medium inline-flex items-center gap-2 lg:justify-end">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Plataforma integrada
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {productCards.map((c) => (
              <DemoCardItem key={c.title} card={c} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4" aria-hidden>
          <span className="h-px flex-1 bg-border/50" />
          <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70 font-sans font-medium">
            Sites navegáveis por nicho
          </span>
          <span className="h-px flex-1 bg-border/50" />
        </div>

        {/* Group 2 — Demonstrações */}
        <div>
          <div className="mb-10 sm:mb-12 grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 lg:items-end">
            <div className="max-w-2xl">
              <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
                <span className="h-px w-8 bg-muted-foreground/60" />
                Vitrine ao vivo · {demoCards.length.toString().padStart(2, "0")} verticais
              </div>
              <h2 className="font-display font-semibold text-[1.85rem] sm:text-[2.4rem] lg:text-[2.75rem] leading-[1.06] tracking-[-0.028em] text-foreground">
                Sites reais que você pode{" "}
                <span className="text-neon">abrir e navegar agora.</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-[14.5px] sm:text-[16px] leading-relaxed font-sans max-w-xl">
                Não são telas estáticas. Cada card abre um site funcional, em domínio próprio —
                clique, role, simule um agendamento e veja o acabamento como o seu cliente final veria.
              </p>
            </div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80 font-sans font-medium inline-flex items-center gap-2 lg:justify-end">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Tudo ao vivo
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {demoCards.map((c) => (
              <DemoCardItem key={c.title} card={c} />
            ))}
          </div>
        </div>
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
    return (
      <div className="absolute inset-0 grid grid-cols-[34%_1fr] bg-[oklch(0.11_0.006_245)]">
        {/* Conversation list */}
        <div className="border-r border-border/40 bg-[oklch(0.09_0.005_245)] flex flex-col">
          <div className="px-3 py-2.5 border-b border-border/40 flex items-center gap-1.5">
            <MessageCircle className="h-3 w-3 text-emerald-400/80" />
            <span className="text-[9px] font-semibold font-sans text-foreground/90">WhatsApp</span>
            <span className="ml-auto text-[8px] font-sans text-emerald-400/80">12</span>
          </div>
          {[
            { n: "Mariana R.", m: "Quero saber sobre…", t: "agora", a: true },
            { n: "João S.", m: "Bom dia, é poss…", t: "09:42", a: false },
            { n: "Ana C.", m: "Obrigada!", t: "09:18", a: false },
            { n: "Pedro M.", m: "Vou pensar", t: "ontem", a: false },
          ].map((c) => (
            <div key={c.n} className={`px-3 py-2 border-b border-border/20 ${c.a ? "bg-primary/10" : ""}`}>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[9.5px] font-semibold font-sans text-foreground truncate">{c.n}</span>
                <span className="text-[7.5px] font-sans text-muted-foreground/70 shrink-0">{c.t}</span>
              </div>
              <div className="text-[8.5px] font-sans text-muted-foreground/80 truncate mt-0.5">{c.m}</div>
            </div>
          ))}
        </div>
        {/* Conversation */}
        <div className="flex flex-col bg-[oklch(0.08_0.004_245)]">
          <div className="px-3 py-2 border-b border-border/40 flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-primary/20 grid place-items-center text-[8px] font-bold text-primary">MR</div>
            <div className="min-w-0">
              <div className="text-[9.5px] font-semibold font-sans text-foreground truncate">Mariana Ribeiro</div>
              <div className="text-[7.5px] font-sans text-muted-foreground/70">+55 15 99812-4471</div>
            </div>
            <span className="ml-auto text-[7.5px] font-sans font-semibold uppercase tracking-wider text-primary border border-primary/40 rounded-full px-1.5 py-0.5">Lead quente</span>
          </div>
          <div className="flex-1 p-2.5 space-y-1.5 overflow-hidden">
            <div className="max-w-[78%] rounded-md rounded-tl-sm bg-[#1f2c33] px-2 py-1 text-[8.5px] text-foreground/90 font-sans">
              Olá! Quero saber sobre o apartamento da Vila Mariana.
            </div>
            <div className="ml-auto max-w-[80%] rounded-md rounded-tr-sm bg-[#005c4b]/85 px-2 py-1 text-[8.5px] text-white/95 font-sans">
              Claro, Mariana! Para qual faixa de orçamento?
              <span className="ml-1 text-[7px] font-semibold uppercase tracking-wider text-emerald-300/90">IA</span>
            </div>
            <div className="max-w-[55%] rounded-md rounded-tl-sm bg-[#1f2c33] px-2 py-1 text-[8.5px] text-foreground/90 font-sans">
              Até R$ 850 mil.
            </div>
            <div className="ml-auto max-w-[82%] rounded-md rounded-tr-sm bg-[#005c4b]/85 px-2 py-1 text-[8.5px] text-white/95 font-sans">
              Perfeito. Encaminhei para o consultor Lucas. Ele responde em instantes.
              <span className="ml-1 text-[7px] font-semibold uppercase tracking-wider text-emerald-300/90">IA</span>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-primary/15 border border-primary/30 px-1.5 py-0.5 text-[7.5px] font-semibold font-sans text-primary uppercase tracking-wider">
              <span className="h-1 w-1 rounded-full bg-primary animate-pulse-glow" />
              Encaminhado · CRM
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "crm") {
    const cols = [
      { t: "Novo lead", n: 14, cards: [{ n: "Mariana R.", c: "Imobiliária Vila", v: "R$ 12.500", tag: "Quente", hot: true }, { n: "João S.", c: "Petfield", v: "R$ 8.300", tag: "Morno", hot: false }] },
      { t: "Em contato", n: 9, cards: [{ n: "Ana C.", c: "Studio Belle", v: "R$ 18.900", tag: "Quente", hot: true }, { n: "Pedro M.", c: "Lumière", v: "R$ 6.200", tag: "Morno", hot: false }] },
      { t: "Proposta", n: 5, cards: [{ n: "Letícia V.", c: "Vitalis", v: "R$ 34.000", tag: "Quente", hot: true }] },
      { t: "Fechado", n: 12, cards: [{ n: "Rafael T.", c: "Imperial", v: "R$ 22.800", tag: "Ganho", hot: true }] },
    ];
    return (
      <div className="absolute inset-0 bg-[oklch(0.09_0.005_245)] flex flex-col">
        {/* KPI strip */}
        <div className="grid grid-cols-4 border-b border-border/40 divide-x divide-border/30">
          {[
            { l: "Pipeline", v: "R$ 380K" },
            { l: "Oport.", v: "142" },
            { l: "Conv.", v: "28%" },
            { l: "Hoje", v: "+12" },
          ].map((k) => (
            <div key={k.l} className="px-2 py-1.5">
              <div className="text-[7.5px] font-sans uppercase tracking-wider text-muted-foreground/70">{k.l}</div>
              <div className="text-[11px] font-heading font-semibold text-foreground tabular-nums">{k.v}</div>
            </div>
          ))}
        </div>
        {/* Kanban */}
        <div className="flex-1 grid grid-cols-4 gap-1.5 p-2 overflow-hidden">
          {cols.map((col) => (
            <div key={col.t} className="flex flex-col min-w-0">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[8px] font-semibold font-sans uppercase tracking-wider text-foreground/85 truncate">{col.t}</span>
                <span className="text-[7.5px] font-sans text-muted-foreground/70 tabular-nums">{col.n}</span>
              </div>
              <div className="space-y-1.5">
                {col.cards.map((c, i) => (
                  <div key={i} className="rounded border border-border/50 bg-[oklch(0.11_0.006_245)] p-1.5">
                    <div className="flex items-center gap-1 mb-0.5">
                      <div className="h-3 w-3 rounded-full bg-primary/30 grid place-items-center text-[6px] font-bold text-primary shrink-0">
                        {c.n.split(" ").map((x) => x[0]).join("").slice(0,2)}
                      </div>
                      <span className="text-[8px] font-semibold font-sans text-foreground truncate">{c.n}</span>
                    </div>
                    <div className="text-[7px] font-sans text-muted-foreground/80 truncate">{c.c}</div>
                    <div className="mt-1 flex items-center justify-between gap-1">
                      <span className="text-[8px] font-semibold font-sans text-foreground/90 tabular-nums">{c.v}</span>
                      <span className={`text-[6.5px] font-semibold font-sans uppercase tracking-wider px-1 py-px rounded ${c.hot ? "bg-primary/20 text-primary" : "bg-muted/40 text-muted-foreground/80"}`}>{c.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // scheduling
  const days = ["Seg 18", "Ter 19", "Qua 20", "Qui 21", "Sex 22"];
  const slots = [
    { d: 0, top: 8, h: 16, label: "09:00 · Mariana R.", tone: "primary" as const },
    { d: 1, top: 28, h: 18, label: "10:30 · João S.", tone: "muted" as const },
    { d: 2, top: 50, h: 20, label: "14:00 · Ana C.", tone: "primary" as const },
    { d: 3, top: 14, h: 16, label: "09:30 · Pedro M.", tone: "muted" as const },
    { d: 3, top: 56, h: 14, label: "15:00 · Lucas T.", tone: "primary" as const },
    { d: 4, top: 38, h: 18, label: "13:00 · Letícia V.", tone: "primary" as const },
  ];
  return (
    <div className="absolute inset-0 bg-[oklch(0.09_0.005_245)] flex flex-col">
      <div className="flex items-center justify-between border-b border-border/40 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3 w-3 text-primary" />
          <span className="text-[9.5px] font-semibold font-sans text-foreground">Novembro · Semana 47</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[7.5px] font-sans uppercase tracking-wider text-muted-foreground/70">Semana</span>
          <span className="text-[7.5px] font-semibold font-sans uppercase tracking-wider text-primary border border-primary/40 rounded px-1 py-px">Confirmar</span>
        </div>
      </div>
      <div className="grid grid-cols-[28px_repeat(5,1fr)] flex-1 overflow-hidden">
        <div className="flex flex-col text-[7px] font-sans text-muted-foreground/60 pr-1 pt-1 border-r border-border/30">
          {["09", "11", "13", "15", "17"].map((h) => (
            <div key={h} className="flex-1 flex items-start justify-end pr-0.5">{h}h</div>
          ))}
        </div>
        {days.map((d, idx) => (
          <div key={d} className="relative border-r border-border/30 last:border-r-0">
            <div className="text-[8px] font-semibold font-sans text-foreground/85 px-1.5 py-1 border-b border-border/30 truncate">
              {d}
            </div>
            <div className="absolute inset-0 top-[18px]">
              {slots.filter((s) => s.d === idx).map((s, i) => (
                <div
                  key={i}
                  className={`absolute left-1 right-1 rounded-sm px-1 py-0.5 text-[7px] font-semibold font-sans truncate ${
                    s.tone === "primary"
                      ? "bg-primary/20 border border-primary/50 text-primary"
                      : "bg-[oklch(0.18_0.01_245)] border border-border/50 text-foreground/80"
                  }`}
                  style={{ top: `${s.top}%`, height: `${s.h}%` }}
                >
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-border/40 px-3 py-1.5 flex items-center justify-between">
        <span className="text-[8px] font-sans text-muted-foreground/80">
          <span className="font-semibold text-foreground/90 tabular-nums">6</span> agendados ·{" "}
          <span className="font-semibold text-emerald-400/90">4 confirmados</span>
        </span>
        <span className="text-[7.5px] font-sans uppercase tracking-wider text-muted-foreground/70">Equipe · 3</span>
      </div>
    </div>
  );
}

function DemoCardItem({ card }: { card: DemoCard }) {
  const isActive = card.status === "Ativo";
  const inner = (
    <>
      {(card.cover || card.preview) && (
        <div className="relative overflow-hidden bg-[oklch(0.09_0.005_240)] border-b border-border/50">
          {card.preview ? (
            <div className="relative aspect-[16/10] bg-card">
              <ProductPreview kind={card.preview} />
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

  const baseCls = "card-editorial rounded-xl overflow-hidden h-full flex flex-col";
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
              <span className="font-heading text-[13px] sm:text-[14px] text-primary tracking-[0.22em] pt-2 font-semibold">
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
      a: "Não. Construímos a demonstração do zero, mesmo que a sua empresa ainda não tenha presença digital estruturada.",
    },
    {
      q: "Quanto tempo leva para entregar?",
      a: "A demonstração personalizada fica pronta em poucos dias úteis. O projeto completo é dimensionado em conjunto, conforme escopo e integrações.",
    },
    {
      q: "A demonstração tem custo?",
      a: "Não. A demonstração inicial é cortesia da Imperius, sem compromisso comercial.",
    },
    {
      q: "Com quem eu falo?",
      a: "Diretamente com a equipe que desenvolve o projeto. Sem atendimento terceirizado, sem chatbot intermediário — o mesmo time conduz da conversa inicial à publicação.",
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
              Solicitar demonstração <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a
            href={PROPOSAL_MAILTO}
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors font-sans inline-flex items-center gap-2"
            onClick={() => track("final_cta_click", { destination: "email" })}
          >
            <Mail className="h-4 w-4" /> Solicitar análise do meu negócio
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
                <div className="font-heading font-bold tracking-[0.2em] text-sm">IMPERIUS</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-sans font-medium">Websites · Automação · IA</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Estúdio digital especializado em websites, automação e sistemas comerciais sob medida para empresas que operam vendas pelo digital.
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
            <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 font-sans" onClick={() => track("whatsapp_click", { location: "footer" })}>
              <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp com a equipe
            </a>
            <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 font-sans" onClick={() => track("whatsapp_click", { location: "footer" })}>
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
            <p className="text-sm text-muted-foreground mb-4 font-sans">Solicite uma demonstração construída para a sua empresa.</p>
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
