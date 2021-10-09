import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import Features from "./Features";
import Gallery from "./Gallery";
import RelatedItems from "./RelatedItems";
import CategoryCard from "../../Shared/CategoryCard";
import CompanyDescription from "../../Shared/CompanyDescription";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

const ItemDetails = ({ params }) => {
  const slug = useParams().item;
  const history = useHistory();
  // const selectedItem = useSelector((state) =>
  //   state.allData.data.filter((item) => item.slug === slug)
  // );
  const selectedItem = JSON.parse(localStorage.getItem("storage")).data.filter(
    (item) => item.slug === slug
  );

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
            <div className="item-details" key={uuidv4()}>
              <Item
                image={image}
                name={name}
                description={description}
                price={price}
              />

              <Features features={features} includes={includes} />
              <Gallery gallery={gallery} />
              <RelatedItems others={others} params={params} />
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

  @media (max-width: 1024px) {
    padding: 0 50px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
