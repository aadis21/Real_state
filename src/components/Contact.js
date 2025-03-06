import React, { useState } from "react";
import cityback from "../cta-bg.png";
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaPinterest,
  FaUser,
  FaTag,
} from "react-icons/fa";
import { FaLocationDot, FaBuilding, FaRegFlag } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { IoMail } from "react-icons/io5";
import Footer from "./Footer";
// Map configuration
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 30.7046, // Latitude for Chandigarh, India
  lng: 76.7179, // Longitude for Chandigarh, India
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    city: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://your-api-endpoint.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          city: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <div className="font-roboto xsm:overflow-hidden xsm:-mt-10">
      {/* Header Section */}
      <div className="bg-[#003550] w-full h-full pt-10 flex items-center flex-col p-4 gap-2">
        <h1 className="text-3xl tracking-wide text-white">Contact Us</h1>
        <p className="text-white text-xs tracking-wider">
          <NavLink to="/" className="text-white">
            HOME
          </NavLink>
          / CONTACT US
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

      {/* Contact Section */}
      <div className="px-20 xsm:px-0 md:px-0">
        <div className="flex xsm:flex-col xsm:gap-5 xsm:p-5 justify-center p-10 items-center">
          {/* Head Office Details */}
          <div className="flexx flex-col gap-3 w-[50%] xsm:w-full">
            <h1 className="font-semibold text-2xl py-4 text-start">
              Head Office
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-[#003550] p-2 text-center rounded-[3px]">
                  <FaLocationDot className="text-white text-lg" />
                </div>
                4-M17 ,M-2 BN COMPLEX , AL MUTEENA DEIRA
                <div className="flex items-center gap-2">
                  <div className="bg-[#003550] p-2 text-center rounded-[3px]">
                    <FaBuilding className="text-white text-lg" />
                  </div>
                  DUBAI , UAE
                </div>
              </div>
              {/* <div className="flex items-center gap-2">
                <div className="bg-[#003550] p-2 text-center rounded-[3px]">
                  <FaRegFlag className="text-white text-lg" />
                </div>
                Postal Code - 160002, India
              </div> */}
              <div className="flex items-center gap-2">
                <div className="bg-[#003550] p-2 text-center rounded-[3px]">
                  <FaWhatsapp className="text-white text-lg" />
                </div>
                Whatsapp :+971552959123
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#003550] p-2 text-center rounded-[3px]">
                  <IoCallSharp className="text-white text-lg" />
                </div>
                +971582450101,+971552959123
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#003550] p-2 text-center rounded-[3px]">
                  <MdAlternateEmail className="text-white text-lg" />
                </div>
                Email: support@alketbirealestate.com
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="map w-[50%] xsm:w-full">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
              >
                {/* Optional: Add markers or other map features here */}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>

        <div className="p-10">
          <h1 className="text-2xl font-bold text-center mb-6">
            Submit Enquiry
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Name Field */}
            <div className="flex items-center border border-gray-300 rounded px-3">
              <i className="  mr-3">
                <FaUser />
              </i>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full outline-none py-2"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center border border-gray-300 rounded px-3">
              <i className=" mr-3">
                <IoMail />
              </i>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID"
                className="w-full outline-none py-2"
                required
              />
            </div>

            {/* Contact Field */}
            <div className="flex items-center border border-gray-300 rounded px-3">
              <i className=" mr-3">
                <IoCallSharp />
              </i>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact No"
                className="w-full outline-none py-2"
                required
              />
            </div>

            {/* City Field */}
            <div className="flex items-center border border-gray-300 rounded px-3">
              <i className="  mr-3">
                <FaLocationDot />
              </i>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full outline-none py-2"
                required
              />
            </div>

            {/* Subject Field */}
            <div className="flex items-center border border-gray-300 rounded px-3 md:col-span-2">
              <i className=" mr-3">
                <FaTag />
              </i>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full outline-none py-2"
                required
              />
            </div>

            {/* Message Field */}
            <div className="md:col-span-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full border border-gray-300 rounded outline-none py-2 px-3"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#003550] text-white px-6 py-2 rounded hover:bg-blue-600 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Bottom CTA Section */}
      <div className="bg-[#003550] mt-10 text-white text-center py-16 relative">
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

export default Contact;
