import SiteLayout from '@/components/layouts/SiteLayout'
import Services from '@/components/Services'
import { Helmet } from 'react-helmet-async'

const ServicesPage = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Services - Studio Rapido | Web, IA, Mobile</title>
        <meta name="description" content="Découvrez nos services : sites web modernes, intégration d'IA, design UI/UX, applications mobiles et automatisation." />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="pt-16">
        <Services />
      </div>
    </SiteLayout>
  )
}

export default ServicesPage