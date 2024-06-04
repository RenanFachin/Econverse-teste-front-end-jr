import '../styles/components/input.sass'

import { Search } from 'lucide-react'

export function Input() {
  return (
    <div id="input-container">
      <input type="text" placeholder="O que você está buscando?" />

      <Search className="icon" />
    </div>
  )
}
