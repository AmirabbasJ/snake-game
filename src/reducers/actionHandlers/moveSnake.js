import {
  incrementSnakeSize,
  initializeNewApple,
  isGameOver,
  getNewSnakeHeadPosition,
  didSnakeReachApple,
} from '../../util/snake';

function moveSnake(state, _) {
  const { snake, moves, cols, rows, apple } = state;

  if (isGameOver(snake)) {
    return { ...state, state: 'dead' };
  }
  let newSnake = [...snake];
  const snakeReachedApple = didSnakeReachApple(snake, apple);

  const newApple = snakeReachedApple
    ? initializeNewApple({ rows, cols, snake, apple })
    : apple;

  const newMoves = [...moves];
  const [move] = newMoves;

  if (newMoves.length > 1) newMoves.shift();

  if (snakeReachedApple) {
    const newSnakeHeadPos = getNewSnakeHeadPosition(snake, move);
    newSnake.push(newSnakeHeadPos);
  }
  newSnake = incrementSnakeSize(newSnake, move, { cols, rows });

  return { ...state, snake: newSnake, apple: newApple, moves: newMoves };
}

export default moveSnake;
