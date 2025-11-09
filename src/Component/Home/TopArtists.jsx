import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const topArtists = [
  { name: "Alicia Gomez", avatar: "https://randomuser.me/api/portraits/women/65.jpg", artworks: 12 },
  { name: "Michael Tran", avatar: "https://randomuser.me/api/portraits/men/32.jpg", artworks: 9 },
  { name: "Rina Das", avatar: "https://randomuser.me/api/portraits/women/12.jpg", artworks: 15 },
  { name: "Carlos Rivera", avatar: "https://randomuser.me/api/portraits/men/44.jpg", artworks: 8 },
  { name: "Samantha Lee", avatar: "https://randomuser.me/api/portraits/women/22.jpg", artworks: 10 },
  {
    name: "Alexa Guen",avatar: "https://media.istockphoto.com/id/1062265676/photo/portrait-of-young-woman-with-perfect-skin.jpg?s=612x612&w=0&k=20&c=haKQ36bbn-Lyj3TTrfu7RWp_xrpjr0PUCd50lFUKfXo=" , artworks: 15
  }
];

const TopArtists = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center flex justify-center items-center gap-2 v">
          <FaStar className="text-orange-400"></FaStar> Top Artists of the Week
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-20">
          {topArtists.map((artist, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mx-auto w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-[#7dafff]">
                <img src={artist.avatar} alt={artist.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700">{artist.name}</h3>
              <p className="text-gray-500 mt-1">{artist.artworks} Artworks</p>
              <button className="mt-3 px-4 py-2 btn-st text-white rounded-md hover:bg-indigo-700 transition duration-300">
                View Profile
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopArtists;
