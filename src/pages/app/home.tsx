import { Helmet } from 'react-helmet-async'

import { Banner } from '../../components/banner'

export function Home() {
  return (
    <div>
      <Helmet title="Home" />

      <div>
        <Banner />
      </div>
    </div>
  )
}
