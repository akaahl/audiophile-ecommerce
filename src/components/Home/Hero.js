import React from "react";
import styled from "styled-components";
import heroBg from "../../assets/home/desktop/image-hero.jpg";

const Hero = () => {
  return (
    <HeroContainer>
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
  background-image: url(${heroBg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  /* width: 100vw; */
  padding: 200px 120px;

  .hero-details {
    color: #ffffff;
    /* margin-top: 100px; */
  }
`;
