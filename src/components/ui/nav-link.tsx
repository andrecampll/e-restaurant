import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

export type NavLinkProps = {
  children: ReactNode
} & LinkProps

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <Link
      className="flex items-center gap-5 text-sm font-medium text-muted-foreground hover:text-foreground"
      {...props}
    >
      {children}
    </Link>
  )
}
