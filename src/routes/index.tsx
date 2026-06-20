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
  Rocket,
  LayoutTemplate,
  TrendingUp,
  Scissors,
  Users,
  Calendar,
  Mail,
  Activity,
  Menu,
  X,
} from "lucide-react";

import { trackEvent } from "@/lib/analytics";

const track = (name: string, params: Record<string, unknown> = {}) => trackEvent(name, params);

// --- Primitivo de sistema ---------------------------------------------------
// Padroniza o "eyebrow" usado em todas as seções (mesma altura/tracking/cor),
// eliminando 6 cópias do mesmo bloco e travando a hierarquia visual.
function SectionEyebrow({
  children,
  align = "left",
}: {
  children: ReactNode;
  align?: "left" | "center";
}) {
  const justify = align === "center" ? "justify-center" : "";
  return (
    <div
      className={`text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium font-sans inline-flex items-center gap-2.5 ${justify}`}
    >
      <span className="h-px w-8 bg-primary/70" />
      {children}
      {align === "center" ? <span className="h-px w-8 bg-primary/70" /> : null}
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
      { property: "og:url", content: "https://imperiuslab.com.br/" },
      { property: "og:image", content: "https://imperiuslab.com.br/assets/black-crown-cover.png" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Imperius — Encontramos o gargalo que está te custando clientes" },
      {
        name: "twitter:description",
        content:
          "Mapeamos onde sua operação perde cliente e encurtamos o caminho entre o contato e a venda. Diagnóstico antes de qualquer proposta.",
      },
      { name: "twitter:image", content: "https://imperiuslab.com.br/assets/black-crown-cover.png" },


    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/assets/imperius-logo-official.png" },
      { rel: "canonical", href: "https://imperiuslab.com.br/" },
      // Pré-carrega a capa Black Crown apenas em viewports ≥ tablet (onde a imagem
      // entra cedo no viewport e impacta LCP). Mobile mantém lazy para não competir
      // com o hero.
      {
        rel: "preload",
        as: "image",
        href: "/assets/black-crown-cover.png",
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
const BLACK_CROWN_URL = "https://blackcrown-by-imperius.lovable.app/";
// Endereço de contato comercial. Centralizado para permitir migração futura
// para domínio próprio (ex.: contato@imperiusdigital.com.br) sem alterar JSX.
const PROPOSAL_EMAIL = "imperiusuniverse@gmail.com";
const PROPOSAL_MAILTO = `mailto:${PROPOSAL_EMAIL}?subject=${encodeURIComponent("Proposta Imperius — apresentação personalizada")}&body=${encodeURIComponent("Olá, equipe Imperius.\n\nGostaria de receber uma proposta personalizada.\n\nEmpresa:\nSegmento:\nObjetivo principal:\n\nObrigado.")}`;

function Landing() {
  return (
    <div className="min-h-dvh bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Problema />
      <Ecossistema />
      <Demonstracoes />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Problema() {
  const dores = [
    { icon: MessageCircle, t: "Cliente trava no WhatsApp", d: "A mensagem entra, ninguém responde a tempo. O cliente vai pro concorrente." },
    { icon: TrendingUp, t: "Contato vira esquecimento", d: "O lead aparece, a conversa morre e ninguém retoma." },
    { icon: ClipboardList, t: "Time apagando incêndio", d: "Planilha, copia-e-cola, retrabalho. Ninguém olha pro funil." },
    { icon: Activity, t: "Você decide no escuro", d: "Não dá pra dizer quantos contatos viraram cliente esse mês." },
  ];
  return (
    <section className="relative py-12 sm:py-16 border-y border-border/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mb-7 sm:mb-10">
          <div className="mb-4"><SectionEyebrow>O gargalo</SectionEyebrow></div>
          <h2 className="font-display font-semibold text-[1.75rem] sm:text-[2.25rem] lg:text-[2.55rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            Tem cliente entrando.{" "}
            <span className="text-foreground/55">Só não está chegando até a venda.</span>
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-border/40 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
          {dores.map((d) => (
            <li key={d.t} className="p-5 sm:p-6 flex flex-col gap-3 min-w-0">
              <div className="h-9 w-9 rounded-md border border-primary/25 bg-primary/10 grid place-items-center">
                <d.icon className="h-[18px] w-[18px] text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-semibold text-[14.5px] tracking-[-0.005em] text-foreground leading-snug">
                  {d.t}
                </h3>
                <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed font-sans">
                  {d.d}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 min-w-0" onClick={close}>
          <img src={"/assets/imperius-logo-official.png"} alt="Imperius Soluções Digitais" className="h-[36px] w-auto object-contain shrink-0" loading="eager" decoding="async" />
          <span className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-heading font-semibold tracking-[0.2em] text-[12px] truncate">IMPERIUS</span>
            <span className="text-[9.5px] uppercase tracking-[0.28em] text-muted-foreground/80 font-medium truncate">Diagnóstico comercial</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[13px] text-muted-foreground font-medium">
          <a href="#vitrine" className="hover:text-foreground transition-colors">Demonstração</a>
          <a href="#processo" className="hover:text-foreground transition-colors">Como funciona</a>
          <Link to="/portfolio" className="hover:text-foreground transition-colors">Portfólio</Link>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <a href={WA} target="_blank" rel="noreferrer" onClick={() => track("whatsapp_click", { location: "nav" })}>
            <Button size="sm" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-4">
              <span className="sm:hidden">Falar agora</span>
              <span className="hidden sm:inline">Mapear meu gargalo</span>
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
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col text-[14px] text-muted-foreground font-medium">
            <a href="#vitrine" onClick={close} className="py-2.5 hover:text-foreground transition-colors">Demonstração</a>
            <a href="#processo" onClick={close} className="py-2.5 hover:text-foreground transition-colors">Como funciona</a>
            <Link to="/portfolio" onClick={close} className="py-2.5 hover:text-foreground transition-colors">Portfólio</Link>
            <a href="#faq" onClick={close} className="py-2.5 hover:text-foreground transition-colors">FAQ</a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative lg:min-h-[72vh] flex items-center pt-24 sm:pt-24 pb-10 sm:pb-14 overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
        paddingLeft: "max(0px, env(safe-area-inset-left))",
        paddingRight: "max(0px, env(safe-area-inset-right))",
      }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-[0.18]" aria-hidden />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[420px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.22 250 / 0.22), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-6 w-full text-center">
        <div className="mb-5 sm:mb-6"><SectionEyebrow align="center">Imperius · Diagnóstico comercial</SectionEyebrow></div>
        <h1 className="font-display text-[2rem] sm:text-[2.8rem] lg:text-[3.3rem] xl:text-[3.6rem] font-semibold leading-[1.04] tracking-[-0.03em] text-foreground">
          Onde sua empresa está perdendo cliente —{" "}
          <span className="text-shimmer">e como encurtar esse caminho</span>.
        </h1>
        <p className="mt-5 sm:mt-6 mx-auto max-w-[36rem] text-muted-foreground text-[15px] sm:text-[16.5px] leading-relaxed font-sans">
          A gente entra na sua operação, encontra o gargalo e mostra no detalhe.
          Só depois a conversa vira solução.
        </p>
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3">
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
            onClick={() => track("hero_cta_click", { destination: "whatsapp" })}
          >
            <Button
              size="lg"
              className="btn-premium w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full h-12 px-7 text-[14px] transition-all duration-300 hover:-translate-y-0.5"
            >
              Quero ver meu gargalo no WhatsApp <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </a>
          <a
            href={PROPOSAL_MAILTO}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-5 text-[13px] font-sans text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => track("hero_cta_click", { destination: "email" })}
          >
            <Mail className="h-4 w-4" />
            <span>Prefiro receber por e-mail</span>
          </a>
        </div>
        <p className="mt-6 sm:mt-7 text-[12px] text-muted-foreground/70 font-sans tracking-wide">
          Conversa curta · Sem proposta antes de a gente entender sua operação
        </p>

      </div>
    </section>
  );
}









function Ecossistema() {
  const cards = [
    {
      icon: MessageCircle,
      tag: "Resposta",
      title: "Resposta no tempo certo",
      desc: "Toda mensagem com responsável, prazo e próximo passo. Nada some na conversa.",
    },
    {
      icon: Users,
      tag: "Funil",
      title: "Lead que avança",
      desc: "Você enxerga onde cada cliente travou — e o que falta pra fechar.",
    },
    {
      icon: Calendar,
      tag: "Agenda",
      title: "Agenda que confirma sozinha",
      desc: "Marcação, lembrete e confirmação acontecem antes de você lembrar.",
    },
  ];
  return (
    <section className="relative py-12 sm:py-16 border-b border-border/30 bg-[oklch(0.075_0.004_240)]">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-7 sm:mb-10">
          <div className="mb-4"><SectionEyebrow>Como reduzimos a distância</SectionEyebrow></div>
          <h2 className="font-display font-semibold text-[1.75rem] sm:text-[2.25rem] lg:text-[2.55rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            Não vendemos ferramenta.{" "}
            <span className="text-neon">Encurtamos o caminho entre o contato e a venda.</span>
          </h2>
        </div>

        <ul className="grid gap-4 sm:gap-5 sm:grid-cols-3">
          {cards.map((c) => (
            <li
              key={c.title}
              className="card-rise group rounded-xl border border-border/50 bg-[oklch(0.1_0.005_245)]/80 backdrop-blur-md p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="h-9 w-9 rounded-md border border-primary/30 bg-primary/10 grid place-items-center">
                  <c.icon className="h-[18px] w-[18px] text-primary" />
                </div>
                <span className="text-[9.5px] uppercase tracking-[0.22em] font-sans font-semibold text-muted-foreground/70">
                  {c.tag}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-[16px] tracking-[-0.01em] text-foreground leading-snug">
                {c.title}
              </h3>
              <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed font-sans">
                {c.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}




function Demonstracoes() {
  return (
    <section id="vitrine" className="relative py-12 sm:py-16 border-t border-border/30">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-7 sm:mb-10">
          <div className="mb-4"><SectionEyebrow>Mostrar visualmente</SectionEyebrow></div>
          <h2 className="font-display font-semibold text-[1.75rem] sm:text-[2.25rem] lg:text-[2.55rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            Veja o gargalo resolvido{" "}
            <span className="text-neon">numa operação real.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-[14.5px] sm:text-[15.5px] leading-relaxed font-sans">
            Ambiente nosso, rodando agora. Clica e usa como o cliente final usaria.
          </p>
        </div>


        <a
          href={BLACK_CROWN_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => track("demo_click", { project: "black_crown" })}
          className="card-rise group block rounded-2xl border border-primary/30 bg-[oklch(0.09_0.005_245)] overflow-hidden shadow-[0_30px_80px_-30px_oklch(0.55_0.22_250/0.45)]"
        >
          <div className="grid lg:grid-cols-[1.4fr_1fr] items-stretch">
            <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[oklch(0.14_0.01_245)]">
              <img
                src={"/assets/black-crown-cover.png"}
                alt="Black Crown Barbershop — ambiente operacional Imperius"
                width={1600}
                height={1000}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden />
              <div className="badge-pulse absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/40 bg-background/70 backdrop-blur-md text-[10px] uppercase tracking-[0.18em] font-semibold font-sans text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Ao vivo
              </div>
            </div>
            <div className="p-5 sm:p-8 lg:p-10 flex flex-col min-w-0">
              <span className="text-[10px] uppercase tracking-[0.22em] font-sans font-semibold text-primary/90 inline-flex items-center gap-1.5">
                <Scissors className="h-3.5 w-3.5" />
                Projeto de referência
              </span>
              <h3 className="mt-3 font-display font-semibold text-[1.25rem] sm:text-[1.5rem] lg:text-[1.9rem] leading-[1.1] tracking-[-0.02em] text-foreground">
                Black Crown Barbershop
              </h3>
              <p className="mt-3 text-[14px] sm:text-[14.5px] text-muted-foreground leading-relaxed font-sans">
                Atendimento, agenda e site operando juntos — não três ferramentas
                colando uma na outra.
              </p>
              <div className="mt-5 text-[11px] uppercase tracking-[0.22em] font-sans text-muted-foreground/70 truncate">
                blackcrown-by-imperius.lovable.app
              </div>
              <div className="mt-auto pt-6">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-[13px] font-sans font-semibold transition-transform group-hover:-translate-y-0.5">
                  Abrir a operação Black Crown
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>

            </div>
          </div>
        </a>

        <div className="mt-6 sm:mt-8 rounded-xl border border-border/50 bg-[oklch(0.1_0.005_245)]/70 backdrop-blur-md p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="max-w-2xl">
            <h3 className="font-display font-semibold text-[1.1rem] sm:text-[1.3rem] tracking-[-0.015em] text-foreground leading-snug">
              Outros gargalos, outros segmentos
            </h3>
            <p className="mt-2 text-[13.5px] sm:text-[14px] text-muted-foreground leading-relaxed font-sans">
              Mesmo método aplicado em clínica, estética, restaurante e imóveis.
            </p>
          </div>
          <Link
            to="/portfolio"
            onClick={() => track("portfolio_bridge_click", { from: "home_demo" })}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/50 bg-primary/15 hover:bg-primary/25 text-[13px] font-sans font-semibold text-primary transition-colors"
          >
            Ver outras operações
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>
      </div>
    </section>
  );
}








function Process() {
  const steps = [
    { n: "01", i: MessageCircle, t: "Escutar", d: "Conversa curta. A gente entende onde está doendo e olha sua operação real." },
    { n: "02", i: LayoutTemplate, t: "Mostrar", d: "Você vê o gargalo desenhado e uma versão funcional de como ele some." },
    { n: "03", i: Rocket, t: "Decidir", d: "Se fizer sentido, a gente segue. Proposta só depois de você enxergar o valor." },
  ];
  return (
    <section id="processo" className="py-12 sm:py-16 border-t border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl mb-7 sm:mb-10">
          <div className="mb-4"><SectionEyebrow>Como conversamos</SectionEyebrow></div>
          <h2 className="font-display font-semibold text-[1.75rem] sm:text-[2.25rem] lg:text-[2.55rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            Primeiro a gente entende.{" "}
            <span className="text-foreground/55">Só então propõe.</span>
          </h2>
        </div>


        <ol className="grid gap-4 sm:gap-5 sm:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.t}
              className="card-rise rounded-xl border border-border/50 bg-[oklch(0.1_0.005_245)]/70 backdrop-blur-md p-5 sm:p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-9 w-9 rounded-md border border-primary/30 bg-primary/10 grid place-items-center">
                  <s.i className="h-[18px] w-[18px] text-primary" />
                </div>
                <span className="font-heading text-[11px] tracking-[0.24em] text-muted-foreground/60 font-semibold">
                  {s.n}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-[16px] tracking-[-0.01em] text-foreground leading-snug">
                {s.t}
              </h3>
              <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed font-sans">
                {s.d}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


function FAQ() {
  const items = [
    {
      q: "Como funciona a conversa inicial?",
      a: "Uma chamada curta — em torno de 20 minutos. A gente entende seus canais, onde a venda trava e o que precisa destravar primeiro. Sem briefing longo, sem apresentação de slides.",
    },
    {
      q: "Quando vocês falam de preço?",
      a: "Só depois de entender sua operação e te mostrar o gargalo. Proposta empurrada antes disso é tiro no escuro — não fazemos.",
    },
    {
      q: "Vocês trocam meu WhatsApp atual?",
      a: "Não. A gente usa a API oficial do WhatsApp Business (Meta) sobre o número que você já tem. Atendimento humano segue normal — o automatizado entra só onde você decidir.",
    },
    {
      q: "Quem é dono do que vocês entregam?",
      a: "Você. Código, painel, domínio, banco e histórico ficam no seu nome. Se um dia quiser sair, leva tudo — incluindo contatos e pipeline.",
    },
    {
      q: "Tem acompanhamento depois?",
      a: "Tem. Período inicial de ajuste fino sai junto. Depois, você escolhe entre plano contínuo ou demanda avulsa. SLA combinado por escrito.",
    },
    {
      q: "Com quem eu falo?",
      a: "Com a mesma pessoa do começo ao fim. Sem call center, sem intermediário, sem chatbot empurrando ticket.",
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 border-t border-border/30">
      <script
        type="application/ld+json"
        // FAQPage schema para SEO e featured snippets
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((it) => ({
              "@type": "Question",
              name: it.q,
              acceptedAnswer: { "@type": "Answer", text: it.a },
            })),
          }),
        }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <div className="max-w-2xl mb-7 sm:mb-10">
          <div className="mb-4"><SectionEyebrow>FAQ</SectionEyebrow></div>
          <h2 className="font-display font-semibold text-[1.75rem] sm:text-[2.25rem] lg:text-[2.55rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            Dúvidas frequentes —{" "}
            <span className="text-foreground/55">respondidas direto.</span>
          </h2>

        </div>
        <div className="divide-y divide-border/40 border-y border-border/40">
          {items.map((it, idx) => (
            <details key={it.q} className="group py-5 sm:py-6" open={idx === 0}>
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <h3 className="font-heading font-semibold text-[15.5px] sm:text-[17px] tracking-[-0.01em] text-foreground">
                  {it.q}
                </h3>
                <span className="mt-1 shrink-0 h-7 w-7 rounded-full border border-border/60 grid place-items-center text-muted-foreground group-open:bg-primary/10 group-open:text-primary group-open:border-primary/50 transition-colors">
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-open:rotate-90" />
                </span>
              </summary>
              <p className="mt-4 text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed font-sans max-w-2xl whitespace-pre-line">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


function FinalCTA() {
  return (
    <section className="relative py-14 sm:py-20 border-t border-border/30 overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="mb-5"><SectionEyebrow align="center">Próximo passo</SectionEyebrow></div>
        <h2 className="font-display font-semibold text-[1.85rem] sm:text-[2.4rem] lg:text-[2.7rem] leading-[1.05] tracking-[-0.03em] text-foreground">
          Quer ver onde sua operação{" "}
          <span className="text-neon">está vazando cliente?</span>
        </h2>
        <p className="mt-5 text-muted-foreground text-[15px] sm:text-[16.5px] max-w-xl mx-auto leading-relaxed font-sans">
          20 minutos de conversa. A gente identifica o gargalo principal e te
          mostra — antes de qualquer proposta.
        </p>
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3">
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
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full h-12 px-8 text-[14px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-6px_oklch(0.72_0.22_250/0.8)]"
            >
              Quero meu diagnóstico no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          <a
            href={PROPOSAL_MAILTO}
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors font-sans inline-flex items-center gap-2"
            onClick={() => track("final_cta_click", { destination: "email" })}
          >
            <Mail className="h-4 w-4" /> Prefiro receber por e-mail
          </a>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="relative border-t border-border/40 overflow-hidden">
      <div className="absolute inset-x-0 -top-px h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 250 / 0.6), transparent)" }} />
      <div className="relative mx-auto max-w-7xl px-6 pt-10 sm:pt-12 pb-10 sm:pb-12">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={"/assets/imperius-logo-official.png"} alt="Imperius Soluções Digitais" className="h-[44px] w-auto object-contain" loading="lazy" decoding="async" />
              <div>
                <div className="font-heading font-bold tracking-[0.2em] text-sm">IMPERIUS</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-sans font-medium">Software house</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Software house brasileira especializada em operações comerciais, com produtos próprios em evolução para atendimento, pipeline e agenda.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4 font-sans">Navegação</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground font-sans">
              <li><a href="#vitrine" className="hover:text-foreground transition-colors duration-200">Demonstração</a></li>
              <li><a href="#processo" className="hover:text-foreground transition-colors duration-200">Como funciona</a></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors duration-200">Portfólio</Link></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4 font-sans">Contato direto</div>
            <a href="tel:+5515981023792" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-3 font-sans" onClick={() => track("phone_click", { location: "footer" })}>
              <Phone className="h-4 w-4 shrink-0" /> +55 15 98102-3792
            </a>
            <a href={PROPOSAL_MAILTO} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-3 font-sans" onClick={() => track("footer_email_click")}>
              <Mail className="h-4 w-4 shrink-0" /> {PROPOSAL_EMAIL}
            </a>
            <a href={IG} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-sans">
              <Instagram className="h-4 w-4 shrink-0" /> @imperiusdigital.br
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col items-center gap-2 text-center text-xs text-muted-foreground font-sans">
          <p>© {new Date().getFullYear()} Imperius Soluções Digitais. Todos os direitos reservados.</p>
          <p className="text-[11px] text-muted-foreground/70 max-w-xl leading-relaxed">
            Usamos cookies analíticos (Google Analytics) para medir o uso do site. Para solicitações relacionadas aos seus dados (LGPD),
            escreva para <a href={PROPOSAL_MAILTO} className="underline hover:text-foreground">{PROPOSAL_EMAIL}</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
