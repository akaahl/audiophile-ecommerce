import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const Hero = ({ category }) => {
  return (
    <StyledHero>
      <Navbar />
      <h1>{category}</h1>
    </StyledHero>
  );
};

export default Hero;

const StyledHero = styled.div`
  background-color: #000000;
  height: 300px;
  padding: 0 150px;

  h1 {
    color: #ffffff;
    text-align: center;
    margin-top: 80px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 36px;
  }

  @media (max-width: 1024px) {
    padding: 0 50px;
  }

  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;
