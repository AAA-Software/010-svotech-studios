import Image from "next/image";
import { Separator } from "../ui/separator";
import Wrapper from "../wrapper/wrapper";

const ScheduleHeroSection = () => {
  return (
    <div className="w-full h-screen relative">
      <Wrapper className=" z-20 absolute top-60 px-3 md:px-20 xl:px-32">
        <div className="flex items-center gap-4">
          <Separator className="w-12 bg-[#FFEE00]" />
          <h3 className=" font-azerete text-lg text-white">
            QUICK AND HIGH QUALITY SOFTWARE DELIVERY
          </h3>
        </div>
        <h1 className=" font-epilogue font-medium text-8xl text-white mt-10">
          Schedule Discovery Call
        </h1>
        <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem] mt-4">
          As a dedicated Web App development agency based in Austria, we harness
          the full potential of modern technologies like react to build
          responsive and functional SAAS products that set trends in the digital
          landscape
        </p>
        <div className="flex items-center gap-12 mt-10">
          <div className="relative h-[52px] w-[100px]">
            <Image
              fill
              quality={100}
              className=" object-contain"
              src="/common/clutch.png"
              alt="Clutch rating"
            />
          </div>
        </div>
      </Wrapper>
      <div className=" absolute inset-0 h-full w-full z-10">
        <div className=" relative w-full h-full">
          <Image
            fill
            quality={100}
            className=" object-cover"
            src="/common/hero-bg.png"
            alt="Hero bg"
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleHeroSection;
