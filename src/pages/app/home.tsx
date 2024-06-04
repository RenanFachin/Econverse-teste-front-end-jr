import '../../styles/pages/Home/home.sass'

import { Helmet } from 'react-helmet-async'

import { Banner } from '../../components/banner'
import { CategoryCard } from '../../components/CategoryCard'
import { ProductsCarousel } from '../../components/ProductsCarousel'
import { ProductsTable } from '../../components/ProductTable'
import { Separator } from '../../components/Separator'
import { CARDS_CATEGORIES } from '../../utils/cardsCategories'
import { PRODUCTS } from '../../utils/productsData'

export function Home() {
  return (
    <div>
      <Helmet title="Home" />
      <Banner />

      <section className="categories">
        {CARDS_CATEGORIES &&
          CARDS_CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              SvgIcon={category.SvgIcon}
            />
          ))}
      </section>

      <Separator />

      <ProductsTable />

      <section className="products-container">
        <ProductsCarousel products={PRODUCTS} />
      </section>
    </div>
  )
}
