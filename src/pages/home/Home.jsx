import React from "react";
import Posts from "../../components/posts/Posts";
import { createGlobalStyle } from "styled-components";

const HomeGlobalStyle = createGlobalStyle`
  main > .max-width {
    display: flex;
    flex-direction: row-reverse;
    gap: 2.4rem;
    position: relative;
  }

  @media (max-width: 1024px) {
    main .max-width {
      flex-direction: column;
    }
  }
`;

export default function Home({ postsInfo }) {
  return (
    <main>
      <HomeGlobalStyle />
      <div className="max-width">
        <Posts postsInfo={postsInfo} />
      </div>
    </main>
  );
}
