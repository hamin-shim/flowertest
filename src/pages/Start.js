import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DARK_GREEN, GRAY, LIGHT_GREEN } from "../constants/color";

export default function Start() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>쓰레기테스트</Title>
      <STitle>: 당신은 어떤 쓰레기?</STitle>
      <Img>
        <img src="/img/main.png" alt="thumbnail" />
      </Img>
      <StartBtn onClick={() => navigate("/test")}>테스트 시작</StartBtn>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 15px;
`;
const Title = styled.h2`
  margin: 30px 0;
`;
const STitle = styled.h3`
  margin: 0;
  margin-bottom: 20px;
`;
const Img = styled.div`
  width: 100%;
  max-width: 200px;
  margin: auto;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
const StartBtn = styled.div`
  margin-top: 30px;
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
