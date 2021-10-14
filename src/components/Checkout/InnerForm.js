import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, validationSchema } from "./utils";
import { StyledInnerForm } from "./styles.js";
import TextError from "./TextError";
import RadioGroups from "./RadioGroups";
import EmoneyDetails from "./EmoneyDetails";
import CodDetails from "./CodDetails";
import OrderConfirmation from "./OrderConfirmation";

const InnerForm = () => {
  const [modal, setModal] = useState(false);
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

  const handleSubmit = (values) => {
    if (values.method === "cod") {
      values.eNumber = "";
      values.ePin = "";
    }

    setModal(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      {(formik) => {
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

                  <Field name="method">
                    {({ field }) => <RadioGroups field={field} />}
                  </Field>
                </div>

                <div className="bottom">
                  {formik.values.method === "e-money" && <EmoneyDetails />}

                  {formik.values.method === "cod" && <CodDetails />}
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

                <button
                  className="submit-pay"
                  type="submit"
                  disabled={cart.length < 1}
                >
                  Continue &amp; Pay
                </button>
              </div>
            </div>

            {modal && (
              <OrderConfirmation
                cart={cart}
                grandTotal={grandTotal}
                setModal={setModal}
              />
            )}
          </StyledInnerForm>
        );
      }}
    </Formik>
  );
};

export default InnerForm;
