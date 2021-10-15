import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import arrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

const Mobile = ({ setMobile }) => {
  const closeMobile = (e) => {
    e.stopPropagation();
    setMobile(false);
    document.body.style.overflowY = "scroll";
  };

  const imgLinks = [
    {
      link: "assets/shared/desktop/image-headphones.png",
      category: "headphones",
    },
    {
      link: "assets/shared/desktop/image-speakers.png",
      category: "speakers",
    },
    {
      link: "assets/shared/desktop/image-earphones.png",
      category: "earphones",
    },
  ];
  return (
    <StyledMobile onClick={closeMobile}>
      <nav onClick={(e) => e.stopPropagation()}>
        <ul>
          {imgLinks &&
            imgLinks.map(({ link, category }) => (
              <li key={uuidv4()}>
                <img
                  className="product-img"
                  src={process.env.PUBLIC_URL + "/" + link}
                  alt="category card"
                />
                <h4>{category}</h4>
                <Link
                  to={`/${category}`}
                  onClick={() => {
                    setMobile(false);
                    document.body.style.overflowY = "scroll";
                  }}
                >
                  <span>
                    {" "}
                    Shop <img src={arrowRight} alt="arrow" />
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </StyledMobile>
  );
};

export default Mobile;

const StyledMobile = styled.aside`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  margin-top: 88px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: none;
  overflow-y: scroll;

  nav {
    background-color: #ffffff;
    padding: 20px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    ul {
      margin-top: 40px;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        width: 32%;
        background-color: #f1f1f1;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .product-img {
          height: 100px;
          width: 100px;
          object-fit: cover;
          display: block;
          margin: -40px auto 0 auto;
        }

        h4 {
          text-align: center;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 10px;
        }

        a {
          margin: 10px 0 20px 0;
          text-decoration: none;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #797979;
          font-size: 12px;
          font-weight: 700;
          transition: color 0.2s ease-in-out;

          &:hover {
            color: #d87d4a;
          }

          img {
            margin-left: 10px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 425px) {
    nav {
      ul {
        margin-top: 35px;
        flex-direction: column;

        li {
          width: 100%;

          &:not(:first-child) {
            margin-top: 50px;
          }

          h4 {
            margin-top: 0;
          }
        }
      }
    }
  }
`;
