import '../../styles/components/NavCircle/navCircle.sass'

import { CircleWithLogo } from './circle-with-logo'

export function NavCircle() {
  const logos = [
    { src: '/vtex-logo-large.png', alt: 'VTEX Logo 1' },
    { src: '/vtex-logo-large.png', alt: 'VTEX Logo 2' },
    { src: '/vtex-logo-large.png', alt: 'VTEX Logo 3' },
    { src: '/vtex-logo-large.png', alt: 'VTEX Logo 4' },
    { src: '/vtex-logo-large.png', alt: 'VTEX Logo 5' },
  ]

  return (
    <section id="nav-circle-container">
      <h3>Navegue por marcas</h3>

      <div className="nav-circle-content">
        {logos.map((logo, index) => (
          <CircleWithLogo key={index} imageURL={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  )
}
