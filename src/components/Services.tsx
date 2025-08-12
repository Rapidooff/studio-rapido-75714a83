import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Globe, Brain, Smartphone, Palette, Code, Zap } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Sites Web Modernes',
    description: 'Création de sites vitrine, e-commerce et applications web avec des technologies de pointe',
    features: ['Design responsive', 'Performance optimisée', 'SEO intégré', 'Analytics avancés'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Brain,
    title: 'Intelligence Artificielle',
    description: 'Intégration d\'IA personnalisées pour automatiser et enrichir vos processus business',
    features: ['Chatbots intelligents', 'Analyse de données', 'IA générative', 'Modèles sur-mesure'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Développement d\'apps iOS et Android avec des interfaces modernes et intuitives',
    features: ['SwiftUI natif', 'React Native', 'Design system', 'App Store ready'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Palette,
    title: 'Design UI/UX',
    description: 'Création d\'univers visuels uniques avec animations et interactions immersives',
    features: ['Design system', 'Prototypage', 'Animations fluides', 'Tests utilisateurs'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Code,
    title: 'Développement sur-mesure',
    description: 'Solutions techniques complexes adaptées à vos besoins spécifiques',
    features: ['Architecture scalable', 'API robustes', 'Intégrations tiers', 'Code maintenable'],
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Zap,
    title: 'Automatisation & DevOps',
    description: 'Optimisation des workflows et déploiement automatisé pour plus d\'efficacité',
    features: ['CI/CD pipelines', 'Infrastructure cloud', 'Monitoring', 'Scaling auto'],
    gradient: 'from-yellow-500 to-orange-500'
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            💎 <span className="gradient-text">Nos Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De l'idée à la réalisation, nous accompagnons vos projets avec expertise et créativité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.title}
                variant="tech"
                className="group hover:scale-105 transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-center group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn hover:bg-primary/10 hover:text-primary"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in-up">
          <Card variant="glass" className="max-w-4xl mx-auto">
            <CardContent className="py-12 space-y-6">
              <div className="text-4xl">🚀</div>
              <h3 className="text-3xl font-bold gradient-text">
                Prêt à transformer votre idée ?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discutons de votre projet et créons ensemble une solution digitale 
                qui dépasse vos attentes. Consultation gratuite et devis personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button variant="hero" size="lg" className="group">
                  💬 Consultation gratuite
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="glass" size="lg">
                  📧 Demander un devis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Services