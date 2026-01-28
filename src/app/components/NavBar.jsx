import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full bg-[#041a11]"> {/* Figma background depth */}
      <nav className="max-w-405 mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          
         <div className="flex gap-4">
           {/* Logo - Matching Figma Style */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-white text-2xl font-bold tracking-tight">HALO</span>
            <span className="text-[#C4F82A] text-2xl font-bold tracking-tight">DEV</span>
          </Link>

          {/* Navigation Links - Capsule Style Like Figma */}
          <ul className="flex items-center gap-2">
            {[
              { name: "Services", href: "/services", hasIcon: true },
              { name: "Dedicated Team", href: "/dedicated-team" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Blog", href: "/blog" },
              { name: "About Us", href: "/about" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  {link.name}
                  {link.hasIcon && (
                    <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
         </div>

          {/* Action Buttons - Matching Figma Icons and Shape */}
          <div className="flex items-center gap-3">
            {/* Pencil/Edit Icon Button */}
            <button className="bg-[#C4F82A] text-[#052c1a] p-3.5 rounded-[18px] hover:bg-[#b3e625] transition-all shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </button>
            
            {/* Contact Us Button */}
            <Link 
              href="/contact" 
              className="bg-white text-[#052c1a] px-8 py-3.5 rounded-[20px] hover:bg-gray-100 transition-all font-bold text-sm tracking-wide shadow-lg"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default NavBar;