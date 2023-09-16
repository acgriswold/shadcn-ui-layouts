import { cva } from "class-variance-authority"

const navBarItemVariants = cva(
    "flex items-center font-medium text-foreground transition-colors text-lg sm:text-sm",
    {
        variants: {
            variant: {
                default:
                    "hover:text-foreground/80",
                subtle:
                    "w-full rounded-md p-2 hover:underline",
            },
            opacity: {
                default: "opacity-100",
                subtle: "opacity-80",
                muted: "opacity-60"                
            }
        },
        defaultVariants: {
            variant: "default",
            opacity: "default"
        },
    }
)

  export { navBarItemVariants };