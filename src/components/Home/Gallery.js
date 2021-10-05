import React from "react";
import styled from "styled-components";
import speakerImg from "../../assets/home/desktop/image-speaker-zx9.png";
import circlePattern from "../../assets/home/desktop/pattern-circles.svg";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <StyledGallery>
      <div className="gallery-one">
        <img src={speakerImg} alt="speaker" className="speaker-img" />
        <img
          src={circlePattern}
          alt="circle pattern"
          className="circle-pattern"
        />
        <div className="text-content">
          <h2>ZX9 Speaker</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link>See Product</Link>
        </div>
      </div>
    </StyledGallery>
  );
};

export default Gallery;

const StyledGallery = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
  padding: 0 150px;

  .gallery-one {
    height: 500px;
    background-color: #d87d4a;
    border-radius: 8px;
    position: relative;
    overflow: hidden;

    .speaker-img {
      position: absolute;
      bottom: -10px;
      left: 120px;
      height: 430px;
      width: 320px;
      z-index: 10;
    }

    .circle-pattern {
      position: absolute;
      top: -120px;
      left: -193px;
      transform: scale(0.8);
      z-index: 1;
    }

    .text-content {
      margin: 90px 40px 40px auto;
      width: 400px;
      z-index: 100;
      position: relative;

      h2 {
        line-height: 100%;
        font-size: 65px;
        font-weight: 500;
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      p {
        margin: 30px 0;
        font-weight: 300;
        color: #ffffff;
        width: 90%;
        line-height: 170%;
      }

      a {
        z-index: 100;
        margin-top: 60px;
        text-decoration: none;
      }
    }
  }
`;
