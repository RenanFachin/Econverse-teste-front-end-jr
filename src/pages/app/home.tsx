import '../../styles/pages/Home/home.sass'

import { Helmet } from 'react-helmet-async'

import { Banner } from '../../components/banner'
import { CategoryCard } from '../../components/CategoryCard'
import { NavCircle } from '../../components/NavCircle'
import { PartnersAndProductBanner } from '../../components/PartnersAndProductBannerProps'
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
      <ProductsCarousel products={PRODUCTS} />

      <section className="partners-container">
        <PartnersAndProductBanner
          title="Parceiros"
          subTitle="Lorem ipsum dolor sit amet, consectetur"
          imageURL="/partners-image.png"
          buttonTitle="CONFIRA"
        />

        <PartnersAndProductBanner
          title="Parceiros"
          subTitle="Lorem ipsum dolor sit amet, consectetur"
          imageURL="/partners-image.png"
          buttonTitle="CONFIRA"
        />
      </section>

      <Separator hasSubtitle subTitle="ver todos" />

      <section className="products-container">
        <PartnersAndProductBanner
          title="Produtos"
          subTitle="Lorem ipsum dolor sit amet, consectetur"
          imageURL="/products-image.png"
          buttonTitle="CONFIRA"
        />

        <PartnersAndProductBanner
          title="Produtos"
          subTitle="Lorem ipsum dolor sit amet, consectetur"
          imageURL="/products-image.png"
          buttonTitle="CONFIRA"
        />
      </section>

      <NavCircle />
    </div>
  )
}
