import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/lib/products'

export function CategoryTiles() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/${cat.slug}`}
          className="group relative block h-44 overflow-hidden rounded-xl md:h-56"
        >
          <Image
            src={cat.image || '/placeholder.svg'}
            alt={`Catégorie ${cat.label}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 transition-colors duration-300 group-hover:bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-[22px] font-bold tracking-wide text-white">
              {cat.label}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
