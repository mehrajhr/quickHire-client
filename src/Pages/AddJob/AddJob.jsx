import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContex from '../../Context/AuthContext/AuthContex';

const AddJob = () => {
  const { user } = useContext(AuthContex);

  if (user?.role !== 'admin') {
    return <div className="p-20 text-center text-red-500 font-bold">Access Denied. Admins Only.</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    // Formatting the salary range string
    const min = form.minSalary.value;
    const max = form.maxSalary.value;
    const currency = form.currency.value;
    const salaryRange = `${currency}${Number(min).toLocaleString()} - ${currency}${Number(max).toLocaleString()}`;

    const jobData = {
      title: form.title.value,
      company: form.company.value,
      category: form.category.value,
      description: form.description.value,
      location: form.location.value,
      salary: salaryRange, // Result: "$80,000 - $110,000"
      created_at: new Date()
    };

    try {
      await axios.post('http://localhost:5000/api/jobs', jobData, {
          headers: { admin_email: user.email }
      });
      alert("Job Posted Successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to post job.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-2xl mt-10 mb-20 border border-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-[#18191C]">Post a New <span className="text-[#4F46E5]">Job</span></h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div className="form-control">
          <label className="label font-semibold">Job Title</label>
          <input name="title" placeholder="Software Engineer" className="input input-bordered focus:border-[#4F46E5]" required />
        </div>

        {/* Company */}
        <div className="form-control">
          <label className="label font-semibold">Company Name</label>
          <input name="company" placeholder="TechCorp" className="input input-bordered focus:border-[#4F46E5]" required />
        </div>

        {/* Salary Handling Section */}
        <div className="form-control md:col-span-2">
          <label className="label font-semibold">Salary Range</label>
          <div className="flex gap-4">
            <select name="currency" className="select select-bordered w-24">
              <option value="$">$</option>
              <option value="€">€</option>
              <option value="£">£</option>
              <option value="৳">৳</option>
            </select>
            <input name="minSalary" type="number" placeholder="Min (e.g. 80000)" className="input input-bordered w-full" required />
            <input name="maxSalary" type="number" placeholder="Max (e.g. 110000)" className="input input-bordered w-full" required />
          </div>
        </div>

        {/* Location */}
        <div className="form-control">
          <label className="label font-semibold">Location</label>
          <input name="location" placeholder="Remote or City" className="input input-bordered focus:border-[#4F46E5]" required />
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="label font-semibold">Category</label>
          <select name="category" className="select select-bordered">
            <option>Design</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Technology</option>
          </select>
        </div>

        {/* Description */}
        <div className="form-control md:col-span-2">
          <label className="label font-semibold">Job Description</label>
          <textarea name="description" placeholder="Describe the role..." className="textarea textarea-bordered h-32" required></textarea>
        </div>

        <button className="btn bg-[#4F46E5] hover:bg-[#3f37c9] text-white border-none md:col-span-2 h-14 text-lg">
          Publish Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;