import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #000000;
  padding: 0 150px;

  @media (max-width: 1024px) {
    padding: 0 50px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
