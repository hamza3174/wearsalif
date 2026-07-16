import React from 'react'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className='bg-[#2c2f30] text-white'>

      <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 items-center'>

        {/* Contact */}
        <div>
          <h2 className='text-lg font-semibold mb-4 tracking-wide'>Contact Us</h2>
          <ul className='space-y-2 text-sm text-gray-300'>
            <li>wearsalif@gmail.com</li>
            <li>Faisalabad, Punjab, Pakistan</li>
          </ul>
        </div>

        {/* Brand Center */}
        <div className='text-center'>
          <h1 className="text-4xl font-light tracking-[0.7em] mb-4 hover:tracking-[0.9em] transition-all duration-500 cursor-pointer">
            ALIF
          </h1>

          <p className='text-sm text-gray-300 leading-relaxed px-4'>
            Minimal yet powerful, ALIF represents the beginning of style and identity.
            We craft fashion that speaks of confidence, grace, and individuality.
          </p>
        </div>

        {/* Socials */}
        <div className='text-center md:text-right'>
          <h2 className='text-lg font-semibold mb-4 tracking-wide px-8'>Follow Us</h2>

          <div className='flex justify-center md:justify-end gap-4'>
            <a
              href='https://www.facebook.com/share/1DUeuasP9Y/'
              target='_blank'>
              <div className='p-2 border border-gray-500 rounded-full hover:bg-white hover:text-black transition cursor-pointer'>
                <FaFacebookF size={16} />
              </div>
            </a>

            <a
              href='https://www.instagram.com/alif_.wears?utm_source=qr&igsh=MXFxOGludDZrbmo2bQ=='
              target='_blank'>
              <div className='p-2 border border-gray-500 rounded-full hover:bg-white hover:text-black transition cursor-pointer'>
                <IoLogoInstagram size={18} />
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@alif.wears?_r=1&_t=ZS-97HHx2S2JP8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 border border-gray-500 rounded-full hover:bg-white hover:text-black transition cursor-pointer">
                <FaTiktok size={16} />
              </div>
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className='border-t border-gray-700 mx-6'></div>

      {/* Bottom */}
      <div className='text-center text-gray-400 text-sm py-4'>
        © 2026 ALIF — Designed for elegance and confidence.
      </div>

    </footer>
  )
}

export default Footer