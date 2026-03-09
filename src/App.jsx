import React from "react";

// Component
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

let App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <About />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
