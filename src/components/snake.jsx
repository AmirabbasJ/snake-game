import React from 'react';

const Snake = props => {
  const {rows, cols, snake, board} = props.state;

  return (
    <>
      {snake.map((dot, idx) => (
        <div
          key={idx}
          className="snake"
          data-testid="snake"
          style={{
            left: `${(board.width / cols) * dot.x}px`,
            top: `${(board.height / rows) * dot.y}px`,
            width: `${board.width / cols}px`,
            height: `${board.height / rows}px`
          }}
        ></div>
      ))}
    </>
  );
};

export default Snake;
