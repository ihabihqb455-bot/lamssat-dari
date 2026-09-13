import { PageHeader } from '@/components/page-header'
import { ProductGrid } from '@/components/product-grid'
import { getProductsByCategory } from '@/lib/products'

export const metadata = {
  title: 'Bureau | Z&Z MDF Meuble',
  description: 'Bureaux et bibliothèques en MDF sur-mesure.',
}

export default function BureauPage() {
  return (
    <>
      <PageHeader
        title="Bureau"
        subtitle="Des espaces de travail élégants et organisés, faits pour la concentration."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ProductGrid products={getProductsByCategory('bureau')} />
      </section>
    </>
  )
}
