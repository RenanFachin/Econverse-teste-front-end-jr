import '../../styles/components/Header/header.sass'

import { CreditCard, ShieldCheck, Truck } from 'lucide-react'

import { Input } from './input'
import { MessageBar } from './message-bar'
import { NavIcons } from './nav-icons'

export function Header() {
  return (
    <header>
      <div className="headerMessageBarContainer">
        <MessageBar Icon={ShieldCheck}>
          <p>
            Compra <span>100% segura</span>
          </p>
        </MessageBar>

        <MessageBar Icon={Truck}>
          <p>
            <span>Frete grátis</span> acima de R$ 200
          </p>
        </MessageBar>

        <MessageBar Icon={CreditCard}>
          <p>
            <span>Parcele</span> suas compras
          </p>
        </MessageBar>
      </div>

      <div id="header-content">
        <img src="/vtex-logo.png" alt="Logo VTEX" width={139} />

        <Input />

        <NavIcons />
      </div>
    </header>
  )
}
