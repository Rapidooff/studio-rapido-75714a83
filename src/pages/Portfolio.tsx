import SiteLayout from '@/components/layouts/SiteLayout'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Helmet } from 'react-helmet-async'

const projects = [
  { title: 'NovaCorp', desc: 'Site vitrine animé avec IA conversationnelle', tag: 'Web + IA' },
  { title: 'Aether UI', desc: 'Librairie de composants animés', tag: 'Design System' },
  { title: 'Orbit Shop', desc: 'E-commerce headless ultra-rapide', tag: 'E-commerce' },
  { title: 'Neon Flow', desc: 'Landing 3D avec WebGL', tag: '3D / WebGL' },
  { title: 'Swift AI', desc: 'App iOS avec assistant embarqué', tag: 'iOS' },
  { title: 'Pulse Analytics', desc: 'Dashboard data temps réel', tag: 'Data' },
]

const PortfolioPage = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Portfolio - Studio Rapido | Projets</title>
        <meta name="description" content="Découvrez une sélection de projets : sites animés, IA intégrées, apps iOS, design systems et dashboards." />
        <link rel="canonical" href="/portfolio" />
      </Helmet>
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">🚀 Portfolio</h1>
          <p className="text-lg text-muted-foreground mb-10">Quelques projets représentatifs de notre savoir-faire.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <Card key={p.title} variant="glow" className="overflow-hidden group hover:scale-105">
                <div className="h-36 bg-hero-gradient" />
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.tag}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export default PortfolioPage