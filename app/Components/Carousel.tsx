"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import icons for arrows
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import images
import slide1 from '@/public/slide-1.jpg';
import slide2 from '@/public/slide-2.jpg';
import slide3 from '@/public/slide-3.webp';

// Custom arrow components
const NextArrow = ({ ...props }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white hover:text-gray-300`}
      style={{ ...style, display: "block", right: "20px" }}
      onClick={onClick}
    >
      <FaArrowRight size={30} />
    </div>
  );
};

const PrevArrow = ({ ...props }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-white hover:text-gray-300`}
      style={{ ...style, display: "block", left: "20px", zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowLeft size={30} />
    </div>
  );
};

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    adaptiveHeight: true,
  };

  const slides = [
    {
      image: slide1.src,
      title: "Precision Financial Solutions",
      subtitle: "Expert accounting services for your business success",
    },
    {
      image: slide2.src,
      title: "Strategic Tax Planning",
      subtitle: "Maximize savings with professional tax strategies",
    },
    {
      image: slide3.src,
      title: "Comprehensive Bookkeeping",
      subtitle: "Accurate records for informed financial decisions",
    },
  ];

  // Scroll function
  const handleScroll = () => {
    const targetSection = document.getElementById("about");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="carousel-container w-full overflow-hidden relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="w-full h-[500px] relative">
              <img
                className="w-full h-full object-cover brightness-75"
                src={slide.image}
                alt={`Slide ${index + 1}`}
                style={{height:"100%"}}
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center px-6">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl font-light drop-shadow-md max-w-2xl">
                    {slide.subtitle}
                  </p>
                  <button
                    onClick={handleScroll}
                    className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* Optional: Add custom styling for dots */}
      <style jsx>{`
        .slick-dots li button:before {
          font-size: 12px;
          color: white;
          opacity: 0.6;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #2563eb;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
