import '../../styles/pages/Home/home.sass'

import { Helmet } from 'react-helmet-async'

import { Banner } from '../../components/banner'
import { CategoryCard } from '../../components/category-card'
import { CARDS_CATEGORIES } from '../../utils/cardsCategories'

export function Home() {
  return (
    <div>
      <Helmet title="Home" />

      <div>
        <Banner />
      </div>

      <div className="categories">
        {CARDS_CATEGORIES &&
          CARDS_CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              SvgIcon={category.SvgIcon}
            />
          ))}
      </div>
    </div>
  )
}
