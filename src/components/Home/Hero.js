import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import heroBg from "../../assets/home/desktop/image-hero.jpg";
import tabletHeroBg from "../../assets/home/tablet/image-header.jpg";
import mobileHeroBg from "../../assets/home/mobile/image-header.jpg";
import { motion } from "framer-motion";
import { heroVariants } from "../../animations";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <motion.div
        className="hero-details"
        variants={heroVariants}
        initial="initial"
        animate="animate"
      >
        <p className="hero-new">New Product</p>
        <h1>XX 99 Mark II Headphones</h1>
        <p className="hero-intro">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <button>See Product</button>
      </motion.div>
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

  @media (max-width: 1024px) {
    background-image: url(${tabletHeroBg});
    padding: 0 50px;

    .hero-details {
      margin: 100px auto 0 auto;

      .hero-new {
        text-align: center;
      }

      h1 {
        text-align: center;
      }

      .hero-intro {
        text-align: center;
        margin: 20px auto 0 auto;
      }

      button {
        display: block;
        margin: 35px auto 0 auto;
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding-bottom: 100px;
    .hero-details {
      margin-top: 80px;
      width: auto;

      .hero-new,
      .hero-intro {
        font-size: 14px;
      }

      h1 {
        font-size: 50px;
      }

      button {
        font-size: 14px;
        padding: 10px 20px;
      }
    }
  }

  @media (max-width: 425px) {
    .hero-details {
      h1 {
        font-size: 30px;
      }
    }
  }

  @media (max-width: 375px) {
    padding: 0 20px 50px 20px;
    background-image: url(${mobileHeroBg});

    .hero-details {
      .hero-intro {
        width: auto;
      }
    }
  }

  @media (min-height: 900px) {
    height: 60vh;

    .hero-details {
      width: 80%;
    }
  }

  @media (min-height: 1600px) {
    height: 40vh;
  }
`;
