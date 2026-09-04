import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Arquivos servidos de /public — funcionam na Lovable e em qualquer host (Netlify, Vercel...). */
const LOGO_LIGHT_URL = "/brand/logo-cdt-light.svg";
const LOGO_DARK_URL = "/brand/logo-cdt-dark.svg";

export interface BrandLogoProps extends Omit<ComponentProps<"img">, "src" | "alt"> {
  /** "light" = versão branca (sobre fundo escuro); "dark" = versão verde (sobre fundo claro). */
  tone?: "light" | "dark";
}

/** Logotipo oficial do Cartão de TODOS. */
export function BrandLogo({ tone = "dark", className, ...props }: BrandLogoProps) {
  return (
    <img
      src={tone === "light" ? LOGO_LIGHT_URL : LOGO_DARK_URL}
      alt="Cartão de TODOS"
      className={cn("h-8 w-auto", className)}
      {...props}
    />
  );
}
