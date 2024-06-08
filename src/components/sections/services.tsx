"use client";

import { services } from "@/constants/services";
import Wrapper from "../wrapper/wrapper";
import Service from "../common/service";

const Services = () => {
  return (
    <div id="services">
      <Wrapper className="py-40 md:py-60 flex flex-col items-start justify-center text-center max-w-screen-5xl md:px-20 xl:px-32">
        <h2 className="font-epilogue font-medium text-start text-5xl md:text-7xl text-white mt-10">
          Dedicated to <span className="text-[#FFEE00]">Fulfilling</span>{" "}
          <br className=" hidden md:block" />{" "}
          <span className="text-[#FFEE00]">Your Development Needs</span>.{" "}
          <br className="hidden md:block" />
          Committed. Precise.
        </h2>

        <p className=" font-inter text-base md:text-lg text-[#A3A3A3] md:max-w-[60rem] mt-4 text-start">
          As a dedicated Web App development agency, we harness the full
          potential of modern technologies like react to build responsive and
          functional web applications that set trends in the digital landscape
        </p>

        <div className="servicesMain mt-20 md:mt-32">
          <div className="servicesBody">
            {services.map((service, index) => {
              return (
                <Service
                  href={service.href}
                  index={index}
                  title={service.title}
                  sub1={service.sub1}
                  sub2={service.sub2}
                  sub3={service.sub3}
                  number={service.number}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Services;
