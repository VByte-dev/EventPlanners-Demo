let About = () => {
  return (
    <section className="py-28 bg-white" id="About">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Event Planning Team"
              className="w-full h-[520px] object-cover"
            />
          </div>

          {/* Decorative Accent */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#ede6df] rounded-3xl -z-10"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-sm tracking-widest uppercase text-[#b08968]">
            About Us
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#3e2f2b] leading-tight">
            Crafting Celebrations
            <span className="block text-[#b08968]">
              With Passion & Precision
            </span>
          </h2>

          <p className="mt-6 text-[#6d5c55] leading-relaxed">
            We believe every event tells a story. Our goal is to transform your
            vision into a beautifully executed celebration — handled with
            professionalism, creativity, and careful attention to detail.
          </p>

          <p className="mt-4 text-[#6d5c55] leading-relaxed">
            With experience in weddings, corporate events, and private
            celebrations, our team ensures seamless coordination from concept
            to completion.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#f8f5f2] flex items-center justify-center text-[#b08968] text-sm font-semibold">
                ✓
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#3e2f2b]">
                  Personal Attention
                </h4>
                <p className="text-xs text-[#8c7b75]">
                  Tailored planning based on your vision.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#f8f5f2] flex items-center justify-center text-[#b08968] text-sm font-semibold">
                ✓
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#3e2f2b]">
                  Transparent Pricing
                </h4>
                <p className="text-xs text-[#8c7b75]">
                  Clear budgeting with no hidden costs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#f8f5f2] flex items-center justify-center text-[#b08968] text-sm font-semibold">
                ✓
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#3e2f2b]">
                  Reliable Execution
                </h4>
                <p className="text-xs text-[#8c7b75]">
                  Professional on-site management.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#f8f5f2] flex items-center justify-center text-[#b08968] text-sm font-semibold">
                ✓
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#3e2f2b]">
                  Experienced Team
                </h4>
                <p className="text-xs text-[#8c7b75]">
                  Skilled professionals with proven expertise.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button className="mt-10 px-6 py-3 rounded-full bg-[#b08968] text-white text-sm font-medium hover:bg-[#9c6f50] transition duration-300 shadow-md">
            Let’s Plan Your Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;