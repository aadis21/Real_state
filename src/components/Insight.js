import React from "react";
import Footer from "./Footer";
import cityback from "../cta-bg.png";

const insights = [
  {
    img: "city-2.jpg",
    date: "17/07/2024",
    readTime: "6 min read",
    title: "Ensuring the Safety of Your Real Estate Investments in Dubai",
    link: "#",
  },
  {
    img: "city-4.jpg",
    date: "17/07/2024",
    readTime: "3 min read",
    title:
      "Understanding the UAE Property Market: Trends and Predictions for 2024",
    link: "#",
  },
  {
    img: "city-1.webp",
    date: "17/07/2024",
    readTime: "3 min read",
    title: "Regulatory Changes and Transparency in Dubai Real Estate Market",
    link: "#",
  },
  {
    img: "city-5.jpeg",
    date: "17/07/2024",
    readTime: "3 min read",
    title: "Regulatory Changes and Transparency in Dubai Real Estate Market",
    link: "#",
  },
  {
    img: "city-6.jpg",
    date: "17/07/2024",
    readTime: "3 min read",
    title: "Regulatory Changes and Transparency in Dubai Real Estate Market",
    link: "#",
  },
  {
    img: "city.jpg",
    date: "17/07/2024",
    readTime: "3 min read",
    title: "Regulatory Changes and Transparency in Dubai Real Estate Market",
    link: "#",
  },
];

const Insight = () => {
  return (
    <div className="container mx-auto xsm:-mt-10  py-10">
      <div className="lg:px-32  xsm:px-5">
        <h1 className="text-4xl xsm:text-base font-bold mb-10">
          SAARE <span className="font-normal">Insights</span>
        </h1>

        {/* <div className='flex justify-end gap-4 mb-10'>
  <select className='border p-2 rounded-md'>
    <option>All</option>
    <option>Category 1</option>
    <option>Category 2</option>
  </select>

  <select className='border p-2 rounded-md'>
    <option>All</option>
    <option>Author 1</option>
    <option>Author 2</option>
  </select>
</div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {insights.map((item, index) => (
            <div key={index} className="shadow-lg h-full">
              <img
                src={item.img}
                alt="Insight"
                className="w-full h-64 hover:scale-110 transition-all duration-500 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-500">
                  {item.date} • {item.readTime}
                </p>
                <h3 className="font-bold text-sm my-3">{item.title}</h3>
                <a
                  href={item.link}
                  className="text-blue-600 text-xs font-semibold"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
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

export default Insight;
