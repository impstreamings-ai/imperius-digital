import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
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
} from "lucide-react";

import { trackEvent } from "@/lib/analytics";

const track = (name: string, params: Record<string, unknown> = {}) => trackEvent(name, params);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imperius — Software House para Operações Comerciais" },
      {
        name: "description",
        content:
          "Software house brasileira especializada em operações comerciais. Engenharia de atendimento, pipeline e agenda — com produtos próprios em evolução.",
      },
      { property: "og:title", content: "Imperius — Software House para Operações Comerciais" },
      {
        property: "og:description",
        content:
          "Software house brasileira especializada em operações comerciais. Engenharia de atendimento, pipeline e agenda — com produtos próprios em evolução.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://imperiuslab.com.br/" },
      { property: "og:image", content: "https://imperiuslab.com.br/assets/black-crown-cover.png" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Imperius — Software House para Operações Comerciais" },
      {
        name: "twitter:description",
        content:
          "Software house brasileira especializada em operações comerciais. Engenharia de atendimento, pipeline e agenda — com produtos próprios em evolução.",
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

const WA_MESSAGE = "Olá! Quero uma demonstração personalizada da Imperius para minha empresa.";
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
    { icon: MessageCircle, t: "Clientes perdidos no WhatsApp", d: "Mensagens espalhadas, sem registro nem responsável definido." },
    { icon: TrendingUp, t: "Leads sem acompanhamento", d: "Oportunidades entram, somem na conversa e nunca chegam ao comercial." },
    { icon: ClipboardList, t: "Tempo perdido em tarefas repetitivas", d: "Planilhas, copia-e-cola e retrabalho consumindo o time todo dia." },
    { icon: Activity, t: "Decisões no escuro", d: "Sem visão de quantos contatos entraram, quantos fecharam, quanto sobrou." },
  ];
  return (
    <section className="relative py-14 sm:py-20 border-y border-border/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mb-9 sm:mb-12">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary/70" />
            O problema
          </div>
          <h2 className="font-display font-semibold text-[1.85rem] sm:text-[2.4rem] lg:text-[2.7rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            Sua operação comercial está rodando{" "}
            <span className="text-foreground/55">no improviso.</span>
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
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <img src={"/assets/imperius-logo-official.png"} alt="Imperius Soluções Digitais" className="h-[36px] w-auto object-contain shrink-0" loading="eager" decoding="async" />
          <span className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-heading font-semibold tracking-[0.2em] text-[12px] truncate">IMPERIUS</span>
            <span className="text-[9.5px] uppercase tracking-[0.28em] text-muted-foreground/80 font-medium truncate">Software house</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[13px] text-muted-foreground font-medium">
          <a href="#vitrine" className="hover:text-foreground transition-colors">Demonstração</a>
          <a href="#processo" className="hover:text-foreground transition-colors">Como funciona</a>
          <Link to="/portfolio" className="hover:text-foreground transition-colors">Portfólio</Link>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <a href={WA} target="_blank" rel="noreferrer" className="shrink-0" onClick={() => track("whatsapp_click", { location: "nav" })}>
          <Button size="sm" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-4">
            <span className="sm:hidden">Falar agora</span>
            <span className="hidden sm:inline">Solicitar demonstração</span>
          </Button>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative lg:min-h-[82vh] flex items-center pt-24 sm:pt-28 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
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
        <div className="inline-flex items-center gap-2.5 text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-sans font-medium mb-6 sm:mb-7">
          <span className="h-px w-8 bg-primary/70" />
          Imperius · Software house
          <span className="h-px w-8 bg-primary/70" />
        </div>
        <h1 className="font-display text-[2rem] sm:text-[2.9rem] lg:text-[3.4rem] xl:text-[3.8rem] font-semibold leading-[1.04] tracking-[-0.028em] text-foreground">
          Sistemas, atendimento e automação para sua{" "}
          <span className="text-shimmer">empresa vender com mais controle</span>.
        </h1>
        <p className="mt-6 sm:mt-7 mx-auto max-w-[38rem] text-muted-foreground text-[15px] sm:text-[17px] leading-relaxed font-sans">
          Criamos páginas, fluxos de atendimento, agenda e organização comercial adaptados
          ao contexto real da sua empresa — sem depender de solução genérica.
        </p>
        <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-3.5">
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
              Solicitar análise pelo WhatsApp <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </a>
          <a
            href={PROPOSAL_MAILTO}
            className="w-full sm:w-auto"
            onClick={() => track("hero_cta_click", { destination: "email" })}
          >
            <Button
              size="lg"
              variant="outline"
              className="btn-premium w-full sm:w-auto border-border/70 bg-background/30 hover:bg-background/60 hover:border-primary/50 text-foreground/90 font-medium rounded-full h-auto min-h-12 py-2 px-5 sm:px-6 text-[12.5px] sm:text-[13.5px] whitespace-normal text-center leading-snug transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
              <span>Prefiro receber por e-mail</span>
            </Button>
          </a>
        </div>
        <p className="mt-7 sm:mt-8 text-[12px] text-muted-foreground/70 font-sans tracking-wide">
          Demonstração funcional em 3 a 7 dias úteis · Sem proposta antes da entrega
        </p>
      </div>
    </section>
  );
}









function Ecossistema() {
  const cards = [
    {
      icon: MessageCircle,
      tag: "Atendimento",
      title: "Atendimento Inteligente",
      desc: "Centralizamos WhatsApp, formulários e canais em um só fluxo — com qualificação inicial automática e registro de cada contato.",
    },
    {
      icon: Users,
      tag: "Comercial",
      title: "Gestão Comercial",
      desc: "Pipeline de oportunidades, follow-up organizado e relatórios claros para você acompanhar o que está aberto e o que fechou.",
    },
    {
      icon: Calendar,
      tag: "Operação",
      title: "Operação Integrada",
      desc: "Agenda online, confirmações automáticas e integração com o atendimento — tudo conectado em um único painel.",
    },
  ];
  return (
    <section className="relative py-14 sm:py-20 border-b border-border/30 bg-[oklch(0.075_0.004_240)]">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[220px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.22 250 / 0.2), transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-9 sm:mb-12">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary/70" />
            Ecossistema Imperius
          </div>
          <h2 className="font-display font-semibold text-[1.85rem] sm:text-[2.4rem] lg:text-[2.7rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            O que a Imperius{" "}
            <span className="text-neon">entrega na prática.</span>
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
    <section id="vitrine" className="relative py-14 sm:py-20 border-t border-border/30">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" aria-hidden />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[380px] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.22 250 / 0.18), transparent 70%)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary/70" />
            Demonstração
          </div>
          <h2 className="font-display font-semibold text-[1.85rem] sm:text-[2.4rem] lg:text-[2.7rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            Demonstração funcional,{" "}
            <span className="text-neon">navegável agora.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-[14.5px] sm:text-[16px] leading-relaxed font-sans">
            Não é mockup. É um ambiente operacional ao vivo, em domínio próprio —
            o mesmo padrão de engenharia que aplicamos ao seu negócio.
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
                Demonstração funcional completa: site, agendamento, atendimento e
                identidade — desenvolvidos e operados pela Imperius.
              </p>
              <div className="mt-5 text-[11px] uppercase tracking-[0.22em] font-sans text-muted-foreground/70 truncate">
                blackcrown-by-imperius.lovable.app
              </div>
              <div className="mt-auto pt-6">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-[13px] font-sans font-semibold transition-transform group-hover:-translate-y-0.5">
                  Ver demonstração Black Crown
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </div>
        </a>

        <div className="mt-8 sm:mt-10 rounded-xl border border-border/50 bg-[oklch(0.1_0.005_245)]/70 backdrop-blur-md p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="max-w-2xl">
            <h3 className="font-display font-semibold text-[1.1rem] sm:text-[1.3rem] tracking-[-0.015em] text-foreground leading-snug">
              Outras demonstrações por segmento
            </h3>
            <p className="mt-2 text-[13.5px] sm:text-[14px] text-muted-foreground leading-relaxed font-sans">
              Veja exemplos adaptados para clínicas, estética, restaurantes e imobiliárias.
            </p>
          </div>
          <Link
            to="/portfolio"
            onClick={() => track("portfolio_bridge_click", { from: "home_demo" })}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/50 bg-primary/15 hover:bg-primary/25 text-[13px] font-sans font-semibold text-primary transition-colors"
          >
            Explorar portfólio de demonstrações
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}








function Process() {
  const steps = [
    { n: "01", i: MessageCircle, t: "Diagnóstico", d: "Conversa direta para mapear contexto, gargalos e oportunidades reais." },
    { n: "02", i: LayoutTemplate, t: "Construção", d: "Engenharia da solução sob o seu contexto — funcional antes de qualquer fechamento." },
    { n: "03", i: Rocket, t: "Implantação", d: "Deploy, integrações e operação assistida até estar rodando com o seu time." },
  ];
  return (
    <section id="processo" className="py-14 sm:py-20 border-t border-border/30">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl mb-9 sm:mb-12">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary/70" />
            Como funciona
          </div>
          <h2 className="font-display font-semibold text-[1.85rem] sm:text-[2.4rem] lg:text-[2.7rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            Três etapas.{" "}
            <span className="text-foreground/55">Projeto ajustado ao seu contexto.</span>
          </h2>
        </div>

        <ol className="grid gap-4 sm:gap-5 sm:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.t}
              className="card-rise rounded-xl border border-border/50 bg-[oklch(0.1_0.005_245)]/70 backdrop-blur-md p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
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
      q: "Quanto custa um projeto da Imperius?",
      a: "Projetos partem de uma faixa definida em conjunto após entender escopo, integrações e canais. Não trabalhamos com mensalidade obrigatória: você escolhe entre pagamento único do projeto ou plano contínuo de evolução e suporte. O valor é apresentado por escrito antes de qualquer compromisso — você só aprova depois de ver a demonstração funcional.",
    },
    {
      q: "Quanto tempo leva para entregar?",
      a: "Demonstração funcional personalizada: 3 a 7 dias úteis. Projeto completo (site + automação + CRM + agenda): 2 a 4 semanas, conforme escopo e integrações. Definimos cronograma por etapas no kickoff, com datas de entrega registradas.",
    },
    {
      q: "A automação funciona no meu WhatsApp atual?",
      a: "Sim. Trabalhamos com a API oficial do WhatsApp Business (Meta), o que mantém o número, contatos e conversas. O atendimento humano continua funcionando normalmente — a IA atua só nos momentos definidos por você (fora do horário, fila cheia, primeira triagem, agendamento).",
    },
    {
      q: "O site, código e dados são meus?",
      a: "Sim. O projeto entregue é seu: você recebe acesso ao código-fonte, ao painel, ao domínio e ao banco de dados. Não há lock-in técnico. Se um dia decidir sair, você leva tudo — inclusive os contatos, histórico de conversas e pipeline do CRM, exportáveis em formato padrão.",
    },
    {
      q: "Tem suporte depois da entrega?",
      a: "Sim. Todo projeto inclui período de acompanhamento pós-publicação para ajustes finos. Após esse período, você pode contratar um plano contínuo (evolução + suporte + monitoramento) ou seguir avulso por demanda. Resposta a chamados em horário comercial, com SLA combinado em contrato.",
    },
    {
      q: "Com quem eu falo?",
      a: "Diretamente com a equipe que desenvolve o projeto. Sem atendimento terceirizado, sem chatbot intermediário — o mesmo time conduz da conversa inicial à publicação e ao suporte.",
    },
  ];
  return (
    <section id="faq" className="py-14 sm:py-20 border-t border-border/30">
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
        <div className="max-w-2xl mb-9 sm:mb-12">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-5 font-sans inline-flex items-center gap-2.5">
            <span className="h-px w-8 bg-primary/70" />
            FAQ
          </div>
          <h2 className="font-display font-semibold text-[1.85rem] sm:text-[2.4rem] lg:text-[2.7rem] leading-[1.06] tracking-[-0.028em] text-foreground">
            Preço, prazo, propriedade e suporte —{" "}
            <span className="text-foreground/55">respondidos direto.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-[14.5px] sm:text-[16px] leading-relaxed font-sans max-w-2xl">
            As perguntas que todo cliente faz antes de decidir. Respostas objetivas, sem rodeio comercial.
          </p>
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
    <section className="relative py-16 sm:py-24 border-t border-border/30 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[420px] rounded-full blur-3xl opacity-18 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.22 250 / 0.22), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="text-[10.5px] uppercase tracking-[0.32em] text-muted-foreground/90 font-medium mb-6 font-sans inline-flex items-center gap-2.5">
          <span className="h-px w-8 bg-primary/70" />
          Próximo passo
        </div>
        <h2 className="font-display font-semibold text-[1.85rem] sm:text-[2.5rem] lg:text-[2.9rem] leading-[1.06] tracking-[-0.028em] text-foreground">
          Veja como sua operação pode ficar mais{" "}
          <span className="text-neon">organizada, apresentável</span>{" "}
          e pronta para vender.
        </h2>
        <p className="mt-6 text-muted-foreground text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed font-sans">
          Demonstração funcional construída para a sua empresa —
          escopo definido em conjunto, projeto funcional antes de qualquer contrato.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
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
              Solicitar análise pelo WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
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
        <p className="mt-8 text-[12px] text-muted-foreground/80 font-sans tracking-wide max-w-xl mx-auto leading-relaxed">
          Atendimento direto com a equipe técnica · Resposta em até 2h em horário comercial.
        </p>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="relative border-t border-border/40 mt-10 overflow-hidden">
      <div className="absolute inset-x-0 -top-px h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.22 250 / 0.6), transparent)" }} />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-40 pointer-events-none" style={{ background: "radial-gradient(ellipse, oklch(0.55 0.25 250 / 0.35), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 pt-14 sm:pt-16 pb-24 sm:pb-20">
        <div className="grid md:grid-cols-3 gap-10">
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

        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col items-center gap-2 text-center text-xs text-muted-foreground font-sans">
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
