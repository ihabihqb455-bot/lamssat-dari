import { PageHeader } from '@/components/page-header'
import { ProductGrid } from '@/components/product-grid'
import { getProductsByCategory } from '@/lib/products'

export const metadata = {
  title: 'Dressing | Z&Z MDF Meuble',
  description: 'Dressings et armoires en MDF sur-mesure.',
}

export default function DressingPage() {
  return (
    <>
      <PageHeader
        title="Dressing"
        subtitle="Des dressings et armoires sur-mesure pour organiser votre espace avec élégance."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ProductGrid products={getProductsByCategory('dressing')} />
      </section>
    </>
  )
}
