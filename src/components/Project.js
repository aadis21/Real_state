import React from "react";
import Slider from "react-slick";
import { FaBed, FaArrowsAlt, FaBath, FaBuilding } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const card = [
  {
    image: "city-1.webp",
    heading: "Park Five by Deyaar",
    para: "United Arab Emirates",
    price: "₹20500",
    url: "Park Five by Deyaar.pdf",
  },
  {
    image: "city-2.jpg",
    heading: "Parkway by Prestige One",
    para: "United Arab Emirates",
    price: "₹20500",
    url: "Parkway by Prestige One.pdf",
  },
  {
    image: "city-3.png",
    heading: "Pelagos by IGO",
    para: "United Arab Emirates",
    price: "₹20500",
    url: "Pelagos by IGO.pdf",
  },
  {
    image: "city-4.jpg",
    heading: "Sidr Residences",
    para: "United Arab Emirates",
    price: "₹30500",
    url: "Sidr Residences.pdf",
  },
  {
    image: "city-5.jpeg",
    heading: "Sky Residences",
    para: "United Arab Emirates",
    price: "₹40500",
    url: "Sky Residences.pdf",
  },
  {
    image: "city-6.jpg",
    heading: "South Garden",
    para: "United Arab Emirates",
    price: "₹50500",
    url: "South Garden.pdf",
  },
  {
    image: "city-5.jpeg",
    heading: "The Pier residence",
    para: "United Arab Emirates",
    price: "₹40500",
    url: "The Pier residence.pdf",
  },
  {
    image: "city-5.jpeg",
    heading: "Velora and Venera at The Valley",
    para: "United Arab Emirates",
    price: "₹40500",
    url: "Velora and Venera at The Valley.pdf",
  },
];

const Project = () => {
  const settings = {
    dots: true, // Enables dots navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of cards visible at a time
    slidesToScroll: 1, // Number of cards scrolled per swipe
    responsive: [
      {
        breakpoint: 1024, // Screen width less than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Screen width less than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:px-32 md:px-5">
      <Slider {...settings}>
        {card.map((item, index) => (
          <div key={index} className="px-2">
            <div className="w-full overflow-hidden shadow-lg bg-white ">
              {/* Image Container */}
              <div className="relative group hover:cursor-pointer overflow-hidden">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-full h-[200px] object-cover hover:scale-125 transition duration-1000"
                />
                <div className="absolute top-4 right-4 hover:cursor-pointer z-10">
                  <button className="bg-[#FA6742] text-white px-2 text-sm tracking-tight">
                    For Sale
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {item.heading}
                </h2>
                <div className="flex gap-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#0085c4"
                  >
                    <path d="M480-477.61q34.2 0 58.29-24.1 24.1-24.09 24.1-58.29t-24.1-58.29q-24.09-24.1-58.29-24.1t-58.29 24.1q-24.1 24.09-24.1 58.29t24.1 58.29q24.09 24.1 58.29 24.1Zm0 405.74Q315.17-211.26 233.52-329.36q-81.65-118.1-81.65-223.6 0-153.28 98.95-244.22 98.95-90.95 229.18-90.95 130.23 0 229.18 90.95 98.95 90.94 98.95 244.22 0 105.5-81.65 223.6T480-71.87Z" />
                  </svg>
                  <p className="text-sm text-gray-400">{item.para}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between px-8 py-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <FaBed className="text-gray-400" />
                    <span className="text-gray-800">Advance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaArrowsAlt className="text-gray-400" />
                    <span className="text-gray-800">Hybrid</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <FaBath className="text-gray-400" />
                    <span className="text-gray-800">240 Hrs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaBuilding className="text-gray-400" />
                    <span className="text-gray-800">240 Hrs</span>
                  </div>
                </div>
              </div>

              {/* Enroll Button */}
              <div className="p-4 flex justify-between items-center">
                <div>
                  <span className="text-gray-400">Starts From</span>{" "}
                  <span className="text-gray-400">/</span>{" "}
                  <span className="text-[#9A7B4F] font-bold text-xl">
                    {item.price}
                  </span>
                </div>
                <a href={item.url} download>
                  <button className="px-4 py-2 rounded bg-[#9A7B4F] text-white">
                    Download
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;
