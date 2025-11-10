import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { ArrowRight, Search, X } from "lucide-react";
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
                setArtworks(data)
                setLoading(false);
            })
            .catch((err) => toast.error(err));
    }, []);

    // Filter artworks by title or artist
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
        <section className=" my-10 md:my-15">
            <h1 className=" text-3xl md:text-4xl font-bold text-indigo-600 mb-6 text-center">
                Explore Artworks
            </h1>



            {/* Search Box */}
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



            {/* Artworks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 md:mt-15 container mx-auto">
                {filteredArtworks.length > 0 ? (
                    filteredArtworks.map((art) => (
                        <motion.div
                            key={art._id}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200"
                        >
                            <div className="relative">
                                <img
                                    src={art.image}
                                    alt={art.title}
                                    className="w-full h-48 object-cover"
                                />
                                <p className="absolute badge badge-ghost text-indigo-500 border bottom-1.5 left-1 z-50">{art.category}</p>
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800">{art.title}</h2>
                                <p className="text-sm text-gray-500">By <span className="text-xs font-semibold text-gray-700">{art.userName}</span></p>
                                <p className="text-sm text-gray-400 mt-1">
                                    Likes: {art.likes || 0}
                                </p>
                                <Link
                                    to={`/artwork-details/${art._id}`}
                                    className="group mt-3 btn btn-st flex items-center justify-center gap-2 hover:scale-105 transition-all duration-500 w-full text-white overflow-hidden"
                                >
                                    {/* Text */}
                                    <span className="transition-all duration-700 ease-in-out group-hover:translate-x-3">
                                        View Details
                                    </span>

                                    {/* Arrow */}
                                    <ArrowRight
                                        className="transition-all duration-700 ease-in-out group-hover:-translate-x-27 "
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        failed to Load Data
                    </p>
                )}
            </div>
        </section>
    );
};

export default ExploreArtworks;
