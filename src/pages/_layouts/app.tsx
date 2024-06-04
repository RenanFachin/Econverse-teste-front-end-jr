import '../../styles/pages/layout.sass'

import { Outlet } from 'react-router-dom'

import { Header } from '../../components/header'

export function AppLayout() {
  return (
    <div id="container">
      <Header />

      <main id="content">
        {/* Contéudo da página */}
        <Outlet />
      </main>
    </div>
  )
}
