import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageCircle,
  Instagram,
  Phone,
  ExternalLink,
  ClipboardList,
  TrendingUp,
  Calendar,
  Mail,
  Activity,
  Menu,
  X,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import { trackEvent } from "@/lib/analytics";

const track = (name: string, params: Record<string, unknown> = {}) =>
  trackEvent(name, params);

// --- Sistema --------------------------------------------------------------
// Rótulo de seção formato `S/01 — DIAGNÓSTICO`. Mono, hairline, sem ornamento.
function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <div className="section-label">
      <span className="section-label-mark">S/{index}</span>
      <span aria-hidden className="h-px w-6 bg-border" />
      <span>{children}</span>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imperius — Encontramos o gargalo que está te custando clientes" },
      {
        name: "description",
        content:
          "Mapeamos onde sua operação perde cliente e encurtamos o caminho entre o contato e a venda. Diagnóstico antes de qualquer proposta.",
      },
      { property: "og:title", content: "Imperius — Encontramos o gargalo que está te custando clientes" },
      {
        property: "og:description",
        content:
          "Mapeamos onde sua operação perde cliente e encurtamos o caminho entre o contato e a venda. Diagnóstico antes de qualquer proposta.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://imperius-digital.lovable.app/" },
      { property: "og:image", content: "https://imperius-digital.lovable.app/__l5e/assets-v1/ae6d1095-0da6-4317-bfb4-9afb5cd15f50/barbearia-alemao-foto.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Imperius — Encontramos o gargalo que está te custando clientes" },
      {
        name: "twitter:description",
        content:
          "Mapeamos onde sua operação perde cliente e encurtamos o caminho entre o contato e a venda. Diagnóstico antes de qualquer proposta.",
      },
      { name: "twitter:image", content: "https://imperius-digital.lovable.app/__l5e/assets-v1/ae6d1095-0da6-4317-bfb4-9afb5cd15f50/barbearia-alemao-foto.png" },
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
        href: "/__l5e/assets-v1/ae6d1095-0da6-4317-bfb4-9afb5cd15f50/barbearia-alemao-foto.png",
        media: "(min-width: 768px)",
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
const CLIENTE_REAL_COVER = "/__l5e/assets-v1/ae6d1095-0da6-4317-bfb4-9afb5cd15f50/barbearia-alemao-foto.png";
const PROPOSAL_EMAIL = "imperiusuniverse@gmail.com";
const PROPOSAL_MAILTO = `mailto:${PROPOSAL_EMAIL}?subject=${encodeURIComponent("Proposta Imperius — apresentação personalizada")}&body=${encodeURIComponent("Olá, equipe Imperius.\n\nGostaria de receber uma proposta personalizada.\n\nEmpresa:\nSegmento:\nObjetivo principal:\n\nObrigado.")}`;

function Landing() {
  return (
    <div className="min-h-dvh text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Problema />
      <Demonstracoes />
      <Metodo />
      <Operator />
      <FinalCTA />
      <Footer />
    </div>
  );
}

// --- Nav ------------------------------------------------------------------
function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/75">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 min-w-0" onClick={close}>
          <img
            src={"/assets/imperius-logo-official.png"}
            alt="Imperius Operações Comerciais"
            className="h-7 w-auto object-contain shrink-0"
            loading="eager"
            decoding="async"
          />
          <span className="hidden sm:flex items-baseline gap-2 leading-none min-w-0">
            <span className="font-heading font-semibold tracking-[0.16em] text-[12.5px]">IMPERIUS</span>
            <span className="text-mono text-[9.5px] text-muted-foreground/70 tracking-[0.18em]">/ 01</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[12.5px] text-muted-foreground font-medium">
          <a href="#metodo" className="hover:text-foreground transition-colors">Método</a>
          <a href="#vitrine" className="hover:text-foreground transition-colors">Caso</a>
          <a href="#operator" className="hover:text-foreground transition-colors">Operator</a>
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
              <span className="sm:hidden">Diagnóstico</span>
              <span className="hidden sm:inline">Diagnóstico gratuito</span>
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
            <a href="#metodo" onClick={close} className="py-2.5 hover:text-foreground transition-colors">Método</a>
            <a href="#vitrine" onClick={close} className="py-2.5 hover:text-foreground transition-colors">Caso</a>
            <a href="#operator" onClick={close} className="py-2.5 hover:text-foreground transition-colors">Operator</a>
            <Link to="/portfolio" onClick={close} className="py-2.5 hover:text-foreground transition-colors">Portfólio</Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

// --- Hero — composição assimétrica editorial ------------------------------
function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
        paddingLeft: "max(0px, env(safe-area-inset-left))",
        paddingRight: "max(0px, env(safe-area-inset-right))",
      }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-[0.10]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* topo: metadata editorial */}
        <div className="flex items-center justify-between gap-4 mb-10 sm:mb-14">
          <SectionLabel index="01">Diagnóstico comercial</SectionLabel>
          <span className="hidden sm:inline-flex text-mono text-[10.5px] tracking-[0.18em] text-muted-foreground/70 uppercase">
            Imperius — Sorocaba/SP
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Coluna esquerda — headline editorial */}
          <div className="lg:col-span-7">
            <h1 className="text-display text-foreground">
              Seu cliente
              <br />
              quer comprar.{" "}
              <span className="text-foreground/50">Mas não chega até a venda.</span>
            </h1>

            <div className="mt-7 sm:mt-8 max-w-xl">
              <p className="text-lede">
                Identificamos o ponto exato onde sua operação perde cliente — antes de qualquer proposta.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
                onClick={() => track("hero_cta_click", { destination: "whatsapp" })}
              >
                <Button
                  size="lg"
                  className="btn-premium group w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full h-12 px-7 text-[13.5px] cta-shadow"
                >
                  Quero meu diagnóstico gratuito{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <span className="text-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground/75">
                20 min · sem proposta antes
              </span>
            </div>
          </div>

          {/* Coluna direita — micro console técnico */}
          <div className="lg:col-span-5">
            <HeroConsole />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroConsole() {
  // Visual técnico proprietário — substitui qualquer gradient genérico.
  // Nodes representam etapas; linha tracejada indica fluxo do cliente.
  return (
    <figure
      aria-hidden
      className="relative tech-frame border border-border bg-card/40 backdrop-blur-md rounded-card overflow-hidden"
    >
      <span className="tech-frame__bl" />
      <span className="tech-frame__br" />

      <div className="console-chrome">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
        </span>
        <span className="ml-2">operator · live</span>
        <span className="ml-auto inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-mono">monitoring</span>
        </span>
      </div>

      <div className="relative p-5 sm:p-6">
        <svg viewBox="0 0 400 220" className="block w-full h-auto">
          <defs>
            <linearGradient id="ic-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.635 0.135 252)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="oklch(0.635 0.135 252)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="oklch(0.635 0.135 252)" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Grid técnico de fundo */}
          <g stroke="oklch(1 0 0 / 0.04)" strokeWidth="1">
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" x2="400" y1={(i + 1) * 30} y2={(i + 1) * 30} />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`v-${i}`} y1="0" y2="220" x1={(i + 1) * 36} x2={(i + 1) * 36} />
            ))}
          </g>

          {/* Caminho do cliente */}
          <path
            d="M40 110 C 110 40, 180 180, 250 90 S 360 130, 380 110"
            fill="none"
            stroke="url(#ic-line)"
            strokeWidth="1.25"
            className="hero-energy-line"
          />

          {/* Nodes — etapas */}
          {[
            { x: 40, y: 110, label: "Contato" },
            { x: 130, y: 70, label: "Resposta" },
            { x: 210, y: 140, label: "Travou" },
            { x: 300, y: 95, label: "Retomada" },
            { x: 380, y: 110, label: "Venda" },
          ].map((n, i) => (
            <g key={n.label} className="hero-node">
              <circle
                cx={n.x}
                cy={n.y}
                r={i === 2 ? 6 : 4}
                fill={i === 2 ? "oklch(0.68 0.18 22)" : "oklch(0.78 0.10 250)"}
                stroke="oklch(0.118 0.008 256)"
                strokeWidth="1.5"
              />
              <text
                x={n.x}
                y={n.y + 18}
                fontSize="8"
                fontFamily="Geist Mono, monospace"
                fill="oklch(0.78 0.008 256 / 0.6)"
                textAnchor="middle"
                letterSpacing="0.5"
              >
                {n.label.toUpperCase()}
              </text>
            </g>
          ))}

          {/* Marcador do gargalo */}
          <g>
            <line x1="210" y1="56" x2="210" y2="128" stroke="oklch(0.68 0.18 22 / 0.55)" strokeDasharray="2 3" strokeWidth="1" />
            <text x="218" y="62" fontSize="8.5" fontFamily="Geist Mono, monospace" fill="oklch(0.68 0.18 22 / 0.85)" letterSpacing="0.5">
              GARGALO
            </text>
          </g>
        </svg>

        <div className="mt-4 flex items-center justify-between text-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground/65">
          <span>fluxo do cliente</span>
          <span>5 etapas · 1 ponto crítico</span>
        </div>
      </div>
    </figure>
  );
}

// --- Problema — lista editorial densa, hairline rows ----------------------
function Problema() {
  const dores = [
    { icon: Calendar, t: "Cliente desiste antes de agendar", d: "Pede horário, some, e ninguém retoma." },
    { icon: ClipboardList, t: "Cliente trava no meio do caminho", d: "Começa a comprar e abandona antes do fim." },
    { icon: MessageCircle, t: "Mensagem chega e ninguém responde", d: "Quando alguém vê, o cliente já fechou com outro." },
    { icon: Activity, t: "Você responde rápido e ele some", d: "Mandou orçamento, mandou foto, e o cliente sumiu." },
    { icon: TrendingUp, t: "Cliente entra e nunca mais volta", d: "Pediu informação uma vez. Ninguém chamou de novo." },
  ];

  return (
    <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-10 sm:mb-12">
          <div className="lg:col-span-5">
            <SectionLabel index="02">Sintomas</SectionLabel>
            <h2 className="text-h2 text-foreground mt-5">
              Reconhece alguma dessas{" "}
              <span className="text-foreground/50">no seu dia a dia?</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-card-body max-w-md">
              Cinco sintomas que aparecem toda semana em operações reais. Quando começam a se repetir, há um gargalo estrutural por trás.
            </p>
          </div>
        </div>

        <ul className="border-t border-border">
          {dores.map((d, i) => (
            <li key={d.t} className="row-editorial group">
              <span className="text-mono text-[11px] tracking-[0.18em] text-muted-foreground/55 pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 grid sm:grid-cols-[1fr_minmax(0,1.1fr)] gap-2 sm:gap-8 items-baseline">
                <h3 className="text-card-title flex items-center gap-3">
                  <d.icon className="h-[15px] w-[15px] text-muted-foreground/60 shrink-0" aria-hidden />
                  <span className="truncate">{d.t}</span>
                </h3>
                <p className="text-card-body">{d.d}</p>
              </div>
              <ArrowRight
                className="h-3.5 w-3.5 text-muted-foreground/35 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 mt-2"
                aria-hidden
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// --- Demonstracoes — showcase cinematográfico (imagem dominante) ---------
function Demonstracoes() {
  const problemas = [
    "Informações espalhadas",
    "Muitas etapas até o contato",
    "Ausência de página própria",
  ];
  const solucoes = [
    "Página centralizada",
    "Contato simplificado",
    "Acesso rápido ao negócio",
  ];

  return (
    <section id="vitrine" className="relative pt-20 pb-20 sm:pt-24 sm:pb-28 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-10">
          <SectionLabel index="03">Caso validado</SectionLabel>
          <span className="hidden sm:inline-flex items-center gap-2 text-mono text-[10.5px] tracking-[0.18em] uppercase text-muted-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            ativo · sorocaba
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Imagem dominante, sem moldura de card */}
          <a
            href={CLIENTE_REAL_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("client_proof_click", { project: "barbearia_do_alemao" })}
            className="lg:col-span-7 group block relative tech-frame"
          >
            <span className="tech-frame__bl" />
            <span className="tech-frame__br" />
            <div className="relative overflow-hidden bg-popover/60 border border-border">
              <img
                src={CLIENTE_REAL_COVER}
                alt="Barbearia do Alemão — projeto real desenvolvido pela Imperius"
                width={1035}
                height={1536}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="block w-full h-[320px] sm:h-[420px] lg:h-[540px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.015]"
              />
              <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border bg-background/85 backdrop-blur-md text-mono text-[9.5px] uppercase tracking-[0.2em] text-foreground/85">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                cliente ativo
              </div>
              <div className="absolute bottom-3 right-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/95 text-primary-foreground text-[12px] font-semibold transition-transform group-hover:-translate-y-0.5">
                Abrir projeto <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </div>
          </a>

          {/* Narrativa lateral — sem card aninhado, hairlines */}
          <div className="lg:col-span-5 lg:pt-2">
            <h2 className="text-h2 text-foreground">
              Barbearia do Alemão
            </h2>
            <div className="text-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground/75 mt-2">
              Sorocaba/SP · projeto entregue
            </div>

            <p className="mt-5 text-card-body">
              Solução desenvolvida pela Imperius Operações Comerciais para reduzir atritos no contato com clientes e encurtar o caminho até o agendamento.
            </p>

            <div className="mt-8 border-t border-border">
              <div className="py-5 border-b border-border">
                <div className="flex items-center gap-2 text-mono text-[10px] uppercase tracking-[0.22em] font-semibold text-muted-foreground/85">
                  <AlertTriangle className="h-3.5 w-3.5 text-destructive/80" />
                  Antes
                </div>
                <ul className="mt-3 space-y-1.5">
                  {problemas.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-card-body">
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-destructive/70 shrink-0" aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-5 border-b border-border">
                <div className="flex items-center gap-2 text-mono text-[10px] uppercase tracking-[0.22em] font-semibold text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Depois
                </div>
                <ul className="mt-3 space-y-1.5">
                  {solucoes.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-card-body text-foreground">
                      <CheckCircle2 className="h-[15px] w-[15px] text-primary mt-[2px] shrink-0" aria-hidden />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-5">
                <div className="text-mono text-[10px] uppercase tracking-[0.22em] font-semibold text-foreground/85 mb-2">
                  Resultado
                </div>
                <p className="text-card-body text-foreground/90">
                  O cliente encontra tudo em um único lugar e chega ao contato com menos atrito.
                </p>
                <div className="mt-4 text-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground/70 truncate">
                  ↗ barbeariadoalemao.lovable.app
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Método — timeline ----------------------------------------------------
function Metodo() {
  const pilares = [
    { n: "01", t: "Encontrar um gargalo real", d: "Onde o cliente trava de verdade." },
    { n: "02", t: "Mostrar visualmente", d: "Você vê o ponto exato na tela." },
    { n: "03", t: "Fazer uma pergunta curta", d: "Quanto esse gargalo está te custando?" },
    { n: "04", t: "Conversar", d: "O que faz sentido resolver primeiro." },
    { n: "05", t: "Só depois, a solução", d: "Proposta com o problema claro." },
  ];

  return (
    <section id="metodo" className="relative pt-20 pb-20 sm:pt-24 sm:pb-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-12 sm:mb-14">
          <div className="lg:col-span-5">
            <SectionLabel index="04">Método Imperius</SectionLabel>
            <h2 className="text-h2 text-foreground mt-5">
              Cinco passos.{" "}
              <span className="text-foreground/50">Sempre nessa ordem.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-card-body max-w-md">
              Processo aplicado em toda operação que entra na Imperius. Sem pular etapa, sem proposta antecipada.
            </p>
          </div>
        </div>

        {/* Timeline — desktop horizontal com rail, mobile vertical com guia */}
        <ol className="relative grid gap-px sm:gap-px sm:grid-cols-2 lg:grid-cols-5 border border-border bg-border">
          {pilares.map((p, i) => (
            <li
              key={p.n}
              className="relative bg-background p-6 sm:p-7 flex flex-col min-h-[180px] transition-colors duration-300 hover:bg-card/40"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-mono text-[40px] sm:text-[44px] leading-none tracking-[-0.04em] text-foreground/85 font-semibold">
                  {p.n}
                </span>
                {i < pilares.length - 1 ? (
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 mt-3 hidden lg:block" />
                ) : (
                  <span className="text-mono text-[9.5px] tracking-[0.22em] uppercase text-primary/80 mt-3">
                    fim
                  </span>
                )}
              </div>
              <h3 className="text-card-title">{p.t}</h3>
              <p className="mt-2 text-card-body">{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// --- Operator — painel técnico, chrome de console -------------------------
function Operator() {
  return (
    <section id="operator" className="relative pt-20 pb-20 sm:pt-24 sm:pb-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8">
          <SectionLabel index="05">Imperius Operator</SectionLabel>
        </div>

        <div className="relative tech-frame border border-border bg-card/60 backdrop-blur-md overflow-hidden">
          <span className="tech-frame__bl" />
          <span className="tech-frame__br" />

          <div className="console-chrome">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-foreground/15" />
              <span className="h-2 w-2 rounded-full bg-foreground/15" />
              <span className="h-2 w-2 rounded-full bg-foreground/15" />
            </span>
            <span className="ml-2">operator.proprietário</span>
            <span className="ml-auto inline-flex items-center gap-1.5 text-primary/90">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-mono">live</span>
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 lg:items-end p-6 sm:p-8 lg:p-10">
            <div className="min-w-0">
              <h2 className="text-h2 text-foreground">
                Acompanha o caminho do cliente{" "}
                <span className="text-foreground/50">
                  e avisa quando uma oportunidade está prestes a ser perdida.
                </span>
              </h2>
              <p className="mt-5 text-lede max-w-2xl">
                Monitora cada conversa, identifica onde o cliente travou, avisa a equipe responsável e ajuda a recuperar a oportunidade antes que ela vá embora.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-mono text-[10.5px] uppercase tracking-[0.2em] text-muted-foreground/75">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" /> Conversa monitorada
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" /> Gargalo detectado
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" /> Equipe alertada
                </span>
              </div>
            </div>

            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("operator_cta_click", { destination: "whatsapp" })}
              className="btn-premium group w-full lg:w-auto shrink-0 inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground text-[13px] font-sans font-semibold cta-shadow"
            >
              Quero meu diagnóstico gratuito{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Final CTA — tipografia de presença -----------------------------------
function FinalCTA() {
  return (
    <section className="relative pt-24 pb-24 sm:pt-32 sm:pb-32 border-t border-border/60 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.06] pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8">
          <SectionLabel index="06">Próximo passo</SectionLabel>
        </div>

        <h2 className="text-display-xl text-foreground max-w-5xl">
          Descubra onde sua operação{" "}
          <span className="text-foreground/45">está perdendo clientes.</span>
        </h2>

        <div className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-6">
            <p className="text-lede max-w-lg">
              20 minutos. Você sai sabendo o ponto exato onde está perdendo venda.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col sm:flex-row lg:justify-end items-stretch sm:items-center gap-4 sm:gap-6">
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
                className="btn-premium group w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full h-12 px-8 text-[14px] cta-shadow"
              >
                Quero descobrir meu gargalo{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
            <a
              href={PROPOSAL_MAILTO}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors font-sans inline-flex items-center gap-2 justify-center"
              onClick={() => track("final_cta_click", { destination: "email" })}
            >
              <Mail className="h-4 w-4" /> Prefiro receber por e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer — três colunas técnicas ---------------------------------------
function Footer() {
  return (
    <footer className="relative border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid md:grid-cols-12 gap-8 sm:gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img src={"/assets/imperius-logo-official.png"} alt="Imperius Operações Comerciais" className="h-9 w-auto object-contain" loading="lazy" decoding="async" />
              <div className="leading-none">
                <div className="font-heading font-semibold tracking-[0.18em] text-[13px]">IMPERIUS</div>
                <div className="text-mono text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground/75 mt-1.5">
                  Operações comerciais
                </div>
              </div>
            </div>
            <p className="text-card-body max-w-sm">
              Achamos o gargalo. Encurtamos o caminho até a venda.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/75 mb-4">
              S/nav
            </div>
            <ul className="space-y-2.5 text-[13.5px] text-muted-foreground">
              <li><a href="#metodo" className="hover:text-foreground transition-colors">Método</a></li>
              <li><a href="#vitrine" className="hover:text-foreground transition-colors">Caso</a></li>
              <li><a href="#operator" className="hover:text-foreground transition-colors">Operator</a></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Portfólio</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/75 mb-4">
              S/contato
            </div>
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

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground/65">
          <p>© {new Date().getFullYear()} Imperius Operações Comerciais</p>
          <p className="normal-case tracking-normal text-[11px] text-muted-foreground/70 max-w-xl leading-relaxed font-sans">
            Cookies analíticos (GA). Para LGPD, escreva para{" "}
            <a href={PROPOSAL_MAILTO} className="underline hover:text-foreground">
              {PROPOSAL_EMAIL}
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
