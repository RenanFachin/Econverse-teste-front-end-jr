import '../../styles/components/Header/input.sass'

import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const searchProductFormSchema = z.object({
  searchProduct: z
    .string()
    .min(3, 'É necessário pelo menos três caracteres para realizar a busca')
    .toLowerCase(),
})

type SearchProductFormData = z.infer<typeof searchProductFormSchema>

export function Input() {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false)

  function handleInputFocus() {
    setIsInputFocused((prev) => !prev)
  }

  const { register, handleSubmit } = useForm<SearchProductFormData>({
    resolver: zodResolver(searchProductFormSchema),
  })

  function handleSearchProduct({ searchProduct }: SearchProductFormData) {
    console.log(`A sua pesquisa foi: ${searchProduct}`)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchProduct)}
      id="input-container"
      className={isInputFocused ? 'focused' : ''}
    >
      <input
        {...register('searchProduct')}
        type="text"
        placeholder="O que você está buscando?"
        aria-label="Campo de busca de produtos"
        onFocus={handleInputFocus}
      />

      <button type="submit">
        <Search className="icon" aria-label="Buscar" />
      </button>
    </form>
  )
}
