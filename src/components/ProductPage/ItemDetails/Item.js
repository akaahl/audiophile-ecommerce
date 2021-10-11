import React, { useState } from "react";
import styled from "styled-components";
import checkMark from "../../../assets/shared/desktop/check-mark.svg";
import { useDispatch } from "react-redux";
import { updateData } from "../../../actions/dataActions";

const Item = ({ image, slug, name, description, price }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [addToCart, setAddToCart] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setAddToCart(true);
    const allData = JSON.parse(localStorage.getItem("storage"));
    const cart = allData.cart;
    const updatedCart = cart.map((item) =>
      item.name === name
        ? { ...item, quantity: (item.quantity += quantity) }
        : { ...item }
    );
    console.log(allData);

    const totalItem = updatedCart.reduce(
      (acc, val) => (acc += val.quantity),
      0
    );

    const updatedAllData = { ...allData, cart: updatedCart, total: totalItem };
    localStorage.setItem("storage", JSON.stringify(updatedAllData));
    dispatch(updateData(updatedAllData));

    setTimeout(() => {
      setAddToCart(false);
    }, 1500);
  };

  return (
    <StyledSection>
      <div className="img-container">
        <img
          src={process.env.PUBLIC_URL + image.desktop}
          alt={slug}
          className="desktop"
        />
        <img
          src={process.env.PUBLIC_URL + image.tablet}
          alt={slug}
          className="tablet"
        />
      </div>

      <div className="text-content">
        <h5>New Product</h5>
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <strong>{`$ ${price.toLocaleString()}`}</strong>

        <div className="add-to-cart">
          <div className="quantity">
            <button onClick={() => setQuantity((q) => (q === 1 ? 1 : q - 1))}>
              -
            </button>
            <p>{quantity}</p>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>

          <button className="add-to-cart-btn" onClick={handleClick}>
            Add to cart
          </button>

          {addToCart && (
            <div className="notifications">
              <img src={checkMark} alt="check mark" />
              <p>
                You have added <span>{quantity}</span> unit
                {quantity > 1 ? "s" : ""} of <span>{name}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </StyledSection>
  );
};

export default Item;

const StyledSection = styled.section`
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 500px;

  .img-container {
    flex: 0.5;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;

      &.tablet {
        display: none;
      }
    }
  }

  .text-content {
    flex: 0.5;
    margin-left: 80px;

    h5 {
      text-transform: uppercase;
      color: #d87d4a;
      letter-spacing: 5px;
      font-size: 18px;
      font-weight: 500;
    }

    h2 {
      margin-top: 20px;
      font-size: 40px;
      text-transform: uppercase;
    }

    .description {
      margin-top: 30px;
      color: #4c4c4c;
      opacity: 0.7;
      font-weight: 400;
    }

    strong {
      display: block;
      margin-top: 30px;
      font-size: 20px;
      letter-spacing: 1px;
    }

    .add-to-cart {
      position: relative;
      margin-top: 40px;
      display: flex;
      align-items: center;

      .quantity {
        background-color: #f1f1f1;
        padding: 15px 25px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          margin: 0 20px;
          width: 30px;
          text-align: center;
        }

        button {
          border: none;
          background: none;
          font-size: 18px;
          color: #979797;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:hover {
            color: #d87d4a;
          }
        }
      }

      .add-to-cart-btn {
        margin-left: 25px;
        padding: 17px 27px;
        background-color: #d87d4a;
        border: none;
        color: #ffffff;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: #fbaf85;
          color: #000000;
        }
      }

      .notifications {
        position: fixed;
        top: 20px;
        left: 20px;
        border-radius: 8px;
        background-color: #ffffff;
        padding: 15px 20px 15px 15px;
        box-shadow: 4px 4px 35px rgba(0, 0, 0, 0.1);
        background-color: #d87d4a;
        display: flex;
        align-items: center;

        img {
          margin-right: 10px;
        }

        p {
          color: #ffffff;
          font-weight: 600;
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 800px;

    .img-container {
      width: 100%;
      flex: 1;
      height: 350px;

      img {
        &.desktop {
          display: none;
        }

        &.tablet {
          display: block;
        }
      }
    }

    .text-content {
      margin-left: 0;
      margin-top: 50px;
    }
  }

  @media (max-width: 375px) {
    .text-content {
      h2 {
        font-size: 30px;
      }

      .description {
        font-size: 14px;
      }

      .add-to-cart {
        flex-direction: column;

        .quantity {
          width: 100%;
        }

        .add-to-cart-btn {
          width: 100%;
          margin-left: 0;
          margin-top: 30px;
        }
      }
    }
  }
`;
