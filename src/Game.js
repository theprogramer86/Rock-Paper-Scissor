import React, { useState } from "react";
import styles from './Game.module.css'

const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];

const choiceStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 40
}

const emojiStyles = {
  fontSize: 64,
  marginRight: 20
}

const nameStyles = {
  margin: 0,
  fontSize: 24,
  color: '#ffff'
}

const resultStyle = {
  marginTop: 40,
  fontSize: 48,
  color: '#ffff'
}

function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [hideChoice, setHideChoice] = useState(false);

  function handlePlayerChoice(choice) {
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
    ) {
      setResult("Victory!");
    } else {
      setResult("Crushing Defeat!");
    }
    setHideChoice(true);
  }

  function resetGame() {
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
    setHideChoice(false);
  }

  return (
    <div className={styles.container}>
      <h1 style={{fontSize: 52, marginTop: 0}}>Rock Paper Scissors</h1>
      <h2 style={{ display: hideChoice ? 'none' : 'flex', color: 'white', fontSize: 30, marginBottom: 0 }}>Choose!</h2>
      <div className={styles.choices} style={{ display: hideChoice ? 'none' : 'flex' }}>
        {CHOICES.map((choice) => (
          <button
            className={styles.choiceButton}
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && codeyChoice && (
        <div className={styles.results}>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{playerChoice.emoji}</span>
            <p style={nameStyles}>You chose {playerChoice.name}</p>
          </div>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{codeyChoice.emoji}</span>
            <p style={nameStyles}>The computer chose {codeyChoice.name}</p>
          </div>
          <h2 style={resultStyle}>{result}</h2>
          <button className={styles.replayButton} onClick={resetGame}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default Game;