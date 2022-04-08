import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DARK_GREEN, GRAY, LIGHT_GREEN } from "../constants/color";
import { ResultData } from "../data/data";
export default function Result({ id }) {
  // const [id, setId] = useState(2);
  console.log(id);
  const navigate = useNavigate();
  return (
    <Container>
      <p>당신의 쓰레기 유형은</p>
      <Title>{ResultData[id].title}</Title>
      <Icon>
        <img src="/img/trash.jpeg" />
      </Icon>
      <RateBox>
        <Rate>
          <Label>재활용력 : </Label>
          <Circle>
            <span>{"●".repeat(ResultData[id].spec[0])}</span>
            <span>{"○".repeat(5 - ResultData[id].spec[0])}</span>
          </Circle>
        </Rate>
        <Rate>
          <Label>유연성 : </Label>
          <Circle>
            <span>{"●".repeat(ResultData[id].spec[1])}</span>
            <span>{"○".repeat(5 - ResultData[id].spec[1])}</span>
          </Circle>
        </Rate>
        <Rate>
          <Label>귀염력 : </Label>
          <Circle>
            <span>{"●".repeat(ResultData[id].spec[2])}</span>
            <span>{"○".repeat(5 - ResultData[id].spec[2])}</span>
          </Circle>
        </Rate>
      </RateBox>
      <Detail>{ResultData[id].detail}</Detail>
      <Combination>
        <Best>
          <CombiLabel>나와 찰떡인 쓰레기</CombiLabel>
          <CombiIcon>
            <img src="/img/trash.jpeg" />
          </CombiIcon>
        </Best>
        <Worst>
          <CombiLabel>나와 상극인 쓰레기</CombiLabel>
          <CombiIcon>
            <img src="/img/trash.jpeg" />
          </CombiIcon>
        </Worst>
      </Combination>
      <BtnContainer>
        <ShareBtn>공유하기</ShareBtn>
        <ReBtn onClick={() => navigate("/")}>다시하기</ReBtn>
      </BtnContainer>
    </Container>
  );
}
const Container = styled.div`
  background-image: url("/img/background.png");
  background-size: cover;
  background-position: center;
  /* background-color: whitesmoke; */
  min-height: 90vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0;
    margin-top: 20px;
    font-size: 25px;
  }
`;
const Title = styled.h1`
  font-size: 50px;
  margin: 0;
`;
const Detail = styled.div`
  padding: 15px 30px;
  font-size: 20px;
  word-break: keep-all;
`;
const BtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;
const ShareBtn = styled.div`
  text-align: center;
  border-radius: 30px;
  margin: 10px 30px;
  background-color: ${GRAY};
  color: black;
  padding: 5px 20px;
  :hover {
    color: white;
    background: ${LIGHT_GREEN};
  }
  :active {
    color: white;
    background: ${DARK_GREEN};
  }
`;
const ReBtn = styled(ShareBtn)``;
const Icon = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`;
const RateBox = styled.div``;
const Rate = styled.div`
  /* display: grid; */
  display: flex;
  font-size: 20px;
  grid-template-columns: 1fr 1fr;
`;
const Circle = styled.div``;
const Label = styled.div``;
const Combination = styled.div`
  width: 100%;
  /* margin-top: 20px; */
  display: flex;
  justify-content: space-around;
  /* background: red; */
`;
const Best = styled.div`
  border: 1px solid ${GRAY};
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CombiLabel = styled.div`
  font-size: 20px;
`;
const CombiIcon = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`;
const Worst = styled(Best)``;
