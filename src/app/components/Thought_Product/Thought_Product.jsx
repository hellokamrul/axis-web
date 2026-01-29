import React from 'react';

const Thought_Product = () => {
  const metrics = [
    { id: "01", value: "03+", label: "Years of Experience" },
    { id: "02", value: "300%+", label: "Average conversion uplift" },
    { id: "03", value: "10-30%", label: "Retention" },
    { id: "04", value: "18+", label: "Team Members" },
  ];

  return (
    <section className="w-full bg-[#041a11] py-24">
      <div className="max-w-[1620px] mx-auto px-4">
        <h2 className="text-white text-center text-4xl md:text-7xl font-medium mb-20 tracking-tight">
          From <span className="text-[#d9f99d]">Thought</span> to Product
        </h2>
        {/* Top Content: Thought to Product Area */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="flex items-center gap-3">
              <span className="bg-[#1a1a1a] text-white px-6 py-2 rounded-full text-sm font-medium border border-white/5">
                SaaS
              </span>
              <span className="bg-[#1a1a1a] text-white px-6 py-2 rounded-full text-sm font-medium border border-white/5">
                Retention growth 28%
              </span>
            </div>

            <h3 className="text-white text-3xl md:text-6xl font-medium leading-[1.1] tracking-tight">
              Halo HRIS - SaaS Management <br />
              System reach 40% User <br />
              Engagement Our Design & Dev
            </h3>

            <p className="text-white/50 text-lg md:text-xl max-w-[550px] leading-relaxed font-light">
              It derives from scrambled sections of Cicero's "De Finibus Bonorum et Malorum," 
              a 1st-century BCE Latin text on ethics.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <button className="bg-[#d9f99d] p-4 rounded-2xl hover:rotate-45 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-colors">
                View Case Study
              </button>
            </div>
          </div>

          {/* Right Side: Dashboard Preview */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#c2d6bc] rounded-[60px] p-6 md:p-12 relative">
              <div className="rounded-[30px] overflow-hidden shadow-2xl">
               <img
                    src="/images/dashboard-preview.png"
                    alt="Dashboard Design"
                    className="w-full h-auto object-cover"
                  />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Area: Metrics Cards (Newly Added from image_e3f800.png) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#111111]/40 border border-white/5 rounded-[40px] p-10 h-[280px] flex flex-col justify-between hover:bg-[#111111]/60 transition-all duration-300 group"
            >
              {/* ID Number */}
              <span className="text-white/20 text-lg font-medium group-hover:text-white/40 transition-colors">
                {item.id}
              </span>
              
              {/* Value & Label */}
              <div className="space-y-2">
                <h4 className="text-white text-5xl md:text-6xl font-medium tracking-tight">
                  {item.value}
                </h4>
                <p className="text-white/50 text-lg">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Thought_Product;