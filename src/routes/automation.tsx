import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  MessageCircle,
  Check,
  Zap,
  Database,
  BellRing,
  UserCheck,
  LayoutDashboard,
  Scissors,
  Stethoscope,
  Sparkles,
  Building2,
  Store,
  ShieldCheck,
  Cpu,
  Activity,
  Send,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const track = (name: string, params: Record<string, unknown> = {}) =>
  trackEvent(name, params);

const WA_MESSAGE =
  "Olá! Quero uma demonstração personalizada do Imperius Automation para minha empresa.";
const WA = `https://wa.me/5515981023792?text=${encodeURIComponent(WA_MESSAGE)}`;

export const Route = createFileRoute("/automation")({
  head: () => ({
    meta: [
      {
        title:
          "Imperius Automation™ | Atendimento inteligente com IA para pequenos negócios",
      },
      {
        name: "description",
        content:
          "Automatize respostas, capture leads e organize contatos automaticamente com Inteligência Artificial. Imperius Automation™ — atendimento inteligente para a sua empresa.",
      },
      {
        property: "og:title",
        content: "Imperius Automation™ | Atendimento inteligente com IA",
      },
      {
        property: "og:description",
        content:
          "Automatize respostas, capture leads e organize contatos com IA. Demonstração premium do Imperius Automation™.",
      },
      { property: "og:url", content: "https://imperius-digital.lovable.app/automation" },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://imperius-digital.lovable.app/automation" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: AutomationLanding,
});

function AutomationLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <HowItWorks />
      <ProductDemo />
      <Benefits />
      <ForWho />
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
            <Cpu className="h-4.5 w-4.5 text-primary" />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="font-display font-bold tracking-[0.18em] text-[12px] truncate">
              IMPERIUS AUTOMATION
              <span className="text-primary">™</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground hidden sm:block">
              by Imperius Digital
            </span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-medium">
          <a href="#how" className="hover:text-foreground transition-colors">
            Como funciona
          </a>
          <a href="#demo" className="hover:text-foreground transition-colors">
            Demonstração
          </a>
          <a
            href="#benefits"
            className="hover:text-foreground transition-colors"
          >
            Benefícios
          </a>
          <a href="#for" className="hover:text-foreground transition-colors">
            Para quem é
          </a>
        </nav>
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="shrink-0"
          onClick={() => track("whatsapp_click", { location: "nav_automation" })}
        >
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_oklch(0.7_0.032_232/0.45)]"
          >
            <span className="sm:hidden">Demonstração</span>
            <span className="hidden sm:inline">Ver demonstração</span>
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
            "radial-gradient(circle, oklch(0.5 0.25 250 / 0.35), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2.5 pl-1.5 pr-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur mb-7 font-sans">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/20 ring-1 ring-primary/40 shadow-[0_0_18px_-2px_oklch(0.7_0.032_232/0.4)]">
              <MessageCircle className="h-3.5 w-3.5 text-primary" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-foreground font-semibold">
              Imperius Automation<span className="text-primary">™</span>
            </span>
            <span className="hidden sm:block h-3 w-px bg-border/80" />
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">WhatsApp + IA</span>
          </div>
          <h1 className="font-display text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-tight">
            <span className="block text-gradient">Atendimento Inteligente</span>
            <span className="block text-neon">para a sua Empresa.</span>
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
            Automatize respostas, capture leads e organize contatos
            automaticamente utilizando Inteligência Artificial.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center flex-wrap gap-3 sm:gap-5">
            <a
              href="#demo"
              className="w-full sm:w-auto"
              onClick={() =>
                track("automation_cta_click", {
                  location: "hero",
                  destination: "demo",
                })
              }
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide glow-ring h-13 px-8 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_oklch(0.7_0.032_232/0.45)]"
              >
                VER DEMONSTRAÇÃO <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-primary transition-colors font-sans inline-flex items-center gap-1.5"
              onClick={() =>
                track("whatsapp_click", { location: "hero_automation" })
              }
            >
              ou fale com um especialista
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-[13px] text-muted-foreground/80 max-w-md leading-relaxed font-sans">
            <li className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> Implementação
              guiada
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> IA treinada para o
              seu negócio
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> Funciona 24/7
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
    <div className="relative w-full max-w-[480px] mx-auto">
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
              Live · IA em operação
            </span>
          </div>
          <Activity className="h-4 w-4 text-primary" />
        </div>

        {/* Chat preview */}
        <div className="space-y-3">
          <ChatBubble
            from="client"
            text="Oi, vocês atendem hoje à tarde?"
            time="14:02"
          />
          <ChatBubble
            from="ai"
            text="Olá! Sim, temos horários disponíveis hoje a partir das 15h. Quer que eu confirme um horário para você?"
            time="14:02"
          />
          <ChatBubble from="client" text="Pode ser 16h." time="14:03" />
          <ChatBubble
            from="ai"
            text="Perfeito! Confirmado para 16h. Já registrei seu contato e a equipe foi notificada. ✅"
            time="14:03"
          />
        </div>

        {/* Status row */}
        <div className="mt-5 grid grid-cols-3 gap-2 text-center">
          <StatusChip icon={UserCheck} label="Lead qualificado" />
          <StatusChip icon={Database} label="Contato salvo" />
          <StatusChip icon={BellRing} label="Empresa notificada" />
        </div>
      </div>
    </div>
  );
}

function ChatBubble({
  from,
  text,
  time,
}: {
  from: "client" | "ai";
  text: string;
  time: string;
}) {
  const isAi = from === "ai";
  return (
    <div className={`flex ${isAi ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug font-sans ${
          isAi
            ? "bg-primary/10 text-foreground border border-primary/25"
            : "bg-card text-foreground/90 border border-border/60"
        }`}
      >
        {isAi && (
          <div className="flex items-center gap-1.5 mb-1 text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
            <Bot className="h-3 w-3" /> Imperius AI
          </div>
        )}
        <p>{text}</p>
        <div className="mt-1 text-[10px] text-muted-foreground/70 text-right">
          {time}
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
      <span className="text-[10px] text-muted-foreground leading-tight">
        {label}
      </span>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { i: MessageCircle, t: "Cliente envia mensagem", d: "WhatsApp, Instagram ou site." },
    { i: Bot, t: "IA responde", d: "Resposta instantânea, 24/7, no tom da sua marca." },
    { i: UserCheck, t: "Lead é qualificado", d: "A IA identifica intenção e prioridade." },
    { i: Database, t: "Contato é salvo", d: "Tudo organizado automaticamente no CRM." },
    { i: BellRing, t: "Empresa recebe notificação", d: "Sua equipe assume na hora certa." },
  ];
  return (
    <section id="how" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">
            Como funciona
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            Do primeiro contato à notificação, em segundos.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
            Cinco etapas automatizadas que transformam mensagens em
            oportunidades reais.
          </p>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          <div
            className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.7 0.032 232 / 0.45), transparent)",
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
              <h3 className="font-heading font-semibold text-base mb-2 tracking-tight">
                {s.t}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
            WhatsApp, IA, CRM e Dashboard. Conectados.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
            Uma plataforma. Quatro módulos integrados trabalhando em tempo real
            pela sua empresa.
          </p>
        </div>

        {/* Connected modules grid */}
        <div className="relative grid lg:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
          <DemoModule
            label="WhatsApp"
            tag="Canal de entrada"
            icon={MessageCircle}
          >
            <div className="space-y-2">
              <ChatBubble from="client" text="Quero saber o preço." time="09:14" />
              <ChatBubble
                from="ai"
                text="Claro! Posso te enviar agora. Qual serviço te interessa?"
                time="09:14"
              />
            </div>
          </DemoModule>

          <DemoModule label="Assistente IA" tag="Inteligência" icon={Bot}>
            <div className="space-y-2.5">
              <AiLine label="Intenção detectada" value="Solicitação de orçamento" />
              <AiLine label="Prioridade" value="Alta" highlight />
              <AiLine label="Próxima ação" value="Enviar tabela + qualificar" />
              <AiLine label="Tom da resposta" value="Profissional, próximo" />
            </div>
          </DemoModule>

          <DemoModule label="CRM" tag="Organização" icon={Database}>
            <div className="space-y-2">
              <CrmRow name="Cliente 01" tag="Quente" status="Novo lead" />
              <CrmRow name="Cliente 02" tag="Morno" status="Aguardando retorno" />
              <CrmRow name="Cliente 03" tag="Quente" status="Orçamento enviado" />
            </div>
          </DemoModule>

          <DemoModule
            label="Dashboard"
            tag="Visão geral"
            icon={LayoutDashboard}
          >
            <div className="mb-2 text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground/70">
              Dados demonstrativos
            </div>
            <div className="grid grid-cols-3 gap-2">
              <KpiCard label="Atendimentos hoje" value="47" />
              <KpiCard label="Leads qualificados" value="18" />
              <KpiCard label="Tempo médio" value="9s" />
            </div>
            <div className="mt-3 h-14 rounded-lg border border-border/60 bg-card/50 p-2 flex items-end gap-1">
              {[30, 55, 40, 70, 60, 85, 75, 95, 80, 100, 90, 70].map((h, i) => (
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
          </DemoModule>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          Módulos sincronizados em tempo real
        </div>
      </div>
    </section>
  );
}

function DemoModule({
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
            <div className="font-heading font-semibold text-sm tracking-tight">
              {label}
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {tag}
            </div>
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

function AiLine({
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
      <span className="text-muted-foreground uppercase tracking-[0.16em] text-[10px]">
        {label}
      </span>
      <span
        className={`font-medium ${highlight ? "text-primary" : "text-foreground"}`}
      >
        {value}
      </span>
    </div>
  );
}

function CrmRow({
  name,
  tag,
  status,
}: {
  name: string;
  tag: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-card/40 px-3 py-2.5">
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="h-7 w-7 rounded-full bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-[11px] font-semibold text-primary shrink-0">
          {name[0]}
        </div>
        <div className="min-w-0">
          <div className="text-[12px] font-medium truncate">{name}</div>
          <div className="text-[10px] text-muted-foreground truncate">
            {status}
          </div>
        </div>
      </div>
      <span
        className={`text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 rounded-full border ${
          tag === "Quente"
            ? "border-primary/50 text-primary bg-primary/10"
            : "border-border/60 text-muted-foreground"
        }`}
      >
        {tag}
      </span>
    </div>
  );
}

function KpiCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-card/50 px-2 py-2.5 text-center">
      <div className="font-display font-bold text-lg text-foreground">
        {value}
      </div>
      <div className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground leading-tight mt-0.5">
        {label}
      </div>
    </div>
  );
}

function Benefits() {
  const items = [
    { i: Zap, t: "Mais velocidade", d: "Respostas em segundos, mesmo fora do expediente." },
    { i: LayoutDashboard, t: "Mais organização", d: "Contatos, conversas e leads no mesmo lugar." },
    { i: Sparkles, t: "Mais oportunidades", d: "Nenhum cliente sem resposta. Nenhum lead esquecido." },
    { i: ShieldCheck, t: "Menos trabalho manual", d: "A equipe foca no que importa: fechar negócios." },
  ];
  return (
    <section id="benefits" className="py-24 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">
            Benefícios
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            O que muda no seu dia a dia.
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
              <h3 className="font-heading font-semibold text-base mb-2 tracking-tight">
                {it.t}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {it.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWho() {
  const items = [
    { i: Scissors, t: "Barbearias" },
    { i: Stethoscope, t: "Clínicas" },
    { i: Sparkles, t: "Estéticas" },
    { i: Building2, t: "Imobiliárias" },
    { i: Store, t: "Pequenos negócios" },
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
            Feito para quem atende clientes todos os dias.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 max-w-5xl mx-auto">
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

function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold mb-5 font-sans">
          Solicite uma demonstração
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-[1.1] tracking-tight">
          Veja o Imperius Automation<span className="text-primary">™</span>{" "}
          funcionando na sua empresa.
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
          Uma demonstração personalizada, sem compromisso, mostrando exatamente
          como a IA atenderia os seus clientes.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
            onClick={() =>
              track("whatsapp_click", { location: "final_cta_automation" })
            }
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide glow-ring h-13 px-8 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_oklch(0.7_0.032_232/0.45)]"
            >
              SOLICITAR DEMONSTRAÇÃO PERSONALIZADA{" "}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        <p className="mt-5 text-xs text-muted-foreground/80">
          Resposta em horário comercial.
        </p>
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
              IMPERIUS AUTOMATION<span className="text-primary">™</span>
            </span>
          </div>
          <div className="text-center sm:text-right">
            © {new Date().getFullYear()} Imperius Soluções Digitais. Todos os
            direitos reservados.
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
