import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import Jobs from './Jobs';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual backend URL
    axios.get('http://localhost:5000/api/jobs')
      .then(res => {
        // Show only first 8 jobs for the "Featured" section
        setJobs(res.data.slice(0, 8));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading){
    return <h1>Loading .... </h1>
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-[#18191C]">
            Featured <span className="text-[#0066FF]">jobs</span>
          </h2>
          <Link 
            to="/find-jobs" 
            className="hidden md:flex items-center gap-2 text-[#4F46E5] font-semibold hover:gap-3 transition-all"
          >
            Show all jobs <HiArrowRight />
          </Link>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs?.map((job) => <Jobs key={job?._id} job={job}></Jobs>)}
        </div>

        {/* Mobile View "Show all jobs" */}
        <div className="mt-10 md:hidden text-center">
          <Link 
            to="/find-jobs" 
            className="btn btn-outline border-[#4F46E5] text-[#4F46E5] w-full normal-case"
          >
            Show all jobs <HiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;