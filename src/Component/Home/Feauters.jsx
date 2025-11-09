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
                  <Link
                    to={`/artwork-details/${art._id}`}
                    className="btn  btn-st hover:transition-transform hover:scale-x-105 duration-300 w-full text-center text-gray-500"
                  >
                    View Details<ArrowRight  />
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
