import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import AuthContex from "../../Context/AuthContext/AuthContex";
import axios from "axios";

const SignUp = () => {
  const { createUser } = useContext(AuthContex);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      const result = await createUser(email, password);
      const user = result.user;

      // 2. Prepare user data for MongoDB
      const newUser = {
        email: user.email,
        role: "user",
        createdAt: new Date(),
      };

      await axios.post("http://localhost:5000/api/users", newUser);

      console.log("User registered and saved to DB");
      navigate("/");
    } catch (err) {
      setError(err.message || "Failed to create account.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FE] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#18191C]">Get Started</h2>
          <p className="text-[#5E6670] mt-2">Create your QuickHire account</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-5">
          <div className="form-control w-full">
            <label className="label font-medium text-[#18191C]">
              Email Address
            </label>
            <div className="relative">
              <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                name="email"
                type="email"
                placeholder="name@example.com"
                className="input input-bordered w-full pl-10 focus:border-[#4F46E5] outline-none"
                required
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label font-medium text-[#18191C]">Password</label>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                name="password"
                type="password"
                placeholder="Create a password"
                className="input input-bordered w-full pl-10 focus:border-[#4F46E5] outline-none"
                required
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label font-medium text-[#18191C]">
              Confirm Password
            </label>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="input input-bordered w-full pl-10 focus:border-[#4F46E5] outline-none"
                required
              />
            </div>
          </div>

          <button className="btn w-full bg-[#4F46E5] hover:bg-[#3f37c9] border-none text-white normal-case text-lg h-12 mt-4">
            Register Now
          </button>
        </form>

        <p className="text-center mt-8 text-[#5E6670]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#4F46E5] font-bold hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
