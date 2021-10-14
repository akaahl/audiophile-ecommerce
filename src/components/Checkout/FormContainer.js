import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import InnerForm from "./InnerForm";

const FormContainer = () => {
  const history = useHistory();

  return (
    <StyledForm>
      <button onClick={() => history.goBack()} className="go-back-btn">
        Go Back
      </button>
      <InnerForm />
    </StyledForm>
  );
};

export default FormContainer;

const StyledForm = styled.main`
  background-color: #f2f2f2;
  padding: 50px 100px;

  .go-back-btn {
    background: none;
    border: none;
    margin-top: 40px;
    font-weight: 400;
    font-size: 18px;
    color: #4c4c4c;
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #d87d4a;
    }
  }

  @media (max-width: 1024px) {
    padding: 20px;

    .go-back-btn {
      margin-top: 0;
      font-size: 16px;
    }
  }

  @media (max-width: 425px) {
    .go-back-btn {
      /* font-size: 14px; */
    }
  }
`;
