import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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

      <div className="relative mx-auto max-w-5xl w-full text-center">
        <h1 className="text-display-mega text-foreground mx-auto max-w-[20ch]">
          Encurtamos o caminho{" "}
          <span className="text-foreground/45">entre o cliente e a venda.</span>
        </h1>

        <p className="mt-6 sm:mt-8 text-lede max-w-xl mx-auto">
          Em toda operação existe um ponto onde ele desiste.
        </p>

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-5">
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
          <span className="text-micro-tight">20 min · sem proposta</span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CAPÍTULO 2 — IDENTIFICAÇÃO
   Composição: assimétrica 4/8. Título fixo à esquerda, cenas numeradas à direita.
   Densidade alta. Lista cronológica. Sem cards.
   ============================================================ */
function Identificacao() {
  const cenas = [
    { icon: ClipboardList, t: "Pediu orçamento. Sumiu.", d: "Leu a mensagem. Nunca respondeu." },
    { icon: MessageCircle, t: "Mensagem chegou. Ninguém viu.", d: "Quando alguém abriu, já era tarde." },
    { icon: Activity, t: "Respondeu rápido. Sumiu igual.", d: "Tempo certo. Silêncio do outro lado." },
    { icon: Calendar, t: "Marcou horário. Não apareceu.", d: "Sem confirmação. Cadeira vazia." },
    { icon: TrendingUp, t: "Veio uma vez. Não voltou.", d: "Ninguém chamou de novo." },
  ];

  return (
    <section id="identificacao" className="relative section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="text-mono text-[10.5px] uppercase tracking-[0.24em] text-muted-foreground/70 mb-5">
                02 — Sintomas
              </p>
              <h2 className="text-h2 text-foreground text-balance">
                Acontece toda semana.{" "}
                <span className="text-foreground/45">Mais de uma vez.</span>
              </h2>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div aria-hidden className="imp-hairline mb-0" />
            <ol>
              {cenas.map((c, i) => (
                <li key={c.t} className="row-editorial">
                  <div className="flex items-baseline gap-2.5 shrink-0 mt-1 sm:mt-1.5">
                    <span className="text-mono text-[10px] sm:text-[10.5px] tracking-[0.22em] text-muted-foreground/55 tabular-nums w-5 sm:w-6">
                      0{i + 1}
                    </span>
                    <c.icon className="h-[15px] w-[15px] text-muted-foreground/55" aria-hidden />
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
          <p className="text-mono text-[10.5px] uppercase tracking-[0.24em] text-muted-foreground/55 mb-4 sm:mb-6">
            O que a maioria faz
          </p>
          <p className="text-h2 text-foreground/40 line-through decoration-foreground/20 decoration-1 underline-offset-[6px] text-balance">
            Troca de sistema, contrata agência, anuncia mais.
          </p>
        </div>
        <div className="px-5 sm:px-8 lg:px-12 py-12 sm:py-24 lg:py-28">
          <p className="text-mono text-[10.5px] uppercase tracking-[0.24em] text-primary/80 mb-4 sm:mb-6">
            O que Imperius faz
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
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Cabeçalho editorial */}
        <header className="grid lg:grid-cols-12 gap-6 lg:gap-14 items-end mb-10 lg:mb-14">
          <div className="lg:col-span-7">
            <p className="text-mono text-[10.5px] uppercase tracking-[0.24em] text-muted-foreground/70 mb-4">
              04 — Prova · Sorocaba/SP
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
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/85 border border-border backdrop-blur-md text-[10.5px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              Cliente real · ativo
            </div>
            <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-primary/95 text-primary-foreground text-[12px] font-semibold transition-transform group-hover:-translate-y-0.5">
              Abrir projeto <ExternalLink className="h-3.5 w-3.5" />
            </div>
          </div>
        </a>

        {/* Narrativa: Problema → Intervenção → Resultado */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="flex items-center gap-3 mb-8 lg:mb-10">
            <span className="text-mono text-[10.5px] uppercase tracking-[0.24em] text-muted-foreground/70">
              Linha do caso
            </span>
            <span className="h-px flex-1 bg-border/60" aria-hidden />
          </div>

          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border/50 border border-border/50 rounded-[var(--radius-card)] overflow-hidden">
            {acts.map((a, i) => {
              const isLast = i === acts.length - 1;
              return (
                <li
                  key={a.kicker}
                  className="relative bg-background px-6 sm:px-8 py-10 sm:py-12 lg:py-14 flex flex-col"
                >
                  <div className="flex items-baseline justify-between mb-8">
                    <span
                      className={`text-mono text-[10.5px] uppercase tracking-[0.24em] ${
                        a.tone === "primary" ? "text-primary" : "text-muted-foreground/70"
                      }`}
                    >
                      {a.kicker}
                    </span>
                    <span className="text-mono text-[10px] tracking-[0.2em] text-muted-foreground/40">
                      0{i + 1} / 03
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
                      className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-6 w-6 items-center justify-center rounded-full bg-background border border-border text-muted-foreground/70"
                    >
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  )}
                  {/* Conector direcional — mobile */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="lg:hidden absolute left-1/2 -bottom-3 -translate-x-1/2 z-10 h-6 w-6 flex items-center justify-center rounded-full bg-background border border-border text-muted-foreground/70 rotate-90"
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
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className="text-mono text-[10.5px] uppercase tracking-[0.24em] text-muted-foreground/70 mb-5">
                05 — Método
              </p>
              <h2 className="text-display-xl text-foreground leading-[0.98] text-balance">
                Cinco passos.
              </h2>
              <p className="mt-4 text-lede text-foreground/55">Nessa ordem.</p>
            </div>
          </aside>

          <ol className="lg:col-span-8 relative">
            <span aria-hidden className="absolute left-[14px] top-2 bottom-2 w-px bg-border" />
            {pilares.map((p, i) => (
              <li
                key={p.n}
                className="relative pl-12 sm:pl-16 py-7 sm:py-8 border-b border-border/60 last:border-b-0"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-8 h-7 w-7 rounded-full border border-border bg-background grid place-items-center text-mono text-[10px] tracking-[0.18em] tabular-nums text-muted-foreground/85"
                >
                  {p.n}
                </span>
                <div className="grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-3 sm:gap-12 items-baseline">
                  <h3 className="text-h3 text-foreground">{p.t}</h3>
                  <p className="text-card-body">
                    {p.d}
                    {i === pilares.length - 1 ? (
                      <span className="ml-2 text-mono text-[9.5px] tracking-[0.22em] uppercase text-primary/85">· fim</span>
                    ) : null}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
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
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <p className="text-mono text-[10.5px] uppercase tracking-[0.24em] text-muted-foreground/70 mb-5">
              06 — Próximo passo
            </p>
            <h2 className="text-display-mega text-foreground leading-[0.98] text-balance">
              Você já sabe{" "}
              <span className="text-foreground/45">onde está perdendo.</span>
            </h2>
            <p className="mt-6 text-lede text-foreground/60 max-w-md">
              Falta descobrir <span className="text-foreground">onde</span>, na sua operação.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 lg:items-end">
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
                className="btn-premium group w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full h-12 px-9 text-[14px] cta-shadow"
              >
                Começar diagnóstico{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </a>
            <a
              href={PROPOSAL_MAILTO}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors font-sans inline-flex items-center gap-2"
              onClick={() => track("final_cta_click", { destination: "email" })}
            >
              <Mail className="h-4 w-4" /> Por e-mail
            </a>
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
            <div className="flex items-center gap-3 mb-4">
              <img src={"/assets/imperius-logo-official.png"} alt="" aria-hidden="true" className="h-9 w-auto object-contain" loading="lazy" decoding="async" />
              <span className="font-heading font-semibold tracking-[0.18em] text-[13px]">IMPERIUS</span>
            </div>
            <p className="text-card-body max-w-sm">
              Achamos o gargalo. Encurtamos o caminho.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground/75 mb-4">Navegar</h3>
            <ul className="space-y-2.5 text-[13.5px] text-muted-foreground">
              <li><a href="#identificacao" className="hover:text-foreground transition-colors">Sintomas</a></li>
              <li><a href="#caso" className="hover:text-foreground transition-colors">Caso</a></li>
              <li><a href="#metodo" className="hover:text-foreground transition-colors">Método</a></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Portfólio</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground/75 mb-4">Contato</h3>
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
