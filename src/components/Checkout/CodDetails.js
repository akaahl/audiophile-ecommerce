import React from "react";
import codIcon from "../../assets/shared/desktop/icon-cash-on-delivery.svg";

const CodDetails = () => {
  return (
    <div className="cod-details">
      <img src={codIcon} alt="cash on delivery" />
      <p>
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </div>
  );
};

export default CodDetails;
