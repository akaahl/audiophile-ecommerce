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
      cursor: pointer;
      background: none;
      border: none;
      display: grid;
      place-items: center;
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
