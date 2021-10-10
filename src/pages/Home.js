import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import CategoryCard from "../components/Shared/CategoryCard";
import Gallery from "../components/Home/Gallery";
import CompanyDescription from "../components/Shared/CompanyDescription";
import Footer from "../components/Shared/Footer";
import { fetchData, updateData } from "../actions/dataActions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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
      <Hero />
      <CategoryCard />
      <Gallery />
      <CompanyDescription />
      <Footer />
    </div>
  );
};

export default Home;
