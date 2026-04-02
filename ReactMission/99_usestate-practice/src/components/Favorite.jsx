import React, { useState } from "react";

function Favorite() {
  const handleSelectChange1 = (e) => {
    setSelectedValue1(e.target.value);
  };
  const handleSelectChange2 = (e) => {
    setSelectedValue2(e.target.value);
  };

  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");

  return (
    <>
      <label>좋아하는 색상: </label>
      <select value={selectedValue1} onChange={handleSelectChange1}>
        <option value="blue">파란색</option>
        <option value="red">빨간색</option>
        <option value="green">초록색</option>
        <option value="yellow">노란색</option>
      </select>
      <br />
      <label>좋아하는 과일: </label>
      <select value={selectedValue2} onChange={handleSelectChange2}>
        <option value="apple">🍎사과</option>
        <option value="banana">🍌바나나</option>
        <option value="orange">🍊오랜지</option>
        <option value="grape">🍇포도</option>
      </select>
      <br />
      선택한 색상: {selectedValue1}
      <br />
      선택한 과일: {selectedValue2}
    </>
  );
}

export default Favorite;
