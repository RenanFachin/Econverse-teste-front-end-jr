import '../styles/components/nav-icons.sass'

import { CircleUser, Heart, ShoppingCart } from 'lucide-react'

export function NavIcons() {
  return (
    <div id="nav-icons-container">
      <img src="/public/icon-undo.png" alt="" />

      <Heart className="icon-xl" />
      <CircleUser className="icon-xl" />
      <ShoppingCart className="icon-xl" />
    </div>
  )
}
