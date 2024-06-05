import '../../styles/components/RegisterNewsletter/registerNewsletter.sass'

import { Button } from '../button'

export function RegisterNewsletter() {
  return (
    <div id="register-newsletter-container">
      <div>
        <span>
          Cadastre-se e Receba nossas <strong>novidades e promoções</strong>
        </span>

        <p>
          Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
          lorem ipsum
        </p>
      </div>

      <form>
        <input type="text" placeholder="SEU EMAIL" />

        <Button title="OK" />
      </form>
    </div>
  )
}
