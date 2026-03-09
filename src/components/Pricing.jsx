let Pricing = () => {
  const packages = [
    {
      name: "Basic",
      price: "Starting from ₹50,000",
      description: "Ideal for small and intimate celebrations.",
      features: [
        "Basic décor setup",
        "Vendor coordination",
        "On-site supervision",
        "Budget planning assistance",
      ],
      highlighted: false,
    },
    {
      name: "Premium",
      price: "Starting from ₹1,20,000",
      description: "Perfect for grand and memorable events.",
      features: [
        "Custom décor design",
        "Complete vendor management",
        "Stage & lighting setup",
        "Full event coordination",
        "Dedicated event manager",
      ],
      highlighted: true,
    },
    {
      name: "Luxury",
      price: "Custom Pricing",
      description: "For large-scale, high-end celebrations.",
      features: [
        "Luxury décor concepts",
        "Premium vendor partnerships",
        "Advanced lighting & effects",
        "Complete event production",
        "VIP guest coordination",
        "Priority planning support",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-28 bg-[#f8f5f2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-[#b08968]">
            Our Packages
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#3e2f2b] leading-tight">
            Flexible Plans Designed
            <span className="block text-[#b08968]">For Every Celebration</span>
          </h2>

          <p className="mt-6 text-[#6d5c55] leading-relaxed">
            Choose a package that fits your event size and expectations. We also
            offer customized solutions tailored to your vision and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-3xl p-10 transition duration-500 ${
                pkg.highlighted
                  ? "bg-white shadow-xl scale-105 border border-[#b08968]"
                  : "bg-white shadow-md hover:shadow-xl"
              }`}
            >
              {/* Package Name */}
              <h3 className="text-xl font-semibold text-[#3e2f2b]">
                {pkg.name}
              </h3>

              {/* Price */}
              <p className="mt-4 text-[#b08968] font-medium">{pkg.price}</p>

              {/* Description */}
              <p className="mt-4 text-sm text-[#6d5c55] leading-relaxed">
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-3 text-sm text-[#6d5c55]">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#b08968] font-semibold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-10 w-full py-3 rounded-full text-sm font-medium transition duration-300 ${
                  pkg.highlighted
                    ? "bg-[#b08968] text-white hover:bg-[#9c6f50]"
                    : "border border-[#b08968] text-[#b08968] hover:bg-[#b08968] hover:text-white"
                }`}
              >
                Check Availability
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
