import SiteLayout from '@/components/layouts/SiteLayout'
import { Helmet } from 'react-helmet-async'

const AboutPage = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>À propos - Studio Rapido | Créateur d'univers digitaux</title>
        <meta name="description" content="À propos de Studio Rapido : design animé, IA intégrée et développement sur-mesure pour des expériences web uniques." />
        <link rel="canonical" href="/a-propos" />
      </Helmet>
      <section className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">👋 À propos</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Studio Rapido conçoit des expériences web élégantes, performantes et intelligentes. Nous mélangeons design animé, code propre et IA pour donner vie à vos idées.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Notre mission</h2>
              <p className="text-muted-foreground">Créer des interfaces mémorables et des produits fiables, accessibles et rapides. Nous croyons à l'alliance entre esthétique et performance.</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Nos valeurs</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Qualité de code & design system</li>
                <li>Transparence et pédagogie</li>
                <li>Innovation continue (IA, animations, 3D)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export default AboutPage