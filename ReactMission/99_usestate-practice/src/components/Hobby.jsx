import React, { useState } from "react";

function Hobby() {
  const [hobbies, setHobbies] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((hobby) => hobby !== value));
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="hobby1"
        value="reading"
        onChange={handleChange}
      />
      <label htmlFor="hobby1">📚 독서</label>
      <br />

      <input
        type="checkbox"
        id="hobby2"
        value="music"
        onChange={handleChange}
      />
      <label htmlFor="hobby2">🎵 음악</label>
      <br />

      <input
        type="checkbox"
        id="hobby3"
        value="sports"
        onChange={handleChange}
      />
      <label htmlFor="hobby3">🏋️ 운동</label>
      <br />

      <input
        type="checkbox"
        id="hobby4"
        value="coding"
        onChange={handleChange}
      />
      <label htmlFor="hobby4">💻 코딩</label>

      <h3>선택된 취미</h3>
      <p>{hobbies.join(", ")}</p>
    </>
  );
}

export default Hobby;
