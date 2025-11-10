import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaImage, FaLock } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { KeyRound } from "lucide-react";

const Register = () => {
  const [passwordEr, setPasswordError] = useState("");
  const navigate = useNavigate();
  // const [error, setError] = useState("");



  // google signIn
  const { signInWithGoogle, setUser, createUser } = use(AuthContext)

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log(loggedUser);

        toast.success("Logged in with Google");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        // toast.error(error.message);
        console.log(error);

      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;


    // password authintication
    const password = form.password.value;
    console.log(name, password, email, url)
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }
    setPasswordError("");
    createUser(email, password)
      .then((res) => {
        const theuser = res.user;
        updateProfile(theuser, {
          displayName: name,
          photoURL: url,
        })
          .then(() => {
            setUser({
              ...theuser,
              displayName: name,
              photoURL: url,
            });

            // console.log(theuser);
            navigate('/', { replace: true })
            toast.success('Sign In successfully')
          })
        

          .catch((err) => {
            console.error("Profile update failed:", err);
          });



      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        console.log(errorMessage);


      });





  }






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

        {/*  Form */}
        <form onSubmit={handleRegister} className="space-y-5">
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
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
                name="url"
                type="text"
                placeholder="Paste your profile photo URL"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
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
                className={`w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 ${passwordEr ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-indigo-400"
                  } bg-white/70 transition-all`}
              />
            </div>
            {passwordEr && <p className="text-red-500 text-sm mt-1">{passwordEr}</p>}
          </div>

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex items-center justify-center gap-x-1.5  btn  btn-st glass-bg text-black hover:bg-indigo-700  font-semibold rounded-lg shadow-md transition-all"
          >
            Register<KeyRound size={22}  />
          </motion.button>
        </form>

        {/* Divider */}
        <div className="divider my-4 text-gray-400">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-2 w-full py-2 border border-purple-500 rounded-md bg-white hover:bg-gray-100 transition"
        >
          <FcGoogle></FcGoogle>
          <span className="text-st font-medium">Sign up with Google</span>
        </button>

        {/* Login Link */}
        <p className="text-center mt-4 text-sm text-gray-600">
          <span className="italic">Already have an account?{"  "}</span>
          <Link
            to="/auth/login"
            className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300"
          >
            <span className="text-indigo-500 underline">Login here</span>
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Register;
