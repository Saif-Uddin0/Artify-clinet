import  { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";

const slides = [
  {
    title: "Discover Digital Masterpieces",
    subtitle: "Explore captivating digital artworks created by visionary artists worldwide.",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  },
  {
    title: "Celebrate Modern Creativity",
    subtitle: "Discover paintings that redefine imagination and style in the modern world.",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  },
  {
    title: "Meet the Artists Behind the Canvas",
    subtitle: "Learn the stories, inspirations, and techniques of trending artists on Artify.",
    img: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
  },
  {
    title: "Exclusive Art Exhibitions",
    subtitle: "Showcasing exclusive artworks from top artists around the globe.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-15 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text */}
        <div className="md:w-1/2">
          <Fade cascade damping={0.3} direction="up" triggerOnce key={currentIndex}>
            <h2 className="text-3xl md:text-5xl font-bold text-indigo-600 mb-4">
              {currentSlide.title}
            </h2>
            <p className="text-gray-500 mb-6">{currentSlide.subtitle}</p>
            <Link
              to="/explore-art"
              className="btn btn-st text-white border-none hover:bg-indigo-700"
            >
              Explore Art
            </Link>
          </Fade>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative">
          <img
            src={currentSlide.img}
            alt={currentSlide.title}
            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
