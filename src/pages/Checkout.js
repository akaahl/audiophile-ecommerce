import React from "react";
import Header from "../components/Checkout/Header";
import FormContainer from "../components/Checkout/FormContainer";
import Footer from "../components/Shared/Footer";

const Checkout = () => {
  return (
    <div>
      <Header />
      <FormContainer />
      <Footer params="checkout" />
    </div>
  );
};

export default Checkout;
