import React from 'react';

const Marque_Headline = () => {
  const logos = [
    { name: "SquareStone", icon: "https://cdn.worldvectorlogo.com/logos/square-1.svg" },
    { name: "martino", icon: "https://cdn.worldvectorlogo.com/logos/martino.svg" },
    { name: "fireli", icon: "https://cdn.worldvectorlogo.com/logos/fire.svg" },
    { name: "aromix", icon: "https://cdn.worldvectorlogo.com/logos/aroma.svg" },
    { name: "waverio", icon: "https://cdn.worldvectorlogo.com/logos/wave.svg" },
  ];

  // লুপটি ইনফিনিটি দেখানোর জন্য লোগোর লিস্টটি ডাবল করে নিচ্ছি
  const doubleLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-[#041a11] py-16 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden border-y border-white/5 py-10">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {doubleLogos.map((logo, index) => (
              <div key={index} className="flex items-center gap-3 mx-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                {/* Logo Icon Replacement - আপনি আপনার অরিজিনাল SVG বা ইমেজ এখানে বসাবেন */}
                <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </div>
                <span className="text-white text-2xl font-semibold tracking-tight uppercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second instance for seamless loop */}
          <div className="absolute top-10 flex animate-marquee2 whitespace-nowrap items-center">
            {doubleLogos.map((logo, index) => (
              <div key={index} className="flex items-center gap-3 mx-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </div>
                <span className="text-white text-2xl font-semibold tracking-tight uppercase">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Tailwind Config এ এই অ্যানিমেশনগুলো যোগ করতে হবে */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Marque_Headline;