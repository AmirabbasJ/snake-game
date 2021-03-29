import { resetOnReachOverflow } from '../../util/general';

function incrementSnakeSize(newSnake, move, { cols, rows }) {
  newSnake = newSnake.map(({ x, y }, index) => {
    const isSnakesHeadPosition = index === 0;
    if (isSnakesHeadPosition) {
      x = resetOnReachOverflow(x + move.x, { max: cols - 1, min: 0 });
      y = resetOnReachOverflow(y + move.y, { max: rows - 1, min: 0 });
    } else {
      const prevSnakePartPosition = newSnake[index - 1];
      x = prevSnakePartPosition.x;
      y = prevSnakePartPosition.y;
    }
    return { x, y };
  });
  return newSnake;
}
export { incrementSnakeSize };
