import * as React from "react"

import { cn } from "@/lib/utils"

export type FooterProps = React.HTMLAttributes<HTMLElement> &{
  logo?: React.ReactNode,
  pin?: React.ReactNode,
}

export function SimpleFooter({ children, logo, pin, className }: React.PropsWithChildren<FooterProps>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-8 px-8 md:flex-row md:gap-2 md:px-0">
          {logo}

          <div className="text-center text-sm leading-loose md:text-left">
            {children}
          </div>
        </div>

        {pin}
      </div>
    </footer>
  )
}