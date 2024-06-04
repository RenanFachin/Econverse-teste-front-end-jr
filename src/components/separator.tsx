import '../styles/components/separator.sass'

import { Link } from 'react-router-dom'

interface SeparatorProps {
  hasSubtitle?: boolean
  subTitle?: string
}

export function Separator({ hasSubtitle = false, subTitle }: SeparatorProps) {
  return (
    <div id="separator-container">
      <hr />

      <div className="separator-content">
        <strong>Produtos relacionados</strong>

        {hasSubtitle && <Link to={'/'}>{subTitle}</Link>}
      </div>

      <hr />
    </div>
  )
}
