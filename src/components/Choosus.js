import React from "react";

const Choosus = () => {
  return (
    <div className="mt-16 p-5 flex flex-col items-center lg:flex-row justify-center">
      {/* Left Section (Image) */}
      <div className="relative z-10 lg:w-1/2">
        <img
          src="CCS.jpg"
          alt="City View"
          className="w-full lg:w-[90%] rounded-md shadow-lg"
        />
      </div>

      {/* Right Section (Content) */}
      <div className="bg-[#9A7B4F] lg:w-1/2 p-8 lg:p-14 text-white rounded-md shadow-lg relative z-0 mt-8 lg:mt-0 lg:ml-[-6rem]">
        {/* Title Section */}
        <p className="text-yellow-300 text-sm uppercase mb-2">
          Who we are and our service
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Us</h1>

        {/* Features Section */}
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="flex gap-4 items-start">
            <img src="property.png" alt="Property Icon" className="w-12" />
            <div>
              <h2 className="text-lg font-bold">Personalized Service.</h2>
              <p className="text-yellow-300 text-sm">
                Helps to provide the best quality of property.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-4 items-start">
            <img src="rent.png" alt="Rent Icon" className="w-12" />
            <div>
              <h2 className="text-lg font-bold">Financing Made Easy.</h2>
              <p className="text-yellow-300 text-sm">
                Helps in providing loans.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-4 items-start">
            <img
              src="customer.png"
              alt="Customer Support Icon"
              className="w-12"
            />
            <div>
              <h2 className="text-lg font-bold">Complete Support.</h2>
              <p className="text-yellow-300 text-sm">
                Providing complete support.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex gap-4 items-start">
            <img src="deal.png" alt="Deal Icon" className="w-12" />
            <div>
              <h2 className="text-lg font-bold">Trusted by Thousands.</h2>
              <p className="text-yellow-300 text-sm">
                Customer satisfaction is our utmost priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choosus;
