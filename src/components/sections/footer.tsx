import Image from "next/image";
import AnimatedLink from "../common/animated-link";
import ContactSvg from "../common/contact-svg";
import LegalsSvg from "../common/legals-svg";
import MenuSvg from "../common/menu-svg";
import PrimaryButton from "../common/primary-button";
import Wrapper from "../wrapper/wrapper";
import HeartSvg from "../common/heart-svg";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "../ui/dialog";

const Footer = () => {
  return (
    <footer className="w-full h-fit">
      <Wrapper className="xl:px-0 flex flex-col items-center">
        <div className="z-1 w-full md:w-[90%] h-96 md:h-80 relative">
          <Image
            className=" object-contain"
            fill
            src="/common/footer-text.png"
            alt="Footer text"
          />
        </div>

        <div className="w-full h-[60vh] md:h-[50dvh] bg-[#1E1E1E] backdrop-blur-lg -mt-44 md:-mt-20 flex flex-col items-center justify-end rounded-2xl">
          <div className="w-full bg-gradient-to-b from-[#0A0A0A] to-[#070707] h-[99.6%] md:h-[99.2%] z-50 rounded-2xl">
            <div className="w-full flex flex-col md:flex-row justify-between items-start px-3 md:px-14 mt-8 md:mt-16">
              <div className="w-full md:w-[45%] hidden md:block">
                <div className="w-full md:w-full flex flex-row md:flex-col justify-between">
                  <div className=" relative w-[200px] h-[64px] hover:scale-110 ease-in-out transition-all duration-200">
                    <Image
                      quality={100}
                      className=" object-contain"
                      fill
                      src="/common/logo.png"
                      alt="SvoTech Studios logo"
                    />
                  </div>
                  <div className="flex flex-col items-start w-[70%] mt-4">
                    <h3 className=" font-archivo text-white font-medium text-lg hidden md:block">
                      Want to make sure we&apos;re the right fit? Book a
                      discovery call!
                    </h3>

                    <h3 className=" font-archivo text-white/80 font-normal text-lg mt-2 md:mt-4 hidden md:block">
                      Find out how we can help you design and build your web app
                      now
                    </h3>
                  </div>
                  <div className="mt-8" />
                  <Link href="/schedule">
                    <PrimaryButton text="Book a call" />
                  </Link>
                </div>
              </div>
              <div className="md:hidden mt-4 w-full">
                <div className="flex flex-row items-start w-full justify-between">
                  <div className="w-full">
                    <MenuSvg />
                    <h3 className=" font-archivo text-white/80 font-medium mt-3 text-lg">
                      Navigation
                    </h3>
                    <div className="flex flex-col items-start gap-1.5 mt-3">
                      <AnimatedLink link="" text="Agency" />
                      <AnimatedLink link="" text="Portfolio" />
                      <AnimatedLink link="" text="Services" />
                      <AnimatedLink link="" text="FAQs" />
                    </div>
                  </div>
                  <div className="w-full">
                    <LegalsSvg />
                    <h3 className=" font-archivo text-white/80 font-medium mt-3 text-lg">
                      Legal Info
                    </h3>
                    <div className="flex flex-col items-start gap-1.5 mt-3">
                      <AnimatedLink link="" text="Terms & Conditions" />
                      <AnimatedLink link="" text="Privacy Policy" />
                      <AnimatedLink link="" text="Cookie Policy" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row mt-10 items-start w-full justify-between">
                  <div className="w-full">
                    <ContactSvg />
                    <h3 className=" font-archivo text-white/80 font-medium mt-3 text-lg">
                      Contact Us
                    </h3>
                    <div className="flex flex-col items-start gap-1.5 mt-3">
                      <AnimatedLink link="" text="Via Email" />
                    </div>
                  </div>
                  <div className="w-full">
                    <HeartSvg />
                    <h3 className=" font-archivo text-white/80 font-medium mt-3 text-lg">
                      Resources
                    </h3>
                    <div className="flex flex-col items-start gap-1.5 mt-3">
                      <AnimatedLink link="" text="Company Deck" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-full">
                <div className="flex flex-row items-start w-full justify-between">
                  <div className="w-full">
                    <MenuSvg />
                    <h3 className=" font-archivo text-white/80 font-medium mt-3 text-lg">
                      Navigation
                    </h3>
                    <div className="flex flex-col items-start gap-1.5 mt-3">
                      <AnimatedLink link="/#about" text="Agency" />
                      <AnimatedLink link="/#portfolio" text="Portfolio" />
                      <AnimatedLink link="/#services" text="Services" />
                      <AnimatedLink link="/#faqs" text="FAQs" />
                    </div>
                  </div>
                  <div className="w-full">
                    <LegalsSvg />
                    <h3 className=" font-archivo text-white/80 font-medium mt-3 text-lg">
                      Legal Info
                    </h3>
                    <div className="flex flex-col items-start gap-1.5 mt-3">
                      <AnimatedLink
                        link="/legals/terms-and-conditions"
                        text="Terms & Conditions"
                      />
                      <AnimatedLink
                        link="/legals/privacy-policy"
                        text="Privacy Policy"
                      />
                      <AnimatedLink
                        link="/legals/cookie-policy"
                        text="Cookie Policy"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <ContactSvg />
                    <h3 className=" font-archivo text-white/80 font-medium mt-3 text-lg">
                      Contact Us
                    </h3>
                    <div className="flex flex-col items-start gap-1.5 mt-3">
                      <AnimatedLink link="" text="contact@svotech.com" />
                    </div>
                  </div>
                  <div className="w-full">
                    <HeartSvg />
                    <h3 className=" font-archivo text-white/80 font-medium mt-3 text-lg">
                      Social
                    </h3>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className=" bg-[#070707] border border-[#1F1F1F] h-[52px] rounded-lg flex items-center justify-center w-fit gap-4 px-4 mt-4 cursor-pointer">
                          <p className=" font-azerete font-normal text-lg text-[#BDBDBD]">
                            Follow us on
                          </p>
                          <Image
                            width={24}
                            height={24}
                            src="/common/ig.svg"
                            alt="Instagram"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[520px]">
                        <DialogHeader>
                          <DialogTitle>Coming Soon</DialogTitle>
                        </DialogHeader>
                        <div className="py-0">
                          <p className="text-white/80 font-normal text-base font-inter">
                            Thank you for your interest in following us on
                            Instagram! We&apos;re excited to announce that our
                            official Instagram page will be launching soon. Stay
                            tuned for updates, sneak peeks, and exclusive
                            content.
                          </p>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <PrimaryButton text="Close" />
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
