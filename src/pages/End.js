import React, { useEffect, useState } from "react";
import Result from "../components/Result";
import ResultLoading from "../components/ResultLoading";
import { Data } from "../data/data";
import switchToMbti from "../function/switchToMbti";

export default function End({ result }) {
  console.log(result);
  const [type, setType] = useState();
  const [loading, setLoading] = useState(true);
  let array = [0, 0, 0, 0];
  let mbti = "";
  useEffect(() => {
    result.map((e) => {
      let { type, point } = Data[e.question].answer[e.check];
      console.log(type, point);
      switch (type) {
        case "e":
          array[0] += point;
          break;
        case "i":
          array[0] -= point;
          break;
        case "n":
          array[1] += point;
          break;
        case "s":
          array[1] -= point;
          break;
        case "t":
          array[2] += point;
          break;
        case "f":
          array[2] -= point;
          break;
        case "j":
          array[3] += point;
          break;
        case "p":
          array[3] -= point;
          break;
      }
    });
    console.log(array);
    array[0] > 0 ? (mbti += "e") : (mbti += "i");
    array[1] > 0 ? (mbti += "n") : (mbti += "s");
    array[2] > 0 ? (mbti += "t") : (mbti += "f");
    array[3] > 0 ? (mbti += "j") : (mbti += "p");
    console.log(mbti);
    setType(switchToMbti(mbti));
    console.log(switchToMbti("isfp"));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <>{loading ? <ResultLoading /> : <Result id={type} />}</>;
}
