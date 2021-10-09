import React, { useEffect } from "react";
import Header from "../components/ProductPage/Header";
import ItemDetails from "../components/ProductPage/ItemDetails/ItemDetails";
import Footer from "../components/Shared/Footer";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams().product;

  useEffect(() => {
    window.scrollTo({ top: 0 });
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
