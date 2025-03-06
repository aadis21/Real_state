import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Property from "./Property";
import Contact from "./Contact";
import Insight from "./Insight";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle menu

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      <div
        className={`font-roboto font-medium transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } fixed top-0 left-0 w-full z-50`}
      >
        <nav className="bg-white shadow-md px-6 flex justify-between items-center relative">
          <NavLink to="/">
            {" "}
            <img src="/logo.png" alt="Logo" className="w-40 xsm:w-24" />
          </NavLink>

          {/* Desktop Links */}
          <ul className="hidden xsm:hidden lg:flex space-x-6 text-sm">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Property"
                end
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Property
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Aboutus"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contactus"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Insight"
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              >
                Insight
              </NavLink>
            </li>
          </ul>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/qr/S3LVDB3Y3SB3H1"
            className="hidden xsm:hidden lg:block"
          >
            <button className="bg-[#0bbf41] text-white px-4 py-2 rounded-[2px] flex items-center gap-2">
              <FaWhatsapp /> Get Quote
            </button>
          </a>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`absolute top-full left-0 w-full bg-white shadow-lg z-40 transition-all duration-300 ${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <ul className="flex flex-col items-center py-4">
              <li>
                <NavLink to="/" className="py-2 block" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Property"
                  className="py-2 block"
                  onClick={toggleMenu}
                >
                  Property
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Aboutus"
                  className="py-2 block"
                  onClick={toggleMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contactus"
                  className="py-2 block"
                  onClick={toggleMenu}
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Insight"
                  className="py-2 block"
                  onClick={toggleMenu}
                >
                  Insight
                </NavLink>
              </li>
              <a href="https://wa.me/qr/S3LVDB3Y3SB3H1" className="py-2 block">
                <button className="bg-[#0bbf41] text-white px-6 py-2 rounded-[2px] flex items-center gap-2">
                  <FaWhatsapp /> Get Quote
                </button>
              </a>
            </ul>
          </div>
        </nav>
      </div>

      <div className="mt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Property" element={<Property />} />
          <Route path="/Contactus" element={<Contact />} />
          <Route path="/Insight" element={<Insight />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
