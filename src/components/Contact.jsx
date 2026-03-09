let Contact = () => {
  return (
    <section className="py-28 bg-[#f8f5f2]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* LEFT: CONTACT FORM */}
        <div>
          <p className="text-sm tracking-widest uppercase text-[#b08968]">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#3e2f2b] leading-tight">
            Let’s Start Planning
            <span className="block text-[#b08968]">Your Perfect Event</span>
          </h2>

          <p className="mt-6 text-[#6d5c55] leading-relaxed">
            Share your event details with us, and our team will get back to you
            with a customized plan tailored to your vision.
          </p>

          <form className="mt-10 bg-white p-8 rounded-3xl shadow-md space-y-6">
            {/* Name */}
            <div>
              <label className="text-sm text-[#3e2f2b]">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-[#e7ded5] focus:outline-none focus:ring-2 focus:ring-[#b08968]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-[#3e2f2b]">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-[#e7ded5] focus:outline-none focus:ring-2 focus:ring-[#b08968]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-[#3e2f2b]">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-[#e7ded5] focus:outline-none focus:ring-2 focus:ring-[#b08968]"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="text-sm text-[#3e2f2b]">Event Type</label>
              <select className="mt-2 w-full px-4 py-3 rounded-xl border border-[#e7ded5] focus:outline-none focus:ring-2 focus:ring-[#b08968]">
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday Party</option>
                <option>Engagement</option>
                <option>Other</option>
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label className="text-sm text-[#3e2f2b]">Event Date</label>
              <input
                type="date"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-[#e7ded5] focus:outline-none focus:ring-2 focus:ring-[#b08968]"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="text-sm text-[#3e2f2b]">Estimated Budget</label>
              <select className="mt-2 w-full px-4 py-3 rounded-xl border border-[#e7ded5] focus:outline-none focus:ring-2 focus:ring-[#b08968]">
                <option>Below ₹50,000</option>
                <option>₹50,000 - ₹1,00,000</option>
                <option>₹1,00,000 - ₹3,00,000</option>
                <option>Above ₹3,00,000</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-[#3e2f2b]">Event Details</label>
              <textarea
                rows="4"
                placeholder="Tell us more about your event..."
                className="mt-2 w-full px-4 py-3 rounded-xl border border-[#e7ded5] focus:outline-none focus:ring-2 focus:ring-[#b08968]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#b08968] text-white font-medium hover:bg-[#9c6f50] transition duration-300 shadow-md"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="flex flex-col justify-center">
          <div className="bg-white p-10 rounded-3xl shadow-md">
            <h3 className="text-xl font-semibold text-[#3e2f2b]">
              Get In Touch
            </h3>

            <p className="mt-4 text-[#6d5c55] text-sm leading-relaxed">
              Our team is available to assist you with planning and
              consultation. Reach out directly for faster response.
            </p>

            <div className="mt-8 space-y-4 text-sm text-[#3e2f2b]">
              <p>
                <strong>Phone:</strong> +91 XXXXX XXXXX
              </p>
              <p>
                <strong>Email:</strong> contact@yourdomain.com
              </p>
              <p>
                <strong>Location:</strong> Your City, State
              </p>
            </div>

            <p className="mt-8 text-sm text-[#b08968] font-medium">
              Limited dates available for this season.
            </p>

            <button className="mt-6 w-full py-3 rounded-full border border-[#b08968] text-[#b08968] hover:bg-[#b08968] hover:text-white transition duration-300">
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;