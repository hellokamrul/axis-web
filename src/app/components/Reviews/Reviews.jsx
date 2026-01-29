import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { id: 1, rating: "7.00", text: "Their expertise and guidance were instrumental. They demonstrated their commitment.", author: "Jeson Staton", role: "CEO at Crush", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, rating: "6.00", text: "Working with them was a game-changer for our SaaS. The attention to detail helped us launch.", author: "Jeson Staton", role: "CEO at Crush", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, rating: "5.00", text: "The team's ability to translate complex AI requirements into a simple UI was remarkable.", author: "Jeson Staton", role: "CEO at Crush", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 4, rating: "4.00", text: "Exceptional feedback and lasting success of the brands we build. A truly design-led process.", author: "Jeson Staton", role: "CEO at Crush", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 5, rating: "3.00", text: "High-impact digital products built on trust, transparency, and long-term thinking.", author: "Jeson Staton", role: "CEO at Crush", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 6, rating: "2.00", text: "High-impact digital products built on trust, transparency, and long-term thinking.", author: "Jeson Staton", role: "CEO at Crush", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 7, rating: "1.00", text: "High-impact digital products built on trust, transparency, and long-term thinking.", author: "Jeson Staton", role: "CEO at Crush", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  ];

  // ৫টি কার্ডের জন্য ৩টি ডট যথেষ্ট (কার্ড ১-২-৩, ২-৩-৪, ৩-৪-৫)
  const totalDots = testimonials.length - 2; 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalDots);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalDots]);

  return (
    <section className="w-full bg-[#041a11] py-24 overflow-hidden text-white">
      <div className="max-w-[1620px] mx-auto px-4">
        
        {/* Header (Same as before) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
          <span className="text-white/50 text-sm font-medium tracking-[0.2em]">REVIEWS</span>
          <h2 className="max-w-[950px] text-3xl md:text-[42px] leading-[1.2] font-medium">
            From ambitious startups to established enterprises...
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 16}px)` }} // 16px is the gap
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-[calc(33.333%-16px)] min-w-[350px] bg-[#111111]/60 border border-white/5 rounded-[40px] p-10 h-[450px] flex flex-col justify-between shrink-0"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{item.rating}</span>
                    <div className="flex text-[#d9f99d]">★★★★★</div>
                  </div>
                  <p className="text-white/80 text-xl font-light italic">“{item.text}”</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <img src={item.image} alt="" className="w-14 h-14 rounded-full border border-white/10" />
                  <div>
                    <h4 className="font-bold text-lg">{item.author}</h4>
                    <p className="text-white/40 text-sm uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-3 mt-16">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index ? 'w-4 h-4 bg-[#d9f99d]' : 'w-3 h-3 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;