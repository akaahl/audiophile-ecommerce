import React from "react";
import styled from "styled-components";
import speakerImg from "../../assets/home/desktop/image-speaker-zx9.png";
import circlePattern from "../../assets/home/desktop/pattern-circles.svg";
import speakerBgImg from "../../assets/home/desktop/image-speaker-zx7.jpg";
import earphoneImg from "../../assets/home/desktop/image-earphones-yx1.jpg";
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
          <button>See Product</button>
        </div>
      </div>

      <div className="gallery-two">
        <h4>Zx7 Speaker</h4>
        <button>See product</button>
      </div>

      <div className="gallery-three">
        <img src={earphoneImg} alt="earphone" />

        <div className="text-content">
          <h4>Yx1 Earphones</h4>
          <button>See Product</button>
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

      button {
        z-index: 100;
        text-decoration: none;
        border: none;
        padding: 13px 23px;
        font-weight: 600;
        letter-spacing: 1px;
        background-color: #000000;
        color: #ffffff;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-transform: uppercase;
        border: solid 1px transparent;

        &:hover {
          border: solid 1px #000000;
          background-color: #ffffff;
          color: #000000;
        }
      }
    }
  }

  .gallery-two {
    margin-top: 60px;
    height: 300px;
    border-radius: 8px;
    background-image: url(${speakerBgImg});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 100px;

    h4 {
      font-size: 28px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    button {
      margin-top: 30px;
      background-color: transparent;
      border: solid 1px #000000;
      padding: 13px 23px;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #000000;
        color: #ffffff;
      }
    }
  }

  .gallery-three {
    border-radius: 8px;
    margin-top: 60px;
    height: 300px;
    display: flex;
    justify-content: space-between;

    img {
      flex: 0.5;
      border-radius: 8px;
      object-fit: contain;
    }

    .text-content {
      margin-left: 30px;
      flex: 0.5;
      background-color: #f1f1f1;
      border-radius: 8px;
      padding: 100px;

      h4 {
        font-size: 28px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      button {
        margin-top: 30px;
        background-color: transparent;
        border: solid 1px #000000;
        padding: 13px 23px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: #000000;
          color: #ffffff;
        }
      }
    }
  }
`;
