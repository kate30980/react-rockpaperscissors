import React, { useState, useEffect } from "react";

const AppAd = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ["rock", "paper", "scissors", "lizard", "spock"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomNumber];
    setComputerChoice(randomChoice);
  };
  return (
    <div>
      <h1>User Choice is: {userChoice}</h1>
      <h1>Computer Choice is :{computerChoice}</h1>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
      <h1>{result}</h1>
    </div>
  );
};

export default AppAd;
