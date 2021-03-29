import { samePosition } from '../../util/general';

function isGameOver(snake) {
  if (snake.length === 1) {
    return false;
  }
  const [snakeHead, ...snakeBody] = snake;
  return snakeBody.some((pos) => {
    return samePosition(snakeHead, pos);
  });
}
export { isGameOver };
