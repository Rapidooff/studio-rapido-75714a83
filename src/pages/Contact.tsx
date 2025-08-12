import SiteLayout from '@/components/layouts/SiteLayout'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet-async'
import { toast } from 'sonner'

const ContactPage = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success('Merci ! Nous revenons vers vous sous 24h.')
    e.currentTarget.reset()
  }

  return (
    <SiteLayout>
      <Helmet>
        <title>Contact & Devis - Studio Rapido</title>
        <meta name="description" content="Contactez-nous pour une consultation gratuite et un devis sur-mesure. Réponse rapide et conseils d'expert." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <section className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">📬 Contact & Devis</h1>
          <p className="text-lg text-muted-foreground mb-10">Décrivez votre projet, on s'occupe du reste.</p>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm">Nom</label>
                <Input placeholder="Votre nom" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Email</label>
                <Input type="email" placeholder="vous@exemple.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm">Message</label>
              <Textarea placeholder="Dites-nous tout sur votre projet..." className="min-h-40" required />
            </div>
            <div className="pt-2">
              <Button variant="hero" size="lg" className="w-full">Envoyer la demande</Button>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  )
}

export default ContactPage