export default function ContactPage() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between p-10 bg-gray-100 min-h-screen">
      {/* Address Section */}
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h2 className="text-3xl font-bold mb-4">Address</h2>
        <p className="mb-2">
          Office Number 538, Block A, 5th Floor, Regus, 8W Building, DAFZA,
          Dubai - UAE
        </p>
        <p className="flex items-center mb-2">
          📞 +971 585919589, +971 585360774
        </p>
        <p className="flex items-center mb-4">✉️ connect@7dre.com</p>
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 text-2xl">
            🔗
          </a>
          <a href="#" className="text-gray-600 text-2xl">
            🔗
          </a>
          <a href="#" className="text-gray-600 text-2xl">
            🔗
          </a>
          <a href="#" className="text-gray-600 text-2xl">
            🔗
          </a>
          <a href="#" className="text-gray-600 text-2xl">
            🔗
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:w-1/2 bg-blue-900 p-8 rounded-lg shadow-lg text-white">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 text-black rounded-md"
            required
          />
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-1/2 p-3 text-black rounded-md"
              required
            />
            <input
              type="tel"
              placeholder="Your mobile number"
              className="w-1/2 p-3 text-black rounded-md"
              required
            />
          </div>
          <textarea
            placeholder="Type your message here"
            className="w-full p-3 text-black rounded-md"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-white text-blue-900 font-bold py-3 rounded-md flex items-center justify-center"
          >
            SUBMIT →
          </button>
        </form>
      </div>
    </div>
  );
}
