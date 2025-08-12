import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Technologies from '@/components/Technologies'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Stats />
      <Technologies />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
