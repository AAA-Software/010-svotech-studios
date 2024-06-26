import { ArrowRight } from "lucide-react";

const PrimaryButton = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col h-[52px] group bg-[#FFF789] justify-end w-fit rounded-lg cursor-pointer">
      <div className=" bg-gradient-to-b from-[#FFEE00] to-[#ADA100] w-full h-[50px] rounded-lg flex items-center justify-center px-3 md:px-4">
        <div className="flex items-center gap-1.5 md:gap-3 w-full">
          <p className=" font-azerete font-medium text-base md:text-lg text-nowrap uppercase">
            {text}
          </p>
          <ArrowRight className=" group-hover:-rotate-45 transition-all ease-in-out duration-300" />
        </div>
      </div>
    </div>
  );
};

export default PrimaryButton;
