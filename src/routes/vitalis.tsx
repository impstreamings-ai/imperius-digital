import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Send,
  CalendarCheck,
  Clock,
  MessageCircle,
  BellRing,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Baby,
  Bone,
  Apple,
  Sparkles,
  Phone,
  Star,
  MapPin,
  Mail,
  Calendar as CalendarIcon,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

import heroAsset from "@/assets/vitalis-hero.jpg.asset.json";
import doc1Asset from "@/assets/vitalis-doc1.jpg.asset.json";
import doc2Asset from "@/assets/vitalis-doc2.jpg.asset.json";
import doc3Asset from "@/assets/vitalis-doc3.jpg.asset.json";
import doc4Asset from "@/assets/vitalis-doc4.jpg.asset.json";

const track = (name: string, params: Record<string, unknown> = {}) =>
  trackEvent(name, params);

const WA_MESSAGE =
  "Olá! Gostaria de agendar uma consulta na Clínica Vitalis.";
const WA = `https://wa.me/5515981023792?text=${encodeURIComponent(WA_MESSAGE)}`;

export const Route = createFileRoute("/vitalis")({
  head: () => ({
    meta: [
      {
        title:
          "Clínica Vitalis | Saúde, cuidado e atendimento humanizado em São Paulo",
      },
      {
        name: "description",
        content:
          "Clínica médica multidisciplinar em São Paulo. Cardiologia, Clínica Geral, Dermatologia, Pediatria, Ortopedia e Nutrição. Agendamento online em 30 segundos.",
      },
      { property: "og:title", content: "Clínica Vitalis | Saúde e cuidado em São Paulo" },
      {
        property: "og:description",
        content:
          "Médicos experientes, recepção acolhedora e agendamento online. Cuide da sua saúde com quem cuida de você.",
      },
      { property: "og:url", content: "https://imperius-digital.lovable.app/vitalis" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clínica Vitalis | Saúde e cuidado" },
      {
        name: "twitter:description",
        content:
          "Clínica médica premium em São Paulo. Agendamento online em 30 segundos.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://imperius-digital.lovable.app/vitalis" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: VitalisLanding,
});

const SERIF = { fontFamily: '"Fraunces", Georgia, serif' };
const SANS = { fontFamily: '"Inter", system-ui, sans-serif' };

function VitalisLanding() {
  return (
    <div
      className="min-h-screen bg-white text-slate-900 antialiased overflow-x-hidden"
      style={SANS}
    >
      <Nav />
      <Hero />
      <TrustStrip />
      <Specialties />
      <Doctors />
      <BookingFlow />
      <Confirmations />
      <Results />
      <Benefits />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ----------------------------- NAV ----------------------------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 min-w-0 group">
          <div className="h-9 w-9 rounded-full grid place-items-center bg-sky-50 ring-1 ring-sky-200 shrink-0 group-hover:ring-sky-400 transition">
            <HeartPulse className="h-4.5 w-4.5 text-sky-600" />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span
              className="font-semibold text-[15px] text-slate-900 tracking-tight truncate"
              style={SERIF}
            >
              Clínica Vitalis
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 hidden sm:block">
              Saúde · Cuidado · Confiança
            </span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-[13px] text-slate-600 font-medium">
          <a href="#especialidades" className="hover:text-sky-700 transition-colors">Especialidades</a>
          <a href="#medicos" className="hover:text-sky-700 transition-colors">Médicos</a>
          <a href="#agendamento" className="hover:text-sky-700 transition-colors">Agendamento</a>
          <a href="#contato" className="hover:text-sky-700 transition-colors">Contato</a>
        </nav>
        <a
          href="#agendamento"
          className="shrink-0"
          onClick={() => track("vitalis_cta_click", { location: "nav", destination: "booking" })}
        >
          <Button
            size="sm"
            className="bg-sky-600 text-white hover:bg-sky-700 font-semibold shadow-sm shadow-sky-600/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span className="sm:hidden">Agendar</span>
            <span className="hidden sm:inline">Agendar consulta</span>
          </Button>
        </a>
      </div>
    </header>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 pb-16 sm:pb-24 bg-gradient-to-b from-sky-50/60 via-white to-white"
    >
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-[11px] uppercase tracking-[0.18em] font-semibold mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            Atendimento humanizado · São Paulo
          </div>
          <h1
            className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.05] tracking-tight text-slate-900 font-medium"
            style={SERIF}
          >
            Cuidar de você é a <span className="text-sky-700 italic">nossa especialidade</span>.
          </h1>
          <p className="mt-6 max-w-xl text-slate-600 text-base sm:text-lg leading-relaxed">
            Uma clínica multidisciplinar com médicos experientes, recepção
            acolhedora e agendamento online em poucos cliques. Cuide da sua
            saúde com quem cuida de você.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row sm:items-center flex-wrap gap-3 sm:gap-4">
            <a
              href="#agendamento"
              className="w-full sm:w-auto"
              onClick={() => track("vitalis_cta_click", { location: "hero", destination: "booking" })}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-semibold h-12 px-7 text-sm shadow-md shadow-sky-600/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Agendar consulta <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href="#especialidades"
              className="w-full sm:w-auto"
              onClick={() => track("vitalis_cta_click", { location: "hero", destination: "specialties" })}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-7 text-sm font-semibold bg-white border-slate-300 text-slate-700 hover:text-sky-700 hover:border-sky-300 hover:bg-sky-50 transition-colors"
              >
                Ver especialidades
              </Button>
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-slate-600 max-w-md">
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-sky-600" /> Agendamento 24/7
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-sky-600" /> Confirmação por WhatsApp
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-sky-600" /> Convênios e particular
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 sm:-inset-6 bg-sky-100/60 rounded-[2rem] blur-2xl pointer-events-none" />
          <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ring-1 ring-slate-200 shadow-xl shadow-sky-900/10 aspect-[4/3]">
            <img
              src={heroAsset.url}
              alt="Recepção moderna da Clínica Vitalis com paciente sendo atendida"
              className="absolute inset-0 h-full w-full object-cover"
              width={1600}
              height={1024}
            />
          </div>
          {/* Floating mini-cards anchored to photo */}
          <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 bg-white rounded-2xl shadow-lg shadow-slate-900/10 ring-1 ring-slate-200 px-4 py-3">
            <div className="h-10 w-10 rounded-full bg-emerald-50 ring-1 ring-emerald-200 grid place-items-center">
              <CalendarCheck className="h-5 w-5 text-emerald-600" />
            </div>
            <div className="leading-tight">
              <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-semibold">Próxima consulta</div>
              <div className="text-[13px] font-semibold text-slate-800">Hoje · 14:00 · Cardiologia</div>
            </div>
          </div>
          <div className="hidden sm:flex absolute -top-5 -right-3 items-center gap-2 bg-white rounded-full shadow-md shadow-slate-900/10 ring-1 ring-slate-200 pl-2 pr-3.5 py-1.5">
            <div className="flex -space-x-1.5">
              <span className="h-6 w-6 rounded-full ring-2 ring-white overflow-hidden bg-sky-100">
                <img src={doc1Asset.url} alt="" className="h-full w-full object-cover" />
              </span>
              <span className="h-6 w-6 rounded-full ring-2 ring-white overflow-hidden bg-sky-100">
                <img src={doc2Asset.url} alt="" className="h-full w-full object-cover" />
              </span>
              <span className="h-6 w-6 rounded-full ring-2 ring-white overflow-hidden bg-sky-100">
                <img src={doc3Asset.url} alt="" className="h-full w-full object-cover" />
              </span>
            </div>
            <span className="text-[11px] text-slate-700 font-semibold">+12 especialistas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TRUST STRIP ----------------------------- */
function TrustStrip() {
  const items = [
    { n: "+15 anos", l: "de atendimento" },
    { n: "+40.000", l: "pacientes atendidos" },
    { n: "12", l: "especialistas" },
    { n: "4,9★", l: "avaliação Google" },
  ];
  return (
    <section className="border-y border-slate-200 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.l} className="text-center md:text-left">
            <div className="text-2xl text-slate-900 font-semibold tracking-tight" style={SERIF}>
              {it.n}
            </div>
            <div className="text-[12px] text-slate-500 uppercase tracking-[0.18em] mt-1">{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- SPECIALTIES ----------------------------- */
function Specialties() {
  const items = [
    { i: Stethoscope, t: "Clínica Geral", d: "Check-ups e atendimento de rotina." },
    { i: HeartPulse, t: "Cardiologia", d: "Avaliação cardiovascular completa." },
    { i: Sparkles, t: "Dermatologia", d: "Pele, estética clínica e tratamentos." },
    { i: Baby, t: "Pediatria", d: "Acompanhamento infantil personalizado." },
    { i: Bone, t: "Ortopedia", d: "Coluna, articulações e fisioterapia." },
    { i: Apple, t: "Nutrição", d: "Planos alimentares individualizados." },
  ];
  return (
    <section id="especialidades" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.2em] text-sky-700 font-semibold mb-3">
            Especialidades
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-slate-900 font-medium"
            style={SERIF}
          >
            Cuidado completo, em um só lugar.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Seis especialidades médicas integradas, com agendamento simplificado e prontuário unificado.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((it) => (
            <div
              key={it.t}
              className="group rounded-2xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-md hover:shadow-sky-900/5 transition-all p-5 sm:p-6"
            >
              <div className="h-11 w-11 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center mb-4 group-hover:bg-sky-100 transition-colors">
                <it.i className="h-5 w-5 text-sky-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight" style={SERIF}>
                {it.t}
              </h3>
              <p className="text-[13px] sm:text-sm text-slate-600 mt-1.5 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- DOCTORS ----------------------------- */
type Doctor = {
  name: string;
  specialty: string;
  crm: string;
  photo: string;
  rating: number;
  slots: string[];
  next: string;
};

function Doctors() {
  const doctors: Doctor[] = [
    {
      name: "Especialista em Cardiologia",
      specialty: "Cardiologia",
      crm: "CRM XXX.XXX",
      photo: doc1Asset.url,
      rating: 4.9,
      slots: ["09:00", "14:00", "16:30"],
      next: "Hoje · 14:00",
    },
    {
      name: "Especialista em Clínica Geral",
      specialty: "Clínica Geral",
      crm: "CRM XXX.XXX",
      photo: doc2Asset.url,
      rating: 4.8,
      slots: ["10:30", "11:30", "15:00"],
      next: "Hoje · 10:30",
    },
    {
      name: "Especialista em Dermatologia",
      specialty: "Dermatologia",
      crm: "CRM XXX.XXX",
      photo: doc3Asset.url,
      rating: 5.0,
      slots: ["08:30", "13:00", "17:00"],
      next: "Amanhã · 08:30",
    },
    {
      name: "Especialista em Ortopedia",
      specialty: "Ortopedia",
      crm: "CRM XXX.XXX",
      photo: doc4Asset.url,
      rating: 4.7,
      slots: ["09:30", "11:00", "16:00"],
      next: "Hoje · 16:00",
    },
  ];
  return (
    <section id="medicos" className="py-20 sm:py-24 bg-slate-50/50 border-y border-slate-200/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.2em] text-sky-700 font-semibold mb-3">
            Equipe médica
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-slate-900 font-medium"
            style={SERIF}
          >
            Profissionais que se importam com você.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Médicos formados nas melhores instituições do país, prontos para te atender com calma e atenção.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {doctors.map((d) => (
            <article
              key={d.name}
              className="group rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:shadow-slate-900/5 hover:border-sky-200 transition-all overflow-hidden flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-sky-50">
                <img
                  src={d.photo}
                  alt={`Foto profissional de ${d.name}, ${d.specialty}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-amber-600 text-[11px] font-semibold ring-1 ring-amber-100">
                  <Star className="h-3 w-3 fill-current" />
                  {d.rating.toFixed(1)}
                </div>
              </div>
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <h3 className="text-[15px] font-semibold text-slate-900 tracking-tight" style={SERIF}>
                  {d.name}
                </h3>
                <p className="text-[12px] text-sky-700 font-medium mt-0.5">{d.specialty}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{d.crm}</p>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-600">
                  <Clock className="h-3 w-3 text-sky-600" /> Próximo horário:{" "}
                  <span className="text-slate-900 font-semibold">{d.next}</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-1.5">
                  {d.slots.map((s) => (
                    <div
                      key={s}
                      className="text-[11px] text-center py-1.5 rounded-md border border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 transition-colors cursor-pointer"
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- BOOKING ----------------------------- */
function BookingFlow() {
  return (
    <section id="agendamento" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.2em] text-sky-700 font-semibold mb-3">
            Agendamento online
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-slate-900 font-medium"
            style={SERIF}
          >
            Marque sua consulta em 30 segundos.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Sem ligar para a recepção, sem esperar retorno por e-mail. Escolha o profissional, a data e o horário.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl">
          <StepCard step="01" tag="Profissional" icon={Stethoscope}>
            <div className="space-y-2">
              {[
                { n: "Dra. Marina Costa", s: "Cardiologia", active: true, photo: doc1Asset.url },
                { n: "Dr. Felipe Andrade", s: "Clínica Geral", photo: doc2Asset.url },
                { n: "Dra. Helena Vargas", s: "Dermatologia", photo: doc3Asset.url },
              ].map((d) => (
                <div
                  key={d.n}
                  className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 transition-colors ${
                    d.active
                      ? "border-sky-300 bg-sky-50 ring-1 ring-sky-200"
                      : "border-slate-200 bg-white hover:border-sky-200"
                  }`}
                >
                  <div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-slate-200 shrink-0 bg-sky-50">
                    <img src={d.photo} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12px] font-semibold text-slate-900 truncate">{d.n}</div>
                    <div className="text-[10px] text-slate-500 truncate">{d.s}</div>
                  </div>
                  {d.active && <Check className="h-4 w-4 text-sky-600 shrink-0" />}
                </div>
              ))}
            </div>
          </StepCard>

          <StepCard step="02" tag="Data" icon={CalendarIcon}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold tracking-wide text-slate-700">Junho 2026</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-[0.16em]">Visão mensal</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
              {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
                <div key={i} className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  {d}
                </div>
              ))}
            </div>
            <MiniCalendar selected={12} today={9} busy={[4, 7, 15, 19, 22, 26]} />
            <div className="mt-3 flex items-center gap-3 text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-sky-500" /> Escolhido
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-slate-200" /> Ocupado
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
            <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-3">
              <div className="text-[10px] uppercase tracking-[0.18em] text-sky-700 font-semibold mb-1">
                Resumo
              </div>
              <p className="text-[12px] text-slate-700 leading-snug">
                <span className="font-semibold text-slate-900">Dra. Marina Costa</span> · Cardiologia · Qua 12/06 ·{" "}
                <span className="text-sky-700 font-semibold">14:00</span>
              </p>
              <div className="mt-3 flex items-center justify-between gap-2 text-[10px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-sky-600" /> Confirmação instantânea
                </span>
                <span className="text-sky-700 font-semibold">Confirmar →</span>
              </div>
            </div>
          </StepCard>
        </div>
      </div>
    </section>
  );
}

type SlotState = "free" | "busy" | "selected";
function SlotChip({ time, state }: { time: string; state: SlotState }) {
  const cls =
    state === "selected"
      ? "border-sky-500 bg-sky-600 text-white"
      : state === "busy"
        ? "border-slate-200 bg-slate-50 text-slate-400 line-through"
        : "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50";
  return (
    <div
      className={`rounded-md border text-[11px] font-medium text-center py-1.5 transition-colors cursor-pointer ${cls}`}
    >
      {time}
    </div>
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
    <div className="relative rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-sky-200 transition-all">
      <div className="absolute -top-3 -right-3 h-9 w-9 rounded-full ring-1 ring-sky-200 bg-white grid place-items-center text-[11px] font-semibold text-sky-700" style={SERIF}>
        {step}
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center">
          <Icon className="h-4.5 w-4.5 text-sky-600" />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900 tracking-tight" style={SERIF}>
            Escolha {tag.toLowerCase()}
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{tag}</div>
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
                  ? "bg-sky-600 text-white ring-1 ring-sky-700"
                  : isBusy
                    ? "bg-slate-100 text-slate-400 border border-slate-200"
                    : isToday
                      ? "bg-white text-slate-900 border border-sky-300"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-sky-300"
            }`}
          >
            {isDay ? d : ""}
          </div>
        );
      })}
    </div>
  );
}

/* ----------------------------- CONFIRMATIONS ----------------------------- */
function Confirmations() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50/50 border-y border-slate-200/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.2em] text-sky-700 font-semibold mb-3">
            WhatsApp da clínica
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-slate-900 font-medium"
            style={SERIF}
          >
            Confirmações e lembretes — sem ligações.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Você recebe a confirmação no momento do agendamento e o lembrete na manhã da consulta. Se precisar
            remarcar, é só responder.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 max-w-6xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full grid place-items-center bg-emerald-50 ring-1 ring-emerald-100">
                  <MessageCircle className="h-4.5 w-4.5 text-emerald-600" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-slate-900">Clínica Vitalis</div>
                  <div className="text-[11px] text-slate-500">+55 15 9810-2379</div>
                </div>
              </div>
              <span className="text-[10px] text-emerald-600 font-semibold inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Online
              </span>
            </div>

            <div className="space-y-2.5">
              <WaClinic
                tag="Confirmação · 14:31"
                text="Olá, Renato! Sua consulta com a Dra. Marina Costa (Cardiologia) está confirmada para quarta-feira, 12/06 às 14:00. Posso confirmar sua presença? ✅"
              />
              <PatientReply text="Sim, confirmado! 🙌" />
              <WaClinic
                tag="Lembrete · enviado às 08:00"
                text="Bom dia, Renato 👋 Lembrete carinhoso: sua consulta é hoje às 14:00. Endereço: Av. Paulista 1500, sala 802. Estamos te esperando!"
              />
              <PatientReply text="Posso remarcar para quinta?" />
              <WaClinic
                tag="Reagendamento"
                text="Claro! Temos quinta-feira (13/06) às 10:00 ou 16:30 com a Dra. Marina. Qual horário fica melhor pra você?"
              />
            </div>
          </div>

          <div className="space-y-4">
            <FeatureRow
              icon={CalendarCheck}
              title="Confirmação automática"
              desc="Disparada no momento do agendamento, com todos os detalhes da consulta."
            />
            <FeatureRow
              icon={BellRing}
              title="Lembrete na manhã da consulta"
              desc="Reduz faltas e respeita o tempo do paciente e do profissional."
            />
            <FeatureRow
              icon={MessageCircle}
              title="Reagendamento sem ligação"
              desc="O paciente responde no WhatsApp e o sistema oferece novos horários."
            />
            <FeatureRow
              icon={Phone}
              title="Recepção mais leve"
              desc="A equipe deixa de atender o telefone e foca no paciente presencial."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WaClinic({ tag, text }: { tag: string; text: string }) {
  return (
    <div className="rounded-2xl bg-emerald-50 border border-emerald-100 px-3.5 py-2.5 max-w-[88%]">
      <div className="flex items-center gap-1.5 mb-0.5 text-[10px] uppercase tracking-[0.18em] text-emerald-700 font-semibold">
        {tag}
      </div>
      <p className="text-[12.5px] leading-snug text-slate-700">{text}</p>
    </div>
  );
}

function PatientReply({ text }: { text: string }) {
  return (
    <div className="ml-auto rounded-2xl bg-sky-50 border border-sky-100 px-3.5 py-2 max-w-[78%]">
      <div className="text-[10px] uppercase tracking-[0.18em] text-sky-700 font-semibold mb-0.5">
        Você
      </div>
      <p className="text-[12.5px] leading-snug text-slate-700">{text}</p>
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
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex items-start gap-3 hover:border-sky-200 hover:shadow-sm transition-all">
      <div className="h-10 w-10 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center shrink-0">
        <Icon className="h-4.5 w-4.5 text-sky-600" />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-slate-900 tracking-tight" style={SERIF}>
          {title}
        </h3>
        <p className="text-[12.5px] text-slate-600 mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ----------------------------- RESULTS ----------------------------- */
function Results() {
  const stats = [
    { v: "96%", l: "Taxa de comparecimento", d: "Confirmação + lembrete reduzem no-show" },
    { v: "30s", l: "Tempo médio de agendamento", d: "Do clique à confirmação" },
    { v: "0", l: "Ligações para a recepção", d: "Tudo resolvido pelo WhatsApp" },
  ];
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.2em] text-sky-700 font-semibold mb-3">
            Resultados que importam
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-slate-900 font-medium"
            style={SERIF}
          >
            Uma clínica que respeita o seu tempo.
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
          {stats.map((s) => (
            <div
              key={s.l}
              className="rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-100 p-6 sm:p-7"
            >
              <div className="text-5xl sm:text-6xl text-sky-700 font-medium tracking-tight" style={SERIF}>
                {s.v}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-900">{s.l}</div>
              <p className="text-[12.5px] text-slate-600 mt-1 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- BENEFITS ----------------------------- */
function Benefits() {
  const items = [
    { i: HeartPulse, t: "Atendimento humanizado", d: "Tempo de consulta adequado e escuta atenta." },
    { i: ShieldCheck, t: "Médicos com CRM ativo", d: "Profissionais certificados e experientes." },
    { i: CalendarCheck, t: "Agenda sempre aberta", d: "Marque online a qualquer hora do dia." },
    { i: MapPin, t: "Localização privilegiada", d: "No coração da Avenida Paulista, com fácil acesso." },
  ];
  return (
    <section className="py-20 sm:py-24 bg-slate-50/50 border-y border-slate-200/70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.2em] text-sky-700 font-semibold mb-3">
            Por que a Vitalis
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-slate-900 font-medium"
            style={SERIF}
          >
            O cuidado começa antes da consulta.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((it) => (
            <div
              key={it.t}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 hover:shadow-md hover:border-sky-200 transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center mb-4">
                <it.i className="h-5 w-5 text-sky-600" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 tracking-tight" style={SERIF}>
                {it.t}
              </h3>
              <p className="text-[13px] text-slate-600 mt-1.5 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FINAL CTA ----------------------------- */
function FinalCTA() {
  return (
    <section id="contato" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-700 via-sky-600 to-sky-500 text-white p-8 sm:p-14">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-sky-100 font-semibold mb-3">
                Agende agora
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight font-medium"
                style={SERIF}
              >
                Sua saúde merece atenção. Marque sua consulta hoje.
              </h2>
              <p className="mt-5 text-sky-50 text-base sm:text-lg leading-relaxed max-w-xl">
                Atendimento humanizado, médicos experientes e agendamento simples — pelo site ou pelo WhatsApp.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                  onClick={() => track("whatsapp_click", { location: "final_cta_vitalis" })}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-sky-700 hover:bg-sky-50 font-semibold h-12 px-7 text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Falar no WhatsApp
                  </Button>
                </a>
                <a href="#agendamento" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-12 px-7 text-sm font-semibold bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60"
                  >
                    Agendar online <Send className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/95 text-slate-900 p-6 sm:p-7 ring-1 ring-white/40 shadow-xl shadow-sky-900/20">
              <div className="text-[11px] uppercase tracking-[0.2em] text-sky-700 font-semibold mb-3">
                Como chegar
              </div>
              <h3 className="text-xl font-semibold tracking-tight" style={SERIF}>
                Av. Paulista, 1500 · Sala 802
              </h3>
              <p className="text-sm text-slate-600 mt-1">Bela Vista · São Paulo · SP</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full bg-sky-50 grid place-items-center ring-1 ring-sky-100 shrink-0">
                    <Phone className="h-4 w-4 text-sky-600" />
                  </span>
                  <span><span className="text-slate-500 text-[12px] block">Telefone</span>(15) 9810-2379</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full bg-sky-50 grid place-items-center ring-1 ring-sky-100 shrink-0">
                    <Mail className="h-4 w-4 text-sky-600" />
                  </span>
                  <span><span className="text-slate-500 text-[12px] block">E-mail</span>contato@clinicavitalis.com.br</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full bg-sky-50 grid place-items-center ring-1 ring-sky-100 shrink-0">
                    <Clock className="h-4 w-4 text-sky-600" />
                  </span>
                  <span><span className="text-slate-500 text-[12px] block">Horário</span>Seg–Sex 08h–20h · Sáb 08h–13h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */
function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-slate-500">
        <div className="flex items-center gap-2">
          <HeartPulse className="h-4 w-4 text-sky-600" />
          <span className="font-semibold text-slate-700" style={SERIF}>
            Clínica Vitalis
          </span>
          <span>· Av. Paulista, 1500 · São Paulo</span>
        </div>
        <div className="text-center sm:text-right">
          © {new Date().getFullYear()} Clínica Vitalis. Site desenvolvido por{" "}
          <span className="text-slate-700 font-semibold">Imperius Digital</span>.
        </div>
      </div>
    </footer>
  );
}
