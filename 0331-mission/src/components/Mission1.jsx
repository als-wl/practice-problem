import { useEffect, useState } from "react";

function Mission1() {
  const [text, setText] = useState("");

  useEffect(() => {
    const inputText = prompt("문자열을 입력해주세요");
    setText(inputText);
  }, []);

  return (
    <>
      <h3>{text}</h3>
      <input type="text" />
    </>
  );
}

export default Mission1;
