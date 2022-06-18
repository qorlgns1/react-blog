import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import styled, { createGlobalStyle } from "styled-components";

const MainLogoGlobalStyle = createGlobalStyle`
  .header-logo {
    font-size: 3rem;
  }

  .header-logo > a > img {
    display: block;
  }
`;

const HomeLink = styled(Link)`
  display: block;
  padding: 0.4rem;
  margin-left: -0.4rem;
`;

export default function MainLogo() {
  return (
    <>
      <MainLogoGlobalStyle />
      <h1 className="header-logo">
        <HomeLink to="/">
          <img src={logo} alt="My Blog" />
        </HomeLink>
      </h1>
    </>
  );
}
