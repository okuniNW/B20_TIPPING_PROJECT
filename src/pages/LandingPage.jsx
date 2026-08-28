import '../landing.css';
import LandingHeader  from '../components/landing/LandingHeader';
import HeroSection    from '../components/landing/HeroSection';
import AboutSection   from '../components/landing/AboutSection';
import WhyTipping     from '../components/landing/WhyTipping';
import HowItWorks     from '../components/landing/HowItWorks';
import TierSection    from '../components/landing/TierSection';
import RoyalPoints    from '../components/landing/RoyalPoints';
import RoadmapSection from '../components/landing/RoadmapSection';

// Part 5 — LandingFooter akan ditambahkan setelah konfirmasi

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
        <RoyalPoints />
        <RoadmapSection />
      </main>
    </>
  );
}
