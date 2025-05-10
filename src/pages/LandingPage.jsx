import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      
      <Hero
        title="Discover Our New Clothing Collection"
        subtitle="Latest fashion trends curated just for you"
        btnText="Shop Now"
      />
      <ProductShowcase title="Our Products" />
      <Footer companyName="StyleWear" />
    </>
  );
};

export default LandingPage;
