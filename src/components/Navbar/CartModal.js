import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const CartModal = ({ setModal }) => {
  const totalItems = useSelector((state) => state.allData.total);
  const itemsInCart = useSelector((state) => state.allData.cart).filter(
    (item) => item.quantity > 0
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
                <span>{item.displayName}</span>
                <span>{`$${item.price.toLocaleString()}`}</span>
              </div>
            </div>

            <div className="right-side">
              <button>-</button>
              <p>{item.quantity}</p>
              <button>+</button>
            </div>

            <div className="bottom">
              <p>Total</p>
              <p>{`$${(item.quantity * item.price).toLocaleString()}`}</p>
            </div>
          </div>
        ))}
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
    background-color: #ffffff;
    padding: 20px 15px;
  }
`;
