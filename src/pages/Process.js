import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DARK_GREEN, GRAY, GREEN, LIGHT_GREEN } from "../constants/color";
import { Data } from "../data/data";

export default function Process({ result, setResult }) {
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const data = Data[id];
  const onAnswerClicked = (questionId, answerId) => {
    console.log(questionId, answerId);
    const exist = result.filter((e) => e.question !== questionId);
    setResult([...exist, { question: questionId, check: answerId }]);
    if (id === 9) {
      console.log("끝났어요!");
      navigate("/fin");
    } else {
      setTimeout(() => setId(id + 1), 200);
    }
  };
  const onBackClicked = () => {
    if (id !== 0) {
      setId(id - 1);
    } else {
      const ok = window.confirm("정말 그만두시겠습니까?");
      if (ok) {
        navigate("/");
      }
    }
  };
  console.log(result);
  return (
    <Container>
      <Top>
        <Back onClick={onBackClicked}> {"<"}뒤로</Back>
        <Name>쓰레기테스트</Name>
      </Top>
      <SepBar />
      <Content>
        <Percent>
          {data.id + 1} / {Data.length}
        </Percent>
        <Question>{data.question}</Question>
        <AnswerBox>
          {data.answer.map((e, i) => (
            <EachAnswer key={i} onClick={() => onAnswerClicked(id, i)}>
              {e}
            </EachAnswer>
          ))}
        </AnswerBox>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  /* justify-content: center; */
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  /* border: 1px solid black; */
  padding: 10px 0;
  font-size: 20px;
`;
const SepBar = styled.div`
  width: 100%;
  height: 10px;
  background: linear-gradient(to right, #ffeaa7, pink);
  /* background: linear-gradient(to right, #0a541f, #093515); */
`;
const Back = styled.div`
  background-color: ${GRAY};
  border-radius: 30px;
  padding: 5px 10px;
`;
const Name = styled.div``;
const Content = styled.div`
  height: 60vh;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 20%;
`;
const Percent = styled.div`
  font-size: 50px;
  font-weight: bolder;
  color: ${LIGHT_GREEN};
`;
const Question = styled.div`
  color: ${GREEN};
`;
const AnswerBox = styled.div`
  width: 80%;
`;
const EachAnswer = styled.div`
  cursor: pointer;
  /* display: flex; */
  text-align: center;
  background: #dfe6e9;
  border-radius: 30px;
  margin-bottom: 20px;
  padding: 5px 0;
  color: black;
  @media screen and (min-width: 780px) {
    :hover {
      color: white;
      background: ${LIGHT_GREEN};
    }
  }
  :active {
    color: white;
    background: ${DARK_GREEN};
  }
`;
