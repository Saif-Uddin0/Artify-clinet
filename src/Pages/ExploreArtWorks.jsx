import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Search, X } from "lucide-react";
import Loader from "../Component/Shared/Loader";
import { FaRegHeart } from "react-icons/fa";

const ExploreArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Painting", "Digital", "Sculpture", "Photography", "Other"];

  useEffect(() => {
    setLoading(true);
    fetch("https://artify-server-nine.vercel.app/artwork")
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data);
        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
  }, []);



  const filteredArtworks = artworks.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.userName.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || art.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (loading) return <Loader />


  return (
    <section className="my-10 md:my-15">
      <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6 text-center">
        Explore Artworks
      </h1>

      {/* 🔍 Search Box */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-full md:w-1/2 bg-white rounded-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500" size={18} />
          <input
            type="text"
            placeholder="Search by title or artist..."
            className="w-full pl-11 pr-10 py-3 border border-gray-300 rounded-2xl shadow-sm text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 outline-none transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <X
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition"
              size={18}
            />
          )}
        </div>
      </div>

      <div className="container mx-auto flex flex-col sm:flex-row gap-8 px-6">
        {/* Left Sidebar */}
        <aside className="sm:w-1/3 w-full mt-10 bg-white/30 rounded-3xl h-fit md:h-auto shadow-sm md:shadow-xs p-6">
          <h2 className="text-lg font-semibold text-indigo-600 mb-4">
            Categories
          </h2>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-4 py-2 rounded-xl font-medium text-sm transition-all border
                ${selectedCategory.toLowerCase() == cat.toLowerCase()
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-md scale-105"
                    : "bg-white text-gray-700 border-gray-200 hover:border-indigo-400 hover:text-indigo-600"
                  }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Right Grid */}
        <div className=" w-full mt-6">
          {filteredArtworks.length > 0 ? (
            <div
              className="grid gap-5 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center"
            >
              {filteredArtworks.map((item) => (
                <div
                  key={item._id}
                  className="relative w-full max-w-sm bg-gradient-to-br from-pink-300/20 via-purple-300/20 to-blue-300/20 backdrop-blur-xl border border-white/30 p-5 rounded-bl-4xl rounded-tr-4xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl mb-4 group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-2xl transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:brightness-110"
                    />

                    {/* Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-700 flex items-end justify-center pb-1">
                      <p
                        className="text-white italic text-xs bg-indigo-600/80 px-3 py-1 rounded-full  hover:bg-indigo-700 transition"
                      >
                        <span>by_</span>{item.userName}
                      </p>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                      <span className="px-3 py-1 text-[11px] font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-sm backdrop-blur-sm hover:scale-105 transition-transform">
                        {item.category}
                      </span>
                      <span className="px-3 py-1 text-[11px] font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-sm backdrop-blur-sm hover:scale-105 transition-transform">
                        {item.medium}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                      {item.title}
                    </h3>



                    {item.description && (
                      <p className="text-sm font-light text-gray-500 line-clamp-2">
                        {item.description.slice(0, 70)}...
                      </p>
                    )}

                    <div className="flex items-center justify-between text-sm text-gray-700 mt-3">
                      <p className="font-semibold text-indigo-700 text-lg">${item.price}</p>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${item.visibility === "Public"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                          }`}
                      >
                        {item.visibility || "Unknown"}
                      </span>
                    </div>



                    <div className="flex items-center justify-between gap-2">
                      <motion.button
                            whileTap={{ scale: 1.2 }}
                            className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-pink-100  transition-all"
                        >
                                <FaRegHeart className="text-gray-400" />
                                 <span className="">{item.likes}</span>
                            
                        </motion.button>

                      <Link
                        to={`/artwork-details/${item._id}`}
                        className="group  flex items-center justify-center  gap-1.5 hover:scale-105 transition-all duration-500  btn-st overflow-hidden "
                      >
                        <span className="transition-all duration-700 ease-in-out group-hover:translate-x-3">
                          View Details
                        </span>
                        <ArrowRight size={20} className="transition-all duration-700 ease-in-out group-hover:-translate-x-28" />
                      </Link>
                    </div>







                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No artworks found for this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExploreArtworks;
