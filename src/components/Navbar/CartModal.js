import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const CartModal = ({ setModal }) => {
  const totalItems = useSelector((state) => state.allData.total);
  const itemsInCart = useSelector((state) => state.allData.cart).filter(
    (item) => item.quantity > 0
  );
  const totalPrice = itemsInCart.reduce(
    (acc, item) => (acc += item.quantity * item.price),
    0
  );
  console.log(itemsInCart);

  const handleModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModal(false);
  };
  return (
    <StyledModal onClick={handleModal}>
      <div className="modal-container">
        <div className="top">
          <h3>Cart ({totalItems})</h3>
          <button>Remove all</button>
        </div>

        {itemsInCart.map((item) => (
          <div className="mid" key={uuidv4()}>
            <div className="mid-left">
              <img src={item.image} alt={item.name} />
              <div className="mid-left-details">
                <span className="display-name">{item.displayName}</span>
                <span className="price">{`$${item.price.toLocaleString()}`}</span>
              </div>
            </div>

            <div className="mid-right">
              <button>-</button>
              <p>{item.quantity}</p>
              <button>+</button>
            </div>
          </div>
        ))}

        <div className="bottom">
          <p className="total-text">Total</p>
          <p className="total-display">{`$${totalPrice.toLocaleString()}`}</p>
        </div>

        <button className="checkout-btn">Checkout</button>
      </div>
    </StyledModal>
  );
};

export default CartModal;

const StyledModal = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);

  .modal-container {
    position: fixed;
    right: 200px;
    top: 50px;
    width: 400px;
    background-color: #ffffff;
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        color: #191919;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      button {
        color: #888888;
        opacity: 0.7;
        font-size: 16px;
        text-decoration: underline;
      }
    }

    .mid {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;

      .mid-left {
        align-self: center;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          height: 60px;
          width: 60px;
          border-radius: 5px;
          object-fit: cover;
        }

        .mid-left-details {
          margin-left: 15px;
          display: flex;
          flex-direction: column;

          .display-name {
            font-weight: 700;
            font-size: 14px;
          }

          .price {
            margin-top: 3px;
            font-weight: 600;
            font-size: 14px;
            color: #888888;
            opacity: 0.9;
          }
        }
      }

      .mid-right {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f1f1f1;
        width: 100px;

        button,
        p {
          flex: calc(100 / 3);
          color: #000000;
          padding: 8px 12px;
          font-size: 14px;
        }

        p {
          font-weight: 700;
        }
      }
    }

    .bottom {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .total-text {
        color: #191919;
        font-weight: 100;
        text-transform: uppercase;
      }

      .total-display {
        color: #191919;
        font-weight: 800;
      }
    }

    .checkout-btn {
      margin-top: 30px;
      border: none;
      background-color: #d87d4a;
      padding: 12px 20px;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      text-transform: uppercase;
    }
  }
`;
