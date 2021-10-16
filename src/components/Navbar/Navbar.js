import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
import hamburgerIcon from "../../assets/shared/tablet/icon-hamburger.svg";
import closeIcon from "../../assets/shared/tablet/icon-close.svg";
import { useSelector } from "react-redux";
import CartModal from "./CartModal";
import Mobile from "./Mobile";
import { motion, AnimatePresence } from "framer-motion";
import { navVariants } from "../../animations";

const Navbar = () => {
  const totalItem = useSelector((state) => state.allData).total;
  const [modal, setModal] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleMobileNav = (e) => {
    const nav = e.target.classList[1];

    if (nav === "open") {
      setMobile(true);
      document.body.style.overflowY = "hidden";
    } else {
      setMobile(false);
      document.body.style.overflowY = "scroll";
    }
  };

  return (
    <NavContainer
      totalItem={totalItem}
      mobile={mobile}
      variants={navVariants}
      initial="initial"
      animate="animate"
    >
      <div className="inner-container">
        <div className="left-side">
          <img
            src={hamburgerIcon}
            alt="hamburger"
            className="mobile-nav open"
            onClick={handleMobileNav}
          />
          <img
            src={closeIcon}
            alt="close"
            className="mobile-nav close"
            onClick={handleMobileNav}
          />
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

        <button
          onClick={() => {
            setModal(true);
            document.body.style.overflow = "hidden";
          }}
        >
          <img src={cartIcon} alt="cart" />
          {totalItem && <span>{totalItem}</span>}
        </button>

        <AnimatePresence>
          {modal && <CartModal setModal={setModal} />}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {mobile && <Mobile setMobile={setMobile} />}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled(motion.nav)`
  width: 100%;
  position: relative;

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
        cursor: pointer;
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
      margin-right: ${({ totalItem }) => (totalItem ? "10px" : "initial")};

      span {
        top: -15px;
        right: -15px;
        padding: ${({ totalItem }) =>
          totalItem > 10 ? "3px 7px" : "3px 10px"};
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
          &.open {
            display: ${({ mobile }) => (mobile ? "none" : "block")};
          }

          &.close {
            display: ${({ mobile }) => (mobile ? "block" : "none")};
          }
        }
      }
      ul {
        display: none;
      }
    }
  }
`;
