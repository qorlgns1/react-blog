import React from "react";
import styled from "styled-components";

const Category = styled.span`
  margin-right: 0.4rem;
  padding: 0.2rem 1.2rem;
  border-radius: calc(var(--border-radius) * 2);
  background: var(--gray-background);
  font-size: 1.2rem;
`;

export default function PostCategory({ children }) {
  return <Category>children</Category>;
}
