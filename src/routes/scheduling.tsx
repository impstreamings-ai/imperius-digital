import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Send,
  Cpu,
  Calendar as CalendarIcon,
  CalendarCheck,
  Clock,
  MessageCircle,
  Bot,
  BellRing,
  LayoutDashboard,
  Activity,
  ShieldCheck,
  Smile,
  TrendingUp,
  Zap,
  Scissors,
  Stethoscope,
  Sparkles,
  Building2,
  Store,
  Utensils,
  Briefcase,
  Heart,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const track = (name: string, params: Record<string, unknown> = {}) =>
  trackEvent(name, params);

const WA_MESSAGE =
  "Olá! Quero uma demonstração personalizada do Imperius Scheduling para a minha empresa.";
const WA = `https://wa.me/5515981023792?text=${encodeURIComponent(WA_MESSAGE)}`;

export const Route = createFileRoute("/scheduling")({
  head: () => ({
    meta: [
      { title: "Imperius Scheduling™ | Sistema de Agendamento Inteligente by Imperius Digital" },
      {
        name: "description",
        content:
          "Permita que seus clientes escolham horários, confirmem reservas e recebam lembretes automaticamente. Imperius Scheduling™ — agendamento inteligente integrado ao WhatsApp.",
      },
      { property: "og:title", content: "Imperius Scheduling™ | Agendamento Inteligente" },
      {
        property: "og:description",
        content:
          "Calendário, reservas, WhatsApp e dashboard conectados. Demonstração premium do Imperius Scheduling™.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://imperius-digital.lovable.app/scheduling" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Imperius Scheduling™ | Agendamento Inteligente" },
      {
        name: "twitter:description",
        content:
          "Calendário, reservas, WhatsApp e dashboard conectados. Demonstração premium do Imperius Scheduling™.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://imperius-digital.lovable.app/scheduling" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: SchedulingLanding,
});

function SchedulingLanding() {
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
            <CalendarIcon className="h-4.5 w-4.5 text-primary" />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="font-display font-bold tracking-[0.18em] text-[12px] truncate">
              IMPERIUS SCHEDULING<span className="text-primary">™</span>
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
          onClick={() => track("whatsapp_click", { location: "nav_scheduling" })}
        >
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_oklch(0.7_0.032_232/0.45)]"
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
            "radial-gradient(circle, oklch(0.74 0.17 185 / 0.30), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center w-full">
        <div>
          <div
            className="inline-flex items-center gap-2.5 pl-1.5 pr-3.5 py-1.5 rounded-full border backdrop-blur mb-7 font-sans"
            style={{ borderColor: "oklch(0.74 0.17 185 / 0.42)", background: "oklch(0.74 0.17 185 / 0.10)" }}
          >
            <span
              className="grid h-6 w-6 place-items-center rounded-full"
              style={{ background: "oklch(0.74 0.17 185 / 0.22)", boxShadow: "0 0 18px -2px oklch(0.74 0.17 185 / 0.65)", outline: "1px solid oklch(0.74 0.17 185 / 0.5)" }}
            >
              <CalendarCheck className="h-3.5 w-3.5" style={{ color: "oklch(0.80 0.15 185)" }} />
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-foreground font-semibold">
              Imperius Scheduling<span style={{ color: "oklch(0.80 0.15 185)" }}>™</span>
            </span>
            <span className="hidden sm:block h-3 w-px bg-border/80" />
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Reservas & Horários</span>
          </div>
          <h1 className="font-display text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-tight">
            <span className="block text-gradient">Agendamentos sem</span>
            <span className="block text-neon">troca infinita de mensagens.</span>
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
            Permita que seus clientes escolham horários, confirmem reservas e
            recebam lembretes automaticamente — integrado ao WhatsApp.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center flex-wrap gap-3 sm:gap-5">
            <a
              href="#demo"
              className="w-full sm:w-auto"
              onClick={() =>
                track("scheduling_cta_click", { location: "hero", destination: "demo" })
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
              onClick={() => track("whatsapp_click", { location: "hero_scheduling" })}
            >
              ou fale com um especialista
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-[13px] text-muted-foreground/80 max-w-md leading-relaxed font-sans">
            <li className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> Reserva 24/7
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> Confirmação automática
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> Lembretes via WhatsApp
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
              Live · Agenda em operação
            </span>
          </div>
          <Activity className="h-4 w-4 text-primary" />
        </div>

        {/* Day picker */}
        <div className="grid grid-cols-7 gap-1.5 mb-4">
          {[
            { d: "SEG", n: 10 },
            { d: "TER", n: 11 },
            { d: "QUA", n: 12, active: true },
            { d: "QUI", n: 13 },
            { d: "SEX", n: 14 },
            { d: "SÁB", n: 15 },
            { d: "DOM", n: 16, off: true },
          ].map((day) => (
            <div
              key={day.n}
              className={`rounded-lg border text-center py-2 transition-colors ${
                day.active
                  ? "border-primary/60 bg-primary/15 ring-1 ring-primary/40"
                  : day.off
                    ? "border-border/40 bg-card/20 opacity-60"
                    : "border-border/60 bg-card/40"
              }`}
            >
              <div className="text-[8px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                {day.d}
              </div>
              <div
                className={`text-sm font-display font-bold mt-0.5 ${day.active ? "text-primary" : "text-foreground/90"}`}
              >
                {day.n}
              </div>
            </div>
          ))}
        </div>

        {/* Slots */}
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { t: "09:00", state: "free" },
            { t: "10:00", state: "busy" },
            { t: "11:00", state: "free" },
            { t: "14:00", state: "free" },
            { t: "15:00", state: "selected" },
            { t: "16:00", state: "free" },
            { t: "17:00", state: "busy" },
            { t: "18:00", state: "free" },
          ].map((s) => (
            <SlotChip key={s.t} time={s.t} state={s.state as SlotState} />
          ))}
        </div>

        {/* Confirmation */}
        <div className="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-3 flex items-start gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center shrink-0">
            <CalendarCheck className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold">Reserva confirmada</span>
              <span className="text-[9px] text-muted-foreground">agora</span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
              <span className="text-foreground/80 font-medium">Cliente 01</span> · Corte
              + Barba · <span className="text-primary">Qua 12, 15h</span>
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <StatusChip icon={Check} label="Horário reservado" />
          <StatusChip icon={MessageCircle} label="Confirmação enviada" />
          <StatusChip icon={BellRing} label="Lembrete agendado" />
        </div>
      </div>
    </div>
  );
}

type SlotState = "free" | "busy" | "selected";
function SlotChip({ time, state }: { time: string; state: SlotState }) {
  const cls =
    state === "selected"
      ? "border-primary/60 bg-primary/20 text-primary ring-1 ring-primary/40"
      : state === "busy"
        ? "border-border/40 bg-card/20 text-muted-foreground/60 line-through"
        : "border-border/60 bg-card/40 text-foreground/90 hover:border-primary/40";
  return (
    <div
      className={`rounded-md border text-[11px] font-medium font-sans text-center py-1.5 transition-colors ${cls}`}
    >
      {time}
    </div>
  );
}

function StatusChip({
  icon: Icon,
  label,
}: {
  icon: typeof Check;
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
    { i: CalendarIcon, t: "Cliente escolhe horário", d: "Pelo site, link ou WhatsApp." },
    { i: ShieldCheck, t: "Sistema verifica disponibilidade", d: "Sem conflitos. Sem overbooking." },
    { i: CalendarCheck, t: "Reserva é criada", d: "Registrada e organizada automaticamente." },
    { i: MessageCircle, t: "WhatsApp envia confirmação", d: "Mensagem automática, no tom da marca." },
    { i: BellRing, t: "Lembrete é enviado", d: "Reduz faltas no dia do atendimento." },
  ];
  return (
    <section id="how" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">
            Como funciona
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            Da reserva à confirmação.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
            Cinco etapas automatizadas para acabar com a troca infinita de mensagens.
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
            Agenda, reservas e confirmações conectadas.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
            Quatro módulos sincronizados em tempo real pela sua operação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
          <CalendarModule />
          <BookingsModule />
          <WhatsappModule />
          <DashboardModule />
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          Módulos sincronizados em tempo real
        </div>
      </div>
    </section>
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

function CalendarModule() {
  // 5-week mini calendar grid; mark some days busy/selected
  const days = Array.from({ length: 35 }, (_, i) => i - 2); // -2..32 shows leading blanks
  const busy = new Set([4, 7, 11, 15, 19, 22, 26]);
  const selected = 12;
  const today = 9;
  return (
    <ModuleShell label="Calendário" tag="Disponibilidade" icon={CalendarIcon}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-semibold tracking-wide">Junho 2026</span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.18em]">
          Visão mensal
        </span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
        {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
          <div key={i} className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => {
          const isDay = d >= 1 && d <= 30;
          const isBusy = isDay && busy.has(d);
          const isSelected = d === selected;
          const isToday = d === today;
          return (
            <div
              key={i}
              className={`aspect-square rounded-md flex items-center justify-center text-[10px] font-medium ${
                !isDay
                  ? "opacity-0"
                  : isSelected
                    ? "bg-primary/20 text-primary ring-1 ring-primary/50"
                    : isBusy
                      ? "bg-card/30 text-muted-foreground/70 border border-border/40"
                      : isToday
                        ? "bg-card/60 text-foreground border border-primary/40"
                        : "bg-card/40 text-foreground/80 border border-border/50"
              }`}
            >
              {isDay ? d : ""}
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center gap-3 text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-primary/40 ring-1 ring-primary/50" /> Selecionado
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-card/60 border border-primary/40" /> Hoje
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-card/30 border border-border/40" /> Ocupado
        </span>
      </div>
    </ModuleShell>
  );
}

function BookingsModule() {
  const bookings = [
    { name: "Cliente 01", service: "Corte + Barba", date: "Qua 12 · 15:00", state: "Confirmado" },
    { name: "Cliente 02", service: "Consulta inicial", date: "Qua 12 · 16:30", state: "Confirmado" },
    { name: "Cliente 03", service: "Limpeza de pele", date: "Qui 13 · 10:00", state: "Pendente" },
    { name: "Cliente 04", service: "Avaliação", date: "Sex 14 · 09:00", state: "Confirmado" },
  ];
  return (
    <ModuleShell label="Reservas" tag="Próximos atendimentos" icon={CalendarCheck}>
      <div className="space-y-2">
        {bookings.map((b) => (
          <div
            key={b.name + b.date}
            className="flex items-center justify-between rounded-lg border border-border/50 bg-card/40 px-3 py-2.5 gap-3"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="h-8 w-8 rounded-full bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-[11px] font-semibold text-primary shrink-0">
                {b.name[0]}
              </div>
              <div className="min-w-0">
                <div className="text-[12px] font-medium truncate">{b.name}</div>
                <div className="text-[10px] text-muted-foreground truncate">
                  {b.service}
                </div>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-[11px] font-medium text-foreground/90 flex items-center gap-1 justify-end">
                <Clock className="h-3 w-3 text-primary" />
                {b.date}
              </div>
              <span
                className={`text-[9px] uppercase tracking-[0.18em] px-1.5 py-0.5 rounded-full border inline-block mt-0.5 ${
                  b.state === "Confirmado"
                    ? "border-primary/50 text-primary bg-primary/10"
                    : "border-border/60 text-muted-foreground"
                }`}
              >
                {b.state}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ModuleShell>
  );
}

function WhatsappModule() {
  return (
    <ModuleShell label="WhatsApp" tag="Mensagens automáticas" icon={MessageCircle}>
      <div className="space-y-3">
        <WaBubble
          tag="Confirmação · enviada às 14:31"
          text="Olá! Seu horário está confirmado para Qua 12/06 às 15:00. Até lá! ✅"
        />
        <WaBubble
          tag="Lembrete · agendado para 14:00 amanhã"
          text="Oi 👋 Seu atendimento será amanhã às 15h. Posso confirmar sua presença?"
        />
        <div className="rounded-lg border border-border/50 bg-card/40 px-3 py-2 text-[11px] text-muted-foreground flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Bot className="h-3.5 w-3.5 text-primary" /> Resposta da cliente
          </span>
          <span className="text-primary font-medium">"Confirmado! ✅"</span>
        </div>
      </div>
    </ModuleShell>
  );
}

function WaBubble({ tag, text }: { tag: string; text: string }) {
  return (
    <div className="rounded-2xl border border-primary/25 bg-primary/10 px-3.5 py-2.5">
      <div className="flex items-center gap-1.5 mb-1 text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
        <Bot className="h-3 w-3" /> {tag}
      </div>
      <p className="text-[12px] leading-snug text-foreground/90">{text}</p>
    </div>
  );
}

function DashboardModule() {
  const bars = [40, 60, 50, 75, 65, 88, 78, 95, 82, 100, 90, 84];
  return (
    <ModuleShell label="Dashboard" tag="Visão geral" icon={LayoutDashboard}>
      <div className="mb-2 text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground/70">
        Dados demonstrativos
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Kpi label="Agendamentos hoje" value="28" delta="+12%" />
        <Kpi label="Comparecimento" value="94%" delta="+6 p.p." />
        <Kpi label="Horários ocupados" value="82%" delta="+9%" />
        <Kpi label="Tempo médio resp." value="11s" delta="−38%" />
      </div>
      <div className="mt-3 rounded-lg border border-border/60 bg-card/50 p-2.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            Reservas · últimos 12 dias
          </span>
          <span className="text-[10px] text-primary font-semibold flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> +21%
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
                  "linear-gradient(180deg, oklch(0.78 0.03 232), oklch(0.4 0.025 232 / 0.55))",
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
    { i: TrendingUp, t: "Mais agendamentos", d: "Cliente reserva sozinho, 24/7, sem fricção." },
    { i: ShieldCheck, t: "Menos faltas", d: "Lembretes automáticos reduzem no-shows." },
    { i: Zap, t: "Menos trabalho manual", d: "Sua equipe foca no atendimento, não na agenda." },
    { i: Smile, t: "Melhor experiência", d: "Confirmação e lembrete por WhatsApp, no tom da marca." },
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
    { i: Scissors, t: "Barbearias" },
    { i: Stethoscope, t: "Clínicas" },
    { i: Sparkles, t: "Estéticas" },
    { i: Heart, t: "Consultórios" },
    { i: Building2, t: "Imobiliárias" },
    { i: Utensils, t: "Restaurantes" },
    { i: Briefcase, t: "Prestadores de serviço" },
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
            Feito para quem agenda clientes todos os dias.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto">
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
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold mb-5 font-sans">
          Solicite uma demonstração
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-[1.1] tracking-tight">
          Veja o Imperius Scheduling<span className="text-primary">™</span> funcionando na sua empresa.
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
          Receba uma demonstração personalizada mostrando como automatizar
          reservas, confirmações e lembretes.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
            onClick={() => track("whatsapp_click", { location: "final_cta_scheduling" })}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide glow-ring h-13 px-8 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_oklch(0.7_0.032_232/0.45)]"
            >
              SOLICITAR DEMONSTRAÇÃO <Send className="ml-2 h-4 w-4" />
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
              IMPERIUS SCHEDULING<span className="text-primary">™</span>
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
