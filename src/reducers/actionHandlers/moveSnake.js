import { snakeInitState } from '../../data/snakeInitState';
import {
  incrementSnakeSize,
  initializeNewApple,
  isGameOver,
  getNewTalePosition,
  didSnakeReachApple,
} from '../../util/snake';

function moveSnake(state, action) {
  const { snake, moves, cols, rows, apple } = state;

  if (isGameOver(snake)) {
    return snakeInitState;
  }

  let newSnake = [...snake];
  const snakeReachedApple = didSnakeReachApple(snake, apple);

  const newApple = snakeReachedApple
    ? initializeNewApple({ rows, cols })
    : apple;

  const newMoves = [...moves];
  const [move] = newMoves;

  if (newMoves.length > 1) {
    newMoves.shift();
  }

  if (snakeReachedApple) {
    const snakeNewTalePos = getNewTalePosition(snake[0], move);
    newSnake.push(snakeNewTalePos);
  }
  newSnake = incrementSnakeSize(newSnake, move, { cols, rows });

  return { ...state, snake: newSnake, apple: newApple, moves: newMoves };
}

export default moveSnake;
