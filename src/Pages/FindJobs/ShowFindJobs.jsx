import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Use react-router-dom
import { HiOutlineTrash } from "react-icons/hi"; // Professional trash icon
import AuthContex from "../../Context/AuthContext/AuthContex";
import axios from "axios";

const ShowFindJobs = ({ job, setJobs, jobs }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContex);

  const handleDelete = async (e) => {
    e.stopPropagation(); 
    
    if (window.confirm(`Are you sure you want to delete "${job.title}"?`)) {
      try {
        const res = await axios.delete(`http://localhost:5000/api/jobs/${job._id}`, {
          headers: { admin_email: user.email }
        });

        if (res.data.deletedCount > 0 || res.status === 200) {
          alert("Job deleted successfully!");
          const remainingJobs = jobs.filter(j => j._id !== job._id);
          setJobs(remainingJobs);
        }
      } catch (err) {
        console.error(err);
        alert("Failed to delete the job.");
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#4F46E5] transition-all flex flex-col md:flex-row justify-between items-center gap-6 group shadow-sm relative overflow-hidden">
      
      {/* Decorative hover strip for Admin */}
      {user?.role === 'admin' && (
        <div className="absolute left-0 top-0 h-full w-1 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      )}

      <div
        className="flex gap-4 items-center w-full cursor-pointer"
        onClick={() => navigate(`/job/${job._id}`)}
      >
        <div className="w-14 h-14 bg-[#F8F9FE] rounded-lg flex items-center justify-center text-2xl font-bold text-[#4F46E5] group-hover:bg-[#4F46E5] group-hover:text-white transition-all">
          {job.company.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#18191C] group-hover:text-[#4F46E5] transition-colors">
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
        
        <div className="flex items-center gap-2">
          {/* Apply Button */}
          <button
            onClick={() => navigate(`/job/${job._id}`)}
            className="btn bg-[#4F46E5] text-white hover:bg-[#3f37c9] border-none px-6 h-12"
          >
            Apply Now
          </button>

          {/* Admin-Only Delete Button */}
          {user?.role === "admin" && (
            <button
              onClick={handleDelete}
              className="btn btn-square btn-outline border-gray-200 hover:bg-red-50 hover:border-red-500 hover:text-red-500 transition-all group/btn h-12 w-12"
              title="Delete Job"
            >
              <HiOutlineTrash size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowFindJobs;