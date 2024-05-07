import CalendlySection from "@/components/sections/calendly";
import ScheduleHeroSection from "@/components/sections/schedule-hero";

const SchedulePage = () => {
  return (
    <div>
      <ScheduleHeroSection />
      <div className="h-12 md:h-0"/>
      <CalendlySection />
    </div>
  );
};

export default SchedulePage;
