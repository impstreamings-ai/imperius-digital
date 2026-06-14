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

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Ecossistema />
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
              Presença digital, automação e sistemas comerciais para empresas que precisam{" "}
              <span className="text-neon">parecer maiores</span>{" "}
              e vender melhor.
            </h1>
            <p className="mt-7 max-w-xl text-muted-foreground text-base sm:text-[17px] leading-relaxed font-sans">
              Construímos sites, fluxos com IA e operações comerciais sob medida —
              pensados para gerar oportunidades reais, não apenas impressões bonitas.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
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

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:ml-auto lg:mr-0" aria-hidden>
      {/* Frame */}
      <div className="relative aspect-square rounded-[28px] overflow-hidden border border-border/50 bg-[oklch(0.09_0.005_240)]/60 backdrop-blur-xl shadow-[0_40px_120px_-40px_oklch(0_0_0/0.8),0_0_0_1px_oklch(1_0_0/0.03)_inset]">
        {/* Ambient layers */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.2 250 / 0.4), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, oklch(0.5 0.18 245 / 0.3), transparent 70%)" }}
        />

        {/* SVG connections */}
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroLineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.72 0.22 250)" stopOpacity="0.05" />
              <stop offset="50%" stopColor="oklch(0.72 0.22 250)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="oklch(0.72 0.22 250)" stopOpacity="0.05" />
            </linearGradient>
            <radialGradient id="heroCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.72 0.22 250)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="oklch(0.72 0.22 250)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="120" fill="url(#heroCoreGlow)" />
          {/* concentric rings */}
          <circle cx="200" cy="200" r="78" fill="none" stroke="oklch(0.4 0.05 245 / 0.4)" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="oklch(0.35 0.04 245 / 0.3)" strokeWidth="0.8" strokeDasharray="2 6" />
          {/* connectors center → satellites */}
          <line x1="200" y1="200" x2="200" y2="62" stroke="url(#heroLineGrad)" strokeWidth="1" strokeDasharray="3 5" />
          <line x1="200" y1="200" x2="338" y2="260" stroke="url(#heroLineGrad)" strokeWidth="1" strokeDasharray="3 5" />
          <line x1="200" y1="200" x2="62" y2="260" stroke="url(#heroLineGrad)" strokeWidth="1" strokeDasharray="3 5" />
        </svg>

        {/* Core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-[124px] w-[124px] sm:h-[140px] sm:w-[140px] rounded-2xl border border-primary/40 bg-[oklch(0.12_0.01_245)]/85 backdrop-blur-xl flex flex-col items-center justify-center gap-1.5 shadow-[0_20px_50px_-20px_oklch(0.55_0.25_250/0.55),inset_0_1px_0_oklch(1_0_0/0.06)]">
            <img
              src={logoAsset.url}
              alt=""
              className="h-[40px] w-auto object-contain opacity-95"
              loading="eager"
              decoding="async"
            />
            <div className="text-[9px] uppercase tracking-[0.32em] text-muted-foreground/90 font-sans font-semibold">
              Imperius Core
            </div>
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-primary animate-pulse-glow shadow-[0_0_12px_oklch(0.72_0.22_250/0.9)]" />
          </div>
        </div>

        {/* Satellite: Automation (top) */}
        <SatelliteCard
          className="absolute top-[5%] left-1/2 -translate-x-1/2"
          icon={Bot}
          label="Automation"
          meta="IA · WhatsApp"
        />
        {/* Satellite: CRM (bottom-right) */}
        <SatelliteCard
          className="absolute bottom-[10%] right-[4%]"
          icon={Users}
          label="CRM"
          meta="Pipeline comercial"
        />
        {/* Satellite: Scheduling (bottom-left) */}
        <SatelliteCard
          className="absolute bottom-[10%] left-[4%]"
          icon={Calendar}
          label="Scheduling"
          meta="Agenda integrada"
        />

        {/* Floating event chips */}
        <div className="absolute top-[24%] left-[4%] hidden sm:flex items-center gap-2.5 rounded-full border border-border/60 bg-background/70 backdrop-blur-md px-3 py-1.5 shadow-[0_8px_24px_-12px_oklch(0_0_0/0.6)]">
          <MessageCircle className="h-3.5 w-3.5 text-primary" />
          <span className="text-[10.5px] font-sans text-foreground/85">Mensagem recebida</span>
          <span className="text-[9.5px] font-sans text-muted-foreground/70 tabular-nums">09:42</span>
        </div>
        <div className="absolute top-[42%] right-[3%] hidden sm:flex items-center gap-2.5 rounded-full border border-border/60 bg-background/70 backdrop-blur-md px-3 py-1.5 shadow-[0_8px_24px_-12px_oklch(0_0_0/0.6)]">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-[10.5px] font-sans text-foreground/85">Lead qualificado</span>
        </div>
      </div>

      {/* Flow strip */}
      <div className="mt-5 hidden sm:block">
        <ol className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] font-sans font-medium text-muted-foreground/80 overflow-hidden">
          {["WhatsApp", "Automation", "CRM", "Scheduling", "Resultado"].map((step, i, arr) => (
            <li key={step} className="flex items-center gap-2 min-w-0">
              <span className={`truncate ${i === arr.length - 1 ? "text-foreground/90" : ""}`}>{step}</span>
              {i < arr.length - 1 && (
                <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground/40" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function SatelliteCard({
  className,
  icon: Icon,
  label,
  meta,
}: {
  className?: string;
  icon: typeof Bot;
  label: string;
  meta: string;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-xl border border-border/60 bg-[oklch(0.13_0.008_245)]/85 backdrop-blur-xl px-3 py-2.5 shadow-[0_12px_30px_-16px_oklch(0_0_0/0.7),inset_0_1px_0_oklch(1_0_0/0.04)] ${className ?? ""}`}
    >
      <div className="h-8 w-8 rounded-lg grid place-items-center bg-[oklch(0.18_0.04_248)]/80 border border-primary/25">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="min-w-0 leading-tight">
        <div className="text-[11.5px] font-heading font-semibold text-foreground tracking-[-0.005em]">{label}</div>
        <div className="text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground/80 font-sans">{meta}</div>
      </div>
    </div>
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

import automationEcoCover from "@/assets/automation-thumb.jpg.asset.json";
import crmEcoCover from "@/assets/crm-thumb.jpg.asset.json";
import schedulingEcoCover from "@/assets/scheduling-thumb.jpg.asset.json";

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

        {/* Modules inventory */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-border/40">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/80 font-medium font-sans mb-2">
                Produtos proprietários
              </div>
              <h3 className="font-heading font-semibold text-[18px] sm:text-[20px] tracking-[-0.01em] text-foreground">
                Os três módulos que sustentam o fluxo.
              </h3>
            </div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70 font-sans font-medium">
              Cada um navegável
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { tag: "Atendimento", title: "Automation", desc: "IA + WhatsApp em tempo real.", cover: automationEcoCover.url, to: "/automation", icon: Bot },
              { tag: "Comercial", title: "CRM", desc: "Pipeline e indicadores comerciais.", cover: crmEcoCover.url, to: "/crm", icon: Users },
              { tag: "Operação", title: "Scheduling", desc: "Agenda integrada à operação.", cover: schedulingEcoCover.url, to: "/scheduling", icon: Calendar },
            ].map((m) => (
              <Link
                key={m.title}
                to={m.to}
                onClick={() => track("ecossistema_click", { module: m.title })}
                className="group relative rounded-xl overflow-hidden border border-border/50 bg-[oklch(0.1_0.005_245)] hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={m.cover}
                    alt={`Imperius ${m.title}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.004_240)] via-transparent to-transparent" />
                </div>
                <div className="px-4 py-3.5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[9.5px] uppercase tracking-[0.22em] font-sans font-medium text-muted-foreground/70">{m.tag}</div>
                    <div className="font-heading font-semibold text-[14.5px] tracking-[-0.01em] text-foreground truncate">Imperius {m.title}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary/80 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
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
type DemoKind = "Produto Imperius" | "Demonstração de nicho" | "Projeto externo";
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
    { icon: Bot, title: "Imperius Automation", desc: "IA + WhatsApp automatizado", status: "Ativo", kind: "Produto Imperius", to: "/automation", cover: automationCover.url },
    { icon: Users, title: "Imperius CRM", desc: "CRM comercial inteligente", status: "Ativo", kind: "Produto Imperius", to: "/crm", cover: crmCover.url },
    { icon: Calendar, title: "Imperius Scheduling", desc: "Sistema de agendamento inteligente", status: "Ativo", kind: "Produto Imperius", to: "/scheduling", cover: schedulingCover.url },
    { icon: Scissors, title: "Black Crown Barbershop", desc: "Website para barbearia premium", status: "Ativo", kind: "Projeto externo", href: BLACK_CROWN_URL, external: true, cover: blackCrownCover.url },
    { icon: Stethoscope, title: "Clínica Vitalis", desc: "Website e agendamento para clínica", status: "Ativo", kind: "Demonstração de nicho", to: "/vitalis", cover: vitalisCover.url },
    { icon: Sparkles, title: "Studio Bella Estética", desc: "Centro de estética premium em São Paulo", status: "Ativo", kind: "Demonstração de nicho", to: "/studio-bella", cover: bellaCover.url },
    { icon: Building2, title: "Prime Imóveis", desc: "Portal para imobiliária de alto padrão", status: "Ativo", kind: "Demonstração de nicho", to: "/prime-imoveis", cover: primeCover.url },
    { icon: UtensilsCrossed, title: "Restaurante Imperial", desc: "Reservas e cardápio para gastronomia premium", status: "Ativo", kind: "Demonstração de nicho", to: "/restaurante-imperial", cover: imperialCover.url },
  ];


  return (
    <section id="vitrine" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[460px] rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, oklch(0.55 0.22 250 / 0.18), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 sm:mb-16 grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 lg:items-end">
          <div className="max-w-2xl">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
              <span className="h-px w-8 bg-primary/70" />
              Vitrine · {cards.length.toString().padStart(2, "0")} projetos
            </div>
            <h2 className="font-display font-semibold text-[2rem] sm:text-[2.7rem] lg:text-[3.1rem] leading-[1.05] tracking-[-0.028em] text-foreground">
              Projetos navegáveis,{" "}
              <span className="text-neon">não mockups.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed font-sans max-w-xl">
              Cada card abaixo abre uma demonstração funcional — construída pela Imperius
              para um nicho real. Clique, explore o fluxo e veja o nível de acabamento
              antes mesmo do briefing.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11.5px] uppercase tracking-[0.22em] text-muted-foreground/80 font-sans font-medium lg:justify-end">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Produtos · 03
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
              Verticais · 05
            </span>
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
  const isProduct = kind === "Produto Imperius";
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

function DemoCardItem({ card }: { card: DemoCard }) {
  const isActive = card.status === "Ativo";
  const inner = (
    <>
      {card.cover && (
        <div className="relative overflow-hidden aspect-[16/10] bg-card">
          <img
            src={card.cover}
            alt={`Capa da demonstração ${card.title}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent pointer-events-none" />
          <div className="absolute top-3 right-3"><StatusBadge status={card.status} /></div>
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
            Ver demonstração {card.external ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />}
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
          <span className="text-neon">poderia apresentar</span>{" "}
          o seu negócio.
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
                <div className="font-heading font-bold tracking-[0.2em] text-sm">IMPERIUS</div>
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
