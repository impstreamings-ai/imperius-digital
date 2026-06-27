import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">

      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Não foi possível carregar esta página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado do nosso lado. Tente novamente ou volte para o início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Imperius — Diagnóstico do gargalo que está custando clientes" },
      { name: "description", content: "Imperius encontra o ponto onde sua operação perde cliente e encurta o caminho até a venda." },
      { name: "author", content: "Imperius" },
      { property: "og:title", content: "Imperius — Diagnóstico do gargalo que está custando clientes" },
      { property: "og:description", content: "Imperius encontra o ponto onde sua operação perde cliente e encurta o caminho até a venda." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Imperius" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Imperius — Diagnóstico do gargalo que está custando clientes" },
      { name: "twitter:description", content: "Imperius encontra o ponto onde sua operação perde cliente e encurta o caminho até a venda." },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Imperius",
          url: "https://imperius-digital.lovable.app/",
          logo: "https://imperius-digital.lovable.app/assets/imperius-logo-official.png",
          sameAs: ["https://instagram.com/imperiusdigital.br"],
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const isProd = import.meta.env.PROD;
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        {isProd ? (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-24VYN8CDZ1"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js', new Date());gtag('config', 'G-24VYN8CDZ1', { send_page_view: true });`,
              }}
            />
          </>
        ) : null}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}


function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    const unsub = router.subscribe("onResolved", ({ toLocation }) => {
      if (typeof window === "undefined" || !window.gtag) return;
      window.gtag("event", "page_view", {
        page_path: toLocation.pathname + (toLocation.searchStr ?? ""),
        page_location: window.location.href,
        page_title: document.title,
      });
    });
    return () => unsub();
  }, [router]);

  // Cursor-aware spotlight para .card-rise — define --mx/--my no elemento sob o mouse.
  // Pointer fine apenas, reduced-motion respeitado, listener único delegado.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const target = (e.target as Element | null)?.closest?.(".card-rise") as HTMLElement | null;
        if (!target) return;
        const rect = target.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        const my = ((e.clientY - rect.top) / rect.height) * 100;
        target.style.setProperty("--mx", `${mx}%`);
        target.style.setProperty("--my", `${my}%`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
