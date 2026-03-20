import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { AboutSection } from './components/AboutSection'
import { WritingSection } from './components/WritingSection'
import { ContactFooter } from './components/ContactFooter'

export function App() {
  return (
    <div className="min-h-screen bg-epc-bg font-body text-epc-charcoal selection:bg-epc-gold/30 selection:text-epc-navy">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WritingSection />
      </main>
      <ContactFooter />
    </div>
  )
}
