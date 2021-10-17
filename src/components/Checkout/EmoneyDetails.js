import React from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";
import { motion } from "framer-motion";
import { scaleIn } from "../../animations";

const EmoneyDetails = () => {
  return (
    <motion.div
      className="e-money-details"
      variants={scaleIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="e-money-number">
        <div className="top">
          <label htmlFor="eNumber">e-Money Number</label>
          <ErrorMessage name="eNumber" component={TextError} />
        </div>

        <Field
          type="text"
          name="eNumber"
          id="eNumber"
          placeholder="238521993"
          className="input-el"
        />
      </div>

      <div className="e-money-pin">
        <div className="top">
          <label htmlFor="ePin">e-Money PIN</label>
          <ErrorMessage name="ePin" component={TextError} />
        </div>
        <Field
          type="text"
          name="ePin"
          id="pin"
          placeholder="6891"
          className="input-el"
        />
      </div>
    </motion.div>
  );
};

export default EmoneyDetails;
