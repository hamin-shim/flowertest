import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import End from "./pages/End";
import Process from "./pages/Process";
import Start from "./pages/Start";

export default function Router() {
  const [result, setResult] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<Start />}></Route>
      <Route
        path="/test"
        element={<Process result={result} setResult={setResult} />}
      ></Route>
      <Route path="/fin" element={<End result={result} />}></Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
}
