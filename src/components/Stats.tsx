import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'

interface Stat {
  emoji: string
  value: number
  label: string
  description: string
}

const statsData: Stat[] = [
  {
    emoji: '🚀',
    value: 25,
    label: 'Sites publiés',
    description: 'Sites mis en ligne : portfolio, projets clients, démos, etc.'
  },
  {
    emoji: '🧠',
    value: 12,
    label: 'IA intégrées',
    description: 'Intégration d\'intelligences artificielles comme ChatGPT, assistants vocaux, IA locales'
  },
  {
    emoji: '🎨',
    value: 30,
    label: 'Univers graphiques',
    description: 'Création d\'interfaces, animations, effets, design UI/UX immersif'
  },
  {
    emoji: '📱',
    value: 8,
    label: 'Prototypes iOS',
    description: 'Projets développés sur Xcode avec SwiftUI et animations futuristes'
  },
  {
    emoji: '🛠️',
    value: 15,
    label: 'Projets freelance',
    description: 'Sites vitrine, refonte visuelle, projets clients en auto-entreprise'
  },
  {
    emoji: '🧩',
    value: 40,
    label: 'Templates créés',
    description: 'Composants HTML/CSS/JS réutilisables : boutons animés, menus, sections stylées'
  }
]

const AnimatedCounter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      
      setCount(Math.floor(easeOutCubic * value))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return <span>{count}</span>
}

const Stats = () => {
  return (
    <section id="stats" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            📊 <span className="gradient-text">Nos Réalisations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des projets concrets qui témoignent de notre expertise en développement web moderne et intelligence artificielle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <Card
              key={stat.label}
              variant="tech"
              className="text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {stat.emoji}
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold gradient-text">
                    <AnimatedCounter value={stat.value} duration={1500 + index * 200} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Card variant="glass" className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">
                🎯 Notre Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Offrir à chacun un univers web interactif, intelligent et sur-mesure. 
                Studio Rapido conçoit, développe et sublime vos idées numériques avec les dernières technologies.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Stats