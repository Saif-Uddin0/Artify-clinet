import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { LogIn } from "lucide-react";

const Login = () => {
    const { signInWithGoogle, signInUser, setUser } = use(AuthContext);

    // navigate
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    // googleSignIN
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const loggedUser = result.user;
                setUser(loggedUser);
                console.log(loggedUser);
                toast.success("Logged in with Google");
                navigate(from,{replace: true});
            })
            .catch((error) => {
                toast.error(error.message);
                console.log(error);

            });
    };



    // submit the form
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then((res) => {
                const UserIn = res.user
                setUser(UserIn);
                toast.success('Log in successfully')
                console.log(UserIn);
                navigate(from,{replace: true});

            })
            .catch(error => {
                toast.error("Invalid Email or Password")
                console.log(error);

                // seTError(error.message)
            })

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
                    Welcome Back!
                </h1>
                <p className="text-gray-500 text-center mb-8">
                    Login to continue exploring artworks
                </p>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-5">
                    <div className="flex flex-col">
                        {/* Emial */}
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
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
                            />
                        </div>
                    </div>

                    {/* password */}
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
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
                            />
                        </div>
                    </div>

                    {/* forgot password */}
                    <div className="text-left">
                        <a
                            className="text-sm text-indigo-500 hover:text-indigo-700 transition-all"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Btn */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full btn btn-st flex items-center justify-center gap-x-1.5 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all"
                    >
                        Login<LogIn />
                    </motion.button>
                </form>

                <div className="divider my-4 text-gray-400">OR</div>

                {/* <!-- Google --> */}
                <button
                        onClick={handleGoogleSignIn}
                        className="flex items-center justify-center gap-2 w-full py-2 border border-purple-500 rounded-md bg-white text-st hover:bg-gray-100 transition"
                    >
                        <FcGoogle size={22} />
                        <span className=" font-medium">Continue with Google</span>
                    </button>

                {/* Register Link */}
                <p className="text-center mt-4 text-sm text-gray-600 ">
                    <span className="italic"> Don’t have an account?{"  "}</span>
                    <Link
                        to="/auth/register"
                        className="text-indigo-500 underline font-medium transition-colors duration-300"
                    >
                        Register here
                    </Link>
                </p>
            </motion.div>
        </section>
    );
};

export default Login;
