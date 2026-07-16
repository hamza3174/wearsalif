import React, { useRef, useState } from 'react';
import contact from "../../../../assests/contact.png";
import { Button, Form, Input, message } from 'antd';
import emailjs from '@emailjs/browser';

import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { IoMdTime } from 'react-icons/io';

const Contact = () => {

  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (values) => {
    setLoading(true);

    emailjs
      .send(
        "service_bl3j2er",
        "template_n3p3c2i",
        {
          name: values.name,
          email: values.email,
          title: values.title,
          message: values.message,
        },
        "IGfRwz3OPsM6bs4oz"
      )
      .then(() => {
        message.success("Message sent successfully!");
        setLoading(false);
      })
      .catch((error) => {
        console.log("Status:", error.status);
        console.log("Text:", error.text);
        console.log(error);
        message.error(error.text || "Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <div className='bg-[#F8F5F0] overflow-x-hidden'>

      {/* HERO SECTION */}
      <div className='relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden bg-black flex items-center justify-center md:block'>

        {/* Hero Background Image */}
        <img
          src={contact}
          alt="contact"
          className='absolute inset-0 w-full h-full object-cover opacity-80 md:opacity-100'
        />

        {/* Text Box - centered on mobile, left-aligned starting on md screens */}
        <div className='relative z-10 md:absolute md:top-1/2 md:left-12 lg:left-24 md:-translate-y-1/2 text-center md:text-left text-white md:text-black px-4 max-w-xl'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-3 md:mb-5'>
            Contact Us
          </h1>

          <div className='w-16 h-[2px] mb-4 md:mb-6 bg-white md:bg-black mx-auto md:mx-0'></div>

          <p className='text-sm sm:text-base md:text-lg leading-relaxed md:leading-8'>
            We'd love to hear from you. Get in touch with us for any questions or support.
          </p>
        </div>

      </div>

      {/* MAIN CONTENT SECTION */}
      <div className='max-w-7xl mx-auto py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch'>

        {/* SEND MESSAGE CARD */}
        <div className='bg-white p-5 sm:p-8 md:p-10 rounded-[24px] md:rounded-[30px] shadow-sm flex flex-col justify-between'>
          <div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-serif mb-6 md:mb-10 text-gray-900'>
              Send Us a Message
            </h2>

            <Form
              layout="vertical"
              onFinish={sendEmail}
              className="w-full"
            >
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input
                  name="name"
                  placeholder="Your Name"
                  className='h-12 rounded-xl text-sm md:text-base'
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  { required: true, type: "email", message: "Please enter a valid email" }
                ]}
              >
                <Input
                  name="email"
                  placeholder="Your Email"
                  className='h-12 rounded-xl text-sm md:text-base'
                />
              </Form.Item>

              <Form.Item
                name="title"
                label="Subject"
                rules={[{ required: true, message: "Please enter subject" }]}
              >
                <Input
                  name="title"
                  placeholder="Subject"
                  className='h-12 rounded-xl text-sm md:text-base'
                />
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: "Please enter your message" }]}
              >
                <Input.TextArea
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  className='rounded-xl text-sm md:text-base'
                />
              </Form.Item>

              <Button
                htmlType="submit"
                loading={loading}
                disabled={loading}
                className='!w-full sm:!w-auto !bg-black hover:!bg-[#2B2B2B] !text-white !px-10 md:!px-12 !h-12 !rounded-xl tracking-wider transition-all duration-300 text-sm md:text-base'
              >
                {loading ? "Sending..." : "SEND MESSAGE"}
              </Button>
            </Form>
          </div>
        </div>

        {/* CONTACT INFORMATION CARD */}
        <div className='bg-[#F3EEE7] p-5 sm:p-8 md:p-10 rounded-[24px] md:rounded-[30px] flex flex-col justify-center h-full'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-serif mb-8 md:mb-12 text-[#1A1A1A]'>
            Contact Information
          </h2>

          <div className='space-y-6 sm:space-y-8 md:space-y-10'>

            {/* Address */}
            <div className='flex items-start gap-4 md:gap-5'>
              <div className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center text-2xl md:text-3xl shadow-sm shrink-0'>
                <CiLocationOn />
              </div>
              <div>
                <h3 className='text-lg md:text-xl font-semibold mb-1 md:mb-2 text-[#1A1A1A]'>
                  Address
                </h3>
                <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                  Faisalabad, Punjab, Pakistan
                </p>
              </div>
            </div>

            {/* Email */}
            <div className='flex items-start gap-4 md:gap-5'>
              <div className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center text-xl md:text-2xl shadow-sm shrink-0'>
                <MdOutlineEmail />
              </div>
              <div>
                <h3 className='text-lg md:text-xl font-semibold mb-1 md:mb-2 text-[#1A1A1A]'>
                  Email
                </h3>
                <p className='text-sm md:text-base text-gray-600 leading-relaxed break-all'>
                  wearsalif@gmail.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className='flex items-start gap-4 md:gap-5'>
              <div className='w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center text-xl md:text-2xl shadow-sm shrink-0'>
                <IoMdTime />
              </div>
              <div>
                <h3 className='text-lg md:text-xl font-semibold mb-1 md:mb-2 text-[#1A1A1A]'>
                  Working Hours
                </h3>
                <p className='text-sm md:text-base text-gray-600 leading-relaxed'>
                  Monday - Sunday <br /> 24/7 Available
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;