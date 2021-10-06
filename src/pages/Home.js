import React from "react";
import Hero from "../components/Home/Hero";
import CategoryCard from "../components/Shared/CategoryCard";
import Gallery from "../components/Home/Gallery";
import CompanyDescription from "../components/Shared/CompanyDescription";
import Footer from "../components/Shared/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryCard />
      <Gallery />
      {/* <CompanyDescription /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
