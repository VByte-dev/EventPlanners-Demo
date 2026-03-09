import React from "react";
import { useState } from "react";

let Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Wedding", "Corporate", "Birthday"];

  const portfolioItems = [
    {
      id: 1,
      category: "Wedding",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
      title: "Grand Wedding Setup",
      location: "Chennai",
    },
    {
      id: 2,
      category: "Corporate",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      title: "Corporate Annual Meet",
      location: "OMR",
    },
    {
      id: 3,
      category: "Birthday",
      image:
        "https://images.unsplash.com/photo-1464349153735-7db50ed83c84",
      title: "Luxury Birthday Celebration",
      location: "Anna Nagar",
    },
    {
      id: 4,
      category: "Wedding",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552",
      title: "Engagement Ceremony",
      location: "T Nagar",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="py-24 bg-[#f8f5f2]" id="Portfolio">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm tracking-widest text-[#b08968] uppercase">
            Our Work
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#3e2f2b]">
            Creating Experiences That
            <span className="block text-[#b08968]">
              Speak for Themselves
            </span>
          </h2>
          <p className="mt-6 text-[#6d5c55] leading-relaxed">
            Explore some of our beautifully crafted events — each designed
            with elegance, creativity, and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-12 flex justify-center flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                activeCategory === category
                  ? "bg-[#b08968] text-white"
                  : "border border-[#d8cfc6] text-[#6d5c55] hover:bg-[#ede6df]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[380px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {item.category} • {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;