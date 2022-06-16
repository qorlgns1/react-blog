import React from "react";
import { createGlobalStyle } from "styled-components";
import MainLogo from "./MainLogo";
import Navigation from "./Navigation";

const HeaderGlobalStyle = createGlobalStyle`
  header {
    background: var(--white-color);
  }

  header .max-width {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    padding: 1rem 0;
  }

  @media (max-width: 640px) {
  .only-pc {
    display: none;
  }

  header .button {
    width: 4.4rem;
    height: 4.4rem;
    padding: 0;
    border-radius: 50%;
  }

  header .button span {
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  }
}`;

export default function Header({ isLogin, handleLogin }) {
  return (
    <>
      <HeaderGlobalStyle />
      <header>
        <div className="max-width">
          <MainLogo />
          <Navigation isLogin={isLogin} handleLogin={handleLogin} />
        </div>
      </header>
    </>
  );
}
