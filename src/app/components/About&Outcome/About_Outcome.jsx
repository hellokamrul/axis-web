import React from 'react';

const About_Outcome = () => {
  const stats = [
    {
      value: "+20–45%",
      title: "Higher User Engagement",
      desc: "increase in feature adoption & engagement",
      active: false,
    },
    {
      value: "15–35%",
      title: "Conversion Performance",
      desc: "Uplift in conversion-related metrics",
      active: true, // This one has the green gradient
    },
    {
      value: "10–30%",
      title: "Retention",
      desc: "Churn reduction by removing UX friction",
      active: false,
    },
    {
      value: "30%–50%",
      title: "Faster Product Launches",
      desc: "Lean MVP execution helps teams launch, learn, and iterate quickly.",
      active: false,
    },
  ];

  return (
    <section className="w-full bg-[#041a11] py-20">
      <div className="max-w-[1620px] mx-auto px-4">
        
        {/* Top Content Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-20">
          <div className="flex-shrink-0">
            <span className="text-white/50 text-sm font-medium tracking-[0.2em] uppercase">
              ABOUT & OUTCOME
            </span>
          </div>
          
          <div className="max-w-[900px]">
            <p className="text-white text-2xl md:text-[32px] leading-[1.4] font-light">
              Founded in 2023, we are a UX-led digital product agency helping startups, 
              SaaS teams, and agencies design and build scalable software, AI-driven systems, and 
              high-impact digital products. Through a product-first approach and close collaboration, 
              our partners typically see faster launches, stronger user adoption, and measurable 
              improvements in engagement and retention—built on trust, transparency, and long-term thinking.
            </p>
          </div>
        </div>

        {/* Stats Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div 
              key={index}
              className={`rounded-[32px] p-10 h-[320px] flex flex-col justify-end transition-all duration-500 border border-white/5 ${
                item.active 
                ? 'bg-gradient-to-br from-[#1a3d2e] to-[#0f2419] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
                : 'bg-[#111111]/40 hover:bg-[#111111]/60'
              }`}
            >
              <div className="space-y-4">
                <h2 className="text-white text-5xl font-medium tracking-tight">
                  {item.value}
                </h2>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About_Outcome;