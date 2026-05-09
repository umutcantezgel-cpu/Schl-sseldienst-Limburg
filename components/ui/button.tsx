import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] text-base font-bold transition-all duration-[var(--duration-normal)] ease-[var(--ease-spring)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--color-blue-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-base)] active:scale-[0.97]",
    {
        variants: {
            variant: {
                default:
                    "bg-[var(--color-blue-primary)] text-white shadow-[var(--shadow-md)] hover:bg-[#3377FF] hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] border border-transparent",
                secondary:
                    "border border-[var(--color-blue-primary)]/20 bg-[var(--color-surface-glass)] text-[var(--color-blue-primary)] backdrop-blur-md hover:bg-[var(--color-blue-light)] hover:border-[var(--color-blue-primary)]/40 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-subtle)]",
                outline:
                    "border border-[var(--color-border-subtle)] bg-transparent text-[var(--color-text-main)] hover:bg-[var(--color-surface-elevated)] hover:border-[var(--color-border-focus)]",
                ghost: "hover:bg-[var(--color-blue-light)] hover:text-[var(--color-blue-primary)] text-[var(--color-text-main)]",
                link: "text-[var(--color-blue-primary)] underline-offset-4 hover:underline",
                emergency:
                    "bg-gradient-to-r from-[var(--color-blue-primary)] to-[#3377FF] text-white shadow-[var(--shadow-glow)] hover:shadow-[0_0_40px_rgba(0,82,255,0.4)] hover:-translate-y-1 animate-pulse-glow font-extrabold border border-[var(--color-border-glass)]",
            },
            size: {
                default: "h-12 min-h-[48px] px-6 py-3",
                sm: "h-12 min-h-[48px] rounded-[var(--radius-sm)] px-4 text-sm",
                lg: "h-14 min-h-[48px] rounded-[var(--radius-lg)] px-8 text-lg",
                icon: "h-12 min-h-[48px] w-12 min-w-[48px]",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
