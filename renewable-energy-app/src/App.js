import React, { useState } from 'react';
import './App.css';

function App() {
  const [years, setYears] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  const updateProgressBar = () => {
    const progressUnits = (years / 32.5) * 100;
    document.querySelector('.progress-fill').style.width = `${progressUnits}%`;

    // Add a subtle animation effect
    document.querySelector('.progress-fill').style.transition = 'width 0.5s ease-in-out';
  };

  const handleYearChange = (e) => {
    const newYears = parseFloat(e.target.value);

    if (isNaN(newYears) || newYears < 0 || newYears > 32.5) {
      setErrorMessage('Please enter a valid number of years (0 - 32.5).');
    } else {
      setErrorMessage('');
      setYears(newYears);
      updateProgressBar();
    }
  };

  const resetGame = () => {
    setYears(0);
    setErrorMessage('');
    setLevel(1);
    setScore(0);
    updateProgressBar();
  };

  return (
    <div className="App">
      <h1>Renewable Energy Game</h1>
      <div className="input-container">
        <label htmlFor="years">Years:</label>
        <input
          type="range"
          id="years"
          min="0"
          max="32.5"
          step="0.1"
          value={years}
          onChange={handleYearChange}
        />
        <p>{years.toFixed(1)} years</p>
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <div className="game-info">
        <p className="level">Level: {level}</p>
        <p className="score">Score: {score}</p>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ backgroundColor: 'green', width: `${years * 10}%` }}>
            <span>Fossil Fuels Eliminated</span>
          </div>
        </div>

        
      </div>
      <button onClick={resetGame}>Reset Game</button>
      
    </div>
    
  );
}

export default App;
