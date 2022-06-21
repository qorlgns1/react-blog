import React from "react";
import Profile from "../profile/Profile";
import { createGlobalStyle } from "styled-components";

const PostUserInfoGlobalStyle = createGlobalStyle`
  .author-wrap {
    display: flex;
    gap: 1rem;
    color: #767676;
    font-size: 1.2rem;
  }

  .author-wrap dd {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .created::before {
    content: "";
    display: block;
    width: 1px;
    height: 0.8em;
    margin-right: 1rem;
    background: var(--border-color);
  }
`;

export default function PostUserInfo({ profileImg, userName, created }) {
  return (
    <>
      <PostUserInfoGlobalStyle />
      <dl className="author-wrap">
        <div className="hidden">
          <dt>Author</dt>
        </div>
        <dd className="author">
          <Profile
            width="2em"
            height="2em"
            imgSrc={profileImg}
            alt="프로필이미지"
          />
          {userName}
        </dd>
        <div className="hidden">
          <dt>Created</dt>
        </div>
        <dd className="created">{created}</dd>
      </dl>
    </>
  );
}
