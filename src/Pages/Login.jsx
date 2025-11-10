import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
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
                    Welcome Back!
                </h1>
                <p className="text-gray-500 text-center mb-8">
                    Login to continue exploring artworks
                </p>

                {/* Login Form */}
                <form className="space-y-5">
          <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
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

                {/* Password */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-3 text-gray-400" />
                        <input
                            required
                            name="password"
                            type='password'
                            placeholder="Enter your password"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white/70"
                        />
                    </div>
                    </div>

                    {/* Forgot Password */}
                    <div className="text-left">
                        <a
                            className="text-sm text-indigo-500 hover:text-indigo-700 transition-all"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full btn btn-st hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all"
                    >
                        Login
                    </motion.button>
                </form>

                {/* Divider */}
                <div className="divider my-6 text-gray-400">OR</div>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-600 ">
                   <span className="italic"> Don’t have an account?{"  "}</span>
                    <Link
                        to="/auth/register"
                        className="text-st hover:text-indigo-800 font-medium transition-colors duration-300"
                    >
                         Register here
                    </Link>
                </p>
            </motion.div>
        </section>
    );
};

export default Login;
