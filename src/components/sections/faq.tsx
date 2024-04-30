"use client";

import Image from "next/image";
import { FaqItems } from "../common/faq-items";

export const FAQs = () => {
  return (
    <section className="pt-20 pb-0 md:pt-40 md:pb-40 relative px-3 md:px-0">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="uppercase font-epilogue font-medium text-6xl lg:text-7xl text-white text-center mt-6">
          FAQs
        </h2>
        <FaqItems />
      </div>
    </section>
  );
};
