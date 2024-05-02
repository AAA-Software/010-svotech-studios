"use client";

import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
const CalendlySection = () => {
  const [height, setHeight] = useState("1050px");

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setHeight("1100px");
      } else {
        setHeight("900px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className=" relative -mt-80 w-full z-50 mb-40">
      <InlineWidget
        styles={{
          height: height,
        }}
        pageSettings={{
          backgroundColor: "000000",
          primaryColor: "FFEE00",
          textColor: "ffffff",
        }}
        url="https://calendly.com/fvachatting/intro-call"
      />
    </div>
  );
};

export default CalendlySection;
