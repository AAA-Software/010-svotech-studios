"use client";

import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
const CalendlySection = () => {
  const [height, setHeight] = useState("1050px");

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; // Define your mobile breakpoint here
      if (isMobile) {
        setHeight("1100px"); // Set mobile height
      } else {
        setHeight("900px"); // Set desktop height
      }
    };

    handleResize(); // Call on initial render
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []); // Empty dependency array to run effect only once on mount
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
