'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { useCart, selectTotalQuantity } from '@/lib/cart-store'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/boutique', label: 'Boutique' },
  { href: '/dressing', label: 'Dressing' },
  { href: '/cuisine', label: 'Cuisine' },
  { href: '/chambre', label: 'Chambre' },
  { href: '/bureau', label: 'Bureau' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const items = useCart((s) => s.items)
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => setMounted(true), [])
  useEffect(() => setOpen(false), [pathname])

  const count = mounted ? selectTotalQuantity(items) : 0

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary font-heading text-lg font-bold text-primary-foreground">
            Z&Z
          </span>
          <span className="hidden font-heading text-xl font-semibold leading-tight sm:block">
            MDF Meuble
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-secondary',
                  active
                    ? 'text-foreground underline decoration-beige decoration-2 underline-offset-8'
                    : 'text-muted-foreground',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/panier"
            aria-label={`Panier, ${count} article${count > 1 ? 's' : ''}`}
            className="relative flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:bg-secondary"
          >
            <ShoppingCart className="h-6 w-6" strokeWidth={2} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-beige px-1 text-xs font-bold text-beige-foreground">
                {count}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block rounded-md px-3 py-3 text-lg font-medium',
                      active
                        ? 'bg-secondary text-foreground'
                        : 'text-muted-foreground',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}
