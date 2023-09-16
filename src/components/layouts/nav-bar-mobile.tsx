"use client"

import { type ReactNode } from "react"

import { cn } from "../../lib/utils"
import { useLockBody } from "../../hooks/use-lock-body"

export interface MobileNavProps {
    items: ReactNode[]
    logo?: ReactNode,
}

export function MobileNav({ items, logo, children }: React.PropsWithChildren<MobileNavProps>) {
    useLockBody()

    return (
        <div
            className={cn(
                "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
            )}
        >
            <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
                {logo}

                {items?.length ? (
                    <nav className="grid grid-flow-row auto-rows-max text-sm">
                        {items}
                    </nav>
                ) : null}

                {children}
            </div>
        </div>
    )
}