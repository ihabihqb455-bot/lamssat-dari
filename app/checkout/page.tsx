'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CreditCard, Lock, Check, ArrowLeft } from 'lucide-react'
import { useCart, selectSubtotal, selectTotalQuantity } from '@/lib/cart-store'
import { formatDH } from '@/lib/products'
import { CardBrands } from '@/components/card-brands'

const inputClass =
  'h-12 w-full rounded-md border border-input bg-background px-4 text-base outline-none transition-colors focus:border-beige focus:ring-2 focus:ring-beige/40'

export default function CheckoutPage() {
  const { items, clear } = useCart()
  const [mounted, setMounted] = useState(false)
  const [paid, setPaid] = useState(false)

  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const total = selectSubtotal(items)
  const totalQuantity = selectTotalQuantity(items)

  const handleCardNumber = (v: string) => {
    const digits = v.replace(/\D/g, '').slice(0, 16)
    setCardNumber(digits.replace(/(.{4})/g, '$1 ').trim())
  }

  const handleExpiry = (v: string) => {
    const digits = v.replace(/\D/g, '').slice(0, 4)
    setExpiry(
      digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits,
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPaid(true)
    clear()
  }

  if (paid) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-success text-white">
          <Check className="h-8 w-8" />
        </span>
        <h1 className="mt-6 font-heading text-3xl font-bold">
          Paiement confirmé
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Merci pour votre commande ! Un conseiller Z&Z MDF Meuble vous
          contactera pour organiser la livraison.
        </p>
        <Link
          href="/"
          className="mt-8 flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <h1 className="font-heading text-3xl font-bold">
          Aucun article à régler
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Ajoutez des produits à votre panier avant de passer au paiement.
        </p>
        <Link
          href="/boutique"
          className="mt-8 flex h-12 items-center rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Aller à la boutique
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/panier"
        className="inline-flex items-center gap-2 text-base font-semibold text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-5 w-5" /> Retour au panier
      </Link>
      <h1 className="mt-4 font-heading text-4xl font-bold">Paiement</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* Payment form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-heading text-2xl font-bold">
              <CreditCard className="h-6 w-6" /> Carte bancaire
            </h2>
            <CardBrands />
          </div>

          <div className="mt-6 grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="cardName" className="text-base font-semibold">
                Nom sur la carte
              </label>
              <input
                id="cardName"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="ZAKARIA ZAHIRI"
                required
                className={inputClass}
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="cardNumber" className="text-base font-semibold">
                Numéro de carte
              </label>
              <input
                id="cardNumber"
                inputMode="numeric"
                value={cardNumber}
                onChange={(e) => handleCardNumber(e.target.value)}
                placeholder="0000 0000 0000 0000"
                required
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="expiry" className="text-base font-semibold">
                  Date d&apos;expiration
                </label>
                <input
                  id="expiry"
                  inputMode="numeric"
                  value={expiry}
                  onChange={(e) => handleExpiry(e.target.value)}
                  placeholder="MM/AA"
                  required
                  className={inputClass}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="cvv" className="text-base font-semibold">
                  CVV
                </label>
                <input
                  id="cvv"
                  inputMode="numeric"
                  value={cvv}
                  onChange={(e) =>
                    setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))
                  }
                  placeholder="123"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-primary py-3.5 text-lg font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Lock className="h-5 w-5" /> Payer {formatDH(total)}
            </button>

            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" /> Paiement 100% sécurisé — démonstration
              UI
            </p>
          </div>
        </form>

        {/* Order summary */}
        <aside className="h-fit rounded-xl border border-border bg-secondary p-6">
          <h2 className="font-heading text-2xl font-bold">Votre commande</h2>
          <ul className="mt-5 space-y-3 text-base">
            {items.map((item) => (
              <li key={item.id} className="flex items-start justify-between gap-3">
                <span className="text-muted-foreground">
                  {item.name}{' '}
                  <span className="font-semibold text-foreground">
                    × {item.quantity}
                  </span>
                </span>
                <span className="whitespace-nowrap font-semibold">
                  {formatDH(item.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <dl className="mt-5 space-y-3 border-t border-border pt-5 text-base">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">
                Articles ({totalQuantity})
              </dt>
              <dd className="font-semibold">{formatDH(total)}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Livraison</dt>
              <dd className="font-semibold text-success">Gratuite</dd>
            </div>
          </dl>
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <span className="text-lg font-semibold">Total à payer</span>
            <span className="font-heading text-2xl font-bold">
              {formatDH(total)}
            </span>
          </div>
        </aside>
      </div>
    </div>
  )
}
