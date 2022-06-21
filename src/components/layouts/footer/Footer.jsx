import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const FooterGlobalStyle = createGlobalStyle`
  /* footer {
    background: var(--white-color);
    margin-top: 10rem;
  } */

  footer .max-width {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8rem;
    position: relative;
  }

  footer h2 {
    color: var(--gray-color);
  }

  .top-button {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 6.4rem;
    height: 6.4rem;
    padding-top: 2.2rem;
    border: 0;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    background: var(--main-color) url(../../assets/ArrowTop.svg) no-repeat 50%
      0.4rem / 4rem;
    color: var(--white-color);
    text-align: center;
    font-weight: bold;
  }
`;

// footer.css 에 아래 css를 적용하려고 하면 에러가 발생하여 styled 컴포넌트 사용
const FooterWrapper = styled.footer`
  background: var(--white-color);
  margin-top: 10rem;
`;

export default function Footer() {
  return (
    <>
      <FooterGlobalStyle />
      <FooterWrapper>
        <div className="max-width">
          <h2>©Weniv Corp.</h2>
          <button className="top-button">TOP</button>
        </div>
      </FooterWrapper>
    </>
  );
}
