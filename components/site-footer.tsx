import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-beige font-heading text-lg font-bold text-beige-foreground">
              Z&Z
            </span>
            <span className="font-heading text-xl font-semibold">MDF Meuble</span>
          </div>
          <p className="mt-4 max-w-xs leading-relaxed text-primary-foreground/70">
            Meubles en MDF sur-mesure, alliant design moderne et savoir-faire
            artisanal pour votre intérieur.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold text-beige">
            Catégories
          </h4>
          <ul className="mt-4 space-y-2 text-primary-foreground/80">
            <li>
              <Link href="/dressing" className="hover:text-beige">
                Dressing
              </Link>
            </li>
            <li>
              <Link href="/cuisine" className="hover:text-beige">
                Cuisine
              </Link>
            </li>
            <li>
              <Link href="/chambre" className="hover:text-beige">
                Chambre
              </Link>
            </li>
            <li>
              <Link href="/bureau" className="hover:text-beige">
                Bureau
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-semibold text-beige">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-primary-foreground/80">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-beige" />
              +212 6 00 00 00 00
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-beige" />
              contact@zzmdf.ma
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-beige" />
              Casablanca, Maroc
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Z&Z MDF Meuble. Tous droits réservés.
      </div>
    </footer>
  )
}
