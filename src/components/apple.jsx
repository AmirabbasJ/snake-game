import React from 'react';

const Apple = props => {
  const {cols, rows, apple, board} = props.state;
  return (
    <div
      className="apple"
      data-testid="apple"
      style={{
        left: `${apple.x * (board.width / cols)}px`,
        top: `${apple.y * (board.height / rows)}px`,
        width: `${board.width / cols}px`,
        height: `${board.height / rows}px`
      }}
    ></div>
  );
};

export default Apple;
