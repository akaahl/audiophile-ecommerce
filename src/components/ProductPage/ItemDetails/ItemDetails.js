import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ItemDetails = () => {
  const slug = useParams().item;
  const history = useHistory();
  const selectedItem = useSelector((state) =>
    state.allData.data.filter((item) => item.slug === slug)
  );
  console.log(selectedItem);

  return (
    <StyledContainer>
      <button onClick={() => history.goBack()}>Go Back</button>

      {selectedItem &&
        selectedItem.map((item) => (
          <section>
            <div className="img-container">
              <img
                src={process.env.PUBLIC_URL + item.image.desktop}
                alt={slug}
              />
            </div>

            <div className="text-content">
              <h5>New Product</h5>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <strong>{`$ ${item.price.toLocaleString()}`}</strong>

              <div className="add-to-cart">
                <div className="quantity">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>

                <button>Add to cart</button>
              </div>
            </div>
          </section>
        ))}
    </StyledContainer>
  );
};

export default ItemDetails;

const StyledContainer = styled.main`
  padding: 0 150px;

  button {
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

      p {
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
    }
  }
`;
