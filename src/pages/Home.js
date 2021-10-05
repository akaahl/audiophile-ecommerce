import React from "react";
import Hero from "../components/Home/Hero";
import CategoryCard from "../components/Shared/CategoryCard";
import Gallery from "../components/Home/Gallery";
import CompanyDescription from "../components/Shared/CompanyDescription";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryCard />
      <Gallery />
      <CompanyDescription />
    </div>
  );
};

export default Home;
