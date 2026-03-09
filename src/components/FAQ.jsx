import { useState } from "react";

let FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How early should I book your services?",
      answer:
        "We recommend booking at least 2–3 months in advance for weddings and large events. However, depending on availability, we also accommodate shorter timelines.",
    },
    {
      question: "Do you work within my budget?",
      answer:
        "Absolutely. We customize planning based on your budget while maintaining quality and elegance. Transparency is one of our core values.",
    },
    {
      question: "Do you handle all vendors?",
      answer:
        "Yes. We coordinate with trusted vendors including caterers, decorators, photographers, and more to ensure smooth execution.",
    },
    {
      question: "Do you manage the event on the actual day?",
      answer:
        "Yes. Our team stays on-site to manage logistics, vendor coordination, timing, and overall event flow so you can relax and enjoy.",
    },
    {
      question: "Do you organize events outside Chennai?",
      answer:
        "Yes, we handle destination and outstation events depending on project scope and planning timeline.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm tracking-widest uppercase text-[#b08968]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-[#3e2f2b] leading-tight">
            Everything You Need
            <span className="block text-[#b08968]">
              To Know Before Booking
            </span>
          </h2>

          <p className="mt-6 text-[#6d5c55] leading-relaxed max-w-2xl mx-auto">
            We believe in transparency. Here are answers to common questions
            to help you plan confidently.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#e7ded5] rounded-3xl p-6 transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-sm md:text-base font-medium text-[#3e2f2b]">
                  {faq.question}
                </span>
                <span className="text-[#b08968] text-lg font-semibold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-4 text-sm text-[#6d5c55] leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;