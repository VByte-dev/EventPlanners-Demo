import React from "react";

let Hero = () => {
  return (
    <section className="pt-32 pb-0 bg-[#f8f5f2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pb-20">
        {/* LEFT CONTENT */}
        <div>
          <div className="inline-block px-4 py-1 mb-6 text-xs font-medium tracking-wide text-[#7c6a63] bg-[#ede6df] rounded-full">
            ⭐ 4.8 Rated Event Planner in Chennai
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#3e2f2b]">
            Turning Your Special Moments
            <span className="block text-[#b08968]">
              Into Unforgettable Memories
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#6d5c55] leading-relaxed max-w-xl">
            From weddings to corporate celebrations, we handle every detail with
            elegance and precision — so you can enjoy your event stress-free.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-full bg-[#b08968] text-white text-sm font-medium hover:bg-[#9c6f50] transition duration-300 shadow-md">
              Book Free Consultation
            </button>

            <button className="px-6 py-3 rounded-full border border-[#b08968] text-[#b08968] text-sm font-medium hover:bg-[#b08968] hover:text-white transition duration-300">
              View Our Work
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-[#7c6a63]">
            <div>
              <p className="text-lg font-semibold text-[#3e2f2b]">150+</p>
              <p>Events Delivered</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-[#3e2f2b]">5+ Years</p>
              <p>Experience</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-[#3e2f2b]">30+</p>
              <p>Trusted Vendors</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552"
              alt="Event Decoration"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#ede6df] rounded-3xl -z-10"></div>
        </div>
      </div>

      {/* TRUST RUNNING BANNER */}
      <div className="bg-[#b08968] py-4 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-16 text-white text-sm tracking-widest uppercase font-medium">
          <span className="flex items-center gap-3">
            <span className="opacity-100 text-md md:text-lg lg:text-xl">✦</span>
            Premium Wedding Planning
          </span>

          <span className="flex items-center gap-3">
            <span className="opacity-100 text-md md:text-lg lg:text-xl">✦</span>
            Corporate Event Specialists
          </span>

          <span className="flex items-center gap-3">
            <span className="opacity-100 text-md md:text-lg lg:text-xl">✦</span>
            Elegant Stage Decorations
          </span>

          <span className="flex items-center gap-3">
            <span className="opacity-100 text-md md:text-lg lg:text-xl">✦</span>
            4.8 Star Rated Service
          </span>

          <span className="flex items-center gap-3">
            <span className="opacity-100 text-md md:text-lg lg:text-xl">✦</span>
            Serving Across Chennai
          </span>

          <span className="flex items-center gap-3">
            <span className="opacity-100 text-md md:text-lg lg:text-xl">✦</span>
            150+ Successful Events
          </span>

          {/* Duplicate for smooth loop */}
          <span className="flex items-center gap-3">
            <span className="opacity-100 text-md md:text-lg lg:text-xl">✦</span>
            Premium Wedding Planning
          </span>

          <span className="flex items-center gap-3">
            <span className="opacity-100 text-md md:text-lg lg:text-xl">✦</span>
            Corporate Event Specialists
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
