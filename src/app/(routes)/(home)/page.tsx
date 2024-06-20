import CtaSection from "@/components/sections/cta";
import DevelopmentLifecycle from "@/components/sections/development-lifecycle";
import { FAQs } from "@/components/sections/faq";
import HeroSection from "@/components/sections/hero";
import JourneySection from "@/components/sections/journey";
import PreviousClientsSection from "@/components/sections/previous-clients";
import Services from "@/components/sections/services";
import SlidingProjects from "@/components/sections/slidding-portfolio";
import WhyUs from "@/components/sections/why-us";

export default function Home() {
  return (
    <main className="w-full h-fit max-w-full overflow-clip">
      <HeroSection />
      <PreviousClientsSection />
      <SlidingProjects />
      <WhyUs />
      <Services />
      <DevelopmentLifecycle />
      <JourneySection />
      <CtaSection />
      <FAQs />
      {/* <BlogCarousel /> */}
    </main>
  );
}
