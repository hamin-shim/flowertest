import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.svg";

export default function Footer_default() {
  return (
    <Logo>
      <img src="/img/logo_nomargin.png" alt="eloquence logo" />
    </Logo>
  );
}
const Logo = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 500px;
  height: 40px;
  display: flex;
  width: 100%;
  img {
    height: 100%;
  }
  justify-content: center;
`;
