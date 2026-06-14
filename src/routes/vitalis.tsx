import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Send,
  Activity,
  Heart,
  Calendar as CalendarIcon,
  CalendarCheck,
  Clock,
  MessageCircle,
  Bot,
  BellRing,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp,
  Stethoscope,
  HeartPulse,
  Baby,
  Bone,
  Apple,
  Sparkles,
  Users,
  Phone,
  Star,
  Cpu,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const track = (name: string, params: Record<string, unknown> = {}) =>
  trackEvent(name, params);

const WA_MESSAGE =
  "Olá! Quero uma demonstração da solução digital Imperius para a minha clínica.";
const WA = `https://wa.me/5515981023792?text=${encodeURIComponent(WA_MESSAGE)}`;

export const Route = createFileRoute("/vitalis")({
  head: () => ({
    meta: [
      {
        title:
          "Clínica Vitalis™ | Demonstração — Presença Digital, Agendamento e Atendimento Inteligente by Imperius",
      },
      {
        name: "description",
        content:
          "Clínica moderna em operação: agendamento online, confirmações automáticas via WhatsApp e dashboard de atendimento. Demonstração premium da Imperius para clínicas e consultórios.",
      },
      { property: "og:title", content: "Clínica Vitalis™ | Demonstração Imperius" },
      {
        property: "og:description",
        content:
          "Agendamento online, confirmações automáticas e atendimento moderno para clínicas e consultórios.",
      },
      { property: "og:url", content: "https://imperius-digital.lovable.app/vitalis" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clínica Vitalis™ | Demonstração Imperius" },
      {
        name: "twitter:description",
        content:
          "Agendamento online, confirmações automáticas e atendimento moderno para clínicas.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://imperius-digital.lovable.app/vitalis" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: VitalisLanding,
});

function VitalisLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Specialties />
      <Doctors />
      <BookingFlow />
      <Confirmations />
      <Dashboard />
      <Benefits />
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
            <HeartPulse className="h-4.5 w-4.5 text-primary" />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="font-display font-bold tracking-[0.18em] text-[12px] truncate">
              CLÍNICA VITALIS<span className="text-primary">™</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground hidden sm:block">
              by Imperius Digital
            </span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground font-medium">
          <a href="#especialidades" className="hover:text-foreground transition-colors">Especialidades</a>
          <a href="#medicos" className="hover:text-foreground transition-colors">Médicos</a>
          <a href="#agendamento" className="hover:text-foreground transition-colors">Agendamento</a>
          <a href="#dashboard" className="hover:text-foreground transition-colors">Resultados</a>
        </nav>
        <a
          href="#agendamento"
          className="shrink-0"
          onClick={() => track("vitalis_cta_click", { location: "nav", destination: "booking" })}
        >
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_oklch(0.72_0.22_250/0.7)]"
          >
            <span className="sm:hidden">Agendar</span>
            <span className="hidden sm:inline">Agendar consulta</span>
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-7 font-sans font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Clínica Vitalis<span className="text-primary">™</span>
          </div>
          <h1 className="font-display text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-tight">
            <span className="block text-gradient">Mais consultas. Menos ligações.</span>
            <span className="block text-neon">Melhor experiência.</span>
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed font-sans">
            Agendamento online, confirmações automáticas e atendimento moderno
            para clínicas e consultórios.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center flex-wrap gap-3 sm:gap-5">
            <a
              href="#agendamento"
              className="w-full sm:w-auto"
              onClick={() => track("vitalis_cta_click", { location: "hero", destination: "booking" })}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide glow-ring h-13 px-8 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_oklch(0.72_0.22_250/0.8)]"
              >
                AGENDAR CONSULTA <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href="#especialidades"
              className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-primary transition-colors font-sans inline-flex items-center gap-1.5"
              onClick={() => track("vitalis_cta_click", { location: "hero", destination: "specialties" })}
            >
              Conhecer solução
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-[13px] text-muted-foreground/80 max-w-md leading-relaxed font-sans">
            <li className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> Agendamento 24/7
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> Confirmação por WhatsApp
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-primary" /> Lembretes automáticos
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
              Live · Recepção Vitalis
            </span>
          </div>
          <Activity className="h-4 w-4 text-primary" />
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 p-3 mb-4">
          <div className="h-11 w-11 rounded-full ring-1 ring-primary/40 bg-primary/15 flex items-center justify-center shrink-0">
            <Stethoscope className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[12px] font-semibold truncate">Dra. Marina Costa</div>
            <div className="text-[10px] text-muted-foreground truncate">
              Cardiologia · CRM-SP 142.587
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Hoje</div>
            <div className="text-[12px] font-semibold text-primary">12/06</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5 mb-4">
          {[
            { t: "09:00", state: "busy" },
            { t: "10:00", state: "free" },
            { t: "11:00", state: "free" },
            { t: "14:00", state: "selected" },
            { t: "15:00", state: "free" },
            { t: "16:00", state: "busy" },
            { t: "17:00", state: "free" },
            { t: "18:00", state: "free" },
          ].map((s) => (
            <SlotChip key={s.t} time={s.t} state={s.state as SlotState} />
          ))}
        </div>

        <div className="rounded-xl border border-primary/30 bg-primary/5 p-3 flex items-start gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center shrink-0">
            <CalendarCheck className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold">Consulta confirmada</span>
              <span className="text-[9px] text-muted-foreground">agora</span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
              <span className="text-foreground/80 font-medium">Renato C.</span> · Cardiologia ·{" "}
              <span className="text-primary">Qua 12, 14h</span>
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <StatusChip icon={Check} label="Horário reservado" />
          <StatusChip icon={MessageCircle} label="WhatsApp enviado" />
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

// ---------------- SPECIALTIES ----------------
function Specialties() {
  const items = [
    { i: Stethoscope, t: "Clínica Geral", d: "Atendimento de rotina e check-ups." },
    { i: HeartPulse, t: "Cardiologia", d: "Avaliação cardiovascular e exames." },
    { i: Sparkles, t: "Dermatologia", d: "Pele, estética clínica e cuidados." },
    { i: Baby, t: "Pediatria", d: "Acompanhamento infantil completo." },
    { i: Bone, t: "Ortopedia", d: "Coluna, articulações e fisioterapia." },
    { i: Apple, t: "Nutrição", d: "Planos alimentares personalizados." },
  ];
  return (
    <section id="especialidades" className="py-24 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">
            Especialidades
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            Cuidado completo, em um só lugar.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
            Seis especialidades médicas integradas em uma única operação digital.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {items.map((it) => (
            <div
              key={it.t}
              className="card-premium hover-lift rounded-2xl p-5 sm:p-6 transition-all duration-300"
            >
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center ring-1 ring-primary/40 mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.7), oklch(0.12 0.02 245 / 0.7))",
                }}
              >
                <it.i className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-sm sm:text-base tracking-tight">{it.t}</h3>
              <p className="text-[12px] sm:text-sm text-muted-foreground mt-1.5 leading-relaxed font-sans">
                {it.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- DOCTORS ----------------
type Doctor = {
  name: string;
  specialty: string;
  crm: string;
  icon: typeof Stethoscope;
  rating: number;
  slots: string[];
  next: string;
};

function Doctors() {
  const doctors: Doctor[] = [
    {
      name: "Dra. Marina Costa",
      specialty: "Cardiologia",
      crm: "CRM-SP 142.587",
      icon: HeartPulse,
      rating: 4.9,
      slots: ["09:00", "14:00", "16:30"],
      next: "Hoje · 14:00",
    },
    {
      name: "Dr. Felipe Andrade",
      specialty: "Clínica Geral",
      crm: "CRM-SP 098.214",
      icon: Stethoscope,
      rating: 4.8,
      slots: ["10:30", "11:30", "15:00"],
      next: "Hoje · 10:30",
    },
    {
      name: "Dra. Helena Vargas",
      specialty: "Dermatologia",
      crm: "CRM-SP 187.302",
      icon: Sparkles,
      rating: 5.0,
      slots: ["08:30", "13:00", "17:00"],
      next: "Amanhã · 08:30",
    },
    {
      name: "Dr. Renato Lima",
      specialty: "Ortopedia",
      crm: "CRM-SP 121.044",
      icon: Bone,
      rating: 4.7,
      slots: ["09:30", "11:00", "16:00"],
      next: "Hoje · 16:00",
    },
  ];
  return (
    <section id="medicos" className="py-24 sm:py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">
            Equipe médica
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            Profissionais prontos para atender.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
            Horários disponíveis em tempo real — sem ligar, sem esperar.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {doctors.map((d) => (
            <div
              key={d.name}
              className="card-premium hover-lift rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center ring-1 ring-primary/40 shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.3 0.15 250 / 0.7), oklch(0.15 0.03 245 / 0.5))",
                  }}
                >
                  <d.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading font-semibold text-sm tracking-tight truncate">{d.name}</h3>
                  <p className="text-[11px] text-primary font-medium mt-0.5">{d.specialty}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{d.crm}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 text-amber-300">
                  <Star className="h-3 w-3 fill-current" />
                  <span className="font-semibold">{d.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground/70 ml-1">avaliações</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-primary font-semibold flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {d.next}
                </span>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-1.5">
                {d.slots.map((s) => (
                  <div
                    key={s}
                    className="text-[11px] text-center py-1.5 rounded-md border border-border/60 bg-card/40 text-foreground/85 hover:border-primary/50 transition-colors"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- BOOKING FLOW ----------------
function BookingFlow() {
  return (
    <section id="agendamento" className="py-24 sm:py-28 relative">
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
            Agendamento online
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            Três passos para marcar uma consulta.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
            Sem ligar para a recepção. Sem aguardar retorno por e-mail.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          <StepCard step="01" tag="Profissional" icon={Stethoscope}>
            <div className="space-y-2">
              {[
                { n: "Dra. Marina Costa", s: "Cardiologia", active: true },
                { n: "Dr. Felipe Andrade", s: "Clínica Geral" },
                { n: "Dra. Helena Vargas", s: "Dermatologia" },
              ].map((d) => (
                <div
                  key={d.n}
                  className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 ${
                    d.active
                      ? "border-primary/50 bg-primary/10 ring-1 ring-primary/30"
                      : "border-border/60 bg-card/40"
                  }`}
                >
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-semibold ${
                      d.active ? "bg-primary/20 text-primary ring-1 ring-primary/40" : "bg-card/60 text-muted-foreground"
                    }`}
                  >
                    {d.n
                      .replace("Dra. ", "")
                      .replace("Dr. ", "")
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12px] font-medium truncate">{d.n}</div>
                    <div className="text-[10px] text-muted-foreground truncate">{d.s}</div>
                  </div>
                  {d.active && <Check className="h-4 w-4 text-primary shrink-0" />}
                </div>
              ))}
            </div>
          </StepCard>

          <StepCard step="02" tag="Data" icon={CalendarIcon}>
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
            <MiniCalendar selected={12} today={9} busy={[4, 7, 15, 19, 22, 26]} />
            <div className="mt-3 flex items-center gap-3 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-primary/40 ring-1 ring-primary/50" /> Escolhido
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-card/30 border border-border/40" /> Ocupado
              </span>
            </div>
          </StepCard>

          <StepCard step="03" tag="Horário" icon={Clock}>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { t: "08:30", state: "free" },
                { t: "09:00", state: "busy" },
                { t: "10:00", state: "free" },
                { t: "11:00", state: "free" },
                { t: "13:30", state: "busy" },
                { t: "14:00", state: "selected" },
                { t: "15:00", state: "free" },
                { t: "16:30", state: "free" },
                { t: "17:00", state: "busy" },
              ].map((s) => (
                <SlotChip key={s.t} time={s.t} state={s.state as SlotState} />
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-3">
              <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-1">
                Resumo
              </div>
              <p className="text-[12px] text-foreground/90 leading-snug">
                <span className="font-medium">Dra. Marina Costa</span> · Cardiologia · Qua 12/06 ·{" "}
                <span className="text-primary font-semibold">14:00</span>
              </p>
              <div className="mt-3 flex items-center justify-between gap-2 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-primary" /> Confirmação instantânea
                </span>
                <span className="text-primary font-semibold">Confirmar</span>
              </div>
            </div>
          </StepCard>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  tag,
  icon: Icon,
  children,
}: {
  step: string;
  tag: string;
  icon: typeof Stethoscope;
  children: React.ReactNode;
}) {
  return (
    <div className="relative card-premium hover-lift rounded-2xl p-5 sm:p-6 transition-all duration-300">
      <div className="absolute -top-3 -right-3 h-9 w-9 rounded-full ring-1 ring-primary/40 bg-background flex items-center justify-center font-display font-bold text-[11px] text-primary">
        {step}
      </div>
      <div className="flex items-center gap-3 mb-4">
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
          <div className="font-heading font-semibold text-sm tracking-tight">Escolha {tag.toLowerCase()}</div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{tag}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

function MiniCalendar({
  selected,
  today,
  busy,
}: {
  selected: number;
  today: number;
  busy: number[];
}) {
  const days = Array.from({ length: 35 }, (_, i) => i - 2);
  const busySet = new Set(busy);
  return (
    <div className="grid grid-cols-7 gap-1">
      {days.map((d, i) => {
        const isDay = d >= 1 && d <= 30;
        const isBusy = isDay && busySet.has(d);
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
  );
}

// ---------------- CONFIRMATIONS ----------------
function Confirmations() {
  return (
    <section className="py-24 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">
            Confirmações automáticas
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            WhatsApp cuida do paciente até o dia da consulta.
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg font-sans leading-relaxed">
            Confirmações, lembretes e reagendamentos — sem ninguém precisar ligar.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-5 sm:gap-6 max-w-6xl mx-auto">
          <div className="card-premium rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center ring-1 ring-primary/40 bg-primary/15">
                  <MessageCircle className="h-4.5 w-4.5 text-primary" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-sm">WhatsApp Clínica Vitalis</div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Conversa automática
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
                Online
              </div>
            </div>

            <div className="space-y-2.5">
              <WaBubble
                tag="Confirmação · 14:31"
                text="Olá Renato! Sua consulta com a Dra. Marina Costa (Cardiologia) está confirmada para Qua 12/06 às 14:00. Posso confirmar sua presença? ✅"
              />
              <PatientReply text="Sim, confirmado! 🙌" />
              <WaBubble
                tag="Lembrete · enviado às 08:00"
                text="Bom dia, Renato 👋 Lembrete: sua consulta é hoje às 14:00. Endereço: Av. Paulista 1500, Sala 802. Até logo!"
              />
              <PatientReply text="Preciso reagendar, pode ser quinta?" />
              <WaBubble
                tag="Reagendamento automático"
                text="Sem problema! Temos quinta-feira (13/06) às 10:00 ou 16:30 com a Dra. Marina. Qual prefere?"
              />
            </div>
          </div>

          <div className="space-y-4">
            <FeatureRow
              icon={CalendarCheck}
              title="Confirmação automática"
              desc="Disparada no momento do agendamento, no tom da clínica."
            />
            <FeatureRow
              icon={BellRing}
              title="Lembrete de consulta"
              desc="Enviado 24h antes e na manhã do atendimento."
            />
            <FeatureRow
              icon={MessageCircle}
              title="Reagendamento sem fricção"
              desc="Paciente responde no WhatsApp e o sistema oferece novos horários."
            />
            <FeatureRow
              icon={Phone}
              title="Recepção desbloqueada"
              desc="Equipe deixa de atender ligações e foca no paciente presencial."
            />
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
              <p className="text-[12px] text-foreground/85 leading-snug">
                Integrado ao Imperius Automation™ e ao Imperius Scheduling™ — uma operação só.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WaBubble({ tag, text }: { tag: string; text: string }) {
  return (
    <div className="rounded-2xl border border-primary/25 bg-primary/10 px-3.5 py-2.5 max-w-[88%]">
      <div className="flex items-center gap-1.5 mb-1 text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
        <Bot className="h-3 w-3" /> {tag}
      </div>
      <p className="text-[12px] leading-snug text-foreground/90">{text}</p>
    </div>
  );
}

function PatientReply({ text }: { text: string }) {
  return (
    <div className="ml-auto rounded-2xl border border-border/60 bg-card/60 px-3.5 py-2 max-w-[78%]">
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-0.5">
        Paciente
      </div>
      <p className="text-[12px] leading-snug text-foreground/85">{text}</p>
    </div>
  );
}

function FeatureRow({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof MessageCircle;
  title: string;
  desc: string;
}) {
  return (
    <div className="card-premium rounded-2xl p-4 sm:p-5 flex items-start gap-3">
      <div
        className="h-10 w-10 rounded-xl flex items-center justify-center ring-1 ring-primary/40 shrink-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.25 0.12 250 / 0.7), oklch(0.12 0.02 245 / 0.7))",
        }}
      >
        <Icon className="h-4.5 w-4.5 text-primary" />
      </div>
      <div className="min-w-0">
        <h3 className="font-heading font-semibold text-sm tracking-tight">{title}</h3>
        <p className="text-[12px] text-muted-foreground mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ---------------- DASHBOARD ----------------
function Dashboard() {
  const bars = [55, 68, 72, 60, 80, 88, 75, 92, 84, 95, 78, 90];
  return (
    <section id="dashboard" className="py-24 sm:py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">
            Dashboard operacional
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            A clínica em tempo real.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto card-premium rounded-2xl p-5 sm:p-7">
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
                <div className="font-heading font-semibold text-sm">Visão geral · Hoje</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Atualizado agora
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
              Operação ativa
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <Kpi label="Consultas do dia" value="32" delta="+14%" icon={CalendarCheck} />
            <Kpi label="Pacientes agendados" value="184" delta="+9%" icon={Users} />
            <Kpi label="Taxa de comparecimento" value="96%" delta="+11 p.p." icon={ShieldCheck} />
            <Kpi label="Atendimentos concluídos" value="28" delta="+6%" icon={Check} />
          </div>

          <div className="mt-5 rounded-xl border border-border/60 bg-card/50 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Consultas · últimos 12 dias
              </span>
              <span className="text-[11px] text-primary font-semibold flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> +18%
              </span>
            </div>
            <div className="h-20 flex items-end gap-1.5">
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
        </div>
      </div>
    </section>
  );
}

function Kpi({
  label,
  value,
  delta,
  icon: Icon,
}: {
  label: string;
  value: string;
  delta: string;
  icon: typeof Check;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/50 px-3 py-3">
      <div className="flex items-center justify-between">
        <div className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground leading-tight">
          {label}
        </div>
        <Icon className="h-3.5 w-3.5 text-primary" />
      </div>
      <div className="font-display font-bold text-xl text-foreground mt-1.5">{value}</div>
      <div className="text-[10px] text-primary font-semibold mt-0.5">{delta}</div>
    </div>
  );
}

// ---------------- BENEFITS ----------------
function Benefits() {
  const items = [
    { i: TrendingUp, t: "Mais consultas", d: "Agenda preenchida 24/7, sem depender da recepção." },
    { i: ShieldCheck, t: "Menos faltas", d: "Confirmações e lembretes reduzem no-shows." },
    { i: Heart, t: "Melhor experiência", d: "Paciente agenda em 30 segundos, no celular." },
    { i: Activity, t: "Menos trabalho manual", d: "Recepção foca no presencial, não no telefone." },
  ];
  return (
    <section className="py-24 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-4 font-sans">
            Benefícios
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight tracking-tight">
            O que muda na sua clínica.
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

// ---------------- FINAL CTA ----------------
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
          Veja como uma clínica moderna pode funcionar.
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
          A Imperius cria soluções digitais para clínicas que desejam mais
          organização, mais consultas e melhor atendimento.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
            onClick={() => track("whatsapp_click", { location: "final_cta_vitalis" })}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide glow-ring h-13 px-8 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_oklch(0.72_0.22_250/0.8)]"
            >
              SOLICITAR DEMONSTRAÇÃO <Send className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        <p className="mt-5 text-xs text-muted-foreground/80">
          Demonstração gratuita · Resposta em horário comercial.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-primary" />
          <span className="font-display tracking-[0.18em] font-semibold">
            CLÍNICA VITALIS<span className="text-primary">™</span>
          </span>
          <span className="text-muted-foreground/60">· demonstração Imperius</span>
        </div>
        <div className="text-center sm:text-right">
          © {new Date().getFullYear()} Imperius Soluções Digitais. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
