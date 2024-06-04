import '../../styles/pages/Home/banner.sass'

import { Link } from 'react-router-dom'

export function Banner() {
  return (
    <div id="banner-container">
      <img src="/banner.png" alt="" className="banner" />

      <div id="details">
        <div>
          <h2>Venha conhecer nossas promoções</h2>

          <p>50% Off nos produtos</p>
        </div>

        <Link to={'/'} className="see-product-button">
          Ver produto
        </Link>
      </div>
    </div>
  )
}
