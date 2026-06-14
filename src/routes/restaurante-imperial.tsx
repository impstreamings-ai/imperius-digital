import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  UtensilsCrossed,
  Wine,
  Flame,
  ChefHat,
  Clock,
  CalendarCheck,
  MapPin,
  Phone,
  Mail,
  Star,
  Quote,
  Send,
  MessageCircle,
  Users,
  Calendar as CalendarIcon,
  Sparkles,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

import heroAsset from "@/assets/imperial-hero.jpg.asset.json";
import coverAsset from "@/assets/imperial-cover.jpg.asset.json";
import dish1 from "@/assets/imperial-dish1.jpg.asset.json";
import dish2 from "@/assets/imperial-dish2.jpg.asset.json";
import dish3 from "@/assets/imperial-dish3.jpg.asset.json";
import room from "@/assets/imperial-room.jpg.asset.json";
import chef from "@/assets/imperial-chef.jpg.asset.json";
import wine from "@/assets/imperial-wine.jpg.asset.json";

const track = (name: string, params: Record<string, unknown> = {}) =>
  trackEvent(name, params);

const WA_MESSAGE =
  "Olá! Gostaria de fazer uma reserva no Restaurante Imperial.";
const WA = `https://wa.me/5515981023792?text=${encodeURIComponent(WA_MESSAGE)}`;

// Brand palette — desejo, gastronomia, calor
const GRAPHITE = "#1A1613";
const GRAPHITE_SOFT = "#2A2421";
const BURGUNDY = "#7A1F2B";
const BURGUNDY_DEEP = "#5A1520";
const EMBER = "#D97A3C";
const CREAM = "#F5EFE6";
const PAPER = "#FBF6EE";
const MUTED = "#8C7F72";

export const Route = createFileRoute("/restaurante-imperial")({
  head: () => ({
    meta: [
      {
        title:
          "Restaurante Imperial | Gastronomia Contemporânea · Reservas",
      },
      {
        name: "description",
        content:
          "Restaurante Imperial: cozinha contemporânea, carta de vinhos premiada e experiência gastronômica em ambiente intimista. Reserve sua mesa.",
      },
      { property: "og:title", content: "Restaurante Imperial | Cozinha de Autor" },
      {
        property: "og:description",
        content:
          "Cozinha contemporânea, ingredientes selecionados e ambiente intimista. Uma experiência para celebrar.",
      },
      { property: "og:image", content: coverAsset.url },
      { property: "og:url", content: "https://imperius-digital.lovable.app/restaurante-imperial" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Restaurante Imperial" },
      { name: "twitter:image", content: coverAsset.url },
      {
        name: "twitter:description",
        content:
          "Cozinha contemporânea de autor e carta de vinhos premiada.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://imperius-digital.lovable.app/restaurante-imperial" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: ImperialLanding,
});

const SERIF = { fontFamily: '"Cormorant Garamond", "Times New Roman", serif' };
const SANS = { fontFamily: '"Inter", system-ui, sans-serif' };

function ImperialLanding() {
  return (
    <div
      className="min-h-screen antialiased overflow-x-hidden"
      style={{ ...SANS, background: PAPER, color: GRAPHITE }}
    >
      <Nav />
      <Hero />
      <TrustStrip />
      <Menu />
      <Experience />
      <Chef />
      <Reservation />
      <Testimonials />
      <Visit />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ----------------------------- NAV ----------------------------- */
function Nav() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b"
      style={{ background: "rgba(251,246,238,0.88)", borderColor: "rgba(26,22,19,0.08)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 min-w-0 group">
          <div
            className="h-9 w-9 rounded-full grid place-items-center shrink-0 transition"
            style={{ background: GRAPHITE, boxShadow: "0 4px 12px -4px rgba(26,22,19,0.4)" }}
          >
            <UtensilsCrossed className="h-4 w-4" style={{ color: EMBER }} />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span
              className="font-semibold text-[18px] tracking-tight truncate"
              style={{ ...SERIF, color: GRAPHITE }}
            >
              Imperial
            </span>
            <span
              className="text-[9.5px] uppercase tracking-[0.3em] hidden sm:block"
              style={{ color: MUTED }}
            >
              Cozinha · Vinhos · Experiência
            </span>
          </div>
        </a>
        <nav
          className="hidden md:flex items-center gap-7 text-[13px] font-medium"
          style={{ color: GRAPHITE_SOFT }}
        >
          <a href="#menu" className="hover:opacity-70 transition-opacity">Menu</a>
          <a href="#experiencia" className="hover:opacity-70 transition-opacity">Experiência</a>
          <a href="#chef" className="hover:opacity-70 transition-opacity">Chef</a>
          <a href="#reserva" className="hover:opacity-70 transition-opacity">Reservas</a>
        </nav>
        <a
          href="#reserva"
          className="shrink-0"
          onClick={() => track("imperial_cta_click", { location: "nav", destination: "booking" })}
        >
          <Button
            size="sm"
            className="text-white font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: GRAPHITE }}
          >
            <span className="sm:hidden">Reservar</span>
            <span className="hidden sm:inline">Reservar mesa</span>
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
      className="relative pt-20 pb-16 sm:pb-20 overflow-hidden"
      style={{ background: GRAPHITE }}
    >
      {/* full-bleed hero image */}
      <div className="absolute inset-0">
        <img
          src={heroAsset.url}
          alt="Salão intimista do Restaurante Imperial com banquettes de veludo bordô e velas acesas"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              `linear-gradient(180deg, rgba(26,22,19,0.55) 0%, rgba(26,22,19,0.7) 60%, ${GRAPHITE} 100%)`,
          }}
        />
        <div
          className="absolute -top-20 -right-20 h-[420px] w-[420px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "rgba(217,122,60,0.18)" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 sm:pt-24 pb-8 text-white">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] uppercase tracking-[0.24em] font-semibold mb-7"
            style={{
              borderColor: "rgba(217,122,60,0.5)",
              background: "rgba(26,22,19,0.5)",
              color: EMBER,
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: EMBER }} />
            Cozinha contemporânea · São Paulo
          </div>
          <h1
            className="text-[2.6rem] sm:text-[3.6rem] lg:text-[4.4rem] leading-[1.02] tracking-tight font-normal"
            style={{ ...SERIF, color: CREAM }}
          >
            Cada prato,
            <span className="block italic" style={{ color: EMBER }}>
              uma celebração.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
            Menu de autor, ingredientes selecionados e uma carta de vinhos premiada — servidos
            em um ambiente intimista pensado para o tempo da boa mesa.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row sm:items-center flex-wrap gap-3 sm:gap-4">
            <a
              href="#reserva"
              className="w-full sm:w-auto"
              onClick={() => track("imperial_cta_click", { location: "hero", destination: "booking" })}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto font-medium h-12 px-7 text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: EMBER, color: GRAPHITE }}
              >
                Reservar mesa <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto"
              onClick={() => track("imperial_cta_click", { location: "hero", destination: "menu" })}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-7 text-sm font-medium bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/60"
              >
                Ver o menu
              </Button>
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/75 max-w-md">
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4" style={{ color: EMBER }} /> Menu degustação
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4" style={{ color: EMBER }} /> Harmonização de vinhos
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4" style={{ color: EMBER }} /> Salão e bar privativo
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TRUST ----------------------------- */
function TrustStrip() {
  const items = [
    { n: "+12 anos", l: "à mesa de São Paulo" },
    { n: "4,9★", l: "Google · TripAdvisor" },
    { n: "+180", l: "rótulos na adega" },
    { n: "Chef próprio", l: "menu sazonal autoral" },
  ];
  return (
    <section className="border-b" style={{ borderColor: "rgba(26,22,19,0.08)", background: CREAM }}>
      <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.l} className="text-center md:text-left">
            <div
              className="text-[1.9rem] sm:text-[2.2rem] font-medium tracking-tight leading-none"
              style={{ ...SERIF, color: GRAPHITE }}
            >
              {it.n}
            </div>
            <div className="text-[11px] uppercase tracking-[0.22em] mt-2" style={{ color: MUTED }}>
              {it.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- MENU ----------------------------- */
type Dish = {
  img: string;
  alt: string;
  course: string;
  name: string;
  desc: string;
  price: string;
};

function Menu() {
  const items: Dish[] = [
    {
      img: dish1.url,
      alt: "Tartare de atum com abacate e crocante cítrico",
      course: "Entrada",
      name: "Tartare de Atum",
      desc: "Atum bluefin, abacate, ponzu cítrico e crocante de wonton.",
      price: "R$ 89",
    },
    {
      img: coverAsset.url,
      alt: "Bife de wagyu selado com redução de vinho tinto e legumes grelhados",
      course: "Principal",
      name: "Wagyu ao Vinho",
      desc: "Wagyu A5, redução de Malbec, brócolis tostado e flores comestíveis.",
      price: "R$ 248",
    },
    {
      img: dish2.url,
      alt: "Massa fresca com trufa e parmesão em cumbuca de cerâmica bordô",
      course: "Principal",
      name: "Tagliolini de Trufa",
      desc: "Massa fresca da casa, manteiga noisette, trufa negra e parmesão 24 meses.",
      price: "R$ 164",
    },
    {
      img: dish3.url,
      alt: "Sobremesa de chocolate com framboesa e folha de ouro",
      course: "Sobremesa",
      name: "Esfera de Chocolate",
      desc: "Mousse de chocolate 70%, geleia de framboesa e tuile dourado.",
      price: "R$ 64",
    },
  ];
  return (
    <section id="menu" className="py-20 sm:py-28" style={{ background: PAPER }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold mb-3" style={{ color: BURGUNDY }}>
            Menu da Estação
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[3rem] leading-[1.1] tracking-tight font-normal"
            style={{ ...SERIF, color: GRAPHITE }}
          >
            Pratos pensados para
            <span className="italic" style={{ color: BURGUNDY }}> serem lembrados</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: GRAPHITE_SOFT }}>
            O menu acompanha as estações e os melhores ingredientes do mercado. Selecionamos
            quatro destaques — o menu completo é apresentado à mesa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {items.map((d) => (
            <article
              key={d.name}
              className="group rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-0.5"
              style={{
                background: CREAM,
                border: "1px solid rgba(26,22,19,0.08)",
                boxShadow: "0 10px 28px -22px rgba(26,22,19,0.35)",
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden" style={{ background: GRAPHITE }}>
                <img
                  src={d.img}
                  alt={d.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  width={1280}
                  height={960}
                />
                <div
                  className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{ background: "rgba(26,22,19,0.92)", color: EMBER, backdropFilter: "blur(6px)" }}
                >
                  {d.course}
                </div>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl tracking-tight font-semibold leading-tight" style={{ ...SERIF, color: GRAPHITE }}>
                    {d.name}
                  </h3>
                  <span className="text-sm font-semibold whitespace-nowrap" style={{ ...SERIF, color: BURGUNDY }}>
                    {d.price}
                  </span>
                </div>
                <p className="text-[13px] mt-2 leading-relaxed flex-1" style={{ color: GRAPHITE_SOFT }}>
                  {d.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("imperial_cta_click", { location: "menu_footer" })}
          >
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 text-sm font-medium bg-transparent transition-colors"
              style={{ borderColor: GRAPHITE, color: GRAPHITE }}
            >
              <CalendarCheck className="mr-2 h-4 w-4" /> Reservar para experimentar
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- EXPERIENCE ----------------------------- */
function Experience() {
  return (
    <section
      id="experiencia"
      className="py-20 sm:py-24"
      style={{ background: CREAM }}
    >
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div
            className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ring-1 shadow-lg aspect-[4/3]"
            style={{ borderColor: "rgba(26,22,19,0.08)" }}
          >
            <img
              src={room.url}
              alt="Salão principal do Imperial com pendentes vintage e mesas postas à luz de velas"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={960}
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold mb-3" style={{ color: BURGUNDY }}>
            A experiência
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight font-normal"
            style={{ ...SERIF, color: GRAPHITE }}
          >
            Um jantar pensado em
            <span className="italic" style={{ color: BURGUNDY }}> cada detalhe</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: GRAPHITE_SOFT }}>
            Da luz ambiente ao pão da casa, da temperatura da taça ao tempo entre os pratos —
            tudo foi pensado para você desacelerar e aproveitar.
          </p>
          <ul className="mt-7 space-y-4">
            {[
              { i: Flame, t: "Cozinha aberta", d: "Acompanhe o ritmo da brasa e do forno a lenha direto do salão." },
              { i: Wine, t: "Adega curada", d: "Mais de 180 rótulos selecionados — do clássico ao autoral, com sommelier à disposição." },
              { i: Sparkles, t: "Menu degustação", d: "Sete tempos harmonizados com a estação. Reserva com 48h de antecedência." },
            ].map((b) => (
              <li key={b.t} className="flex items-start gap-3">
                <span
                  className="h-10 w-10 rounded-full grid place-items-center shrink-0"
                  style={{ background: GRAPHITE }}
                >
                  <b.i className="h-4.5 w-4.5" style={{ color: EMBER }} />
                </span>
                <div>
                  <div className="text-base font-semibold" style={{ ...SERIF, color: GRAPHITE }}>{b.t}</div>
                  <p className="text-[13.5px] mt-0.5 leading-relaxed" style={{ color: GRAPHITE_SOFT }}>{b.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CHEF ----------------------------- */
function Chef() {
  return (
    <section id="chef" className="py-20 sm:py-24" style={{ background: GRAPHITE, color: CREAM }}>
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div
            className="absolute -inset-6 rounded-[2.5rem] blur-3xl pointer-events-none"
            style={{ background: "rgba(217,122,60,0.18)" }}
          />
          <div
            className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ring-1 shadow-xl aspect-[4/5]"
            style={{ borderColor: "rgba(245,239,230,0.12)" }}
          >
            <img
              src={chef.url}
              alt="Chef executivo do Restaurante Imperial em sua cozinha"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              width={900}
              height={1120}
            />
          </div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold mb-3" style={{ color: EMBER }}>
            O Chef
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[3rem] leading-[1.1] tracking-tight font-normal"
            style={{ ...SERIF, color: CREAM }}
          >
            Chef Executivo —
            <span className="italic" style={{ color: EMBER }}> a alma da cozinha</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/80">
            Liderança gastronômica formada em escolas internacionais e com passagens por
            restaurantes premiados. Proposta clara: cozinha sazonal, técnica precisa e
            ingredientes em primeiro lugar.
          </p>
          <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-[13.5px] text-white/85">
            {[
              "Cozinha de autor",
              "Formação internacional",
              "Menu sazonal trocado a cada estação",
              "Parceria com produtores locais",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <ChefHat className="h-4 w-4 shrink-0" style={{ color: EMBER }} /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- RESERVATION ----------------------------- */
function Reservation() {
  return (
    <section id="reserva" className="py-20 sm:py-28" style={{ background: PAPER }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold mb-3" style={{ color: BURGUNDY }}>
            Reservas
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight font-normal"
            style={{ ...SERIF, color: GRAPHITE }}
          >
            Reserve a sua mesa em
            <span className="italic" style={{ color: BURGUNDY }}> poucos minutos</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: GRAPHITE_SOFT }}>
            Escolha o número de pessoas, o melhor dia e horário. A confirmação chega em
            instantes pelo WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl">
          <StepCard step="01" tag="Pessoas" icon={Users}>
            <div className="grid grid-cols-3 gap-1.5">
              {[2, 3, 4, 5, 6, 8].map((n) => (
                <div
                  key={n}
                  className="rounded-md border text-[12.5px] font-semibold text-center py-2.5 transition-colors"
                  style={
                    n === 4
                      ? { borderColor: GRAPHITE, background: GRAPHITE, color: EMBER }
                      : { borderColor: "rgba(26,22,19,0.12)", background: "#fff", color: GRAPHITE }
                  }
                >
                  {n}
                </div>
              ))}
            </div>
            <div className="mt-3 text-[11px]" style={{ color: MUTED }}>
              Grupos de 9+ pessoas: <span style={{ color: GRAPHITE, fontWeight: 600 }}>fale com a equipe</span>.
            </div>
          </StepCard>

          <StepCard step="02" tag="Data" icon={CalendarIcon}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold tracking-wide" style={{ color: GRAPHITE }}>Junho 2026</span>
              <span className="text-[10px] uppercase tracking-[0.16em]" style={{ color: MUTED }}>Visão mensal</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
              {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
                <div key={i} className="text-[9px] uppercase tracking-[0.18em]" style={{ color: MUTED }}>
                  {d}
                </div>
              ))}
            </div>
            <MiniCalendar selected={20} today={9} busy={[3, 7, 11, 18, 24, 27]} />
            <div className="mt-3 flex items-center gap-3 text-[10px]" style={{ color: MUTED }}>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm" style={{ background: GRAPHITE }} /> Escolhido
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm" style={{ background: "rgba(26,22,19,0.12)" }} /> Lotado
              </span>
            </div>
          </StepCard>

          <StepCard step="03" tag="Horário" icon={Clock}>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { t: "19:00", state: "free" },
                { t: "19:30", state: "busy" },
                { t: "20:00", state: "free" },
                { t: "20:30", state: "free" },
                { t: "21:00", state: "selected" },
                { t: "21:30", state: "free" },
                { t: "22:00", state: "free" },
                { t: "22:30", state: "free" },
                { t: "23:00", state: "busy" },
              ].map((s) => (
                <SlotChip key={s.t} time={s.t} state={s.state as SlotState} />
              ))}
            </div>
            <div className="mt-4 rounded-xl p-3" style={{ background: "rgba(122,31,43,0.08)", border: "1px solid rgba(122,31,43,0.2)" }}>
              <div className="text-[10px] uppercase tracking-[0.18em] font-semibold mb-1" style={{ color: BURGUNDY }}>
                Resumo
              </div>
              <p className="text-[12.5px] leading-snug" style={{ color: GRAPHITE }}>
                <span className="font-semibold">Mesa para 4</span> · Sáb 20/06 ·{" "}
                <span className="font-semibold" style={{ color: BURGUNDY }}>21:00</span>
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                onClick={() => track("imperial_cta_click", { location: "reservation_summary" })}
                className="mt-3 flex items-center justify-between gap-2 text-[10px]"
                style={{ color: MUTED }}
              >
                <span className="flex items-center gap-1">
                  <CalendarCheck className="h-3 w-3" style={{ color: BURGUNDY }} /> Confirmação por WhatsApp
                </span>
                <span className="font-semibold" style={{ color: BURGUNDY }}>Confirmar →</span>
              </a>
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
      <div className={base} style={{ background: GRAPHITE, borderColor: GRAPHITE, color: EMBER }}>
        {time}
      </div>
    );
  }
  if (state === "busy") {
    return (
      <div className={`${base} line-through`} style={{ borderColor: "rgba(26,22,19,0.12)", background: "rgba(26,22,19,0.04)", color: MUTED }}>
        {time}
      </div>
    );
  }
  return (
    <div className={base} style={{ borderColor: "rgba(26,22,19,0.12)", background: "#fff", color: GRAPHITE }}>
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
  icon: typeof Users;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative rounded-2xl p-5 sm:p-6 transition-all hover:-translate-y-0.5"
      style={{
        background: CREAM,
        border: "1px solid rgba(26,22,19,0.08)",
        boxShadow: "0 12px 32px -22px rgba(26,22,19,0.3)",
      }}
    >
      <div
        className="absolute -top-3 -right-3 h-9 w-9 rounded-full grid place-items-center text-[12px] font-semibold"
        style={{ background: PAPER, boxShadow: "inset 0 0 0 1px rgba(26,22,19,0.12)", color: GRAPHITE, ...SERIF }}
      >
        {step}
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full grid place-items-center" style={{ background: GRAPHITE }}>
          <Icon className="h-4.5 w-4.5" style={{ color: EMBER }} />
        </div>
        <div>
          <div className="text-[15px] font-semibold tracking-tight" style={{ ...SERIF, color: GRAPHITE }}>
            Escolha {tag.toLowerCase()}
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em]" style={{ color: MUTED }}>{tag}</div>
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
              className="aspect-square rounded-md flex items-center justify-center text-[10px] font-semibold"
              style={{ background: GRAPHITE, color: EMBER }}
            >
              {d}
            </div>
          );
        }
        if (isBusy) {
          return (
            <div
              key={i}
              className="aspect-square rounded-md flex items-center justify-center text-[10px] font-medium line-through"
              style={{ background: "rgba(26,22,19,0.04)", border: "1px solid rgba(26,22,19,0.1)", color: MUTED }}
            >
              {d}
            </div>
          );
        }
        if (isToday) {
          return (
            <div
              key={i}
              className="aspect-square rounded-md flex items-center justify-center text-[10px] font-semibold bg-white"
              style={{ border: `1px solid ${BURGUNDY}`, color: GRAPHITE }}
            >
              {d}
            </div>
          );
        }
        return (
          <div
            key={i}
            className="aspect-square rounded-md flex items-center justify-center text-[10px] font-medium bg-white"
            style={{ border: "1px solid rgba(26,22,19,0.1)", color: GRAPHITE }}
          >
            {d}
          </div>
        );
      })}
    </div>
  );
}

/* ----------------------------- TESTIMONIALS ----------------------------- */
function Testimonials() {
  const tts = [
    {
      n: "Cliente 01",
      r: "Aniversário de casamento",
      t: "Comemoramos nossa data no Imperial. Cada prato, cada vinho, cada minuto — perfeitos. É o nosso lugar.",
    },
    {
      n: "Cliente 02",
      r: "Cliente recorrente",
      t: "Combinação rara de cozinha, serviço e atmosfera. A equipe é diferenciada do começo ao fim.",
    },
    {
      n: "Cliente 03",
      r: "Jantar de domingo",
      t: "Atendimento impecável, mesmo com a casa cheia. As crianças se sentem em casa, os pais relaxam. Voltamos sempre.",
    },
  ];
  return (
    <section className="py-20 sm:py-24" style={{ background: CREAM }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold mb-3" style={{ color: BURGUNDY }}>
            À mesa com quem volta
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight font-normal"
            style={{ ...SERIF, color: GRAPHITE }}
          >
            Histórias que cabem
            <span className="italic" style={{ color: BURGUNDY }}> em um jantar</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {tts.map((t) => (
            <figure
              key={t.n}
              className="rounded-2xl p-6 sm:p-7 flex flex-col"
              style={{
                background: PAPER,
                border: "1px solid rgba(26,22,19,0.08)",
                boxShadow: "0 10px 28px -22px rgba(26,22,19,0.2)",
              }}
            >
              <Quote className="h-7 w-7 mb-4" style={{ color: EMBER }} />
              <blockquote className="text-[15px] leading-relaxed italic flex-1" style={{ ...SERIF, color: GRAPHITE_SOFT }}>
                "{t.t}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t flex items-center justify-between" style={{ borderColor: "rgba(26,22,19,0.08)" }}>
                <div>
                  <div className="text-sm font-semibold" style={{ color: GRAPHITE }}>{t.n}</div>
                  <div className="text-[12px]" style={{ color: MUTED }}>{t.r}</div>
                </div>
                <div className="flex items-center gap-0.5" style={{ color: EMBER }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- VISIT ----------------------------- */
function Visit() {
  return (
    <section id="visita" className="py-20 sm:py-24" style={{ background: PAPER }}>
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
        <div>
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold mb-3" style={{ color: BURGUNDY }}>
            Visite o Imperial
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight font-normal"
            style={{ ...SERIF, color: GRAPHITE }}
          >
            Um endereço pensado para
            <span className="italic" style={{ color: BURGUNDY }}> o tempo da boa mesa</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: GRAPHITE_SOFT }}>
            Salão principal, mezanino privativo e bar de coquetelaria autoral. Aceitamos
            reservas para eventos privados sob consulta.
          </p>
          <ul className="mt-7 space-y-3 text-sm" style={{ color: GRAPHITE_SOFT }}>
            <li className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full grid place-items-center shrink-0" style={{ background: GRAPHITE }}>
                <MapPin className="h-4 w-4" style={{ color: EMBER }} />
              </span>
              <span>
                <span className="text-[12px] block" style={{ color: MUTED }}>Endereço</span>
                Rua Haddock Lobo, 1.580 · Jardins · São Paulo · SP
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full grid place-items-center shrink-0" style={{ background: GRAPHITE }}>
                <Clock className="h-4 w-4" style={{ color: EMBER }} />
              </span>
              <span>
                <span className="text-[12px] block" style={{ color: MUTED }}>Funcionamento</span>
                Ter–Sáb 19h–00h · Dom 12h–17h · Segundas fechado
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full grid place-items-center shrink-0" style={{ background: GRAPHITE }}>
                <Phone className="h-4 w-4" style={{ color: EMBER }} />
              </span>
              <span>
                <span className="text-[12px] block" style={{ color: MUTED }}>WhatsApp</span>
                (15) 9810-2379
              </span>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div
            className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ring-1 shadow-lg aspect-[4/3]"
            style={{ borderColor: "rgba(26,22,19,0.08)" }}
          >
            <img
              src={wine.url}
              alt="Sommelier servindo vinho tinto em taça de cristal à luz de velas"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              width={1280}
              height={960}
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
    <section className="py-20 sm:py-28" style={{ background: PAPER }}>
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-white"
          style={{
            background:
              `linear-gradient(135deg, ${GRAPHITE} 0%, ${BURGUNDY_DEEP} 60%, ${BURGUNDY} 100%)`,
          }}
        >
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(217,122,60,0.22)" }} />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <div
                className="text-[11px] uppercase tracking-[0.24em] font-semibold mb-3"
                style={{ color: EMBER }}
              >
                A mesa está pronta
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight font-normal"
                style={SERIF}
              >
                Guarde esta noite para <span className="italic">você</span>.
              </h2>
              <p className="mt-5 text-white/85 text-base sm:text-lg leading-relaxed max-w-xl">
                Reservas online ou pelo WhatsApp — confirmação em minutos. Para datas
                especiais, conte com a nossa equipe para preparar cada detalhe.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                  onClick={() => track("whatsapp_click", { location: "final_cta_imperial" })}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto font-medium h-12 px-7 text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: EMBER, color: GRAPHITE }}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Falar no WhatsApp
                  </Button>
                </a>
                <a href="#reserva" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-12 px-7 text-sm font-medium bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60"
                  >
                    Reservar online <Send className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/95 p-6 sm:p-7 ring-1 ring-white/40 shadow-xl" style={{ color: GRAPHITE }}>
              <div className="text-[11px] uppercase tracking-[0.24em] font-semibold mb-3" style={{ color: BURGUNDY }}>
                Contato direto
              </div>
              <h3 className="text-xl font-semibold tracking-tight" style={SERIF}>
                Falamos com você todos os dias.
              </h3>
              <ul className="mt-5 space-y-3 text-sm" style={{ color: GRAPHITE_SOFT }}>
                <li className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full grid place-items-center shrink-0" style={{ background: GRAPHITE }}>
                    <Phone className="h-4 w-4" style={{ color: EMBER }} />
                  </span>
                  <span><span className="text-[12px] block" style={{ color: MUTED }}>Telefone / WhatsApp</span>(15) 9810-2379</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full grid place-items-center shrink-0" style={{ background: GRAPHITE }}>
                    <Mail className="h-4 w-4" style={{ color: EMBER }} />
                  </span>
                  <span><span className="text-[12px] block" style={{ color: MUTED }}>E-mail</span>reservas@restauranteimperial.com.br</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full grid place-items-center shrink-0" style={{ background: GRAPHITE }}>
                    <MapPin className="h-4 w-4" style={{ color: EMBER }} />
                  </span>
                  <span><span className="text-[12px] block" style={{ color: MUTED }}>Endereço</span>Rua Haddock Lobo, 1.580 · Jardins</span>
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
    <footer className="border-t py-10" style={{ borderColor: "rgba(26,22,19,0.08)", background: CREAM }}>
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px]" style={{ color: MUTED }}>
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="h-4 w-4" style={{ color: BURGUNDY }} />
          <span className="font-semibold" style={{ ...SERIF, color: GRAPHITE }}>
            Restaurante Imperial
          </span>
          <span>· Rua Haddock Lobo, 1.580 · São Paulo</span>
        </div>
        <div className="text-center sm:text-right">
          © {new Date().getFullYear()} Restaurante Imperial. Site desenvolvido por{" "}
          <span className="font-semibold" style={{ color: GRAPHITE }}>Imperius Digital</span>.
        </div>
      </div>
    </footer>
  );
}
