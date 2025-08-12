import SiteLayout from '@/components/layouts/SiteLayout'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Technologies from '@/components/Technologies'
import Services from '@/components/Services'
import { Helmet } from 'react-helmet-async'

const Index = () => {
  return (
    <SiteLayout>
      <Helmet>
        <title>Studio Rapido - Univers Digital Sur-Mesure | Design Animé & IA</title>
        <meta name="description" content="Studio Rapido crée des sites web modernes avec IA intégrée, design animé et code intelligent. Développement sur-mesure, apps mobiles et UX." />
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <Stats />
      <Technologies />
      <Services />
    </SiteLayout>
  );
};

export default Index;