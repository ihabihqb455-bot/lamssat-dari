'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from 'lucide-react'
import {
  useCart,
  selectSubtotal,
  selectTotalQuantity,
} from '@/lib/cart-store'
import { formatDH } from '@/lib/products'

export default function PanierPage() {
  const { items, increment, decrement, removeItem } = useCart()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const totalQuantity = selectTotalQuantity(items)
  const subtotal = selectSubtotal(items)

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
          <ShoppingCart className="h-8 w-8 text-muted-foreground" />
        </span>
        <h1 className="mt-6 font-heading text-3xl font-bold">
          Votre panier est vide
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Découvrez nos meubles sur-mesure et ajoutez vos favoris.
        </p>
        <Link
          href="/boutique"
          className="mt-8 flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Aller à la boutique <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-bold">Mon panier</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        {totalQuantity} article{totalQuantity > 1 ? 's' : ''} dans votre panier
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* Items */}
        <ul className="divide-y divide-border rounded-xl border border-border">
          {items.map((item) => (
            <li key={item.id} className="flex gap-4 p-4 sm:p-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-secondary sm:h-28 sm:w-28">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-xl font-semibold leading-snug text-balance">
                    {item.name}
                  </h3>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Retirer ${item.name}`}
                    className="text-muted-foreground transition-colors hover:text-danger"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                <p className="mt-1 text-lg font-bold">{formatDH(item.price)}</p>

                <div className="mt-auto flex items-center justify-between pt-3">
                  <div className="flex items-center rounded-md border border-border">
                    <button
                      type="button"
                      onClick={() => decrement(item.id)}
                      aria-label="Diminuer la quantité"
                      className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-secondary"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center text-base font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => increment(item.id)}
                      aria-label="Augmenter la quantité"
                      className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-secondary"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <span className="text-lg font-bold text-beige-foreground">
                    {formatDH(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Summary */}
        <aside className="h-fit rounded-xl border border-border bg-secondary p-6">
          <h2 className="font-heading text-2xl font-bold">Récapitulatif</h2>
          <dl className="mt-6 space-y-3 text-base">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">
                Quantité totale
              </dt>
              <dd className="font-semibold">{totalQuantity}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Sous-total</dt>
              <dd className="font-semibold">{formatDH(subtotal)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Livraison</dt>
              <dd className="font-semibold text-success">Gratuite</dd>
            </div>
          </dl>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <span className="text-lg font-semibold">Total</span>
            <span className="font-heading text-2xl font-bold">
              {formatDH(subtotal)}
            </span>
          </div>
          <Link
            href="/checkout"
            className="mt-6 flex h-12 items-center justify-center gap-2 rounded-md bg-primary text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Passer au paiement <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/boutique"
            className="mt-3 flex h-11 items-center justify-center text-base font-semibold text-foreground hover:text-beige"
          >
            Continuer mes achats
          </Link>
        </aside>
      </div>
    </div>
  )
}
