import React from "react";
import styled from "styled-components";
import { ReactComponent as CartIcon } from "../../assets/shared/desktop/icon-cart.svg";

const EmptyCart = () => {
  return (
    <StyledWrapper>
      <CartIcon className="cart-icon" />
      <h4>Cart is empty.</h4>
    </StyledWrapper>
  );
};

export default EmptyCart;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    transform: scale(4);
    margin: 60px 0 45px 0;
    path {
      fill: #d87d4a;
    }
  }

  h4 {
    text-align: center;
    color: #878787;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
  }
`;
