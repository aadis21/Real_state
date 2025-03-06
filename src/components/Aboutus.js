import React from "react";
import { NavLink } from "react-router-dom";
import { FaPinterest } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { PiBuildings } from "react-icons/pi";
import Footer from "./Footer";
import background from "../about-banner.jpg";
import cityback from "../cta-bg.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaStar, FaCamera, FaShieldAlt, FaGlobe } from "react-icons/fa";
const Aboutus = () => {
  const teamMembers = [
    {
      name: "Mr. Ukshil Jain",
      position: "Founder",
      image: "Ukshil.jpg",
    },
    {
      name: "Mr. Sachin Panwar",
      position: "Founder",
      image: "Sachin.jpg",
    },
    {
      name: "Mr. Harpreet Singh",
      position: "Co-Founder",
      image: "Harpreet.jpg",
    },
    {
      name: "Mr. Rumaan Arif",
      position: "Sales Manager",
      image: "rumman.jpg",
    },
    {
      name: "Mr. akhil Baig",
      position: "Sales Manager",
      image: "akhil.jpg",
    },
  ];
  const values = [
    {
      title: "Professionalism & Expertise",
      description:
        "Delivering top-tier real estate services with unmatched expertise and professionalism.",
      icon: <FaStar />,
    },
    {
      title: "Customer Centric & Post Sales",
      description:
        "Ensuring a seamless and personalized experience, from initial inquiry to post-sale support.",
      icon: <FaCamera />,
    },
    {
      title: "Trust & Integrity",
      description:
        "Building strong, trustworthy relationships through integrity and honest communication.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Transparency",
      description:
        "Maintaining complete transparency in all transactions, fostering client confidence and satisfaction.",
      icon: <FaGlobe />,
    },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaWhatsapp />, link: "#" },
  ];
  const stats = [
    { number: "400+", text: "Projects" },
    { number: "150+", text: "Developers" },
    { number: "120+", text: "Customers" },
    { number: "100M+", text: "AED Worth Properties Sold" },
  ];
  return (
    // <div className="overflow-hidden">
    //   <div className=" bg-[#9A7B4F] mt-8 w-full h-full flex items-center flex-col p-4 gap-2">
    //     <h1 className=" text-3xl tracking-wide text-white">About Us</h1>
    //     <p className="text-white text-xs tracking-wider">
    //       <NavLink to="/" className="text-white">
    //         HOME
    //       </NavLink>{" "}
    //       / ABOUT US
    //     </p>
    //     <ul className="flex no-underline gap-3">
    //       <li className="bg-white p-2 rounded">
    //         <FaFacebook className="text-blue-900" />
    //       </li>
    //       <li className="bg-white p-2 rounded">
    //         <FaWhatsapp className="text-green-500" />
    //       </li>
    //       <li className="bg-white p-2 rounded">
    //         <FaLinkedin className="text-blue-600" />
    //       </li>
    //       <li className="bg-white p-2 rounded">
    //         <FaPinterest className="text-red-700" />
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="lg:flex xl:flex 2xl:flex xsm:flex-col  xsm:px-4 xsm:gap-4 px-20 py-10 gap-8">
    //     <div className="flex flex-col gap-10 lg:w-1/2 md:w-full xsm:w-full ">
    //       <h1 className="text-3xl md:text-4xl xsm:text-xl font-bold">CCS Real Estate Pvt Ltd</h1>
    //       <p className="text-wrap md:text-xl xsm:text-sm xsm:text-justify">
    //         CCS Real Estate Private Limited. A Certified Real Estate Company is
    //         a <br /> Paramount in the real estate realm with an Experience of 5+
    //         years. <br />
    //         CCS is a pioneer amongst professional Real Estate Consulting company{" "}
    //         <br />
    //         in Chandigarh (Tricity) India , has served premium corporate in
    //         domestic <br /> arena. CCS is committed to offer Advanced and
    //         New-Fangled approach <br /> with Technical Strategies to help out
    //         Our Customers with Satisfactory <br /> Investments.
    //       </p>
    //       <div className="flex justify-center gap-10 mr-8 mt-10 ">
    //         <div className="flex flex-col gap-3 xsm:gap-0 items-center justify-center">
    //           <FaRegUser className="md:text-4xl xsm:text-xl text-[#9A7B4F]" />{" "}
    //           <h1 className="font-semibold md:text-3xl xsm:text-xl">5</h1>
    //           <p className="xsm:text-xs xsm:text-center">year of experience</p>
    //         </div>
    //         <div className="flex flex-col gap-3 xsm:gap-0 items-center justify-center">
    //           <SlLike className="md:text-4xl xsm:text-xl text-[#9A7B4F]" />{" "}
    //           <h1 className="font-semibold xsm:text-xl md:text-3xl">3020</h1>
    //           <p className="xsm:text-xs xsm:text-center">Happy Customers</p>
    //         </div>
    //         <div className="flex flex-col xsm:gap-0 gap-3 items-center justify-center">
    //           <PiBuildings className="md:text-4xl xsm:text-xl text-[#9A7B4F]" />{" "}
    //           <h1 className="font-semibold xsm:text-xl md:text-3xl">1535</h1>
    //           <p className="xsm:text-xs xsm:text-center">Property Sold</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex gap-8">
    //       <div className="flex flex-col gap-5 relative top-8">
    //         <div className="text-white bg-[#9A7B4F] shadow-2xl p-8 gap-1 flex flex-col rounded w-full">
    //           <img src="property.png" alt="" className="w-16 xsm:w-8" />
    //           <h1 className=" font-bold text-xl xsm:text-base">Personalized Service</h1>
    //           <p className="xsm:text-xs">We helps to find property in prime location</p>
    //         </div>
    //         <div className="text-black bg-white shadow-2xl p-8 gap-1 flex flex-col rounded w-full">
    //           <img src="rent_2.png" alt="" className="w-16 xsm:w-8" />
    //           <h1 className=" font-bold text-xl xsm:text-base">Loan Facility</h1>
    //           <p className="xsm:text-xs">Helps to provide loan for buying property</p>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-5">
    //         <div className="text-black bg-white shadow-2xl p-8 gap-1 flex flex-col rounded w-[90%]">
    //           <img src="customer_2.png" alt="" className="w-16 xsm:w-8" />
    //           <h1 className=" font-bold text-xl xsm:text-base">Fully Support</h1>
    //           <p className="xsm:text-xs">
    //             Fully support For Finding And Buy Process Pof Property
    //           </p>
    //         </div>
    //         <div className="text-white bg-[#FA6742] shadow-2xl p-8 gap-1 flex flex-col rounded w-[90%]">
    //           <img src="deal.png" alt="" className="w-16 xsm:w-8" />
    //           <h1 className=" font-bold text-xl xsm:text-base">Trusted by thousands.</h1>
    //           <p className="tracking-tighter xsm:text-xs">
    //             There are Many Kind of People Satisfy with us
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-16 p-5 flex flex-col items-center lg:flex-row justify-center">
    //     {/* Left Section (Image) */}
    //     <div className="relative z-10 lg:w-1/2 ml-10 md:ml-0 xsm:ml-0 xsm:w-full">
    //       <img
    //         src="Team.jpeg"
    //         alt="City View"
    //         className="w-full lg:w-[90%] shadow-lg"
    //       />
    //     </div>

    //     {/* Right Section (Content) */}
    //     <div className="bg-gray-100 lg:w-[90%] p-20 xsm:p-10 relative z-0 mt-8 lg:mt-0 lg:ml-[-6rem]">
    //       {/* Title Section */}

    //       <h1 className="text-3xl lg:text-4xl xsm:text-xl text-[#9A7B4F] font-semibold mb-6">
    //         Who We are
    //       </h1>

    //       {/* Features Section */}
    //       <div className="space-y-6 xsm:text-sm">
    //         CCS Group was established in January, 2017 and it is involved in
    //         real estate activates with own or leased property. We specialize in
    //         Residential and commercial real estate and can help you In finding
    //         suitable Apartments, Flats, Villas, plots, office space, showrooms,
    //         factories etc. Our experts can consult you on investment in real
    //         estate for assured returns. We can also take care of real estate
    //         liaison work. It's our belief to do business with full integrity and
    //         commitment. CCS Is one of the fastest growing companies in the
    //         region. We are focusing on performing and delivering. It's our
    //         belief to do business with full integrity and commitment. We
    //         specialize in offering Proficient Consultation Services
    //         Professionally & Independently to Investors World widely."
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-full items-baseline bg-white py-10 px-6 lg:px-32">
    //     {/* Vision Section */}
    //     <div className="text-center mb-12">
    //       <h1 className="text-2xl font-bold text-[#9A7B4F] xsm:text-base mb-4">Vision</h1>
    //       <p className="text-gray-700 leading-relaxed xsm:text-xs">
    //         Our Vision is to build a new trademark in real estate and provide
    //         Epic Property as the first choice of every property finder. To
    //         become India’s largest real estate’s service organization, our
    //         vision is to facilitate asset creation for our end customers and
    //         enable peace & prosperity for them.
    //       </p>
    //     </div>
    //     {/* Mission Section */}
    //     <div className="text-center">
    //       <h1 className="text-2xl font-bold text-[#9A7B4F] mb-4 xsm:text-base">Mission</h1>
    //       <p className="text-gray-700 leading-relaxed mb-6 xsm:text-xs">
    //         CCS provides our clients with the very best service in all aspects
    //         of residential and commercial property, whether we are handling
    //         their sale or purchase personally or connecting them to one of our
    //         associated property experts for particular service. We believe in
    //         customers for life, being there for our clients throughout our
    //         journey in business. The best interest of our clients will always
    //         come first, and we will place the client's concerns ahead of our own
    //         in each and every transaction, as we are dedicated to the
    //         development of long-term client relationships.
    //       </p>
    //       <p className="text-gray-800 font-semibold">
    //         We are changing the real estate industry with Progression and
    //         Passion.
    //       </p>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
    <div className="mt-16 xsm:-mt-10 xsm:overflow-hidden">
      <div
        className="h-[400px] flex bg-cover  bg-center items-center justify-center relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Gradient Overlay from Bottom to Top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

        {/* Text Content */}
        <div className="z-10 bg-black bg-opacity-25  h-full w-full flex items-center justify-center">
          <h1 className="text-5xl xsm:text-base font-bold text-white">
            About Us
          </h1>
        </div>
      </div>
      <div className="container xsm:w-full mx-auto xsm:mx-0 md:px-16 lg:px-32 xl:px-32  xsm:px-5 xsm:mt-5 xsm:py-5 mt-10 lg:py-16 xl:py-16 ">
        <div className="flex lg:flex-row  xsm:flex-col md:flex-col flex-row items-start justify-between gap-12">
          <div className="lg:w-1/2 xl:w-1/2 md:w-full xsm:w-full space-y-6 xsm:pr-0 xsm:space-y-0 pr-4">
            <h1 className="text-6xl xsm:text-base font-bold text-gray-900">
              We Are 7DRE
            </h1>

            <p className="text-gray-700 text-lg xsm:text-[10px] ">
              As a premier real estate agent operating in the UAE, our primary
              focus is on delivering unparalleled customer satisfaction. We
              understand that finding the perfect property is a significant
              milestone, whether it's a luxurious villa in Dubai, a modern
              apartment in Abu Dhabi, a serene home in Sharjah or an exclusive
              sea view penthouse in Ras Al-Khaimah.
            </p>

            <p className="text-gray-700 text-lg xsm:text-[10px]">
              Our dedicated team takes the time to understand each client's
              unique needs, preferences, and budget, ensuring a personalized
              experience from start to finish.
            </p>

            <p className="text-gray-700 text-lg xsm:text-[10px]">
              With an extensive portfolio of properties and a deep understanding
              of the local market, we provide expert guidance and support
              throughout the entire process, making your real estate journey
              seamless and stress- free. Your dream home is our top priority,
              and we're committed to turning your vision into reality.
            </p>

            <button className="bg-[#9A7B4F] text-white px-6 py-3 xsm:px-2 xsm:text-xs xsm:py-1 rounded-lg flex items-center space-x-2 hover:bg-blue-800 transition-colors">
              <span>JOIN US!</span>
              <span>→</span>
            </button>
          </div>

          <div className="lg:w-1/2 xl:w-1/2 md:w-full md:pl-0 xsm:w-full xsm:pl-0 lg:pl-4">
            <div className=" rounded-lg overflow-hidden">
              <img
                src="about-img-1.png"
                alt="Excited real estate team celebrating success"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 xsm:py-8">
        <h2 className="text-4xl xsm:text-base font-bold text-center mb-10">
          Our Team
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 xsm:px-10 px-32">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <h3 className="mt-5 text-xl xsm:text-sm font-bold">
                {member.name}
              </h3>
              <p className="text-gray-600 xsm:text-xs">{member.position}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-3">
                {socialIcons.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="w-10 h-10 flex items-center justify-center rounded-full shadow-md bg-white hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16 xsm:py-8 xsm:px-10 px-32 bg-[#f5f3f1]">
        <h2 className="text-4xl xsm:text-base font-bold text-center">
          Core Values
        </h2>
        <p className="text-center xsm:text-xs text-gray-600 mb-10">
          At our core, X , Y , and Z drive everything we do.
        </p>

        <div className="grid xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-center gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative hover:bg-[#9A7B4F] transition-all duration-300 hover:text-white bg-[#f4f0ef] max-w-[350px] p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-lg shadow-lg mx-auto">
                <span className="text-2xl text-black">{value.icon}</span>
              </div>
              <h3 className="mt-5 xsm:text-sm font-bold text-lg">
                {value.title}
              </h3>
              <p className=" mt-2 xsm:text-xs">{value.description}</p>
              <div className="absolute bottom-[-20px] left-[50%] translate-x-[-50%] w-6 h-6 bg-[#f4f0ef] rotate-45"></div>
            </div>
          ))}
        </div>

        {/* Dotted Timeline */}
        <div className="flex  justify-center items-center mt-10">
          <div className="flex gap-20">
            {values.map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                {index < values.length && (
                  <div className="w-[100px] h-[1px] bg-gray-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {/* Top Stats Section */}
        <div className="bg-[#dcdbd2] py-20 xsm:px-10 xsm:py-8 px-32 grid xsm:grid-cols-1 md:grid-cols-4 md:gap-10 lg:grid-cols-4 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="lg:text-5xl md:text-2xl xsm:text-base font-bold">
                {item.number}
              </h3>
              <p className="text-gray-600 lg:text-base xsm:text-xs md:text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-[#9A7B4F] text-white text-center py-16 relative">
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
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
