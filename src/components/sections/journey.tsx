"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

const JourneySection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="mx-auto w-full flex max-w-8xl flex-col items-center gap-0 md:py-12 md:flex-row md:justify-between md:items-end md:gap-0 px-3 md:px-20 xl:px-32">
      <div className="w-full h-fit">
        <h2 className=" font-epilogue font-medium text-white text-4xl md:text-6xl mb-8">
          Your SAAS journey in
          <br className="hidden md:block" />{" "}
          <span className="text-[#FFEE00]">four effortless steps</span>
        </h2>
        <Tabs selected={selected} setSelected={setSelected} />
      </div>
      <AnimatePresence mode="wait">
        {FEATURES.map((tab, index) => {
          return selected === index ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              key={index}
              className="w-full h-fit -mt-28 md:-mt-0"
            >
              <tab.Feature />
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </section>
  );
};

interface TabsProps {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const Tabs = ({ selected, setSelected }: TabsProps) => {
  return (
    <div className="w-full xl:w-[60%]">
      {FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            title={tab.title}
            icon={tab.icon}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

interface TabProps {
  selected: boolean;
  title: string;
  icon: string;
  setSelected: Function;
  tabNum: number;
}

const Tab = ({ selected, title, setSelected, tabNum, icon }: TabProps) => {
  return (
    <div className="group relative w-full md:w-full z-50">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full transition-colors md:flex-col"
      >
        <span
          className={`flex items-center gap-8 w-full max-w-full text-start text-lg font-normal font-inter transition-colors md:text-xl
          ${
            selected
              ? " bg-gradient-to-r from-[#060606] to-[#0F0F0F] text-white rounded-lg md:rounded-xl px-5 md:px-10 py-4 md:py-8"
              : "bg-transparent text-[#A3A3A3] group-hover:text-[#c7c7c7] px-5 md:px-10 py-4 md:py-8"
          }`}
        >
          <div className="aspect-square w-[40%] rounded-full bg-[#FFEE00] border border-[#FFF789] flex items-center justify-center">
            <Image width={32} height={32} src={icon} alt="Icon" />
          </div>
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="vertical-slide-feature-slider"
          className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-[#FFEE00] md:w-2"
        />
      )}
    </div>
  );
};

export default JourneySection;

const FEATURES = [
  {
    icon: "/common/call-icon.png",
    title:
      "Discovery Call. We hold a quick 45 minute discovery call to see if you will be a good fit for us.",
    Feature: () => <ExampleFeature src="/common/call.png" />,
  },
  {
    icon: "/common/info-icon.png",
    title:
      "Information Gathering. We gather project requirements and specifications.",
    Feature: () => <ExampleFeature src="/common/info.png" />,
  },
  {
    icon: "/common/code-icon.png",
    title:
      "Work out the product. We design and develop the SAAS product swiftly.",
    Feature: () => <ExampleFeature src="/common/code.png" />,
  },
  {
    icon: "/common/approve-icon.png",
    title:
      "Approval by product owner. You approve the product we build and make necessary revisions",
    Feature: () => <ExampleFeature src="/common/approve.png" />,
  },
];

interface ExampleFeatureProps {
  src: string;
}

const ExampleFeature = ({ src }: ExampleFeatureProps) => (
  <div className="w-full">
    <div className="relative h-[600px] w-full">
      <Image
        className=" object-contain"
        fill
        src={src}
        alt="Effortless steps"
      />
    </div>
  </div>
);
