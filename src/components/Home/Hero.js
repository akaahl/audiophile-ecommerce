import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import heroBg from "../../assets/home/desktop/image-hero.jpg";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <div className="hero-details">
        <p className="hero-new">New Product</p>
        <h1>XX 99 Mark II Headphones</h1>
        <p className="hero-intro">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

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

  .hero-details {
    width: 500px;
    color: #ffffff;
    margin-top: 80px;

    .hero-new {
      color: #949494;
      text-transform: uppercase;
      font-size: 16px;
      letter-spacing: 10px;
    }

    h1 {
      text-transform: uppercase;
      font-size: 60px;
      font-weight: 600;
      margin-top: 20px;
    }

    .hero-intro {
      color: #949494;
      font-size: 16px;
      font-weight: 200;
      margin-top: 20px;
      line-height: 150%;
      width: 70%;
    }

    button {
      position: relative;
      border: none;
      background: none;
      padding: 15px 25px;
      background-color: #d87d4a;
      margin-top: 35px;
      cursor: pointer;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 15px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #fbaf85;
        color: #000000;
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }
`;
