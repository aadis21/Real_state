import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import cityback from "../cta-bg.png";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "p3.png",
  "p4.png",
  "p5.png",
  "p6.png",
  "p7.png",
  "p8.png",
  "p9.png",
  "p10.png",
  "p11.png",
  "p12.png",
  "p13.png",
  "p14.png",
  "p15.png",
  "p16.png",
  "p17.png",
  "p18.png",
  "p19.png",
  "p20.png",
  "p21.png",
  "p22.png",
  "p23.png",
  "p24.png",
  "p25.png",
  "p26.png",
];

const Partner = () => {
  const settings = {
    dots: false, // Disable dots
    infinite: true, // Enable looping
    speed: 600, // Transition speed
    slidesToShow: 5, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Autoplay delay (continuous effect)
    // cssEase: "linear", // Continuous sliding effect
    responsive: [
      {
        breakpoint: 1024, // For devices with width < 1024px
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768, // For devices with width < 768px
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480, // For devices with width < 480px
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className=" overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Our Partners</h1>
      </div>

      {/* Slider */}
      <Slider {...settings} className="p-16">
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center p-2">
            <div className="bg-white rounded-lg shadow-lg flex items-center justify-center">
              <img
                src={image}
                alt={`Partner ${index + 1}`}
                className="object-contain h-32 w-[60%]"
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="bg-[#9A7B4F] mt-10  text-white text-center py-16 relative">
        <div
          className="absolute bottom-0 left-0 right-0 opacity-90 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${cityback})`, height: "100%" }}
        ></div>

        <div className="relative z-10 flex lg:flex-row xsm:flex-col md:flex-col md:gap-10 md:px-10 xsm:gap-10 xsm:px-8 justify-center gap-60">
          <div className=" text-start">
            <h2 className="text-5xl xsm:text-base font-bold">
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
  );
};

export default Partner;
