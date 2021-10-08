import React from "react";
import styled from "styled-components";

const Gallery = ({ gallery }) => {
  const { first, second, third } = gallery;
  return (
    <StyledGallery>
      <div className="left-side">
        <img src={process.env.PUBLIC_URL + first.desktop} alt="first" />
        <img src={process.env.PUBLIC_URL + second.desktop} alt="second" />
      </div>

      <div className="right-side">
        <img src={process.env.PUBLIC_URL + third.desktop} alt="third" />
      </div>
    </StyledGallery>
  );
};

export default Gallery;

const StyledGallery = styled.div`
  height: 530px;
  margin-top: 150px;
  display: flex;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

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
`;
