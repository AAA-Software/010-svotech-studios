import { FAQs } from "@/components/sections/faq";
import WhyUs from "@/components/sections/why-us";
import CtaSection from "@/components/sections/cta";
import HeroSection from "@/components/sections/hero";
import Services from "@/components/sections/services";
import JourneySection from "@/components/sections/journey";
import BlogCarousel from "@/components/common/blog-carousel";
import SlidingProjects from "@/components/sections/slidding-portfolio";
import PreviousClientsSection from "@/components/sections/previous-clients";
import DevelopmentLifecycle from "@/components/sections/development-lifecycle";

export default function Home() {
  return (
    <main className="w-full overflow-clip">
      <HeroSection />
      <PreviousClientsSection />
      <SlidingProjects />
      <WhyUs />
      <Services />
      <DevelopmentLifecycle />
      <JourneySection />
      <CtaSection />
      <FAQs />
      <BlogCarousel />
    </main>
  );
}
