import React from "react";

let Services = () => {
  const services = [
    {
      title: "Wedding Planning",
      description:
        "Complete wedding planning from venue selection to grand execution, crafted with elegance and attention to every detail.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
    {
      title: "Corporate Events",
      description:
        "Professional corporate event management including conferences, product launches, and annual celebrations.",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    },
    {
      title: "Birthday & Private Parties",
      description:
        "Creative and stylish birthday parties and private celebrations designed to create unforgettable moments.",
      image:
        "https://images.unsplash.com/photo-1464349153735-7db50ed83c84",
    },
    {
      title: "Engagement & Reception",
      description:
        "Elegant engagement and reception decor setups tailored to reflect your unique love story.",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
    },
    {
      title: "Stage Decoration",
      description:
        "Luxury stage design concepts with premium floral arrangements and modern lighting aesthetics.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    },
    {
      title: "Complete Event Management",
      description:
        "From planning to execution — we handle vendors, logistics, coordination, and flawless event delivery.",
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-[#b08968]">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#3e2f2b] leading-tight">
            Thoughtfully Designed Events,
            <span className="block text-[#b08968]">
              Seamlessly Executed
            </span>
          </h2>

          <p className="mt-6 text-[#6d5c55] leading-relaxed">
            We offer end-to-end event planning solutions tailored to your
            vision, budget, and expectations — ensuring every celebration
            is executed with precision and elegance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#3e2f2b]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm text-[#6d5c55] leading-relaxed">
                  {service.description}
                </p>

                <button className="mt-6 text-sm font-medium text-[#b08968] hover:underline">
                  Enquire Now →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;