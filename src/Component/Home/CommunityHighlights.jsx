import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaComment } from "react-icons/fa";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Art Collaboration: Sunset Series",
    user: "Emily Johnson",
    image:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=400&q=80",
    likes: 45,
    comments: 12,
  },
  {
    title: "Street Photography Contest",
    user: "Carlos Rivera",
    image:
      "https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=400&q=80",
    likes: 62,
    comments: 23,
  },
  {
    title: "Digital Art Spotlight",
    user: "Rina Das",
    image:
      "https://www.presencemagazine.com/wp-content/uploads/2023/11/Fler-by-secondnature-2-1300x650.jpg",
    likes: 38,
    comments: 9,
  },
];

const CommunityHighlights = () => {
  const [liked, setLiked] = useState({});

  const handleLike = (index) => {
    setLiked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="py-12 my-10 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          🌟Community Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {highlights.map((item, index) => (
            <div
              
              className="bg-white mt-8 rounded-xl overflow-hidden shadow-md cursor-pointer transition-all hover:transform hover:scale-107 duration-500"

            >
              {/* Image Section */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover hover:brightness-110 transition-all duration-300"
              />

              {/* Content Section */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">by {item.user}</p>

                {/* Like & Comment */}
                <div className="flex items-center justify-between mt-3 text-gray-600">
                  <motion.button
                    whileTap={{ scale: 1.3 }}
                    onClick={() => handleLike(index)}
                    className="flex items-center gap-1 transition-colors duration-300"
                  >
                    {liked[index] ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FaRegHeart className="text-red-500 hover:text-red-400" />
                    )}
                    <span>{liked[index] ? item.likes + 1 : item.likes}</span>
                  </motion.button>

                  <span className="flex items-center gap-1 transition-colors duration-300 text-indigo-600">
                    <FaComment /> <span className="text-gray-500">{item.comments}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;
