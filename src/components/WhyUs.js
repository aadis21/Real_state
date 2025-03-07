import React from 'react'
import { BsClipboardData, BsGraphUp, BsBuilding, BsKey } from "react-icons/bs";
import { FaHome, FaKey, FaMoneyBillWave, FaBriefcase, FaShoppingBag, FaComments } from "react-icons/fa";
import Footer from './Footer';
import cityback from "../cta-bg.png";

const WhyUs = () => {
  const steps = [
    {
      number: "01",
      title: "Understanding Requirements",
      description:
        "At 7DRE, we gather information about their specific requirements, including budget, preferred location, property type, size, amenities, and any other preferences.",
      icon: <BsClipboardData />,
    },
    {
      number: "02",
      title: "Market Analysis",
      description:
        "7DRE conducts a comprehensive market analysis to identify suitable properties that match the customer's criteria.",
      icon: <BsGraphUp />,
    },
    {
      number: "03",
      title: "Property Selection",
      description:
        "Based on the customer's preferences, 7DRE presents a curated selection of properties for review.",
      icon: <BsBuilding />,
    },
    {
      number: "04",
      title: "Viewings",
      description:
        "7DRE arranges property viewings for the customer to explore selected properties firsthand.",
      icon: <BsKey />,
    },
  ];
  const services = [
    {
      title: "Buy",
      description:
        "Unlock your dream home with our tailored buying service. From consultation to closing, we guide you through every step, ensuring a seamless and satisfying property purchase experience.",
      icon: <FaHome />,
    },
    {
      title: "Sell",
      description:
        "Ready to sell your property? Trust our seasoned experts to maximize your return. From strategic marketing to seamless transactions, we handle it all.",
      icon: <FaKey />,
    },
    {
      title: "Rental",
      description:
        "Turn your property into profit with ease. Our rental service handles everything from listing to tenant screening, ensuring a hassle-free experience and maximizing your rental income.",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Mortgage Assistance",
      description:
        "Navigate the complexities of mortgages effortlessly with our expert assistance. From finding the best rates to securing approvals, we guide you every step of the way.",
      icon: <FaBriefcase />,
    },
    {
      title: "Portfolio Management",
      description:
        "Portfolio Management Service involves overseeing and optimizing an individual’s or investor’s entire real estate portfolio.",
      icon: <FaShoppingBag />,
    },
    {
      title: "Post Sales Service",
      description:
        "Post-sales service includes comprehensive support such as providing essential documentation, visa assistance, and property management.",
      icon: <FaComments />,
      bg: "bg-[#9A7B4F] text-white",
    },
  ];
  

  return (
    <div className=" overflow-hidden">
      <div className="bg-[#f9f6f6] py-20 xsm:py-7 md:py-10 flex flex-col items-center">
        <div className="max-w-6xl md:w-[70%] xsm:w-[70%] mx-auto rounded-2xl overflow-hidden shadow-lg">
          <img
            src="why-us-banner.png"
            alt="Dubai Skyline"
            className="w-full object-cover rounded-t-2xl"
          />
        </div>
        <div className="p-10 xsm:flex-col lg:flex md:flex-col justify-center items-center">
          <h2 className="text-4xl font-extrabold mb-6 xsm:text-sm xsm:w-full w-[40%]">Why 7DRE</h2>
          <p className="text-lg text-gray-700 xsm:w-full xsm:text-xs text-justify leading-relaxed w-[40%]">
            At 7DRE, we put you first. Our customer-centric approach ensures your needs are our priority.
            With research-driven analysis, we tailor solutions to match your goals. From property selection
            to post-sale support, we’re here for you every step of the way!
          </p>
        </div>
      </div>

      <div className="max-w-6xl xsm:px-5 mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={` flex items-center xsm:justify-center justify-${
                index % 2 === 0 ? "start" : "end"
              } mb-16 relative`}
            >
              <div className='group  flex items-center'>
              <div
                className={` w-16 h-16 rounded-full bg-[#9A7B4F] xsm:hidden text-white flex items-center justify-center xsm:text-xs text-2xl cursor-pointer group-hover:bg-[#d6d3cf] transition duration-300`}
              >
                {step.icon}
              </div>
              <div
                className={`max-w-md bg-gray-100 xsm:p-3 xsm:w-full p-6 rounded-lg shadow-md group-hover:bg-[#d6d3cf] transition duration-300 ${
                  index % 2 === 0 ? "" : "mr-8"
                }`}
              >
                <h3 className="text-xl xsm:text-xs font-bold text-[#9A7B4F]">
                  {step.number}
                </h3>
                <h4 className="font-semibold xsm:text-xs">{step.title}</h4>
                <p className="text-sm text-gray-700 xsm:text-xs mt-2">{step.description}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#f5f2f2] px-10 py-20">
      <div className="text-center">
        <h2 className="text-4xl xsm:text-sm font-extrabold mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 xsm:text-xs max-w-2xl mx-auto">
          Expert real estate services for buying, selling, and renting properties in the UAE
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={` group p-8 rounded-lg shadow-lg bg-white transition duration-300 hover:bg-[#9A7B4F] hover:text-white `}
          >
            <div className={`w-14 xsm:w-7 xsm:h-7 h-14 flex items-center justify-center group-hover:bg-white group-hover:text-[#9A7B4F] transition-all duration-500 bg-[#9A7B4F] text-white rounded-md mb-6 xsm:text-sm text-2xl `}>
              {service.icon}
            </div>
            <h3 className={`text-xl xsm:text-sm font-semibold `}>
              {service.title}
            </h3>
            <p className={`mt-3 text-sm xsm:text-xs `}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
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

      <Footer />
    </div>
  );
};

export default WhyUs;
