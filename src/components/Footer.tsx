import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Mail, Github, Linkedin, Twitter, Sparkles, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-muted/30 border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold gradient-text">Studio Rapido</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Créateur d'univers digitaux modernes. Nous transformons vos idées en 
                expériences web exceptionnelles avec IA, design immersif et code intelligent.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">📧 Contact</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  📍 Disponible en remote ou sur-site
                </p>
                <p className="text-muted-foreground">
                  ⏰ Lun-Ven : 9h-18h | Weekend : Sur projet
                </p>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a 
                    href="mailto:contact@studio-rapido.com" 
                    className="text-primary hover:text-accent transition-colors duration-300"
                  >
                    contact@studio-rapido.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* CTA Card */}
          <Card variant="glow" className="p-8 animate-scale-in">
            <div className="text-center space-y-6">
              <div className="text-4xl">🚀</div>
              <h4 className="text-2xl font-bold gradient-text">
                Lançons votre projet !
              </h4>
              <p className="text-muted-foreground">
                Consultation gratuite pour définir ensemble la stratégie 
                digitale parfaite pour votre projet.
              </p>
              <div className="space-y-3">
                <Button variant="hero" size="lg" className="w-full group">
                  💬 Démarrer maintenant
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
                <p className="text-xs text-muted-foreground">
                  ⚡ Réponse sous 24h • 🎯 Devis personnalisé • 🛡️ Sans engagement
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Separator className="opacity-20" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Studio Rapido.</span>
            <span>Créé avec</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>et beaucoup de café ☕</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Mentions légales
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer