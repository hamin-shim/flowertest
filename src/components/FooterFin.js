import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

export default function FooterFin() {
  return (
    <Logo>
      <img src="/img/logo_nomargin.png" alt="eloquence logo" />
    </Logo>
  );
}
const Logo = styled.div`
  max-width: 500px;
  height: 40px;
  display: flex;
  width: 100%;
  background: url("/img/background_fill.png");
  img {
    height: 100%;
  }
  justify-content: center;
`;
