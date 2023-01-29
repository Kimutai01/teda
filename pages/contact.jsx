import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import React from "react";

const contact = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        message="You want to get in touch? submit the form below"
      />
      <Contact />
    </div>
  );
};

export default contact;
