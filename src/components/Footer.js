import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.svg";

export default function Footer() {
  const [where, setWhere] = useState("");
  const url = useLocation();
  console.log(url.pathname);
  useEffect(() => {
    if (url.pathname.includes("fin")) {
      setWhere("fin");
    }
  });
  console.log(where);
  return (
    <Logo where={where}>
      <img src={logo} />
    </Logo>
  );
}
const Logo = styled.div`
  background-color: white;
  filter: opacity(80%);
  position: ${(props) => (props.where === "fin" ? "sticky" : "fixed")};
  position: fixed;
  max-width: 500px;
  bottom: 0;
  height: 50px;
  display: flex;
  width: 100%;
  img {
    height: 100%;
  }
  bottom: 0;
  /* border: 1px solid black; */
  justify-content: center;
`;
