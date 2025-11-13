import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loader from "../Shared/Loader";

const FeaturedArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://artify-server-nine.vercel.app/feauters-artwork")
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <Loader />

  return (
    <div className="py-16 mt-10">
      <h1 className="text-4xl font-bold text-center text-indigo-600">Featured Artworks</h1>
      <div
        className="container mx-auto 
                      grid gap-8 p-5 
                      sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                      justify-items-center mt-10"

      >

        {artworks.map((item) => (
          <div
            key={item._id}
            className="relative w-full max-w-sm 
                      bg-gradient-to-br from-pink-300/20 via-purple-300/20 to-blue-300/20
                      backdrop-blur-xl border border-white/30
                      p-5 rounded-bl-4xl rounded-tr-4xl 
                      shadow-sm hover:shadow-xl transition-all duration-500
                      hover:-translate-y-2 hover:scale-[1.02]"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-2xl mb-4 group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-2xl
                           transition-all duration-700 ease-in-out
                           group-hover:scale-110 group-hover:brightness-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-90 transition-opacity duration-700 flex items-end justify-center pb-1">
                <p
                  className="text-white italic text-xs bg-indigo-600/80 px-3 py-1 rounded-full shadow hover:bg-indigo-700 transition"
                >
                  by_{item.userName}
                </p>
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-[11px] font-semibold 
                                bg-gradient-to-r from-indigo-500 to-purple-500 text-white 
                                rounded-full shadow-sm 
                                backdrop-blur-sm
                                hover:scale-105 transition-transform">
                  {item.category}
                </span>
                <span className="px-3 py-1 text-[11px] font-semibold 
                                bg-gradient-to-r from-pink-500 to-rose-500 text-white 
                                rounded-full shadow-sm 
                                backdrop-blur-sm
                                hover:scale-105 transition-transform">
                  {item.medium}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className=" space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                {item.title}
              </h3>


              {/* Description (short preview) */}
              {item.description && (
                <p className="text-sm font-light text-gray-500 line-clamp-2">
                  {item.description.slice(0, 80)}...
                </p>
              )}

              {/* Price & Visibility */}
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




              {/* View Details Button */}

                <Link
                  to={`/artwork-details/${item._id}`}
                  className="group btn btn-st flex items-center justify-center gap-2 hover:scale-105 transition-all duration-500 w-full text-white overflow-hidden mt-3"
                >
                  <span className="transition-all duration-700 ease-in-out group-hover:translate-x-4">
                    View Details
                  </span>
                  <ArrowRight className="transition-all duration-700 ease-in-out group-hover:-translate-x-30" />
                </Link>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArtworks;
