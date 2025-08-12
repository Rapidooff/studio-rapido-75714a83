import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const technologies = [
  {
    category: 'Frontend',
    emoji: '🎨',
    color: 'from-blue-500 to-cyan-500',
    techs: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js']
  },
  {
    category: 'Backend',
    emoji: '⚙️',
    color: 'from-green-500 to-emerald-500',
    techs: ['Node.js', 'Python', 'Supabase', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    category: 'Intelligence Artificielle',
    emoji: '🧠',
    color: 'from-purple-500 to-pink-500',
    techs: ['OpenAI GPT', 'LLaMA', 'Mistral', 'Anthropic', 'Langchain', 'Vector DB']
  },
  {
    category: 'Mobile & Desktop',
    emoji: '📱',
    color: 'from-orange-500 to-red-500',
    techs: ['SwiftUI', 'React Native', 'Electron', 'Flutter', 'iOS', 'macOS']
  },
  {
    category: 'DevOps & Cloud',
    emoji: '☁️',
    color: 'from-indigo-500 to-blue-500',
    techs: ['AWS', 'Vercel', 'GitHub Actions', 'Kubernetes', 'Terraform', 'Monitoring']
  },
  {
    category: 'Design & UX',
    emoji: '✨',
    color: 'from-yellow-500 to-orange-500',
    techs: ['Figma', 'Adobe Creative', 'Principle', 'Lottie', 'GSAP', 'WebGL']
  }
]

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🧪 <span className="gradient-text">Nos Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous utilisons des outils modernes pour créer des expériences immersives et des solutions intelligentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card
              key={tech.category}
              variant="glow"
              className="group hover:scale-105 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {tech.emoji}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {tech.category}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.techs.map((techName) => (
                    <Badge
                      key={techName}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      {techName}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation section */}
        <div className="mt-20 text-center animate-fade-in-up">
          <Card variant="glass" className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl gradient-text">
                🚀 Innovation Continue
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous restons à la pointe de la technologie en explorant constamment 
                de nouveaux frameworks, outils d'IA et paradigmes de développement 
                pour offrir des solutions avant-gardistes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="space-y-2">
                  <div className="text-2xl">⚡</div>
                  <h4 className="font-semibold">Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimisation poussée pour des expériences ultra-rapides
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">🔒</div>
                  <h4 className="font-semibold">Sécurité</h4>
                  <p className="text-sm text-muted-foreground">
                    Implémentation des meilleures pratiques de cybersécurité
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl">🌱</div>
                  <h4 className="font-semibold">Évolutivité</h4>
                  <p className="text-sm text-muted-foreground">
                    Architecture modulaire pour une croissance sans limites
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Technologies