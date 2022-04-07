import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function ResultLoading() {
  const likecontainer = useRef();
  useEffect(() => {
    Lottie.loadAnimation({
      container: likecontainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./loading.json"),
    });
  }, []);
  return (
    <Container>
      <h3>치명적인 당신을 쓰레기로 표현하자면...</h3>
      <NoMore ref={likecontainer}></NoMore>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin-top: 60%;
    font-size: 30px;
    text-align: center;
  }
`;
const NoMore = styled.div`
  width: 50%;
  margin: 0 auto;
`;
