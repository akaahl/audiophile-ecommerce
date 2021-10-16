import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import arrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";
const CategoryCard = ({ params, itemDetails }) => {
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
    <StyledCard params={params} itemDetails={itemDetails}>
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
              <Link to={`/${category}`}>
                Shop <img src={arrowRight} alt="arrow" />
              </Link>
            </li>
          ))}
      </ul>
    </StyledCard>
  );
};

export default CategoryCard;

const StyledCard = styled.div`
  margin-top: ${({ params, itemDetails }) =>
    params && !itemDetails ? "50px" : itemDetails ? "150px" : "100px"};
  width: 100%;
  height: 400px;
  padding: ${({ itemDetails }) => (itemDetails ? "0" : "0 150px")};
  display: grid;
  place-items: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      width: 32%;
      height: 220px;
      border-radius: 5px;
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .product-img {
        position: absolute;
        top: -50%;
        left: 50%;
        transform: translateX(-50%);
        height: 250px;
        width: 250px;
        object-fit: contain;
      }

      h4 {
        margin-top: 70px;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      a {
        margin-top: 10px;
        text-decoration: none;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        color: #797979;
        font-size: 14px;
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

  @media (min-width: 2000px) {
    padding: 0;
  }

  @media (max-width: 1024px) {
    padding: 100px 50px;
  }

  @media (max-width: 768px) {
    margin-top: ${({ params }) => (params ? "30px" : "100px")};
    padding: 50px;
    display: block;
    height: auto;

    ul {
      flex-direction: column;

      li {
        width: 100%;
        height: 230px;

        &:not(:first-child) {
          margin-top: 130px;
        }

        .product-img {
          top: -35%;
        }

        h4 {
          margin-top: 100px;
        }
      }
    }
  }

  @media (max-width: 425px) {
    padding: 20px;
  }

  @media (max-width: 375px) {
    ul {
      li {
        height: 210px;

        .product-img {
          height: 220px;
          width: 220px;
        }

        h4 {
          margin-top: 90px;
        }
      }
    }
  }

  @media (min-width: 768px) and (min-height: 1024px) {
    ul {
      flex-direction: row;

      li {
        &:not(:first-child) {
          margin-top: 0;
          margin: 0 20px;
        }
      }
    }
  }
`;
