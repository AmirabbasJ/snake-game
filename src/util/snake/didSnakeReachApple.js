import { samePosition } from '../general';

function didSnakeReachApple(snakePos, applePos) {
  const [snakeHead] = snakePos;
  return samePosition(snakeHead, applePos);
}

export { didSnakeReachApple };
