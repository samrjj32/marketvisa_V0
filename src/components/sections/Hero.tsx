'use client';
import React from 'react';
import Image from 'next/image';
import { FaClock, FaCalendar, FaLanguage, FaVideo } from 'react-icons/fa';
import WhyChooseUs from './WhyChooseUs';

export default function Hero() {
 
  return (
    <>
      <section className="relative py-8 lg:py-1 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 text-left space-y-6">
                {/* Main heading with mixed colors */}
                <div className="space-y-1">
                  <h1 className="text-3xl lg:text-4xl font-bold">
                    <span className="text-[#00D066]">Unlock</span> Smart Investing
                  </h1>
                  <h1 className="text-3xl lg:text-4xl font-bold">
                    Secrets Through Top
                  </h1>
                  <h1 className="text-3xl lg:text-4xl font-bold">
                    <span className="text-[#00D066]">Mutual Funds</span> – Live Webinar
                  </h1>
                </div>

                {/* Subheading */}
               
                <div className="space-y-1">
                  <h1 className="text-1xl lg:text-1xl font-bold">
                  Learn How To Maximize Your <span className="text-[#00D066]"> Mutual Fund Returns</span>,
                  Avoid Common Investment Mistakes &&nbsp;
                  <span className="text-[#00D066]">Build Long-Term Wealth</span>
                  </h1>
                
                  <h1 className="text-1xl lg:text-1xl font-bold">
                  
                  </h1>
                </div>

                

               
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="relative w-full aspect-square max-w-[350px] sm:max-w-[450px] mx-auto">
                    <Image
                      src="/avatarImages/mentor.png"
                      alt="Nithin - Finance Educator"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="z-10"
                      priority
                    />
                    <div className="absolute inset-0 bg-green-100 rounded-full z-0 transform -translate-x-3 translate-y-3 sm:-translate-x-4 sm:translate-y-4"></div>
                  </div>
                  
                  {/* Instructor Details Card */}
                  <div className="absolute bottom-0 right-0 sm:bottom-[-35px] sm:right-[20px] lg:right-[-40px] lg:bottom-[20px] bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 sm:p-3 max-w-[210px] sm:max-w-[240px] z-20">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">One of Kerala's leading finance educator</p>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">Nithin</h3>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#00D066] rounded-full"></div>
                        <p className="text-xs sm:text-sm text-gray-600">Co-founder of Marketvisa</p>
                    
                      </div>
                      <div className="flex items-center gap-2">
                       
                        <div className="w-1 h-1 bg-[#00D066] rounded-full"></div>
                        <p className="text-xs sm:text-sm text-gray-600"> SEBI Certified Investor</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="join" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Section Heading */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Workshop Details</h2>
              <div className="w-20 h-1 bg-[#00D066] mx-auto rounded-full"></div>
            </div>

            {/* Event Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
  <FaCalendar className="w-5 h-5 text-[#00D066] mx-auto mb-1" />
  <p className="font-semibold">Date</p>
  <p className="text-gray-600">30th March</p>
  <p className="mt-1 text-white bg-[#00D066] text-xs font-semibold px-2 py-0.5 rounded-full inline-flex">
    Sunday
  </p>
</div>

              <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FaClock className="w-6 h-6 text-[#00D066] mx-auto mb-2" />
                <p className="font-semibold">Time</p>
                <p className="text-gray-600">11:00 AM</p>
       
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FaLanguage className="w-6 h-6 text-[#00D066] mx-auto mb-2" />
                <p className="font-semibold">Language</p>
                <p className="text-gray-600">Malayalam</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <FaVideo className="w-6 h-6 text-[#00D066] mx-auto mb-2" />
                <p className="font-semibold">Platform</p>
                <p className="text-gray-600">Live on Zoom</p>
              </div>
            </div>
             
          </div>
        </div>
        <WhyChooseUs />
      </section>
    </>
  );
} 