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
    const keydownHanlder = (event) => {
      const direction = directionKeyMaps[event.key];
      if (direction) {
        dispatch({ type: CHANGE_SNAKE_DIRECTION, direction });
      }
    };
    window.addEventListener('keydown', keydownHanlder);

    return () => window.removeEventListener('keydown', keydownHanlder);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('moving');
      dispatch({ type: MOVE_SNAKE });
    }, 100);

    return () => clearInterval(interval);
  }, [snakeInfo.speed]);

  return snakeInfo;
}
