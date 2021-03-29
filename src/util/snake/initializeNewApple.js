import { getRandomNumber } from '../../util/general';

function initializeNewApple({ rows, cols }) {
  const randomX = getRandomNumber(0, cols);
  const randomY = getRandomNumber(0, rows);
  return { x: randomX, y: randomY };
}
export { initializeNewApple };
