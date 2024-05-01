import CtaSection from "@/components/sections/cta";
import { FAQs } from "@/components/sections/faq";
import HeroSection from "@/components/sections/hero";
import PreviousClientsSection from "@/components/sections/previous-clients";
import Services from "@/components/sections/services";
import SlidingProjects from "@/components/sections/slidding-portfolio";
import WhyUs from "@/components/sections/why-us";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PreviousClientsSection />
      <SlidingProjects />
      <WhyUs />
      <Services />
      <CtaSection />
      <FAQs />
    </main>
  );
}
