import Image from "next/image";
import Wrapper from "../wrapper/wrapper";

const DevelopmentLifecycle = () => {
  return (
    <div className=" w-full flex flex-col items-center mb-80 mt-20">
      <h1 className="font-epilogue font-medium text-white text-7xl">
        Development Lifecycle
      </h1>
      <p className=" font-inter text-lg text-[#A3A3A3] text-center max-w-[60rem] px-5">
        As highly experienced agency, We will carefully implement our proven
        systems and operations to Guranteea working SAAS product.
      </p>
      <Wrapper className="px-3 md:px-20 xl:px-32 mt-20">
        <div className="w-full flex items-center justify-between px-32 gap-10">
          <div className="w-full h-[35rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[22rem] relative mt-5">
              <Image
                className=" object-cover object-top"
                fill
                src="/common/1.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8">
              Requirement Gathering and Analysis
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]">
              This is the initial phase where the team, including business
              analysts, gathers and analyzes the requirements from stakeholders
              to understand what needs to be built.
            </p>
          </div>
          <div className="w-full h-[35rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10">
            <div className=" w-full h-[22rem] relative mt-5">
              <Image
                className=" object-cover object-top"
                fill
                src="/common/2.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8  px-5">
              User Interface / User Experience Design
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]  px-5">
              Designers create the user interface and user experience designs,
              focusing on how the software will look and how users will interact
              with it.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-between px-32 gap-10 mt-10">
          <div className="w-full h-[35rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[22rem] relative mt-5">
              <Image
                className=" object-cover object-top"
                fill
                src="/common/3.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8">
              Design Approval by Product Owner
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]">
              The product owner reviews the UI/UX designs to ensure they meet
              the initial requirements and provides feedback or approval before
              moving forward.
            </p>
          </div>
          <div className="w-full h-[35rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10">
            <div className=" w-full h-[22rem] relative mt-5">
              <Image
                className=" object-cover object-center"
                fill
                src="/common/4.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8">
              Technical Specification and System Design
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]">
              Before implementation, a detailed system design is necessary. This
              includes defining the software architecture, technology stack,
              data models, and overall system infrastructure.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default DevelopmentLifecycle;
