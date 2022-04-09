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
    const exist = result.filter((e) => e.question !== questionId);
    setResult([...exist, { question: questionId, check: answerId }]);
    if (id === 8) {
      navigate("/loading");
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
              {e.text}
            </EachAnswer>
          ))}
        </AnswerBox>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  padding: 10px 0;
  font-size: 20px;
`;
const SepBar = styled.div`
  width: 100%;
  height: 10px;
  background: linear-gradient(to right, #ffeaa7, pink);
`;
const Back = styled.div`
  background-color: ${GRAY};
  border-radius: 30px;
  padding: 5px 10px;
`;
const Name = styled.div``;
const Content = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 20%;
`;
const Percent = styled.div`
  font-size: 20px;
  font-weight: bolder;
  color: ${LIGHT_GREEN};
`;
const Question = styled.div`
  color: ${GREEN};
  font-size: 25px;
  font-weight: bolder;
  padding: 10px 40px;
  word-break: keep-all;
`;
const AnswerBox = styled.div`
  width: 80%;
`;
const EachAnswer = styled.div`
  cursor: pointer;
  font-size: 25px;
  text-align: center;
  background: #dfe6e9;
  border-radius: 30px;
  margin-bottom: 20px;
  padding: 5px 20px;
  word-break: keep-all;
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
