import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { motion } from "framer-motion";

const PrivateRoutes = ({children}) => {

    const {loading , user} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return (<div className="flex justify-center items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full"
        ></motion.div>
      </div>)
    }

    if(!user){
        return <Navigate to={'/auth/login'} state={{from: location}} replace></Navigate>
    }


    return children;

};

export default PrivateRoutes;