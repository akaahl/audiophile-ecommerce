import React from "react";
import styled from "styled-components";
import logo from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import fbIcon from "../../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import igIcon from "../../assets/shared/desktop/icon-instagram.svg";

const Footer = ({ params }) => {
  return (
    <StyledFooter params={params}>
      <div className="orange-line"></div>

      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/headphones">Headphones</Link>
          </li>
          <li>
            <Link to="/speakers">Speakers</Link>
          </li>
          <li>
            <Link to="/earphones">Earphones</Link>
          </li>
        </ul>
      </nav>

      <div className="text-content">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <ul>
          <li>
            <img src={fbIcon} alt="facebook" />
          </li>
          <li>
            <img src={twitterIcon} alt="twitter" />
          </li>
          <li>
            <img src={igIcon} alt="instagram" />
          </li>
        </ul>
      </div>

      <div className="footer-copyright">
        <span>Copyright 2021. All Rights Reserved.</span>

        <ul>
          <li>
            <img src={fbIcon} alt="facebook" />
          </li>
          <li>
            <img src={twitterIcon} alt="twitter" />
          </li>
          <li>
            <img src={igIcon} alt="instagram" />
          </li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: #101010;
  margin-top: ${({ params }) => (params ? "120px" : "200px")};
  padding: 0 150px 40px 150px;

  .orange-line {
    height: 5px;
    width: 120px;
    background-color: #db7d4a;
  }

  nav {
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      list-style: none;
      display: flex;

      li {
        margin: 0 15px;

        a {
          text-decoration: none;
          color: #ffffff;
          text-transform: uppercase;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease-in-out;

          &:hover {
            color: #d87d4a;
          }
        }
      }
    }
  }

  .text-content {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      flex: 0.5;
      color: #878787;
      font-size: 15px;
    }

    ul {
      flex: 0.5;
      display: flex;
      align-self: flex-end;
      align-items: center;
      justify-content: flex-end;
      list-style: none;

      li {
        margin: 0 15px;
        display: grid;
        place-items: center;

        img {
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:hover {
            filter: invert(50%) sepia(45%) saturate(639%) hue-rotate(337deg)
              brightness(102%) contrast(88%);
          }
        }
      }
    }
  }

  .footer-copyright {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      flex: 0.5;
      color: #878787;
      font-size: 15px;
    }

    ul {
      flex: 0.5;
      display: none;
      align-items: center;
      justify-content: flex-end;
      list-style: none;

      li {
        margin: 0 15px;
        display: grid;
        place-items: center;

        img {
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:hover {
            filter: invert(50%) sepia(45%) saturate(639%) hue-rotate(337deg)
              brightness(102%) contrast(88%);
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 0 50px 40px 50px;
  }

  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      align-items: flex-start;

      ul {
        margin-top: 20px;

        li {
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }

    .text-content {
      p {
        flex: 1;
      }
      ul {
        flex: 0;
        display: none;
      }
    }

    .footer-copyright {
      ul {
        display: flex;
      }
    }
  }

  @media (max-width: 425px) {
    margin-top: 100px;
    padding: 0 20px 40px 20px;

    .orange-line {
      margin: 0 auto;
    }

    nav {
      align-items: center;
      justify-content: center;

      ul {
        flex-direction: column;

        li {
          margin: 15px 0;
          text-align: center;

          a {
          }
        }
      }
    }

    .text-content {
      p {
        text-align: center;
      }
    }

    .footer-copyright {
      span {
        text-align: center;
      }

      flex-direction: column;

      ul {
        margin-top: 30px;
      }
    }
  }
`;
