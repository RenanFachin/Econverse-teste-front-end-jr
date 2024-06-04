import '../styles/components/Button/button.sass'
interface ButtonProps {
  title: string
  size?: 'small' | 'large'
}

export function Button({ title, size }: ButtonProps) {
  const buttonClass = size === 'large' ? 'buy-button-large' : 'buy-button-small'

  return <button className={`buy-button ${buttonClass}`}>{title}</button>
}
