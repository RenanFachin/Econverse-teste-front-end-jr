import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Teste técnico Econverse" />

      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
