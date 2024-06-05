import '../../styles/components/NavCircle/circle.sass'

interface CircleWithLogoProps {
  imageURL: string
  alt: string
}

export function CircleWithLogo({ imageURL, alt }: CircleWithLogoProps) {
  return (
    <div id="circle-container">
      <img src={imageURL} alt={alt} />
    </div>
  )
}
