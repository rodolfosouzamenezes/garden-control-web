import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { NotFound } from './pages/404'
import { Movements } from './pages/app/movement/movements'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Movements />,
      },
    ],
  },
])
