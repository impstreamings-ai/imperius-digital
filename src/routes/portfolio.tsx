import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bot,
  Users,
  Calendar,
  Scissors,
  Stethoscope,
  Sparkles,
  Building2,
  UtensilsCrossed,
  ExternalLink,
  MessageCircle,
  Compass,
  Eye,
  Wand2,
  Rocket,
  Activity,
  Palette,
  Type,
  Briefcase,
  Plug,
  GitBranch,
  Bot as BotIcon,
  LayoutTemplate,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

import logoAsset from "@/assets/imperius-logo-official.png.asset.json";
import blackCrownCover from "@/assets/black-crown-cover.png.asset.json";
import vitalisCover from "@/assets/vitalis-hero.jpg.asset.json";
import bellaCover from "@/assets/studio-bella-hero.jpg.asset.json";
import primeCover from "@/assets/prime-hero.jpg.asset.json";
import imperialCover from "@/assets/imperial-hero.jpg.asset.json";

const track = (name: string, params: Record<string, unknown> = {}) =>
  trackEvent(name, params);

const WA_MESSAGE =
  "Olá! Vim pelo portfólio da Imperius e gostaria de uma demonstração personalizada.";
const WA = `https://wa.me/5515981023792?text=${encodeURIComponent(WA_MESSAGE)}`;
const BLACK_CROWN_URL = "https://blackcrown-by-imperius.lovable.app/";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfólio Imperius | Projetos, demonstrações e soluções" },
      {
        name: "description",
        content:
          "Catálogo oficial da Imperius: projetos demonstrativos e soluções desenvolvidas para apresentar possibilidades de websites, automação, CRM e inteligência artificial.",
      },
      {
        property: "og:title",
        content: "Portfólio Imperius | Projetos, demonstrações e soluções",
      },
      {
        property: "og:description",
        content:
          "Catálogo oficial da Imperius: projetos demonstrativos e soluções desenvolvidas para apresentar possibilidades de websites, automação, CRM e inteligência artificial.",
      },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: logoAsset.url },
    ],
  }),
  component: PortfolioPage,
});

/* ----------------------------- DATA ----------------------------- */

type Solution = {
  icon: typeof Bot;
  title: string;
  desc: string;
  to: string;
};

type Demo = {
  icon: typeof Scissors;
  title: string;
  segment: string;
  desc: string;
  cover: string;
  domain: string;
  to?: string;
  href?: string;
  external?: boolean;
};

const SOLUTIONS: Solution[] = [
  {
    icon: Bot,
    title: "Imperius Automation",
    desc: "WhatsApp Business com IA que qualifica e encaminha leads em tempo real.",
    to: "/automation",
  },
  {
    icon: Users,
    title: "Imperius CRM",
    desc: "Pipeline comercial com etapas, oportunidades e indicadores do time.",
    to: "/crm",
  },
  {
    icon: Calendar,
    title: "Imperius Scheduling",
    desc: "Agenda, confirmações e reservas integradas ao atendimento.",
    to: "/scheduling",
  },
];

const DEMOS: Demo[] = [
  {
    icon: Scissors,
    title: "Black Crown Barbershop",
    segment: "Barbearia premium",
    desc: "Barbearia premium com agendamento e identidade visual cinematográfica.",
    cover: blackCrownCover.url,
    domain: "blackcrown-by-imperius.lovable.app",
    href: BLACK_CROWN_URL,
    external: true,
  },
  {
    icon: Stethoscope,
    title: "Clínica Vitalis",
    segment: "Saúde · Clínica",
    desc: "Site clínico com agendamento, especialidades e tom de confiança.",
    cover: vitalisCover.url,
    domain: "vitalis.imperiusdigital.com.br",
    to: "/vitalis",
  },
  {
    icon: Sparkles,
    title: "Studio Bella Estética",
    segment: "Estética · Alto padrão",
    desc: "Estética de alto padrão com vitrine de procedimentos e reserva direta.",
    cover: bellaCover.url,
    domain: "studiobella.imperiusdigital.com.br",
    to: "/studio-bella",
  },
  {
    icon: Building2,
    title: "Prime Imóveis",
    segment: "Imobiliário",
    desc: "Portal imobiliário com busca, ficha de imóvel e captação de leads.",
    cover: primeCover.url,
    domain: "primeimoveis.imperiusdigital.com.br",
    to: "/prime-imoveis",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurante Imperial",
    segment: "Gastronomia",
    desc: "Reservas, cardápio e identidade gastronômica premium.",
    cover: imperialCover.url,
    domain: "imperial.imperiusdigital.com.br",
    to: "/restaurante-imperial",
  },
];

const PROCESS = [
  { i: Compass, t: "Diagnóstico", d: "Entendemos a operação, o público e o objetivo." },
  { i: Eye, t: "Demonstração", d: "Apresentamos uma versão navegável do projeto." },
  { i: Wand2, t: "Personalização", d: "Ajustes de identidade, conteúdo e fluxos." },
  { i: Rocket, t: "Publicação", d: "Entrega em domínio próprio e ambiente estável." },
  { i: Activity, t: "Operação", d: "Acompanhamento e evolução contínua." },
];

/* ----------------------------- PAGE ----------------------------- */

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      <Nav />
      <Hero />
      <Demos />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ----------------------------- INTRO ----------------------------- */

function Intro() {
  return (
    <section className="relative pt-4 pb-2">
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="border-y border-border/50 py-9 sm:py-11">
          <h2 className="font-display font-semibold text-[1.35rem] sm:text-[1.6rem] tracking-[-0.018em] text-foreground">
            Ambiente de demonstração Imperius
          </h2>
          <p className="mt-4 text-foreground/85 text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-2xl">
            Os projetos apresentados neste portfólio foram desenvolvidos
            internamente pela Imperius para demonstrar diferentes aplicações de
            websites, automações, CRM, inteligência artificial e operações
            comerciais.
          </p>
          <p className="mt-3 text-muted-foreground text-[14px] sm:text-[15px] leading-relaxed max-w-2xl">
            Cada demonstração representa um cenário real de implementação e
            pode ser adaptada para diferentes segmentos, marcas e necessidades.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PRE-CTA ----------------------------- */

function PreCTA() {
  return (
    <section className="relative pt-6 pb-2">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display font-semibold text-[1.5rem] sm:text-[1.95rem] lg:text-[2.15rem] leading-[1.1] tracking-[-0.022em] text-foreground">
          Pronto para ver uma versão{" "}
          <span className="text-neon">adaptada ao seu negócio?</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-[14.5px] sm:text-[16px] leading-relaxed max-w-xl mx-auto">
          Antes de qualquer proposta, a Imperius apresenta uma demonstração
          funcional baseada no contexto da sua operação.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- PERSONALIZATION ----------------------------- */

const PERSONALIZE = [
  { i: LayoutTemplate, t: "Layout", d: "Estrutura visual ajustada ao posicionamento da marca." },
  { i: Palette, t: "Cores", d: "Paleta calibrada para a identidade do cliente." },
  { i: Type, t: "Textos", d: "Conteúdo editorial alinhado ao tom da operação." },
  { i: Briefcase, t: "Serviços", d: "Catálogo, etapas e regras adaptadas ao negócio." },
  { i: Plug, t: "Integrações", d: "Conexões com ferramentas que o cliente já usa." },
  { i: GitBranch, t: "Fluxos", d: "Jornadas de atendimento desenhadas por cenário." },
  { i: BotIcon, t: "Automações", d: "Comportamentos de IA configurados por operação." },
];

function Personalization() {
  return (
    <section className="py-20 sm:py-24 relative">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-primary/90 font-semibold mb-5 font-sans inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary/70" />
            Flexibilidade Imperius
          </div>
          <h2 className="font-display font-semibold text-[1.7rem] sm:text-[2.2rem] lg:text-[2.55rem] leading-[1.08] tracking-[-0.028em] text-foreground">
            Cada camada é{" "}
            <span className="text-neon">adaptada à sua operação.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-[14.5px] sm:text-[16px] leading-relaxed max-w-xl">
            Nada aqui é template fechado. Os projetos partem de uma base
            premium e são moldados para refletir o jeito do cliente trabalhar.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PERSONALIZE.map((p) => {
            const Icon = p.i;
            return (
              <li
                key={p.t}
                className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 sm:p-6"
              >
                <span className="h-10 w-10 rounded-xl border border-primary/30 bg-background/60 grid place-items-center mb-4">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </span>
                <h3 className="font-display font-semibold text-[1.02rem] tracking-[-0.012em] text-foreground">
                  {p.t}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                  {p.d}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------- NAV ----------------------------- */

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src={logoAsset.url}
            alt="Imperius Soluções Digitais"
            className="h-[36px] w-auto object-contain shrink-0"
            loading="eager"
            decoding="async"
          />
          <span className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-heading font-semibold tracking-[0.2em] text-[12px] truncate">
              IMPERIUS
            </span>
            <span className="text-[9.5px] uppercase tracking-[0.28em] text-muted-foreground/80 font-medium truncate">
              Portfólio oficial
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-[13px] text-muted-foreground font-medium">
          <a href="#solucoes" className="hover:text-foreground transition-colors">
            Soluções
          </a>
          <a href="#demonstracoes" className="hover:text-foreground transition-colors">
            Demonstrações
          </a>
          <a href="#processo" className="hover:text-foreground transition-colors">
            Processo
          </a>
        </nav>
        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="shrink-0"
          onClick={() => track("whatsapp_click", { location: "nav_portfolio" })}
        >
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_oklch(0.72_0.22_250/0.7)]"
          >
            <span className="sm:hidden">Falar agora</span>
            <span className="hidden sm:inline">Solicitar demonstração</span>
          </Button>
        </a>
      </div>
    </header>
  );
}

/* ----------------------------- HERO ----------------------------- */

function Hero() {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28">
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.55 0.22 250 / 0.22), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="text-[10.5px] uppercase tracking-[0.32em] text-primary/90 font-semibold mb-6 font-sans inline-flex items-center gap-2.5">
          <span className="h-px w-8 bg-primary/70" />
          Portfólio Oficial · Imperius
          <span className="h-px w-8 bg-primary/70" />
        </div>
        <h1 className="font-display font-semibold text-[2.1rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.04] tracking-[-0.03em] text-foreground">
          Portfólio <span className="text-neon">Imperius</span>
        </h1>
        <p className="mt-6 text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed font-sans max-w-2xl mx-auto">
          Projetos demonstrativos e soluções desenvolvidas para apresentar
          diferentes possibilidades de websites, automação, CRM e inteligência
          artificial.
        </p>
      </div>
    </section>
  );
}

/* ----------------------------- SOLUTIONS ----------------------------- */

function SectionHeader({
  label,
  count,
  title,
  highlight,
}: {
  label: string;
  count: number;
  title: string;
  highlight?: string;
}) {
  return (
    <div className="mb-10 sm:mb-12 max-w-2xl">
      <div className="text-[10.5px] uppercase tracking-[0.32em] text-primary/90 font-semibold mb-5 font-sans inline-flex items-center gap-2.5">
        <span className="h-px w-8 bg-primary/70" />
        {label} · {count.toString().padStart(2, "0")}
      </div>
      <h2 className="font-display font-semibold text-[1.7rem] sm:text-[2.2rem] lg:text-[2.55rem] leading-[1.08] tracking-[-0.028em] text-foreground">
        {title}{" "}
        {highlight && <span className="text-neon">{highlight}</span>}
      </h2>
    </div>
  );
}

function Solutions() {
  return (
    <section id="solucoes" className="py-20 sm:py-24 relative">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Soluções Imperius"
          count={SOLUTIONS.length}
          title="Software proprietário, pronto para operar."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SOLUTIONS.map((s) => (
            <SolutionCard key={s.title} solution={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = solution.icon;
  return (
    <Link
      to={solution.to}
      onClick={() =>
        track("portfolio_card_click", { kind: "solution", to: solution.to })
      }
      className="group relative rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_oklch(0.55_0.22_250/0.6)]"
    >
      <div className="relative h-44 sm:h-48 overflow-hidden bg-[oklch(0.11_0.006_245)]">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, oklch(0.55 0.22 250 / 0.28), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl opacity-60 bg-primary/40 rounded-full" />
            <div className="relative h-16 w-16 rounded-2xl border border-primary/30 bg-background/60 backdrop-blur-md grid place-items-center">
              <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-primary/40 bg-background/70 backdrop-blur-md text-[10px] uppercase tracking-[0.18em] font-semibold text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          Produto Imperius
        </div>
      </div>
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <h3 className="font-display font-semibold text-[1.15rem] tracking-[-0.015em] text-foreground">
          {solution.title}
        </h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
          {solution.desc}
        </p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-primary group-hover:gap-2.5 transition-all">
          Abrir demonstração
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </Link>
  );
}

/* ----------------------------- DEMOS ----------------------------- */

function Demos() {
  return (
    <section id="demonstracoes" className="py-20 sm:py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Demonstrações de nicho"
          count={DEMOS.length}
          title="Sites navegáveis,"
          highlight="prontos para explorar."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {DEMOS.map((d) => (
            <DemoCard key={d.title} demo={d} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoCard({ demo }: { demo: Demo }) {
  const Icon = demo.icon;
  const inner = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-[oklch(0.11_0.006_245)]">
        <img
          src={demo.cover}
          alt={`Pré-visualização do projeto ${demo.title}`}
          loading="lazy"
          width={1280}
          height={800}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border/70 bg-background/70 backdrop-blur-md text-[10px] uppercase tracking-[0.18em] font-semibold text-muted-foreground">
          <Icon className="h-3 w-3" />
          Projeto demonstrativo
        </div>
        <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-muted-foreground/90 truncate">
          {demo.domain}
        </div>
      </div>
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <div className="text-[10.5px] uppercase tracking-[0.22em] text-primary/90 font-semibold mb-2 font-sans">
          {demo.segment}
        </div>
        <h3 className="font-display font-semibold text-[1.15rem] tracking-[-0.015em] text-foreground">
          {demo.title}
        </h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
          {demo.desc}
        </p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-primary group-hover:gap-2.5 transition-all">
          Abrir demonstração
          {demo.external ? (
            <ExternalLink className="h-3.5 w-3.5" />
          ) : (
            <ArrowRight className="h-3.5 w-3.5" />
          )}
        </div>
      </div>
    </>
  );

  const className =
    "group relative rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_20px_60px_-30px_oklch(0.55_0.22_250/0.6)]";

  if (demo.external && demo.href) {
    return (
      <a
        href={demo.href}
        target="_blank"
        rel="noreferrer"
        className={className}
        onClick={() =>
          track("portfolio_card_click", { kind: "demo", href: demo.href })
        }
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      to={demo.to!}
      className={className}
      onClick={() =>
        track("portfolio_card_click", { kind: "demo", to: demo.to })
      }
    >
      {inner}
    </Link>
  );
}

/* ----------------------------- PROCESS ----------------------------- */

function Process() {
  return (
    <section id="processo" className="py-20 sm:py-24 relative border-y border-border/40">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-primary/90 font-semibold mb-5 font-sans inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary/70" />
            Como trabalhamos
            <span className="h-px w-8 bg-primary/70" />
          </div>
          <h2 className="font-display font-semibold text-[1.7rem] sm:text-[2.2rem] lg:text-[2.4rem] leading-[1.08] tracking-[-0.028em] text-foreground">
            Cinco etapas. Sem ruído.
          </h2>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative">
          {PROCESS.map((step, i) => {
            const Icon = step.i;
            return (
              <li
                key={step.t}
                className="relative rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-5 sm:p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="h-10 w-10 rounded-xl border border-primary/30 bg-background/60 grid place-items-center">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </span>
                  <span className="text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground/70 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-[1.05rem] tracking-[-0.012em] text-foreground">
                  {step.t}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                  {step.d}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ----------------------------- FINAL CTA ----------------------------- */

function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.55 0.22 250 / 0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display font-semibold text-[1.9rem] sm:text-[2.5rem] lg:text-[2.9rem] leading-[1.05] tracking-[-0.028em] text-foreground">
          Gostaria de uma versão{" "}
          <span className="text-neon">personalizada</span> para o seu negócio?
        </h2>
        <p className="mt-5 text-muted-foreground text-[15px] sm:text-[16.5px] leading-relaxed max-w-xl mx-auto">
          A Imperius desenvolve websites, automações e sistemas adaptados para
          cada operação.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              track("whatsapp_click", { location: "final_cta_portfolio" })
            }
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-7 h-12 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_-6px_oklch(0.72_0.22_250/0.7)]"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Solicitar Demonstração
            </Button>
          </a>
          <Link to="/">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 h-12 border-border/70 text-foreground hover:bg-card/60"
            >
              Voltar para a Imperius
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FOOTER ----------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-muted-foreground">
        <div className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Imperius"
            className="h-6 w-auto object-contain"
            loading="lazy"
          />
          <span className="font-heading tracking-[0.22em] text-[11px] text-foreground/90">
            IMPERIUS · PORTFÓLIO
          </span>
        </div>
        <div className="text-center sm:text-right">
          © {new Date().getFullYear()} Imperius Digital. Conteúdo demonstrativo
          para apresentação de soluções.
        </div>
      </div>
    </footer>
  );
}
