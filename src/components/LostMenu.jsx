import React, { useContext } from 'react';
import { ScoreContext } from '../context/scoreContext';
import useMusics from '../hooks/useMusics';

const LostMenu = ({ setState }) => {
  const { highestScore, score } = useContext(ScoreContext);
  const { themeMusic } = useMusics();

  return (
    <div className="menu">
      <h1> ): شما باختید</h1>
      <h1>امتیاز شما :‌ {score}</h1>
      <h1 className="highest-score">
        بالاترین امتیاز :‌ {Number.isNaN(highestScore) ? 0 : highestScore}
      </h1>

      <button
        onClick={() => {
          themeMusic.play();
          setState('game');
        }}
      >
        یه دور دیگه
      </button>
    </div>
  );
};

export default LostMenu;
