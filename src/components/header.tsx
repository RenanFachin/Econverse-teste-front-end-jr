import '../styles/components/header.sass'

import { CreditCard, ShieldCheck, Truck } from 'lucide-react'

import { Input } from './input'
import { NavIcons } from './nav-icons'

export function Header() {
  return (
    <header>
      <div className="headerMessageBarContainer">
        <div className="messages">
          <ShieldCheck size={20} />
          <p>
            Compra <span>100% segura</span>
          </p>
        </div>

        <div className="messages">
          <Truck size={20} />
          <p>
            <span>Frete grátis</span> acima de R$ 200
          </p>
        </div>

        <div className="messages">
          <CreditCard size={20} />
          <p>
            <span>Parcele</span> suas compras
          </p>
        </div>
      </div>

      <div id="header-content">
        <img src="/public/vtex-logo.png" alt="Logo VTEX" width={139} />

        <Input />

        <NavIcons />
      </div>
    </header>
  )
}
