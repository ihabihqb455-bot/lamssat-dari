'use client'

import Image from 'next/image'
import { Plus, Check } from 'lucide-react'
import { useState } from 'react'
import { type Product, formatDH } from '@/lib/products'
import { useCart } from '@/lib/cart-store'
import { cn } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCart((s) => s.addItem)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    if (!product.inStock) return
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-2xl font-semibold leading-snug text-balance">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-foreground">{formatDH(product.price)}</span>
          <span
            className={cn(
              'text-base font-semibold',
              product.inStock ? 'text-success' : 'text-danger',
            )}
          >
            {product.inStock ? 'Disponible' : 'Rupture de stock'}
          </span>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          disabled={!product.inStock}
          className={cn(
            'mt-4 flex h-12 items-center justify-center gap-2 rounded-md text-base font-semibold transition-colors',
            product.inStock
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'cursor-not-allowed bg-secondary text-muted-foreground',
          )}
        >
          {added ? (
            <>
              <Check className="h-5 w-5" /> Ajouté
            </>
          ) : (
            <>
              <Plus className="h-5 w-5" /> Ajouter
            </>
          )}
        </button>
      </div>
    </article>
  )
}
