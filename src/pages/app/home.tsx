import '../../styles/pages/Home/home.sass'

import { Facebook, Instagram, Youtube } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Banner } from '../../components/banner'
import { CategoryCard } from '../../components/CategoryCard'
import { NavCircle } from '../../components/NavCircle'
import { PartnersAndProductBanner } from '../../components/PartnersAndProductBannerProps'
import { ProductsCarousel } from '../../components/ProductsCarousel'
import { ProductsTable } from '../../components/ProductTable'
import { RegisterNewsletter } from '../../components/RegisterNewsletter'
import { Separator } from '../../components/Separator'
import { CARDS_CATEGORIES } from '../../utils/cardsCategories'
import { PAYMENT_METHODS } from '../../utils/payment-methods'
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

      <div>
        <footer>
          <section id="about-info-container">
            <div id="about-container">
              <p>Sobre nós</p>

              <div>
                <Link to={'/'}>Conheça</Link>
                <Link to={'/'}>Como comprar</Link>
                <Link to={'/'}>Indicação e Desconto</Link>
              </div>

              <div id="social-icons">
                <Link to={'/'}>
                  <Facebook size={22} />
                </Link>

                <Link to={'/'}>
                  <Instagram size={22} />
                </Link>

                <Link to={'/'}>
                  <Youtube size={22} />
                </Link>
              </div>
            </div>
            <div id="infos-container">
              <p>INFORMAÇÕES ÚTEIS</p>

              <div>
                <Link to={'/'}>FALE CONOSCO</Link>
                <Link to={'/'}>DÚVIDAS</Link>
                <Link to={'/'}>Prazos de Entrega</Link>
                <Link to={'/'}>Formas de Pagamento</Link>
                <Link to={'/'}>Política de privacidade</Link>
                <Link to={'/'}>Trocas e Devoluções</Link>
              </div>
            </div>
            <div id="payment-methods-container">
              <p>FORMAS DE PAGAMENTO</p>

              <div>
                {PAYMENT_METHODS.map((paymentMethod) => (
                  <img
                    key={paymentMethod.id}
                    src={paymentMethod.image}
                    alt={`Logo do ${paymentMethod.name}`}
                  />
                ))}
              </div>
            </div>
          </section>
          <RegisterNewsletter />
        </footer>

        <div className="footerCopyright">
          <span>
            Copyright © 2019. Todos os direitos reservados. Todas as marcas e
            suas imagens são de propriedade de seus respectivos donos. É vedada
            a reprodução, total ou parcial, de qualquer conteúdo sem expressa
            autorização.
          </span>

          <div>
            <img src="/econverse.png" alt="" />
            <img src="/vtex.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
