function getNewSnakeHeadPosition(snake, move) {
  const [headPos] = snake;
  const x = headPos.x + move.x;
  const y = headPos.y + move.y;

  return { x, y };
}

export { getNewSnakeHeadPosition };
