import React from "react";
import Profile from "../profile/Profile";
import facebook from "../../assets/Facebook.svg";
import twitter from "../../assets/Twitter.svg";
import instagram from "../../assets/Instagram.svg";
import github from "../../assets/Github.svg";
import { createGlobalStyle } from "styled-components";

const AboutGlobalStyle = createGlobalStyle`
  .about {
    flex-basis: calc((100% - 2.4rem * 3) / 4);
    flex-shrink: 0;
    align-self: flex-start;
    padding: 4rem 2.4rem 7rem;
    box-sizing: border-box;
    border-radius: var(--border-radius);
    background: var(--white-color);
    text-align: center;
    font-size: 2rem;
  }

  .about h2,
  .about h3 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: underline;
    letter-spacing: 0.1em;
  }
  .about h3 {
    margin-top: 6rem;
  }
  .about .user-profile {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 50%;
  }

  .about .user-name {
    color: var(--main-color);
    font-weight: bold;
    font-size: 1.6rem;
    margin: 1.2rem 0 0.8rem;
  }
  .about .user-description {
    font-size: 1.4rem;
    padding: 0 0.4rem;
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }
  .categories li a {
    background: var(--gray-background);
    color: var(--gray-text);
    font-size: 1.2rem;
    border-radius: calc(var(--border-radius) * 2);
    padding: 0.2rem 1.2rem;
  }

  .sns {
    display: flex;
    gap: 0.6rem;
    justify-content: center;
    margin-top: -0.4rem;
  }
  .sns a {
    display: block;
    padding: 0.4rem;
    line-height: 1;
  }
  .sns img {
    width: 1.6rem;
    display: block;
  }
  @media (max-width: 1024px) {
    .about {
      width: 100%;
    }
  }
`;

export default function About() {
  const aboutCategories = [
    "Life",
    "Style",
    "Tech",
    "Sport",
    "Photo",
    "Develop",
    "Music",
  ];
  const snsIcons = [facebook, twitter, instagram, github];
  return (
    <>
      <AboutGlobalStyle />
      <aside className="about">
        <h2>About</h2>
        <Profile width="8rem" height="8rem" imgSrc="/assets/profile.jpg" />
        <p className="user-name">Chilli</p>
        <p className="user-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <h3>Categories</h3>
        <ul className="categories">
          {aboutCategories.map((categoriTagName) => {
            return (
              <li key={categoriTagName}>
                <a href="#">{categoriTagName}</a>
              </li>
            );
          })}
        </ul>
        <h3>Follow</h3>
        <ul className="sns">
          {snsIcons.map((snsName) => {
            return (
              <li key={snsName}>
                <a href="#">
                  <img src={snsName} alt={snsName.toString()} />
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
