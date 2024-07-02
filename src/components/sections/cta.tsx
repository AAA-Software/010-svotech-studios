import Image from "next/image";
import PrimaryButton from "../common/primary-button";
import SecondaryButton from "../common/secondary-button";
import Wrapper from "../wrapper/wrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CtaSection = () => {
  return (
    <div className="w-full md:h-[90vh] relative md:mt-[10rem]">
      <Wrapper className="flex flex-col items-center justify-center z-50 md:relative md:top-60 w-full">
        <h2 className="font-epilogue font-medium text-center text-5xl md:text-7xl text-white mt-10">
          Let&apos;s build your next <br className="hidden md:block" />{" "}
          <span className="text-[#FFEE00]">SAAS Product!</span>
        </h2>
        <div className="md:hidden w-full">
          <Link href="/schedule">
            <div className="flex flex-col h-[52px] group bg-[#FFF789] justify-end w-full rounded-lg cursor-pointer mt-4">
              <div className=" bg-gradient-to-b from-[#FFEE00] to-[#ADA100] h-[50px] rounded-lg flex items-center justify-center px-3 md:px-4">
                <div className="flex items-center gap-1.5 md:gap-3">
                  <p className=" font-azerete font-medium text-base md:text-lg uppercase">
                    Start my journey
                  </p>
                  <ArrowRight className=" group-hover:-rotate-45 transition-all ease-in-out duration-300" />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-12">
            <div className="w-full">
              <Link href="/schedule">
                <PrimaryButton text="Start my journey" />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className=" hidden md:block absolute inset-0 h-full w-full z-10">
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

export default CtaSection;
