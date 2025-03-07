import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ray Robertson",
    position: "CEO Company",
    feedback: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet.",
    rating: 5,
    date: "10th Feb, 2023",
    avatar: "city-6.jpg"
  },
  {
    id: 2,
    name: "Sheri",
    position: "CEO Company",
    feedback: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet.",
    rating: 5,
    date: "10th Feb, 2023",
    avatar: "city-2.jpg"
  },
  {
    id: 3,
    name: "Naveen Kansal",
    position: "Client",
    feedback: "CCS is providing best services to their clients. Management always works in staff favour... happy to be a part of CCS team...",
    rating: 5,
    date: "15th Mar, 2023",
    avatar: "city-2.jpg"
    },
  {
    id: 4,
    name: "Priyanka Musafir",
    position: "Client",
    feedback: "CCS provides the best property to their clients. Since long I was finding a good apartment in Chandigarh, and I got it through CCS. If anyone wants a property in Tricity, contact CCS.",
    rating: 5,
    date: "20th Apr, 2023",
    avatar: "city-6.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(2);
  
  // Add a window resize handler to adjust the display count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplayCount(1);
      } else {
        setDisplayCount(2);
      }
    };
    
    // Set initial display count
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Calculate visible testimonials
  const visibleTestimonials = [];
  for (let i = 0; i < displayCount; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to render star ratings
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="relative py-20 px-4 max-w-6xl mx-auto">
      
      {/* Section Heading */}
      <div className="relative mb-12 text-center">
        <h2 className="text-4xl xsm:text-base font-bold inline-block">
          What people Think <span className="text-[#9A7B4F] xsm:text-base relative">About Us
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#9A7B4F]"></span>
          </span>
        </h2>
      </div>
      
      {/* Testimonial Cards Container */}
      <div className="relative flex md:p-10 items-center justify-center">
        {/* Left Navigation Button */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Testimonial Cards */} 
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0 justify-center">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg h-[300px] w-[300px] shadow-lg p-6 max-w-md">
              {/* Rating and Date */}
              <div className="flex justify-between items-center mb-4">
                {renderRating(testimonial.rating)}
                <span className="text-gray-500 xsm:text-[10px] text-sm">{testimonial.date}</span>
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 md:text-sm xsm:text-xs leading-relaxed">
                {testimonial.feedback}
              </p>
              
              {/* Author Info */}
              <div className="flex items-center">
                <div className="mr-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="rounded-full w-12 h-12" />
                </div>
                <div>
                  <h4 className="font-semibold xsm:text-sm text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 xsm:text-xs text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Right Navigation Button */}
        <button 
          onClick={handleNext}
          className="absolute right-0 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;