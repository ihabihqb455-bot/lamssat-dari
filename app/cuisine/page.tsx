import { PageHeader } from '@/components/page-header'
import { ProductGrid } from '@/components/product-grid'
import { getProductsByCategory } from '@/lib/products'

export const metadata = {
  title: 'Cuisine | Z&Z MDF Meuble',
  description: 'Meubles et îlots de cuisine en MDF sur-mesure.',
}

export default function CuisinePage() {
  return (
    <>
      <PageHeader
        title="Cuisine"
        subtitle="Des cuisines fonctionnelles et raffinées, conçues pour durer."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ProductGrid products={getProductsByCategory('cuisine')} />
      </section>
    </>
  )
}
