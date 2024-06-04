import '../../styles/components/Header/nav-icons.sass'

import { CircleUser, Heart, ShoppingCart } from 'lucide-react'

export function NavIcons() {
  return (
    <div id="nav-icons-container">
      <button aria-label="botão com um ícone desfazer">
        <img src="/icon-undo.png" alt="" />
      </button>

      <button aria-label="botão com um ícone que leva a página de favoritos">
        <Heart className="icon-xl" />
      </button>

      <button aria-label="botão com um ícone que leva a página de preferências do usuário">
        <CircleUser className="icon-xl" />
      </button>

      <button aria-label="botão com um ícone que leva a página de carrinho de compras">
        <ShoppingCart className="icon-xl" />
      </button>
    </div>
  )
}
