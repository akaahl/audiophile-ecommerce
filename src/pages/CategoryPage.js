import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/CategoryPage/Hero";
import Items from "../components/CategoryPage/Items";
import CategoryCard from "../components/Shared/CategoryCard";
import CompanyDescription from "../components/Shared/CompanyDescription";
import Footer from "../components/Shared/Footer";
import { useDispatch } from "react-redux";
import { fetchData, updateData } from "../actions/dataActions";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const category = useParams().category;
  const filteredCategory = JSON.parse(localStorage.getItem("storage"))
    .data.filter((item) => item.category === category)
    .reverse();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    const dataUrl = "data.json";
    const cartUrl = "cart.json";
    const allData = JSON.parse(localStorage.getItem("storage"));

    if (allData) {
      dispatch(updateData(allData));
    } else {
      dispatch(fetchData(dataUrl, cartUrl));
    }
  }, [dispatch]);

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
