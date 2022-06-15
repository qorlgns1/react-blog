import React from "react";
import styled from "styled-components";

const ProfileImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
  border-radius: 50%;
`;

export default function Profile({ width, hight, imgSrc }) {
  return <ProfileImg width={width} hight={hight} src={imgSrc} />;
}
