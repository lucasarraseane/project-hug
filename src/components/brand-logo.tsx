import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export interface BrandLogoProps extends ComponentProps<"div"> {
  /** Cor do texto: claro (sobre verde escuro) ou escuro (sobre branco). */
  tone?: "light" | "dark";
}

/**
 * Marca do Cartão de TODOS: símbolo (folha/pessoa) + wordmark.
 * Usa apenas tokens semânticos para funcionar em light/dark mode.
 */
export function BrandLogo({ tone = "dark", className, ...props }: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...props}>
      <svg
        viewBox="0 0 48 48"
        role="img"
        aria-label="Cartão de TODOS"
        className="h-10 w-10 shrink-0"
      >
        <circle cx="15" cy="13" r="7" className="fill-lime" />
        <path
          d="M6 40c0-12 9-19 21-19 8 0 15 3 20 8-6 8-16 13-27 13H6z"
          className="fill-primary"
        />
        <path d="M27 24c7 0 13 2 18 6-5-9-12-13-21-13 1 2 2 4 3 7z" className="fill-lime" />
      </svg>
      <span className="leading-none">
        <span
          className={cn(
            "block text-[0.7rem] font-medium tracking-wide",
            tone === "light" ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          Cartão de
        </span>
        <span
          className={cn(
            "block text-xl font-extrabold tracking-tight",
            tone === "light" ? "text-primary-foreground" : "text-foreground",
          )}
        >
          TODOS
        </span>
      </span>
    </div>
  );
}
