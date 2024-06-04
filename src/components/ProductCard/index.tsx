import '../../styles/components/ProductCard/productCard.sass'

import { Button } from '../button'

export interface ProductCardProps {
  photo: string
  productName: string
  price: number
}

export function ProductCard({ photo, productName, price }: ProductCardProps) {
  return (
    <div>
      <div className="product-card-content">
        <img src={photo} alt="" />

        <h2>{productName}</h2>

        <div className="price-container">
          <p>R$ {price},00</p>
          <h3>R$ {price},00</h3>

          <h4>ou 2x R$ {price / 2} sem juros</h4>

          <span>Frete grátis</span>
        </div>

        <Button title="comprar" size="large" />
      </div>
    </div>
  )
}
