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
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import { trackEvent } from "@/lib/analytics";

const track = (name: string, params: Record<string, unknown> = {}) =>
  trackEvent(name, params);

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
      <Identificacao />
      <Diagnostico />
      <Case />
      <Metodo />
      <FinalCTA />
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
        <a href="#top" className="flex items-center gap-2.5 min-w-0" onClick={close}>
          <img
            src={"/assets/imperius-logo-official.png"}
            alt="Imperius"
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

// --- Hero — silêncio editorial. Tipografia. Espaço. Próximo passo. --------
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
        <h1 className="text-display-mega text-foreground mx-auto max-w-[22ch]">
          Seu cliente quer comprar.{" "}
          <span className="text-foreground/45">Mas não chega até a venda.</span>
        </h1>

        <p className="mt-6 sm:mt-8 text-lede max-w-xl mx-auto">
          Mostramos onde ele trava — antes que desista.
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

// --- Identificação — cenas reais ------------------------------------------
function Identificacao() {
  const cenas = [
    { icon: ClipboardList, t: "Pediu orçamento. Sumiu.", d: "Você mandou. Ele leu. Nunca mais respondeu." },
    { icon: MessageCircle, t: "Mensagem chegou. Ninguém viu.", d: "Quando alguém abriu, o cliente já tinha desistido." },
    { icon: Activity, t: "Respondeu rápido. E ele sumiu.", d: "Tudo no tempo. Mesmo assim, silêncio do outro lado." },
    { icon: Calendar, t: "Marcou horário. Não apareceu.", d: "Sem confirmação. Sem retomada. Cadeira vazia." },
    { icon: TrendingUp, t: "Veio uma vez. Não voltou.", d: "Ninguém chamou de novo. Ele esqueceu de você." },
  ];

  return (
    <section id="identificacao" className="relative section-pad">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-h2 text-foreground max-w-2xl text-balance">
          Provavelmente já aconteceu na sua semana.{" "}
          <span className="text-foreground/45">Mais de uma vez.</span>
        </h2>

        <div aria-hidden className="imp-hairline mt-10 sm:mt-14 mb-0" />
        <ul>
          {cenas.map((c) => (
            <li key={c.t} className="row-editorial">
              <c.icon className="h-[15px] w-[15px] text-muted-foreground/55 shrink-0 mt-1.5" aria-hidden />
              <div className="min-w-0 grid sm:grid-cols-[1fr_minmax(0,1.2fr)] gap-1 sm:gap-10 items-baseline">
                <h3 className="text-card-title">{c.t}</h3>
                <p className="text-card-body">{c.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// --- Diagnóstico — bridge narrativo ---------------------------------------
function Diagnostico() {
  return (
    <section className="relative section-pad surface-tint">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
        <p className="text-h2 text-foreground text-balance">
          A maioria troca de sistema, contrata agência ou anuncia mais.
        </p>
        <p className="mt-6 sm:mt-8 text-h2 text-foreground/45 text-balance">
          Nós começamos pelo ponto exato onde o cliente desiste.
        </p>
      </div>
    </section>
  );
}

// --- Case — Barbearia do Alemão. Imagem dominante. ------------------------
function Case() {
  const antes = [
    "Informações espalhadas",
    "Muitas etapas até o contato",
    "Sem página própria",
  ];
  const depois = [
    "Tudo em um único lugar",
    "Contato em um toque",
    "Cliente decide na hora",
  ];

  return (
    <section id="caso" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <a
            href={CLIENTE_REAL_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("client_proof_click", { project: "barbearia_do_alemao" })}
            className="lg:col-span-7 group block relative"
          >
            <div className="relative overflow-hidden bg-popover/60 border border-border rounded-[var(--radius-card)]">
              <img
                src={CLIENTE_REAL_COVER}
                alt="Barbearia do Alemão — projeto real desenvolvido pela Imperius"
                width={1035}
                height={1536}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="block w-full h-[360px] sm:h-[480px] lg:h-[620px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-primary/95 text-primary-foreground text-[12px] font-semibold transition-transform group-hover:-translate-y-0.5">
                Abrir projeto <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </div>
          </a>

          <div className="lg:col-span-5">
            <p className="text-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-3">
              Cliente real · Sorocaba/SP
            </p>
            <h2 className="text-h2 text-foreground">Barbearia do Alemão</h2>
            <p className="mt-4 text-lede">
              Menos passos entre o cliente e o agendamento.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="flex items-center gap-2 text-mono text-[10px] uppercase tracking-[0.22em] font-semibold text-muted-foreground/85 mb-3">
                  <AlertTriangle className="h-3.5 w-3.5 text-destructive/80" />
                  Antes
                </div>
                <ul className="space-y-2">
                  {antes.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-card-body">
                      <span className="mt-[7px] h-1 w-1 rounded-full bg-destructive/70 shrink-0" aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 text-mono text-[10px] uppercase tracking-[0.22em] font-semibold text-primary mb-3">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Depois
                </div>
                <ul className="space-y-2">
                  {depois.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-card-body text-foreground">
                      <CheckCircle2 className="h-[14px] w-[14px] text-primary mt-[3px] shrink-0" aria-hidden />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Método — cinco passos, consequência do diagnóstico --------------------
function Metodo() {
  const pilares = [
    { n: "01", t: "Achar o gargalo", d: "Onde o cliente trava." },
    { n: "02", t: "Mostrar na tela", d: "Você vê o ponto exato." },
    { n: "03", t: "Calcular o custo", d: "Quanto isso pesa por mês." },
    { n: "04", t: "Conversar", d: "O que resolver primeiro." },
    { n: "05", t: "Propor", d: "Só depois do problema claro." },
  ];

  return (
    <section id="metodo" className="relative py-24 sm:py-32 surface-tint">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16 sm:mb-20">
          <h2 className="text-h2 text-foreground">
            Cinco passos.{" "}
            <span className="text-foreground/45">Nessa ordem.</span>
          </h2>
          <p className="mt-5 text-card-body">
            Sem pular etapa. Sem proposta antes da hora.
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border-strong border border-border-strong rounded-[var(--radius-card)] overflow-hidden">
          {pilares.map((p) => (
            <li
              key={p.n}
              className="bg-background p-7 sm:p-8 flex flex-col gap-4"
            >
              <span className="text-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground/65 tabular-nums">
                {p.n}
              </span>
              <h3 className="text-card-title text-[17px] leading-tight">{p.t}</h3>
              <p className="text-card-body mt-auto">{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// --- Final CTA — finaliza a história, não repete. -------------------------
function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-8 text-center">
        <h2 className="text-display-xl text-foreground">
          Agora você sabe onde provavelmente está perdendo clientes.
        </h2>
        <p className="mt-8 text-lede text-foreground/55">
          O próximo passo é descobrir onde isso acontece na sua operação.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center gap-4 sm:gap-6">
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
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors font-sans inline-flex items-center gap-2 justify-center sm:justify-start"
            onClick={() => track("final_cta_click", { destination: "email" })}
          >
            <Mail className="h-4 w-4" /> Por e-mail
          </a>
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
              <img src={"/assets/imperius-logo-official.png"} alt="Imperius" className="h-9 w-auto object-contain" loading="lazy" decoding="async" />
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
