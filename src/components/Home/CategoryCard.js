import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import arrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";
const CategoryCard = () => {
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
    <StyledCard>
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
              <Link>
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
  margin-top: 120px;
  width: 100%;
  height: 400px;
  padding: 0 150px;
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
`;
