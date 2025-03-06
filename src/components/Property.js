import React, { useState } from "react";
import cityback from "../cta-bg.png";
import {
  FaRupeeSign,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaPinterest,
  FaArrowsAlt,
  FaBuilding,
  FaBed,
} from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "./Footer";

// Sample Data
const residential = [
  {
    image: "city-1.webp",
    heading: "Azura Residences by IGO",
    location: "United Arab Emirates",
    price: "7 Cr",
    area: "4500 sq ft",
    flate: "4.5 BHK + Utility",
    room: "4",
    ptype: "Apartment",
  },
  {
    image: "city-2.jpg",
    heading: "Bayz 102",
    location: "United Arab Emirates",
    price: "4.7 Cr",
    area: "2623 sq ft",
    flate: "3.5 BHK + Utility ",
    room: "3",
    ptype: "Penthouse",
  },
  {
    image: "city-3.png",
    heading: "Beach Residences at Siniya Island",
    location: "United Arab Emirates",
    price: "3 Cr",
    area: "3000 sq ft",
    flate: "3.5 BHK + Utility",
    room: "3",
    ptype: "Apartment",
  },
  {
    image: "city-4.jpg",
    heading: "Bliss Homes",
    location: "United Arab Emirates",
    price: "4 Cr",
    area: "5000 sq ft",
    flate: "3 BHK + Utility",
    room: "3",
    ptype: "Penthouse",
  },
  {
    image: "city-5.jpeg",
    heading: "Burj Azizi",
    location: "United Arab Emirates",
    price: "3 Cr",
    area: "2300 sq ft",
    flate: "2 BHK + Utility",
    room: "2",
    ptype: "Apartment",
  },
  {
    image: "city-6.jpg",
    heading: "Laya Heights",
    location: "United Arab Emirates",
    price: "6 Cr",
    area: "5000 sq ft",
    flate: "4 BHK + Utility",
    room: "4",
    ptype: "Penthouse",
  },
  {
    image: "city-5.jpeg",
    heading: "Park Five by Deyaar",
    location: "United Arab Emirates",
    price: "3 Cr",
    area: "2300 sq ft",
    flate: "2 BHK + Utility",
    room: "2",
    ptype: "Apartment",
  },
  {
    image: "city-5.jpeg",
    heading: "3 BHK Luxury 2394 SF United Arab Emirates",
    location: "United Arab Emirates",
    price: "3 Cr",
    area: "2300 sq ft",
    flate: "2 BHK + Utility",
    room: "2",
    ptype: "Apartment",
  },
  {
    image: "city-5.jpeg",
    heading: "3 BHK Luxury 2394 SF United Arab Emirates",
    location: "United Arab Emirates",
    price: "3 Cr",
    area: "2300 sq ft",
    flate: "2 BHK + Utility",
    room: "2",
    ptype: "Apartment",
  },
  {
    image: "city-2.jpg",
    heading: "Parkway by Prestige One",
    location: "United Arab Emirates",
    price: "4.7 Cr",
    area: "2623 sq ft",
    flate: "3.5 BHK + Utility ",
    room: "3",
    ptype: "Penthouse",
  },
  {
    image: "city-2.jpg",
    heading: "Pelagos by IGO",
    location: "United Arab Emirates",
    price: "4.7 Cr",
    area: "2623 sq ft",
    flate: "3.5 BHK + Utility ",
    room: "3",
    ptype: "Penthouse",
  },
  {
    image: "city-2.jpg",
    heading: "Sidr Residences",
    location: "United Arab Emirates",
    price: "4.7 Cr",
    area: "2623 sq ft",
    flate: "3.5 BHK + Utility ",
    room: "3",
    ptype: "Penthouse",
  },

  // Add more residential items here...
];

const commercial = [
  {
    image: "city-1.webp",
    heading: "Sky Residences",
    location: "United Arab Emirates",
    price: "7 Cr",
    area: "4500 sq ft",
    flate: "4.5 BHK + Utility",
    room: "4",
    ptype: "Office",
  },
  {
    image: "city-2.jpg",
    heading: "South Garden",
    location: "United Arab Emirates",
    price: "4.7 Cr",
    area: "2623 sq ft",
    flate: "3.5 BHK + Utility ",
    room: "3",
    ptype: "Land",
  },
  {
    image: "city-3.png",
    heading: "The Pier residence",
    location: "United Arab Emirates",
    price: "3 Cr",
    area: "3000 sq ft",
    flate: "3.5 BHK + Utility",
    room: "3",
    ptype: "Office",
  },
  {
    image: "city-4.jpg",
    heading: "Velora and Venera at The Valley",
    location: "United Arab Emirates",
    price: "4 Cr",
    area: "5000 sq ft",
    flate: "3 BHK + Utility",
    room: "3",
    ptype: "Land",
  },
  // {
  //   image: "city-5.jpeg",
  //   heading: "3 BHK Luxury 2394 SF United Arab Emirates",
  //   location: "United Arab Emirates",
  //   price: "3 Cr",
  //   area: "2300 sq ft",
  //   flate: "2 BHK + Utility",
  //   room: "2",
  //   ptype: "Office",
  // },
  // {
  //   image: "city-6.jpg",
  //   heading: "2 BHK 1285 SF Luxury United Arab Emirates",
  //   location: "United Arab Emirates",
  //   price: "6 Cr",
  //   area: "5000 sq ft",
  //   flate: "4 BHK + Utility",
  //   room: "4",
  //   ptype: "Land",
  // },
  // {
  //   image: "city-5.jpeg",
  //   heading: "3 BHK Luxury 2394 SF United Arab Emirates",
  //   location: "United Arab Emirates",
  //   price: "3 Cr",
  //   area: "2300 sq ft",
  //   flate: "2 BHK + Utility",
  //   room: "2",
  //   ptype: "Office",
  // },
  // {
  //   image: "city-5.jpeg",
  //   heading: "3 BHK Luxury 2394 SF United Arab Emirates",
  //   location: "United Arab Emirates",
  //   price: "3 Cr",
  //   area: "2300 sq ft",
  //   flate: "2 BHK + Utility",
  //   room: "2",
  //   ptype: "Office",
  // },
  // {
  //   image: "city-5.jpeg",
  //   heading: "3 BHK Luxury 2394 SF United Arab Emirates",
  //   location: "United Arab Emirates",
  //   price: "3 Cr",
  //   area: "2300 sq ft",
  //   flate: "2 BHK + Utility",
  //   room: "2",
  //   ptype: "Office",
  // },
  // {
  //   image: "city-2.jpg",
  //   heading:
  //     "Ultra Luxury 3.5 BHK + Utility Apartment for Sale in Sector 37D, Gurgaon",
  //   location: "United Arab Emirates",
  //   price: "4.7 Cr",
  //   area: "2623 sq ft",
  //   flate: "3.5 BHK + Utility ",
  //   room: "3",
  //   ptype: "Land",
  // },
  // {
  //   image: "city-2.jpg",
  //   heading:
  //     "Ultra Luxury 3.5 BHK + Utility Apartment for Sale in Sector 37D, Gurgaon",
  //   location: "United Arab Emirates",
  //   price: "4.7 Cr",
  //   area: "2623 sq ft",
  //   flate: "3.5 BHK + Utility ",
  //   room: "3",
  //   ptype: "Land",
  // },
  // {
  //   image: "city-2.jpg",
  //   heading:
  //     "Ultra Luxury 3.5 BHK + Utility Apartment for Sale in Sector 37D, Gurgaon",
  //   location: "United Arab Emirates",
  //   price: "4.7 Cr",
  //   area: "2623 sq ft",
  //   flate: "3.5 BHK + Utility ",
  //   room: "3",
  //   ptype: "Land",
  // },

  // Add more commercial items here...
];

const Property = () => {
  const [showAllResidential, setShowAllResidential] = useState(false);
  const [showAllCommercial, setShowAllCommercial] = useState(false);
  const [currentTab, setCurrentTab] = useState("Residential");
  const [residentialFilter, setResidentialFilter] = useState("");
  const [commercialFilter, setCommercialFilter] = useState("");

  // Filtered Lists
  const filteredResidential = residentialFilter
    ? residential.filter((item) => item.ptype === residentialFilter)
    : residential;

  const filteredCommercial = commercialFilter
    ? commercial.filter((item) => item.ptype === commercialFilter)
    : commercial;

  return (
    <div className="font-roboto xsm:overflow-hidden xsm:-mt-10">
      {/* Header Section */}
      <div className="bg-[#9A7B4F] w-full h-full flex items-center flex-col p-4 gap-2">
        <h1 className="text-3xl tracking-wider text-white xsm:text-base">
          Property List
        </h1>
        <p className="text-white text-xs tracking-wider xsm:text-[10px]">
          <NavLink to="/" className="text-white">
            HOME
          </NavLink>
          / PROPERTY LIST
        </p>
        <ul className="flex no-underline gap-3">
          <li className="bg-white p-2 rounded">
            <FaFacebook className="text-blue-900" />
          </li>
          <li className="bg-white p-2 rounded">
            <FaWhatsapp className="text-green-500" />
          </li>
          <li className="bg-white p-2 rounded">
            <FaLinkedin className="text-blue-600" />
          </li>
          <li className="bg-white p-2 rounded">
            <FaPinterest className="text-red-700" />
          </li>
        </ul>
      </div>

      {/* Tabs Section */}
      <div className="px-32 xsm:px-12 py-4 flex gap-4">
        <button
          className={`px-4 py-2 rounded ${
            currentTab === "Residential"
              ? "bg-[#9A7B4F] text-white"
              : "bg-gray-300"
          }`}
          onClick={() => setCurrentTab("Residential")}
        >
          Residential
        </button>
        <button
          className={`px-4 py-2 rounded ${
            currentTab === "Commercial"
              ? "bg-[#9A7B4F] text-white"
              : "bg-gray-300"
          }`}
          onClick={() => setCurrentTab("Commercial")}
        >
          Commercial
        </button>
      </div>

      {/* Filter Section */}
      <div className="px-32 xsm:px-10 py-4 flex justify-end">
        {currentTab === "Residential" && (
          <select
            className="border border-gray-300 rounded px-4 py-2 text-gray-700"
            onChange={(e) => setResidentialFilter(e.target.value)}
            value={residentialFilter}
          >
            <option value="">All Residential</option>
            <option value="Apartment">Apartment</option>
            <option value="Penthouse">Penthouse</option>
          </select>
        )}
        {currentTab === "Commercial" && (
          <select
            className="border border-gray-300 rounded px-4 py-2 text-gray-700"
            onChange={(e) => setCommercialFilter(e.target.value)}
            value={commercialFilter}
          >
            <option value="">All Commercial</option>
            <option value="Land">Land</option>
            <option value="Office">Office</option>
          </select>
        )}
      </div>

      {/* Property List Section */}
      <div className="px-32 xsm:px-10 xsm:py-5 py-10 flex flex-col gap-10">
        {currentTab === "Residential" &&
          filteredResidential
            .slice(0, showAllResidential ? filteredResidential.length : 4)
            .map((item, index) => (
              <div
                key={index}
                className="flex xsm:flex-col xsm:gap-2 gap-5 shadow-md hover:shadow-xl transition-all duration-700"
              >
                <div className="relative group hover:cursor-pointer overflow-hidden xsm:w-full w-[35%]">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-full object-cover hover:scale-125 transition duration-1000 shadow-inner"
                  />
                  <div className="absolute top-4 right-4 hover:cursor-pointer z-10 flex gap-2">
                    <p className="bg-[#9A7B4F] text-white xsm:text-xs px-[9px] py-[3px] text-sm  tracking-tight items-center rounded-[2px]">
                      {item.ptype}
                    </p>
                    <p className="bg-[#FA6742] text-white xsm:text-xs px-[9px] py-[3px] text-sm tracking-tight items-center rounded-[2px]">
                      Sale
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 p-4">
                  <h1 className="text-lg font-medium xsm:text-sm">
                    {item.heading}
                  </h1>
                  <p className="flex gap-1 text-sm text-gray-400 xsm:text-xs">
                    <FaLocationDot className="text-[#9A7B4F] xsm:text-xs text-lg" />
                    {item.location}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <p className="flex items-center gap-1 xsm:text-xs">
                      <FaRupeeSign className="text-[#9A7B4F]" />
                      {item.price}
                    </p>
                    <p className="flex items-center gap-1 xsm:text-xs">
                      <FaArrowsAlt className="text-[#9A7B4F]" />
                      {item.area}
                    </p>
                    <p className="flex items-center gap-1 xsm:text-xs">
                      <FaBuilding className="text-[#9A7B4F]" />
                      {item.flate}
                    </p>
                    <p className="flex items-center gap-1 xsm:text-xs">
                      <FaBed className="text-[#9A7B4F]" />
                      {item.room}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <button className="bg-[#0bbf41] xsm:text-xs text-white flex items-center px-3 rounded-[3px] py-2 gap-1">
                      <FaWhatsapp className="text-white" />
                      Quote
                    </button>
                    <button className="bg-[#9A7B4F] xsm:text-xs text-white flex items-center px-3 rounded-[3px] py-2 gap-1">
                      <IoCallSharp className="text-white" />
                      Call Us
                    </button>
                    <button className="bg-[#9A7B4F] xsm:text-xs text-white flex items-center px-3 rounded-[3px] py-2 gap-1">
                      <FaLink className="text-white" />
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
        {currentTab === "Commercial" &&
          filteredCommercial
            .slice(0, showAllCommercial ? filteredCommercial.length : 4)
            .map((item, index) => (
              <div
                key={index}
                className="flex gap-5 shadow-md hover:shadow-xl transition-all duration-700"
              >
                <div className="relative group hover:cursor-pointer overflow-hidden w-[35%]">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-full object-cover hover:scale-125 transition duration-1000 shadow-inner"
                  />
                  <div className="absolute top-4 right-4 hover:cursor-pointer z-10 flex gap-2">
                    <p className="bg-[#9A7B4F] text-white px-[9px] py-[3px] text-sm tracking-tight items-center rounded-[2px]">
                      {item.ptype}
                    </p>
                    <p className="bg-[#FA6742] text-white px-[9px] py-[3px] text-sm tracking-tight items-center rounded-[2px]">
                      Sale
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 p-4">
                  <h1 className="text-lg font-medium">{item.heading}</h1>
                  <p className="flex gap-1 text-sm text-gray-400">
                    <FaLocationDot className="text-[#9A7B4F] text-lg" />
                    {item.location}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <p className="flex items-center gap-1">
                      <FaRupeeSign className="text-[#9A7B4F]" />
                      {item.price}
                    </p>
                    <p className="flex items-center gap-1">
                      <FaArrowsAlt className="text-[#9A7B4F]" />
                      {item.area}
                    </p>
                    <p className="flex items-center gap-1">
                      <FaBuilding className="text-[#9A7B4F]" />
                      {item.flate}
                    </p>
                    <p className="flex items-center gap-1">
                      <FaBed className="text-[#9A7B4F]" />
                      {item.room}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <button className="bg-[#0bbf41] text-white flex items-center px-3 rounded-[3px] py-2 gap-1">
                      <FaWhatsapp className="text-white" />
                      Quote
                    </button>
                    <button className="bg-[#9A7B4F] text-white flex items-center px-3 rounded-[3px] py-2 gap-1">
                      <IoCallSharp className="text-white" />
                      Call Us
                    </button>
                    <button className="bg-[#9A7B4F] text-white flex items-center px-3 rounded-[3px] py-2 gap-1">
                      <FaLink className="text-white" />
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="px-32 py-4">
        {currentTab === "Residential" && (
          <button
            className="px-4 py-2 xsm:text-xs bg-[#9A7B4F] text-white rounded"
            onClick={() => setShowAllResidential(!showAllResidential)}
          >
            {showAllResidential ? "Show Less" : "Show More"}
          </button>
        )}
        {currentTab === "Commercial" && (
          <button
            className="px-4 py-2 bg-[#9A7B4F] text-white rounded"
            onClick={() => setShowAllCommercial(!showAllCommercial)}
          >
            {showAllCommercial ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
      {/* Bottom CTA Section */}
      <div className="bg-[#9A7B4F] mt-10 text-white text-center py-16 relative">
        <div
          className="absolute bottom-0 left-0 right-0 opacity-90 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cityback})`, height: "100%" }}
        ></div>

        <div className="relative z-10 flex lg:flex-row xsm:flex-col md:flex-col md:gap-10 md:px-10 xsm:gap-10 xsm:px-8 justify-center gap-32">
          <div className=" text-start">
            <h2 className="text-4xl xsm:text-base font-bold">
              Find Your Dream Property Today <br /> — Let’s Get Started!
            </h2>
            <p className="mt-4 text-lg text-[#d1d5db] xsm:text-xs">
              Start your real estate journey with us now and discover the
              perfect <br /> property that suits your lifestyle and budget.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <button className=" bg-white  text-black px-3 py-2 text-sm font-bold  rounded-full shadow-lg hover:bg-[#f5f3f1] transition duration-300">
              FIND NOW! →
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Property;
