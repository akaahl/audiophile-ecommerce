import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Items = ({ filteredCategory }) => {
  return (
    <StyledContainer>
      <ul>
        {filteredCategory &&
          filteredCategory.map((item, index) => (
            <li key={uuidv4()} id={item.id}>
              <div className="img-container">
                <img
                  src={process.env.PUBLIC_URL + item.image.desktop}
                  alt={item.category + " showcase"}
                />
              </div>

              <div className="text-content">
                <h5>New Product</h5>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <button>See Product</button>
              </div>
            </li>
          ))}
      </ul>
    </StyledContainer>
  );
};

export default Items;

const StyledContainer = styled.main`
  padding: 100px 150px;

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 500px;

      &:not(:first-child) {
        margin-top: 80px;
      }

      &:nth-child(even) {
        flex-direction: row-reverse;

        .text-content {
          margin: 0 80px 0 0;
        }
      }

      .img-container {
        flex: 0.5;
        height: 100%;
        border-radius: 8px;
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
        }
      }

      .text-content {
        flex: 0.5;
        margin-left: 80px;

        h5 {
          text-transform: uppercase;
          color: #d87d4a;
          letter-spacing: 5px;
          font-size: 18px;
          font-weight: 500;
        }

        h2 {
          margin-top: 20px;
          font-size: 40px;
          text-transform: uppercase;
        }

        p {
          margin-top: 30px;
          color: #4c4c4c;
          opacity: 0.5;
          font-weight: 400;
        }

        button {
          margin-top: 40px;
          border: none;
          padding: 15px 25px;
          background-color: #d87d4a;
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
    }
  }

  @media (max-width: 1024px) {
    padding: 100px 50px;
  }

  @media (max-width: 768px) {
    ul {
      li {
        flex-direction: column;

        &:nth-child(even) {
          flex-direction: column;

          .text-content {
            margin: 40px 0 0 0;
          }
        }

        .img-container {
          width: 100%;
        }

        .text-content {
          margin: 40px 0 0 0;

          h5,
          h2,
          p {
            text-align: center;
          }

          button {
            display: block;
            margin: 40px auto 0 auto;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;
