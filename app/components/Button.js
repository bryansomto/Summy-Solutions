"use client";
import { headerButton, headerButtonHover } from "../lib/colors";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;
  border-radius: 10px;
  margin-top: 2px;
  padding: 4px 10px;
  @media (min-width: 768px) {
    padding: 5px 15px;
  }
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  svg {
    height: 16px;
    margin-right: 5px;
  }
  ${(props) =>
    props.header &&
    css`
      padding: 10px 20px;
      background-color: #111827;
      color: #e5e7eb;
      border: 1px solid transparent;
      border-radius: 50px;
      font-size: 0.9rem;
      &:hover {
        outline: 2px solid #111827;
        outline-offset: 2px;
        transition: 0.3s;
        font-weight: 600;
      }
      @media (min-width: 768px) {
        padding: 10px 30px;
      }
    `}
`;
