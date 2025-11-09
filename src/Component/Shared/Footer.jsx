import { Link } from "react-router";
import { FaFacebook, FaInstagram,  FaPinterest, FaEnvelope } from "react-icons/fa";
import { X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 text-gray-700 mt-20">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-8">
        
        {/* Brand Info */}
        <div>
          <Link
            to="/"
            className="text-3xl font-extrabold text-st hover:text-indigo-700 transition-colors duration-300"
          >
            ARTIFY
          </Link>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            ARTIFY is your creative home — a space where artists from around the
            world can <span className="font-medium text-indigo-600">share</span>,
            <span className="font-medium text-indigo-600"> discover</span>, and
            <span className="font-medium text-indigo-600"> connect</span> through
            the power of art.  
            Whether you’re an emerging artist or a passionate admirer,
            Artify helps you showcase imagination and inspire others.
          </p>
          <div className="flex space-x-4 mt-5">
            <Link
              to="#"
              className="text-gray-500 hover:text-indigo-600 transition-colors duration-300"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-indigo-600 transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-indigo-600 transition-colors duration-300"
            >
              <X size={20} />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-indigo-600 transition-colors duration-300"
            >
              <FaPinterest size={20} />
            </Link>
            <Link
              to="mailto:contact@artify.com"
              className="text-gray-500 hover:text-indigo-600 transition-colors duration-300"
            >
              <FaEnvelope size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/explore-art"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                Explore Artworks
              </Link>
            </li>
            <li>
              <Link
                to="/add-art"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                Add Artwork
              </Link>
            </li>
            <li>
              <Link
                to="/my-gallery"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                My Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/my-favorite"
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                My Favorites
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-600">
            Have questions, ideas, or want to collaborate?  
            We’d love to hear from you.
          </p>
          <div className="mt-3 text-sm">
            <p>
              📩{" "}
              <a
                href="mailto:contact@artify.com"
                className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                contact@artify.com
              </a>
            </p>
            <p className="mt-1">
              ☎️{" "}
              <a
                href="tel:+880123456789"
                className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
              >
                +880 1234 567 89
              </a>
            </p>
            <p className="mt-1 text-gray-500">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-st">ARTIFY</span> —  
        Crafted with 🎨 creativity for global artists.
      </div>
    </footer>
  );
};

export default Footer;
