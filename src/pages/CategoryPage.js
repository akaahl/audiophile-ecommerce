import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/CategoryPage/Hero";
import Items from "../components/CategoryPage/Items";
import CategoryCard from "../components/Shared/CategoryCard";
import CompanyDescription from "../components/Shared/CompanyDescription";
import Footer from "../components/Shared/Footer";
import { useSelector } from "react-redux";

const CategoryPage = () => {
  const category = useParams().category;
  const filteredCategory = useSelector((state) => state.allData.data)
    .filter((item) => item.category === category)
    .reverse();

  console.log(filteredCategory);

  return (
    <div>
      <Hero category={category} />
      <Items filteredCategory={filteredCategory} />
      <CategoryCard />
      <CompanyDescription />
      <Footer />
    </div>
  );
};

export default CategoryPage;
