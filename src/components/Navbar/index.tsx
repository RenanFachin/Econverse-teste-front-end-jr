import '../../styles/components/Navbar/navbar.sass'

import { Crown } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isCategorySelected, setIsCategorySelected] =
    useState<string>('Todas Categorias')

  function handleCategorySelect(category: string) {
    setIsCategorySelected(category)
  }

  return (
    <nav>
      <ul>
        <li
          className={
            isCategorySelected === 'Todas Categorias' ? 'selected' : ''
          }
          onClick={() => handleCategorySelect('Todas Categorias')}
        >
          Todas Categorias
        </li>
        <li
          className={isCategorySelected === 'Supermercado' ? 'selected' : ''}
          onClick={() => handleCategorySelect('Supermercado')}
        >
          Supermercado
        </li>
        <li
          className={isCategorySelected === 'Livros' ? 'selected' : ''}
          onClick={() => handleCategorySelect('Livros')}
        >
          Livros
        </li>
        <li
          className={isCategorySelected === 'Moda' ? 'selected' : ''}
          onClick={() => handleCategorySelect('Moda')}
        >
          Moda
        </li>
        <li
          className={isCategorySelected === 'Lançamentos' ? 'selected' : ''}
          onClick={() => handleCategorySelect('Lançamentos')}
        >
          Lançamentos
        </li>
        <li
          className={isCategorySelected === 'Ofertas do dia' ? 'selected' : ''}
          onClick={() => handleCategorySelect('Ofertas do dia')}
        >
          Ofertas do dia
        </li>
        <li
          className={`withIcon ${isCategorySelected === 'Assinatura' ? 'selected' : ''}`}
          onClick={() => handleCategorySelect('Assinatura')}
        >
          <Crown />
          Assinatura
        </li>
      </ul>
    </nav>
  )
}
