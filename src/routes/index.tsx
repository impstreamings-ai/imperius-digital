import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Instagram,
  Phone,
  ExternalLink,
  Mail,
  Menu,
  X,
} from "lucide-react";

import { trackEvent } from "@/lib/analytics";

const track = (name: string, params: Record<string, unknown> = {}) =>
  trackEvent(name, params);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imperius — Encurtamos o caminho entre o cliente e a venda" },
      {
        name: "description",
        content:
          "Em toda operação existe um ponto onde o cliente desiste. Imperius encontra esse ponto.",
      },
      { property: "og:title", content: "Imperius — Encurtamos o caminho entre o cliente e a venda" },
      {
        property: "og:description",
        content:
          "Em toda operação existe um ponto onde o cliente desiste. Imperius encontra esse ponto.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://imperius-digital.lovable.app/" },
      { property: "og:image", content: "https://imperius-digital.lovable.app/assets/barbearia-alemao-foto.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Imperius — Encurtamos o caminho entre o cliente e a venda" },
      {
        name: "twitter:description",
        content:
          "Em toda operação existe um ponto onde o cliente desiste. Imperius encontra esse ponto.",
      },
      { name: "twitter:image", content: "https://imperius-digital.lovable.app/assets/barbearia-alemao-foto.png" },
    ],

    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: "/assets/imperius-logo-official.png" },
      { rel: "canonical", href: "https://imperius-digital.lovable.app/" },
      {
        rel: "preload",
        as: "image",
        href: "/assets/barbearia-alemao-foto.png",
        fetchpriority: "high",
      } as unknown as Record<string, string>,
    ],
  }),
  component: Landing,
});

const WA_MESSAGE = "Olá! Quero um diagnóstico do gargalo comercial da minha empresa.";
const WA = `https://wa.me/5515981023792?text=${encodeURIComponent(WA_MESSAGE)}`;
const IG = "https://instagram.com/imperiusdigital.br";
const CLIENTE_REAL_URL = "https://barbeariadoalemao.lovable.app/";
const CLIENTE_REAL_COVER = "/assets/barbearia-alemao-foto.png";
const PROPOSAL_EMAIL = "imperiusuniverse@gmail.com";
const PROPOSAL_MAILTO = `mailto:${PROPOSAL_EMAIL}?subject=${encodeURIComponent("Proposta Imperius — apresentação personalizada")}&body=${encodeURIComponent("Olá, equipe Imperius.\n\nGostaria de receber uma proposta personalizada.\n\nEmpresa:\nSegmento:\nObjetivo principal:\n\nObrigado.")}`;

function Landing() {
  return (
    <div className="min-h-dvh text-foreground font-sans overflow-x-hidden">
      <Nav />
      <main id="conteudo">
        <Hero />
        <Identificacao />
        <Diagnostico />
        <Case />
        <Metodo />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}


// --- Nav ------------------------------------------------------------------
function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/75">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 min-w-0" onClick={close} aria-label="Imperius — ir para o topo">
          <img
            src={"/assets/imperius-logo-official.png"}
            alt=""
            aria-hidden="true"
            className="h-7 w-auto object-contain shrink-0"
            loading="eager"
            decoding="async"
          />
          <span className="hidden sm:inline font-heading font-semibold tracking-[0.16em] text-[12.5px] leading-none">
            IMPERIUS
          </span>
        </a>


        <nav className="hidden md:flex items-center gap-8 text-[12.5px] text-muted-foreground font-medium">
          <a href="#identificacao" className="hover:text-foreground transition-colors">Sintomas</a>
          <a href="#caso" className="hover:text-foreground transition-colors">Caso</a>
          <a href="#metodo" className="hover:text-foreground transition-colors">Método</a>
          <Link to="/portfolio" className="hover:text-foreground transition-colors">Portfólio</Link>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("whatsapp_click", { location: "nav" })}
          >
            <Button
              size="sm"
              className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-4 h-9 cta-shadow"
            >
              Diagnóstico
            </Button>
          </a>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-md border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex flex-col text-[14px] text-muted-foreground font-medium">
            <a href="#identificacao" onClick={close} className="py-2.5 hover:text-foreground transition-colors">Sintomas</a>
            <a href="#caso" onClick={close} className="py-2.5 hover:text-foreground transition-colors">Caso</a>
            <a href="#metodo" onClick={close} className="py-2.5 hover:text-foreground transition-colors">Método</a>
            <Link to="/portfolio" onClick={close} className="py-2.5 hover:text-foreground transition-colors">Portfólio</Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

/* ============================================================
   CAPÍTULO 1 — IMPACTO
   Composição: centro absoluto. Tipografia gigante. Silêncio.
   ============================================================ */
function Hero() {
  return (
    <section
      id="top"
      className="relative section-pad-hero overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
        paddingLeft: "max(1.25rem, env(safe-area-inset-left))",
        paddingRight: "max(1.25rem, env(safe-area-inset-right))",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[55%] pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, oklch(0.42 0.09 252 / 0.07), transparent 70%)",
        }}
      />

      <span aria-hidden className="imp-coord absolute top-20 right-5 sm:right-8 lg:right-12 hidden sm:inline-flex">
        01 · Imperius
      </span>

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna texto */}
          <div className="lg:col-span-6 lg:pr-4">
            <p className="imp-spine imp-kicker mb-6">
              <span className="imp-bracket">01</span>
              <span>Imperius · Diagnóstico</span>
            </p>

            <h1 className="text-display-mega text-foreground max-w-[18ch]">
              Encurtamos o caminho{" "}
              <span className="text-foreground/45">entre o cliente e a venda.</span>
            </h1>

            <p className="mt-6 sm:mt-7 text-lede max-w-md">
              Em toda operação existe um ponto onde o cliente desiste.{" "}
              <span className="text-foreground/80">Imperius encontra esse ponto.</span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-4">
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
                onClick={() => track("hero_cta_click", { destination: "whatsapp" })}
              >
                <Button
                  size="lg"
                  className="btn-premium group w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full h-12 px-8 text-[13.5px] cta-shadow"
                >
                  Diagnóstico gratuito{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>

              <a
                href="#caso"
                onClick={() => track("hero_cta_click", { destination: "case" })}
                className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto h-12 px-6 rounded-full border border-border-strong bg-background/40 hover:bg-background/70 hover:border-primary/40 text-foreground/85 hover:text-foreground transition-colors text-[13px] font-medium backdrop-blur-sm"
              >
                <span className="imp-mark imp-mark-muted group-hover:imp-mark-primary" aria-hidden />
                Ver caso real
                <ArrowRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            </div>

            <p className="mt-6 text-micro-tight">20 min · sem proposta</p>
          </div>

          {/* Coluna visual conceitual */}
          <div className="lg:col-span-6">
            <HeroDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HERO DIAGRAM — peça conceitual única.
   Linha "ANTES": caminho longo, sinuoso, travado num nó.
   Linha "DEPOIS": linha direta, partícula deslizando até o destino.
   Sem dashboards, sem mockups. Apenas fluxo, gargalo e decisão.
   ============================================================ */
function HeroDiagram() {
  return (
    <figure
      className="relative w-full"
      aria-label="Antes: caminho longo até o cliente travar. Depois: caminho direto até a venda."
    >
      <svg
        viewBox="0 0 600 420"
        className="w-full h-auto"
        role="img"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hero-line-before" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.86 0.022 248)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="oklch(0.86 0.022 248)" stopOpacity="0.10" />
          </linearGradient>
          <linearGradient id="hero-line-after" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.62 0.18 252)" stopOpacity="0.30" />
            <stop offset="50%" stopColor="oklch(0.62 0.18 252)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.62 0.18 252)" stopOpacity="0.45" />
          </linearGradient>
          <radialGradient id="hero-stuck-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.62 0.18 22)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="oklch(0.62 0.18 22)" stopOpacity="0" />
          </radialGradient>
          <path id="hero-after-path" d="M 60 290 L 540 290" />
        </defs>

        {/* Moldura técnica */}
        <g stroke="oklch(0.86 0.022 248)" strokeOpacity="0.10" strokeWidth="1">
          <line x1="0" y1="60" x2="600" y2="60" />
          <line x1="0" y1="360" x2="600" y2="360" />
        </g>

        {/* Coordenadas de canto */}
        <g
          fontFamily="var(--font-mono)"
          fontSize="9"
          fill="oklch(0.748 0.014 248)"
          fillOpacity="0.55"
          letterSpacing="1.4"
        >
          <text x="12" y="50">[ 00·00 ]</text>
          <text x="540" y="50">DIAGRAMA / 01</text>
        </g>

        {/* ===== ANTES ===== */}
        <g
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="2.2"
          fill="oklch(0.748 0.014 248)"
          fillOpacity="0.70"
        >
          <text x="60" y="100">ANTES</text>
        </g>

        {/* Origem antes */}
        <g transform="translate(60 140)">
          <circle r="6" fill="oklch(0.86 0.022 248)" fillOpacity="0.55" />
          <text
            x="0"
            y="26"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.4"
            fill="oklch(0.748 0.014 248)"
            fillOpacity="0.65"
          >
            cliente
          </text>
        </g>

        {/* Caminho sinuoso até o gargalo */}
        <path
          d="M 70 140 C 130 140, 150 110, 210 130 S 280 180, 330 160"
          fill="none"
          stroke="url(#hero-line-before)"
          strokeWidth="1.25"
          strokeDasharray="3 4"
        />

        {/* Gargalo — nó travado */}
        <g transform="translate(340 160)">
          <circle r="22" fill="url(#hero-stuck-halo)" className="flow-stuck-pulse" />
          <circle r="10" fill="oklch(0.10 0.01 252)" stroke="oklch(0.62 0.18 22)" strokeWidth="1.25" />
          <g className="flow-stuck-jitter" stroke="oklch(0.62 0.18 22)" strokeWidth="1.4" strokeLinecap="round">
            <line x1="-3.5" y1="-3.5" x2="3.5" y2="3.5" />
            <line x1="-3.5" y1="3.5" x2="3.5" y2="-3.5" />
          </g>
          <text
            x="0"
            y="34"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.6"
            fill="oklch(0.62 0.18 22)"
            fillOpacity="0.85"
          >
            gargalo
          </text>
        </g>

        {/* Caminho que continua e se dissolve */}
        <path
          d="M 350 160 C 410 160, 440 195, 470 175 S 520 150, 540 165"
          fill="none"
          stroke="url(#hero-line-before)"
          strokeWidth="1.25"
          strokeDasharray="3 4"
          opacity="0.45"
        />
        <g transform="translate(545 165)" opacity="0.35">
          <circle r="4" fill="none" stroke="oklch(0.86 0.022 248)" strokeOpacity="0.45" strokeWidth="1" />
          <text
            x="0"
            y="-12"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.4"
            fill="oklch(0.748 0.014 248)"
            fillOpacity="0.55"
          >
            venda
          </text>
        </g>

        {/* Divisor entre estados */}
        <g>
          <line
            x1="40"
            y1="230"
            x2="560"
            y2="230"
            stroke="oklch(0.86 0.022 248)"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          <g transform="translate(300 230)">
            <rect x="-4" y="-4" width="8" height="8" transform="rotate(45)" fill="oklch(0.62 0.18 252)" />
          </g>
        </g>

        {/* ===== DEPOIS ===== */}
        <g
          fontFamily="var(--font-mono)"
          fontSize="10"
          letterSpacing="2.2"
          fill="oklch(0.62 0.18 252)"
        >
          <text x="60" y="265">DEPOIS</text>
        </g>

        {/* Trilho direto */}
        <use href="#hero-after-path" stroke="oklch(0.62 0.18 252)" strokeOpacity="0.18" strokeWidth="1.25" />
        <use href="#hero-after-path" stroke="url(#hero-line-after)" strokeWidth="1.6" strokeLinecap="round" />

        {/* Origem depois */}
        <g transform="translate(60 290)">
          <circle r="6" fill="oklch(0.62 0.18 252)" />
          <text
            x="0"
            y="26"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.4"
            fill="oklch(0.748 0.014 248)"
            fillOpacity="0.75"
          >
            cliente
          </text>
        </g>

        {/* Destino depois — venda */}
        <g transform="translate(540 290)">
          <circle r="14" fill="none" stroke="oklch(0.62 0.18 252)" strokeOpacity="0.35" strokeWidth="1" />
          <circle r="8" fill="oklch(0.62 0.18 252)" />
          <text
            x="0"
            y="-22"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="1.6"
            fill="oklch(0.62 0.18 252)"
          >
            venda
          </text>
        </g>

        {/* Partícula deslizando — a venda fluindo */}
        <circle
          r="3"
          fill="oklch(1 0 0)"
          className="flow-particle"
          style={{
            offsetPath: "path('M 60 290 L 540 290')",
            WebkitOffsetPath: "path('M 60 290 L 540 290')",
          } as unknown as React.CSSProperties}
        />

        {/* Etiqueta da redução */}
        <g transform="translate(300 330)">
          <line x1="-90" y1="-22" x2="-90" y2="-30" stroke="oklch(0.62 0.18 252)" strokeOpacity="0.45" />
          <line x1="90" y1="-22" x2="90" y2="-30" stroke="oklch(0.62 0.18 252)" strokeOpacity="0.45" />
          <line x1="-90" y1="-30" x2="90" y2="-30" stroke="oklch(0.62 0.18 252)" strokeOpacity="0.45" />
          <text
            x="0"
            y="-12"
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="10"
            letterSpacing="2"
            fill="oklch(0.62 0.18 252)"
          >
            CAMINHO DIRETO
          </text>
        </g>
      </svg>

      <figcaption className="sr-only">
        Representação conceitual: o caminho convencional trava num gargalo antes da venda. A intervenção Imperius
        reduz o trajeto para uma linha direta entre cliente e venda.
      </figcaption>
    </figure>
  );
}

/* ============================================================
   CAPÍTULO 2 — IDENTIFICAÇÃO
   Composição: assimétrica 4/8. Título fixo à esquerda, cenas numeradas à direita.
   Densidade alta. Lista cronológica. Sem cards.
   ============================================================ */
function Identificacao() {
  const cenas = [
    { t: "Pediu orçamento. Sumiu.", d: "Leu a mensagem. Nunca respondeu." },
    { t: "Mensagem chegou. Ninguém viu.", d: "Quando alguém abriu, já era tarde." },
    { t: "Respondeu rápido. Sumiu igual.", d: "Tempo certo. Silêncio do outro lado." },
    { t: "Marcou horário. Não apareceu.", d: "Sem confirmação. Cadeira vazia." },
    { t: "Veio uma vez. Não voltou.", d: "Ninguém chamou de novo." },
  ];

  return (
    <section id="identificacao" className="relative section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="imp-spine imp-kicker mb-5">
                <span className="imp-bracket">02</span>
                <span>Sintomas</span>
              </p>
              <h2 className="text-h2 text-foreground text-balance">
                Acontece toda semana. Mais de uma vez.
              </h2>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div aria-hidden className="imp-hairline mb-0" />
            <ol>
              {cenas.map((c, i) => (
                <li key={c.t} className="row-editorial">
                  <div className="flex items-center gap-2.5 shrink-0 mt-1 sm:mt-1.5">
                    <span className="imp-num text-[10.5px] tracking-[0.06em] text-muted-foreground/55 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0 grid sm:grid-cols-[1fr_minmax(0,1.2fr)] gap-0.5 sm:gap-10 items-baseline">
                    <h3 className="text-card-title">{c.t}</h3>
                    <p className="text-card-body">{c.d}</p>
                  </div>
                </li>
              ))}
            </ol>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CAPÍTULO 3 — MUDANÇA DE PERSPECTIVA
   Composição: split full-bleed. Esquerda riscada (caminho errado) vs direita afirmativa.
   Sem container central. Contraste tipográfico extremo.
   ============================================================ */
function Diagnostico() {
  return (
    <section className="relative surface-tint hairline-y">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2">
        <div className="px-5 sm:px-8 lg:px-12 py-12 sm:py-24 lg:py-28 border-b md:border-b-0 md:border-r border-border/60">
          <p className="imp-spine imp-kicker mb-4 sm:mb-6 text-muted-foreground/55">
            <span>O que a maioria faz</span>
          </p>
          <p className="text-h2 text-foreground/40 line-through decoration-foreground/20 decoration-1 underline-offset-[6px] text-balance">
            Troca de sistema, contrata agência, anuncia mais.
          </p>
        </div>
        <div className="px-5 sm:px-8 lg:px-12 py-12 sm:py-24 lg:py-28">
          <p className="imp-spine imp-kicker mb-4 sm:mb-6 text-primary/80">
            <span className="imp-mark imp-mark-primary" aria-hidden />
            <span>O que Imperius faz</span>
          </p>
          <p className="text-h2 text-foreground text-balance">
            Começa pelo <span className="text-primary">ponto exato</span> onde o cliente desiste.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ============================================================
   CAPÍTULO 4 — PROVA REAL
   Composição: editorial magazine. Imagem dominante 7/12 à ESQUERDA com bleed.
   Texto à direita 5/12 com hierarquia vertical longa.
   ============================================================ */
function Case() {
  const acts = [
    {
      kicker: "Problema",
      tone: "muted" as const,
      line: "Informação espalhada.",
      sub: "Muitos passos até o contato. Sem página própria.",
    },
    {
      kicker: "Intervenção",
      tone: "muted" as const,
      line: "Uma página. Um caminho.",
      sub: "Tudo no mesmo lugar. Agendar virou um toque.",
    },
    {
      kicker: "Resultado",
      tone: "primary" as const,
      line: "Decisão na hora.",
      sub: "Menos passos entre cliente e cadeira.",
    },
  ];

  return (
    <section id="caso" className="relative section-pad">
      <span aria-hidden className="imp-coord absolute top-8 right-5 sm:right-8 lg:right-12 hidden sm:inline-flex">
        04 · Prova
      </span>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Cabeçalho editorial */}
        <header className="grid lg:grid-cols-12 gap-6 lg:gap-14 items-end mb-10 lg:mb-14">
          <div className="lg:col-span-7">
            <p className="imp-spine imp-kicker mb-4">
              <span className="imp-bracket">04</span>
              <span>Prova · Sorocaba/SP</span>
            </p>
            <h2 className="text-display-xl text-foreground leading-[1.02] sm:leading-[0.98] text-balance">
              Barbearia <span className="lg:inline">do Alemão</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lede text-foreground/70 max-w-md lg:ml-auto">
              Um estudo curto sobre encurtar o caminho entre interesse e agendamento.
            </p>
          </div>
        </header>


        {/* Imagem protagonista */}
        <a
          href={CLIENTE_REAL_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => track("client_proof_click", { project: "barbearia_do_alemao" })}
          className="group block relative"
          aria-label="Abrir projeto Barbearia do Alemão em nova aba"
        >
          <div className="relative overflow-hidden bg-popover/60 border border-border rounded-[var(--radius-card)] aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9]">
            <img
              src={CLIENTE_REAL_COVER}
              alt="Barbearia do Alemão — projeto real desenvolvido pela Imperius"
              width={1035}
              height={1536}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/85 via-background/20 to-transparent pointer-events-none" aria-hidden />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-[2px] bg-background/85 border border-border backdrop-blur-md text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground shadow-[0_0_0_1px_oklch(1_0_0/0.04)_inset]">
              <span className="imp-mark imp-mark-primary" aria-hidden />
              Cliente real · ativo
            </div>
            <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-primary/95 text-primary-foreground text-[12px] font-semibold transition-transform group-hover:-translate-y-0.5">
              Abrir projeto <ExternalLink className="h-3.5 w-3.5" />
            </div>

          </div>
        </a>

        {/* Narrativa: Problema → Intervenção → Resultado */}
        <div className="mt-12 sm:mt-16 lg:mt-20">


          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border border border-border-strong rounded-[2px] overflow-hidden">
            {acts.map((a, i) => {
              const isLast = i === acts.length - 1;
              return (
                <li
                  key={a.kicker}
                  className="relative bg-background px-6 sm:px-8 py-10 sm:py-12 lg:py-14 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className={`imp-kicker ${a.tone === "primary" ? "text-primary" : ""}`}>
                      <span
                        className={
                          a.tone === "primary" ? "imp-mark imp-mark-primary" : "imp-mark imp-mark-muted"
                        }
                        aria-hidden
                      />
                      {a.kicker}
                    </span>
                    <span className="imp-bracket text-[10px] tracking-[0.06em] text-muted-foreground/45">
                      <span className="imp-num">{String(i + 1).padStart(2, "0")}</span>
                      <span aria-hidden className="opacity-45">/</span>
                      <span className="imp-num opacity-60">03</span>
                    </span>
                  </div>

                  <p
                    className={`font-display font-medium leading-[1.05] tracking-[-0.02em] text-[clamp(1.6rem,3.4vw,2.25rem)] text-balance ${
                      a.tone === "primary" ? "text-foreground" : "text-foreground/90"
                    }`}
                  >
                    {a.line}
                  </p>
                  <p className="mt-4 text-card-body text-muted-foreground/85 max-w-[28ch]">
                    {a.sub}
                  </p>

                  {/* Conector direcional — desktop */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="hidden lg:flex imp-node absolute -right-[14px] top-1/2 -translate-y-1/2 z-10 text-muted-foreground/80"
                    >
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  )}
                  {/* Conector direcional — mobile */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="lg:hidden imp-node absolute left-1/2 -bottom-[14px] -translate-x-1/2 z-10 text-muted-foreground/80 rotate-90"
                    >
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>

      </div>
    </section>
  );
}

/* ============================================================
   CAPÍTULO 5 — MÉTODO
   Composição: timeline vertical. Rail à esquerda com label fixo,
   passos empilhados à direita com tipografia grande. Sem grid de cards.
   ============================================================ */
function Metodo() {
  const pilares = [
    { n: "01", t: "Achar o gargalo", d: "Onde o cliente trava." },
    { n: "02", t: "Mostrar na tela", d: "O ponto exato." },
    { n: "03", t: "Calcular o custo", d: "Quanto pesa por mês." },
    { n: "04", t: "Conversar", d: "O que resolver primeiro." },
    { n: "05", t: "Propor", d: "Só depois do problema claro." },
  ];

  return (
    <section id="metodo" className="relative section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Etiqueta técnica única — sem kicker+H2 duplicados */}
        <div aria-hidden className="imp-rule" />
        <div className="flex items-baseline justify-between py-4 font-mono text-[10.5px] uppercase tracking-[0.26em] text-muted-foreground/70">
          <span>Método · 05 etapas</span>
          <span className="text-muted-foreground/45 tabular-nums">[ 05·05 ]</span>
        </div>
        <div aria-hidden className="imp-rule" />

        <ol>
          {pilares.map((p) => (
            <li
              key={p.n}
              className="group grid grid-cols-[auto_minmax(0,1fr)] sm:grid-cols-[7rem_minmax(0,1fr)] lg:grid-cols-[9rem_minmax(0,5fr)_minmax(0,4fr)] items-baseline gap-x-5 sm:gap-x-10 gap-y-2 py-7 sm:py-10 lg:py-12 border-b border-border/60"
            >
              <span
                className="imp-num font-display font-medium text-foreground/85 tabular-nums leading-none text-[clamp(2.5rem,6vw,4.25rem)] tracking-[-0.04em]"
                aria-hidden
              >
                {p.n}
              </span>
              <h3 className="font-display font-medium text-foreground leading-[1.05] tracking-[-0.02em] text-[clamp(1.35rem,2.6vw,1.875rem)] text-balance">
                {p.t}
              </h3>
              <p className="col-span-2 sm:col-start-2 lg:col-span-1 lg:col-start-3 text-card-body text-muted-foreground/90 max-w-[34ch] sm:pl-0">
                {p.d}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   CAPÍTULO 6 — CONVITE
   Composição: editorial à esquerda, ação à direita. Sem centro.
   Última linha da história — densidade mínima.
   ============================================================ */
function FinalCTA() {
  return (
    <section className="relative section-pad overflow-hidden hairline-t">
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Ação primeiro — quebra o padrão de "texto à esquerda" */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex flex-col gap-5 lg:max-w-sm">
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="w-full"
                onClick={() => {
                  track("final_cta_click", { destination: "whatsapp" });
                  track("whatsapp_click", { location: "final_cta" });
                }}
              >
                <Button
                  size="lg"
                  className="btn-premium group w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full h-14 px-9 text-[14px] cta-shadow justify-between"
                >
                  Começar diagnóstico
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <div className="flex items-center justify-between gap-4 pl-1">
                <a
                  href={PROPOSAL_MAILTO}
                  className="text-[12.5px] text-muted-foreground hover:text-foreground transition-colors font-sans inline-flex items-center gap-2"
                  onClick={() => track("final_cta_click", { destination: "email" })}
                >
                  <Mail className="h-3.5 w-3.5" /> Por e-mail
                </a>
                <span className="text-micro-tight">20 min · sem proposta</span>
              </div>
            </div>
          </div>

          {/* Declaração editorial — borda esquerda como marca proprietária, sem kicker, sem opacidade */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative pl-6 sm:pl-8 border-l border-primary/50">
              <span
                aria-hidden
                className="imp-mark imp-mark-primary absolute -left-[5px] top-2"
              />
              <p className="font-display font-medium text-foreground leading-[0.98] tracking-[-0.038em] text-[clamp(2rem,5.5vw,4rem)] text-balance">
                Você já sabe onde está perdendo.
              </p>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Falta descobrir <span className="text-foreground">onde</span>, na sua operação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer ---------------------------------------------------------------
function Footer() {
  return (
    <footer className="relative">
      <div aria-hidden className="imp-hairline" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center mb-4">
              <img src={"/assets/imperius-logo-official.png"} alt="Imperius" className="h-9 w-auto object-contain" loading="lazy" decoding="async" />
            </div>
            <p className="text-card-body max-w-sm">
              Diagnóstico do gargalo comercial.
            </p>
          </div>


          <div className="md:col-span-3">
            <h3 className="imp-kicker mb-4"><span className="imp-mark imp-mark-muted" aria-hidden /> Navegar</h3>
            <ul className="space-y-2.5 text-[13.5px] text-muted-foreground">
              <li><a href="#identificacao" className="hover:text-foreground transition-colors">Sintomas</a></li>
              <li><a href="#caso" className="hover:text-foreground transition-colors">Caso</a></li>
              <li><a href="#metodo" className="hover:text-foreground transition-colors">Método</a></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Portfólio</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="imp-kicker mb-4"><span className="imp-mark imp-mark-muted" aria-hidden /> Contato</h3>
            <a href="tel:+5515981023792" className="flex items-center gap-3 text-[13.5px] text-muted-foreground hover:text-foreground transition-colors mb-2.5" onClick={() => track("phone_click", { location: "footer" })}>
              <Phone className="h-4 w-4 shrink-0" /> +55 15 98102-3792
            </a>
            <a href={PROPOSAL_MAILTO} className="flex items-center gap-3 text-[13.5px] text-muted-foreground hover:text-foreground transition-colors mb-2.5" onClick={() => track("footer_email_click")}>
              <Mail className="h-4 w-4 shrink-0" /> {PROPOSAL_EMAIL}
            </a>
            <a href={IG} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[13.5px] text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-4 w-4 shrink-0" /> @imperiusdigital.br
            </a>
          </div>
        </div>

        <div aria-hidden className="imp-hairline mt-14" />
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] text-muted-foreground/70">
          <p>© {new Date().getFullYear()} Imperius</p>
          <p>
            LGPD:{" "}
            <a href={PROPOSAL_MAILTO} className="underline hover:text-foreground">
              {PROPOSAL_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
