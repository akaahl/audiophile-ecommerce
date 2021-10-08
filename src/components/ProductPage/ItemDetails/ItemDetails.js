import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Features from "./Features";
import Gallery from "./Gallery";
import RelatedItems from "./RelatedItems";
import CategoryCard from "../../Shared/CategoryCard";
import CompanyDescription from "../../Shared/CompanyDescription";

const ItemDetails = () => {
  const slug = useParams().item;
  const history = useHistory();
  const selectedItem = useSelector((state) =>
    state.allData.data.filter((item) => item.slug === slug)
  );

  const [quantity, setQuantity] = useState(1);
  console.log(selectedItem);

  return (
    <StyledContainer>
      <button onClick={() => history.goBack()} className="go-back-btn">
        Go Back
      </button>

      {selectedItem &&
        selectedItem.map(
          ({
            image,
            name,
            description,
            price,
            features,
            includes,
            gallery,
            others,
          }) => (
            <div className="item-details">
              <section>
                <div className="img-container">
                  <img
                    src={process.env.PUBLIC_URL + image.desktop}
                    alt={slug}
                  />
                </div>

                <div className="text-content">
                  <h5>New Product</h5>
                  <h2>{name}</h2>
                  <p className="description">{description}</p>
                  <strong>{`$ ${price.toLocaleString()}`}</strong>

                  <div className="add-to-cart">
                    <div className="quantity">
                      <button
                        onClick={() =>
                          setQuantity((q) => (q === 1 ? 1 : q - 1))
                        }
                      >
                        -
                      </button>
                      <p>{quantity}</p>
                      <button onClick={() => setQuantity((q) => q + 1)}>
                        +
                      </button>
                    </div>

                    <button className="add-to-cart-btn">Add to cart</button>
                  </div>
                </div>
              </section>

              <Features features={features} includes={includes} />
              <Gallery gallery={gallery} />
              <RelatedItems others={others} />
              <CategoryCard itemDetails={true} />
              <CompanyDescription itemDetails={true} />
            </div>
          )
        )}
    </StyledContainer>
  );
};

export default ItemDetails;

const StyledContainer = styled.main`
  padding: 0 150px;

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

  .item-details {
    section {
      margin-top: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 500px;

      .img-container {
        flex: 0.5;
        height: 100%;
        border-radius: 8px;
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .tablet-img,
        .mobile-img {
          display: none;
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

        .description {
          margin-top: 30px;
          color: #4c4c4c;
          opacity: 0.7;
          font-weight: 400;
        }

        strong {
          display: block;
          margin-top: 30px;
          font-size: 20px;
          letter-spacing: 1px;
        }

        .add-to-cart {
          margin-top: 40px;
          display: flex;
          align-items: center;

          .quantity {
            background-color: #f1f1f1;
            padding: 15px 25px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            p {
              margin: 0 20px;
              width: 30px;
              text-align: center;
            }

            button {
              border: none;
              background: none;
              font-size: 18px;
              color: #979797;
              cursor: pointer;
              transition: all 0.2s ease-in-out;

              &:hover {
                color: #d87d4a;
              }
            }
          }

          .add-to-cart-btn {
            margin-left: 25px;
            padding: 17px 27px;
            background-color: #d87d4a;
            border: none;
            color: #ffffff;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:hover {
              background-color: #fbaf85;
              color: #000000;
            }
          }
        }
      }
    }
  }
`;
