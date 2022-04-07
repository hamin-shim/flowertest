import React from "react";
import styled from "styled-components";
import { Data } from "../data/data";
import Answer from "./Answer";

export default function EachQuestion({ data }) {
  return (
    <>
      <Percent>
        {data.id + 1} / {Data.length}
      </Percent>
      <Question>{data.question}</Question>
      <AnswerBox>
        {data.answer.map((e) => (
          <Answer data={e} />
        ))}
      </AnswerBox>
    </>
  );
}
const Percent = styled.div``;
const Question = styled.div``;
const AnswerBox = styled.div``;
