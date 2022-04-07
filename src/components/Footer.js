import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

export default function Footer() {
  return (
    <Logo>
      <img src={logo} />
    </Logo>
  );
}
const Logo = styled.div`
  /* background-color: white; */
  filter: opacity(80%);
  position: fixed;
  /* width: 95%;
  max-width: 500px; */
  height: 50px;
  display: flex;
  width: 100%;
  img {
    height: 100%;
  }
  bottom: 0;
  display: flex;
  /* border: 1px solid black; */
  justify-content: center;
`;
