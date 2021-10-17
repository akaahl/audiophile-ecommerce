import React from "react";
import codIcon from "../../assets/shared/desktop/icon-cash-on-delivery.svg";
import { motion } from "framer-motion";
import { scaleIn } from "../../animations";

const CodDetails = () => {
  return (
    <motion.div
      className="cod-details"
      variants={scaleIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <img src={codIcon} alt="cash on delivery" />
      <p>
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </motion.div>
  );
};

export default CodDetails;
