import React from "react";
import { createGlobalStyle } from "styled-components";
import PostCategories from "../category/PostCategories";
import PostUserInfo from "../user/PostUserInfo";

const PostGlobalStyle = createGlobalStyle`
  .post {
    display: block;
    overflow: hidden;
    border-radius: var(--border-radius);
    background: var(--white-color);
    font-size: 2rem;
  }

  .post article > img {
    width: 100%;
  }

  .contents-wrap {
    padding: 1.6rem 2.4rem 2.4rem;
  }

  .contents-wrap h3,
  .contents-wrap .post-description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .contents-wrap h3 {
    height: calc(1.8rem * 1.4 * 2);
    margin: 1rem 0;
    font-size: 1.8rem;
    font-weight: bold;
    -webkit-line-clamp: 2;
    letter-spacing: -0.02em;
  }

  .contents-wrap .post-description {
    height: calc(1.4rem * 1.4 * 3);
    margin-top: 1.6rem;
    color: var(--gray-color);
    font-size: 1.4rem;
    -webkit-line-clamp: 3;
    text-indent: 0.5em;
  }

  @media (max-width: 540px) {
    .contents-wrap h3 {
      height: auto;
      -webkit-line-clamp: 1;
    }
    .contents-wrap .post-description {
      height: auto;
      -webkit-line-clamp: 2;
    }
  }
`;

export default function Post({ postInfo }) {
  const { title, thumbnail, profileImg, userName, created, contents } =
    postInfo;
  const categories = postInfo.category;
  return (
    <>
      <PostGlobalStyle />
      <article>
        <img src={thumbnail} alt="" />
        <div className="contents-wrap">
          <PostCategories categories={categories} />
          <h3>{title}</h3>
          <PostUserInfo
            profileImg={profileImg}
            userName={userName}
            created={created}
          />
          <p className="post-description">{contents[0].text}</p>
        </div>
      </article>
    </>
  );
}
