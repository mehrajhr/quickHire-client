import { HiSearch, HiLocationMarker } from 'react-icons/hi';
import heroman from '../assets/heroman.png'

const Hero = () => {
  return (
    <div className="relative bg-[#F8F9FE] overflow-hidden">
      <div className="container mx-auto px-4 pt-12 pb-20 lg:pt-20 lg:pb-32 flex flex-col lg:flex-row items-center">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#18191C] leading-tight">
            Discover <br /> more than <br />
            <span className="relative inline-block text-[#0066FF]">
              5000+ Jobs
              {/* The Blue Underline Svg */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9C118.957 4.47226 235.5 1.5 355 9" stroke="#0066FF" strokeWidth="5" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="mt-8 text-gray-500 text-lg max-w-md mx-auto lg:mx-0">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>

          {/* Search Bar - Desktop & Mobile Responsive */}
          <div className="mt-10 bg-white p-2 shadow-xl rounded-lg flex flex-col md:flex-row items-center gap-4 border border-gray-100">
            {/* Keyword Input */}
            <div className="flex items-center gap-2 px-4 w-full border-b md:border-b-0 md:border-r border-gray-200 py-2">
              <HiSearch className="text-blue-600 text-xl" />
              <input 
                type="text" 
                placeholder="Job title or keyword" 
                className="outline-none w-full bg-transparent text-sm"
              />
            </div>

            {/* Location Input */}
            <div className="flex items-center gap-2 px-4 w-full py-2">
              <HiLocationMarker className="text-blue-600 text-xl" />
              <select className="outline-none w-full bg-transparent text-sm appearance-none cursor-pointer">
                <option>Florence, Italy</option>
              </select>
            </div>

            <button className="btn btn-primary bg-[#4F46E5] hover:bg-blue-700 border-none text-white w-full md:w-auto px-8">
              Search my job
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            <span className="font-semibold text-gray-600">Popular :</span> UI Designer, UX Researcher, Android, Admin
          </p>
        </div>

        {/* Right Image (Visible on Desktop) */}
        <div className="hidden lg:block w-1/2 relative">
          <img 
            src={heroman}
            alt="Find your dream job" 
            className="w-full h-auto object-contain relative z-10"
          />
          {/* Background decorative lines/shapes from Figma */}
          <div className="absolute top-10 right-0 w-72 h-72 border-2 border-blue-100 rounded-full -z-0 opacity-50"></div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
