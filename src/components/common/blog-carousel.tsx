"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 480;
const CARD_LINE_WIDTH = 440;
const CARD_LINE_WIDTH_MOBILE = 320;
const CARD_MOBILE = 360;
const MARGIN = 24;
const MARGIN_MOBILE = 10;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const BlogCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length + 1 - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    const cardSize = width > BREAKPOINTS.sm ? CARD_SIZE : CARD_MOBILE + MARGIN;
    setOffset((prevOffset) => prevOffset + cardSize);
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    const cardSize = width > BREAKPOINTS.sm ? CARD_SIZE : CARD_MOBILE + MARGIN;
    setOffset((prevOffset) => prevOffset - cardSize);
  };

  return (
    <section className="py-8 md:mb-40 mt-20 md:mt-0" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-[1640px]">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-4xl md:text-6xl text-white font-epilogue font-medium">
              Read <span className="text-[#FFEE01]">SAAS</span>{" "}
              <br className="hidden md:block" />
              Related Articles
            </h2>

            <div className="hidden md:block">
              <div className="flex items-center gap-4">
                <button
                  className={`rounded-full bg-[#FFEE01] p-2.5 text-4xl transition-opacity ${
                    CAN_SHIFT_LEFT ? "" : "opacity-30"
                  }`}
                  disabled={!CAN_SHIFT_LEFT}
                  onClick={shiftLeft}
                >
                  {""}
                  <ArrowLeft />
                </button>
                <button
                  className={`rounded-full bg-[#FFEE01] p-2.5 text-4xl transition-opacity ${
                    CAN_SHIFT_RIGHT ? "" : "opacity-30"
                  }`}
                  disabled={!CAN_SHIFT_RIGHT}
                  onClick={shiftRight}
                >
                  {""}
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex mt-6"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
        <div className="md:hidden w-full flex items-center justify-center mt-12">
          <div className="flex items-center gap-4">
            <button
              className={`rounded-full bg-[#FFEE01] p-2.5 text-4xl transition-opacity ${
                CAN_SHIFT_LEFT ? "" : "opacity-30"
              }`}
              disabled={!CAN_SHIFT_LEFT}
              onClick={shiftLeft}
            >
              {""}
              <ArrowLeft />
            </button>
            <button
              className={`rounded-full bg-[#FFEE01] p-2.5 text-4xl transition-opacity ${
                CAN_SHIFT_RIGHT ? "" : "opacity-30"
              }`}
              disabled={!CAN_SHIFT_RIGHT}
              onClick={shiftRight}
            >
              {""}
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ number, title, date, src }: PostType) => {
  return (
    <>
      <div className="md:hidden">
        <div className="transition-transform hover:-translate-y-1 cursor-pointer flex flex-col items-center">
          <div
            className="relative shrink-0 rounded-2xl h-[300px] py-10 px-8"
            style={{
              width: CARD_MOBILE,
              marginRight: MARGIN_MOBILE,
            }}
          >
            <Image
              className=" object-cover rounded-2xl"
              fill
              src={src}
              alt="Blog"
            />
          </div>

          <div
            className="bg-[#0F0F0F] border border-[#212121] rounded-2xl flex flex-col items-start justify-center py-4 -ml-3 md:-mt-8 z-10 p-4"
            style={{
              width: CARD_LINE_WIDTH_MOBILE,
            }}
          >
            <h4 className="text-white font-inter text-xl md:text-2xl font-normal">
              {title}
            </h4>
            <p className=" text-base md:text-lg text-[#FFEE00] font-inter mt-2">
              {date}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="transition-transform hover:-translate-y-1 cursor-pointer flex flex-col items-center">
          <div
            className="relative shrink-0 rounded-2xl h-[300px] py-10 px-8"
            style={{
              width: CARD_WIDTH,
              marginRight: MARGIN,
            }}
          >
            <Image
              className=" object-cover rounded-2xl"
              fill
              src={src}
              alt="Blog"
            />
          </div>

          <div
            className="bg-[#0F0F0F] border border-[#212121] rounded-2xl flex flex-col items-start justify-center py-4 -ml-6 -mt-8 z-10 p-4"
            style={{
              width: CARD_LINE_WIDTH,
            }}
          >
            <h4 className="text-white font-inter text-xl md:text-2xl font-normal">
              {title}
            </h4>
            <p className=" text-base md:text-lg text-[#FFEE00] font-inter mt-2">
              {date}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCarousel;

type PostType = {
  id: number;
  src: string;
  number: string;
  title: string;
  date: string;
};

const posts: PostType[] = [
  {
    id: 1,
    number: "01",
    src: "/blogs/1.png",
    title: "How Do I Start a SaaS Blog: Essential Guide for Beginners",
    date: "11-03-2024",
  },
  {
    id: 2,
    number: "02",
    src: "/blogs/1.png",
    title: "How Do I Start a SaaS Blog: Essential Guide for Beginners",
    date: "11-03-2024",
  },
  {
    id: 3,
    number: "03",
    src: "/blogs/1.png",
    title: "How Do I Start a SaaS Blog: Essential Guide for Beginners",
    date: "11-03-2024",
  },
  {
    id: 4,
    number: "04",
    src: "/blogs/1.png",
    title: "How Do I Start a SaaS Blog: Essential Guide for Beginners",
    date: "11-03-2024",
  },
];
