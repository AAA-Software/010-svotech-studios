"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Rounded from "../common/rounded-button";

const slider1 = [
  {
    src: "1.webp",
  },
  {
    src: "2.webp",
  },
  {
    src: "4.webp",
  },
  {
    src: "3.webp",
  },
];

const slider2 = [
  {
    src: "5.webp",
  },
  {
    src: "6.webp",
  },
  {
    src: "2.webp",
  },
  {
    src: "1.webp",
  },
];

const SlidingProjects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div
      ref={container}
      className="slidingImages overflow-x-hidden"
      id="portfolio"
    >
      <motion.div style={{ x: x1 }} className="slider">
        {slider1.map((project, index) => {
          return (
            <div key={index} className="project-item">
              <div className="imageContainer">
                <Image
                  className=" rounded-lg md:rounded-[20px]"
                  fill={true}
                  alt={"image"}
                  src={`/portfolio/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <Link href="/schedule">
        <motion.div className="projsButtonContainer top-[25%] left-[30%] md:top-[40%] md:left-[45%]">
          <Rounded
            backgroundColor={"#D3C71F"}
            className="projsButton w-[160px] h-[160px] md:w-[220px] md:h-[220px]"
          >
            <div className="flex flex-col items-center justify-center">
              <h4 className=" font-inter text-3xl md:text-5xl font-semibold uppercase">
                100+
              </h4>

              <p className=" font-inter font-medium opacity-80 uppercase text-base md:text-lg">
                Products Built
              </p>
            </div>
          </Rounded>
        </motion.div>
      </Link>
      <motion.div style={{ x: x2 }} className="slider mt-[1vw]">
        {slider2.map((project, index) => {
          return (
            <div key={index} className="project-item">
              <div key={index} className="imageContainer">
                <Image
                  className=" rounded-xl md:rounded-[20px]"
                  fill={true}
                  alt={"image"}
                  src={`/portfolio/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SlidingProjects;
