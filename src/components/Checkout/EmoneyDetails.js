import React from "react";
import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

const EmoneyDetails = () => {
  return (
    <div className="e-money-details">
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
    </div>
  );
};

export default EmoneyDetails;
