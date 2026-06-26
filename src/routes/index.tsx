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
    <div className="section-label imp-spine">
      <span className="section-label-mark">S/{index}</span>
      <span aria-hidden className="h-px w-6 bg-border" />
      <span>{children}</span>
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
      <SectionTransition from="01" to="02" label="Sintomas" />
      <Problema />
      <SectionTransition from="02" to="03" label="Caso validado" tint />
      <Demonstracoes />
      <SectionTransition from="03" to="04" label="Método" />
      <Metodo />
      <SectionTransition from="04" to="05" label="Operator" tint />
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
  tint = false,
}: {
  from: string;
  to: string;
  label: string;
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

// --- Hero — abertura de produto, composição editorial assimétrica --------
function Hero() {
  return (
    <section
      id="top"
      className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
        paddingLeft: "max(0px, env(safe-area-inset-left))",
        paddingRight: "max(0px, env(safe-area-inset-right))",
      }}
    >
      {/* Fundo: hairline grid silencioso + halo central, sem partículas decorativas */}
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
        {/* Metadata editorial */}
        <div className="flex items-center justify-between gap-4 mb-12 sm:mb-14 lg:mb-16">
          <SectionLabel index="01">Imperius Operator</SectionLabel>
          <span className="hidden sm:inline-flex items-center gap-2 imp-chip">
            <ImpReg />
            <span>v2.4 · Sorocaba/SP</span>
          </span>
        </div>


        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          {/* Coluna esquerda — peso editorial */}
          <div className="lg:col-span-6">
            <h1 className="text-display text-foreground">
              Seu cliente
              <br />
              quer comprar.
              <br />
              <span className="text-foreground/45">Mas não chega até a venda.</span>
            </h1>

            <p className="mt-7 sm:mt-8 max-w-lg text-lede">
              O Imperius monitora cada conversa, identifica o ponto exato onde o cliente trava e avisa antes que ele desista.
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
                  Quero meu diagnóstico gratuito{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <span className="text-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground/75">
                20 min · sem proposta antes
              </span>
            </div>

            {/* Metas hairline — densidade de produto, sem virar dashboard */}
            <div className="mt-12 sm:mt-14 pt-6 border-t border-border/70 grid grid-cols-3 gap-6 max-w-lg">
              <MetaStat k="Monitoramento" v="24/7" />
              <MetaStat k="Latência média" v="< 90s" />
              <MetaStat k="Piloto" v="Sorocaba" />
            </div>
          </div>

          {/* Coluna direita — prévia funcional do Operator */}
          <div className="lg:col-span-6">
            <OperatorPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaStat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/55">
        {k}
      </div>
      <div className="mt-1.5 text-mono text-[14px] text-foreground/90 tabular-nums">{v}</div>
    </div>
  );
}

function OperatorPanel() {
  const stages = [
    { label: "Contato", state: "done" as const },
    { label: "Resposta", state: "done" as const },
    { label: "Diagnóstico", state: "stuck" as const },
    { label: "Proposta", state: "pending" as const },
    { label: "Fechamento", state: "pending" as const },
  ];

  return (
    <figure
      aria-label="Prévia funcional do Imperius Operator"
      className="relative tech-frame rounded-card overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.168 0.011 256 / 0.92), oklch(0.128 0.009 256 / 0.94))",
        borderColor: "var(--border-strong)",
        borderWidth: 1,
        borderStyle: "solid",
        boxShadow: "var(--shadow-3)",
        backdropFilter: "blur(12px)",
      }}
    >
      <span className="tech-frame__bl" />
      <span className="tech-frame__br" />

      {/* Chrome */}
      <div className="console-chrome">
        <ImpReg />
        <span className="ml-1 text-foreground/65">operator · pipeline</span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-foreground/85">
          <span className="imp-mark imp-mark-primary animate-pulse-glow" />
          <span className="text-mono">live</span>
        </span>
      </div>


      <div className="p-5 sm:p-6 space-y-6">
        {/* Oportunidade */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="text-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/55">
              Oportunidade · #OP-1284
            </div>
            <div className="mt-1.5 text-[15px] font-semibold text-foreground truncate">
              Marcos R. — Barbearia
            </div>
            <div className="mt-0.5 text-[12px] text-muted-foreground">
              Origem: WhatsApp · Atendente: Júlia
            </div>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-mono text-[10px] tracking-[0.16em] uppercase border border-destructive/35 text-destructive/90 bg-destructive/[0.06]">
            <AlertTriangle className="h-3 w-3" /> Gargalo
          </span>
        </div>

        {/* Pipeline stepper */}
        <div>
          <div className="relative">
            <div className="absolute left-[7px] right-[7px] top-[6.5px] h-px bg-border" aria-hidden />
            <div
              className="absolute left-[7px] top-[6.5px] h-px bg-primary/55 operator-rail-draw"
              style={{ width: "calc(50% - 7px)" }}
              aria-hidden
            />
            <ol className="relative grid grid-cols-5 gap-1">
              {stages.map((s) => {
                const isStuck = s.state === "stuck";
                const isDone = s.state === "done";
                return (
                  <li key={s.label} className="flex flex-col items-start gap-2.5">
                    <span
                      className={
                        "relative h-3.5 w-3.5 rounded-full border " +
                        (isStuck
                          ? "bg-destructive border-destructive/40 operator-stuck"
                          : isDone
                            ? "bg-primary border-primary/40"
                            : "bg-card border-border")
                      }
                    />
                    <span
                      className={
                        "text-mono text-[9.5px] tracking-[0.14em] uppercase " +
                        (isStuck
                          ? "text-destructive/90"
                          : isDone
                            ? "text-foreground/75"
                            : "text-muted-foreground/50")
                      }
                    >
                      {s.label}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Métrica crítica + conversa */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-border bg-foreground/[0.02] p-4">
            <div className="text-mono text-[9.5px] tracking-[0.2em] uppercase text-muted-foreground/60">
              Tempo parado
            </div>
            <div className="mt-2 text-mono text-[24px] leading-none text-foreground tabular-nums">
              02:14
              <span className="text-muted-foreground/55 text-[13px] ml-1">h</span>
            </div>
            <div className="mt-2 text-[11px] text-muted-foreground">
              Acima do limite (45 min)
            </div>
          </div>
          <div className="rounded-lg border border-border bg-foreground/[0.02] p-4">
            <div className="text-mono text-[9.5px] tracking-[0.2em] uppercase text-muted-foreground/60">
              Conversa
            </div>
            <div className="mt-2 text-[12.5px] text-foreground/90 leading-snug">
              Cliente leu o orçamento. Sem retorno.
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 text-mono text-[10px] text-muted-foreground/70">
              <MessageCircle className="h-3 w-3" /> WhatsApp · 14:32
            </div>
          </div>
        </div>

        {/* Próxima ação sugerida */}
        <div className="flex items-center justify-between gap-4 rounded-lg border border-primary/25 bg-primary/[0.05] px-4 py-3">
          <div className="min-w-0">
            <div className="text-mono text-[9.5px] tracking-[0.2em] uppercase text-primary/85">
              Próxima ação sugerida
            </div>
            <div className="mt-1 text-[13px] text-foreground truncate">
              Retomar conversa com prova social local
            </div>
          </div>
          <span
            aria-hidden
            className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-primary/30 px-2.5 py-1.5 text-mono text-[10px] tracking-[0.16em] uppercase text-foreground/90"
          >
            Executar <ArrowRight className="h-3 w-3" />
          </span>
        </div>

        {/* Footer técnico */}
        <div className="flex items-center justify-between pt-1 text-mono text-[9.5px] tracking-[0.18em] uppercase text-muted-foreground/55">
          <span className="inline-flex items-center gap-1.5 operator-sync">
            <CheckCircle2 className="h-3 w-3 text-primary/70" />
            Sincronizado · há 12s
          </span>
          <span>OP-1284 · t+02h14</span>
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
    <section className="relative pt-6 pb-14 sm:pt-8 sm:pb-20">
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
    <section id="vitrine" className="relative pt-4 pb-20 sm:pt-6 sm:pb-28 surface-tint">
      <span aria-hidden className="chapter-numeral absolute top-2 right-4 sm:right-8 hidden md:block">03</span>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-10">
          <SectionLabel index="03">Caso validado</SectionLabel>
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
    <section id="metodo" className="relative pt-6 pb-20 sm:pt-10 sm:pb-24">
      <span aria-hidden className="chapter-numeral absolute top-4 left-4 sm:left-8 hidden md:block">04</span>
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header invertido: descrição à esquerda, título à direita — quebra a previsibilidade */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 mb-14 sm:mb-20">
          <div className="lg:col-span-5 order-2 lg:order-1 self-end">
            <SectionLabel index="04">Método Imperius</SectionLabel>
            <p className="text-card-body max-w-md mt-5">
              Processo aplicado em toda operação que entra na Imperius. Sem pular etapa, sem proposta antecipada.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 lg:text-right">
            <h2 className="text-h2 text-foreground">
              Cinco passos.{" "}
              <span className="text-foreground/50">Sempre nessa ordem.</span>
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



// --- Operator — painel de produto: fila de oportunidades + detalhe -------
type Risk = "high" | "med" | "low";
type OpRow = {
  id: string;
  client: string;
  channel: string;
  owner: string;
  lastMsg: string;
  stuckMin: number;
  risk: Risk;
  stage: string;
  action: string;
};

const QUEUE: OpRow[] = [
  {
    id: "OP-1284",
    client: "Marcos R.",
    channel: "WhatsApp",
    owner: "Júlia",
    lastMsg: "Leu o orçamento. Sem retorno.",
    stuckMin: 134,
    risk: "high",
    stage: "Diagnóstico",
    action: "Retomar com prova social local",
  },
  {
    id: "OP-1283",
    client: "Aline F.",
    channel: "Instagram",
    owner: "Bruno",
    lastMsg: "Pediu horário sábado. Aguardando confirmação.",
    stuckMin: 42,
    risk: "med",
    stage: "Agenda",
    action: "Confirmar slot 10:30",
  },
  {
    id: "OP-1281",
    client: "Henrique L.",
    channel: "WhatsApp",
    owner: "Júlia",
    lastMsg: "Cliente respondeu. Aguardando proposta.",
    stuckMin: 18,
    risk: "low",
    stage: "Proposta",
    action: "Enviar orçamento padrão",
  },
  {
    id: "OP-1279",
    client: "Camila T.",
    channel: "Site",
    owner: "—",
    lastMsg: "Preencheu formulário. Ninguém respondeu.",
    stuckMin: 312,
    risk: "high",
    stage: "Contato",
    action: "Atribuir atendente · responder agora",
  },
];

function fmtStuck(min: number) {
  if (min < 60) return `${min}m`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h}h${m.toString().padStart(2, "0")}`;
}

function RiskDot({ r }: { r: Risk }) {
  const map: Record<Risk, string> = {
    high: "bg-destructive operator-stuck",
    med: "bg-accent",
    low: "bg-primary",
  };
  return <span className={"h-1.5 w-1.5 rounded-full " + map[r]} aria-hidden />;
}

function RiskLabel({ r }: { r: Risk }) {
  const map: Record<Risk, { t: string; cls: string }> = {
    high: { t: "Alto", cls: "text-destructive/90 border-destructive/35 bg-destructive/[0.06]" },
    med: { t: "Médio", cls: "text-accent border-accent/35 bg-accent/[0.06]" },
    low: { t: "Baixo", cls: "text-primary/90 border-primary/30 bg-primary/[0.05]" },
  };
  const v = map[r];
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-mono text-[9.5px] tracking-[0.16em] uppercase border " +
        v.cls
      }
    >
      <RiskDot r={r} /> {v.t}
    </span>
  );
}

function Operator() {
  const [selected, setSelected] = useState<string>(QUEUE[0].id);
  const op = QUEUE.find((q) => q.id === selected) ?? QUEUE[0];

  const stats = {
    total: QUEUE.length,
    high: QUEUE.filter((q) => q.risk === "high").length,
    unassigned: QUEUE.filter((q) => q.owner === "—").length,
  };

  return (
    <section id="operator" className="relative pt-4 pb-20 sm:pt-6 sm:pb-24 surface-tint">
      <span aria-hidden className="chapter-numeral absolute top-2 right-4 sm:right-8 hidden md:block">05</span>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <SectionLabel index="05">Imperius Operator</SectionLabel>
          <span className="hidden sm:inline-flex imp-chip">
            <ImpReg />
            <span>instância · sorocaba/sp</span>
          </span>

        </div>

        <div
          className="relative tech-frame overflow-hidden rounded-card"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.168 0.011 256 / 0.92), oklch(0.128 0.009 256 / 0.94))",
            borderColor: "var(--border-strong)",
            borderWidth: 1,
            borderStyle: "solid",
            boxShadow: "var(--shadow-3)",
            backdropFilter: "blur(12px)",
          }}
        >
          <span className="tech-frame__bl" />
          <span className="tech-frame__br" />

          {/* Chrome */}
          <div className="console-chrome">
            <ImpReg />
            <span className="ml-1 text-foreground/65">operator · fila ativa</span>
            <span className="ml-auto inline-flex items-center gap-4 text-foreground/85">
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <span className="text-muted-foreground/55">abertas</span>
                <span className="text-mono tabular-nums text-foreground/90">{stats.total}</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <span className="text-muted-foreground/55">risco alto</span>
                <span className="text-mono tabular-nums text-destructive/90">{stats.high}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="imp-mark imp-mark-primary animate-pulse-glow" />
                <span className="text-mono">live</span>
              </span>
            </span>
          </div>


          <div className="grid lg:grid-cols-[1.15fr_1fr]">
            {/* Coluna esquerda: fila */}
            <div className="lg:border-r border-border">
              {/* table header */}
              <div className="hidden sm:grid grid-cols-[auto_1fr_auto_auto] gap-4 px-5 sm:px-6 py-2.5 border-b border-border text-mono text-[9.5px] tracking-[0.2em] uppercase text-muted-foreground/55">
                <span>#</span>
                <span>Cliente · última interação</span>
                <span className="text-right">Parado</span>
                <span className="text-right">Risco</span>
              </div>

              <ul className="divide-y divide-border">
                {QUEUE.map((q) => {
                  const active = q.id === selected;
                  return (
                    <li key={q.id}>
                      <button
                        type="button"
                        onClick={() => setSelected(q.id)}
                        aria-pressed={active}
                        className={
                          "w-full text-left grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_auto_auto] gap-3 sm:gap-4 px-5 sm:px-6 py-4 transition-colors duration-200 " +
                          (active
                            ? "bg-primary/[0.05] border-l-2 border-l-primary/70 pl-[18px] sm:pl-[22px]"
                            : "border-l-2 border-l-transparent hover:bg-foreground/[0.02]")
                        }
                      >
                        <span className="text-mono text-[10.5px] tracking-[0.14em] uppercase text-muted-foreground/65 self-center tabular-nums">
                          {q.id}
                        </span>
                        <span className="min-w-0">
                          <span className="flex items-center gap-2">
                            <span className="text-[13.5px] font-semibold text-foreground truncate">
                              {q.client}
                            </span>
                            <span className="text-mono text-[9.5px] tracking-[0.16em] uppercase text-muted-foreground/55">
                              {q.channel}
                            </span>
                          </span>
                          <span className="block mt-0.5 text-[12px] text-muted-foreground truncate">
                            {q.lastMsg}
                          </span>
                        </span>
                        <span className="text-mono text-[12px] text-foreground/85 tabular-nums self-center text-right">
                          {fmtStuck(q.stuckMin)}
                        </span>
                        <span className="hidden sm:flex justify-end self-center">
                          <RiskLabel r={q.risk} />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Coluna direita: detalhe da oportunidade selecionada */}
            <div className="p-5 sm:p-6 lg:p-7 space-y-5 border-t lg:border-t-0 border-border">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-mono text-[9.5px] tracking-[0.2em] uppercase text-muted-foreground/55">
                    Oportunidade · {op.id}
                  </div>
                  <div className="mt-1 text-[15px] font-semibold text-foreground truncate">
                    {op.client}
                  </div>
                  <div className="mt-0.5 text-[11.5px] text-muted-foreground">
                    {op.channel} · etapa {op.stage} · resp. {op.owner}
                  </div>
                </div>
                <RiskLabel r={op.risk} />
              </div>

              {/* Tempo + risco visual */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-border bg-foreground/[0.02] p-3.5">
                  <div className="text-mono text-[9.5px] tracking-[0.2em] uppercase text-muted-foreground/60">
                    Parado há
                  </div>
                  <div className="mt-1.5 text-mono text-[22px] leading-none text-foreground tabular-nums">
                    {fmtStuck(op.stuckMin)}
                  </div>
                  <div className="mt-2 text-[10.5px] text-muted-foreground">
                    Limite: 45m
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-foreground/[0.02] p-3.5">
                  <div className="text-mono text-[9.5px] tracking-[0.2em] uppercase text-muted-foreground/60">
                    Conversa
                  </div>
                  <div className="mt-1.5 text-[12px] text-foreground/90 leading-snug line-clamp-2">
                    {op.lastMsg}
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-mono text-[9.5px] tracking-[0.14em] uppercase text-muted-foreground/65">
                    <MessageCircle className="h-3 w-3" /> {op.channel}
                  </div>
                </div>
              </div>

              {/* Próxima ação */}
              <div className="rounded-lg border border-primary/25 bg-primary/[0.05] px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-mono text-[9.5px] tracking-[0.2em] uppercase text-primary/85">
                      Próxima ação sugerida
                    </div>
                    <div className="mt-1 text-[13px] text-foreground truncate">
                      {op.action}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-primary/30 px-2.5 py-1.5 text-mono text-[10px] tracking-[0.16em] uppercase text-foreground/90"
                  >
                    Executar <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>

              {/* Footer técnico do painel */}
              <div className="flex items-center justify-between pt-1 text-mono text-[9.5px] tracking-[0.18em] uppercase text-muted-foreground/55">
                <span className="inline-flex items-center gap-1.5 operator-sync">
                  <CheckCircle2 className="h-3 w-3 text-primary/70" />
                  Sincronizado · há 12s
                </span>
                <span>turno · júlia + bruno</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA — fora do quadro do produto, peso editorial */}
        <div className="mt-10 grid lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          <p className="lg:col-span-7 text-lede max-w-2xl">
            Cada oportunidade tem um cronômetro. Quando passa do limite, alguém é avisado antes do cliente desistir.
          </p>
          <div className="lg:col-span-5 lg:justify-self-end w-full lg:w-auto">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("operator_cta_click", { destination: "whatsapp" })}
              className="btn-premium group w-full lg:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground text-[13px] font-sans font-semibold cta-shadow"
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
    <section className="relative pt-12 pb-24 sm:pt-16 sm:pb-32 overflow-hidden">
      <span aria-hidden className="chapter-numeral absolute top-6 left-4 sm:left-8 hidden md:block">06</span>
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
