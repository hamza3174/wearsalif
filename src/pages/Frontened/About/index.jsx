import React from 'react';
import { PiCoatHanger, PiLeafLight } from 'react-icons/pi';
import about1 from "../../../../assests/About/about(1).jpeg";
import about2 from "../../../../assests/About/about(2).jpeg";
import screenshoot from "../../../../assests/Screenshot_10-5-2026_12221_-removebg-preview.png";
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("new-arrival")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="overflow-x-hidden">

      {/* HERO SECTION */}
      <div className='w-full min-h-screen bg-[#f8f5f0] flex items-center justify-center px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-16'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center max-w-7xl w-full'>

          {/* LEFT SIDE (TEXT CONTENT) */}
          <div className='space-y-6 xl:space-y-8 text-center lg:text-left order-2 lg:order-1'>

            <div>
              <p className='uppercase tracking-[0.3em] text-xs md:text-sm text-gray-500 mb-2 xl:mb-4'>
                About Us
              </p>

              {/* Scaled text dynamically for laptop (lg:) and widescreen desktop (xl:) */}
              <h1 className='text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-serif leading-tight text-gray-900'>
                STYLING <br className="hidden lg:inline" /> CONFIDENCE.
              </h1>
            </div>

            {/* Reduced line height on laptops to avoid text spreading too far */}
            <p className='text-gray-600 text-base lg:text-md xl:text-lg leading-relaxed lg:leading-7 xl:leading-9 max-w-xl mx-auto lg:mx-0'>
              At our core, we believe that great style is more than
              just what you wear — it’s how you express who you are.
              We’re passionate about creating clothing that blends
              comfort, quality, and timeless design. Every piece is
              made to help you feel confident in every moment.
            </p>

            <p className='text-gray-700 text-xl lg:text-xl xl:text-2xl font-light italic'>
              Thank you for being part of our journey.
            </p>

            <div>
              <button
                onClick={handleExplore}
                className='px-8 py-3.5 xl:px-10 xl:py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer text-sm md:text-base'
              >
                Explore Collection
              </button>
            </div>

          </div>

          {/* RIGHT SIDE (IMAGE) */}
          {/* Replaced fixed large heights with fluid scale: lg:h-[500px] on laptops, scaling to xl:h-[650px] */}
          <div className='w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[500px] xl:h-[650px] flex justify-center lg:justify-end order-1 lg:order-2'>
            <img
              src={about1}
              alt="about1"
              className='w-full lg:w-[90%] xl:w-[85%] h-full object-cover rounded-3xl lg:rounded-l-[40px] lg:rounded-r-none shadow-xl'
            />
          </div>

        </div>

      </div>

      {/* FEATURES SECTION */}
      <div className='bg-[#E7E1D8] py-16 lg:py-20 px-4 sm:px-8 lg:px-12 xl:px-16'>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 max-w-7xl mx-auto'>

          {/* CARD 1 */}
          <div className='bg-white p-6 xl:p-8 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 text-center flex flex-col justify-between items-center'>
            <div className="w-full">
              <img
                src={screenshoot}
                alt="Quality"
                className='w-16 xl:w-20 mx-auto mb-4 xl:mb-6'
              />
              <h2 className='text-xl xl:text-2xl font-semibold mb-3 xl:mb-4 text-gray-900'>
                Quality First
              </h2>
              <p className='text-gray-600 leading-relaxed text-sm xl:text-base'>
                We use premium materials and pay attention to every detail.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className='bg-white p-6 xl:p-8 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 text-center flex flex-col justify-between items-center'>
            <div className="w-full">
              <PiLeafLight
                size={60}
                className='text-[#936037] mx-auto mb-4 xl:mb-6'
              />
              <h2 className='text-xl xl:text-2xl font-semibold mb-3 xl:mb-4 text-gray-900'>
                Sustainable Choices
              </h2>
              <p className='text-gray-600 leading-relaxed text-sm xl:text-base'>
                We care about people and the planet. Our choices reflect that.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className='bg-white p-6 xl:p-8 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 text-center flex flex-col justify-between items-center'>
            <div className="w-full">
              <FaRegHeart
                size={55}
                className='mx-auto mb-4 xl:mb-6 text-[#936037]'
              />
              <h2 className='text-xl xl:text-2xl font-semibold mb-3 xl:mb-4 text-gray-900'>
                Made For You
              </h2>
              <p className='text-gray-600 leading-relaxed text-sm xl:text-base'>
                Timeless pieces designed to fit your lifestyle and make you feel good.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className='bg-white p-6 xl:p-8 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 text-center flex flex-col justify-between items-center'>
            <div className="w-full">
              <PiCoatHanger
                size={60}
                className='mx-auto mb-4 xl:mb-6 text-[#936037]'
              />
              <h2 className='text-xl xl:text-2xl font-semibold mb-3 xl:mb-4 text-gray-900'>
                Everyday Style
              </h2>
              <p className='text-gray-600 leading-relaxed text-sm xl:text-base'>
                Versatile looks for every day, every moment, every you.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* FOOTER IMAGE */}
      <div className="px-4 sm:px-8 lg:px-12 py-8 bg-white">
        <div className="relative w-full overflow-hidden rounded-3xl shadow-lg">
          {/* Constrained banner height for laptops so it is sleek and proportional */}
          <img
            src={about2}
            alt="About Footer Banner"
            className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;