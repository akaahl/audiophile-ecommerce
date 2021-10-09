import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const RelatedItems = ({ others, params }) => {
  const history = useHistory();

  const handleClick = (slug) => {
    history.push(`/${params}/${slug}`);
  };

  return (
    <StyledContainer>
      <h3>You may also like</h3>

      <ul>
        {others.map(({ image, name, slug }) => (
          <li key={uuidv4()}>
            <img src={process.env.PUBLIC_URL + image.desktop} alt="desktop" />
            <h5>{name}</h5>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleClick(slug);
              }}
            >
              See product
            </button>
          </li>
        ))}
      </ul>
    </StyledContainer>
  );
};

export default RelatedItems;

const StyledContainer = styled.aside`
  margin-top: 100px;

  h3 {
    text-align: center;
    text-transform: uppercase;
    font-size: 32px;
  }

  ul {
    margin-top: 60px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      flex: 0.32;

      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }

      h5 {
        margin-top: 30px;
        text-align: center;
        text-transform: uppercase;
        font-size: 25px;
        letter-spacing: 1px;
      }

      button {
        display: block;
        margin: 30px auto 0 auto;
        background-color: #d87d4a;
        border: none;
        padding: 15px 25px;
        font-size: 14px;
        font-weight: 600;
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: #fbaf85;
          color: #000000;
        }
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;

      li {
        width: 60%;

        &:not(:first-child) {
          margin-top: 60px;
        }
      }
    }
  }

  @media (max-width: 425px) {
    ul {
      li {
        width: 100%;

        h5,
        button {
          margin-top: 15px;
        }
      }
    }
  }

  @media (max-width: 320px) {
    h3 {
      font-size: 28px;
    }

    ul {
      li {
        h5 {
          font-size: 20px;
        }

        button {
          padding: 10px 20px;
        }
      }
    }
  }
`;
