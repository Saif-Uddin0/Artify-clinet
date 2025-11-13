import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

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
    <div className="w-full bg-indigo-600 px-6 py-15
    rounded-bl-md rounded-br-md">
      <div className="container mx-auto p-10 rounded-2xl flex flex-col md:flex-row bg-white items-center gap-10">

        {/* Left Text */}
        <div className="md:w-1/2">
          <Fade cascade damping={0.4} direction="up" triggerOnce key={currentIndex}>
            <h2 className="text-3xl xl:text-5xl font-bold text-indigo-600 mb-4">
              <Typewriter
              words={[currentSlide.title]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={30}
              delaySpeed={1000}
            ></Typewriter>
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
            className="w-full  object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
