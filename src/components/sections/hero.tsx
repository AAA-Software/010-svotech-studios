import Image from "next/image";
import Wrapper from "../wrapper/wrapper";
import { Separator } from "../ui/separator";
import PrimaryButton from "../common/primary-button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full md:h-screen relative">
      <Wrapper className=" z-50 md:absolute md:top-60 px-3 md:px-20 xl:px-32 mt-32 md:mt-0">
        <div className="flex items-center gap-2 md:gap-4">
          <Separator className="w-8 md:w-12 bg-[#FFEE00]" />
          <h3 className=" font-azerete md:text-lg text-white hidden md:block">
            QUICK AND HIGH QUALITY SOFTWARE DELIVERY
          </h3>
          <h3 className=" font-azerete text-base text-white md:hidden">
            QUICK & HIGH QUALITY SOFTWARE
          </h3>
        </div>
        <h1 className=" font-epilogue font-medium text-6xl md:text-8xl text-white mt-4 md:mt-10">
          Full-Service Agency
          <br className=" hidden md:block" /> For{" "}
          <span className="text-[#FFEE00]"> SAAS</span>
          {""} Products
        </h1>
        <p className=" font-inter text-base md:text-lg text-[#A3A3A3] max-w-[60rem] mt-2 md:mt-4">
          As a dedicated Web App development agency based in Austria, we harness
          the full potential of modern technologies like react to build
          responsive and functional SAAS products that set trends in the digital
          landscape
        </p>
        <div className="flex flex-row md:flex-row items-center md:items-center gap-5 md:gap-12 mt-8 md:mt-10">
          <Link href="/schedule">
            <PrimaryButton text="Start my journey" />
          </Link>
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
      <div className=" absolute inset-0 h-full w-full z-10 hidden md:block">
        <div className=" relative w-full h-full">
          <Image
            fill
            quality={100}
            className=" object-cover"
            src="/common/hero-bg.webp"
            alt="Hero bg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
