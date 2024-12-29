"use client";
import styled from "styled-components";

const StyledDiv = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 40px auto;
  max-width: 100%;
  justify-items: center;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 80%;
  }
  @media (min-width: 1024px) {
    max-width: 70%;
  }
`;

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
