import React, { useState } from "react";

const App = () => {
  const [userChose, setUserChoice] = useState(null);

  const handleClick = (value) => {
    setUserChoice(value);
  };
  return (
    <div>
      <h1>user choice is </h1>
      <h1>computer choice is </h1>
      <button
        onClick={() => {
          console.log("click");
        }}
      >
        Rock
      </button>
      <button
        onClick={() => {
          console.log("click");
        }}
      >
        Paper
      </button>
      <button
        onClick={() => {
          console.log("click");
        }}
      >
        Scissors
      </button>
    </div>
  );
};

export default App;
