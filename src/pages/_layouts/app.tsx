import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { MovementsProvider } from '@/contexts/MovementsContext'

export function AppLayout() {
  return (
    <MovementsProvider>
      <div className="flex min-h-screen flex-col antialiased">
        <Header />

        <div className="flex flex-1 flex-col gap-4 p-8 pt-24">
          <Outlet />
        </div>
      </div>
    </MovementsProvider>
  )
}
