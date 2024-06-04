import '../../styles/pages/layout.sass'

import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'

export function AppLayout() {
  return (
    <div id="container">
      <Header />
      <Navbar />

      <main id="content">
        {/* Contéudo da página */}
        <Outlet />
      </main>
    </div>
  )
}
