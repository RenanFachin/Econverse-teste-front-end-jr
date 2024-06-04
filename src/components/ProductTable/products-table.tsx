import '../../styles/components/ProductTable/productTable.sass'

import { useState } from 'react'

import { PRODUCTS_CATEGORIES } from '../../utils/productsCategories'

interface ProductTableItemProps {
  productCategoryName: string
  isSelected: boolean
  onSelect: (category: string) => void
}

function ProductTableItem({
  productCategoryName,
  isSelected,
  onSelect,
}: ProductTableItemProps) {
  return (
    <button
      className={`product-table-item ${isSelected ? 'product-selected' : ''}`}
      onClick={() => onSelect(productCategoryName)}
    >
      {productCategoryName}
    </button>
  )
}

export function ProductsTable() {
  const [selectedProduct, setSelectedProduct] = useState<string>('celular')

  function handleProductSelect(category: string) {
    setSelectedProduct(category)
  }

  return (
    <div id="products-table-container">
      {PRODUCTS_CATEGORIES.map((product) => (
        <ProductTableItem
          key={product.name}
          productCategoryName={product.name}
          isSelected={product.name === selectedProduct} // Passa a prop isSelected
          onSelect={handleProductSelect} // Passa a função handleProductSelect
        />
      ))}
    </div>
  )
}
