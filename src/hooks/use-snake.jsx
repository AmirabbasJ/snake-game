import { useReducer, useEffect } from 'react';
import { snakeInitState } from '../data/snakeInitState';
import { directionKeyMaps } from '../data/directionKeyMaps';
import {
  CHANGE_SNAKE_DIRECTION,
  MOVE_SNAKE,
} from '../reducers/actions/snakeActions';
import reducer from '../reducers/snakeReducer';

export default function useSnake() {
  const [snakeInfo, dispatch] = useReducer(reducer, snakeInitState);
  useEffect(() => {
    const keydownHandler = (event) => {
      const direction = directionKeyMaps[event.key];
      if (direction) {
        dispatch({ type: CHANGE_SNAKE_DIRECTION, direction });
      }
    };

    let xDown = null;
    let yDown = null;

    function handleTouchStart(evt) {
      const firstTouch = evt.touches[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      const xUp = evt.touches[0].clientX;
      const yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        const move = xDiff > 0 ? 'a' : 'd';
        const direction = directionKeyMaps[move];
        if (direction) {
          dispatch({ type: CHANGE_SNAKE_DIRECTION, direction });
        }
      } else {
        const move = yDiff > 0 ? 'w' : 's';
        const direction = directionKeyMaps[move];
        if (direction) {
          dispatch({ type: CHANGE_SNAKE_DIRECTION, direction });
        }
      }
      xDown = null;
      yDown = null;
    }
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('keydown', keydownHandler);

    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: MOVE_SNAKE });
    }, snakeInfo.speed);

    if (snakeInfo.state === 'dead') clearInterval(interval);
    return () => clearInterval(interval);
  }, [snakeInfo.speed, snakeInfo.state]);

  return snakeInfo;
}
