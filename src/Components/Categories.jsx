import React from "react";
import { HiArrowRight } from "react-icons/hi";
import {
  MdOutlineDesignServices,
  MdOutlineCampaign,
  MdOutlineBarChart,
  MdOutlineAccountBalanceWallet,
  MdOutlineComputer,
  MdOutlineCode,
  MdOutlineBusinessCenter,
  MdOutlinePeopleAlt,
} from "react-icons/md";

const categories = [
  {
    id: 1,
    name: "Design",
    jobs: 235,
    icon: <MdOutlineDesignServices />,
    active: false,
  },
  {
    id: 2,
    name: "Sales",
    jobs: 756,
    icon: <MdOutlineBarChart />,
    active: false,
  },
  {
    id: 3,
    name: "Marketing",
    jobs: 140,
    icon: <MdOutlineCampaign />,
    active: true,
  }, // Set as active/hover state
  {
    id: 4,
    name: "Finance",
    jobs: 325,
    icon: <MdOutlineAccountBalanceWallet />,
    active: false,
  },
  {
    id: 5,
    name: "Technology",
    jobs: 436,
    icon: <MdOutlineComputer />,
    active: false,
  },
  {
    id: 6,
    name: "Engineering",
    jobs: 542,
    icon: <MdOutlineCode />,
    active: false,
  },
  {
    id: 7,
    name: "Business",
    jobs: 211,
    icon: <MdOutlineBusinessCenter />,
    active: false,
  },
  {
    id: 8,
    name: "Human Resource",
    jobs: 346,
    icon: <MdOutlinePeopleAlt />,
    active: false,
  },
];

const Categories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#18191C]">
              Explore by <span className="text-[#0066FF]">category</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#4F46E5] font-semibold border-b-2 border-transparent hover:border-[#4F46E5] transition-all">
            Show all jobs <HiArrowRight />
          </button>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group p-8 border border-gray-200 rounded-lg transition-all cursor-pointer duration-300 bg-white hover:bg-[#4F46E5] hover:text-white hover:shadow-xl hover:translate-y-[-5px]"
            >
              <div
                className="p-3 rounded-lg w-fit text-3xl mb-6 transition-colors bg-[#EBEBFF] text-[#4F46E5] group-hover:bg-white/20 group-hover:text-white"
              >
                {cat.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">{cat.name}</h3>

              <div className="flex justify-between items-center">
                <p
                  className="text-gray-400 group-hover:text-white/80"
                >
                  {cat.jobs} jobs available
                </p>
                <HiArrowRight
                  className="text-xl text-gray-300 group-hover:text-white"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile "Show All" Button */}
        <div className="mt-8 md:hidden">
          <button className="flex items-center justify-center gap-2 text-[#4F46E5] font-semibold w-full">
            Show all jobs <HiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
