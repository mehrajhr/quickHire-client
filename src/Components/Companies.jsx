import React from "react";
import { HiSearch, HiOutlineLocationMarker } from 'react-icons/hi';
import { SiVodafone, SiIntel, SiTesla, SiAmd } from 'react-icons/si'; 
import { FaTerminal } from 'react-icons/fa'; 

const Companies = () => {
  return (
    <div className="bg-white py-12 border-b border-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <p className="text-[#9199A3] text-sm mb-8 text-center lg:text-left uppercase tracking-wider font-medium">
          Companies we helped grow
        </p>

        {/* Responsive Grid: 2 columns on mobile, 5 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <SiVodafone /> vodafone
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <SiIntel /> intel.
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
            <SiTesla /> T E S L A
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <SiAmd /> AMD
          </div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaTerminal /> Talkit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
