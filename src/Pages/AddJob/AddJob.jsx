import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContex from '../../Context/AuthContext/AuthContex';

const AddJob = () => {
  const { user } = useContext(AuthContex);

  if (user?.role !== 'admin') {
    return <div className="p-20 text-center">Access Denied. You are not an Admin.</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const jobData = {
      title: form.title.value,
      company: form.company.value,
      category: form.category.value,
      description: form.description.value,
      location: form.location.value,
      salary: form.salary.value,
    };

    try {
      await axios.post('http://localhost:5000/api/jobs', jobData, {
          headers: { admin_email: user.email } // Simple identity check
      });
      alert("Job Added!");
      form.reset();
    } catch (err) {
      alert("Error adding job");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-10 bg-white shadow-xl rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6">Add New Job Listing</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Job Title" className="input input-bordered w-full" required />
        <input name="company" placeholder="Company Name" className="input input-bordered w-full" required />
        <input name="location" placeholder="Location" className="input input-bordered w-full" required />
        <select name="category" className="select select-bordered w-full">
          <option>Design</option>
          <option>Engineering</option>
          <option>Marketing</option>
        </select>
        <input name="salary" placeholder="Salary Range" className="input input-bordered w-full" />
        <textarea name="description" placeholder="Job Description" className="textarea textarea-bordered w-full h-32" required></textarea>
        <button className="btn btn-primary w-full">Post Job</button>
      </form>
    </div>
  );
};

export default AddJob;