import React from 'react';

const Snake = ({ state: snakeState, className = '' }) => {
  const { rows, cols, snake, board } = snakeState;
  return (
    <>
      {snake.map((dot, idx) => (
        <div
          key={idx}
          className={`snake ${className} shake-constant`}
          style={{
            left: `${(board.width / cols) * dot.x}px`,
            top: `${(board.height / rows) * dot.y}px`,
            width: `${board.width / cols}px`,
            height: `${board.height / rows}px`,
          }}
        ></div>
      ))}
    </>
  );
};

export default Snake;
