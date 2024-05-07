import Image from "next/image";
import Wrapper from "../wrapper/wrapper";

const WhyUs = () => {
  return (
    <div className="w-full mt-40 md:mt-80">
      <Wrapper className="px-3 md:px-20 xl:px-32 w-full max-w-screen-5xl">
        <h2 className="font-epilogue font-medium text-start text-5xl md:text-7xl md:leading-[1.1] text-white mt-10 mb-20">
          Design & Development so good
          <br className="hidden md:block" /> it will make your{" "}
          <span className="text-[#FFEE00]">users stay!</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center md:h-[30rem] justify-between gap-5 w-full">
          <div className="w-full md:w-1/2 h-full flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10">
            <div className=" w-full h-80 relative">
              <Image
                className=" object-cover"
                fill
                src="/common/lightning-speed.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-2xl md:text-3xl mt-8 px-4 md:px-5">
              Lightning speed delivery
            </h2>
            <p className=" font-inter text-base md:text-lg text-[#A3A3A3] md:max-w-[60rem] px-4 md:px-5">
              We&apos;ll prioritize your request for lightning-fast delivery.
              Our team is committed to completing tasks as quickly as possible
              to meet your needs efficiently.
            </p>
          </div>
          <div className="w-full h-full flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl md:pt-8 overflow-clip">
            <div className="w-full h-full flex flex-col md:flex-row">
              <div className=" w-full h-[20rem] z-50 md:hidden relative">
                <Image
                  className=" object-cover object-top"
                  fill
                  src="/common/support-revisions.png"
                  alt=""
                />
              </div>
              <div className="h-full flex flex-col justify-end pb-10 px-4 md:px-10">
                <h2 className=" font-epilogue font-medium text-white text-2xl md:text-3xl mt-8">
                  Ongoing Support <br className=" hidden md:block" /> &
                  Revisions
                </h2>
                <p className=" font-inter text-base md:text-lg text-[#A3A3A3] md:max-w-[60rem]">
                  With our ongoing support and revision services, we stand ready
                  to assist you even after the initial work is done.
                </p>
              </div>
              <div className=" w-full h-full -mr-8 relative hidden md:block">
                <Image
                  className=" object-cover object-top"
                  fill
                  src="/common/support-revisions.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5 mt-5">
          <div className="w-full flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] px-4 md:px-10 rounded-2xl pt-8 pb-10 h-fit md:h-[32rem]">
            <div className="w-full flex items-center justify-end">
              <div className="w-[440px] h-32 relative">
                <Image
                  className=" object-contain"
                  fill
                  src="/common/chat-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-start mt-4 md:mt-0">
              <div className="w-[440px] h-32 relative">
                <Image
                  className=" object-contain"
                  fill
                  src="/common/chat-2.png"
                  alt=""
                />
              </div>
            </div>
            <h2 className=" font-epilogue font-medium text-white text-2xl md:text-3xl mt-8 hidden md:block">
              Streamlined Project Management: Direct Connection to Your
              Dedicated Team
            </h2>
            <h2 className=" font-epilogue font-medium text-white text-2xl md:text-3xl mt-8 md:hidden">
              Streamlined Project Management
            </h2>
            <p className=" font-inter text-base md:text-lg text-[#A3A3A3] md:max-w-[60rem]">
              Simplify communication by connecting directly with your dedicated
              project manager. Your project manager will efficiently coordinate
              with the team to ensure seamless collaboration and optimal project
              outcomes.
            </p>
          </div>
          <div className="w-full flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pb-10 h-[32rem]">
            <div className="w-full flex items-center justify-end">
              <div className="w-full h-[20rem] relative">
                <Image
                  className=" object-cover"
                  fill
                  src="/common/high-quality.png"
                  alt=""
                />
              </div>
            </div>

            <h2 className=" font-epilogue font-medium text-white px-4 md:px-10 text-2xl md:text-3xl mt-4">
              High quality work made entirely <br className="hidden md:block" />{" "}
              from scratch
            </h2>
            <p className=" font-inter text-base md:text-lg text-[#A3A3A3] max-w-[44rem] px-4 md:px-10">
              We never use templates. Instead, our team tailors each element
              entirely to your project needs and scope
            </p>
          </div>
        </div>
        <div className="bg-[#0C0C0C] border border-[#1E1E1E] w-full py-12 md:py-24 h-fit flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20 px-4 md:px-10 rounded-3xl mt-5">
          <div className="w-full">
            <div className="w-10 h-10 aspect-square relative mb-4">
              <Image
                fill
                className=" object-contain"
                src="/common/tailored-solutions.png"
                alt=""
              />
            </div>
            <h4 className="text-white font-epilogue font-medium text-2xl">
              Tailored Solutions
            </h4>
            <p className=" font-inter text-[#A3A3A3] font-normal text-base">
              Whether it&apos;s fine-tuning training data or customizing
              responses to align with your goals, we adapt our AI to serve your
              unique use-case.
            </p>
          </div>
          <div className="w-full">
            <div className="w-10 h-10 aspect-square relative mb-4">
              <Image
                fill
                className=" object-contain"
                src="/common/simplified-process.png"
                alt=""
              />
            </div>
            <h4 className="text-white font-epilogue font-medium text-2xl">
              Simplified Process
            </h4>
            <p className=" font-inter text-[#A3A3A3] font-normal text-base">
              We offer a straightforward approach that ensures the end result
              aligns perfectly with your vision, reflecting your desires
              expressed during our initial consultations.
            </p>
          </div>
          <div className="w-full">
            <div className="w-10 h-10 aspect-square relative mb-4">
              <Image
                fill
                className=" object-contain"
                src="/common/rapid-implementation.png"
                alt=""
              />
            </div>
            <h4 className="text-white font-epilogue font-medium text-2xl">
              Rapid Implementation
            </h4>
            <p className=" font-inter text-[#A3A3A3] font-normal text-base">
              We have the capability to bring your ideal model to life in just a
              few weeks, depending on the complexity of the features you
              require.
            </p>
          </div>
          <div className="w-full">
            <div className="w-10 h-10 aspect-square relative mb-4">
              <Image
                fill
                className=" object-contain"
                src="/common/seamless-dependable.png"
                alt=""
              />
            </div>
            <h4 className="text-white font-epilogue font-medium text-2xl">
              Seamless and Dependable
            </h4>
            <p className=" font-inter text-[#A3A3A3] font-normal text-base">
              We don&apos;t just excel in coding; we prioritize the finer
              details – from design aesthetics to clear communication, adherence
              to timelines, and everything in between.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default WhyUs;
