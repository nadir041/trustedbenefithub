import HomeHeader from '../components/HomeHeader.jsx'
import PageLoader from '../components/PageLoader.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import StickyCall from '../components/StickyCall.jsx'
import CarrierStrip from '../sections/CarrierStrip.jsx'
import CtaBanner from '../sections/CtaBanner.jsx'
import FaqSection from '../sections/FaqSection.jsx'
import FinalExpenseSection from '../sections/FinalExpenseSection.jsx'
import HeroSection from '../sections/HeroSection.jsx'
import HowItWorksSection from '../sections/HowItWorksSection.jsx'
import MedicareSection from '../sections/MedicareSection.jsx'

function HomePage() {
  return (
    <>
      <PageLoader />

      <HomeHeader />

      <main id="top">
        <HeroSection />
        <CarrierStrip />
        <FinalExpenseSection />
        <MedicareSection />
        <HowItWorksSection />
        <CtaBanner />
        <FaqSection />
      </main>

      <SiteFooter />

      <StickyCall />
    </>
  )
}

export default HomePage