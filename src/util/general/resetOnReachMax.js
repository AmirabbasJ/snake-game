function resetOnReachOverflow(num, { max, min }) {
  if (num < min) return max;
  if (num > max) return min;
  return num;
}
export { resetOnReachOverflow };
