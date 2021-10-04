import React from "react";
import styled from "styled-components";
import speakerImg from "../../assets/home/desktop/image-speaker-zx9.png";
import circlePattern from "../../assets/home/desktop/pattern-circles.svg";

const Gallery = () => {
  return (
    <StyledGallery>
      <img src={speakerImg} alt="speaker" />
      <img src={circlePattern} alt="circle pattern" />
    </StyledGallery>
  );
};

export default Gallery;

const StyledGallery = styled.div`
  background-color: #d87d4a;
  height: 600px;

  img {
    height: 200px;
    width: 200px;
  }
`;
