let Process = () => {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description:
        "We begin with a detailed discussion to understand your vision, expectations, and event requirements.",
    },
    {
      number: "02",
      title: "Planning & Budget Alignment",
      description:
        "We create a customized plan that aligns perfectly with your style preferences and budget.",
    },
    {
      number: "03",
      title: "Vendor Coordination",
      description:
        "From caterers to decorators, we manage and coordinate trusted vendors for smooth execution.",
    },
    {
      number: "04",
      title: "Design & Setup",
      description:
        "Our team handles décor styling, layout planning, and on-site arrangements with precision.",
    },
    {
      number: "05",
      title: "Execution & Celebration",
      description:
        "On the big day, we manage everything so you can relax and enjoy every special moment.",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-[#b08968]">
            Our Process
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#3e2f2b] leading-tight">
            A Structured Approach
            <span className="block text-[#b08968]">
              To Stress-Free Celebrations
            </span>
          </h2>

          <p className="mt-6 text-[#6d5c55] leading-relaxed">
            We follow a clear, transparent process to ensure every detail is
            handled with care — giving you complete peace of mind.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-20 relative">

          {/* Horizontal Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[1px] bg-[#e7ded5]"></div>

          <div className="grid gap-12 lg:grid-cols-5 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">

                {/* Circle Number */}
                <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-[#f8f5f2] border border-[#e7ded5] text-[#b08968] text-lg font-semibold shadow-sm">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-[#3e2f2b]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm text-[#6d5c55] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Process;