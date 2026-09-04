import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import logoLight from "@/assets/logo-cdt-light.svg.asset.json";
import logoDark from "@/assets/logo-cdt-dark.svg.asset.json";

export interface BrandLogoProps extends Omit<ComponentProps<"img">, "src" | "alt"> {
  /** "light" = versão branca (sobre fundo escuro); "dark" = versão verde (sobre fundo claro). */
  tone?: "light" | "dark";
}

/** Logotipo oficial do Cartão de TODOS, servido via CDN de assets. */
export function BrandLogo({ tone = "dark", className, ...props }: BrandLogoProps) {
  return (
    <img
      src={tone === "light" ? logoLight.url : logoDark.url}
      alt="Cartão de TODOS"
      className={cn("h-8 w-auto", className)}
      {...props}
    />
  );
}
