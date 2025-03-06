import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Newsletter Subscription */}
          <div className="w-full md:w-1/4">
            <div className="mb-6">
              <p className="text-gray-800 mb-2">
                Stay informed about upcoming new launches!
              </p>
              <p className="text-gray-700 mb-4">
                Subscribe to our Newsletter and WhatsApp Broadcast for the
                latest updates.
              </p>

              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Your mobile number"
                  className="px-4 md:px-2 md:py-1 py-2 bg-gray-100 rounded-l-lg w-full"
                />
                <button className="bg-blue-900 text-white md:px-2 md:py-1 px-4 py-2 rounded-r-lg whitespace-nowrap flex items-center">
                  SUBSCRIBE
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            <div className="flex space-x-4 md:space-x-2">
              {/* Social icons unchanged */}
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="w-8 h-8 inline-flex items-center justify-center border border-gray-300 rounded-full">
                  f
                </span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="w-8 h-8 inline-flex items-center justify-center border border-gray-300 rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                  </svg>
                </span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="w-8 h-8 inline-flex items-center justify-center border border-gray-300 rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="w-8 h-8 inline-flex items-center justify-center border border-gray-300 rounded-full">
                  in
                </span>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <span className="w-8 h-8 inline-flex items-center justify-center border border-gray-300 rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/4 mt-6 md:mt-0">
            <h3 className="font-semibold text-gray-900 mb-4">Useful links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-900"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Property"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-900"
                  }
                >
                  Property
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Aboutus"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-900"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contactus"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-900"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Insight"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-900"
                  }
                >
                  Insight
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div className="w-full md:w-1/4 mt-6 md:mt-0">
            <h3 className="font-semibold text-gray-900 mb-4">Other links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  Privacy-Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-900">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/4 mt-6 md:mt-0">
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex">
                <span className="text-blue-900 mr-2 flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>
                </span>
                <p className="text-gray-700">
                  ADDRESS : 4-M17 ,M-2 BN COMPLEX , AL MUTEENA DEIRA
                  , DUBAI , UAE
                </p>
              </div>

              <div className="flex">
                <span className="text-blue-900 mr-2 flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                  </svg>
                </span>
                <div>
                  <Link to="callto:+971582450101,+971552959123">
                    +971582450101, +971552959123
                  </Link>
                </div>
              </div>

              <div className="flex">
                <span className="text-blue-900 mr-2 flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                  </svg>
                </span>
                <Link to="mailto:support@alketbirealestate.com">
                  Email: support@alketbirealestate.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-2 pt-8 border-t border-gray-200 flex  md:flex-row justify-center items-center">
          <div className="text-gray-600">
            © Saeed Alketbi & Ahmad Real Estate LLC 2025.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
