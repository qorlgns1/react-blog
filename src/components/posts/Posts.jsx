import React from "react";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Post from "./Post";

const PostsGlobalStyle = createGlobalStyle`
  .posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
  }

  @media (max-width: 768px) {
    .posts {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 540px) {
    .posts {
      grid-template-columns: repeat(1, 1fr);
    }
  }

`;

export default function Posts({ postsInfo }) {
  return (
    <>
      <PostsGlobalStyle />
      <ul className="posts">
        {postsInfo.map((postInfo) => {
          return (
            <li key={postInfo.id}>
              <Link to={`/post-view/${postInfo.id}`} className="post">
                <Post postInfo={postInfo} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
