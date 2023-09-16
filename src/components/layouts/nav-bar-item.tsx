import { Slot } from "@radix-ui/react-slot"

import * as React from "react"

import { cn } from "../../lib/utils"

import { type VariantProps } from "class-variance-authority"
import { navBarItemVariants } from "./nav-bar-item-variants"


interface NavBarItemProps extends React.ButtonHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navBarItemVariants> {
    href: string,
    asChild?: boolean
}


const NavBarItem = React.forwardRef<HTMLAnchorElement, NavBarItemProps>(
    ({ className, style, variant, opacity, asChild = false, href, disabled, ...props }, ref) => {
        const Comp = asChild ? Slot : "a"
        const opacityVariant: typeof opacity = opacity ?? disabled ? "subtle" : "default"
        const cursor = disabled ? "not-allowed" : style?.cursor;

        return (
            <Comp
                style={{ ...style, cursor }}
                href={disabled ? "#" : href}
                className={cn(navBarItemVariants({ variant, opacity: opacityVariant, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
NavBarItem.displayName = "Button"

export { NavBarItem, type NavBarItemProps }