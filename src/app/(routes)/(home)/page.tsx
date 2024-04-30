import CtaSection from "@/components/sections/cta";
import HeroSection from "@/components/sections/hero";
import PreviousClientsSection from "@/components/sections/previous-clients";
import SlidingProjects from "@/components/sections/slidding-portfolio";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PreviousClientsSection />
      <SlidingProjects />
      <CtaSection />
    </main>
  );
}
