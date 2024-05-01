import Image from "next/image";
import PrimaryButton from "../common/primary-button";
import SecondaryButton from "../common/secondary-button";
import Wrapper from "../wrapper/wrapper";

const CtaSection = () => {
  return (
    <div className="w-full h-[90vh] relative mt-[10rem]">
      <Wrapper className="flex flex-col items-center justify-center z-50 relative top-60 w-full">
        <h2 className="font-epilogue font-medium text-center text-7xl text-white mt-10">
          Let&apos;s build your next <br />{" "}
          <span className="text-[#FFEE00]">SAAS Product!</span>
        </h2>
        <div className="flex items-center gap-4 mt-12">
          <PrimaryButton text="Start my journey" />
          <SecondaryButton />
        </div>
      </Wrapper>
      <div className="absolute z-20 top-0 left-[35%] w-[40rem] h-[40rem]">
        <div className="relative w-full h-full">
          <Image
            fill
            quality={100}
            className="object-cover"
            src="/common/glare.png"
            alt="Glare"
          />
        </div>
      </div>
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

export default CtaSection;
