"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (isActive) {
        setVisible(true);
      } else {
        if (scrollYProgress.get() < 0.055) {
          setVisible(true);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      }
    }
  });

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex fixed top-0 2xl:top-0 w-full px-3 md:px-20 xl:px-32 z-[2147483005] bg-gradient-to-b from-black/0 to-black/0 py-2 backdrop-blur-md"
          )}
        >
          <div className="w-full flex flex-row justify-between items-center">
            <Link href="/">
              <div className=" relative w-[200px] h-[64px] hover:scale-110 ease-in-out transition-all duration-200">
                <Image
                  quality={100}
                  className=" object-contain"
                  fill
                  src="/common/logo.png"
                  alt="SvoTech Studios logo"
                />
              </div>
            </Link>

            <div className="hidden md:block">
              <div className="flex items-center gap-10">
                <p className=" font-azerete text-base text-white/80 transition-colors ease-in-out duration-200 hover:text-white uppercase">
                  Services
                </p>
                <p className=" font-azerete text-base text-white/80 transition-colors ease-in-out duration-200 hover:text-white uppercase">
                  Portfolio
                </p>
                <p className=" font-azerete text-base text-white/80 transition-colors ease-in-out duration-200 hover:text-white uppercase">
                  About
                </p>
                <p className=" font-azerete text-base text-white/80 transition-colors ease-in-out duration-200 hover:text-white uppercase">
                  FAQs
                </p>
                <Link href="/schedule" className="ml-4">
                  <div className="flex items-center gap-1.5 group">
                    <p className=" font-azerete text-lg text-white uppercase font-medium">
                      Start My Journey
                    </p>
                    <ArrowRight className="text-[#FFEE00] group-hover:translate-x-2 ease-in-out duration-300" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
