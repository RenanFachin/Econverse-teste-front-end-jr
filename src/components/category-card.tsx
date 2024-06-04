import '../styles//components/CategoryCard/category-card.sass'

import { Link } from 'react-router-dom'

interface CardProps {
  SvgIcon: React.FC<React.SVGProps<SVGSVGElement>>
  name: string
}

export function CategoryCard({ SvgIcon, name }: CardProps) {
  return (
    <Link to={'/'} id="card-container">
      <div className="card-content">
        <SvgIcon width={61} height={61} fill="#2A2A2A" />
      </div>

      <span>{name}</span>
    </Link>
  )
}
