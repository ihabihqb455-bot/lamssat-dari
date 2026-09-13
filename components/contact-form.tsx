'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const inputClass =
  'h-12 w-full rounded-md border border-input bg-background px-4 text-base outline-none transition-colors focus:border-beige focus:ring-2 focus:ring-beige/40'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-secondary p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success text-white">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-4 font-heading text-2xl font-bold">Message envoyé</h3>
        <p className="mt-2 text-lg text-muted-foreground">
          Merci ! Notre équipe vous recontactera très prochainement.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-base font-semibold">
            Nom complet
          </label>
          <input id="name" name="name" required className={inputClass} />
        </div>
        <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
          <div className="grid gap-2">
            <label htmlFor="email" className="text-base font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={inputClass}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-base font-semibold">
              Téléphone
            </label>
            <input id="phone" name="phone" className={inputClass} />
          </div>
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-base font-semibold">
            Votre projet
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-md border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-beige focus:ring-2 focus:ring-beige/40"
          />
        </div>
        <button
          type="submit"
          className="h-12 rounded-md bg-primary text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Envoyer le message
        </button>
      </div>
    </form>
  )
}
