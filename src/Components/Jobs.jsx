import React from "react";

const Jobs = ({ job }) => {
  return (
    <div
      className="group p-6 border border-gray-100 rounded-xl hover:shadow-2xl transition-all duration-300 bg-white"
    >
      <div className="flex justify-between items-start mb-4">
        {/* Placeholder for Company Logo - using a styled div */}
        <div className="w-12 h-12 bg-[#F8F9FE] rounded-lg flex items-center justify-center text-xl font-bold text-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
          {job?.company.charAt(0)}
        </div>
        <span className="px-3 py-1 bg-[#EBEBFF] text-[#4F46E5] text-xs font-bold rounded-full">
          {job?.jobType || "Full Time"}
        </span>
      </div>

      <h3 className="text-xl font-bold text-[#18191C] mb-1 group-hover:text-[#4F46E5] transition-colors">
        {job?.title}
      </h3>
      <p className="text-sm text-gray-400 mb-4">
        {job?.company} • {job?.location}
      </p>

      <p className="text-sm text-[#5E6670] line-clamp-2 mb-6">
        {job?.description}
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-[#F1F2F4] text-[#9199A3] text-xs rounded-full">
          {job?.category}
        </span>
        <span className="px-3 py-1 bg-[#E8F3FF] text-[#0066FF] text-xs rounded-full">
          Design
        </span>
      </div>
    </div>
  );
};

export default Jobs;
