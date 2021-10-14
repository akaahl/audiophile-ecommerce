import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import checkMark from "../../assets/shared/desktop/check-mark-2.svg";
import { v4 as uuidv4 } from "uuid";

const OrderConfirmation = ({ cart, grandTotal }) => {
  return ReactDom.createPortal(
    <StyledContainer>
      <div className="modal">
        <img src={checkMark} alt="check mark" className="check-mark" />

        <h2 className="order-message">Thank you for your order</h2>
        <p className="email-confirmation">
          You will an email confirmation shortly.
        </p>

        <div className="items-container">
          <div className="left-side">
            <ul>
              {cart &&
                cart.map((item) => (
                  <li key={uuidv4()}>
                    <div className="item-container">
                      <img
                        src={process.env.PUBLIC_URL + item.image}
                        alt={item.name}
                      />

                      <div className="item-details">
                        <p className="display-name">{item.displayName}</p>
                        <span className="price">{`$ ${item.price.toLocaleString()}`}</span>
                      </div>
                    </div>

                    <span className="quantity">{`x${item.quantity}`}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div className="right-side">
            <div className="total-container">
              <p className="total-text">Grand Total</p>
              <span className="total-price">{`$ ${grandTotal.toLocaleString()}`}</span>
            </div>
          </div>
        </div>

        <button className="back-to-home-btn">Back To Home</button>
      </div>
    </StyledContainer>,
    document.getElementById("portal")
  );
};

export default OrderConfirmation;

const StyledContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    width: 40%;
    padding: 40px;
    border-radius: 8px;
    background-color: #ffffff;

    .check-mark {
      /* fill: #d87d4a;
      background-color: #d87d4a; */
      height: 60px;
      width: 60px;
      object-fit: cover;
    }

    .order-message {
      margin-top: 20px;
      text-transform: uppercase;
      font-size: 30px;
      font-weight: 600;
    }

    .email-confirmation {
      margin-top: 20px;
      color: #191919;
      opacity: 0.7;
    }

    .items-container {
      margin-top: 20px;
      display: flex;
      /* align-items: center; */
      border-radius: 8px;
      /* height: auto; */
      overflow: hidden;

      .left-side {
        flex: 0.5;
        background-color: #f1f1f1;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 30px 30px 30px 20px;

        ul {
          list-style: none;

          li {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            &:not(:first-child) {
              margin-top: 20px;
            }

            .item-container {
              display: flex;

              img {
                height: 50px;
                width: 50px;
                object-fit: cover;
              }

              .item-details {
                margin-left: 10px;

                .display-name {
                  font-size: 14px;
                  color: #191919;
                  font-weight: 700;
                  margin-bottom: 5px;
                }

                .price {
                  font-size: 14px;
                  font-weight: 700;
                  color: #191919;
                  opacity: 0.7;
                }
              }
            }

            .quantity {
              margin-left: 50px;
              font-weight: 800;
              font-size: 14px;
              color: #191919;
              opacity: 0.7;
            }
          }
        }
      }

      .right-side {
        flex: 0.5;
        /* height: 100%; */
        background-color: #191919;
        display: grid;
        place-items: center;
        padding: 10px;

        .total-container {
          .total-text {
            color: #ffffff;
            opacity: 0.5;
            font-size: 16px;
            font-weight: 200;
            text-transform: uppercase;
            margin-bottom: 10px;
          }

          .total-price {
            color: #ffffff;
            font-weight: 700;
            font-size: 16px;
          }
        }
      }
    }

    .back-to-home-btn {
      margin-top: 30px;
      border: none;
      background-color: #d87d4a;
      color: #ffffff;
      font-weight: 600;
      padding: 15px 25px;
      width: 100%;
    }
  }
`;
