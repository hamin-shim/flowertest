import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DARK_GREEN, GRAY, LIGHT_GREEN } from "../constants/color";
import Intro from "./Intro";

export default function Start() {
  const navigate = useNavigate();
  const [start, setStart] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 4000);
  }, []);
  return start ? (
    <Container>
      <Title>쓰레기테스트</Title>
      <STitle>: 당신은 어떤 쓰레기?</STitle>
      <Img>
        <img
          src="https://imgc.1300k.com/aaaaaib/goods/215024/71/215024713100.jpg?3"
          alt="thumbnail"
        />
      </Img>
      <StartBtn onClick={() => navigate("/test")}>테스트 시작</StartBtn>
    </Container>
  ) : (
    <Intro />
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 15px;
`;
const Title = styled.h2`
  margin: 0;
  margin-top: 30px;
`;
const STitle = styled.h3`
  margin: 0;
`;
const Img = styled.div`
  width: 100%;
  max-width: 200px;
  border-radius: 50%;
  margin: auto;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
const StartBtn = styled.div`
  margin-top: 20px;
  background: ${GRAY};
  color: black;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  :hover {
    color: white;
    background: ${LIGHT_GREEN};
  }
  :active {
    color: white;
    background: ${DARK_GREEN};
  }
`;
