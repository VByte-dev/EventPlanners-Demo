let Footer = () => {
  return (
    <footer className="bg-[#2f2421] text-[#f3ebe4] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Event Planner
            </h3>

            <p className="mt-4 text-sm text-[#d8cfc6] leading-relaxed">
              Creating elegant, memorable, and stress-free celebrations.
              We help turn visions into beautifully executed events.
            </p>

            <div className="mt-6 flex gap-4 text-sm">
              <span className="cursor-pointer hover:text-[#b08968] transition">Instagram</span>
              <span className="cursor-pointer hover:text-[#b08968] transition">Facebook</span>
              <span className="cursor-pointer hover:text-[#b08968] transition">YouTube</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-3 text-sm text-[#d8cfc6]">
              <li className="hover:text-[#b08968] transition cursor-pointer">Home</li>
              <li className="hover:text-[#b08968] transition cursor-pointer">Services</li>
              <li className="hover:text-[#b08968] transition cursor-pointer">Portfolio</li>
              <li className="hover:text-[#b08968] transition cursor-pointer">About</li>
              <li className="hover:text-[#b08968] transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Our Services
            </h4>

            <ul className="mt-6 space-y-3 text-sm text-[#d8cfc6]">
              <li>Wedding Planning</li>
              <li>Corporate Events</li>
              <li>Birthday Celebrations</li>
              <li>Stage Decoration</li>
              <li>Complete Event Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
              Contact
            </h4>

            <div className="mt-6 space-y-3 text-sm text-[#d8cfc6]">
              <p>📍 Your City, State</p>
              <p>📞 +91 XXXXX XXXXX</p>
              <p>✉ contact@yourdomain.com</p>
            </div>

            <p className="mt-6 text-sm text-[#b08968] font-medium">
              Limited bookings available this season.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-[#4a3b36] pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#cbbfb6] gap-4">

          <p>
            © {new Date().getFullYear()} Event Planner. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-[#b08968] transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#b08968] transition cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;