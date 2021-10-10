import React, { useEffect } from "react";
import Header from "../components/ProductPage/Header";
import ItemDetails from "../components/ProductPage/ItemDetails/ItemDetails";
import Footer from "../components/Shared/Footer";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData, updateData } from "../actions/dataActions";

const ProductPage = () => {
  const dispatch = useDispatch();
  const params = useParams().product;

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const dataUrl = "data.json";
    const cartUrl = "cart.json";
    const allData = JSON.parse(localStorage.getItem("storage"));

    if (allData) {
      dispatch(updateData(allData));
    } else {
      dispatch(fetchData(dataUrl, cartUrl));
    }
  });

  return (
    <div>
      <Header />
      <ItemDetails params={params} />
      <Footer />
    </div>
  );
};

export default ProductPage;
