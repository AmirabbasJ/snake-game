import React, { useContext, useEffect } from 'react';

import Snake from './snake';
import Apple from './apple';
import useSnake from '../hooks/use-snake';
import { ScoreContext } from '../context/scoreContext';
import useMusics from '../hooks/useMusics';
import usePhase from '../hooks/usePhase';
import 'csshake';

const Board = ({ setState }) => {
  const state = useSnake();
  const score = state.snake.length - 1;
  const shake = usePhase(score);
  const { setScore } = useContext(ScoreContext);
  const { themeMusic, explosion } = useMusics();

  useEffect(
    () => () => {
      themeMusic.stop();
    },
    [themeMusic]
  );
  useEffect(() => {
    setScore(score);
  }, [score, setScore]);

  useEffect(() => {
    if (state.state === 'dead') {
      themeMusic.stop();
      explosion.play();
      setTimeout(() => {
        explosion.stop();
        setState('gameOver');
      }, 2000);
    }
  }, [explosion, setState, state.state, themeMusic]);

  return (
    <div className={state.state === 'dead' ? 'dead' : ''}>
      <h1 className="score">{score} : امتیاز</h1>
      <div
        className={`game-board ${
          state.state === 'dead' ? 'shake-horizontal' : shake
        } shake-constant`}
        style={{
          width: `${state.board.width}px`,
          height: `${state.board.height}px`,
        }}
      >
        <Snake state={state} className={score > 18 ? shake : ''} />
        <Apple state={state} className={score > 18 ? shake : ''} />
      </div>
    </div>
  );
};

export default Board;
