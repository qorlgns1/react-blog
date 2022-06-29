import React from "react";
import { createGlobalStyle } from "styled-components";

const Style = createGlobalStyle`
  .wrap-box {
    position: relative;
    width: 60rem;
    max-width: calc(100% - 4rem);
    margin: -22rem auto 0;
    padding: 8rem 0;
    border-radius: var(--border-radius);
    background: var(--white-color);
    font-size: 4rem;
    transition: all 0.3s;
  }

  .wrap-box .inner {
    width: 39.2rem;
    max-width: calc(100% - 8rem);
    margin: 0 auto;
    font-size: 1.6rem;
  }

  .wrap-box h2 {
    margin-bottom: 4.8rem;
    font-size: 3.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  .wrap-box ul {
    margin-bottom: 2.4rem;
  }
  .wrap-box ul li:not(:first-child) {
    margin-top: 4rem;
  }

  /* view, write */
  .mypage .wrap-box,
  .view .wrap-box,
  .write .wrap-box {
    width: 91.2rem;
    max-width: 100%;
    margin: -30rem 0 auto auto;
    padding: 8rem;
  }

  .view .wrap-box .inner,
  .write .wrap-box .inner {
    width: 100%;
    max-width: 100%;
  }

  .wrap-box hr {
    border: 1px solid var(--border-color);
    border-width: 1px 0 0 0;
    margin: 3.2rem 0;
  }

  .wrap-box .btn-group {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    top: 9.2rem;
    right: 8rem;
    font-size: 1.6rem;
  }

  @media (max-width: 1024px) {
    .wrap-box {
      margin-top: -35rem;
    }
    .mypage .wrap-box,
    .view .wrap-box,
    .write .wrap-box {
      padding: 6rem;
    }

    .view .wrap-box,
    .write .wrap-box {
      width: 100%;
    }
    .view .wrap-box,
    .write .wrap-box {
      width: 100%;
    }
    .wrap-box .btn-group {
      top: 6rem;
      right: 6rem;
      height: 5.2rem;
    }
  }

  @media (max-width: 640px) {
    .mypage .wrap-box,
    .view .wrap-box,
    .write .wrap-box {
      padding: 4rem;
    }

    .wrap-box .btn-group {
      top: 4rem;
      right: 4rem;
    }
  }

`;

export default function ViewWrapboxStyle() {
  return <Style />;
}
