import React from 'react';

const Footer = () => {
    return (
        <section className="w-full bg-[#041a11] pt-10 pb-20">
            <div className="max-w-[1920px] mx-auto px-4">
                {/* Big Scalable Brand Text - Exactly like image_e3873c.png */}
                <div className="w-full overflow-hidden select-none">
                    <h1 className="text-[20vw] md:text-[14vw] font-bold leading-none tracking-tighter flex justify-center items-center">
                        <span className="text-white">HALO</span>
                        <span className="text-[#C4F82A]">DEV</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Footer;