function getNewTalePosition(snakeHead, move) {
  const x = snakeHead.x + move.x;
  const y = snakeHead.y + move.y;

  return { x, y };
}

export { getNewTalePosition };
