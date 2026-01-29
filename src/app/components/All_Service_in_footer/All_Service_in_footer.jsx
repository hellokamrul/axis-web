import Link from "next/link";
import React from "react";

const All_Service_in_footer = () => {
  const footerData = [
    {
      title: "Design Services",
      links: ["Branding Design", "UX/UI Design", "Web Design", "App Design"],
    },
    {
      title: "Development Services",
      links: ["Custom Software Development", "Web Development", "App Development", "Webflow Development"],
    },
    {
      title: "Industries",
      links: ["Web 3, Blockchain", "SaaS", "Real Estate", "Edtech"],
    },
    {
      title: "Company",
      links: ["Portfolio", "Blog", "About Us"],
    },
    {
      title: "Solution",
      links: ["Dedicated Team", "Product Redesign", "MVP Development"],
    },
  ];

  return (
    <section className="w-full bg-[#041a11] pt-24 pb-12">
      <div className="max-w-[1620px] mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-20">
          
          {/* Left Side: Brand & Contact */}
          <div className="lg:w-1/3 space-y-8">
            <Link href="/" className="flex items-center gap-0">
              <span className="text-white text-3xl font-bold tracking-tighter">HALO</span>
              <span className="text-[#C4F82A] text-3xl font-bold tracking-tighter">DEV</span>
            </Link>
            
            <div className="space-y-2">
              <p className="text-white/40 text-lg">Drop us a line</p>
              <a 
                href="mailto:Hello@halodev.com" 
                className="text-[#C4F82A] text-2xl md:text-3xl font-medium hover:underline transition-all"
              >
                Hello@halodev.com
              </a>
            </div>

            <button className="flex items-center gap-3 group">
              <div className="bg-[#C4F82A] p-3 rounded-xl group-hover:scale-110 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
                  <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm">
                Company Deck
              </span>
            </button>
          </div>

          {/* Right Side: Links Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
            {footerData.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-white/40 text-lg font-medium tracking-wide">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link 
                        href="#" 
                        className="text-white text-[17px] hover:text-[#C4F82A] transition-colors duration-300"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 text-sm">
            © 2016–2026 Halodev
          </p>

          <div className="flex items-center gap-6">
            {['Instagram', 'Facebook', 'Dribbble', 'Behance', 'X'].map((social) => (
              <Link 
                key={social} 
                href="#" 
                className="text-white/60 hover:text-white transition-colors text-sm font-medium"
              >
                {social === 'X' ? '𝕏' : social}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-8 text-sm">
            <Link href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors">Terms & Condition</Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default All_Service_in_footer;