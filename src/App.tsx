import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="garden-control-theme">
        <Helmet titleTemplate="%s | Garden Control" />

        <Toaster richColors />

        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
