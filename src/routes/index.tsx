import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/imperius-logo-official.png.asset.json";
import blackCrownHeroCover from "@/assets/black-crown-cover.png.asset.json";


import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageCircle,
  Instagram,
  Phone,
  ExternalLink,
  ClipboardList,
  Rocket,
  LayoutTemplate,
  TrendingUp,
  Scissors,
  Users,
  Calendar,
  Mail,
  Activity,
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
          <a href="#vitrine" className="hover:text-foreground transition-colors">Demonstração</a>
          <a href="#processo" className="hover:text-foreground transition-colors">Como funciona</a>
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
      style={{
        background: "var(--gradient-hero)",
        paddingLeft: "max(0px, env(safe-area-inset-left))",
        paddingRight: "max(0px, env(safe-area-inset-right))",
      }}
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
                  className="w-full sm:w-auto border-border/70 bg-background/30 hover:bg-background/60 hover:border-primary/50 text-foreground/90 font-medium rounded-full h-auto min-h-12 py-2 px-5 sm:px-6 text-[12.5px] sm:text-[13.5px] whitespace-normal text-center leading-snug transition-all duration-300"
                >
                  <Mail className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span>Receber demonstração personalizada</span>
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
  // Ecossistema Operacional Imperius — institutional composition.
  // Five surfaces orbit the Imperius symbol in a symmetric pentagon:
  // WhatsApp (top), CRM (upper-right), Automação (lower-right),
  // Agenda (lower-left), Website (upper-left). Software house signal:
  // no dashboards, KPIs, charts or SaaS chrome — just the brand mark,
  // titanium-blue energy lines and operational module markers.
  const R = 34;
  const nodes = [
    { id: "wa",   label: "WhatsApp",  angle: 270 },
    { id: "crm",  label: "CRM",       angle: 342 },
    { id: "auto", label: "Automação", angle: 54  },
    { id: "ag",   label: "Agenda",    angle: 126 },
    { id: "web",  label: "Website",   angle: 198 },
  ].map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    return { ...n, x: 50 + R * Math.cos(rad), y: 50 + R * Math.sin(rad) };
  });
  const core = { x: 50, y: 50 };

  return (
    <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto lg:mr-0" aria-hidden>
      {/* Ambient cinematic glow */}
      <div
        className="absolute -inset-12 blur-3xl opacity-70 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 50%, oklch(0.72 0.22 250 / 0.22), transparent 70%)",
        }}
      />

      {/* Frame */}
      <div className="relative aspect-square rounded-[20px] overflow-hidden border border-border/50 bg-[oklch(0.07_0.004_240)] shadow-[0_60px_160px_-40px_oklch(0_0_0/0.9),0_0_0_1px_oklch(1_0_0/0.04)_inset]">
        {/* Holographic grid */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.72 0.22 250 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.22 250 / 0.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(70% 70% at 50% 50%, black 35%, transparent 100%)",
          }}
        />
        {/* Soft titanium sweep */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60 mix-blend-screen"
          style={{
            background:
              "conic-gradient(from 200deg at 50% 50%, transparent 0deg, oklch(0.72 0.22 250 / 0.10) 60deg, transparent 140deg, oklch(0.82 0.16 230 / 0.08) 240deg, transparent 320deg)",
          }}
        />

        {/* Orbits + energy lines */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <radialGradient id="heroCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.86 0.22 250)" stopOpacity="0.95" />
              <stop offset="55%" stopColor="oklch(0.72 0.22 250)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="oklch(0.72 0.22 250)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="heroEdge" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.78 0.2 250)" stopOpacity="0.05" />
              <stop offset="50%" stopColor="oklch(0.88 0.22 250)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="oklch(0.78 0.2 250)" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Faint concentric orbits */}
          {[14, 22, 30, 38, 44].map((r, i) => (
            <circle
              key={r}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke="oklch(0.78 0.2 250 / 0.18)"
              strokeWidth={i === 2 ? "0.35" : "0.18"}
              strokeDasharray={i % 2 === 0 ? "0.6 1.2" : undefined}
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {/* Pentagon perimeter linking surfaces */}
          <polygon
            points={nodes.map((n) => `${n.x},${n.y}`).join(" ")}
            fill="none"
            stroke="oklch(0.78 0.2 250 / 0.22)"
            strokeWidth="0.25"
            vectorEffect="non-scaling-stroke"
          />

          {/* Core halo */}
          <circle cx="50" cy="50" r="22" fill="url(#heroCore)" />

          {/* Energy lines core → node */}
          {nodes.map((n) => (
            <line
              key={n.id}
              x1={core.x}
              y1={core.y}
              x2={n.x}
              y2={n.y}
              stroke="url(#heroEdge)"
              strokeWidth="0.4"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {/* Node markers */}
          {nodes.map((n) => (
            <g key={`d-${n.id}`}>
              <circle cx={n.x} cy={n.y} r="3.4" fill="oklch(0.07 0.004 240)" />
              <circle
                cx={n.x}
                cy={n.y}
                r="3.4"
                fill="none"
                stroke="oklch(0.82 0.22 250 / 0.55)"
                strokeWidth="0.25"
                vectorEffect="non-scaling-stroke"
              />
              <circle cx={n.x} cy={n.y} r="1.3" fill="oklch(0.9 0.18 250)" />
            </g>
          ))}
        </svg>

        {/* Imperius symbol at the core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div
            className="absolute inset-0 -m-6 rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.78 0.22 250 / 0.55), transparent 70%)",
            }}
          />
          <img
            src={logoAsset.url}
            alt=""
            className="relative h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-[0_0_18px_oklch(0.78_0.22_250/0.55)]"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Node labels */}
        {nodes.map((n) => {
          const dx = n.x - 50;
          const dy = n.y - 50;
          const len = Math.hypot(dx, dy) || 1;
          const offset = 6.5;
          const lx = n.x + (dx / len) * offset;
          const ly = n.y + (dy / len) * offset;
          return (
            <div
              key={`l-${n.id}`}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${lx}%`, top: `${ly}%` }}
            >
              <span className="text-[9.5px] sm:text-[10px] font-sans uppercase tracking-[0.2em] text-foreground/80 whitespace-nowrap">
                {n.label}
              </span>
            </div>
          );
        })}

        {/* Core label — institutional terminology */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[62%] text-center pointer-events-none">
          <div className="text-[8.5px] sm:text-[9px] font-sans uppercase tracking-[0.34em] text-primary/85">
            Ecossistema
          </div>
          <div className="text-[8.5px] sm:text-[9px] font-sans uppercase tracking-[0.34em] text-foreground/70 mt-0.5">
            Operacional
          </div>
        </div>

        {/* Corner brackets — decorative, hidden on mobile to free strip space */}
        {[
          "top-3 left-3 border-l border-t",
          "top-3 right-3 border-r border-t",
          "bottom-3 left-3 border-l border-b",
          "bottom-3 right-3 border-r border-b",
        ].map((c, i) => (
          <span
            key={i}
            className={`hidden sm:block absolute h-3 w-3 border-primary/40 ${c}`}
          />
        ))}

        {/* Top meta strip */}
        <div className="absolute top-0 inset-x-0 flex items-center justify-between gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 border-b border-border/40 bg-gradient-to-b from-[oklch(0.065_0.004_240)]/90 to-transparent">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.18em] sm:tracking-[0.28em] text-foreground/70 truncate">
              <span className="sm:hidden">Ecossistema</span>
              <span className="hidden sm:inline">Ecossistema · Imperius</span>
            </span>
          </div>
          <span className="shrink-0 text-[9px] sm:text-[10px] font-sans tracking-[0.14em] sm:tracking-[0.22em] text-muted-foreground/55 uppercase">
            Rev · 2026
          </span>
        </div>

        {/* Bottom meta strip */}
        <div className="absolute bottom-0 inset-x-0 flex items-center justify-between gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 border-t border-border/40 bg-gradient-to-t from-[oklch(0.065_0.004_240)]/90 to-transparent">
          <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.18em] sm:tracking-[0.28em] text-muted-foreground/70 truncate">
            <span className="sm:hidden">Operação</span>
            <span className="hidden sm:inline">Operação comercial</span>
          </span>
          <span className="shrink-0 text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.14em] sm:tracking-[0.28em] text-primary/80">
            <span className="sm:hidden">Engenharia</span>
            <span className="hidden sm:inline">Engenharia aplicada</span>
          </span>
        </div>
      </div>
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
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-sans font-medium">Software house</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Software house brasileira especializada em operações comerciais, com produtos próprios em evolução para atendimento, pipeline e agenda.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4 font-sans">Navegação</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground font-sans">
              <li><a href="#vitrine" className="hover:text-foreground transition-colors">Demonstração</a></li>
              <li><a href="#processo" className="hover:text-foreground transition-colors">Como funciona</a></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Portfólio</Link></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
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
