import { LeafyGreen } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  return (
    <div className="fixed z-20 w-full border-b bg-background">
      <div className="flex h-16 w-full items-center gap-6 px-6">
        <div className="flex items-center justify-center gap-2 text-primary">
          <LeafyGreen className="h-6 w-6" />
          <span className="text-xl font-medium">Garden Control</span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
