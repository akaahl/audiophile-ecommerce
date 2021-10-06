import React from "react";
import styled from "styled-components";
import modelImg from "../../assets/shared/desktop/image-best-gear.jpg";
import tabletModelImg from "../../assets/shared/tablet/image-best-gear.jpg";
import mobileModelImg from "../../assets/shared/mobile/image-best-gear.jpg";

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

      <div className="img-container">
        <img src={modelImg} alt="model" className="desktop-img" />
        <img src={tabletModelImg} alt="model" className="tablet-img" />
        <img src={mobileModelImg} alt="model" className="mobile-img" />
      </div>
    </StyledContainer>
  );
};

export default CompanyDescription;

const StyledContainer = styled.div`
  margin-top: 180px;
  padding: 0 150px;
  display: flex;
  justify-content: space-between;
  height: 500px;

  .text-content {
    flex: 0.5;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      text-transform: uppercase;
      font-size: 40px;
      width: 90%;

      span {
        color: #db7d4a;
      }
    }

    p {
      margin-top: 30px;
      color: #888888;
      width: 90%;
      font-size: 15px;
    }
  }

  .img-container {
    flex: 0.5;
    border-radius: 8px;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
    }

    .tablet-img,
    .mobile-img {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    height: 600px;
    padding: 0 50px;
    flex-direction: column-reverse;

    .text-content {
      margin-right: 0;

      h2 {
        width: 100%;
        text-align: center;
      }

      p {
        width: 100%;
        text-align: center;
      }
    }

    .img-container {
      .desktop-img {
        display: none;
      }

      .tablet-img {
        display: block;
      }
    }
  }

  @media (max-width: 425px) {
    padding: 0 20px;
    height: auto;
    margin-top: 120px;

    .text-content {
      margin-top: 30px;
      h2 {
        font-size: 30px;
      }
    }

    .img-container {
      .tablet-img {
        display: none;
      }

      .mobile-img {
        display: block;
      }
    }
  }
`;
