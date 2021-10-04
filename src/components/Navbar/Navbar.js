import React from "react";
import styled from "styled-components";
import logo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="inner-container">
        <img src={logo} alt="audiophile logo" />

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

        <button>
          <img src={cartIcon} alt="cart" />
        </button>
      </div>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  /* position: absolute;
  top: 0; */
  /* width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #181818; */
  width: 100%;

  .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

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
`;
