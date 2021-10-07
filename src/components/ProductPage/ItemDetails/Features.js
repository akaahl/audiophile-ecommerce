import React from "react";
import styled from "styled-components";

const Features = ({ features, includes }) => {
  const formattedFeatures = features.split(/\r?\n/).filter((val) => val !== "");
  console.log(formattedFeatures);
  return (
    <StyledFeatures>
      <div className="left-side">
        <h3>Features</h3>
        {formattedFeatures &&
          formattedFeatures.map((feature) => <p>{feature}</p>)}
      </div>

      <div className="right-side">
        <h3>In the box</h3>

        <ul>
          {includes &&
            includes.map(({ item, quantity }) => (
              <li>
                <span>{quantity}x</span>
                <p>{item}</p>
              </li>
            ))}
        </ul>
      </div>
    </StyledFeatures>
  );
};

export default Features;

const StyledFeatures = styled.article`
  margin-top: 80px;
  display: flex;

  .left-side {
    flex: 0.8;
    padding-right: 80px;

    h3 {
      text-transform: uppercase;
      font-size: 32px;
      letter-spacing: 1px;
    }

    p {
      margin-top: 30px;
      color: #888888;
      opacity: 0.6;
      font-weight: 400;
    }
  }

  .right-side {
    flex: 0.4;

    ul {
      list-style: none;

      li {
        display: flex;
      }
    }
  }
`;
