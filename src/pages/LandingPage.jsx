import '../landing.css';
import LandingHeader from '../components/landing/LandingHeader';
import HeroSection   from '../components/landing/HeroSection';

// Part 2-5 akan ditambahkan setelah konfirmasi Part 1
// import AboutSection    from '../components/landing/AboutSection';
// import HowItWorks      from '../components/landing/HowItWorks';
// import TierSection     from '../components/landing/TierSection';
// import RoyalPoints     from '../components/landing/RoyalPoints';
// import RoadmapSection  from '../components/landing/RoadmapSection';
// import LandingFooter   from '../components/landing/LandingFooter';

export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      <main>
        <HeroSection />
        {/* Section berikutnya ditambahkan di Part 2-5 */}
      </main>
    </>
  );
}
