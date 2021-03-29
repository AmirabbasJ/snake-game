import changeSnakeDirection from './actionHandlers/changeSnakeDirection';
import moveSnake from './actionHandlers/moveSnake';
import * as actions from './actions/snakeActions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.MOVE_SNAKE:
      return moveSnake(state, action);
    case actions.CHANGE_SNAKE_DIRECTION:
      return changeSnakeDirection(state, action);
    default:
      throw new Error();
  }
};

export default reducer;
