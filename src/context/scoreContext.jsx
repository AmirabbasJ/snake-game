import { createContext, useEffect, useState } from 'react';
import React from 'react';

export const ScoreContext = createContext();

const ScoreContextProvider = ({ children }) => {
  const [highestScore, setHighestScore] = useState(() =>
    Number.parseInt(localStorage.getItem('score'))
  );
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (Number.isNaN(highestScore) || highestScore < score) {
      setHighestScore(score);
      localStorage.setItem('score', score);
    }
  }, [highestScore, score]);

  return (
    <ScoreContext.Provider value={{ highestScore, score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContextProvider;
