import React from "react";
import Herosection from "./HeroSection";
import Card from "./Card";
import Project from "./Project";
import Choosus from "./Choosus";
import Properties from "./Properties";
import Client from "./Client";
import Partner from "./Partener";
import Video from "./Video";
import Footer from "./Footer";

const card = [
  {
    image: "city-1.webp",
    heading: "Azura Residences by IGO",
    para: "United Arab Emirates",
    price: "₹20500",
    url: "Azura Residences by IGO.pdf",
  },
  {
    image: "city-2.jpg",
    heading: "Bayz 102",
    para: "United Arab Emirates",
    price: "₹20500",
    url: "Bayz 102.pdf",
  },
  {
    image: "city-3.png",
    heading: "Beach Residences at Siniya Island",
    para: "United Arab Emirates",
    price: "₹20500",
    url: "Beach Residences at Siniya Island.pdf",
  },
  {
    image: "city-4.jpg",
    heading: "Bliss Homes",
    para: "United Arab Emirates",
    price: "₹30500",
    url: "Bliss Homes.pdf",
  },
  {
    image: "city-5.jpeg",
    heading: "Burj Azizi",
    para: "United Arab Emirates",
    price: "₹40500",
    url: "Burj Azizi.pdf",
  },
  {
    image: "city-6.jpg",
    heading: "Laya Heights",
    para: "United Arab Emirates",
    price: "₹50500",
    url: "Laya Heights.pdf",
  },
];

const Home = () => {
  return (
    <div className="xsm:overflow-hidden xsm:-mt-10">
      <Herosection />
      <div className="flex flex-col items-center p-10 xsm:p-4">
        <p className="text-[#003550]">Find rental properties anywhere</p>
        <h1 className="text-3xl xsm:text-base font-bold">
          Discover Popular Property
        </h1>
        <div className="flex items-center w-full justify-center">
          <div className=" grid grid-cols-3 xsm:grid-cols-1 gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 md:p-5 xsm:p-5 lg:p-24">
            {card.map((item, index) => (
              <Card
                key={index}
                heading={item.heading}
                para={item.para}
                price={item.price}
                image={item.image}
                url={item.url}
              />
            ))}
          </div>
        </div>
      </div>
      <Project />
      <Choosus />
      {/* <Properties /> */}
      <Client />
      <Partner />
      {/* <Video /> */}
      <Footer />
    </div>
  );
};

export default Home;
