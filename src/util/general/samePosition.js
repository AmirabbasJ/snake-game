function samePosition(obj1, obj2) {
  const sameX = obj1.x === obj2.x;
  const sameY = obj1.y === obj2.y;
  return sameX && sameY;
}
export { samePosition };
