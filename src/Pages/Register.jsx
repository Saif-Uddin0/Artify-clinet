import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaImage, FaLock } from "react-icons/fa";

const Register = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (value) => {
    setPassword(value);
    const upper = /[A-Z]/.test(value);
    const lower = /[a-z]/.test(value);
    const length = value.length >= 6;

    if (!upper || !lower || !length) {
      setError("Password must include uppercase, lowercase, and at least 6 characters.");
    } else {
      setError("");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-100"
      >
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-2">
          Create an Account
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Join Artify and start sharing your creativity with the world!
        </p>

        {/* Registration Form */}
        <form className="space-y-5">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                required
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white/70"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                required
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white/70"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Photo URL</label>
            <div className="relative">
              <FaImage className="absolute left-3 top-3 text-gray-400" />
              <input
                required
                name="photo"
                type="text"
                placeholder="Paste your profile photo URL"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white/70"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                required
                name="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => validatePassword(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 ${
                  error ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-sky-400"
                } bg-white/70 transition-all`}
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full btn btn-st glass-bg text-black hover:bg-indigo-700  font-semibold rounded-lg shadow-md transition-all"
          >
            Register
          </motion.button>
        </form>

        {/* Divider */}
        <div className="divider my-6 text-gray-400">OR</div>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600">
          <span className="italic">Already have an account?{"  "}</span>
          <Link
            to="/auth/login"
            className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300"
          >
            <span className="text-st">Login here</span>
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Register;
