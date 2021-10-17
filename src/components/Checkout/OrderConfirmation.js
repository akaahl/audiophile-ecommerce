import React, { useState } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import checkMark from "../../assets/shared/desktop/check-mark-2.svg";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateData } from "../../actions/dataActions";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "../../animations";

const OrderConfirmation = ({ cart, grandTotal, setModal }) => {
  const [viewMore, setViewMore] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const resetCart = () => {
    const allData = JSON.parse(localStorage.getItem("storage"));
    const updatedCart = allData.cart.map((item) => ({ ...item, quantity: 0 }));
    const updatedAllData = { ...allData, cart: updatedCart, total: 0 };

    localStorage.setItem("storage", JSON.stringify(updatedAllData));
    dispatch(updateData(updatedAllData));
  };

  return ReactDom.createPortal(
    <StyledContainer
      viewMoreItem={viewMore}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setModal(false);
        document.body.style.overflowY = "initial";
        resetCart();
      }}
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        variants={scaleIn}
      >
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

            {cart.length > 1 && (
              <button
                className="view-more-btn"
                onClick={() => setViewMore(true)}
              >{`and ${cart.length} other item(s)`}</button>
            )}
            <button
              className="view-less-btn"
              onClick={() => setViewMore(false)}
            >
              View less
            </button>
          </div>

          <div className="right-side">
            <div className="total-container">
              <p className="total-text">Grand Total</p>
              <span className="total-price">{`$ ${grandTotal.toLocaleString()}`}</span>
            </div>
          </div>
        </div>

        <button
          className="back-to-home-btn"
          onClick={() => {
            resetCart();
            history.push("/");
            setModal(false);
            document.body.style.overflowY = "initial";
          }}
        >
          Back To Home
        </button>
      </motion.div>
    </StyledContainer>,
    document.getElementById("portal")
  );
};

export default OrderConfirmation;

const StyledContainer = styled(motion.aside)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
  overflow-y: scroll;
  padding: 50px 0 !important;

  .modal {
    width: 45%;
    padding: 40px;
    border-radius: 8px;
    background-color: #ffffff;

    .check-mark {
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
      border-radius: 8px;
      overflow: hidden;

      .left-side {
        flex: 0.5;
        background-color: #f1f1f1;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 30px 30px 30px 20px;

        ul {
          list-style: none;

          li {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            &:not(:first-child) {
              margin-top: 20px;
              display: ${({ viewMoreItem }) =>
                viewMoreItem ? "flex" : "none"};
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

        .view-more-btn {
          display: ${({ viewMoreItem }) => (viewMoreItem ? "none" : "block")};
          border: none;
          background: none;
          padding: 10px 20px;
          color: rgba(0, 0, 0, 0.4);
          margin-top: 5px;
          font-weight: 700;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }

        .view-less-btn {
          display: ${({ viewMoreItem }) => (viewMoreItem ? "block" : "none")};
          border: none;
          background: none;
          padding: 12px 25px 15px 25px;
          color: rgba(0, 0, 0, 0.4);
          margin-top: 20px;
          font-weight: 700;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }
      }

      .right-side {
        flex: 0.5;
        background-color: #191919;
        display: grid;
        place-items: center;
        padding: 10px;

        .total-container {
          margin: ${({ viewMoreItem }) =>
            viewMoreItem ? "auto 0 70px 0" : "initial"};
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
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #fbaf85;
        color: #000000;
      }
    }
  }

  @media (max-width: 1024px) {
    .modal {
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    .modal {
      .items-container {
        flex-direction: column;

        .right-side {
          padding: 40px 0;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .modal {
      width: 90%;
      padding: 20px;

      .items-container {
        .left-side {
          padding: 20px 20px 20px 5px;

          .view-more-btn,
          .view-less-btn {
            margin-left: 15px;
          }
        }

        .right-side {
          padding: 20px 0;

          .total-container {
            display: grid;
            place-items: center;
          }
        }
      }
    }
  }
`;
