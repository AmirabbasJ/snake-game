import { EAST } from './directions';

const snakeInitState = {
  cols: 20,
  rows: 14,
  board: { width: 700, height: 500 },
  speed: 80,
  moves: [EAST],
  snake: [{ x: 2, y: 2 }],
  apple: { x: 16, y: 2 },
  state: 'moving',
};

export { snakeInitState };
