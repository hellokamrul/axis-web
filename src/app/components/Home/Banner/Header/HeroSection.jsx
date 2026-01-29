import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full py-16 bg-[#041a11]">
      <div className="max-w-405 mx-auto px-4">
        {/* Main Background Card */}
        <div className="bg-[#052c1a] rounded-[40px] p-8 lg:p-14 relative overflow-hidden shadow-2xl bor">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            {/* Left Side: Image Mockup Area */}
            <div className="relative">
              <div className="bg-[#b8d4c1] rounded-[35px] p-8 md:p-12 relative flex items-center justify-center aspect-4/3 ">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border-[5px] border-white/20 w-full">
                  <img
                    src="/images/dashboard-preview.png"
                    alt="Dashboard Design"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Play Button - Designing exactly as shown */}
                <button className="absolute bottom-10 left-10 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
                  <div className="w-0 h-0 border-t-10 border-t-transparent border-l-16 border-l-[#052c1a] border-b-10 border-b-transparent ml-1"></div>
                </button>
              </div>
            </div>

            {/* Right Side: Text & Tags Area */}
            <div className="text-white space-y-8">
              {/* Top Mini Badge */}
              <div className="flex items-center gap-2 text-white/80">
                <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-[15px] font-light">
                  Design-led development from zero to hero
                </span>
              </div>

              {/* Service Tags - Matching the Serif Italic Style */}
              <div className="flex flex-wrap gap-x-4 gap-y-5">
                {["Custom Software", "AI & ML", "UI/UX Design", "SaaS"].map(
                  (tag) => (
                    <div
                      key={tag}
                      className="bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-sm"
                    >
                      <span className="text-white text-4xl md:text-5xl lg:text-[56px] font-serif italic tracking-tight leading-none">
                        {tag}
                      </span>
                    </div>
                  ),
                )}
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
                Driven Digital Products That Scale Your Business
              </h1>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="w-full h-px bg-white/10 mt-16 mb-8"></div>

          {/* Bottom Footer Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Stats Left */}
            <p className="text-white/60 text-sm md:text-base w-1/2 leading-relaxed">
              {`{ Supporting teams in `}
              <span className="text-white font-semibold underline decoration-white/30 underline-offset-4">
                achieving up to 2× improvements
              </span>
              {` in speed, adoption, and scalability—depending on product and market. }`}
            </p>

            {/* Middle & Right: Actions */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Vertical Line Divider (Desktop only) */}
              <div className="hidden md:block h-12 w-px bg-white/10 mr-4"></div>

              {/* Chat Group */}
              <div className="flex items-center gap-1">
                <button className="bg-[#d9f99d] p-4 rounded-2xl hover:bg-[#c4f07a] transition-colors">
                  <svg
                    className="w-6 h-6 text-[#052c1a]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </button>
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                  Let's Chat
                </button>
              </div>

              {/* Google Review Badge */}
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-3xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-white font-bold text-xl">4.8</span>
                    <span className="text-yellow-400">★</span>
                  </div>
                </div>
                <div className="text-[10px] text-white/50 leading-tight uppercase font-medium border-l border-white/20 pl-4">
                  03+ years of design-
                  <br />
                  driven development
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
