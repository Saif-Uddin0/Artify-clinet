import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FeaturedArtworks = () => {
    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/feauters-artwork")
            .then((res) => res.json())
            .then((data) => setArtworks(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-12 text-center">
                    Featured Artworks
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {artworks.map((art) => (
                        <div
                            key={art._id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <img
                                    src={art.image}
                                    alt={art.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col gap-3">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {art.title}
                                </h3>

                                <p className="text-gray-500 text-sm">
                                    By <span className="font-medium text-gray-700">{art.userName}</span>
                                </p>

                                <p className="text-indigo-600 text-sm font-medium">
                                    {art.category}
                                </p>

                                <div className="mt-4">
                                    {/* <Link
                                        to={`/artwork-details/${art._id}`}
                                        className="group btn btn-st flex items-center justify-center gap-2 hover:scale-105 transition-all duration-1000 w-full text-white"
                                    >
                                        <span className="transition-all duration-1000 group-hover:order-2">View Details</span><ArrowRight className="transition-all duration-1000 group-hover:-translate-x-1 group-hover:order-1" />
                                    </Link> */}


                                    <Link
                                        to={`/artwork-details/${art._id}`}
                                        className="group btn btn-st flex items-center justify-center gap-2 hover:scale-105 transition-all duration-500 w-full text-white overflow-hidden"
                                    >
                                        {/* Text */}
                                        <span className="transition-all duration-700 ease-in-out group-hover:translate-x-4">
                                            View Details
                                        </span>

                                        {/* Arrow */}
                                        <ArrowRight
                                            className="transition-all duration-700 ease-in-out group-hover:-translate-x-30 "
                                        />
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedArtworks;
