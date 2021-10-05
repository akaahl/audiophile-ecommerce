import React from "react";
import styled from "styled-components";
import modelImg from "../../assets/shared/desktop/image-best-gear.jpg";

const CompanyDescription = () => {
  return (
    <StyledContainer>
      <div className="text-content">
        <h2>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York city, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio acessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <img src={modelImg} alt="model" />
    </StyledContainer>
  );
};

export default CompanyDescription;

const StyledContainer = styled.div`
  margin-top: 60px;
  padding: 0 150px;
  display: flex;
  justify-content: space-between;
  height: 500px;

  .text-content {
    flex: 0.5;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }

  img {
    flex: 0.5;
    border-radius: 8px;
  }
`;
