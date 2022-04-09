import switchToMbti from "./switchToMbti";
import { Data } from "../data/data";

export default function algorithm(result) {
  let array = [0, 0, 0, 0];
  let mbti = "";
  result.map((e) => {
    console.log(e.question + 1 + "번째 질문에 대한 답변 및 포인트");
    console.log(`질문 : ${Data[e.question].question}`);
    console.log(`답변 : ${Data[e.question].answer[e.check].text}`);
    let { type, point } = Data[e.question].answer[e.check];
    console.log(`타입: ${type}/점수: ${point}`);
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
    return 0;
  });
  array[0] > 0 ? (mbti += "e") : (mbti += "i");
  array[1] > 0 ? (mbti += "n") : (mbti += "s");
  array[2] > 0 ? (mbti += "t") : (mbti += "f");
  array[3] > 0 ? (mbti += "j") : (mbti += "p");
  console.log(`판별된 mbti는 다음과 같습니다 : ${mbti}`);
  const id = switchToMbti(mbti);
  console.log(id);
  return id;
}
