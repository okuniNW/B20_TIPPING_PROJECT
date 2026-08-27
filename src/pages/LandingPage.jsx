import '../landing.css';
import LandingHeader from '../components/landing/LandingHeader';
import HeroSection   from '../components/landing/HeroSection';
import AboutSection  from '../components/landing/AboutSection';
import WhyTipping    from '../components/landing/WhyTipping';
import HowItWorks    from '../components/landing/HowItWorks';
import TierSection   from '../components/landing/TierSection';

// Part 4-5 akan ditambahkan setelah konfirmasi
// import RoyalPoints    from '../components/landing/RoyalPoints';
// import RoadmapSection from '../components/landing/RoadmapSection';
// import LandingFooter  from '../components/landing/LandingFooter';

export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyTipping />
        <HowItWorks />
        <TierSection />
      </main>
    </>
  );
}
