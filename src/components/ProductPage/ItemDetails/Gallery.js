import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll, fadeIn } from "../../../animations";

const Gallery = ({ gallery }) => {
  const { first, second, third } = gallery;
  const [element, control] = useScroll();

  return (
    <StyledGallery
      ref={element}
      variants={fadeIn}
      initial="initial"
      animate={control}
    >
      <div className="left-side">
        <img
          src={process.env.PUBLIC_URL + first.desktop}
          alt="first"
          className="desktop"
        />
        <img
          src={process.env.PUBLIC_URL + second.desktop}
          alt="second"
          className="desktop"
        />
        <img
          src={process.env.PUBLIC_URL + first.tablet}
          alt="first"
          className="tablet"
        />
        <img
          src={process.env.PUBLIC_URL + second.tablet}
          alt="second"
          className="tablet"
        />
      </div>

      <div className="right-side">
        <img src={process.env.PUBLIC_URL + third.desktop} alt="third" />
      </div>
    </StyledGallery>
  );
};

export default Gallery;

const StyledGallery = styled(motion.div)`
  height: 530px;
  margin-top: 150px;
  display: flex;

  .left-side {
    flex: 0.4;
    height: 100%;
    display: flex;
    flex-direction: column;

    img {
      height: 250px;
      width: 100%;
      object-fit: cover;
      border-radius: 8px;

      &:first-child {
        margin-bottom: 30px;
      }

      &.tablet {
        display: none;
      }
    }
  }

  .right-side {
    flex: 0.6;
    margin-left: 30px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 110px;
    flex-direction: column;
    height: auto;

    .left-side {
      img {
        height: 225px;

        &:first-child,
        &:nth-child(3) {
          margin-bottom: 15px;
        }

        &.desktop {
          display: none;
        }

        &.tablet {
          display: block;
        }
      }
    }

    .right-side {
      margin-top: 15px;
      margin-left: 0;
      img {
        height: 350px;
      }
    }
  }
`;
