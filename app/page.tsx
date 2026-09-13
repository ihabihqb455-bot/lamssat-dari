import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Ruler, Hammer, ShieldCheck } from 'lucide-react'
import { CategoryTiles } from '@/components/category-tiles'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'

export default function HomePage() {
  const featured = products.filter((p) => p.inStock).slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.png"
            alt="Intérieur meublé sur-mesure par Z&Z MDF Meuble"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-center px-4 py-28 sm:px-6 md:py-40 lg:px-8">
          <p className="mb-4 rounded-full bg-beige px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-beige-foreground">
            Meubles MDF sur-mesure
          </p>
          <h1 className="max-w-2xl font-heading text-4xl font-bold leading-tight text-white text-balance md:text-6xl">
            L&apos;élégance du bois, façonnée pour votre intérieur
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Dressing, cuisine, chambre et bureau conçus main dans nos ateliers.
            Un design moderne et luxueux, adapté à chaque espace.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/boutique"
              className="flex h-12 items-center gap-2 rounded-md bg-beige px-6 text-base font-semibold text-beige-foreground transition-colors hover:bg-beige/90"
            >
              Découvrir la boutique <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="flex h-12 items-center rounded-md border border-white/40 px-6 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Nos catégories
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Explorez nos collections par pièce de vie.
            </p>
          </div>
        </div>
        <CategoryTiles />
      </section>

      {/* Value props */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            {
              icon: Ruler,
              title: 'Sur-mesure',
              text: 'Chaque meuble est conçu selon les dimensions exactes de votre espace.',
            },
            {
              icon: Hammer,
              title: 'Fait main',
              text: 'Un savoir-faire artisanal marocain au service du détail.',
            },
            {
              icon: ShieldCheck,
              title: 'Qualité garantie',
              text: 'Des matériaux MDF haute densité, durables et résistants.',
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-start gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-2xl font-semibold">{item.title}</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Produits en vedette
          </h2>
          <Link
            href="/boutique"
            className="hidden items-center gap-1 text-base font-semibold text-foreground hover:text-beige sm:flex"
          >
            Voir tout <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}
