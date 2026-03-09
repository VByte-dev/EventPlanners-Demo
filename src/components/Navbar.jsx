import { useState } from "react";

let Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "Services",
    "Portfolio",
    "About",
    "Contact"
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-[#f8f5f2]/90 backdrop-blur-md border-b border-[#e7ded5]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-[#b08968] flex items-center justify-center text-white font-semibold">
              EP
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-wide text-[#3e2f2b]">
                Event Planner
              </h1>
              <p className="text-xs text-[#8c7b75] -mt-1">
                Premium Event Services
              </p>
            </div>
          </div>
   
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4e3b34]">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="relative group transition-all duration-300"
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#b08968] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* CTA */}
            <button className="ml-4 px-5 py-2 rounded-full bg-[#b08968] text-white text-sm font-medium hover:bg-[#9c6f50] transition duration-300">
              Book Consultation
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#3e2f2b]"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#f8f5f2] px-6 pb-6">
            <div className="flex flex-col gap-4 text-sm font-medium text-[#4e3b34]">
              {navLinks.map((link) => (
                <a key={link} href="#" onClick={() => setIsOpen(false)}>
                  {link}
                </a>
              ))}

              <button className="mt-4 px-5 py-2 rounded-full bg-[#b08968] text-white text-sm font-medium">
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;