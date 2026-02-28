import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  HiOutlineLocationMarker,
  HiOutlineCurrencyDollar,
  HiOutlineBriefcase,
} from "react-icons/hi";
import AuthContex from "../../Context/AuthContext/AuthContex";

const JobDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContex);
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/jobs/${id}`)
      .then((res) => setJob(res.data))
      .catch((err) => console.error("Error fetching job:", err));
  }, [id]);

  const handleApplySubmission = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const applicationData = {
      job_id: id,
      name: form.name.value,
      email: form.email.value,
      resume_link: form.resume.value,
      cover_note: form.cover_note.value,
    };

    try {
      await axios.post(
        "http://localhost:5000/api/applications",
        applicationData,
      );
      alert("Application sent successfully!");
      setShowForm(false);
      navigate("/find-jobs");
    } catch (err) {
      alert("Failed to submit. Please check your data.");
    } finally {
      setLoading(false);
    }
  };

  if (!job)
    return (
      <div className="text-center p-20 text-blue-600 animate-pulse">
        Loading Job Details...
      </div>
    );

  return (
    <div className="min-h-screen bg-[#F8F9FE] py-12">
      <div className="container mx-auto px-4 lg:px-20 max-w-5xl">
        {/* Header Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-[#4F46E5] rounded-xl flex items-center justify-center text-white text-3xl font-bold">
                {job.company.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-[#18191C]">
                  {job.title}
                </h1>
                <p className="text-[#5E6670] font-medium">
                  {job.company} • {job.category}
                </p>
              </div>
            </div>
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="btn bg-[#4F46E5] hover:bg-[#3f37c9] text-white border-none px-10 h-14 text-lg"
              >
                Apply Now
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-50">
            <div className="flex items-center gap-2 text-[#5E6670]">
              <HiOutlineLocationMarker className="text-xl text-[#4F46E5]" />{" "}
              {job.location}
            </div>
            <div className="flex items-center gap-2 text-[#5E6670]">
              <HiOutlineCurrencyDollar className="text-xl text-[#4F46E5]" />{" "}
              {job.salary}
            </div>
            <div className="flex items-center gap-2 text-[#5E6670]">
              <HiOutlineBriefcase className="text-xl text-[#4F46E5]" />{" "}
              {job.jobType || "Full Time"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Job Description */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#18191C] mb-4">
              Job Description
            </h3>
            <div className="text-[#5E6670] leading-relaxed space-y-4 whitespace-pre-line">
              {job.description}
            </div>
          </div>

          {/* Right: Sticky Apply Form / Summary */}
          <div className="lg:col-span-1">
            {showForm ? (
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#4F46E5] sticky top-24">
                <h3 className="text-xl font-bold text-[#18191C] mb-6">
                  Apply for this position
                </h3>
                <form onSubmit={handleApplySubmission} className="space-y-4">
                  <div className="form-control">
                    <label className="label py-1 text-sm font-semibold">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label py-1 text-sm font-semibold">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      defaultValue={user?.email}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label py-1 text-sm font-semibold">
                      Resume Link (URL)
                    </label>
                    <input
                      name="resume"
                      type="url"
                      placeholder="https://drive.google.com/..."
                      className="input input-bordered w-full focus:outline-[#4F46E5]"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label py-1 text-sm font-semibold">
                      Cover Note
                    </label>
                    <textarea
                      name="cover_note"
                      className="textarea textarea-bordered h-24"
                      placeholder="Why should we hire you?"
                      required
                    ></textarea>
                  </div>
                  <button
                    disabled={loading}
                    className={`btn w-full bg-[#4F46E5] text-white border-none mt-4 ${loading && "loading"}`}
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="btn btn-ghost w-full text-gray-400 font-normal"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-[#EBEBFF] rounded-2xl p-8 sticky top-24">
                <h4 className="font-bold text-[#4F46E5] mb-2">
                  Interested in this role?
                </h4>
                <p className="text-sm text-[#5E6670] mb-6">
                  Make sure your resume link is accessible to the public or the
                  recruiter.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="btn bg-[#4F46E5] text-white w-full border-none"
                >
                  Start Application
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
