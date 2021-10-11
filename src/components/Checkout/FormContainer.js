import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const FormContainer = () => {
  const history = useHistory();

  return (
    <StyledForm>
      <button onClick={() => history.goBack()} className="go-back-btn">
        Go Back
      </button>

      <div className="form-wrapper">
        <div className="left-side">
          <h2>Checkout</h2>

          <div className="billing">
            <h4>Billing Details</h4>

            <div className="billing-details">
              <div className="name">
                <div className="top">
                  <label htmlFor="name">Name</label>
                  <small>Field cannot be empty</small>
                </div>

                <input
                  type="text"
                  id="name"
                  placeholder="Alexei Ward"
                  className="input-el"
                />
              </div>

              <div className="email">
                <div className="top">
                  <label htmlFor="email">Email</label>
                  <small>Field cannot be empty</small>
                </div>

                <input
                  type="email"
                  id="email"
                  placeholder="alexei@mail.com"
                  className="input-el"
                />
              </div>

              <div className="number">
                <div className="top">
                  <label htmlFor="number">Phone Number</label>
                  <small>Field cannot be empty</small>
                </div>

                <input
                  type="number"
                  id="number"
                  placeholder="+1 202-555-0136"
                  className="input-el"
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
                  <small>Field cannot be empty</small>
                </div>

                <input
                  type="text"
                  id="address"
                  placeholder="1137 Williams Avenue"
                  className="input-el"
                />
              </div>

              <div className="zip-code">
                <div className="top">
                  <label htmlFor="zip-code">ZIP Code</label>
                  <small>Field cannot be empty</small>
                </div>

                <input
                  type="text"
                  id="zip-code"
                  placeholder="10001"
                  className="input-el"
                />
              </div>

              <div className="city">
                <div className="top">
                  <label htmlFor="city">City</label>
                  <small>Field cannot be empty</small>
                </div>

                <input
                  type="text"
                  id="city"
                  placeholder="New York"
                  className="input-el"
                />
              </div>

              <div className="country">
                <div className="top">
                  <label htmlFor="country">Country</label>
                  <small>Field cannot be empty</small>
                </div>

                <input
                  type="text"
                  id="country"
                  placeholder="United States"
                  className="input-el"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <h2>Summary</h2>
        </div>
      </div>
    </StyledForm>
  );
};

export default FormContainer;

const StyledForm = styled.form`
  background-color: #f2f2f2;
  padding: 50px 150px;

  .go-back-btn {
    background: none;
    border: none;
    margin-top: 40px;
    font-weight: 400;
    font-size: 18px;
    color: #4c4c4c;
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #d87d4a;
    }
  }

  .form-wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;

    .left-side {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 40px;
      flex: 0.7;

      h2 {
        text-transform: uppercase;
        font-size: 30px;
      }

      .billing {
        margin-top: 30px;

        h4 {
          text-transform: uppercase;
          color: #d87d4a;
          letter-spacing: 1px;
          font-size: 16px;
        }

        .billing-details {
          margin-top: 20px;
          display: grid;
          grid-gap: 15px;
          grid-template-areas:
            "name email"
            "number .";

          .name {
            grid-area: name;
          }

          .email {
            grid-area: email;
          }

          .number {
            grid-area: number;
          }

          .name,
          .email,
          .number {
            .top {
              display: flex;
              align-items: center;
              justify-content: space-between;

              label {
                font-weight: 700;
                color: #000000;
                font-size: 14px;
              }

              small {
                display: none;
                color: orangered;
                font-size: 12px;
                font-weight: 400;
              }
            }

            .input-el {
              margin-top: 10px;
              width: 100%;
              border-radius: 5px;
              padding: 15px;
              border: 1px solid rgba(0, 0, 0, 0.2);
            }
          }
        }
      }

      .shipping {
        margin-top: 30px;

        h4 {
          text-transform: uppercase;
          color: #d87d4a;
          letter-spacing: 1px;
          font-size: 16px;
        }

        .shipping-info {
          margin-top: 20px;
          display: grid;
          grid-gap: 15px;
          grid-template-areas:
            "address address"
            "zipcode city"
            "country .";

          .address {
            grid-area: address;
          }

          .zip-code {
            grid-area: zipcode;
          }

          .city {
            grid-area: city;
          }

          .country {
            grid-area: country;
          }

          .address,
          .zip-code,
          .city,
          .country {
            .top {
              display: flex;
              align-items: center;
              justify-content: space-between;

              label {
                font-weight: 700;
                color: #000000;
                font-size: 14px;
              }

              small {
                display: none;
                color: orangered;
                font-size: 12px;
                font-weight: 400;
              }
            }

            .input-el {
              margin-top: 10px;
              width: 100%;
              border-radius: 5px;
              padding: 15px;
              border: 1px solid rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
    }

    .right-side {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 25px;
      flex: 0.3;
      margin-left: 30px;
    }
  }
`;
