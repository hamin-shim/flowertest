import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DARK_GREEN, GRAY, LIGHT_GREEN } from "../constants/color";

export default function Start() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>도화테스트</Title>
      <STitle>당신의 치명적 매력은?</STitle>
      <Img>
        {/* <img src="https://static.forceteller.com/images/event/dohwa/firstpage_img.png" /> */}
        <img src="https://imgc.1300k.com/aaaaaib/goods/215024/71/215024713100.jpg?3" />
      </Img>
      <StartBtn onClick={() => navigate("/test")}>테스트 시작</StartBtn>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90vh;
`;
const Title = styled.h1`
  margin: 0;
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
