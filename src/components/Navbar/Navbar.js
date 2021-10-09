import React from "react";
import styled from "styled-components";
import logo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
import hamburgerIcon from "../../assets/shared/tablet/icon-hamburger.svg";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="inner-container">
        <div className="left-side">
          <img src={hamburgerIcon} alt="hamburger" className="mobile-nav" />
          <img src={logo} alt="audiophile logo" className="logo" />
        </div>

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

        <button>
          <img src={cartIcon} alt="cart" />
          <span>2</span>
        </button>
      </div>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  width: 100%;

  .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .left-side {
      display: flex;
      align-items: center;

      .mobile-nav {
        margin-right: 30px;
        display: none;
      }
    }

    ul {
      display: flex;
      align-items: center;
      list-style: none;

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

    button {
      position: relative;
      cursor: pointer;
      background: none;
      border: none;
      display: grid;
      place-items: center;
      z-index: 10;

      span {
        top: -15px;
        right: -15px;
        padding: 3px 7px;
        border-radius: 50%;
        background-color: #d87d4a;
        color: #ffffff;
        font-weight: 600;
        position: absolute;
        z-index: 1;
      }
    }
  }

  @media (max-width: 768px) {
    .inner-container {
      .left-side {
        .mobile-nav {
          display: block;
        }
      }
      ul {
        display: none;
      }
    }
  }
`;
