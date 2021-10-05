import React from "react";
import styled from "styled-components";
import logo from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import fbIcon from "../../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import igIcon from "../../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="orange-line"></div>

      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Headphones</Link>
          </li>
          <li>
            <Link>Speakers</Link>
          </li>
          <li>
            <Link>Earphones</Link>
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
  margin-top: 200px;
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
`;
