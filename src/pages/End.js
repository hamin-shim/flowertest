import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResultLoading from "../components/ResultLoading";
import algorithm from "../function/algorithm";

export default function End({ result }) {
  const navigater = useNavigate();
  useEffect(() => {
    console.log(result);
    const id = algorithm(result);
    setTimeout(() => {
      navigater(`/fin/${id}`);
    }, 2000);
  }, []);
  return <ResultLoading />;
}
