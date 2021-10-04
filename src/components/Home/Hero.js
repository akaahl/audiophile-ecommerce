import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import heroBg from "../../assets/home/desktop/image-hero.jpg";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <div className="hero-details">
        <p>New Product</p>
        <h1>XX 99 Mark II Headphones</h1>
        <span>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </span>

        <button>See Product</button>
      </div>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  position: relative;
  background-image: url(${heroBg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  padding: 0 150px;
  /* justify-content: center; */
  /* width: 100vw; */
  /* padding: 200px 120px; */
  /* margin-top: 100px; */

  .hero-details {
    width: 500px;
    color: #ffffff;
    margin-top: 100px;

    p {
      color: #949494;
      text-transform: uppercase;
      font-size: 16px;
      letter-spacing: 10px;
    }

    h1 {
      text-transform: uppercase;
      font-size: 60px;
      font-weight: 500;
      margin-top: 30px;
    }

    span {
      display: block;
      color: #ffffff;
      opacity: 0.4;
      font-weight: 100;
      margin-top: 30px;
      line-height: 150%;
      width: 70%;
    }
  }
`;
