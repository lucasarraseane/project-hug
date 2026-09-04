import { createFileRoute } from "@tanstack/react-router";
import { Download, ShieldCheck, Smartphone, Zap, CheckCircle2 } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Baixe o app Cartão de TODOS | Download oficial Android" },
      {
        name: "description",
        content:
          "Baixe o aplicativo oficial do Cartão de TODOS direto por esta página. Download seguro, instalação simples e acesso rápido aos seus benefícios.",
      },
      { property: "og:title", content: "Baixe o app Cartão de TODOS" },
      {
        property: "og:description",
        content:
          "Download direto e seguro do aplicativo Cartão de TODOS para Android. Consultas, descontos e benefícios na palma da mão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DownloadPage,
});

/** Arquivo APK oficial hospedado no CDN. */
const APP_FILE_URL = apkAsset.url;
/** Tamanho aproximado do APK, exibido ao usuário antes do download. */
const APP_FILE_SIZE = `${(apkAsset.size / (1024 * 1024)).toFixed(1)} MB`;

const FEATURES = [
  { icon: ShieldCheck, title: "Download seguro", note: "Arquivo direto" },
  { icon: Zap, title: "Acesso rápido", note: "Instalação simples" },
  { icon: Smartphone, title: "Para Android", note: "Pronto para usar" },
] as const;

function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <BrandLogo className="h-9" />
          <span className="hidden text-xs text-muted-foreground sm:block">Aplicativo oficial</span>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
          Download seguro
        </span>
      </header>

      <main className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-8 lg:grid-cols-2 lg:pt-16">
        <section>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            Disponível para Android
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Baixe o app{" "}
            <span className="text-primary">
              Cartão de <span className="whitespace-nowrap">TODOS</span>
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Tenha uma experiência mais prática para acompanhar seus benefícios. Baixe o aplicativo
            diretamente por esta página e acesse tudo de forma rápida e simples.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-accent px-8 text-base font-semibold text-accent-foreground hover:bg-accent/90"
            >
              <a href={APP_FILE_URL} download>
                <Download className="h-5 w-5" aria-hidden />
                Baixar aplicativo
              </a>
            </Button>
            <span className="flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-4 text-base font-medium text-foreground">
              <ShieldCheck className="h-5 w-5 text-primary" aria-hidden />
              Download direto e seguro
            </span>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, note }) => (
              <li key={title} className="rounded-xl border border-border bg-card p-5">
                <Icon className="h-5 w-5 text-primary" aria-hidden />
                <p className="mt-4 font-semibold text-card-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{note}</p>
              </li>
            ))}
          </ul>
        </section>

        <AppPreviewCard />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cartão de TODOS. Todos os direitos reservados.</p>
          <p>Página de download do aplicativo</p>
        </div>
      </footer>
    </div>
  );
}

/** Cartão lateral que simula o ícone do app na loja. */
function AppPreviewCard() {
  return (
    <aside className="rounded-3xl border border-border bg-card p-6 shadow-xl">
      <div className="rounded-2xl bg-brand-deep p-6">
        <div className="mx-auto flex aspect-square w-full max-w-[220px] items-center justify-center rounded-2xl bg-primary p-8">
          <BrandLogo tone="light" className="h-auto w-full" />
        </div>
        <div className="mt-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
            <Smartphone className="h-5 w-5 text-accent-foreground" aria-hidden />
          </span>
          <span>
            <span className="block font-semibold text-brand-deep-foreground">Cartão de TODOS</span>
            <span className="block text-sm text-brand-deep-foreground/70">Aplicativo Android</span>
          </span>
        </div>
      </div>
      <p className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-secondary py-3 text-sm font-medium text-primary">
        <CheckCircle2 className="h-4 w-4" aria-hidden />
        Arquivo disponível para download
      </p>
    </aside>
  );
}
