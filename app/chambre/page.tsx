import { PageHeader } from '@/components/page-header'
import { ProductGrid } from '@/components/product-grid'
import { getProductsByCategory } from '@/lib/products'

export const metadata = {
  title: 'Chambre | Z&Z MDF Meuble',
  description: 'Lits, commodes et meubles de chambre en MDF sur-mesure.',
}

export default function ChambrePage() {
  return (
    <>
      <PageHeader
        title="Chambre"
        subtitle="Créez une chambre apaisante avec nos meubles sur-mesure."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ProductGrid products={getProductsByCategory('chambre')} />
      </section>
    </>
  )
}
