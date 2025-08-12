import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Sparkles } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Accueil', to: '/' },
    { name: 'À propos', to: '/a-propos' },
    { name: 'Services', to: '/services' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Tarifs', to: '/tarifs' },
    { name: 'Contact', to: '/contact' }
  ]

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive ? 'bg-primary/20 text-primary' : 'text-foreground hover:bg-primary/10 hover:text-primary hover:scale-105'
    }`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">Studio Rapido</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink key={item.name} to={item.to} end className={linkCls}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="hero" size="default">
              <Link to="/contact">Commencer un projet</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-primary/20">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end
                  className={linkCls}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-4">
                <Button asChild variant="hero" size="default" className="w-full">
                  <Link to="/contact">Commencer un projet</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation