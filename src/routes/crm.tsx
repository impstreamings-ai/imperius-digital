import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Send,
  Cpu,
  Users,
  Database,
  Bot,
  LayoutDashboard,
  MessageCircle,
  UserCheck,
  BellRing,
  TrendingUp,
  Target,
  Scissors,
  Stethoscope,
  Building2,
  Store,
  Briefcase,
  Phone,
  Activity,
  Zap,
  ShieldCheck,
  Instagram,
  CircleDollarSign,
  Flame,
} from "lucide-react";

import { trackEvent } from "@/lib/analytics";

const track = (name: string, params: Record<string, unknown> = {}) =>
  trackEvent(name, params);

const WA_MESSAGE =
  "Olá! Quero uma demonstração personalizada do Imperius CRM para a minha empresa.";
const WA = `https://wa.me/5515981023792?text=${encodeURIComponent(WA_MESSAGE)}`;

export const Route = createFileRoute("/crm")({
  head: () => ({
    meta: [
      { title: "Imperius CRM™ | CRM Comercial Inteligente by Imperius Digital" },
      {
        name: "description",
        content:
          "Organize contatos, acompanhe oportunidades e automatize follow-ups com IA. Imperius CRM™ — CRM comercial inteligente para pequenas e médias empresas.",
      },
      { property: "og:title", content: "Imperius CRM™ | CRM Comercial Inteligente" },
      {
        property: "og:description",
        content:
          "Pipeline, IA, WhatsApp e Dashboard conectados. Veja o Imperius CRM™ em operação.",
      },
      { property: "og:url", content: "https://imperius-digital.lovable.app/crm" },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://imperius-digital.lovable.app/crm" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: CrmLanding,
});

function CrmLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <HowItWorks />
      <ProductDemo />
      <Benefits />
      <ForWho />
      <Stack />
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
          <div
            className="h-9 w-9 rounded-lg flex items-center justify-center ring-1 ring-primary/40 shrink-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.35 0.2 250 / 0.9), oklch(0.18 0.05 245 / 0.6))",
            }}
          >
            <Users className="h-4.5 w-4.5 text-primary" />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="font-display font-bold tracking-[0.18em] text-[12px] truncate">
              IMPERIUS CRM<span className="text-primary">™</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground hidden sm:block">
              by Imperius Digital
            </span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-medium">
          <a href="#how" className="hover:text-foreground transition-colors">Como funciona</a>
          <a href="#demo" className="hover:text-foreground transition-colors">Demonstração</a>
          <a href="#benefits" className="hover:text-foreground transition-colors">Benefícios</a>
          <a href="#for" className="hover:text-foreground transition-colors">Para quem é</a>
        </nav>
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="shrink-0"
          onClick={() => track("whatsapp_click", { location: "nav_crm" })}
        >
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_oklch(0.72_0.22_250/0.7)]"
          >
            <span className="sm:hidden">Demonstração</span>
            <span className="hidden sm:inline">Falar com especialista</span>
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
      className="relative lg:min-h-screen flex items-center pt-28 pb-16 sm:pb-20 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl animate-pulse-glow pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.16 215 / 0.32), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center w-full">
        <div>
          <div
            className="inline-flex items-center gap-2.5 pl-1.5 pr-3.5 py-1.5 rounded-full border backdrop-blur mb-7 font-sans"
            style={{ borderColor: "oklch(0.78 0.16 215 / 0.4)", background: "oklch(0.78 0.16 215 / 0.10)" }}
          >
            <span
              className="grid h-6 w-6 place-items-center rounded-full"
              style={{ background: "oklch(0.78 0.16 215 / 0.22)", boxShadow: "0 0 18px -2px oklch(0.78 0.16 215 / 0.65)", outline: "1px solid oklch(0.78 0.16 215 / 0.5)" }}
            >
              <TrendingUp className="h-3.5 w-3.5" style={{ color: "oklch(0.82 0.14 210)" }} />
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-foreground font-semibold">
              Imperius CRM<span style={{ color: "oklch(0.82 0.14 210)" }}>™</span>
            </span>
            <span className="hidden sm:block h-3 w-px bg-border/80" />
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Pipeline & Vendas</span>
          </div>
          <h1 className="font-display text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-tight">
            <span className="block text-gradient">Nunca mais perca</span>
            <span className="block text-neon">um lead.</span>
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
            Organize contatos, acompanhe oportunidades e transforme interesse em
            vendas utilizando um CRM inteligente conectado à sua operação.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center flex-wrap gap-3 sm:gap-5">
            <a
              href="#demo"
              className="w-full sm:w-auto"
              onClick={() =>
                track("crm_cta_click", { location: "hero", destination: "demo" })
              }
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide glow-ring h-13 px-8 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_oklch(0.72_0.22_250/0.8)]"
              >
                VER DEMONSTRAÇÃO <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-primary transition-colors font-sans inline-flex items-center gap-1.5"
              onClick={() => track("whatsapp_click", { location: "hero_crm" })}
            >
              ou fale com um especialista
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-[13px] text-muted-foreground/80 max-w-md leading-relaxed font-sans">
            <li className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> Pipeline visual
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> IA de qualificação
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> Integrado ao WhatsApp
            </li>
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      <div
        className="absolute -inset-6 blur-3xl opacity-70 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.6 0.25 250 / 0.35), transparent 70%)",
        }}
      />
      <div className="relative card-premium rounded-2xl p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">
              Live · Pipeline em operação
            </span>
          </div>
          <Activity className="h-4 w-4 text-primary" />
        </div>

        {/* Mini pipeline */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { col: "Novos", count: 4, sample: "Cliente 01", tag: "Quente" },
            { col: "Contato", count: 3, sample: "Cliente 02", tag: "Morno" },
            { col: "Proposta", count: 2, sample: "Cliente 03", tag: "Quente" },
          ].map((c) => (
            <div
              key={c.col}
              className="rounded-xl border border-border/60 bg-card/50 p-2.5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  {c.col}
                </span>
                <span className="text-[9px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                  {c.count}
                </span>
              </div>
              <div className="rounded-md border border-border/60 bg-background/60 p-2">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="h-5 w-5 rounded-full bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-[9px] font-semibold text-primary">
                    {c.sample[0]}
                  </div>
                  <span className="text-[10px] font-medium truncate">{c.sample}</span>
                </div>
                <span
                  className={`text-[8px] uppercase tracking-[0.18em] px-1.5 py-0.5 rounded-full border ${
                    c.tag === "Quente"
                      ? "border-primary/50 text-primary bg-primary/10"
                      : "border-border/60 text-muted-foreground"
                  }`}
                >
                  {c.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lead notification */}
        <div className="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-3 flex items-start gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center shrink-0">
            <BellRing className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold">Novo lead capturado</span>
              <span className="text-[9px] text-muted-foreground">agora</span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
              <span className="text-foreground/80 font-medium">Cliente 05</span> ·
              WhatsApp · Interesse: <span className="text-primary">Plano Premium</span>
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <StatusChip icon={UserCheck} label="Lead qualificado" />
          <StatusChip icon={Database} label="Registrado no CRM" />
          <StatusChip icon={BellRing} label="Equipe notificada" />
        </div>
      </div>
    </div>
  );
}

function StatusChip({
  icon: Icon,
  label,
}: {
  icon: typeof UserCheck;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/50 px-2 py-2 flex flex-col items-center gap-1">
      <Icon className="h-3.5 w-3.5 text-primary" />
      <span className="text-[10px] text-muted-foreground leading-tight">{label}</span>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { i: MessageCircle, t: "Lead entra", d: "WhatsApp, Instagram, formulário ou site." },
    { i: Database, t: "CRM registra", d: "Tudo centralizado automaticamente." },
    { i: Bot, t: "IA qualifica", d: "Prioridade e interesse identificados." },
    { i: UserCheck, t: "Equipe acompanha", d: "Follow-up organizado e no tempo certo." },
    { i: TrendingUp, t: "Venda acontece", d: "Histórico completo da negociação." },
  ];
  return (
    <section id="how" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">
            Como funciona
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            Do primeiro contato ao fechamento.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
            Cinco etapas conectadas que transformam interesse em receita.
          </p>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          <div
            className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.72 0.22 250 / 0.5), transparent)",
            }}
          />
          {steps.map((s, idx) => (
            <div
              key={s.t}
              className="relative card-premium hover-lift rounded-2xl p-6 transition-all duration-300"
            >
              <div className="absolute -top-3 -right-3 h-9 w-9 rounded-full ring-1 ring-primary/40 bg-background flex items-center justify-center font-display font-bold text-[11px] text-primary">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center ring-1 ring-primary/40 mb-5"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.7), oklch(0.12 0.02 245 / 0.7))",
                }}
              >
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

// ---------------- DEMO ----------------

type PipelineCard = { name: string; tag: "Quente" | "Morno" | "Frio"; meta: string };
const PIPELINE: { col: string; cards: PipelineCard[] }[] = [
  {
    col: "Novos Leads",
    cards: [
      { name: "Cliente 01", tag: "Quente", meta: "WhatsApp · há 2 min" },
      { name: "Cliente 02", tag: "Quente", meta: "Instagram · há 7 min" },
      { name: "Cliente 03", tag: "Morno", meta: "Site · há 18 min" },
    ],
  },
  {
    col: "Contato",
    cards: [
      { name: "Cliente 04", tag: "Morno", meta: "Aguardando retorno" },
      { name: "Cliente 05", tag: "Quente", meta: "Reunião agendada" },
    ],
  },
  {
    col: "Proposta",
    cards: [
      { name: "Cliente 06", tag: "Quente", meta: "Orçamento enviado" },
      { name: "Cliente 07", tag: "Morno", meta: "Revisando proposta" },
    ],
  },
  {
    col: "Negociação",
    cards: [{ name: "Cliente 08", tag: "Quente", meta: "Ajustando condições" }],
  },
  {
    col: "Fechado",
    cards: [{ name: "Cliente 09", tag: "Quente", meta: "R$ 4.800 · hoje" }],
  },
];

function ProductDemo() {
  return (
    <section id="demo" className="py-24 sm:py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.55 0.25 250 / 0.4), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">
            Demonstração visual
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            Todos os seus contatos em um só lugar.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
            Quatro módulos sincronizados em tempo real pela sua operação comercial.
          </p>
        </div>

        {/* Pipeline (full width) */}
        <Pipeline />

        {/* Trio: Lead profile, IA, Dashboard */}
        <div className="mt-6 grid lg:grid-cols-3 gap-5 sm:gap-6">
          <LeadProfile />
          <IaCommercial />
          <Dashboard />
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          Módulos sincronizados em tempo real
        </div>
      </div>
    </section>
  );
}

function Pipeline() {
  return (
    <div className="card-premium rounded-2xl p-5 sm:p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-xl flex items-center justify-center ring-1 ring-primary/40"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.3 0.15 250 / 0.7), oklch(0.15 0.03 245 / 0.5))",
            }}
          >
            <LayoutDashboard className="h-4.5 w-4.5 text-primary" />
          </div>
          <div>
            <div className="font-heading font-semibold text-sm tracking-tight">Pipeline comercial</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Visão Kanban · 5 etapas
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
          Sincronizado
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {PIPELINE.map((col) => (
          <div
            key={col.col}
            className="rounded-xl border border-border/60 bg-card/40 p-3 min-h-[200px]"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                {col.col}
              </span>
              <span className="text-[10px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                {col.cards.length}
              </span>
            </div>
            <div className="space-y-2">
              {col.cards.map((c) => (
                <div
                  key={c.name}
                  className="rounded-lg border border-border/60 bg-background/60 p-2.5 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="h-6 w-6 rounded-full bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-[10px] font-semibold text-primary shrink-0">
                      {c.name[0]}
                    </div>
                    <span className="text-[11px] font-medium truncate">{c.name}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] text-muted-foreground truncate">{c.meta}</span>
                    <TagPill tag={c.tag} />
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

function TagPill({ tag }: { tag: "Quente" | "Morno" | "Frio" }) {
  const cls =
    tag === "Quente"
      ? "border-primary/50 text-primary bg-primary/10"
      : tag === "Morno"
        ? "border-border/60 text-muted-foreground bg-card/40"
        : "border-border/40 text-muted-foreground/70 bg-card/30";
  return (
    <span
      className={`text-[8px] uppercase tracking-[0.18em] px-1.5 py-0.5 rounded-full border shrink-0 ${cls}`}
    >
      {tag}
    </span>
  );
}

function ModuleShell({
  label,
  tag,
  icon: Icon,
  children,
}: {
  label: string;
  tag: string;
  icon: typeof Bot;
  children: React.ReactNode;
}) {
  return (
    <div className="card-premium hover-lift rounded-2xl p-5 sm:p-6 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-xl flex items-center justify-center ring-1 ring-primary/40"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.3 0.15 250 / 0.7), oklch(0.15 0.03 245 / 0.5))",
            }}
          >
            <Icon className="h-4.5 w-4.5 text-primary" />
          </div>
          <div>
            <div className="font-heading font-semibold text-sm tracking-tight">{label}</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{tag}</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
          Ativo
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

function LeadProfile() {
  return (
    <ModuleShell label="Lead Profile" tag="Ficha do contato" icon={Users}>
      <div className="flex items-center gap-3 pb-3 mb-3 border-b border-border/50">
        <div className="h-12 w-12 rounded-full bg-primary/15 ring-1 ring-primary/40 flex items-center justify-center text-base font-semibold text-primary">
          C
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold truncate">Cliente exemplo</div>
          <div className="text-[11px] text-muted-foreground truncate">Lead #2840 · há 2 min</div>
        </div>
      </div>
      <div className="space-y-2">
        <ProfileLine icon={Phone} label="Telefone" value="(XX) XXXXX-XXXX" />
        <ProfileLine icon={Instagram} label="Origem" value="Instagram Ads" />
        <ProfileLine icon={Target} label="Interesse" value="Plano Premium" highlight />
        <ProfileLine icon={Flame} label="Status" value="Aguardando contato" />
        <ProfileLine icon={MessageCircle} label="Última interação" value="“Quero saber valores”" />
      </div>
    </ModuleShell>
  );
}

function ProfileLine({
  icon: Icon,
  label,
  value,
  highlight = false,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-card/40 px-3 py-2 text-[12px] gap-3">
      <span className="flex items-center gap-2 text-muted-foreground uppercase tracking-[0.16em] text-[10px] shrink-0">
        <Icon className="h-3 w-3" />
        {label}
      </span>
      <span
        className={`font-medium text-right truncate ${highlight ? "text-primary" : "text-foreground"}`}
      >
        {value}
      </span>
    </div>
  );
}

function IaCommercial() {
  return (
    <ModuleShell label="IA Comercial" tag="Qualificação" icon={Bot}>
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">
            Lead Score
          </span>
          <span className="font-display font-bold text-2xl text-primary">87</span>
        </div>
        <div className="h-1.5 rounded-full bg-card/60 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: "87%",
              background:
                "linear-gradient(90deg, oklch(0.45 0.18 250), oklch(0.72 0.24 250))",
            }}
          />
        </div>
      </div>
      <div className="space-y-2">
        <IaLine label="Prob. fechamento" value="72%" highlight />
        <IaLine label="Próxima ação" value="Ligar em 30 min" />
        <IaLine label="Prioridade" value="Alta" highlight />
        <IaLine label="Melhor canal" value="WhatsApp" />
      </div>
    </ModuleShell>
  );
}

function IaLine({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-card/40 px-3 py-2 text-[12px]">
      <span className="text-muted-foreground uppercase tracking-[0.16em] text-[10px]">{label}</span>
      <span className={`font-medium ${highlight ? "text-primary" : "text-foreground"}`}>
        {value}
      </span>
    </div>
  );
}

function Dashboard() {
  const bars = [38, 52, 44, 70, 60, 82, 75, 92, 80, 96, 88, 100];
  return (
    <ModuleShell label="Dashboard" tag="Visão geral" icon={LayoutDashboard}>
      <div className="mb-2 text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground/70">
        Dados demonstrativos
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Kpi label="Leads do mês" value="184" delta="+23%" />
        <Kpi label="Conversão" value="32%" delta="+4 p.p." />
        <Kpi label="Negócios ativos" value="47" delta="+9" />
        <Kpi label="Receita estimada" value="R$ 84k" delta="+18%" />
      </div>
      <div className="mt-3 rounded-lg border border-border/60 bg-card/50 p-2.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Últimos 12 dias
          </span>
          <span className="text-[10px] text-primary font-semibold flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> +27%
          </span>
        </div>
        <div className="h-16 flex items-end gap-1">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background:
                  "linear-gradient(180deg, oklch(0.72 0.24 250), oklch(0.45 0.18 250 / 0.5))",
              }}
            />
          ))}
        </div>
      </div>
    </ModuleShell>
  );
}

function Kpi({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-lg border border-border/60 bg-card/50 px-2.5 py-2.5">
      <div className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground leading-tight">
        {label}
      </div>
      <div className="font-display font-bold text-lg text-foreground mt-1">{value}</div>
      <div className="text-[10px] text-primary font-semibold mt-0.5">{delta}</div>
    </div>
  );
}

function Benefits() {
  const items = [
    { i: BellRing, t: "Menos esquecimentos", d: "Follow-ups automáticos no momento certo." },
    { i: Database, t: "Mais organização", d: "Contatos, conversas e histórico em um só lugar." },
    { i: TrendingUp, t: "Mais conversões", d: "IA prioriza os leads mais quentes primeiro." },
    { i: Zap, t: "Equipe mais produtiva", d: "Menos planilhas. Mais negócios fechados." },
  ];
  return (
    <section id="benefits" className="py-24 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">
            Benefícios
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            O que muda na sua operação comercial.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((it) => (
            <div
              key={it.t}
              className="card-premium hover-lift rounded-2xl p-6 transition-all duration-300"
            >
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center mb-5 ring-1 ring-primary/40"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.7), oklch(0.12 0.02 245 / 0.7))",
                }}
              >
                <it.i className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2 tracking-tight">{it.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWho() {
  const items = [
    { i: Briefcase, t: "Prestadores de serviço" },
    { i: Stethoscope, t: "Clínicas" },
    { i: Scissors, t: "Barbearias" },
    { i: Building2, t: "Imobiliárias" },
    { i: ShieldCheck, t: "Escritórios" },
    { i: Store, t: "Pequenas empresas" },
  ];
  return (
    <section id="for" className="py-24 sm:py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">
            Para quem é
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            Feito para quem vende todos os dias.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {items.map((it) => (
            <div
              key={it.t}
              className="card-premium hover-lift rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center gap-3 transition-all duration-300"
            >
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center ring-1 ring-primary/40"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.7), oklch(0.12 0.02 245 / 0.7))",
                }}
              >
                <it.i className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-sm sm:text-base tracking-tight">
                {it.t}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const items = [
    { i: Database, t: "CRM" },
    { i: Bot, t: "IA" },
    { i: MessageCircle, t: "WhatsApp" },
    { i: Zap, t: "Automação" },
    { i: LayoutDashboard, t: "Dashboard" },
  ];
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-3 font-sans">
            Diferenciais
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gradient tracking-tight">
            Tudo conectado em uma plataforma.
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {items.map((it, idx) => (
            <div key={it.t} className="flex items-center gap-3 sm:gap-4">
              <div className="card-premium rounded-xl px-4 py-3 flex items-center gap-2.5">
                <it.i className="h-4 w-4 text-primary" />
                <span className="font-heading font-semibold text-sm tracking-tight">{it.t}</span>
              </div>
              {idx < items.length - 1 && (
                <span className="hidden sm:block h-px w-6 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <CircleDollarSign className="h-3.5 w-3.5 text-primary" />
          Do primeiro clique ao fechamento
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold mb-5 font-sans">
          Solicite uma demonstração
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-[1.1] tracking-tight">
          Veja o Imperius CRM<span className="text-primary">™</span> funcionando na sua empresa.
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
          Receba uma demonstração personalizada mostrando como seus leads podem
          ser organizados, qualificados e convertidos automaticamente.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
            onClick={() => track("whatsapp_click", { location: "final_cta_crm" })}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide glow-ring h-13 px-8 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_oklch(0.72_0.22_250/0.8)]"
            >
              SOLICITAR DEMONSTRAÇÃO PERSONALIZADA <Send className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        <p className="mt-5 text-xs text-muted-foreground/80">Resposta em horário comercial.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 mt-0">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-4 text-xs text-muted-foreground">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="font-display tracking-[0.18em] font-semibold">
              IMPERIUS CRM<span className="text-primary">™</span>
            </span>
          </div>
          <div className="text-center sm:text-right">
            © {new Date().getFullYear()} Imperius Soluções Digitais. Todos os direitos reservados.
          </div>
        </div>
        <div className="text-center sm:text-left text-[11px] text-muted-foreground/70 leading-relaxed">
          Produto demonstrativo da Imperius Digital. Dados, nomes e métricas exibidos são
          ilustrativos, criados apenas para apresentação da solução.
        </div>
      </div>
    </footer>
  );
}
