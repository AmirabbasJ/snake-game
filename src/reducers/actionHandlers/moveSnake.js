import { snakeInitState } from '../../data/snakeInitState';
import { samePosition } from '../../util/general';
import {
  incrementSnakeSize,
  initializeNewApple,
  checkSnakeDeath,
  getNewTalePosition,
} from '../../util/snake';

function moveSnake(state, action) {
  const { snake, moves, cols, rows, apple } = state;

  const snakeAteItself = checkSnakeDeath(snake);
  if (snakeAteItself) {
    return snakeInitState;
  }

  let newSnake = [...snake];
  const [snakeHead] = newSnake;

  const snakeReachedApple = samePosition(snakeHead, apple);

  const newApple = snakeReachedApple
    ? initializeNewApple({ rows, cols })
    : apple;

  const newMoves = [...moves];
  const [move] = newMoves;

  if (newMoves.length > 1) {
    newMoves.shift();
  }

  if (snakeReachedApple) {
    const snakeNewTalePos = getNewTalePosition(snakeHead, move);
    newSnake.push(snakeNewTalePos);
  }
  newSnake = incrementSnakeSize(newSnake, move, { cols, rows });

  return { ...state, snake: newSnake, apple: newApple, moves: newMoves };
}

export default moveSnake;
