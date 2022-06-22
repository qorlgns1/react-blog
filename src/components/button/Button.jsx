import React from "react";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import arrowLeftBackButton from "../../assets/ArrowLeft-blue.svg";
import likeIcon from "../../assets/icon-like.svg";
import likeWhiteIcon from "../../assets/icon-like-white.svg";
import modifyIcon from "../../assets/icon-modify.svg";
import modifyWhiteIcon from "../../assets/icon-modify-white.svg";
import deleteIcon from "../../assets/icon-delete.svg";
import deleteWhiteIcon from "../../assets/icon-delete-white.svg";

const ButtonGlobalStyle = createGlobalStyle`
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    height: 4rem;
    padding: 0.2rem 1.2em 0;
    border: 0;
    border-radius: var(--border-radius);
    background: var(--main-color);
    color: var(--white-color);
    font-weight: bold;
    line-height: 1;
  }

  .button img {
    height: 1.2em;
    margin-top: -0.2rem;
    vertical-align: middle;
  }

  .button.fullWidth {
    width: 100%;
  }
  .button.gray {
    background: var(--gray-background);
    color: var(--black-color);
  }
  .button.white {
    padding: 0.2rem 0.8em 0;
    background: var(--white-color);
    color: var(--black-color);
  }
  .button.white img {
    height: 1.4em;
  }

  .btn-delete:focus {
    outline-color: rgba(var(--red-rgb), 0.2);
    box-shadow: 0 0 0 1px var(--red-color);
  }

  /* 저장 버튼 */
  .btn-save {
    width: 9.6rem;
    height: 4rem;
    padding-left: 2.4rem;
    border: 1px solid rgba(var(--main-rgb), 0.5);
    border-radius: var(--border-radius);
    background: var(--white-color) url(../assets/icon-save.svg) no-repeat 2rem 50% /
      1.6rem;
    transition: all 0.3s;
  }

  .btn-save:hover {
    background: var(--main-color) url(../assets/icon-save-white.svg) no-repeat
      2rem 50% / 1.6rem;
    color: var(--white-color);
  }

  /* 뒤로가기 */
  .btn-back {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    background: var(--gray-background) url(${arrowLeftBackButton}) no-repeat
      50% 50% / 4rem;
    font-size: 1.6rem;
  }

  .btn-like {
    width: 12rem;
    height: 4rem;
    padding-left: 3rem;
    border: 1px solid rgba(var(--red-rgb), 0.5);
    border-radius: var(--border-radius);
    background: var(--white-color) url(${likeIcon}) no-repeat 2.5rem
      50% / 2.4rem;
    transition: all 0.3s;
  }
  .btn-like:hover,
  .btn-like.active {
    background: var(--red-color) url(${likeWhiteIcon}) no-repeat
      2.5rem 50% / 2.4rem;
    color: var(--white-color);
  }
  .btn-like:focus {
    outline-color: rgba(var(--red-rgb), 0.2);
    box-shadow: none;
  }

  .btn-modify,
  .btn-delete {
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: var(--border-radius);
    transition: all 0.3s;
  }
  .btn-modify {
    background: var(--gray-background) url(${modifyIcon}) no-repeat
      50% 50% / 1.6rem;
    right: 13rem;
  }
  .btn-modify:hover {
    background: var(--main-color) url(${modifyWhiteIcon}) no-repeat
      50% 50% / 1.6rem;
  }

  .btn-delete {
    background: var(--gray-background) url(${deleteIcon}) no-repeat
      50% 50% / 1.6rem;
  }

  .btn-delete:hover {
    background: var(--red-color) url(${deleteWhiteIcon}) no-repeat
      50% 50% / 1.6rem;
  }

`;

export default function Button({ type, href, children, className, onClick }) {
  return (
    <>
      <ButtonGlobalStyle />
      {href ? (
        // 현재 로그인 페이지가 존재하지 않아 Link 태그에 onClick 이벤트를 임시로 넣어놓음
        <Link to={href} className={className} onClick={onClick}>
          {children}
        </Link>
      ) : (
        <button type={type} className={className} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
}
