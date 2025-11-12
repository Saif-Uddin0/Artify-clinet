import { Link, useLoaderData } from "react-router";
import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { ChevronLeft } from "lucide-react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import Loader from "./Shared/Loader";

const ArtworkDetails = () => {
    const { user } = use(AuthContext);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);
    const data = useLoaderData();
    const {
        image,
        title,
        category,
        medium,
        description,
        price,
        userName,
        createdAt,
        userEmail,
        _id
    } = data;



    useEffect(() => {
        if (user?.email && _id) {
            setLoading(true)
            fetch(`http://localhost:3000/favourite/check?userEmail=${user?.email}&artworkId=${_id}`)
                .then(res => res.json())
                .then(data => {
                    if (data.isExists) {
                        setDisable(true);
                        
                    }
                })
                .catch(err => {
                    toast.error(err.message)
                    
                })
                .finally(() => {
                setLoading(false); // ✅ সব ক্ষেত্রেই loader বন্ধ হবে
            });
}
        
    }, [user, _id])


if (loading) {
    return <div><Loader></Loader></div>
}

const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
};

const handleFavorite = (data) => {
    // console.log(data);
    const favoriteData = {
        artworkId: data._id,
        title: data.title,
        image: data.image,
        category: data.category,
        medium: data.medium,
        price: data.price,
        userEmail: user?.email,
    };
    // console.log(favoriteData);
    fetch('http://localhost:3000/favourite', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(favoriteData)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success && data?.result?.insertedId) {
                toast.success('Artwork has been added to favourite')
                setDisable(true)
            }
            else if (!data.success) {
                toast.info("Already is your Favourite List")
                setDisable(true)
            }
        })
        .catch(err => {
            toast.error(err.message)
            console.log(err);

        })



};

return (
    <section className="py-12  min-h-screen mt-20">
        <div className="container mx-auto px-5 py-12 grid md:grid-cols-2 gap-10 items-center justify-center rounded-xl">

            {/*Image */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-2xl shadow-lg"
            >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
            </motion.div>

            {/* Details */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-5"
            >
                {/* Info */}
                <div className="mt-10 flex items-center gap-4 border-b border-gray-200 pb-6">
                    <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`}
                        alt={userName}
                        className="w-18 h-18 rounded-full border-2 border-[#7dafff]"
                    />
                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-st">
                            {userName}
                        </h3>
                        <p className="text-gray-500 text-sm">{userEmail}</p>
                        <p className="text-gray-400 text-xs">
                            Joined: {new Date(createdAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-indigo-600">{title}</h2>
                <p className="text-sm text-gray-500">Category: {category}</p>
                <p className="text-sm text-gray-500">Medium: {medium}</p>
                <p className="text-gray-600 leading-relaxed">{description}</p>

                <p className="text-xl font-semibold text-indigo-600">
                    Price: ${price}
                </p>


                <div className="flex items-center justify-center gap-4 mt-6">
                    <motion.button
                        whileTap={{ scale: 1.2 }}
                        onClick={handleLike}
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-all"
                    >
                        {liked ? (
                            <FaHeart className="text-red-500" />
                        ) : (
                            <FaRegHeart className="text-gray-400" />
                        )}
                        <span className="font-medium text-gray-700">
                            {likeCount} {likeCount === 1 ? "Like" : "Likes"}
                        </span>
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 1.2 }}
                        disabled={disable}
                        onClick={() => handleFavorite(data)}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full ${disable ? "bg-gray-200 hover:bg-gray-200" : "bg-red-300 text-white hover:bg-yellow-200 hover:text-gray-700"
                            }  transition-all`}
                    >

                        <span className={`font-medium ${disable && 'text-gray-500'}`}>
                            {disable ? "Added to" : "Add to Favorites"}
                        </span>
                        <FaStar className={`${disable ? "text-gray-500" : "text-orange-300"}`} />
                    </motion.button>

                </div>
                <Link to={'/'}>
                    <motion.button
                        className="group btn btn-st flex items-center justify-center gap-2 hover:scale-105 transition-all duration-500 w-full text-white overflow-hidden "
                    >
                        <span className="transition-all duration-700 ease-in-out group-hover:translate-x-4">Back</span>
                        <ChevronLeft className="transition-all duration-700 ease-in-out group-hover:-translate-x-15" />
                    </motion.button></Link>


            </motion.div>
        </div>
    </section>
);
};

export default ArtworkDetails;
