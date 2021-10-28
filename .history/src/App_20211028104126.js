import React from "react";

const App = () => {
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
    </div>
  );
};

export default App;
