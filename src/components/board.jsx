import React, { useContext, useEffect } from 'react';

import Snake from './snake';
import Apple from './apple';
import useSnake from '../hooks/use-snake';
import { ScoreContext } from '../context/scoreContext';
import useMusics from '../hooks/useMusics';

const Board = ({ setState }) => {
  const state = useSnake();
  const score = state.snake.length - 1;
  const { setScore } = useContext(ScoreContext);
  const { themeMusic } = useMusics();

  useEffect(
    () => () => {
      console.log('called');
      themeMusic.pause();
      themeMusic.currentTime = 0;
    },
    [themeMusic]
  );
  useEffect(() => {
    setScore(score);
  }, [score, setScore]);

  useEffect(() => {
    if (state.state === 'dead') setState('gameOver');
  }, [setState, state.state]);

  return (
    <>
      <h1 className="score">{score} : امتیاز</h1>
      <div
        className="game-board"
        style={{
          width: `${state.board.width}px`,
          height: `${state.board.height}px`,
        }}
      >
        <Snake state={state} />
        <Apple state={state} />
      </div>
    </>
  );
};

export default Board;
