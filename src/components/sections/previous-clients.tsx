import { MoveHorizontal } from "lucide-react";
import { PreviousClients } from "../common/clients";
import { clients } from "@/constants/clients";

const PreviousClientsSection = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-full px-3 md:px-20 xl:px-32 flex items-center justify-between mt-20">
        <h3 className=" text-white text-lg md:text-xl font-inter">
          Partnered with trailblazers.{" "}
          <span className=" text-[#FFEE00]">You&apos;re in good hands.</span>
        </h3>
      </div>
      <PreviousClients items={clients} direction="right" speed="slow" />
    </div>
  );
};

export default PreviousClientsSection;
