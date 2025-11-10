import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { ArrowRight } from "lucide-react";
import Loader from "../Component/Shared/Loader";

const ExploreArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/artwork")
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data);
        setLoading(false);
      })
      .catch((err) => toast.error(err));
  }, []);

  const filteredArtworks = artworks.filter(
    (art) =>
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.userName.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <section className="min-h-screen py-12 ">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-8 text-center">
          Explore Artworks
        </h1>

        {/* Search Box */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="🔍 Search by title or artist..."
            className="w-full md:w-1/2 p-3 rounded-2xl border border-indigo-300 shadow-md focus:ring-4 focus:ring-indigo-300 outline-none transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Artworks Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {filteredArtworks.length > 0 ? (
            filteredArtworks.map((art, index) => (
              <motion.div
                key={art._id}
                className="relative group rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-60 object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* View Details Button */}
                  <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                    <Link
                      to={`/artwork-details/${art._id}`}
                      className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-t-xl transition-all"
                    >
                      <span>View Details</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {art.title}
                  </h2>
                  <p className="text-sm text-gray-500">By {art.userName}</p>
                  <p className="text-sm text-indigo-600 font-medium mt-1">
                    Category: {art.category}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Likes: {art.likes || 0}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No artworks found 😢
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreArtworks;
