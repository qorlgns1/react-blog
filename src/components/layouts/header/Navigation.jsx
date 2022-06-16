import React from "react";
import icon_modify_white from "../../../assets/icon-modify-white.svg";
import icon_logout from "../../../assets/icon-logout.svg";
import icon_login from "../../../assets/icon-login.svg";
import icon_register from "../../../assets/icon-register.svg";
import Button from "../../button/Button";
import styled from "styled-components";
import Profile from "../../profile/Profile";
import { createGlobalStyle } from "styled-components";

const NavGlobalStyle = createGlobalStyle`
  .profile-img a {
    width: 4.4rem;
    height: 4.4rem;
    display: block;
    border-radius: 50%;
  }

  header .button {
    text-transform: none;
  }

  .button img {
    height: 1.2em;
    margin-top: -0.2rem;
    vertical-align: middle;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function Navigation({ isLogin, handleLogin }) {
  return (
    <>
      <NavGlobalStyle />
      <NavList>
        {!isLogin ? (
          <>
            <li>
              <Button href="#" className="button gray" onClick={handleLogin}>
                <img src={icon_login} alt="" />
                <span>Login</span>
              </Button>
            </li>
            <li className="only-pc">
              <Button href="#" className="button gray">
                <img src={icon_register} alt="" />
                <span>Register</span>
              </Button>
            </li>
          </>
        ) : (
          <>
            <li className="profile-img">
              <Button href="#">
                <Profile
                  href="#"
                  width="100%"
                  height="100%"
                  imgSrc="./assets/profile.jpg"
                  alt="My Page"
                />
              </Button>
            </li>
            <li>
              <Button href="#" className="button">
                <img src={icon_modify_white} alt="" />
                <span>Write</span>
              </Button>
            </li>
            <li>
              <Button onClick={handleLogin} className="button white">
                <img src={icon_logout} alt="" />
                <span>Logout</span>
              </Button>
            </li>
          </>
        )}
      </NavList>
    </>
  );
}
