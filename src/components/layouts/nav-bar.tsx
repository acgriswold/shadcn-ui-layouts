"use client"

import { type ReactNode, useState } from "react"

import { Icons } from "../global/icons"
import { MobileNav } from "./nav-bar-mobile"
import { Button } from "../ui/button"

export interface NavBarProps {
    items?: ReactNode[]
    children?: ReactNode,
    logo?: ReactNode
}

export function NavBar({ items, logo, children }: NavBarProps) {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

    return (
        <div className="flex gap-6 md:gap-10">
            {logo}

            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
                    items
                </nav>
            ) : null}

            <Button
                size="sm"
                variant="ghost"
                className="flex items-center space-x-2 md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? <Icons.close /> : <Icons.logo />}
                <span className="font-bold">Menu</span>
            </Button>

            {showMobileMenu && items && (
                <MobileNav items={items}>{children}</MobileNav>
            )}
        </div>
    )
}