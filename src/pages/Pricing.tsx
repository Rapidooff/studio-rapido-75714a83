import SiteLayout from '@/components/layouts/SiteLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet-async'

const tiers = [
  { name: 'Starter', price: '€990', features: ['Landing page', 'Design animé', 'SEO de base', 'Déploiement'], highlight: false },
  { name: 'Pro', price: '€2 490', features: ['Site 5 à 8 pages', 'Animations avancées', 'Blog/Collections', 'SEO + Analytics'], highlight: true },
  { name: 'Ultimate', price: 'Sur devis', features: ['Web + IA', 'E-commerce ou App', 'Design system', 'Support prioritaire'], highlight: false },
]

const PricingPage = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Tarifs - Studio Rapido | Forfaits & Devis</title>
        <meta name="description" content="Forfaits transparents pour sites modernes et intégrations IA. Options Pro et Ultimate sur-mesure." />
        <link rel="canonical" href="/tarifs" />
      </Helmet>
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">💰 Tarifs</h1>
          <p className="text-lg text-muted-foreground mb-10">Des packs clairs pour passer rapidement de l'idée au lancement.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((t) => (
              <Card key={t.name} variant={t.highlight ? 'glow' : 'tech'} className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl">{t.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-4xl font-bold gradient-text">{t.price}</div>
                  <ul className="space-y-2">
                    {t.features.map((f) => (
                      <li key={f} className="text-muted-foreground">{f}</li>
                    ))}
                  </ul>
                  <Button variant={t.highlight ? 'hero' : 'glass'} className="w-full">Choisir</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export default PricingPage