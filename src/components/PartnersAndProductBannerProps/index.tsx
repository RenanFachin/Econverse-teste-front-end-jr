import '../../styles/components/PartnersAndProductBannerProps/partnersAndProductBannerProps.sass'

import { Button } from '../button'

interface PartnersAndProductBannerProps {
  imageURL: string
  title: string
  subTitle: string
  buttonTitle: string
}

export function PartnersAndProductBanner({
  buttonTitle,
  imageURL,
  subTitle,
  title,
}: PartnersAndProductBannerProps) {
  return (
    <div className="partners-content">
      <img src={imageURL} alt="" />
      <div className="gradient-overlay" />

      <div>
        <strong>{title}</strong>
        <p>{subTitle}</p>

        <Button title={buttonTitle} size="small" />
      </div>
    </div>
  )
}
