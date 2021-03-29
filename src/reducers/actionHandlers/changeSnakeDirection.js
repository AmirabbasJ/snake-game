import { isBackwardDirection } from '../../util/general';

function changeSnakeDirection(state, action) {
  const { moves } = state;
  const { direction } = action;
  const [prevMove] = moves;
  const newMoves = [...moves];
  const isNextMoveBackwardDirection = isBackwardDirection(direction, prevMove);
  if (!isNextMoveBackwardDirection) {
    newMoves.push(direction);
  }

  return { ...state, moves: newMoves };
}

export default changeSnakeDirection;
