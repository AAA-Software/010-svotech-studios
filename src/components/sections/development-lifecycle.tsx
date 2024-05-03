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
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[25rem] relative mt-5">
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
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10">
            <div className=" w-full h-[25rem] relative mt-5">
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
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10">
            <div className=" w-full h-[25rem] relative mt-5">
              <Image
                className=" object-cover object-top"
                fill
                src="/common/3.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8 px-5">
              Design Approval by Product Owner
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem] px-5">
              The product owner reviews the UI/UX designs to ensure they meet
              the initial requirements and provides feedback or approval before
              moving forward.
            </p>
          </div>
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[25rem] relative mt-5">
              <Image
                className=" object-cover object-center rounded-t-2xl"
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
        <div className="w-full flex items-center justify-between px-32 gap-10 mt-10">
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[25rem] relative mt-5">
              <Image
                className=" object-contain"
                fill
                src="/common/5.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8">
              Implementation (Development & Coding)
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]">
              Developers start coding based on the approved designs and
              technical specifications. This phase might be divided into smaller
              sprints or iterations, especially in agile development processes.
            </p>
          </div>
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[23rem] relative mt-5">
              <Image
                className=" object-contain"
                fill
                src="/common/6.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8">
              Code Review
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]">
              Code written by developers is reviewed by peers or senior
              developers to ensure it meets coding standards and practices, and
              is aligned with the project requrirements.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between px-32 gap-10 mt-10">
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10">
            <div className=" w-full h-[25rem] relative">
              <Image
                className=" object-cover"
                fill
                src="/common/7.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8 px-5">
              Implementation (Development & Coding)
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem] px-5">
              Developers start coding based on the approved designs and
              technical specifications. This phase might be divided into smaller
              sprints or iterations, especially in agile development processes.
            </p>
          </div>
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[23rem] relative mt-5">
              <Image
                className=" object-contain"
                fill
                src="/common/8.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8">
              Code Review
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]">
              Code written by developers is reviewed by peers or senior
              developers to ensure it meets coding standards and practices, and
              is aligned with the project requrirements.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between px-32 gap-10 mt-10">
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[25rem] relative mt-5">
              <Image
                className=" object-cover rounded-t-2xl"
                fill
                src="/common/9.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8">
              Testing by Team (QA Testing)
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]">
              The Quality Assurance (QA) team conducts thorough testing,
              including functional testing, performance testing, security
              testing, and usability testing, to ensure the software meets all
              requirements and standards.
            </p>
          </div>
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[25rem] relative mt-5">
              <Image
                className="object-cover rounded-t-2xl"
                fill
                src="/common/11.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8">
              User Acceptance Testing (UAT)
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]">
              This involves real users testing the software in a controlled
              environment to validate the functionality and usability against
              the requirements
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between px-32 gap-10 mt-10">
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[25rem] relative mt-5">
              <Image
                className=" object-cover rounded-t-2xl"
                fill
                src="/common/12.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8">
              Testing with the Product Owner
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]">
              The product owner conducts final testing to ensure the software
              meets their expectations and initial requirements.
            </p>
          </div>
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[25rem] relative mt-5">
              <Image
                className="object-contain rounded-t-2xl"
                fill
                src="/common/13.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8">
              Development
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]">
              Once approved, the software is deployed to the production
              environment for real users to access.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between px-32 gap-10 mt-10">
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[25rem] relative mt-5">
              <Image
                className=" object-cover rounded-t-2xl"
                fill
                src="/common/14.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8">
              Post-Deployment Monitoring & Support
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]">
              After deployment, the team monitors the software for any issues
              and provides necessary support and maintenance.
            </p>
          </div>
          <div className="w-full h-[40rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[25rem] relative mt-5">
              <Image
                className="object-contain rounded-t-2xl"
                fill
                src="/common/15.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8">
              Feedback Loop
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]">
              Collect feedback from users and stakeholders to identify and
              future improvements or adjustments needed.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between px-32 gap-10 mt-10">
          <div className="w-full h-[35rem] flex flex-col bg-[#0A0A0A] border border-[#1E1E1E] rounded-2xl pt-0 pb-10 px-5">
            <div className=" w-full h-[25rem] relative mt-5">
              <Image
                className="object-contain rounded-t-2xl"
                fill
                src="/common/16.png"
                alt=""
              />
            </div>
            <h2 className=" font-epilogue font-medium text-white text-3xl mt-8">
              Iterative Improvement
            </h2>
            <p className=" font-inter text-lg text-[#A3A3A3] max-w-[60rem]">
              Based on feedback and as part of continuous improvement, the team
              may go back to any of the previous steps to make enhancements or
              add new features
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default DevelopmentLifecycle;
