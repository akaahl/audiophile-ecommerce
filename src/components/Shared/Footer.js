import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: #101010;
  height: 300px;
  margin-top: 200px;
`;
