import { useLoaderData } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const ArtworkDetails = () => {
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
    } = data;

    const [liked, setLiked] = useState(false);
    const [favorites, setFavorites] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const handleLike = () => {
        setLiked(!liked);
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1));


        // 🔥 Optional: send PATCH request to backend to update like in DB
        // fetch(`/artworks/${id}/like`, { method: 'PATCH' })
    };

    const handleFavorite = () => {
        setFavorites(!favorites);
        // 🩵 Optional: save to user's favorite list in DB
    };

    return (
        <section className="py-12  min-h-screen mt-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                
                {/* 🎨 Artwork Image */}
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

                {/* 🧑‍🎨 Artwork Details */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5"
                >
                    {/* 👩‍🎨 Artist Info */}
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

                    {/* ❤️ Like & ⭐ Favorite Buttons */}
                    <div className="flex items-center gap-4 mt-6">
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
                            onClick={handleFavorite}
                            className={`flex items-center gap-2 px-5 py-2 rounded-full ${favorites ? "bg-yellow-400 text-white" : "bg-yellow-100"
                                } hover:bg-yellow-200 transition-all`}
                        >
                            <FaStar className={`${favorites ? "text-white" : "text-yellow-500"}`} />
                            <span className="font-medium text-gray-700">
                                {favorites ? "Added to Favorites" : "Add to Favorites"}
                            </span>
                        </motion.button>
                    </div>

                    
                    
                </motion.div>
            </div>
        </section>
    );
};

export default ArtworkDetails;
