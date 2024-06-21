import { menuSlide } from "@/anim";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Curve from "./curve";
import MenuLink from "./menu-link";

const SideMenu = () => {
  const navItems = [
    {
      title: "Services",
      href: "/#services",
    },
    {
      title: "Portfolio",
      href: "/#portfolio",
    },
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "FAQs",
      href: "/#faqs",
    },
  ];

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="flex flex-row w-full h-full justify-between px-3 md:px-20 pt-8 md:pt-28 pb-10 md:pb-20">
        <div className="body mt-20">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="nav"
          >
            {navItems.map((data, index) => {
              return (
                <MenuLink
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                ></MenuLink>
              );
            })}
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default SideMenu;
