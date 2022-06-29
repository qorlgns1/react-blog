import react from "react";
import ViewWrapboxStyle from "./ViewWrapboxStyle";
import { createGlobalStyle } from "styled-components";
import PostUserInfo from "../user/PostUserInfo";
import PostCategories from "../category/PostCategories";
import Profile from "../profile/Profile";
import { Link } from "react-router-dom";

const ViewGlobalStyle = createGlobalStyle`
  .view .wrap-box h2 {
    margin-bottom: 0;
  }

  /* contents */
  .view-contents img {
    max-width: 100%;
    margin: 3.2rem 0;
  }
  .view-contents p {
    font-size: 1.6rem;
    line-height: 1.6;
    text-align: justify;
    letter-spacing: -0.01em;
  }

  /* title */
  .view .wrap-box .author-wrap {
    height: 6.4rem;
    font-size: 1.4rem;
  }
  .title-wrap {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 8rem;
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }
  .title-wrap h2 {
    width: 100%;
    text-transform: none;
  }

  @media (max-width: 1024px) {
    .title-wrap {
      flex-direction: column;
      gap: 2rem;
    }
  }

  .title-wrap h2 {
    font-size: 3.2rem;
    font-weight: bold;
  }
  .title-wrap button {
    flex-shrink: 0;
  }

  .view .wrap-box .btn-back {
    position: absolute;
    top: 8rem;
    left: 0;
  }

  .view .category {
    margin: 2rem 0 1rem 0;
  }

  @media (max-width: 1024px) {
    .view .wrap-box .btn-back {
      top: 6rem;
      width: 5.2rem;
      height: 5.2rem;
    }
    .view .wrap-box .author-wrap {
      height: 5.2rem;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 640px) {
    .view .wrap-box .btn-back {
      top: 4rem;
    }
    .view .wrap-box .author-wrap {
      margin-bottom: 1rem;
      padding-left: 3rem;
    }
  }
`;

export default function View({ postsInfo, match }) {
  const { id } = match.params;
  const [postInfoForView] = postsInfo.filter((postInfo) => {
    return postInfo.id.toString() === id;
  });

  const { profileImg, userName, created, contents } = postInfoForView;
  const categories = postInfoForView.category;

  return (
    <>
      <ViewWrapboxStyle />
      <ViewGlobalStyle />
      <div className="view">
        <div className="max-width">
          <section className="wrap-box">
            <div className="inner">
              <PostUserInfo
                profileImg={profileImg}
                userName={userName}
                created={created}
              />
              <PostCategories categories={categories} />
              <div className="title-wrap">
                <h2>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <button className="btn-like">Like</button>
              </div>
              <hr />
              <div className="view-contents">
                {contents.map((tag, i) => {
                  if (tag.type === "p") {
                    return react.createElement(tag.type, { key: i }, tag.text);
                  } else {
                    return react.createElement(
                      tag.type,
                      { src: tag.src, key: i },
                      tag.text
                    );
                  }
                })}
              </div>
              <div className="btn-group">
                <a href="#" className="btn-modify">
                  <div className="hidden">
                    <span>modify</span>
                  </div>
                </a>
                <button type="button" className="btn-delete">
                  <div className="hidden">
                    <span>delete</span>
                  </div>
                </button>
              </div>
              <Link to="../" className="btn-back">
                <div className="hidden">
                  <span>Back</span>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
