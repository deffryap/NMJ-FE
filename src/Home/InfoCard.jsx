import React from "react";
import { Building, Phone as PhoneIcon } from "lucide-react";

const InfoCard = () => {
  return (
    <div className="flex justify-center lg:justify-end w-full px-4 sm:px-6 lg:px-0 mt-[-2rem] sm:mt-[-2.5rem] mb-6 sm:mb-8 relative z-20">
      <div
        className="bg-[var(--nmj-red)] text-white shadow-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-8 py-4 w-full max-w-sm hover-lift"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="flex items-center flex-col gap-2">
          <Building className="w-8 h-8 text-white" />
          <div className="text-center sm:text-left text-white">
            <div className="text-xs text-white">Location</div>
            <div className="font-bold text-sm text-white">
              Jakarta, Indonesia
            </div>
          </div>
        </div>
        <div className="w-px h-8 bg-white/30 hidden sm:block"></div>
        <div className="flex gap-2 flex-col items-center sm:items-start">
          <PhoneIcon className="w-8 h-8 text-white" />
          <div className="text-center sm:text-left text-white">
            <div className="text-xs text-white">Phone Number</div>
            <div className="font-bold text-sm text-white">
              (+62) 21 1234 5678
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
