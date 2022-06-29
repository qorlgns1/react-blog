import React from "react";
import { createGlobalStyle } from "styled-components";
import PostCategory from "./PostCategory";

const PostCategoryGlobalStyle = createGlobalStyle`
  .post-categories {
    display: flex;
    flex-wrap: wrap;
    color: var(--main-color);
  }
`;

export default function PostCategories({ categories }) {
  return (
    <>
      <PostCategoryGlobalStyle />
      <dl className="post-categories">
        <div className="hidden">
          <dt>Category</dt>
        </div>
        <dd>
          {categories.map((categoryType, index) => (
            <PostCategory key={index}>{categoryType}</PostCategory>
          ))}
        </dd>
      </dl>
    </>
  );
}
