import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact | Z&Z MDF Meuble',
  description: 'Contactez Z&Z MDF Meuble pour un devis sur-mesure.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Une question ou un projet sur-mesure ? Écrivez-nous, nous vous répondons rapidement."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-heading text-2xl font-bold">Nos coordonnées</h2>
          <ul className="mt-6 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-beige text-beige-foreground">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Téléphone</p>
                <p className="text-muted-foreground">+212 6 00 00 00 00</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-beige text-beige-foreground">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">contact@zzmdf.ma</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-beige text-beige-foreground">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Atelier</p>
                <p className="text-muted-foreground">Casablanca, Maroc</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-beige text-beige-foreground">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Horaires</p>
                <p className="text-muted-foreground">Lun – Sam : 9h – 19h</p>
              </div>
            </li>
          </ul>
        </div>
        <ContactForm />
      </section>
    </>
  )
}
