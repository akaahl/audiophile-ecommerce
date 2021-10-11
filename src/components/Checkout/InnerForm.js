import React from "react";
import styled from "styled-components";
import codIcon from "../../assets/shared/desktop/icon-cash-on-delivery.svg";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const InnerForm = () => {
  const cart = useSelector((state) => state.allData.cart);

  return (
    <StyledInnerForm>
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

        <div className="payment">
          <h4>Payment Details</h4>

          <div className="top">
            <span>Payment Method</span>

            <div className="payment-methods">
              <div className="payment-method">
                <input
                  type="radio"
                  name="method"
                  id="e-money"
                  value="e-money"
                  checked
                />
                <div className="checkmark"></div>
                <label htmlFor="e-money">e-Money</label>
              </div>

              <div className="payment-method">
                <input type="radio" name="method" id="cod" value="cod" />
                <div className="checkmark"></div>
                <label htmlFor="cod">Cash on Delivery</label>
              </div>
            </div>
          </div>

          <div className="bottom">
            {/* <div className="e-money-details">
              <div className="e-money-number">
                <div className="top">
                  <label htmlFor="number">e-Money Number</label>
                  <small>Field cannot be empty</small>
                </div>

                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="238521993"
                  className="input-el"
                />
              </div>

              <div className="e-money-pin">
                <div className="top">
                  <label htmlFor="pin">e-Money PIN</label>
                  <small>Field cannot be empty</small>
                </div>
                <input
                  type="text"
                  name="pin"
                  id="pin"
                  placeholder="6891"
                  className="input-el"
                />
              </div>
            </div> */}

            {/* <div className="cod-details">
              <img src={codIcon} alt="cash on delivery" />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div> */}
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
                    <p>{item.displayName}</p>
                    <span>{item.price.toLocaleString()}</span>
                  </div>
                </div>

                <span>{item.quantity}</span>
              </li>
            ))}
        </ul>
      </div>
    </StyledInnerForm>
  );
};

export default InnerForm;

const StyledInnerForm = styled.div`
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

    .payment {
      margin-top: 30px;

      h4 {
        text-transform: uppercase;
        color: #d87d4a;
        letter-spacing: 1px;
        font-size: 16px;
      }

      .top {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        span {
          flex: 0.5;
          font-weight: 700;
          color: #000000;
          font-size: 14px;
        }

        .payment-methods {
          flex: 0.5;
          margin-left: 15px;

          .payment-method {
            width: 100%;
            border-radius: 5px;
            padding: 15px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            position: relative;
            display: flex;
            align-items: center;

            &:nth-child(2) {
              margin-top: 15px;
            }

            .checkmark {
              height: 20px;
              width: 20px;
              border-radius: 50%;
              border: 1px solid rgba(0, 0, 0, 0.2);

              position: relative;

              &::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 0px;
                width: 0px;
                border-radius: 50%;
                background-color: #d87d4a;
                transition: all 0.4s ease-in-out;
              }
            }

            input[type="radio"] {
              display: none;

              &:checked ~ .checkmark::after {
                height: 10px;
                width: 10px;
              }
            }

            label {
              margin-left: 15px;
              font-weight: 700;
              font-size: 14px;
            }
          }
        }
      }

      .bottom {
        margin-top: 40px;

        .e-money-details {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .e-money-number,
          .e-money-pin {
            flex: 0.5;

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

          .e-money-pin {
            margin-left: 15px;
          }
        }

        .cod-details {
          display: flex;
          align-items: center;

          p {
            flex: 1;
            margin-left: 40px;
            color: #191919;
            opacity: 0.6;
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

    h2 {
      text-transform: uppercase;
    }

    ul {
      list-style: none;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left-side {
          margin-top: 25px;
          display: flex;
          align-items: center;
          padding: 0;

          img {
            height: 80px;
            width: 80px;
            object-fit: cover;
          }
        }
      }
    }
  }
`;
