import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Palette, Zap } from 'lucide-react'
import heroBackground from '@/assets/hero-background.jpg'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="absolute inset-0 bg-background/20" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 float-animation" />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-lg bg-accent/20 float-animation" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-primary/30 float-animation" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Emoji & Title */}
          <div className="space-y-4">
            <div className="text-6xl animate-float">🚀</div>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Studio Rapido</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ton univers digital sur-mesure : design animé, code intelligent & projets stylés.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center space-x-2 bg-card/30 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
              <Code className="w-5 h-5 text-primary" />
              <span>Code Intelligent</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/30 backdrop-blur-sm rounded-full px-4 py-2 border border-accent/20">
              <Palette className="w-5 h-5 text-accent" />
              <span>Design Animé</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/30 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
              <Zap className="w-5 h-5 text-primary" />
              <span>IA Intégrée</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              ✨ Entrer dans l'univers
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="xl">
              🔎 Découvrir nos projets
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero