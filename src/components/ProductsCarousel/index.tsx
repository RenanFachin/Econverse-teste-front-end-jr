import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/a11y'
import 'swiper/css/effect-fade'
import '../../styles/pages/Home/home.sass'

import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ProductCard, ProductCardProps } from '../ProductCard'

interface ProductsCarouselProps {
  products: ProductCardProps[]
}

export function ProductsCarousel({ products }: ProductsCarouselProps) {
  return (
    <section>
      <Swiper
        cssMode={true}
        modules={[Navigation, A11y]}
        spaceBetween={62}
        slidesPerView={4}
        navigation
      >
        {products.map((product) => (
          <SwiperSlide key={product.productName}>
            <ProductCard
              photo={product.photo}
              productName={product.productName}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
