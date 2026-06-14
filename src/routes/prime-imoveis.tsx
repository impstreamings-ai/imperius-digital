import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Building2,
  Home,
  KeyRound,
  ShieldCheck,
  TrendingUp,
  Handshake,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Quote,
  Send,
  MessageCircle,
  Bed,
  Bath,
  Car,
  Maximize2,
  Search,
  Award,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

import heroAsset from "@/assets/prime-hero.jpg.asset.json";
import coverAsset from "@/assets/prime-cover.jpg.asset.json";
import prop1 from "@/assets/prime-prop1.jpg.asset.json";
import prop2 from "@/assets/prime-prop2.jpg.asset.json";
import prop3 from "@/assets/prime-prop3.jpg.asset.json";
import broker1 from "@/assets/prime-broker1.jpg.asset.json";
import broker2 from "@/assets/prime-broker2.jpg.asset.json";
import broker3 from "@/assets/prime-broker3.jpg.asset.json";

const track = (name: string, params: Record<string, unknown> = {}) =>
  trackEvent(name, params);

const WA_MESSAGE =
  "Olá! Tenho interesse em conhecer os imóveis da Prime Imóveis.";
const WA = `https://wa.me/5515981023792?text=${encodeURIComponent(WA_MESSAGE)}`;

// Brand palette — patrimônio, segurança, conquista
const NAVY = "#0E1E3A";
const NAVY_DEEP = "#081229";
const NAVY_SOFT = "#1B2C52";
const TITANIUM = "#8A93A6";
const TITANIUM_LIGHT = "#E5E8EE";
const CANVAS = "#F6F7F9";
const GOLD = "#B8945A";

export const Route = createFileRoute("/prime-imoveis")({
  head: () => ({
    meta: [
      {
        title:
          "Prime Imóveis | Imobiliária Premium · Alto Padrão e Investimento",
      },
      {
        name: "description",
        content:
          "Prime Imóveis: portfólio selecionado de imóveis de alto padrão. Apartamentos, casas e condomínios premium com assessoria especializada do início ao fim.",
      },
      { property: "og:title", content: "Prime Imóveis | Imobiliária de Alto Padrão" },
      {
        property: "og:description",
        content:
          "Imóveis premium com curadoria, segurança jurídica e assessoria personalizada — para quem busca patrimônio de verdade.",
      },
      { property: "og:image", content: coverAsset.url },
      { property: "og:url", content: "https://imperius-digital.lovable.app/prime-imoveis" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Prime Imóveis" },
      { name: "twitter:image", content: coverAsset.url },
      {
        name: "twitter:description",
        content:
          "Imobiliária premium com curadoria de imóveis de alto padrão e assessoria completa.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://imperius-digital.lovable.app/prime-imoveis" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: PrimeLanding,
});

const SERIF = { fontFamily: '"Playfair Display", Georgia, serif' };
const SANS = { fontFamily: '"Inter", system-ui, sans-serif' };

function PrimeLanding() {
  return (
    <div
      className="min-h-screen antialiased overflow-x-hidden"
      style={{ ...SANS, background: CANVAS, color: NAVY_DEEP }}
    >
      <Nav />
      <Hero />
      <TrustStrip />
      <Properties />
      <WhyPrime />
      <Team />
      <Process />
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
      style={{ background: "rgba(246,247,249,0.85)", borderColor: TITANIUM_LIGHT }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 min-w-0 group">
          <div
            className="h-9 w-9 rounded-md grid place-items-center shrink-0 transition"
            style={{ background: NAVY, boxShadow: "0 4px 12px -4px rgba(14,30,58,0.4)" }}
          >
            <Building2 className="h-4.5 w-4.5 text-white" />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span
              className="font-semibold text-[17px] tracking-tight truncate"
              style={{ ...SERIF, color: NAVY_DEEP }}
            >
              Prime Imóveis
            </span>
            <span
              className="text-[9.5px] uppercase tracking-[0.28em] hidden sm:block"
              style={{ color: TITANIUM }}
            >
              Alto Padrão · Investimento
            </span>
          </div>
        </a>
        <nav
          className="hidden md:flex items-center gap-7 text-[13px] font-medium"
          style={{ color: NAVY_SOFT }}
        >
          <a href="#imoveis" className="hover:text-[color:var(--navy)] transition-colors" style={{ ["--navy" as string]: NAVY_DEEP }}>
            Imóveis
          </a>
          <a href="#por-que" className="hover:text-[color:var(--navy)] transition-colors" style={{ ["--navy" as string]: NAVY_DEEP }}>
            Por que Prime
          </a>
          <a href="#equipe" className="hover:text-[color:var(--navy)] transition-colors" style={{ ["--navy" as string]: NAVY_DEEP }}>
            Corretores
          </a>
          <a href="#visita" className="hover:text-[color:var(--navy)] transition-colors" style={{ ["--navy" as string]: NAVY_DEEP }}>
            Atendimento
          </a>
        </nav>
        <a
          href="#contato"
          className="shrink-0"
          onClick={() => track("prime_cta_click", { location: "nav", destination: "contact" })}
        >
          <Button
            size="sm"
            className="text-white font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: NAVY }}
          >
            <span className="sm:hidden">Falar</span>
            <span className="hidden sm:inline">Falar com corretor</span>
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
          `linear-gradient(180deg, ${TITANIUM_LIGHT} 0%, ${CANVAS} 70%, ${CANVAS} 100%)`,
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] uppercase tracking-[0.22em] font-semibold mb-7"
            style={{
              borderColor: TITANIUM_LIGHT,
              background: "#fff",
              color: NAVY,
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: GOLD }} />
            Imobiliária Premium · São Paulo
          </div>
          <h1
            className="text-[2.5rem] sm:text-[3.4rem] lg:text-[4rem] leading-[1.02] tracking-tight font-normal"
            style={{ ...SERIF, color: NAVY_DEEP }}
          >
            Endereços que constroem
            <span className="block italic" style={{ color: NAVY }}>
              o seu patrimônio.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed" style={{ color: NAVY_SOFT }}>
            Apartamentos, casas e coberturas selecionados nos melhores endereços de São Paulo.
            Curadoria criteriosa, assessoria completa e a segurança de uma negociação conduzida
            por especialistas em alto padrão.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row sm:items-center flex-wrap gap-3 sm:gap-4">
            <a
              href="#imoveis"
              className="w-full sm:w-auto"
              onClick={() => track("prime_cta_click", { location: "hero", destination: "properties" })}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto text-white font-medium h-12 px-7 text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: NAVY }}
              >
                Ver portfólio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
              onClick={() => track("whatsapp_click", { location: "hero_prime" })}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-7 text-sm font-medium bg-white transition-colors"
                style={{ borderColor: TITANIUM_LIGHT, color: NAVY_DEEP }}
              >
                <MessageCircle className="mr-2 h-4 w-4" /> Falar agora
              </Button>
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] max-w-md" style={{ color: NAVY_SOFT }}>
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4" style={{ color: GOLD }} /> Portfólio exclusivo
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4" style={{ color: GOLD }} /> Assessoria jurídica
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-4 w-4" style={{ color: GOLD }} /> Visitas agendadas
            </li>
          </ul>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-4 sm:-inset-8 rounded-[2.5rem] blur-3xl pointer-events-none"
            style={{ background: "rgba(14,30,58,0.18)" }}
          />
          <div
            className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ring-1 shadow-xl aspect-[4/3]"
            style={{ borderColor: TITANIUM_LIGHT, boxShadow: "0 30px 60px -30px rgba(14,30,58,0.45)" }}
          >
            <img
              src={heroAsset.url}
              alt="Fachada de condomínio premium ao entardecer com palmeiras iluminadas"
              className="absolute inset-0 h-full w-full object-cover"
              width={1600}
              height={1200}
            />
          </div>
          <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 bg-white rounded-2xl shadow-lg ring-1 px-4 py-3" style={{ ["--tw-ring-color" as string]: TITANIUM_LIGHT }}>
            <div
              className="h-10 w-10 rounded-md grid place-items-center"
              style={{ background: NAVY }}
            >
              <KeyRound className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-[0.2em] font-semibold" style={{ color: TITANIUM }}>
                Lançamento exclusivo
              </div>
              <div className="text-[13px] font-semibold" style={{ color: NAVY_DEEP }}>
                Vista Park Residence · Vila Nova
              </div>
            </div>
          </div>
          <div
            className="hidden sm:flex absolute -top-5 -right-3 items-center gap-2 bg-white rounded-full shadow-md ring-1 pl-2 pr-3.5 py-1.5"
            style={{ ["--tw-ring-color" as string]: TITANIUM_LIGHT }}
          >
            <div className="flex -space-x-1.5">
              {[broker1, broker2, broker3].map((b, i) => (
                <span key={i} className="h-6 w-6 rounded-full ring-2 ring-white overflow-hidden" style={{ background: TITANIUM_LIGHT }}>
                  <img src={b.url} alt="" className="h-full w-full object-cover" />
                </span>
              ))}
            </div>
            <span className="text-[11px] font-semibold" style={{ color: NAVY_DEEP }}>
              Corretores especialistas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TRUST ----------------------------- */
function TrustStrip() {
  const items = [
    { n: "+15 anos", l: "no mercado de alto padrão" },
    { n: "R$ 2,4 bi", l: "em VGV transacionado" },
    { n: "+1.800", l: "famílias atendidas" },
    { n: "4,9★", l: "avaliação Google" },
  ];
  return (
    <section className="border-y" style={{ borderColor: TITANIUM_LIGHT, background: "#fff" }}>
      <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.l} className="text-center md:text-left">
            <div
              className="text-[1.9rem] sm:text-[2.2rem] font-medium tracking-tight leading-none"
              style={{ ...SERIF, color: NAVY_DEEP }}
            >
              {it.n}
            </div>
            <div className="text-[11px] uppercase tracking-[0.2em] mt-2" style={{ color: TITANIUM }}>
              {it.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- PROPERTIES ----------------------------- */
type Property = {
  img: string;
  alt: string;
  tag: string;
  name: string;
  area: string;
  price: string;
  beds: number;
  baths: number;
  parking: number;
  size: string;
};

function Properties() {
  const items: Property[] = [
    {
      img: prop1.url,
      alt: "Living de cobertura premium com vista panorâmica para a cidade",
      tag: "Cobertura · Região nobre",
      name: "Cobertura Premium",
      area: "Endereço personalizável",
      price: "R$ XX.XXX.XXX",
      beds: 4,
      baths: 5,
      parking: 4,
      size: "420 m²",
    },
    {
      img: prop2.url,
      alt: "Casa moderna de alto padrão com piscina e iluminação noturna",
      tag: "Casa · Condomínio fechado",
      name: "Residência Exclusiva",
      area: "Endereço personalizável",
      price: "R$ X.XXX.XXX",
      beds: 5,
      baths: 6,
      parking: 6,
      size: "680 m²",
    },
    {
      img: prop3.url,
      alt: "Fachada de prédio residencial premium com varandas e jardins suspensos",
      tag: "Apartamento · Bairro premium",
      name: "Edifício Conceito",
      area: "Endereço personalizável",
      price: "R$ X.XXX.XXX",
      beds: 3,
      baths: 4,
      parking: 3,
      size: "210 m²",
    },
  ];
  return (
    <section id="imoveis" className="py-20 sm:py-28" style={{ background: CANVAS }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: GOLD }}>
            Portfólio
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[3rem] leading-[1.1] tracking-tight font-normal"
            style={{ ...SERIF, color: NAVY_DEEP }}
          >
            Imóveis selecionados nos
            <span className="italic" style={{ color: NAVY }}> melhores endereços</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: NAVY_SOFT }}>
            Cada imóvel do portfólio passa por avaliação técnica, jurídica e de mercado
            antes de chegar até você. Curadoria é o que nos diferencia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl bg-white overflow-hidden flex flex-col transition-all hover:-translate-y-0.5"
              style={{
                border: `1px solid ${TITANIUM_LIGHT}`,
                boxShadow: "0 10px 28px -20px rgba(14,30,58,0.25)",
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden" style={{ background: TITANIUM_LIGHT }}>
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  width={1280}
                  height={960}
                />
                <div
                  className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white"
                  style={{ background: "rgba(14,30,58,0.92)", backdropFilter: "blur(6px)" }}
                >
                  {p.tag}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold" style={{ ...SERIF, color: NAVY_DEEP }}>
                  {p.name}
                </h3>
                <p className="text-[12.5px] mt-1 flex items-center gap-1.5" style={{ color: TITANIUM }}>
                  <MapPin className="h-3.5 w-3.5" /> {p.area}
                </p>

                <div className="mt-4 flex items-center gap-4 text-[12px]" style={{ color: NAVY_SOFT }}>
                  <span className="flex items-center gap-1.5"><Bed className="h-3.5 w-3.5" /> {p.beds}</span>
                  <span className="flex items-center gap-1.5"><Bath className="h-3.5 w-3.5" /> {p.baths}</span>
                  <span className="flex items-center gap-1.5"><Car className="h-3.5 w-3.5" /> {p.parking}</span>
                  <span className="flex items-center gap-1.5"><Maximize2 className="h-3.5 w-3.5" /> {p.size}</span>
                </div>

                <div className="mt-5 pt-5 flex items-end justify-between border-t" style={{ borderColor: TITANIUM_LIGHT }}>
                  <div>
                    <div className="text-[10.5px] uppercase tracking-[0.2em] font-semibold" style={{ color: TITANIUM }}>
                      Valor
                    </div>
                    <div className="text-lg font-semibold mt-0.5" style={{ ...SERIF, color: NAVY_DEEP }}>
                      {p.price}
                    </div>
                  </div>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => track("prime_property_click", { property: p.name })}
                    className="text-[12px] font-semibold inline-flex items-center gap-1 transition-colors"
                    style={{ color: NAVY }}
                  >
                    Agendar visita <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("prime_cta_click", { location: "properties_footer" })}
          >
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-7 text-sm font-medium bg-white transition-colors"
              style={{ borderColor: TITANIUM_LIGHT, color: NAVY_DEEP }}
            >
              <Search className="mr-2 h-4 w-4" /> Ver portfólio completo
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- WHY PRIME ----------------------------- */
function WhyPrime() {
  return (
    <section
      id="por-que"
      className="py-20 sm:py-24"
      style={{ background: "#fff" }}
    >
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div
            className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ring-1 shadow-lg aspect-[4/3]"
            style={{ borderColor: TITANIUM_LIGHT }}
          >
            <img
              src={coverAsset.url}
              alt="Área de lazer de condomínio premium com piscina e jardins iluminados"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1000}
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: GOLD }}>
            Por que Prime
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight font-normal"
            style={{ ...SERIF, color: NAVY_DEEP }}
          >
            Mais que um imóvel.
            <span className="italic" style={{ color: NAVY }}> Um patrimônio.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: NAVY_SOFT }}>
            Comprar bem é proteger o seu futuro. Nossa equipe acompanha cada etapa
            — da curadoria à entrega das chaves — com transparência e segurança.
          </p>
          <ul className="mt-7 space-y-4">
            {[
              { i: ShieldCheck, t: "Segurança jurídica completa", d: "Análise de documentação, due diligence e contratos revisados por nossa equipe." },
              { i: TrendingUp, t: "Visão de investimento", d: "Avaliamos liquidez, valorização e rentabilidade — não apenas a vitrine." },
              { i: Handshake, t: "Negociação experiente", d: "Mais de R$ 2,4 bi transacionados em imóveis de alto padrão em São Paulo." },
            ].map((b) => (
              <li key={b.t} className="flex items-start gap-3">
                <span
                  className="h-10 w-10 rounded-md grid place-items-center shrink-0"
                  style={{ background: NAVY }}
                >
                  <b.i className="h-4.5 w-4.5 text-white" />
                </span>
                <div>
                  <div className="text-base font-semibold" style={{ ...SERIF, color: NAVY_DEEP }}>{b.t}</div>
                  <p className="text-[13.5px] mt-0.5 leading-relaxed" style={{ color: NAVY_SOFT }}>{b.d}</p>
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
type Broker = {
  name: string;
  role: string;
  creci: string;
  photo: string;
  rating: number;
  spec: string;
};

function Team() {
  const team: Broker[] = [
    {
      name: "Diretor Comercial",
      role: "Especialista em alto padrão",
      creci: "CRECI XXX.XXX",
      photo: broker1.url,
      rating: 5.0,
      spec: "Alto padrão · Região nobre",
    },
    {
      name: "Consultora Sênior",
      role: "Coberturas e exclusivos",
      creci: "CRECI XXX.XXX",
      photo: broker2.url,
      rating: 4.9,
      spec: "Coberturas · Bairros premium",
    },
    {
      name: "Consultor de Investimentos",
      role: "Casas e condomínios",
      creci: "CRECI XXX.XXX",
      photo: broker3.url,
      rating: 4.9,
      spec: "Casas · Condomínios",
    },
  ];
  return (
    <section id="equipe" className="py-20 sm:py-28" style={{ background: CANVAS }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: GOLD }}>
            Corretores
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight font-normal"
            style={{ ...SERIF, color: NAVY_DEEP }}
          >
            Especialistas que conhecem
            <span className="italic" style={{ color: NAVY }}> cada esquina</span>.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {team.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl bg-white overflow-hidden flex flex-col transition-all hover:-translate-y-0.5"
              style={{
                border: `1px solid ${TITANIUM_LIGHT}`,
                boxShadow: "0 10px 28px -20px rgba(14,30,58,0.22)",
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden" style={{ background: TITANIUM_LIGHT }}>
                <img
                  src={p.photo}
                  alt={`Retrato profissional de ${p.name}, ${p.role}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  width={900}
                  height={1120}
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur text-[11px] font-semibold ring-1" style={{ color: GOLD, ["--tw-ring-color" as string]: "rgba(184,148,90,0.3)" }}>
                  <Star className="h-3 w-3 fill-current" />
                  {p.rating.toFixed(1)}
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg tracking-tight font-semibold" style={{ ...SERIF, color: NAVY_DEEP }}>
                  {p.name}
                </h3>
                <p className="text-[12.5px] font-medium mt-0.5" style={{ color: NAVY }}>{p.role}</p>
                <p className="text-[11.5px] mt-0.5" style={{ color: TITANIUM }}>{p.creci}</p>
                <div
                  className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium"
                  style={{ background: TITANIUM_LIGHT, color: NAVY_DEEP }}
                >
                  <Award className="h-3 w-3" /> {p.spec}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PROCESS ----------------------------- */
function Process() {
  const steps = [
    {
      n: "01",
      i: Search,
      t: "Curadoria personalizada",
      d: "Entendemos seu perfil, região, metragem e orçamento — e selecionamos opções alinhadas ao seu objetivo.",
    },
    {
      n: "02",
      i: Home,
      t: "Visitas com especialista",
      d: "Agendamos visitas guiadas com nossos corretores para você sentir cada imóvel ao vivo.",
    },
    {
      n: "03",
      i: ShieldCheck,
      t: "Negociação e documentação",
      d: "Conduzimos a proposta, due diligence e contratos com segurança jurídica completa.",
    },
    {
      n: "04",
      i: KeyRound,
      t: "Entrega das chaves",
      d: "Acompanhamento até a vistoria, registro e a entrega oficial do seu novo endereço.",
    },
  ];
  return (
    <section className="py-20 sm:py-24" style={{ background: "#fff" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: GOLD }}>
            Como trabalhamos
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight font-normal"
            style={{ ...SERIF, color: NAVY_DEEP }}
          >
            Do primeiro contato à
            <span className="italic" style={{ color: NAVY }}> entrega das chaves</span>.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl p-6 transition-all hover:-translate-y-0.5"
              style={{
                background: CANVAS,
                border: `1px solid ${TITANIUM_LIGHT}`,
              }}
            >
              <div
                className="absolute -top-3 -right-3 h-9 w-9 rounded-md bg-white grid place-items-center text-[11px] font-semibold"
                style={{ boxShadow: `inset 0 0 0 1px ${TITANIUM_LIGHT}`, color: NAVY, ...SERIF }}
              >
                {s.n}
              </div>
              <div className="h-11 w-11 rounded-md grid place-items-center mb-4" style={{ background: NAVY }}>
                <s.i className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-semibold tracking-tight" style={{ ...SERIF, color: NAVY_DEEP }}>
                {s.t}
              </h3>
              <p className="text-[13px] mt-2 leading-relaxed" style={{ color: NAVY_SOFT }}>
                {s.d}
              </p>
            </div>
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
      r: "Cobertura · região premium",
      t: "Encontraram exatamente o que procurávamos em menos de 30 dias. Negociação impecável e zero dor de cabeça com documentação.",
    },
    {
      n: "Cliente 02",
      r: "Investidor",
      t: "Trabalho com a equipe há anos e já fiz várias operações. Conhecimento de mercado e seriedade que poucas têm.",
    },
    {
      n: "Cliente 03",
      r: "Primeira compra premium",
      t: "Era a primeira vez que entrava em alto padrão. A equipe me orientou em tudo — do financiamento à escolha do condomínio. Confiei e acertei.",
    },
  ];
  return (
    <section className="py-20 sm:py-24" style={{ background: CANVAS }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: GOLD }}>
            Quem confia
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight font-normal"
            style={{ ...SERIF, color: NAVY_DEEP }}
          >
            Reputação que se constrói
            <span className="italic" style={{ color: NAVY }}> negócio a negócio</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {tts.map((t) => (
            <figure
              key={t.n}
              className="rounded-2xl bg-white p-6 sm:p-7 flex flex-col"
              style={{
                border: `1px solid ${TITANIUM_LIGHT}`,
                boxShadow: "0 10px 28px -20px rgba(14,30,58,0.18)",
              }}
            >
              <Quote className="h-7 w-7 mb-4" style={{ color: GOLD }} />
              <blockquote className="text-[15px] leading-relaxed italic flex-1" style={{ ...SERIF, color: NAVY_SOFT }}>
                "{t.t}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t" style={{ borderColor: TITANIUM_LIGHT }}>
                <div className="text-sm font-semibold" style={{ color: NAVY_DEEP }}>{t.n}</div>
                <div className="text-[12px]" style={{ color: TITANIUM }}>{t.r}</div>
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
    <section id="visita" className="py-20 sm:py-24" style={{ background: "#fff" }}>
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: GOLD }}>
            Visite o escritório
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight font-normal"
            style={{ ...SERIF, color: NAVY_DEEP }}
          >
            Atendimento exclusivo
            <span className="italic" style={{ color: NAVY }}> com hora marcada</span>.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: NAVY_SOFT }}>
            Recebemos cada cliente no nosso escritório com café, privacidade e
            tempo para entender o seu projeto. Horário de atendimento personalizável.
          </p>
          <ul className="mt-7 space-y-3 text-sm" style={{ color: NAVY_SOFT }}>
            <li className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-md grid place-items-center shrink-0" style={{ background: NAVY }}>
                <MapPin className="h-4 w-4 text-white" />
              </span>
              <span>
                <span className="text-[12px] block" style={{ color: TITANIUM }}>Escritório</span>
                Endereço personalizável
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-md grid place-items-center shrink-0" style={{ background: NAVY }}>
                <Clock className="h-4 w-4 text-white" />
              </span>
              <span>
                <span className="text-[12px] block" style={{ color: TITANIUM }}>Horário</span>
                Horário personalizável · atendimento sob agendamento
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-md grid place-items-center shrink-0" style={{ background: NAVY }}>
                <Phone className="h-4 w-4 text-white" />
              </span>
              <span>
                <span className="text-[12px] block" style={{ color: TITANIUM }}>WhatsApp</span>
                (XX) XXXXX-XXXX
              </span>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div
            className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ring-1 shadow-lg aspect-[4/3]"
            style={{ borderColor: TITANIUM_LIGHT }}
          >
            <img
              src={prop1.url}
              alt="Sala de estar de cobertura premium com vista para a cidade"
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
    <section id="contato" className="py-20 sm:py-28" style={{ background: CANVAS }}>
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-14 text-white"
          style={{
            background:
              `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 55%, ${NAVY_SOFT} 100%)`,
          }}
        >
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <div
                className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3"
                style={{ color: GOLD }}
              >
                Comece agora
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight font-normal"
                style={SERIF}
              >
                O seu próximo endereço já <span className="italic">existe</span>.
                Vamos encontrá-lo juntos.
              </h2>
              <p className="mt-5 text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
                Conte para nós o que você procura. Nossa equipe prepara uma seleção
                personalizada com os melhores imóveis disponíveis hoje.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                  onClick={() => track("whatsapp_click", { location: "final_cta_prime" })}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white hover:bg-stone-50 font-medium h-12 px-7 text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
                    style={{ color: NAVY_DEEP }}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Falar no WhatsApp
                  </Button>
                </a>
                <a href="#imoveis" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-12 px-7 text-sm font-medium bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white/60"
                  >
                    Ver portfólio <Send className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 sm:p-7 ring-1 ring-white/40 shadow-xl" style={{ color: NAVY_DEEP }}>
              <div className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-3" style={{ color: GOLD }}>
                Contato direto
              </div>
              <h3 className="text-xl font-semibold tracking-tight" style={SERIF}>
                Atendimento de segunda a sábado.
              </h3>
              <ul className="mt-5 space-y-3 text-sm" style={{ color: NAVY_SOFT }}>
                <li className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-md grid place-items-center shrink-0" style={{ background: NAVY }}>
                    <Phone className="h-4 w-4 text-white" />
                  </span>
                  <span><span className="text-[12px] block" style={{ color: TITANIUM }}>Telefone / WhatsApp</span>(XX) XXXXX-XXXX</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-md grid place-items-center shrink-0" style={{ background: NAVY }}>
                    <Mail className="h-4 w-4 text-white" />
                  </span>
                  <span><span className="text-[12px] block" style={{ color: TITANIUM }}>E-mail</span>contato@suaimobiliaria.com.br</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-md grid place-items-center shrink-0" style={{ background: NAVY }}>
                    <MapPin className="h-4 w-4 text-white" />
                  </span>
                  <span><span className="text-[12px] block" style={{ color: TITANIUM }}>Endereço</span>Endereço personalizável</span>
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
    <footer className="border-t py-10" style={{ borderColor: TITANIUM_LIGHT, background: "#fff" }}>
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px]" style={{ color: TITANIUM }}>
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4" style={{ color: NAVY }} />
          <span className="font-semibold" style={{ ...SERIF, color: NAVY_DEEP }}>
            Prime Imóveis
          </span>
          <span>· CRECI-J 38.402 · São Paulo</span>
        </div>
        <div className="text-center sm:text-right">
          © {new Date().getFullYear()} Prime Imóveis. Site desenvolvido por{" "}
          <span className="font-semibold" style={{ color: NAVY_DEEP }}>Imperius Digital</span>.
        </div>
      </div>
    </footer>
  );
}
