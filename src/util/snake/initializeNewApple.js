import { getRandomNumber } from '../../util/general';

function initializeNewApple({ rows, cols, snake }) {
  const xs = [...new Array(cols)]
    .map((_, i) => i)
    .filter((x) => snake.find((a) => a.x !== x));
  const randomX = xs[getRandomNumber(0, xs.length)];
  const ys = [...new Array(rows)]
    .map((_, i) => i)
    .filter((x) => snake.find((a) => a.y !== x));
  const randomY = ys[getRandomNumber(0, ys.length)];
  return { x: randomX, y: randomY };
}
export { initializeNewApple };
