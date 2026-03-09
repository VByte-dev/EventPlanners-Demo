let Testimonials = () => {
  const testimonials = [
    {
      name: "Priya & Arjun",
      event: "Wedding Celebration",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "From planning to execution, everything was handled flawlessly. We didn’t have to worry about a single detail. The décor, coordination, and timing were absolutely perfect.",
    },
    {
      name: "Rajesh Kumar",
      event: "Corporate Annual Meet",
      image:
        "https://randomuser.me/api/portraits/men/45.jpg",
      review:
        "Professional, organized, and extremely reliable. The team managed our corporate event with precision and creativity. Our guests were truly impressed.",
    },
    {
      name: "Meena Sharma",
      event: "Birthday Celebration",
      image:
        "https://randomuser.me/api/portraits/women/32.jpg",
      review:
        "They transformed our simple idea into a magical experience. Every element felt thoughtfully designed. Highly recommended for stress-free event planning.",
    },
  ];

  return (
    <section className="py-28 bg-[#f8f5f2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-[#b08968]">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#3e2f2b] leading-tight">
            Words From Our
            <span className="block text-[#b08968]">
              Happy Clients
            </span>
          </h2>

          <p className="mt-6 text-[#6d5c55] leading-relaxed">
            We take pride in creating memorable experiences. Here’s what our
            clients say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-500"
            >
              {/* Stars */}
              <div className="flex text-[#b08968] text-sm">
                ★★★★★
              </div>

              {/* Review */}
              <p className="mt-6 text-[#6d5c55] leading-relaxed text-sm">
                “{item.review}”
              </p>

              {/* Client Info */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-semibold text-[#3e2f2b]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#8c7b75]">
                    {item.event}
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
export default Testimonials;