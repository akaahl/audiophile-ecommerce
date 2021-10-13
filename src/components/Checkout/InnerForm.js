import React from "react";
import codIcon from "../../assets/shared/desktop/icon-cash-on-delivery.svg";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { StyledInnerForm } from "./styles.js";
import TextError from "./TextError";
import RadioGroups from "./RadioGroups";

const InnerForm = () => {
  const cart = useSelector((state) => state.allData.cart).filter(
    (item) => item.quantity > 0
  );
  const total = cart.reduce(
    (total, amount) => (total += amount.price * amount.quantity),
    0
  );
  const shipping = 50;
  const tax = (0.2 * total).toFixed(1);
  const grandTotal = total + shipping + +tax;
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Field cannot be empty"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Field cannot be empty"),
    number: Yup.string()
      .matches(phoneRegExp, "Invalid phone number")
      .required("Field cannot be empty"),
    address: Yup.string().required("Field cannot be empty"),
    zipcode: Yup.string().required("Field cannot be empty"),
    city: Yup.string().required("Field cannot be empty"),
    country: Yup.string().required("Field cannot be empty"),
    method: Yup.string().required("Pick one of the payment option"),
    eNumber: Yup.string().when("method", {
      is: "e-money",
      then: Yup.string().required("Field cannot be empty"),
    }),
    ePin: Yup.string().when("method", {
      is: "e-money",
      then: Yup.string().required("Field cannot be empty"),
    }),
  });

  const initialValues = {
    name: "",
    email: "",
    number: "",
    address: "",
    zipcode: "",
    city: "",
    country: "",
    method: "e-money",
    eNumber: "",
    ePin: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        if (values.method === "cod") {
          values.eNumber = "";
          values.ePin = "";
          console.log(values);
        }

        console.log("Form validated");
      }}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      {(formik) => {
        console.log(formik);

        return (
          <StyledInnerForm as={Form}>
            <div className="left-side">
              <h2>Checkout</h2>

              <div className="billing">
                <h4>Billing Details</h4>

                <div className="billing-details">
                  <div className="name">
                    <div className="top">
                      <label htmlFor="name">Name</label>
                      <ErrorMessage name="name" component={TextError} />
                    </div>

                    <Field
                      type="text"
                      id="name"
                      placeholder="Alexei Ward"
                      className="input-el"
                      name="name"
                    />
                  </div>

                  <div className="email">
                    <div className="top">
                      <label htmlFor="email">Email</label>
                      <ErrorMessage name="email" component={TextError} />
                    </div>

                    <Field
                      type="email"
                      id="email"
                      placeholder="alexei@mail.com"
                      className="input-el"
                      name="email"
                    />
                  </div>

                  <div className="number">
                    <div className="top">
                      <label htmlFor="number">Phone Number</label>
                      <ErrorMessage name="number" component={TextError} />
                    </div>

                    <Field
                      type="text"
                      id="number"
                      placeholder="+1 202-555-0136"
                      className="input-el"
                      name="number"
                    />
                  </div>
                </div>
              </div>

              <div className="shipping">
                <h4>Shipping Info</h4>

                <div className="shipping-info">
                  <div className="address">
                    <div className="top">
                      <label htmlFor="address">Your Address</label>
                      <ErrorMessage name="address" component={TextError} />
                    </div>

                    <Field
                      type="text"
                      id="address"
                      placeholder="1137 Williams Avenue"
                      className="input-el"
                      name="address"
                    />
                  </div>

                  <div className="zip-code">
                    <div className="top">
                      <label htmlFor="zip-code">ZIP Code</label>
                      <ErrorMessage name="zipcode" component={TextError} />
                    </div>

                    <Field
                      type="text"
                      id="zip-code"
                      placeholder="10001"
                      className="input-el"
                      name="zipcode"
                    />
                  </div>

                  <div className="city">
                    <div className="top">
                      <label htmlFor="city">City</label>
                      <ErrorMessage name="city" component={TextError} />
                    </div>

                    <Field
                      type="text"
                      id="city"
                      placeholder="New York"
                      className="input-el"
                      name="city"
                    />
                  </div>

                  <div className="country">
                    <div className="top">
                      <label htmlFor="country">Country</label>
                      <ErrorMessage name="country" component={TextError} />
                    </div>

                    <Field
                      type="text"
                      id="country"
                      placeholder="United States"
                      className="input-el"
                      name="country"
                    />
                  </div>
                </div>
              </div>

              <div className="payment">
                <h4>Payment Details</h4>

                <div className="top">
                  <span>Payment Method</span>

                  <Field name="method" render={RadioGroups} />
                </div>

                <div className="bottom">
                  {formik.values.method === "e-money" && (
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
                  )}

                  {formik.values.method === "cod" && (
                    <div className="cod-details">
                      <img src={codIcon} alt="cash on delivery" />
                      <p>
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="right-side">
              <h2>Summary</h2>

              <ul>
                {cart &&
                  cart.map((item) => (
                    <li key={uuidv4()}>
                      <div className="left-side">
                        <img
                          src={process.env.PUBLIC_URL + item.image}
                          alt={item.name}
                        />

                        <div className="item-details">
                          <p className="display-name">{item.displayName}</p>
                          <span className="price">{`$${item.price.toLocaleString()}`}</span>
                        </div>
                      </div>

                      <span className="quantity">{`x${item.quantity}`}</span>
                    </li>
                  ))}
              </ul>

              <div className="total-details">
                <div className="total">
                  <p className="total-text">Total</p>
                  <span className="total-span">{`$ ${total.toLocaleString()}`}</span>
                </div>

                <div className="shipping">
                  <p className="total-text">Shipping</p>
                  <span className="total-span">{`$ ${shipping}`}</span>
                </div>

                <div className="tax">
                  <p className="total-text">VAT (Included)</p>
                  <span className="total-span">{`$ ${tax}`}</span>
                </div>

                <div className="grand-total">
                  <p className="total-text">Grand Total</p>
                  <span className="total-span">{`$ ${grandTotal.toLocaleString()}`}</span>
                </div>

                <button className="submit-pay" type="submit">
                  Continue &amp; Pay
                </button>
              </div>
            </div>
          </StyledInnerForm>
        );
      }}
    </Formik>
  );
};

export default InnerForm;
