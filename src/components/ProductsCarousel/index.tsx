import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/a11y'
import 'swiper/css/effect-fade'
import '../../styles/pages/Home/home.sass'

import { ArrowRight, Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from '../button'
import { Modal } from '../Modal'
import { ProductCard, ProductCardProps } from '../ProductCard'

interface ProductsCarouselProps {
  products: ProductCardProps[]
}

const initialCount = 1
const minCount = 0
const maxCount = 10

export function ProductsCarousel({ products }: ProductsCarouselProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] =
    useState<ProductCardProps | null>(null)

  const [count, setCount] = useState(initialCount)

  const handleIncrement = () => {
    if (count < maxCount) {
      setCount((prevCount) => prevCount + 1)
    }
  }

  const handleDecrement = () => {
    if (count > minCount) {
      setCount((prevCount) => prevCount - 1)
    }
  }

  const openModalWithProduct = (product: ProductCardProps) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <section className="products-container">
      <Swiper
        cssMode={true}
        modules={[Navigation, A11y]}
        spaceBetween={62}
        slidesPerView={4}
        navigation
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.productName}
            onClick={() => openModalWithProduct(product)}
          >
            <ProductCard
              photo={product.photo}
              productName={product.productName}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedProduct && (
          <div className="modal-container">
            <img
              src={selectedProduct.photo}
              alt={selectedProduct.productName}
            />

            <div className="modal-details">
              <h2>{selectedProduct.productName}</h2>

              <p>R$ {selectedProduct.price},00</p>

              <span>
                Many desktop publishing packages and web page editors now many
                desktop publishing
              </span>

              <Link to={'/'}>
                Veja mais detalhes do produto
                <ArrowRight size={12} />
              </Link>

              <div className="quantity">
                <button onClick={handleDecrement}>
                  <Minus size={20} />
                </button>
                <input type="text" readOnly value={count} />
                <button onClick={handleIncrement}>
                  <Plus size={20} />
                </button>
              </div>

              <Button title="comprar" size="large" />
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
