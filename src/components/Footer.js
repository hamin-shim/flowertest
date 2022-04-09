import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

export default function Footer() {
  return (
    <Logo>
      {/* <img src={logo} alt="eloquence logo" /> */}
      <img src="/img/logo_nomargin.png" alt="eloquence logo" />
    </Logo>
  );
}
const Logo = styled.div`
  background-color: white;
  filter: opacity(80%);
  position: fixed;
  max-width: 500px;
  bottom: 0;
  height: 40px;
  display: flex;
  width: 100%;
  img {
    height: 100%;
  }
  bottom: 0;
  /* border: 1px solid black; */
  justify-content: center;
`;
