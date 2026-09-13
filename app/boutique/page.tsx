import { PageHeader } from '@/components/page-header'
import { ProductGrid } from '@/components/product-grid'
import { CategoryTiles } from '@/components/category-tiles'
import { products } from '@/lib/products'

export const metadata = {
  title: 'Boutique | Z&Z MDF Meuble',
  description: 'Découvrez tous nos meubles MDF sur-mesure.',
}

export default function BoutiquePage() {
  return (
    <>
      <PageHeader
        title="Boutique"
        subtitle="Tous nos meubles en MDF sur-mesure, du dressing au bureau."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ProductGrid products={products} />
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="mb-6 font-heading text-2xl font-bold">
          Parcourir par catégorie
        </h2>
        <CategoryTiles />
      </section>
    </>
  )
}
