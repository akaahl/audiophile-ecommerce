import React from "react";

const RadioGroups = ({ field }) => (
  <div className="payment-methods">
    <label htmlFor="e-money" className="payment-method">
      <input
        {...field}
        type="radio"
        name="method"
        id="e-money"
        value="e-money"
        checked={field.value === "e-money"}
      />
      <div className="checkmark"></div>
      <span>e-Money</span>
    </label>

    <label htmlFor="cod" className="payment-method">
      <input
        {...field}
        type="radio"
        name="method"
        id="cod"
        value="cod"
        checked={field.value === "cod"}
      />
      <div className="checkmark"></div>
      <span>Cash on Delivery</span>
    </label>
  </div>
);

export default RadioGroups;
