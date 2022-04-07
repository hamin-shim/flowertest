import React, { useEffect, useState } from "react";
import Result from "../components/Result";
import ResultLoading from "../components/ResultLoading";
import { Data } from "../data/data";

export default function End({ result }) {
  console.log(result);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <>
      {loading ? <ResultLoading /> : <Result />}
      {/* {result.map((e) => (
        <p style={{ fontSize: "15px" }}>
        {Data[e.question].question} / {Data[e.question].answer[e.check]}
        </p>
      ))} */}
    </>
  );
}
