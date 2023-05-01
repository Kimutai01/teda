import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import React from "react";

const contact = () => {
  return (
    <div>
      <Hero heading="Contact" image="contact-img" />
      <Contact />
      <Footer />
    </div>
  );
};

export default contact;
