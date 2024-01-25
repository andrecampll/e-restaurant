import { Coffee, Home, UtensilsCrossed } from 'lucide-react'

import { NavLink } from './ui/nav-link'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Coffee className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink href="/">
            <Home className="h-4 w-4" />
            Home
          </NavLink>

          <NavLink href="/">
            <UtensilsCrossed className="h-4 w-4" />
            Orders
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
