import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiSearch, HiOutlineLocationMarker, HiFilter } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const navigate = useNavigate();

  // Categories based on your Figma design
  const categories = [
    "All",
    "Design",
    "Sales",
    "Marketing",
    "Finance",
    "Technology",
    "Engineering",
    "Business",
    "Human Resource",
  ];

  useEffect(() => {
    // Fetching from your Node/Express backend
    axios
      .get("http://localhost:5000/api/jobs")
      .then((res) => {
        setJobs(res.data);
        setFilteredJobs(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter Logic
  useEffect(() => {
    let results = jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || job.category === selectedCategory;
      const matchesLocation =
        selectedLocation === "All" ||
        job.location.toLowerCase().includes(selectedLocation);

      return matchesSearch && matchesCategory && matchesLocation;
    });
    setFilteredJobs(results);
  }, [searchTerm, selectedCategory, selectedLocation, jobs]);

  return (
    <div className="min-h-screen bg-[#F8F9FE] pb-20">
      {/* Top Search Bar (Floating Style) */}
      <div className="bg-white border-b border-gray-100 py-8 shadow-sm">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-4 bg-white p-2 rounded-xl border border-gray-200 shadow-md">
            <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b lg:border-b-0 lg:border-r border-gray-100">
              <HiSearch className="text-[#4F46E5] text-2xl" />
              <input
                type="text"
                placeholder="Job title or company..."
                className="outline-none w-full text-gray-700"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-2">
              <HiOutlineLocationMarker className="text-[#4F46E5] text-2xl" />
              <input
                type="text"
                placeholder="City or country..."
                className="outline-none w-full text-gray-700"
                onChange={(e) => setSelectedLocation(e.target.value || "All")}
              />
            </div>
            <button className="btn bg-[#4F46E5] text-white hover:bg-[#3f37c9] px-10 border-none">
              Find Jobs
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 mt-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-[#18191C] font-bold text-lg">
                <HiFilter /> <span>Filters</span>
              </div>

              <h4 className="font-semibold text-[#18191C] mb-4">Categories</h4>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="category"
                      className="radio radio-primary radio-sm"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                    />
                    <span
                      className={`text-sm ${selectedCategory === cat ? "text-[#4F46E5] font-bold" : "text-gray-500 group-hover:text-gray-700"}`}
                    >
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Job List Area */}
          <main className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-[#5E6670]">
                Showing{" "}
                <span className="font-bold text-[#18191C]">
                  {filteredJobs.length}
                </span>{" "}
                jobs
              </p>
              <select className="select select-sm select-bordered w-full max-w-[150px] bg-white text-xs">
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  // Inside your .map() function:
                  <div
                    key={job._id}
                    className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#4F46E5] transition-all flex flex-col md:flex-row justify-between items-center gap-6 group shadow-sm"
                  >
                    <div
                      className="flex gap-4 items-center w-full cursor-pointer"
                      onClick={() => navigate(`/job/${job._id}`)} // Goes to Details
                    >
                      <div className="w-14 h-14 bg-[#F8F9FE] rounded-lg flex items-center justify-center text-2xl font-bold text-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:text-white transition-all">
                        {job.company.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#18191C] group-hover:text-[#4F46E5]">
                          {job.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {job.company} • {job.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                      <span className="text-[#18191C] font-semibold text-lg">
                        {job.salary}
                      </span>
                      <button
                        onClick={() => navigate(`/apply/${job._id}`)} // Goes to Apply Page
                        className="btn bg-[#4F46E5] text-white hover:bg-[#3f37c9] border-none px-6"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                  <p className="text-gray-400 text-lg">
                    No jobs found matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                    className="text-[#4F46E5] underline mt-2"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
