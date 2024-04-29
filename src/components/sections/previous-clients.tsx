import { MoveHorizontal } from "lucide-react";
import { PreviousClients } from "../common/clients";
import { clients } from "@/constants/clients";

const PreviousClientsSection = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-full px-3 md:px-40 flex items-center justify-between mt-20">
        <h3 className=" text-white text-lg md:text-xl font-inter">
          Partnered with trailblazers.{" "}
          <span className=" text-[#FFEE00]">You&apos;re in good hands.</span>
        </h3>
        <div className="hidden md:block">
          <div className="flex text-[#A3A3A3] items-center gap-4 font-inter text-lg font-light">
            <p>Drag horizontally to see our previous partners</p>
            <MoveHorizontal />
          </div>
        </div>
      </div>
      <PreviousClients items={clients} direction="right" speed="slow" />
    </div>
  );
};

export default PreviousClientsSection;
