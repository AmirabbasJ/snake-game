import { EAST } from './directions';

const snakeInitState = {
  cols: 20,
  rows: 14,
  board: { width: 700, height: 500 },
  speed: 100,
  moves: [EAST],
  snake: [{ x: 2, y: 2 }],
  apple: { x: 16, y: 2 },
};

export { snakeInitState };
