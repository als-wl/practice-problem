import React, { useState } from "react";

function UserInfo() {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  const handleUserChange1 = (e) => {
    setMessage1(e.target.value);
  };

  const handleUserChange2 = (e) => {
    setMessage2(e.target.value);
  };

  const handleUserChange3 = (e) => {
    setMessage3(e.target.value);
  };

  return (
    <>
      <p>
        이름:
        <input type="text" value={message1} onChange={handleUserChange1} />
      </p>
      <p>
        나이:
        <input type="text" value={message2} onChange={handleUserChange2} />
      </p>
      <p>
        이메일:
        <input type="text" value={message3} onChange={handleUserChange3} />
      </p>
      <h3>프로필</h3>
      {message1}({message2})
      <br />
      📧 {message3}
    </>
  );
}

export default UserInfo;
