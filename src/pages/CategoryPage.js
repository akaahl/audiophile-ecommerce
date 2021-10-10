import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/CategoryPage/Hero";
import Items from "../components/CategoryPage/Items";
import CategoryCard from "../components/Shared/CategoryCard";
import CompanyDescription from "../components/Shared/CompanyDescription";
import Footer from "../components/Shared/Footer";

const CategoryPage = () => {
  const category = useParams().category;
  const filteredCategory = JSON.parse(localStorage.getItem("storage"))
    .data.filter((item) => item.category === category)
    .reverse();

  return (
    <div>
      <Hero category={category} />
      <Items filteredCategory={filteredCategory} params={category} />
      <CategoryCard params={category} />
      <CompanyDescription params={category} />
      <Footer params={category} />
    </div>
  );
};

export default CategoryPage;
