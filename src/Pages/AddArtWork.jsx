import React, { use, useState } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { FaImage, FaPalette, FaPenNib, FaDollarSign, FaEye } from "react-icons/fa";

const AddArtwork = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddArtwork = async (e) => {
    e.preventDefault();
    const form = e.target;
    const artwork = {
      url: form.url.value,
      title: form.title.value,
      category: form.category.value,
      medium: form.medium.value,
      description: form.description.value,
      dimensions: form.dimensions.value,
      price: form.price.value,
      visibility: form.visibility.value,
      userName: user?.displayName,
      userEmail: user?.email,
    };

//     try {
//       setLoading(true);
//       const res = await fetch("http://localhost:3000/artworks", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(artwork),
//       });
//       if (res.ok) {
//         toast.success("Artwork added successfully!");
//         form.reset();
//       } else {
//         toast.error("Failed to add artwork");
//       }
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-gray-200  border-gray-200-gray-100"
      >
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
          Add New Artwork
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Fill in the details to share your creativity with the world!
        </p>

        <form onSubmit={handleAddArtwork} className="space-y-5">

          {/* Image URL */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <div className="relative">
              <FaImage className="absolute left-3 top-3 text-gray-400" />
              <input
                required
                name="url"
                type="text"
                placeholder="Paste image URL"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
              />
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Title</label>
            <div className="relative">
              <FaPenNib className="absolute left-3 top-3 text-gray-400" />
              <input
                required
                name="title"
                type="text"
                placeholder="Artwork title"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
              />
            </div>
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
              required
            >
              <option value="">Select category</option>
              <option value="Painting">Painting</option>
              <option value="Digital">Digital</option>
              <option value="Sculpture">Sculpture</option>
              <option value="Photography">Photography</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Medium */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Medium/Tools</label>
            <div className="relative">
              <FaPalette className="absolute left-3 top-3 text-gray-400" />
              <input
                required
                name="medium"
                type="text"
                placeholder="E.g. Oil on Canvas, Photoshop"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              required
              name="description"
              rows={4}
              placeholder="Describe your artwork..."
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70 resize-none"
            />
          </div>

          {/* Dimensions */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Dimensions (Optional)</label>
            <input
              name="dimensions"
              type="text"
              placeholder="E.g. 24 x 36 inches"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Price (Optional)</label>
            <div className="relative">
              <FaDollarSign className="absolute left-3 top-3 text-gray-400" />
              <input
                name="price"
                type="number"
                placeholder="E.g. 200"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
              />
            </div>
          </div>

          {/* Visibility */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Visibility</label>
            <div className="relative">
              <FaEye className="absolute left-3 top-3 text-gray-400" />
              <select
                name="visibility"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white/70"
                required
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
          </div>

          {/* User Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* User Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input
              type="text"
              value={user?.email || ""}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full btn btn-st text-white btn-st font-semibold rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
          >
            {loading ? "Adding..." : "Add Artwork"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default AddArtwork;
