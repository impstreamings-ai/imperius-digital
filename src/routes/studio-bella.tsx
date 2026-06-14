import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Sparkles,
  Heart,
  Flower2,
  Gem,
  Sun,
  Droplet,
  Wand2,
  CalendarCheck,
  Clock,
  MessageCircle,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Star,
  Quote,
  Send,
  Calendar as CalendarIcon,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

import heroAsset from "@/assets/studio-bella-hero.jpg.asset.json";
import coverAsset from "@/assets/studio-bella-cover.jpg.asset.json";
import treat1 from "@/assets/studio-bella-treat1.jpg.asset.json";
import treat2 from "@/assets/studio-bella-treat2.jpg.asset.json";
import treat3 from "@/assets/studio-bella-treat3.jpg.asset.json";
import pro1 from "@/assets/studio-bella-pro1.jpg.asset.json";
import pro2 from "@/assets/studio-bella-pro2.jpg.asset.json";
import pro3 from "@/assets/studio-bella-pro3.jpg.asset.json";

const track = (name: string, params: Record<string, unknown> = {}) =>
  trackEvent(name, params);

const WA_MESSAGE =
  "Olá! Gostaria de agendar uma avaliação no Studio Bella Estética.";
const WA = `https://wa.me/5515981023792?text=${encodeURIComponent(WA_MESSAGE)}`;

export const Route = createFileRoute("/studio-bella")({
  head: () => ({
    meta: [
      {
        title:
          "Studio Bella Estética | Centro de Estética Premium em São Paulo",
      },
      {
        name: "description",
        content:
          "Studio Bella: estética facial, harmonização, laser e bem-estar em um centro premium em São Paulo. Avaliação personalizada e agendamento online.",
      },
      { property: "og:title", content: "Studio Bella Estética | Beleza e bem-estar premium" },
      {
        property: "og:description",
        content:
          "Centro de estética premium em São Paulo. Tratamentos faciais, harmonização, laser e protocolos personalizados.",
      },
      { property: "og:image", content: coverAsset.url },
      { property: "og:url", content: "https://imperius-digital.lovable.app/studio-bella" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Studio Bella Estética" },
      { name: "twitter:image", content: coverAsset.url },
      {
        name: "twitter:description",
        content:
          "Beleza, elegância e bem-estar em um centro de estética premium.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://imperius-digital.lovable.app/studio-bella" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: StudioBellaLanding,
});

const SERIF = { fontFamily: '"Cormorant Garamond", "Times New Roman", serif' };
const SANS = { fontFamily: '"Inter", system-ui, sans-serif' };

function StudioBellaLanding() {
  return (
    <div
      className="min-h-screen text-stone-800 antialiased overflow-x-hidden"
      style={{ ...SANS, background: "#FBF7F4" }}
    >
      <Nav />
      <Hero />
      <TrustStrip />
      <Treatments />
      <Experience />
      <Team />
      <Testimonials />
      <Booking />
      <Visit />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ----------------------------- NAV ----------------------------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-stone-200/60" style={{ background: "rgba(251,247,244,0.85)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 min-w-0 group">
          <div
            className="h-9 w-9 rounded-full grid place-items-center shrink-0 transition"
            style={{ background: "#F5E6F0", boxShadow: "inset 0 0 0 1px #E8D2E0" }}
          >
            <Flower2 className="h-4.5 w-4.5" style={{ color: "#9B5C8A" }} />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span
              className="font-medium text-[17px] tracking-tight truncate text-stone-900"
              style={SERIF}
            >
              Studio Bella
            </span>
            <span className="text-[9.5px] uppercase tracking-[0.25em] text-stone-500 hidden sm:block">
              Estética · Beleza · Bem-estar
            </span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-[13px] text-stone-600 font-medium">
          <a href="#tratamentos" className="hover:text-stone-900 transition-colors">Tratamentos</a>
          <a href="#equipe" className="hover:text-stone-900 transition-colors">Equipe</a>
          <a href="#agendamento" className="hover:text-stone-900 transition-colors">Agendamento</a>
          <a href="#visita" className="hover:text-stone-900 transition-colors">Visite-nos</a>
        </nav>
        <a
          href="#agendamento"
          className="shrink-0"
          onClick={() => track("bella_cta_click", { location: "nav", destination: "booking" })}
        >
          <Button
            size="sm"
            className="text-white font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#9B5C8A" }}
          >
            <span className="sm:hidden">Agendar</span>
            <span className="hidden sm:inline">Agendar avaliação</span>
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
      className="relative pt-28 pb-16 sm:pb-24"
      style={{
        background:
          "linear-gradient(180deg, #F7EDF2 0%, #FBF7F4 70%, #FBF7F4 100%)",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] uppercase tracking-[0.22em] font-semibold mb-7"
            style={{
              borderColor: "#E8D2E0",
              background: "#FBEFF6",
              color: "#7A4570",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#C58FB2" }} />
            Centro de Estética Premium · São Paulo
          </div>
          <h1
            className="text-[2.5rem] sm:text-[3.4rem] lg:text-[4rem] leading-[1.02] tracking-tight text-stone-900 font-normal"
            style={SERIF}
          >
            A sua beleza
            <span className="block italic" style={{ color: "#9B5C8A" }}>
              merece um cuidado raro.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-stone-600 text-base sm:text-lg leading-relaxed">
            Estética facial avançada, harmonização, laser e protocolos personalizados em um
            ambiente acolhedor, discreto e sofisticado — pensado para quem busca resultados
            naturais e uma experiência verdadeiramente premium.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row sm:items-center flex-wrap gap-3 sm:gap-4">
            <a
              href="#agendamento"
              className="w-full sm:w-auto"
              onClick={() => track("bella_cta_click", { location: "hero", destination: "booking" })}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-white font-medium h-12 px-7 text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "#9B5C8A" }}
              >
                Agendar avaliação <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href="#tratamentos"
              className="w-full sm:w-auto"
              onClick={() => track("bella_cta_click", { location: "hero", destination: "treatments" })}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-7 text-sm font-medium bg-white text-stone-700 hover:text-stone-900 transition-colors"
                style={{ borderColor: "#E8D2E0" }}
              >
                Conhecer tratamentos
              </Button>
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-stone-600 max-w-md">
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4" style={{ color: "#9B5C8A" }} /> Avaliação personalizada
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4" style={{ color: "#9B5C8A" }} /> Profissionais especializadas
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4" style={{ color: "#9B5C8A" }} /> Ambiente discreto
            </li>
          </ul>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-4 sm:-inset-8 rounded-[2.5rem] blur-3xl pointer-events-none"
            style={{ background: "rgba(229,170,205,0.35)" }}
          />
          <div
            className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ring-1 shadow-xl aspect-[4/3]"
            style={{ borderColor: "#E8D2E0", boxShadow: "0 30px 60px -30px rgba(122,69,112,0.35)" }}
          >
            <img
              src={heroAsset.url}
              alt="Sala de tratamento premium do Studio Bella com orquídeas lilás e luz natural"
              className="absolute inset-0 h-full w-full object-cover"
              width={1600}
              height={1200}
            />
          </div>
          <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 bg-white rounded-2xl shadow-lg ring-1 ring-stone-200 px-4 py-3">
            <div
              className="h-10 w-10 rounded-full grid place-items-center"
              style={{ background: "#F5E6F0" }}
            >
              <CalendarCheck className="h-5 w-5" style={{ color: "#9B5C8A" }} />
            </div>
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-semibold">Próxima sessão</div>
              <div className="text-[13px] font-semibold text-stone-800">Hoje · 15:30 · Limpeza Premium</div>
            </div>
          </div>
          <div
            className="hidden sm:flex absolute -top-5 -right-3 items-center gap-2 bg-white rounded-full shadow-md ring-1 ring-stone-200 pl-2 pr-3.5 py-1.5"
          >
            <div className="flex -space-x-1.5">
              <span className="h-6 w-6 rounded-full ring-2 ring-white overflow-hidden" style={{ background: "#F5E6F0" }}>
                <img src={pro1.url} alt="" className="h-full w-full object-cover" />
              </span>
              <span className="h-6 w-6 rounded-full ring-2 ring-white overflow-hidden" style={{ background: "#F5E6F0" }}>
                <img src={pro2.url} alt="" className="h-full w-full object-cover" />
              </span>
              <span className="h-6 w-6 rounded-full ring-2 ring-white overflow-hidden" style={{ background: "#F5E6F0" }}>
                <img src={pro3.url} alt="" className="h-full w-full object-cover" />
              </span>
            </div>
            <span className="text-[11px] text-stone-700 font-semibold">Equipe especializada</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TRUST ----------------------------- */
function TrustStrip() {
  const items = [
    { n: "+8 anos", l: "cuidando da sua beleza" },
    { n: "+12.000", l: "clientes satisfeitas" },
    { n: "+25", l: "protocolos exclusivos" },
    { n: "4,9★", l: "avaliação Google" },
  ];
  return (
    <section className="border-y" style={{ borderColor: "#EADFE6", background: "#F4E9EF" }}>
      <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.l} className="text-center md:text-left">
            <div className="text-[1.9rem] sm:text-[2.2rem] text-stone-900 font-medium tracking-tight leading-none" style={SERIF}>
              {it.n}
            </div>
            <div className="text-[11px] text-stone-500 uppercase tracking-[0.2em] mt-2">{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- TREATMENTS ----------------------------- */
function Treatments() {
  const items = [
    { i: Sparkles, t: "Estética Facial", d: "Limpeza de pele profunda, peeling, microagulhamento e protocolos avançados de rejuvenescimento.", img: treat1.url, alt: "Produtos premium de skincare sobre mármore branco" },
    { i: Wand2, t: "Harmonização Facial", d: "Toxina, preenchimento, bioestimulador e ultraformer com técnica natural e resultado sob medida.", img: undefined, alt: "" },
    { i: Sun, t: "Depilação a Laser", d: "Tecnologia de diodo de alta potência para resultados duradouros, com conforto e segurança.", img: treat2.url, alt: "Sala de laser com equipamento premium e óculos de proteção" },
    { i: Heart, t: "Estética Corporal", d: "Modeladora, criofrequência, drenagem e protocolos pós-parto e pós-bariátrico." },
    { i: Droplet, t: "Cuidados com a Pele", d: "Acne, melasma, manchas e tratamentos personalizados com avaliação dermatofuncional." },
    { i: Gem, t: "Day Spa Premium", d: "Massagem relaxante, ritual facial e momento exclusivo para você desacelerar.", img: treat3.url, alt: "Lounge de relaxamento premium do Studio Bella" },
  ];
  return (
    <section id="tratamentos" className="py-20 sm:py-28" style={{ background: "#FBF7F4" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B5C8A" }}>
            Tratamentos
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[3rem] leading-[1.1] tracking-tight text-stone-900 font-normal"
            style={SERIF}
          >
            Protocolos pensados para
            <span className="italic" style={{ color: "#9B5C8A" }}> realçar você</span>.
          </h2>
          <p className="mt-5 text-stone-600 text-base sm:text-lg leading-relaxed">
            Cada protocolo é personalizado após avaliação, respeitando seu tempo, sua pele e
            seus objetivos. Resultado natural sempre vem antes do resultado óbvio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((it) => (
            <article
              key={it.t}
              className="group rounded-2xl bg-white overflow-hidden flex flex-col transition-all hover:-translate-y-0.5"
              style={{
                border: "1px solid #EADFE6",
                boxShadow: "0 8px 24px -16px rgba(122,69,112,0.18)",
              }}
            >
              {it.img && (
                <div className="relative aspect-[4/3] overflow-hidden" style={{ background: "#F5E6F0" }}>
                  <img
                    src={it.img}
                    alt={it.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    width={1200}
                    height={900}
                  />
                </div>
              )}
              <div className="p-6 sm:p-7 flex-1">
                <div
                  className="h-11 w-11 rounded-full grid place-items-center mb-4"
                  style={{ background: "#F5E6F0" }}
                >
                  <it.i className="h-5 w-5" style={{ color: "#9B5C8A" }} />
                </div>
                <h3 className="text-xl text-stone-900 tracking-tight font-medium" style={SERIF}>
                  {it.t}
                </h3>
                <p className="text-[13.5px] text-stone-600 mt-2 leading-relaxed">{it.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- EXPERIENCE ----------------------------- */
function Experience() {
  return (
    <section className="py-20 sm:py-24" style={{ background: "#F4E9EF" }}>
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ring-1 shadow-lg aspect-[4/3]" style={{ borderColor: "#E8D2E0" }}>
            <img
              src={coverAsset.url}
              alt="Recepção elegante do Studio Bella com mármore branco e flores lilás"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1000}
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B5C8A" }}>
            Experiência Bella
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-stone-900 font-normal" style={SERIF}>
            Um <span className="italic" style={{ color: "#9B5C8A" }}>refúgio</span> em meio
            ao ritmo da cidade.
          </h2>
          <p className="mt-5 text-stone-600 text-base sm:text-lg leading-relaxed">
            Recebemos cada cliente com tempo, atenção e privacidade. Salas individuais,
            aromas que acolhem e uma equipe que escuta antes de propor.
          </p>
          <ul className="mt-7 space-y-4">
            {[
              { i: Heart, t: "Acolhimento sem pressa", d: "Avaliação detalhada e plano que respeita seu momento." },
              { i: ShieldCheck, t: "Segurança em primeiro lugar", d: "Protocolos clínicos rigorosos e produtos de alta qualidade." },
              { i: Gem, t: "Resultado natural", d: "Realçar — nunca padronizar — a sua beleza única." },
            ].map((b) => (
              <li key={b.t} className="flex items-start gap-3">
                <span
                  className="h-10 w-10 rounded-full grid place-items-center shrink-0"
                  style={{ background: "#FBF7F4", boxShadow: "inset 0 0 0 1px #E8D2E0" }}
                >
                  <b.i className="h-4.5 w-4.5" style={{ color: "#9B5C8A" }} />
                </span>
                <div>
                  <div className="text-base text-stone-900 font-medium" style={SERIF}>{b.t}</div>
                  <p className="text-[13.5px] text-stone-600 mt-0.5 leading-relaxed">{b.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TEAM ----------------------------- */
type Pro = { name: string; role: string; reg: string; photo: string; rating: number; spec: string };

function Team() {
  const team: Pro[] = [
    {
      name: "Diretora Clínica",
      role: "Harmonização facial",
      reg: "Registro XX.XXX",
      photo: pro2.url,
      rating: 5.0,
      spec: "Harmonização facial",
    },
    {
      name: "Esteticista Sênior",
      role: "Estética avançada",
      reg: "Especialista facial",
      photo: pro1.url,
      rating: 4.9,
      spec: "Estética avançada",
    },
    {
      name: "Dermato-funcional",
      role: "Laser & corporal",
      reg: "Especialista corporal",
      photo: pro3.url,
      rating: 4.9,
      spec: "Laser & corporal",
    },
  ];
  return (
    <section id="equipe" className="py-20 sm:py-28" style={{ background: "#FBF7F4" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B5C8A" }}>
            Equipe Bella
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-stone-900 font-normal" style={SERIF}>
            Profissionais que cuidam de você
            <span className="italic" style={{ color: "#9B5C8A" }}> como cuidam de si</span>.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {team.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl bg-white overflow-hidden flex flex-col transition-all hover:-translate-y-0.5"
              style={{
                border: "1px solid #EADFE6",
                boxShadow: "0 8px 24px -16px rgba(122,69,112,0.18)",
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden" style={{ background: "#F5E6F0" }}>
                <img
                  src={p.photo}
                  alt={`Retrato profissional de ${p.name}, ${p.role}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  width={900}
                  height={1100}
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur text-amber-600 text-[11px] font-semibold ring-1 ring-amber-100">
                  <Star className="h-3 w-3 fill-current" />
                  {p.rating.toFixed(1)}
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg text-stone-900 tracking-tight font-medium" style={SERIF}>
                  {p.name}
                </h3>
                <p className="text-[12.5px] font-medium mt-0.5" style={{ color: "#9B5C8A" }}>{p.role}</p>
                <p className="text-[11.5px] text-stone-500 mt-0.5">{p.reg}</p>
                <div
                  className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium"
                  style={{ background: "#F5E6F0", color: "#7A4570" }}
                >
                  <Sparkles className="h-3 w-3" /> {p.spec}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TESTIMONIALS ----------------------------- */
function Testimonials() {
  const tts = [
    {
      n: "Cliente 01",
      r: "Cliente recorrente",
      t: "Entenderam o que eu queria sem que eu precisasse explicar. Resultado discreto, elegante, exatamente como pedi.",
    },
    {
      n: "Cliente 02",
      r: "Harmonização facial",
      t: "Saí me sentindo a melhor versão de mim. Atendimento impecável, ambiente de outro nível.",
    },
    {
      n: "Cliente 03",
      r: "Programa anual",
      t: "É o único lugar em que confio o meu rosto. A equipe é cirúrgica e humana ao mesmo tempo.",
    },
  ];
  return (
    <section className="py-20 sm:py-24" style={{ background: "#F4E9EF" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B5C8A" }}>
            Depoimentos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-stone-900 font-normal" style={SERIF}>
            Quem confia, <span className="italic" style={{ color: "#9B5C8A" }}>volta sempre</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {tts.map((t) => (
            <figure
              key={t.n}
              className="rounded-2xl bg-white p-6 sm:p-7 flex flex-col"
              style={{
                border: "1px solid #EADFE6",
                boxShadow: "0 8px 24px -16px rgba(122,69,112,0.18)",
              }}
            >
              <Quote className="h-7 w-7 mb-4" style={{ color: "#C58FB2" }} />
              <blockquote className="text-[15px] text-stone-700 leading-relaxed italic flex-1" style={SERIF}>
                "{t.t}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t" style={{ borderColor: "#EADFE6" }}>
                <div className="text-sm font-medium text-stone-900">{t.n}</div>
                <div className="text-[12px] text-stone-500">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- BOOKING ----------------------------- */
function Booking() {
  return (
    <section id="agendamento" className="py-20 sm:py-28" style={{ background: "#FBF7F4" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B5C8A" }}>
            Agendamento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-stone-900 font-normal" style={SERIF}>
            Marque a sua avaliação em <span className="italic" style={{ color: "#9B5C8A" }}>poucos minutos</span>.
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Escolha o tratamento, a profissional e o melhor horário. Você recebe a confirmação
            no WhatsApp em instantes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl">
          <StepCard step="01" tag="Tratamento" icon={Sparkles}>
            <div className="space-y-2">
              {[
                { n: "Avaliação facial", s: "Sem custo · 30 min", active: true },
                { n: "Limpeza Premium", s: "Estética facial · 90 min" },
                { n: "Harmonização facial", s: "Consulta avaliativa" },
                { n: "Depilação a laser", s: "Sessão · variável" },
              ].map((d) => (
                <div
                  key={d.n}
                  className="flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-colors"
                  style={
                    d.active
                      ? { borderColor: "#C58FB2", background: "#FBEFF6" }
                      : { borderColor: "#EADFE6", background: "#fff" }
                  }
                >
                  <div className="h-8 w-8 rounded-full grid place-items-center shrink-0" style={{ background: "#F5E6F0" }}>
                    <Sparkles className="h-4 w-4" style={{ color: "#9B5C8A" }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12.5px] font-medium text-stone-900 truncate">{d.n}</div>
                    <div className="text-[10.5px] text-stone-500 truncate">{d.s}</div>
                  </div>
                  {d.active && <Check className="h-4 w-4 shrink-0" style={{ color: "#9B5C8A" }} />}
                </div>
              ))}
            </div>
          </StepCard>

          <StepCard step="02" tag="Data" icon={CalendarIcon}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold tracking-wide text-stone-700">Junho 2026</span>
              <span className="text-[10px] text-stone-500 uppercase tracking-[0.16em]">Visão mensal</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
              {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
                <div key={i} className="text-[9px] uppercase tracking-[0.18em] text-stone-400">
                  {d}
                </div>
              ))}
            </div>
            <MiniCalendar selected={14} today={9} busy={[3, 7, 11, 18, 21, 25]} />
            <div className="mt-3 flex items-center gap-3 text-[10px] text-stone-500">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm" style={{ background: "#9B5C8A" }} /> Escolhido
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-stone-200" /> Ocupado
              </span>
            </div>
          </StepCard>

          <StepCard step="03" tag="Horário" icon={Clock}>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { t: "09:00", state: "free" },
                { t: "10:30", state: "busy" },
                { t: "11:30", state: "free" },
                { t: "13:30", state: "free" },
                { t: "14:30", state: "busy" },
                { t: "15:30", state: "selected" },
                { t: "16:30", state: "free" },
                { t: "17:30", state: "free" },
                { t: "18:30", state: "busy" },
              ].map((s) => (
                <SlotChip key={s.t} time={s.t} state={s.state as SlotState} />
              ))}
            </div>
            <div className="mt-4 rounded-xl p-3" style={{ background: "#FBEFF6", border: "1px solid #E8D2E0" }}>
              <div className="text-[10px] uppercase tracking-[0.18em] font-semibold mb-1" style={{ color: "#7A4570" }}>
                Resumo
              </div>
              <p className="text-[12.5px] text-stone-700 leading-snug">
                <span className="font-semibold text-stone-900">Avaliação facial</span> · com Dra. Camila · Sáb 14/06 ·{" "}
                <span className="font-semibold" style={{ color: "#9B5C8A" }}>15:30</span>
              </p>
              <div className="mt-3 flex items-center justify-between gap-2 text-[10px] text-stone-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" style={{ color: "#9B5C8A" }} /> Confirmação por WhatsApp
                </span>
                <span className="font-semibold" style={{ color: "#9B5C8A" }}>Confirmar →</span>
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
  const base = "rounded-md border text-[11px] font-medium text-center py-1.5 transition-colors cursor-pointer";
  if (state === "selected") {
    return (
      <div className={base} style={{ background: "#9B5C8A", borderColor: "#7A4570", color: "#fff" }}>
        {time}
      </div>
    );
  }
  if (state === "busy") {
    return (
      <div className={`${base} text-stone-400 line-through`} style={{ borderColor: "#EADFE6", background: "#F4E9EF" }}>
        {time}
      </div>
    );
  }
  return (
    <div className={`${base} text-stone-700 hover:text-stone-900`} style={{ borderColor: "#EADFE6", background: "#fff" }}>
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
  icon: typeof Sparkles;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative rounded-2xl bg-white p-5 sm:p-6 transition-all hover:-translate-y-0.5"
      style={{
        border: "1px solid #EADFE6",
        boxShadow: "0 10px 28px -18px rgba(122,69,112,0.22)",
      }}
    >
      <div
        className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-white grid place-items-center text-[11px] font-semibold"
        style={{ boxShadow: "inset 0 0 0 1px #E8D2E0", color: "#7A4570", ...SERIF }}
      >
        {step}
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-xl grid place-items-center" style={{ background: "#F5E6F0" }}>
          <Icon className="h-4.5 w-4.5" style={{ color: "#9B5C8A" }} />
        </div>
        <div>
          <div className="text-[15px] font-medium text-stone-900 tracking-tight" style={SERIF}>
            Escolha {tag.toLowerCase()}
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500">{tag}</div>
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
  const days = Array.from({ length: 35 }, (_, i) => i - 1);
  const busySet = new Set(busy);
  return (
    <div className="grid grid-cols-7 gap-1">
      {days.map((d, i) => {
        const isDay = d >= 1 && d <= 30;
        const isBusy = isDay && busySet.has(d);
        const isSelected = d === selected;
        const isToday = d === today;
        if (!isDay) return <div key={i} className="aspect-square" />;
        if (isSelected) {
          return (
            <div
              key={i}
              className="aspect-square rounded-md flex items-center justify-center text-[10px] font-semibold text-white"
              style={{ background: "#9B5C8A" }}
            >
              {d}
            </div>
          );
        }
        if (isBusy) {
          return (
            <div
              key={i}
              className="aspect-square rounded-md flex items-center justify-center text-[10px] font-medium text-stone-400 line-through"
              style={{ background: "#F4E9EF", border: "1px solid #EADFE6" }}
            >
              {d}
            </div>
          );
        }
        if (isToday) {
          return (
            <div
              key={i}
              className="aspect-square rounded-md flex items-center justify-center text-[10px] font-semibold text-stone-900 bg-white"
              style={{ border: "1px solid #C58FB2" }}
            >
              {d}
            </div>
          );
        }
        return (
          <div
            key={i}
            className="aspect-square rounded-md flex items-center justify-center text-[10px] font-medium text-stone-700 bg-white hover:text-stone-900"
            style={{ border: "1px solid #EADFE6" }}
          >
            {d}
          </div>
        );
      })}
    </div>
  );
}

/* ----------------------------- VISIT ----------------------------- */
function Visit() {
  return (
    <section id="visita" className="py-20 sm:py-24" style={{ background: "#F4E9EF" }}>
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B5C8A" }}>
            Visite o Studio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-stone-900 font-normal" style={SERIF}>
            Um endereço pensado para o seu <span className="italic" style={{ color: "#9B5C8A" }}>cuidado</span>.
          </h2>
          <p className="mt-5 text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Estacionamento com manobrista, sala de espera privativa e horários que se adaptam
            à sua rotina. Atendemos de terça a sábado.
          </p>
          <ul className="mt-7 space-y-3 text-sm text-stone-700">
            <li className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full grid place-items-center shrink-0" style={{ background: "#FBF7F4", boxShadow: "inset 0 0 0 1px #E8D2E0" }}>
                <MapPin className="h-4 w-4" style={{ color: "#9B5C8A" }} />
              </span>
              <span>
                <span className="text-stone-500 text-[12px] block">Endereço</span>
                Rua Oscar Freire, 902 · Sala 304 · Jardins · São Paulo · SP
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full grid place-items-center shrink-0" style={{ background: "#FBF7F4", boxShadow: "inset 0 0 0 1px #E8D2E0" }}>
                <Clock className="h-4 w-4" style={{ color: "#9B5C8A" }} />
              </span>
              <span>
                <span className="text-stone-500 text-[12px] block">Horário</span>
                Ter–Sex 10h–20h · Sáb 09h–17h
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full grid place-items-center shrink-0" style={{ background: "#FBF7F4", boxShadow: "inset 0 0 0 1px #E8D2E0" }}>
                <Phone className="h-4 w-4" style={{ color: "#9B5C8A" }} />
              </span>
              <span>
                <span className="text-stone-500 text-[12px] block">WhatsApp</span>
                (15) 9810-2379
              </span>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ring-1 shadow-lg aspect-[4/3]" style={{ borderColor: "#E8D2E0" }}>
            <img
              src={treat3.url}
              alt="Lounge de relaxamento do Studio Bella"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              width={1200}
              height={1200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FINAL CTA ----------------------------- */
function FinalCTA() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#FBF7F4" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-white"
          style={{
            background:
              "linear-gradient(135deg, #7A4570 0%, #9B5C8A 50%, #C58FB2 100%)",
          }}
        >
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#F7DCE9" }}>
                Comece agora
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight font-normal" style={SERIF}>
                Você merece um cuidado <span className="italic">à altura</span> da sua história.
              </h2>
              <p className="mt-5 text-white/85 text-base sm:text-lg leading-relaxed max-w-xl">
                Conte para nós o que você gostaria de tratar. Preparamos uma avaliação
                personalizada — sem pressão, sem compromisso.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                  onClick={() => track("whatsapp_click", { location: "final_cta_bella" })}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-stone-900 hover:bg-stone-50 font-medium h-12 px-7 text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Falar no WhatsApp
                  </Button>
                </a>
                <a href="#agendamento" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-12 px-7 text-sm font-medium bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60"
                  >
                    Agendar online <Send className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/95 text-stone-900 p-6 sm:p-7 ring-1 ring-white/40 shadow-xl">
              <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: "#9B5C8A" }}>
                Contato direto
              </div>
              <h3 className="text-xl font-medium tracking-tight" style={SERIF}>
                Estamos prontas para receber você.
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-stone-700">
                <li className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full grid place-items-center shrink-0" style={{ background: "#F5E6F0" }}>
                    <Phone className="h-4 w-4" style={{ color: "#9B5C8A" }} />
                  </span>
                  <span><span className="text-stone-500 text-[12px] block">Telefone / WhatsApp</span>(15) 9810-2379</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full grid place-items-center shrink-0" style={{ background: "#F5E6F0" }}>
                    <Mail className="h-4 w-4" style={{ color: "#9B5C8A" }} />
                  </span>
                  <span><span className="text-stone-500 text-[12px] block">E-mail</span>contato@studiobella.com.br</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full grid place-items-center shrink-0" style={{ background: "#F5E6F0" }}>
                    <MapPin className="h-4 w-4" style={{ color: "#9B5C8A" }} />
                  </span>
                  <span><span className="text-stone-500 text-[12px] block">Endereço</span>Rua Oscar Freire, 902 · Sala 304</span>
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
    <footer className="border-t py-10" style={{ borderColor: "#EADFE6", background: "#FBF7F4" }}>
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-stone-500">
        <div className="flex items-center gap-2">
          <Flower2 className="h-4 w-4" style={{ color: "#9B5C8A" }} />
          <span className="font-medium text-stone-700" style={SERIF}>
            Studio Bella Estética
          </span>
          <span>· Rua Oscar Freire, 902 · São Paulo</span>
        </div>
        <div className="text-center sm:text-right">
          © {new Date().getFullYear()} Studio Bella. Site desenvolvido por{" "}
          <span className="text-stone-700 font-semibold">Imperius Digital</span>.
        </div>
      </div>
    </footer>
  );
}
