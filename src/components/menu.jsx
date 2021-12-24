import React, { useContext } from 'react';
import { ScoreContext } from '../context/scoreContext';
import useMusics from '../hooks/useMusics';

const Menu = ({ setState }) => {
  const { highestScore } = useContext(ScoreContext);
  const { themeMusic, explosion } = useMusics();

  return (
    <div className="menu">
      <h1 className="highest-score">بالاترین امتیاز :‌ {highestScore}</h1>
      <div className="keyboards">
        <div className="keyboard">
          <div className="key">A</div>
          <div className="key">W</div>
          <div className="key">S</div>
          <div className="key">D</div>
        </div>
        <h1>یا</h1>
        <div className="keyboard">
          <div className="key">←</div>
          <div className="key">↑</div>
          <div className="key">↓</div>
          <div className="key">→</div>
        </div>
      </div>

      <button
        onClick={() => {
          explosion.stop();
          themeMusic.play();
          setState('game');
        }}
      >
        شروع
      </button>
    </div>
  );
};

export default Menu;
