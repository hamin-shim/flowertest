import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.svg";

export default function Footer_default() {
  return (
    <Logo>
      <img src={logo} />
    </Logo>
  );
}
const Logo = styled.div`
  max-width: 500px;
  height: 170px;
  display: flex;
  width: 100%;
  img {
    height: 100%;
  }
  justify-content: center;
`;