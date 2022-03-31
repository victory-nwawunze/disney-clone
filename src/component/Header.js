/** @format */

import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span> HOME </span>{" "}
        </a>{" "}
        <a>
          <img src="/images/search-icon.svg" />
          <span> SEARCH </span>{" "}
        </a>{" "}
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span> WATCHLIST </span>{" "}
        </a>{" "}
        <a>
          <img src="/images/original-icon.svg" />
          <span> ORIGINALS </span>{" "}
        </a>{" "}
        <a>
          <img src="/images/movie-icon.svg" />
          <span> MOVIES </span>{" "}
        </a>{" "}
        <a>
          <img src="/images/series-icon.svg" />
          <span> SERIES </span>{" "}
        </a>{" "}
      </NavMenu>

      <UserImg src="data:image/png;base64,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" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
