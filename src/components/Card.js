import React from "react";
import { FaBed, FaBath, FaArrowsAlt, FaBuilding } from "react-icons/fa";

const Card = ({ heading, para, price, image, url }) => {
  return (
    <div className="w-full sm:w-[90%] max-w-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-1000 rounded-lg">
      {/* Image Container with Hover Effect */}
      <div className="relative group hover:cursor-pointer overflow-hidden">
        <img
          src={image}
          alt={heading}
          className="w-full h-64 object-cover hover:scale-110 transition duration-1000"
        />

        {/* Sale Tag */}
        <div className="absolute top-4 right-4 z-10">
          <button className="bg-[#FA6742] text-white px-2 py-1 text-sm rounded">
            For Sale
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          {heading}
        </h2>
        <div className="flex gap-2 p-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#0085c4"
          >
            <path d="M480-477.61q34.2 0 58.29-24.1 24.1-24.09 24.1-58.29t-24.1-58.29q-24.09-24.1-58.29-24.1t-58.29 24.1q-24.1 24.09-24.1 58.29t24.1 58.29q24.09 24.1 58.29 24.1Zm0 405.74Q315.17-211.26 233.52-329.36q-81.65-118.1-81.65-223.6 0-153.28 98.95-244.22 98.95-90.95 229.18-90.95 130.23 0 229.18 90.95 98.95 90.94 98.95 244.22 0 105.5-81.65 223.6T480-71.87Z" />
          </svg>
          <p className="text-sm text-gray-500">{para}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-between px-4 pb-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center space-x-2">
            <FaBed className="text-gray-400" />
            <span className="text-gray-800 text-sm">Advance</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaArrowsAlt className="text-gray-400" />
            <span className="text-gray-800 text-sm">Hybrid</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center space-x-2">
            <FaBath className="text-gray-400" />
            <span className="text-gray-800 text-sm">240 Hrs</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaBuilding className="text-gray-400" />
            <span className="text-gray-800 text-sm">240 Hrs</span>
          </div>
        </div>
      </div>

      {/* Enroll Button */}
      <div className="p-4 flex flex-wrap justify-between items-center">
        <div>
          <span className="text-gray-500">Starts From </span>
          <span className="text-[#9A7B4F] font-bold text-lg sm:text-xl">
            {price}
          </span>
        </div>
        <a href={url} download>
          <button className="px-4 py-2 rounded bg-[#9A7B4F] text-white text-sm sm:text-base">
            Download
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
