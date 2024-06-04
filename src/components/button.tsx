import '../styles/components/Button/button.sass'
interface ButtonProps {
  title: string
}

export function Button({ title }: ButtonProps) {
  return <button className="buy-button">{title}</button>
}
