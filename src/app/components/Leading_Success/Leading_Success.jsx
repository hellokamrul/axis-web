import React from 'react';

const Leading_Success = () => {
  const services = {
    design: [
      { title: "UX/UI Design", desc: "Create visually appealing web, mobile and SaaS product designs." },
      { title: "Web Design", desc: "Create visually appealing web, mobile and SaaS product designs." },
      { title: "SaaS Design", desc: "Create visually appealing web, mobile and SaaS product designs." },
    ],
    development: [
      { title: "Custom Software Development", desc: "Create visually appealing web, mobile and SaaS product designs." },
      { title: "MVP Development", desc: "Create visually appealing web, mobile and SaaS product designs." },
      { title: "Webflow Development", desc: "Create visually appealing web, mobile and SaaS product designs." },
    ]
  };

  return (
    <section className="w-full bg-[#041a11] py-20">
      <div className="max-w-[1620px] mx-auto px-4">
        
        {/* Section Heading */}
        <h2 className="text-white text-center text-4xl md:text-6xl font-medium mb-16">
          From initial ideation to <br />
          <span className="text-[#d9f99d]">industry-leading success</span>
        </h2>

        {/* Main Content Card */}
        <div className="bg-[#eff6ee] rounded-[48px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Design Column */}
          <div className="space-y-8">
            <h3 className="text-black text-3xl font-semibold px-4">Design</h3>
            <div className="space-y-4">
              {services.design.map((item, idx) => (
                <ServiceCard key={idx} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>

          {/* Development Column */}
          <div className="space-y-8">
            <h3 className="text-black text-3xl font-semibold px-4">Development</h3>
            <div className="space-y-4">
              {services.development.map((item, idx) => (
                <ServiceCard key={idx} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-10 bg-[#0a2216] border border-white/5 rounded-3xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 px-8">
            <div className="flex items-center gap-3">
                <div className="text-[#d9f99d]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
                </div>
                <p className="text-white/90 font-medium">From initial ideation to <span className="text-[#d9f99d]">industry-leading success</span></p>
            </div>
            
            <div className="flex items-center gap-3">
                <button className="bg-[#d9f99d] p-3 rounded-xl">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
                </button>
                <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm">
                    Contact Us
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

// Internal Component for individual service rows
const ServiceCard = ({ title, desc }) => (
  <div className="bg-white rounded-[24px] p-8 flex items-center justify-between group hover:shadow-lg transition-all cursor-pointer border border-transparent hover:border-[#d9f99d]/30">
    <div className="max-w-[80%]">
      <h4 className="text-black text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
    <div className="bg-[#d9f99d] p-3 rounded-xl group-hover:rotate-45 transition-transform">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
);

export default Leading_Success;