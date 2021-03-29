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

  let newApple = { ...apple };

  let newSnake = [...snake];
  const [snakeHead] = newSnake;

  const newMoves = [...moves];
  const [move] = newMoves;

  if (newMoves.length > 1) {
    newMoves.shift();
  }

  const snakeAteItself = checkSnakeDeath(snake);
  if (snakeAteItself) {
    return snakeInitState;
  }
  const snakeReachedApple = samePosition(snakeHead, apple);
  if (snakeReachedApple) {
    newApple = initializeNewApple({ rows, cols });
    const snakeNewTalePos = getNewTalePosition(snakeHead, move);
    newSnake.push(snakeNewTalePos);
  }
  newSnake = incrementSnakeSize(newSnake, move, { cols, rows });

  return { ...state, snake: newSnake, apple: newApple, moves: newMoves };
}

export default moveSnake;
