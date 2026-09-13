export type CategorySlug = 'dressing' | 'cuisine' | 'chambre' | 'bureau'

export type Product = {
  id: string
  name: string
  category: CategorySlug
  price: number // in DH
  image: string
  description: string
  inStock: boolean
}

export const categories: {
  slug: CategorySlug
  label: string
  image: string
}[] = [
  { slug: 'dressing', label: 'DRESSING', image: '/images/cat-dressing.png' },
  { slug: 'cuisine', label: 'CUISINE', image: '/images/cat-cuisine.png' },
  { slug: 'chambre', label: 'CHAMBRE', image: '/images/cat-chambre.png' },
  { slug: 'bureau', label: 'BUREAU', image: '/images/cat-bureau.png' },
]

export const categoryLabel = (slug: CategorySlug) =>
  categories.find((c) => c.slug === slug)?.label ?? slug

export const products: Product[] = [
  {
    id: 'armoire-dressing',
    name: 'Armoire Dressing Moderne',
    category: 'dressing',
    price: 8900,
    image: '/images/p-armoire-dressing.png',
    description:
      'Armoire dressing en MDF haute densité avec portes coulissantes, finition beige bois chaleureuse et rangements modulables.',
    inStock: true,
  },
  {
    id: 'dressing-angle',
    name: "Dressing d'Angle Sur-Mesure",
    category: 'dressing',
    price: 12400,
    image: '/images/p-dressing-angle.png',
    description:
      "Dressing d'angle ouvert optimisant chaque recoin, étagères réglables et penderie intégrée en MDF.",
    inStock: false,
  },
  {
    id: 'cuisine-complet',
    name: 'Meuble Cuisine Complet',
    category: 'cuisine',
    price: 21500,
    image: '/images/p-cuisine-complet.png',
    description:
      'Ensemble cuisine complet en MDF laqué, plan de travail noir et caissons résistants à l’humidité.',
    inStock: true,
  },
  {
    id: 'ilot-cuisine',
    name: 'Îlot Central Cuisine',
    category: 'cuisine',
    price: 9800,
    image: '/images/p-ilot-cuisine.png',
    description:
      'Îlot central multifonction avec plan en pierre noire, rangements généreux et finition bois beige.',
    inStock: true,
  },
  {
    id: 'lit-coffre',
    name: 'Lit Coffre avec Rangement',
    category: 'chambre',
    price: 6700,
    image: '/images/p-lit-coffre.png',
    description:
      'Lit coffre avec tête de lit en MDF et grand espace de rangement sous le sommier.',
    inStock: true,
  },
  {
    id: 'commode-6-tiroirs',
    name: 'Commode 6 Tiroirs',
    category: 'chambre',
    price: 3200,
    image: '/images/p-commode.png',
    description:
      'Commode élégante à 6 tiroirs sur glissières, finition beige bois et poignées discrètes.',
    inStock: false,
  },
  {
    id: 'bureau-directeur',
    name: 'Bureau Directeur MDF',
    category: 'bureau',
    price: 5400,
    image: '/images/p-bureau-directeur.png',
    description:
      'Bureau directeur spacieux avec caisson intégré, finition bois beige et détails noirs.',
    inStock: true,
  },
  {
    id: 'bibliotheque',
    name: 'Bibliothèque Modulable',
    category: 'bureau',
    price: 4600,
    image: '/images/p-bibliotheque.png',
    description:
      'Bibliothèque modulable en MDF, étagères ajustables pour un rangement sur-mesure.',
    inStock: true,
  },
]

export const getProductsByCategory = (slug: CategorySlug) =>
  products.filter((p) => p.category === slug)

export const getProductById = (id: string) => products.find((p) => p.id === id)

export const formatDH = (value: number) =>
  `${value.toLocaleString('fr-MA').replace(/\u202f/g, ' ')} DH`
