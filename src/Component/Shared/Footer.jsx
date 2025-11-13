import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaPinterest, FaEnvelope } from "react-icons/fa";
import { X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-indigo-600/90 text-white mt-20">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-8">

        {/* Brand Info */}
        <div>
          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-white via-indigo-100 to-pink-100 bg-clip-text text-transparent"
          >
            ARTIFY
          </Link>
          <p className="mt-3 text-sm text-white/90 leading-relaxed">
            ARTIFY is your creative home — a space where artists from around the
            world can <span className="font-medium text-indigo-200">share</span>,{" "}
            <span className="font-medium text-pink-200">discover</span>, and{" "}
            <span className="font-medium text-purple-200">connect</span> through
            the power of art. Whether you’re an emerging artist or an admirer,
            Artify helps you showcase imagination and inspire others.
          </p>
          <div className="flex space-x-4 mt-5">
            <Link to="#" className="hover:text-white transition-all duration-300">
              <FaFacebook size={20} />
            </Link>
            <Link to="#" className="hover:text-white transition-all duration-300">
              <FaInstagram size={20} />
            </Link>
            <Link to="#" className="hover:text-white transition-all duration-300">
              <X size={20} />
            </Link>
            <Link to="#" className="hover:text-white transition-all duration-300">
              <FaPinterest size={20} />
            </Link>
            <Link
              to="mailto:contact@artify.com"
              className="hover:text-white transition-all duration-300"
            >
              <FaEnvelope size={20} />
            </Link>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/explore-art", label: "Explore Artworks" },
              { to: "/add-art", label: "Add Artwork" },
              { to: "/my-gallery", label: "My Gallery" },
              { to: "/my-favorite", label: "My Favorites" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-pink-200 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <p className="text-sm text-white/90">
            Have questions, ideas, or want to collaborate?
            We’d love to hear from you.
          </p>
          <div className="mt-3 text-sm space-y-1">
            <p>
              📩{" "}
              <a
                href="mailto:contact@artify.com"
                className="text-pink-200 hover:text-white font-medium transition-colors"
              >
                contact@artify.com
              </a>
            </p>
            <p>
              ☎️{" "}
              <a
                href="tel:+880123456789"
                className="text-pink-200 hover:text-white font-medium transition-colors"
              >
                +880 1234 567 89
              </a>
            </p>
            <p className="text-white/80">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 py-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
          ARTIFY
        </span>{" "}
        — Crafted with 🎨 creativity for global artists.
      </div>
    </footer>
  );
};

export default Footer;
