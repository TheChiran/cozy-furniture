import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants/COLORS";
import searchIcon from "./../../assets/images/icons/search.svg";
import shoppingCartIcon from "./../../assets/images/icons/shopping-cart.svg";

const navLinks = [
  {
    id: 1,
    name: "Shop",
    url: "#",
  },
  {
    id: 2,
    name: "Collective",
    url: "#",
  },
  {
    id: 3,
    name: "Designers",
    url: "#",
  },
  {
    id: 4,
    name: "About Us",
    url: "#",
  },
  {
    id: 5,
    name: "Contact",
    url: "#",
  },
];

function Header() {
  return (
    <StyledHeader className="header">
      <Grid container columnSpacing={10} className="header-container">
        <Grid item xs={2}>
          <Link to="/" className="logo">
            Cozy{" "}
            <sup>
              <span>&#174;</span>
            </sup>
          </Link>
        </Grid>
        <Grid item xs={10}>
          <div className="contents">
            <div className="contents__links">
              {navLinks.map((link) => {
                return (
                  <Link to={`${link.url}`} key={`${link.id}-${link.name}`}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="contents__icons">
              <div className="ham-menu">
                <span className="ham-menu__line"></span>
                <span className="ham-menu__line"></span>
                <span className="ham-menu__line"></span>
              </div>
              <a className="search-icon">
                <img src={searchIcon} alt="Search Icon" />
              </a>
              <a className="shopping-cart-icon">
                <img src={shoppingCartIcon} alt="Shopping cart icon" />
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  height: 80px;
  border-bottom: 1px solid ${COLORS.borderColor};
  display: flex;
  align-items: center;
  padding: 0 40px;

  .header-container {
    align-items: center;
  }

  .logo {
    font-family: "Cambay";
    color: ${COLORS.dark};
    font-size: 24px;
    font-weight: 700;
    line-height: 40px;
    text-transform: capitalize;
    text-decoration: none;

    sup {
      span {
        font-weight: 400;
      }
    }
  }

  .contents {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__links {
      display: flex;
      column-gap: 40px;
      align-items: center;

      a {
        color: ${COLORS.dark};
        text-decoration: none;
        text-transform: uppercase;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-weight: 600px;
        line-height: 14px;
      }
    }

    &__icons {
      display: flex;
      align-items: center;
      column-gap: 40px;

      .ham-menu {
        width: 28px;
        height: 24px;
        // position: relative;
        display: flex;
        flex-direction: column;
        row-gap: 4px;
        justify-content: center;
        cursor: pointer;

        &__line {
          width: 100%;
          height: 3px;
          background: ${COLORS.dark};
          border-radius: 4px;

          &:nth-of-type(1),
          &:nth-of-type(3) {
            width: calc(100% - 6px);
            margin: 0 auto;
          }
        }
      }

      .search-icon {
      }

      .shopping-cart-icon {
        padding-left: 40px;
        position: relative;
        // border-left: 1px solid ${COLORS.borderColor};

        &::before {
          content: "";
          position: absolute;
          top: -26px;
          left: 0;
          width: 1px;
          height: 80px;
          background: ${COLORS.borderColor};
        }
      }
    }
  }
`;

export default Header;
