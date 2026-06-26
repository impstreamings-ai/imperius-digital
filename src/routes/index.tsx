import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
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

// Marca conceitual recorrente — pequeno losango com halo, usado em nós de fluxo.
function FlowNode({
  cx,
  cy,
  r = 4,
  variant = "default",
}: {
  cx: number;
  cy: number;
  r?: number;
  variant?: "default" | "stuck" | "exit";
}) {
  const fill =
    variant === "stuck"
      ? "oklch(0.62 0.21 22 / 1)"
      : variant === "exit"
      ? "oklch(0.635 0.135 252 / 1)"
      : "oklch(0.95 0 0 / 0.65)";
  const halo =
    variant === "stuck"
      ? "oklch(0.62 0.21 22 / 0.18)"
      : variant === "exit"
      ? "oklch(0.635 0.135 252 / 0.18)"
      : "oklch(0.95 0 0 / 0.08)";
  return (
    <g>
      <circle cx={cx} cy={cy} r={r + 5} fill={halo} />
      <circle cx={cx} cy={cy} r={r} fill={fill} />
    </g>
  );
}

import { trackEvent } from "@/lib/analytics";

const track = (name: string, params: Record<string, unknown> = {}) =>
  trackEvent(name, params);

// --- Sistema --------------------------------------------------------------
// Rótulo de seção formato `S/01 — DIAGNÓSTICO`. Mono, hairline, sem ornamento.
function SectionLabel({
  index,
  question,
  children,
}: {
  index: string;
  question?: string;
  children: ReactNode;
}) {
  return (
    <div className="section-label imp-spine">
      <span className="section-label-mark">S/{index}</span>
      <span aria-hidden className="h-px w-6 bg-border" />
      <span>{children}</span>
      {question ? (
        <>
          <span aria-hidden className="h-px w-4 bg-border/70 hidden sm:inline-block" />
          <span className="hidden sm:inline text-muted-foreground/55 normal-case tracking-[0.14em]">
            {question}
          </span>
        </>
      ) : null}
    </div>
  );
}


// Registration mark — assinatura recorrente em chrome de painéis/footer/nav.
function ImpReg({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={"imp-reg " + className}>
      <i />
    </span>
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
      { property: "og:image", content: "https://imperius-digital.lovable.app/assets/barbearia-alemao-foto.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Imperius — Encontramos o gargalo que está te custando clientes" },
      {
        name: "twitter:description",
        content:
          "Mapeamos onde sua operação perde cliente e encurtamos o caminho entre o contato e a venda. Diagnóstico antes de qualquer proposta.",
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
      <Hero />
      <SectionTransition from="01" to="02" label="Sintomas" question="por que acontece" />
      <Problema />
      <SectionTransition from="02" to="03" label="Caso validado" question="como sabemos" tint />
      <Demonstracoes />
      <SectionTransition from="03" to="04" label="Método" question="como resolvemos" />
      <Metodo />
      <SectionTransition from="04" to="05" label="Operator" question="como aplicamos" tint />
      <Operator />
      <Interlude />
      <FinalCTA />
      <Footer />

    </div>
  );
}

// --- Section transitions — bridge cinematográfico entre capítulos --------
function SectionTransition({
  from,
  to,
  label,
  question,
  tint = false,
}: {
  from: string;
  to: string;
  label: string;
  question?: string;
  tint?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={
        "relative " + (tint ? "surface-tint" : "")
      }
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative flex items-center gap-4 py-10 sm:py-14">
          <span className="chapter-mark shrink-0 tabular-nums">S/{from}</span>
          {question ? (
            <span className="chapter-mark hidden md:inline text-muted-foreground/55 normal-case tracking-[0.16em]">
              · {question}
            </span>
          ) : null}
          <span className="chapter-rail flex-1" />
          <span className="chapter-mark tabular-nums hidden sm:inline">
            <span className="text-foreground/70">S/{to}</span>
            <span className="ml-3 opacity-70">— {label}</span>
          </span>
          <span className="chapter-mark tabular-nums sm:hidden text-foreground/70">
            S/{to}
          </span>
        </div>
      </div>
    </div>
  );
}


// --- Interlude — pausa narrativa antes do CTA final, pull-quote editorial -
function Interlude() {
  return (
    <section className="relative pt-6 pb-2 sm:pt-10 sm:pb-6">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <span className="hidden lg:block lg:col-span-1 chapter-numeral select-none">→</span>
          <p className="lg:col-span-11 pull-quote text-balance">
            Cada etapa a mais{" "}
            <span className="text-foreground/45">é um cliente a menos.</span>
          </p>
        </div>
      </div>
    </section>
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

// --- Hero — abertura de produto, painel único: texto + fluxo na mesma composição
function Hero() {
  return (
    <section
      id="top"
      className="relative pt-20 pb-14 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
        paddingLeft: "max(0px, env(safe-area-inset-left))",
        paddingRight: "max(0px, env(safe-area-inset-right))",
      }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-[0.05]" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[55%] pointer-events-none"
        style={{
          background:
            "radial-gradient(58% 65% at 50% 0%, oklch(0.42 0.09 252 / 0.10), transparent 68%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Eyebrow institucional — pergunta narrativa */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
          <SectionLabel index="01" question="o que acontece">Operações comerciais</SectionLabel>
          <span className="hidden sm:inline-flex items-center gap-2 imp-chip">
            <ImpReg />
            <span>Sorocaba · BR</span>
          </span>
        </div>

        {/* Painel-produto único — texto e fluxo coabitam a mesma superfície */}
        <div className="surface-raised rounded-[var(--radius-card)] overflow-hidden">
          {/* Product chrome — barra técnica superior */}
          <div className="product-chrome">
            <span className="product-chrome-dot" aria-hidden />
            <span>LIVE</span>
            <span aria-hidden className="h-3 w-px bg-border" />
            <span className="hidden sm:inline">Homepage · S/01</span>
            <span aria-hidden className="h-3 w-px bg-border hidden sm:inline-block" />
            <span className="hidden md:inline">Operações comerciais</span>
            <span className="ml-auto tabular-nums">build · 2026.11</span>
          </div>

          <div className="grid lg:grid-cols-12 items-stretch">
            {/* Texto editorial — ocupa 7 col, com padding generoso */}
            <div className="lg:col-span-7 px-6 sm:px-9 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-10 lg:pb-14 relative">
              <h1 className="text-display-mega text-foreground">
                Seu cliente
                <br />
                quer comprar.
                <br />
                <span className="text-foreground/45">Mas não chega até a venda.</span>
              </h1>

              <p className="mt-7 sm:mt-8 max-w-lg text-lede">
                A gente mostra onde ele trava — antes que desista.
              </p>

              <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
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
                    Diagnóstico gratuito{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </a>
                <span className="text-micro-tight">
                  20 min · sem proposta
                </span>
              </div>
            </div>

            {/* Fluxo conceitual — superfície recessada, mesma moldura do texto */}
            <div className="lg:col-span-5 surface-recessed border-t lg:border-t-0 lg:border-l border-border px-6 sm:px-9 lg:px-8 py-10 lg:py-12 flex flex-col justify-center">
              <div className="text-micro-tight mb-5 flex items-center gap-2">
                <span aria-hidden className="h-px w-6 bg-border-strong" />
                <span>sinal · jornada do cliente</span>
              </div>
              <HeroFlow />
            </div>
          </div>

          {/* Status strip inferior */}
          <div className="product-chrome border-t border-b-0 justify-between">
            <span>monitorando · em tempo real</span>
            <span className="hidden sm:inline">parado → intervenção → fechado</span>
            <span className="tabular-nums">↓ S/02</span>
          </div>
        </div>
      </div>
    </section>
  );
}


// Hero — não é interface, é a ideia. Dois caminhos:
// 1) antes  — sinuoso, com bloqueio. Cliente desiste.
// 2) depois — reto, curto, direto à venda.
function HeroFlow() {
  const W = 560;
  const H = 360;
  return (
    <figure
      aria-label="Caminho do cliente: antes e depois da Imperius"
      className="relative"
    >
      {/* moldura mínima — apenas tipografia técnica nas bordas */}
      <div className="flex items-center justify-between text-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground/55 mb-4">
        <span>interesse</span>
        <span>venda</span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
      >
        <defs>
          <linearGradient id="rail-before" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.95 0 0 / 0.35)" />
            <stop offset="55%" stopColor="oklch(0.95 0 0 / 0.35)" />
            <stop offset="56%" stopColor="oklch(0.62 0.21 22 / 0.85)" />
            <stop offset="100%" stopColor="oklch(0.62 0.21 22 / 0)" />
          </linearGradient>
          <linearGradient id="rail-after" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.635 0.135 252 / 0.45)" />
            <stop offset="100%" stopColor="oklch(0.635 0.135 252 / 1)" />
          </linearGradient>
        </defs>

        {/* ────── ANTES: caminho longo, sinuoso, interrompido ────── */}
        <g>
          <text x="0" y="34" className="text-mono" fill="oklch(0.95 0 0 / 0.35)" fontSize="9" letterSpacing="2">
            AGORA
          </text>
          {/* curva winding */}
          <path
            d="M 10 80 C 80 40, 130 130, 200 90 S 320 50, 360 120"
            fill="none"
            stroke="url(#rail-before)"
            strokeWidth="1.25"
            strokeDasharray="0"
          />
          {/* nós ao longo da curva */}
          <FlowNode cx={10} cy={80} />
          <FlowNode cx={95} cy={70} />
          <FlowNode cx={170} cy={105} />
          <FlowNode cx={240} cy={78} />
          <FlowNode cx={310} cy={92} />
          {/* gargalo — pulso radial + cruz com leve tremor */}
          <g>
            {/* halo pulsante */}
            <circle cx={360} cy={120} r={9} fill="oklch(0.62 0.21 22 / 0.35)" className="flow-stuck-pulse" />
            <FlowNode cx={360} cy={120} variant="stuck" r={5} />
            <g className="flow-stuck-jitter">
              <line x1={350} y1={110} x2={370} y2={130} stroke="oklch(0.62 0.21 22 / 0.9)" strokeWidth="1.25" />
              <line x1={370} y1={110} x2={350} y2={130} stroke="oklch(0.62 0.21 22 / 0.9)" strokeWidth="1.25" />
            </g>
            <text x={385} y={124} className="text-mono" fill="oklch(0.62 0.21 22 / 0.95)" fontSize="9" letterSpacing="1.5">
              GARGALO
            </text>
          </g>
          {/* trecho desaparecendo após o gargalo */}
          <path
            d="M 380 138 C 430 170, 480 180, 540 175"
            fill="none"
            stroke="oklch(0.95 0 0 / 0.16)"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          <text x={448} y={196} className="text-mono" fill="oklch(0.95 0 0 / 0.35)" fontSize="9" letterSpacing="1.5">
            cliente desiste
          </text>
        </g>

        {/* ────── intervenção Imperius ────── */}
        <g>
          <line x1={40} y1={228} x2={520} y2={228} stroke="oklch(0.95 0 0 / 0.08)" strokeWidth="1" />
          <text x={40} y={222} className="text-mono" fill="oklch(0.635 0.135 252 / 0.85)" fontSize="9" letterSpacing="2">
            ↓  IMPERIUS  REDUZ  O  CAMINHO
          </text>
        </g>

        {/* ────── DEPOIS: linha reta, curta, direta à venda ────── */}
        <g transform="translate(0, 56)">
          <text x="0" y="234" className="text-mono" fill="oklch(0.635 0.135 252 / 0.9)" fontSize="9" letterSpacing="2">
            COM IMPERIUS
          </text>
          <line
            x1={10}
            y1={278}
            x2={540}
            y2={278}
            stroke="url(#rail-after)"
            strokeWidth="1.5"
          />
          <FlowNode cx={10} cy={278} />
          <FlowNode cx={185} cy={278} />
          <FlowNode cx={360} cy={278} />
          <FlowNode cx={540} cy={278} variant="exit" r={5.5} />
          {/* partícula deslizando ao longo do trilho — venda fluindo */}
          <circle
            r={3.5}
            fill="oklch(0.635 0.135 252 / 1)"
            className="flow-particle"
            style={{ offsetPath: "path('M 10 278 L 540 278')" } as React.CSSProperties}
          />
          <text x={520} y={300} className="text-mono" fill="oklch(0.635 0.135 252 / 0.95)" fontSize="9" letterSpacing="1.5" textAnchor="end">
            VENDA
          </text>
        </g>
      </svg>
    </figure>
  );
}




// --- Problema — lista editorial densa, hairline rows ----------------------
function Problema() {
  const dores = [
    { icon: Calendar, t: "Pediu horário e sumiu", d: "Ninguém retomou." },
    { icon: ClipboardList, t: "Travou no meio", d: "Começou e abandonou." },
    { icon: MessageCircle, t: "Mensagem sem resposta", d: "Quando viram, já era." },
    { icon: Activity, t: "Respondeu rápido e sumiu", d: "Mandou orçamento. Silêncio." },
    { icon: TrendingUp, t: "Não voltou mais", d: "Pediu uma vez. Ninguém chamou." },

  ];

  return (
    <section className="relative pt-6 pb-14 sm:pt-8 sm:pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <SectionLabel index="02" question="por que acontece">Sintomas</SectionLabel>
            <h2 className="text-h2 text-foreground mt-5">
              Reconhece alguma{" "}
              <span className="text-foreground/50">no seu dia?</span>
            </h2>
          </div>
        </div>



        <div aria-hidden className="imp-hairline mb-0" />
        <ul>

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
    <section id="vitrine" className="relative pt-4 pb-20 sm:pt-6 sm:pb-28 surface-tint">
      <span aria-hidden className="chapter-numeral absolute top-2 right-4 sm:right-8 hidden md:block">03</span>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-10">
          <SectionLabel index="03" question="como sabemos">Caso validado</SectionLabel>
          <span className="hidden sm:inline-flex imp-chip">
            <span className="imp-mark imp-mark-primary animate-pulse-glow" />
            <span>ativo · sorocaba</span>
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
              <div className="absolute top-3 left-3 imp-chip bg-background/85 backdrop-blur-md text-foreground/85">
                <span className="imp-mark imp-mark-primary animate-pulse-glow" />
                <span>cliente ativo</span>
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
              Menos passos entre o cliente e o agendamento.
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
                  Tudo num lugar. Contato em um toque.
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
    { n: "01", t: "Achar o gargalo", d: "Onde o cliente trava." },
    { n: "02", t: "Mostrar na tela", d: "Você vê o ponto exato." },
    { n: "03", t: "Calcular o custo", d: "Quanto isso pesa por mês." },
    { n: "04", t: "Conversar", d: "O que resolver primeiro." },
    { n: "05", t: "Propor", d: "Só depois do problema claro." },
  ];

  return (
    <section id="metodo" className="relative pt-6 pb-20 sm:pt-10 sm:pb-24">
      <span aria-hidden className="chapter-numeral absolute top-4 left-4 sm:left-8 hidden md:block">04</span>
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header invertido: descrição à esquerda, título à direita — quebra a previsibilidade */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-14 sm:mb-20">
          <div className="lg:col-span-5 order-2 lg:order-1 self-end">
            <SectionLabel index="04" question="como resolvemos">Método</SectionLabel>
            <p className="text-card-body max-w-md mt-5">
              Sem pular etapa. Sem proposta antes da hora.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 lg:text-right">
            <h2 className="text-h2 text-foreground">
              Cinco passos.{" "}
              <span className="text-foreground/50">Nessa ordem.</span>
            </h2>
          </div>
        </div>


        {/* Timeline editorial vertical com rail central — distintivo das demais seções */}
        <ol className="relative">
          {/* Rail central (desktop) / esquerdo (mobile) */}
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-4 lg:left-1/2 w-px bg-border-strong"
            style={{ background: "var(--color-border-strong)" }}
          />
          {pilares.map((p, i) => {
            const isOdd = i % 2 === 1;
            return (
              <li key={p.n} className="relative pl-12 lg:pl-0 pb-10 sm:pb-14 last:pb-0">
                {/* Nó central */}
                <span
                  aria-hidden
                  className="absolute top-3 left-[11px] lg:left-1/2 lg:-translate-x-1/2 h-2.5 w-2.5 rounded-full bg-background"
                  style={{ boxShadow: "0 0 0 1px var(--color-border-strong), 0 0 0 4px var(--background)" }}
                />
                <div
                  className={
                    "lg:grid lg:grid-cols-2 lg:gap-16 " +
                    (isOdd ? "" : "")
                  }
                >
                  <div
                    className={
                      "lg:flex " +
                      (isOdd ? "lg:col-start-2 lg:justify-start" : "lg:col-start-1 lg:justify-end lg:text-right")
                    }
                  >
                    <div className="max-w-sm">
                      <div className={"flex items-baseline gap-3 mb-2.5 " + (isOdd ? "lg:justify-start" : "lg:justify-end")}>
                        <span className="text-mono text-[44px] sm:text-[56px] leading-none tracking-[-0.05em] text-foreground/90 font-semibold tabular-nums">
                          {p.n}
                        </span>
                        {i === pilares.length - 1 ? (
                          <span className="text-mono text-[9.5px] tracking-[0.22em] uppercase text-primary/85">
                            fim
                          </span>
                        ) : (
                          <span className="text-mono text-[9.5px] tracking-[0.22em] uppercase text-muted-foreground/55">
                            etapa
                          </span>
                        )}
                      </div>
                      <h3 className="text-card-title text-[17px]">{p.t}</h3>
                      <p className="mt-2 text-card-body">{p.d}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}



// --- Operator — representação conceitual de recuperação de oportunidade ---
// Não é um painel. Não é uma fila. É a ideia: um cliente trava no caminho,
// a Imperius reabre a rota e a oportunidade volta a se mover até a venda.
function Operator() {
  return (
    <section id="operator" className="relative pt-4 pb-20 sm:pt-6 sm:pb-24 surface-tint">
      <span aria-hidden className="chapter-numeral absolute top-2 right-4 sm:right-8 hidden md:block">05</span>
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-10 sm:mb-14">
          <div className="lg:col-span-6">
            <SectionLabel index="05" question="como aplicamos">Imperius Operator</SectionLabel>
            <h2 className="text-h2 text-foreground mt-5">
              O cliente travou.{" "}
              <span className="text-foreground/50">A gente reabre o caminho.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-lede max-w-md">
              Onde o processo para, alguém é avisado. A oportunidade volta a se mover.
            </p>
          </div>
        </div>

        {/* Painel-produto: o Operator deixa de ser ilustração e vira demonstração viva */}
        <div className="surface-raised rounded-[var(--radius-card)] overflow-hidden">
          <div className="product-chrome">
            <span className="product-chrome-dot" aria-hidden />
            <span>MONITORANDO</span>
            <span aria-hidden className="h-3 w-px bg-border" />
            <span className="hidden sm:inline">fluxo comercial</span>
            <span aria-hidden className="h-3 w-px bg-border hidden sm:inline-block" />
            <span className="hidden md:inline operator-sync">sync · agora</span>
            <span className="ml-auto tabular-nums">S/05</span>
          </div>

          <div className="px-3 sm:px-6 lg:px-8 py-8 sm:py-10">
            <RecoveryFlow />
          </div>

          <div className="product-chrome justify-between" style={{ borderBottom: 0, borderTop: "1px solid var(--color-border)" }}>
            <span>parado → intervenção → fechado</span>
            <span className="hidden sm:inline">demonstração contínua · sem dados pessoais</span>
            <span className="tabular-nums">↓ S/06</span>
          </div>
        </div>
      </div>
    </section>
  );
}


// Diagrama: três estágios sequenciais. A meio caminho a oportunidade trava.
// Uma rota auxiliar (Imperius) desvia o nó parado de volta ao fluxo principal.
function RecoveryFlow() {
  const W = 980;
  const H = 360;
  // pontos chave do trilho principal
  const Y = 170;
  const stops = [
    { x: 70, label: "contato" },
    { x: 290, label: "interesse" },
    { x: 510, label: "parado", stuck: true },
    { x: 730, label: "retomada" },
    { x: 910, label: "fechado", exit: true },
  ];

  return (
    <figure aria-label="Recuperação de oportunidade: caminho que volta a fluir" className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img">
        <defs>
          <linearGradient id="op-main" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.95 0 0 / 0.35)" />
            <stop offset="50%" stopColor="oklch(0.95 0 0 / 0.35)" />
            <stop offset="51%" stopColor="oklch(0.62 0.21 22 / 0.7)" />
            <stop offset="74%" stopColor="oklch(0.62 0.21 22 / 0.35)" />
            <stop offset="75%" stopColor="oklch(0.635 0.135 252 / 0.55)" />
            <stop offset="100%" stopColor="oklch(0.635 0.135 252 / 1)" />
          </linearGradient>
          <linearGradient id="op-detour" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.635 0.135 252 / 0)" />
            <stop offset="30%" stopColor="oklch(0.635 0.135 252 / 0.95)" />
            <stop offset="100%" stopColor="oklch(0.635 0.135 252 / 0.95)" />
          </linearGradient>
        </defs>

        {/* eixos editoriais — somente referência sutil */}
        <line x1={40} y1={H - 24} x2={W - 40} y2={H - 24} stroke="oklch(0.95 0 0 / 0.05)" strokeWidth="1" />
        <text x={40} y={H - 8} className="text-mono" fill="oklch(0.95 0 0 / 0.3)" fontSize="9" letterSpacing="2">
          TEMPO  →
        </text>

        {/* Trilho principal */}
        <line x1={stops[0].x} y1={Y} x2={stops[stops.length - 1].x} y2={Y} stroke="url(#op-main)" strokeWidth="1.5" />

        {/* Desvio da Imperius: o arco se desenha, a etiqueta sobe junto. */}
        <g>
          <path
            d={`M ${stops[2].x} ${Y} C ${stops[2].x + 40} ${Y - 110}, ${stops[3].x - 40} ${Y - 110}, ${stops[3].x} ${Y}`}
            fill="none"
            stroke="url(#op-detour)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="flow-detour"
          />
          {/* seta no fim do arco — entra junto com a etiqueta */}
          <g className="flow-label">
            <path
              d={`M ${stops[3].x - 8} ${Y - 8} L ${stops[3].x} ${Y} L ${stops[3].x - 10} ${Y + 2}`}
              fill="none"
              stroke="oklch(0.635 0.135 252 / 0.95)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <g transform={`translate(${(stops[2].x + stops[3].x) / 2}, ${Y - 96})`}>
              <text textAnchor="middle" className="text-mono" fill="oklch(0.635 0.135 252 / 0.95)" fontSize="10" letterSpacing="2.5">
                IMPERIUS · intervenção
              </text>
              <text y={16} textAnchor="middle" className="text-mono" fill="oklch(0.95 0 0 / 0.45)" fontSize="9" letterSpacing="1.5">
                alguém é avisado. a oportunidade volta a andar.
              </text>
            </g>
          </g>
        </g>

        {/* nós + rótulos do trilho */}
        {stops.map((s, i) => {
          const variant: "default" | "stuck" | "exit" = s.stuck ? "stuck" : s.exit ? "exit" : "default";
          return (
            <g key={s.label}>
              {s.stuck ? (
                <circle cx={s.x} cy={Y} r={10} fill="oklch(0.62 0.21 22 / 0.35)" className="flow-stuck-pulse" />
              ) : null}
              <FlowNode cx={s.x} cy={Y} variant={variant} r={s.exit ? 6 : s.stuck ? 5.5 : 4} />
              <text
                x={s.x}
                y={Y + 34}
                textAnchor="middle"
                className="text-mono"
                fill={
                  s.stuck
                    ? "oklch(0.62 0.21 22 / 0.95)"
                    : s.exit
                    ? "oklch(0.635 0.135 252 / 0.95)"
                    : "oklch(0.95 0 0 / 0.55)"
                }
                fontSize="10"
                letterSpacing="2"
              >
                {String(i + 1).padStart(2, "0")} · {s.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* indicador "parado há tempo demais" — apenas conceitual, sem KPI */}
        <g transform={`translate(${stops[2].x}, ${Y + 70})`}>
          <line x1={0} y1={-6} x2={0} y2={6} stroke="oklch(0.62 0.21 22 / 0.6)" strokeWidth="1" />
          <text textAnchor="middle" y={22} className="text-mono" fill="oklch(0.62 0.21 22 / 0.85)" fontSize="9" letterSpacing="1.5">
            limite ultrapassado
          </text>
        </g>

        {/* assinatura técnica nas margens */}
        <text x={40} y={36} className="text-mono" fill="oklch(0.95 0 0 / 0.35)" fontSize="9" letterSpacing="2.5">
          OPERAÇÃO · FLUXO COMERCIAL
        </text>
        <text x={W - 40} y={36} textAnchor="end" className="text-mono" fill="oklch(0.95 0 0 / 0.35)" fontSize="9" letterSpacing="2">
          S/05
        </text>
      </svg>
    </figure>
  );
}


// --- Final CTA — tipografia de presença -----------------------------------
function FinalCTA() {
  const passos = [
    { n: "01", t: "Conversa de 20 min", d: "Você descreve a operação. A gente escuta." },
    { n: "02", t: "Diagnóstico em tela", d: "Mostramos onde o cliente trava — com você junto." },
    { n: "03", t: "Próximo passo", d: "Decidir juntos. Sem proposta antes do problema claro." },
  ];
  return (
    <section className="relative pt-14 pb-24 sm:pt-20 sm:pb-32 overflow-hidden">
      <span aria-hidden className="chapter-numeral absolute top-6 left-4 sm:left-8 hidden md:block">06</span>
      <div className="absolute inset-0 bg-grid opacity-[0.06] pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8">
          <SectionLabel index="06" question="começamos por uma conversa">Próximo passo</SectionLabel>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-display-xl text-foreground">
              Comece pelo{" "}
              <span className="text-foreground/45">diagnóstico.</span>
            </h2>
            <p className="mt-7 text-lede max-w-lg">
              Uma conversa curta. Sem proposta. O começo de uma relação de longo prazo.
            </p>

            <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
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
                  Começar uma conversa{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <a
                href={PROPOSAL_MAILTO}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors font-sans inline-flex items-center gap-2 justify-center sm:justify-start"
                onClick={() => track("final_cta_click", { destination: "email" })}
              >
                <Mail className="h-4 w-4" /> Por e-mail
              </a>
            </div>
          </div>

          {/* O que acontece depois — painel-produto, três passos */}
          <div className="lg:col-span-5">
            <div className="surface-raised rounded-[var(--radius-card)] overflow-hidden">
              <div className="product-chrome">
                <span className="product-chrome-dot" aria-hidden />
                <span>O QUE ACONTECE DEPOIS</span>
                <span className="ml-auto tabular-nums">3 etapas</span>
              </div>
              <ol className="divide-y divide-border">
                {passos.map((p) => (
                  <li key={p.n} className="grid grid-cols-[auto_1fr] gap-5 px-5 sm:px-6 py-5">
                    <span className="text-mono text-[22px] leading-none tabular-nums text-foreground/85 font-semibold pt-[2px]">
                      {p.n}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-card-title">{p.t}</h3>
                      <p className="mt-1 text-card-body">{p.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// --- Footer — três colunas técnicas ---------------------------------------
function Footer() {
  return (
    <footer className="relative">
      <div aria-hidden className="imp-hairline" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-12 pb-10">
        {/* Cartouche de marca — registration marks emoldurando o monograma */}
        <div className="flex items-center justify-between gap-4 mb-10">
          <div className="inline-flex items-center gap-3">
            <ImpReg />
            <span className="font-heading font-semibold tracking-[0.18em] text-[12.5px]">IMPERIUS</span>
            <span className="text-mono text-[9.5px] tracking-[0.22em] uppercase text-muted-foreground/70">
              / Operações comerciais
            </span>
            <ImpReg />
          </div>
          <span className="hidden sm:inline-flex imp-chip">
            <span>S/footer</span>
          </span>
        </div>

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
              Achamos o gargalo. Encurtamos o caminho.
            </p>

          </div>

          <div className="md:col-span-3">
            <div className="section-label imp-spine mb-4">
              <span className="section-label-mark">S/nav</span>
            </div>
            <ul className="space-y-2.5 text-[13.5px] text-muted-foreground">
              <li><a href="#metodo" className="hover:text-foreground transition-colors">Método</a></li>
              <li><a href="#vitrine" className="hover:text-foreground transition-colors">Caso</a></li>
              <li><a href="#operator" className="hover:text-foreground transition-colors">Operator</a></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Portfólio</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="section-label imp-spine mb-4">
              <span className="section-label-mark">S/contato</span>
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

        <div aria-hidden className="imp-hairline mt-12" />
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground/65">
          <p>© {new Date().getFullYear()} Imperius Operações Comerciais</p>
          <p className="normal-case tracking-normal text-[11px] text-muted-foreground/70 font-sans">
            GA · LGPD:{" "}
            <a href={PROPOSAL_MAILTO} className="underline hover:text-foreground">
              {PROPOSAL_EMAIL}
            </a>
          </p>

        </div>
      </div>
    </footer>
  );

}
