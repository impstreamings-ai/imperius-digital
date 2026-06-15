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
const PROPOSAL_EMAIL = "imperiusuniverse@gmail.com";
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
          <div className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80 font-sans">Demonstração visual</div>
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
          <div className="text-[9px] font-sans uppercase tracking-wider text-muted-foreground/70">Exemplo ilustrativo · últimos 7 dias</div>
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
          {(() => {
            const automation = productCards.find((c) => c.preview === "automation");
            const crm = productCards.find((c) => c.preview === "crm");
            const scheduling = productCards.find((c) => c.preview === "scheduling");
            return (
              <div className="grid gap-5 sm:gap-6 lg:grid-cols-5 lg:items-stretch">
                {automation && (
                  <div className="lg:col-span-3">
                    <ProductShowcaseCard card={automation} featured />
                  </div>
                )}
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:col-span-2">
                  {crm && <ProductShowcaseCard card={crm} />}
                  {scheduling && <ProductShowcaseCard card={scheduling} />}
                </div>
              </div>
            );
          })()}
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
      {/* HUD top chrome */}
      <div className="relative flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 border-b border-border/50 bg-gradient-to-r from-[oklch(0.1_0.005_245)] via-[oklch(0.115_0.006_245)] to-[oklch(0.1_0.005_245)] backdrop-blur-md">
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

      {/* KPI strip */}
      <div className="grid grid-cols-3 divide-x divide-border/30 border-b border-border/50 bg-[oklch(0.095_0.005_245)]">
        {theme.kpis.map((k) => (
          <div key={k.l} className="px-2.5 sm:px-3 py-2.5">
            <div className="text-[8.5px] font-sans uppercase tracking-[0.18em] text-muted-foreground/70 truncate">
              {k.l}
            </div>
            <div className={`mt-0.5 text-[13.5px] sm:text-[14.5px] font-heading font-semibold tabular-nums ${theme.textCls}`}>
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
